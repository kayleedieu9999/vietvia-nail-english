import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findGrammarPhase, grammarPhases } from "@/data/grammar/phases";
import { getGrammarRuleSummariesByPhase } from "@/data/grammar";
import PhaseDetailView from "@/components/grammar/PhaseDetailView";

interface PhasePageProps {
  params: Promise<{ phase: string }>;
}

export function generateStaticParams() {
  return grammarPhases.map((phase) => ({ phase: String(phase.phaseNumber) }));
}

export async function generateMetadata({ params }: PhasePageProps): Promise<Metadata> {
  const { phase: phaseParam } = await params;
  const phase = findGrammarPhase(Number(phaseParam));
  if (!phase) return {};
  return {
    title: `CHẶNG ${phase.phaseNumber}: ${phase.titleVi} - VietVia English Practice`,
    description: phase.descriptionVi,
  };
}

export default async function GrammarPhasePage({ params }: PhasePageProps) {
  const { phase: phaseParam } = await params;
  const phase = findGrammarPhase(Number(phaseParam));
  if (!phase) notFound();

  const rules = getGrammarRuleSummariesByPhase(phase.phaseNumber);

  return <PhaseDetailView phase={phase} rules={rules} />;
}
