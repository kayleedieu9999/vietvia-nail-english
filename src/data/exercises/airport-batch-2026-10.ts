import { Exercise, LessonExerciseSet } from "@/types/exercise";
import { placeChoices } from "./_shared/exerciseKit";

/**
 * Airport practice set built ONLY from the Oct 2026 expansion
 * (src/data/lessons/airport/11-batch-2026-10.ts, ap-51 → ap-60). Every
 * English sentence below is quoted from those lessons.
 */
const ID = "airport-batch-2026-10";
const base = { lessonId: ID } as const;

const luyenNgay: Exercise[] = [
  {
    ...base, id: `${ID}-ln-1`, mode: "luyen-ngay", type: "multiple_choice", speaker: "Nhân viên",
    prompt: "This bag is oversized. There's an extra fee.", promptVi: "Túi này quá khổ. Sẽ có thêm phí.",
    question: "Bạn nên hỏi gì tiếp theo?",
    ...placeChoices("Okay. How much is the extra fee?", ["I'd like a window seat.", "My flight was yesterday."], 1),
    explanation: "Khi bag bị tính phí thêm, hỏi ngay mức phí để quyết định.",
  },
  {
    ...base, id: `${ID}-ln-2`, mode: "luyen-ngay", type: "true_false",
    prompt: "\"Last call for Denver, Flight 215\" means the plane is still waiting for more passengers for a long time.",
    promptVi: "\"Last call\" nghĩa là máy bay còn chờ thêm hành khách rất lâu.",
    question: "Câu này đúng hay sai?",
    options: [{ id: "a", text: "Đúng" }, { id: "b", text: "Sai" }], correctOptionId: "b",
    explanation: "\"Last call\" là lời gọi cuối cùng — cửa máy bay sắp đóng, bạn cần ra cổng ngay.",
  },
  {
    ...base, id: `${ID}-ln-speak-1`, mode: "luyen-ngay", type: "speaking", speaker: "Nhân viên",
    prompt: "Flight 482 has a gate change to B7.", promptVi: "Chuyến 482 đổi cổng sang B7.",
    question: "Bạn muốn xác nhận lại cổng. Bạn sẽ nói sao?",
    targetEnglish: "Excuse me, did you say gate B7?", targetVietnamese: "Xin lỗi, chị vừa nói cổng B7 phải không?",
    acceptedAnswers: ["Did you say gate B7?", "Sorry, gate B7?"],
  },
  {
    ...base, id: `${ID}-ln-speak-2`, mode: "luyen-ngay", type: "speaking", speaker: "Tiếp viên",
    prompt: "Is there anything I can get for you?", promptVi: "Tôi lấy gì cho anh/chị được không?",
    question: "Bạn thấy lạnh. Bạn sẽ nói sao?",
    targetEnglish: "It's a little cold in here. Could I have a blanket?", targetVietnamese: "Ở đây hơi lạnh. Cho tôi xin cái chăn được không?",
    acceptedAnswers: ["Could I have a blanket?", "Can I get a blanket, please?"],
  },
];

