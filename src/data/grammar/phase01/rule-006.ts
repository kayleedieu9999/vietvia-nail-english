import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_006: GrammarRuleLesson = {
  id: "rule-006",
  ruleNumber: 6,
  phaseNumber: 1,
  title: "A and B — ghép hai người bằng 'and'",
  whenToUse:
    "Khi ghép hai người hoặc hai thứ lại bằng từ 'and' (và), ví dụ 'cô ấy và tôi', mình coi như đang nói về nhiều người. Vì vậy động từ giữ nguyên, không thêm -s, dù mỗi người trong đó có thể là 'she' hay 'he'.",
  pattern: "A and B + V (giữ nguyên, không thêm -s)",
  nailSalonExample: {
    english: "She and I work at the same salon.",
    vietnamese: "Cô ấy và tôi làm việc cùng một tiệm.",
  },
  moreExamples: [
    {
      english: "My sister and her friend come every month.",
      vietnamese: "Chị tôi và bạn của chị ấy đến mỗi tháng.",
    },
    {
      english: "The color and the design match perfectly.",
      vietnamese: "Màu sắc và kiểu dáng hợp nhau hoàn hảo.",
    },
    {
      english: "He and his coworker share one table.",
      vietnamese: "Anh ấy và đồng nghiệp dùng chung một bàn.",
    },
  ],
  quiz: {
    question: "Bạn muốn nói bạn và đồng nghiệp cùng đóng cửa tiệm tối nay. Bạn nói sao?",
    choices: [
      { id: "a", text: "My coworker and I closes the salon tonight." },
      { id: "b", text: "My coworker and I is closing the salon tonight." },
      { id: "c", text: "My coworker and I close the salon tonight." },
    ],
    correctAnswer: "c",
    explanation:
      "Khi ghép hai người bằng 'and', ta coi như nhiều người nên dùng 'close', không thêm -s và không dùng 'is'.",
  },
  speakingPractice: {
    targetEnglish: "She and her daughter get manicures together.",
    vietnameseHint: "Cô ấy và con gái cùng làm móng tay.",
  },
};
