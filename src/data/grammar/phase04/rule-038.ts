import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_038: GrammarRuleLesson = {
  id: "rule-038",
  ruleNumber: 38,
  phaseNumber: 4,
  title: "Miêu tả việc đang diễn ra trước mắt khách",
  whenToUse:
    "Khi muốn tả cho khách biết điều gì đang xảy ra ngay trước mắt họ — không phải chị đang làm, mà là việc tự nó đang diễn ra (sơn đang khô, màu đang lên) — dùng “is/are” + động từ thêm “-ing”.",
  pattern: "Subject + is/are + V-ing",
  nailSalonExample: {
    english: "Your nails are drying now.",
    vietnamese: "Móng tay của chị đang khô.",
  },
  moreExamples: [
    {
      english: "The polish is drying under the light.",
      vietnamese: "Sơn đang khô dưới đèn.",
    },
    {
      english: "Your color is setting now.",
      vietnamese: "Màu đang lên rồi đó.",
    },
    {
      english: "The gel is curing under the lamp.",
      vietnamese: "Lớp gel đang cứng lại dưới đèn.",
    },
  ],
  quiz: {
    question:
      "Khách hỏi tại sao phải ngồi chờ dưới đèn. Chị muốn giải thích là móng đang khô.",
    choices: [
      { id: "a", text: "Your nails dry now." },
      { id: "b", text: "Your nails are drying now." },
      { id: "c", text: "Your nails dried now." },
    ],
    correctAnswer: "b",
    explanation:
      "Việc đang diễn ra ngay trước mắt khách, dùng “are” + V-ing: Your nails are drying now.",
  },
  speakingPractice: {
    targetEnglish: "Your toes are drying under the fan.",
    vietnameseHint: "Hãy nói: Móng chân của chị đang khô dưới quạt.",
  },
};
