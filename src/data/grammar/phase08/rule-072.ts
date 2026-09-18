import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_072: GrammarRuleLesson = {
  id: "rule-072",
  ruleNumber: 72,
  phaseNumber: 8,
  title: "Đừng quên AM/IS/ARE",
  whenToUse:
    "❌ 'I ready for my next customer.' → ✅ 'I am ready for my next customer.' — vì tiếng Việt không cần từ 'thì/là' trước tính từ ('Tôi sẵn sàng'), nhưng câu tiếng Anh luôn cần am/is/are ở đó.",
  pattern: "I am / You-We-They are / He-She-It is + tính từ hoặc danh từ",
  nailSalonExample: {
    english: "I am busy right now, please wait a few minutes.",
    vietnamese: "Tôi đang bận, vui lòng chờ vài phút.",
  },
  moreExamples: [
    {
      english: "This color is too dark for her skin tone.",
      vietnamese: "Màu này quá đậm so với tông da của cô ấy.",
    },
    {
      english: "We are open until seven tonight.",
      vietnamese: "Chúng tôi mở cửa đến bảy giờ tối nay.",
    },
    {
      english: "He is new at this salon.",
      vietnamese: "Anh ấy mới làm ở tiệm này.",
    },
  ],
  quiz: {
    question: "Khách hỏi bạn có rảnh để làm móng ngay không, chọn câu trả lời đúng:",
    choices: [
      { id: "a", text: "I free now." },
      { id: "b", text: "I am free now." },
      { id: "c", text: "I is free now." },
    ],
    correctAnswer: "b",
    explanation:
      "Sau 'I' phải có 'am': 'I am free now'. Không được bỏ từ 'to be', và không dùng 'is' với 'I'.",
  },
  speakingPractice: {
    targetEnglish: "The polish is dry now, you can go.",
    vietnameseHint: "Sơn đã khô rồi, chị có thể đi được rồi.",
  },
};
