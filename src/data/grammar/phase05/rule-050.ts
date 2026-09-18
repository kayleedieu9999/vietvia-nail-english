import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_050: GrammarRuleLesson = {
  id: "rule-050",
  ruleNumber: 50,
  phaseNumber: 5,
  title: "Ôn tập — kết hợp các giới từ trong một câu",
  whenToUse:
    "Đây là bài ôn tập CHẶNG 5. Trong một câu nói thực tế, bạn thường cần kết hợp nhiều giới từ cùng lúc: thời gian, nơi chốn, và mục đích. Hãy tập nói chậm, nói từng phần rồi ghép lại thành câu đầy đủ.",
  pattern: "at/on/in (thời gian) + in/on/under/next to (vị trí) + for (mục đích)",
  nailSalonExample: {
    english: "On Friday, at 3 o'clock, your polish will be ready on the shelf, for your appointment.",
    vietnamese: "Vào thứ Sáu, lúc 3 giờ, sơn của chị sẽ được để sẵn trên kệ, cho lịch hẹn của chị.",
  },
  moreExamples: [
    { english: "In the morning, we keep the towels in the cabinet, next to the sink.", vietnamese: "Vào buổi sáng, chúng tôi để khăn trong tủ, bên cạnh bồn rửa." },
    { english: "She has worked here since 2018, and she is at the front desk now.", vietnamese: "Cô ấy đã làm việc ở đây từ năm 2018, và bây giờ đang ở bàn lễ tân." },
    { english: "Please wait for five minutes, then come to chair four.", vietnamese: "Vui lòng chờ năm phút, rồi đến ghế số bốn." },
  ],
  quiz: {
    question: "Bạn muốn nói đầy đủ: \"Lịch hẹn của chị là vào thứ Ba, lúc 2 giờ, ở ghế số một.\" Câu nào đúng?",
    choices: [
      { id: "a", text: "Your appointment is at Tuesday, on 2 o'clock, in chair one." },
      { id: "b", text: "Your appointment is on Tuesday, at 2 o'clock, at chair one." },
      { id: "c", text: "Your appointment is in Tuesday, at 2 o'clock, on chair one." },
    ],
    correctAnswer: "b",
    explanation: "Thứ dùng \"on\" (on Tuesday), giờ dùng \"at\" (at 2 o'clock), và một vị trí cụ thể như ghế ngồi cũng thường dùng \"at\" (at chair one).",
  },
  speakingPractice: {
    targetEnglish: "Your appointment is on Tuesday, at 2 o'clock, at chair one, next to the window.",
    vietnameseHint: "Hãy nói cả câu: Lịch hẹn của chị là vào thứ Ba, lúc 2 giờ, ở ghế số một, bên cạnh cửa sổ.",
  },
};
