import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_002: GrammarRuleLesson = {
  id: "rule-002",
  ruleNumber: 2,
  phaseNumber: 1,
  title: "AM / IS / ARE — chọn đúng từ 'thì, là'",
  whenToUse:
    "Khi muốn nói 'là', 'thì', hoặc mô tả trạng thái, tiếng Anh dùng ba từ khác nhau tùy vào mình đang nói về ai. Nói về bản thân thì dùng 'am', nói về một người hay một thứ thì dùng 'is', còn nói về nhiều người hoặc 'you' thì dùng 'are'. Chọn đúng từ giúp câu nghe tự nhiên hơn rất nhiều.",
  pattern: "I + am ... / She,He,It + is ... / You,We,They + are ...",
  nailSalonExample: {
    english: "I am ready for the next customer.",
    vietnamese: "Tôi đã sẵn sàng cho khách tiếp theo.",
  },
  moreExamples: [
    {
      english: "She is busy with a pedicure right now.",
      vietnamese: "Cô ấy đang bận làm pedicure.",
    },
    {
      english: "The customers are happy with their new color.",
      vietnamese: "Các khách hàng hài lòng với màu mới.",
    },
    {
      english: "We are open until eight tonight.",
      vietnamese: "Chúng tôi mở cửa đến tám giờ tối nay.",
    },
  ],
  quiz: {
    question: "Khách hỏi tiệm có đông không. Bạn muốn nói 'Tiệm rất bận hôm nay.' Bạn nói sao?",
    choices: [
      { id: "a", text: "The salon is very busy today." },
      { id: "b", text: "The salon are very busy today." },
      { id: "c", text: "The salon be very busy today." },
    ],
    correctAnswer: "a",
    explanation: "'The salon' là một tiệm, nên dùng 'is', không dùng 'are' hay 'be'.",
  },
  speakingPractice: {
    targetEnglish: "I am sorry for the wait.",
    vietnameseHint: "Tôi xin lỗi vì để bạn chờ.",
  },
};
