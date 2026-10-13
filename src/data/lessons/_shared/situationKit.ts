import { Question } from "@/types/content";

/**
 * Compact builder for situation-based conversation lessons (Airport, and any
 * future "someone says X, you reply Y" topic) — same full `Question` shape as
 * `nailConvoKit.ts`, but each item names WHO speaks the prompt line (so the
 * speaker badge / Luyện nói label is accurate) and the correct choice is
 * spread across positions a/b/c by item index instead of always "a". (Every
 * round also re-shuffles `shuffledChoices` at runtime — see lesson-engine.)
 */
export interface SituationItem {
  emoji: string;
  /** Who says `pEn` (e.g. "Nhân viên", "TSA", "Tiếp viên", "Thông báo"). */
  who: string;
  pEn: string;
  pVi: string;
  /** The learner's natural reply. */
  en: string;
  vi: string;
  wrong1: string;
  wrong2: string;
  note: string;
  tip: string;
}

const IDS = ["a", "b", "c"] as const;

export function buildSituationQuestions(lessonId: string, items: SituationItem[]): Question[] {
  return items.map((it, i) => {
    const correctPos = i % 3;
    const wrongs = [it.wrong1, it.wrong2];
    const texts: string[] = [];
    let w = 0;
    for (let pos = 0; pos < 3; pos++) texts.push(pos === correctPos ? it.en : wrongs[w++]!);

    return {
      id: `${lessonId}-${i + 1}`,
      type: "conversation_response",
      speaker: it.who,
      badgeEmoji: it.emoji,
      prompt: it.pEn,
      promptVietnamese: it.pVi,
      english: it.en,
      vietnamese: it.vi,
      choices: texts.map((text, pos) => ({ id: IDS[pos]!, text })),
      correctAnswer: IDS[correctPos]!,
      explanation: it.note,
      wrongAnswerExplanations: `"${it.wrong1}" và "${it.wrong2}" chưa phù hợp với tình huống này.`,
      usageTip: it.tip,
    };
  });
}
