"use client";

import Link from "next/link";
import { GrammarPhaseMeta } from "@/types/grammar";
import { GrammarRuleSummary } from "@/data/grammar";
import { useGrammarProgress } from "@/lib/grammarProgress";
import {
  nextIncompletePhase,
  overallGrammarProgress,
  phaseProgress,
  reviewQueueRuleIds,
} from "@/lib/grammarEngine";
import PhaseCard from "@/components/grammar/PhaseCard";

interface GrammarProgramViewProps {
  phases: GrammarPhaseMeta[];
  ruleSummaries: GrammarRuleSummary[];
}

export default function GrammarProgramView({ phases, ruleSummaries }: GrammarProgramViewProps) {
  const progress = useGrammarProgress();
  const overall = overallGrammarProgress(ruleSummaries, progress);
  const reviewCount = reviewQueueRuleIds(ruleSummaries, progress).length;
  const next = nextIncompletePhase(phases, ruleSummaries, progress);
  const overallPct = overall.total > 0 ? (overall.completed / overall.total) * 100 : 0;

  return (
    <div className="mx-auto w-full max-w-sm px-5 pb-16 pt-8">
      <Link
        href="/lo-trinh"
        className="text-sm font-semibold text-rose-400 underline-offset-2 hover:underline"
      >
        ← Lộ trình
      </Link>
      <h1 className="mt-3 text-2xl font-extrabold leading-tight text-slate-900">
        100 Quy tắc ngữ pháp cần thiết
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Không cần học ngữ pháp quá khó. Mình đi từng phần ngắn và dùng ngay trong giao tiếp.
      </p>

      <div className="mt-5 space-y-2 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
        <div className="h-2 w-full overflow-hidden rounded-full bg-rose-100">
          <div className="h-full rounded-full bg-rose-500" style={{ width: `${overallPct}%` }} />
        </div>
        <p className="text-lg font-extrabold text-slate-900">
          Bạn đã luyện {overall.completed} / {overall.total}
        </p>
        {reviewCount > 0 && (
          <p className="text-sm font-bold text-orange-500">{reviewCount} câu nên ôn lại</p>
        )}
        {next && (
          <p className="text-sm text-slate-500">
            Chặng tiếp theo: CHẶNG {next.phaseNumber} — {next.titleVi}
          </p>
        )}
      </div>

      <div className="mt-5 space-y-3">
        {phases.map((phase) => {
          const rulesInPhase = ruleSummaries.filter((rule) => rule.phaseNumber === phase.phaseNumber);
          return (
            <PhaseCard
              key={phase.phaseNumber}
              phase={phase}
              progress={phaseProgress(rulesInPhase, progress)}
            />
          );
        })}
      </div>
    </div>
  );
}
