/**
 * Duplicate / near-duplicate check for the newest content batch against the
 * existing content of the SAME collection (Airport, Pharmacy, Nails). Run:
 *   npx tsx scripts/check-batch-duplicates.ts [threshold]
 * Flags exact matches and word-overlap (Jaccard) similarity >= threshold
 * (default 0.7) between a new sentence and any existing sentence.
 */
import { allLessons } from "../src/data/lessons";
import { flattenCollection } from "../src/types/collection";
import { pharmacyData } from "../src/data/collections";

const threshold = Number(process.argv[2] ?? 0.7);
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9\s']/g, " ").replace(/\s+/g, " ").trim();
const words = (s: string) => new Set(norm(s).split(" ").filter(Boolean));
function jaccard(a: string, b: string): number {
  const A = words(a), B = words(b);
  const inter = [...A].filter((w) => B.has(w)).length;
  return inter / (A.size + B.size - inter || 1);
}

interface Entry { text: string; where: string; isNew: boolean }
const groups: Record<string, Entry[]> = { airport: [], nails: [], pharmacy: [] };

for (const l of allLessons) {
  const key = l.topicId === "airport" ? "airport" : l.topicId.startsWith("nails-") ? "nails" : null;
  if (!key) continue;
  const isNew = Boolean(l.publishedAt);
  for (const q of l.questions) {
    groups[key]!.push({ text: q.english, where: `${l.slug}/${q.id}`, isNew });
    if (q.prompt) groups[key]!.push({ text: q.prompt, where: `${l.slug}/${q.id}#prompt`, isNew });
  }
}
for (const item of flattenCollection(pharmacyData)) {
  groups.pharmacy!.push({ text: item.english, where: item.id, isNew: Boolean(item.newUntil) });
}

let flagged = 0;
for (const [name, entries] of Object.entries(groups)) {
  const fresh = entries.filter((e) => e.isNew);
  const old = entries.filter((e) => !e.isNew);
  let count = 0;
  for (const f of fresh) {
    for (const o of old) {
      const sim = norm(f.text) === norm(o.text) ? 1 : jaccard(f.text, o.text);
      if (sim >= threshold) {
        count++;
        console.log(`  [${name}] ${sim.toFixed(2)}  NEW "${f.text}" (${f.where})  ~  OLD "${o.text}" (${o.where})`);
      }
    }
  }
  // also within the new batch itself
  for (let i = 0; i < fresh.length; i++) for (let j = i + 1; j < fresh.length; j++) {
    const sim = norm(fresh[i]!.text) === norm(fresh[j]!.text) ? 1 : jaccard(fresh[i]!.text, fresh[j]!.text);
    if (sim >= threshold) { count++; console.log(`  [${name}] ${sim.toFixed(2)}  NEW "${fresh[i]!.text}" ~ NEW "${fresh[j]!.text}"`); }
  }
  console.log(`${name}: ${fresh.length} new entries checked vs ${old.length} existing → ${count} flagged`);
  flagged += count;
}
process.exit(flagged === 0 ? 0 : 1);
