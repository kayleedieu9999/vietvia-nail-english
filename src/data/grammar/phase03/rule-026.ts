import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_026: GrammarRuleLesson = {
  id: "rule-026",
  ruleNumber: 26,
  phaseNumber: 3,
  title: "Thêm dấu nháy + s (‘s) để nói “của tên người đó”",
  whenToUse:
    "Khi muốn nói cái gì là “của” một người có TÊN cụ thể (không phải she/he), thêm dấu nháy đơn và chữ s (’s) ngay sau tên đó. Cách này dùng thay cho việc nói dài dòng “cái của...”.",
  pattern: "Tên người + 's + danh từ",
  nailSalonExample: {
    english: "Lisa's nails are dry now.",
    vietnamese: "Móng của Lisa khô rồi.",
  },
  moreExamples: [
    {
      english: "The customer's color is on the shelf.",
      vietnamese: "Màu sơn của khách đang ở trên kệ.",
    },
    {
      english: "Maria's appointment is next.",
      vietnamese: "Cuộc hẹn của Maria là tiếp theo.",
    },
    {
      english: "Kevin's feet are ready for the massage.",
      vietnamese: "Chân của Kevin đã sẵn sàng để massage.",
    },
  ],
  quiz: {
    question:
      "Chị muốn nói cây bấm móng của Tom đang ở trên bàn. Chị nên nói:",
    choices: [
      { id: "a", text: "Tom nail clipper is on the table." },
      { id: "b", text: "Tom's nail clipper is on the table." },
      { id: "c", text: "Toms nail clipper is on the table." },
    ],
    correctAnswer: "b",
    explanation:
      "Muốn nói “của Tom”, thêm dấu nháy đơn và chữ s ngay sau tên: Tom's. Thiếu dấu nháy hoặc thiếu chữ s đều sai.",
  },
  speakingPractice: {
    targetEnglish: "Susan's polish color is very bright.",
    vietnameseHint: "Hãy nói: Màu sơn của Susan rất tươi.",
  },
};
