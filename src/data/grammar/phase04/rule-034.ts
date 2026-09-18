import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_034: GrammarRuleLesson = {
  id: "rule-034",
  ruleNumber: 34,
  phaseNumber: 4,
  title: "Sắp làm gì cho khách — I'm going to...",
  whenToUse:
    "Khi chị SẮP làm việc gì đó cho khách — việc chị đã định trong đầu và sắp bắt đầu ngay sau đây — dùng “I'm going to” + động từ. Cách này giúp khách biết trước bước tiếp theo là gì.",
  pattern: "Subject + am/is/are going to + V",
  nailSalonExample: {
    english: "I'm going to start with your cuticles.",
    vietnamese: "Tôi sắp bắt đầu với phần da chết của chị.",
  },
  moreExamples: [
    {
      english: "I'm going to soak your feet first.",
      vietnamese: "Tôi sắp ngâm chân cho chị trước.",
    },
    {
      english: "She's going to trim your nails.",
      vietnamese: "Cô ấy sắp cắt tỉa móng cho chị.",
    },
    {
      english: "We're going to apply the top coat now.",
      vietnamese: "Chúng tôi sắp thoa lớp sơn bóng bây giờ.",
    },
  ],
  quiz: {
    question:
      "Chị vừa làm xong tay cho khách, sắp chuyển sang làm chân. Chị nói sao cho đúng?",
    choices: [
      { id: "a", text: "I go to your feet now." },
      { id: "b", text: "I'm going to do your feet now." },
      { id: "c", text: "I did your feet now." },
    ],
    correctAnswer: "b",
    explanation:
      "Việc sắp làm ngay sau đây, dùng “I'm going to” + V: I'm going to do your feet now.",
  },
  speakingPractice: {
    targetEnglish: "I'm going to change the color now.",
    vietnameseHint: "Hãy nói: Tôi sắp đổi màu bây giờ.",
  },
};
