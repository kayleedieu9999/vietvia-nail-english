import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_016: GrammarRuleLesson = {
  id: "rule-016",
  ruleNumber: 16,
  phaseNumber: 2,
  title: "Không Đếm Được — Polish, Acetone, Lotion",
  whenToUse:
    "Một số thứ như polish (sơn), acetone, lotion (kem dưỡng), water (nước) không đếm được bằng \"a/an\" vì chúng không phải là một cái riêng lẻ. Cứ nói thẳng từ đó, không cần \"a/an\". Chỉ dùng \"the\" khi bạn muốn nói đến chai/lọ cụ thể mà cả hai đã biết.",
  pattern: "(không a/an) + danh từ không đếm được, dùng 'the' nếu đã cụ thể",
  nailSalonExample: {
    english: "We need more acetone.",
    vietnamese: "Chúng ta cần thêm acetone.",
  },
  moreExamples: [
    {
      english: "Pass me the lotion on the shelf.",
      vietnamese: "Đưa tôi lọ dưỡng thể trên kệ đó.",
    },
    {
      english: "This polish dries very fast.",
      vietnamese: "Loại sơn này khô rất nhanh.",
    },
    {
      english: "Do you have hand cream?",
      vietnamese: "Bạn có kem dưỡng tay không?",
    },
  ],
  quiz: {
    question:
      "Bạn muốn hỏi khách có mang theo sơn không, không nói cụ thể chai nào. Chọn câu đúng.",
    choices: [
      { id: "a", text: "Did you bring an polish?" },
      { id: "b", text: "Did you bring a polish?" },
      { id: "c", text: "Did you bring polish?" },
    ],
    correctAnswer: "c",
    explanation:
      "\"Polish\" là danh từ không đếm được, nên không dùng \"a\" hay \"an\" — chỉ cần nói \"polish\".",
  },
  speakingPractice: {
    targetEnglish: "Can you bring me more cotton?",
    vietnameseHint: "Bạn mang thêm bông gòn cho tôi được không?",
  },
};
