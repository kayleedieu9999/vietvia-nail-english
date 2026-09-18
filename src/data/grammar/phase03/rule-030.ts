import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_030: GrammarRuleLesson = {
  id: "rule-030",
  ruleNumber: 30,
  phaseNumber: 3,
  title: "Ôn lại — ghép danh từ số nhiều, đại từ và “của ai” trong một câu",
  whenToUse:
    "Đây là bài ôn lại Chặng 3. Trong một câu nói thật ngoài tiệm, thường phải dùng nhiều thứ cùng lúc: số nhiều (-s), đại từ thay tên (he/she/they), và “của ai” (my/her/their, hoặc Tên + 's). Nói quen sẽ thấy rất tự nhiên.",
  pattern: "Tên/danh từ số nhiều + đại từ + của ai (my/her/their/'s)",
  nailSalonExample: {
    english: "Anna and her friends are here. Their nails need a new color.",
    vietnamese: "Anna và các bạn của cô ấy đã đến. Móng của họ cần đổi màu mới.",
  },
  moreExamples: [
    {
      english: "The two customers are ready. Their pedicures are next.",
      vietnamese: "Hai khách đã sẵn sàng. Lượt làm chân của họ là tiếp theo.",
    },
    {
      english: "Maria's hands are soft now. She loves the lotion.",
      vietnamese: "Tay của Maria giờ mềm rồi. Chị ấy rất thích loại kem dưỡng này.",
    },
    {
      english: "My coworkers are busy today. They have many appointments.",
      vietnamese: "Đồng nghiệp của tôi hôm nay bận lắm. Họ có nhiều cuộc hẹn.",
    },
  ],
  quiz: {
    question:
      "Chị muốn nói: “Hai chị em (hai người phụ nữ) đến rồi, sơn của họ đang ở trên kệ.” Câu đúng là:",
    choices: [
      { id: "a", text: "Two woman are here. It's color is on the shelf." },
      { id: "b", text: "Two women are here. Their color is on the shelf." },
      { id: "c", text: "Two women is here. Her color is on the shelf." },
    ],
    correctAnswer: "b",
    explanation:
      "“Woman” đổi thành “women” khi có 2 người trở lên, và vì có nhiều người nên dùng “their” (của họ), không dùng “it's” hay “her”.",
  },
  speakingPractice: {
    targetEnglish: "Two customers are waiting. Their appointments are at two o'clock.",
    vietnameseHint: "Hãy nói: Hai khách đang chờ. Cuộc hẹn của họ là lúc hai giờ.",
  },
};
