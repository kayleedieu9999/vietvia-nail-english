import { ReactNode } from "react";
import { ScoreResult } from "@/lib/lesson-engine";

function ResultFace({ happy }: { happy: boolean }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className="mx-auto h-36 w-36"
      role="img"
      aria-label={happy ? "Khuôn mặt vui mừng" : "Khuôn mặt động viên"}
    >
      <circle cx="80" cy="80" r="72" fill={happy ? "#fef3c7" : "#ffe4e6"} />
      <circle cx="55" cy="72" r="7" fill="#57534e" />
      <circle cx="105" cy="72" r="7" fill="#57534e" />
      {happy ? (
        <path
          d="M46 100 q34 30 68 0"
          stroke="#57534e"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M46 114 q34 -26 68 0"
          stroke="#57534e"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

interface ResultCardProps {
  score: number;
  total: number;
  result: ScoreResult;
  children: ReactNode;
}

export default function ResultCard({ score, total, result, children }: ResultCardProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 py-10">
      <div className="w-full max-w-sm text-center">
        <ResultFace happy={result.passed} />

        <h1 className="mt-4 text-2xl font-extrabold text-slate-900">HOÀN THÀNH!</h1>

        <p className="mt-3 text-xl font-bold text-rose-500">
          Bạn đúng {score} / {total} câu
        </p>

        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {result.passed ? "😊 " : "😔 "}
          {result.message}
        </p>

        <div className="mt-8 space-y-3">{children}</div>
      </div>
    </div>
  );
}
