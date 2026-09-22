"use client";

import { useSyncExternalStore } from "react";

/**
 * Which sidebar "LỘ TRÌNH" groups (NỀN TẢNG / GIAO TIẾP THỰC TẾ / LUYỆN KỸ
 * NĂNG / QUỐC TỊCH MỸ) are expanded — same localStorage +
 * useSyncExternalStore pattern as `sidebarState.ts`'s collapse toggle.
 * Every group defaults to expanded (undefined/missing key = expanded) so a
 * first-time visitor sees the full roadmap, not a wall of collapsed rows.
 */

const STORAGE_KEY = "vietvia:navGroupsExpanded:v1";

type StoreState = Record<string, boolean>;

let cached: StoreState | null = null;
const listeners = new Set<() => void>();
const EMPTY_STATE: StoreState = {};

function readFromStorage(): StoreState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoreState) : EMPTY_STATE;
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

export function useNavGroupsExpanded(): [StoreState, (groupKey: string, expanded: boolean) => void] {
  const state = useSyncExternalStore(subscribe, getState, () => EMPTY_STATE);
  const setGroupExpanded = (groupKey: string, expanded: boolean) => {
    setState({ ...getState(), [groupKey]: expanded });
  };
  return [state, setGroupExpanded];
}

/** A group is expanded unless the learner has explicitly collapsed it. */
export function isGroupExpanded(state: StoreState, groupKey: string): boolean {
  return state[groupKey] !== false;
}
