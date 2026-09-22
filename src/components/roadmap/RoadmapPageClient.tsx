"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { roadmapGroups, allRoadmapEntries } from "@/data/roadmap";
import { RoadmapEntry } from "@/types/roadmap";
import { useProgress } from "@/lib/progress";
import { useGrammarProgress } from "@/lib/grammarProgress";
import { useCollectionProgress } from "@/lib/collectionProgress";
import { useAllStoryProgress } from "@/lib/storyProgress";
import { computeAllTimeSummary } from "@/lib/streak";
import {
  getRoadmapEntryProgress,
  findRoadmapEntryForLessonSlug,
  RoadmapContext,
} from "@/lib/roadmapProgress";
import RoadmapCard from "./RoadmapCard";

interface RoadmapPageClientProps {
  context: RoadmapContext;
}

type FilterKey = "all" | "nen-tang" | "nails" | "doi-song" | "luyen-ky-nang" | "quoc-tich";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "nen-tang", label: "Nền tảng" },
  { key: "nails", label: "Nails" },
  { key: "doi-song", label: "Đời sống" },
  { key: "luyen-ky-nang", label: "Kỹ năng" },
  { key: "quoc-tich", label: "Quốc tịch" },
];

function matchesFilter(entry: RoadmapEntry, groupKey: string, filter: FilterKey): boolean {
  if (filter === "all") return true;
  if (filter === "nen-tang") return groupKey === "nen-tang";
  if (filter === "luyen-ky-nang") return groupKey === "luyen-ky-nang";
  if (filter === "quoc-tich") return groupKey === "quoc-tich";
  if (filter === "nails") return entry.key === "nails";
  if (filter === "doi-song") return groupKey === "giao-tiep-thuc-te" && entry.key !== "nails";
  return true;
}

