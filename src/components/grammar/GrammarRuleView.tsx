"use client";

import { useState } from "react";
import { GrammarRuleLesson } from "@/types/grammar";
import { speakEnglish, SLOW_SPEECH_RATE } from "@/lib/tts";
import { getSpeechErrorMessage, matchesTarget, useSpeechRecognition } from "@/lib/useSpeechRecognition";
import { useGrammarProgress, setRuleReviewOverride, isRuleNeedsReview } from "@/lib/grammarProgress";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-extrabold uppercase tracking-wide text-rose-500">{children}</p>
  );
}

/**
 * Always rendered on both server and client — same reasoning as
 * `ListenButton`'s own doc comment: feature-detecting `window` at render
 * time (`isSpeechRecognitionSupported()`) makes the server (no `window`) and
 * the client (has `window`) render different trees, which is a real
 * hydration-mismatch bug, not just a lint nitpick (confirmed via a live
 * "Hydration failed" error during QA). Unsupported browsers simply get a
 * button whose `start()` call no-ops into an `error` state instead of ever
 * disappearing.
 */
function MicButton({ onClick, label, busy }: { onClick: () => void; label: string; busy: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={busy}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600 transition active:scale-95 active:bg-orange-200 disabled:opacity-60"
    >
      <span aria-hidden>🎤</span>
      {busy ? "Đang nghe..." : label}
    </button>
  );
}

interface GrammarRuleViewProps {
  rule: GrammarRuleLesson;
  /** Called when the learner presses "Tiếp tục" — `quizCorrect` is null if THỬ NGAY was never answered. */
  onContinue: (quizCorrect: boolean | null) => void;
}

