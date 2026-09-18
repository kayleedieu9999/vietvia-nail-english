import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_059: GrammarRuleLesson = {
  id: "rule-059",
  ruleNumber: 59,
  phaseNumber: 6,
  title: "Lỗi thường gặp với tính từ và trạng từ",
  whenToUse:
    "Người mới học tiếng Anh hay đặt từ tả đặc điểm sai chỗ, hoặc quên thêm '-ly' khi tả cách làm việc. Nhớ: tính từ đứng trước danh từ hoặc sau 'to be', còn trạng từ (-ly) đứng sau động từ thường.",
  pattern: "Tính từ + danh từ  |  Động từ + trạng từ (-ly)",
  nailSalonExample: {
    english: "She files the nails gently.",
    vietnamese: "Cô ấy giũa móng nhẹ nhàng.",
  },
  moreExamples: [
    { english: "I have a beautiful new color.", vietnamese: "Tôi có một màu mới đẹp." },
    { english: "He speaks slowly to the customer.", vietnamese: "Anh ấy nói chậm rãi với khách." },
    { english: "This polish dries quickly.", vietnamese: "Loại sơn này khô nhanh." },
  ],
  quiz: {
    question: "Chọn câu đúng khi nói 'Cô ấy làm việc chăm chỉ':",
    choices: [
      { id: "a", text: "She works hard." },
      { id: "b", text: "She works hardly." },
      { id: "c", text: "She hard works." },
    ],
    correctAnswer: "a",
    explanation:
      "'Hard' vừa là tính từ vừa là trạng từ nên giữ nguyên khi tả 'làm việc chăm chỉ'. 'Hardly' lại có nghĩa khác hẳn là 'hầu như không' — đây là lỗi rất dễ nhầm nên cần nhớ kỹ.",
  },
  speakingPractice: {
    targetEnglish: "She works hard every day.",
    vietnameseHint: "Nói cô ấy làm việc chăm chỉ mỗi ngày.",
  },
};
