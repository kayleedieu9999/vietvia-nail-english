"use client";

import Link from "next/link";
import { useGrammarProgress } from "@/lib/grammarProgress";

interface ReviewCardProps {
  /** ruleId → its speaking-practice sentence (a few KB, not the full 100-rule teaching content). */
  reviewSentencePool: Record<string, string>;
}

/**
 * "Câu cần ôn lại" — real sentences from grammar rules the learner actually
 * answered wrong (`quizCorrect === false` in `grammarProgress`), not
 * placeholder text. Includes a small CSS phone mockup (not a stock photo —
 * the site has no such asset) previewing the homepage, echoing the
 * reference design's phone-preview panel.
 */
export default function ReviewCard({ reviewSentencePool }: ReviewCardProps) {
  const progress = useGrammarProgress();
  const wrongRuleIds = Object.entries(progress)
    .filter(([, p]) => p.quizCorrect === false)
    .map(([id]) => id);
  const sentences = wrongRuleIds
    .map((id) => reviewSentencePool[id])
    .filter((s): s is string => Boolean(s))
    .slice(0, 3);

  return (
    <div className="card-surface flex h-full flex-col bg-orange-50 lg:p-7">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm font-extrabold text-slate-900 lg:text-base">
          <span aria-hidden>🏆</span> {wrongRuleIds.length} câu cần ôn lại
        </p>
        <Link href="/lo-trinh/ngu-phap" className="text-xs font-semibold text-rose-500">
          Xem tất cả
        </Link>
      </div>

      <div className="mt-4 flex flex-1 gap-4">
        <div className="flex-1 space-y-2.5">
          {sentences.length > 0 ? (
            sentences.map((sentence, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-800"
              >
                <span aria-hidden>🔈</span>
                <span className="truncate">{sentence}</span>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-500">
              Chưa có câu nào cần ôn lại — cứ luyện tiếp, câu trả lời sai sẽ xuất hiện ở đây.
            </p>
          )}
        </div>

        {/* Small CSS phone mockup — a stand-in preview, not a real screenshot asset. */}
        <div className="hidden w-24 shrink-0 rounded-[1.4rem] border-4 border-slate-800 bg-canvas p-1.5 lg:block">
          <div className="rounded-xl bg-white p-1.5">
            <p className="text-[8px] font-extrabold text-rose-600">💅 VietVia</p>
            <p className="mt-1 text-[7px] font-bold text-slate-700">Chào bạn 👋</p>
            <div className="mt-1 rounded bg-rose-100 p-1">
              <div className="h-1 w-2/3 rounded-full bg-rose-400" />
            </div>
            <div className="mt-1 space-y-1">
              <div className="h-3 rounded bg-well" />
              <div className="h-3 rounded bg-well" />
            </div>
          </div>
        </div>
      </div>

      <Link href="/lo-trinh/ngu-phap" className="btn-primary mt-5 w-full">
        Ôn ngay <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
