import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_079: GrammarRuleLesson = {
  id: "rule-079",
  ruleNumber: 79,
  phaseNumber: 8,
  title: "Đừng quên TO trước động từ",
  whenToUse:
    "❌ 'I want go home now.' → ✅ 'I want to go home now.' — vì sau các động từ như want, need, like, try, plan, luôn cần 'to' + động từ nguyên mẫu, không được bỏ 'to'.",
  pattern: "want / need / like / try / plan + TO + verb (nguyên mẫu)",
  nailSalonExample: {
    english: "I need to finish this pedicure first.",
    vietnamese: "Tôi cần làm xong pedicure này trước.",
  },
  moreExamples: [
    {
      english: "She wants to change her appointment to Friday.",
      vietnamese: "Cô ấy muốn đổi lịch hẹn sang thứ Sáu.",
    },
    {
      english: "He tried to fix the nail drill.",
      vietnamese: "Anh ấy đã cố sửa máy khoan móng.",
    },
    {
      english: "I plan to take a break at noon.",
      vietnamese: "Tôi định nghỉ giải lao vào buổi trưa.",
    },
  ],
  quiz: {
    question: "Bạn muốn nói bạn cần nghỉ giải lao, chọn câu đúng:",
    choices: [
      { id: "a", text: "I need take a break." },
      { id: "b", text: "I need to take a break." },
      { id: "c", text: "I need taking a break." },
    ],
    correctAnswer: "b",
    explanation: "Sau 'need' phải có 'to' trước động từ nguyên mẫu: 'need to take'.",
  },
  speakingPractice: {
    targetEnglish: "I want to try a new nail color today.",
    vietnameseHint: "Hôm nay tôi muốn thử một màu sơn móng mới.",
  },
};
