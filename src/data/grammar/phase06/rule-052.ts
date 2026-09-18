import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_052: GrammarRuleLesson = {
  id: "rule-052",
  ruleNumber: 52,
  phaseNumber: 6,
  title: "Tính từ đứng sau 'to be'",
  whenToUse:
    "Khi bạn muốn khen khách hoặc nói tình trạng của một thứ gì đó, hãy dùng am/is/are rồi thêm từ tả đặc điểm ngay sau. Cách này rất hay dùng để khen móng, khen da của khách.",
  pattern: "Chủ ngữ + am/is/are + tính từ",
  nailSalonExample: {
    english: "Your nails are beautiful.",
    vietnamese: "Móng của chị đẹp lắm.",
  },
  moreExamples: [
    { english: "The color is bright.", vietnamese: "Màu này tươi sáng." },
    { english: "This lotion is soft.", vietnamese: "Loại kem dưỡng này mềm mịn." },
    { english: "My hands are tired.", vietnamese: "Tay tôi mỏi." },
  ],
  quiz: {
    question: "Bạn muốn khen khách 'Da của chị mịn màng', chọn câu đúng:",
    choices: [
      { id: "a", text: "Your skin smooth is." },
      { id: "b", text: "Your skin is smooth." },
      { id: "c", text: "You skin is smooth." },
    ],
    correctAnswer: "b",
    explanation:
      "Từ tả đặc điểm (smooth) đứng sau is, và chủ ngữ phải là 'Your' (của bạn) chứ không phải 'You' (bạn).",
  },
  speakingPractice: {
    targetEnglish: "Your skin is smooth.",
    vietnameseHint: "Khen làn da mịn màng của khách.",
  },
};
