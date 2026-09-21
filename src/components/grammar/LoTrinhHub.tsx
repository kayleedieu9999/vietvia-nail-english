"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { useGrammarProgress } from "@/lib/grammarProgress";

interface HubCardProps {
  emoji: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  pct?: number;
  accent: "rose" | "orange";
}

function HubCard({ emoji, title, description, cta, href, pct, accent }: HubCardProps) {
  const ctaClass = accent === "rose" ? "btn-primary" : "btn-secondary";

  return (
    <Link href={href} className="card-surface-interactive block">
      <span className="text-3xl">{emoji}</span>
      <p className="mt-3 text-lg font-extrabold text-slate-900">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
      {pct !== undefined && (
        <div className="mt-3 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-well">
            <div className="h-full rounded-full bg-rose-500" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-xs font-extrabold text-rose-500">{pct}% hoàn thành</span>
        </div>
      )}
      <span className={`${ctaClass} mt-4 w-full`}>{cta}</span>
    </Link>
  );
}

interface LoTrinhHubProps {
  /** Slugs of every lesson in the "nail-general" topic, computed server-side (avoids importing the heavy lesson dataset into this client component). */
  nailLessonSlugs: string[];
  totalGrammarRules: number;
}

export default function LoTrinhHub({ nailLessonSlugs, totalGrammarRules }: LoTrinhHubProps) {
  const lessonProgress = useProgress();
  const grammarProgress = useGrammarProgress();

  const nailCompleted = nailLessonSlugs.filter((slug) => lessonProgress.lessons[slug]).length;
  const nailPct =
    nailLessonSlugs.length > 0 ? Math.round((nailCompleted / nailLessonSlugs.length) * 100) : 0;

  const grammarCompleted = Object.values(grammarProgress).filter((p) => p.completed).length;
  const grammarPct = totalGrammarRules > 0 ? Math.round((grammarCompleted / totalGrammarRules) * 100) : 0;

  return (
    <div className="mx-auto w-full max-w-sm px-5 pb-16 pt-8">
      <h1 className="text-2xl font-extrabold leading-tight text-slate-900">Lộ trình của bạn</h1>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Mỗi ngày một chút — luyện những phần cần thiết để nói tiếng Anh tự tin hơn.
      </p>

      <div className="mt-6 space-y-3">
        <HubCard
          emoji="💬"
          title="Giao tiếp nghề Nails"
          description="Câu tiếng Anh dùng mỗi ngày trong tiệm nails."
          cta="Tiếp tục"
          href="/topic/nail-general"
          pct={nailPct}
          accent="rose"
        />
        <HubCard
          emoji="🧩"
          title="100 Quy tắc ngữ pháp cần thiết"
          description="Ngữ pháp ngắn gọn, dùng ngay khi nói chuyện với khách."
          cta="Xem lộ trình"
          href="/lo-trinh/ngu-phap"
          pct={grammarPct}
          accent="rose"
        />
        <HubCard
          emoji="⚡"
          title="Luyện nhanh hôm nay"
          description="5 câu ngẫu nhiên, khoảng 2 phút, không cần đăng nhập."
          cta="Luyện ngay"
          href="/daily"
          accent="orange"
        />
        <HubCard
          emoji="📊"
          title="Kết quả của bạn"
          description="Xem lại điểm số và những bài đã luyện."
          cta="Xem kết quả"
          href="/results"
          accent="orange"
        />
      </div>
    </div>
  );
}
