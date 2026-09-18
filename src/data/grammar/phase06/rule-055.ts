import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_055: GrammarRuleLesson = {
  id: "rule-055",
  ruleNumber: 55,
  phaseNumber: 6,
  title: "Trạng từ chỉ cách thức (-ly)",
  whenToUse:
    "Khi bạn muốn nói mình làm việc gì đó như thế nào — cẩn thận, nhanh, hay nhẹ nhàng — hãy thêm '-ly' vào tính từ để biến nó thành trạng từ, rồi đặt sau động từ.",
  pattern: "Động từ + trạng từ (-ly)",
  nailSalonExample: {
    english: "I will file your nails carefully.",
    vietnamese: "Tôi sẽ giũa móng cho chị cẩn thận.",
  },
  moreExamples: [
    { english: "She paints slowly and neatly.", vietnamese: "Cô ấy sơn chậm rãi và gọn gàng." },
    { english: "Please sit quietly.", vietnamese: "Xin chị ngồi yên nhé." },
    { english: "He works quickly.", vietnamese: "Anh ấy làm việc nhanh." },
  ],
  quiz: {
    question: "Bạn muốn nói 'Tôi làm nhẹ nhàng', chọn câu đúng:",
    choices: [
      { id: "a", text: "I work gentle." },
      { id: "b", text: "I work gently." },
      { id: "c", text: "I working gently." },
    ],
    correctAnswer: "b",
    explanation:
      "Tính từ 'gentle' phải thêm '-ly' thành trạng từ 'gently' để tả cách làm việc, đứng sau động từ 'work'.",
  },
  speakingPractice: {
    targetEnglish: "I will massage your hand gently.",
    vietnameseHint: "Nói bạn sẽ mát-xa tay nhẹ nhàng cho khách.",
  },
};
