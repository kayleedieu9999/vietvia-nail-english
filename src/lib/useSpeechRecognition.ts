"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Thin wrapper around the browser's Web Speech API for the "🎤 Nói lại" /
 * SPEAKING PRACTICE steps. Chrome/Edge/Safari-on-iOS support this; Firefox
 * does not — callers should feature-detect with `isSpeechRecognitionSupported()`
 * and hide the mic button rather than show a broken one.
 *
 * There is no server-side STT here (unlike the Expo app, which has its own
 * speech service) — this is a website with no backend for this feature, so
 * on-device Web Speech API is the only option, and comparison against the
 * target sentence is a simple case/punctuation-insensitive match.
 *
 * IMPORTANT browser constraint: only ONE SpeechRecognition session can be
 * active on the page at a time, even across separate object instances (one
 * per card — every ItemCard/GrammarRuleView/etc. calls this hook
 * independently). Starting a second session while a first is still
 * listening throws/misbehaves at the browser level — without coordination
 * this is exactly what could leave a card permanently stuck on
 * "Đang nghe..." after tapping a different card's mic before the first one
 * finished. `activeSession` below tracks whichever instance is currently
 * listening so a new `start()` anywhere on the page always silently stops
 * it first, and every terminal path (result / error / natural end / forced
 * timeout / thrown start() / unmount) is guaranteed to leave that instance
 * back in a non-"listening" state — never stuck.
 */

type RecognitionState = "idle" | "listening" | "done" | "error";

interface SpeechRecognitionResultLike {
  transcript: string;
  isFinal: boolean;
}

// Minimal shape of the non-standard SpeechRecognition API — no official TS lib types exist for it.
interface SpeechRecognitionLike extends EventTarget {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((event: { results: ArrayLike<ArrayLike<SpeechRecognitionResultLike>> }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
}

function getSpeechRecognitionCtor(): (new () => SpeechRecognitionLike) | undefined {
  if (typeof window === "undefined") return undefined;
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition;
}

export function isSpeechRecognitionSupported(): boolean {
  return getSpeechRecognitionCtor() !== undefined;
}

/** case/punctuation/whitespace-insensitive match against the target sentence. */
export function matchesTarget(heard: string, target: string): boolean {
  const normalize = (s: string) => s.trim().toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ");
  return normalize(heard) === normalize(target);
}

/**
 * One short, honest Vietnamese message per `errorCode` — the single source
 * every mic-using component reads from, so "Nói lại" fails the same way
 * everywhere instead of some cards silently showing nothing.
 */
export function getSpeechErrorMessage(errorCode: string | null): string {
  switch (errorCode) {
    case "not-allowed":
    case "service-not-allowed":
      return "VietVia cần quyền microphone để nghe bạn nói.";
    case "not-supported":
      return "Trình duyệt này chưa hỗ trợ luyện nói. Hãy thử Chrome.";
    case "no-speech":
      return "VietVia chưa nghe rõ. Bạn thử lại nhé.";
    default:
      return "Chưa nhận được giọng nói. Thử lại.";
  }
}

/** How long to listen before giving up — a card must never stay on "Đang nghe..." forever. */
const LISTEN_TIMEOUT_MS = 10_000;

/** The one currently-listening instance's silent-stop function, if any — see the file doc comment. */
let activeSession: (() => void) | null = null;

export function useSpeechRecognition() {
  const [state, setState] = useState<RecognitionState>("idle");
  const [transcript, setTranscript] = useState("");
  /**
   * The real native error code (e.g. "not-allowed", "no-speech", "network"),
   * kept alongside the existing generic `state === "error"` — see
   * `getSpeechErrorMessage` for the copy shown to the learner.
   */
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** True while this instance's session is being stopped because ANOTHER card started listening — not a real error, so it should resolve to "idle" quietly instead of showing an error message. */
  const preemptedRef = useRef(false);
  const mountedRef = useRef(true);

  const clearListenTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  /** Silently stop THIS instance's session because a different card just started listening. */
  const silentStop = useCallback(() => {
    preemptedRef.current = true;
    clearListenTimeout();
    try {
      recognitionRef.current?.abort();
    } catch {
      // Already stopped — nothing to do.
    }
  }, [clearListenTimeout]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      clearListenTimeout();
      if (activeSession === silentStop) activeSession = null;
      try {
        recognitionRef.current?.abort();
      } catch {
        // Already stopped — nothing to do.
      }
    };
  }, [clearListenTimeout, silentStop]);

  const start = useCallback(() => {
    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor) {
      setErrorCode("not-supported");
      setState("error");
      return;
    }

    // Only one recognition session may be active on the page at a time —
    // release whichever other card (or this same card's own stale attempt)
    // is currently listening before starting a fresh one.
    activeSession?.();
    activeSession = silentStop;

    const recognition = new Ctor();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      if (!mountedRef.current) return;
      clearListenTimeout();
      const heard = event.results[0]?.[0]?.transcript ?? "";
      setTranscript(heard);
      setState("done");
    };
    recognition.onerror = (event) => {
      if (activeSession === silentStop) activeSession = null;
      if (!mountedRef.current) return;
      clearListenTimeout();
      if (preemptedRef.current) {
        preemptedRef.current = false;
        setState("idle");
        return;
      }
      setErrorCode(event.error);
      setState("error");
    };
    recognition.onend = () => {
      if (activeSession === silentStop) activeSession = null;
      if (!mountedRef.current) return;
      clearListenTimeout();
      if (preemptedRef.current) {
        preemptedRef.current = false;
        setState("idle");
        return;
      }
      // If onresult already moved state to "done" (or onerror already set
      // "error"), this is a no-op. Only a session that ends with neither —
      // the mic just went quiet — falls back to an honest "didn't catch
      // that" instead of staying stuck on "listening" forever.
      setState((prev) => (prev === "listening" ? "error" : prev));
      setErrorCode((prev) => prev ?? "no-speech");
    };

    recognitionRef.current = recognition;
    preemptedRef.current = false;
    setTranscript("");
    setErrorCode(null);
    setState("listening");

    try {
      recognition.start();
    } catch {
      // The browser refused to start (e.g. a session is still tearing down
      // despite the preemption above) — reset immediately instead of
      // leaving "Đang nghe..." stuck with no session actually running.
      if (activeSession === silentStop) activeSession = null;
      setErrorCode("start-failed");
      setState("error");
      return;
    }

    clearListenTimeout();
    timeoutRef.current = setTimeout(() => {
      if (activeSession === silentStop) activeSession = null;
      try {
        recognitionRef.current?.stop();
      } catch {
        // Ignore — forcing an error state regardless below.
      }
      if (mountedRef.current) {
        setErrorCode("no-speech");
        setState("error");
      }
    }, LISTEN_TIMEOUT_MS);
  }, [clearListenTimeout, silentStop]);

  const stop = useCallback(() => {
    clearListenTimeout();
    try {
      recognitionRef.current?.stop();
    } catch {
      // Already stopped — nothing to do.
    }
  }, [clearListenTimeout]);

  const reset = useCallback(() => {
    clearListenTimeout();
    setState("idle");
    setTranscript("");
    setErrorCode(null);
  }, [clearListenTimeout]);

  return { state, transcript, errorCode, start, stop, reset };
}
