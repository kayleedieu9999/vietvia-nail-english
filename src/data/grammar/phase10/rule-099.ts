import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_099: GrammarRuleLesson = {
  id: "rule-099",
  ruleNumber: 99,
  phaseNumber: 10,
  title: "Từ chào hỏi đến tạm biệt — Ôn lại cả cuộc trò chuyện",
  whenToUse:
    "Đây là lúc ráp lại tất cả những gì đã học: chào khách, hỏi khách muốn làm gì, xác nhận lại, xử lý khen hoặc phàn nàn, tính tiền, rồi tạm biệt. Một cuộc trò chuyện thật ở tiệm thường đi qua đủ các bước này.",
  pattern: "Hi, welcome in! → ... → Thank you, have a great day!",
  nailSalonExample: {
    english: "You: Hi, welcome in! How can I help you today? Customer: I'd like a gel manicure. You: Sure! Please have a seat.",
    vietnamese: "Bạn: Chào chị, mời vào! Hôm nay em giúp gì được cho chị? Khách: Tôi muốn làm gel. Bạn: Dạ được! Mời chị ngồi.",
  },
  moreExamples: [
    {
      english: "You: So you want gel, short and round, right? Customer: Yes, exactly. You: Great, I'll get started.",
      vietnamese: "Bạn: Vậy là chị muốn làm gel, ngắn và tròn, đúng không ạ? Khách: Đúng rồi. Bạn: Dạ, em bắt đầu làm nhé.",
    },
    {
      english: "Customer: This looks amazing, thank you! You: Thank you so much! I'm glad you like it.",
      vietnamese: "Khách: Đẹp quá, cảm ơn nhé! Bạn: Cảm ơn chị nhiều! Em rất vui vì chị thích.",
    },
    {
      english: "You: How would you like to pay? Customer: Card, please. You: Thank you! Have a great day!",
      vietnamese: "Bạn: Chị muốn trả bằng gì ạ? Khách: Thẻ nhé. Bạn: Cảm ơn chị! Chúc chị một ngày tốt lành!",
    },
  ],
  quiz: {
    question: "Sắp xếp thứ tự tự nhiên nhất của một cuộc trò chuyện ở tiệm:",
    choices: [
      { id: "a", text: "Have a great day! → Hi, welcome in! → How would you like to pay?" },
      { id: "b", text: "Hi, welcome in! → How can I help you today? → Have a great day!" },
      { id: "c", text: "How would you like to pay? → Hi, welcome in! → Have a great day!" },
    ],
    correctAnswer: "b",
    explanation:
      "Một cuộc trò chuyện tự nhiên luôn bắt đầu bằng lời chào, rồi đến phần làm móng và trao đổi, và kết thúc bằng lời tạm biệt.",
  },
  speakingPractice: {
    targetEnglish: "Hi, welcome in! How can I help you today?",
    vietnameseHint: "Tập nói trọn một đoạn hội thoại, từ câu chào đầu tiên đến câu tạm biệt cuối cùng.",
  },
};
