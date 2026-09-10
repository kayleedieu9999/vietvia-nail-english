import { Lesson, LessonSummary, Question } from "@/types/content";
import { vietnameseFoodLesson } from "@/data/lessons/vietnamese-food";
import { smallTalkLesson } from "@/data/lessons/small-talk";
import { nailColorLesson } from "@/data/lessons/nail-color";
import { pedicureLesson } from "@/data/lessons/pedicure";
import { customerRequestsLesson } from "@/data/lessons/customer-requests";
import { nailGeneralLessons } from "@/data/lessons/nail-general";
import { smallTalkMoreLessons } from "@/data/lessons/small-talk-more";
import { customerRequestsMoreLessons } from "@/data/lessons/customer-requests-more";
import { pedicureMoreLessons } from "@/data/lessons/pedicure-more";
import { nailColorMoreLessons } from "@/data/lessons/nail-color-more";
import { unhappyCustomerLessons } from "@/data/lessons/unhappy-customer";
import { handServiceLessons } from "@/data/lessons/hand-service";

/**
 * Every lesson on the site. To add a new lesson: write a new file in
 * `src/data/lessons/`, export a `Lesson`, and add it to this array — no UI
 * component needs to change.
 */
export const allLessons: Lesson[] = [
  vietnameseFoodLesson,
  smallTalkLesson,
  nailColorLesson,
  pedicureLesson,
  customerRequestsLesson,
  ...nailGeneralLessons,
  ...smallTalkMoreLessons,
  ...customerRequestsMoreLessons,
  ...pedicureMoreLessons,
  ...nailColorMoreLessons,
  ...unhappyCustomerLessons,
  ...handServiceLessons,
];

export function getLessonsByTopic(topicId: string): Lesson[] {
  return allLessons.filter((lesson) => lesson.topicId === topicId);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return allLessons.find((lesson) => lesson.slug === slug);
}

export function getAllQuestions(): { lesson: Lesson; question: Question }[] {
  return allLessons.flatMap((lesson) =>
    lesson.questions.map((question) => ({ lesson, question }))
  );
}

function toSummary(lesson: Lesson): LessonSummary {
  return {
    id: lesson.id,
    slug: lesson.slug,
    topicId: lesson.topicId,
    title: lesson.title,
    description: lesson.description,
    level: lesson.level,
    section: lesson.section,
    questionCount: lesson.questions.length,
  };
}

/**
 * Lightweight metadata only (no question text) — this is what's safe to pass
 * into Client Components (topic pages, "continue learning", results).
 * IMPORTANT: this file itself still imports every lesson's full question
 * data, so only call these from Server Components / server-only code
 * (page.tsx, route handlers) — never from a "use client" file, or its heavy
 * transitive imports will end up in the browser bundle.
 */
export function getAllLessonSummaries(): LessonSummary[] {
  return allLessons.map(toSummary);
}

export function getLessonSummariesByTopic(topicId: string): LessonSummary[] {
  return getLessonsByTopic(topicId).map(toSummary);
}
