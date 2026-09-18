import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_045: GrammarRuleLesson = {
  id: "rule-045",
  ruleNumber: 45,
  phaseNumber: 5,
  title: "Giới từ chỉ vị trí — in, on, under, next to",
  whenToUse:
    "Dùng những từ này để nói đồ vật nằm ở đâu trong tiệm. \"In\" là bên trong (in the drawer). \"On\" là bên trên (on the shelf). \"Under\" là bên dưới (under the table). \"Next to\" là bên cạnh (next to the sink). Rất hữu ích khi khách hoặc đồng nghiệp hỏi đồ ở đâu.",
  pattern: "in / on / under / next to + chỗ để đồ",
  nailSalonExample: {
    english: "The nail files are in the drawer, next to the cotton balls.",
    vietnamese: "Dũa móng nằm trong ngăn kéo, bên cạnh bông gòn.",
  },
  moreExamples: [
    { english: "Your polish color is on the shelf.", vietnamese: "Màu sơn của chị ở trên kệ." },
    { english: "There is a towel under the table.", vietnamese: "Có một cái khăn ở dưới bàn." },
    { english: "The hand lotion is next to the sink.", vietnamese: "Kem dưỡng tay ở bên cạnh bồn rửa." },
  ],
  quiz: {
    question: "Đồng nghiệp hỏi lọ dầu dưỡng móng ở đâu. Nó nằm bên dưới bàn làm việc. Câu nào đúng?",
    choices: [
      { id: "a", text: "It is on under the table." },
      { id: "b", text: "It is under the table." },
      { id: "c", text: "It is at under the table." },
    ],
    correctAnswer: "b",
    explanation: "\"Under\" đã tự đủ nghĩa \"ở bên dưới\", không cần thêm \"on\" hay \"at\" phía trước nó.",
  },
  speakingPractice: {
    targetEnglish: "The clean towels are in the cabinet, and the lotion is next to the sink.",
    vietnameseHint: "Hãy nói: Khăn sạch nằm trong tủ, và kem dưỡng ở bên cạnh bồn rửa.",
  },
};
