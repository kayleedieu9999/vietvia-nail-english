import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_071: GrammarRuleLesson = {
  id: "rule-071",
  ruleNumber: 71,
  phaseNumber: 8,
  title: "Đừng quên thêm -S cho He/She/It",
  whenToUse:
    "❌ 'She work here.' → ✅ 'She works here.' — vì với 'he/she/it' (một người, một vật), động từ ở thì hiện tại đơn phải thêm -s hoặc -es. Đây là lỗi rất nhiều người Việt hay mắc vì tiếng Việt không có quy tắc này.",
  pattern: "He/She/It + động từ thêm -s hoặc -es (thì hiện tại đơn)",
  nailSalonExample: {
    english: "My co-worker does gel manicures every day.",
    vietnamese: "Đồng nghiệp của tôi làm gel manicure mỗi ngày.",
  },
  moreExamples: [
    {
      english: "She always arrives early for her shift.",
      vietnamese: "Cô ấy luôn đến sớm cho ca làm việc.",
    },
    {
      english: "He likes doing pedicures more than manicures.",
      vietnamese: "Anh ấy thích làm pedicure hơn manicure.",
    },
    {
      english: "The salon opens at nine every morning.",
      vietnamese: "Tiệm mở cửa lúc chín giờ mỗi sáng.",
    },
  ],
  quiz: {
    question: "Chọn câu đúng khi nói về đồng nghiệp của bạn:",
    choices: [
      { id: "a", text: "She work on Saturdays." },
      { id: "b", text: "She works on Saturdays." },
      { id: "c", text: "She working on Saturdays." },
    ],
    correctAnswer: "b",
    explanation:
      "'She' là ngôi thứ ba số ít nên động từ phải thêm -s: 'works', không phải 'work' hay 'working'.",
  },
  speakingPractice: {
    targetEnglish: "My manager checks the schedule every morning.",
    vietnameseHint: "Quản lý của tôi kiểm tra lịch mỗi sáng.",
  },
};
