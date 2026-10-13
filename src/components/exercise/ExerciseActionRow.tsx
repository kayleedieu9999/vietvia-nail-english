"use client";

import { setItemState } from "@/lib/collectionProgress";

/** Shared bucket for every interactive-exercise pilot (Nails, Pharmacy, Grammar, ...) — same store as "nails-speaking"/"daily-speaking", not a new one. */
export const EXERCISE_REVIEW_KEY = "lesson-exercises";

interface ExerciseActionRowProps {
  exerciseId: string;
  onMarkedReview?: () => void;
  onAdvance: () => void;
  isLast: boolean;
  /** Extra content (e.g. a retry button) rendered before the review/advance controls. */
  children?: React.ReactNode;
}

/** "Cần ôn lại" / "Đã nhớ" / "Câu tiếp theo" — identical across every exercise type, reusing the existing shared review store. */
export default function ExerciseActionRow({
  exerciseId,
  onMarkedReview,
  onAdvance,
  isLast,
  children,
}: ExerciseActionRowProps) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {children}
      <button
        type="button"
        onClick={() => {
          setItemState(EXERCISE_REVIEW_KEY, exerciseId, "review");
          onMarkedReview?.();
        }}
        className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-bold text-rose-600"
      >
        Cần ôn lại
      </button>
      <button
        type="button"
        onClick={() => setItemState(EXERCISE_REVIEW_KEY, exerciseId, "mastered")}
        className="rounded-xl bg-emerald-500 px-3.5 py-2.5 text-xs font-bold text-white"
      >
        Đã nhớ
      </button>
      <button type="button" onClick={onAdvance} className="ml-auto text-sm font-bold text-rose-500">
        {isLast ? "Hoàn thành →" : "Câu tiếp theo →"}
      </button>
    </div>
  );
}
