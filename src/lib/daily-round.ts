import { shuffle } from "@/lib/shuffle";
import { getAllQuestions } from "@/data/lessons";
import { RoundQuestion } from "@/lib/lesson-engine";

/**
 * SERVER-ONLY. This imports the full lesson dataset (all topics, thousands
 * of questions) — call it only from Server Components or Route Handlers
 * (`/app/daily/page.tsx`, `/app/api/daily/route.ts`), never from a "use
 * client" file, or that entire dataset ships to the browser.
 */

const DAILY_QUESTION_COUNT = 5;

/** Builds "5 câu hôm nay" by sampling random questions from across every lesson on the site (no duplicates within a round, since it's a shuffle-then-slice). */
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
