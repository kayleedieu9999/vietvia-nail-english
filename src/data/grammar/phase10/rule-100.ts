import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_100: GrammarRuleLesson = {
  id: "rule-100",
  ruleNumber: 100,
  phaseNumber: 10,
  title: "Quy tắc 100 — Bạn đã sẵn sàng rồi!",
  whenToUse:
    "Bạn vừa đi qua cả 100 quy tắc, từ chủ ngữ động từ đơn giản cho đến những câu nói tự nhiên nhất trong tiệm. Điều quan trọng nhất bây giờ không phải là nhớ hết ngữ pháp, mà là dám mở miệng nói. Mỗi lần trò chuyện với khách là một lần luyện tập, và bạn đã có đủ vốn liếng để bắt đầu.",
  pattern: "Hi, welcome in! ... Thank you, have a great day! (dùng lại mọi mẫu câu đã học)",
  nailSalonExample: {
    english: "You: Hi, welcome in! How can I help you today? Customer: I'd like a manicure and pedicure, please. You: Sure! Right this way, please.",
    vietnamese: "Bạn: Chào chị, mời vào! Hôm nay em giúp gì được cho chị? Khách: Tôi muốn làm tay và chân. Bạn: Dạ được! Mời chị đi lối này.",
  },
  moreExamples: [
    {
      english: "Customer: How much is that together? You: It's sixty-five dollars, and it takes about an hour.",
      vietnamese: "Khách: Gộp lại bao nhiêu tiền vậy? Bạn: Dạ sáu mươi lăm đô, mất khoảng một tiếng.",
    },
    {
      english: "Customer: This looks so good, thank you! You: Thank you so much! I'm really glad you like it.",
      vietnamese: "Khách: Đẹp quá, cảm ơn nhé! Bạn: Cảm ơn chị nhiều! Em rất vui vì chị thích.",
    },
    {
      english: "You: How would you like to pay? Customer: Card. You: Thank you! See you next time!",
      vietnamese: "Bạn: Chị muốn trả bằng gì ạ? Khách: Thẻ. Bạn: Cảm ơn chị! Hẹn gặp lại lần sau nhé!",
    },
  ],
  quiz: {
    question: "Sau khi học xong 100 quy tắc, điều quan trọng nhất bạn nên làm là gì?",
    choices: [
      { id: "a", text: "Học thuộc lòng hết ngữ pháp trước khi dám nói." },
      { id: "b", text: "Mạnh dạn nói chuyện với khách mỗi ngày, sai một chút cũng không sao." },
      { id: "c", text: "Chỉ nói khi chắc chắn một trăm phần trăm đúng ngữ pháp." },
    ],
    correctAnswer: "b",
    explanation:
      "Nói tiếng Anh tự tin, kể cả khi còn sai chút ít, quan trọng hơn nhiều so với chờ đến khi hoàn hảo mới dám nói. Càng nói nhiều, bạn sẽ càng tự nhiên và nghe rõ hơn mỗi ngày.",
  },
  speakingPractice: {
    targetEnglish: "I've learned so much, and I'm ready to speak English with confidence!",
    vietnameseHint: "Tập nói câu này thật tự tin — đây là lời bạn tự nói với chính mình sau khi hoàn thành cả 100 quy tắc!",
  },
};
