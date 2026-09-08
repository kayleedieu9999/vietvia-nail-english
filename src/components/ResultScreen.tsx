import { scoreEncouragement } from "@/lib/quiz-engine";

interface ResultScreenProps {
  score: number;
  total: number;
  onPlayAgain: () => void;
  onRestart: () => void;
}

export default function ResultScreen({
  score,
  total,
  onPlayAgain,
  onRestart,
}: ResultScreenProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 py-10">
      <div className="w-full max-w-sm text-center">
        <p className="text-4xl">🎉</p>
        <h1 className="mt-3 text-2xl font-extrabold text-slate-900">
          HOÀN THÀNH!
        </h1>

        <p className="mt-4 text-xl font-bold text-rose-500">
          Bạn đúng {score} / {total} câu
        </p>

        <p className="mt-3 text-base text-slate-600">
          {scoreEncouragement(score, total)}
        </p>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={onPlayAgain}
            className="w-full rounded-2xl bg-rose-500 px-6 py-4 text-lg font-bold text-white shadow-sm shadow-rose-300 transition active:scale-[0.98] active:bg-rose-600"
          >
            5 CÂU KHÁC
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="w-full rounded-2xl bg-white px-6 py-4 text-lg font-bold text-rose-500 shadow-sm ring-1 ring-rose-200 transition active:scale-[0.98]"
          >
            LÀM LẠI
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Mỗi ngày một chút, nói chuyện với khách sẽ tự nhiên hơn.
        </p>
      </div>
    </div>
  );
}
