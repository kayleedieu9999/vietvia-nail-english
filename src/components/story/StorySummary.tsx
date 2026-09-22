"use client";

import Link from "next/link";
import { Story } from "@/types/story";
import { StoryProgressEntry } from "@/lib/storyProgress";
import { speakEnglish } from "@/lib/tts";

interface StorySummaryProps {
  story: Story;
  entry: StoryProgressEntry;
  reviewIndices: number[];
  onReview: (index: number) => void;
  nextStory?: Story;
}

/** End-of-story recap — real per-story stats + the useful vocabulary, not a giant word list. */
export default function StorySummary({ story, entry, reviewIndices, onReview, nextStory }: StorySummaryProps) {
  const total = story.sections.length;
  const results = Object.values(entry.sections);
  const listeningDone = results.length;
  const comprehensionCorrect = results.filter((r) => r.comprehensionCorrect).length;
  const reactionsDone = results.filter((r) => r.reactionDone).length;

  return (
    <div className="space-y-5">
      <div className="card-surface text-center">
        <p className="text-3xl">🎉</p>
        <p className="mt-2 text-xl font-extrabold text-slate-900">Bạn vừa nghe xong Story!</p>
        <p className="mt-1 text-sm text-slate-500">{story.title}</p>

        <div className="mt-5 grid grid-cols-2 gap-3 text-left sm:grid-cols-4">
          <SummaryStat label="Listening" value={`${listeningDone}/${total} phần`} />
          <SummaryStat label="Comprehension" value={`${comprehensionCorrect}/${listeningDone}`} />
          <SummaryStat label="Speaking" value={`${reactionsDone} câu`} />
          <SummaryStat label="Review" value={`${reviewIndices.length} câu`} />
        </div>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          {reviewIndices.length > 0 && (
            <button
              type="button"
              onClick={() => onReview(reviewIndices[0])}
              className="btn-secondary flex-1"
            >
              Ôn {reviewIndices.length} câu
            </button>
          )}
          <Link
            href={nextStory ? `/topic/listening/story/${nextStory.slug}` : "/topic/listening"}
            className="btn-primary flex-1"
          >
            {nextStory ? "Story tiếp theo" : "Về thư viện Story"}
          </Link>
        </div>
      </div>

      <div className="card-surface">
        <p className="text-sm font-extrabold uppercase tracking-wide text-rose-500">Từ vựng trong Story</p>
        <div className="mt-3 space-y-2.5">
          {story.vocabulary.map((word) => (
            <div key={word.english} className="flex items-center gap-3 rounded-2xl bg-well px-3.5 py-3">
              <button
                type="button"
                onClick={() => speakEnglish(word.english)}
                className="shrink-0 rounded-full bg-white p-2 text-rose-600 transition active:scale-95"
                aria-label={`Nghe: ${word.english}`}
              >
                🔊
              </button>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-extrabold text-slate-900">
                  {word.english} <span className="font-normal text-slate-400">{word.ipa}</span>
                </p>
                <p className="text-xs text-slate-500">{word.vietnamese}</p>
                <p className="mt-0.5 truncate text-xs italic text-slate-400">&ldquo;{word.sentence}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-well px-3 py-2.5">
      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-0.5 text-base font-extrabold text-slate-900">{value}</p>
    </div>
  );
}
