"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { dongTuData, cauNoiTuNhienData } from "@/data/collections";
import { flattenCollection } from "@/types/collection";
import { useCollectionProgress, setItemState } from "@/lib/collectionProgress";
import { useSpeechRecognition } from "@/lib/useSpeechRecognition";
import { speakEnglish, SLOW_SPEECH_RATE } from "@/lib/tts";
import { recordDailyActivity } from "@/lib/progress";
import {
  PracticeItem,
  PracticeMode,
  pickDailyPracticeItem,
  diffWords,
  getFeedbackCopy,
  getConnectedSpeechTip,
  splitIntoChunks,
} from "@/lib/dailyPronunciation";
import PronunciationTarget from "@/components/PronunciationTarget";
import PronunciationAudioControls from "@/components/PronunciationAudioControls";
import PronunciationTip from "@/components/PronunciationTip";
import SpeechRecorder from "@/components/SpeechRecorder";
import SpeechResult from "@/components/SpeechResult";
import WordMatchFeedback from "@/components/WordMatchFeedback";

/** Pseudo lesson-slug reserved for streak/notification credit — never a real lesson, never shown as "Continue Learning" (see `recordDailyActivity`'s doc comment for why). */
const DAILY_ACTIVITY_SLUG = "daily-pronunciation-practice";

const COLLECTION_KEY_BY_MODE: Record<PracticeMode, string> = {
  word: "tu-vung",
  sentence: "cau-noi-tu-nhien",
  nails: "nails-speaking",
};

const MODE_LABELS: Record<PracticeMode, string> = { word: "Từ", sentence: "Câu", nails: "Tiệm Nails" };

interface DailyPronunciationCardProps {
  /** Small (~30-item) pool built server-side from real Hội thoại Nails lesson questions — see src/lib/nailsSpeakingPool.ts. */
  nailsPool: PracticeItem[];
}