export default function GrammarRuleView({ rule, onContinue }: GrammarRuleViewProps) {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const nailSalonMic = useSpeechRecognition();
  const speakingMic = useSpeechRecognition();
  const grammarProgress = useGrammarProgress();
  const ruleProgress = grammarProgress[rule.id];
  const needsReview = isRuleNeedsReview(ruleProgress);
  const isMastered = ruleProgress?.reviewOverride === "mastered";

  const hasAnswered = selectedChoiceId !== null;
  const isCorrect = selectedChoiceId === rule.quiz.correctAnswer;
  const quizCorrect = hasAnswered ? isCorrect : null;

  return (
    <div className="mx-auto w-full max-w-sm space-y-6 px-5 py-6">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-wide text-slate-400">
          Quy tắc {rule.ruleNumber}/100
        </p>
        <h1 className="mt-1 text-2xl font-extrabold leading-tight text-slate-900">{rule.title}</h1>
      </div>

      <section className="space-y-2">
        <SectionLabel>Dùng khi nào?</SectionLabel>
        <p className="text-base leading-relaxed text-slate-700">{rule.whenToUse}</p>
      </section>

      <section className="space-y-2">
        <SectionLabel>Mẫu câu</SectionLabel>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-lg font-bold text-slate-900">
          {rule.pattern}
        </div>
      </section>

      <section className="space-y-2">
        <SectionLabel>Trong tiệm nails</SectionLabel>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-lg font-bold text-slate-900">{rule.nailSalonExample.english}</p>
          <p className="mt-1 text-sm text-slate-600">{rule.nailSalonExample.vietnamese}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(rule.nailSalonExample.english)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-600 transition active:scale-95 active:bg-rose-200"
            >
              <span aria-hidden>🔊</span>
              Nghe
            </button>
            <button
              type="button"
              onClick={() => speakEnglish(rule.nailSalonExample.english, SLOW_SPEECH_RATE)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-600 transition active:scale-95 active:bg-rose-200"
            >
              <span aria-hidden>🐢</span>
              Nghe chậm
            </button>
            <MicButton
              label="Nói lại"
              busy={nailSalonMic.state === "listening"}
              onClick={nailSalonMic.start}
            />
          </div>
          {nailSalonMic.state === "done" && (
            <p
              className={`mt-2 text-sm font-semibold ${
                matchesTarget(nailSalonMic.transcript, rule.nailSalonExample.english)
                  ? "text-emerald-600"
                  : "text-slate-500"
              }`}
            >
              {matchesTarget(nailSalonMic.transcript, rule.nailSalonExample.english)
                ? `✓ Nghe đúng: "${nailSalonMic.transcript}"`
                : `Bạn nói: "${nailSalonMic.transcript}" — thử lại nhé!`}
            </p>
          )}
          {nailSalonMic.state === "error" && (
            <p className="mt-2 text-xs text-slate-400">{getSpeechErrorMessage(nailSalonMic.errorCode)}</p>
          )}
        </div>
      </section>

      <section className="space-y-2">
        <SectionLabel>Thêm 3 ví dụ</SectionLabel>
        <div className="space-y-2">
          {rule.moreExamples.map((example, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-900">{example.english}</p>
                <p className="truncate text-xs text-slate-500">{example.vietnamese}</p>
              </div>
              <button
                type="button"
                onClick={() => speakEnglish(example.english)}
                aria-label={`Nghe: ${example.english}`}
                className="shrink-0 rounded-full bg-rose-100 p-2 text-rose-600 transition active:scale-95"
              >
                🔊
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>Thử ngay</SectionLabel>
        <p className="text-base font-semibold text-slate-800">{rule.quiz.question}</p>
        <div className="space-y-2">
          {rule.quiz.choices.map((choice) => {
            const isSelected = selectedChoiceId === choice.id;
            const isThisCorrect = choice.id === rule.quiz.correctAnswer;
            let stateClasses = "border-slate-200 bg-white text-slate-800 active:scale-[0.98]";
            if (hasAnswered) {
              if (isThisCorrect) {
                stateClasses = "border-emerald-400 bg-emerald-50 text-emerald-800";
              } else if (isSelected) {
                stateClasses = "border-rose-400 bg-rose-50 text-rose-800";
              } else {
                stateClasses = "border-slate-200 bg-white text-slate-400";
              }
            }
            return (
              <button
                key={choice.id}
                type="button"
                disabled={hasAnswered}
                onClick={() => setSelectedChoiceId(choice.id)}
                className={`w-full rounded-2xl border-2 px-4 py-3 text-left text-base font-medium shadow-sm transition ${stateClasses}`}
              >
                {choice.text}
              </button>
            );
          })}
        </div>
        {hasAnswered && (
          <div
            className={`rounded-2xl p-4 ${
              isCorrect ? "bg-emerald-50 ring-1 ring-emerald-200" : "bg-rose-50 ring-1 ring-rose-200"
            }`}
          >
            <p className={`text-sm font-bold ${isCorrect ? "text-emerald-700" : "text-rose-700"}`}>
              {isCorrect ? "✓ Chính xác!" : "✗ Chưa đúng."}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">{rule.quiz.explanation}</p>
          </div>
        )}
      </section>

      <section className="space-y-2">
        <SectionLabel>Speaking practice</SectionLabel>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-lg font-bold text-slate-900">{rule.speakingPractice.targetEnglish}</p>
          <p className="mt-1 text-sm text-slate-600">{rule.speakingPractice.vietnameseHint}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(rule.speakingPractice.targetEnglish)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-600 transition active:scale-95 active:bg-rose-200"
            >
              <span aria-hidden>🔊</span>
              Nghe
            </button>
            <MicButton
              label="Bắt đầu nói"
              busy={speakingMic.state === "listening"}
              onClick={speakingMic.start}
            />
          </div>
          {speakingMic.state === "done" && (
            <p
              className={`mt-2 text-sm font-semibold ${
                matchesTarget(speakingMic.transcript, rule.speakingPractice.targetEnglish)
                  ? "text-emerald-600"
                  : "text-slate-500"
              }`}
            >
              {matchesTarget(speakingMic.transcript, rule.speakingPractice.targetEnglish)
                ? `✓ Nói đúng: "${speakingMic.transcript}"`
                : `Bạn nói: "${speakingMic.transcript}" — thử lại nhé!`}
            </p>
          )}
          {speakingMic.state === "error" && (
            <p className="mt-2 text-xs text-slate-400">{getSpeechErrorMessage(speakingMic.errorCode)}</p>
          )}
          <div className="mt-4 flex gap-2 border-t border-slate-100 pt-3">
            <button
              type="button"
              onClick={() => setRuleReviewOverride(rule.id, "review")}
              className={`flex-1 rounded-xl border px-3 py-2 text-xs font-bold transition active:scale-95 ${
                needsReview
                  ? "border-rose-400 bg-rose-500 text-white"
                  : "border-rose-200 bg-rose-50 text-rose-600"
              }`}
            >
              Cần ôn lại
            </button>
            <button
              type="button"
              onClick={() => setRuleReviewOverride(rule.id, "mastered")}
              className={`flex-1 rounded-xl px-3 py-2 text-xs font-bold text-white transition active:scale-95 ${
                isMastered ? "bg-emerald-600" : "bg-emerald-500"
              }`}
            >
              Đã nhớ
            </button>
          </div>
        </div>
      </section>

      <button type="button" onClick={() => onContinue(quizCorrect)} className="btn-primary w-full text-lg">
        Tiếp tục
      </button>
    </div>
  );
}
