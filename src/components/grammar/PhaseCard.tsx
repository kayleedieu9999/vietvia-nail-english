import Link from "next/link";
import { GrammarPhaseMeta } from "@/types/grammar";
import { PhaseProgressResult, PhaseStatus } from "@/lib/grammarEngine";

function statusLabel(status: PhaseStatus): string {
  if (status === "done") return "Hoàn thành";
  if (status === "in_progress") return "Đang luyện";
  return "Chưa bắt đầu";
}

function ctaLabel(status: PhaseStatus): string {
  if (status === "done") return "Xem lại";
  if (status === "in_progress") return "Tiếp tục";
  return "Bắt đầu";
}

interface PhaseCardProps {
  phase: GrammarPhaseMeta;
  progress: PhaseProgressResult;
}

export default function PhaseCard({ phase, progress }: PhaseCardProps) {
  const pct = Math.round(Math.min(1, Math.max(0, progress.ratio)) * 100);

  return (
    <Link href={`/lo-trinh/ngu-phap/${phase.phaseNumber}`} className="card-surface-interactive block">
      <p className="text-xs font-extrabold uppercase tracking-wide text-rose-500">
        CHẶNG {phase.phaseNumber}
      </p>
      <p className="mt-1 text-lg font-extrabold text-slate-900">{phase.titleVi}</p>
      <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {phase.englishTopic}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{phase.descriptionVi}</p>

      <div className="mt-4 flex items-center gap-3 text-xs font-bold text-slate-500">
        <span>10 bài ngắn</span>
        <span aria-hidden>·</span>
        <span className={progress.status === "done" ? "text-emerald-600" : "text-orange-600"}>
          {statusLabel(progress.status)}
        </span>
      </div>

      <div className="mt-2 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-well">
          <div
            className="h-full rounded-full bg-rose-500 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-xs font-extrabold text-rose-500">{pct}%</span>
      </div>

      <span className="btn-primary mt-4 w-full">{ctaLabel(progress.status)}</span>
    </Link>
  );
}
