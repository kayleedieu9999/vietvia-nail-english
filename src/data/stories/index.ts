import { Story } from "@/types/story";
import { motNgayDongKhachStory } from "./mot-ngay-dong-khach";

/** All "Story dài" stories. Add more here as they're written — one file per story, same pattern as `data/grammar`. */
export const stories: Story[] = [motNgayDongKhachStory];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}
