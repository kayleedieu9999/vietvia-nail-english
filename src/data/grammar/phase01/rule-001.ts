import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_001: GrammarRuleLesson = {
  id: "rule-001",
  ruleNumber: 1,
  phaseNumber: 1,
  title: "S + V(s/es) — nói về một người",
  whenToUse:
    "Khi nói về một người, ví dụ 'she' (cô ấy) hoặc 'he' (anh ấy), động từ thường phải thêm '-s' ở cuối. Còn khi nói về bản thân mình (I), hoặc nhiều người như 'we', 'they', hay nói với ai đó (you), thì động từ giữ nguyên, không thêm gì. Ví dụ: nói về cô ấy thì 'she works', nhưng nói về mình thì 'I work'.",
  pattern: "She/He/It + V-s ... — I/You/We/They + V ...",
  nailSalonExample: {
    english: "She paints nails every day.",
    vietnamese: "Cô ấy sơn móng tay mỗi ngày.",
  },
  moreExamples: [
    {
      english: "He files nails very carefully.",
      vietnamese: "Anh ấy dũa móng tay rất cẩn thận.",
    },
    {
      english: "I clean my tools after every customer.",
      vietnamese: "Tôi vệ sinh dụng cụ sau mỗi khách.",
    },
    {
      english: "We open the salon at nine o'clock.",
      vietnamese: "Chúng tôi mở tiệm lúc chín giờ.",
    },
  ],
  quiz: {
    question: "Khách hỏi bạn có làm việc ở đây mỗi ngày không. Bạn trả lời thế nào?",
    choices: [
      { id: "a", text: "I works here every day." },
      { id: "b", text: "I work here every day." },
      { id: "c", text: "I working here every day." },
    ],
    correctAnswer: "b",
    explanation:
      "Với 'I', động từ giữ nguyên, không thêm -s. Chỉ khi nói về một người khác như 'she' hay 'he' mới thêm -s.",
  },
  speakingPractice: {
    targetEnglish: "He trims cuticles before the polish.",
    vietnameseHint: "Anh ấy tỉa da quanh móng trước khi sơn.",
  },
};
