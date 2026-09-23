"use client";

import Link from "next/link";
import Image from "next/image";
import { useReviewItems } from "@/lib/reviewItems";
import { PracticeItem } from "@/lib/dailyPronunciation";
import { GrammarReviewEntry } from "@/data/grammar";

interface ReviewCardProps {
  /** Server-built Tiệm Nails pool, same prop already passed to DailyPronunciationCard — needed here too so nails review items can be previewed. */
  nailsPool: PracticeItem[];
  /** ruleId → title/targetEnglish/vietnameseHint (a few KB, not the full 100-rule teaching content). */
  grammarPool: Record<string, GrammarReviewEntry>;
}

/**
 * "Câu cần ôn lại" — real items from the SAME shared review store used by
 * `/on-tap` and every collection page (`src/lib/reviewItems.ts`), spanning
 * Từ vựng/Câu nói/Động từ/Phrasal Verbs/Tiệm Nails/Ngữ pháp, not just
 * grammar quiz misses. The side visual is a realistic photo (a hand holding
 * a phone showing a warm, burgundy learning-app screen).
 */
export default function ReviewCard({ nailsPool, grammarPool }: ReviewCardProps) {
  const items = useReviewItems(nailsPool, grammarPool);
  const preview = items.slice(0, 3);

  return (
    <div className="card-surface flex h-full flex-col bg-orange-50 lg:p-7">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm font-extrabold text-slate-900 lg:text-base">
          <span aria-hidden>🏆</span> {items.length} câu cần ôn lại
        </p>
        <Link href="/on-tap" className="text-xs font-semibold text-rose-500">
          Xem tất cả
        </Link>
      </div>

      <div className="mt-4 flex flex-1 gap-4">
        <div className="flex-1 space-y-2.5">
          {preview.length > 0 ? (
            preview.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-800"
              >
                <span aria-hidden>🔈</span>
                <span className="truncate">{item.english}</span>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-500">
              Chưa có câu nào cần ôn lại — cứ luyện tiếp, bấm &ldquo;Cần ôn lại&rdquo; để lưu câu vào đây.
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

      <Link href="/on-tap" className="btn-primary mt-5 w-full">
        Ôn ngay <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
