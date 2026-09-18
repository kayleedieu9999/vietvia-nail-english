import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_010: GrammarRuleLesson = {
  id: "rule-010",
  ruleNumber: 10,
  phaseNumber: 1,
  title: "Ôn tập Chặng 1 — kết hợp tất cả",
  whenToUse:
    "Đây là bài ôn tập, gộp lại những gì mình đã học: thêm -s cho một người, chọn đúng am/is/are, have/has, do/does, và don't/doesn't. Cứ nhớ quy tắc đơn giản: nói về một người thì thêm -s hoặc đổi từ, còn nói về mình, bạn, hay nhiều người thì giữ nguyên.",
  pattern: "Ôn tập: V-s / am,is,are / have,has / do,does / don't,doesn't",
  nailSalonExample: {
    english: "My coworkers and I always check our schedule in the morning.",
    vietnamese: "Tôi và các đồng nghiệp luôn kiểm tra lịch làm việc vào buổi sáng.",
  },
  moreExamples: [
    {
      english: "There are two new technicians who join the salon this week.",
      vietnamese: "Có hai thợ mới gia nhập tiệm tuần này.",
    },
    {
      english: "She doesn't have time for a break today.",
      vietnamese: "Cô ấy không có thời gian nghỉ hôm nay.",
    },
    {
      english: "Does he do pedicures on Saturdays?",
      vietnamese: "Anh ấy có làm pedicure vào thứ Bảy không?",
    },
  ],
  quiz: {
    question:
      "Khách hỏi bạn và người cùng làm có thường xuyên đổi màu mới không. Bạn trả lời thế nào?",
    choices: [
      { id: "a", text: "My coworker and I updates our colors every season." },
      { id: "b", text: "My coworker and I update our colors every season." },
      { id: "c", text: "My coworker and I is updating our colors every season." },
    ],
    correctAnswer: "b",
    explanation:
      "Khi ghép 'my coworker and I', ta coi như nhiều người, nên dùng 'update', không thêm -s và không dùng 'is'.",
  },
  speakingPractice: {
    targetEnglish: "We don't have any gel colors left in pink today.",
    vietnameseHint: "Hôm nay chúng tôi hết màu gel hồng rồi.",
  },
};
