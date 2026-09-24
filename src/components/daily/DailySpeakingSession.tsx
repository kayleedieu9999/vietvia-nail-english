"use client";

import { useState } from "react";
import Link from "next/link";
import { RoundQuestion } from "@/lib/lesson-engine";
import SpeakingTurnCard from "./SpeakingTurnCard";

type Screen = "intro" | "practice" | "complete";

interface DailySpeakingSessionProps {
  initialRound: RoundQuestion[];
}

/**
 * "Luyện nói" / "5 câu hôm nay" — real speaking practice, not a quiz.
 * Owns the 5-turn flow (intro → 5 spoken turns → completion) and delegates
 * each turn's actual speak/listen/feedback UI to `SpeakingTurnCard`. A
 * "turn" only counts once the learner has actually spoken (see
 * `SpeakingTurnCard`'s `onSpoken`), not just when a question is shown.
 */
export default function DailySpeakingSession({ initialRound }: DailySpeakingSessionProps) {
  const [screen, setScreen] = useState<Screen>("intro");
  const [round, setRound] = useState<RoundQuestion[]>(initialRound);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [spokenCount, setSpokenCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [isLoadingRound, setIsLoadingRound] = useState(false);

  function handleAdvance() {
    if (currentIndex >= round.length - 1) {
      setScreen("complete");
      return;
    }
    setCurrentIndex((i) => i + 1);
  }

  async function startFreshRound() {
    setIsLoadingRound(true);
    try {
      const res = await fetch("/api/daily");
      const fresh: RoundQuestion[] = await res.json();
      setRound(fresh);
    } finally {
      setIsLoadingRound(false);
    }
    setCurrentIndex(0);
    setSpokenCount(0);
    setReviewCount(0);
    setScreen("practice");
  }

  if (screen === "intro") {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center px-6 py-10">
        <div className="w-full max-w-sm text-center">
          <p className="text-lg font-extrabold tracking-wide text-rose-500">VietVia</p>

          <div className="mt-5 flex items-center justify-center rounded-2xl bg-rose-50 py-10">
            <span className="text-5xl" aria-hidden>
              🎤
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900">5 CÂU HÔM NAY</h1>
          <p className="mt-4 text-base text-slate-600">
            Nghe khách nói, rồi trả lời bằng tiếng Anh thật — 5 lượt nói ngẫu nhiên từ mọi chủ đề.
          </p>

          <button
            type="button"
            onClick={() => setScreen("practice")}
            className="mt-8 w-full rounded-2xl bg-rose-500 px-6 py-5 text-lg font-bold text-white shadow-sm shadow-rose-300 transition active:scale-[0.98] active:bg-rose-600"
          >
            BẮT ĐẦU 5 LƯỢT NÓI
          </button>

          <ul className="mt-6 space-y-2">
            {["Không cần đăng nhập", "Chỉ khoảng 2 phút", "Trả lời bằng giọng nói thật"].map((item) => (
              <li key={item} className="flex items-center justify-center gap-2 text-sm text-slate-600">
                <span className="text-emerald-500">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/"
            className="mt-8 inline-block text-sm font-semibold text-rose-400 underline-offset-2 hover:underline"
          >
            ← Về trang chủ VietVia
          </Link>
        </div>
      </div>
    );
  }

  if (screen === "practice") {
    const question = round[currentIndex];
    if (!question) return null;

    return (
      <div className="flex min-h-dvh flex-col px-5 py-6">
        <div className="mx-auto w-full max-w-sm flex-1">
          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-500">
              {spokenCount} / {round.length} lượt nói
            </p>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-rose-100">
              <div
                className="h-full rounded-full bg-rose-500 transition-all"
                style={{ width: `${(spokenCount / round.length) * 100}%` }}
              />
            </div>
          </div>

          <SpeakingTurnCard
            key={question.id}
            question={question}
            onSpoken={() => setSpokenCount((c) => c + 1)}
            onMarkedReview={() => setReviewCount((c) => c + 1)}
            onAdvance={handleAdvance}
            isLast={currentIndex === round.length - 1}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 py-10">
      <div className="w-full max-w-sm text-center">
        <span className="text-5xl" aria-hidden>
          🎉
        </span>
        <h1 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900">
          Bạn đã hoàn thành {round.length} lượt nói hôm nay!
        </h1>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="card-surface">
            <p className="text-2xl font-extrabold text-rose-500">{spokenCount}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">câu đã luyện</p>
          </div>
          <div className="card-surface">
            <p className="text-2xl font-extrabold text-rose-500">{reviewCount}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">câu cần ôn lại</p>
          </div>
        </div>

        <button
          type="button"
          onClick={startFreshRound}
          disabled={isLoadingRound}
          className="mt-8 w-full rounded-2xl bg-rose-500 px-6 py-4 text-lg font-bold text-white shadow-sm shadow-rose-300 transition active:scale-[0.98] active:bg-rose-600 disabled:opacity-60"
        >
          {isLoadingRound ? "Đang tải..." : "Luyện thêm 5 câu"}
        </button>
        <Link
          href="/on-tap"
          className="mt-3 block w-full rounded-2xl bg-white px-6 py-4 text-lg font-bold text-rose-500 shadow-sm ring-1 ring-rose-200 transition active:scale-[0.98]"
        >
          Xem câu cần ôn lại
        </Link>
      </div>
    </div>
  );
}
