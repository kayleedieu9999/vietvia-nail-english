import { Lesson, LessonSummary, Question } from "@/types/content";
import { vietnameseFoodLesson } from "@/data/lessons/vietnamese-food";
import { nailsBatDauLessons } from "@/data/lessons/nails-bat-dau";
import { nailsDichVuLessons } from "@/data/lessons/nails-dich-vu";
import { nailsMauDesignLessons } from "@/data/lessons/nails-mau-design";
import { nailsXuLyTinhHuongLessons } from "@/data/lessons/nails-xu-ly-tinh-huong";
import { nailsPedicureLessons } from "@/data/lessons/nails-pedicure";
import { nailsSmallTalkLessons } from "@/data/lessons/nails-small-talk";
import { nailsThanhToanLessons } from "@/data/lessons/nails-thanh-toan";
import { dailyEnglishLessons } from "@/data/lessons/daily-english";
import { airportLessons } from "@/data/lessons/airport";
import { emergencyLessons } from "@/data/lessons/emergency";
import { dmvLessons } from "@/data/lessons/dmv";
import { citizenshipLessons } from "@/data/lessons/citizenship";
import { listeningLessons } from "@/data/lessons/listening";
import { pronunciationLessons } from "@/data/lessons/pronunciation";

/**
 * Every lesson on the site. To add a new lesson: write a new file in
 * `src/data/lessons/`, export a `Lesson`, and add it to this array — no UI
 * component needs to change.
 */
export const allLessons: Lesson[] = [
  vietnameseFoodLesson,
  ...nailsBatDauLessons,
  ...nailsDichVuLessons,
  ...nailsMauDesignLessons,
  ...nailsXuLyTinhHuongLessons,
  ...nailsPedicureLessons,
  ...nailsSmallTalkLessons,
  ...nailsThanhToanLessons,
  ...dailyEnglishLessons,
  ...airportLessons,
  ...emergencyLessons,
  ...dmvLessons,
  ...citizenshipLessons,
  ...listeningLessons,
  ...pronunciationLessons,
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
