import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_088: GrammarRuleLesson = {
  id: "rule-088",
  ruleNumber: 88,
  phaseNumber: 9,
  title: "Hỏi khách xem có hài lòng không",
  whenToUse:
    "Sau khi làm xong, hỏi khách một câu ngắn để biết khách có thích không. Nếu khách không hài lòng, mình còn kịp sửa trước khi khách về. Hỏi cũng làm khách thấy được quan tâm.",
  pattern: "How does that feel? / Do you like the color?",
  nailSalonExample: {
    english: "How does that feel? Not too tight?",
    vietnamese: "Chị thấy sao? Có chật quá không?",
  },
  moreExamples: [
    {
      english: "Do you like the color?",
      vietnamese: "Chị có thích màu này không?",
    },
    {
      english: "How does the shape look? Do you want it shorter?",
      vietnamese: "Dáng móng vậy được chưa? Chị muốn ngắn hơn không?",
    },
    {
      english: "Is the length okay for you?",
      vietnamese: "Độ dài này được với chị không?",
    },
  ],
  quiz: {
    question: "Bạn vừa làm xong móng cho khách và muốn biết khách có hài lòng không. Câu nào tự nhiên nhất?",
    choices: [
      { id: "a", text: "Please provide feedback on the service." },
      { id: "b", text: "Do you like the color?" },
      { id: "c", text: "State your opinion now." },
    ],
    correctAnswer: "b",
    explanation:
      "\"Do you like the color?\" là câu hỏi ngắn, thân thiện, tự nhiên. Câu (a) và (c) nghe như đang yêu cầu khảo sát, quá cứng nhắc.",
  },
  speakingPractice: {
    targetEnglish: "How does that feel?",
    vietnameseHint: "Tập hỏi câu này sau khi làm xong, giọng nhẹ nhàng và chân thành.",
  },
};
