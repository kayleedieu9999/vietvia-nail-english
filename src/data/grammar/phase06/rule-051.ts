import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_051: GrammarRuleLesson = {
  id: "rule-051",
  ruleNumber: 51,
  phaseNumber: 6,
  title: "Tính từ đứng trước danh từ",
  whenToUse:
    "Khi bạn muốn tả màu sắc, hình dáng, độ dài của một thứ gì đó — như màu sơn, kiểu móng — hãy đặt từ tả đặc điểm ngay trước tên món đồ. Cách này giúp câu nói ngắn gọn và tự nhiên khi tư vấn cho khách.",
  pattern: "a/an/the + tính từ + danh từ",
  nailSalonExample: {
    english: "She wants a short square nail.",
    vietnamese: "Cô ấy muốn một kiểu móng vuông ngắn.",
  },
  moreExamples: [
    { english: "I love this pink color.", vietnamese: "Tôi thích màu hồng này." },
    { english: "You have long fingers.", vietnamese: "Bạn có ngón tay dài." },
    { english: "Today is a busy day.", vietnamese: "Hôm nay là một ngày bận rộn." },
  ],
  quiz: {
    question: "Bạn muốn nói với khách 'Tôi thích móng dài', chọn câu đúng:",
    choices: [
      { id: "a", text: "I like nails long." },
      { id: "b", text: "I like long nails." },
      { id: "c", text: "I like the long." },
    ],
    correctAnswer: "b",
    explanation:
      "Từ tả đặc điểm (long) phải đứng ngay trước danh từ (nails), không đứng sau danh từ.",
  },
  speakingPractice: {
    targetEnglish: "I like long nails.",
    vietnameseHint: "Nói cho khách biết bạn thích kiểu móng dài.",
  },
};
