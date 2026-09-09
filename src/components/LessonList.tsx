"use client";

import { Lesson } from "@/types/content";
import { useProgress } from "@/lib/progress";
import LessonCard from "@/components/LessonCard";

interface LessonListProps {
  lessons: Lesson[];
}

interface LessonGroup {
  label?: string;
  items: { lesson: Lesson; index: number }[];
}

/**
 * Groups by `lesson.section` when at least one lesson sets it, preserving
 * topic order. Topics where no lesson sets a section (every topic today
 * except the expanded Nails one) get exactly one unlabeled group, i.e. the
 * same flat list this always rendered.
 */
function groupLessons(lessons: Lesson[]): LessonGroup[] {
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

export default function LessonList({ lessons }: LessonListProps) {
  const progress = useProgress();
  const groups = groupLessons(lessons);

  return (
    <div className="mt-6 space-y-8">
      {groups.map((group, groupIndex) => (
        <div key={group.label ?? groupIndex}>
          {group.label && (
            <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-500">
              {group.label}
            </h2>
          )}
          <div className="space-y-3">
            {group.items.map(({ lesson, index }) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                index={index}
                progress={progress.lessons[lesson.slug]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
