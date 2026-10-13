"use client";

import { ExerciseMode } from "@/types/exercise";

export type SelectorTab = "noi-dung" | ExerciseMode;

const TABS: { key: SelectorTab; label: string }[] = [
  { key: "noi-dung", label: "Nội dung" },
  { key: "luyen-ngay", label: "Luyện ngay" },
  { key: "quiz", label: "Quiz" },
  { key: "ghep-cau", label: "Ghép câu" },
  { key: "luyen-them", label: "Luyện thêm" },
];

interface LessonPracticeSelectorProps {
  active: SelectorTab;
  completed: Set<SelectorTab>;
  onSelect: (tab: SelectorTab) => void;
}

/** Compact practice selector — horizontally scrollable on mobile so it never overflows or wraps awkwardly at 390px. */
export default function LessonPracticeSelector({ active, completed, onSelect }: LessonPracticeSelectorProps) {
  return (
    <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:px-0">
      {TABS.map((tab) => {
        const isActive = active === tab.key;
        const isDone = completed.has(tab.key);
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onSelect(tab.key)}
            className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-bold transition ${
              isActive ? "bg-rose-500 text-white" : "bg-well text-slate-600"
            }`}
          >
            {tab.label} {isDone && <span aria-hidden>✓</span>}
          </button>
        );
      })}
    </div>
  );
}
