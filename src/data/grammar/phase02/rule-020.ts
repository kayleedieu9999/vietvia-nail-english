import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_020: GrammarRuleLesson = {
  id: "rule-020",
  ruleNumber: 20,
  phaseNumber: 2,
  title: "Ôn Tập — A, An, The Trong Tiệm Nail",
  whenToUse:
    "Ôn lại nhanh: dùng \"a/an\" cho một thứ mới, chưa xác định rõ. Dùng \"the\" cho thứ mà cả hai đã biết, đã nhắc tới, hoặc chỉ có một cái duy nhất. Không dùng gì cả khi nói chung chung hoặc với danh từ không đếm được.",
  pattern: "a/an (mới, chưa rõ) | the (đã biết, cụ thể) | không gì cả (chung chung)",
  nailSalonExample: {
    english: "A new customer came in. The customer wants a pedicure, and she brought her own polish.",
    vietnamese: "Một khách hàng mới đã đến. Vị khách đó muốn làm chân, và cô ấy mang theo sơn của mình.",
  },
  moreExamples: [
    {
      english: "I need a new brush. The brush I have is old.",
      vietnamese: "Tôi cần một cây cọ mới. Cây cọ tôi đang có đã cũ.",
    },
    {
      english: "Customers love our new spa chairs.",
      vietnamese: "Khách hàng rất thích những chiếc ghế spa mới của tiệm.",
    },
    {
      english: "Can you get me acetone from the back?",
      vietnamese: "Bạn lấy giúp tôi acetone ở phía sau được không?",
    },
  ],
  quiz: {
    question:
      "Chọn câu đúng cho: \"Tôi cần giũa móng mới, còn giũa cũ thì bị gãy rồi.\"",
    choices: [
      { id: "a", text: "I need new file, old file is broken." },
      { id: "b", text: "I need a new file. The old file is broken." },
      { id: "c", text: "I need the new file. A old file is broken." },
    ],
    correctAnswer: "b",
    explanation:
      "\"Giũa mới\" là thứ chưa xác định (lần đầu nhắc) nên dùng \"a\". \"Giũa cũ\" là cái bạn đang có, cả hai đều biết, nên dùng \"the\".",
  },
  speakingPractice: {
    targetEnglish: "I need a new towel. The old one is wet.",
    vietnameseHint: "Tôi cần một cái khăn mới. Cái cũ bị ướt rồi.",
  },
};
