"use client";

import { useMemo, useState } from "react";
import { CollectionItem } from "@/types/collection";
import { speakEnglish } from "@/lib/tts";
import { setItemState } from "@/lib/collectionProgress";
import { shuffle } from "@/lib/shuffle";

interface QuickReviewProps {
  collectionKey: string;
  items: CollectionItem[];
  onClose: () => void;
}

interface RoundItem {
  item: CollectionItem;
  choices: string[];
}

/** Short "Ôn nhanh" session — listen + multiple-choice meaning, mixing 5-8 items that need review most. */
export default function QuickReview({ collectionKey, items, onClose }: QuickReviewProps) {
  const round: RoundItem[] = useMemo(() => {
    return items.map((item) => {
      const distractors = shuffle(items.filter((i) => i.id !== item.id))
        .slice(0, 2)
        .map((i) => i.vietnamese);
      return { item, choices: shuffle([item.vietnamese, ...distractors]) };
    });
  }, [items]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  if (round.length === 0) {
    return (
      <div className="card-surface mx-auto w-full max-w-sm text-center">
        <p className="text-base font-bold text-slate-900">Chưa có câu nào để ôn nhanh.</p>
        <button type="button" onClick={onClose} className="btn-secondary mt-4 w-full">
          Đóng
        </button>
      </div>
    );
  }

  if (index >= round.length) {
    return (
      <div className="card-surface mx-auto w-full max-w-sm text-center">
        <p className="text-4xl">🎉</p>
        <p className="mt-2 text-lg font-extrabold text-slate-900">
          Bạn đã ôn {correctCount}/{round.length} câu đúng
        </p>
        <button type="button" onClick={onClose} className="btn-primary mt-5 w-full">
          Xong
        </button>
      </div>
    );
  }

  const current = round[index];
  const isCorrect = selected === current.item.vietnamese;

  function handleSelect(choice: string) {
    if (selected) return;
    setSelected(choice);
    const correct = choice === current.item.vietnamese;
    if (correct) setCorrectCount((c) => c + 1);
    setItemState(collectionKey, current.item.id, correct ? "mastered" : "review");
  }

  function handleNext() {
    setSelected(null);
    setIndex((i) => i + 1);
  }

  return (
    <div className="card-surface mx-auto w-full max-w-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-500">
          Câu {index + 1} / {round.length}
        </p>
        <button type="button" onClick={onClose} className="text-sm font-semibold text-slate-400">
          Đóng
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-2xl bg-well px-4 py-4">
        <p className="text-xl font-extrabold text-slate-900">{current.item.english}</p>
        <button
          type="button"
          onClick={() => speakEnglish(current.item.english)}
          className="shrink-0 rounded-full bg-rose-500 p-2.5 text-white transition active:scale-95"
          aria-label="Nghe"
        >
          🔊
        </button>
      </div>

      <p className="mt-4 text-sm font-semibold text-slate-700">Nghĩa đúng là gì?</p>
      <div className="mt-2 space-y-2">
        {current.choices.map((choice) => {
          let cls = "border-slate-200 bg-white text-slate-800";
          if (selected) {
            if (choice === current.item.vietnamese) cls = "border-emerald-400 bg-emerald-50 text-emerald-800";
            else if (choice === selected) cls = "border-rose-400 bg-rose-50 text-rose-800";
            else cls = "border-slate-200 bg-white text-slate-400";
          }
          return (
            <button
              key={choice}
              type="button"
              disabled={!!selected}
              onClick={() => handleSelect(choice)}
              className={`w-full rounded-2xl border-2 px-4 py-3 text-left text-base font-medium transition ${cls}`}
            >
              {choice}
            </button>
          );
        })}
      </div>

      {selected && (
        <button type="button" onClick={handleNext} className="btn-primary mt-4 w-full">
          {isCorrect ? "Chính xác! Tiếp tục →" : "Tiếp tục →"}
        </button>
      )}
    </div>
  );
}
