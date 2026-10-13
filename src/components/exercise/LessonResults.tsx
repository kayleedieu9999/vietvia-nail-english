import Link from "next/link";

interface LessonResultsProps {
  total: number;
  correctCount: number;
  spokenCount: number;
  reviewCount: number;
  onRetry: () => void;
  onBackToSelector: () => void;
}

/** End-of-mode result screen — shared by Luyện ngay / Quiz / Ghép câu / Luyện thêm. */
export default function LessonResults({
  total,
  correctCount,
  spokenCount,
  reviewCount,
  onRetry,
  onBackToSelector,
}: LessonResultsProps) {
  return (
    <div className="card-surface text-center">
      <span className="text-4xl" aria-hidden>
        🎉
      </span>
      <h2 className="mt-3 text-xl font-extrabold text-slate-900">Bạn hoàn thành bài rồi!</h2>

      <div className="mt-5 space-y-2">
        <p className="text-base font-bold text-slate-800">
          {correctCount} / {total} câu đúng
        </p>
        {spokenCount > 0 && <p className="text-sm text-slate-600">{spokenCount} câu đã luyện nói</p>}
        {reviewCount > 0 && <p className="text-sm text-rose-600">{reviewCount} câu cần ôn lại</p>}
      </div>

      <div className="mt-6 space-y-2.5">
        {reviewCount > 0 && (
          <Link href="/on-tap" className="btn-secondary block w-full">
            Ôn câu sai
          </Link>
        )}
        <button type="button" onClick={onRetry} className="btn-primary w-full">
          Luyện lại
        </button>
        <button type="button" onClick={onBackToSelector} className="text-sm font-semibold text-rose-500">
          ← Chọn phần khác
        </button>
      </div>
    </div>
  );
}
