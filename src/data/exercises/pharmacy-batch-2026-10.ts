import { Exercise, LessonExerciseSet } from "@/types/exercise";
import { placeChoices } from "./_shared/exerciseKit";

/**
 * Pharmacy practice set built ONLY from the Oct 2026 expansion
 * (src/data/collections/pharmacy-batch2.ts, ph-n-01 → ph-n-50). Every
 * English sentence is quoted from those items. Communication practice
 * only — no medical advice.
 */
const ID = "pharmacy-batch-2026-10";
const base = { lessonId: ID } as const;

const luyenNgay: Exercise[] = [
  {
    ...base, id: `${ID}-ln-1`, mode: "luyen-ngay", type: "multiple_choice", speaker: "Nhân viên",
    prompt: "We could only fill part of it today. The rest will be in tomorrow.", promptVi: "Hôm nay chúng tôi chỉ chuẩn bị được một phần. Phần còn lại sẽ có vào ngày mai.",
    question: "Bạn muốn biết khi nào có phần còn lại. Bạn hỏi gì?",
    ...placeChoices("When will the rest be ready?", ["Can I pay by card?", "Where do I put this cream?"], 2),
    explanation: "\"The rest\" là phần còn lại. Hỏi \"When will the rest be ready?\" để biết thời gian.",
  },
  {
    ...base, id: `${ID}-ln-2`, mode: "luyen-ngay", type: "true_false",
    prompt: "\"It's on back order\" means the medication is ready to pick up now.", promptVi: "\"It's on back order\" nghĩa là thuốc đã sẵn sàng để lấy ngay.",
    question: "Câu này đúng hay sai?",
    options: [{ id: "a", text: "Đúng" }, { id: "b", text: "Sai" }], correctOptionId: "b",
    explanation: "\"Back order\" nghĩa là thuốc đang chờ hàng về — chưa có sẵn.",
  },
  {
    ...base, id: `${ID}-ln-speak-1`, mode: "luyen-ngay", type: "speaking", speaker: "Bạn",
    prompt: "Hi, what's the status of my refill?", promptVi: "Chào, refill của tôi đang ở bước nào rồi?",
    question: "Hãy nói lại câu này bằng giọng của bạn:",
    targetEnglish: "What's the status of my refill?", targetVietnamese: "Refill của tôi đang ở bước nào rồi?",
    acceptedAnswers: ["Hi, what's the status of my refill?", "When will my refill be ready?"],
  },
  {
    ...base, id: `${ID}-ln-speak-2`, mode: "luyen-ngay", type: "speaking", speaker: "Nhân viên",
    prompt: "I'm sorry, your insurance isn't going through.", promptVi: "Xin lỗi, bảo hiểm của bạn không xử lý được.",
    question: "Bạn muốn biết lý do. Bạn sẽ nói sao?",
    targetEnglish: "Why did my insurance reject it?", targetVietnamese: "Vì sao bảo hiểm từ chối?",
    acceptedAnswers: ["Why did my insurance reject it", "Why was it rejected?"],
  },
];

