"use client";

import { useSyncExternalStore } from "react";
import { useProgress } from "./progress";
import { useGrammarProgress } from "./grammarProgress";
import { computeStreak } from "./streak";

/**
 * The notification bell's content — every item here is computed live from
 * data the app already tracks (lesson progress, grammar review queue,
 * streak) rather than a fabricated feed. Only "read" state is persisted
 * (same localStorage + useSyncExternalStore pattern as the other stores).
 * A dated id (e.g. the daily-practice reminder) naturally "resets" each day
 * since yesterday's id simply stops being generated.
 */

const STORAGE_KEY = "vietvia:notificationsRead:v1";

let cachedRead: Set<string> | null = null;
const listeners = new Set<() => void>();
const EMPTY_SET: Set<string> = new Set();

function readFromStorage(): Set<string> {
  if (typeof window === "undefined") return EMPTY_SET;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_SET;
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return EMPTY_SET;
  }
}

function getState(): Set<string> {
  if (!cachedRead) cachedRead = readFromStorage();
  return cachedRead;
}

function setState(next: Set<string>): void {
  cachedRead = next;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
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

export function markRead(id: string): void {
  const current = getState();
  if (current.has(id)) return;
  setState(new Set(current).add(id));
}

export function markAllRead(ids: string[]): void {
  const current = getState();
  const next = new Set(current);
  ids.forEach((id) => next.add(id));
  setState(next);
}

function useReadIds(): Set<string> {
  return useSyncExternalStore(subscribe, getState, () => EMPTY_SET);
}

export interface NotificationItem {
  id: string;
  icon: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  read: boolean;
}

/** Real, permanent id — the 50 new lessons are a real, one-time addition, not a recurring fake announcement. */
const NEW_CONTENT_ID = "new-content-nail-convo-50";

export function useNotifications(): { items: NotificationItem[]; unreadCount: number } {
  const progress = useProgress();
  const grammarProgress = useGrammarProgress();
  const readIds = useReadIds();

  const { streakDays, completedToday } = computeStreak(progress.lessons);
  const reviewCount = Object.values(grammarProgress).filter((p) => p.quizCorrect === false).length;
  const lastSlug = progress.lastOpenedLessonSlug;

  const todayKey = new Date().toDateString();
  const items: Omit<NotificationItem, "read">[] = [];

  if (completedToday === 0) {
    items.push({
      id: `daily-reminder-${todayKey}`,
      icon: "⏰",
      title: "Hôm nay bạn chưa luyện",
      body: "Chỉ cần 10 phút để giữ chuỗi ngày luyện.",
      cta: "Luyện ngay",
      href: "/daily",
    });
  }

  if (reviewCount > 0) {
    items.push({
      id: "review-reminder",
      icon: "🔁",
      title: `Bạn có ${reviewCount} câu cần ôn lại`,
      body: "Ôn lại để nhớ lâu hơn nhé.",
      cta: "Ôn ngay",
      href: "/lo-trinh/ngu-phap",
    });
  }

  if (lastSlug) {
    items.push({
      id: `continue-lesson-${lastSlug}`,
      icon: "▶️",
      title: "Bạn còn một bài đang luyện dở",
      body: "Tiếp tục để hoàn thành bài học nhé.",
      cta: "Tiếp tục",
      href: `/lesson/${lastSlug}`,
    });
  }

  items.push({
    id: NEW_CONTENT_ID,
    icon: "💅",
    title: "Có 50 bài hội thoại Nails mới",
    body: "Luyện thêm nhiều tình huống thực tế trong tiệm nails.",
    cta: "Xem bài mới",
    href: "/topic/nail-general",
  });

  if (streakDays > 0 && streakDays % 5 === 0) {
    items.push({
      id: `streak-milestone-${streakDays}`,
      icon: "🔥",
      title: `Bạn đã luyện ${streakDays} ngày liên tiếp!`,
      body: "Tiếp tục phát huy nhé.",
      cta: "Xem tiến độ",
      href: "/results",
    });
  }

  const withRead = items.map((n) => ({ ...n, read: readIds.has(n.id) }));
  const unreadCount = withRead.filter((n) => !n.read).length;
  return { items: withRead, unreadCount };
}
