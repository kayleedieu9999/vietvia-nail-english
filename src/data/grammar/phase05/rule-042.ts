import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_042: GrammarRuleLesson = {
  id: "rule-042",
  ruleNumber: 42,
  phaseNumber: 5,
  title: "ON — thứ trong tuần, ngày tháng và mặt phẳng",
  whenToUse:
    "Dùng \"on\" khi nói một ngày trong tuần (Monday, Tuesday...) hoặc một ngày cụ thể (July 5th). \"On\" cũng dùng khi đồ vật nằm trên một mặt phẳng, như trên bàn, trên kệ. Nhớ: thứ, ngày và mặt phẳng thì dùng \"on\".",
  pattern: "on + thứ/ngày / on + mặt phẳng",
  nailSalonExample: {
    english: "Your next appointment is on Monday, and your bag is on the table.",
    vietnamese: "Lịch hẹn tiếp theo của chị là vào thứ Hai, và túi của chị đang ở trên bàn.",
  },
  moreExamples: [
    { english: "The salon is closed on Sunday.", vietnamese: "Tiệm đóng cửa vào Chủ Nhật." },
    { english: "We have a special on July 5th.", vietnamese: "Chúng tôi có khuyến mãi vào ngày 5 tháng 7." },
    { english: "Please put the polish on the shelf.", vietnamese: "Vui lòng để lọ sơn lên kệ." },
  ],
  quiz: {
    question: "Khách hỏi khi nào tiệm đóng cửa để nghỉ lễ. Bạn muốn nói \"Chúng tôi đóng cửa vào thứ Ba.\" Câu nào đúng?",
    choices: [
      { id: "a", text: "We are closed at Tuesday." },
      { id: "b", text: "We are closed in Tuesday." },
      { id: "c", text: "We are closed on Tuesday." },
    ],
    correctAnswer: "c",
    explanation: "Với thứ trong tuần như \"Tuesday\", tiếng Anh dùng \"on\", không dùng \"at\" hay \"in\".",
  },
  speakingPractice: {
    targetEnglish: "Your gel polish is on the shelf, and your appointment card is on the desk.",
    vietnameseHint: "Hãy nói: Sơn gel của chị ở trên kệ, và thẻ hẹn của chị ở trên bàn.",
  },
};
