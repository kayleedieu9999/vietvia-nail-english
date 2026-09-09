import { shuffle } from "@/lib/shuffle";
import { Lesson, Question } from "@/types/content";
import { getAllQuestions } from "@/data/lessons";

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

const DAILY_QUESTION_COUNT = 5;

/** Builds "5 câu hôm nay" by pulling random questions from across every lesson on the site. */
export function buildDailyRound(count: number = DAILY_QUESTION_COUNT): RoundQuestion[] {
  const pool = getAllQuestions();
  const picked = shuffle(pool).slice(0, count);
  return picked.map(({ lesson, question }) => ({
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
 * Longer lessons use the general 60% rule.
 */
export function getScoreResult(score: number, total: number): ScoreResult {
  if (total <= 0) {
    return { passed: false, percentage: 0, message: "" };
  }
  const percentage = score / total;
  const passed = total <= 5 ? score >= Math.min(4, total) : percentage >= 0.6;

  const message = passed
    ? "Làm tốt lắm! Bạn đã hiểu khá nhiều câu trong bài này. Cứ luyện một chút mỗi ngày nhé!"
    : "Chưa sao đâu. Thử lại một lần nữa nhé. Mỗi lần luyện sẽ giúp bạn nhớ lâu hơn.";

  return { passed, percentage, message };
}
