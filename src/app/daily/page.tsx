import type { Metadata } from "next";
import DailySpeakingSession from "@/components/daily/DailySpeakingSession";
import { buildDailyRound } from "@/lib/daily-round";

export const metadata: Metadata = {
  title: "5 câu hôm nay - VietVia English Practice",
  description: "Luyện nói 5 câu tiếng Anh ngẫu nhiên mỗi ngày, không cần đăng nhập.",
};

export default function DailyPage() {
  const initialRound = buildDailyRound();

  return <DailySpeakingSession initialRound={initialRound} />;
}
