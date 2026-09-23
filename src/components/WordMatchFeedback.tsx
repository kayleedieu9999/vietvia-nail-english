import { WordDiffResult, FeedbackCopy } from "@/lib/dailyPronunciation";

interface WordMatchFeedbackProps {
  diff: WordDiffResult;
  feedback: FeedbackCopy;
}

const BAND_TEXT_CLASS: Record<FeedbackCopy["band"], string> = {
  success: "text-emerald-600",
  good: "text-emerald-600",
  partial: "text-amber-600",
  none: "text-slate-500",
};

/**
 * Highlights which target words were heard (green) vs not (amber/burgundy)
 * — bag-of-words containment only, never claimed as pronunciation accuracy.
 * Reused verbatim from `diffWords()`/`getFeedbackCopy()` so there's exactly
 * one place this comparison logic lives.
 */
export default function WordMatchFeedback({ diff, feedback }: WordMatchFeedbackProps) {
  return (
    <div>
      <p className="flex flex-wrap gap-x-1.5 gap-y-1 text-base font-semibold">
        {diff.targetWords.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={diff.matchedFlags[i] ? "text-emerald-600" : "rounded bg-rose-50 text-rose-600"}
          >
            {word}
          </span>
        ))}
      </p>

      <p className={`mt-2 text-sm font-bold ${BAND_TEXT_CLASS[feedback.band]}`}>{feedback.message}</p>

      {feedback.missingWords.length > 0 && feedback.band !== "none" && (
        <p className="mt-1 text-xs text-slate-500">
          Chưa nghe rõ: {feedback.missingWords.map((w) => `"${w}"`).join(", ")}
        </p>
      )}
    </div>
  );
}
