import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_090: GrammarRuleLesson = {
  id: "rule-090",
  ruleNumber: 90,
  phaseNumber: 9,
  title: "Ôn lại: Một đoạn hội thoại tự nhiên từ đầu đến cuối",
  whenToUse:
    "Đây là bài ôn lại chặng 9 — ghép các câu tự nhiên đã học (trả lời ngắn, nói tắt, hỏi lại, ước lượng thời gian, cảm ơn) thành một đoạn hội thoại thật với khách, từ lúc khách ngồi xuống đến lúc ra về.",
  pattern: "Hi! How's your day going? ... It'll take about... ... Almost there! ... Thank you! See you next time!",
  nailSalonExample: {
    english:
      "Hi! How's your day going? It'll take about 30 minutes. Almost there! Do you like the color? Thank you! See you next time!",
    vietnamese:
      "Chào chị! Hôm nay chị thế nào? Khoảng 30 phút nữa là xong. Sắp xong rồi! Chị thích màu này không? Cảm ơn chị! Hẹn gặp lại lần sau!",
  },
  moreExamples: [
    {
      english: "I'm sorry, we don't have that color today, but this one looks similar. Is that okay?",
      vietnamese: "Xin lỗi chị, hôm nay hết màu đó rồi, nhưng màu này gần giống vậy. Vậy được không chị?",
    },
    {
      english: "Sure! It'll take about 15 more minutes. Almost done!",
      vietnamese: "Được chứ! Khoảng 15 phút nữa thôi. Sắp xong rồi!",
    },
    {
      english: "How does that feel? Thank you so much, see you next time!",
      vietnamese: "Chị thấy sao? Cảm ơn chị nhiều, hẹn gặp lại lần sau!",
    },
  ],
  quiz: {
    question:
      "Khách hỏi \"How much longer?\" ngay trước khi bạn cảm ơn và tiễn khách ra về. Thứ tự câu nào nghe tự nhiên nhất cho một cuộc hội thoại?",
    choices: [
      { id: "a", text: "See you next time! It'll take about 5 minutes. Thank you!" },
      { id: "b", text: "It'll take about 5 minutes. Thank you! See you next time!" },
      { id: "c", text: "Thank you! It'll take about 5 minutes. See you next time!" },
    ],
    correctAnswer: "b",
    explanation:
      "Trả lời câu hỏi về thời gian trước (\"It'll take about 5 minutes\"), rồi mới cảm ơn và chào tạm biệt khi khách thực sự xong và ra về — đúng thứ tự tự nhiên của một cuộc hội thoại thật.",
  },
  speakingPractice: {
    targetEnglish: "How's your day going? It'll take about 20 minutes. Almost there! Thank you, see you next time!",
    vietnameseHint:
      "Tập nói cả đoạn hội thoại ngắn này liền mạch, như đang thật sự phục vụ một khách hàng từ đầu đến cuối.",
  },
};
