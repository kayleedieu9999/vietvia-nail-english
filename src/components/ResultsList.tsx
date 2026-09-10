"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { LessonSummary } from "@/types/content";
import { getTopicBySlug } from "@/data/topics";

interface ResultsListProps {
  summaries: LessonSummary[];
}

export default function ResultsList({ summaries }: ResultsListProps) {
  const progress = useProgress();
  const completedLessons = summaries
    .filter((lesson) => progress.lessons[lesson.slug])
    .map((lesson) => ({ lesson, progress: progress.lessons[lesson.slug] }));

  if (completedLessons.length === 0) {
    return (
      <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-center ring-1 ring-slate-100">
        <p className="text-base font-bold text-slate-500">Chưa có bài nào hoàn thành</p>
        <p className="mt-2 text-sm text-slate-400">
          Luyện xong một bài, kết quả sẽ hiện ở đây.
        </p>
        <Link
          href="/daily"
          className="mt-5 inline-block rounded-2xl bg-rose-500 px-6 py-3 text-sm font-bold text-white shadow-sm shadow-rose-300"
        >
          LUYỆN 5 CÂU HÔM NAY
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {completedLessons.map(({ lesson, progress: lessonProgress }) => {
        const topic = getTopicBySlug(lesson.topicId);
        return (
          <Link
            key={lesson.id}
            href={`/lesson/${lesson.slug}`}
            className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100 transition active:scale-[0.98]"
          >
            <span className="text-2xl">{topic?.emoji ?? "📚"}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-base font-bold text-slate-900">{lesson.title}</p>
              <p className="mt-0.5 text-sm text-emerald-600">
                Điểm cao nhất: {lessonProgress.bestScore}/{lessonProgress.bestTotal}
              </p>
              <p className="mt-0.5 text-xs text-slate-400">
                Đã luyện {lessonProgress.timesCompleted} lần
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
