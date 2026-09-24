import { diffWords, WordDiffResult } from "@/lib/dailyPronunciation";

/**
 * Open-ended answer matching for "Luyện nói": a real speaking turn has
 * several natural, equally-valid responses (the question's own `choices`),
 * not one fixed correct string — so instead of diffing the heard speech
 * against a single target, this diffs it against EVERY acceptable answer
 * and keeps whichever one the learner's words matched best. Reuses
 * `diffWords()` as-is (same honest bag-of-words engine as the rest of the
 * app, no new scoring) — this file only adds the "pick the best of several
 * targets" step conversation-style answers need.
 */

export interface BestMatch {
  diff: WordDiffResult;
  /** Index into `targets` of the acceptable answer the learner's speech matched best. */
  targetIndex: number;
}

function matchRatio(diff: WordDiffResult): number {
  return diff.totalCount > 0 ? diff.matchedCount / diff.totalCount : 0;
}

export function pickBestMatch(targets: string[], heard: string): BestMatch {
  let best: BestMatch = { diff: diffWords(targets[0] ?? "", heard), targetIndex: 0 };
  for (let i = 1; i < targets.length; i++) {
    const diff = diffWords(targets[i]!, heard);
    if (matchRatio(diff) > matchRatio(best.diff)) {
      best = { diff, targetIndex: i };
    }
  }
  return best;
}
