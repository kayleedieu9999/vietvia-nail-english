"use client";

import Link from "next/link";
import { Topic } from "@/types/content";
import { useProgress } from "@/lib/progress";
import { accentForKey } from "@/lib/accentColor";

const GRAMMAR_TOPIC_HREF = "/lo-trinh/ngu-phap";

interface TopicListRowProps {
  topic: Topic;
  /** Slugs of every lesson in this topic, so progress can be computed client-side without shipping full lesson content. */
  lessonSlugs: string[];
}

/**
 * Full-width topic row — matches the real app's list style (colored icon
 * chip, title, lesson count, progress bar) shown on both the "Lộ trình học
 * tập" home section and the "Thư viện" tab, replacing the earlier 2-column
 * grid of `TopicCard`s which didn't match either screen.
 */
export default function TopicListRow({ topic, lessonSlugs }: TopicListRowProps) {
  const isGrammarTopic = topic.slug === "grammar";
  const totalLessons = lessonSlugs.length;
  const hasLessons = totalLessons > 0 || isGrammarTopic;
  const progress = useProgress();

  const completed = lessonSlugs.filter((slug) => progress.lessons[slug]).length;
  const pct = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  const accent = accentForKey(topic.id);

  const row = (
    <div
      className={`flex items-center gap-3 rounded-2xl p-3.5 shadow-sm ring-1 transition ${
        hasLessons ? "bg-white ring-rose-100 active:scale-[0.98]" : "bg-slate-50 ring-slate-100"
      }`}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl ${
          hasLessons ? accent.chipBg : "bg-slate-100"
        }`}
      >
        {topic.emoji}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-slate-900">{topic.title}</p>
        {isGrammarTopic ? (
          <p className="mt-0.5 text-xs text-slate-400">100 quy tắc ngữ pháp</p>
        ) : hasLessons ? (
          <>
            <p className="mt-0.5 text-xs text-slate-400">
              {completed}/{totalLessons} bài
            </p>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-rose-100">
              <div className={`h-full rounded-full ${accent.barBg}`} style={{ width: `${pct}%` }} />
            </div>
          </>
        ) : (
          <p className="mt-0.5 text-xs text-slate-400">Sắp có</p>
        )}
      </div>
      {hasLessons && !isGrammarTopic && (
        <span className={`shrink-0 text-xs font-extrabold ${accent.chipText}`}>{pct}%</span>
      )}
      <span className="shrink-0 text-slate-300">›</span>
    </div>
  );

  if (!hasLessons) {
    return <div aria-disabled>{row}</div>;
  }

  return (
    <Link href={isGrammarTopic ? GRAMMAR_TOPIC_HREF : `/topic/${topic.slug}`} className="block">
      {row}
    </Link>
  );
}
