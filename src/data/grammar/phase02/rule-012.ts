import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_012: GrammarRuleLesson = {
  id: "rule-012",
  ruleNumber: 12,
  phaseNumber: 2,
  title: "A/An — Nói Về Một Thứ Chưa Xác Định",
  whenToUse:
    "Dùng \"a\" hoặc \"an\" khi bạn nói về MỘT thứ, nhưng chưa nói rõ là cái nào, hoặc đây là lần đầu tiên nhắc đến nó. Ví dụ: một cái khăn (không quan trọng là khăn nào), một khách hàng (chưa biết tên).",
  pattern: "a/an + danh từ (một thứ, chưa nói rõ cái nào)",
  nailSalonExample: {
    english: "I need a bottle of polish remover.",
    vietnamese: "Tôi cần một chai nước tẩy sơn.",
  },
  moreExamples: [
    {
      english: "A customer just walked in.",
      vietnamese: "Một khách hàng vừa mới bước vào.",
    },
    {
      english: "Can you hand me a towel?",
      vietnamese: "Bạn đưa tôi một cái khăn được không?",
    },
    {
      english: "She picked a bright red color.",
      vietnamese: "Cô ấy đã chọn một màu đỏ tươi.",
    },
  ],
  quiz: {
    question:
      "Bạn muốn nhờ đồng nghiệp lấy một cây cọ mới, chưa nói cụ thể là cây nào. Chọn câu đúng.",
    choices: [
      { id: "a", text: "I need a new brush." },
      { id: "b", text: "I need an new brush." },
      { id: "c", text: "I need the new brush." },
    ],
    correctAnswer: "a",
    explanation:
      "\"New\" bắt đầu bằng âm phụ âm nên dùng \"a\", và vì đây là một cây cọ bất kỳ (chưa xác định), không dùng \"the\".",
  },
  speakingPractice: {
    targetEnglish: "Can I borrow a pair of scissors?",
    vietnameseHint: "Tôi mượn một cây kéo được không?",
  },
};