export default function RoadmapPageClient({ context }: RoadmapPageClientProps) {
  const lessonProgress = useProgress();
  const grammarProgress = useGrammarProgress();
  const storyProgressState = useAllStoryProgress();
  const dongTuProgress = useCollectionProgress("dong-tu");
  const cauNoiProgress = useCollectionProgress("cau-noi-tu-nhien");
  const phrasalProgress = useCollectionProgress("phrasal-verbs");
  const tuVungProgress = useCollectionProgress("tu-vung");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterKey>("all");

  const collectionProgressByKey: Record<string, typeof dongTuProgress> = {
    "dong-tu": dongTuProgress,
    "cau-noi-tu-nhien": cauNoiProgress,
    "phrasal-verbs": phrasalProgress,
    "tu-vung": tuVungProgress,
  };

  const progressFor = (entry: RoadmapEntry) =>
    getRoadmapEntryProgress(
      entry,
      context,
      {
        lessonProgress: lessonProgress.lessons,
        grammarProgress,
        collectionProgress: (key) => collectionProgressByKey[key] ?? {},
        storyProgress: storyProgressState,
      },
    );

  const allTime = computeAllTimeSummary(lessonProgress.lessons);
  const topicsInProgress = useMemo(
    () => allRoadmapEntries.filter((e) => (progressFor(e)?.completed ?? 0) > 0).length,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lessonProgress.lessons, grammarProgress, storyProgressState, dongTuProgress, cauNoiProgress, phrasalProgress, tuVungProgress],
  );

  const continueEntry = lessonProgress.lastOpenedLessonSlug
    ? findRoadmapEntryForLessonSlug(allRoadmapEntries, context, lessonProgress.lastOpenedLessonSlug)
    : null;

  // "Đề xuất cho bạn": real entries with some progress but not finished, else a sensible static fallback.
  const suggestions = useMemo(() => {
    const withRealContent = allRoadmapEntries.filter((e) => e.href !== "#");
    const inProgress = withRealContent.filter((e) => {
      const p = progressFor(e);
      return p && p.completed > 0 && p.completed < p.total;
    });
    if (inProgress.length > 0) return inProgress.slice(0, 3);
    const fallbackKeys = ["nails", "doi-song", "phat-am"];
    return withRealContent.filter((e) => fallbackKeys.includes(e.key));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonProgress.lessons, grammarProgress, storyProgressState, dongTuProgress, cauNoiProgress, phrasalProgress, tuVungProgress]);

  const q = query.trim().toLowerCase();
  const filteredGroups = roadmapGroups.map((group) => ({
    ...group,
    entries: group.entries.filter((entry) => {
      if (!matchesFilter(entry, group.key, filter)) return false;
      if (!q) return true;
      const haystack = [entry.title, entry.description, ...(entry.subpathTags ?? [])].join(" ").toLowerCase();
      return haystack.includes(q);
    }),
  }));

  return (
    <div className="min-h-dvh px-5 pb-16 pt-8 lg:px-10 lg:pt-10">
      <div className="mx-auto w-full max-w-sm lg:max-w-[1180px]">
        <h1 className="text-2xl font-extrabold leading-tight text-slate-900 lg:text-[32px]">Lộ trình của bạn</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 lg:text-base">
          Chọn đúng phần bạn cần và luyện từng chút mỗi ngày.
        </p>

        {/* Roadmap summary */}
        <div className="mt-5 flex flex-wrap gap-2">
          <div className="stat-chip">
            <span aria-hidden>📚</span>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-slate-900">{topicsInProgress}</p>
              <p className="text-[11px] text-slate-500">chủ đề đang luyện</p>
            </div>
          </div>
          <div className="stat-chip">
            <span aria-hidden>✅</span>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-slate-900">{allTime.lessonsCompleted}</p>
              <p className="text-[11px] text-slate-500">bài đã hoàn thành</p>
            </div>
          </div>
          <div className="stat-chip">
            <span aria-hidden>🔥</span>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-slate-900">{allTime.streakDays}</p>
              <p className="text-[11px] text-slate-500">ngày liên tiếp</p>
            </div>
          </div>
        </div>

        {/* Tiếp tục lộ trình */}
        {continueEntry && (
          <Link
            href={continueEntry.entry.href}
            className="card-surface-interactive mt-5 flex items-center justify-between lg:p-6"
          >
            <div className="min-w-0">
              <p className="text-xs font-extrabold uppercase tracking-wide text-rose-400">Tiếp tục lộ trình</p>
              <p className="mt-1 truncate text-base font-extrabold text-slate-900">{continueEntry.entry.title}</p>
              <p className="mt-0.5 text-sm text-slate-500">
                Bạn đang ở: Bài {continueEntry.lessonIndex} / {continueEntry.total}
              </p>
            </div>
            <span className="btn-primary shrink-0">Tiếp tục</span>
          </Link>
        )}

        {/* Đề xuất cho bạn */}
        {suggestions.length > 0 && (
          <div className="mt-6">
            <p className="text-sm font-extrabold text-slate-900">Đề xuất cho bạn</p>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {suggestions.map((entry) => (
                <RoadmapCard key={entry.key} entry={entry} progress={progressFor(entry)} />
              ))}
            </div>
          </div>
        )}

        {/* Search + filters */}
        <div className="mt-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm chủ đề muốn luyện..."
            className="input-search"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                  filter === f.key ? "bg-rose-500 text-white" : "bg-well text-slate-600 hover:bg-rose-100"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 sections */}
        {filteredGroups.map((group) =>
          group.entries.length === 0 ? null : (
            <section key={group.key} className="mt-9">
              <h2 className="text-lg font-extrabold text-slate-900 lg:text-xl">{group.pageTitle}</h2>
              <p className="mt-1 text-sm text-slate-500">{group.pageSubtitle}</p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.entries.map((entry) => (
                  <RoadmapCard key={entry.key} entry={entry} progress={progressFor(entry)} />
                ))}
              </div>
            </section>
          ),
        )}
      </div>
    </div>
  );
}
