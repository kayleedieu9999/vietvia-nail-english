import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_086: GrammarRuleLesson = {
  id: "rule-086",
  ruleNumber: 86,
  phaseNumber: 9,
  title: "Nói thời gian còn lại một cách tự nhiên",
  whenToUse:
    "Khi khách hỏi còn bao lâu nữa xong, hãy đưa ra một con số ước chừng đơn giản, không cần chính xác từng phút. Cách nói này giúp khách yên tâm chờ mà không cảm thấy sốt ruột.",
  pattern: "It'll take about... / Just a few more minutes.",
  nailSalonExample: {
    english: "It'll take about 20 minutes.",
    vietnamese: "Chắc khoảng 20 phút nữa là xong.",
  },
  moreExamples: [
    {
      english: "It'll take about 10 more minutes to dry.",
      vietnamese: "Khoảng 10 phút nữa là khô thôi.",
    },
    {
      english: "Just a few more minutes, and we're done.",
      vietnamese: "Chỉ vài phút nữa là xong rồi.",
    },
    {
      english: "It'll take about an hour for a full set.",
      vietnamese: "Làm bộ móng đầy đủ khoảng một tiếng.",
    },
  ],
  quiz: {
    question: "Khách hỏi: \"How much longer?\" Bạn muốn nói còn khoảng 15 phút nữa:",
    choices: [
      { id: "a", text: "The estimated duration is 15 minutes." },
      { id: "b", text: "It'll take about 15 minutes." },
      { id: "c", text: "Fifteen minutes will be required." },
    ],
    correctAnswer: "b",
    explanation:
      "\"It'll take about 15 minutes\" là cách nói tự nhiên, đơn giản. Câu (a) và (c) nghe như thông báo trang trọng, không giống cách nói chuyện hàng ngày.",
  },
  speakingPractice: {
    targetEnglish: "Just a few more minutes, thank you for waiting.",
    vietnameseHint: "Tập nói câu ước lượng thời gian này thật tự nhiên khi khách hỏi còn bao lâu.",
  },
};
