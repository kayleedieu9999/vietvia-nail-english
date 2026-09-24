"use client";

import { useState } from "react";
import { StoryReaction } from "@/types/story";
import { speakEnglish, SLOW_SPEECH_RATE } from "@/lib/tts";
import { getSpeechErrorMessage, useSpeechRecognition } from "@/lib/useSpeechRecognition";

interface ReactionPracticeProps {
  reaction: StoryReaction;
  onDone: () => void;
}

/**
 * The "real response" reflex step — the learner reacts naturally to `cue`,
 * not a word-for-word repeat, so their speech is shown as-is with no
 * right/wrong judgment (no accent or correctness scoring exists here) —
 * only after they've tried does a model answer appear for comparison.
 */
export default function ReactionPractice({ reaction, onDone }: ReactionPracticeProps) {
  const mic = useSpeechRecognition();
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="mt-5 border-t border-slate-100 pt-5">
      <p className="text-sm font-extrabold uppercase tracking-wide text-rose-500">Phản xạ</p>
      <div className="mt-2 rounded-2xl bg-well px-4 py-3">
        <p className="text-base font-bold text-slate-900">&ldquo;{reaction.cue}&rdquo;</p>
        <p className="mt-1 text-sm text-slate-500">{reaction.cueVietnamese}</p>
      </div>

      <p className="mt-3 text-sm font-semibold text-slate-700">Bạn sẽ trả lời sao?</p>

      <button
        type="button"
        onClick={mic.start}
        disabled={mic.state === "listening"}
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-base font-bold text-white transition active:scale-95 disabled:opacity-60"
      >
        <span aria-hidden>🎤</span> {mic.state === "listening" ? "Đang nghe..." : "Nói câu trả lời"}
      </button>

      {mic.state === "done" && (
        <div className="mt-3 space-y-3">
          <p className="text-sm text-slate-700">
            <span className="font-bold text-slate-900">Bạn nói:</span> &ldquo;{mic.transcript}&rdquo;
          </p>

          {!showModel ? (
            <button type="button" onClick={() => setShowModel(true)} className="text-sm font-semibold text-rose-500">
              Xem cách nói tự nhiên
            </button>
          ) : (
            <div className="rounded-2xl bg-orange-50 px-4 py-3">
              <p className="text-xs font-extrabold uppercase tracking-wide text-orange-600">Cách nói tự nhiên</p>
              <p className="mt-1 text-base font-bold text-slate-900">&ldquo;{reaction.modelAnswer}&rdquo;</p>
              <p className="mt-1 text-sm text-slate-500">{reaction.modelAnswerVietnamese}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => speakEnglish(reaction.modelAnswer)}
                  className="rounded-full bg-white px-3.5 py-2 text-xs font-bold text-rose-600 transition active:scale-95"
                >
                  🔊 Nghe mẫu
                </button>
                <button
                  type="button"
                  onClick={() => speakEnglish(reaction.modelAnswer, SLOW_SPEECH_RATE)}
                  className="rounded-full bg-white px-3.5 py-2 text-xs font-bold text-rose-600 transition active:scale-95"
                >
                  🐢 Nghe chậm
                </button>
                <button
                  type="button"
                  onClick={mic.start}
                  className="rounded-full bg-white px-3.5 py-2 text-xs font-bold text-rose-600 transition active:scale-95"
                >
                  🎤 Nói lại
                </button>
              </div>
            </div>
          )}

          <button type="button" onClick={onDone} className="btn-primary w-full">
            Tiếp tục
          </button>
        </div>
      )}

      {mic.state === "error" && (
        <div className="mt-3 space-y-3">
          <p className="text-xs text-slate-400">{getSpeechErrorMessage(mic.errorCode)}</p>
          <button type="button" onClick={onDone} className="btn-secondary w-full">
            Bỏ qua, tiếp tục
          </button>
        </div>
      )}
    </div>
  );
}
