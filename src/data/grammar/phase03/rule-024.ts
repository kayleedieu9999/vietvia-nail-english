import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_024: GrammarRuleLesson = {
  id: "rule-024",
  ruleNumber: 24,
  phaseNumber: 3,
  title: "Cho ai, hỏi ai, giúp ai — dùng me / him / her / them",
  whenToUse:
    "Khi mình là người nhận hành động (được giúp, được hỏi, được đưa cái gì) thì dùng nhóm từ khác: me, you, him, her, it, us, them. Nhóm này thường đứng SAU động từ hoặc sau “to/for”, khác với he/she/they đứng trước động từ.",
  pattern: "động từ + me / him / her / it / us / them",
  nailSalonExample: {
    english: "Please give her the pink color.",
    vietnamese: "Làm ơn đưa cho chị ấy màu hồng.",
  },
  moreExamples: [
    {
      english: "Can you help me with this pedicure?",
      vietnamese: "Anh/chị có thể giúp tôi làm chân này không?",
    },
    {
      english: "I will call them when it's ready.",
      vietnamese: "Tôi sẽ gọi họ khi xong.",
    },
    {
      english: "Ask him if he wants gel or regular polish.",
      vietnamese: "Hỏi anh ấy xem muốn sơn gel hay sơn thường.",
    },
  ],
  quiz: {
    question:
      "Khách hỏi giá dịch vụ. Chị muốn nhờ đồng nghiệp trả lời giúp khách đó: “Please tell ___ the price.”",
    choices: [
      { id: "a", text: "she" },
      { id: "b", text: "her" },
      { id: "c", text: "hers" },
    ],
    correctAnswer: "b",
    explanation:
      "Sau động từ “tell” phải dùng “her” (cho chị ấy), không dùng “she” — “she” chỉ đứng trước động từ.",
  },
  speakingPractice: {
    targetEnglish: "Can you give them two more towels?",
    vietnameseHint: "Hãy nói: Anh/chị có thể đưa thêm cho họ hai cái khăn không?",
  },
};
