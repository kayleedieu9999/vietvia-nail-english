"use client";

import { useEffect, useState } from "react";
import { RoundQuestion } from "@/lib/lesson-engine";
import { useSpeechRecognition, getSpeechErrorMessage } from "@/lib/useSpeechRecognition";
import { speakEnglish } from "@/lib/tts";
import { getFeedbackCopy, diffWords } from "@/lib/dailyPronunciation";
import { pickBestMatch } from "@/lib/speakingMatch";
import { setItemState } from "@/lib/collectionProgress";
import SpeechRecorder from "@/components/SpeechRecorder";
import SpeechResult from "@/components/SpeechResult";
import WordMatchFeedback from "@/components/WordMatchFeedback";
import PronunciationAudioControls from "@/components/PronunciationAudioControls";

/** Shared review store, same bucket convention as the homepage's "nails-speaking" pool — see src/lib/collectionProgress.ts. */
const REVIEW_COLLECTION_KEY = "daily-speaking";

interface SpeakingTurnCardProps {
  question: RoundQuestion;
  /** Fired once, the first time this turn's open-ended answer attempt finishes — this is what makes a turn "count". */
  onSpoken: () => void;
  onMarkedReview: () => void;
  onAdvance: () => void;
  isLast: boolean;
}

/**
 * One "Luyện nói" speaking turn: customer line → open-ended spoken answer
 * (matched against every acceptable response, not one fixed string) →
 * honest feedback → natural model answer with its own "Nói theo" repeat
 * practice. Remounted fresh per turn via `key={question.id}` from
 * `DailySpeakingSession`, so all local state resets naturally with no reset
 * effect needed.
 */
