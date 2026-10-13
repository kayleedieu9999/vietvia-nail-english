import { Exercise, LessonExerciseSet } from "@/types/exercise";

/**
 * PILOT C — built on the real grammar rule "rule-001" (S + V(s/es) — nói về
 * một người, src/data/grammar/phase01/rule-001.ts). 14 exercises: 3 Luyện
 * ngay + 1 Speaking application (both under "luyen-ngay") + 5 Quiz + 3 Fill
 * Blank (both under "quiz") + 2 Ghép câu. No Luyện thêm authored for this
 * pilot.
 */

const LESSON_ID = "rule-001";

const luyenNgay: Exercise[] = [
  {
    id: `${LESSON_ID}-ln-1`,
    lessonId: LESSON_ID,
    mode: "luyen-ngay",
    type: "multiple_choice",
    prompt: "She paints nails every day.",
    promptVi: "Cô ấy sơn móng tay mỗi ngày.",
    question: "Vì sao động từ \"paints\" có thêm \"-s\"?",
    options: [
      { id: "a", text: "Vì chủ ngữ là \"she\" (một người)" },
      { id: "b", text: "Vì câu đang ở thì quá khứ" },
      { id: "c", text: "Vì \"paints\" là danh từ" },
    ],
    correctOptionId: "a",
    explanation: "Với she/he/it (một người/vật), động từ thêm \"-s\" ở cuối.",
  },
  {
    id: `${LESSON_ID}-ln-2`,
    lessonId: LESSON_ID,
    mode: "luyen-ngay",
    type: "multiple_choice",
    prompt: "I clean my tools after every customer.",
    promptVi: "Tôi vệ sinh dụng cụ sau mỗi khách.",
    question: "Vì sao động từ \"clean\" không thêm \"-s\"?",
    options: [
      { id: "a", text: "Vì chủ ngữ là \"I\"" },
      { id: "b", text: "Vì \"clean\" là tính từ" },
      { id: "c", text: "Vì câu đang phủ định" },
    ],
    correctOptionId: "a",
    explanation: "Với I/you/we/they, động từ giữ nguyên, không thêm gì.",
  },
  {
    id: `${LESSON_ID}-ln-3`,
    lessonId: LESSON_ID,
    mode: "luyen-ngay",
    type: "true_false",
    prompt: "He files nails very carefully.",
    promptVi: "Anh ấy dũa móng tay rất cẩn thận.",
    question: "\"He file nails\" (không có -s) cũng đúng ngữ pháp — đúng hay sai?",
    options: [
      { id: "a", text: "Đúng" },
      { id: "b", text: "Sai" },
    ],
    correctOptionId: "b",
    explanation: "Với \"he\", động từ bắt buộc phải thêm \"-s\": \"He files\", không phải \"He file\".",
  },
  {
    id: `${LESSON_ID}-ln-speak-1`,
    lessonId: LESSON_ID,
    mode: "luyen-ngay",
    type: "speaking",
    prompt: "Khách hỏi bạn có làm việc ở đây mỗi ngày không.",
    promptVi: "Khách hỏi bạn có làm việc ở đây mỗi ngày không.",
    question: "Bạn trả lời thế nào?",
    targetEnglish: "I work here every day.",
    targetVietnamese: "Tôi làm việc ở đây mỗi ngày.",
    acceptedAnswers: ["Yes, I work here every day.", "I work here every single day."],
  },
];

