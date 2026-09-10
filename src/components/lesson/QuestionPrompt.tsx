import { ReactNode } from "react";
import { RoundQuestion } from "@/lib/lesson-engine";
import ListenButton from "@/components/ListenButton";

function renderBlankSentence(sentence: string): ReactNode {
  const parts = sentence.split("___");
  if (parts.length === 1) return sentence;
  return (
    <>
      {parts[0]}
      <span className="mx-1 inline-block rounded-md bg-rose-100 px-3 py-0.5 text-rose-400">
        ___
      </span>
      {parts[1]}
    </>
  );
}

export function questionLabel(question: RoundQuestion): string {
  switch (question.type) {
    case "english_to_vietnamese":
      return "Câu này nghĩa là gì?";
    case "vietnamese_to_english":
      return "Chọn câu tiếng Anh đúng:";
    case "conversation_response":
      return "Bạn nên trả lời gì?";
    case "fill_blank":
      return "Chọn từ đúng để điền vào chỗ trống:";
    case "listening":
      return "Nghe rồi chọn nghĩa đúng:";
    case "true_false":
      return "Câu này đúng hay sai?";
    case "matching":
      return "Chọn đáp án đúng:";
    case "choose_best_sentence":
      return "Chọn câu phù hợp nhất:";
    case "situation_response":
      return "Bạn nên nói gì trong tình huống này?";
  }
}

interface QuestionPromptProps {
  question: RoundQuestion;
}

export default function QuestionPrompt({ question }: QuestionPromptProps) {
  const speakerLabel = question.speaker?.toUpperCase();

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
      {speakerLabel && (
        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold tracking-wide text-orange-600">
          {speakerLabel}
        </span>
      )}

      {question.type === "vietnamese_to_english" ||
      question.type === "choose_best_sentence" ||
      question.type === "situation_response" ? (
        <p className="mt-3 text-lg font-semibold leading-snug text-slate-800">
          {question.promptContext}
        </p>
      ) : question.type === "fill_blank" ? (
        <p className="mt-3 text-xl font-bold leading-snug text-slate-900">
          {renderBlankSentence(question.prompt ?? question.english)}
        </p>
      ) : question.type === "listening" ? (
        <div className="mt-3 flex flex-col items-center gap-3 py-2 text-center">
          <p className="text-sm font-semibold text-slate-500">
            Bấm nghe rồi chọn nghĩa đúng
          </p>
          <ListenButton text={question.audioText ?? question.english} label="Nghe câu này" />
        </div>
      ) : (
        <>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <p className="text-xl font-bold leading-snug text-slate-900">
              {question.prompt ?? question.english}
            </p>
            <ListenButton text={question.audioText ?? question.prompt ?? question.english} />
          </div>
          {question.promptVietnamese && (
            <p className="mt-2 text-base text-slate-500">{question.promptVietnamese}</p>
          )}
        </>
      )}
    </div>
  );
}
