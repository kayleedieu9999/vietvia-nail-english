interface PronunciationTipProps {
  tip: string | null;
}

/** One short, honest connected-speech tip — renders nothing when no curated pattern matched (never fabricates a tip). */
export default function PronunciationTip({ tip }: PronunciationTipProps) {
  if (!tip) return null;
  return (
    <p className="mt-2 flex items-start gap-1.5 text-xs text-slate-500">
      <span aria-hidden>💡</span> {tip}
    </p>
  );
}
