import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_061: GrammarRuleLesson = {
  id: "rule-061",
  ruleNumber: 61,
  phaseNumber: 7,
  title: "Can I...? — Xin phép trước khi làm gì đó",
  whenToUse:
    "Dùng \"Can I...?\" khi bạn muốn xin phép khách trước khi bắt đầu chạm vào tay, chân hoặc làm một bước dịch vụ nào đó. Hỏi trước luôn lịch sự hơn là làm luôn — khách sẽ cảm thấy được tôn trọng. Đây là câu hỏi bạn sẽ dùng rất nhiều lần mỗi ngày.",
  pattern: "Can I + động từ nguyên mẫu...?",
  nailSalonExample: {
    english: "Can I start with your left hand?",
    vietnamese: "Tôi bắt đầu với tay trái của chị được không?",
  },
  moreExamples: [
    {
      english: "Can I take off your old polish first?",
      vietnamese: "Tôi tháo lớp sơn cũ trước được không?",
    },
    {
      english: "Can I use this color on your toes?",
      vietnamese: "Tôi dùng màu này cho móng chân của chị được không?",
    },
    {
      english: "Can I soak your fingers for a minute?",
      vietnamese: "Tôi ngâm tay chị một chút được không?",
    },
  ],
  quiz: {
    question:
      "Bạn muốn xem tay khách trước khi làm dịch vụ. Câu nào lịch sự và đúng nhất?",
    choices: [
      { id: "a", text: "Give me your hand." },
      { id: "b", text: "Can I see your hand?" },
      { id: "c", text: "I see your hand now." },
    ],
    correctAnswer: "b",
    explanation:
      "\"Give me your hand\" nghe rất ra lệnh, không lịch sự với khách. \"Can I see your hand?\" là cách xin phép nhẹ nhàng, đúng chuẩn khi phục vụ khách hàng.",
  },
  speakingPractice: {
    targetEnglish: "Can I take a look at your nails first?",
    vietnameseHint: "Tôi xem qua móng của chị trước được không?",
  },
};
