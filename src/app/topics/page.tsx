import type { Metadata } from "next";
import Link from "next/link";
import { topics } from "@/data/topics";
import { getLessonsByTopic } from "@/data/lessons";
import TopicCard from "@/components/TopicCard";

export const metadata: Metadata = {
  title: "Chủ đề - VietVia English Practice",
  description: "Tất cả chủ đề luyện tiếng Anh trên VietVia.",
};

export default function TopicsPage() {
  return (
    <div className="min-h-dvh px-5 pb-16 pt-8">
      <div className="mx-auto w-full max-w-sm">
        <Link href="/" className="text-sm font-semibold text-rose-400 underline-offset-2 hover:underline">
          ← Trang chủ
        </Link>

        <h1 className="mt-4 text-2xl font-extrabold text-slate-900">Tất cả chủ đề</h1>
        <p className="mt-2 text-sm text-slate-600">
          Chọn một chủ đề để bắt đầu luyện tập.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              lessonCount={getLessonsByTopic(topic.id).length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
