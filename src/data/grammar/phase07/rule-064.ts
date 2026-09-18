import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_064: GrammarRuleLesson = {
  id: "rule-064",
  ruleNumber: 64,
  phaseNumber: 7,
  title: "Would you like...? — Mời khách chọn lựa chọn nhẹ nhàng",
  whenToUse:
    "Dùng \"Would you like...?\" khi bạn muốn mời khách chọn giữa hai hay nhiều thứ, hoặc mời khách thêm một dịch vụ. Đây là cách mời rất lịch sự, làm khách cảm thấy được hỏi ý kiến chứ không bị áp đặt.",
  pattern: "Would you like + danh từ / to + động từ...?",
  nailSalonExample: {
    english: "Would you like gel or regular polish?",
    vietnamese: "Chị muốn sơn gel hay sơn thường ạ?",
  },
  moreExamples: [
    {
      english: "Would you like a massage with your pedicure?",
      vietnamese: "Chị muốn thêm massage khi làm chân không ạ?",
    },
    {
      english: "Would you like a shorter length this time?",
      vietnamese: "Lần này chị muốn để móng ngắn hơn không ạ?",
    },
    {
      english: "Would you like to see the color chart?",
      vietnamese: "Chị muốn xem bảng màu không ạ?",
    },
  ],
  quiz: {
    question:
      "Bạn muốn hỏi khách xem họ thích sơn gel hay sơn thường. Câu nào đúng và lịch sự nhất?",
    choices: [
      { id: "a", text: "You want gel or regular?" },
      { id: "b", text: "Would you like gel or regular polish?" },
      { id: "c", text: "Choose gel or regular now." },
    ],
    correctAnswer: "b",
    explanation:
      "\"Would you like...?\" là cách mời khách chọn rất lịch sự. \"Choose gel or regular now\" nghe như ra lệnh, không phù hợp khi nói với khách hàng.",
  },
  speakingPractice: {
    targetEnglish: "Would you like gel or regular polish today?",
    vietnameseHint: "Hôm nay chị muốn sơn gel hay sơn thường ạ?",
  },
};
