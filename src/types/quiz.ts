export type QuizCategory =
  | "Small Talk"
  | "Nail Color"
  | "Pedicure"
  | "Customer Requests";

export interface QuizQuestion {
  id: string;
  category: QuizCategory;
  customerEnglish: string;
  customerVietnamese: string;
  answers: string[];
  correctAnswer: string;
  answerVietnamese: string;
  explanation: string;
}
