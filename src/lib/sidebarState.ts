"use client";

import { useSyncExternalStore } from "react";

/**
 * Desktop sidebar collapse state — same localStorage + useSyncExternalStore
 * pattern as `src/lib/progress.ts`, mirroring the Expo app's `sidebarStore`
 * (one persisted boolean, remembered across visits).
 */

const STORAGE_KEY = "vietvia:sidebarCollapsed:v1";

let cached: boolean | null = null;
const listeners = new Set<() => void>();

function readFromStorage(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function getState(): boolean {
  if (cached === null) cached = readFromStorage();
  return cached;
}

function setState(value: boolean): void {
  cached = value;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
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

export function useSidebarCollapsed(): [boolean, (value: boolean) => void] {
  const collapsed = useSyncExternalStore(subscribe, getState, () => false);
  return [collapsed, setState];
}
