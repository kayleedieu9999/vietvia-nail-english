"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CollectionData, flattenCollection } from "@/types/collection";
import { useCollectionProgress, pickReviewItems } from "@/lib/collectionProgress";
import ItemCard from "./ItemCard";
import QuickReview from "./QuickReview";

interface CollectionPageClientProps {
  data: CollectionData;
}

/**
 * Shared shell for all 4 new "Lộ trình" collections — progress header,
 * search, one-group-at-a-time accordion (so the DOM never holds hundreds of
 * cards at once), and an "Ôn nhanh" quick-review overlay. Parameterized by
 * `data` so the 4 route pages are each a couple of lines.
 */
export default function CollectionPageClient({ data }: CollectionPageClientProps) {
  const allItems = useMemo(() => flattenCollection(data), [data]);
  const progress = useCollectionProgress(data.key);
  const viewedCount = Object.keys(progress).length;
  const pct = allItems.length > 0 ? Math.round((viewedCount / allItems.length) * 100) : 0;

  const [query, setQuery] = useState("");
  const [activeGroupId, setActiveGroupId] = useState(data.groups[0]?.id ?? "");
  const [showReview, setShowReview] = useState(false);

  const searching = query.trim().length > 0;
  const searchResults = useMemo(() => {
    if (!searching) return [];
    const q = query.trim().toLowerCase();
    return allItems.filter(
      (item) => item.english.toLowerCase().includes(q) || item.vietnamese.toLowerCase().includes(q),
    );
  }, [allItems, query, searching]);

  const activeGroup = data.groups.find((g) => g.id === activeGroupId) ?? data.groups[0];

  function handleContinue() {
    const firstUnseen = allItems.find((item) => !progress[item.id]);
    const target = firstUnseen
      ? data.groups.find((g) => g.items.some((i) => i.id === firstUnseen.id))
      : data.groups[0];
    if (target) setActiveGroupId(target.id);
    setQuery("");
  }

  const reviewItems = useMemo(
    () => pickReviewItems(data.key, allItems, 8),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data.key, allItems, showReview],
  );

  return (
    <div className="min-h-dvh px-5 pb-20 pt-6 lg:px-10 lg:pb-24 lg:pt-10">
      <div className="mx-auto w-full max-w-sm lg:max-w-[900px]">
        <Link href="/lo-trinh" className="text-sm font-semibold text-rose-400 hover:underline">
          ← Lộ trình
        </Link>
        <h1 className="mt-3 text-2xl font-extrabold leading-tight text-slate-900 lg:text-[32px]">
          {data.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 lg:text-base">{data.subtitle}</p>

        <div className="card-surface mt-5 space-y-2">
          <div className="h-2 w-full overflow-hidden rounded-full bg-well">
            <div className="h-full rounded-full bg-rose-500 transition-all" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-sm font-bold text-slate-900">
            {viewedCount} / {allItems.length} đã xem
          </p>
        </div>

        <div className="mt-4 flex gap-2.5">
          <button type="button" onClick={handleContinue} className="btn-primary flex-1">
            Tiếp tục
          </button>
          <button type="button" onClick={() => setShowReview(true)} className="btn-secondary flex-1">
            Ôn nhanh
          </button>
        </div>

        <div className="mt-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Tìm trong "${data.title}"...`}
            className="input-search"
          />
        </div>

        {!searching && (
          <div className="mt-4 flex flex-wrap gap-2">
            {data.groups.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveGroupId(group.id)}
                className={`rounded-full px-3.5 py-2 text-xs font-bold transition ${
                  activeGroupId === group.id
                    ? "bg-rose-500 text-white"
                    : "bg-well text-slate-600 hover:bg-rose-100"
                }`}
              >
                {group.title}
              </button>
            ))}
          </div>
        )}

        <div className="mt-5 space-y-3">
          {searching ? (
            searchResults.length > 0 ? (
              searchResults.map((item) => (
                <ItemCard
                  key={item.id}
                  collectionKey={data.key}
                  item={item}
                  state={progress[item.id]?.state ?? "new"}
                />
              ))
            ) : (
              <p className="text-sm text-slate-500">Không tìm thấy kết quả cho &quot;{query}&quot;.</p>
            )
          ) : (
            activeGroup?.items.map((item) => (
              <ItemCard
                key={item.id}
                collectionKey={data.key}
                item={item}
                state={progress[item.id]?.state ?? "new"}
              />
            ))
          )}
        </div>
      </div>

      {showReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-5">
          <QuickReview collectionKey={data.key} items={reviewItems} onClose={() => setShowReview(false)} />
        </div>
      )}
    </div>
  );
}
