/**
 * Core content model for the VietVia English practice site.
 * Everything here is pure data — adding a topic or lesson never requires
 * touching a UI component.
 */

export type QuestionType =
  | "english_to_vietnamese"
  | "vietnamese_to_english"
  | "conversation_response"
  | "fill_blank"
  | "listening"
  | "true_false"
  | "matching"
  | "choose_best_sentence"
  | "situation_response";

export type LessonLevel = "beginner" | "intermediate" | "advanced" | "practice" | "situation";

export interface QuestionChoice {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  /** Who "says" the prompt line, e.g. "Chloe" or "Khách". Optional — mostly used by conversation_response. */
  speaker?: string;
  /** Main English sentence this question is built around (used for the primary Listen button). */
  english: string;
  /** Vietnamese meaning of `english`. */
  vietnamese: string;
  /** Text to speak aloud when the Listen button is pressed, if different from `english` (defaults to `english`). */
  audioText?: string;
  /** English prompt line shown to the learner (the other person's line, a fill-in-the-blank sentence, a true/false statement...). */
  prompt?: string;
  /** Vietnamese translation of `prompt`, shown alongside it so beginners understand what was said. */
  promptVietnamese?: string;
  /** Vietnamese description of a situation, shown instead of an English prompt (used by vietnamese_to_english). */
  promptContext?: string;
  choices: QuestionChoice[];
  /** id of the correct entry in `choices`. */
  correctAnswer: string;
  /** TẠI SAO — why the correct answer is correct, in plain friendly Vietnamese. */
  explanation: string;
  /** VÌ SAO CÁC CÂU KHÁC KHÔNG ĐÚNG — why the other choices are wrong. */
  wrongAnswerExplanations: string;
  /** DÙNG KHI NÀO — a realistic situation where this sentence is useful. */
  usageTip: string;
  imageUrl?: string;
  imageAlt?: string;
  /** Small emoji shown on the illustration badge. */
  badgeEmoji?: string;
}

export interface Lesson {
  id: string;
  slug: string;
  topicId: string;
  title: string;
  description: string;
  level: LessonLevel;
  coverImage?: string;
  /** Optional group label (e.g. "BẮT ĐẦU") for topic pages with many lessons. Lessons without one render as a flat list. */
  section?: string;
  questions: Question[];
}

/**
 * Lightweight lesson metadata with no question content — safe to pass into
 * Client Components (topic listings, "continue learning", results) without
 * pulling thousands of questions' worth of text into the browser bundle.
 */
export interface LessonSummary {
  id: string;
  slug: string;
  topicId: string;
  title: string;
  description: string;
  level: LessonLevel;
  section?: string;
  questionCount: number;
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  emoji: string;
  /** Fallback illustration image for lessons/questions in this topic that don't have their own image. */
  fallbackImage?: string;
}
