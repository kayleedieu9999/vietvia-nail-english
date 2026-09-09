"use client";

import { useSyncExternalStore } from "react";

/**
 * Local-only progress tracking (no account, no backend). Every read/write is
 * guarded so a private browsing mode or blocked storage never breaks the app.
 */

const STORAGE_KEY = "vietvia:progress:v1";

export interface LessonProgress {
  bestScore: number;
  bestTotal: number;
  lastPlayedAt: string;
  timesCompleted: number;
}

interface ProgressState {
  lessons: Record<string, LessonProgress>;
  lastOpenedLessonSlug?: string;
}

const EMPTY_STATE: ProgressState = { lessons: {} };

let cachedState: ProgressState | null = null;
const listeners = new Set<() => void>();

function readFromStorage(): ProgressState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return { lessons: parsed.lessons ?? {}, lastOpenedLessonSlug: parsed.lastOpenedLessonSlug };
  } catch {
    return EMPTY_STATE;
  }
}

function getState(): ProgressState {
  if (!cachedState) cachedState = readFromStorage();
  return cachedState;
}

function setState(state: ProgressState): void {
  cachedState = state;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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

/** Subscribes a component to local progress state, re-rendering it whenever a lesson is completed or opened. */
export function useProgress(): ProgressState {
  return useSyncExternalStore(subscribe, getState, () => EMPTY_STATE);
}

export function getLessonProgress(lessonSlug: string): LessonProgress | undefined {
  return getState().lessons[lessonSlug];
}

export function recordLessonCompletion(lessonSlug: string, score: number, total: number): void {
  const current = getState();
  const existing = current.lessons[lessonSlug];
  setState({
    lessons: {
      ...current.lessons,
      [lessonSlug]: {
        bestScore: Math.max(existing?.bestScore ?? 0, score),
        bestTotal: total,
        lastPlayedAt: new Date().toISOString(),
        timesCompleted: (existing?.timesCompleted ?? 0) + 1,
      },
    },
    lastOpenedLessonSlug: lessonSlug,
  });
}

export function setLastOpenedLesson(lessonSlug: string): void {
  const current = getState();
  if (current.lastOpenedLessonSlug === lessonSlug) return;
  setState({ ...current, lastOpenedLessonSlug: lessonSlug });
}

export function getAllProgress(): Record<string, LessonProgress> {
  return getState().lessons;
}
