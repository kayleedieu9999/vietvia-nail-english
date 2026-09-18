import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_033: GrammarRuleLesson = {
  id: "rule-033",
  ruleNumber: 33,
  phaseNumber: 4,
  title: "Việc vừa xong — finished / already picked",
  whenToUse:
    "Khi một việc đã xong rồi — mới xong hoặc xong từ trước — dùng động từ ở dạng quá khứ (thường thêm “-ed”, một số từ đổi dạng đặc biệt). Có thể thêm “already” (đã) hoặc “just” (vừa mới) để rõ nghĩa hơn.",
  pattern: "Subject + V-ed (hoặc quá khứ đặc biệt) [+ already / just]",
  nailSalonExample: {
    english: "I finished your pedicure.",
    vietnamese: "Tôi làm xong pedicure cho chị rồi.",
  },
  moreExamples: [
    {
      english: "She already picked a color.",
      vietnamese: "Cô ấy đã chọn màu rồi.",
    },
    {
      english: "I already cleaned the table.",
      vietnamese: "Tôi đã lau bàn xong rồi.",
    },
    {
      english: "He just finished his lunch.",
      vietnamese: "Anh ấy vừa ăn trưa xong.",
    },
  ],
  quiz: {
    question:
      "Đồng nghiệp hỏi: “Did she pick a color?” Chị muốn trả lời là cô khách đã chọn màu rồi.",
    choices: [
      { id: "a", text: "She picks a color." },
      { id: "b", text: "She already picked a color." },
      { id: "c", text: "She is picking a color." },
    ],
    correctAnswer: "b",
    explanation:
      "Việc đã xong rồi, dùng động từ quá khứ cùng “already”: She already picked a color.",
  },
  speakingPractice: {
    targetEnglish: "I already washed your hands.",
    vietnameseHint: "Hãy nói: Tôi đã rửa tay cho chị rồi.",
  },
};
