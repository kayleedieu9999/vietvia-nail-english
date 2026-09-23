import type { Metadata } from "next";
import { buildNailsSpeakingPool } from "@/lib/nailsSpeakingPool";
import { getGrammarReviewPool } from "@/data/grammar";
import ReviewPageClient from "@/components/review/ReviewPageClient";

export const metadata: Metadata = {
  title: "Câu cần ôn lại - VietVia English Practice",
  description: "Ôn lại những câu bạn đã đánh dấu cần ôn từ mọi bài luyện.",
};

export default function OnTapPage() {
  const nailsPool = buildNailsSpeakingPool();
  const grammarPool = getGrammarReviewPool();

  return <ReviewPageClient nailsPool={nailsPool} grammarPool={grammarPool} />;
}
