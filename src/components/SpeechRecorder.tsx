"use client";

import { useState } from "react";
import { getSpeechErrorMessage } from "@/lib/useSpeechRecognition";

interface SpeechRecorderProps {
  state: "idle" | "listening" | "done" | "error";
  errorCode: string | null;
  onStart: () => void;
  label?: string;
}

/**
 * The mic button + its own READY / RECORDING / MICROPHONE-ERROR visual
 * states. Recognition itself is owned by the caller (one `useSpeechRecognition()`
 * per practice item, same convention as `GrammarRuleView.tsx`'s two
 * independent instances) so the parent can read `transcript` for feedback —
 * this component only renders the button and interprets `state`/`errorCode`.
 * Does a proactive `navigator.permissions.query` check before starting
 * (same API/copy convention as `MicPermissionStatus.tsx`) so a denied
 * learner sees a clear message instead of a silently-failing button.
 */
export default function SpeechRecorder({ state, errorCode, onStart, label = "NÓI CÂU NÀY" }: SpeechRecorderProps) {
  const [permissionDenied, setPermissionDenied] = useState(false);

  async function handleClick() {
    setPermissionDenied(false);
    try {
      if (navigator.permissions?.query) {
        const status = await navigator.permissions.query({ name: "microphone" as PermissionName });
        if (status.state === "denied") {
          setPermissionDenied(true);
          return;
        }
      }
    } catch {
      // Permissions API doesn't support "microphone" here (e.g. Safari) — fall through and let the browser's own prompt handle it.
    }
    onStart();
  }

  const showPermissionError = permissionDenied || errorCode === "not-allowed";
  const showUnsupportedError = errorCode === "not-supported";
  const showNoSpeechError = errorCode === "no-speech";
  const showGenericError = state === "error" && !showPermissionError && !showUnsupportedError && !showNoSpeechError;

  if (showPermissionError) {
    return (
      <div className="rounded-2xl bg-rose-50 px-4 py-3.5 text-center">
        <p className="text-sm font-bold text-rose-600">VietVia cần quyền microphone để nghe bạn nói.</p>
        <p className="mt-1 text-xs text-slate-500">
          Trình duyệt đã chặn quyền này — vào cài đặt trình duyệt để bật lại, sau đó thử lại.
        </p>
        <button type="button" onClick={handleClick} className="btn-secondary mt-3">
          Bật microphone
        </button>
      </div>
    );
  }

  if (showUnsupportedError) {
    return (
      <p className="text-center text-sm font-semibold text-slate-500">{getSpeechErrorMessage("not-supported")}</p>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={state === "listening"}
        aria-label={label}
        className={`relative flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full text-3xl text-white transition active:scale-95 ${
          state === "listening" ? "bg-rose-600" : "bg-rose-500"
        }`}
      >
        {state === "listening" && (
          <span aria-hidden className="absolute inset-0 -m-2 animate-ping rounded-full bg-rose-400/60" />
        )}
        <span aria-hidden className="relative">
          🎤
        </span>
      </button>
      <p className="text-xs font-bold text-slate-500">
        {state === "listening" ? "Đang nghe bạn nói…" : label}
      </p>
      {showNoSpeechError && (
        <p className="text-xs font-semibold text-slate-500">{getSpeechErrorMessage("no-speech")}</p>
      )}
      {showGenericError && <p className="text-xs font-semibold text-slate-500">{getSpeechErrorMessage(errorCode)}</p>}
    </div>
  );
}