export default function DailyPronunciationCard({ nailsPool }: DailyPronunciationCardProps) {
  const [mode, setMode] = useState<PracticeMode>("sentence");
  const [manualItemId, setManualItemId] = useState<string | null>(null);

  const wordProgress = useCollectionProgress("tu-vung");
  const sentenceProgress = useCollectionProgress("cau-noi-tu-nhien");
  const nailsProgress = useCollectionProgress("nails-speaking");

  const wordPool: PracticeItem[] = useMemo(
    () => flattenCollection(dongTuData).map((i) => ({ itemId: i.id, english: i.english, vietnamese: i.vietnamese, ipa: i.ipa })),
    [],
  );
  const sentencePool: PracticeItem[] = useMemo(
    () =>
      flattenCollection(cauNoiTuNhienData).map((i) => ({
        itemId: i.id,
        english: i.english,
        vietnamese: i.vietnamese,
        ipa: i.ipa,
        whenToUse: i.whenToUse,
      })),
    [],
  );

  const pool = mode === "word" ? wordPool : mode === "sentence" ? sentencePool : nailsPool;
  const progress = mode === "word" ? wordProgress : mode === "sentence" ? sentenceProgress : nailsProgress;
  const collectionKey = COLLECTION_KEY_BY_MODE[mode];

  const dailyItem = useMemo(() => pickDailyPracticeItem(pool, progress), [pool, progress]);
  const currentItem = (manualItemId ? pool.find((i) => i.itemId === manualItemId) : null) ?? dailyItem;

  function switchMode(next: PracticeMode) {
    setMode(next);
    setManualItemId(null);
  }

  function goToNextItem() {
    if (!currentItem || pool.length === 0) return;
    const currentIndex = pool.findIndex((i) => i.itemId === currentItem.itemId);
    const next = pool[(currentIndex + 1) % pool.length]!;
    setManualItemId(next.itemId);
  }

  return (
    <div className="card-surface">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="flex items-center gap-2 text-sm font-extrabold text-slate-900 lg:text-base">
            <span aria-hidden>🎤</span> Luyện nói &amp; phát âm hôm nay
          </p>
          <p className="mt-0.5 text-xs text-slate-500 lg:text-sm">
            Nghe một câu, nói lại và xem chỗ nào cần chỉnh.
          </p>
        </div>
        <Link href="/topic/pronunciation" className="shrink-0 text-xs font-bold text-rose-500">
          Xem phần Phát âm →
        </Link>
      </div>

      <div className="mt-3 flex gap-1.5">
        {(["word", "sentence", "nails"] as PracticeMode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => switchMode(m)}
            className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
              mode === m ? "bg-rose-500 text-white" : "bg-well text-slate-600 hover:bg-rose-100"
            }`}
          >
            {MODE_LABELS[m]}
          </button>
        ))}
      </div>

      {currentItem && (
        <PracticeSession
          // Remounts fresh (mic/attempts/feedback all reset naturally) whenever the effective item changes — no reset effect needed.
          key={`${collectionKey}:${currentItem.itemId}`}
          item={currentItem}
          collectionKey={collectionKey}
          onAdvance={goToNextItem}
        />
      )}
    </div>
  );
}

interface PracticeSessionProps {
  item: PracticeItem;
  collectionKey: string;
  onAdvance: () => void;
}

function PracticeSession({ item, collectionKey, onAdvance }: PracticeSessionProps) {
  const [attempts, setAttempts] = useState(0);
  const [revealFeedback, setRevealFeedback] = useState(false);
  const mic = useSpeechRecognition();

  // Brief "Đang nghe lại…" pause before revealing feedback, plus the scoring/progress side effects — all inside the timeout callback, not synchronously in the effect body.
  useEffect(() => {
    if (mic.state !== "done") return;
    const timer = setTimeout(() => {
      const diff = diffWords(item.english, mic.transcript);
      const feedback = getFeedbackCopy(diff);
      setRevealFeedback(true);
      setAttempts((prev) => prev + 1);
      if (feedback.band === "success") {
        recordDailyActivity(DAILY_ACTIVITY_SLUG);
        setItemState(collectionKey, item.itemId, "mastered");
      } else {
        setItemState(collectionKey, item.itemId, "review");
      }
    }, 350);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mic.state]);

  const diff = mic.state === "done" ? diffWords(item.english, mic.transcript) : null;
  const feedback = diff ? getFeedbackCopy(diff) : null;
  const tip = getConnectedSpeechTip(item.english);
  const isProcessing = mic.state === "done" && !revealFeedback;
  const showChunks = attempts >= 2 && revealFeedback && feedback?.band !== "success";
  const [chunkOne, chunkTwo] = splitIntoChunks(item.english);

  function handleRetry() {
    setRevealFeedback(false);
    mic.start();
  }

  return (
    <>
      <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <PronunciationTarget english={item.english} ipa={item.ipa} vietnamese={item.vietnamese} />
          <div className="mt-2.5">
            <PronunciationAudioControls text={item.english} />
          </div>
          <PronunciationTip tip={tip} />
        </div>

        {/* Always rendered (no feature-detection at render time) — same fix as GrammarRuleView's MicButton, since checking
            isSpeechRecognitionSupported() here would differ between server (always "unsupported") and client, causing a
            hydration mismatch. SpeechRecorder itself surfaces "not supported" via errorCode after a start() attempt. */}
        <SpeechRecorder state={mic.state} errorCode={mic.errorCode} onStart={mic.start} label="NÓI CÂU NÀY" />
      </div>

      {isProcessing && <p className="mt-4 text-sm font-semibold text-slate-400">Đang nghe lại…</p>}

      {revealFeedback && diff && feedback && (
        <div className="mt-4 border-t border-slate-100 pt-4">
          <SpeechResult transcript={mic.transcript} />
          <div className="mt-3">
            <WordMatchFeedback diff={diff} feedback={feedback} />
          </div>

          {showChunks && (
            <div className="mt-4 rounded-2xl bg-well p-3.5">
              <p className="text-xs font-extrabold text-slate-500">Luyện từng phần</p>
              <div className="mt-2 space-y-2">
                {[chunkOne, chunkTwo].map((chunk) => (
                  <div key={chunk} className="flex items-center justify-between gap-2 rounded-xl bg-white px-3 py-2">
                    <span className="text-sm font-semibold text-slate-700">{chunk}</span>
                    <button
                      type="button"
                      onClick={() => speakEnglish(chunk, SLOW_SPEECH_RATE)}
                      className="shrink-0 rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-bold text-rose-600"
                    >
                      🔊 Nghe
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button type="button" onClick={handleRetry} className="btn-secondary">
              🎤 Nói lại
            </button>
            <button
              type="button"
              onClick={() => setItemState(collectionKey, item.itemId, "review")}
              className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-bold text-rose-600"
            >
              Cần ôn lại
            </button>
            <button
              type="button"
              onClick={() => setItemState(collectionKey, item.itemId, "mastered")}
              className="rounded-xl bg-emerald-500 px-3.5 py-2.5 text-xs font-bold text-white"
            >
              Đã nhớ
            </button>
            {feedback.band === "success" && (
              <button type="button" onClick={onAdvance} className="ml-auto text-sm font-bold text-rose-500">
                Câu tiếp theo →
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
