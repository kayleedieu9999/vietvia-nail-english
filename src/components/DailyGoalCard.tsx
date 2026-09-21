"use client";

import { useProgress } from "@/lib/progress";
import { computeStreak, DAILY_GOAL_MINUTES } from "@/lib/streak";

/**
 * "Minutes today" is always an estimate (see `lib/streak.ts` — 0.6 min per
 * question, the same heuristic the lesson cards already use), since the app
 * doesn't track wall-clock time. Labeled plainly as a goal, not a stopwatch.
 */
export default function DailyGoalCard() {
  const progress = useProgress();
  const { minutesToday } = computeStreak(progress.lessons);
  const pct = Math.min(100, Math.round((minutesToday / DAILY_GOAL_MINUTES) * 100));

  return (
    <div className="card-surface flex h-full flex-col justify-between">
      <div>
        <p className="text-sm font-extrabold text-slate-500">Mục tiêu hôm nay</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg">⏰</span>
          <p className="text-lg font-extrabold text-slate-900">
            {minutesToday} / {DAILY_GOAL_MINUTES} phút
          </p>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-well">
            <div className="h-full rounded-full bg-rose-500 transition-all" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-sm font-extrabold text-rose-500">{pct}%</span>
        </div>
      </div>
      <p className="mt-4 text-sm italic text-slate-500">
        &quot;Kiên trì hôm nay, tự tin hơn ngày mai!&quot;
      </p>
    </div>
  );
}
