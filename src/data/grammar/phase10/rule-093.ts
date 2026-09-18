import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_093: GrammarRuleLesson = {
  id: "rule-093",
  ruleNumber: 93,
  phaseNumber: 10,
  title: "Thank you so much! — Nhận lời khen tự nhiên",
  whenToUse:
    "Khi khách khen tay nghề hay khen tiệm, đừng ngại ngùng hay từ chối lời khen. Chỉ cần cảm ơn ngắn gọn, có thể thêm một câu nhỏ nữa — nghe sẽ tự tin và chuyên nghiệp hơn nhiều.",
  pattern: "Thank you so much! / Thank you, I'm glad you like it!",
  nailSalonExample: {
    english: "Customer: Wow, this looks amazing! You: Thank you so much! I'm so glad you like it.",
    vietnamese: "Khách: Ồ, đẹp quá! Bạn: Cảm ơn chị nhiều! Em rất vui vì chị thích.",
  },
  moreExamples: [
    {
      english: "Customer: You did a great job. You: Thank you! That means a lot.",
      vietnamese: "Khách: Bạn làm giỏi quá. Bạn: Cảm ơn chị! Nghe vậy em vui lắm.",
    },
    {
      english: "Customer: I love this color combination. You: Thank you so much, I had fun picking it with you.",
      vietnamese: "Khách: Tôi thích cách phối màu này lắm. Bạn: Cảm ơn chị nhiều, em cũng thấy vui khi chọn màu cùng chị.",
    },
    {
      english: "Customer: Your salon is so clean and nice. You: Thank you! We really try our best.",
      vietnamese: "Khách: Tiệm bạn sạch và đẹp quá. Bạn: Cảm ơn chị! Tụi em luôn cố gắng hết sức.",
    },
  ],
  quiz: {
    question: "Khách khen: \"Your nail art is so beautiful!\" Bạn nên trả lời gì?",
    choices: [
      { id: "a", text: "No, it's not that good." },
      { id: "b", text: "Thank you so much!" },
      { id: "c", text: "(im lặng, chỉ cười)" },
    ],
    correctAnswer: "b",
    explanation:
      "Nói \"Thank you so much!\" thể hiện sự tự tin và lịch sự. Từ chối lời khen như câu (a) hoặc chỉ im lặng có thể khiến khách cảm thấy hơi khó xử.",
  },
  speakingPractice: {
    targetEnglish: "Thank you so much, I'm glad you like it!",
    vietnameseHint: "Tập nói câu này với nụ cười thật tự nhiên mỗi khi được khách khen.",
  },
};
