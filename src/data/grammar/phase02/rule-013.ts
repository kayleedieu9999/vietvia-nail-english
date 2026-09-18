import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_013: GrammarRuleLesson = {
  id: "rule-013",
  ruleNumber: 13,
  phaseNumber: 2,
  title: "The — Nói Về Thứ Cả Hai Người Đều Biết",
  whenToUse:
    "Dùng \"the\" khi bạn và người nghe đều biết chính xác đang nói về cái nào — ví dụ khách hàng vừa mới rời đi, hoặc màu sơn mà cô ấy vừa chọn lúc nãy. Không cần giải thích thêm vì cả hai đã cùng biết.",
  pattern: "the + danh từ (cái mà cả hai đều biết là cái nào)",
  nailSalonExample: {
    english: "The customer who just left forgot her scarf.",
    vietnamese: "Vị khách vừa mới rời đi đã bỏ quên khăn choàng.",
  },
  moreExamples: [
    {
      english: "The color she picked is very popular.",
      vietnamese: "Màu cô ấy chọn rất được ưa chuộng.",
    },
    {
      english: "Please clean the table before the next customer.",
      vietnamese: "Làm ơn lau bàn trước khi khách tiếp theo đến.",
    },
    {
      english: "The polish on table 3 is almost empty.",
      vietnamese: "Sơn ở bàn số 3 sắp hết.",
    },
  ],
  quiz: {
    question:
      "Khách hàng hỏi về chiếc ghế cô ấy đã ngồi lúc nãy. Bạn chỉ và nói thế nào?",
    choices: [
      { id: "a", text: "Sit in a chair." },
      { id: "b", text: "Sit in an chair." },
      { id: "c", text: "Sit in the chair." },
    ],
    correctAnswer: "c",
    explanation:
      "Cả hai đều biết rõ là chiếc ghế cô ấy đã ngồi lúc nãy (không phải ghế bất kỳ), nên dùng \"the\".",
  },
  speakingPractice: {
    targetEnglish: "The color on your nails is beautiful.",
    vietnameseHint: "Màu sơn trên móng của chị rất đẹp.",
  },
};
