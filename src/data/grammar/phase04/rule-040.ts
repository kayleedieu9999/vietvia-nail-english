import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_040: GrammarRuleLesson = {
  id: "rule-040",
  ruleNumber: 40,
  phaseNumber: 4,
  title: "Ôn lại: bây giờ — mỗi ngày — đã xong — sắp tới",
  whenToUse:
    "Nhớ lại 4 cách nói theo từng thời điểm: đang làm ngay (am/is/are + V-ing), làm mỗi ngày (V/V-s), đã làm xong (V-ed), và sắp làm (going to / will). Chọn đúng cách nói theo đúng lúc là chìa khóa để khách hiểu chị.",
  pattern:
    "Ngay bây giờ: am/is/are+V-ing | Mỗi ngày: V/V-s | Đã xong: V-ed | Sắp tới: going to/will + V",
  nailSalonExample: {
    english: "I already finished your manicure, and now I'm starting your pedicure.",
    vietnamese: "Tôi đã làm xong nail tay cho chị rồi, và bây giờ tôi đang bắt đầu làm chân.",
  },
  moreExamples: [
    {
      english: "I usually open at nine, but I'm opening early today.",
      vietnamese: "Tôi thường mở cửa lúc chín giờ, nhưng hôm nay tôi mở sớm.",
    },
    {
      english: "She came in yesterday, and she's going to come back tomorrow.",
      vietnamese: "Cô ấy đã đến hôm qua, và cô ấy sẽ quay lại vào ngày mai.",
    },
    {
      english: "I'll call you when your nails are dry.",
      vietnamese: "Tôi sẽ gọi cho chị khi móng khô.",
    },
  ],
  quiz: {
    question:
      "Chị đã làm xong tay và sắp làm chân cho khách. Câu nào nói đúng nhất cả hai ý đó?",
    choices: [
      { id: "a", text: "I finish your hands, I do your feet." },
      { id: "b", text: "I already finished your hands, and I'm going to start your feet." },
      { id: "c", text: "I'm finishing your hands, I started your feet." },
    ],
    correctAnswer: "b",
    explanation:
      "“Đã xong” dùng quá khứ + already (already finished), “sắp làm” dùng going to (going to start): I already finished your hands, and I'm going to start your feet.",
  },
  speakingPractice: {
    targetEnglish: "I already did your left hand, and now I'm doing your right hand.",
    vietnameseHint: "Hãy nói: Tôi đã làm xong tay trái cho chị rồi, và bây giờ tôi đang làm tay phải.",
  },
};
