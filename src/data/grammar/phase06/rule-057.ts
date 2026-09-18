import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_057: GrammarRuleLesson = {
  id: "rule-057",
  ruleNumber: 57,
  phaseNumber: 6,
  title: "Nối câu với 'and', 'but', 'or'",
  whenToUse:
    "Khi nói chuyện với khách, bạn thường cần nối hai ý lại với nhau: thêm ý thì dùng 'and', ý trái ngược thì dùng 'but', và đưa ra lựa chọn thì dùng 'or'.",
  pattern: "Ý 1 + and/but/or + Ý 2",
  nailSalonExample: {
    english: "I can do gel or dip powder.",
    vietnamese: "Tôi có thể làm gel hoặc bột nhúng.",
  },
  moreExamples: [
    { english: "This color is pretty but expensive.", vietnamese: "Màu này đẹp nhưng đắt." },
    { english: "She wants long nails and a bright color.", vietnamese: "Cô ấy muốn móng dài và màu sáng." },
    { english: "You can pay by cash or card.", vietnamese: "Chị có thể trả tiền mặt hoặc thẻ." },
  ],
  quiz: {
    question: "Khách nói móng đẹp nhưng hơi dài, chọn câu đúng:",
    choices: [
      { id: "a", text: "The nails are beautiful and long." },
      { id: "b", text: "The nails are beautiful but long." },
      { id: "c", text: "The nails are beautiful or long." },
    ],
    correctAnswer: "b",
    explanation:
      "Dùng 'but' khi hai ý trái ngược nhau — đẹp là điều tốt, còn dài quá là điều khách không thích.",
  },
  speakingPractice: {
    targetEnglish: "I like this color, but I want it shorter.",
    vietnameseHint: "Nói bạn thích màu này nhưng muốn móng ngắn hơn.",
  },
};
