import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_067: GrammarRuleLesson = {
  id: "rule-067",
  ruleNumber: 67,
  phaseNumber: 7,
  title: "Can/Could I get you...? — Mời khách một thứ gì đó",
  whenToUse:
    "Dùng \"Can I get you...?\" hoặc \"Could I get you...?\" khi bạn muốn mời khách nước uống, khăn, hay bất cứ thứ gì để khách thoải mái hơn trong lúc chờ. \"Could\" nghe lịch sự hơn một chút so với \"Can\", nhưng cả hai đều dùng được với khách.",
  pattern: "Can/Could I get you + danh từ...?",
  nailSalonExample: {
    english: "Can I get you some water?",
    vietnamese: "Tôi lấy nước cho chị được không ạ?",
  },
  moreExamples: [
    {
      english: "Could I get you some coffee or tea?",
      vietnamese: "Tôi lấy cà phê hay trà cho chị được không ạ?",
    },
    {
      english: "Can I get you a magazine while you wait?",
      vietnamese: "Tôi lấy tạp chí cho chị đọc trong lúc chờ được không ạ?",
    },
    {
      english: "Could I get you a warm towel?",
      vietnamese: "Tôi lấy khăn ấm cho chị được không ạ?",
    },
  ],
  quiz: {
    question:
      "Khách đang ngồi chờ khá lâu, bạn muốn mời khách một chai nước. Câu nào phù hợp nhất?",
    choices: [
      { id: "a", text: "Here, water." },
      { id: "b", text: "Can I get you some water?" },
      { id: "c", text: "Drink water while waiting." },
    ],
    correctAnswer: "b",
    explanation:
      "\"Can I get you some water?\" là cách mời lịch sự và tự nhiên. Các câu còn lại quá cộc lốc, thiếu lịch sự khi phục vụ khách.",
  },
  speakingPractice: {
    targetEnglish: "Can I get you some water while you wait?",
    vietnameseHint: "Tôi lấy nước cho chị uống trong lúc chờ được không ạ?",
  },
};
