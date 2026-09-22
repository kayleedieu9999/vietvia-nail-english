import type { Metadata } from "next";
import { getLessonsByTopic } from "@/data/lessons";
import { allGrammarRules } from "@/data/grammar";
import { stories } from "@/data/stories";
import { allRoadmapEntries } from "@/data/roadmap";
import { RoadmapContext } from "@/lib/roadmapProgress";
import RoadmapPageClient from "@/components/roadmap/RoadmapPageClient";

export const metadata: Metadata = {
  title: "Lộ trình của bạn - VietVia English Practice",
  description: "Chọn đúng phần bạn cần và luyện từng chút mỗi ngày.",
};

export default function LoTrinhPage() {
  const topicSlugsByKey: Record<string, string[]> = {};
  for (const entry of allRoadmapEntries) {
    if (entry.contentRef.kind === "topics") {
      topicSlugsByKey[entry.key] = entry.contentRef.topicIds.flatMap((id) =>
        getLessonsByTopic(id).map((lesson) => lesson.slug),
      );
    }
  }

  const context: RoadmapContext = {
    topicSlugsByKey,
    totalGrammarRules: allGrammarRules.length,
    storyIds: stories.map((s) => s.id),
  };

  return <RoadmapPageClient context={context} />;
}
