import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_004: GrammarRuleLesson = {
  id: "rule-004",
  ruleNumber: 4,
  phaseNumber: 1,
  title: "DO / DOES — đặt câu hỏi",
  whenToUse:
    "Khi muốn hỏi ai đó có làm gì không, mình cần thêm một từ hỏi ở đầu câu. Hỏi về một người như 'she' hay 'he' thì dùng 'does', còn hỏi về mình, về bạn, hay nhiều người thì dùng 'do'. Sau 'does' hay 'do', động từ theo sau luôn giữ nguyên, không thêm -s.",
  pattern: "Does + she/he/it + V...? — Do + I/you/we/they + V...?",
  nailSalonExample: {
    english: "Does she want gel or acrylic?",
    vietnamese: "Cô ấy muốn làm gel hay bột?",
  },
  moreExamples: [
    {
      english: "Do you like this pink color?",
      vietnamese: "Bạn có thích màu hồng này không?",
    },
    {
      english: "Does he need a manicure too?",
      vietnamese: "Anh ấy có cần làm móng tay nữa không?",
    },
    {
      english: "Do they want a pedicure today?",
      vietnamese: "Họ có muốn làm pedicure hôm nay không?",
    },
  ],
  quiz: {
    question: "Bạn muốn hỏi khách có thích vẽ nail art không. Bạn hỏi sao?",
    choices: [
      { id: "a", text: "Does you like nail art?" },
      { id: "b", text: "Do you like nail art?" },
      { id: "c", text: "Do you likes nail art?" },
    ],
    correctAnswer: "b",
    explanation: "Với 'you', ta dùng 'do', và động từ theo sau giữ nguyên, không thêm -s.",
  },
  speakingPractice: {
    targetEnglish: "Does she want short or long nails?",
    vietnameseHint: "Cô ấy muốn móng ngắn hay móng dài?",
  },
};
