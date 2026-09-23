import { Lesson } from "@/types/content";
import { getTopicBySlug } from "@/data/topics";
import { HOI_THOAI_NAILS_GROUP } from "@/data/topics";

/**
 * Central lesson-cover image resolver. Before this existed, any lesson
 * without its own `coverImage` fell all the way through to the hand-drawn
 * `IllustratedSalonScene` placeholder in `SalonScene.tsx` — fine for the
 * ~407 Hội thoại Nails lessons (which all have real per-lesson photos), but
 * wrong for every other topic (DMV, listening, pronunciation, etc.), which
 * had literally no cover image of their own and so all shared that one
 * nail-salon-themed cartoon regardless of subject.
 *
 * Resolution order (first match wins):
 *   1. `lesson.coverImage` — a specific photo for that exact lesson.
 *   2. `topicCoverMap[lesson.topicId]` — a topic-appropriate default.
 *   3. `sectionCoverMap[topic.group]` — a broader family fallback, for a
 *      topic that belongs to a group (e.g. any future Hội thoại Nails
 *      sub-topic) but hasn't been given its own entry yet.
 *   4. `GENERIC_FALLBACK` — a single realistic (never cartoon) default,
 *      only reached if a topic has neither a specific nor a family image.
 *      `SalonScene`'s own cartoon illustration remains as a purely
 *      defensive last resort if an image URL 404s at runtime — this
 *      resolver itself never returns `undefined`.
 */

export const topicCoverMap: Record<string, string> = {
  // Hội thoại Nails — safety net only; every lesson in these topics already
  // carries its own `coverImage`, so this tier is never actually reached
  // for them today. Kept so a future nails lesson added without a photo
  // still gets something topic-appropriate instead of falling to tier 4.
  "nails-bat-dau": "/images/hero-manicure.png",
  "nails-dich-vu": "/images/topic-customer-requests.png",
  "nails-mau-design": "/images/topic-nail-color.png",
  "nails-xu-ly-tinh-huong": "/images/topic-unhappy-customer.png",
  "nails-pedicure": "/images/topic-pedicure.png",
  "nails-small-talk": "/images/topic-small-talk.png",
  "nails-thanh-toan": "/images/hero-manicure.png",
  "food-life": "/images/lesson-food-talk.png",

  // The 350 lessons across these 7 topics had zero coverImage of their own
  // before this fix — this is the map that actually closes the bug.
  "daily-english": "/images/roadmap/doi-song-o-my.jpg",
  airport: "/images/roadmap/san-bay.jpg",
  dmv: "/images/roadmap/lai-xe.jpg",
  emergency: "/images/roadmap/911-canh-sat.jpg",
  citizenship: "/images/covers/citizenship/citizenship-office.jpg",
  listening: "/images/covers/listening/listening-headphones.jpg",
  pronunciation: "/images/covers/pronunciation/pronunciation-mic.jpg",
};

/** Broader family fallback, keyed by `Topic.group`. */
const sectionCoverMap: Record<string, string> = {
  [HOI_THOAI_NAILS_GROUP]: "/images/hero-manicure.png",
};

/** Single realistic (never cartoon) default — only reached if a topic has neither a specific nor a family image. */
const GENERIC_FALLBACK = "/images/covers/foundation/foundation-study.jpg";

export function getLessonCoverImage(lesson: Lesson): string {
  if (lesson.coverImage) return lesson.coverImage;

  const topicImage = topicCoverMap[lesson.topicId];
  if (topicImage) return topicImage;

  const topic = getTopicBySlug(lesson.topicId);
  if (topic?.group && sectionCoverMap[topic.group]) return sectionCoverMap[topic.group];

  return GENERIC_FALLBACK;
}
