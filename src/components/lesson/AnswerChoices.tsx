import { RoundQuestion } from "@/lib/lesson-engine";

const choiceLabels = ["A", "B", "C", "D", "E"];

interface AnswerChoicesProps {
  question: RoundQuestion;
  selectedChoiceId: string | null;
  onSelect: (choiceId: string) => void;
}

export default function AnswerChoices({
  question,
  selectedChoiceId,
  onSelect,
}: AnswerChoicesProps) {
  const hasAnswered = selectedChoiceId !== null;

  return (
    <div className="space-y-3">
      {question.shuffledChoices.map((choice, index) => {
        const isSelected = selectedChoiceId === choice.id;
        const isThisCorrect = choice.id === question.correctAnswer;

        let stateClasses = "border-slate-200 bg-white text-slate-800 active:scale-[0.98]";
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
            key={choice.id}
            type="button"
            disabled={hasAnswered}
            onClick={() => onSelect(choice.id)}
            className={`flex w-full items-start gap-3 rounded-2xl border-2 px-4 py-4 text-left text-base font-medium shadow-sm transition ${stateClasses}`}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
              {choiceLabels[index]}
            </span>
            <span className="pt-0.5">{choice.text}</span>
          </button>
        );
      })}
    </div>
  );
}
