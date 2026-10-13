import { LessonExerciseSet } from "@/types/exercise";
import { nailsShapeExerciseSet } from "./nails-hoi-khach-shape";
import { pharmacyLayThuocExerciseSet } from "./pharmacy-lay-thuoc";
import { grammarRule001ExerciseSet } from "./grammar-rule-001";
import { airportBatchExerciseSet } from "./airport-batch-2026-10";
import { pharmacyBatchExerciseSet } from "./pharmacy-batch-2026-10";
import { nailsBatchExerciseSet } from "./nails-batch-2026-10";

/**
 * Pilot registry — 3 lessons only (see the "INITIAL PILOT ONLY" scope in
 * the interactive-exercise feature request). A real rollout would likely
 * move this to per-topic files like `src/data/lessons/`, not one lookup
 * object; kept simple here since it only needs to hold 3 entries for now.
 */
export const exerciseSets: Record<string, LessonExerciseSet> = {
  [nailsShapeExerciseSet.lessonId]: nailsShapeExerciseSet,
  [pharmacyLayThuocExerciseSet.lessonId]: pharmacyLayThuocExerciseSet,
  [grammarRule001ExerciseSet.lessonId]: grammarRule001ExerciseSet,
  [airportBatchExerciseSet.lessonId]: airportBatchExerciseSet,
  [pharmacyBatchExerciseSet.lessonId]: pharmacyBatchExerciseSet,
  [nailsBatchExerciseSet.lessonId]: nailsBatchExerciseSet,
};

export function getExerciseSet(lessonId: string): LessonExerciseSet | undefined {
  return exerciseSets[lessonId];
}
