"use client";

import Link from "next/link";
import Image from "next/image";
import { Topic } from "@/types/content";
import { useProgress } from "@/lib/progress";
import { accentForKey } from "@/lib/accentColor";

const GRAMMAR_TOPIC_HREF = "/lo-trinh/ngu-phap";

/** Real nail-salon/customer photography per practice category, keyed by topic slug. */
const TOPIC_PHOTOS: Record<string, string> = {
  "small-talk": "/images/topic-small-talk.png",
  "customer-requests": "/images/topic-customer-requests.png",
  pedicure: "/images/topic-pedicure.png",
  "nail-color": "/images/topic-nail-color.png",
  "unhappy-customer": "/images/topic-unhappy-customer.png",
  "dich-vu-tay": "/images/topic-hand-service.png",
};

interface TopicCardProps {
  topic: Topic;
  /** Slugs of every lesson in this topic, so progress can be computed client-side without shipping full lesson content. */
  lessonSlugs: string[];
}

/**
 * Practice-category card for the homepage grid — realistic photo header,
 * title, description, progress bar, lesson count. Same data source as
 * `TopicListRow` (used on the `/topics` list page), just a denser photo
 * card shape for a multi-column desktop grid.
 */
export default function TopicCard({ topic, lessonSlugs }: TopicCardProps) {
  const isGrammarTopic = topic.slug === "grammar";
  const totalLessons = lessonSlugs.length;
  const hasLessons = totalLessons > 0 || isGrammarTopic;
  const progress = useProgress();

  const completed = lessonSlugs.filter((slug) => progress.lessons[slug]).length;
  const pct = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  const accent = accentForKey(topic.id);
  const photo = TOPIC_PHOTOS[topic.slug];

  const card = (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-3xl border transition ${
        hasLessons
          ? "border-slate-200 bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(122,41,73,0.1)] active:translate-y-0"
          : "border-slate-100 bg-slate-50"
      }`}
    >
      {photo ? (
        <div className="relative h-24 w-full shrink-0 lg:h-28">
          <Image src={photo} alt="" fill className="object-cover" sizes="220px" />
          {hasLessons && (
            <span
              aria-hidden
              className="absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-xs text-slate-500"
            >
              ›
            </span>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-between p-4 pb-0">
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
      )}

      <div className="flex flex-1 flex-col p-3.5 lg:p-4">
        <p className="text-sm font-bold text-slate-900 lg:text-base">{topic.title}</p>
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
