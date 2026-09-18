import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_062: GrammarRuleLesson = {
  id: "rule-062",
  ruleNumber: 62,
  phaseNumber: 7,
  title: "Can you...? — Nhờ khách làm một việc đơn giản",
  whenToUse:
    "Dùng \"Can you...?\" khi bạn muốn nhờ khách làm một điều nhỏ, đơn giản để giúp bạn làm việc dễ hơn, ví dụ nắm tay lại hay xòe ngón tay ra. Câu này ngắn gọn nhưng vẫn lịch sự, phù hợp cho những yêu cầu hằng ngày trong tiệm.",
  pattern: "Can you + động từ nguyên mẫu...?",
  nailSalonExample: {
    english: "Can you make a fist?",
    vietnamese: "Chị nắm tay lại được không?",
  },
  moreExamples: [
    {
      english: "Can you spread your fingers?",
      vietnamese: "Chị xòe ngón tay ra được không?",
    },
    {
      english: "Can you hold still for a second?",
      vietnamese: "Chị giữ yên một chút được không?",
    },
    {
      english: "Can you lift your foot a little?",
      vietnamese: "Chị nhấc chân lên một chút được không?",
    },
  ],
  quiz: {
    question:
      "Bạn cần khách nắm chặt tay lại để bạn dũa móng dễ hơn. Bạn nói gì?",
    choices: [
      { id: "a", text: "Make a fist now." },
      { id: "b", text: "Can you make a fist?" },
      { id: "c", text: "You make fist." },
    ],
    correctAnswer: "b",
    explanation:
      "\"Make a fist now\" nghe như ra lệnh. \"Can you make a fist?\" là câu nhờ lịch sự, nhẹ nhàng hơn nhiều khi nói với khách.",
  },
  speakingPractice: {
    targetEnglish: "Can you make a fist for me?",
    vietnameseHint: "Chị nắm tay lại giúp tôi được không?",
  },
};
