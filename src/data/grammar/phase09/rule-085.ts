import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_085: GrammarRuleLesson = {
  id: "rule-085",
  ruleNumber: 85,
  phaseNumber: 9,
  title: "Hỏi thăm chuyện nhỏ để tạo không khí thân thiện",
  whenToUse:
    "Khi khách mới ngồi xuống ghế, hỏi thăm vài câu nhỏ giúp khách cảm thấy thoải mái và thân thiện hơn. Không cần câu phức tạp — chỉ vài câu hỏi ngắn, đơn giản là đủ.",
  pattern: "How's your day going? / Do you have any plans today?",
  nailSalonExample: {
    english: "How's your day going so far?",
    vietnamese: "Hôm nay chị thế nào rồi?",
  },
  moreExamples: [
    {
      english: "Do you have any plans this weekend?",
      vietnamese: "Cuối tuần này chị có dự định gì không?",
    },
    {
      english: "Is it still hot outside?",
      vietnamese: "Ngoài trời còn nóng không chị?",
    },
    {
      english: "Do you want the same color as last time?",
      vietnamese: "Chị muốn màu giống lần trước không?",
    },
  ],
  quiz: {
    question: "Khách vừa ngồi xuống ghế làm móng. Câu hỏi nào tự nhiên để bắt đầu trò chuyện?",
    choices: [
      { id: "a", text: "What is the purpose of your visit today?" },
      { id: "b", text: "How's your day going?" },
      { id: "c", text: "State your plans for today." },
    ],
    correctAnswer: "b",
    explanation:
      "\"How's your day going?\" là câu hỏi thăm nhẹ nhàng, tự nhiên mà người Mỹ hay dùng để bắt chuyện. Câu (a) và (c) nghe như đang thẩm vấn, quá trang trọng.",
  },
  speakingPractice: {
    targetEnglish: "How's your day going?",
    vietnameseHint: "Tập hỏi câu này với giọng vui vẻ, thân thiện khi khách vừa ngồi xuống ghế.",
  },
};
