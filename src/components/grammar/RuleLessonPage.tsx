"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GrammarPhaseMeta, GrammarRuleLesson } from "@/types/grammar";
import { recordRuleCompletion, recordRuleOpened, useGrammarProgress } from "@/lib/grammarProgress";
import GrammarRuleView from "@/components/grammar/GrammarRuleView";
import PhaseCompletion from "@/components/grammar/PhaseCompletion";

interface RuleLessonPageProps {
  rule: GrammarRuleLesson;
  phase: GrammarPhaseMeta;
  /** ids of every rule in this phase, in rule-number order. */
  phaseRuleIds: string[];
  nextPhase?: GrammarPhaseMeta;
  nextPhaseFirstRuleId?: string;
}

export default function RuleLessonPage({
  rule,
  phase,
  phaseRuleIds,
  nextPhase,
  nextPhaseFirstRuleId,
}: RuleLessonPageProps) {
  const router = useRouter();
  const progress = useGrammarProgress();
  const [justCompletedPhase, setJustCompletedPhase] = useState(false);

  useEffect(() => {
    recordRuleOpened(rule.id);
  }, [rule.id]);

  function handleContinue(quizCorrect: boolean | null) {
    recordRuleCompletion(rule.id, quizCorrect);

    const currentIndex = phaseRuleIds.indexOf(rule.id);
    const nextRuleId = phaseRuleIds[currentIndex + 1];
    if (nextRuleId) {
      router.push(`/lo-trinh/ngu-phap/rule/${nextRuleId}`);
      return;
    }
    // Last rule in the phase — show the celebration in place instead of navigating away.
    setJustCompletedPhase(true);
  }

  if (justCompletedPhase) {
    const masteredCount = phaseRuleIds.filter((id) => progress[id]?.quizCorrect === true).length;
    const reviewCount = phaseRuleIds.filter((id) => progress[id]?.quizCorrect === false).length;
    return (
      <PhaseCompletion
        phase={phase}
        masteredCount={masteredCount}
        reviewCount={reviewCount}
        totalCount={phaseRuleIds.length}
        nextPhase={nextPhase}
        nextPhaseFirstRuleHref={
          nextPhaseFirstRuleId ? `/lo-trinh/ngu-phap/rule/${nextPhaseFirstRuleId}` : undefined
        }
      />
    );
  }

  return <GrammarRuleView rule={rule} onContinue={handleContinue} />;
}
