"use client";

import { useSyncExternalStore } from "react";

/**
 * Local-only progress for the 100-grammar-rules program — same
 * useSyncExternalStore + localStorage pattern as `src/lib/progress.ts`
 * (kept as a separate key/store rather than folded into it, since rule
 * progress needs a `quizCorrect` field the lesson-quiz model has no use
 * for, and the two tracks are browsed independently).
 */

const STORAGE_KEY = "vietvia:grammarProgress:v1";

export interface RuleProgress {
  completed: boolean;
  /** null = quiz not answered yet. */
  quizCorrect: boolean | null;
  attempts: number;
  lastOpenedAt: string;
  completedAt?: string;
  /**
   * Explicit "Cần ôn lại"/"Đã nhớ" toggle from the speaking-practice section,
   * independent of the THỬ NGAY quiz result. When set, this is the source of
   * truth for review state; when absent, review state falls back to
   * `quizCorrect === false` (see `isRuleNeedsReview`).
   */
  reviewOverride?: "review" | "mastered";
}

interface GrammarProgressState {
  rules: Record<string, RuleProgress>;
}

const EMPTY_STATE: GrammarProgressState = { rules: {} };

let cachedState: GrammarProgressState | null = null;
const listeners = new Set<() => void>();

function readFromStorage(): GrammarProgressState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    const parsed = JSON.parse(raw) as Partial<GrammarProgressState>;
    return { rules: parsed.rules ?? {} };
  } catch {
    return EMPTY_STATE;
  }
}

function getState(): GrammarProgressState {
  if (!cachedState) cachedState = readFromStorage();
  return cachedState;
}

function setState(state: GrammarProgressState): void {
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

/** Subscribes a component to grammar progress, re-rendering on every rule open/completion. */
export function useGrammarProgress(): Record<string, RuleProgress> {
  return useSyncExternalStore(subscribe, () => getState().rules, () => EMPTY_STATE.rules);
}

export function getGrammarProgressSnapshot(): Record<string, RuleProgress> {
  return getState().rules;
}

/** Clears all locally-stored grammar-rule progress (Settings → "Xóa dữ liệu luyện tập"). Cannot be undone. */
export function resetGrammarProgress(): void {
  setState(EMPTY_STATE);
}

export function recordRuleOpened(ruleId: string): void {
  const current = getState();
  const existing = current.rules[ruleId];
  setState({
    rules: {
      ...current.rules,
      [ruleId]: {
        completed: existing?.completed ?? false,
        quizCorrect: existing?.quizCorrect ?? null,
        attempts: existing?.attempts ?? 0,
        lastOpenedAt: new Date().toISOString(),
        completedAt: existing?.completedAt,
        reviewOverride: existing?.reviewOverride,
      },
    },
  });
}

/** Marks a rule finished ("Tiếp tục" pressed) and records whether the THỬ NGAY quiz was answered correctly (null = not answered). */
export function recordRuleCompletion(ruleId: string, quizCorrect: boolean | null): void {
  const current = getState();
  const existing = current.rules[ruleId];
  setState({
    rules: {
      ...current.rules,
      [ruleId]: {
        completed: true,
        quizCorrect,
        attempts: (existing?.attempts ?? 0) + 1,
        lastOpenedAt: existing?.lastOpenedAt ?? new Date().toISOString(),
        completedAt: existing?.completedAt ?? new Date().toISOString(),
        reviewOverride: existing?.reviewOverride,
      },
    },
  });
}

/** Explicit "Cần ôn lại"/"Đã nhớ" toggle — upserts, so repeated clicks never create duplicate records. */
export function setRuleReviewOverride(ruleId: string, state: "review" | "mastered"): void {
  const current = getState();
  const existing = current.rules[ruleId];
  setState({
    rules: {
      ...current.rules,
      [ruleId]: {
        completed: existing?.completed ?? false,
        quizCorrect: existing?.quizCorrect ?? null,
        attempts: existing?.attempts ?? 0,
        lastOpenedAt: existing?.lastOpenedAt ?? new Date().toISOString(),
        completedAt: existing?.completedAt,
        reviewOverride: state,
      },
    },
  });
}

/** True if a rule should currently appear in the review queue: an explicit override wins over the quiz-inferred default. */
export function isRuleNeedsReview(progress: RuleProgress | undefined): boolean {
  if (!progress) return false;
  if (progress.reviewOverride) return progress.reviewOverride === "review";
  return progress.quizCorrect === false;
}
