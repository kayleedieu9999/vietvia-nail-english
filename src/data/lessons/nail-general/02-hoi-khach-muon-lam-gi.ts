import { Lesson } from "@/types/content";

export const hoiKhachMuonLamGiLesson: Lesson = {
  id: "nails-2",
  slug: "hoi-khach-muon-lam-gi-hom-nay",
  topicId: "nail-general",
  title: "Hỏi khách muốn làm gì hôm nay",
  description: "Hỏi khách chọn manicure/pedicure, gel/sơn thường, bộ mới hay dặm lại.",
  level: "beginner",
  section: "BẮT ĐẦU",
  questions: [
    {
      id: "nails-2-1",
      type: "english_to_vietnamese",
      badgeEmoji: "🙋",
      english: "Would you like a manicure or a pedicure?",
      vietnamese: "Chị muốn làm manicure hay pedicure?",
      choices: [
        { id: "a", text: "Chị muốn làm manicure hay pedicure?" },
        { id: "b", text: "Chị muốn màu đậm hay nhạt?" },
        { id: "c", text: "Chị muốn làm dài hay ngắn?" },
      ],
      correctAnswer: "a",
      explanation:
        "'Manicure or pedicure' hỏi khách muốn làm tay hay chân — đây là câu hỏi mở đầu rất thường gặp trong tiệm nails.",
      wrongAnswerExplanations:
        "Hai đáp án kia hỏi về màu sắc và độ dài móng, không phải loại dịch vụ mà câu tiếng Anh đang hỏi.",
      usageTip: "Dùng ngay khi khách chưa nói rõ muốn làm tay hay chân.",
    },
    {
      id: "nails-2-2",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "💬",
      prompt: "I want a manicure.",
      promptVietnamese: "Tôi muốn làm manicure.",
      english: "Great choice. Gel or regular polish?",
      vietnamese: "Lựa chọn tuyệt vời. Chị muốn sơn gel hay sơn thường?",
      choices: [
        { id: "a", text: "Great choice. Gel or regular polish?" },
        { id: "b", text: "It takes about an hour." },
        { id: "c", text: "Your nails look great." },
      ],
      correctAnswer: "a",
      explanation: "Sau khi biết khách muốn manicure, mình hỏi tiếp loại sơn để chuẩn bị đúng vật liệu.",
      wrongAnswerExplanations:
        "'It takes about an hour.' nói về thời gian, chưa phải lúc để nói. 'Your nails look great.' là lời khen, không liên quan đến câu hỏi cần hỏi tiếp theo.",
      usageTip: "Dùng ngay sau khi khách chọn loại dịch vụ, để hỏi thêm chi tiết về sơn.",
    },
    {
      id: "nails-2-3",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "🤔",
      prompt: "What's the difference between gel and regular?",
      promptVietnamese: "Sơn gel và sơn thường khác nhau thế nào?",
      english: "Gel lasts longer, but regular is cheaper.",
      vietnamese: "Sơn gel bền hơn, nhưng sơn thường thì rẻ hơn.",
      choices: [
        { id: "a", text: "Gel lasts longer, but regular is cheaper." },
        { id: "b", text: "We open at nine." },
        { id: "c", text: "Please have a seat." },
      ],
      correctAnswer: "a",
      explanation:
        "Khi khách hỏi sự khác biệt, mình giải thích ngắn gọn, dễ hiểu bằng cách so sánh hai điểm chính: độ bền và giá.",
      wrongAnswerExplanations:
        "'We open at nine.' nói về giờ mở cửa. 'Please have a seat.' là lời mời ngồi — cả hai đều không trả lời câu hỏi của khách.",
      usageTip: "Dùng khi khách phân vân giữa sơn gel và sơn thường.",
    },
    {
      id: "nails-2-4",
      type: "vietnamese_to_english",
      badgeEmoji: "💅",
      promptContext: "Chị muốn hỏi khách làm bộ mới hay chỉ dặm lại. Chọn câu tiếng Anh đúng.",
      english: "Do you want a new set or a fill?",
      vietnamese: "Chị muốn làm bộ mới hay dặm lại?",
      choices: [
        { id: "a", text: "Do you want a new set or a fill?" },
        { id: "b", text: "Do you want new set or a fill?" },
        { id: "c", text: "You want a new set or fill?" },
      ],
      correctAnswer: "a",
      explanation:
        "'Do you want A or B?' là mẫu câu hỏi lựa chọn chuẩn, cần đủ trợ động từ 'do' và mạo từ 'a' trước danh từ số ít.",
      wrongAnswerExplanations:
        "Đáp án 'Do you want new set or a fill?' thiếu mạo từ 'a' trước 'new set'. Đáp án 'You want a new set or fill?' thiếu trợ động từ 'do' cần thiết để tạo câu hỏi.",
      usageTip: "Dùng khi khách đã làm bột/acrylic trước đó và cần hỏi làm mới hay chỉ dặm.",
    },
    {
      id: "nails-2-5",
      type: "fill_blank",
      badgeEmoji: "🧴",
      prompt: "Do you need your old polish ___?",
      english: "Do you need your old polish removed?",
      vietnamese: "Chị có cần tháo lớp sơn cũ ra không?",
      choices: [
        { id: "a", text: "removed" },
        { id: "b", text: "remove" },
        { id: "c", text: "removing" },
      ],
      correctAnswer: "a",
      explanation:
        "'Removed' là dạng quá khứ phân từ, dùng sau 'need + tân ngữ' để diễn tả việc tân ngữ được thực hiện hành động.",
      wrongAnswerExplanations:
        "'Remove' là động từ nguyên mẫu, không đúng ngữ pháp ở vị trí này. 'Removing' là dạng '-ing', cũng không phù hợp trong cấu trúc 'need something removed'.",
      usageTip: "Dùng khi hỏi khách có cần tháo sơn cũ trước khi làm dịch vụ mới không.",
    },
    {
      id: "nails-2-6",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "👍",
      prompt: "Can you take off my old polish first?",
      promptVietnamese: "Chị tháo sơn cũ giúp tôi trước được không?",
      english: "Sure, no problem.",
      vietnamese: "Dạ được, không vấn đề gì.",
      choices: [
        { id: "a", text: "Sure, no problem." },
        { id: "b", text: "That color is out of stock." },
        { id: "c", text: "It's forty dollars extra." },
      ],
      correctAnswer: "a",
      explanation: "Khi khách yêu cầu điều đơn giản, mình đồng ý nhanh gọn và thân thiện.",
      wrongAnswerExplanations:
        "'That color is out of stock.' và 'It's forty dollars extra.' đều không liên quan đến yêu cầu tháo sơn cũ của khách.",
      usageTip: "Dùng khi khách yêu cầu tháo sơn cũ trước khi làm dịch vụ mới.",
    },
    {
      id: "nails-2-7",
      type: "english_to_vietnamese",
      badgeEmoji: "💭",
      english: "Gel or regular polish?",
      vietnamese: "Sơn gel hay sơn thường?",
      choices: [
        { id: "a", text: "Sơn gel hay sơn thường?" },
        { id: "b", text: "Bạn muốn ngắn hay dài?" },
        { id: "c", text: "Bạn có hẹn trước không?" },
      ],
      correctAnswer: "a",
      explanation: "Đây là câu hỏi ngắn gọn, thường dùng để hỏi khách muốn loại sơn nào.",
      wrongAnswerExplanations:
        "Hai đáp án kia hỏi về độ dài móng và việc đặt hẹn, không phải loại sơn mà câu đang hỏi.",
      usageTip: "Dùng khi cần hỏi nhanh khách muốn sơn gel hay sơn thường.",
    },
    {
      id: "nails-2-8",
      type: "listening",
      badgeEmoji: "🎧",
      english: "Do you want a fill or a new set?",
      audioText: "Do you want a fill or a new set?",
      vietnamese: "Chị muốn dặm lại hay làm bộ mới?",
      choices: [
        { id: "a", text: "Chị muốn dặm lại hay làm bộ mới?" },
        { id: "b", text: "Chị muốn màu sáng hay màu tối?" },
        { id: "c", text: "Chị có đau ở đâu không?" },
      ],
      correctAnswer: "a",
      explanation: "'Fill or a new set' hỏi về việc dặm lại bột cũ hay làm bộ hoàn toàn mới.",
      wrongAnswerExplanations:
        "Hai đáp án còn lại nói về màu sắc và cảm giác đau — không đúng với nghĩa câu vừa nghe.",
      usageTip: "Dùng khi khách đã có bột/acrylic từ trước và cần hỏi rõ dịch vụ hôm nay.",
    },
    {
      id: "nails-2-9",
      type: "true_false",
      badgeEmoji: "❌",
      prompt: "I'd like to remove my old polish first.",
      promptVietnamese: "Câu này nghĩa là 'Tôi muốn thêm một lớp sơn bóng.'",
      english: "I'd like to remove my old polish first.",
      vietnamese: "Tôi muốn tháo sơn cũ ra trước.",
      choices: [
        { id: "a", text: "Đúng" },
        { id: "b", text: "Sai" },
      ],
      correctAnswer: "b",
      explanation:
        "Sai — câu này thực sự nghĩa là 'Tôi muốn tháo sơn cũ ra trước', không phải muốn thêm lớp sơn bóng.",
      wrongAnswerExplanations:
        "Nhận định trong câu bị sai vì 'remove' nghĩa là 'tháo ra, bỏ đi', không phải 'thêm vào'.",
      usageTip: "Dùng khi khách muốn tháo lớp sơn cũ trước khi làm dịch vụ mới.",
    },
    {
      id: "nails-2-10",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "💡",
      prompt: "I'm not sure, what do you recommend?",
      promptVietnamese: "Tôi không chắc, chị đề nghị gì?",
      english: "A fill works well if your nails aren't lifting.",
      vietnamese: "Dặm lại là được nếu móng chị không bị bong.",
      choices: [
        { id: "a", text: "A fill works well if your nails aren't lifting." },
        { id: "b", text: "We close at seven." },
        { id: "c", text: "That color is very popular." },
      ],
      correctAnswer: "a",
      explanation: "Khi khách phân vân, mình đưa ra gợi ý cụ thể dựa trên tình trạng móng thực tế.",
      wrongAnswerExplanations:
        "'We close at seven.' và 'That color is very popular.' đều không phải là lời khuyên phù hợp cho câu hỏi của khách.",
      usageTip: "Dùng khi khách không chắc nên chọn dịch vụ nào và cần mình tư vấn.",
    },
  ],
};
