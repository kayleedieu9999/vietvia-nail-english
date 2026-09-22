"use client";

import { useSyncExternalStore } from "react";
import { Story } from "@/types/story";

/**
 * Local-only progress for "Story dài" — same localStorage +
 * useSyncExternalStore pattern as `progress.ts` / `grammarProgress.ts` /
 * `collectionProgress.ts`. Tracks per-section comprehension + reaction
 * results so a story can resume mid-way and missed sections can feed a
 * review list, without a second disconnected engine.
 */

const STORAGE_KEY = "vietvia:storyProgress:v1";

export interface SectionResult {
  comprehensionCorrect: boolean;
  reactionDone: boolean;
}

export interface StoryProgressEntry {
  currentSectionIndex: number;
  sections: Record<string, SectionResult>;
  startedAt: string;
  completedAt?: string;
}

type StoreState = Record<string, StoryProgressEntry>;

const EMPTY_STATE: StoreState = {};

let cached: StoreState | null = null;
const listeners = new Set<() => void>();

function readFromStorage(): StoreState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    return JSON.parse(raw) as StoreState;
  } catch {
    return EMPTY_STATE;
  }
}

function getState(): StoreState {
  if (!cached) cached = readFromStorage();
  return cached;
}

function setState(next: StoreState): void {
  cached = next;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Storage unavailable (private mode, quota, etc.) — silently no-op.
    }
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Subscribes a component to ALL story progress (used by the library's "Tiếp tục Story" banner and the stats row). */
export function useAllStoryProgress(): StoreState {
  return useSyncExternalStore(subscribe, getState, () => EMPTY_STATE);
}

export function getStoryProgressSnapshot(storyId: string): StoryProgressEntry | undefined {
  return getState()[storyId];
}

export function startStory(storyId: string): void {
  const current = getState();
  if (current[storyId]) return;
  setState({
    ...current,
    [storyId]: { currentSectionIndex: 0, sections: {}, startedAt: new Date().toISOString() },
  });
}

export function recordSectionResult(
  storyId: string,
  sectionId: string,
  result: Partial<SectionResult>,
): void {
  const current = getState();
  const entry = current[storyId] ?? {
    currentSectionIndex: 0,
    sections: {},
    startedAt: new Date().toISOString(),
  };
  const existing = entry.sections[sectionId] ?? { comprehensionCorrect: false, reactionDone: false };
  setState({
    ...current,
    [storyId]: {
      ...entry,
      sections: { ...entry.sections, [sectionId]: { ...existing, ...result } },
    },
  });
}

export function setCurrentSectionIndex(storyId: string, index: number): void {
  const current = getState();
  const entry = current[storyId];
  if (!entry) return;
  setState({ ...current, [storyId]: { ...entry, currentSectionIndex: index } });
}

export function completeStory(storyId: string): void {
  const current = getState();
  const entry = current[storyId];
  if (!entry) return;
  setState({ ...current, [storyId]: { ...entry, completedAt: new Date().toISOString() } });
}

export interface OverallStoryStats {
  storiesStarted: number;
  storiesCompleted: number;
  /** Estimated (sections done / total sections) × story length — no wall-clock tracking exists. */
  estimatedMinutesListened: number;
  comprehensionAnswered: number;
  comprehensionCorrect: number;
  reactionsDone: number;
}

/** Real totals across every story, for the "Story dài" tab stats row — nothing fabricated. */
export function computeOverallStoryStats(stories: Story[], state: StoreState): OverallStoryStats {
  let storiesStarted = 0;
  let storiesCompleted = 0;
  let estimatedMinutesListened = 0;
  let comprehensionAnswered = 0;
  let comprehensionCorrect = 0;
  let reactionsDone = 0;

  for (const story of stories) {
    const entry = state[story.id];
    if (!entry) continue;
    storiesStarted += 1;
    if (entry.completedAt) storiesCompleted += 1;

    const sectionResults = Object.values(entry.sections);
    const doneCount = sectionResults.length;
    estimatedMinutesListened += (doneCount / story.sections.length) * story.estimatedMinutes;

    for (const result of sectionResults) {
      comprehensionAnswered += 1;
      if (result.comprehensionCorrect) comprehensionCorrect += 1;
      if (result.reactionDone) reactionsDone += 1;
    }
  }

  return {
    storiesStarted,
    storiesCompleted,
    estimatedMinutesListened: Math.round(estimatedMinutesListened),
    comprehensionAnswered,
    comprehensionCorrect,
    reactionsDone,
  };
}

/** Section ids the learner answered wrong — feeds "Câu cần ôn lại" for a given story. */
export function getReviewSectionIds(story: Story, entry: StoryProgressEntry | undefined): string[] {
  if (!entry) return [];
  return story.sections
    .filter((section) => entry.sections[section.id]?.comprehensionCorrect === false)
    .map((section) => section.id);
}
