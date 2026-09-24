"use client";

import { useEffect, useState } from "react";
import { CollectionItem } from "@/types/collection";
import { speakEnglish, SLOW_SPEECH_RATE } from "@/lib/tts";
import { getSpeechErrorMessage, matchesTarget, useSpeechRecognition } from "@/lib/useSpeechRecognition";
import {
  ItemState,
  STATE_LABELS,
  NEW_LABEL,
  markItemSeen,
  setItemState,
} from "@/lib/collectionProgress";

const STATE_BADGE_CLASS: Record<ItemState | "new", string> = {
  new: "bg-well text-slate-500",
  learning: "bg-orange-100 text-orange-700",
  review: "bg-rose-100 text-rose-600",
  mastered: "bg-emerald-100 text-emerald-700",
};

interface ItemCardProps {
  collectionKey: string;
  item: CollectionItem;
  state: ItemState | "new";
}

/** One word/phrase card, reused by all 4 collection pages — listen, slow listen, speak-back, and mark-progress actions. */
export default function ItemCard({ collectionKey, item, state }: ItemCardProps) {
  const mic = useSpeechRecognition();
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    markItemSeen(collectionKey, item.id);
  }, [collectionKey, item.id]);

  function handleSetState(next: ItemState) {
    setItemState(collectionKey, item.id, next);
  }

  return (
    <div className="card-surface">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-lg font-extrabold text-slate-900 lg:text-xl">{item.english}</p>
          {item.ipa && <p className="mt-0.5 text-sm text-slate-400">{item.ipa}</p>}
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${STATE_BADGE_CLASS[state]}`}
        >
          {state === "new" ? NEW_LABEL : STATE_LABELS[state]}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setShowAnswer((v) => !v)}
        className="mt-2 text-sm font-semibold text-rose-500"
      >
        {showAnswer ? item.vietnamese : "Xem nghĩa"}
      </button>

      {item.whenToUse && <p className="mt-2 text-xs italic text-slate-500">{item.whenToUse}</p>}

      <p className="mt-3 rounded-2xl bg-well px-3 py-2.5 text-sm text-slate-700">
        &ldquo;{item.example}&rdquo;
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => speakEnglish(item.example)}
          className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3.5 py-2 text-xs font-bold text-rose-600 transition active:scale-95"
        >
          <span aria-hidden>🔊</span> Nghe
        </button>
        <button
          type="button"
          onClick={() => speakEnglish(item.example, SLOW_SPEECH_RATE)}
          className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3.5 py-2 text-xs font-bold text-rose-600 transition active:scale-95"
        >
          <span aria-hidden>🐢</span> Nghe chậm
        </button>
        <button
          type="button"
          onClick={mic.start}
          disabled={mic.state === "listening"}
          className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3.5 py-2 text-xs font-bold text-orange-700 transition active:scale-95 disabled:opacity-60"
        >
          <span aria-hidden>🎤</span> {mic.state === "listening" ? "Đang nghe..." : "Nói lại"}
        </button>
      </div>

      {mic.state === "done" && (
        <p
          className={`mt-2 text-xs font-semibold ${
            matchesTarget(mic.transcript, item.english) ? "text-emerald-600" : "text-slate-500"
          }`}
        >
          {matchesTarget(mic.transcript, item.english)
            ? `✓ Nói đúng: "${mic.transcript}"`
            : `Bạn nói: "${mic.transcript}" — thử lại nhé!`}
        </p>
      )}

      {mic.state === "error" && (
        <p className="mt-2 text-xs font-semibold text-slate-500">{getSpeechErrorMessage(mic.errorCode)}</p>
      )}

      <div className="mt-4 flex gap-2 border-t border-slate-100 pt-3">
        <button
          type="button"
          onClick={() => handleSetState("review")}
          className="flex-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-600 transition active:scale-95"
        >
          Cần ôn lại
        </button>
        <button
          type="button"
          onClick={() => handleSetState("mastered")}
          className="flex-1 rounded-xl bg-emerald-500 px-3 py-2 text-xs font-bold text-white transition active:scale-95"
        >
          Đã nhớ
        </button>
      </div>
    </div>
  );
}
