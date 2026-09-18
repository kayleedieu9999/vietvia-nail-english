import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_083: GrammarRuleLesson = {
  id: "rule-083",
  ruleNumber: 83,
  phaseNumber: 9,
  title: "Nói \"không\" một cách nhẹ nhàng, lịch sự",
  whenToUse:
    "Khi không có màu khách muốn, hoặc không làm được điều gì đó, đừng nói trống trơn \"No\". Thêm \"I'm sorry\" ở đầu để nghe nhẹ nhàng, lịch sự hơn — khách sẽ thấy dễ chịu hơn nhiều.",
  pattern: "I'm sorry, we don't have... / I'm sorry, we can't...",
  nailSalonExample: {
    english: "I'm sorry, we don't have that color today.",
    vietnamese: "Xin lỗi chị, hôm nay tiệm không có màu đó.",
  },
  moreExamples: [
    {
      english: "I'm sorry, we're fully booked this afternoon.",
      vietnamese: "Xin lỗi anh, chiều nay tiệm kín lịch hết rồi.",
    },
    {
      english: "I'm sorry, we can't do that design in 20 minutes.",
      vietnamese: "Xin lỗi chị, mẫu đó không làm kịp trong 20 phút đâu.",
    },
    {
      english: "I'm sorry, that nail tech is not here today.",
      vietnamese: "Xin lỗi chị, hôm nay thợ đó không có làm.",
    },
  ],
  quiz: {
    question: "Khách hỏi màu tím đậm nhưng tiệm hết màu đó. Cách trả lời nào lịch sự, tự nhiên nhất?",
    choices: [
      { id: "a", text: "No." },
      { id: "b", text: "We do not possess that color." },
      { id: "c", text: "I'm sorry, we don't have that color today." },
    ],
    correctAnswer: "c",
    explanation:
      "Thêm \"I'm sorry\" trước câu \"no\" làm câu trả lời nghe nhẹ nhàng và lịch sự hơn nhiều so với chỉ nói \"No\" trống trơn.",
  },
  speakingPractice: {
    targetEnglish: "I'm sorry, we don't offer that service here.",
    vietnameseHint: "Tập nói câu từ chối nhẹ nhàng này, giọng nhỏ nhẹ và mỉm cười khi nói.",
  },
};
