"use client";

import { useState } from "react";
import Image from "next/image";
import { Exercise } from "@/types/exercise";
import ExerciseFeedback from "./ExerciseFeedback";
import ExerciseActionRow from "./ExerciseActionRow";

const OPTION_LABELS = ["A", "B", "C", "D"];

interface ImageQuizExerciseProps {
  exercise: Exercise;
  onAnswered: (correct: boolean) => void;
  onMarkedReview: () => void;
  onAdvance: () => void;
  isLast: boolean;
}

/** A realistic photo + question — used only where the visual genuinely helps answer the question. */
export default function ImageQuizExercise({
  exercise,
  onAnswered,
  onMarkedReview,
  onAdvance,
  isLast,
}: ImageQuizExerciseProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const hasAnswered = selectedId !== null;
  const isCorrect = selectedId === exercise.correctOptionId;

  function handleSelect(id: string) {
    if (selectedId !== null) return;
    setSelectedId(id);
    onAnswered(id === exercise.correctOptionId);
  }

  return (
    <div className="card-surface">
      {exercise.image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-rose-100">
          <Image
            src={exercise.image}
            alt={exercise.imageAlt ?? exercise.question ?? exercise.prompt ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 480px) 100vw, 420px"
          />
        </div>
      )}

      {exercise.question && <p className="mt-4 mb-3 text-lg font-bold leading-snug text-slate-900">{exercise.question}</p>}

      <div className="space-y-3">
        {(exercise.options ?? []).map((option, index) => {
          const isSelected = selectedId === option.id;
          const isThisCorrect = option.id === exercise.correctOptionId;
          let stateClasses = "border-slate-200 bg-white text-slate-800 active:scale-[0.98]";
          if (hasAnswered) {
            if (isThisCorrect) stateClasses = "border-emerald-400 bg-emerald-50 text-emerald-800";
            else if (isSelected) stateClasses = "border-rose-400 bg-rose-50 text-rose-800";
            else stateClasses = "border-slate-200 bg-white text-slate-400";
          }
          return (
            <button
              key={option.id}
              type="button"
              disabled={hasAnswered}
              onClick={() => handleSelect(option.id)}
              className={`flex w-full items-start gap-3 rounded-2xl border-2 px-4 py-4 text-left text-base font-medium shadow-sm transition ${stateClasses}`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                {OPTION_LABELS[index]}
              </span>
              <span className="pt-0.5">{option.text}</span>
            </button>
          );
        })}
      </div>

      {hasAnswered && (
        <>
          <ExerciseFeedback isCorrect={isCorrect} explanation={exercise.explanation} />
          <ExerciseActionRow
            exerciseId={exercise.id}
            onMarkedReview={onMarkedReview}
            onAdvance={onAdvance}
            isLast={isLast}
          />
        </>
      )}
    </div>
  );
}
