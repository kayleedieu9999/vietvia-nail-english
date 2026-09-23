"use client";

import { speakEnglish, SLOW_SPEECH_RATE } from "@/lib/tts";

interface PronunciationAudioControlsProps {
  text: string;
}

/** Nghe / Nghe chậm — thin wrapper over the same speakEnglish()/SLOW_SPEECH_RATE every other speaking-practice surface already uses. */
export default function PronunciationAudioControls({ text }: PronunciationAudioControlsProps) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => speakEnglish(text)}
        className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3.5 py-2 text-xs font-bold text-rose-600 transition active:scale-95"
      >
        <span aria-hidden>🔊</span> Nghe
      </button>
      <button
        type="button"
        onClick={() => speakEnglish(text, SLOW_SPEECH_RATE)}
        className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3.5 py-2 text-xs font-bold text-rose-600 transition active:scale-95"
      >
        <span aria-hidden>🐢</span> Nghe chậm
      </button>
    </div>
  );
}
