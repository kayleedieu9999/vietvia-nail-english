import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_069: GrammarRuleLesson = {
  id: "rule-069",
  ruleNumber: 69,
  phaseNumber: 7,
  title: "Lỗi thường gặp — Nói quá thẳng thay vì dùng modal",
  whenToUse:
    "Nhiều thợ nail hay nói câu mệnh lệnh trực tiếp như ở nhà, ví dụ \"Give me your hand\" hay \"Sit here\". Với khách hàng, câu như vậy nghe rất cộc và thiếu lịch sự. Hãy luôn thêm \"can\", \"could\", hoặc \"would you mind\" vào trước để câu nói nhẹ nhàng hơn.",
  pattern: "Câu ra lệnh (sai) → Can/Could/Would you... (đúng, lịch sự)",
  nailSalonExample: {
    english: "Instead of \"Give me your hand\", say \"Can I see your hand, please?\"",
    vietnamese:
      "Thay vì nói \"Give me your hand\" (Đưa tay đây), hãy nói \"Can I see your hand, please?\" (Tôi xem tay chị được không ạ?)",
  },
  moreExamples: [
    {
      english: "Instead of \"Sit here\", say \"Could you sit here, please?\"",
      vietnamese:
        "Thay vì nói \"Sit here\" (Ngồi đây), hãy nói \"Could you sit here, please?\" (Chị ngồi đây giúp tôi được không ạ?)",
    },
    {
      english: "Instead of \"Pay now\", say \"Could you pay at the front, please?\"",
      vietnamese:
        "Thay vì nói \"Pay now\" (Trả tiền đi), hãy nói \"Could you pay at the front, please?\" (Chị thanh toán ở quầy giúp tôi được không ạ?)",
    },
    {
      english: "Instead of \"Move your foot\", say \"Can you move your foot a little?\"",
      vietnamese:
        "Thay vì nói \"Move your foot\" (Dịch chân qua), hãy nói \"Can you move your foot a little?\" (Chị dịch chân qua một chút được không ạ?)",
    },
  ],
  quiz: {
    question:
      "Bạn muốn nhờ khách xòe bàn tay ra để dũa móng. Câu nào lịch sự, đúng chuẩn với khách hàng?",
    choices: [
      { id: "a", text: "Open your hand." },
      { id: "b", text: "Can you open your hand for me?" },
      { id: "c", text: "Hand, now." },
    ],
    correctAnswer: "b",
    explanation:
      "Ra lệnh trực tiếp như \"Open your hand\" hay \"Hand, now\" nghe rất thô lỗ với khách. Luôn thêm \"Can you...?\" để câu nói lịch sự và chuyên nghiệp hơn.",
  },
  speakingPractice: {
    targetEnglish: "Can I see your hand, please?",
    vietnameseHint: "Tôi xem tay chị được không ạ?",
  },
};
