/**
 * Shared content model for the 4 new "Lộ trình" mini-courses (Động từ,
 * Câu nói tự nhiên, Phrasal Verbs, Từ vựng) — one small, reusable shape
 * instead of 4 near-duplicate ones, since all four are really the same
 * "short English item + Vietnamese meaning + example" pattern the grammar
 * rules already use, just without the 5-section teaching layout.
 */

export interface CollectionItem {
  id: string;
  /** The English word/phrase itself, e.g. "choose" or "pick up" or "Sounds good." */
  english: string;
  /** Standard American English IPA — verbs & vocab only, never Vietnamese-style respelling. */
  ipa?: string;
  vietnamese: string;
  example: string;
  exampleVietnamese?: string;
  /** Phrases only — a short "dùng khi nào" note. */
  whenToUse?: string;
}

export interface CollectionGroup {
  id: string;
  title: string;
  items: CollectionItem[];
}

export interface CollectionData {
  key: "dong-tu" | "cau-noi-tu-nhien" | "phrasal-verbs" | "tu-vung";
  /** Curriculum name shown as the page title, e.g. "500 Động từ thông dụng". */
  title: string;
  subtitle: string;
  groups: CollectionGroup[];
}

export function flattenCollection(data: CollectionData): CollectionItem[] {
  return data.groups.flatMap((g) => g.items);
}
