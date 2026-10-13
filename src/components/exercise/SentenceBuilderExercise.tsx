"use client";

import { useState } from "react";
import { Exercise } from "@/types/exercise";
import { speakEnglish, SLOW_SPEECH_RATE } from "@/lib/tts";
import { useSpeechRecognition, getSpeechErrorMessage } from "@/lib/useSpeechRecognition";
import { diffWords, getFeedbackCopy } from "@/lib/dailyPronunciation";
import SpeechResult from "@/components/SpeechResult";
import WordMatchFeedback from "@/components/WordMatchFeedback";
import ExerciseActionRow from "./ExerciseActionRow";

interface Block {
  id: string;
  text: string;
}

/** Joins tapped blocks into a sentence — punctuation blocks (?/.!,) attach to the previous word with no leading space. */
function joinBlocks(blocks: Block[]): string {
  return blocks.reduce((sentence, block, i) => {
    if (i === 0) return block.text;
    const isPunctuation = /^[?.!,]$/.test(block.text);
    return isPunctuation ? `${sentence}${block.text}` : `${sentence} ${block.text}`;
  }, "");
}

function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/\s+([?.!,])/g, "$1");
}

interface SentenceBuilderExerciseProps {
  exercise: Exercise;
  onAnswered: (correct: boolean) => void;
  onMarkedReview: () => void;
  onAdvance: () => void;
  isLast: boolean;
}

/**
 * "Ghép câu" — tap blocks into the answer row in order, tap again to remove.
 * `exercise.blocks` is authored already out-of-order (not shuffled at
 * render time, which would risk an SSR/CSR hydration mismatch — see the
 * project's established rule on never using Math.random() in first render).
 */
export default function SentenceBuilderExercise({
  exercise,
  onAnswered,
  onMarkedReview,
  onAdvance,
  isLast,
}: SentenceBuilderExerciseProps) {
  const allBlocks: Block[] = (exercise.blocks ?? []).map((text, i) => ({ id: `${exercise.id}-b${i}`, text }));
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [checked, setChecked] = useState<"idle" | "correct" | "wrong">("idle");
  const mic = useSpeechRecognition();

  const selectedBlocks = selectedIds.map((id) => allBlocks.find((b) => b.id === id)!);
  const availableBlocks = allBlocks.filter((b) => !selectedIds.includes(b.id));
  const built = joinBlocks(selectedBlocks);

  const micDiff = mic.state === "done" ? diffWords(exercise.correctSentence ?? "", mic.transcript) : null;
  const micFeedback = micDiff ? getFeedbackCopy(micDiff) : null;

  function handleCheck() {
    const isCorrect = normalize(built) === normalize(exercise.correctSentence ?? "");
    setChecked(isCorrect ? "correct" : "wrong");
    if (isCorrect) onAnswered(true);
  }

  function handleReset() {
    setSelectedIds([]);
    setChecked("idle");
  }

  return (
    <div className="card-surface">
      {exercise.promptVi && <p className="text-base font-semibold text-slate-800">{exercise.promptVi}</p>}

      <div className="mt-4 min-h-[64px] rounded-2xl border-2 border-dashed border-rose-200 bg-well p-3">
        {selectedBlocks.length === 0 ? (
          <p className="py-3 text-center text-sm text-slate-400">Chạm vào từ bên dưới để bắt đầu ghép câu</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {selectedBlocks.map((block) => (
              <button
                key={block.id}
                type="button"
                disabled={checked === "correct"}
                onClick={() => setSelectedIds((ids) => ids.filter((id) => id !== block.id))}
                className="rounded-xl bg-rose-500 px-3.5 py-2.5 text-base font-bold text-white transition active:scale-95 disabled:opacity-80"
              >
                {block.text}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {availableBlocks.map((block) => (
          <button
            key={block.id}
            type="button"
            onClick={() => {
              setSelectedIds((ids) => [...ids, block.id]);
              setChecked("idle");
            }}
            className="rounded-xl border-2 border-slate-200 bg-white px-3.5 py-2.5 text-base font-bold text-slate-800 transition active:scale-95"
          >
            {block.text}
          </button>
        ))}
      </div>

      {checked !== "correct" && (
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={handleCheck}
            disabled={selectedBlocks.length === 0}
            className="btn-primary flex-1 disabled:opacity-50"
          >
            Kiểm tra
          </button>
          <button type="button" onClick={handleReset} className="btn-secondary flex-1">
            Làm lại
          </button>
        </div>
      )}

      {checked === "wrong" && (
        <p className="mt-3 text-sm font-bold text-rose-600">Thử lại nhé.</p>
      )}

      {checked === "correct" && (
        <div className="mt-4 border-t border-slate-100 pt-4">
          <p className="text-sm font-bold text-emerald-700">✓ Đúng rồi!</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(exercise.correctSentence ?? built)}
              className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3.5 py-2 text-xs font-bold text-rose-600 transition active:scale-95"
            >
              <span aria-hidden>🔊</span> Nghe
            </button>
            <button
              type="button"
              onClick={() => speakEnglish(exercise.correctSentence ?? built, SLOW_SPEECH_RATE)}
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

          {mic.state === "done" && micDiff && micFeedback && (
            <div className="mt-3">
              <SpeechResult transcript={mic.transcript} />
              <div className="mt-2">
                <WordMatchFeedback diff={micDiff} feedback={micFeedback} />
              </div>
            </div>
          )}
          {mic.state === "error" && (
            <p className="mt-2 text-xs text-slate-500">{getSpeechErrorMessage(mic.errorCode)}</p>
          )}

          <ExerciseActionRow
            exerciseId={exercise.id}
            onMarkedReview={onMarkedReview}
            onAdvance={onAdvance}
            isLast={isLast}
          />
        </div>
      )}
    </div>
  );
}
