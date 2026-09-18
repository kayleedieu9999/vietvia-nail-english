import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_056: GrammarRuleLesson = {
  id: "rule-056",
  ruleNumber: 56,
  phaseNumber: 6,
  title: "Trạng từ chỉ tần suất (always, usually, sometimes, never)",
  whenToUse:
    "Khi bạn muốn nói mình thường xuyên làm gì, hoặc khách hay chọn gì, hãy dùng các từ always, usually, sometimes, never. Những từ này đứng trước động từ thường, nhưng đứng sau 'to be'.",
  pattern: "Chủ ngữ + always/usually/sometimes/never + động từ",
  nailSalonExample: {
    english: "I always clean the tools after each customer.",
    vietnamese: "Tôi luôn vệ sinh dụng cụ sau mỗi khách.",
  },
  moreExamples: [
    { english: "She usually chooses pink colors.", vietnamese: "Cô ấy thường chọn màu hồng." },
    { english: "We sometimes close early on Sunday.", vietnamese: "Chúng tôi thỉnh thoảng đóng cửa sớm vào Chủ nhật." },
    { english: "He is never late.", vietnamese: "Anh ấy không bao giờ trễ." },
  ],
  quiz: {
    question: "Bạn muốn nói khách 'không bao giờ' dùng sơn gel, chọn câu đúng:",
    choices: [
      { id: "a", text: "She never uses gel polish." },
      { id: "b", text: "She uses never gel polish." },
      { id: "c", text: "She not never uses gel polish." },
    ],
    correctAnswer: "a",
    explanation:
      "Trạng từ tần suất 'never' đứng trước động từ thường 'uses', không đứng sau động từ.",
  },
  speakingPractice: {
    targetEnglish: "I usually recommend gel for long-lasting color.",
    vietnameseHint: "Nói bạn thường tư vấn sơn gel để giữ màu được lâu.",
  },
};
