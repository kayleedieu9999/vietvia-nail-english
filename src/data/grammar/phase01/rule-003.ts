import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_003: GrammarRuleLesson = {
  id: "rule-003",
  ruleNumber: 3,
  phaseNumber: 1,
  title: "HAVE / HAS — nói ai đó có gì",
  whenToUse:
    "Khi muốn nói ai đó 'có' cái gì, ví dụ có lịch hẹn, có màu sơn, có khách quen, mình cần chọn đúng từ. Nói về một người khác như 'she' hay 'he' thì dùng 'has'. Còn nói về mình, về bạn, hoặc nhiều người thì dùng 'have'.",
  pattern: "She/He/It + has ... — I/You/We/They + have ...",
  nailSalonExample: {
    english: "She has a full schedule today.",
    vietnamese: "Cô ấy có lịch kín cả ngày hôm nay.",
  },
  moreExamples: [
    {
      english: "He has a new bottle of gel polish.",
      vietnamese: "Anh ấy có một chai sơn gel mới.",
    },
    {
      english: "I have two more customers this afternoon.",
      vietnamese: "Tôi còn hai khách nữa vào chiều nay.",
    },
    {
      english: "They have beautiful long nails.",
      vietnamese: "Họ có móng tay dài rất đẹp.",
    },
  ],
  quiz: {
    question: "Bạn muốn nhắc đồng nghiệp là móng của khách này rất mỏng, cần cẩn thận. Bạn nói sao?",
    choices: [
      { id: "a", text: "She have very thin nails." },
      { id: "b", text: "She haves very thin nails." },
      { id: "c", text: "She has very thin nails." },
    ],
    correctAnswer: "c",
    explanation: "Với 'she, he, it', ta dùng 'has', không phải 'have' hay 'haves'.",
  },
  speakingPractice: {
    targetEnglish: "We have every color you need.",
    vietnameseHint: "Chúng tôi có đủ mọi màu bạn cần.",
  },
};
