import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_077: GrammarRuleLesson = {
  id: "rule-077",
  ruleNumber: 77,
  phaseNumber: 8,
  title: "Đừng quên giới từ sau động từ",
  whenToUse:
    "❌ 'Please wait me a minute.' → ✅ 'Please wait for me a minute.' — vì một số động từ tiếng Anh luôn cần đi kèm giới từ như 'wait for', 'listen to', 'look at'. Bỏ giới từ sẽ làm câu sai hoặc khó hiểu.",
  pattern: "wait FOR someone | listen TO someone | look AT something | talk TO/WITH someone",
  nailSalonExample: {
    english: "Please wait for me, I'll be right there.",
    vietnamese: "Vui lòng chờ tôi, tôi ra ngay.",
  },
  moreExamples: [
    {
      english: "Please listen to the technician's instructions.",
      vietnamese: "Vui lòng lắng nghe hướng dẫn của thợ nail.",
    },
    {
      english: "Look at this color, it matches your dress.",
      vietnamese: "Nhìn màu này xem, nó hợp với váy của chị đó.",
    },
    {
      english: "Can I talk to the manager, please?",
      vietnamese: "Tôi có thể nói chuyện với quản lý được không?",
    },
  ],
  quiz: {
    question: "Bạn muốn khách chờ một chút, chọn câu đúng:",
    choices: [
      { id: "a", text: "Please wait me a minute." },
      { id: "b", text: "Please wait for me a minute." },
      { id: "c", text: "Please wait to me a minute." },
    ],
    correctAnswer: "b",
    explanation: "Động từ 'wait' luôn cần giới từ 'for' trước tân ngữ: 'wait for me'.",
  },
  speakingPractice: {
    targetEnglish: "Can you wait for your friend outside?",
    vietnameseHint: "Chị có thể chờ bạn của chị ở ngoài không?",
  },
};
