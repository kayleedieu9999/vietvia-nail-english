import Link from "next/link";
import { topics } from "@/data/topics";
import { getAllLessonSummaries, getLessonSummariesByTopic } from "@/data/lessons";
import { getReviewSentencePool } from "@/data/grammar";
import TopicCard from "@/components/TopicCard";
import ContinueLearningCard from "@/components/ContinueLearningCard";
import HomeHero from "@/components/HomeHero";
import AppStoreButton from "@/components/AppStoreButton";
import GreetingHero from "@/components/GreetingHero";
import StreakCard from "@/components/StreakCard";
import DailyGoalCard from "@/components/DailyGoalCard";
import QuoteCard from "@/components/QuoteCard";
import TodayLessonCard from "@/components/TodayLessonCard";
import WeeklyProgressCard from "@/components/WeeklyProgressCard";
import ReviewCard from "@/components/ReviewCard";
import PromoBanner from "@/components/PromoBanner";

/** Practice-category slugs shown on the homepage grid, in the order design calls for. */
const CATEGORY_SLUGS = [
  "small-talk",
  "customer-requests",
  "pedicure",
  "nail-color",
  "unhappy-customer",
  "dich-vu-tay",
];

export default function HomePage() {
  const allSummaries = getAllLessonSummaries();
  const reviewSentencePool = getReviewSentencePool();
  const categoryTopics = CATEGORY_SLUGS.map((slug) => topics.find((t) => t.slug === slug)).filter(
    (t): t is (typeof topics)[number] => Boolean(t),
  );

  return (
    <div className="min-h-dvh px-5 pb-16 pt-6 lg:px-10 lg:pb-24 lg:pt-8">
      {/* Below lg the page stays a single centered column (max-w-sm, the
          original mobile-app-width layout); at lg+ it opens up into a real
          desktop dashboard capped at 1180px so 1440px screens don't leave a
          narrow column surrounded by empty space. */}
      <div className="mx-auto w-full max-w-sm lg:max-w-[1180px]">
        <header className="flex items-center justify-between lg:hidden">
          <span className="text-sm font-extrabold tracking-wide text-rose-600">VietVia</span>
          <AppStoreButton variant="pill" />
        </header>

        <div className="mt-6 lg:mt-0">
          <GreetingHero />
        </div>

        <section className="mt-5 grid grid-cols-1 gap-3 lg:mt-8 lg:grid-cols-3 lg:gap-5">
          <StreakCard />
          <DailyGoalCard />
          <QuoteCard />
        </section>

        <section className="mt-4 grid grid-cols-1 gap-4 lg:mt-6 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <TodayLessonCard summaries={allSummaries} />
          </div>
          <div className="lg:col-span-3">
            <ContinueLearningCard summaries={allSummaries} />
          </div>
          <div className="lg:col-span-4">
            <WeeklyProgressCard />
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-3 flex items-center justify-between lg:mb-4">
              <h2 className="text-lg font-extrabold text-slate-900 lg:text-2xl">
                Bạn muốn luyện gì hôm nay?
              </h2>
              <Link href="/topics" className="text-sm font-semibold text-rose-500 lg:text-base">
                Xem tất cả bài luyện
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
              {categoryTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  lessonSlugs={getLessonSummariesByTopic(topic.id).map((l) => l.slug)}
                />
              ))}
            </div>

            <div className="mt-6">
              <PromoBanner />
            </div>
          </div>

          <div className="lg:col-span-1">
            <ReviewCard reviewSentencePool={reviewSentencePool} />
          </div>
        </section>

        <div className="mx-auto mt-8 w-full lg:mt-10 lg:max-w-2xl">
          <section className="card-surface">
            <Link href="/daily" className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-xl">
                ⚡
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-base font-bold text-slate-900">5 câu ngẫu nhiên, 2 phút</p>
                <p className="mt-0.5 text-sm text-slate-500">
                  Không cần đăng nhập — bấm là luyện được ngay.
                </p>
              </div>
              <span className="shrink-0 rounded-xl bg-rose-500 px-4 py-2 text-sm font-bold text-white">
                Luyện ngay
              </span>
            </Link>
          </section>

          <div className="lg:hidden">
            <HomeHero />
          </div>

          <section className="card-surface mt-8 text-center">
            <h2 className="text-lg font-extrabold text-slate-900">Luyện thêm với ứng dụng VietVia</h2>
            <p className="mt-2 text-sm text-slate-600">
              Mang theo các bài luyện tiếng Anh bên mình và luyện bất cứ khi nào có thời gian.
            </p>
            <div className="mt-4 flex justify-center">
              <AppStoreButton variant="badge" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
