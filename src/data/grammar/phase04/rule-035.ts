import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_035: GrammarRuleLesson = {
  id: "rule-035",
  ruleNumber: 35,
  phaseNumber: 4,
  title: "Hỏi khách: hôm nay hay thường ngày?",
  whenToUse:
    "Khi hỏi khách muốn làm GÌ NGAY HÔM NAY, dùng “What are you getting/doing today?”. Khi hỏi về THÓI QUEN của khách — họ thường hay làm gì mỗi lần đến — dùng “What do you usually get/do?”.",
  pattern: "What are you + V-ing + today?  |  What do you usually + V?",
  nailSalonExample: {
    english: "What are you getting today?",
    vietnamese: "Hôm nay chị muốn làm gì?",
  },
  moreExamples: [
    {
      english: "What do you usually get?",
      vietnamese: "Chị thường hay làm gì mỗi lần đến?",
    },
    {
      english: "Are you getting a manicure today?",
      vietnamese: "Hôm nay chị làm nail tay không?",
    },
    {
      english: "Do you usually come on Fridays?",
      vietnamese: "Chị có thường đến vào thứ Sáu không?",
    },
  ],
  quiz: {
    question:
      "Khách vừa ngồi xuống ghế, chị muốn hỏi hôm nay khách muốn làm gì ngay bây giờ.",
    choices: [
      { id: "a", text: "What do you get today?" },
      { id: "b", text: "What are you getting today?" },
      { id: "c", text: "What did you get today?" },
    ],
    correctAnswer: "b",
    explanation:
      "Hỏi về việc ngay hôm nay/lúc này, dùng “are you getting”: What are you getting today?",
  },
  speakingPractice: {
    targetEnglish: "What are you doing today, gel or regular polish?",
    vietnameseHint: "Hãy nói: Hôm nay chị làm gel hay sơn thường?",
  },
};
