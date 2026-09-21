"use client";

import { useRouter } from "next/navigation";

/**
 * Desktop-only top bar (search + notification + profile slot) above the
 * main dashboard content. The profile block is intentionally generic — the
 * site has no login/account system, so there's no real user to name or
 * photograph here, just a friendly "Xin chào" slot in the same visual
 * position a logged-in avatar would occupy.
 */
export default function TopBar() {
  const router = useRouter();

  return (
    <div className="hidden items-center gap-4 lg:flex">
      <form
        className="flex-1"
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.currentTarget.elements.namedItem("q") as HTMLInputElement;
          const q = input.value.trim();
          if (q) router.push(`/topics?q=${encodeURIComponent(q)}`);
        }}
      >
        <div className="input-search flex items-center gap-2.5">
          <span aria-hidden className="text-slate-400">
            🔍
          </span>
          <input
            name="q"
            type="text"
            placeholder="Tìm câu, chủ đề hoặc bài học..."
            className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </form>

      <button
        type="button"
        aria-label="Thông báo"
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-500 transition hover:text-rose-500"
      >
        🔔
        <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-500" />
      </button>

      <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-base">
          🙋‍♀️
        </div>
        <div className="leading-tight">
          <p className="text-xs text-slate-400">Xin chào</p>
          <p className="text-sm font-bold text-slate-900">Học viên VietVia</p>
        </div>
      </div>
    </div>
  );
}
