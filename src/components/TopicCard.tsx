"use client";

import Link from "next/link";
import { Topic } from "@/types/content";
import { useProgress } from "@/lib/progress";
import { accentForKey } from "@/lib/accentColor";

const GRAMMAR_TOPIC_HREF = "/lo-trinh/ngu-phap";

interface TopicCardProps {
  topic: Topic;
  /** Slugs of every lesson in this topic, so progress can be computed client-side without shipping full lesson content. */
  lessonSlugs: string[];
}

/**
 * Vertical practice-category card for the homepage grid — circular pastel
 * icon badge, title, description, progress bar, lesson count. Same data
 * source as `TopicListRow` (used on the `/topics` list page), just a
 * denser card shape for a multi-column desktop grid.
 */
export default function TopicCard({ topic, lessonSlugs }: TopicCardProps) {
  const isGrammarTopic = topic.slug === "grammar";
  const totalLessons = lessonSlugs.length;
  const hasLessons = totalLessons > 0 || isGrammarTopic;
  const progress = useProgress();

  const completed = lessonSlugs.filter((slug) => progress.lessons[slug]).length;
  const pct = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  const accent = accentForKey(topic.id);

  const card = (
    <div
      className={`flex h-full flex-col rounded-3xl border p-4 transition ${
        hasLessons
          ? "border-slate-200 bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(122,41,72,0.08)] active:translate-y-0"
          : "border-slate-100 bg-slate-50"
      }`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full text-xl ${
            hasLessons ? accent.chipBg : "bg-slate-100"
          }`}
        >
          {topic.emoji}
        </div>
        {hasLessons && (
          <span aria-hidden className="text-slate-300">
            ›
          </span>
        )}
      </div>

      <p className="mt-3 text-base font-bold text-slate-900">{topic.title}</p>
      <p className="mt-1 line-clamp-2 flex-1 text-xs leading-relaxed text-slate-500">
        {topic.description}
      </p>

      {isGrammarTopic ? (
        <p className="mt-3 text-xs text-slate-400">100 quy tắc</p>
      ) : hasLessons ? (
        <div className="mt-3 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-well">
            <div className={`h-full rounded-full ${accent.barBg}`} style={{ width: `${pct}%` }} />
          </div>
          <span className="shrink-0 text-xs font-bold text-slate-500">
            {completed}/{totalLessons}
          </span>
        </div>
      ) : (
        <p className="mt-3 text-xs text-slate-400">Sắp có</p>
      )}
    </div>
  );

  if (!hasLessons) {
    return <div aria-disabled>{card}</div>;
  }

  return (
    <Link href={isGrammarTopic ? GRAMMAR_TOPIC_HREF : `/topic/${topic.slug}`} className="block h-full">
      {card}
    </Link>
  );
}
