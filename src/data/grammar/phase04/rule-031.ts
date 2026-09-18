import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_031: GrammarRuleLesson = {
  id: "rule-031",
  ruleNumber: 31,
  phaseNumber: 4,
  title: "Đang làm ngay bây giờ — I'm + V-ing",
  whenToUse:
    "Khi chị đang làm một việc gì đó ngay trước mắt khách, ngay lúc này, dùng “I'm” (hoặc “She's/He's”) + động từ thêm “-ing”. Đây là cách nói cho khách biết việc đang diễn ra, không phải việc chị làm mọi ngày.",
  pattern: "I am (I'm) / She is (She's) / He is (He's) + V-ing",
  nailSalonExample: {
    english: "I'm doing your nails now.",
    vietnamese: "Tôi đang làm móng cho chị đây.",
  },
  moreExamples: [
    {
      english: "She's filing your nails.",
      vietnamese: "Cô ấy đang giũa móng cho chị.",
    },
    {
      english: "I'm painting your toes now.",
      vietnamese: "Tôi đang sơn móng chân cho chị.",
    },
    {
      english: "He's washing his hands.",
      vietnamese: "Anh ấy đang rửa tay.",
    },
  ],
  quiz: {
    question:
      "Khách hỏi: “What are you doing?” trong khi chị đang sơn móng tay cho khách. Chị trả lời sao cho đúng?",
    choices: [
      { id: "a", text: "I paint your nails." },
      { id: "b", text: "I'm painting your nails." },
      { id: "c", text: "I painted your nails." },
    ],
    correctAnswer: "b",
    explanation:
      "Việc đang diễn ra ngay bây giờ, trước mắt khách, nên dùng “I'm” + V-ing: I'm painting your nails.",
  },
  speakingPractice: {
    targetEnglish: "I'm cutting your cuticles now.",
    vietnameseHint: "Hãy nói: Tôi đang cắt da chết cho chị đây.",
  },
};
