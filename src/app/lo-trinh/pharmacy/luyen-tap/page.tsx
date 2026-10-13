import type { Metadata } from "next";
import { pharmacyLayThuocExerciseSet } from "@/data/exercises/pharmacy-lay-thuoc";
import LessonPracticePage from "@/components/exercise/LessonPracticePage";

export const metadata: Metadata = {
  title: `Luyện tập: ${pharmacyLayThuocExerciseSet.lessonTitle} - VietVia English Practice`,
};

/** PILOT route (Pharmacy) — see src/data/exercises/index.ts for scope. */
export default function PharmacyPracticeRoute() {
  return <LessonPracticePage set={pharmacyLayThuocExerciseSet} />;
}
