import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_087: GrammarRuleLesson = {
  id: "rule-087",
  ruleNumber: 87,
  phaseNumber: 9,
  title: "Nói \"sắp xong rồi\" một cách tự nhiên",
  whenToUse:
    "Khi công việc gần hoàn tất, nói cho khách biết bằng một câu ngắn, vui vẻ. Câu này giúp khách biết mình sắp xong mà không cần hỏi, và tạo cảm giác thoải mái trong lúc chờ.",
  pattern: "Almost there! / We're almost finished.",
  nailSalonExample: {
    english: "Almost there! Just the top coat left.",
    vietnamese: "Sắp xong rồi! Còn lớp bóng nữa thôi.",
  },
  moreExamples: [
    {
      english: "We're almost finished with your left hand.",
      vietnamese: "Tụi em sắp làm xong tay trái của chị rồi.",
    },
    {
      english: "Almost there! Let's just clean up the edges.",
      vietnamese: "Sắp xong rồi! Chỉ cần chỉnh lại viền một chút.",
    },
    {
      english: "We're almost finished, just a few more minutes.",
      vietnamese: "Sắp xong rồi, chỉ còn vài phút nữa thôi.",
    },
  ],
  quiz: {
    question: "Bạn đang làm lớp sơn bóng cuối cùng cho khách. Câu nào tự nhiên để báo là sắp xong?",
    choices: [
      { id: "a", text: "The procedure is nearing completion." },
      { id: "b", text: "Almost there!" },
      { id: "c", text: "This task is almost finalized." },
    ],
    correctAnswer: "b",
    explanation:
      "\"Almost there!\" là câu ngắn, vui vẻ, tự nhiên mà thợ nail hay nói với khách. Câu (a) và (c) nghe như báo cáo công việc, quá trang trọng.",
  },
  speakingPractice: {
    targetEnglish: "Almost there!",
    vietnameseHint: "Tập nói câu này với giọng vui vẻ khi bạn sắp làm xong cho khách.",
  },
};
