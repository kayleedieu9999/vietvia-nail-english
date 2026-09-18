import { GrammarPhaseMeta } from "@/types/grammar";

/**
 * The 10 learning phases ("CHẶNG") of the 100-grammar-rules program. Content
 * order matters — rules build on each other, and `ruleRange` must stay
 * contiguous 1-100 with no gaps (checked by `scripts/validate-grammar.ts`).
 */
export const grammarPhases: GrammarPhaseMeta[] = [
  {
    phaseNumber: 1,
    titleVi: "Chủ ngữ & động từ",
    englishTopic: "Subject–Verb Agreement",
    descriptionVi: "Biết chọn động từ đúng khi nói về một người, nhiều người hoặc nhiều đồ vật.",
    ruleRange: [1, 10],
  },
  {
    phaseNumber: 2,
    titleVi: "A, An & The",
    englishTopic: "Articles",
    descriptionVi: "Biết khi nào dùng a, an, the và khi nào không cần dùng.",
    ruleRange: [11, 20],
  },
  {
    phaseNumber: 3,
    titleVi: "Danh từ & đại từ",
    englishTopic: "Nouns & Pronouns",
    descriptionVi: "Nói về người, đồ vật và thay thế từ để câu ngắn gọn hơn.",
    ruleRange: [21, 30],
  },
  {
    phaseNumber: 4,
    titleVi: "Các thì quan trọng",
    englishTopic: "Tenses",
    descriptionVi: "Dùng đúng thì để nói việc đang làm, đã làm xong và sắp làm.",
    ruleRange: [31, 40],
  },
  {
    phaseNumber: 5,
    titleVi: "Giới từ thường gặp",
    englishTopic: "Prepositions",
    descriptionVi: "Dùng đúng in, on, at... khi nói về thời gian, chỗ để đồ và lịch hẹn.",
    ruleRange: [41, 50],
  },
  {
    phaseNumber: 6,
    titleVi: "Tính từ, trạng từ & từ nối",
    englishTopic: "Adjectives, Adverbs & Conjunctions",
    descriptionVi: "Mô tả rõ hơn và nối câu tự nhiên hơn khi nói chuyện với khách.",
    ruleRange: [51, 60],
  },
  {
    phaseNumber: 7,
    titleVi: "Can, Could, Should, Would...",
    englishTopic: "Modals & Auxiliary Verbs",
    descriptionVi: "Hỏi và đề nghị với khách một cách lịch sự, tự nhiên hơn.",
    ruleRange: [61, 70],
  },
  {
    phaseNumber: 8,
    titleVi: "Những lỗi người mới thường gặp",
    englishTopic: "Common Error Rules",
    descriptionVi: "Những lỗi nhỏ nhưng rất dễ làm câu nghe sai.",
    ruleRange: [71, 80],
  },
  {
    phaseNumber: 9,
    titleVi: "Nói câu chính xác hơn",
    englishTopic: "Mixed Important Rules",
    descriptionVi: "Ưu tiên nói tự nhiên hơn là ngữ pháp viết phức tạp.",
    ruleRange: [81, 90],
  },
  {
    phaseNumber: 10,
    titleVi: "Hoàn thiện câu nói",
    englishTopic: "Final Important Rules",
    descriptionVi: "Luyện tập đều để nói tiếng Anh tự nhiên và rõ ràng hơn mỗi ngày.",
    ruleRange: [91, 100],
  },
];

export function findGrammarPhase(phaseNumber: number): GrammarPhaseMeta | undefined {
  return grammarPhases.find((phase) => phase.phaseNumber === phaseNumber);
}

export function phaseForRuleNumber(ruleNumber: number): GrammarPhaseMeta | undefined {
  return grammarPhases.find(
    (phase) => ruleNumber >= phase.ruleRange[0] && ruleNumber <= phase.ruleRange[1],
  );
}
