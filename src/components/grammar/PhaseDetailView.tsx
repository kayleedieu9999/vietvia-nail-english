"use client";

import Link from "next/link";
import { GrammarPhaseMeta } from "@/types/grammar";
import { GrammarRuleSummary } from "@/data/grammar";
import { useGrammarProgress } from "@/lib/grammarProgress";

interface PhaseDetailViewProps {
  phase: GrammarPhaseMeta;
  rules: GrammarRuleSummary[];
}

export default function PhaseDetailView({ phase, rules }: PhaseDetailViewProps) {
  const progress = useGrammarProgress();
  const completed = rules.filter((rule) => progress[rule.id]?.completed).length;

  return (
    <div className="mx-auto w-full max-w-sm px-5 pb-16 pt-8">
      <Link
        href="/lo-trinh/ngu-phap"
        className="text-sm font-semibold text-rose-400 underline-offset-2 hover:underline"
      >
        ← 100 Quy tắc ngữ pháp
      </Link>

      <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-rose-500">
        CHẶNG {phase.phaseNumber}
      </p>
      <h1 className="mt-1 text-2xl font-extrabold leading-tight text-slate-900">{phase.titleVi}</h1>
      <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {phase.englishTopic}
      </p>
      <p className="mt-2 text-sm font-semibold text-slate-700">
        {completed} / {rules.length}
      </p>

      <div className="mt-4 space-y-2">
        {rules.map((rule) => {
          const done = progress[rule.id]?.completed ?? false;
          return (
            <Link
              key={rule.id}
              href={`/lo-trinh/ngu-phap/rule/${rule.id}`}
              className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-rose-100 transition active:scale-[0.98]"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                  done ? "bg-emerald-100 text-emerald-600" : "bg-rose-50 text-slate-500"
                }`}
              >
                {done ? "✓" : rule.ruleNumber}
              </span>
              <span className="min-w-0 flex-1 truncate text-sm font-bold text-slate-900">
                {rule.ruleNumber}. {rule.title}
              </span>
              <span className="text-slate-300">›</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
