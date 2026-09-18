import type { Metadata } from "next";
import { getLessonSummariesByTopic } from "@/data/lessons";
import { allGrammarRules } from "@/data/grammar";
import LoTrinhHub from "@/components/grammar/LoTrinhHub";

export const metadata: Metadata = {
  title: "Lộ trình của bạn - VietVia English Practice",
  description: "Mỗi ngày một chút — luyện những phần cần thiết để nói tiếng Anh tự tin hơn.",
};

export default function LoTrinhPage() {
  const nailLessonSlugs = getLessonSummariesByTopic("nail-general").map((lesson) => lesson.slug);

  return (
    <LoTrinhHub nailLessonSlugs={nailLessonSlugs} totalGrammarRules={allGrammarRules.length} />
  );
}
