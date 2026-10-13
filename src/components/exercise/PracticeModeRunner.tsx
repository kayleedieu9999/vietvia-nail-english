"use client";

import { useState } from "react";
import { Exercise } from "@/types/exercise";
import ExerciseRenderer from "./ExerciseRenderer";
import LessonResults from "./LessonResults";

interface PracticeModeRunnerProps {
  exercises: Exercise[];
  modeLabel: string;
  onBackToSelector: () => void;
  onModeCompleted: () => void;
}

/**
 * Runs one practice tab's exercises in sequence — progress bar, current
 * exercise, then a shared results screen. Same "remount per item via key"
 * pattern as the Luyện nói daily speaking flow: no reset effects needed.
 */
export default function PracticeModeRunner({
  exercises,
  modeLabel,
  onBackToSelector,
  onModeCompleted,
}: PracticeModeRunnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [spokenCount, setSpokenCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [screen, setScreen] = useState<"practice" | "results">("practice");

  if (exercises.length === 0) {
    return <p className="text-sm text-slate-500">Chưa có bài luyện cho phần này.</p>;
  }

  function restart() {
    setCurrentIndex(0);
    setCorrectCount(0);
    setSpokenCount(0);
    setReviewCount(0);
    setScreen("practice");
  }

  if (screen === "results") {
    return (
      <LessonResults
        total={exercises.length}
        correctCount={correctCount}
        spokenCount={spokenCount}
        reviewCount={reviewCount}
        onRetry={restart}
        onBackToSelector={onBackToSelector}
      />
    );
  }

  const exercise = exercises[currentIndex]!;

  return (
    <div>
      <div className="mb-4">
        <p className="text-sm font-semibold text-slate-500">
          {modeLabel} · {currentIndex + 1} / {exercises.length}
        </p>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-rose-100">
          <div
            className="h-full rounded-full bg-rose-500 transition-all"
            style={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
          />
        </div>
      </div>

      <ExerciseRenderer
        key={exercise.id}
        exercise={exercise}
        onAnswered={(correct) => {
          if (correct) setCorrectCount((c) => c + 1);
          if (exercise.type === "speaking") setSpokenCount((c) => c + 1);
        }}
        onMarkedReview={() => setReviewCount((c) => c + 1)}
        onAdvance={() => {
          if (currentIndex >= exercises.length - 1) {
            setScreen("results");
            onModeCompleted();
            return;
          }
          setCurrentIndex((i) => i + 1);
        }}
        isLast={currentIndex === exercises.length - 1}
      />
    </div>
  );
}
