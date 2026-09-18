import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_028: GrammarRuleLesson = {
  id: "rule-028",
  ruleNumber: 28,
  phaseNumber: 3,
  title: "Dùng “it” để nói về đồ vật hoặc cả một tình huống",
  whenToUse:
    "“It” dùng để thay cho một đồ vật (cái sơn, cái máy, cái giá tiền) hoặc để nói về cả một tình huống chung chung (trời mưa, giá tiền, thời gian, cảm nhận). Không dùng “it” cho người.",
  pattern: "It + is/looks/costs ...",
  nailSalonExample: {
    english: "It's thirty-five dollars for a gel manicure.",
    vietnamese: "Làm gel tay giá ba mươi lăm đô.",
  },
  moreExamples: [
    {
      english: "It looks great on you.",
      vietnamese: "Nó rất hợp với chị.",
    },
    {
      english: "It's raining outside today.",
      vietnamese: "Hôm nay trời đang mưa bên ngoài.",
    },
    {
      english: "It will take about thirty minutes.",
      vietnamese: "Việc này sẽ mất khoảng ba mươi phút.",
    },
  ],
  quiz: {
    question:
      "Khách hỏi giá làm bột nhúng. Chị muốn trả lời giá là bốn mươi đô. Chị nên nói:",
    choices: [
      { id: "a", text: "She is forty dollars." },
      { id: "b", text: "It's forty dollars." },
      { id: "c", text: "He is forty dollars." },
    ],
    correctAnswer: "b",
    explanation:
      "Nói về giá tiền (một điều chung chung, không phải người), dùng “it”, không dùng “she” hay “he”.",
  },
  speakingPractice: {
    targetEnglish: "It's very relaxing.",
    vietnameseHint: "Hãy nói: Cái này (dịch vụ này) rất thư giãn.",
  },
};
