import { RoundQuestion } from "@/lib/quiz-engine";

interface QuizScreenProps {
  question: RoundQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: string | null;
  onSelect: (answer: string) => void;
  onNext: () => void;
}

const answerLabels = ["A", "B", "C", "D", "E"];

export default function QuizScreen({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelect,
  onNext,
}: QuizScreenProps) {
  const hasAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="flex min-h-dvh flex-col px-5 py-6">
      <div className="mx-auto w-full max-w-sm flex-1">
        {/* Progress */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-slate-500">
            Câu {questionNumber} / {totalQuestions}
          </p>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-rose-100">
            <div
              className="h-full rounded-full bg-rose-500 transition-all"
              style={{
                width: `${(questionNumber / totalQuestions) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Customer sentence card */}
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
          <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-bold tracking-wide text-rose-600">
            CUSTOMER
          </span>
          <p className="mt-3 text-xl font-bold leading-snug text-slate-900">
            &ldquo;{question.customerEnglish}&rdquo;
          </p>
          <p className="mt-2 text-base text-slate-500">
            &ldquo;{question.customerVietnamese}&rdquo;
          </p>
        </div>

        {/* Question prompt */}
        <p className="mt-6 mb-3 text-base font-semibold text-slate-700">
          Bạn sẽ trả lời sao?
        </p>

        {/* Answer buttons */}
        <div className="space-y-3">
          {question.shuffledAnswers.map((answer, index) => {
            const isSelected = selectedAnswer === answer;
            const isThisCorrect = answer === question.correctAnswer;

            let stateClasses =
              "border-slate-200 bg-white text-slate-800 active:scale-[0.98]";

            if (hasAnswered) {
              if (isThisCorrect) {
                stateClasses = "border-emerald-400 bg-emerald-50 text-emerald-800";
              } else if (isSelected) {
                stateClasses = "border-rose-400 bg-rose-50 text-rose-800";
              } else {
                stateClasses = "border-slate-200 bg-white text-slate-400";
              }
            }

            return (
              <button
                key={answer}
                type="button"
                disabled={hasAnswered}
                onClick={() => onSelect(answer)}
                className={`flex w-full items-start gap-3 rounded-2xl border-2 px-4 py-4 text-left text-base font-medium shadow-sm transition ${stateClasses}`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                  {answerLabels[index]}
                </span>
                <span className="pt-0.5">{answer}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {hasAnswered && (
          <div
            className={`mt-5 rounded-2xl p-5 ${
              isCorrect
                ? "bg-emerald-50 ring-1 ring-emerald-200"
                : "bg-rose-50 ring-1 ring-rose-200"
            }`}
          >
            {isCorrect ? (
              <>
                <p className="text-base font-bold text-emerald-700">
                  ✓ Chính xác!
                </p>
                <p className="mt-2 text-base font-semibold text-slate-800">
                  {question.correctAnswer}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {question.answerVietnamese}
                </p>
              </>
            ) : (
              <>
                <p className="text-base font-bold text-rose-700">
                  Chưa đúng.
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Câu trả lời đúng:
                </p>
                <p className="mt-1 text-base font-semibold text-slate-800">
                  {question.correctAnswer}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {question.answerVietnamese}
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  {question.explanation}
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Next button */}
      {hasAnswered && (
        <div className="mx-auto mt-6 w-full max-w-sm">
          <button
            type="button"
            onClick={onNext}
            className="w-full rounded-2xl bg-rose-500 px-6 py-4 text-lg font-bold text-white shadow-sm shadow-rose-300 transition active:scale-[0.98] active:bg-rose-600"
          >
            CÂU TIẾP THEO →
          </button>
        </div>
      )}
    </div>
  );
}
