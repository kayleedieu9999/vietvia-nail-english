"use client";

import { useState } from "react";
import Link from "next/link";
import { LessonExerciseSet, exercisesByMode } from "@/types/exercise";
import LessonPracticeSelector, { SelectorTab } from "./LessonPracticeSelector";
import PracticeModeRunner from "./PracticeModeRunner";

const MODE_LABELS: Record<Exclude<SelectorTab, "noi-dung">, string> = {
  "luyen-ngay": "Luyện ngay",
  quiz: "Quiz",
  "ghep-cau": "Ghép câu",
  "luyen-them": "Luyện thêm",
};

interface LessonPracticePageProps {
  set: LessonExerciseSet;
}

/**
 * Top-level "Luyện tập" page for one lesson — the [Nội dung][Luyện ngay]
 * [Quiz][Ghép câu][Luyện thêm] selector plus whichever mode is active.
 * "Nội dung" links back to the lesson's existing content page rather than
 * duplicating it here.
 */
export default function LessonPracticePage({ set }: LessonPracticePageProps) {
  const [active, setActive] = useState<SelectorTab>("luyen-ngay");
  const [completed, setCompleted] = useState<Set<SelectorTab>>(new Set());
  const [runKey, setRunKey] = useState(0);

  function handleSelect(tab: SelectorTab) {
    if (tab === "noi-dung") {
      setCompleted((prev) => new Set(prev).add("noi-dung"));
      return;
    }
    setActive(tab);
    setRunKey((k) => k + 1);
  }

  const modeExercises = active === "noi-dung" ? [] : exercisesByMode(set, active);

  return (
    <div className="min-h-dvh px-5 pb-16 pt-6 lg:px-10 lg:pt-10">
      <div className="mx-auto w-full max-w-sm lg:max-w-2xl">
        {set.contentHref && (
          <Link href={set.contentHref} className="text-sm font-semibold text-rose-400 hover:underline">
            ← {set.lessonTitle}
          </Link>
        )}
        <h1 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900">Luyện tập: {set.lessonTitle}</h1>

        <div className="mt-4">
          <LessonPracticeSelector active={active} completed={completed} onSelect={handleSelect} />
        </div>

        <div className="mt-5">
          {active === "noi-dung" ? (
            <div className="card-surface text-center">
              <p className="text-sm text-slate-600">Xem lại nội dung gốc của bài học.</p>
              {set.contentHref && (
                <Link href={set.contentHref} className="btn-primary mt-4 inline-block">
                  Xem nội dung
                </Link>
              )}
            </div>
          ) : (
            <PracticeModeRunner
              key={`${active}-${runKey}`}
              exercises={modeExercises}
              modeLabel={MODE_LABELS[active]}
              onModeCompleted={() => setCompleted((prev) => new Set(prev).add(active))}
              onBackToSelector={() => setActive("noi-dung")}
            />
          )}
        </div>
      </div>
    </div>
  );
}
