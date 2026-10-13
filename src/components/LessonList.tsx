"use client";

import { useState } from "react";
import { LessonSummary } from "@/types/content";
import { LessonProgress, useProgress } from "@/lib/progress";
import LessonCard from "@/components/LessonCard";
import { LESSON_CATEGORY_LABELS, sortCategories } from "@/data/lessonCategories";
import { isFresh, useToday } from "@/lib/freshness";

const NEW_FILTER = "__new__";

interface LessonListProps {
  lessons: LessonSummary[];
  /** Show a search box above the list. Opt-in — only topics that carry filter categories use it. */
  enableSearch?: boolean;
}

interface LessonGroup {
  label?: string;
  items: { lesson: LessonSummary; index: number }[];
}

/**
 * Groups by `lesson.section` when at least one lesson sets it, preserving
 * topic order. Topics where no lesson sets a section get exactly one
 * unlabeled group, i.e. the same flat list this always rendered.
 */
function groupLessons(indexed: { lesson: LessonSummary; index: number }[]): LessonGroup[] {
  const groups: LessonGroup[] = [];
  const groupByLabel = new Map<string, LessonGroup>();

  indexed.forEach(({ lesson, index }) => {
    const key = lesson.section ?? "";
    let group = groupByLabel.get(key);
    if (!group) {
      group = { label: lesson.section, items: [] };
      groupByLabel.set(key, group);
      groups.push(group);
    }
    group.items.push({ lesson, index });
  });

  return groups;
}

/** Collapsible past the first group once a topic has enough lessons to feel like a wall on mobile. */
const COLLAPSE_THRESHOLD = 15;

function LessonGroupSection({
  group,
  defaultOpen,
  collapsible,
  progress,
}: {
  group: LessonGroup;
  defaultOpen: boolean;
  collapsible: boolean;
  progress: Record<string, LessonProgress>;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const showCards = !collapsible || open;

  return (
    <div>
      {group.label && (
        <button
          type="button"
          onClick={() => collapsible && setOpen((prev) => !prev)}
          className="mb-3 flex w-full items-center justify-between text-left"
          aria-expanded={showCards}
        >
          <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">
            {group.label}
            <span className="ml-2 font-medium normal-case text-slate-400">
              ({group.items.length} bài)
            </span>
          </h2>
          {collapsible && (
            <span className="text-xs font-bold text-rose-400">{showCards ? "Thu gọn" : "Xem"}</span>
          )}
        </button>
      )}
      {showCards && (
        <div className="space-y-3">
          {group.items.map(({ lesson, index }) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              index={index}
              progress={progress[lesson.slug]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function LessonList({ lessons, enableSearch = false }: LessonListProps) {
  const progress = useProgress();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const today = useToday();
  const hasFresh = lessons.some((l) => isFresh(l.newUntil, today));

  const categories = sortCategories(
    Array.from(new Set(lessons.map((l) => l.category).filter((c): c is string => Boolean(c)))),
  );
  const q = query.trim().toLowerCase();
  const filtering = activeCategory !== null || q.length > 0;

  // `index` stays the lesson's position in the full topic list, so "Bài N" doesn't shift when filtering.
  const visible = lessons
    .map((lesson, index) => ({ lesson, index }))
    .filter(({ lesson }) =>
      activeCategory === null
        ? true
        : activeCategory === NEW_FILTER
          ? isFresh(lesson.newUntil, today)
          : lesson.category === activeCategory,
    )
    .filter(
      ({ lesson }) =>
        !q ||
        lesson.title.toLowerCase().includes(q) ||
        lesson.description.toLowerCase().includes(q) ||
        (lesson.category ? (LESSON_CATEGORY_LABELS[lesson.category] ?? "").toLowerCase().includes(q) : false),
    );
  const groups = groupLessons(visible);
  const collapsible = lessons.length > COLLAPSE_THRESHOLD && !filtering;

  return (
    <div className="mt-6 space-y-6">
      {enableSearch && (
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm bài..."
          className="input-search"
        />
      )}
      {(categories.length > 0 || hasFresh) && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-3.5 py-2 text-xs font-bold transition ${
              activeCategory === null ? "bg-rose-500 text-white" : "bg-well text-slate-600 hover:bg-rose-100"
            }`}
          >
            Tất cả
          </button>
          {hasFresh && (
            <button
              type="button"
              onClick={() => setActiveCategory(NEW_FILTER)}
              className={`rounded-full px-3.5 py-2 text-xs font-bold transition ${
                activeCategory === NEW_FILTER ? "bg-rose-500 text-white" : "bg-rose-100 text-rose-600 hover:bg-rose-200"
              }`}
            >
              NEW
            </button>
          )}
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActiveCategory(c)}
              className={`rounded-full px-3.5 py-2 text-xs font-bold transition ${
                activeCategory === c ? "bg-rose-500 text-white" : "bg-well text-slate-600 hover:bg-rose-100"
              }`}
            >
              {LESSON_CATEGORY_LABELS[c] ?? c}
            </button>
          ))}
        </div>
      )}
      {filtering && visible.length === 0 && (
        <p className="text-sm text-slate-500">Không tìm thấy bài nào phù hợp.</p>
      )}
      {groups.map((group, groupIndex) => (
        <LessonGroupSection
          key={`${group.label ?? groupIndex}-${filtering}`}
          group={group}
          defaultOpen={groupIndex === 0 || filtering}
          collapsible={collapsible}
          progress={progress.lessons}
        />
      ))}
    </div>
  );
}
