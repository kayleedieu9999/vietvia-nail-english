import { Lesson, Question } from "@/types/content";
import { vietnameseFoodLesson } from "@/data/lessons/vietnamese-food";
import { smallTalkLesson } from "@/data/lessons/small-talk";
import { nailColorLesson } from "@/data/lessons/nail-color";
import { pedicureLesson } from "@/data/lessons/pedicure";
import { customerRequestsLesson } from "@/data/lessons/customer-requests";
import { nailGeneralLessons } from "@/data/lessons/nail-general";

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
