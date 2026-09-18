import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_066: GrammarRuleLesson = {
  id: "rule-066",
  ruleNumber: 66,
  phaseNumber: 7,
  title: "Would you mind...? — Nhờ việc hơi bất tiện một cách rất lịch sự",
  whenToUse:
    "Dùng \"Would you mind...?\" khi bạn nhờ khách làm điều gì đó hơi bất tiện một chút, ví dụ dời đồ đạc hoặc đổi chỗ ngồi. Đây là cách nói lịch sự nhất trong các câu nhờ vả, giúp khách không cảm thấy bị phiền.",
  pattern: "Would you mind + động từ thêm -ing...?",
  nailSalonExample: {
    english: "Would you mind moving your bag?",
    vietnamese: "Chị có phiền dịch túi xách qua một chút không ạ?",
  },
  moreExamples: [
    {
      english: "Would you mind sitting here instead?",
      vietnamese: "Chị có phiền ngồi ghế này thay vào không ạ?",
    },
    {
      english: "Would you mind taking off your ring?",
      vietnamese: "Chị có phiền tháo nhẫn ra không ạ?",
    },
    {
      english: "Would you mind waiting just five more minutes?",
      vietnamese: "Chị có phiền đợi thêm năm phút không ạ?",
    },
  ],
  quiz: {
    question:
      "Túi xách của khách đang chắn lối đi, bạn cần khách dịch túi qua một chút. Câu nào lịch sự nhất?",
    choices: [
      { id: "a", text: "Move your bag." },
      { id: "b", text: "Would you mind moving your bag?" },
      { id: "c", text: "Your bag is in the way, move it." },
    ],
    correctAnswer: "b",
    explanation:
      "\"Move your bag\" và câu chỉ trích khách nghe rất thô lỗ. \"Would you mind moving your bag?\" là cách nhờ rất lịch sự cho một việc hơi bất tiện.",
  },
  speakingPractice: {
    targetEnglish: "Would you mind moving your bag, please?",
    vietnameseHint: "Chị có phiền dịch túi xách giúp tôi một chút không ạ?",
  },
};
