"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useReviewItems, CONTENT_TYPE_LABELS, ReviewContentType } from "@/lib/reviewItems";
import { PracticeItem } from "@/lib/dailyPronunciation";
import { GrammarReviewEntry } from "@/data/grammar";
import ReviewItemCard from "./ReviewItemCard";

interface ReviewPageClientProps {
  nailsPool: PracticeItem[];
  grammarPool: Record<string, GrammarReviewEntry>;
}

const FILTER_ORDER: ReviewContentType[] = ["nail_sentence", "phrase", "vocabulary", "verb", "phrasal_verb", "grammar"];

export default function ReviewPageClient({ nailsPool, grammarPool }: ReviewPageClientProps) {
  const items = useReviewItems(nailsPool, grammarPool);
  const [filter, setFilter] = useState<ReviewContentType | "all">("all");
  const [query, setQuery] = useState("");

  const availableFilters = useMemo(
    () => FILTER_ORDER.filter((type) => items.some((item) => item.contentType === type)),
    [items],
  );

  const filtered = useMemo(() => {
    let list = filter === "all" ? items : items.filter((item) => item.contentType === filter);
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (item) => item.english.toLowerCase().includes(q) || item.vietnamese.toLowerCase().includes(q),
      );
    }
    return list;
  }, [items, filter, query]);

  return (
    <div className="min-h-dvh px-5 pb-20 pt-6 lg:px-10 lg:pb-24 lg:pt-10">
      <div className="mx-auto w-full max-w-sm lg:max-w-[900px]">
        <Link href="/" className="text-sm font-semibold text-rose-400 hover:underline">
          ← Hôm nay
        </Link>
        <h1 className="mt-3 text-2xl font-extrabold leading-tight text-slate-900 lg:text-[32px]">
          Câu cần ôn lại
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 lg:text-base">
          Những câu bạn đã đánh dấu để luyện thêm.
        </p>
        <p className="mt-3 text-sm font-bold text-slate-900">{items.length} câu cần ôn</p>

        {items.length > 0 && (
          <>
            <div className="mt-5">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm câu cần ôn..."
                className="input-search"
              />
            </div>

            {availableFilters.length > 1 && (
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setFilter("all")}
                  className={`rounded-full px-3.5 py-2 text-xs font-bold transition ${
                    filter === "all" ? "bg-rose-500 text-white" : "bg-well text-slate-600 hover:bg-rose-100"
                  }`}
                >
                  Tất cả
                </button>
                {availableFilters.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFilter(type)}
                    className={`rounded-full px-3.5 py-2 text-xs font-bold transition ${
                      filter === type ? "bg-rose-500 text-white" : "bg-well text-slate-600 hover:bg-rose-100"
                    }`}
                  >
                    {CONTENT_TYPE_LABELS[type]}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        <div className="mt-5 space-y-3">
          {items.length === 0 ? (
            <div className="card-surface text-center">
              <p className="text-base font-bold text-slate-900">Bạn chưa có câu nào cần ôn lại.</p>
              <p className="mt-2 text-sm text-slate-600">
                Trong lúc luyện, bấm &ldquo;Cần ôn lại&rdquo; để lưu câu vào đây.
              </p>
              <Link href="/daily" className="btn-primary mt-4 inline-block">
                Tiếp tục luyện
              </Link>
            </div>
          ) : filtered.length === 0 ? (
            <p className="text-sm text-slate-500">Không tìm thấy câu nào phù hợp.</p>
          ) : (
            filtered.map((item) => <ReviewItemCard key={item.id} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
}
