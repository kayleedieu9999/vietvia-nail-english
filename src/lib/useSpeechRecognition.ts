"use client";

import { useCallback, useRef, useState } from "react";

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

export function useSpeechRecognition() {
  const [state, setState] = useState<RecognitionState>("idle");
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  const start = useCallback(() => {
    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor) {
      setState("error");
      return;
    }
    const recognition = new Ctor();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const heard = event.results[0]?.[0]?.transcript ?? "";
      setTranscript(heard);
      setState("done");
    };
    recognition.onerror = () => setState("error");
    recognition.onend = () => {
      setState((prev) => (prev === "listening" ? "done" : prev));
    };
    recognitionRef.current = recognition;
    setTranscript("");
    setState("listening");
    recognition.start();
  }, []);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
  }, []);

  const reset = useCallback(() => {
    setState("idle");
    setTranscript("");
  }, []);

  return { state, transcript, start, stop, reset };
}
