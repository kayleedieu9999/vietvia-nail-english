import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_043: GrammarRuleLesson = {
  id: "rule-043",
  ruleNumber: 43,
  phaseNumber: 5,
  title: "IN — tháng, mùa, năm và không gian kín",
  whenToUse:
    "Dùng \"in\" khi nói tháng (in July), mùa (in the summer) hoặc năm (in 2024). \"In\" cũng dùng khi nói ở bên trong một không gian kín, như trong tiệm, trong ngăn kéo. Nhớ: khoảng thời gian dài và không gian kín thì dùng \"in\".",
  pattern: "in + tháng/mùa/năm / in + không gian kín",
  nailSalonExample: {
    english: "We started this job in 2020, and now we work in this salon.",
    vietnamese: "Chúng tôi bắt đầu công việc này vào năm 2020, và bây giờ làm việc trong tiệm này.",
  },
  moreExamples: [
    { english: "Business is slow in January.", vietnamese: "Công việc buôn bán chậm vào tháng Một." },
    { english: "It gets very busy in the summer.", vietnamese: "Tiệm rất đông khách vào mùa hè." },
    { english: "The extra towels are in the cabinet.", vietnamese: "Khăn dự phòng nằm trong tủ." },
  ],
  quiz: {
    question: "Khách hỏi khi nào bạn bắt đầu làm nail. Bạn muốn nói \"Tôi bắt đầu vào năm 2019.\" Câu nào đúng?",
    choices: [
      { id: "a", text: "I started on 2019." },
      { id: "b", text: "I started in 2019." },
      { id: "c", text: "I started at 2019." },
    ],
    correctAnswer: "b",
    explanation: "Với năm như \"2019\", tiếng Anh dùng \"in\", không dùng \"on\" hay \"at\".",
  },
  speakingPractice: {
    targetEnglish: "We are usually very busy in December, and all the supplies are in the back room.",
    vietnameseHint: "Hãy nói: Chúng tôi thường rất bận vào tháng 12, và đồ dùng đều nằm trong phòng phía sau.",
  },
};
