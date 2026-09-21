"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { computeWeekActivity, computeWeeklySummary, WEEKDAY_LABELS } from "@/lib/streak";

/** Weekly totals + a per-weekday mini bar chart, all derived from real localStorage progress (no fabricated chart data). */
export default function WeeklyProgressCard() {
  const progress = useProgress();
  const weekly = computeWeeklySummary(progress.lessons);
  const week = computeWeekActivity(progress.lessons);
  const maxQuestions = Math.max(1, ...week.map((d) => d.questionCount));

  return (
    <div className="card-surface flex h-full flex-col lg:p-7">
      <div className="flex items-center justify-between">
        <p className="text-sm font-extrabold text-slate-900 lg:text-base">Tiến bộ tuần này</p>
        <Link href="/results" className="flex items-center gap-1 text-xs font-semibold text-rose-500">
          Xem chi tiết <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-4 flex gap-2">
        <div className="stat-chip">
          <span aria-hidden>🔥</span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-slate-900">{weekly.streakDays}</p>
            <p className="text-[11px] text-slate-500">ngày luyện</p>
          </div>
        </div>
        <div className="stat-chip">
          <span aria-hidden>🎤</span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-slate-900">{weekly.questionsThisWeek}</p>
            <p className="text-[11px] text-slate-500">câu đã nói</p>
          </div>
        </div>
        <div className="stat-chip">
          <span aria-hidden>⏱</span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-slate-900">{weekly.estimatedMinutesThisWeek}</p>
            <p className="text-[11px] text-slate-500">phút</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-1 items-end justify-between gap-2">
        {week.map((day, i) => (
          <div key={WEEKDAY_LABELS[i]} className="flex flex-1 flex-col items-center gap-1.5">
            <div className="flex h-16 w-full items-end overflow-hidden rounded-md bg-well">
              <div
                className={`w-full rounded-md transition-all ${day.active ? "bg-rose-500" : "bg-transparent"}`}
                style={{ height: `${Math.max(6, (day.questionCount / maxQuestions) * 100)}%` }}
              />
            </div>
            <span className="text-[11px] font-semibold text-slate-400">{WEEKDAY_LABELS[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
