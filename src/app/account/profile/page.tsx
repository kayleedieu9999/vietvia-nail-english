"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { useGrammarProgress } from "@/lib/grammarProgress";
import { useLocalSettings } from "@/lib/localSettings";
import { computeAllTimeSummary } from "@/lib/streak";
import AppStoreButton from "@/components/AppStoreButton";

/**
 * "Hồ sơ" — the site has no login/account system, so this is honestly a
 * local, on-device profile: a nickname + real progress stats derived from
 * localStorage (same data the homepage dashboard already shows), not a
 * fabricated logged-in identity. Editing the name lives in Settings.
 */
export default function ProfilePage() {
  const progress = useProgress();
  const grammarProgress = useGrammarProgress();
  const { displayName, dailyGoalMinutes } = useLocalSettings();

  const summary = computeAllTimeSummary(progress.lessons);
  const rulesPracticed = Object.values(grammarProgress).filter((r) => r.completed).length;

  return (
    <div className="min-h-dvh px-5 pb-20 pt-6 lg:px-10 lg:pb-24 lg:pt-10">
      <div className="mx-auto w-full max-w-sm lg:max-w-[900px]">
        <h1 className="text-[26px] font-extrabold text-slate-900 lg:text-[34px]">Hồ sơ</h1>

        {/* Profile card */}
        <div className="card-surface mt-5 flex flex-col items-center gap-4 text-center lg:flex-row lg:items-center lg:gap-6 lg:text-left lg:p-8">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-rose-100 text-4xl">
            🙋‍♀️
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xl font-extrabold text-slate-900">{displayName}</p>
            <p className="mt-1 text-sm text-slate-500">
              Luyện tập không cần tài khoản — dữ liệu được lưu trên thiết bị này.
            </p>
          </div>
          <Link href="/account/settings" className="btn-secondary w-full shrink-0 lg:w-fit">
            Chỉnh sửa hồ sơ
          </Link>
        </div>

        {/* Progress summary */}
        <section className="mt-8">
          <h2 className="text-lg font-extrabold text-slate-900 lg:text-2xl">Tổng quan luyện tập</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            <StatCard icon="🔥" value={summary.streakDays} label="ngày liên tiếp" />
            <StatCard icon="📚" value={summary.lessonsCompleted} label="bài đã luyện" />
            <StatCard icon="⏱" value={summary.totalMinutes} label="phút đã luyện" />
            <StatCard icon="🗣️" value={rulesPracticed} label="quy tắc đã nói" />
          </div>
        </section>

        {/* Membership */}
        <section className="mt-8">
          <h2 className="text-lg font-extrabold text-slate-900 lg:text-2xl">Gói học</h2>
          <div className="card-surface mt-4 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center lg:p-7">
            <div>
              <p className="flex items-center gap-2 text-base font-extrabold text-slate-900">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-emerald-700">
                  Miễn phí
                </span>
                Gói hiện tại
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Toàn bộ bài luyện trên VietVia hiện miễn phí, không cần đăng nhập. Gói nâng cao đang
                được phát triển.
              </p>
            </div>
            <AppStoreButton variant="text" />
          </div>
        </section>

        {/* Account details */}
        <section className="mt-8">
          <h2 className="text-lg font-extrabold text-slate-900 lg:text-2xl">Thông tin thiết bị</h2>
          <div className="card-surface mt-4 space-y-3 lg:p-7">
            <Row label="Mục tiêu mỗi ngày" value={`${dailyGoalMinutes} phút`} />
            <Row label="Lưu trữ dữ liệu" value="Cục bộ trên thiết bị này (không đồng bộ máy chủ)" />
            <Link href="/account/settings" className="inline-block text-sm font-semibold text-rose-500">
              Quản lý trong Cài đặt →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: number; label: string }) {
  return (
    <div className="card-surface flex flex-col items-center gap-1.5 text-center lg:items-start lg:text-left">
      <span className="text-2xl">{icon}</span>
      <p className="text-xl font-extrabold text-slate-900">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}
