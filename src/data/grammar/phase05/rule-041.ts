import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_041: GrammarRuleLesson = {
  id: "rule-041",
  ruleNumber: 41,
  phaseNumber: 5,
  title: "AT — giờ chính xác và một chỗ cụ thể",
  whenToUse:
    "Dùng \"at\" khi nói một giờ chính xác, như 3 giờ hay 10 giờ rưỡi. \"At\" cũng dùng cho một chỗ cụ thể, nhỏ, như bàn lễ tân hay một địa chỉ. Nghĩ đơn giản: giờ chính xác và điểm cụ thể thì dùng \"at\".",
  pattern: "at + giờ cụ thể / at + chỗ cụ thể",
  nailSalonExample: {
    english: "Your appointment is at 2 o'clock, at the front desk.",
    vietnamese: "Lịch hẹn của chị là lúc 2 giờ, ở bàn lễ tân.",
  },
  moreExamples: [
    { english: "The salon opens at 9 in the morning.", vietnamese: "Tiệm mở cửa lúc 9 giờ sáng." },
    { english: "Please wait at the front door.", vietnamese: "Vui lòng chờ ở cửa trước." },
    { english: "I will call you at 4:30.", vietnamese: "Tôi sẽ gọi cho chị lúc 4 giờ rưỡi." },
  ],
  quiz: {
    question: "Khách hỏi mấy giờ tiệm đóng cửa. Bạn muốn nói \"Chúng tôi đóng cửa lúc 7 giờ.\" Câu nào đúng?",
    choices: [
      { id: "a", text: "We close in 7 o'clock." },
      { id: "b", text: "We close at 7 o'clock." },
      { id: "c", text: "We close on 7 o'clock." },
    ],
    correctAnswer: "b",
    explanation: "Với một giờ chính xác như \"7 o'clock\", tiếng Anh luôn dùng \"at\", không dùng \"in\" hay \"on\".",
  },
  speakingPractice: {
    targetEnglish: "Your nail appointment is at 3 o'clock, at station number two.",
    vietnameseHint: "Hãy nói: Lịch hẹn làm móng của chị là lúc 3 giờ, ở ghế số hai.",
  },
};
