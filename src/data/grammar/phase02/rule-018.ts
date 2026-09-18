import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_018: GrammarRuleLesson = {
  id: "rule-018",
  ruleNumber: 18,
  phaseNumber: 2,
  title: "The Nails, The Cuticles — Khi Đang Làm Dịch Vụ",
  whenToUse:
    "Khi bạn đang làm dịch vụ trên tay hoặc chân của một khách cụ thể, dùng \"the\" trước bộ phận đó (the nails, the cuticles) vì rõ ràng bạn đang nói về móng của khách trước mặt mình. Nhưng khi nói chung chung về bộ phận đó cho mọi người, thì không cần article.",
  pattern: "the + bộ phận (đang làm dịch vụ) / không article khi nói chung chung",
  nailSalonExample: {
    english: "I'm going to push back the cuticles now.",
    vietnamese: "Bây giờ tôi sẽ đẩy lớp da chết ra nhé.",
  },
  moreExamples: [
    {
      english: "Let me shape the nails first.",
      vietnamese: "Để tôi tạo dáng móng trước đã.",
    },
    {
      english: "The skin around her cuticles is dry.",
      vietnamese: "Da quanh lớp da chết của cô ấy bị khô.",
    },
    {
      english: "Cuticles need lotion every day.",
      vietnamese: "Lớp da chết cần được dưỡng ẩm mỗi ngày.",
    },
  ],
  quiz: {
    question:
      "Bạn đang làm móng cho khách và muốn nói: \"Để tôi ngâm móng tay trước.\" Chọn câu đúng.",
    choices: [
      { id: "a", text: "Let me soak nails first." },
      { id: "b", text: "Let me soak the nails first." },
      { id: "c", text: "Let me soak a nails first." },
    ],
    correctAnswer: "b",
    explanation:
      "Bạn đang nói về móng tay cụ thể của khách đang ngồi trước mặt mình, nên phải dùng \"the\".",
  },
  speakingPractice: {
    targetEnglish: "The nails are ready for polish.",
    vietnameseHint: "Móng đã sẵn sàng để sơn.",
  },
};
