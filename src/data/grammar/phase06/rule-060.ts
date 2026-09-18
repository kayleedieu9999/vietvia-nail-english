import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_060: GrammarRuleLesson = {
  id: "rule-060",
  ruleNumber: 60,
  phaseNumber: 6,
  title: "Ôn tập: Tính từ, trạng từ và từ nối",
  whenToUse:
    "Hãy ôn lại cách dùng tính từ trước danh từ, tính từ sau 'to be', trạng từ cách thức, trạng từ tần suất, và các từ nối and/but/because — tất cả đều rất hay dùng khi trò chuyện với khách trong tiệm.",
  pattern: "Kết hợp: tính từ + danh từ / to be + tính từ / động từ + trạng từ / mệnh đề + and, but, because + mệnh đề",
  nailSalonExample: {
    english: "I always work carefully, and your nails will look great.",
    vietnamese: "Tôi luôn làm việc cẩn thận, và móng của chị sẽ rất đẹp.",
  },
  moreExamples: [
    { english: "This gel color is beautiful, but it dries slowly.", vietnamese: "Màu gel này đẹp, nhưng khô chậm." },
    { english: "She chooses the shortest nails because she plays piano.", vietnamese: "Cô ấy chọn móng ngắn nhất vì cô ấy chơi piano." },
    { english: "I usually recommend the most popular shape for new customers.", vietnamese: "Tôi thường khuyên khách mới chọn kiểu móng phổ biến nhất." },
  ],
  quiz: {
    question: "Khách mới hỏi vì sao nên chọn bột nhúng (dip powder), chọn câu trả lời đúng và tự nhiên nhất:",
    choices: [
      { id: "a", text: "Dip powder because lasts longer is popular." },
      { id: "b", text: "Dip powder is popular because it lasts longer." },
      { id: "c", text: "Dip powder is more popular because it lasting longer." },
    ],
    correctAnswer: "b",
    explanation:
      "Câu đúng theo thứ tự chủ ngữ - động từ - tính từ, sau đó dùng 'because' cùng một mệnh đề đầy đủ để nêu lý do.",
  },
  speakingPractice: {
    targetEnglish: "I recommend dip powder because it lasts longer and looks natural.",
    vietnameseHint: "Giải thích vì sao bạn khuyên khách dùng bột nhúng.",
  },
};
