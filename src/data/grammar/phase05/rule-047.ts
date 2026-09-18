import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_047: GrammarRuleLesson = {
  id: "rule-047",
  ruleNumber: 47,
  phaseNumber: 5,
  title: "TO và FOR — hướng đi/đưa cho, và mục đích",
  whenToUse:
    "Dùng \"to\" khi nói về hướng đi hoặc đưa cái gì cho ai, như \"go to the back\" hay \"give it to her\". Dùng \"for\" khi nói mục đích, cái gì đó dùng để làm gì hoặc dành cho ai, như \"this is for you\". Nhớ: \"to\" là đi đâu/đưa cho ai, \"for\" là để làm gì/dành cho ai.",
  pattern: "to + nơi đến/người nhận / for + mục đích",
  nailSalonExample: {
    english: "Please go to the back and bring the polish for the gel manicure.",
    vietnamese: "Vui lòng đi ra phía sau và mang sơn dùng cho làm móng gel ra đây.",
  },
  moreExamples: [
    { english: "Can you give this towel to the customer?", vietnamese: "Bạn đưa khăn này cho khách được không?" },
    { english: "This lotion is for dry hands.", vietnamese: "Kem dưỡng này dành cho tay khô." },
    { english: "I need to go to station three.", vietnamese: "Tôi cần đi đến ghế số ba." },
  ],
  quiz: {
    question: "Bạn muốn nói \"Sơn này dành cho móng chân.\" Câu nào đúng?",
    choices: [
      { id: "a", text: "This polish is to toenails." },
      { id: "b", text: "This polish is for toenails." },
      { id: "c", text: "This polish is at toenails." },
    ],
    correctAnswer: "b",
    explanation: "Khi nói mục đích hoặc công dụng của một món đồ, dùng \"for\", không dùng \"to\" hay \"at\".",
  },
  speakingPractice: {
    targetEnglish: "Please take this cream to the front desk, it is for the customer in chair two.",
    vietnameseHint: "Hãy nói: Vui lòng mang kem này ra bàn lễ tân, nó dành cho khách ở ghế số hai.",
  },
};
