"use client";

import { useState } from "react";
import {
  setDailyGoalMinutes,
  setDisplayName,
  setTextScale,
  useLocalSettings,
  type TextScale,
} from "@/lib/localSettings";
import { resetProgress } from "@/lib/progress";
import { resetGrammarProgress } from "@/lib/grammarProgress";
import { useProgress } from "@/lib/progress";
import AppStoreButton from "@/components/AppStoreButton";
import MicPermissionStatus from "@/components/account/MicPermissionStatus";

const GOAL_STEPS = [5, 10, 15, 20, 30];
const TEXT_SCALE_OPTIONS: { value: TextScale; label: string }[] = [
  { value: "sm", label: "Nhỏ" },
  { value: "md", label: "Vừa" },
  { value: "lg", label: "Lớn" },
];

function SettingsGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 first:mt-0">
      <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-400 lg:text-base">
        {title}
      </h2>
      <div className="card-surface divide-y divide-slate-100 lg:p-2">{children}</div>
    </section>
  );
}

function SettingsRow({
  label,
  description,
  children,
}: {
  label: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 px-1 py-4 first:pt-2 last:pb-2 lg:flex-row lg:items-center lg:justify-between lg:px-5 lg:py-4">
      <div className="min-w-0">
        <p className="text-sm font-bold text-slate-900 lg:text-base">{label}</p>
        {description && <p className="mt-0.5 text-xs text-slate-500 lg:text-sm">{description}</p>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

export default function SettingsPage() {
  const { displayName, dailyGoalMinutes, textScale } = useLocalSettings();
  const [nameDraft, setNameDraft] = useState(displayName);
  const [nameSaved, setNameSaved] = useState(false);
  const [resetConfirm, setResetConfirm] = useState(false);
  const [resetDone, setResetDone] = useState(false);
  const progress = useProgress();
  const lessonsTracked = Object.keys(progress.lessons).length;

  function saveName() {
    setDisplayName(nameDraft);
    setNameSaved(true);
    setTimeout(() => setNameSaved(false), 2000);
  }

  function handleResetProgress() {
    if (!resetConfirm) {
      setResetConfirm(true);
      return;
    }
    resetProgress();
    resetGrammarProgress();
    setResetConfirm(false);
    setResetDone(true);
    setTimeout(() => setResetDone(false), 3000);
  }

  return (
    <div className="min-h-dvh px-5 pb-20 pt-6 lg:px-10 lg:pb-24 lg:pt-10">
      <div className="mx-auto w-full max-w-sm lg:max-w-[760px]">
        <h1 className="text-[26px] font-extrabold text-slate-900 lg:text-[34px]">Cài đặt</h1>
        <p className="mt-1 text-sm text-slate-500 lg:text-base">
          Tùy chỉnh trải nghiệm luyện tập của bạn trên thiết bị này.
        </p>

        <SettingsGroup title="Tài khoản">
          <SettingsRow label="Họ tên hiển thị">
            <div className="flex items-center gap-2">
              <input
                value={nameDraft}
                onChange={(e) => setNameDraft(e.target.value)}
                maxLength={40}
                className="w-40 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-rose-400 lg:w-56"
              />
              <button type="button" onClick={saveName} className="btn-secondary min-h-[40px] px-4 text-sm">
                {nameSaved ? "Đã lưu ✓" : "Lưu"}
              </button>
            </div>
          </SettingsRow>
          <SettingsRow
            label="Email & mật khẩu"
            description="VietVia trên web không cần đăng nhập. Dùng ứng dụng VietVia để tạo tài khoản, đổi mật khẩu và đồng bộ tiến độ."
          >
            <AppStoreButton variant="text" />
          </SettingsRow>
          <SettingsRow
            label="Xóa dữ liệu luyện tập"
            description={
              resetDone
                ? "Đã xóa toàn bộ dữ liệu trên thiết bị này."
                : `${lessonsTracked} bài đã lưu tiến độ trên thiết bị này. Không thể hoàn tác.`
            }
          >
            <button
              type="button"
              onClick={handleResetProgress}
              className={`min-h-[40px] rounded-2xl px-4 text-sm font-semibold transition ${
                resetConfirm
                  ? "bg-rose-600 text-white"
                  : "border border-rose-200 bg-rose-50 text-rose-600"
              }`}
            >
              {resetConfirm ? "Bấm lần nữa để xác nhận" : "Xóa dữ liệu"}
            </button>
          </SettingsRow>
        </SettingsGroup>

        <SettingsGroup title="Học tập">
          <SettingsRow label="Mục tiêu mỗi ngày" description="Số phút luyện tập bạn muốn đạt mỗi ngày.">
            <div className="flex flex-wrap gap-2">
              {GOAL_STEPS.map((minutes) => (
                <button
                  key={minutes}
                  type="button"
                  onClick={() => setDailyGoalMinutes(minutes)}
                  className={`rounded-full px-3.5 py-2 text-sm font-bold transition ${
                    dailyGoalMinutes === minutes
                      ? "bg-rose-500 text-white"
                      : "bg-well text-slate-600 hover:bg-rose-100"
                  }`}
                >
                  {minutes}p
                </button>
              ))}
            </div>
          </SettingsRow>
        </SettingsGroup>

        <SettingsGroup title="Giao diện">
          <SettingsRow label="Chủ đề" description="VietVia hiện dùng giao diện sáng, ấm áp.">
            <span className="rounded-full bg-rose-100 px-3.5 py-1.5 text-sm font-bold text-rose-600">
              ☀️ Sáng
            </span>
          </SettingsRow>
          <SettingsRow label="Cỡ chữ" description="Áp dụng cho toàn bộ trang.">
            <div className="flex gap-2">
              {TEXT_SCALE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setTextScale(opt.value)}
                  className={`rounded-full px-3.5 py-2 text-sm font-bold transition ${
                    textScale === opt.value
                      ? "bg-rose-500 text-white"
                      : "bg-well text-slate-600 hover:bg-rose-100"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </SettingsRow>
        </SettingsGroup>

        <SettingsGroup title="Âm thanh & quyền truy cập">
          <SettingsRow
            label="Quyền microphone"
            description="Dùng cho phần luyện nói (ghi âm và so khớp câu nói)."
          >
            <MicPermissionStatus />
          </SettingsRow>
        </SettingsGroup>

        <SettingsGroup title="Hỗ trợ">
          <SettingsRow
            label="Cần trợ giúp?"
            description="Liên hệ đội ngũ VietVia hoặc để lại đánh giá qua ứng dụng trên App Store."
          >
            <AppStoreButton variant="text" />
          </SettingsRow>
        </SettingsGroup>
      </div>
    </div>
  );
}
