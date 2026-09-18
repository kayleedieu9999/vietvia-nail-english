import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_015: GrammarRuleLesson = {
  id: "rule-015",
  ruleNumber: 15,
  phaseNumber: 2,
  title: "Không Cần A/An/The Khi Nói Chung Chung",
  whenToUse:
    "Khi nói chung chung về một nhóm (không phải một người hay một cái cụ thể), đặc biệt là danh từ số nhiều, thì KHÔNG cần \"a\", \"an\", hay \"the\" gì cả. Cứ nói thẳng danh từ đó.",
  pattern: "(không a/an/the) + danh từ số nhiều/chung chung",
  nailSalonExample: {
    english: "Customers like gel nails in the summer.",
    vietnamese: "Khách hàng thích làm móng gel vào mùa hè.",
  },
  moreExamples: [
    {
      english: "Nails grow faster in summer.",
      vietnamese: "Móng mọc nhanh hơn vào mùa hè.",
    },
    {
      english: "Gloves protect your hands from chemicals.",
      vietnamese: "Găng tay bảo vệ tay bạn khỏi hóa chất.",
    },
    {
      english: "Nail techs work long hours.",
      vietnamese: "Thợ nail làm việc nhiều giờ.",
    },
  ],
  quiz: {
    question:
      "Bạn muốn nói chung chung: \"Khách hàng thích màu pastel.\" Chọn câu đúng.",
    choices: [
      { id: "a", text: "The customers like pastel colors." },
      { id: "b", text: "Customers like pastel colors." },
      { id: "c", text: "A customers like pastel colors." },
    ],
    correctAnswer: "b",
    explanation:
      "Đây là câu nói chung chung về khách hàng nói chung (không phải một nhóm khách cụ thể), nên không cần \"the\" hay \"a\".",
  },
  speakingPractice: {
    targetEnglish: "Acrylic nails last longer than gel.",
    vietnameseHint: "Móng bột acrylic bền hơn móng gel.",
  },
};
