import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_048: GrammarRuleLesson = {
  id: "rule-048",
  ruleNumber: 48,
  phaseNumber: 5,
  title: "Động từ đi kèm giới từ — wait for, look at, talk to",
  whenToUse:
    "Một số động từ tiếng Anh luôn đi cùng một giới từ cố định, và bạn phải nhớ cả cụm chứ không tách ra. Ví dụ \"wait for\" (chờ), \"look at\" (nhìn vào), \"talk to\" (nói chuyện với), \"come in\" (đi vào). Học nguyên cụm sẽ giúp nói tự nhiên hơn.",
  pattern: "wait for / look at / talk to / come in + (tân ngữ)",
  nailSalonExample: {
    english: "Please wait for a moment, and look at these color samples.",
    vietnamese: "Vui lòng chờ một chút, và nhìn vào những mẫu màu này.",
  },
  moreExamples: [
    { english: "Can I talk to you for a second?", vietnamese: "Tôi nói chuyện với bạn một chút được không?" },
    { english: "Please come in and have a seat.", vietnamese: "Mời vào và ngồi xuống." },
    { english: "She is waiting for her nails to dry.", vietnamese: "Cô ấy đang chờ móng khô." },
  ],
  quiz: {
    question: "Bạn muốn nói \"Chị chờ tôi một chút nhé.\" Câu nào đúng?",
    choices: [
      { id: "a", text: "Please wait me a moment." },
      { id: "b", text: "Please wait to me a moment." },
      { id: "c", text: "Please wait for me a moment." },
    ],
    correctAnswer: "c",
    explanation: "Động từ \"wait\" luôn đi với giới từ \"for\" khi nói chờ ai đó: \"wait for someone\".",
  },
  speakingPractice: {
    targetEnglish: "Please look at this color chart while you wait for your nails to dry.",
    vietnameseHint: "Hãy nói: Vui lòng nhìn vào bảng màu này trong khi chị chờ móng khô.",
  },
};
