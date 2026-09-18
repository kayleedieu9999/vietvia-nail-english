import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_029: GrammarRuleLesson = {
  id: "rule-029",
  ruleNumber: 29,
  phaseNumber: 3,
  title: "Lỗi hay gặp — đừng dùng “it” cho người, “he/she” cho đồ vật",
  whenToUse:
    "Nhiều người Việt hay dịch thẳng từ tiếng Việt nên lẫn lộn: dùng “it” để gọi khách (sai, vì “it” chỉ dùng cho đồ vật), hoặc dùng “he/she” để gọi đồ vật (cũng sai). Nhớ: người dùng he/she/they, đồ vật dùng it.",
  pattern: "Người → he/she/they  |  Đồ vật → it",
  nailSalonExample: {
    english: "She is my next customer, not \"it\".",
    vietnamese: "Chị ấy là khách tiếp theo của tôi, không nói “it”.",
  },
  moreExamples: [
    {
      english: "The polish is dry now. It is ready.",
      vietnamese: "Sơn khô rồi. Nó sẵn sàng rồi.",
    },
    {
      english: "He is waiting at the front desk.",
      vietnamese: "Anh ấy đang chờ ở quầy lễ tân.",
    },
    {
      english: "This file is old. It needs to be replaced.",
      vietnamese: "Cây giũa này cũ rồi. Nó cần được thay.",
    },
  ],
  quiz: {
    question: "Câu nào ĐÚNG khi nói về một khách hàng nữ vừa bước vào tiệm?",
    choices: [
      { id: "a", text: "It is here for a pedicure." },
      { id: "b", text: "She is here for a pedicure." },
      { id: "c", text: "It's here for a pedicure." },
    ],
    correctAnswer: "b",
    explanation:
      "Đây là một người khách, không phải đồ vật, nên phải dùng “she” (chị ấy), không dùng “it”.",
  },
  speakingPractice: {
    targetEnglish: "He is a new customer. It is his first time here.",
    vietnameseHint: "Hãy nói: Anh ấy là khách mới. Đây là lần đầu anh ấy đến đây.",
  },
};
