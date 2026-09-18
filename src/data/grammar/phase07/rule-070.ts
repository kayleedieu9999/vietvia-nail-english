import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_070: GrammarRuleLesson = {
  id: "rule-070",
  ruleNumber: 70,
  phaseNumber: 7,
  title: "Ôn tập — Ghép các câu lịch sự lại với nhau",
  whenToUse:
    "Đây là bài ôn tập CHẶNG 7. Trong một lần phục vụ khách thật, bạn sẽ dùng nhiều câu modal cùng lúc: xin phép, nhờ vả, mời chọn, khuyên nhẹ nhàng. Ghi nhớ các mẫu câu này và dùng chúng liên tục sẽ giúp bạn nói chuyện với khách chuyên nghiệp và dễ chịu hơn rất nhiều.",
  pattern: "Can I...? / Could you...? / Would you like...? / You should...",
  nailSalonExample: {
    english: "Can I start now? Would you like gel or regular polish?",
    vietnamese: "Tôi bắt đầu được chưa ạ? Chị muốn sơn gel hay sơn thường ạ?",
  },
  moreExamples: [
    {
      english: "Could you wait a moment? Can I get you some water first?",
      vietnamese: "Chị đợi một chút được không ạ? Để tôi lấy nước cho chị trước nhé?",
    },
    {
      english: "Would you mind moving your bag? Let me set up the table.",
      vietnamese: "Chị có phiền dịch túi xách qua không ạ? Để tôi dọn bàn trước.",
    },
    {
      english: "You should let it dry longer. Could you sit here for five more minutes?",
      vietnamese: "Chị nên để khô thêm chút nữa. Chị ngồi đây thêm năm phút được không ạ?",
    },
  ],
  quiz: {
    question:
      "Bạn vừa sơn xong móng cho khách và muốn khách ngồi chờ khô thêm một lát. Câu nào đúng và lịch sự nhất?",
    choices: [
      { id: "a", text: "Sit and wait, don't touch." },
      { id: "b", text: "Could you sit here a little longer so it can dry?" },
      { id: "c", text: "Dry now, stay." },
    ],
    correctAnswer: "b",
    explanation:
      "Câu (b) dùng \"Could you...?\" để nhờ khách một cách lịch sự, đúng tinh thần của cả CHẶNG 7. Hai câu còn lại nghe như ra lệnh, không phù hợp khi phục vụ khách hàng.",
  },
  speakingPractice: {
    targetEnglish: "Could you sit here a little longer so it can dry?",
    vietnameseHint: "Chị ngồi đây thêm một lát để móng khô hẳn được không ạ?",
  },
};
