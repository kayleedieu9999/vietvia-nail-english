import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_025: GrammarRuleLesson = {
  id: "rule-025",
  ruleNumber: 25,
  phaseNumber: 3,
  title: "Của ai? Dùng my / your / her / his / their trước danh từ",
  whenToUse:
    "Khi muốn nói cái gì đó là “của ai”, đặt my (của tôi), your (của bạn), her (của chị ấy), his (của anh ấy), their (của họ) ngay trước danh từ. Đây là cách nói “của” đơn giản nhất, không cần thêm từ nào khác.",
  pattern: "my / your / her / his / their + danh từ",
  nailSalonExample: {
    english: "Your nails are ready.",
    vietnamese: "Móng của chị xong rồi.",
  },
  moreExamples: [
    {
      english: "Her appointment is at three o'clock.",
      vietnamese: "Cuộc hẹn của chị ấy là lúc ba giờ.",
    },
    {
      english: "His hands are very dry.",
      vietnamese: "Tay của anh ấy rất khô.",
    },
    {
      english: "Their color choice is beautiful.",
      vietnamese: "Màu họ chọn rất đẹp.",
    },
  ],
  quiz: {
    question:
      "Chị muốn hỏi khách nam về cuộc hẹn của anh ấy. Chị nên nói: “What time is ___ appointment?”",
    choices: [
      { id: "a", text: "he" },
      { id: "b", text: "his" },
      { id: "c", text: "him" },
    ],
    correctAnswer: "b",
    explanation:
      "Trước danh từ “appointment” (cuộc hẹn), phải dùng “his” (của anh ấy), không dùng “he” hay “him”.",
  },
  speakingPractice: {
    targetEnglish: "My next customer is at four o'clock.",
    vietnameseHint: "Hãy nói: Khách tiếp theo của tôi là lúc bốn giờ.",
  },
};
