import { shuffle } from "@/lib/shuffle";
import { Lesson, Question } from "@/types/content";

/**
 * Client-safe: this file must never import `@/data/lessons` (the full
 * question dataset). It's imported by the "use client" LessonPlayer, so any
 * heavy import here ships to every visitor's browser. Daily Practice's
 * question selection (which needs the full dataset) lives server-side in
 * `@/lib/daily-round` instead — see that file and `/api/daily`.
 */

export interface RoundQuestion extends Question {
  shuffledChoices: Question["choices"];
  /** Which lesson this question belongs to — needed for the "Bài tiếp theo" flow after a daily round. */
  sourceLessonSlug: string;
  sourceLessonTitle: string;
}

/** Builds a run of every question in a lesson, in original order, with choices shuffled. */
export function buildLessonRound(lesson: Lesson): RoundQuestion[] {
  return lesson.questions.map((question) => ({
    ...question,
    shuffledChoices: shuffle(question.choices),
    sourceLessonSlug: lesson.slug,
    sourceLessonTitle: lesson.title,
  }));
}

export interface ScoreResult {
  passed: boolean;
  percentage: number;
  message: string;
}

/**
 * Short rounds (5 questions, like Daily 5) need a stricter bar since one
 * miss already swings the percentage a lot — 4/5 or better counts as HAPPY.
 * Longer lessons use a graded 4-tier message by percentage.
 */
export function getScoreResult(score: number, total: number): ScoreResult {
  if (total <= 0) {
    return { passed: false, percentage: 0, message: "" };
  }
  const percentage = score / total;
  const passed = total <= 5 ? score >= Math.min(4, total) : percentage >= 0.6;

  let message: string;
  if (percentage >= 0.8) {
    message = "Xuất sắc! Bạn nắm rất chắc bài này. Cứ luyện đều mỗi ngày nhé!";
  } else if (percentage >= 0.6) {
    message = "Làm tốt lắm! Bạn đã hiểu khá nhiều câu trong bài này.";
  } else if (percentage >= 0.4) {
    message = "Bạn đang tiến bộ. Luyện thêm một chút nữa là sẽ nhớ chắc hơn.";
  } else {
    message = "Chưa sao đâu. Thử lại một lần nữa nhé. Mỗi lần luyện sẽ giúp bạn nhớ lâu hơn.";
  }

  return { passed, percentage, message };
}
