import type { Metadata } from "next";
import LessonPlayer from "@/components/lesson/LessonPlayer";
import { buildDailyRound } from "@/lib/daily-round";

export const metadata: Metadata = {
  title: "5 câu hôm nay - VietVia English Practice",
  description: "Luyện nhanh 5 câu tiếng Anh ngẫu nhiên mỗi ngày, không cần đăng nhập.",
};

export default function DailyPage() {
  const initialRound = buildDailyRound();

  return (
    <LessonPlayer
      source={{ type: "daily", questions: initialRound }}
      title="5 CÂU HÔM NAY"
      description="5 câu ngẫu nhiên từ tất cả chủ đề — khoảng 2 phút."
      checklist={["Không cần đăng nhập", "Chỉ khoảng 2 phút", "Câu hỏi ngẫu nhiên mỗi lần"]}
      badgeEmoji="⚡"
      otherLessonsHref="/topics"
      otherLessonsLabel="CHỌN CHỦ ĐỀ"
    />
  );
}
