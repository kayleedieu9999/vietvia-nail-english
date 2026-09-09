"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Lesson } from "@/types/content";
import { RoundQuestion, buildDailyRound, buildLessonRound, getScoreResult } from "@/lib/lesson-engine";
import { recordLessonCompletion, setLastOpenedLesson } from "@/lib/progress";
import SalonScene from "@/components/SalonScene";
import QuestionPrompt, { questionLabel } from "@/components/lesson/QuestionPrompt";
import AnswerChoices from "@/components/lesson/AnswerChoices";
import FeedbackPanel from "@/components/lesson/FeedbackPanel";
import ResultCard from "@/components/lesson/ResultCard";

type Screen = "intro" | "quiz" | "result";

/** Plain-data description of what round to build — kept serializable so a Server Component page can pass it straight through. */
export type RoundSource = { type: "lesson"; lesson: Lesson } | { type: "daily"; count: number };

function buildRoundFromSource(source: RoundSource): RoundQuestion[] {
  return source.type === "lesson" ? buildLessonRound(source.lesson) : buildDailyRound(source.count);
}

function questionCountFromSource(source: RoundSource): number {
  return source.type === "lesson" ? source.lesson.questions.length : source.count;
}

interface LessonPlayerProps {
  source: RoundSource;
  title: string;
  topicLabel?: string;
  description: string;
  checklist: string[];
  coverImage?: string;
  badgeEmoji?: string;
  /** Lesson slug to save best score against. Omit for rounds that shouldn't be tracked (e.g. Daily 5). */
  progressKey?: string;
  homeHref?: string;
  otherLessonsHref: string;
  otherLessonsLabel?: string;
  nextLessonHref?: string;
}

export default function LessonPlayer({
  source,
  title,
  topicLabel,
  description,
  checklist,
  coverImage,
  badgeEmoji = "📚",
  progressKey,
  homeHref = "/",
  otherLessonsHref,
  otherLessonsLabel = "CHỌN BÀI KHÁC",
  nextLessonHref,
}: LessonPlayerProps) {
  const questionCount = questionCountFromSource(source);
  const router = useRouter();
  const [screen, setScreen] = useState<Screen>("intro");
  const [round, setRound] = useState<RoundQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (progressKey) setLastOpenedLesson(progressKey);
  }, [progressKey]);

  function startRound() {
    setRound(buildRoundFromSource(source));
    setCurrentIndex(0);
    setSelectedChoiceId(null);
    setScore(0);
    setScreen("quiz");
  }

  function handleSelect(choiceId: string) {
    if (selectedChoiceId !== null) return;
    setSelectedChoiceId(choiceId);
    if (choiceId === round[currentIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    const isLast = currentIndex === round.length - 1;
    if (isLast) {
      if (progressKey) {
        recordLessonCompletion(progressKey, score, round.length);
      }
      setScreen("result");
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedChoiceId(null);
  }

  if (screen === "intro" || round.length === 0) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center px-6 py-10">
        <div className="w-full max-w-sm text-center">
          <p className="text-lg font-extrabold tracking-wide text-rose-500">VietVia</p>
          {topicLabel && (
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-orange-500">
              {topicLabel}
            </p>
          )}

          <div className="mt-5">
            <SalonScene badgeEmoji={badgeEmoji} imageUrl={coverImage} />
          </div>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900">
            {title}
          </h1>

          <p className="mt-4 text-base text-slate-600">{description}</p>

          <button
            type="button"
            onClick={startRound}
            className="mt-8 w-full rounded-2xl bg-rose-500 px-6 py-5 text-lg font-bold text-white shadow-sm shadow-rose-300 transition active:scale-[0.98] active:bg-rose-600"
          >
            BẮT ĐẦU {questionCount} CÂU
          </button>

          <ul className="mt-6 space-y-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-center justify-center gap-2 text-sm text-slate-600">
                <span className="text-emerald-500">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href={homeHref}
            className="mt-8 inline-block text-sm font-semibold text-rose-400 underline-offset-2 hover:underline"
          >
            ← Về trang chủ VietVia
          </Link>
        </div>
      </div>
    );
  }

  if (screen === "quiz") {
    const question = round[currentIndex];
    const hasAnswered = selectedChoiceId !== null;
    const isCorrect = selectedChoiceId === question.correctAnswer;

    return (
      <div className="flex min-h-dvh flex-col px-5 py-6">
        <div className="mx-auto w-full max-w-sm flex-1">
          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-500">
              Câu {currentIndex + 1} / {round.length}
            </p>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-rose-100">
              <div
                className="h-full rounded-full bg-rose-500 transition-all"
                style={{ width: `${((currentIndex + 1) / round.length) * 100}%` }}
              />
            </div>
            {topicLabel && (
              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-orange-500">
                {topicLabel}
              </p>
            )}
          </div>

          <SalonScene badgeEmoji={question.badgeEmoji ?? badgeEmoji} imageUrl={question.imageUrl ?? coverImage} />

          <div className="mt-4">
            <QuestionPrompt question={question} />
          </div>

          <p className="mt-6 mb-3 text-base font-semibold text-slate-700">
            {questionLabel(question)}
          </p>

          <AnswerChoices
            question={question}
            selectedChoiceId={selectedChoiceId}
            onSelect={handleSelect}
          />

          {hasAnswered && <FeedbackPanel question={question} isCorrect={isCorrect} />}
        </div>

        {hasAnswered && (
          <div className="mx-auto mt-6 w-full max-w-sm">
            <button
              type="button"
              onClick={handleNext}
              className="w-full rounded-2xl bg-rose-500 px-6 py-4 text-lg font-bold text-white shadow-sm shadow-rose-300 transition active:scale-[0.98] active:bg-rose-600"
            >
              CÂU TIẾP THEO →
            </button>
          </div>
        )}
      </div>
    );
  }

  const result = getScoreResult(score, round.length);

  return (
    <ResultCard score={score} total={round.length} result={result}>
      <button
        type="button"
        onClick={startRound}
        className="w-full rounded-2xl bg-rose-500 px-6 py-4 text-lg font-bold text-white shadow-sm shadow-rose-300 transition active:scale-[0.98] active:bg-rose-600"
      >
        THỬ LẠI
      </button>
      {nextLessonHref && (
        <button
          type="button"
          onClick={() => router.push(nextLessonHref)}
          className="w-full rounded-2xl bg-white px-6 py-4 text-lg font-bold text-rose-500 shadow-sm ring-1 ring-rose-200 transition active:scale-[0.98]"
        >
          BÀI TIẾP THEO
        </button>
      )}
      <button
        type="button"
        onClick={() => router.push(otherLessonsHref)}
        className="w-full rounded-2xl bg-white px-6 py-4 text-lg font-bold text-orange-500 shadow-sm ring-1 ring-orange-200 transition active:scale-[0.98]"
      >
        {otherLessonsLabel}
      </button>
    </ResultCard>
  );
}
