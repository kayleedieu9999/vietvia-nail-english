import Link from "next/link";
import { getAllLessonSummaries } from "@/data/lessons";
import ResultsList from "@/components/ResultsList";

export default function ResultsPage() {
  const summaries = getAllLessonSummaries();

  return (
    <div className="min-h-dvh px-5 pb-16 pt-8">
      <div className="mx-auto w-full max-w-sm">
        <Link href="/" className="text-sm font-semibold text-rose-400 underline-offset-2 hover:underline">
          ← Trang chủ
        </Link>

        <h1 className="mt-4 text-2xl font-extrabold text-slate-900">Kết quả luyện tập</h1>
        <p className="mt-2 text-sm text-slate-600">
          Kết quả được lưu ngay trên điện thoại của bạn — không cần đăng nhập.
        </p>

        <ResultsList summaries={summaries} />
      </div>
    </div>
  );
}
