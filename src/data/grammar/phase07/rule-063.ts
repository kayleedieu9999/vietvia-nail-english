import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_063: GrammarRuleLesson = {
  id: "rule-063",
  ruleNumber: 63,
  phaseNumber: 7,
  title: "Could you...? — Lịch sự hơn cho yêu cầu lớn hơn",
  whenToUse:
    "Dùng \"Could you...?\" khi bạn nhờ khách một việc hơi mất thời gian hoặc hơi bất tiện một chút, ví dụ chờ đợi hoặc di chuyển chỗ ngồi. \"Could you\" nghe lịch sự và nhẹ nhàng hơn \"Can you\", rất phù hợp khi yêu cầu điều gì đó lớn hơn bình thường.",
  pattern: "Could you + động từ nguyên mẫu...?",
  nailSalonExample: {
    english: "Could you wait a few minutes?",
    vietnamese: "Chị đợi vài phút được không ạ?",
  },
  moreExamples: [
    {
      english: "Could you come back at three o'clock?",
      vietnamese: "Chị quay lại lúc ba giờ được không ạ?",
    },
    {
      english: "Could you move to this chair, please?",
      vietnamese: "Chị chuyển sang ghế này giúp tôi được không ạ?",
    },
    {
      english: "Could you keep your hand under the light?",
      vietnamese: "Chị giữ tay dưới đèn giúp tôi được không ạ?",
    },
  ],
  quiz: {
    question:
      "Máy sấy đang bận, bạn cần khách đợi thêm năm phút. Câu nào lịch sự và phù hợp nhất?",
    choices: [
      { id: "a", text: "Wait five more minutes." },
      { id: "b", text: "Could you wait five more minutes?" },
      { id: "c", text: "You wait now." },
    ],
    correctAnswer: "b",
    explanation:
      "Yêu cầu khách chờ đợi là điều hơi bất tiện, nên dùng \"Could you...?\" để nghe lịch sự hơn thay vì ra lệnh trực tiếp như \"Wait five more minutes.\"",
  },
  speakingPractice: {
    targetEnglish: "Could you wait a few minutes, please?",
    vietnameseHint: "Chị đợi giúp tôi vài phút được không ạ?",
  },
};
