import { Exercise, LessonExerciseSet } from "@/types/exercise";

/**
 * PILOT B — built on Pharmacy lesson topic "01. Đến quầy Pharmacy lấy
 * thuốc lần đầu" (same theme as src/data/collections/pharmacy.ts's
 * "Lấy thuốc" group, ph-01a–f). 10 exercises: 2 Luyện ngay + 2 Speaking
 * Challenge (both under "luyen-ngay") + 3 Quiz + 1 Image Quiz (both under
 * "quiz") + 2 Ghép câu. No Luyện thêm authored for this pilot.
 */

const LESSON_ID = "pharmacy-01-lay-thuoc";

const luyenNgay: Exercise[] = [
  {
    id: `${LESSON_ID}-ln-1`,
    lessonId: LESSON_ID,
    mode: "luyen-ngay",
    type: "multiple_choice",
    speaker: "Nhân viên",
    prompt: "Picking up?",
    promptVi: "Anh/chị đến lấy thuốc phải không?",
    question: "Nhân viên đang hỏi gì?",
    options: [
      { id: "a", text: "Bạn đến lấy thuốc phải không" },
      { id: "b", text: "Bạn cần mua gì thêm không" },
      { id: "c", text: "Bạn đã có bảo hiểm chưa" },
    ],
    correctOptionId: "a",
    explanation: "\"Picking up?\" là cách hỏi ngắn gọn rất thường gặp ở quầy pharmacy.",
  },
  {
    id: `${LESSON_ID}-ln-2`,
    lessonId: LESSON_ID,
    mode: "luyen-ngay",
    type: "true_false",
    prompt: "\"Date of birth?\" is asking for your home address.",
    promptVi: "\"Date of birth?\" là hỏi địa chỉ nhà.",
    question: "Câu này đúng hay sai?",
    options: [
      { id: "a", text: "Đúng" },
      { id: "b", text: "Sai" },
    ],
    correctOptionId: "b",
    explanation: "\"Date of birth\" nghĩa là ngày sinh, không phải địa chỉ.",
  },
  {
    id: `${LESSON_ID}-ln-speak-1`,
    lessonId: LESSON_ID,
    mode: "luyen-ngay",
    type: "speaking",
    speaker: "Nhân viên",
    prompt: "Picking up?",
    promptVi: "Anh/chị đến lấy thuốc phải không?",
    question: "Bạn sẽ trả lời sao?",
    targetEnglish: "Yes, I'm here to pick up a prescription.",
    targetVietnamese: "Vâng, tôi đến lấy thuốc theo toa.",
    acceptedAnswers: ["Yes, picking up.", "Yes, I have a prescription to pick up."],
  },
  {
    id: `${LESSON_ID}-ln-speak-2`,
    lessonId: LESSON_ID,
    mode: "luyen-ngay",
    type: "speaking",
    speaker: "Nhân viên",
    prompt: "What's your date of birth?",
    promptVi: "Ngày sinh của bạn là gì?",
    question: "Bạn sẽ trả lời sao?",
    targetEnglish: "June 12th, 1985.",
    targetVietnamese: "Ngày 12 tháng 6 năm 1985.",
    acceptedAnswers: ["March 3rd, 1990.", "It's June 12th, 1985."],
  },
];

const quiz: Exercise[] = [
  {
    id: `${LESSON_ID}-qz-1`,
    lessonId: LESSON_ID,
    mode: "quiz",
    type: "multiple_choice",
    prompt: "I'm here to pick up a prescription.",
    promptVi: "Tôi đến lấy thuốc theo toa.",
    question: "Câu này dùng khi nào?",
    options: [
      { id: "a", text: "Khi vừa đến quầy pharmacy" },
      { id: "b", text: "Khi đang thanh toán" },
      { id: "c", text: "Khi hỏi tác dụng phụ" },
    ],
    correctOptionId: "a",
    explanation: "Đây là câu mở đầu khi bạn bước tới quầy pharmacy để lấy thuốc.",
  },
  {
    id: `${LESSON_ID}-qz-2`,
    lessonId: LESSON_ID,
    mode: "quiz",
    type: "listening_choice",
    prompt: "It's not ready yet.",
    promptVi: "Thuốc chưa sẵn sàng.",
    question: "Nhân viên vừa nói gì?",
    options: [
      { id: "a", text: "Thuốc chưa xong" },
      { id: "b", text: "Thuốc đã sẵn sàng" },
      { id: "c", text: "Thuốc đã hết hàng" },
    ],
    correctOptionId: "a",
    explanation: "\"It's not ready yet\" nghĩa là thuốc vẫn chưa xong.",
  },
  {
    id: `${LESSON_ID}-qz-3`,
    lessonId: LESSON_ID,
    mode: "quiz",
    type: "fill_blank",
    prompt: "It should be ready in about twenty ___.",
    audioText: "It should be ready in about twenty minutes.",
    promptVi: "Chắc khoảng hai mươi phút nữa sẽ xong.",
    question: "Điền từ còn thiếu:",
    options: [
      { id: "a", text: "minutes" },
      { id: "b", text: "minute" },
      { id: "c", text: "minutely" },
    ],
    correctOptionId: "a",
    explanation: "Sau số đếm (twenty) dùng danh từ số nhiều \"minutes\".",
  },
  {
    id: `${LESSON_ID}-qz-img-1`,
    lessonId: LESSON_ID,
    mode: "quiz",
    type: "image_quiz",
    image: "/images/covers/pharmacy/pharmacy-counter.jpg",
    imageAlt: "Quầy lấy thuốc pharmacy ở Mỹ",
    question: "Bạn sẽ nói gì khi đứng ở quầy này?",
    options: [
      { id: "a", text: "\"I'm here to pick up a prescription.\"" },
      { id: "b", text: "\"Can I get a table for two?\"" },
      { id: "c", text: "\"Where is the parking lot?\"" },
    ],
    correctOptionId: "a",
    explanation: "Đây là quầy pharmacy — câu phù hợp là xin lấy thuốc theo toa.",
  },
];

const ghepCau: Exercise[] = [
  {
    id: `${LESSON_ID}-gc-1`,
    lessonId: LESSON_ID,
    mode: "ghep-cau",
    type: "sentence_builder",
    prompt: "I'm here to pick up a prescription.",
    promptVi: "Tôi đến lấy thuốc theo toa.",
    blocks: ["pick up", "I'm", "a prescription", "to", "here", "."],
    correctSentence: "I'm here to pick up a prescription.",
  },
  {
    id: `${LESSON_ID}-gc-2`,
    lessonId: LESSON_ID,
    mode: "ghep-cau",
    type: "sentence_builder",
    prompt: "Is my prescription ready?",
    promptVi: "Thuốc của tôi đã sẵn sàng chưa?",
    blocks: ["prescription", "Is", "ready", "my", "?"],
    correctSentence: "Is my prescription ready?",
  },
];

export const pharmacyLayThuocExerciseSet: LessonExerciseSet = {
  lessonId: LESSON_ID,
  lessonTitle: "Đến quầy Pharmacy lấy thuốc lần đầu",
  contentHref: "/lo-trinh/pharmacy",
  exercises: [...luyenNgay, ...quiz, ...ghepCau],
};
