"use client";

import { useEffect, useState } from "react";

type MicState = "granted" | "denied" | "prompt" | "unsupported";

/**
 * Reads the browser's actual microphone permission state via the Permissions
 * API where supported. Purely informational — VietVia never requests mic
 * access itself outside the moment a learner presses a speaking-practice
 * button (`useSpeechRecognition`), so this never triggers a prompt.
 */
export default function MicPermissionStatus() {
  const [state, setState] = useState<MicState>("unsupported");

  useEffect(() => {
    let cancelled = false;
    async function check() {
      try {
        if (!navigator.permissions?.query) return;
        const status = await navigator.permissions.query({
          name: "microphone" as PermissionName,
        });
        if (!cancelled) setState(status.state as MicState);
        status.onchange = () => {
          if (!cancelled) setState(status.state as MicState);
        };
      } catch {
        // Permissions API doesn't support "microphone" in this browser (e.g. Safari) — stays "unsupported".
      }
    }
    void check();
    return () => {
      cancelled = true;
    };
  }, []);

  const label =
    state === "granted"
      ? "Đã cho phép"
      : state === "denied"
        ? "Đã từ chối — bật lại trong cài đặt trình duyệt"
        : state === "prompt"
          ? "Sẽ hỏi khi bạn bấm luyện nói"
          : "Trình duyệt sẽ tự hỏi khi cần";

  const dotClass =
    state === "granted" ? "bg-emerald-500" : state === "denied" ? "bg-rose-500" : "bg-orange-400";

  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
      <span className={`h-2 w-2 rounded-full ${dotClass}`} aria-hidden />
      {label}
    </div>
  );
}
