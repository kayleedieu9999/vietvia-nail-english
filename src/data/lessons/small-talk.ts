import { Lesson } from "@/types/content";

export const smallTalkLesson: Lesson = {
  id: "small-talk-1",
  slug: "chao-hoi-tro-chuyen",
  topicId: "small-talk",
  title: "Chào hỏi & Trò chuyện cơ bản",
  description: "Những câu chào hỏi và trả lời thường gặp nhất khi khách bước vào tiệm.",
  level: "beginner",
  questions: [
    {
      id: "small-1",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "👋",
      english: "I'm good, thank you! Please sit down.",
      vietnamese: "Tôi khỏe, cảm ơn chị! Mời chị ngồi.",
      prompt: "Hi, how are you today?",
      promptVietnamese: "Chào chị, dạo này chị khỏe không?",
      choices: [
        { id: "a", text: "I'm good, thank you! Please sit down." },
        { id: "b", text: "It takes about an hour." },
        { id: "c", text: "Your nails are too short." },
      ],
      correctAnswer: "a",
      explanation:
        "Khi khách chào hỏi, mình trả lời lịch sự rồi mời khách ngồi. 'I'm good, thank you!' là cách đáp lại lời chào rất tự nhiên, sau đó mời khách vào chỗ ngồi để bắt đầu làm.",
      wrongAnswerExplanations:
        "'It takes about an hour.' là câu trả lời về thời gian làm dịch vụ, không phải cách đáp lại lời chào. 'Your nails are too short.' là nhận xét về móng tay, hoàn toàn không liên quan khi khách chỉ đang chào hỏi.",
      usageTip:
        "Dùng câu này ngay khi khách bước vào tiệm và chào hỏi mình — trả lời thân thiện rồi mời khách ngồi vào ghế làm nails.",
    },
    {
      id: "small-2",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "📅",
      english: "No, we take walk-ins too.",
      vietnamese: "Không, chúng tôi cũng nhận khách không hẹn trước.",
      prompt: "Do I need an appointment?",
      promptVietnamese: "Tôi có cần đặt hẹn trước không?",
      choices: [
        { id: "a", text: "No, we take walk-ins too." },
        { id: "b", text: "Sure. How about this one?" },
        { id: "c", text: "Your nails are too short." },
      ],
      correctAnswer: "a",
      explanation:
        "Khách hỏi về việc đặt hẹn — trả lời rõ có cần hẹn trước hay không. 'We take walk-ins too' nghĩa là tiệm cũng nhận khách không cần hẹn trước.",
      wrongAnswerExplanations:
        "'Sure. How about this one?' thường dùng khi gợi ý một màu sơn khác, không liên quan đến việc đặt hẹn. 'Your nails are too short.' cũng không phải câu trả lời cho câu hỏi về đặt hẹn.",
      usageTip:
        "Dùng khi khách gọi điện hoặc bước vào tiệm hỏi có cần đặt hẹn trước không.",
    },
    {
      id: "small-3",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "⏱️",
      english: "About fifteen minutes.",
      vietnamese: "Khoảng mười lăm phút.",
      prompt: "How long is the wait?",
      promptVietnamese: "Phải đợi bao lâu?",
      choices: [
        { id: "a", text: "About fifteen minutes." },
        { id: "b", text: "Sure. How about this one?" },
        { id: "c", text: "Your nails are too short." },
      ],
      correctAnswer: "a",
      explanation:
        "Khi khách hỏi thời gian chờ, mình trả lời bằng số phút cụ thể để khách biết nên đợi hay quay lại sau.",
      wrongAnswerExplanations:
        "'Sure. How about this one?' là câu dùng khi gợi ý màu sắc, không phải trả lời về thời gian chờ. 'Your nails are too short.' hoàn toàn không liên quan đến câu hỏi này.",
      usageTip: "Dùng khi tiệm đông khách và có người hỏi phải chờ bao lâu mới tới lượt.",
    },
    {
      id: "small-4",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "💧",
      english: "Of course, one moment.",
      vietnamese: "Dạ được, chờ một chút.",
      prompt: "Can I get some water, please?",
      promptVietnamese: "Cho tôi xin ly nước được không?",
      choices: [
        { id: "a", text: "Of course, one moment." },
        { id: "b", text: "It takes about an hour." },
        { id: "c", text: "Your nails are too short." },
      ],
      correctAnswer: "a",
      explanation:
        "Khách yêu cầu nước — đồng ý và nói sẽ mang tới ngay. 'Of course' thể hiện sự vui vẻ đồng ý giúp đỡ khách.",
      wrongAnswerExplanations:
        "'It takes about an hour.' là câu trả lời về thời gian dịch vụ, không phải phản hồi cho yêu cầu xin nước. 'Your nails are too short.' cũng không liên quan gì đến việc khách xin nước uống.",
      usageTip: "Dùng khi khách yêu cầu điều gì đó nhỏ, ví dụ xin nước uống, khăn giấy...",
    },
    {
      id: "small-5",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "💳",
      english: "We take both.",
      vietnamese: "Chúng tôi nhận cả hai.",
      prompt: "Do you take card or cash?",
      promptVietnamese: "Ở đây nhận thẻ hay tiền mặt?",
      choices: [
        { id: "a", text: "We take both." },
        { id: "b", text: "Sure. How about this one?" },
        { id: "c", text: "Your nails are too short." },
      ],
      correctAnswer: "a",
      explanation:
        "Câu hỏi về thanh toán — trả lời rõ hình thức thanh toán được chấp nhận để khách chuẩn bị trước.",
      wrongAnswerExplanations:
        "'Sure. How about this one?' là câu gợi ý màu sắc, không liên quan đến thanh toán. 'Your nails are too short.' cũng không phải câu trả lời phù hợp cho câu hỏi này.",
      usageTip: "Dùng khi khách hỏi về hình thức thanh toán trước khi tính tiền.",
    },
  ],
};