const quiz: Exercise[] = [
  {
    id: `${LESSON_ID}-qz-1`,
    lessonId: LESSON_ID,
    mode: "quiz",
    type: "multiple_choice",
    prompt: "Khách hỏi bạn có làm việc ở đây mỗi ngày không. Bạn trả lời thế nào?",
    question: "Chọn câu đúng:",
    options: [
      { id: "a", text: "I works here every day." },
      { id: "b", text: "I work here every day." },
      { id: "c", text: "I working here every day." },
    ],
    correctOptionId: "b",
    explanation: "Với \"I\", động từ giữ nguyên, không thêm -s.",
  },
  {
    id: `${LESSON_ID}-qz-2`,
    lessonId: LESSON_ID,
    mode: "quiz",
    type: "multiple_choice",
    prompt: "We open the salon at nine o'clock.",
    promptVi: "Chúng tôi mở tiệm lúc chín giờ.",
    question: "Câu nào cùng cấu trúc với câu trên?",
    options: [
      { id: "a", text: "They close the salon at seven." },
      { id: "b", text: "She close the salon at seven." },
      { id: "c", text: "He close the salon at seven." },
    ],
    correctOptionId: "a",
    explanation: "\"They\" giống \"we\" — động từ giữ nguyên, không thêm -s.",
  },
  {
    id: `${LESSON_ID}-qz-3`,
    lessonId: LESSON_ID,
    mode: "quiz",
    type: "listening_choice",
    prompt: "He trims cuticles before the polish.",
    promptVi: "Anh ấy tỉa da quanh móng trước khi sơn.",
    question: "Câu vừa nghe có đúng ngữ pháp không?",
    options: [
      { id: "a", text: "Đúng — \"he\" nên động từ thêm -s" },
      { id: "b", text: "Sai — phải là \"trim\"" },
    ],
    correctOptionId: "a",
    explanation: "\"He trims\" đúng — chủ ngữ \"he\" nên động từ thêm \"-s\".",
  },
  {
    id: `${LESSON_ID}-qz-4`,
    lessonId: LESSON_ID,
    mode: "quiz",
    type: "true_false",
    prompt: "\"You works here every day.\" is correct.",
    promptVi: "\"You works here every day.\" đúng ngữ pháp.",
    question: "Câu này đúng hay sai?",
    options: [
      { id: "a", text: "Đúng" },
      { id: "b", text: "Sai" },
    ],
    correctOptionId: "b",
    explanation: "Với \"you\", động từ giữ nguyên: \"You work\", không phải \"You works\".",
  },
  {
    id: `${LESSON_ID}-qz-5`,
    lessonId: LESSON_ID,
    mode: "quiz",
    type: "multiple_choice",
    prompt: "Chọn câu đúng khi nói về một khách quen (\"she\"):",
    question: "Câu nào đúng?",
    options: [
      { id: "a", text: "She always ask for gel polish." },
      { id: "b", text: "She always asks for gel polish." },
      { id: "c", text: "She always asking for gel polish." },
    ],
    correctOptionId: "b",
    explanation: "\"She\" là một người — động từ \"ask\" phải thêm \"-s\" thành \"asks\".",
  },
  {
    id: `${LESSON_ID}-qz-fb-1`,
    lessonId: LESSON_ID,
    mode: "quiz",
    type: "fill_blank",
    prompt: "She ___ nails every day.",
    audioText: "She paints nails every day.",
    promptVi: "Cô ấy sơn móng tay mỗi ngày.",
    question: "Điền từ đúng:",
    options: [
      { id: "a", text: "paints" },
      { id: "b", text: "paint" },
      { id: "c", text: "painting" },
    ],
    correctOptionId: "a",
    explanation: "Chủ ngữ \"she\" — động từ thêm \"-s\": \"paints\".",
  },
  {
    id: `${LESSON_ID}-qz-fb-2`,
    lessonId: LESSON_ID,
    mode: "quiz",
    type: "fill_blank",
    prompt: "I ___ my tools after every customer.",
    audioText: "I clean my tools after every customer.",
    promptVi: "Tôi vệ sinh dụng cụ sau mỗi khách.",
    question: "Điền từ đúng:",
    options: [
      { id: "a", text: "clean" },
      { id: "b", text: "cleans" },
      { id: "c", text: "cleaning" },
    ],
    correctOptionId: "a",
    explanation: "Chủ ngữ \"I\" — động từ giữ nguyên, không thêm -s.",
  },
  {
    id: `${LESSON_ID}-qz-fb-3`,
    lessonId: LESSON_ID,
    mode: "quiz",
    type: "fill_blank",
    prompt: "He ___ cuticles before the polish.",
    audioText: "He trims cuticles before the polish.",
    promptVi: "Anh ấy tỉa da quanh móng trước khi sơn.",
    question: "Điền từ đúng:",
    options: [
      { id: "a", text: "trims" },
      { id: "b", text: "trim" },
      { id: "c", text: "trimming" },
    ],
    correctOptionId: "a",
    explanation: "Chủ ngữ \"he\" — động từ thêm \"-s\": \"trims\".",
  },
];

const ghepCau: Exercise[] = [
  {
    id: `${LESSON_ID}-gc-1`,
    lessonId: LESSON_ID,
    mode: "ghep-cau",
    type: "sentence_builder",
    prompt: "She paints nails every day.",
    promptVi: "Hãy ghép câu: Cô ấy sơn móng tay mỗi ngày.",
    blocks: ["nails", "She", "every day", "paints", "."],
    correctSentence: "She paints nails every day.",
  },
  {
    id: `${LESSON_ID}-gc-2`,
    lessonId: LESSON_ID,
    mode: "ghep-cau",
    type: "sentence_builder",
    prompt: "We open the salon at nine o'clock.",
    promptVi: "Hãy ghép câu: Chúng tôi mở tiệm lúc chín giờ.",
    blocks: ["at nine o'clock", "We", "open", "the salon", "."],
    correctSentence: "We open the salon at nine o'clock.",
  },
];

export const grammarRule001ExerciseSet: LessonExerciseSet = {
  lessonId: LESSON_ID,
  lessonTitle: "S + V(s/es) — nói về một người",
  contentHref: "/lo-trinh/ngu-phap/rule/rule-001",
  exercises: [...luyenNgay, ...quiz, ...ghepCau],
};
