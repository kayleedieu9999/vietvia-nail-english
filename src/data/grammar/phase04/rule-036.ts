import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_036: GrammarRuleLesson = {
  id: "rule-036",
  ruleNumber: 36,
  phaseNumber: 4,
  title: "Chuyện hôm qua, tuần trước — came, picked, paid, called",
  whenToUse:
    "Khi kể lại chuyện đã xảy ra hôm qua, tuần trước, hay lúc nào đó đã qua rồi, dùng động từ ở dạng quá khứ. Một số động từ quen thuộc trong tiệm nail đổi dạng đặc biệt, không thêm “-ed” (come → came).",
  pattern: "Subject + V-ed (quy tắc) / quá khứ đặc biệt (came, paid...) + yesterday/last week...",
  nailSalonExample: {
    english: "She came in yesterday.",
    vietnamese: "Cô ấy đã đến tiệm hôm qua.",
  },
  moreExamples: [
    {
      english: "He paid in cash last time.",
      vietnamese: "Anh ấy đã trả tiền mặt lần trước.",
    },
    {
      english: "I called her this morning.",
      vietnamese: "Tôi đã gọi cho cô ấy sáng nay.",
    },
    {
      english: "They picked their colors last week.",
      vietnamese: "Họ đã chọn màu tuần trước.",
    },
  ],
  quiz: {
    question:
      "Đồng nghiệp hỏi bạn của khách có đến tiệm không. Chị muốn trả lời: có, cô ấy đến hôm qua.",
    choices: [
      { id: "a", text: "She comes yesterday." },
      { id: "b", text: "She came yesterday." },
      { id: "c", text: "She is coming yesterday." },
    ],
    correctAnswer: "b",
    explanation:
      "“Yesterday” là chuyện đã qua, động từ “come” đổi thành quá khứ đặc biệt “came”: She came yesterday.",
  },
  speakingPractice: {
    targetEnglish: "I called you yesterday, but no one answered.",
    vietnameseHint: "Hãy nói: Hôm qua tôi đã gọi cho chị, nhưng không ai bắt máy.",
  },
};
