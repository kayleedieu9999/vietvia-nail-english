import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_068: GrammarRuleLesson = {
  id: "rule-068",
  ruleNumber: 68,
  phaseNumber: 7,
  title: "Let me... — Chủ động đề nghị giúp khách",
  whenToUse:
    "Dùng \"Let me...\" khi bạn muốn chủ động đề nghị làm điều gì đó cho khách, ví dụ sửa lại một chỗ chưa đẹp hoặc giúp khách một việc nhỏ. Câu này cho khách thấy bạn quan tâm và sẵn sàng giúp đỡ ngay.",
  pattern: "Let me + động từ nguyên mẫu...",
  nailSalonExample: {
    english: "Let me fix that for you.",
    vietnamese: "Để tôi sửa lại chỗ đó cho chị.",
  },
  moreExamples: [
    {
      english: "Let me get you a mirror.",
      vietnamese: "Để tôi lấy gương cho chị.",
    },
    {
      english: "Let me clean this up first.",
      vietnamese: "Để tôi lau sạch chỗ này trước.",
    },
    {
      english: "Let me check the color again.",
      vietnamese: "Để tôi kiểm tra lại màu sơn.",
    },
  ],
  quiz: {
    question:
      "Bạn thấy một góc móng chưa sơn đều và muốn chủ động sửa lại cho khách. Bạn nói gì?",
    choices: [
      { id: "a", text: "That is wrong there." },
      { id: "b", text: "Let me fix that for you." },
      { id: "c", text: "You see, it's bad." },
    ],
    correctAnswer: "b",
    explanation:
      "\"Let me fix that for you\" là cách đề nghị giúp đỡ tích cực và lịch sự. Các câu còn lại nghe như đang chê hoặc chỉ trích khách, không phù hợp.",
  },
  speakingPractice: {
    targetEnglish: "Let me fix that for you real quick.",
    vietnameseHint: "Để tôi sửa lại chỗ đó cho chị thật nhanh.",
  },
};
