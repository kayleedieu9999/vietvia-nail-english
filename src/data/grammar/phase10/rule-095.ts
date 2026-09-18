import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_095: GrammarRuleLesson = {
  id: "rule-095",
  ruleNumber: 95,
  phaseNumber: 10,
  title: "Numbers in conversation — Nói số tự nhiên",
  whenToUse:
    "Giá tiền, giờ hẹn, số điện thoại — tất cả đều cần nói số rõ ràng, chậm rãi để khách nghe hiểu ngay lần đầu. Đây là kỹ năng khách hàng cần mình dùng nhiều nhất mỗi ngày ở tiệm.",
  pattern: "It's + [giá tiền] / Your appointment is at + [giờ] / My number is + [đọc từng số]",
  nailSalonExample: {
    english: "Customer: How much is a gel manicure? You: It's thirty-five dollars.",
    vietnamese: "Khách: Làm gel giá bao nhiêu? Bạn: Dạ, ba mươi lăm đô.",
  },
  moreExamples: [
    {
      english: "Customer: What time is my appointment? You: Your appointment is at two thirty.",
      vietnamese: "Khách: Lịch hẹn của tôi lúc mấy giờ? Bạn: Lịch hẹn của chị lúc hai giờ rưỡi ạ.",
    },
    {
      english: "Customer: Can I get your number? You: Sure, it's seven-one-four, five-five-five, one-two-three-four.",
      vietnamese: "Khách: Cho tôi xin số điện thoại được không? Bạn: Dạ được, số là bảy-một-bốn, năm-năm-năm, một-hai-ba-bốn.",
    },
    {
      english: "Customer: How much for the pedicure? You: It's forty dollars, and it takes about forty-five minutes.",
      vietnamese: "Khách: Làm chân giá bao nhiêu? Bạn: Dạ bốn mươi đô, mất khoảng bốn mươi lăm phút.",
    },
  ],
  quiz: {
    question: "Khách hỏi giá: \"How much is this?\" Giá là $45. Bạn nên trả lời:",
    choices: [
      { id: "a", text: "It's four five dollar." },
      { id: "b", text: "It's forty-five dollars." },
      { id: "c", text: "Price is 45." },
    ],
    correctAnswer: "b",
    explanation:
      "\"It's forty-five dollars\" là cách nói số tiền tự nhiên và đúng nhất. Đọc từng số riêng lẻ như \"four five\" nghe không tự nhiên bằng.",
  },
  speakingPractice: {
    targetEnglish: "It's forty-five dollars.",
    vietnameseHint: "Tập đọc to vài mức giá quen thuộc ở tiệm cho quen miệng.",
  },
};
