import { Question } from "@/types/content";

/**
 * Compact builder for the 50 new "Hội thoại Nails" lessons — keeps every
 * item's full Question shape (choices/correctAnswer/explanations/usageTip)
 * but lets each lesson file specify only the few strings that actually
 * differ, instead of hand-typing the same boilerplate 500 times. Mirrors
 * the exact field shapes already used in `nail-general/01-chao-khach.ts`.
 */

interface ConvoItem {
  kind?: "convo";
  emoji: string;
  custEn: string;
  custVi: string;
  techEn: string;
  techVi: string;
  wrong1: string;
  wrong2: string;
  note: string;
  tip: string;
}

interface PhraseItem {
  kind: "phrase";
  emoji: string;
  en: string;
  vi: string;
  wrong1: string;
  wrong2: string;
  note: string;
  tip: string;
}

export type ItemSpec = ConvoItem | PhraseItem;

export function buildQuestions(lessonId: string, items: ItemSpec[]): Question[] {
  return items.map((it, i) => {
    const id = `${lessonId}-${i + 1}`;

    if (it.kind === "phrase") {
      return {
        id,
        type: "english_to_vietnamese",
        badgeEmoji: it.emoji,
        english: it.en,
        vietnamese: it.vi,
        choices: [
          { id: "a", text: it.vi },
          { id: "b", text: it.wrong1 },
          { id: "c", text: it.wrong2 },
        ],
        correctAnswer: "a",
        explanation: it.note,
        wrongAnswerExplanations: `"${it.wrong1}" và "${it.wrong2}" không đúng nghĩa của câu này.`,
        usageTip: it.tip,
      };
    }

    return {
      id,
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: it.emoji,
      prompt: it.custEn,
      promptVietnamese: it.custVi,
      english: it.techEn,
      vietnamese: it.techVi,
      choices: [
        { id: "a", text: it.techEn },
        { id: "b", text: it.wrong1 },
        { id: "c", text: it.wrong2 },
      ],
      correctAnswer: "a",
      explanation: it.note,
      wrongAnswerExplanations: `"${it.wrong1}" và "${it.wrong2}" chưa phù hợp trong tình huống này.`,
      usageTip: it.tip,
    };
  });
}