export default function SpeakingTurnCard({
  question,
  onSpoken,
  onMarkedReview,
  onAdvance,
  isLast,
}: SpeakingTurnCardProps) {
  const mic = useSpeechRecognition();
  const repeatMic = useSpeechRecognition();
  const [showHints, setShowHints] = useState(false);
  const [revealFeedback, setRevealFeedback] = useState(false);
  const [hasSpoken, setHasSpoken] = useState(false);

  // Brief "Đang nghe lại…" pause before revealing feedback, mirroring
  // DailyPronunciationCard's PracticeSession — keeps side effects out of the
  // render body without a synchronous setState-in-effect.
  useEffect(() => {
    if (mic.state !== "done") return;
    const timer = setTimeout(() => {
      setRevealFeedback(true);
      if (!hasSpoken) {
        setHasSpoken(true);
        onSpoken();
      }
    }, 350);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mic.state]);

  const isNails = question.sourceTopicId.startsWith("nails-");
  const choiceTexts = question.shuffledChoices.map((c) => c.text);
  const best = mic.state === "done" ? pickBestMatch(choiceTexts, mic.transcript) : null;
  const feedback = best ? getFeedbackCopy(best.diff) : null;
  const isProcessing = mic.state === "done" && !revealFeedback;

  const repeatDiff = repeatMic.state === "done" ? diffWords(question.english, repeatMic.transcript) : null;
  const repeatFeedback = repeatDiff ? getFeedbackCopy(repeatDiff) : null;

  function handleRetry() {
    setRevealFeedback(false);
    mic.start();
  }

  return (
    <div className="card-surface">
      {question.speaker && (
        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold tracking-wide text-orange-600">
          {question.speaker.toUpperCase()}
        </span>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p className="text-xl font-bold leading-snug text-slate-900">{question.prompt}</p>
        <button
          type="button"
          onClick={() => speakEnglish(question.audioText ?? question.prompt ?? question.english)}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-600 transition active:scale-95"
        >
          <span aria-hidden>🔊</span> Nghe
        </button>
      </div>
      {question.promptVietnamese && (
        <p className="mt-2 text-base text-slate-500">{question.promptVietnamese}</p>
      )}

      {!revealFeedback && (
        <div className="mt-5 border-t border-slate-100 pt-5 text-center">
          {isNails && <p className="text-xs font-extrabold uppercase tracking-wide text-rose-400">Đến lượt bạn</p>}
          <p className="mt-1 text-base font-semibold text-slate-800">
            {isNails ? "Bạn là thợ Nails. Bạn sẽ trả lời sao?" : "Bạn sẽ trả lời sao?"}
          </p>

          <div className="mt-4 flex justify-center">
            <SpeechRecorder
              state={mic.state}
              errorCode={mic.errorCode}
              onStart={mic.start}
              label="TRẢ LỜI BẰNG TIẾNG ANH"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowHints((v) => !v)}
            className="mt-4 text-sm font-semibold text-rose-500"
          >
            {showHints ? "Ẩn gợi ý" : "Chưa biết nói gì? Xem gợi ý"}
          </button>

          {showHints && (
            <div className="mt-3 space-y-2 rounded-2xl bg-well p-3.5 text-left">
              <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Gợi ý</p>
              {question.shuffledChoices.map((choice, i) => (
                <div
                  key={choice.id}
                  className="flex items-center justify-between gap-2 rounded-xl bg-white px-3 py-2.5"
                >
                  <span className="text-sm font-semibold text-slate-700">
                    {String.fromCharCode(65 + i)}. {choice.text}
                  </span>
                  <button
                    type="button"
                    onClick={() => speakEnglish(choice.text)}
                    className="shrink-0 rounded-full bg-rose-100 px-2.5 py-1.5 text-xs font-bold text-rose-600"
                  >
                    🔊 Nghe mẫu
                  </button>
                </div>
              ))}
            </div>
          )}

          {isProcessing && <p className="mt-4 text-sm font-semibold text-slate-400">Đang nghe lại…</p>}
        </div>
      )}

      {revealFeedback && best && feedback && (
        <div className="mt-4 border-t border-slate-100 pt-4">
          <SpeechResult transcript={mic.transcript} />
          <div className="mt-3">
            <WordMatchFeedback diff={best.diff} feedback={feedback} />
          </div>

          <div className="mt-4 rounded-2xl bg-well p-3.5">
            <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Cách nói tự nhiên</p>
            <p className="mt-1 text-base font-bold text-slate-900">{question.english}</p>
            <p className="mt-0.5 text-sm text-slate-500">{question.vietnamese}</p>
            <div className="mt-2.5 flex flex-wrap items-center gap-2">
              <PronunciationAudioControls text={question.english} />
              <button
                type="button"
                onClick={repeatMic.start}
                disabled={repeatMic.state === "listening"}
                className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3.5 py-2 text-xs font-bold text-orange-700 transition active:scale-95 disabled:opacity-60"
              >
                <span aria-hidden>🎤</span> {repeatMic.state === "listening" ? "Đang nghe..." : "Nói theo"}
              </button>
            </div>
            {repeatMic.state === "done" && repeatDiff && repeatFeedback && (
              <div className="mt-3 border-t border-slate-200 pt-3">
                <SpeechResult transcript={repeatMic.transcript} />
                <div className="mt-2">
                  <WordMatchFeedback diff={repeatDiff} feedback={repeatFeedback} />
                </div>
              </div>
            )}
            {repeatMic.state === "error" && (
              <p className="mt-2 text-xs text-slate-500">{getSpeechErrorMessage(repeatMic.errorCode)}</p>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button type="button" onClick={handleRetry} className="btn-secondary">
              🎤 Nói lại
            </button>
            <button
              type="button"
              onClick={() => {
                setItemState(REVIEW_COLLECTION_KEY, question.id, "review");
                onMarkedReview();
              }}
              className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-bold text-rose-600"
            >
              Cần ôn lại
            </button>
            <button
              type="button"
              onClick={() => setItemState(REVIEW_COLLECTION_KEY, question.id, "mastered")}
              className="rounded-xl bg-emerald-500 px-3.5 py-2.5 text-xs font-bold text-white"
            >
              Đã nhớ
            </button>
            <button type="button" onClick={onAdvance} className="ml-auto text-sm font-bold text-rose-500">
              {isLast ? "Hoàn thành →" : "Câu tiếp theo →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
