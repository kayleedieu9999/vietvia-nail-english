import { Story } from "@/types/story";
import { motNgayDongKhachStory } from "./mot-ngay-dong-khach";
import { motChuyenBayStory } from "./mot-chuyen-bay";

/** All "Story dài" stories. Add more here as they're written — one file per story, same pattern as `data/grammar`. */
export const stories: Story[] = [motNgayDongKhachStory, motChuyenBayStory];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}
