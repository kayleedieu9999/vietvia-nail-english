import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_080: GrammarRuleLesson = {
  id: "rule-080",
  ruleNumber: 80,
  phaseNumber: 8,
  title: "Ôn tập — Sửa các lỗi thường gặp",
  whenToUse:
    "❌ 'She don't have no appointment, she want go home.' → ✅ 'She doesn't have an appointment, she wants to go home.' — câu này gộp lại nhiều lỗi đã học: thiếu -s cho she/he/it, hai từ phủ định cùng lúc, thiếu mạo từ a/an, và thiếu 'to' trước động từ.",
  pattern:
    "Ôn lại: thêm -s cho he/she/it • chỉ dùng một từ phủ định • thêm a/an trước danh từ số ít • thêm to trước động từ sau want/need",
  nailSalonExample: {
    english: "He doesn't have an appointment, so he wants to wait for the next open chair.",
    vietnamese: "Anh ấy không có lịch hẹn nên anh ấy muốn chờ ghế trống tiếp theo.",
  },
  moreExamples: [
    {
      english: "She works here, and she is a nail technician.",
      vietnamese: "Cô ấy làm việc ở đây và là thợ nail.",
    },
    {
      english: "I don't have any polish in that color, but I can order it.",
      vietnamese: "Tôi không có màu sơn đó, nhưng tôi có thể đặt hàng.",
    },
    {
      english: "He wants to make an appointment for tomorrow.",
      vietnamese: "Anh ấy muốn đặt lịch hẹn cho ngày mai.",
    },
  ],
  quiz: {
    question:
      "Chọn câu ĐÚNG, đã sửa hết các lỗi trong câu: 'She don't have no time, she want go now.'",
    choices: [
      { id: "a", text: "She doesn't have no time, she want to go now." },
      { id: "b", text: "She doesn't have time, she wants to go now." },
      { id: "c", text: "She don't has time, she wants going now." },
    ],
    correctAnswer: "b",
    explanation:
      "Cần thêm -s cho động từ ('wants'), bỏ từ phủ định thừa ('doesn't have time', không thêm 'no'), và thêm 'to' trước 'go'.",
  },
  speakingPractice: {
    targetEnglish: "She doesn't have an appointment, but she wants to wait.",
    vietnameseHint: "Cô ấy không có lịch hẹn, nhưng cô ấy muốn chờ.",
  },
};
