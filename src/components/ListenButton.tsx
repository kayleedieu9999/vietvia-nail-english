"use client";

import { speakEnglish } from "@/lib/tts";

interface ListenButtonProps {
  text: string;
  label?: string;
}

/**
 * Always rendered (no feature-detection state, to avoid an SSR/CSR mismatch);
 * speakEnglish() itself silently no-ops on a browser without speechSynthesis.
 */
export default function ListenButton({ text, label = "Nghe" }: ListenButtonProps) {
  return (
    <button
      type="button"
      onClick={() => speakEnglish(text)}
      aria-label={`${label}: ${text}`}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-600 transition active:scale-95 active:bg-rose-200"
    >
      <span aria-hidden>🔊</span>
      {label}
    </button>
  );
}
