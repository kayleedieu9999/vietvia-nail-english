import type { Metadata } from "next";
import Link from "next/link";
import { topics, HOI_THOAI_NAILS_GROUP } from "@/data/topics";
import { getLessonsByTopic, getLessonSummariesByTopic } from "@/data/lessons";
import NailsNewLessons from "@/components/NailsNewLessons";
import TopicListRow from "@/components/TopicListRow";

export const metadata: Metadata = {
  title: "Hội thoại Nails - VietVia English Practice",
  description: "7 chủ đề hội thoại thực tế giữa thợ nails và khách hàng, kèm bài mới lọc theo kỹ năng.",
};

/**
 * Landing hub for the 7 "Hội thoại Nails" sub-topics. Shows 7 topic cards
 * only (never all 350 lesson cards) — click a card to see that topic's own
 * 50-lesson page. Server Component: only lesson *counts* are computed here
 * (via `getLessonsByTopic(...).length`), so the heavy question data never
 * reaches the client — `TopicListRow` itself only needs the lesson slugs
 * for its client-side progress calculation.
 */
export default function HoiThoaiNailsPage() {
  const nailTopics = topics.filter((t) => t.group === HOI_THOAI_NAILS_GROUP);
  // Lessons from a dated content batch (they carry a filter category + publishedAt), newest batch first.
  const batchLessons = nailTopics
    .flatMap((t) => getLessonSummariesByTopic(t.id))
    .filter((l) => l.category && l.publishedAt)
    .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "") || a.id.localeCompare(b.id));

  return (
    <div className="min-h-dvh px-5 pb-16 pt-8 lg:px-10 lg:pt-10">
      <div className="mx-auto w-full max-w-sm lg:max-w-[900px]">
        <Link href="/topics" className="text-sm font-semibold text-rose-400 underline-offset-2 hover:underline">
          ← Tất cả chủ đề
        </Link>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-3xl">💅</span>
          <h1 className="text-2xl font-extrabold text-slate-900 lg:text-[32px]">Hội thoại Nails</h1>
        </div>
        <p className="mt-2 text-sm text-slate-600 lg:text-base">
          7 chủ đề hội thoại thực tế giữa thợ nails và khách hàng.
        </p>

        <div className="mt-6 space-y-2.5 lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0">
          {nailTopics.map((topic) => {
            const lessonSlugs = getLessonsByTopic(topic.id).map((l) => l.slug);
            return <TopicListRow key={topic.id} topic={topic} lessonSlugs={lessonSlugs} />;
          })}
        </div>

        {batchLessons.length > 0 && <NailsNewLessons lessons={batchLessons} />}
      </div>
    </div>
  );
}