const quiz: Exercise[] = [
  {
    ...base, id: `${ID}-qz-1`, mode: "quiz", type: "listening_choice",
    prompt: "The overhead bins are almost full. We may gate-check your carry-on.",
    promptVi: "Ngăn để hành lý trên đầu gần đầy. Chúng tôi có thể gửi túi xách tay của bạn ở cổng.",
    question: "Nhân viên vừa nói gì?",
    ...placeChoices("Túi xách tay có thể phải gửi ở cổng", ["Chuyến bay bị hủy", "Ghế của bạn đã được đổi"], 0),
    explanation: "\"Gate-check\" là gửi túi ở cổng — thường được trả lại ngay khi máy bay hạ cánh.",
  },
  {
    ...base, id: `${ID}-qz-2`, mode: "quiz", type: "fill_blank",
    prompt: "Someone is sitting in my ___. Could you help me?", audioText: "Someone is sitting in my seat. Could you help me?",
    promptVi: "Có người ngồi ghế của tôi. Chị giúp tôi được không?", question: "Điền từ còn thiếu:",
    ...placeChoices("seat", ["gate", "bin"], 2),
    explanation: "Ghế của bạn là \"my seat\". Gate là cổng, bin là ngăn để hành lý.",
  },
  {
    ...base, id: `${ID}-qz-3`, mode: "quiz", type: "situation_choice",
    prompt: "You missed your connecting flight.", promptVi: "Bạn lỡ chuyến bay nối.",
    question: "Bạn nói câu nào với nhân viên?",
    ...placeChoices("I missed my connecting flight. Can you rebook me?", ["Do you need headphones?", "Is the restroom free?"], 1),
    explanation: "\"Rebook\" là đổi sang chuyến khác — câu cần dùng khi lỡ chuyến nối.",
  },
  {
    ...base, id: `${ID}-qz-4`, mode: "quiz", type: "multiple_choice", speaker: "Nhân viên",
    prompt: "Your flight was canceled. We'll find you another one.", promptVi: "Chuyến bay của bạn bị hủy. Chúng tôi sẽ tìm chuyến khác.",
    question: "Bạn muốn hỏi về hành lý ký gửi. Chọn câu đúng:",
    ...placeChoices("Thank you. What happens to my checked bag?", ["Yes, I'm looking for 18C.", "Just water, please. No ice."], 0),
    explanation: "Hỏi \"What happens to my checked bag?\" để biết hành lý ký gửi sẽ được xử lý thế nào.",
  },
  {
    ...base, id: `${ID}-qz-img-1`, mode: "quiz", type: "image_quiz",
    image: "/images/roadmap/san-bay.jpg", imageAlt: "Sân bay ở Mỹ",
    question: "Bạn đang ở sân bay và không biết đi đến Terminal 2 thế nào. Bạn nói gì?",
    ...placeChoices("How do I get to Terminal 2?", ["Could I have a blanket?", "Is the screen working?"], 2),
    explanation: "\"How do I get to…?\" là câu hỏi đường cơ bản, dùng được ở mọi nơi trong sân bay.",
  },
];

const ghepCau: Exercise[] = [
  {
    ...base, id: `${ID}-gc-1`, mode: "ghep-cau", type: "sentence_builder",
    prompt: "Can I move a few things to my carry-on?", promptVi: "Tôi chuyển vài món sang túi xách tay được không?",
    blocks: ["my carry-on", "Can I", "a few things", "?", "move", "to"], correctSentence: "Can I move a few things to my carry-on?",
  },
  {
    ...base, id: `${ID}-gc-2`, mode: "ghep-cau", type: "sentence_builder",
    prompt: "Do you offer a meal voucher?", promptVi: "Bên chị có meal voucher không?",
    blocks: ["voucher", "a meal", "Do you", "offer", "?"], correctSentence: "Do you offer a meal voucher?",
  },
];

const luyenThem: Exercise[] = [
  {
    ...base, id: `${ID}-lt-1`, mode: "luyen-them", type: "multiple_choice", speaker: "Nhân viên",
    prompt: "Do you need directions to ground transportation?", promptVi: "Anh/chị cần chỉ đường đến khu xe đưa đón không?",
    question: "Bạn muốn đón xe công nghệ. Trả lời thế nào?",
    ...placeChoices("Yes. Which way is the rideshare pickup area?", ["Yes, could I get a wheelchair to the gate?", "No, I'm connecting to Seattle."], 1),
    explanation: "\"Rideshare pickup area\" là khu đón xe công nghệ (Uber, Lyft).",
  },
  {
    ...base, id: `${ID}-lt-2`, mode: "luyen-them", type: "true_false",
    prompt: "\"Would you mind switching seats so my family can sit together?\" is a polite request.",
    promptVi: "\"Would you mind switching seats…?\" là một lời nhờ lịch sự.",
    question: "Câu này đúng hay sai?",
    options: [{ id: "a", text: "Đúng" }, { id: "b", text: "Sai" }], correctOptionId: "a",
    explanation: "\"Would you mind…?\" là cách nhờ lịch sự để đổi chỗ ngồi.",
  },
  {
    ...base, id: `${ID}-lt-3`, mode: "luyen-them", type: "fill_blank",
    prompt: "My bag didn't come ___. Where's the baggage service office?", audioText: "My bag didn't come out. Where's the baggage service office?",
    promptVi: "Hành lý của tôi không ra. Văn phòng hỗ trợ hành lý ở đâu?", question: "Điền từ còn thiếu:",
    ...placeChoices("out", ["up", "in"], 0),
    explanation: "\"Come out\" — hành lý ra khỏi băng chuyền. Nếu không ra, bạn tìm văn phòng baggage service.",
  },
];

export const airportBatchExerciseSet: LessonExerciseSet = {
  lessonId: ID,
  lessonTitle: "Tiếng Anh sân bay — bài mới",
  contentHref: "/topic/airport",
  exercises: [...luyenNgay, ...quiz, ...ghepCau, ...luyenThem],
};
