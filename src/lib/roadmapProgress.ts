import { RoadmapEntry } from "@/types/roadmap";
import { LessonProgress } from "@/lib/progress";
import { collections } from "@/data/collections";
import { flattenCollection } from "@/types/collection";
import { RuleProgress } from "@/lib/grammarProgress";
import { ItemProgress } from "@/lib/collectionProgress";
import { StoryProgressEntry } from "@/lib/storyProgress";

export interface RoadmapProgress {
  completed: number;
  total: number;
  pct: number;
}

/**
 * Lightweight, server-computed context a `RoadmapEntry` needs to derive
 * progress from — deliberately NOT the full `Lesson[]`/`GrammarRuleLesson[]`
 * datasets (those are heavy and must stay server-only, same discipline as
 * `LessonSummary`). Only `topicSlugsByKey` and `totalGrammarRules` need to
 * come from the server; collections are small enough to import directly
 * client-side (as the old `LoTrinhHub.tsx` already did).
 */
export interface RoadmapContext {
  /** entry.key -> every lesson slug across that entry's topics, for "topics"-kind entries. */
  topicSlugsByKey: Record<string, string[]>;
  totalGrammarRules: number;
  /** Story ids only (not full story content) — enough to count completions. */
  storyIds: string[];
}

interface ProgressSources {
  lessonProgress: Record<string, LessonProgress>;
  grammarProgress: Record<string, RuleProgress>;
  collectionProgress: (collectionKey: string) => Record<string, ItemProgress>;
  storyProgress: Record<string, StoryProgressEntry>;
}

/**
 * One dispatcher for every roadmap entry's progress, instead of one-off
 * calculations scattered per card — reuses the exact same real progress
 * stores every other page already reads (`useProgress`, `useGrammarProgress`,
 * `useCollectionProgress`, `useAllStoryProgress`). Returns `null` for
 * placeholders and for entries with nothing meaningful to count (e.g. the
 * review-queue link) — `RoadmapCard` renders those without a progress row
 * instead of inventing a bar.
 */
export function getRoadmapEntryProgress(
  entry: RoadmapEntry,
  context: RoadmapContext,
  sources: ProgressSources,
): RoadmapProgress | null {
  const { contentRef } = entry;

  if (contentRef.kind === "topics") {
    const slugs = context.topicSlugsByKey[entry.key] ?? [];
    const total = slugs.length;
    if (total === 0) return null;
    const completed = slugs.filter((slug) => sources.lessonProgress[slug]).length;
    return { completed, total, pct: Math.round((completed / total) * 100) };
  }

  if (contentRef.kind === "collection") {
    const data = collections[contentRef.collectionKey];
    const total = flattenCollection(data).length;
    if (total === 0) return null;
    const completed = Object.keys(sources.collectionProgress(contentRef.collectionKey)).length;
    return { completed, total, pct: Math.round((completed / total) * 100) };
  }

  if (contentRef.kind === "grammar") {
    const total = context.totalGrammarRules;
    const completed = Object.values(sources.grammarProgress).filter((p) => p.completed).length;
    return { completed, total, pct: total > 0 ? Math.round((completed / total) * 100) : 0 };
  }

  if (contentRef.kind === "stories") {
    const total = context.storyIds.length;
    if (total === 0) return null;
    const completed = context.storyIds.filter((id) => sources.storyProgress[id]?.completedAt).length;
    return { completed, total, pct: Math.round((completed / total) * 100) };
  }

  return null;
}

/**
 * Given the slug of the most recently opened lesson (`progress.lastOpenedLessonSlug`),
 * find which "topics"-kind roadmap entry it belongs to, and that entry's
 * position within its own lesson list — feeds "Tiếp tục lộ trình" ("Bài N / Total").
 */
export function findRoadmapEntryForLessonSlug(
  entries: RoadmapEntry[],
  context: RoadmapContext,
  slug: string,
): { entry: RoadmapEntry; lessonIndex: number; total: number } | null {
  for (const entry of entries) {
    if (entry.contentRef.kind !== "topics") continue;
    const slugs = context.topicSlugsByKey[entry.key] ?? [];
    const index = slugs.indexOf(slug);
    if (index !== -1) {
      return { entry, lessonIndex: index + 1, total: slugs.length };
    }
  }
  return null;
}
