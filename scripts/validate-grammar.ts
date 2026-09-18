/**
 * Content validation for the 100-grammar-rules program. Run with:
 *   npx tsx scripts/validate-grammar.ts
 *
 * Checks:
 * - Exactly 100 rules, numbered 1-100 with no gaps or duplicates
 * - Every rule's phaseNumber matches its ruleNumber's phase range in grammarPhases
 * - No duplicate rule ids
 * - Every rule has non-empty whenToUse/pattern/title
 * - moreExamples has exactly 3 entries
 * - quiz has exactly 3 choices, correctAnswer matches one of them, non-empty explanation
 * - No exact-duplicate English sentences across nailSalonExample/moreExamples/speakingPractice (site-wide)
 * - No two rules share the same title
 */
import { allGrammarRules } from "../src/data/grammar";
import { grammarPhases, phaseForRuleNumber } from "../src/data/grammar/phases";

function normalize(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

let errorCount = 0;
function fail(message: string): void {
  errorCount++;
  console.log(`  ✗ ${message}`);
}

console.log(`Total rules: ${allGrammarRules.length}\n`);

// --- Count & numbering ---
if (allGrammarRules.length !== 100) {
  fail(`Expected exactly 100 rules, found ${allGrammarRules.length}`);
}

const seenNumbers = new Map<number, string>();
const seenIds = new Map<string, string>();
const seenTitles = new Map<string, string>();

for (const rule of allGrammarRules) {
  const dupNumber = seenNumbers.get(rule.ruleNumber);
  if (dupNumber) fail(`Duplicate ruleNumber ${rule.ruleNumber} (${rule.id} and ${dupNumber})`);
  seenNumbers.set(rule.ruleNumber, rule.id);

  const dupId = seenIds.get(rule.id);
  if (dupId) fail(`Duplicate rule id "${rule.id}" (also used by rule number ${dupId})`);
  seenIds.set(rule.id, String(rule.ruleNumber));

  const expectedPhase = phaseForRuleNumber(rule.ruleNumber);
  if (!expectedPhase) {
    fail(`Rule ${rule.ruleNumber} (${rule.id}) doesn't fall in any phase's ruleRange`);
  } else if (expectedPhase.phaseNumber !== rule.phaseNumber) {
    fail(
      `Rule ${rule.ruleNumber} (${rule.id}) has phaseNumber ${rule.phaseNumber}, expected ${expectedPhase.phaseNumber}`,
    );
  }

  if (!rule.title?.trim()) fail(`Rule ${rule.id} has empty title`);
  if (!rule.whenToUse?.trim()) fail(`Rule ${rule.id} has empty whenToUse`);
  if (!rule.pattern?.trim()) fail(`Rule ${rule.id} has empty pattern`);

  const dupTitle = seenTitles.get(normalize(rule.title));
  if (dupTitle) fail(`Duplicate title "${rule.title}" (${rule.id} and ${dupTitle})`);
  seenTitles.set(normalize(rule.title), rule.id);

  if (!rule.nailSalonExample?.english?.trim() || !rule.nailSalonExample?.vietnamese?.trim()) {
    fail(`Rule ${rule.id} has an incomplete nailSalonExample`);
  }

  if (!Array.isArray(rule.moreExamples) || rule.moreExamples.length !== 3) {
    fail(`Rule ${rule.id} must have exactly 3 moreExamples, has ${rule.moreExamples?.length ?? 0}`);
  } else {
    for (const [i, example] of rule.moreExamples.entries()) {
      if (!example.english?.trim() || !example.vietnamese?.trim()) {
        fail(`Rule ${rule.id} moreExamples[${i}] is incomplete`);
      }
    }
  }

  if (!rule.quiz) {
    fail(`Rule ${rule.id} has no quiz`);
  } else {
    if (!Array.isArray(rule.quiz.choices) || rule.quiz.choices.length !== 3) {
      fail(`Rule ${rule.id} quiz must have exactly 3 choices, has ${rule.quiz.choices?.length ?? 0}`);
    } else {
      const choiceIds = rule.quiz.choices.map((c) => c.id);
      if (new Set(choiceIds).size !== choiceIds.length) {
        fail(`Rule ${rule.id} quiz has duplicate choice ids`);
      }
      if (!rule.quiz.correctAnswer || !choiceIds.includes(rule.quiz.correctAnswer)) {
        fail(
          `Rule ${rule.id} quiz.correctAnswer "${rule.quiz.correctAnswer}" not found in choices [${choiceIds.join(",")}]`,
        );
      }
    }
    if (!rule.quiz.question?.trim()) fail(`Rule ${rule.id} quiz has empty question`);
    if (!rule.quiz.explanation?.trim()) fail(`Rule ${rule.id} quiz has empty explanation`);
  }

  if (!rule.speakingPractice?.targetEnglish?.trim() || !rule.speakingPractice?.vietnameseHint?.trim()) {
    fail(`Rule ${rule.id} has an incomplete speakingPractice`);
  }
}

for (let n = 1; n <= 100; n++) {
  if (!seenNumbers.has(n)) fail(`Missing rule number ${n}`);
}

// --- Phase ruleRange sanity ---
console.log("Phase ranges:");
for (const phase of grammarPhases) {
  console.log(`  CHẶNG ${phase.phaseNumber}: rules ${phase.ruleRange[0]}-${phase.ruleRange[1]}`);
  if (phase.ruleRange[1] - phase.ruleRange[0] !== 9) {
    fail(`Phase ${phase.phaseNumber} ruleRange should span 10 rules, got ${JSON.stringify(phase.ruleRange)}`);
  }
}
console.log();

// --- Duplicate English sentence scan (site-wide, across all example fields) ---
console.log("Duplicate-sentence scan:");
const sentenceToLocation = new Map<string, string>();
let dupCount = 0;
for (const rule of allGrammarRules) {
  const sentences: [string, string][] = [
    [rule.nailSalonExample.english, "nailSalonExample"],
    ...rule.moreExamples.map((ex, i): [string, string] => [ex.english, `moreExamples[${i}]`]),
    [rule.speakingPractice.targetEnglish, "speakingPractice"],
  ];
  for (const [sentence, field] of sentences) {
    if (!sentence?.trim()) continue;
    const key = normalize(sentence);
    const prior = sentenceToLocation.get(key);
    if (prior) {
      dupCount++;
      fail(`Duplicate sentence "${sentence}" — used in ${prior} and ${rule.id}/${field}`);
    } else {
      sentenceToLocation.set(key, `${rule.id}/${field}`);
    }
  }
}
console.log(`  ${dupCount === 0 ? "no duplicates ✓" : `${dupCount} duplicate(s) ✗`}\n`);

console.log(errorCount === 0 ? "✓ ALL CHECKS PASSED" : `✗ ${errorCount} ISSUE(S) FOUND`);
process.exit(errorCount === 0 ? 0 : 1);
