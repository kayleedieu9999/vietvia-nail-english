import { QuizQuestion } from "@/types/quiz";
import { questions } from "@/data/questions";

const QUESTIONS_PER_ROUND = 5;

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export interface RoundQuestion extends QuizQuestion {
  shuffledAnswers: string[];
}

/** Builds a fresh round of questions with randomized order and shuffled answers. */
export function generateRound(
  count: number = QUESTIONS_PER_ROUND
): RoundQuestion[] {
  const picked = shuffle(questions).slice(0, count);
  return picked.map((question) => ({
    ...question,
    shuffledAnswers: shuffle(question.answers),
  }));
}

export function scoreEncouragement(score: number, total: number): string {
  const ratio = score / total;
  if (ratio === 1) return "Xuất sắc! Bạn nói tiếng Anh với khách rất tốt! 🌟";
  if (ratio >= 0.8) return "Rất tốt! Bạn sắp thành thạo rồi.";
  if (ratio >= 0.6) return "Khá lắm! Cứ luyện tập thêm là sẽ giỏi hơn.";
  if (ratio >= 0.4) return "Bạn đang tiến bộ. Luyện thêm vài lần nữa nhé!";
  return "Không sao cả, cứ luyện tập mỗi ngày sẽ tốt hơn.";
}
