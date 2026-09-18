import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_065: GrammarRuleLesson = {
  id: "rule-065",
  ruleNumber: 65,
  phaseNumber: 7,
  title: "Should — Đưa ra lời khuyên nhẹ nhàng",
  whenToUse:
    "Dùng \"should\" khi bạn muốn khuyên khách nên làm gì đó, nhưng không bắt buộc. Đây là cách góp ý nhẹ nhàng, giúp khách cảm thấy bạn đang quan tâm chứ không phải đang ra lệnh cho họ.",
  pattern: "Chủ ngữ + should + động từ nguyên mẫu...",
  nailSalonExample: {
    english: "You should let it dry a bit longer.",
    vietnamese: "Chị nên để móng khô thêm một chút.",
  },
  moreExamples: [
    {
      english: "You should apply lotion every night.",
      vietnamese: "Chị nên thoa kem dưỡng mỗi tối.",
    },
    {
      english: "You should avoid hot water for an hour.",
      vietnamese: "Chị nên tránh nước nóng trong một tiếng.",
    },
    {
      english: "You should come back in two weeks for a fill.",
      vietnamese: "Chị nên quay lại sau hai tuần để làm lại móng.",
    },
  ],
  quiz: {
    question:
      "Khách vừa sơn xong và muốn đi ngay. Bạn muốn khuyên khách chờ móng khô kỹ hơn. Bạn nói gì?",
    choices: [
      { id: "a", text: "You must wait now." },
      { id: "b", text: "You should wait a little longer." },
      { id: "c", text: "Wait, don't go!" },
    ],
    correctAnswer: "b",
    explanation:
      "\"Should\" đưa ra lời khuyên nhẹ nhàng, không ép buộc. \"You must wait now\" và \"Wait, don't go!\" nghe quá gay gắt và không lịch sự với khách.",
  },
  speakingPractice: {
    targetEnglish: "You should come back in two weeks for a fill-in.",
    vietnameseHint: "Chị nên quay lại sau hai tuần để dặm lại móng.",
  },
};
