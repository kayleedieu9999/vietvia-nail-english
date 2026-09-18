import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_082: GrammarRuleLesson = {
  id: "rule-082",
  ruleNumber: 82,
  phaseNumber: 9,
  title: "Nói tắt (I'm, you're, it's) thay vì nói đầy đủ",
  whenToUse:
    "Khi nói chuyện bình thường, người Mỹ gần như luôn nói tắt: I'm thay vì I am, it's thay vì it is, don't thay vì do not. Nói đầy đủ từng chữ nghe rất trang trọng và lạ tai, giống như đang đọc văn bản.",
  pattern: "I'm... / You're... / It's... / Don't... / Can't...",
  nailSalonExample: {
    english: "It's ready. You're all done!",
    vietnamese: "Xong rồi đó. Chị làm xong hết rồi!",
  },
  moreExamples: [
    {
      english: "I'm sorry, we're a little busy right now.",
      vietnamese: "Xin lỗi, tụi em đang hơi bận một chút.",
    },
    {
      english: "Don't worry, it doesn't hurt.",
      vietnamese: "Đừng lo, cái này không đau đâu.",
    },
    {
      english: "I can't do that color today, but I can do it next time.",
      vietnamese: "Hôm nay em không làm màu đó được, nhưng lần sau em làm nha.",
    },
  ],
  quiz: {
    question: "Cách nào nghe tự nhiên hơn khi nói chuyện với khách?",
    choices: [
      { id: "a", text: "I am not able to do that today." },
      { id: "b", text: "I do not can do that today." },
      { id: "c", text: "I can't do that today." },
    ],
    correctAnswer: "c",
    explanation:
      "\"I can't\" là cách nói tắt tự nhiên người Mỹ hay dùng. Câu (a) quá trang trọng, còn câu (b) sai ngữ pháp.",
  },
  speakingPractice: {
    targetEnglish: "I'm sorry, it's not ready yet.",
    vietnameseHint: "Tập nói tắt \"I'm\" và \"it's\" thật tự nhiên, đừng nói \"I am\" hay \"it is\" đầy đủ.",
  },
};
