import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_014: GrammarRuleLesson = {
  id: "rule-014",
  ruleNumber: 14,
  phaseNumber: 2,
  title: "The — Khi Chỉ Có Một Cái Duy Nhất",
  whenToUse:
    "Dùng \"the\" khi trong tiệm hoặc trong phòng chỉ có MỘT cái duy nhất của thứ đó — như quầy lễ tân, nhà vệ sinh, bồn rửa. Dù chưa nhắc đến trước đó, ai cũng hiểu bạn đang nói về cái nào vì chỉ có một cái.",
  pattern: "the + danh từ (chỉ có một cái trong tiệm/phòng đó)",
  nailSalonExample: {
    english: "Please pay at the front desk.",
    vietnamese: "Vui lòng thanh toán tại quầy lễ tân.",
  },
  moreExamples: [
    {
      english: "The bathroom is in the back.",
      vietnamese: "Nhà vệ sinh ở phía sau.",
    },
    {
      english: "Wash your hands at the sink first.",
      vietnamese: "Rửa tay tại bồn rửa trước đã.",
    },
    {
      english: "Turn off the light when you leave.",
      vietnamese: "Tắt đèn khi bạn ra về.",
    },
  ],
  quiz: {
    question:
      "Tiệm chỉ có một cửa ra vào. Bạn muốn chỉ đường cho khách. Chọn câu đúng.",
    choices: [
      { id: "a", text: "The door is over there." },
      { id: "b", text: "A door is over there." },
      { id: "c", text: "Door is over there." },
    ],
    correctAnswer: "a",
    explanation:
      "Vì tiệm chỉ có một cửa duy nhất, khách hàng sẽ hiểu ngay bạn đang nói về cửa nào, nên dùng \"the\".",
  },
  speakingPractice: {
    targetEnglish: "The owner is not here today.",
    vietnameseHint: "Chủ tiệm hôm nay không có ở đây.",
  },
};
