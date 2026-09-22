"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Story, STORY_CATEGORY_LABELS } from "@/types/story";
import { useAllStoryProgress, computeOverallStoryStats } from "@/lib/storyProgress";
import StoryCard from "./StoryCard";

interface StoryLibraryProps {
  stories: Story[];
}

const ALL_FILTER = "all";

/** "Story dài" tab — continue banner, real stats row, category filters, responsive story grid. */
export default function StoryLibrary({ stories }: StoryLibraryProps) {
  const allProgress = useAllStoryProgress();
  const stats = useMemo(() => computeOverallStoryStats(stories, allProgress), [stories, allProgress]);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(stories.map((s) => s.category)));
    return unique;
  }, [stories]);
  const [filter, setFilter] = useState<string>(ALL_FILTER);

  const filtered = filter === ALL_FILTER ? stories : stories.filter((s) => s.category === filter);

  const inProgress = stories
    .map((story) => ({ story, entry: allProgress[story.id] }))
    .find(({ entry }) => entry && !entry.completedAt);

  return (
    <div>
      {inProgress && (
        <Link
          href={`/topic/listening/story/${inProgress.story.slug}`}
          className="card-surface-interactive mb-5 flex items-center justify-between gap-4"
        >
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-wide text-rose-500">Tiếp tục Story</p>
            <p className="mt-1 truncate text-base font-extrabold text-slate-900">{inProgress.story.title}</p>
            <p className="mt-0.5 text-sm text-slate-500">
              Bạn đang ở: Phần {(inProgress.entry?.currentSectionIndex ?? 0) + 1} /{" "}
              {inProgress.story.sections.length}
            </p>
          </div>
          <span className="btn-primary shrink-0">Tiếp tục nghe</span>
        </Link>
      )}

      <div className="mb-5 grid grid-cols-3 gap-3">
        <div className="stat-chip">
          <span aria-hidden>📖</span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-slate-900">{stats.storiesStarted}</p>
            <p className="text-[11px] text-slate-500">story đã nghe</p>
          </div>
        </div>
        <div className="stat-chip">
          <span aria-hidden>⏱</span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-slate-900">{stats.estimatedMinutesListened}</p>
            <p className="text-[11px] text-slate-500">phút nghe</p>
          </div>
        </div>
        <div className="stat-chip">
          <span aria-hidden>🗣️</span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-slate-900">{stats.reactionsDone}</p>
            <p className="text-[11px] text-slate-500">câu phản xạ</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter(ALL_FILTER)}
          className={`rounded-full px-3.5 py-2 text-xs font-bold transition ${
            filter === ALL_FILTER ? "bg-rose-500 text-white" : "bg-well text-slate-600 hover:bg-rose-100"
          }`}
        >
          Tất cả
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-3.5 py-2 text-xs font-bold transition ${
              filter === cat ? "bg-rose-500 text-white" : "bg-well text-slate-600 hover:bg-rose-100"
            }`}
          >
            {STORY_CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}
