import { GrammarPhaseMeta } from "@/types/grammar";
import { RuleProgress } from "@/lib/grammarProgress";

export type PhaseStatus = "not_started" | "in_progress" | "done";

export interface PhaseProgressResult {
  completed: number;
  total: number;
  ratio: number;
  status: PhaseStatus;
}

/**
 * Every function here only needs `id`/`phaseNumber` — accepting this minimal
 * shape (rather than the full `GrammarRuleLesson`) means callers can pass the
 * light `GrammarRuleSummary` list and never pull all 100 rules' teaching
 * content into a Client Component bundle just to compute progress numbers.
 */
type RuleRef = { id: string; phaseNumber: number };

/** Every phase status is derived from real progress data — no phase is ever locked. */
export function phaseProgress(
  rules: RuleRef[],
  progress: Record<string, RuleProgress>,
): PhaseProgressResult {
  const total = rules.length;
  const completed = rules.filter((rule) => progress[rule.id]?.completed).length;
  const ratio = total > 0 ? completed / total : 0;
  const status: PhaseStatus = completed === 0 ? "not_started" : completed === total ? "done" : "in_progress";
  return { completed, total, ratio, status };
}

export function overallGrammarProgress(
  allRules: RuleRef[],
  progress: Record<string, RuleProgress>,
): { completed: number; total: number } {
  return {
    completed: allRules.filter((rule) => progress[rule.id]?.completed).length,
    total: allRules.length,
  };
}

/** First phase (in syllabus order) that isn't fully done yet — never null unless the whole program is complete. */
export function nextIncompletePhase(
  phases: GrammarPhaseMeta[],
  allRules: RuleRef[],
  progress: Record<string, RuleProgress>,
): GrammarPhaseMeta | undefined {
  return phases.find((phase) => {
    const rulesInPhase = allRules.filter((rule) => rule.phaseNumber === phase.phaseNumber);
    return phaseProgress(rulesInPhase, progress).status !== "done";
  });
}

/** ids of rules whose THỬ NGAY quiz was answered incorrectly — the "câu nên ôn lại" review queue. */
export function reviewQueueRuleIds(allRules: RuleRef[], progress: Record<string, RuleProgress>): string[] {
  return allRules.filter((rule) => progress[rule.id]?.quizCorrect === false).map((rule) => rule.id);
}
