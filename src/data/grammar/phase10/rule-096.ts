import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_096: GrammarRuleLesson = {
  id: "rule-096",
  ruleNumber: 96,
  phaseNumber: 10,
  title: "Follow me, please — Chỉ đường trong tiệm",
  whenToUse:
    "Khi khách hỏi chỗ để đồ, nhà vệ sinh, hay chỗ ngồi, mình chỉ cần vài câu ngắn kèm theo chỉ tay là khách hiểu ngay, không cần nói dài dòng.",
  pattern: "It's right over there. / Follow me, please. / It's next to the...",
  nailSalonExample: {
    english: "Customer: Where's the restroom? You: It's right over there, next to the front desk.",
    vietnamese: "Khách: Nhà vệ sinh ở đâu vậy? Bạn: Dạ ở ngay đằng kia, kế bên quầy lễ tân.",
  },
  moreExamples: [
    {
      english: "Customer: Where should I sit? You: Right this way, please. Follow me.",
      vietnamese: "Khách: Tôi nên ngồi chỗ nào? Bạn: Dạ mời chị đi lối này. Chị đi theo em nhé.",
    },
    {
      english: "Customer: Where can I put my bag? You: You can put it right here, under the table.",
      vietnamese: "Khách: Tôi để túi ở đâu được? Bạn: Chị để ngay đây, dưới bàn là được ạ.",
    },
    {
      english: "Customer: Where's the water? You: It's over there, next to the magazines.",
      vietnamese: "Khách: Nước ở đâu vậy? Bạn: Dạ ở đằng kia, kế bên chỗ tạp chí.",
    },
  ],
  quiz: {
    question: "Khách hỏi: \"Where's the restroom?\" Bạn muốn vừa chỉ tay vừa trả lời ngắn gọn:",
    choices: [
      { id: "a", text: "It's right over there." },
      { id: "b", text: "The restroom is a place for washing." },
      { id: "c", text: "I don't know." },
    ],
    correctAnswer: "a",
    explanation:
      "\"It's right over there\" ngắn gọn, tự nhiên, kèm theo chỉ tay là khách hiểu ngay. Câu (b) không phải cách trả lời tự nhiên khi chỉ đường.",
  },
  speakingPractice: {
    targetEnglish: "It's right over there. Follow me, please.",
    vietnameseHint: "Tập nói kèm động tác chỉ tay và bước đi dẫn khách tới chỗ.",
  },
};
