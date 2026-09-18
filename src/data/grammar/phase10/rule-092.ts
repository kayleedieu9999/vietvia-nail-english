import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_092: GrammarRuleLesson = {
  id: "rule-092",
  ruleNumber: 92,
  phaseNumber: 10,
  title: "So you want... right? — Xác nhận lại trước khi làm",
  whenToUse:
    "Trước khi bắt đầu làm móng, xác nhận lại điều khách vừa nói giúp tránh làm sai và khách thấy mình lắng nghe kỹ. Chỉ cần lặp lại ý chính của khách và thêm chữ \"right?\" ở cuối câu.",
  pattern: "So you want it + [tính từ/mô tả], right?",
  nailSalonExample: {
    english: "Customer: I want them short and round. You: So you want it short and round, right?",
    vietnamese: "Khách: Tôi muốn làm ngắn và tròn. Bạn: Vậy là chị muốn ngắn và tròn, đúng không ạ?",
  },
  moreExamples: [
    {
      english: "Customer: Let's do a bright red today. You: So you want bright red, right?",
      vietnamese: "Khách: Hôm nay làm màu đỏ tươi đi. Bạn: Vậy là chị muốn màu đỏ tươi, đúng không ạ?",
    },
    {
      english: "Customer: Just a regular polish, no gel. You: So you want regular polish, not gel, right?",
      vietnamese: "Khách: Chỉ sơn thường thôi, không cần gel. Bạn: Vậy là chị muốn sơn thường, không gel, đúng không ạ?",
    },
    {
      english: "Customer: Can you add a little glitter on the ring finger? You: So you want glitter on the ring finger, right?",
      vietnamese: "Khách: Thêm chút kim tuyến ở ngón áp út được không? Bạn: Vậy là chị muốn kim tuyến ở ngón áp út, đúng không ạ?",
    },
  ],
  quiz: {
    question: "Khách nói: \"I'd like almond shape, medium length.\" Bạn muốn xác nhận lại trước khi bắt đầu làm:",
    choices: [
      { id: "a", text: "Okay, I start now." },
      { id: "b", text: "So you want almond shape, medium length, right?" },
      { id: "c", text: "You said almond shape." },
    ],
    correctAnswer: "b",
    explanation:
      "Thêm \"right?\" ở cuối câu là cách xác nhận tự nhiên và lịch sự nhất, giúp khách có cơ hội sửa lại ngay nếu mình nghe chưa đúng.",
  },
  speakingPractice: {
    targetEnglish: "So you want it short and round, right?",
    vietnameseHint: "Tập xác nhận lại yêu cầu của khách trước khi bắt tay vào làm.",
  },
};
