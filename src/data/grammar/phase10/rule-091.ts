import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_091: GrammarRuleLesson = {
  id: "rule-091",
  ruleNumber: 91,
  phaseNumber: 10,
  title: "Sorry, could you say that again? — Xin khách nói lại",
  whenToUse:
    "Đôi khi khách nói nhanh hoặc nói nhỏ, mình chưa nghe kịp hết câu. Đừng đoán bừa hay gật đầu cho qua — hỏi lại một cách lịch sự là chuyện rất bình thường, kể cả người Mỹ cũng làm vậy hoài.",
  pattern: "Sorry, could you say that again? / Sorry, one more time, please?",
  nailSalonExample: {
    english: "Customer: Can you make the tips a little more square, not round? You: Sorry, could you say that again?",
    vietnamese: "Khách: Chị làm đầu móng vuông hơn chút, đừng tròn nha. Bạn: Xin lỗi, chị nói lại được không?",
  },
  moreExamples: [
    {
      english: "Customer: I want a gel manicure with an ombre design. You: Sorry, one more time, please?",
      vietnamese: "Khách: Tôi muốn làm gel với kiểu ombre. Bạn: Xin lỗi, chị nói lại lần nữa được không?",
    },
    {
      english: "Customer: Do you have this color in a lighter shade? You: Sorry, could you repeat that?",
      vietnamese: "Khách: Có màu này tone nhạt hơn không? Bạn: Xin lỗi, chị lặp lại giúp em được không?",
    },
    {
      english: "Customer: My appointment was for two thirty. You: I'm sorry, could you say that again?",
      vietnamese: "Khách: Lịch hẹn của tôi là hai giờ rưỡi. Bạn: Xin lỗi, chị nói lại được không ạ?",
    },
  ],
  quiz: {
    question: "Khách nói nhanh quá, bạn nghe không kịp. Bạn nên nói gì để hỏi lại một cách lịch sự?",
    choices: [
      { id: "a", text: "What?" },
      { id: "b", text: "Sorry, could you say that again?" },
      { id: "c", text: "I don't understand you." },
    ],
    correctAnswer: "b",
    explanation:
      "\"Sorry, could you say that again?\" lịch sự và tự nhiên, khách sẽ vui vẻ nói lại. \"What?\" nghe hơi cộc, còn \"I don't understand you\" nghe hơi nặng nề với khách.",
  },
  speakingPractice: {
    targetEnglish: "Sorry, could you say that again?",
    vietnameseHint: "Tập nói câu này thật nhẹ nhàng, kèm nụ cười khi hỏi khách nói lại.",
  },
};
