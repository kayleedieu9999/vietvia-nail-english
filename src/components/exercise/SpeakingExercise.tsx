"use client";

import { useEffect, useState } from "react";
import { Exercise } from "@/types/exercise";
import { useSpeechRecognition } from "@/lib/useSpeechRecognition";
import { speakEnglish } from "@/lib/tts";
import { getFeedbackCopy } from "@/lib/dailyPronunciation";
import { pickBestMatch } from "@/lib/speakingMatch";
import SpeechRecorder from "@/components/SpeechRecorder";
import SpeechResult from "@/components/SpeechResult";
import WordMatchFeedback from "@/components/WordMatchFeedback";
import PronunciationAudioControls from "@/components/PronunciationAudioControls";
import ExerciseActionRow from "./ExerciseActionRow";

interface SpeakingExerciseProps {
  exercise: Exercise;
  onAnswered: (correct: boolean) => void;
  onMarkedReview: () => void;
  onAdvance: () => void;
  isLast: boolean;
}

/**
 * Open-ended speaking practice — same architecture as the "Luyện nói" daily
 * speaking flow: matches the learner's answer against every accepted
 * phrasing (not one fixed string), honest word-diff feedback, no fake
 * pronunciation score. A spoken attempt always "counts" (onAnswered(true))
 * regardless of match quality — speaking is the goal, not getting it perfect.
 */
export default function SpeakingExercise({
  exercise,
  onAnswered,
  onMarkedReview,
  onAdvance,
  isLast,
}: SpeakingExerciseProps) {
  const mic = useSpeechRecognition();
  const [revealFeedback, setRevealFeedback] = useState(false);
  const [hasSpoken, setHasSpoken] = useState(false);

  useEffect(() => {
    if (mic.state !== "done") return;
    const timer = setTimeout(() => {
      setRevealFeedback(true);
      if (!hasSpoken) {
        setHasSpoken(true);
        onAnswered(true);
      }
    }, 350);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mic.state]);

  const targets = [exercise.targetEnglish, ...(exercise.acceptedAnswers ?? [])].filter(
    (t): t is string => Boolean(t),
  );
  const best = mic.state === "done" ? pickBestMatch(targets, mic.transcript) : null;
  const feedback = best ? getFeedbackCopy(best.diff) : null;
  const isProcessing = mic.state === "done" && !revealFeedback;

  function handleRetry() {
    setRevealFeedback(false);
    mic.start();
  }

  return (
    <div className="card-surface">
      {exercise.speaker && (
        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold tracking-wide text-orange-600">
          {exercise.speaker.toUpperCase()}
        </span>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p className="text-xl font-bold leading-snug text-slate-900">{exercise.prompt}</p>
        <button
          type="button"
          onClick={() => speakEnglish(exercise.audioText ?? exercise.prompt ?? "")}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-600 transition active:scale-95"
        >
          <span aria-hidden>🔊</span> Nghe
        </button>
      </div>
      {exercise.promptVi && <p className="mt-2 text-base text-slate-500">{exercise.promptVi}</p>}

      {!revealFeedback && (
        <div className="mt-5 border-t border-slate-100 pt-5 text-center">
          <p className="text-base font-semibold text-slate-800">
            {exercise.question ?? "Bạn sẽ trả lời sao?"}
          </p>
          <div className="mt-4 flex justify-center">
            <SpeechRecorder
              state={mic.state}
              errorCode={mic.errorCode}
              onStart={mic.start}
              label="TRẢ LỜI BẰNG TIẾNG ANH"
            />
          </div>
          {isProcessing && <p className="mt-4 text-sm font-semibold text-slate-400">Đang nghe lại…</p>}
        </div>
      )}

      {revealFeedback && best && feedback && (
        <div className="mt-4 border-t border-slate-100 pt-4">
          <SpeechResult transcript={mic.transcript} />
          <div className="mt-3">
            <WordMatchFeedback diff={best.diff} feedback={feedback} />
          </div>

          {exercise.targetEnglish && (
            <div className="mt-4 rounded-2xl bg-well p-3.5">
              <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Cách nói tự nhiên</p>
              <p className="mt-1 text-base font-bold text-slate-900">{exercise.targetEnglish}</p>
              {exercise.targetVietnamese && (
                <p className="mt-0.5 text-sm text-slate-500">{exercise.targetVietnamese}</p>
              )}
              <div className="mt-2.5">
                <PronunciationAudioControls text={exercise.targetEnglish} />
              </div>
            </div>
          )}

          <ExerciseActionRow
            exerciseId={exercise.id}
            onMarkedReview={onMarkedReview}
            onAdvance={onAdvance}
            isLast={isLast}
          >
            <button type="button" onClick={handleRetry} className="btn-secondary">
              🎤 Nói lại
            </button>
          </ExerciseActionRow>
        </div>
      )}
    </div>
  );
}
