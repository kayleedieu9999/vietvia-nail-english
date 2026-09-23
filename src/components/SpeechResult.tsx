interface SpeechResultProps {
  transcript: string;
}

/** "Bạn nói: ..." — the raw recognized text, shown as-is before any feedback. */
export default function SpeechResult({ transcript }: SpeechResultProps) {
  return (
    <div>
      <p className="text-xs font-bold text-slate-400">Bạn nói:</p>
      <p className="mt-0.5 text-base font-semibold text-slate-700">
        {transcript ? `"${transcript}"` : <span className="italic text-slate-400">(không nghe rõ)</span>}
      </p>
    </div>
  );
}
