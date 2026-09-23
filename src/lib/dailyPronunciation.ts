import { ItemProgress } from "@/lib/collectionProgress";

/**
 * Pure, client-safe logic for the homepage "Luyện nói & phát âm hôm nay"
 * card: daily item selection, honest word-match feedback (speech-to-text
 * only — no phoneme scoring exists in this app, so this never claims a
 * percentage or phoneme-level accuracy), and a small curated
 * connected-speech tip lookup. Deliberately has NO import of
 * `@/data/lessons` (the heavy full lesson dataset) — the Tiệm Nails pool is
 * built server-side in `src/lib/nailsSpeakingPool.ts` and passed down as a
 * plain prop, so this file stays safe to import directly into client
 * components alongside the already-lightweight collection data.
 */

export type PracticeMode = "word" | "sentence" | "nails";

export interface PracticeItem {
  /** Stable id used for collectionProgress lookups (matches the real CollectionItem.id for word/sentence modes). */
  itemId: string;
  english: string;
  vietnamese: string;
  ipa?: string;
  /** Only present for sentence-mode items pulled from cau-noi-tu-nhien. */
  whenToUse?: string;
}

/**
 * Picks today's practice item for one mode's pool: an item still marked
 * "Cần ôn lại" first, otherwise a day-of-year-indexed pick so the same
 * sentence isn't shown every single day — deterministic (no hydration
 * mismatch risk) without needing real randomness.
 */
export function pickDailyPracticeItem(
  pool: PracticeItem[],
  progress: Record<string, ItemProgress>,
): PracticeItem | null {
  if (pool.length === 0) return null;

  const reviewItem = pool.find((item) => progress[item.itemId]?.state === "review");
  if (reviewItem) return reviewItem;

  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86_400_000,
  );
  return pool[dayOfYear % pool.length]!;
}

function normalizeWord(word: string): string {
  return word.toLowerCase().replace(/[^a-z0-9']/g, "");
}

export interface WordDiffResult {
  /** Original-casing target words, for display. */
  targetWords: string[];
  /** Parallel to targetWords — true if that word appears anywhere among the recognized words. */
  matchedFlags: boolean[];
  matchedCount: number;
  totalCount: number;
}

/**
 * Bag-of-words containment check — does each target word appear anywhere in
 * what was recognized? This is deliberately NOT positional alignment and
 * NOT phoneme-level scoring (the browser's SpeechRecognition API exposes
 * only a text transcript, nothing more) — it can only honestly say "this
 * word was heard" or "this word was not heard," never "this sound was
 * mispronounced."
 */
export function diffWords(target: string, heard: string): WordDiffResult {
  const targetWords = target.trim().split(/\s+/).filter(Boolean);
  const heardSet = new Set(
    heard
      .trim()
      .split(/\s+/)
      .map(normalizeWord)
      .filter(Boolean),
  );
  const matchedFlags = targetWords.map((word) => heardSet.has(normalizeWord(word)));
  const matchedCount = matchedFlags.filter(Boolean).length;
  return { targetWords, matchedFlags, matchedCount, totalCount: targetWords.length };
}

export type FeedbackBand = "success" | "good" | "partial" | "none";

export interface FeedbackCopy {
  band: FeedbackBand;
  message: string;
  missingWords: string[];
}

/** Honest feedback bands built only from word-match ratio — never a fabricated accuracy percentage. */
export function getFeedbackCopy(diff: WordDiffResult): FeedbackCopy {
  const missingWords = diff.targetWords.filter((_, i) => !diff.matchedFlags[i]);
  const ratio = diff.totalCount > 0 ? diff.matchedCount / diff.totalCount : 0;

  if (ratio === 1) {
    return { band: "success", message: "✓ Nghe rõ rồi!", missingWords: [] };
  }
  if (ratio >= 0.7) {
    return { band: "good", message: "Câu nghe khá rõ.", missingWords };
  }
  if (ratio > 0) {
    return { band: "partial", message: "Bạn bỏ mất vài từ.", missingWords };
  }
  return { band: "none", message: "VietVia chưa nghe rõ. Bạn thử lại nhé.", missingWords: diff.targetWords };
}

/** Small curated connected-speech patterns — a tip is shown only on an exact substring match, never invented for a pattern outside this list. */
const CONNECTED_SPEECH_TIPS: { pattern: string; tip: string }[] = [
  { pattern: "would you", tip: "“Would you” thường nối gần lại với nhau khi nói nhanh." },
  { pattern: "could you", tip: "“Could you” thường nối gần lại, nghe liền một hơi." },
  { pattern: "did you", tip: "“Did you” thường nối liền, nghe hơi giống “didja”." },
  { pattern: "don't you", tip: "“Don't you” thường nối liền lại với nhau." },
  { pattern: "want to", tip: "“Want to” khi nói nhanh thường nghe giống “wanna”." },
  { pattern: "going to", tip: "“Going to” khi nói nhanh thường nghe giống “gonna”." },
  { pattern: "got to", tip: "“Got to” khi nói nhanh thường nghe giống “gotta”." },
  { pattern: "have to", tip: "“Have to” khi nói nhanh thường nghe giống “hafta”." },
  { pattern: "let me", tip: "“Let me” khi nói nhanh thường nghe giống “lemme”." },
  { pattern: "give me", tip: "“Give me” khi nói nhanh thường nghe giống “gimme”." },
  { pattern: "kind of", tip: "“Kind of” khi nói nhanh thường nghe giống “kinda”." },
  { pattern: "a lot of", tip: "“A lot of” thường được nói nhanh và nối liền." },
  { pattern: "out of", tip: "“Out of” thường được nối liền lại với nhau." },
  { pattern: "appointment", tip: "Nhấn vào âm giữa: ap-POINT-ment." },
  { pattern: "because", tip: "Nhấn nhẹ ở đầu, rõ hơn ở phần “cause”." },
];

export function getConnectedSpeechTip(targetEnglish: string): string | null {
  const lower = targetEnglish.toLowerCase();
  const hit = CONNECTED_SPEECH_TIPS.find((entry) => lower.includes(entry.pattern));
  return hit?.tip ?? null;
}

/** Splits a sentence into 2 rough chunks by word-count midpoint — a simple heuristic, not a linguistically-parsed phrase split. */
export function splitIntoChunks(sentence: string): [string, string] {
  const words = sentence.trim().split(/\s+/);
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}
