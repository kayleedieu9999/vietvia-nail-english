import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_081: GrammarRuleLesson = {
  id: "rule-081",
  ruleNumber: 81,
  phaseNumber: 9,
  title: "Trả lời ngắn gọn — không cần nói cả câu",
  whenToUse:
    "Khi khách hỏi câu ngắn, mình không cần trả lời bằng một câu đầy đủ chủ ngữ + động từ. Người Mỹ nói chuyện hàng ngày rất hay trả lời ngắn — nghe tự nhiên hơn nhiều so với câu đầy đủ.",
  pattern: "Sure! / No problem. / Almost done. / Sounds good. / Not yet.",
  nailSalonExample: {
    english: "Customer: Are you almost done? You: Almost done!",
    vietnamese: "Khách: Chị sắp xong chưa? Bạn: Sắp xong rồi!",
  },
  moreExamples: [
    {
      english: "Customer: Can I get a glass of water? You: Sure!",
      vietnamese: "Khách: Cho tôi xin ly nước được không? Bạn: Được chứ!",
    },
    {
      english: "Customer: Sorry, I'm a little late. You: No problem.",
      vietnamese: "Khách: Xin lỗi, tôi tới hơi trễ. Bạn: Không sao đâu.",
    },
    {
      english: "Customer: Is this color okay? You: Sounds good.",
      vietnamese: "Khách: Màu này được không? Bạn: Được đó.",
    },
  ],
  quiz: {
    question: "Khách hỏi: \"Can you fix this nail real quick?\" — Bạn muốn trả lời ngắn gọn, tự nhiên là \"Được rồi\":",
    choices: [
      { id: "a", text: "I will be able to fix that nail for you right now." },
      { id: "b", text: "Sure!" },
      { id: "c", text: "It is possible that I can fix it." },
    ],
    correctAnswer: "b",
    explanation:
      "\"Sure!\" là cách trả lời ngắn, tự nhiên mà người Mỹ hay dùng. Câu (a) và (c) đúng ngữ pháp nhưng nghe rất cứng và không giống cách nói chuyện thật.",
  },
  speakingPractice: {
    targetEnglish: "Almost done!",
    vietnameseHint: "Tập nói \"Sắp xong rồi!\" thật tự nhiên khi khách hỏi còn bao lâu.",
  },
};
