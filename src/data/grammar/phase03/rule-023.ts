import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_023: GrammarRuleLesson = {
  id: "rule-023",
  ruleNumber: 23,
  phaseNumber: 3,
  title: "Nói tên một lần, sau đó dùng he / she / they thay thế",
  whenToUse:
    "Khi đã nói tên khách hoặc đồng nghiệp một lần rồi, những câu sau không cần nhắc lại tên — chỉ cần dùng he (anh ấy), she (chị ấy), they (họ) để thay thế. Nói vậy nghe tự nhiên hơn, đỡ lặp lại tên nhiều lần.",
  pattern: "I, you, he, she, it, we, they + động từ",
  nailSalonExample: {
    english: "Lisa is here. She wants a gel manicure.",
    vietnamese: "Lisa đến rồi. Chị ấy muốn làm gel tay.",
  },
  moreExamples: [
    {
      english: "My coworker is busy. He is doing a pedicure.",
      vietnamese: "Đồng nghiệp tôi đang bận. Anh ấy đang làm chân cho khách.",
    },
    {
      english: "The customers are waiting. They want dip powder.",
      vietnamese: "Khách đang chờ. Họ muốn làm bột nhúng.",
    },
    {
      english: "The new color is pretty. It looks nice on you.",
      vietnamese: "Màu mới đẹp lắm. Nó rất hợp với chị.",
    },
  ],
  quiz: {
    question:
      "Chị vừa nói “Maria is next.” Câu tiếp theo, chị muốn nói cô ấy muốn sơn màu đỏ. Chị nên nói:",
    choices: [
      { id: "a", text: "Maria want red." },
      { id: "b", text: "She wants red." },
      { id: "c", text: "He wants red." },
    ],
    correctAnswer: "b",
    explanation:
      "Đã nhắc tên Maria ở câu trước, câu sau dùng “she” (chị ấy) thay cho tên, vì Maria là nữ.",
  },
  speakingPractice: {
    targetEnglish: "John is here. He wants a manicure.",
    vietnameseHint: "Hãy nói: John đến rồi. Anh ấy muốn làm tay.",
  },
};
