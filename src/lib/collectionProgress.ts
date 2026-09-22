"use client";

import { useSyncExternalStore } from "react";
import { CollectionItem } from "@/types/collection";

/**
 * Local-only progress for the 4 new "Lộ trình" collections (Động từ, Câu
 * nói tự nhiên, Phrasal Verbs, Từ vựng) — same localStorage +
 * useSyncExternalStore pattern as `grammarProgress.ts`, but keyed by
 * `collectionKey/itemId` so one store covers all four instead of
 * duplicating the module four times. "Chưa xem" is the implicit default
 * (no stored entry) rather than a state that gets written.
 */

const STORAGE_KEY = "vietvia:collectionProgress:v1";

export type ItemState = "learning" | "review" | "mastered";
export const STATE_LABELS: Record<ItemState, string> = {
  learning: "Đang luyện",
  review: "Cần ôn lại",
  mastered: "Đã nhớ",
};
export const NEW_LABEL = "Chưa xem";

export interface ItemProgress {
  state: ItemState;
  lastSeenAt: string;
}

interface StoreState {
  /** collectionKey -> itemId -> progress */
  collections: Record<string, Record<string, ItemProgress>>;
}

const EMPTY_STATE: StoreState = { collections: {} };

let cached: StoreState | null = null;
const listeners = new Set<() => void>();

function readFromStorage(): StoreState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    const parsed = JSON.parse(raw) as Partial<StoreState>;
    return { collections: parsed.collections ?? {} };
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

/** Stable empty-object reference for collections with no stored progress yet — a fresh `{}` per render would trip useSyncExternalStore's "getSnapshot should be cached" check. */
const EMPTY_COLLECTION: Record<string, ItemProgress> = {};

/** Subscribes a component to one collection's progress map (itemId -> ItemProgress). */
export function useCollectionProgress(collectionKey: string): Record<string, ItemProgress> {
  return useSyncExternalStore(
    subscribe,
    () => getState().collections[collectionKey] ?? EMPTY_COLLECTION,
    () => EMPTY_COLLECTION,
  );
}

export function setItemState(collectionKey: string, itemId: string, state: ItemState): void {
  const current = getState();
  const forCollection = current.collections[collectionKey] ?? {};
  setState({
    collections: {
      ...current.collections,
      [collectionKey]: {
        ...forCollection,
        [itemId]: { state, lastSeenAt: new Date().toISOString() },
      },
    },
  });
}

/** Marks an item as opened/viewed — only touches state if it's still unseen, so re-viewing a mastered item doesn't demote it. */
export function markItemSeen(collectionKey: string, itemId: string): void {
  const current = getState();
  const forCollection = current.collections[collectionKey] ?? {};
  if (forCollection[itemId]) return;
  setItemState(collectionKey, itemId, "learning");
}

/** Picks up to `count` items for "Ôn nhanh": cần ôn lại first, then đang luyện, then chưa xem — never đã nhớ unless nothing else is left. */
export function pickReviewItems(
  collectionKey: string,
  items: CollectionItem[],
  count = 8,
): CollectionItem[] {
  const progress = getState().collections[collectionKey] ?? {};
  const byState = (state: ItemState | "new") =>
    items.filter((item) => (progress[item.id]?.state ?? "new") === state);

  const ordered = [...byState("review"), ...byState("learning"), ...byState("new"), ...byState("mastered")];
  return ordered.slice(0, count);
}
