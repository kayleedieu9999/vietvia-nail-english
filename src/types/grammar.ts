/**
 * Content model for "Lộ trình" → "100 Quy tắc ngữ pháp cần thiết" — a
 * separate track from the topic/lesson quiz model in `content.ts`. Grammar
 * rules need a fixed 5-section teaching layout (DÙNG KHI NÀO / MẪU CÂU /
 * TRONG TIỆM NAILS / THÊM 3 VÍ DỤ / THỬ NGAY) plus a speaking-practice step,
 * which doesn't fit the generic `Lesson`/`Question` shape — so this is its
 * own small model, following the same "pure data, one file per rule" pattern
 * as `src/data/lessons/`.
 */

export interface GrammarExample {
  english: string;
  vietnamese: string;
}

export interface GrammarQuizChoice {
  id: string;
  text: string;
}

export interface GrammarQuiz {
  /** The customer-situation prompt shown above the 3 choices. */
  question: string;
  choices: GrammarQuizChoice[];
  /** id of the correct entry in `choices`. */
  correctAnswer: string;
  /** Plain-Vietnamese explanation of why that choice is correct. */
  explanation: string;
}

export interface GrammarSpeakingPractice {
  targetEnglish: string;
  vietnameseHint: string;
}

export interface GrammarRuleLesson {
  /** "rule-061" */
  id: string;
  /** 1-100 */
  ruleNumber: number;
  /** 1-10 */
  phaseNumber: number;
  /** e.g. "CAN — nói về khả năng" */
  title: string;
  /** "DÙNG KHI NÀO?" — plain Vietnamese, A1-A2, no grammar jargon. */
  whenToUse: string;
  /** "MẪU CÂU" — the sentence pattern. */
  pattern: string;
  /** "TRONG TIỆM NAILS" — one nail-salon example. */
  nailSalonExample: GrammarExample;
  /** "THÊM 3 VÍ DỤ" */
  moreExamples: [GrammarExample, GrammarExample, GrammarExample];
  /** "THỬ NGAY" — a 3-choice customer-situation multiple choice. */
  quiz: GrammarQuiz;
  speakingPractice: GrammarSpeakingPractice;
}

export interface GrammarPhaseMeta {
  phaseNumber: number;
  /** "Can, Could, Should, Would..." */
  titleVi: string;
  /** "Modals & Auxiliary Verbs" */
  englishTopic: string;
  descriptionVi: string;
  ruleRange: [number, number];
}
