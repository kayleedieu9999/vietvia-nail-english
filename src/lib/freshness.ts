"use client";

import { useSyncExternalStore } from "react";

/**
 * Freshness for the "NEW" badge. Content carries a `newUntil` ISO date
 * (YYYY-MM-DD); an item is NEW while today <= newUntil. "Today" is read on
 * the client only — the server snapshot is `null`, so statically-built HTML
 * never bakes in a stale NEW badge and the first client render matches the
 * server (no hydration mismatch).
 */

function todayKey(): string {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

const noopSubscribe = () => () => {};

/** Today's local date as YYYY-MM-DD, or null during SSR / before hydration. */
export function useToday(): string | null {
  return useSyncExternalStore(noopSubscribe, todayKey, () => null);
}

/** Pure check — ISO date strings compare correctly as plain strings. */
export function isFresh(newUntil: string | undefined, today: string | null): boolean {
  return Boolean(newUntil && today && today <= newUntil);
}
