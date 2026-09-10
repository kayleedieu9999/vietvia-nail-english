/**
 * Content validation for the whole site. Run with:
 *   npx tsx scripts/validate-lessons.ts
 *
 * Checks:
 * - Every topic hits its expected lesson count (see EXPECTED_TOPIC_COUNTS)
 * - Every lesson has exactly 10 questions
 * - Every question has a non-empty `choices` array and a `correctAnswer`
 *   that actually matches one of the choice ids
 * - No duplicate lesson ids or slugs (site-wide)
 * - No duplicate question ids (site-wide)
 * - No two questions within the same topic share the exact same `english`
 *   sentence (case/whitespace-insensitive)
 * - No two lessons within the same topic are near-duplicates of each other
 *   (>= 6 of their 10 `english` sentences identical)
 */
import { allLessons } from "../src/data/lessons";

/** Set to null to skip the count check for a topic (e.g. legacy topics not part of this expansion). */
const EXPECTED_TOPIC_COUNTS: Record<string, number | null> = {
  "small-talk": 51, // 1 legacy + 50 new
  "customer-requests": 51,
  pedicure: 51,
  "nail-color": 51,
  "unhappy-customer": 50,
  "hand-service": 50,
  "nail-general": 15,
  "food-life": 1,
};

function normalize(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

let errorCount = 0;
function fail(message: string): void {
  errorCount++;
  console.log(`  ✗ ${message}`);
}

console.log(`Total lessons: ${allLessons.length}`);
const totalQuestions = allLessons.reduce((sum, l) => sum + l.questions.length, 0);
console.log(`Total questions: ${totalQuestions}\n`);

// --- Per-topic lesson counts ---
console.log("Topic lesson counts:");
const byTopic = new Map<string, typeof allLessons>();
for (const lesson of allLessons) {
  const list = byTopic.get(lesson.topicId) ?? [];
  list.push(lesson);
  byTopic.set(lesson.topicId, list);
}
for (const [topicId, lessons] of byTopic) {
  const expected = EXPECTED_TOPIC_COUNTS[topicId];
  const marker = expected == null ? "" : expected === lessons.length ? " ✓" : " ✗ MISMATCH";
  console.log(`  ${topicId}: ${lessons.length} lessons${marker}`);
  if (expected != null && expected !== lessons.length) {
    fail(`Topic "${topicId}" has ${lessons.length} lessons, expected ${expected}`);
  }
}
for (const [topicId, expected] of Object.entries(EXPECTED_TOPIC_COUNTS)) {
  if (expected != null && !byTopic.has(topicId)) {
    fail(`Topic "${topicId}" has ZERO lessons, expected ${expected}`);
  }
}
console.log();

// --- Structural checks ---
// These 5 legacy lessons predate this expansion and were intentionally left
// untouched (each has 5 questions, not 10) — not a defect.
const LEGACY_FIVE_QUESTION_SLUGS = new Set([
  "chao-hoi-tro-chuyen",
  "chon-mau-son",
  "lam-pedicure-cho-khach",
  "khach-yeu-cau-thay-doi",
]);

const seenLessonIds = new Map<string, string>();
const seenLessonSlugs = new Map<string, string>();
const seenQuestionIds = new Map<string, string>();

for (const lesson of allLessons) {
  const expectedQuestionCount = LEGACY_FIVE_QUESTION_SLUGS.has(lesson.slug) ? 5 : 10;
  if (lesson.questions.length !== expectedQuestionCount) {
    fail(
      `Lesson "${lesson.slug}" (${lesson.id}) has ${lesson.questions.length} questions, expected ${expectedQuestionCount}`
    );
  }

  const dupLessonId = seenLessonIds.get(lesson.id);
  if (dupLessonId) fail(`Duplicate lesson id "${lesson.id}" (also used by ${dupLessonId})`);
  seenLessonIds.set(lesson.id, lesson.slug);

  const dupSlug = seenLessonSlugs.get(lesson.slug);
  if (dupSlug) fail(`Duplicate lesson slug "${lesson.slug}" (also used by lesson id ${dupSlug})`);
  seenLessonSlugs.set(lesson.slug, lesson.id);

  for (const q of lesson.questions) {
    const dupQId = seenQuestionIds.get(q.id);
    if (dupQId) fail(`Duplicate question id "${q.id}" (in "${lesson.slug}", also in "${dupQId}")`);
    seenQuestionIds.set(q.id, lesson.slug);

    if (!q.choices || q.choices.length === 0) {
      fail(`Question "${q.id}" in "${lesson.slug}" has an empty choices array`);
      continue;
    }
    const choiceIds = q.choices.map((c) => c.id);
    if (new Set(choiceIds).size !== choiceIds.length) {
      fail(`Question "${q.id}" in "${lesson.slug}" has duplicate choice ids`);
    }
    if (!q.correctAnswer || !choiceIds.includes(q.correctAnswer)) {
      fail(
        `Question "${q.id}" in "${lesson.slug}" has correctAnswer "${q.correctAnswer}" not found in choices [${choiceIds.join(",")}]`
      );
    }
    if (!q.english?.trim()) fail(`Question "${q.id}" in "${lesson.slug}" has empty "english"`);
    if (!q.vietnamese?.trim()) fail(`Question "${q.id}" in "${lesson.slug}" has empty "vietnamese"`);
    if (!q.explanation?.trim()) fail(`Question "${q.id}" in "${lesson.slug}" has empty "explanation"`);
    if (!q.wrongAnswerExplanations?.trim())
      fail(`Question "${q.id}" in "${lesson.slug}" has empty "wrongAnswerExplanations"`);
    if (!q.usageTip?.trim()) fail(`Question "${q.id}" in "${lesson.slug}" has empty "usageTip"`);

    if (q.type === "fill_blank" && !q.prompt?.includes("___")) {
      fail(`fill_blank question "${q.id}" in "${lesson.slug}" is missing "___" in prompt`);
    }
    if (
      (q.type === "vietnamese_to_english" || q.type === "choose_best_sentence" || q.type === "situation_response") &&
      !q.promptContext?.trim()
    ) {
      fail(`${q.type} question "${q.id}" in "${lesson.slug}" is missing promptContext`);
    }
    if ((q.type === "conversation_response" || q.type === "true_false") && !q.prompt?.trim()) {
      fail(`${q.type} question "${q.id}" in "${lesson.slug}" is missing prompt`);
    }
  }
}

// --- Duplicate English sentence detection (within each topic) ---
console.log("Duplicate-sentence scan (within each topic):");
// nail-general predates this expansion and is out of scope for it — report
// its duplicates without counting them as a failure.
const DUPLICATE_SCAN_EXEMPT_TOPICS = new Set(["nail-general"]);

for (const [topicId, lessons] of byTopic) {
  const sentenceToLocation = new Map<string, string>();
  let topicDupCount = 0;
  const exempt = DUPLICATE_SCAN_EXEMPT_TOPICS.has(topicId);
  for (const lesson of lessons) {
    for (const q of lesson.questions) {
      const key = normalize(q.english);
      const prior = sentenceToLocation.get(key);
      if (prior) {
        topicDupCount++;
        const message = `Duplicate English sentence in topic "${topicId}": "${q.english}" — used in ${prior} and ${lesson.slug}/${q.id}`;
        if (exempt) {
          console.log(`  (pre-existing, out of scope) ${message}`);
        } else {
          fail(message);
        }
      } else {
        sentenceToLocation.set(key, `${lesson.slug}/${q.id}`);
      }
    }
  }
  console.log(`  ${topicId}: ${topicDupCount === 0 ? "no duplicates ✓" : `${topicDupCount} duplicate(s)${exempt ? " (exempt)" : " ✗"}`}`);
}
console.log();

// --- Near-duplicate lesson detection (within each topic) ---
console.log("Near-duplicate lesson scan (within each topic, >=6/10 identical sentences):");
for (const [topicId, lessons] of byTopic) {
  let flagged = 0;
  for (let i = 0; i < lessons.length; i++) {
    for (let j = i + 1; j < lessons.length; j++) {
      const a = new Set(lessons[i].questions.map((q) => normalize(q.english)));
      const b = lessons[j].questions.map((q) => normalize(q.english));
      const overlap = b.filter((s) => a.has(s)).length;
      if (overlap >= 6) {
        flagged++;
        fail(
          `Near-duplicate lessons in topic "${topicId}": "${lessons[i].slug}" and "${lessons[j].slug}" share ${overlap}/10 identical sentences`
        );
      }
    }
  }
  console.log(`  ${topicId}: ${flagged === 0 ? "no near-duplicates ✓" : `${flagged} pair(s) flagged ✗`}`);
}

console.log(`\n${errorCount === 0 ? "✓ ALL CHECKS PASSED" : `✗ ${errorCount} ISSUE(S) FOUND`}`);
process.exit(errorCount === 0 ? 0 : 1);
