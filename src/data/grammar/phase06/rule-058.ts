import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_058: GrammarRuleLesson = {
  id: "rule-058",
  ruleNumber: 58,
  phaseNumber: 6,
  title: "Dùng 'because' để nêu lý do",
  whenToUse:
    "Khi bạn muốn giải thích cho khách lý do tại sao bạn khuyên dùng sản phẩm này hay làm theo cách này, hãy dùng 'because' rồi nói lý do ngay sau đó.",
  pattern: "Kết quả + because + lý do",
  nailSalonExample: {
    english: "I use gel because it lasts longer.",
    vietnamese: "Tôi dùng gel vì nó bền hơn.",
  },
  moreExamples: [
    { english: "She is happy because her nails look great.", vietnamese: "Cô ấy vui vì móng của cô ấy đẹp." },
    { english: "We are busy because today is Saturday.", vietnamese: "Chúng tôi bận vì hôm nay là thứ Bảy." },
    { english: "I recommend this color because it matches your dress.", vietnamese: "Tôi khuyên chị dùng màu này vì nó hợp với váy của chị." },
  ],
  quiz: {
    question: "Bạn muốn giải thích tại sao giá cao hơn bình thường, chọn câu đúng:",
    choices: [
      { id: "a", text: "The price is higher because it is a special design." },
      { id: "b", text: "The price is higher, because is a special design." },
      { id: "c", text: "The price is higher because special design." },
    ],
    correctAnswer: "a",
    explanation:
      "Sau 'because' phải là một câu đầy đủ có chủ ngữ và động từ, ví dụ 'it is a special design'.",
  },
  speakingPractice: {
    targetEnglish: "I clean my station because it keeps customers safe.",
    vietnameseHint: "Giải thích lý do bạn vệ sinh chỗ làm việc sạch sẽ.",
  },
};
