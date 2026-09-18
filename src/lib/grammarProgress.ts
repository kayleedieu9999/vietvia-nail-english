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
      },
    },
  });
}
