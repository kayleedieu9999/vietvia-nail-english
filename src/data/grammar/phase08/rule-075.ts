import { GrammarRuleLesson } from "@/types/grammar";

export const RULE_075: GrammarRuleLesson = {
  id: "rule-075",
  ruleNumber: 75,
  phaseNumber: 8,
  title: "Đừng dịch từng chữ từ tiếng Việt",
  whenToUse:
    "❌ 'Have you eaten yet?' (dịch từ câu chào 'Ăn cơm chưa?') → ✅ 'Hi, how are you today?' — vì người Mỹ chào nhau bằng 'How are you?', không hỏi về việc ăn uống. Dịch nguyên câu tiếng Việt sang tiếng Anh thường nghe lạ hoặc khó hiểu với khách.",
  pattern: "Học các câu chào và câu hỏi thông dụng của người Mỹ, đừng dịch nguyên câu tiếng Việt",
  nailSalonExample: {
    english: "Hi, how are you today? Come on in!",
    vietnamese: "Chào anh/chị, hôm nay khỏe không? Mời vào!",
  },
  moreExamples: [
    {
      english: "How would you like to pay, cash or card?",
      vietnamese:
        "Anh/chị muốn thanh toán tiền mặt hay thẻ ạ? (thay vì hỏi thẳng 'Anh/chị có tiền trả không?')",
    },
    {
      english: "Would you like something to drink while you wait?",
      vietnamese: "Anh/chị có muốn uống gì trong lúc chờ không?",
    },
    {
      english: "Take your time, no rush.",
      vietnamese: "Cứ từ từ, không vội đâu.",
    },
  ],
  quiz: {
    question: "Khách bước vào tiệm, bạn nên chào thế nào bằng tiếng Anh?",
    choices: [
      { id: "a", text: "Have you eaten yet?" },
      { id: "b", text: "Hi, how are you today?" },
      { id: "c", text: "You eat rice?" },
    ],
    correctAnswer: "b",
    explanation:
      "Người Mỹ chào nhau bằng 'How are you?'. Câu hỏi 'đã ăn cơm chưa' là cách chào của người Việt, dịch sang tiếng Anh nghe rất lạ.",
  },
  speakingPractice: {
    targetEnglish: "Hi, welcome in! How are you today?",
    vietnameseHint: "Chào anh/chị, mời vào! Hôm nay khỏe không?",
  },
};
