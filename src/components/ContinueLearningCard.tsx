"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { getLessonBySlug } from "@/data/lessons";
import { getTopicBySlug } from "@/data/topics";

export default function ContinueLearningCard() {
  const progress = useProgress();
  const slug = progress.lastOpenedLessonSlug;
  const lesson = slug ? getLessonBySlug(slug) : undefined;
  if (!lesson) return null;

  const topic = getTopicBySlug(lesson.topicId);
  const lessonProgress = progress.lessons[lesson.slug];

  return (
    <section className="mx-auto mt-8 w-full max-w-sm">
      <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-500">
        Tiếp tục luyện
      </h2>
      <Link
        href={`/lesson/${lesson.slug}`}
        className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100 transition active:scale-[0.98]"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xl">
          🔁
        </div>
        <div className="min-w-0 flex-1">
          {topic && (
            <p className="text-xs font-bold uppercase tracking-wide text-orange-500">
              {topic.title}
            </p>
          )}
          <p className="mt-0.5 truncate text-base font-bold text-slate-900">{lesson.title}</p>
          {lessonProgress && (
            <p className="mt-0.5 text-sm text-emerald-600">
              Điểm cao nhất: {lessonProgress.bestScore}/{lessonProgress.bestTotal}
            </p>
          )}
        </div>
        <span className="shrink-0 rounded-xl bg-rose-500 px-4 py-2 text-sm font-bold text-white">
          Tiếp tục
        </span>
      </Link>
    </section>
  );
}
