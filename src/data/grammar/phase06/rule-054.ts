import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_054: GrammarRuleLesson = {
  id: "rule-054",
  ruleNumber: 54,
  phaseNumber: 6,
  title: "So sánh nhất — gợi ý lựa chọn tốt nhất",
  whenToUse:
    "Khi bạn muốn giới thiệu màu hoặc mẫu được yêu thích nhất trong tiệm, hoặc dịch vụ tốt nhất cho khách, hãy dùng câu so sánh nhất. Luôn có chữ 'the' phía trước.",
  pattern: "the + tính từ + est  /  the most + tính từ",
  nailSalonExample: {
    english: "This is the most popular color.",
    vietnamese: "Đây là màu được yêu thích nhất.",
  },
  moreExamples: [
    { english: "She has the longest nails in the shop.", vietnamese: "Cô ấy có móng dài nhất tiệm." },
    { english: "This is the best design for you.", vietnamese: "Đây là mẫu đẹp nhất dành cho chị." },
    { english: "Gel polish is the most durable.", vietnamese: "Sơn gel bền nhất." },
  ],
  quiz: {
    question: "Khách hỏi màu nào rẻ nhất trong tiệm, chọn câu đúng:",
    choices: [
      { id: "a", text: "This color is cheaper." },
      { id: "b", text: "This color is the cheapest." },
      { id: "c", text: "This color is more cheap." },
    ],
    correctAnswer: "b",
    explanation:
      "Khi so sánh một thứ với tất cả các thứ khác (nhất trong tiệm), dùng 'the' + tính từ + 'est', không dùng 'more cheap'.",
  },
  speakingPractice: {
    targetEnglish: "This is the most popular shape this year.",
    vietnameseHint: "Giới thiệu kiểu móng được ưa chuộng nhất năm nay.",
  },
};
