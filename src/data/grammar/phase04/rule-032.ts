import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_032: GrammarRuleLesson = {
  id: "rule-032",
  ruleNumber: 32,
  phaseNumber: 4,
  title: "Việc làm mỗi ngày — không thêm “-ing”",
  whenToUse:
    "Khi nói về việc chị làm thường xuyên, mỗi ngày, luôn luôn — chứ không phải chỉ lúc này — dùng động từ ở dạng thường. Nhớ thêm “-s” nếu chủ ngữ là “she/he/it” (một người, một tiệm...).",
  pattern: "I/You/We/They + V  |  She/He/It + V-s",
  nailSalonExample: {
    english: "I open the salon at nine.",
    vietnamese: "Tôi mở tiệm lúc chín giờ.",
  },
  moreExamples: [
    {
      english: "She always uses gel polish.",
      vietnamese: "Cô ấy luôn dùng sơn gel.",
    },
    {
      english: "We close at seven.",
      vietnamese: "Chúng tôi đóng cửa lúc bảy giờ.",
    },
    {
      english: "He works on Saturdays.",
      vietnamese: "Anh ấy làm việc vào thứ Bảy.",
    },
  ],
  quiz: {
    question:
      "Khách hỏi tiệm mấy giờ mở cửa mỗi ngày (chuyện thường lệ). “The salon ___ at nine every day.”",
    choices: [
      { id: "a", text: "open" },
      { id: "b", text: "opens" },
      { id: "c", text: "is opening" },
    ],
    correctAnswer: "b",
    explanation:
      "Đây là việc lặp lại mỗi ngày, chủ ngữ “the salon” giống “it”, nên phải thêm “-s”: opens.",
  },
  speakingPractice: {
    targetEnglish: "I start work at eight every morning.",
    vietnameseHint: "Hãy nói: Tôi bắt đầu làm việc lúc tám giờ mỗi sáng.",
  },
};
