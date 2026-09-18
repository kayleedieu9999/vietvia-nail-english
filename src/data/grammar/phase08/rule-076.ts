import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_076: GrammarRuleLesson = {
  id: "rule-076",
  ruleNumber: 76,
  phaseNumber: 8,
  title: "MAKE hay DO? Đừng nhầm lẫn",
  whenToUse:
    "❌ 'I do a mistake on her nails.' → ✅ 'I made a mistake on her nails.' — vì 'make' dùng khi tạo ra một kết quả cụ thể (a mistake, an appointment, money), còn 'do' dùng cho công việc chung chung (do the nails, do a good job).",
  pattern: "MAKE + a mistake / an appointment / money | DO + the nails / a good job",
  nailSalonExample: {
    english: "Please make an appointment for next Friday.",
    vietnamese: "Vui lòng đặt lịch hẹn cho thứ Sáu tới.",
  },
  moreExamples: [
    {
      english: "I need to do her nails before two o'clock.",
      vietnamese: "Tôi cần làm móng cho cô ấy trước hai giờ.",
    },
    {
      english: "She made a lot of money last week.",
      vietnamese: "Tuần trước cô ấy kiếm được nhiều tiền.",
    },
    {
      english: "He always does a great job with pedicures.",
      vietnamese: "Anh ấy luôn làm pedicure rất tốt.",
    },
  ],
  quiz: {
    question: "Bạn lỡ tô sai màu cho khách, chọn câu đúng để xin lỗi:",
    choices: [
      { id: "a", text: "Sorry, I did a mistake." },
      { id: "b", text: "Sorry, I made a mistake." },
      { id: "c", text: "Sorry, I made the wrong do." },
    ],
    correctAnswer: "b",
    explanation: "'Mistake' luôn đi với 'make': 'make a mistake', không đi với 'do'.",
  },
  speakingPractice: {
    targetEnglish: "Let me make an appointment for you next week.",
    vietnameseHint: "Để tôi đặt lịch hẹn cho chị vào tuần sau.",
  },
};
