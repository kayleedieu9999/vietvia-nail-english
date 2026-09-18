import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_094: GrammarRuleLesson = {
  id: "rule-094",
  ruleNumber: 94,
  phaseNumber: 10,
  title: "I'm sorry about that — Xử lý phàn nàn bình tĩnh",
  whenToUse:
    "Khi khách không hài lòng về điều gì đó, đừng cãi lại hay im lặng bỏ qua. Nói xin lỗi ngắn gọn trước, rồi đề nghị cách sửa ngay — khách sẽ thấy mình quan tâm và chuyên nghiệp.",
  pattern: "I'm sorry about that. Let me fix it for you.",
  nailSalonExample: {
    english: "Customer: This nail is a little crooked. You: I'm sorry about that. Let me fix it for you.",
    vietnamese: "Khách: Móng này hơi lệch. Bạn: Em xin lỗi. Để em sửa lại cho chị ngay.",
  },
  moreExamples: [
    {
      english: "Customer: The color isn't what I expected. You: I'm sorry, let me show you some other colors.",
      vietnamese: "Khách: Màu này không giống như tôi nghĩ. Bạn: Em xin lỗi, để em cho chị xem thêm vài màu khác.",
    },
    {
      english: "Customer: This one is too long. You: I'm sorry about that. I'll make it shorter right now.",
      vietnamese: "Khách: Cái này dài quá. Bạn: Em xin lỗi. Em cắt ngắn lại liền cho chị.",
    },
    {
      english: "Customer: I waited a long time today. You: I'm sorry for the wait. Thank you for your patience.",
      vietnamese: "Khách: Hôm nay tôi đợi lâu quá. Bạn: Em xin lỗi vì để chị đợi lâu. Cảm ơn chị đã kiên nhẫn.",
    },
  ],
  quiz: {
    question: "Khách nói: \"This nail is uneven.\" Bạn nên trả lời gì trước tiên?",
    choices: [
      { id: "a", text: "It looks fine to me." },
      { id: "b", text: "I'm sorry about that. Let me fix it." },
      { id: "c", text: "That's not my fault." },
    ],
    correctAnswer: "b",
    explanation:
      "Xin lỗi và đề nghị sửa ngay giúp khách cảm thấy được lắng nghe và tôn trọng. Câu (a) và (c) nghe như đang tranh cãi lại với khách.",
  },
  speakingPractice: {
    targetEnglish: "I'm sorry about that. Let me fix it for you.",
    vietnameseHint: "Tập nói bằng giọng nhẹ nhàng, bình tĩnh, không nóng vội khi khách phàn nàn.",
  },
};
