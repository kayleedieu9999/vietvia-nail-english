import Link from "next/link";
import { topics } from "@/data/topics";
import { allLessons, getLessonsByTopic } from "@/data/lessons";
import { getTopicBySlug } from "@/data/topics";
import TopicCard from "@/components/TopicCard";
import ContinueLearningCard from "@/components/ContinueLearningCard";
import HomeHero from "@/components/HomeHero";

const RECENT_LESSON_COUNT = 5;
const NAILS_FEATURED_COUNT = 6;
const NAILS_TOPIC_ID = "nail-general";

export default function HomePage() {
  const recentLessons = allLessons.slice(0, RECENT_LESSON_COUNT);
  const nailsLessons = getLessonsByTopic(NAILS_TOPIC_ID);
  const nailsFeatured = nailsLessons.slice(0, NAILS_FEATURED_COUNT);

  return (
    <div className="min-h-dvh px-5 pb-16 pt-8">
      <header className="text-center">
        <p className="text-lg font-extrabold tracking-wide text-rose-500">
          VietVia English Practice
        </p>
      </header>

      <HomeHero />

      <section className="mx-auto mt-6 w-full max-w-sm text-center">
        <h1 className="text-3xl font-extrabold leading-tight text-slate-900">
          Mỗi ngày một chút
          <br />
          Tiếng Anh sẽ dễ hơn.
        </h1>

        <Link
          href="/daily"
          className="mt-6 block w-full rounded-2xl bg-rose-500 px-6 py-5 text-lg font-bold text-white shadow-sm shadow-rose-300 transition active:scale-[0.98] active:bg-rose-600"
        >
          LUYỆN 5 CÂU HÔM NAY
        </Link>
      </section>

      <ContinueLearningCard />

      <section className="mx-auto mt-10 w-full max-w-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">
            Chủ đề
          </h2>
          <Link href="/topics" className="text-sm font-semibold text-rose-500">
            Xem tất cả
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {topics.slice(0, 6).map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              lessonCount={getLessonsByTopic(topic.id).length}
            />
          ))}
        </div>
      </section>

      {nailsFeatured.length > 0 && (
        <section className="mx-auto mt-10 w-full max-w-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">
              Tiếng Anh nghề Nails
            </h2>
            <Link href={`/topic/${NAILS_TOPIC_ID}`} className="text-sm font-semibold text-rose-500">
              Xem tất cả {nailsLessons.length} bài
            </Link>
          </div>
          <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2">
            {nailsFeatured.map((lesson, index) => (
              <Link
                key={lesson.id}
                href={`/lesson/${lesson.slug}`}
                className="flex w-48 shrink-0 flex-col rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100 transition active:scale-[0.98]"
              >
                <span className="text-2xl">💅</span>
                <p className="mt-2 text-sm font-bold leading-snug text-slate-900">
                  {lesson.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Bài {index + 1} · {lesson.questions.length} câu
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto mt-10 w-full max-w-sm">
        <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-500">
          Bài mới
        </h2>
        <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2">
          {recentLessons.map((lesson) => {
            const topic = getTopicBySlug(lesson.topicId);
            return (
              <Link
                key={lesson.id}
                href={`/lesson/${lesson.slug}`}
                className="flex w-48 shrink-0 flex-col rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100 transition active:scale-[0.98]"
              >
                <span className="text-2xl">{topic?.emoji ?? "📚"}</span>
                <p className="mt-2 text-sm font-bold leading-snug text-slate-900">
                  {lesson.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {lesson.questions.length} câu · {topic?.title}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-sm">
        <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-500">
          Luyện nhanh hôm nay
        </h2>
        <Link
          href="/daily"
          className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-orange-100 transition active:scale-[0.98]"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xl">
            ⚡
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-base font-bold text-slate-900">5 câu ngẫu nhiên, 2 phút</p>
            <p className="mt-0.5 text-sm text-slate-500">
              Không cần đăng nhập — bấm là luyện được ngay.
            </p>
          </div>
          <span className="shrink-0 rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white">
            Luyện ngay
          </span>
        </Link>
      </section>
    </div>
  );
}
