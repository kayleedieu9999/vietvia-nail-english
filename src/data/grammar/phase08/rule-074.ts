import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_074: GrammarRuleLesson = {
  id: "rule-074",
  ruleNumber: 74,
  phaseNumber: 8,
  title: "Đừng dùng hai từ phủ định trong một câu",
  whenToUse:
    "❌ 'I don't have no time today.' → ✅ 'I don't have time today.' — vì tiếng Anh chỉ dùng MỘT từ phủ định trong một câu, không giống tiếng Việt hay lặp lại để nhấn mạnh ('không có gì hết').",
  pattern: "don't/doesn't + verb (chỉ một từ phủ định, không thêm 'no' nữa)",
  nailSalonExample: {
    english: "I don't have any appointments after five.",
    vietnamese: "Tôi không có lịch hẹn nào sau năm giờ.",
  },
  moreExamples: [
    {
      english: "She doesn't want any color on her toes.",
      vietnamese: "Cô ấy không muốn sơn màu gì trên móng chân.",
    },
    {
      english: "We don't have that color today.",
      vietnamese: "Hôm nay chúng tôi không có màu đó.",
    },
    {
      english: "He didn't say anything about the price.",
      vietnamese: "Anh ấy không nói gì về giá cả.",
    },
  ],
  quiz: {
    question: "Bạn muốn nói tiệm hết khăn sạch, chọn câu đúng:",
    choices: [
      { id: "a", text: "We don't have no clean towels." },
      { id: "b", text: "We don't have any clean towels." },
      { id: "c", text: "We have no not clean towels." },
    ],
    correctAnswer: "b",
    explanation:
      "Chỉ cần một từ phủ định: 'don't have any'. Thêm 'no' nữa sẽ thành hai lần phủ định, sai ngữ pháp tiếng Anh.",
  },
  speakingPractice: {
    targetEnglish: "I don't have change for a hundred.",
    vietnameseHint: "Tôi không có tiền lẻ cho tờ một trăm.",
  },
};
