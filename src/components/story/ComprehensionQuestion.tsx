"use client";

import { useState } from "react";
import { StoryComprehensionQuestion } from "@/types/story";

interface ComprehensionQuestionProps {
  question: StoryComprehensionQuestion;
  onAnswered: (correct: boolean) => void;
}

/** One 3-choice comprehension check after a story section — same answer/feedback shape as the grammar quiz, standalone since a story section isn't a `GrammarRuleLesson`. */
export default function ComprehensionQuestion({ question, onAnswered }: ComprehensionQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const isCorrect = selected === question.correctAnswer;

  function handleSelect(choiceId: string) {
    if (selected) return;
    setSelected(choiceId);
    onAnswered(choiceId === question.correctAnswer);
  }

  return (
    <div className="mt-5 border-t border-slate-100 pt-5">
      <p className="text-sm font-extrabold uppercase tracking-wide text-rose-500">Câu hỏi</p>
      <p className="mt-2 text-base font-semibold text-slate-900">{question.question}</p>
      <div className="mt-3 space-y-2">
        {question.choices.map((choice) => {
          let cls = "border-slate-200 bg-white text-slate-800";
          if (selected) {
            if (choice.id === question.correctAnswer) cls = "border-emerald-400 bg-emerald-50 text-emerald-800";
            else if (choice.id === selected) cls = "border-rose-400 bg-rose-50 text-rose-800";
            else cls = "border-slate-200 bg-white text-slate-400";
          }
          return (
            <button
              key={choice.id}
              type="button"
              disabled={!!selected}
              onClick={() => handleSelect(choice.id)}
              className={`w-full rounded-2xl border-2 px-4 py-3 text-left text-base font-medium transition ${cls}`}
            >
              {choice.text}
            </button>
          );
        })}
      </div>
      {selected && (
        <p className={`mt-3 text-sm font-bold ${isCorrect ? "text-emerald-600" : "text-rose-600"}`}>
          {isCorrect ? "✓ Chính xác!" : "✗ Chưa đúng, không sao — nghe lại đoạn trên nhé."}
        </p>
      )}
    </div>
  );
}