const quiz: Exercise[] = [
  {
    ...base, id: `${ID}-qz-1`, mode: "quiz", type: "listening_choice",
    prompt: "This one needs prior authorization from your insurance.", promptVi: "Thuốc này cần bảo hiểm của bạn chấp thuận trước.",
    question: "Nhân viên vừa nói gì?",
    ...placeChoices("Cần bảo hiểm chấp thuận trước khi lấy thuốc", ["Thuốc đã hết hàng", "Bạn cần trả tiền mặt"], 1),
    explanation: "\"Prior authorization\" là sự chấp thuận trước của công ty bảo hiểm.",
  },
  {
    ...base, id: `${ID}-qz-2`, mode: "quiz", type: "fill_blank",
    prompt: "I'd prefer the ___, please, if that's okay.", audioText: "I'd prefer the generic, please, if that's okay.",
    promptVi: "Tôi muốn loại generic, nếu được.", question: "Điền từ còn thiếu:",
    ...placeChoices("generic", ["deductible", "refill"], 0),
    explanation: "\"Generic\" là thuốc không mang tên hiệu gốc, thường rẻ hơn. Deductible và refill có nghĩa khác.",
  },
  {
    ...base, id: `${ID}-qz-3`, mode: "quiz", type: "situation_choice",
    prompt: "You are not sure what the label means.", promptVi: "Bạn chưa hiểu nhãn thuốc.",
    question: "Bạn nói câu nào với pharmacist?",
    ...placeChoices("Could you explain what this label means?", ["I'd like to turn off automatic refills.", "I changed my insurance last month."], 2),
    explanation: "Câu này giúp bạn nhờ pharmacist giải thích nhãn thuốc.",
  },
  {
    ...base, id: `${ID}-qz-4`, mode: "quiz", type: "multiple_choice",
    prompt: "What does \"twice daily\" mean?", promptVi: "\"Twice daily\" nghĩa là gì?",
    question: "Chọn nghĩa đúng:",
    ...placeChoices("Hai lần mỗi ngày", ["Hai ngày một lần", "Hai viên mỗi lần"], 0),
    explanation: "\"Twice daily\" là hai lần mỗi ngày. Hãy hỏi lại pharmacist nếu bạn vẫn chưa chắc.",
  },
  {
    ...base, id: `${ID}-qz-img-1`, mode: "quiz", type: "image_quiz",
    image: "/images/covers/pharmacy/pharmacy-counter.jpg", imageAlt: "Quầy pharmacy",
    question: "Bạn đứng ở quầy này và muốn biết giá khi không dùng bảo hiểm. Bạn nói gì?",
    ...placeChoices("What's the cash price without insurance?", ["Can you show me how to use this inhaler?", "What if I miss a dose?"], 1),
    explanation: "\"Cash price\" là giá tiền mặt khi không dùng bảo hiểm.",
  },
];

const ghepCau: Exercise[] = [
  {
    ...base, id: `${ID}-gc-1`, mode: "ghep-cau", type: "sentence_builder",
    prompt: "Can you set up automatic refills?", promptVi: "Bạn cài tự động refill cho tôi được không?",
    blocks: ["refills", "set up", "Can you", "automatic", "?"], correctSentence: "Can you set up automatic refills?",
  },
  {
    ...base, id: `${ID}-gc-2`, mode: "ghep-cau", type: "sentence_builder",
    prompt: "Do I take it before or after meals?", promptVi: "Tôi uống trước hay sau bữa ăn?",
    blocks: ["after meals", "Do I", "?", "take it", "before or"], correctSentence: "Do I take it before or after meals?",
  },
];

const luyenThem: Exercise[] = [
  {
    ...base, id: `${ID}-lt-1`, mode: "luyen-them", type: "multiple_choice", speaker: "Nhân viên",
    prompt: "Your prescription is still in the queue. It'll be about thirty minutes.", promptVi: "Đơn thuốc của bạn vẫn đang trong hàng chờ. Khoảng ba mươi phút nữa.",
    question: "\"In the queue\" nghĩa là gì?",
    ...placeChoices("Đang trong hàng chờ xử lý", ["Đã giao xong", "Bị sai thông tin"], 0),
    explanation: "\"Queue\" là hàng chờ — đơn thuốc đang chờ đến lượt được chuẩn bị.",
  },
  {
    ...base, id: `${ID}-lt-2`, mode: "luyen-them", type: "fill_blank",
    prompt: "Sorry, my English isn't great. Can you ___ that?", audioText: "Sorry, my English isn't great. Can you repeat that?",
    promptVi: "Xin lỗi, tiếng Anh của tôi chưa tốt. Bạn nhắc lại được không?", question: "Điền từ còn thiếu:",
    ...placeChoices("repeat", ["refill", "reject"], 1),
    explanation: "\"Repeat\" là nhắc lại — rất hữu ích khi bạn chưa nghe kịp.",
  },
  {
    ...base, id: `${ID}-lt-3`, mode: "luyen-them", type: "true_false",
    prompt: "\"I haven't met my deductible yet\" is something you can say about your insurance.", promptVi: "\"I haven't met my deductible yet\" là câu bạn có thể nói về bảo hiểm.",
    question: "Câu này đúng hay sai?",
    options: [{ id: "a", text: "Đúng" }, { id: "b", text: "Sai" }], correctOptionId: "a",
    explanation: "Deductible là khoản bạn tự trả trước khi bảo hiểm bắt đầu chi trả.",
  },
];

export const pharmacyBatchExerciseSet: LessonExerciseSet = {
  lessonId: ID,
  lessonTitle: "Pharmacy — bài mới",
  contentHref: "/lo-trinh/pharmacy",
  exercises: [...luyenNgay, ...quiz, ...ghepCau, ...luyenThem],
};
