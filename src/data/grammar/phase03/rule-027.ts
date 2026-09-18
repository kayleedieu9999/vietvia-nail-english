import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_027: GrammarRuleLesson = {
  id: "rule-027",
  ruleNumber: 27,
  phaseNumber: 3,
  title: "Cái này, cái kia — this / that / these / those",
  whenToUse:
    "Khi chỉ vào đồ vật gần hay xa, và một cái hay nhiều cái, dùng 4 từ khác nhau: this (cái này, gần, 1 cái), that (cái kia, xa, 1 cái), these (những cái này, gần, nhiều cái), those (những cái kia, xa, nhiều cái).",
  pattern: "this/that + 1 cái  |  these/those + nhiều cái",
  nailSalonExample: {
    english: "Do you like this color or that one?",
    vietnamese: "Chị thích màu này hay màu kia?",
  },
  moreExamples: [
    {
      english: "These tools are clean.",
      vietnamese: "Những dụng cụ này đã được vệ sinh sạch.",
    },
    {
      english: "Those chairs over there are open.",
      vietnamese: "Những cái ghế đằng kia đang trống.",
    },
    {
      english: "This design is very popular right now.",
      vietnamese: "Mẫu vẽ này đang rất được ưa chuộng.",
    },
  ],
  quiz: {
    question:
      "Chị chỉ tay vào ba lọ sơn ở xa bên kia bàn và nói với đồng nghiệp. Chị nên nói:",
    choices: [
      { id: "a", text: "This colors are new." },
      { id: "b", text: "Those colors are new." },
      { id: "c", text: "That colors are new." },
    ],
    correctAnswer: "b",
    explanation:
      "Ba lọ sơn (nhiều cái) và ở xa, nên dùng “those” (những cái kia). “This” và “that” chỉ dùng cho 1 cái.",
  },
  speakingPractice: {
    targetEnglish: "These brushes are new.",
    vietnameseHint: "Hãy nói: Những cây cọ này mới.",
  },
};
