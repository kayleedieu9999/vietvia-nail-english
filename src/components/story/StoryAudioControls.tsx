"use client";

import { speakEnglish, SLOW_SPEECH_RATE } from "@/lib/tts";

interface StoryAudioControlsProps {
  text: string;
}

/** ▶ Nghe đoạn này / 🐢 Nghe chậm / ↻ Nghe lại — same natural-voice TTS as the rest of the site, just a slower rate, never a robotic one. */
export default function StoryAudioControls({ text }: StoryAudioControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => speakEnglish(text)}
        className="inline-flex items-center gap-1.5 rounded-full bg-rose-500 px-4 py-2.5 text-sm font-bold text-white transition active:scale-95"
      >
        <span aria-hidden>▶</span> Nghe đoạn này
      </button>
      <button
        type="button"
        onClick={() => speakEnglish(text, SLOW_SPEECH_RATE)}
        className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-4 py-2.5 text-sm font-bold text-rose-600 transition active:scale-95"
      >
        <span aria-hidden>🐢</span> Nghe chậm
      </button>
      <button
        type="button"
        onClick={() => speakEnglish(text)}
        className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-4 py-2.5 text-sm font-bold text-rose-600 transition active:scale-95"
      >
        <span aria-hidden>↻</span> Nghe lại
      </button>
    </div>
  );
}
