import Link from "next/link";
import { Topic } from "@/types/content";

interface TopicCardProps {
  topic: Topic;
  lessonCount: number;
}

export default function TopicCard({ topic, lessonCount }: TopicCardProps) {
  const hasLessons = lessonCount > 0;

  const card = (
    <div
      className={`flex h-full flex-col rounded-2xl p-4 shadow-sm ring-1 transition ${
        hasLessons
          ? "bg-white ring-rose-100 active:scale-[0.98]"
          : "bg-slate-50 ring-slate-100"
      }`}
    >
      <span className="text-3xl">{topic.emoji}</span>
      <p className="mt-3 text-base font-bold leading-snug text-slate-900">{topic.title}</p>
      <p className="mt-1 flex-1 text-sm text-slate-500">{topic.description}</p>
      <p
        className={`mt-3 text-xs font-bold ${
          hasLessons ? "text-rose-500" : "text-slate-400"
        }`}
      >
        {hasLessons ? `${lessonCount} bài học` : "Sắp có"}
      </p>
    </div>
  );

  if (!hasLessons) {
    return <div aria-disabled>{card}</div>;
  }

  return (
    <Link href={`/topic/${topic.slug}`} className="block h-full">
      {card}
    </Link>
  );
}
