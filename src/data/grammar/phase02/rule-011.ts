import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_011: GrammarRuleLesson = {
  id: "rule-011",
  ruleNumber: 11,
  phaseNumber: 2,
  title: "A vs An — Chọn Theo Âm Thanh",
  whenToUse:
    "Khi nói về một thứ (chưa xác định cụ thể), bạn cần chọn giữa \"a\" và \"an\". Đừng nhìn chữ cái đầu tiên, hãy nghe ÂM THANH của từ ngay sau nó. Nếu âm đó nghe như phụ âm, dùng \"a\". Nếu âm đó nghe như nguyên âm (a, e, i, o, u), dùng \"an\".",
  pattern: "a/an + danh từ số ít",
  nailSalonExample: {
    english: "I need a nail file.",
    vietnamese: "Tôi cần một cái giũa móng.",
  },
  moreExamples: [
    {
      english: "Can I get an appointment at 3?",
      vietnamese: "Tôi có thể đặt một lịch hẹn lúc 3 giờ không?",
    },
    {
      english: "She wants a manicure today.",
      vietnamese: "Cô ấy muốn làm móng tay hôm nay.",
    },
    {
      english: "It's an emergency, her nail broke.",
      vietnamese: "Đây là trường hợp khẩn cấp, móng của cô ấy bị gãy.",
    },
  ],
  quiz: {
    question:
      "Khách hàng muốn đặt lịch hẹn. Bạn nói: \"You need ___ appointment.\" Chọn từ đúng.",
    choices: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "the" },
    ],
    correctAnswer: "b",
    explanation:
      "\"Appointment\" bắt đầu bằng âm nguyên âm (nghe như \"uh-point-ment\"), nên phải dùng \"an\", không phải \"a\".",
  },
  speakingPractice: {
    targetEnglish: "I need an ice pack for her finger.",
    vietnameseHint: "Tôi cần một túi đá cho ngón tay của cô ấy.",
  },
};
