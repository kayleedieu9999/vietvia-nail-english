import { LessonProgress } from "./progress";

/**
 * Derives "daily streak" / "practiced today" / "this week" stats purely from
 * the existing per-lesson `lastPlayedAt` + `bestTotal` fields (no new
 * storage, no schema change). Nothing here is fabricated: a brand-new
 * visitor with no localStorage progress simply gets zeros everywhere.
 * "Minutes" are always an estimate (0.6 min/question, the same heuristic
 * used for a lesson's own "khoảng N phút" line) since the app doesn't track
 * wall-clock time spent.
 */

export const DAILY_GOAL_LESSONS = 3;
export const DAILY_GOAL_MINUTES = 10;

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

function estimateMinutes(questionCount: number): number {
  return Math.max(3, Math.round(questionCount * 0.6));
}

export interface StreakInfo {
  streakDays: number;
  completedToday: number;
  minutesToday: number;
}

export function computeStreak(lessons: Record<string, LessonProgress>): StreakInfo {
  const playedDays = new Set(
    Object.values(lessons).map((lesson) => new Date(lesson.lastPlayedAt).toDateString()),
  );

  const today = new Date();
  const cursor = new Date(today);
  if (!playedDays.has(cursor.toDateString())) {
    cursor.setDate(cursor.getDate() - 1);
  }

  let streakDays = 0;
  while (playedDays.has(cursor.toDateString())) {
    streakDays += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  const todayKey = today.toDateString();
  const todaysLessons = Object.values(lessons).filter(
    (lesson) => new Date(lesson.lastPlayedAt).toDateString() === todayKey,
  );

  return {
    streakDays,
    completedToday: todaysLessons.length,
    minutesToday: todaysLessons.reduce((sum, lesson) => sum + estimateMinutes(lesson.bestTotal), 0),
  };
}

export interface WeeklySummary {
  streakDays: number;
  lessonsThisWeek: number;
  questionsThisWeek: number;
  estimatedMinutesThisWeek: number;
}

/** Same "practiced in the last 7 days" idea as `computeStreak`, rolled up into totals for a weekly-progress panel. */
export function computeWeeklySummary(lessons: Record<string, LessonProgress>): WeeklySummary {
  const now = Date.now();
  const recent = Object.values(lessons).filter(
    (lesson) => now - new Date(lesson.lastPlayedAt).getTime() <= WEEK_MS,
  );

  const lessonsThisWeek = recent.length;
  const questionsThisWeek = recent.reduce((sum, lesson) => sum + lesson.bestTotal, 0);
  const estimatedMinutesThisWeek = recent.reduce(
    (sum, lesson) => sum + estimateMinutes(lesson.bestTotal),
    0,
  );

  return { streakDays: computeStreak(lessons).streakDays, lessonsThisWeek, questionsThisWeek, estimatedMinutesThisWeek };
}

/** Vietnamese Mon-first weekday labels, matching the streak/weekly-chart row in the reference design. */
export const WEEKDAY_LABELS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

/** Start-of-day Date for the Monday of the current week (Mon-Sun). */
function startOfThisWeek(): Date {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun ... 6 = Sat
  const diffToMonday = day === 0 ? 6 : day - 1;
  const monday = new Date(now);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(monday.getDate() - diffToMonday);
  return monday;
}

/** One entry per weekday (Mon..Sun): whether any lesson was played that day, and how many questions. */
export function computeWeekActivity(
  lessons: Record<string, LessonProgress>,
): { active: boolean; questionCount: number }[] {
  const monday = startOfThisWeek();
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return { active: false, questionCount: 0, key: d.toDateString() };
  });

  for (const lesson of Object.values(lessons)) {
    const key = new Date(lesson.lastPlayedAt).toDateString();
    const day = days.find((d) => d.key === key);
    if (day) {
      day.active = true;
      day.questionCount += lesson.bestTotal;
    }
  }

  return days.map(({ active, questionCount }) => ({ active, questionCount }));
}
