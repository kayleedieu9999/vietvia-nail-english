import { Exercise, LessonExerciseSet } from "@/types/exercise";
import { placeChoices } from "./_shared/exerciseKit";

/**
 * Nails practice set built ONLY from the Oct 2026 expansion
 * (src/data/lessons/nails-batch-2026-10.ts, nails-n01 → nails-n11). Every
 * English sentence is quoted from those lessons.
 */
const ID = "nails-batch-2026-10";
const base = { lessonId: ID } as const;

const luyenNgay: Exercise[] = [
  {
    ...base, id: `${ID}-ln-1`, mode: "luyen-ngay", type: "multiple_choice", speaker: "Khách",
    prompt: "It feels too thick.", promptVi: "Cảm giác dày quá.",
    question: "Bạn sẽ đáp lại thế nào?",
    ...placeChoices("I can make it thinner. Give me a moment.", ["Do you take walk-ins?", "Can I get a receipt?"], 0),
    explanation: "Khi khách chê lớp gel/sơn dày, đề nghị làm mỏng lại ngay.",
  },
  {
    ...base, id: `${ID}-ln-2`, mode: "luyen-ngay", type: "true_false",
    prompt: "\"Do you take walk-ins?\" is asking about the price.", promptVi: "\"Do you take walk-ins?\" là hỏi về giá.",
    question: "Câu này đúng hay sai?",
    options: [{ id: "a", text: "Đúng" }, { id: "b", text: "Sai" }], correctOptionId: "b",
    explanation: "Walk-in là khách đến không đặt hẹn trước.",
  },
  {
    ...base, id: `${ID}-ln-speak-1`, mode: "luyen-ngay", type: "speaking", speaker: "Khách",
    prompt: "I'll just get a regular manicure.", promptVi: "Tôi chỉ làm manicure thường thôi.",
    question: "Bạn gợi ý thêm gel. Bạn nói sao?",
    targetEnglish: "Would you like to add gel? It lasts much longer.", targetVietnamese: "Chị có muốn thêm gel không? Bền hơn nhiều.",
    acceptedAnswers: ["Would you like to add gel?", "Do you want to add gel? It lasts longer."],
  },
  {
    ...base, id: `${ID}-ln-speak-2`, mode: "luyen-ngay", type: "speaking", speaker: "Khách",
    prompt: "That spot is sensitive.", promptVi: "Chỗ đó nhạy cảm.",
    question: "Bạn đáp lại thế nào?",
    targetEnglish: "Thanks for telling me. I'll go easy there.", targetVietnamese: "Cảm ơn chị đã nói. Tôi sẽ làm nhẹ chỗ đó.",
    acceptedAnswers: ["Thanks for telling me.", "I'll go easy there."],
  },
];

