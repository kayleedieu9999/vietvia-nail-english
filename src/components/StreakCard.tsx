"use client";

import { useProgress } from "@/lib/progress";
import { computeStreak, computeWeekActivity, WEEKDAY_LABELS } from "@/lib/streak";

/** Weekday streak card — real per-day activity derived from lesson `lastPlayedAt` timestamps, no fabricated data. */
export default function StreakCard() {
  const progress = useProgress();
  const { streakDays } = computeStreak(progress.lessons);
  const week = computeWeekActivity(progress.lessons);

  return (
    <div className="card-surface flex h-full flex-col">
      <div className="flex items-center gap-2">
        <span className="text-xl">🔥</span>
        <p className="text-base font-extrabold text-slate-900 lg:text-lg">{streakDays} ngày liên tiếp</p>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1.5 text-center">
        {WEEKDAY_LABELS.map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-1.5">
            <span className="text-[11px] font-semibold text-slate-400">{label}</span>
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                week[i]?.active
                  ? "bg-rose-500 text-white"
                  : "border border-dashed border-slate-300 text-slate-300"
              }`}
            >
              {week[i]?.active ? "✓" : ""}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
