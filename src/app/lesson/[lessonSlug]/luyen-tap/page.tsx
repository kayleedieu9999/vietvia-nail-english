import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getExerciseSet } from "@/data/exercises";
import LessonPracticePage from "@/components/exercise/LessonPracticePage";

interface PageProps {
  params: Promise<{ lessonSlug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonSlug } = await params;
  const set = getExerciseSet(lessonSlug);
  if (!set) return {};
  return { title: `Luyện tập: ${set.lessonTitle} - VietVia English Practice` };
}

/**
 * PILOT route — only lessons registered in src/data/exercises/index.ts have
 * a practice set right now (see that file's "INITIAL PILOT ONLY" note).
 */
export default async function LessonPracticeRoute({ params }: PageProps) {
  const { lessonSlug } = await params;
  const set = getExerciseSet(lessonSlug);
  if (!set) notFound();

  return <LessonPracticePage set={set} />;
}
