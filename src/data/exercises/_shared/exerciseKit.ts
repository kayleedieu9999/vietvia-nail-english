import { ExerciseOption } from "@/types/exercise";

const IDS = ["a", "b", "c", "d"];

/**
 * Builds exercise options with the correct answer placed at `correctIndex`
 * (0-based). The author picks the slot per exercise so correct answers are
 * spread across A/B/C instead of always being "A"; the distribution is
 * checked by scripts/check-batch-duplicates.ts-adjacent QA (see
 * scripts/check-exercise-positions.ts).
 */
export function placeChoices(
  correct: string,
  wrong: string[],
  correctIndex: number,
): { options: ExerciseOption[]; correctOptionId: string } {
  const texts = [...wrong];
  texts.splice(correctIndex, 0, correct);
  return {
    options: texts.map((text, i) => ({ id: IDS[i], text })),
    correctOptionId: IDS[correctIndex],
  };
}
