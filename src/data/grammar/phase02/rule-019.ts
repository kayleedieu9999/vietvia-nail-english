import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_019: GrammarRuleLesson = {
  id: "rule-019",
  ruleNumber: 19,
  phaseNumber: 2,
  title: "Lỗi Thường Gặp — Đừng Quên A/An/The",
  whenToUse:
    "Tiếng Việt không có \"a/an/the\", nên người Việt hay quên dùng chúng khi nói tiếng Anh. Nghe có vẻ nhỏ nhưng người bản xứ sẽ nhận ra ngay câu bị thiếu. Hãy tập thói quen thêm \"a/an/the\" trước danh từ số ít.",
  pattern: "Sai: (thiếu article) → Đúng: a/an/the + danh từ",
  nailSalonExample: {
    english: "Wrong: Give me towel. Right: Give me a towel.",
    vietnamese: "Sai: Give me towel. Đúng: Give me a towel. (Đưa tôi một cái khăn.)",
  },
  moreExamples: [
    {
      english: "Wrong: Sit in chair. Right: Sit in the chair.",
      vietnamese: "Sai: Sit in chair. Đúng: Sit in the chair. (Ngồi vào ghế.)",
    },
    {
      english: "Wrong: I am nail tech. Right: I am a nail tech.",
      vietnamese: "Sai: I am nail tech. Đúng: I am a nail tech. (Tôi là thợ nail.)",
    },
    {
      english: "Wrong: She wants appointment. Right: She wants an appointment.",
      vietnamese: "Sai: She wants appointment. Đúng: She wants an appointment. (Cô ấy muốn đặt lịch hẹn.)",
    },
  ],
  quiz: {
    question: "Câu nào đúng khi bạn giới thiệu nghề nghiệp của mình?",
    choices: [
      { id: "a", text: "I am nail technician." },
      { id: "b", text: "I am nail technicians." },
      { id: "c", text: "I am a nail technician." },
    ],
    correctAnswer: "c",
    explanation:
      "Khi nói về nghề nghiệp của một người, tiếng Anh luôn cần \"a\" trước danh từ số ít — không được bỏ qua như trong tiếng Việt.",
  },
  speakingPractice: {
    targetEnglish: "I am a nail technician. I need a break.",
    vietnameseHint: "Tôi là một thợ nail. Tôi cần nghỉ giải lao.",
  },
};
