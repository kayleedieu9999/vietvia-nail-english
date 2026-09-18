import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_037: GrammarRuleLesson = {
  id: "rule-037",
  ruleNumber: 37,
  phaseNumber: 4,
  title: "Hẹn làm sau — I'll / I will",
  whenToUse:
    "Khi chị hứa hoặc báo cho khách biết mình SẼ làm gì đó sau này — điều chị vừa quyết định ngay lúc nói chuyện — dùng “I will” (viết tắt “I'll”) + động từ.",
  pattern: "Subject + will (Subject'll) + V",
  nailSalonExample: {
    english: "I'll call you when it's ready.",
    vietnamese: "Tôi sẽ gọi cho chị khi xong.",
  },
  moreExamples: [
    {
      english: "I will start your other hand now.",
      vietnamese: "Tôi sẽ bắt đầu làm tay còn lại của chị.",
    },
    {
      english: "She'll be right with you.",
      vietnamese: "Cô ấy sẽ đến với chị ngay.",
    },
    {
      english: "We'll text you before your appointment.",
      vietnamese: "Chúng tôi sẽ nhắn tin cho chị trước giờ hẹn.",
    },
  ],
  quiz: {
    question:
      "Khách hỏi khi nào tiệm sẽ gọi báo khi màu mới về hàng. Chị muốn hứa sẽ gọi khi có hàng.",
    choices: [
      { id: "a", text: "I call you when it comes in." },
      { id: "b", text: "I'll call you when it comes in." },
      { id: "c", text: "I called you when it comes in." },
    ],
    correctAnswer: "b",
    explanation:
      "Đây là lời hứa vừa quyết định ngay lúc nói, dùng “I'll” + V: I'll call you when it comes in.",
  },
  speakingPractice: {
    targetEnglish: "I'll finish your nails in ten minutes.",
    vietnameseHint: "Hãy nói: Tôi sẽ làm xong móng cho chị trong mười phút nữa.",
  },
};
