import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_084: GrammarRuleLesson = {
  id: "rule-084",
  ruleNumber: 84,
  phaseNumber: 9,
  title: "Hỏi lại xem khách có đồng ý không",
  whenToUse:
    "Sau khi đề nghị một điều gì đó với khách — màu, mẫu, giá — nên hỏi lại một câu ngắn để chắc chắn khách đồng ý. Câu hỏi ngắn này giúp khách cảm thấy được tôn trọng và mình tránh làm sai ý khách.",
  pattern: "Does that sound good? / Is that okay?",
  nailSalonExample: {
    english: "I can do this design for $10 more. Does that sound good?",
    vietnamese: "Em có thể làm mẫu này thêm 10 đô. Chị thấy vậy được không?",
  },
  moreExamples: [
    {
      english: "We can start with your feet first. Is that okay?",
      vietnamese: "Tụi em làm chân trước cho chị nha. Vậy được không?",
    },
    {
      english: "I'll make the color a little lighter. Does that sound good?",
      vietnamese: "Em sẽ làm màu nhạt hơn một chút. Chị thấy vậy ổn không?",
    },
    {
      english: "Your appointment is at 3 PM tomorrow. Is that okay?",
      vietnamese: "Lịch hẹn của chị là 3 giờ chiều mai. Vậy có được không?",
    },
  ],
  quiz: {
    question: "Bạn vừa đề nghị khách làm thêm gel cho móng chân. Câu nào giúp bạn kiểm tra khách có đồng ý không?",
    choices: [
      { id: "a", text: "Does that sound good?" },
      { id: "b", text: "You must agree." },
      { id: "c", text: "I do it now." },
    ],
    correctAnswer: "a",
    explanation:
      "\"Does that sound good?\" là câu hỏi ngắn, lịch sự để kiểm tra khách có đồng ý không. Câu (b) nghe như ép buộc, câu (c) không phải câu hỏi.",
  },
  speakingPractice: {
    targetEnglish: "Is that okay?",
    vietnameseHint: "Tập hỏi câu này sau mỗi lần đề nghị gì đó với khách, giọng lên cao ở cuối câu như đang hỏi.",
  },
};
