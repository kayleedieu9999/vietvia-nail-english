import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopicBySlug, topics, HOI_THOAI_NAILS_GROUP } from "@/data/topics";
import { getLessonSummariesByTopic } from "@/data/lessons";
import LessonList from "@/components/LessonList";
import NgheHub from "@/components/story/NgheHub";
import NailSubTopicHub from "@/components/NailSubTopicHub";
import { stories } from "@/data/stories";

/**
 * Two cases get a richer hub instead of the plain lesson list below, bolted
 * on right here by slug/group rather than new routes, so the sidebar keeps
 * its single "Nghe & phản xạ" / "Hội thoại Nails" entries. Every other
 * topic renders exactly as before.
 *  - "listening": adds the "Story dài" long-form mode.
 *  - any topic in the "hoi-thoai-nails" group: adds breadcrumb, progress,
 *    "Tiếp tục", and search (each of the 7 sub-topics gets this, not just one slug).
 */
const LISTENING_TOPIC_SLUG = "listening";

interface TopicPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) return {};
  return {
    title: `${topic.title} - VietVia English Practice`,
    description: topic.description,
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();

  const lessons = getLessonSummariesByTopic(topic.id);

  if (slug === LISTENING_TOPIC_SLUG) {
    return <NgheHub lessons={lessons} stories={stories} />;
  }

  if (topic.group === HOI_THOAI_NAILS_GROUP) {
    return (
      <NailSubTopicHub
        lessons={lessons}
        topicTitle={topic.title}
        topicDescription={topic.description}
        topicEmoji={topic.emoji}
      />
    );
  }

  return (
    <div className="min-h-dvh px-5 pb-16 pt-8">
      <div className="mx-auto w-full max-w-sm">
        <Link href="/topics" className="text-sm font-semibold text-rose-400 underline-offset-2 hover:underline">
          ← Tất cả chủ đề
        </Link>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-3xl">{topic.emoji}</span>
          <h1 className="text-2xl font-extrabold text-slate-900">{topic.title}</h1>
        </div>
        <p className="mt-2 text-sm text-slate-600">{topic.description}</p>

        {lessons.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-center ring-1 ring-slate-100">
            <p className="text-base font-bold text-slate-500">Sắp có bài học</p>
            <p className="mt-2 text-sm text-slate-400">
              Chủ đề này đang được chuẩn bị. Quay lại sau nhé!
            </p>
          </div>
        ) : (
          <LessonList lessons={lessons} />
        )}
      </div>
    </div>
  );
}
