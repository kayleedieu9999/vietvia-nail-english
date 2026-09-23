"use client";

import Link from "next/link";
import { useState } from "react";
import { ReviewItem, CONTENT_TYPE_LABELS } from "@/lib/reviewItems";
import { setItemState } from "@/lib/collectionProgress";
import { setRuleReviewOverride } from "@/lib/grammarProgress";
import { speakEnglish, SLOW_SPEECH_RATE } from "@/lib/tts";
import { useSpeechRecognition } from "@/lib/useSpeechRecognition";
import { diffWords, getFeedbackCopy } from "@/lib/dailyPronunciation";
import SpeechRecorder from "@/components/SpeechRecorder";
import SpeechResult from "@/components/SpeechResult";
import WordMatchFeedback from "@/components/WordMatchFeedback";

interface ReviewItemCardProps {
  item: ReviewItem;
}

/** One "Câu cần ôn lại" card — reuses the same TTS/speech-recognition/word-match pieces as the homepage practice card instead of duplicating them. */
export default function ReviewItemCard({ item }: ReviewItemCardProps) {
  const mic = useSpeechRecognition();
  const [micOpen, setMicOpen] = useState(false);

  function handleMastered() {
    if (item.collectionKey === "grammar") {
      setRuleReviewOverride(item.itemId, "mastered");
    } else {
      setItemState(item.collectionKey, item.itemId, "mastered");
    }
  }

  function handleMicStart() {
    setMicOpen(true);
    mic.start();
  }

  const diff = mic.state === "done" ? diffWords(item.english, mic.transcript) : null;
  const feedback = diff ? getFeedbackCopy(diff) : null;

  return (
    <div className="card-surface">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <span className="inline-block rounded-full bg-well px-2.5 py-1 text-[11px] font-bold text-slate-500">
            {CONTENT_TYPE_LABELS[item.contentType]}
          </span>
          <p className="mt-2 text-lg font-extrabold text-slate-900">{item.english}</p>
          <p className="mt-0.5 text-sm text-slate-600">{item.vietnamese}</p>
        </div>
      </div>

      {item.whenToUse && <p className="mt-2 text-xs italic text-slate-500">{item.whenToUse}</p>}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => speakEnglish(item.english)}
          className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3.5 py-2 text-xs font-bold text-rose-600 transition active:scale-95"
        >
          <span aria-hidden>🔊</span> Nghe
        </button>
        <button
          type="button"
          onClick={() => speakEnglish(item.english, SLOW_SPEECH_RATE)}
          className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3.5 py-2 text-xs font-bold text-rose-600 transition active:scale-95"
        >
          <span aria-hidden>🐢</span> Nghe chậm
        </button>
        {!micOpen && (
          <button
            type="button"
            onClick={handleMicStart}
            className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3.5 py-2 text-xs font-bold text-orange-700 transition active:scale-95"
          >
            <span aria-hidden>🎤</span> Nói lại
          </button>
        )}
      </div>

      {micOpen && (
        <div className="mt-3 rounded-2xl bg-well p-3.5">
          <SpeechRecorder state={mic.state} errorCode={mic.errorCode} onStart={mic.start} label="NÓI LẠI CÂU NÀY" />
          {mic.state === "done" && diff && feedback && (
            <div className="mt-3 border-t border-slate-200 pt-3">
              <SpeechResult transcript={mic.transcript} />
              <div className="mt-2">
                <WordMatchFeedback diff={diff} feedback={feedback} />
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
        <button
          type="button"
          onClick={handleMastered}
          className="rounded-xl bg-emerald-500 px-3.5 py-2.5 text-xs font-bold text-white transition active:scale-95"
        >
          Đã nhớ
        </button>
        <Link href={item.sourceRoute} className="ml-auto text-xs font-bold text-rose-500">
          Xem bài gốc →
        </Link>
      </div>
    </div>
  );
}
