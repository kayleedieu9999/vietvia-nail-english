import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_008: GrammarRuleLesson = {
  id: "rule-008",
  ruleNumber: 8,
  phaseNumber: 1,
  title: "GOES, WATCHES, WASHES — thêm -es đặc biệt",
  whenToUse:
    "Một số động từ khi nói về một người không chỉ thêm '-s' mà phải thêm '-es', ví dụ 'go' thành 'goes', 'watch' thành 'watches', 'wash' thành 'washes'. Những từ này thường kết thúc bằng âm 'o', 'ch', 'sh'. Nghe quen tai một chút là mình sẽ nhớ nhanh thôi.",
  pattern: "She/He/It + goes/watches/washes/fixes ...",
  nailSalonExample: {
    english: "She goes to the supply store every Monday.",
    vietnamese: "Cô ấy đi đến cửa hàng vật tư mỗi thứ Hai.",
  },
  moreExamples: [
    {
      english: "He watches a nail art tutorial every night.",
      vietnamese: "Anh ấy xem video hướng dẫn vẽ móng mỗi tối.",
    },
    {
      english: "The salon washes towels after every shift.",
      vietnamese: "Tiệm giặt khăn sau mỗi ca làm.",
    },
    {
      english: "She fixes broken nails quickly.",
      vietnamese: "Cô ấy sửa móng gãy rất nhanh.",
    },
  ],
  quiz: {
    question: "Bạn muốn nói cô quản lý đi ngân hàng mỗi thứ Sáu. Bạn nói sao?",
    choices: [
      { id: "a", text: "She goes to the bank every Friday." },
      { id: "b", text: "She go to the bank every Friday." },
      { id: "c", text: "She gos to the bank every Friday." },
    ],
    correctAnswer: "a",
    explanation:
      "Động từ 'go' khi nói về một người phải thêm '-es' thành 'goes', không phải 'gos' hay để nguyên 'go'.",
  },
  speakingPractice: {
    targetEnglish: "He washes his brushes after work.",
    vietnameseHint: "Anh ấy rửa cọ sau khi làm việc xong.",
  },
};
