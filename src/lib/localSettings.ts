"use client";

import { useSyncExternalStore } from "react";

/**
 * On-device preferences — same localStorage + useSyncExternalStore pattern
 * as `progress.ts` / `sidebarState.ts`. The website has no account system
 * (no login, no server-stored profile), so these are deliberately local-only
 * and honestly scoped: a display nickname, a daily practice goal, and a
 * text-size preference — nothing that pretends to be a real user account.
 */

const STORAGE_KEY = "vietvia:settings:v1";

export const DEFAULT_DISPLAY_NAME = "Học viên VietVia";
export const DEFAULT_DAILY_GOAL_MINUTES = 10;
export type TextScale = "sm" | "md" | "lg";
export const DEFAULT_TEXT_SCALE: TextScale = "md";

export interface LocalSettings {
  displayName: string;
  dailyGoalMinutes: number;
  textScale: TextScale;
}

const DEFAULT_SETTINGS: LocalSettings = {
  displayName: DEFAULT_DISPLAY_NAME,
  dailyGoalMinutes: DEFAULT_DAILY_GOAL_MINUTES,
  textScale: DEFAULT_TEXT_SCALE,
};

let cached: LocalSettings | null = null;
const listeners = new Set<() => void>();

function readFromStorage(): LocalSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<LocalSettings>;
    return {
      displayName: parsed.displayName?.trim() || DEFAULT_DISPLAY_NAME,
      dailyGoalMinutes:
        typeof parsed.dailyGoalMinutes === "number" && parsed.dailyGoalMinutes > 0
          ? parsed.dailyGoalMinutes
          : DEFAULT_DAILY_GOAL_MINUTES,
      textScale: parsed.textScale ?? DEFAULT_TEXT_SCALE,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function getState(): LocalSettings {
  if (!cached) cached = readFromStorage();
  return cached;
}

function setState(next: LocalSettings): void {
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

export function useLocalSettings(): LocalSettings {
  return useSyncExternalStore(subscribe, getState, () => DEFAULT_SETTINGS);
}

export function setDisplayName(name: string): void {
  const trimmed = name.trim();
  setState({ ...getState(), displayName: trimmed || DEFAULT_DISPLAY_NAME });
}

export function setDailyGoalMinutes(minutes: number): void {
  if (!Number.isFinite(minutes) || minutes <= 0) return;
  setState({ ...getState(), dailyGoalMinutes: Math.round(minutes) });
}

export function setTextScale(scale: TextScale): void {
  setState({ ...getState(), textScale: scale });
}
