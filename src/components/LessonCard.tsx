import Link from "next/link";
import { LessonSummary } from "@/types/content";
import { LessonProgress } from "@/lib/progress";

const levelLabels: Record<LessonSummary["level"], string> = {
  beginner: "Cơ bản",
  intermediate: "Trung bình",
  advanced: "Nâng cao",
  practice: "Thực hành",
  situation: "Tình huống",
};

interface LessonCardProps {
  lesson: LessonSummary;
  index: number;
  progress?: LessonProgress;
}

export default function LessonCard({ lesson, index, progress }: LessonCardProps) {
  return (
    <Link
      href={`/lesson/${lesson.slug}`}
      className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100 transition active:scale-[0.98]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-lg font-extrabold text-rose-600">
        {index + 1}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-wide text-rose-400">
          Bài {index + 1}
        </p>
        <p className="mt-0.5 truncate text-base font-bold text-slate-900">{lesson.title}</p>
        <p className="mt-0.5 line-clamp-2 text-sm text-slate-500">{lesson.description}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-400">
          <span>{lesson.questionCount} câu</span>
          <span>{levelLabels[lesson.level]}</span>
          {progress && (
            <span className="text-emerald-600">
              {progress.bestScore}/{progress.bestTotal}
            </span>
          )}
        </div>
      </div>

      <span className="shrink-0 rounded-xl bg-rose-500 px-4 py-2 text-sm font-bold text-white">
        {progress ? "Tiếp tục" : "Bắt đầu"}
      </span>
    </Link>
  );
}
