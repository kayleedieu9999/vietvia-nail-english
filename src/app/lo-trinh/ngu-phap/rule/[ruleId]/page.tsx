import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findGrammarPhase, grammarPhases } from "@/data/grammar/phases";
import { allGrammarRules, getGrammarRuleById, getGrammarRuleSummariesByPhase } from "@/data/grammar";
import RuleLessonPage from "@/components/grammar/RuleLessonPage";

interface RulePageProps {
  params: Promise<{ ruleId: string }>;
}

export function generateStaticParams() {
  return allGrammarRules.map((rule) => ({ ruleId: rule.id }));
}

export async function generateMetadata({ params }: RulePageProps): Promise<Metadata> {
  const { ruleId } = await params;
  const rule = getGrammarRuleById(ruleId);
  if (!rule) return {};
  return {
    title: `${rule.ruleNumber}. ${rule.title} - VietVia English Practice`,
    description: rule.whenToUse,
  };
}

export default async function GrammarRulePage({ params }: RulePageProps) {
  const { ruleId } = await params;
  const rule = getGrammarRuleById(ruleId);
  if (!rule) notFound();

  const phase = findGrammarPhase(rule.phaseNumber);
  if (!phase) notFound();

  const phaseRuleIds = getGrammarRuleSummariesByPhase(phase.phaseNumber).map((r) => r.id);
  const nextPhase = grammarPhases.find((p) => p.phaseNumber === phase.phaseNumber + 1);
  const nextPhaseFirstRuleId = nextPhase
    ? getGrammarRuleSummariesByPhase(nextPhase.phaseNumber)[0]?.id
    : undefined;

  return (
    <RuleLessonPage
      rule={rule}
      phase={phase}
      phaseRuleIds={phaseRuleIds}
      nextPhase={nextPhase}
      nextPhaseFirstRuleId={nextPhaseFirstRuleId}
    />
  );
}
