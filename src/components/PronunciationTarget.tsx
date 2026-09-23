interface PronunciationTargetProps {
  english: string;
  /** Only ever real, already-vetted IPA data (e.g. CollectionItem.ipa) — never generated, so this is omitted whenever the source item has none rather than guessing. */
  ipa?: string;
  vietnamese: string;
}

/** The word/sentence being practiced — English first, real IPA if the item has it, Vietnamese meaning shown subtly underneath. */
export default function PronunciationTarget({ english, ipa, vietnamese }: PronunciationTargetProps) {
  return (
    <div>
      <p className="text-xl font-extrabold leading-snug text-slate-900 lg:text-2xl">{english}</p>
      {ipa && <p className="mt-1 text-sm text-slate-400">{ipa}</p>}
      <p className="mt-1.5 text-sm text-slate-500">{vietnamese}</p>
    </div>
  );
}
