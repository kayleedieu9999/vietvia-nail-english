export function isSpeechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  return (
    voices.find((v) => v.lang === "en-US" && /Samantha|Google US English|Female/i.test(v.name)) ??
    voices.find((v) => v.lang === "en-US") ??
    voices.find((v) => v.lang.startsWith("en"))
  );
}

function getVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const synth = window.speechSynthesis;
    const existing = synth.getVoices();
    if (existing.length > 0) {
      resolve(existing);
      return;
    }
    synth.addEventListener("voiceschanged", () => resolve(synth.getVoices()), {
      once: true,
    });
    // Some browsers never fire voiceschanged; fall back to whatever is available.
    setTimeout(() => resolve(synth.getVoices()), 300);
  });
}

/** Speaks English text aloud using the browser's built-in text-to-speech, US English. */
export async function speakEnglish(text: string): Promise<void> {
  if (!isSpeechSupported()) return;
  const synth = window.speechSynthesis;
  synth.cancel();

  const voices = await getVoices();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.92;
  const voice = pickVoice(voices);
  if (voice) utterance.voice = voice;

  synth.speak(utterance);
}
