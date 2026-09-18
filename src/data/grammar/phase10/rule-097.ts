import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_097: GrammarRuleLesson = {
  id: "rule-097",
  ruleNumber: 97,
  phaseNumber: 10,
  title: "How would you like to pay? — Nói về thanh toán",
  whenToUse:
    "Cuối buổi làm móng, hỏi khách muốn trả bằng gì và cho khách biết tiệm nhận loại thanh toán nào là bước không thể thiếu, giúp buổi làm móng kết thúc suôn sẻ.",
  pattern: "How would you like to pay? / We take card and cash.",
  nailSalonExample: {
    english: "You: How would you like to pay today? Customer: Card, please. You: Sure, we take card and cash.",
    vietnamese: "Bạn: Hôm nay chị muốn trả bằng gì ạ? Khách: Thẻ nhé. Bạn: Dạ được, tiệm nhận cả thẻ và tiền mặt.",
  },
  moreExamples: [
    {
      english: "You: Would you like to pay by card or cash? Customer: Cash. You: Great, thank you!",
      vietnamese: "Bạn: Chị muốn trả bằng thẻ hay tiền mặt? Khách: Tiền mặt. Bạn: Dạ, cảm ơn chị!",
    },
    {
      english: "Customer: Do you take Apple Pay? You: Yes, we take Apple Pay too.",
      vietnamese: "Khách: Tiệm nhận Apple Pay không? Bạn: Dạ có, tiệm nhận cả Apple Pay ạ.",
    },
    {
      english: "You: Your total is fifty dollars. How would you like to pay? Customer: Card, please.",
      vietnamese: "Bạn: Tổng cộng là năm mươi đô. Chị muốn trả bằng gì? Khách: Thẻ nhé.",
    },
  ],
  quiz: {
    question: "Bạn muốn hỏi khách cách thanh toán một cách lịch sự và tự nhiên nhất:",
    choices: [
      { id: "a", text: "Pay now." },
      { id: "b", text: "How would you like to pay?" },
      { id: "c", text: "Give me money." },
    ],
    correctAnswer: "b",
    explanation:
      "\"How would you like to pay?\" là câu lịch sự, chuyên nghiệp mà tiệm nào cũng dùng. Câu (a) và (c) nghe cộc và thiếu lịch sự với khách.",
  },
  speakingPractice: {
    targetEnglish: "How would you like to pay today?",
    vietnameseHint: "Tập nói câu này với giọng nhẹ nhàng, mỉm cười khi tính tiền cho khách.",
  },
};
