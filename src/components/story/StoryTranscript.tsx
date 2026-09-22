"use client";

import { useState } from "react";

interface StoryTranscriptProps {
  english: string;
  vietnamese: string;
}

/** Audio-first: transcript and meaning stay hidden until asked for, so listening comes before reading. */
export default function StoryTranscript({ english, vietnamese }: StoryTranscriptProps) {
  const [showEnglish, setShowEnglish] = useState(false);
  const [showVietnamese, setShowVietnamese] = useState(false);

  return (
    <div className="mt-4">
      <button type="button" onClick={() => setShowEnglish((v) => !v)} className="text-sm font-semibold text-rose-500">
        {showEnglish ? "Ẩn lời thoại" : "Xem lời thoại"}
      </button>

      {showEnglish && (
        <div className="mt-3 space-y-2">
          <p className="rounded-2xl bg-well px-4 py-3 text-base leading-relaxed text-slate-800">{english}</p>
          <button
            type="button"
            onClick={() => setShowVietnamese((v) => !v)}
            className="text-sm font-semibold text-rose-500"
          >
            {showVietnamese ? "Ẩn nghĩa" : "Xem nghĩa"}
          </button>
          {showVietnamese && (
            <p className="rounded-2xl bg-orange-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
              {vietnamese}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
