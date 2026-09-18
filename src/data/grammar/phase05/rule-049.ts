import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_049: GrammarRuleLesson = {
  id: "rule-049",
  ruleNumber: 49,
  phaseNumber: 5,
  title: "Lỗi thường gặp — bỏ quên hoặc chọn sai giới từ",
  whenToUse:
    "Người Việt hay bỏ quên giới từ (nói \"arrive salon\" thay vì \"arrive at the salon\"), hoặc chọn nhầm giữa in/on/at. Hãy nhớ tiếng Anh gần như luôn cần một giới từ trước thời gian và nơi chốn, khác với tiếng Việt có thể bỏ qua.",
  pattern: "Luôn kiểm tra: có giới từ chưa? đúng loại chưa?",
  nailSalonExample: {
    english: "She will arrive at the salon at 9 o'clock, not \"arrive the salon.\"",
    vietnamese: "Cô ấy sẽ đến tiệm lúc 9 giờ, không nói \"arrive the salon\" mà thiếu giới từ.",
  },
  moreExamples: [
    { english: "I live on Main Street, not \"I live Main Street.\"", vietnamese: "Tôi sống ở đường Main, không phải \"I live Main Street\" thiếu giới từ." },
    { english: "We are open on Saturday, not \"open at Saturday.\"", vietnamese: "Chúng tôi mở cửa vào thứ Bảy, không phải \"open at Saturday\" sai giới từ." },
    { english: "He is good at doing nail art.", vietnamese: "Anh ấy giỏi vẽ móng nghệ thuật." },
  ],
  quiz: {
    question: "Một học viên viết: \"I will arrive the salon at 8.\" Câu này thiếu gì?",
    choices: [
      { id: "a", text: "Thiếu \"at\" trước \"the salon\"" },
      { id: "b", text: "Thiếu \"on\" trước \"the salon\"" },
      { id: "c", text: "Câu này đã đúng" },
    ],
    correctAnswer: "a",
    explanation: "Động từ \"arrive\" cần giới từ \"at\" trước một địa điểm cụ thể: \"arrive at the salon\".",
  },
  speakingPractice: {
    targetEnglish: "I will arrive at the salon on Monday, at 8 o'clock.",
    vietnameseHint: "Hãy nói: Tôi sẽ đến tiệm vào thứ Hai, lúc 8 giờ. Đừng quên giới từ trước mỗi phần.",
  },
};
