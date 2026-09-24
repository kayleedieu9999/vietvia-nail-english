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

/**
 * "Luyện nói" only samples `conversation_response` questions — the only
 * question shape with a real English line for another person to "say" and a
 * set of natural ways to respond to it (`prompt`/`promptVietnamese` +
 * `choices`), which is what the real-speaking flow needs. Every other type
 * (fill-in-the-blank, true/false, matching, ...) is a translation/
 * comprehension drill with no one to "respond to", so forcing it into a
 * speaking turn would be dishonest. ~1800 conversation_response questions
 * exist across every topic (Nails, Airport, DMV, Citizenship, Emergency,
 * Daily life, Listening), so this still samples broadly, not just Nails.
 */
export function buildDailyRound(count: number = DAILY_QUESTION_COUNT): RoundQuestion[] {
  const pool = getAllQuestions().filter(({ question }) => question.type === "conversation_response");
  const picked = shuffle(pool).slice(0, count);
  return picked.map(({ lesson, question }) => ({
    ...question,
    shuffledChoices: shuffle(question.choices),
    sourceLessonSlug: lesson.slug,
    sourceLessonTitle: lesson.title,
    sourceTopicId: lesson.topicId,
  }));
}
