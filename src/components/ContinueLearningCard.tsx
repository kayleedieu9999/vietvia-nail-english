"use client";

import Link from "next/link";
import Image from "next/image";
import { useProgress } from "@/lib/progress";
import { LessonSummary } from "@/types/content";

interface ContinueLearningCardProps {
  /**
   * Lightweight lesson metadata (no question text) for every lesson on the
   * site, passed down from a Server Component so this Client Component
   * never has to import the full (huge) lesson dataset itself.
   */
  summaries: LessonSummary[];
}

export default function ContinueLearningCard({ summaries }: ContinueLearningCardProps) {
  const progress = useProgress();
  const slug = progress.lastOpenedLessonSlug;
  const lesson = slug ? summaries.find((s) => s.slug === slug) : undefined;
  if (!lesson) return null;

  const lessonProgress = progress.lessons[lesson.slug];
  const pct = lessonProgress
    ? Math.round((lessonProgress.bestScore / lessonProgress.bestTotal) * 100)
    : 0;

  return (
    <Link href={`/lesson/${lesson.slug}`} className="card-surface-interactive flex h-full flex-col lg:p-7">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm font-extrabold text-slate-900 lg:text-base">
          <span aria-hidden>📊</span> Tiếp tục bài đang luyện
        </p>
        <span aria-hidden className="text-slate-300">
          ›
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl">
          <Image
            src="/images/continue-lesson-thumb.png"
            alt=""
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-bold text-slate-900">{lesson.title}</p>
          {lessonProgress && (
            <p className="mt-0.5 text-sm text-slate-500">
              {lessonProgress.bestScore} / {lessonProgress.bestTotal} câu
            </p>
          )}
        </div>
      </div>

      {lessonProgress && (
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-well">
          <div className="h-full rounded-full bg-rose-500 transition-all" style={{ width: `${pct}%` }} />
        </div>
      )}

      <span className="btn-primary mt-5 w-full">
        Tiếp tục luyện <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
