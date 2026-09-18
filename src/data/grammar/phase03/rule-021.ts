import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_021: GrammarRuleLesson = {
  id: "rule-021",
  ruleNumber: 21,
  phaseNumber: 3,
  title: "Một cái hay nhiều cái? Thêm “-s” khi có từ 2 trở lên",
  whenToUse:
    "Khi nói về đồ vật hay người, tiếng Anh phân biệt rõ 1 cái và nhiều cái. Chỉ cần thêm “-s” vào cuối từ khi có từ 2 trở lên. Nếu quên thêm “-s”, khách vẫn hiểu, nhưng nghe không chuẩn.",
  pattern: "1 cái = từ gốc  |  2 cái trở lên = từ gốc + s",
  nailSalonExample: {
    english: "I have two customers waiting.",
    vietnamese: "Tôi có hai khách đang chờ.",
  },
  moreExamples: [
    {
      english: "Your nails look great today.",
      vietnamese: "Móng tay của chị hôm nay đẹp lắm.",
    },
    {
      english: "We have three colors left.",
      vietnamese: "Chúng tôi còn ba màu.",
    },
    {
      english: "She has two appointments this afternoon.",
      vietnamese: "Cô ấy có hai cuộc hẹn chiều nay.",
    },
  ],
  quiz: {
    question: "Khách nói chị có 3 con gái. Chị muốn nói lại: “She has three ___.”",
    choices: [
      { id: "a", text: "daughter" },
      { id: "b", text: "daughters" },
      { id: "c", text: "a daughter" },
    ],
    correctAnswer: "b",
    explanation:
      "Có số “three” (ba) đứng trước, tức là từ 2 trở lên, nên phải thêm “-s”: daughters.",
  },
  speakingPractice: {
    targetEnglish: "I have four customers today.",
    vietnameseHint: "Hãy nói: Hôm nay tôi có bốn khách.",
  },
};
