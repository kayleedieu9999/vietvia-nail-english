import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_073: GrammarRuleLesson = {
  id: "rule-073",
  ruleNumber: 73,
  phaseNumber: 8,
  title: "A/An/The — Đừng bỏ quên mạo từ",
  whenToUse:
    "❌ 'I am nail tech.' → ✅ 'I am a nail technician.' — vì tiếng Việt không có từ tương đương 'a/an/the', nhưng tiếng Anh luôn cần một mạo từ đứng trước danh từ số ít đếm được.",
  pattern: "a/an + danh từ số ít (chưa xác định) | the + danh từ đã biết cụ thể",
  nailSalonExample: {
    english: "I am a nail technician at this salon.",
    vietnamese: "Tôi là thợ nail ở tiệm này.",
  },
  moreExamples: [
    {
      english: "Can you hand me a towel, please?",
      vietnamese: "Bạn đưa tôi một cái khăn được không?",
    },
    {
      english: "The customer in chair two wants a manicure.",
      vietnamese: "Khách ở ghế số hai muốn làm manicure.",
    },
    {
      english: "She has an appointment at three o'clock.",
      vietnamese: "Cô ấy có hẹn lúc ba giờ.",
    },
  ],
  quiz: {
    question: "Bạn giới thiệu nghề của mình với khách mới, chọn câu đúng:",
    choices: [
      { id: "a", text: "I am nail technician." },
      { id: "b", text: "I am a nail technician." },
      { id: "c", text: "I am the nail technician." },
    ],
    correctAnswer: "b",
    explanation:
      "'Nail technician' là danh từ số ít chưa xác định cụ thể nên cần 'a' đứng trước, không được bỏ trống mạo từ.",
  },
  speakingPractice: {
    targetEnglish: "I need a new file for this pedicure.",
    vietnameseHint: "Tôi cần một cái giũa mới cho lần pedicure này.",
  },
};
