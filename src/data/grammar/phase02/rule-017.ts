import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_017: GrammarRuleLesson = {
  id: "rule-017",
  ruleNumber: 17,
  phaseNumber: 2,
  title: "The — Nhắc Lại Lần Hai",
  whenToUse:
    "Lần đầu nhắc đến một thứ, dùng \"a/an\" vì người nghe chưa biết là cái nào. Nhưng lần thứ hai bạn nói về CÙNG một thứ đó, đổi sang \"the\" vì bây giờ cả hai đã biết rõ rồi.",
  pattern: "a/an (lần 1) ... the (lần 2, cùng một thứ)",
  nailSalonExample: {
    english: "A customer called this morning. The customer wants a French tip.",
    vietnamese: "Một khách hàng đã gọi sáng nay. Vị khách đó muốn làm móng kiểu Pháp.",
  },
  moreExamples: [
    {
      english: "I opened a new bottle of top coat. The top coat is on the second shelf.",
      vietnamese: "Tôi đã mở một chai sơn bóng mới. Chai sơn bóng đó ở kệ thứ hai.",
    },
    {
      english: "She chose a dark red color. The color looks great on her.",
      vietnamese: "Cô ấy đã chọn một màu đỏ đậm. Màu đó rất hợp với cô ấy.",
    },
    {
      english: "A new tech started today. The tech is very fast.",
      vietnamese: "Một thợ mới bắt đầu làm hôm nay. Thợ đó làm rất nhanh.",
    },
  ],
  quiz: {
    question:
      "Bạn kể: \"Tôi đưa cho khách một cái khăn. ___ khăn bị bẩn.\" Chọn câu đúng cho câu thứ hai.",
    choices: [
      { id: "a", text: "The towel was dirty." },
      { id: "b", text: "A towel was dirty." },
      { id: "c", text: "Towel was dirty." },
    ],
    correctAnswer: "a",
    explanation:
      "Đây là lần thứ hai nhắc đến cái khăn đó (đã nói ở câu trước), nên phải đổi sang \"the\".",
  },
  speakingPractice: {
    targetEnglish: "I gave her a new file. The file is purple.",
    vietnameseHint: "Tôi đã đưa cho cô ấy một cái giũa mới. Cái giũa đó màu tím.",
  },
};
