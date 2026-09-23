"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RoadmapEntry } from "@/types/roadmap";
import { RoadmapProgress } from "@/lib/roadmapProgress";
import { accentForKey } from "@/lib/accentColor";

interface RoadmapCardProps {
  entry: RoadmapEntry;
  progress: RoadmapProgress | null;
}

/**
 * One roadmap learning-path card, reused across every section of
 * `/lo-trinh` (Nền tảng, Giao tiếp thực tế, Luyện kỹ năng, Quốc tịch Mỹ).
 * Mirrors `TopicCard`'s exact layout/classes (photo-or-emoji header, title,
 * description, progress bar, "Sắp có" disabled state) so the new roadmap
 * doesn't introduce a second visual language.
 */
export default function RoadmapCard({ entry, progress }: RoadmapCardProps) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const disabled = entry.href === "#";
  const accent = accentForKey(entry.key);
  const showPhoto = Boolean(entry.photo) && !photoFailed;

  const card = (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-3xl border transition ${
        disabled
          ? "border-slate-100 bg-slate-50"
          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(122,41,73,0.1)] active:translate-y-0"
      }`}
    >
      {showPhoto ? (
        <div className="relative h-28 w-full shrink-0 lg:h-32">
          <Image
            src={entry.photo!}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 320px"
            onError={() => setPhotoFailed(true)}
          />
          {!disabled && (
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
              disabled ? "bg-slate-100" : accent.chipBg
            }`}
          >
            {entry.emoji}
          </div>
          {!disabled && (
            <span aria-hidden className="text-slate-300">
              ›
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm font-bold text-slate-900 lg:text-base">{entry.title}</p>
        <p className="mt-1 line-clamp-2 flex-1 text-xs leading-relaxed text-slate-500">{entry.description}</p>

        {entry.subpathTags && entry.subpathTags.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1">
            {entry.subpathTags.slice(0, 4).map((tag) => (
              <span key={tag} className="rounded-full bg-well px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                {tag}
              </span>
            ))}
            {entry.subpathTags.length > 4 && (
              <span className="rounded-full bg-well px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                +{entry.subpathTags.length - 4}
              </span>
            )}
          </div>
        )}

        {disabled ? (
          <p className="mt-3 text-xs font-bold text-slate-400">Sắp có</p>
        ) : progress ? (
          <div className="mt-3 flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-well">
              <div className={`h-full rounded-full ${accent.barBg}`} style={{ width: `${progress.pct}%` }} />
            </div>
            <span className="shrink-0 text-xs font-bold text-slate-500">
              {progress.completed}/{progress.total}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );

  if (disabled) {
    return (
      <div aria-disabled className="block h-full">
        {card}
      </div>
    );
  }

  return (
    <Link href={entry.href} aria-label={entry.title} className="block h-full">
      {card}
    </Link>
  );
}
