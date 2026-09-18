import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_007: GrammarRuleLesson = {
  id: "rule-007",
  ruleNumber: 7,
  phaseNumber: 1,
  title: "THERE IS / THERE ARE — có cái gì đó",
  whenToUse:
    "Khi muốn nói 'có' một cái gì đó ở đâu đó, dùng 'there is' nếu chỉ có một cái, và 'there are' nếu có nhiều cái. Ví dụ có một ghế trống thì nói 'there is', còn có nhiều khách đang chờ thì nói 'there are'.",
  pattern: "There is + một thứ ... — There are + nhiều thứ ...",
  nailSalonExample: {
    english: "There is a new color chart on the table.",
    vietnamese: "Có một bảng màu mới trên bàn.",
  },
  moreExamples: [
    {
      english: "There are three customers waiting now.",
      vietnamese: "Có ba khách đang chờ bây giờ.",
    },
    {
      english: "There is an empty chair near the window.",
      vietnamese: "Có một ghế trống gần cửa sổ.",
    },
    {
      english: "There are many designs to choose from.",
      vietnamese: "Có nhiều kiểu để chọn.",
    },
  ],
  quiz: {
    question: "Bạn muốn nói có nhiều màu gel mới trong tủ. Bạn nói sao?",
    choices: [
      { id: "a", text: "There is many new gel colors in the cabinet." },
      { id: "b", text: "There are many new gel colors in the cabinet." },
      { id: "c", text: "There a many new gel colors in the cabinet." },
    ],
    correctAnswer: "b",
    explanation: "Vì có nhiều màu (nhiều thứ), ta dùng 'there are', không dùng 'there is'.",
  },
  speakingPractice: {
    targetEnglish: "There are two sinks in the back room.",
    vietnameseHint: "Có hai bồn rửa ở phòng phía sau.",
  },
};
