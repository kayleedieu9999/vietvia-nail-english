import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_044: GrammarRuleLesson = {
  id: "rule-044",
  ruleNumber: 44,
  phaseNumber: 5,
  title: "IN, ON, AT — so sánh nhanh khi nói về thời gian",
  whenToUse:
    "Ba từ này đều nói về thời gian nhưng dùng cho ba loại khác nhau. \"At\" cho giờ chính xác (at 3 o'clock). \"On\" cho ngày và thứ (on Friday). \"In\" cho tháng, mùa, năm (in July). Nhớ theo thứ tự nhỏ đến lớn: at giờ, on ngày, in tháng/năm.",
  pattern: "at + giờ / on + ngày / in + tháng, năm",
  nailSalonExample: {
    english: "Your appointment is at 10 o'clock, on Friday, in September.",
    vietnamese: "Lịch hẹn của chị là lúc 10 giờ, vào thứ Sáu, trong tháng 9.",
  },
  moreExamples: [
    { english: "I work at 9 a.m. on Monday.", vietnamese: "Tôi làm việc lúc 9 giờ sáng vào thứ Hai." },
    { english: "We are fully booked on Saturday.", vietnamese: "Chúng tôi đã kín lịch vào thứ Bảy." },
    { english: "The class starts in June.", vietnamese: "Lớp học bắt đầu vào tháng Sáu." },
  ],
  quiz: {
    question: "Bạn muốn nói \"Lịch hẹn của chị là lúc 5 giờ, vào Chủ Nhật.\" Câu nào đúng?",
    choices: [
      { id: "a", text: "Your appointment is on 5 o'clock, at Sunday." },
      { id: "b", text: "Your appointment is at 5 o'clock, on Sunday." },
      { id: "c", text: "Your appointment is in 5 o'clock, on Sunday." },
    ],
    correctAnswer: "b",
    explanation: "Giờ chính xác \"5 o'clock\" dùng \"at\", còn thứ \"Sunday\" dùng \"on\". Không đổi ngược lại.",
  },
  speakingPractice: {
    targetEnglish: "Your next appointment is at 1 o'clock, on Wednesday, in October.",
    vietnameseHint: "Hãy nói: Lịch hẹn tiếp theo của chị là lúc 1 giờ, vào thứ Tư, trong tháng 10.",
  },
};
