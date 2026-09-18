import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_089: GrammarRuleLesson = {
  id: "rule-089",
  ruleNumber: 89,
  phaseNumber: 9,
  title: "Cảm ơn khách và mời khách quay lại",
  whenToUse:
    "Khi khách chuẩn bị ra về, nói lời cảm ơn ngắn gọn và mời khách quay lại lần sau. Đây là câu cuối cùng khách nghe được, nên nói vui vẻ và chân thành để khách nhớ và muốn trở lại.",
  pattern: "Thank you! See you next time!",
  nailSalonExample: {
    english: "Thank you so much! See you next time!",
    vietnamese: "Cảm ơn chị nhiều lắm! Hẹn gặp lại chị lần sau nha!",
  },
  moreExamples: [
    {
      english: "Thank you for coming in today. Have a great day!",
      vietnamese: "Cảm ơn chị hôm nay đã ghé qua. Chúc chị một ngày vui vẻ!",
    },
    {
      english: "Take care! See you in two weeks!",
      vietnamese: "Chị giữ gìn sức khỏe nha! Hẹn gặp lại chị hai tuần nữa!",
    },
    {
      english: "Thanks again! Come back soon!",
      vietnamese: "Cảm ơn chị lần nữa! Quay lại sớm nha!",
    },
  ],
  quiz: {
    question: "Khách vừa trả tiền và chuẩn bị ra về. Câu nào tự nhiên để cảm ơn và mời khách quay lại?",
    choices: [
      { id: "a", text: "Your patronage is appreciated. Farewell." },
      { id: "b", text: "Thank you! See you next time!" },
      { id: "c", text: "The transaction is complete." },
    ],
    correctAnswer: "b",
    explanation:
      "\"Thank you! See you next time!\" là câu chào tạm biệt ấm áp, tự nhiên. Câu (a) và (c) nghe rất trang trọng và xa cách, không hợp với không khí thân thiện của tiệm nail.",
  },
  speakingPractice: {
    targetEnglish: "Thank you! See you next time!",
    vietnameseHint: "Tập nói câu chào tạm biệt này với nụ cười, để khách cảm thấy được chào đón quay lại.",
  },
};
