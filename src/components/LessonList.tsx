"use client";

import { useState } from "react";
import { LessonSummary } from "@/types/content";
import { LessonProgress, useProgress } from "@/lib/progress";
import LessonCard from "@/components/LessonCard";

interface LessonListProps {
  lessons: LessonSummary[];
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
function groupLessons(lessons: LessonSummary[]): LessonGroup[] {
  const groups: LessonGroup[] = [];
  const groupByLabel = new Map<string, LessonGroup>();

  lessons.forEach((lesson, index) => {
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

export default function LessonList({ lessons }: LessonListProps) {
  const progress = useProgress();
  const groups = groupLessons(lessons);
  const collapsible = lessons.length > COLLAPSE_THRESHOLD;

  return (
    <div className="mt-6 space-y-6">
      {groups.map((group, groupIndex) => (
        <LessonGroupSection
          key={group.label ?? groupIndex}
          group={group}
          defaultOpen={groupIndex === 0}
          collapsible={collapsible}
          progress={progress.lessons}
        />
      ))}
    </div>
  );
}
