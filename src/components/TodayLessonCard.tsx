"use client";

import Link from "next/link";
import Image from "next/image";
import { useProgress } from "@/lib/progress";
import { LessonSummary } from "@/types/content";

interface TodayLessonCardProps {
  /** Lightweight lesson metadata for every lesson on the site (server-computed, no question content). */
  summaries: LessonSummary[];
}

/**
 * The dashboard's visual hero — the one lesson to start with today. Picks
 * the first lesson the learner hasn't completed yet (falls back to the
 * first lesson overall). Real nail-salon photography on the right with a
 * burgundy gradient/scrim so the text on the left stays readable.
 */
export default function TodayLessonCard({ summaries }: TodayLessonCardProps) {
  const progress = useProgress();
  const recommended = summaries.find((s) => !progress.lessons[s.slug]) ?? summaries[0];
  if (!recommended) return null;

  const estimatedMinutes = Math.max(3, Math.round(recommended.questionCount * 0.6));

  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-6 text-white lg:p-8">
      <Image
        src="/images/today-lesson-photo.png"
        alt="Thợ nails đang sơn màu cho khách, ảnh minh họa bài luyện hôm nay"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 560px"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-rose-600 from-35% via-rose-600/75 via-60% to-rose-900/10"
      />

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
