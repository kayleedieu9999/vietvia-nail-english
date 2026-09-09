import { RoundQuestion } from "@/lib/lesson-engine";
import ListenButton from "@/components/ListenButton";

interface FeedbackPanelProps {
  question: RoundQuestion;
  isCorrect: boolean;
}

export default function FeedbackPanel({ question, isCorrect }: FeedbackPanelProps) {
  return (
    <div
      className={`mt-5 space-y-4 rounded-2xl p-5 ${
        isCorrect ? "bg-emerald-50 ring-1 ring-emerald-200" : "bg-rose-50 ring-1 ring-rose-200"
      }`}
    >
      <p className={`text-base font-bold ${isCorrect ? "text-emerald-700" : "text-rose-700"}`}>
        {isCorrect ? "✓ Chính xác!" : "✗ Chưa đúng."}
      </p>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Câu đúng</p>
        <div className="mt-1 flex flex-wrap items-center gap-3">
          <p className="text-lg font-bold text-slate-900">{question.english}</p>
          <ListenButton text={question.audioText ?? question.english} />
        </div>
        <p className="mt-1 text-sm text-slate-600">{question.vietnamese}</p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">TẠI SAO?</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-700">{question.explanation}</p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          VÌ SAO CÁC CÂU KHÁC KHÔNG ĐÚNG?
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-700">
          {question.wrongAnswerExplanations}
        </p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          DÙNG KHI NÀO?
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-700">{question.usageTip}</p>
      </div>
    </div>
  );
}
