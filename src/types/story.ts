/**
 * Content model for "Story dài" — the long-form listening+speaking mode
 * inside "Nghe & phản xạ". Deliberately its own small shape (not shoehorned
 * into `Lesson`/`Question`): a story is a sequence of narrated sections,
 * each pairing one comprehension check with one open-ended spoken reaction,
 * which the quiz-only `Question` model has no place for.
 */

export type StoryLevel = "co-ban" | "trung-cap" | "nang-cao";
export type StoryCategory = "nails" | "doi-song" | "lai-xe" | "san-bay" | "everyday";

export const STORY_LEVEL_LABELS: Record<StoryLevel, string> = {
  "co-ban": "Cơ bản",
  "trung-cap": "Trung cấp",
  "nang-cao": "Nâng cao",
};

export const STORY_CATEGORY_LABELS: Record<StoryCategory, string> = {
  nails: "Tiệm Nails",
  "doi-song": "Cuộc sống ở Mỹ",
  "lai-xe": "Lái xe",
  "san-bay": "Sân bay",
  everyday: "Everyday Story",
};

export interface StoryQuestionChoice {
  id: string;
  text: string;
}

export interface StoryComprehensionQuestion {
  question: string;
  choices: StoryQuestionChoice[];
  correctAnswer: string;
}

/** The "real response" reflex step — the learner reacts naturally, not a word-for-word repeat. */
export interface StoryReaction {
  /** The other person's line the learner is reacting to. */
  cue: string;
  cueVietnamese: string;
  /** One natural way to respond — shown only after the learner has tried, never claimed as "the" correct answer. */
  modelAnswer: string;
  modelAnswerVietnamese: string;
}

export interface StorySection {
  id: string;
  title: string;
  audioText: string;
  vietnamese: string;
  question: StoryComprehensionQuestion;
  reaction: StoryReaction;
}

export interface StoryVocabItem {
  english: string;
  ipa: string;
  vietnamese: string;
  sentence: string;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  category: StoryCategory;
  level: StoryLevel;
  estimatedMinutes: number;
  coverImage: string;
  coverImageAlt: string;
  description: string;
  sections: StorySection[];
  vocabulary: StoryVocabItem[];
}
