"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LessonSummary } from "@/types/content";
import { useProgress } from "@/lib/progress";
import LessonList from "@/components/LessonList";

interface NailSubTopicHubProps {
  lessons: LessonSummary[];
  topicTitle: string;
  topicDescription: string;
  topicEmoji: string;
}

/**
 * Page for one of the 7 "Hội thoại Nails" sub-topics (e.g. "Small Talk"):
 * breadcrumb back to the hub, progress, a "Tiếp tục" button that jumps to
 * the first not-yet-completed lesson in *this* topic, a search box, then
 * the lesson list. Each of the 7 topics renders through this same
 * component — no per-topic special-casing.
 */
export default function NailSubTopicHub({
  lessons,
  topicTitle,
  topicDescription,
  topicEmoji,
}: NailSubTopicHubProps) {
  const [query, setQuery] = useState("");
  const progress = useProgress();

  const completed = lessons.filter((l) => progress.lessons[l.slug]).length;
  const pct = lessons.length > 0 ? Math.round((completed / lessons.length) * 100) : 0;
  const nextLesson = lessons.find((l) => !progress.lessons[l.slug]) ?? lessons[0];

  const filtered = useMemo(() => {
    if (!query.trim()) return lessons;
    const q = query.trim().toLowerCase();
    return lessons.filter(
      (l) => l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q),
    );
  }, [lessons, query]);

  return (
    <div className="min-h-dvh px-5 pb-16 pt-8 lg:px-10 lg:pt-10">
      <div className="mx-auto w-full max-w-sm lg:max-w-[900px]">
        <p className="text-sm font-semibold text-rose-400">
          <Link href="/hoi-thoai-nails" className="underline-offset-2 hover:underline">
            Hội thoại Nails
          </Link>{" "}
          <span className="text-slate-300">›</span> {topicTitle}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-3xl">{topicEmoji}</span>
          <h1 className="text-2xl font-extrabold text-slate-900 lg:text-[32px]">{topicTitle}</h1>
        </div>
        <p className="mt-2 text-sm text-slate-600 lg:text-base">{topicDescription}</p>

        <div className="mt-4 flex items-center gap-3">
          <p className="text-sm font-semibold text-slate-500">{lessons.length} bài</p>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-well">
            <div className="h-full rounded-full bg-rose-500" style={{ width: `${pct}%` }} />
          </div>
          <p className="shrink-0 text-sm font-bold text-rose-500">
            {completed}/{lessons.length}
          </p>
        </div>

        {nextLesson && (
          <Link href={`/lesson/${nextLesson.slug}`} className="btn-primary mt-4 block w-full text-center">
            Tiếp tục <span aria-hidden>→</span>
          </Link>
        )}

        <div className="mt-5">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Tìm bài trong ${topicTitle}...`}
            className="input-search"
          />
        </div>

        <p className="mt-4 text-sm font-semibold text-slate-500">
          {filtered.length} / {lessons.length} bài
        </p>

        {filtered.length === 0 ? (
          <div className="mt-6 rounded-2xl bg-slate-50 p-6 text-center ring-1 ring-slate-100">
            <p className="text-base font-bold text-slate-500">Không tìm thấy bài hội thoại nào.</p>
            <p className="mt-2 text-sm text-slate-400">Thử từ khóa khác.</p>
          </div>
        ) : (
          <LessonList lessons={filtered} />
        )}
      </div>
    </div>
  );
}
