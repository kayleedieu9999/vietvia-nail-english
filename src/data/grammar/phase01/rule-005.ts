import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_005: GrammarRuleLesson = {
  id: "rule-005",
  ruleNumber: 5,
  phaseNumber: 1,
  title: "Nhiều người, nhiều thứ — không thêm -s",
  whenToUse:
    "Khi nói về nhiều người hoặc nhiều thứ, ví dụ 'những khách hàng', 'những cái móng', 'những màu sơn', động từ luôn giữ nguyên, không thêm -s. Chỉ khi nói về một người hoặc một thứ duy nhất mới cần thêm -s. Nhớ đếm xem mình đang nói về một hay nhiều để chọn đúng.",
  pattern: "Nhiều người/nhiều thứ + V (giữ nguyên, không thêm -s)",
  nailSalonExample: {
    english: "These customers wait for their turn.",
    vietnamese: "Những khách này đang chờ tới lượt.",
  },
  moreExamples: [
    {
      english: "Her nails look very shiny today.",
      vietnamese: "Móng tay của cô ấy trông rất bóng hôm nay.",
    },
    {
      english: "The new colors arrive every month.",
      vietnamese: "Những màu mới về mỗi tháng.",
    },
    {
      english: "Our tools stay clean all day.",
      vietnamese: "Dụng cụ của chúng tôi luôn sạch cả ngày.",
    },
  ],
  quiz: {
    question: "Bạn muốn nói nhiều khách đang chờ ở ngoài. Bạn nói sao?",
    choices: [
      { id: "a", text: "The customers wait outside." },
      { id: "b", text: "The customers waits outside." },
      { id: "c", text: "The customer wait outside." },
    ],
    correctAnswer: "a",
    explanation:
      "'The customers' là nhiều người nên động từ giữ nguyên 'wait', không thêm -s như khi nói một khách 'the customer'.",
  },
  speakingPractice: {
    targetEnglish: "The nails dry very fast under this lamp.",
    vietnameseHint: "Móng khô rất nhanh dưới đèn này.",
  },
};
