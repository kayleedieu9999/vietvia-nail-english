import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_022: GrammarRuleLesson = {
  id: "rule-022",
  ruleNumber: 22,
  phaseNumber: 3,
  title: "Vài từ đặc biệt không thêm “-s” — đổi hẳn chữ",
  whenToUse:
    "Đa số từ chỉ cần thêm “-s” khi có nhiều cái. Nhưng có vài từ hay dùng trong tiệm nails lại đổi hẳn thành chữ khác khi có từ 2 trở lên, không thêm “-s”. Học thuộc vài từ này là đủ, không cần nhớ luật.",
  pattern: "foot → feet  |  person → people  |  woman → women  |  man → men",
  nailSalonExample: {
    english: "Please put your feet in the water.",
    vietnamese: "Chị đặt hai bàn chân vào nước giúp em.",
  },
  moreExamples: [
    {
      english: "Two people are waiting for a pedicure.",
      vietnamese: "Có hai người đang chờ làm chân.",
    },
    {
      english: "Three women came in together.",
      vietnamese: "Ba người phụ nữ đến cùng nhau.",
    },
    {
      english: "My feet are cold.",
      vietnamese: "Hai bàn chân của tôi bị lạnh.",
    },
  ],
  quiz: {
    question:
      "Chị muốn nói có 4 người khách nữ đang chờ. Chị nên nói: “Four ___ are waiting.”",
    choices: [
      { id: "a", text: "womans" },
      { id: "b", text: "women" },
      { id: "c", text: "woman" },
    ],
    correctAnswer: "b",
    explanation:
      "“Woman” (một người phụ nữ) đổi thành “women” khi có từ 2 trở lên, không thêm “-s” như từ thường.",
  },
  speakingPractice: {
    targetEnglish: "Two people are waiting for a manicure.",
    vietnameseHint: "Hãy nói: Có hai người đang chờ làm tay.",
  },
};
