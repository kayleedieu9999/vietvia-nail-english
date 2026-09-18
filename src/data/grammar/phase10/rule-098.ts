import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_098: GrammarRuleLesson = {
  id: "rule-098",
  ruleNumber: 98,
  phaseNumber: 10,
  title: "Can you come next Tuesday? — Đặt lịch hẹn",
  whenToUse:
    "Khi khách muốn đặt lịch cho lần sau, mình cần hỏi và xác nhận ngày giờ thật rõ ràng để không bị nhầm lẫn, tránh khách đến sai giờ hoặc sai ngày.",
  pattern: "Can you come + [ngày] at + [giờ]? / See you on + [ngày]!",
  nailSalonExample: {
    english: "You: Can you come next Tuesday at two? Customer: Yes, that works. You: Great, see you then!",
    vietnamese: "Bạn: Thứ Ba tuần sau lúc hai giờ chị đến được không? Khách: Được đó. Bạn: Dạ, hẹn gặp chị nhé!",
  },
  moreExamples: [
    {
      english: "Customer: Can I book for next week? You: Sure, what day works for you?",
      vietnamese: "Khách: Tôi đặt lịch tuần sau được không? Bạn: Dạ được, chị rảnh ngày nào ạ?",
    },
    {
      english: "You: How about Friday at eleven? Customer: That's perfect.",
      vietnamese: "Bạn: Thứ Sáu lúc mười một giờ được không ạ? Khách: Vậy được rồi.",
    },
    {
      english: "You: See you next Tuesday at two. Thank you! Customer: Thank you, see you then!",
      vietnamese: "Bạn: Hẹn gặp chị thứ Ba tuần sau lúc hai giờ nhé. Cảm ơn chị! Khách: Cảm ơn, hẹn gặp lại!",
    },
  ],
  quiz: {
    question: "Bạn muốn hỏi khách xem thứ Ba tuần sau, lúc hai giờ có tiện không:",
    choices: [
      { id: "a", text: "You come Tuesday two o'clock." },
      { id: "b", text: "Can you come next Tuesday at two?" },
      { id: "c", text: "Next Tuesday, okay?" },
    ],
    correctAnswer: "b",
    explanation:
      "\"Can you come next Tuesday at two?\" là câu hỏi đầy đủ và lịch sự để đặt lịch hẹn. Câu (a) thiếu từ và nghe không tự nhiên.",
  },
  speakingPractice: {
    targetEnglish: "Can you come next Tuesday at two?",
    vietnameseHint: "Tập hỏi khách đặt lịch hẹn với ngày và giờ cụ thể.",
  },
};
