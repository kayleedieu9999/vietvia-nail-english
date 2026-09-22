"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Story } from "@/types/story";
import {
  useAllStoryProgress,
  startStory,
  recordSectionResult,
  setCurrentSectionIndex,
  completeStory,
  getReviewSectionIds,
} from "@/lib/storyProgress";
import StorySection from "./StorySection";
import StorySummary from "./StorySummary";

interface StoryPlayerProps {
  story: Story;
  nextStory?: Story;
}

/** Orchestrates one story: section-by-section progress, resuming where the learner left off, then the summary. */
export default function StoryPlayer({ story, nextStory }: StoryPlayerProps) {
  const allProgress = useAllStoryProgress();
  const entry = allProgress[story.id];
  const total = story.sections.length;

  useEffect(() => {
    startStory(story.id);
  }, [story.id]);

  const [reviewIndex, setReviewIndex] = useState<number | null>(null);

  if (!entry) {
    // First render before the effect above has run — same content, index 0.
    return null;
  }

  const currentIndex = entry.currentSectionIndex;
  const showSummary = reviewIndex === null && currentIndex >= total;
  const activeIndex = reviewIndex ?? currentIndex;
  const activeSection = story.sections[activeIndex];

  function handleComplete(result: { comprehensionCorrect: boolean; reactionDone: boolean }) {
    recordSectionResult(story.id, activeSection.id, result);

    if (reviewIndex !== null) {
      setReviewIndex(null);
      return;
    }

    const nextIndex = currentIndex + 1;
    setCurrentSectionIndex(story.id, nextIndex);
    if (nextIndex >= total) completeStory(story.id);
  }

  return (
    <div className="min-h-dvh px-5 pb-20 pt-6 lg:px-10 lg:pb-24 lg:pt-10">
      <div className="mx-auto w-full max-w-sm lg:max-w-2xl">
        <Link href="/topic/listening" className="text-sm font-semibold text-rose-400 hover:underline">
          ← Nghe & phản xạ
        </Link>
        <h1 className="mt-2 text-xl font-extrabold leading-tight text-slate-900 lg:text-2xl">
          {story.title}
        </h1>

        {!showSummary && (
          <>
            <div className="mt-3">
              <p className="text-sm font-semibold text-slate-500">
                Phần {activeIndex + 1} / {total}
              </p>
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-well">
                <div
                  className="h-full rounded-full bg-rose-500 transition-all"
                  style={{ width: `${((activeIndex + (reviewIndex === null ? 0 : 1)) / total) * 100}%` }}
                />
              </div>
            </div>

            <div className="relative mt-4 h-48 w-full overflow-hidden rounded-3xl lg:h-64">
              <Image
                src={story.coverImage}
                alt={story.coverImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 672px"
              />
            </div>
          </>
        )}

        <div className="mt-5">
          {showSummary ? (
            <StorySummary
              story={story}
              entry={entry}
              reviewIndices={getReviewSectionIds(story, entry).map((id) =>
                story.sections.findIndex((s) => s.id === id),
              )}
              onReview={setReviewIndex}
              nextStory={nextStory}
            />
          ) : (
            <StorySection
              key={activeSection.id}
              section={activeSection}
              index={activeIndex}
              total={total}
              onComplete={handleComplete}
            />
          )}
        </div>
      </div>
    </div>
  );
}
