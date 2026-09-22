import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stories, getStoryBySlug } from "@/data/stories";
import StoryPlayer from "@/components/story/StoryPlayer";

interface StoryPageProps {
  params: Promise<{ storySlug: string }>;
}

export function generateStaticParams() {
  return stories.map((story) => ({ storySlug: story.slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { storySlug } = await params;
  const story = getStoryBySlug(storySlug);
  if (!story) return {};
  return {
    title: `${story.title} - VietVia English Practice`,
    description: story.description,
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { storySlug } = await params;
  const story = getStoryBySlug(storySlug);
  if (!story) notFound();

  const index = stories.findIndex((s) => s.slug === storySlug);
  const nextStory = stories[index + 1];

  return <StoryPlayer story={story} nextStory={nextStory} />;
}
