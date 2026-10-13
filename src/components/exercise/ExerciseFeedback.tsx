interface ExerciseFeedbackProps {
  isCorrect: boolean;
  explanation?: string;
}

/** Shared correct/incorrect banner reused by every choice-based exercise type. */
export default function ExerciseFeedback({ isCorrect, explanation }: ExerciseFeedbackProps) {
  return (
    <div
      className={`mt-4 rounded-2xl p-4 ${isCorrect ? "bg-emerald-50 ring-1 ring-emerald-200" : "bg-rose-50 ring-1 ring-rose-200"}`}
    >
      <p className={`text-sm font-bold ${isCorrect ? "text-emerald-700" : "text-rose-700"}`}>
        {isCorrect ? "✓ Đúng rồi!" : "Thử lại nhé."}
      </p>
      {explanation && <p className="mt-1 text-sm leading-relaxed text-slate-700">{explanation}</p>}
    </div>
  );
}
