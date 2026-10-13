"use client";

import { ReactNode, useState } from "react";
import { Exercise } from "@/types/exercise";
import { speakEnglish } from "@/lib/tts";
import ExerciseFeedback from "./ExerciseFeedback";
import ExerciseActionRow from "./ExerciseActionRow";

const OPTION_LABELS = ["A", "B", "C", "D", "E"];

function renderBlankSentence(sentence: string): ReactNode {
  const parts = sentence.split("___");
  if (parts.length === 1) return sentence;
  return (
    <>
      {parts[0]}
      <span className="mx-1 inline-block rounded-md bg-rose-100 px-3 py-0.5 text-rose-400">___</span>
      {parts[1]}
    </>
  );
}

interface MultipleChoiceExerciseProps {
  exercise: Exercise;
  onAnswered: (correct: boolean) => void;
  onMarkedReview: () => void;
  onAdvance: () => void;
  isLast: boolean;
}

/**
 * Covers every choice-based exercise type (multiple_choice, listening_choice,
 * fill_blank, true_false, situation_choice) — they're all really the same
 * "pick one option, see if it's right" interaction with a different prompt
 * presentation, so one component instead of five near-duplicates.
 */
export default function MultipleChoiceExercise({
  exercise,
  onAnswered,
  onMarkedReview,
  onAdvance,
  isLast,
}: MultipleChoiceExerciseProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const hasAnswered = selectedId !== null;
  const isCorrect = selectedId === exercise.correctOptionId;
  const isListening = exercise.type === "listening_choice";

  function handleSelect(id: string) {
    if (selectedId !== null) return;
    setSelectedId(id);
    onAnswered(id === exercise.correctOptionId);
  }

  return (
    <div className="card-surface">
      {exercise.speaker && (
        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold tracking-wide text-orange-600">
          {exercise.speaker.toUpperCase()}
        </span>
      )}

      {isListening && !hasAnswered ? (
        <div className="mt-3 flex flex-col items-center gap-3 py-2 text-center">
          <p className="text-sm font-semibold text-slate-500">Bấm nghe rồi chọn đáp án đúng</p>
          <button
            type="button"
            onClick={() => speakEnglish(exercise.audioText ?? exercise.prompt ?? "")}
            className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-3 text-base font-bold text-white transition active:scale-95"
          >
            <span aria-hidden>🔊</span> Play audio
          </button>
        </div>
      ) : (
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <p className="text-xl font-bold leading-snug text-slate-900">
            {exercise.type === "fill_blank" ? renderBlankSentence(exercise.prompt ?? "") : exercise.prompt}
          </p>
          <button
            type="button"
            onClick={() => speakEnglish(exercise.audioText ?? exercise.prompt ?? "")}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-600 transition active:scale-95"
          >
            <span aria-hidden>🔊</span> Nghe
          </button>
        </div>
      )}
      {!isListening && exercise.promptVi && <p className="mt-2 text-base text-slate-500">{exercise.promptVi}</p>}
      {isListening && hasAnswered && exercise.promptVi && (
        <p className="mt-2 text-base text-slate-500">{exercise.promptVi}</p>
      )}

      {exercise.question && <p className="mt-4 mb-3 text-base font-semibold text-slate-700">{exercise.question}</p>}

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
