import { Lesson } from "@/types/content";

export const chaoKhachLesson: Lesson = {
  id: "nails-1",
  slug: "chao-khach-bat-dau-dich-vu",
  topicId: "nail-general",
  title: "Chào khách & bắt đầu dịch vụ",
  description: "Chào đón khách, hỏi tên hẹn, và mời khách bắt đầu dịch vụ.",
  level: "beginner",
  section: "BẮT ĐẦU",
  questions: [
    {
      id: "nails-1-1",
      type: "english_to_vietnamese",
      badgeEmoji: "👋",
      english: "Hi, welcome in!",
      vietnamese: "Chào mừng chị đến tiệm!",
      choices: [
        { id: "a", text: "Chào mừng chị đến tiệm!" },
        { id: "b", text: "Bạn muốn màu gì?" },
        { id: "c", text: "Còn bao lâu nữa xong?" },
      ],
      correctAnswer: "a",
      explanation:
        "'Welcome in!' là câu chào rất tự nhiên khi khách bước vào tiệm, dùng để chào đón khách một cách thân thiện, ấm áp.",
      wrongAnswerExplanations:
        "'Bạn muốn màu gì?' và 'Còn bao lâu nữa xong?' đều là câu hỏi về dịch vụ, không phải lời chào khi khách mới bước vào cửa.",
      usageTip: "Dùng ngay khi khách vừa bước vào tiệm, trước khi hỏi bất cứ điều gì khác.",
    },
    {
      id: "nails-1-2",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "📋",
      prompt: "Hi, I have a 2 o'clock appointment.",
      promptVietnamese: "Chào chị, tôi có hẹn lúc 2 giờ.",
      english: "Great, can I get your name?",
      vietnamese: "Được rồi, cho tôi xin tên của chị nhé?",
      choices: [
        { id: "a", text: "Great, can I get your name?" },
        { id: "b", text: "It takes about an hour." },
        { id: "c", text: "Do you want gel or regular?" },
      ],
      correctAnswer: "a",
      explanation:
        "Khi khách nói đã có hẹn, mình cần hỏi tên để tìm đúng lịch hẹn trong sổ trước khi làm bất cứ việc gì khác.",
      wrongAnswerExplanations:
        "'It takes about an hour.' nói về thời gian dịch vụ, chưa phù hợp lúc này. 'Do you want gel or regular?' hỏi về loại sơn — cũng chưa đúng lúc vì cần xác nhận tên khách trước.",
      usageTip: "Dùng ngay sau khi khách nói họ có hẹn trước, để tìm đúng tên trong lịch hẹn.",
    },
    {
      id: "nails-1-3",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "🚶",
      prompt: "My name is Sarah.",
      promptVietnamese: "Tên tôi là Sarah.",
      english: "Perfect, right this way.",
      vietnamese: "Tuyệt vời, mời chị đi lối này.",
      choices: [
        { id: "a", text: "Perfect, right this way." },
        { id: "b", text: "Your nails are too short." },
        { id: "c", text: "That will be thirty dollars." },
      ],
      correctAnswer: "a",
      explanation:
        "Sau khi xác nhận tên khách, mình mời khách đi vào khu vực làm dịch vụ một cách lịch sự và tự nhiên.",
      wrongAnswerExplanations:
        "'Your nails are too short.' là nhận xét không liên quan lúc này. 'That will be thirty dollars.' là câu nói về giá, dùng lúc thanh toán chứ không phải khi mới đón khách.",
      usageTip: "Dùng ngay sau khi biết tên khách, để dẫn khách vào bàn làm nails.",
    },
    {
      id: "nails-1-4",
      type: "vietnamese_to_english",
      badgeEmoji: "💁",
      promptContext: "Chị muốn hỏi khách hôm nay muốn làm dịch vụ gì. Chọn câu tiếng Anh đúng.",
      english: "What can I do for you today?",
      vietnamese: "Hôm nay tôi có thể giúp gì cho chị?",
      choices: [
        { id: "a", text: "What can I do for you today?" },
        { id: "b", text: "What are you do today?" },
        { id: "c", text: "What you want today?" },
      ],
      correctAnswer: "a",
      explanation:
        "'What can I do for you today?' dùng 'can' + chủ ngữ + động từ nguyên mẫu, là câu hỏi rất lịch sự và tự nhiên để hỏi khách cần giúp gì.",
      wrongAnswerExplanations:
        "'What are you do today?' sai vì lẫn lộn giữa 'are' và 'do' trong cùng một câu. 'What you want today?' thiếu trợ động từ 'do' cần thiết trong câu hỏi tiếng Anh.",
      usageTip: "Dùng để mở đầu, hỏi khách muốn làm dịch vụ gì trong ngày hôm nay.",
    },
    {
      id: "nails-1-5",
      type: "fill_blank",
      badgeEmoji: "🪑",
      prompt: "Please have a ___.",
      english: "Please have a seat.",
      vietnamese: "Mời chị ngồi.",
      choices: [
        { id: "a", text: "seat" },
        { id: "b", text: "sit" },
        { id: "c", text: "sitting" },
      ],
      correctAnswer: "a",
      explanation:
        "'Have a seat' là cụm từ cố định nghĩa là 'mời ngồi'. Sau 'a' cần một danh từ, và 'seat' (chỗ ngồi) chính là danh từ đúng.",
      wrongAnswerExplanations:
        "'Sit' là động từ, không dùng sau 'a'. 'Sitting' là dạng '-ing', cũng không phù hợp trong cụm từ cố định này.",
      usageTip: "Dùng khi mời khách ngồi xuống ghế trước khi bắt đầu làm nails.",
    },
    {
      id: "nails-1-6",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "💅",
      prompt: "I'd like a manicure, please.",
      promptVietnamese: "Tôi muốn làm manicure.",
      english: "Sure, right this way. Please have a seat.",
      vietnamese: "Dạ được, mời chị đi lối này. Mời chị ngồi.",
      choices: [
        { id: "a", text: "Sure, right this way. Please have a seat." },
        { id: "b", text: "We don't have that color." },
        { id: "c", text: "It will take two hours." },
      ],
      correctAnswer: "a",
      explanation:
        "Khi khách nói rõ muốn dịch vụ gì, mình xác nhận rồi mời khách vào chỗ ngồi để bắt đầu.",
      wrongAnswerExplanations:
        "'We don't have that color.' không liên quan vì khách chưa nói gì về màu. 'It will take two hours.' đưa ra thời gian không có căn cứ và chưa đúng lúc để nói.",
      usageTip: "Dùng khi khách vừa nói muốn làm dịch vụ gì, để mời khách vào chỗ ngồi.",
    },
    {
      id: "nails-1-7",
      type: "english_to_vietnamese",
      badgeEmoji: "➡️",
      english: "Right this way, please.",
      vietnamese: "Mời chị đi lối này.",
      choices: [
        { id: "a", text: "Mời chị đi lối này." },
        { id: "b", text: "Chị đợi tôi một chút." },
        { id: "c", text: "Chị muốn màu nào?" },
      ],
      correctAnswer: "a",
      explanation:
        "'Right this way' là cách nói lịch sự để hướng dẫn khách đi theo mình, thường dùng khi dẫn khách vào bàn làm.",
      wrongAnswerExplanations:
        "'Chị đợi tôi một chút.' và 'Chị muốn màu nào?' đều không phải là ý dẫn đường của câu này.",
      usageTip: "Dùng khi dẫn khách đến bàn hoặc ghế làm dịch vụ.",
    },
    {
      id: "nails-1-8",
      type: "listening",
      badgeEmoji: "🎧",
      english: "Are you ready to start?",
      audioText: "Are you ready to start?",
      vietnamese: "Chị đã sẵn sàng bắt đầu chưa?",
      choices: [
        { id: "a", text: "Chị đã sẵn sàng bắt đầu chưa?" },
        { id: "b", text: "Chị có thích màu này không?" },
        { id: "c", text: "Chị muốn trả bằng thẻ hay tiền mặt?" },
      ],
      correctAnswer: "a",
      explanation:
        "'Are you ready to start?' là câu hỏi Yes/No dùng để hỏi khách đã sẵn sàng bắt đầu dịch vụ chưa.",
      wrongAnswerExplanations:
        "Hai đáp án còn lại nói về màu sơn và thanh toán — không phải nghĩa của câu vừa nghe.",
      usageTip: "Dùng ngay trước khi bắt đầu làm nails, để chắc chắn khách đã sẵn sàng.",
    },
    {
      id: "nails-1-9",
      type: "true_false",
      badgeEmoji: "✅",
      prompt: "Please have a seat.",
      promptVietnamese: "Câu này nghĩa là 'Mời chị ngồi.'",
      english: "Please have a seat.",
      vietnamese: "Mời chị ngồi.",
      choices: [
        { id: "a", text: "Đúng" },
        { id: "b", text: "Sai" },
      ],
      correctAnswer: "a",
      explanation:
        "Đúng vậy — 'Please have a seat.' chính xác nghĩa là 'Mời chị ngồi', một câu mời rất lịch sự và phổ biến trong tiệm nails.",
      wrongAnswerExplanations:
        "Không có đáp án nào khác đúng hơn ở đây, vì nhận định trong câu hoàn toàn chính xác.",
      usageTip: "Dùng khi mời khách ngồi xuống trước khi bắt đầu dịch vụ.",
    },
    {
      id: "nails-1-10",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "🎬",
      prompt: "Okay, I'm ready.",
      promptVietnamese: "Được rồi, tôi sẵn sàng rồi.",
      english: "Great, let's get started.",
      vietnamese: "Tuyệt vời, chúng ta bắt đầu nhé.",
      choices: [
        { id: "a", text: "Great, let's get started." },
        { id: "b", text: "That's too expensive." },
        { id: "c", text: "Come back tomorrow." },
      ],
      correctAnswer: "a",
      explanation: "Khi khách xác nhận đã sẵn sàng, mình đáp lại vui vẻ và bắt đầu công việc ngay.",
      wrongAnswerExplanations:
        "'That's too expensive.' và 'Come back tomorrow.' đều không phù hợp — không liên quan đến việc khách vừa nói đã sẵn sàng.",
      usageTip: "Dùng để bắt đầu dịch vụ ngay sau khi khách xác nhận đã sẵn sàng.",
    },
  ],
};
