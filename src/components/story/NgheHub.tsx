"use client";

import { useState } from "react";
import Link from "next/link";
import { LessonSummary } from "@/types/content";
import { Story } from "@/types/story";
import LessonList from "@/components/LessonList";
import StoryLibrary from "./StoryLibrary";

interface NgheHubProps {
  lessons: LessonSummary[];
  stories: Story[];
}

type Mode = "phan-xa-nhanh" | "story-dai";

function ModeCard({
  active,
  onClick,
  icon,
  title,
  subtitle,
}: {
  active: boolean;
  onClick: () => void;
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-3xl border-2 p-5 text-left transition ${
        active ? "border-rose-500 bg-rose-100" : "border-slate-200 bg-white hover:bg-well"
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <p className={`mt-2 text-lg font-extrabold ${active ? "text-rose-600" : "text-slate-900"}`}>{title}</p>
      <p className={`mt-0.5 text-sm ${active ? "text-rose-600/80" : "text-slate-500"}`}>{subtitle}</p>
    </button>
  );
}

/**
 * "Nghe & phản xạ" hub — same sidebar item and route as before, now with two
 * modes: the existing short-listening lessons ("Phản xạ nhanh", reusing
 * `LessonList` unchanged) and the new long-form "Story dài" library.
 */
export default function NgheHub({ lessons, stories }: NgheHubProps) {
  const [mode, setMode] = useState<Mode>("phan-xa-nhanh");

  return (
    <div className="min-h-dvh px-5 pb-16 pt-8 lg:px-10 lg:pt-10">
      <div className="mx-auto w-full max-w-sm lg:max-w-[1100px]">
        <Link href="/topics" className="text-sm font-semibold text-rose-400 underline-offset-2 hover:underline">
          ← Tất cả chủ đề
        </Link>
        <h1 className="mt-4 text-2xl font-extrabold text-slate-900 lg:text-[32px]">Nghe &amp; phản xạ</h1>
        <p className="mt-2 text-sm text-slate-600 lg:text-base">
          Nghe tiếng Anh thực tế và tập phản xạ từng bước.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 lg:max-w-lg">
          <ModeCard
            active={mode === "phan-xa-nhanh"}
            onClick={() => setMode("phan-xa-nhanh")}
            icon="⚡"
            title="Phản xạ nhanh"
            subtitle="Câu ngắn • 1–3 phút"
          />
          <ModeCard
            active={mode === "story-dai"}
            onClick={() => setMode("story-dai")}
            icon="📖"
            title="Story dài"
            subtitle="Câu chuyện thực tế • 3–10 phút"
          />
        </div>

        <div className="mt-6">
          {mode === "phan-xa-nhanh" ? (
            lessons.length === 0 ? (
              <div className="rounded-2xl bg-slate-50 p-6 text-center ring-1 ring-slate-100">
                <p className="text-base font-bold text-slate-500">Sắp có bài học</p>
              </div>
            ) : (
              <LessonList lessons={lessons} />
            )
          ) : (
            <>
              <p className="text-sm text-slate-600 lg:text-base">
                Nghe một câu chuyện dài, hiểu ý chính và phản xạ theo từng đoạn.
              </p>
              <div className="mt-5">
                <StoryLibrary stories={stories} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
