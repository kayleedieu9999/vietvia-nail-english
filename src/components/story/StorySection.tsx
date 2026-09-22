"use client";

import { useState } from "react";
import { StorySection as StorySectionType } from "@/types/story";
import StoryAudioControls from "./StoryAudioControls";
import StoryTranscript from "./StoryTranscript";
import ComprehensionQuestion from "./ComprehensionQuestion";
import ReactionPractice from "./ReactionPractice";

interface StorySectionProps {
  section: StorySectionType;
  index: number;
  total: number;
  onComplete: (result: { comprehensionCorrect: boolean; reactionDone: boolean }) => void;
}

type Step = "listen" | "question" | "reaction";

/** One story part: listen (audio-first, transcript on request) → comprehension question → reaction speaking practice. */
export default function StorySection({ section, index, total, onComplete }: StorySectionProps) {
  const [step, setStep] = useState<Step>("listen");
  const [comprehensionCorrect, setComprehensionCorrect] = useState<boolean | null>(null);

  return (
    <div className="card-surface">
      <p className="text-xs font-extrabold uppercase tracking-wide text-slate-400">
        PHẦN {index + 1} / {total}
      </p>
      <p className="mt-1 text-xl font-extrabold text-slate-900">{section.title}</p>

      <div className="mt-4">
        <StoryAudioControls text={section.audioText} />
        <StoryTranscript english={section.audioText} vietnamese={section.vietnamese} />
      </div>

      {step === "listen" && (
        <button type="button" onClick={() => setStep("question")} className="btn-primary mt-5 w-full">
          Tiếp tục
        </button>
      )}

      {step === "question" && (
        <>
          <ComprehensionQuestion question={section.question} onAnswered={setComprehensionCorrect} />
          {comprehensionCorrect !== null && (
            <button type="button" onClick={() => setStep("reaction")} className="btn-primary mt-4 w-full">
              Tiếp tục
            </button>
          )}
        </>
      )}

      {step === "reaction" && (
        <ReactionPractice
          reaction={section.reaction}
          onDone={() =>
            onComplete({ comprehensionCorrect: comprehensionCorrect ?? false, reactionDone: true })
          }
        />
      )}
    </div>
  );
}
