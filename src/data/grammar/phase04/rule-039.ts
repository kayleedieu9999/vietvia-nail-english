import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_039: GrammarRuleLesson = {
  id: "rule-039",
  ruleNumber: 39,
  phaseNumber: 4,
  title: "Lỗi hay gặp: lẫn lộn giữa “mỗi ngày” và “ngay bây giờ”",
  whenToUse:
    "Người Việt hay quen dùng một dạng động từ cho mọi trường hợp, nên dễ nói “I do your nails” (nghe như việc thường ngày) trong khi thật ra đang làm NGAY LÚC ĐÓ — phải nói “I'm doing your nails”. Ngược lại, khi nói sự thật chung (nơi mình làm việc), đừng thêm “-ing”: nói “I work here”, không nói “I'm working here”.",
  pattern: "Ngay bây giờ = am/is/are + V-ing  |  Thường ngày, sự thật chung = V / V-s",
  nailSalonExample: {
    english: "I work here every day, but right now I'm helping this customer.",
    vietnamese: "Tôi làm việc ở đây mỗi ngày, nhưng ngay bây giờ tôi đang giúp khách này.",
  },
  moreExamples: [
    {
      english: "She usually does gel, but today she's doing regular polish.",
      vietnamese: "Cô ấy thường làm gel, nhưng hôm nay cô ấy đang làm sơn thường.",
    },
    {
      english: "I don't work on Sundays.",
      vietnamese: "Tôi không làm việc vào Chủ nhật.",
    },
    {
      english: "Wait, I'm helping another customer right now.",
      vietnamese: "Đợi chút, tôi đang giúp khách khác ngay bây giờ.",
    },
  ],
  quiz: {
    question:
      "Khách hỏi chị có làm việc ở tiệm này không (hỏi về sự thật chung, không phải lúc này). Chị trả lời sao cho đúng?",
    choices: [
      { id: "a", text: "I'm working here." },
      { id: "b", text: "I work here." },
      { id: "c", text: "I working here." },
    ],
    correctAnswer: "b",
    explanation:
      "Đây là sự thật chung, không phải chỉ ngay lúc này, nên dùng “I work here”, không dùng “I'm working here”.",
  },
  speakingPractice: {
    targetEnglish: "I usually start at nine, but today I'm starting at eight.",
    vietnameseHint: "Hãy nói: Tôi thường bắt đầu lúc chín giờ, nhưng hôm nay tôi bắt đầu lúc tám giờ.",
  },
};
