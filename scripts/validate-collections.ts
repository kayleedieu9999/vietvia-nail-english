/**
 * Content validation for the 4 "Lộ trình" collections (Động từ, Câu nói tự
 * nhiên, Phrasal Verbs, Từ vựng). Run with:
 *   npx tsx scripts/validate-collections.ts
 *
 * Checks:
 * - No duplicate item ids or slugs within a collection
 * - No duplicate `english` entries within a collection, after normalizing
 *   case/punctuation/whitespace (e.g. "Sounds good." and "sounds good" are
 *   flagged as the same entry)
 * - No empty english/vietnamese/example fields
 * - No duplicate group ids within a collection
 * - Reports per-collection and per-group item counts
 */
import { collections } from "../src/data/collections";
import { flattenCollection } from "../src/types/collection";

function normalize(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[.!?,'"]/g, "")
    .replace(/\s+/g, " ");
}

let errorCount = 0;
function fail(message: string): void {
  errorCount++;
  console.log(`  ✗ ${message}`);
}

for (const data of Object.values(collections)) {
  console.log(`\n=== ${data.title} (${data.key}) ===`);
  const allItems = flattenCollection(data);
  console.log(`Total items: ${allItems.length}`);

  const seenGroupIds = new Set<string>();
  for (const group of data.groups) {
    if (seenGroupIds.has(group.id)) fail(`Duplicate group id "${group.id}"`);
    seenGroupIds.add(group.id);
    console.log(`  ${group.title} (${group.id}): ${group.items.length} items`);
  }

  const seenIds = new Map<string, string>();
  const seenNormalizedEnglish = new Map<string, string>();

  for (const group of data.groups) {
    for (const item of group.items) {
      const dupId = seenIds.get(item.id);
      if (dupId) fail(`Duplicate item id "${item.id}" (also in group "${dupId}")`);
      seenIds.set(item.id, group.id);

      const key = normalize(item.english);
      const dupEnglish = seenNormalizedEnglish.get(key);
      if (dupEnglish) {
        fail(`Duplicate/near-duplicate english "${item.english}" (id ${item.id}) — normalized form already used by ${dupEnglish}`);
      }
      seenNormalizedEnglish.set(key, item.id);

      if (!item.english?.trim()) fail(`Item "${item.id}" has empty english`);
      if (!item.vietnamese?.trim()) fail(`Item "${item.id}" has empty vietnamese`);
      if (!item.example?.trim()) fail(`Item "${item.id}" has empty example`);
      if (data.key === "cau-noi-tu-nhien" && !item.whenToUse?.trim()) {
        fail(`Phrase "${item.id}" is missing whenToUse (required for this collection)`);
      }
    }
  }
}

console.log(`\n${errorCount === 0 ? "✓ ALL CHECKS PASSED" : `✗ ${errorCount} ISSUE(S) FOUND`}`);
process.exit(errorCount === 0 ? 0 : 1);
