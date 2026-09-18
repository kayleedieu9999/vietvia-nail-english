import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_009: GrammarRuleLesson = {
  id: "rule-009",
  ruleNumber: 9,
  phaseNumber: 1,
  title: "DON'T / DOESN'T — nói 'không làm gì'",
  whenToUse:
    "Khi muốn nói 'không' làm gì, mình thêm 'don't' hoặc 'doesn't' trước động từ. Nói về một người như 'she', 'he', hay một nơi như 'the salon' thì dùng 'doesn't'. Nói về mình, về bạn, hay nhiều người thì dùng 'don't'. Sau 'don't' hay 'doesn't', động từ luôn giữ nguyên.",
  pattern: "She/He/It + doesn't + V ... — I/You/We/They + don't + V ...",
  nailSalonExample: {
    english: "She doesn't work on Sundays.",
    vietnamese: "Cô ấy không làm việc vào Chủ nhật.",
  },
  moreExamples: [
    {
      english: "I don't have any appointments this morning.",
      vietnamese: "Tôi không có lịch hẹn nào sáng nay.",
    },
    {
      english: "He doesn't like strong smells in the salon.",
      vietnamese: "Anh ấy không thích mùi nồng trong tiệm.",
    },
    {
      english: "We don't accept cash on weekends.",
      vietnamese: "Chúng tôi không nhận tiền mặt vào cuối tuần.",
    },
  ],
  quiz: {
    question: "Bạn muốn nói tiệm không đóng cửa vào ngày lễ. Bạn nói sao?",
    choices: [
      { id: "a", text: "The salon don't close on holidays." },
      { id: "b", text: "The salon not close on holidays." },
      { id: "c", text: "The salon doesn't close on holidays." },
    ],
    correctAnswer: "c",
    explanation:
      "'The salon' giống như she/he/it nên dùng 'doesn't', không dùng 'don't' hay bỏ trống động từ phụ.",
  },
  speakingPractice: {
    targetEnglish: "She doesn't rush when she paints nail art.",
    vietnameseHint: "Cô ấy không vội khi vẽ nail art.",
  },
};