const quiz: Exercise[] = [
  {
    ...base, id: `${ID}-qz-1`, mode: "quiz", type: "listening_choice",
    prompt: "Please keep your hand under the lamp until the timer beeps.", promptVi: "Chị để tay dưới đèn đến khi đồng hồ kêu nhé.",
    question: "Nhân viên nhắc khách điều gì?",
    ...placeChoices("Giữ tay dưới đèn đến khi đồng hồ kêu", ["Rút tay ra ngay", "Đổi sang màu khác"], 2),
    explanation: "Gel cần đủ thời gian dưới đèn để khô — nên giữ tay đến khi timer kêu.",
  },
  {
    ...base, id: `${ID}-qz-2`, mode: "quiz", type: "fill_blank",
    prompt: "Let me ___ them for a smaller size.", audioText: "Let me swap them for a smaller size.",
    promptVi: "Để tôi đổi sang cỡ nhỏ hơn.", question: "Điền từ còn thiếu:",
    ...placeChoices("swap", ["soak", "ring"], 1),
    explanation: "\"Swap\" là đổi. Soak là ngâm, ring là tính tiền (ring up).",
  },
  {
    ...base, id: `${ID}-qz-3`, mode: "quiz", type: "situation_choice",
    prompt: "A customer says her pedicure water is too hot.", promptVi: "Khách nói nước pedicure quá nóng.",
    question: "Bạn nói câu nào?",
    ...placeChoices("Let me add some cold water. Is that better?", ["Would you like to add gel?", "Can I book my next appointment?"], 1),
    explanation: "Thêm nước lạnh rồi hỏi khách còn khó chịu không.",
  },
  {
    ...base, id: `${ID}-qz-4`, mode: "quiz", type: "multiple_choice", speaker: "Khách",
    prompt: "Can I get a discount?", promptVi: "Tôi được giảm giá không?",
    question: "Câu trả lời lịch sự nhất là gì?",
    ...placeChoices("I'm sorry, we can't change the price. But we have a loyalty card.", ["No. Pay now.", "Sure. It's free."], 0),
    explanation: "Từ chối nhẹ nhàng rồi đưa ra lựa chọn khác (loyalty card) là cách giữ khách.",
  },
  {
    ...base, id: `${ID}-qz-img-1`, mode: "quiz", type: "image_quiz",
    image: "/images/lessons/hand-41-gel-1.jpg", imageAlt: "Làm móng gel",
    question: "Khách thấy đèn gel nóng tay. Bạn nói gì?",
    ...placeChoices("Take your hand out for a second, then try again.", ["How much longer will it be?", "Can you ring me up?"], 1),
    explanation: "Khi đèn gel nóng, cho khách rút tay ra một chút rồi thử lại.",
  },
];

const ghepCau: Exercise[] = [
  {
    ...base, id: `${ID}-gc-1`, mode: "ghep-cau", type: "sentence_builder",
    prompt: "Would you like an extra massage?", promptVi: "Chị có muốn massage thêm không?",
    blocks: ["massage", "an extra", "Would you", "like", "?"], correctSentence: "Would you like an extra massage?",
  },
  {
    ...base, id: `${ID}-gc-2`, mode: "ghep-cau", type: "sentence_builder",
    prompt: "Can I book my next appointment?", promptVi: "Tôi đặt lịch hẹn lần sau được không?",
    blocks: ["appointment", "my next", "Can I", "book", "?"], correctSentence: "Can I book my next appointment?",
  },
];

const luyenThem: Exercise[] = [
  {
    ...base, id: `${ID}-lt-1`, mode: "luyen-them", type: "multiple_choice", speaker: "Khách",
    prompt: "I changed my mind. I want something darker.", promptVi: "Tôi đổi ý. Tôi muốn màu đậm hơn.",
    question: "Bạn đáp lại thế nào?",
    ...placeChoices("Sure. I'll take this off and start over with a darker shade.", ["It was a little thick.", "About an hour and a half."], 2),
    explanation: "Khách đổi ý giữa chừng: đồng ý và nói rõ bạn sẽ làm gì.",
  },
  {
    ...base, id: `${ID}-lt-2`, mode: "luyen-them", type: "fill_blank",
    prompt: "We're going to Hawaii next ___.", audioText: "We're going to Hawaii next month.",
    promptVi: "Tháng sau chúng tôi đi Hawaii.", question: "Điền từ còn thiếu:",
    ...placeChoices("month", ["mind", "moment"], 2),
    explanation: "\"Next month\" là tháng sau — chủ đề small talk về du lịch.",
  },
  {
    ...base, id: `${ID}-lt-3`, mode: "luyen-them", type: "true_false",
    prompt: "\"One of my nails is lifting\" means the nail is coming off at the edge.", promptVi: "\"One of my nails is lifting\" nghĩa là một móng đang bong ở mép.",
    question: "Câu này đúng hay sai?",
    options: [{ id: "a", text: "Đúng" }, { id: "b", text: "Sai" }], correctOptionId: "a",
    explanation: "\"Lifting\" là móng acrylic bắt đầu bong khỏi móng thật — thợ cần sửa.",
  },
];

export const nailsBatchExerciseSet: LessonExerciseSet = {
  lessonId: ID,
  lessonTitle: "Tiếng Anh nghề Nails — bài mới",
  contentHref: "/hoi-thoai-nails",
  exercises: [...luyenNgay, ...quiz, ...ghepCau, ...luyenThem],
};
