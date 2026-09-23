import { getLessonsByTopic } from "@/data/lessons";
import { PracticeItem } from "@/lib/dailyPronunciation";

/**
 * Server-only: builds a small (~30-item) pool of short, natural nail-salon
 * lines for the homepage "Tiệm Nails" speaking-practice mode, pulled from a
 * few real Hội thoại Nails lessons' questions. Deliberately NOT imported by
 * any client component — only `src/app/page.tsx` (a Server Component) calls
 * this, then passes the small resulting array down as a plain prop, keeping
 * the full heavy `Lesson[]` dataset out of the client bundle (same
 * discipline as `LessonSummary`).
 */

const SOURCE_TOPIC_IDS = ["nails-bat-dau", "nails-dich-vu", "nails-mau-design"];
const MAX_WORDS = 8;
const POOL_SIZE = 30;

export function buildNailsSpeakingPool(): PracticeItem[] {
  const pool: PracticeItem[] = [];
  const seenEnglish = new Set<string>();

  for (const topicId of SOURCE_TOPIC_IDS) {
    for (const lesson of getLessonsByTopic(topicId)) {
      for (const question of lesson.questions) {
        if (question.type !== "english_to_vietnamese" && question.type !== "conversation_response") continue;
        const english = question.english.trim();
        const key = english.toLowerCase();
        if (!english || seenEnglish.has(key)) continue;
        if (english.split(/\s+/).length > MAX_WORDS) continue;

        seenEnglish.add(key);
        pool.push({ itemId: question.id, english, vietnamese: question.vietnamese });

        if (pool.length >= POOL_SIZE) return pool;
      }
    }
  }

  return pool;
}
