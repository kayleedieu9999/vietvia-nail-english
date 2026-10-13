import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getExerciseSet } from "@/data/exercises";
import LessonPracticePage from "@/components/exercise/LessonPracticePage";

interface PageProps {
  params: Promise<{ ruleId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ruleId } = await params;
  const set = getExerciseSet(ruleId);
  if (!set) return {};
  return { title: `Luyện tập: ${set.lessonTitle} - VietVia English Practice` };
}

/** PILOT route (Grammar) — see src/data/exercises/index.ts for scope. */
export default async function GrammarPracticeRoute({ params }: PageProps) {
  const { ruleId } = await params;
  const set = getExerciseSet(ruleId);
  if (!set) notFound();

  return <LessonPracticePage set={set} />;
}
