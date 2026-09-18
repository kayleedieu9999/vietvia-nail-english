import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_053: GrammarRuleLesson = {
  id: "rule-053",
  ruleNumber: 53,
  phaseNumber: 6,
  title: "So sánh hơn — so sánh hai lựa chọn",
  whenToUse:
    "Khi khách phân vân giữa hai màu sơn hoặc hai kiểu dáng, hãy dùng câu so sánh để giúp khách chọn. Từ ngắn thì thêm '-er', từ dài thì thêm 'more' phía trước.",
  pattern: "Tính từ + er + than  /  more + tính từ + than",
  nailSalonExample: {
    english: "This color is darker than that one.",
    vietnamese: "Màu này đậm hơn màu kia.",
  },
  moreExamples: [
    { english: "Gel is more expensive than regular polish.", vietnamese: "Sơn gel đắt hơn sơn thường." },
    { english: "Your nails are longer than before.", vietnamese: "Móng của chị dài hơn trước." },
    { english: "This design is more beautiful than that design.", vietnamese: "Mẫu này đẹp hơn mẫu kia." },
  ],
  quiz: {
    question: "Bạn muốn nói móng chân ngắn hơn móng tay, chọn câu đúng:",
    choices: [
      { id: "a", text: "Toenails are short than fingernails." },
      { id: "b", text: "Toenails are shorter than fingernails." },
      { id: "c", text: "Toenails are more short than fingernails." },
    ],
    correctAnswer: "b",
    explanation:
      "Từ ngắn như 'short' chỉ cần thêm '-er' thành 'shorter', không cần thêm 'more' phía trước.",
  },
  speakingPractice: {
    targetEnglish: "This shape is rounder than that shape.",
    vietnameseHint: "So sánh một kiểu móng tròn hơn kiểu kia cho khách nghe.",
  },
};
