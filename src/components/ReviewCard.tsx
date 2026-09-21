"use client";

import Link from "next/link";
import Image from "next/image";
import { useGrammarProgress } from "@/lib/grammarProgress";

interface ReviewCardProps {
  /** ruleId → its speaking-practice sentence (a few KB, not the full 100-rule teaching content). */
  reviewSentencePool: Record<string, string>;
}

/**
 * "Câu cần ôn lại" — real sentences from grammar rules the learner actually
 * answered wrong (`quizCorrect === false` in `grammarProgress`), not
 * placeholder text. The side visual is a realistic photo (a hand holding a
 * phone showing a warm, burgundy learning-app screen) instead of the earlier
 * cartoon-ish CSS phone mockup.
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

        <div className="relative hidden w-24 shrink-0 overflow-hidden rounded-2xl lg:block">
          <Image
            src="/images/review-phone.png"
            alt="Học viên cầm điện thoại xem bài luyện tiếng Anh trên VietVia"
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
      </div>

      <Link href="/lo-trinh/ngu-phap" className="btn-primary mt-5 w-full">
        Ôn ngay <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
