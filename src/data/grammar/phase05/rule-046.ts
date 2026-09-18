import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_046: GrammarRuleLesson = {
  id: "rule-046",
  ruleNumber: 46,
  phaseNumber: 5,
  title: "FOR và SINCE — bao lâu và từ khi nào",
  whenToUse:
    "Dùng \"for\" khi nói khoảng thời gian, như \"for 30 minutes\" hay \"for two weeks\". Dùng \"since\" khi nói mốc thời gian bắt đầu, như \"since 2020\" hay \"since Monday\". Nhớ: \"for\" là độ dài, \"since\" là điểm bắt đầu.",
  pattern: "for + khoảng thời gian / since + mốc bắt đầu",
  nailSalonExample: {
    english: "This gel polish will last for two weeks, and I have worked here since 2020.",
    vietnamese: "Sơn gel này sẽ bền trong hai tuần, và tôi đã làm việc ở đây từ năm 2020.",
  },
  moreExamples: [
    { english: "Please wait for 15 minutes.", vietnamese: "Vui lòng chờ trong 15 phút." },
    { english: "She has been a customer since last year.", vietnamese: "Chị ấy là khách quen từ năm ngoái." },
    { english: "We have known each other since high school.", vietnamese: "Chúng tôi biết nhau từ hồi trung học." },
  ],
  quiz: {
    question: "Khách hỏi màu sơn này bền bao lâu. Bạn muốn nói \"Nó bền trong ba tuần.\" Câu nào đúng?",
    choices: [
      { id: "a", text: "It lasts since three weeks." },
      { id: "b", text: "It lasts for three weeks." },
      { id: "c", text: "It lasts three weeks ago." },
    ],
    correctAnswer: "b",
    explanation: "Khi nói độ dài thời gian như \"three weeks\", dùng \"for\", không dùng \"since\".",
  },
  speakingPractice: {
    targetEnglish: "I have been doing nails for ten years, since 2016.",
    vietnameseHint: "Hãy nói: Tôi đã làm nail được mười năm, từ năm 2016.",
  },
};
