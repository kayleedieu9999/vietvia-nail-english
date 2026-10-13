/**
 * QA for the Oct 2026 exercise sets: (1) every English sentence used as a
 * prompt / correct answer / speaking target / sentence-builder answer must
 * come from the new content batch (airport lessons, nails lessons, pharmacy
 * items with newUntil) — no invented content; (2) correct-answer positions
 * must be spread across A/B/C.
 */
import { getLessonsByTopic } from "@/data/lessons";
import { pharmacyData } from "@/data/collections/pharmacy";
import { getExerciseSet } from "@/data/exercises";
import { Exercise } from "@/types/exercise";

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
const nailsTopics = ["nails-bat-dau","nails-dich-vu","nails-mau-design","nails-xu-ly-tinh-huong","nails-pedicure","nails-small-talk","nails-thanh-toan"];

function lessonCorpus(topics: string[]): string {
  const parts: string[] = [];
  for (const t of topics) for (const l of getLessonsByTopic(t)) if (l.publishedAt) for (const q of l.questions) {
    parts.push(q.english, q.prompt ?? "", q.audioText ?? "");
    for (const c of q.choices) parts.push(c.text);
  }
  return norm(parts.join(" | "));
}
const pharmacyCorpus = norm(pharmacyData.groups.flatMap((g) => g.items).filter((i) => i.newUntil).flatMap((i) => [i.english, i.example]).join(" | "));
const corpora: Record<string, string> = {
  "airport-batch-2026-10": lessonCorpus(["airport"]),
  "nails-batch-2026-10": lessonCorpus(nailsTopics),
  "pharmacy-batch-2026-10": pharmacyCorpus,
};

let problems = 0;
function quotedOrWhole(s: string): string[] {
  const q = [...s.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  return q.length ? q : [s];
}
function sentencesOf(e: Exercise): string[] {
  const out: string[] = [];
  if (e.type === "speaking") out.push(e.prompt ?? "", e.targetEnglish ?? "");
  else if (e.type === "sentence_builder") out.push(e.correctSentence ?? "");
  else if (e.type === "true_false") out.push(...quotedOrWhole(e.prompt ?? ""));
  else if (e.type === "fill_blank") out.push(e.audioText ?? "");
  else if (e.type === "situation_choice" || e.type === "image_quiz") out.push(e.options?.find((o) => o.id === e.correctOptionId)?.text ?? "");
  else {
    out.push(e.audioText ?? e.prompt ?? "");
    out.push(e.options?.find((o) => o.id === e.correctOptionId)?.text ?? "");
  }
  return out.filter((s) => /[a-z]/i.test(s));
}

for (const id of Object.keys(corpora)) {
  const set = getExerciseSet(id)!;
  const pos: Record<string, number> = {};
  const types: Record<string, number> = {};
  for (const e of set.exercises) {
    types[e.type] = (types[e.type] ?? 0) + 1;
    if (e.options && e.type !== "true_false") pos[e.correctOptionId!] = (pos[e.correctOptionId!] ?? 0) + 1;
    // vietnamese-only correct options (listening / meaning questions) are skipped via the /[a-z]/ check on English-looking text only when ASCII
    for (const s of sentencesOf(e)) {
      if (/[àáạảãâăđêôơưÀ]/i.test(s)) continue;
      if (!corpora[id].includes(norm(s))) { console.log(`✗ [${id}] ${e.id}: not in new content: "${s}"`); problems++; }
    }
  }
  console.log(`${id}: ${set.exercises.length} exercises, types=${JSON.stringify(types)}, correct positions=${JSON.stringify(pos)}`);
}
console.log(problems ? `\n${problems} problem(s)` : "\n✓ all exercise sentences come from the new batch");
process.exit(problems ? 1 : 0);
