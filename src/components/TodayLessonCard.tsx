"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { LessonSummary } from "@/types/content";
import { getTopicBySlug } from "@/data/topics";

interface TodayLessonCardProps {
  /** Lightweight lesson metadata for every lesson on the site (server-computed, no question content). */
  summaries: LessonSummary[];
}

/**
 * The dashboard's visual hero — the one lesson to start with today. Picks
 * the first lesson the learner hasn't completed yet (falls back to the
 * first lesson overall). Rich burgundy card per the reference design, with
 * a large soft icon badge standing in for lesson artwork (the site has no
 * per-lesson photography, only topic emoji + the illustrated salon scene).
 */
export default function TodayLessonCard({ summaries }: TodayLessonCardProps) {
  const progress = useProgress();
  const recommended = summaries.find((s) => !progress.lessons[s.slug]) ?? summaries[0];
  if (!recommended) return null;

  const topic = getTopicBySlug(recommended.topicId);
  const estimatedMinutes = Math.max(3, Math.round(recommended.questionCount * 0.6));

  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500 to-rose-600 p-6 text-white lg:p-8">
      <div
        aria-hidden
        className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 lg:h-56 lg:w-56"
      />
      <div
        aria-hidden
        className="absolute -bottom-10 right-10 flex h-28 w-28 items-center justify-center rounded-full bg-white/10 text-6xl lg:h-36 lg:w-36 lg:text-7xl"
      >
        {topic?.emoji ?? "💅"}
      </div>

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-extrabold uppercase tracking-wide text-white/80 lg:text-sm">
            Bài của bạn hôm nay
          </p>
          <span className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold">
            ⭐ Đề xuất cho bạn
          </span>
        </div>
        <p className="mt-3 max-w-sm text-xl font-extrabold leading-snug lg:text-[28px]">
          {recommended.title}
        </p>
        <p className="mt-1.5 text-sm text-white/85 lg:text-base">
          {recommended.questionCount} câu · Khoảng {estimatedMinutes} phút · Luyện nghe &amp; nói
        </p>
      </div>

      <Link
        href={`/lesson/${recommended.slug}`}
        className="btn-pill-on-dark relative mt-6 w-full lg:mt-8 lg:w-fit lg:px-10"
      >
        <span aria-hidden>▶</span> Bắt đầu luyện
      </Link>
    </div>
  );
}
