import Link from "next/link";
import { GrammarPhaseMeta } from "@/types/grammar";

interface PhaseCompletionProps {
  phase: GrammarPhaseMeta;
  masteredCount: number;
  reviewCount: number;
  totalCount: number;
  nextPhase?: GrammarPhaseMeta;
  nextPhaseFirstRuleHref?: string;
}

export default function PhaseCompletion({
  phase,
  masteredCount,
  reviewCount,
  totalCount,
  nextPhase,
  nextPhaseFirstRuleHref,
}: PhaseCompletionProps) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-sm flex-col items-center justify-center px-5 py-10 text-center">
      <p className="text-4xl">🎉</p>
      <h1 className="mt-3 text-2xl font-extrabold leading-tight text-slate-900">
        Bạn đã hoàn thành Chặng {phase.phaseNumber}!
      </h1>
      <p className="mt-2 text-base text-slate-600">
        Bạn có thể dùng &quot;{phase.titleVi}&quot; tự nhiên hơn khi nói chuyện với khách.
      </p>

      <div className="card-surface mt-6 w-full space-y-2">
        <p className="text-sm font-bold text-slate-800">
          {totalCount}/{totalCount} bài hoàn thành
        </p>
        <p className="text-sm font-bold text-emerald-600">{masteredCount} câu thành thạo</p>
        {reviewCount > 0 && (
          <p className="text-sm font-bold text-orange-600">{reviewCount} câu nên ôn lại</p>
        )}
        {nextPhase && (
          <p className="pt-2 text-sm text-slate-500">
            Chặng tiếp theo — CHẶNG {nextPhase.phaseNumber} — {nextPhase.titleVi}
          </p>
        )}
      </div>

      <div className="mt-6 w-full space-y-3">
        {nextPhase && nextPhaseFirstRuleHref && (
          <Link href={nextPhaseFirstRuleHref} className="btn-primary block w-full text-lg">
            Tiếp tục chặng {nextPhase.phaseNumber}
          </Link>
        )}
        <Link href="/lo-trinh/ngu-phap" className="btn-secondary block w-full text-lg">
          Về lộ trình
        </Link>
      </div>
    </div>
  );
}
