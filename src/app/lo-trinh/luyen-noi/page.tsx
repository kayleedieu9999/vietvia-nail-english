import type { Metadata } from "next";
import Link from "next/link";
import RoadmapCard from "@/components/roadmap/RoadmapCard";
import { RoadmapEntry } from "@/types/roadmap";

export const metadata: Metadata = {
  title: "Luyện nói - VietVia English Practice",
  description: "Nói theo tình huống thật và ôn lại câu cần luyện.",
};

/**
 * "Luyện nói" is a lightweight real landing page rather than a fabricated
 * hub: only "Câu cần ôn lại" is real content today (the existing grammar
 * review queue) — the other 4 subpaths the user asked for don't have a
 * standalone browsable feature yet (speaking practice is embedded inside
 * grammar/collections/story flows), so they render as honest "Sắp có" cards
 * instead of fake ones.
 */
const ENTRIES: RoadmapEntry[] = [
  {
    key: "cau-can-on-lai",
    title: "Câu cần ôn lại",
    description: "Ôn lại những câu bạn từng trả lời sai, luyện nói lại cho đúng.",
    emoji: "🔁",
    href: "/lo-trinh/ngu-phap",
    contentRef: { kind: "placeholder" },
  },
  {
    key: "noi-theo-tinh-huong",
    title: "Nói theo tình huống",
    description: "Nghe một tình huống thật và luyện trả lời bằng giọng nói.",
    emoji: "🎭",
    href: "#",
    contentRef: { kind: "placeholder" },
  },
  {
    key: "tra-loi-khach",
    title: "Trả lời khách",
    description: "Luyện phản xạ trả lời khách trong các tình huống nails thường gặp.",
    emoji: "💬",
    href: "#",
    contentRef: { kind: "placeholder" },
  },
  {
    key: "roleplay-nails",
    title: "Roleplay Nails",
    description: "Đóng vai thợ nails, luyện hội thoại trọn vẹn với khách.",
    emoji: "💅",
    href: "#",
    contentRef: { kind: "placeholder" },
  },
  {
    key: "roleplay-doi-song",
    title: "Roleplay đời sống",
    description: "Đóng vai các tình huống đời sống ở Mỹ ngoài tiệm nails.",
    emoji: "🗽",
    href: "#",
    contentRef: { kind: "placeholder" },
  },
];

export default function LuyenNoiPage() {
  return (
    <div className="min-h-dvh px-5 pb-16 pt-8 lg:px-10 lg:pt-10">
      <div className="mx-auto w-full max-w-sm lg:max-w-[900px]">
        <p className="text-sm font-semibold text-rose-400">
          <Link href="/lo-trinh" className="underline-offset-2 hover:underline">
            Lộ trình
          </Link>{" "}
          <span className="text-slate-300">›</span> Luyện nói
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-3xl">🎙️</span>
          <h1 className="text-2xl font-extrabold text-slate-900 lg:text-[32px]">Luyện nói tình huống</h1>
        </div>
        <p className="mt-2 text-sm text-slate-600 lg:text-base">
          Nói theo tình huống thật và ôn lại câu cần luyện.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ENTRIES.map((entry) => (
            <RoadmapCard key={entry.key} entry={entry} progress={null} />
          ))}
        </div>
      </div>
    </div>
  );
}
