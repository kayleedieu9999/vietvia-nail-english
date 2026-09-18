import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_078: GrammarRuleLesson = {
  id: "rule-078",
  ruleNumber: 78,
  phaseNumber: 8,
  title: "BORROW hay LEND? Đừng nhầm lẫn",
  whenToUse:
    "❌ 'Can you borrow me your nail file?' → ✅ 'Can you lend me your nail file?' — vì 'borrow' nghĩa là 'mượn' (tôi mượn của bạn), còn 'lend' nghĩa là 'cho mượn' (bạn cho tôi mượn) — hai từ đi ngược chiều nhau.",
  pattern: "I BORROW something FROM someone | You LEND something TO someone",
  nailSalonExample: {
    english: "Can you lend me your phone charger?",
    vietnamese: "Chị cho tôi mượn sạc điện thoại được không?",
  },
  moreExamples: [
    {
      english: "I borrowed a file from my coworker.",
      vietnamese: "Tôi mượn cái giũa từ đồng nghiệp.",
    },
    {
      english: "She lent me twenty dollars for lunch.",
      vietnamese: "Cô ấy cho tôi mượn hai mươi đô để ăn trưa.",
    },
    {
      english: "Can I borrow your pen for a second?",
      vietnamese: "Tôi mượn cây bút của chị một chút được không?",
    },
  ],
  quiz: {
    question: "Bạn muốn mượn cây kéo của đồng nghiệp, chọn câu đúng:",
    choices: [
      { id: "a", text: "Can you borrow me your scissors?" },
      { id: "b", text: "Can you lend me your scissors?" },
      { id: "c", text: "Can I lend your scissors?" },
    ],
    correctAnswer: "b",
    explanation:
      "Khi nhờ người khác cho mình mượn đồ, dùng 'lend me' (bạn cho tôi mượn), không dùng 'borrow me'.",
  },
  speakingPractice: {
    targetEnglish: "Could you lend me a pen, please?",
    vietnameseHint: "Chị cho tôi mượn cây bút được không?",
  },
};
