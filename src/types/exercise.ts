/**
 * Content model for the interactive lesson-exercise engine — a new,
 * generic layer on top of (not a replacement for) the existing
 * `Lesson`/`Question` quiz content, the pharmacy `CollectionData`, and
 * `GrammarRuleLesson`. One `Exercise` shape covers every activity type so
 * the UI never needs subject-specific quiz logic; `mode` decides which of
 * the 4 practice tabs (Luyện ngay / Quiz / Ghép câu / Luyện thêm) an
 * exercise appears under, `type` decides which interaction it renders.
 */

export type ExerciseType =
  | "multiple_choice"
  | "listening_choice"
  | "image_quiz"
  | "sentence_builder"
  | "fill_blank"
  | "speaking"
  | "true_false"
  | "situation_choice";

export type ExerciseMode = "luyen-ngay" | "quiz" | "ghep-cau" | "luyen-them";

export interface ExerciseOption {
  id: string;
  text: string;
}

export interface Exercise {
  id: string;
  lessonId: string;
  mode: ExerciseMode;
  type: ExerciseType;
  /** Speaker badge, e.g. "KHÁCH" — omit for non-dialogue items. */
  speaker?: string;
  /** The English line/situation the learner sees (and can Nghe) — omitted for image_quiz, where the photo + question stand alone. */
  prompt?: string;
  promptVi?: string;
  /** Text to speak for "Nghe" when different from `prompt` (e.g. fill_blank's full sentence). */
  audioText?: string;
  /** The actual question asked, in Vietnamese, e.g. "Khách muốn gì?" */
  question?: string;
  /** image_quiz only — realistic photo, never a cartoon/illustration. */
  image?: string;
  imageAlt?: string;
  /** multiple_choice / listening_choice / image_quiz / true_false / situation_choice / fill_blank. */
  options?: ExerciseOption[];
  correctOptionId?: string;
  /** sentence_builder — shuffled tappable phrase/word blocks. */
  blocks?: string[];
  /** sentence_builder — the correct sentence to build. */
  correctSentence?: string;
  /** Short Vietnamese feedback shown after answering, correct or not. */
  explanation?: string;
  /** speaking — the natural model answer shown/spoken after the learner's attempt. */
  targetEnglish?: string;
  targetVietnamese?: string;
  /** speaking — other acceptable phrasings, matched the same honest way as targetEnglish (see src/lib/speakingMatch.ts). */
  acceptedAnswers?: string[];
  difficulty?: "easy" | "medium" | "hard";
}

export interface LessonExerciseSet {
  lessonId: string;
  lessonTitle: string;
  /** Route back to the existing "Nội dung" page for this lesson, if one exists. */
  contentHref?: string;
  exercises: Exercise[];
}

export function exercisesByMode(set: LessonExerciseSet, mode: ExerciseMode): Exercise[] {
  return set.exercises.filter((e) => e.mode === mode);
}
