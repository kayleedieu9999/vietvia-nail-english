"use client";

import Link from "next/link";
import Image from "next/image";
import { Story, STORY_CATEGORY_LABELS, STORY_LEVEL_LABELS } from "@/types/story";
import { useAllStoryProgress } from "@/lib/storyProgress";

interface StoryCardProps {
  story: Story;
}

/** Library card — real photo, category/level badges, real per-story progress. */
export default function StoryCard({ story }: StoryCardProps) {
  const allProgress = useAllStoryProgress();
  const entry = allProgress[story.id];
  const doneCount = entry ? Object.keys(entry.sections).length : 0;
  const total = story.sections.length;
  const started = Boolean(entry);
  const completed = Boolean(entry?.completedAt);

  return (
    <Link href={`/topic/listening/story/${story.slug}`} className="card-surface-interactive block !p-0 overflow-hidden">
      <div className="relative h-40 w-full">
        <Image
          src={story.coverImage}
          alt={story.coverImageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 360px"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-rose-600">
          {STORY_LEVEL_LABELS[story.level]}
        </span>
      </div>
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
          {STORY_CATEGORY_LABELS[story.category]}
        </p>
        <p className="mt-1 text-base font-extrabold text-slate-900">{story.title}</p>
        <p className="mt-1 text-sm text-slate-500">Khoảng {story.estimatedMinutes} phút</p>

        <div className="mt-3 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-well">
            <div
              className="h-full rounded-full bg-rose-500"
              style={{ width: `${total > 0 ? (doneCount / total) * 100 : 0}%` }}
            />
          </div>
          <span className="shrink-0 text-xs font-bold text-slate-500">
            {doneCount}/{total} phần
          </span>
        </div>

        <span className="btn-primary mt-3 w-full">
          {completed ? "Nghe lại" : started ? "Tiếp tục" : "Bắt đầu"}
        </span>
      </div>
    </Link>
  );
}
