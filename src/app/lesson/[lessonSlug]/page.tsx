import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLessonBySlug, allLessons, getLessonsByTopic } from "@/data/lessons";
import { getTopicBySlug } from "@/data/topics";
import LessonPlayer from "@/components/lesson/LessonPlayer";

interface LessonPageProps {
  params: Promise<{ lessonSlug: string }>;
}

export function generateStaticParams() {
  return allLessons.map((lesson) => ({ lessonSlug: lesson.slug }));
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { lessonSlug } = await params;
  const lesson = getLessonBySlug(lessonSlug);
  if (!lesson) return {};
  return {
    title: `${lesson.title} - VietVia English Practice`,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonSlug } = await params;
  const lesson = getLessonBySlug(lessonSlug);
  if (!lesson) notFound();

  const topic = getTopicBySlug(lesson.topicId);
  const siblingLessons = getLessonsByTopic(lesson.topicId);
  const lessonIndex = siblingLessons.findIndex((item) => item.slug === lesson.slug);
  const nextLesson = siblingLessons[lessonIndex + 1];

  return (
    <LessonPlayer
      source={{ type: "lesson", lesson }}
      title={lesson.title}
      topicLabel={topic ? `Chủ đề: ${topic.title}` : undefined}
      description={`${lesson.description} — khoảng ${Math.max(1, Math.round(lesson.questions.length * 0.4))} phút`}
      checklist={["Không cần đăng nhập", `${lesson.questions.length} câu hỏi`, "Có giải thích tiếng Việt"]}
      coverImage={lesson.coverImage}
      badgeEmoji={topic?.emoji}
      progressKey={lesson.slug}
      otherLessonsHref={topic ? `/topic/${topic.slug}` : "/topics"}
      otherLessonsLabel="CHỌN BÀI KHÁC"
      nextLessonHref={nextLesson ? `/lesson/${nextLesson.slug}` : undefined}
    />
  );
}
