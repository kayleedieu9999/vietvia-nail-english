import { Lesson } from "@/types/content";

export const dailyEnglishGroup02: Lesson[] = [
  {
    id: "de-6",
    slug: "de-06-lay-thuoc-theo-toa-1",
    topicId: "daily-english",
    title: "Lấy thuốc theo toa bác sĩ",
    description: "Học cách nói khi đến hiệu thuốc lấy thuốc theo đơn của bác sĩ.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-6-1",
        type: "situation_response",
        badgeEmoji: "💊",
        english: "I'm here to pick up a prescription.",
        vietnamese: "Tôi đến để lấy thuốc theo toa.",
        promptContext:
          "Bạn đến quầy hiệu thuốc và bác sĩ đã gửi đơn thuốc trước cho bạn. Bạn muốn nói mục đích đến đây.",
        choices: [
          { id: "a", text: "I'm here to pick up a prescription." },
          { id: "b", text: "I'm here to buy some candy." },
          { id: "c", text: "I'm here to return an item." },
        ],
        correctAnswer: "a",
        explanation:
          "'Pick up a prescription' nghĩa là 'lấy thuốc theo toa' — đây là câu mở đầu chuẩn khi đến hiệu thuốc lấy đơn thuốc.",
        wrongAnswerExplanations:
          "'I'm here to buy some candy.' và 'I'm here to return an item.' không liên quan đến việc lấy thuốc theo toa bác sĩ.",
        usageTip: "Dùng khi bạn đến quầy dược để lấy thuốc đã được bác sĩ kê đơn.",
      },
      {
        id: "de-6-2",
        type: "conversation_response",
        speaker: "Dược sĩ",
        badgeEmoji: "🙋",
        english: "Can I have your name and date of birth?",
        vietnamese: "Cho tôi xin tên và ngày sinh của chị được không?",
        prompt: "I'm here to pick up a prescription.",
        promptVietnamese: "Tôi đến để lấy thuốc theo toa.",
        choices: [
          { id: "a", text: "Can I have your name and date of birth?" },
          { id: "b", text: "Do you want a bag for this?" },
          { id: "c", text: "Is this your first time here?" },
        ],
        correctAnswer: "a",
        explanation:
          "Dược sĩ cần xác nhận danh tính trước khi giao thuốc, nên thường hỏi tên và ngày sinh của khách.",
        wrongAnswerExplanations:
          "'Do you want a bag for this?' và 'Is this your first time here?' đều chưa phù hợp trước khi xác nhận danh tính khách.",
        usageTip: "Dùng khi dược sĩ cần xác minh thông tin khách trước khi giao thuốc.",
      },
      {
        id: "de-6-3",
        type: "vietnamese_to_english",
        badgeEmoji: "📝",
        english: "My doctor sent the prescription here yesterday.",
        vietnamese: "Bác sĩ của tôi đã gửi đơn thuốc đến đây hôm qua.",
        promptContext:
          "Bạn muốn giải thích cho dược sĩ rằng bác sĩ đã gửi đơn thuốc điện tử đến hiệu thuốc này từ hôm qua.",
        choices: [
          { id: "a", text: "My doctor sent the prescription here yesterday." },
          { id: "b", text: "My doctor gave me a new appointment." },
          { id: "c", text: "My doctor checked my blood pressure." },
        ],
        correctAnswer: "a",
        explanation:
          "'Sent the prescription' nghĩa là 'đã gửi đơn thuốc' — đúng câu để giải thích đơn thuốc đã được gửi trước.",
        wrongAnswerExplanations:
          "'My doctor gave me a new appointment.' nói về lịch hẹn, không liên quan đến việc gửi đơn thuốc. 'My doctor checked my blood pressure.' nói về việc khám bệnh, không đúng ngữ cảnh.",
        usageTip: "Dùng khi giải thích với dược sĩ rằng đơn thuốc đã được gửi từ trước.",
      },
      {
        id: "de-6-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "Your prescription will be ready in fifteen minutes.",
        vietnamese: "Đơn thuốc của chị sẽ có sau mười lăm phút.",
        prompt: "Your prescription will be ___ in fifteen minutes.",
        choices: [
          { id: "a", text: "ready" },
          { id: "b", text: "expensive" },
          { id: "c", text: "empty" },
        ],
        correctAnswer: "a",
        explanation:
          "'Ready' nghĩa là 'sẵn sàng, có thể lấy được' — đúng từ để nói thuốc sẽ chuẩn bị xong sau một khoảng thời gian.",
        wrongAnswerExplanations:
          "'Expensive' (đắt) và 'empty' (trống rỗng) đều không hợp nghĩa trong câu nói về thời gian chuẩn bị thuốc.",
        usageTip: "Dùng để hiểu khi dược sĩ thông báo thời gian chờ lấy thuốc.",
      },
      {
        id: "de-6-5",
        type: "conversation_response",
        speaker: "Dược sĩ",
        badgeEmoji: "💳",
        english: "Your co-pay today is ten dollars.",
        vietnamese: "Tiền đồng chi trả của chị hôm nay là mười đô la.",
        prompt: "How much do I need to pay today?",
        promptVietnamese: "Hôm nay tôi cần trả bao nhiêu tiền vậy?",
        choices: [
          { id: "a", text: "Your co-pay today is ten dollars." },
          { id: "b", text: "Your appointment is tomorrow." },
          { id: "c", text: "Your prescription is out of stock." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi giá cần trả, dược sĩ nên trả lời rõ số tiền đồng chi trả (co-pay) sau khi bảo hiểm đã áp dụng.",
        wrongAnswerExplanations:
          "'Your appointment is tomorrow.' và 'Your prescription is out of stock.' đều không trả lời đúng câu hỏi về số tiền cần trả.",
        usageTip: "Dùng khi thông báo cho khách số tiền đồng chi trả cần thanh toán.",
      },
      {
        id: "de-6-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Take one pill in the morning and one at night.",
        vietnamese: "Uống một viên vào buổi sáng và một viên vào buổi tối.",
        audioText: "Take one pill in the morning and one at night.",
        choices: [
          { id: "a", text: "Uống một viên vào buổi sáng và một viên vào buổi tối." },
          { id: "b", text: "Uống hai viên cùng một lúc mỗi ngày." },
          { id: "c", text: "Uống thuốc mỗi ba ngày một lần." },
        ],
        correctAnswer: "a",
        explanation:
          "'One pill in the morning and one at night' nghĩa là 'một viên sáng, một viên tối' — hướng dẫn liều dùng thuốc hàng ngày.",
        wrongAnswerExplanations:
          "Câu gốc không nói uống hai viên cùng lúc, cũng không nói uống cách ba ngày.",
        usageTip: "Dùng để hiểu hướng dẫn liều dùng thuốc từ dược sĩ.",
      },
      {
        id: "de-6-7",
        type: "english_to_vietnamese",
        badgeEmoji: "⚠️",
        english: "This medicine may make you feel a little dizzy.",
        vietnamese: "Thuốc này có thể làm chị hơi chóng mặt một chút.",
        prompt: "This medicine may make you feel a little dizzy.",
        choices: [
          { id: "a", text: "Thuốc này có thể làm chị hơi chóng mặt một chút." },
          { id: "b", text: "Thuốc này sẽ làm chị khỏe hơn ngay lập tức." },
          { id: "c", text: "Thuốc này cần bảo quản trong tủ lạnh." },
        ],
        correctAnswer: "a",
        explanation:
          "'May make you feel dizzy' nghĩa là 'có thể làm chóng mặt' — đây là cảnh báo về tác dụng phụ có thể gặp.",
        wrongAnswerExplanations:
          "Câu gốc không nói thuốc làm khỏe ngay lập tức hay cần bảo quản lạnh, chỉ cảnh báo về tác dụng phụ chóng mặt.",
        usageTip: "Dùng khi dược sĩ cảnh báo về tác dụng phụ có thể xảy ra của thuốc.",
      },
      {
        id: "de-6-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Should I take this medicine with food?",
        vietnamese: "Tôi có nên uống thuốc này chung với đồ ăn không?",
        promptContext:
          "Bạn muốn hỏi dược sĩ xem loại thuốc mới lấy có cần uống kèm với thức ăn hay không.",
        choices: [
          { id: "a", text: "Should I take this medicine with food?" },
          { id: "b", text: "Should I take this medicine food with?" },
          { id: "c", text: "Should this medicine I take with food?" },
        ],
        correctAnswer: "a",
        explanation:
          "Trật tự đúng trong câu hỏi là 'take this medicine with food' — động từ, tân ngữ, rồi mới đến cụm giới từ.",
        wrongAnswerExplanations:
          "'Should I take this medicine food with?' đặt sai vị trí giới từ 'with'. 'Should this medicine I take with food?' đảo lộn chủ ngữ và tân ngữ, sai ngữ pháp.",
        usageTip: "Dùng khi hỏi dược sĩ về cách uống thuốc đúng, có cần ăn kèm hay không.",
      },
      {
        id: "de-6-9",
        type: "situation_response",
        badgeEmoji: "🔁",
        english: "Can I get a refill on this prescription?",
        vietnamese: "Tôi có thể lấy thêm thuốc theo toa cũ này không?",
        promptContext:
          "Bạn đã hết thuốc từ toa cũ và muốn hỏi hiệu thuốc xem có thể lấy thêm mà không cần gặp bác sĩ lại không.",
        choices: [
          { id: "a", text: "Can I get a refill on this prescription?" },
          { id: "b", text: "Can I get a new appointment for this?" },
          { id: "c", text: "Can I get a discount on this?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Refill' nghĩa là 'lấy thêm thuốc theo toa cũ' — đúng câu hỏi khi bạn đã hết thuốc và cần lấy thêm.",
        wrongAnswerExplanations:
          "'Can I get a new appointment for this?' là xin lịch hẹn mới, không liên quan đến việc lấy thêm thuốc. 'Can I get a discount on this?' hỏi về giảm giá, không đúng ý.",
        usageTip: "Dùng khi bạn cần lấy thêm thuốc từ đơn thuốc cũ đã dùng hết.",
      },
      {
        id: "de-6-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙏",
        english: "Thank you for explaining how to take it.",
        vietnamese: "Cảm ơn chị đã giải thích cách uống thuốc.",
        promptContext:
          "Sau khi dược sĩ giải thích rõ ràng cách uống thuốc, bạn muốn cảm ơn họ.",
        choices: [
          { id: "a", text: "Thank you for explaining how to take it." },
          { id: "b", text: "Thank you for the free sample." },
          { id: "c", text: "Thank you for waiting for me." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được giải thích rõ cách dùng thuốc, câu cảm ơn phù hợp nhất là nói đúng vào điều họ vừa giúp bạn.",
        wrongAnswerExplanations:
          "'Thank you for the free sample.' và 'Thank you for waiting for me.' không phù hợp với ngữ cảnh vừa được giải thích cách dùng thuốc.",
        usageTip: "Dùng để cảm ơn dược sĩ sau khi họ hướng dẫn cách uống thuốc.",
      },
    ],
  },
  {
    id: "de-7",
    slug: "de-07-hoi-lieu-dung-tac-dung-phu-1",
    topicId: "daily-english",
    title: "Hỏi về liều dùng và tác dụng phụ",
    description: "Luyện hỏi dược sĩ về cách dùng thuốc đúng và các tác dụng phụ có thể gặp.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-7-1",
        type: "situation_response",
        badgeEmoji: "❓",
        english: "How many times a day should I take this?",
        vietnamese: "Tôi nên uống thuốc này mấy lần một ngày?",
        promptContext:
          "Bạn vừa nhận thuốc nhưng chưa rõ nên uống bao nhiêu lần mỗi ngày, nên hỏi dược sĩ.",
        choices: [
          { id: "a", text: "How many times a day should I take this?" },
          { id: "b", text: "How much does this medicine cost?" },
          { id: "c", text: "How long will the store stay open?" },
        ],
        correctAnswer: "a",
        explanation:
          "'How many times a day' nghĩa là 'mấy lần một ngày' — đúng câu hỏi khi bạn cần biết tần suất uống thuốc.",
        wrongAnswerExplanations:
          "'How much does this medicine cost?' hỏi về giá, không phải liều dùng. 'How long will the store stay open?' hỏi về giờ mở cửa, lạc đề.",
        usageTip: "Dùng khi bạn chưa rõ tần suất uống thuốc trong ngày.",
      },
      {
        id: "de-7-2",
        type: "conversation_response",
        speaker: "Dược sĩ",
        badgeEmoji: "💊",
        english: "Take it twice a day, with meals.",
        vietnamese: "Uống hai lần một ngày, cùng với bữa ăn.",
        prompt: "How many times a day should I take this?",
        promptVietnamese: "Tôi nên uống thuốc này mấy lần một ngày?",
        choices: [
          { id: "a", text: "Take it twice a day, with meals." },
          { id: "b", text: "It's on the second shelf." },
          { id: "c", text: "It costs fifteen dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi liều dùng, dược sĩ nên trả lời rõ tần suất và cách uống, ví dụ như 'twice a day, with meals'.",
        wrongAnswerExplanations:
          "'It's on the second shelf.' và 'It costs fifteen dollars.' đều không trả lời đúng vào câu hỏi về liều dùng thuốc.",
        usageTip: "Dùng khi hướng dẫn khách về tần suất và cách uống thuốc.",
      },
      {
        id: "de-7-3",
        type: "vietnamese_to_english",
        badgeEmoji: "😵",
        english: "What are the side effects of this medicine?",
        vietnamese: "Thuốc này có tác dụng phụ gì không vậy?",
        promptContext:
          "Bạn muốn hỏi dược sĩ về những tác dụng phụ có thể xảy ra khi uống loại thuốc mới này.",
        choices: [
          { id: "a", text: "What are the side effects of this medicine?" },
          { id: "b", text: "What is the price of this medicine?" },
          { id: "c", text: "What is the name of this medicine?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Side effects' nghĩa là 'tác dụng phụ' — đúng câu hỏi khi bạn muốn biết những ảnh hưởng không mong muốn của thuốc.",
        wrongAnswerExplanations:
          "'What is the price of this medicine?' hỏi về giá, không liên quan. 'What is the name of this medicine?' hỏi về tên thuốc, không đúng ý câu gốc.",
        usageTip: "Dùng khi bạn muốn tìm hiểu về các tác dụng phụ có thể gặp khi dùng thuốc.",
      },
      {
        id: "de-7-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "You may feel a little tired after taking this.",
        vietnamese: "Chị có thể cảm thấy hơi mệt sau khi uống thuốc này.",
        prompt: "You may feel a little ___ after taking this.",
        choices: [
          { id: "a", text: "tired" },
          { id: "b", text: "expensive" },
          { id: "c", text: "closed" },
        ],
        correctAnswer: "a",
        explanation:
          "'Tired' nghĩa là 'mệt mỏi' — đúng từ mô tả cảm giác có thể xảy ra sau khi dùng thuốc.",
        wrongAnswerExplanations:
          "'Expensive' (đắt) và 'closed' (đóng cửa) không phải cảm giác cơ thể nên không hợp nghĩa trong câu này.",
        usageTip: "Dùng để hiểu khi dược sĩ mô tả cảm giác có thể gặp sau khi dùng thuốc.",
      },
      {
        id: "de-7-5",
        type: "conversation_response",
        speaker: "Dược sĩ",
        badgeEmoji: "🚫",
        english: "Avoid alcohol while taking this medicine.",
        vietnamese: "Tránh uống rượu bia trong khi dùng thuốc này.",
        prompt: "Is there anything I should avoid?",
        promptVietnamese: "Có gì tôi cần tránh khi uống thuốc này không?",
        choices: [
          { id: "a", text: "Avoid alcohol while taking this medicine." },
          { id: "b", text: "Avoid the pharmacy on weekends." },
          { id: "c", text: "Avoid paying with cash." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi điều cần tránh, dược sĩ nên nói rõ về những chất hoặc thực phẩm không nên dùng chung với thuốc.",
        wrongAnswerExplanations:
          "'Avoid the pharmacy on weekends.' và 'Avoid paying with cash.' đều không liên quan đến việc dùng thuốc an toàn.",
        usageTip: "Dùng khi cảnh báo khách về những điều cần tránh khi đang uống thuốc.",
      },
      {
        id: "de-7-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "If you feel worse, call your doctor right away.",
        vietnamese: "Nếu chị thấy nặng hơn, gọi bác sĩ ngay lập tức.",
        audioText: "If you feel worse, call your doctor right away.",
        choices: [
          { id: "a", text: "Nếu chị thấy nặng hơn, gọi bác sĩ ngay lập tức." },
          { id: "b", text: "Nếu chị thấy khỏe hơn, ngưng uống thuốc luôn." },
          { id: "c", text: "Nếu chị thấy đói, ăn nhẹ trước khi uống thuốc." },
        ],
        correctAnswer: "a",
        explanation:
          "'Feel worse' nghĩa là 'thấy nặng hơn' và 'call your doctor right away' là 'gọi bác sĩ ngay' — cảnh báo quan trọng khi tình trạng xấu đi.",
        wrongAnswerExplanations:
          "Câu gốc không nói ngưng thuốc khi khỏe hơn hay ăn nhẹ trước khi uống, chỉ cảnh báo khi tình trạng xấu đi.",
        usageTip: "Dùng để hiểu cảnh báo quan trọng khi tình trạng sức khỏe không cải thiện.",
      },
      {
        id: "de-7-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🍽️",
        english: "Take this medicine on an empty stomach.",
        vietnamese: "Uống thuốc này khi bụng đói.",
        prompt: "Take this medicine on an empty stomach.",
        choices: [
          { id: "a", text: "Uống thuốc này khi bụng đói." },
          { id: "b", text: "Uống thuốc này sau bữa ăn no." },
          { id: "c", text: "Uống thuốc này trước khi đi ngủ." },
        ],
        correctAnswer: "a",
        explanation:
          "'On an empty stomach' nghĩa là 'khi bụng đói' — hướng dẫn quan trọng về thời điểm uống thuốc để có hiệu quả tốt.",
        wrongAnswerExplanations:
          "Câu gốc không nói uống sau bữa ăn no hay trước khi ngủ, chỉ nói rõ là khi bụng đói.",
        usageTip: "Dùng để hiểu hướng dẫn về thời điểm uống thuốc liên quan đến bữa ăn.",
      },
      {
        id: "de-7-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Is it safe to take this with my other medicine?",
        vietnamese: "Uống thuốc này chung với thuốc khác có an toàn không?",
        promptContext:
          "Bạn đang uống một loại thuốc khác và muốn hỏi dược sĩ xem uống chung với thuốc mới có an toàn không.",
        choices: [
          { id: "a", text: "Is it safe to take this with my other medicine?" },
          { id: "b", text: "Is it safe to take this my other medicine with?" },
          { id: "c", text: "Is safe it to take this with my other medicine?" },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc đúng là 'is it safe to + động từ' và cụm giới từ 'with my other medicine' đặt ở cuối câu.",
        wrongAnswerExplanations:
          "'Is it safe to take this my other medicine with?' đặt sai vị trí 'with'. 'Is safe it to take...' đảo sai vị trí giữa 'it' và 'safe'.",
        usageTip: "Dùng khi hỏi dược sĩ về việc kết hợp nhiều loại thuốc cùng lúc.",
      },
      {
        id: "de-7-9",
        type: "situation_response",
        badgeEmoji: "😮‍💨",
        english: "I felt a bit dizzy after the first dose.",
        vietnamese: "Tôi thấy hơi chóng mặt sau liều đầu tiên.",
        promptContext:
          "Bạn quay lại hiệu thuốc để báo với dược sĩ rằng bạn cảm thấy chóng mặt sau khi uống liều thuốc đầu tiên.",
        choices: [
          { id: "a", text: "I felt a bit dizzy after the first dose." },
          { id: "b", text: "I felt great after the first dose." },
          { id: "c", text: "I forgot to take the first dose." },
        ],
        correctAnswer: "a",
        explanation:
          "'Felt a bit dizzy' nghĩa là 'thấy hơi chóng mặt' — đúng câu để báo cáo tác dụng phụ bạn đang gặp phải.",
        wrongAnswerExplanations:
          "'I felt great after the first dose.' ngược nghĩa hoàn toàn với việc gặp tác dụng phụ. 'I forgot to take the first dose.' nói về việc quên uống thuốc, không đúng ý.",
        usageTip: "Dùng khi bạn muốn báo cáo một tác dụng phụ cụ thể mà bạn gặp phải.",
      },
      {
        id: "de-7-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "Should I stop taking it if I feel dizzy?",
        vietnamese: "Tôi có nên ngưng uống thuốc nếu thấy chóng mặt không?",
        promptContext:
          "Bạn muốn hỏi dược sĩ xem nếu bị chóng mặt thì có nên ngưng thuốc ngay hay không.",
        choices: [
          { id: "a", text: "Should I stop taking it if I feel dizzy?" },
          { id: "b", text: "Should I take more of it if I feel dizzy?" },
          { id: "c", text: "Should I buy more of it if I feel dizzy?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Stop taking it' nghĩa là 'ngưng uống thuốc' — đúng câu hỏi khi bạn lo lắng về tác dụng phụ và muốn biết có nên ngưng không.",
        wrongAnswerExplanations:
          "'Should I take more of it...' và 'Should I buy more of it...' đều ngược với ý lo lắng cần ngưng thuốc khi có tác dụng phụ.",
        usageTip: "Dùng khi bạn gặp tác dụng phụ và muốn hỏi ý kiến dược sĩ về việc tiếp tục hay ngưng thuốc.",
      },
    ],
  },
  {
    id: "de-8",
    slug: "de-08-thuoc-khong-can-toa-1",
    topicId: "daily-english",
    title: "Xin tư vấn thuốc không cần toa",
    description: "Hỏi dược sĩ gợi ý thuốc không cần đơn cho các triệu chứng thông thường.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-8-1",
        type: "situation_response",
        badgeEmoji: "🤧",
        english: "Can you recommend something for a cold?",
        vietnamese: "Chị có thể gợi ý thuốc gì trị cảm không?",
        promptContext:
          "Bạn bị cảm nhẹ và muốn hỏi dược sĩ gợi ý một loại thuốc không cần đơn để mua.",
        choices: [
          { id: "a", text: "Can you recommend something for a cold?" },
          { id: "b", text: "Can you recommend a good restaurant?" },
          { id: "c", text: "Can you recommend a hair salon?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Recommend something for a cold' nghĩa là 'gợi ý thuốc trị cảm' — đúng câu hỏi khi bạn cần tư vấn thuốc cho một triệu chứng cụ thể.",
        wrongAnswerExplanations:
          "'Can you recommend a good restaurant?' và 'Can you recommend a hair salon?' hoàn toàn không liên quan đến việc mua thuốc.",
        usageTip: "Dùng khi bạn bị bệnh nhẹ và muốn dược sĩ gợi ý thuốc phù hợp.",
      },
      {
        id: "de-8-2",
        type: "conversation_response",
        speaker: "Dược sĩ",
        badgeEmoji: "💊",
        english: "This one works well for cold symptoms.",
        vietnamese: "Loại này trị triệu chứng cảm khá hiệu quả đó.",
        prompt: "Can you recommend something for a cold?",
        promptVietnamese: "Chị có thể gợi ý thuốc gì trị cảm không?",
        choices: [
          { id: "a", text: "This one works well for cold symptoms." },
          { id: "b", text: "This one is on sale this week." },
          { id: "c", text: "This one needs a doctor's note." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi gợi ý thuốc, dược sĩ nên giới thiệu một loại thuốc phù hợp và nói nó hiệu quả với triệu chứng gì.",
        wrongAnswerExplanations:
          "'This one is on sale this week.' nói về giá, không liên quan đến hiệu quả điều trị. 'This one needs a doctor's note.' không hợp lý vì thuốc không cần đơn thì không cần giấy bác sĩ.",
        usageTip: "Dùng khi giới thiệu một loại thuốc không cần toa cho khách.",
      },
      {
        id: "de-8-3",
        type: "vietnamese_to_english",
        badgeEmoji: "🤒",
        english: "I have a headache. What should I take?",
        vietnamese: "Tôi bị nhức đầu. Tôi nên uống thuốc gì?",
        promptContext:
          "Bạn bị nhức đầu và muốn hỏi dược sĩ nên uống loại thuốc nào để giảm đau.",
        choices: [
          { id: "a", text: "I have a headache. What should I take?" },
          { id: "b", text: "I have an appointment. What time is it?" },
          { id: "c", text: "I have a coupon. Where do I use it?" },
        ],
        correctAnswer: "a",
        explanation:
          "'I have a headache' nghĩa là 'tôi bị nhức đầu' — đúng câu để mô tả triệu chứng và hỏi thuốc phù hợp.",
        wrongAnswerExplanations:
          "'I have an appointment...' và 'I have a coupon...' không liên quan đến việc mô tả triệu chứng bệnh.",
        usageTip: "Dùng khi bạn muốn mô tả triệu chứng đau đầu và xin tư vấn thuốc.",
      },
      {
        id: "de-8-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "This medicine is good for a sore throat.",
        vietnamese: "Thuốc này tốt cho chứng đau họng.",
        prompt: "This medicine is good for a sore ___.",
        choices: [
          { id: "a", text: "throat" },
          { id: "b", text: "price" },
          { id: "c", text: "receipt" },
        ],
        correctAnswer: "a",
        explanation:
          "'Sore throat' nghĩa là 'đau họng' — đây là cụm từ quen thuộc để mô tả triệu chứng bệnh thông thường.",
        wrongAnswerExplanations:
          "'Price' và 'receipt' đều là danh từ không liên quan đến triệu chứng bệnh, không phù hợp trong câu này.",
        usageTip: "Dùng để nhớ cụm từ 'sore throat' khi mô tả triệu chứng đau họng.",
      },
      {
        id: "de-8-5",
        type: "conversation_response",
        speaker: "Dược sĩ",
        badgeEmoji: "🩺",
        english: "How long have you had these symptoms?",
        vietnamese: "Chị bị triệu chứng này bao lâu rồi?",
        prompt: "I have a cough and a sore throat.",
        promptVietnamese: "Tôi bị ho và đau họng.",
        choices: [
          { id: "a", text: "How long have you had these symptoms?" },
          { id: "b", text: "What time do you close today?" },
          { id: "c", text: "Do you have insurance?" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách mô tả triệu chứng, dược sĩ nên hỏi thêm thời gian bị bệnh để tư vấn thuốc phù hợp hơn.",
        wrongAnswerExplanations:
          "'What time do you close today?' và 'Do you have insurance?' đều không liên quan đến việc tư vấn triệu chứng bệnh.",
        usageTip: "Dùng khi cần hỏi thêm thông tin về thời gian bị bệnh trước khi tư vấn thuốc.",
      },
      {
        id: "de-8-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "This should help with your cough within a day.",
        vietnamese: "Cái này sẽ giúp giảm ho trong vòng một ngày.",
        audioText: "This should help with your cough within a day.",
        choices: [
          { id: "a", text: "Cái này sẽ giúp giảm ho trong vòng một ngày." },
          { id: "b", text: "Cái này sẽ giúp giảm giá trong vòng một tuần." },
          { id: "c", text: "Cái này sẽ giúp giảm sốt trong vòng một giờ." },
        ],
        correctAnswer: "a",
        explanation:
          "'Help with your cough' nghĩa là 'giúp giảm ho' — câu này nói về thời gian thuốc có tác dụng với triệu chứng ho.",
        wrongAnswerExplanations:
          "Câu gốc không nói về giảm giá hay giảm sốt, chỉ nói về việc giảm triệu chứng ho.",
        usageTip: "Dùng để hiểu khi dược sĩ giải thích hiệu quả và thời gian tác dụng của thuốc.",
      },
      {
        id: "de-8-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🍯",
        english: "You can also try warm tea with honey.",
        vietnamese: "Chị cũng có thể thử trà ấm với mật ong.",
        prompt: "You can also try warm tea with honey.",
        choices: [
          { id: "a", text: "Chị cũng có thể thử trà ấm với mật ong." },
          { id: "b", text: "Chị cũng có thể uống nước đá lạnh." },
          { id: "c", text: "Chị cũng có thể ăn đồ cay nóng." },
        ],
        correctAnswer: "a",
        explanation:
          "'Warm tea with honey' nghĩa là 'trà ấm với mật ong' — một gợi ý tự nhiên hay đi kèm với thuốc trị ho, đau họng.",
        wrongAnswerExplanations:
          "Câu gốc không nói về nước đá lạnh hay đồ cay nóng, chỉ gợi ý trà ấm với mật ong.",
        usageTip: "Dùng khi dược sĩ gợi ý thêm biện pháp tự nhiên hỗ trợ việc uống thuốc.",
      },
      {
        id: "de-8-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Which one is better for a stuffy nose?",
        vietnamese: "Loại nào tốt hơn cho chứng nghẹt mũi?",
        promptContext:
          "Bạn đang phân vân giữa hai loại thuốc và muốn hỏi dược sĩ loại nào tốt hơn cho chứng nghẹt mũi.",
        choices: [
          { id: "a", text: "Which one is better for a stuffy nose?" },
          { id: "b", text: "Which one is better a stuffy nose for?" },
          { id: "c", text: "Which is one better for a stuffy nose?" },
        ],
        correctAnswer: "a",
        explanation:
          "Trật tự đúng là 'which one is better for...' — giới từ 'for' đứng ngay trước cụm danh từ mô tả triệu chứng.",
        wrongAnswerExplanations:
          "'Which one is better a stuffy nose for?' đặt sai vị trí 'for'. 'Which is one better for...' đảo sai vị trí giữa 'is' và 'one'.",
        usageTip: "Dùng khi so sánh hai loại thuốc để chọn loại phù hợp với triệu chứng.",
      },
      {
        id: "de-8-9",
        type: "situation_response",
        badgeEmoji: "👶",
        english: "Is this medicine safe for children?",
        vietnamese: "Thuốc này có an toàn cho trẻ em không vậy?",
        promptContext:
          "Bạn muốn mua thuốc cho con nhỏ và cần hỏi dược sĩ xem loại thuốc này có phù hợp cho trẻ em không.",
        choices: [
          { id: "a", text: "Is this medicine safe for children?" },
          { id: "b", text: "Is this medicine safe for cars?" },
          { id: "c", text: "Is this medicine safe for plants?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Safe for children' nghĩa là 'an toàn cho trẻ em' — đúng câu hỏi khi bạn cần kiểm tra thuốc có phù hợp cho trẻ nhỏ không.",
        wrongAnswerExplanations:
          "'Safe for cars' và 'safe for plants' hoàn toàn không liên quan đến việc dùng thuốc cho người.",
        usageTip: "Dùng khi mua thuốc cho trẻ em và cần xác nhận độ an toàn.",
      },
      {
        id: "de-8-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙏",
        english: "I'll try this one, thank you for your advice.",
        vietnamese: "Tôi sẽ thử loại này, cảm ơn lời khuyên của chị.",
        promptContext:
          "Sau khi nghe dược sĩ tư vấn, bạn quyết định mua loại thuốc được gợi ý và muốn cảm ơn.",
        choices: [
          { id: "a", text: "I'll try this one, thank you for your advice." },
          { id: "b", text: "I don't trust this medicine at all." },
          { id: "c", text: "I need to think about it more." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi đã quyết định mua theo lời tư vấn, câu trả lời tự nhiên là xác nhận sẽ thử và cảm ơn dược sĩ.",
        wrongAnswerExplanations:
          "'I don't trust this medicine at all.' và 'I need to think about it more.' đều không phù hợp khi bạn đã quyết định mua.",
        usageTip: "Dùng khi bạn quyết định mua thuốc theo lời tư vấn của dược sĩ.",
      },
    ],
  },
  {
    id: "de-9",
    slug: "de-09-bao-hiem-dong-chi-tra-1",
    topicId: "daily-english",
    title: "Hỏi về bảo hiểm và tiền đồng chi trả",
    description: "Luyện câu hỏi liên quan đến bảo hiểm y tế khi mua thuốc.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-9-1",
        type: "situation_response",
        badgeEmoji: "🏥",
        english: "Does my insurance cover this medicine?",
        vietnamese: "Bảo hiểm của tôi có chi trả cho thuốc này không?",
        promptContext:
          "Bạn muốn biết trước khi lấy thuốc xem bảo hiểm y tế của mình có bao gồm chi phí thuốc này không.",
        choices: [
          { id: "a", text: "Does my insurance cover this medicine?" },
          { id: "b", text: "Does my insurance cover this haircut?" },
          { id: "c", text: "Does my insurance cover this parking?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Does my insurance cover' nghĩa là 'bảo hiểm có chi trả không' — đúng câu hỏi khi kiểm tra quyền lợi bảo hiểm cho thuốc.",
        wrongAnswerExplanations:
          "'Does my insurance cover this haircut?' và 'Does my insurance cover this parking?' không liên quan đến việc mua thuốc.",
        usageTip: "Dùng khi bạn muốn kiểm tra bảo hiểm y tế có chi trả cho một loại thuốc không.",
      },
      {
        id: "de-9-2",
        type: "conversation_response",
        speaker: "Dược sĩ",
        badgeEmoji: "📋",
        english: "Let me check your insurance information.",
        vietnamese: "Để tôi kiểm tra thông tin bảo hiểm của chị.",
        prompt: "Does my insurance cover this medicine?",
        promptVietnamese: "Bảo hiểm của tôi có chi trả cho thuốc này không?",
        choices: [
          { id: "a", text: "Let me check your insurance information." },
          { id: "b", text: "This medicine is very popular." },
          { id: "c", text: "The pharmacy closes at nine." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về bảo hiểm, dược sĩ nên kiểm tra thông tin trước khi trả lời chính xác.",
        wrongAnswerExplanations:
          "'This medicine is very popular.' và 'The pharmacy closes at nine.' đều không liên quan đến việc kiểm tra bảo hiểm.",
        usageTip: "Dùng khi cần kiểm tra thông tin bảo hiểm trước khi trả lời khách.",
      },
      {
        id: "de-9-3",
        type: "vietnamese_to_english",
        badgeEmoji: "💵",
        english: "How much will I owe without insurance?",
        vietnamese: "Nếu không có bảo hiểm thì tôi phải trả bao nhiêu?",
        promptContext:
          "Bạn muốn biết chi phí thuốc nếu không dùng bảo hiểm để so sánh với giá có bảo hiểm.",
        choices: [
          { id: "a", text: "How much will I owe without insurance?" },
          { id: "b", text: "How much will I owe with a coupon?" },
          { id: "c", text: "How much will I owe next month?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Owe without insurance' nghĩa là 'phải trả nếu không có bảo hiểm' — đúng câu hỏi để so sánh chi phí giữa có và không có bảo hiểm.",
        wrongAnswerExplanations:
          "'How much will I owe with a coupon?' hỏi về phiếu giảm giá, không phải bảo hiểm. 'How much will I owe next month?' hỏi về thời gian, không đúng ý.",
        usageTip: "Dùng khi bạn muốn biết chi phí thuốc nếu không sử dụng bảo hiểm y tế.",
      },
      {
        id: "de-9-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "Your co-pay depends on your insurance plan.",
        vietnamese: "Tiền đồng chi trả của chị tùy vào gói bảo hiểm.",
        prompt: "Your co-pay depends on your insurance ___.",
        choices: [
          { id: "a", text: "plan" },
          { id: "b", text: "store" },
          { id: "c", text: "brand" },
        ],
        correctAnswer: "a",
        explanation:
          "'Insurance plan' nghĩa là 'gói bảo hiểm' — đúng từ để nói về việc số tiền đồng chi trả phụ thuộc vào gói bảo hiểm nào.",
        wrongAnswerExplanations:
          "'Store' (cửa hàng) và 'brand' (nhãn hiệu) không liên quan đến các gói bảo hiểm y tế.",
        usageTip: "Dùng để hiểu khi dược sĩ giải thích tiền đồng chi trả phụ thuộc vào gói bảo hiểm.",
      },
      {
        id: "de-9-5",
        type: "conversation_response",
        speaker: "Dược sĩ",
        badgeEmoji: "🙁",
        english: "Unfortunately, your insurance doesn't cover this one.",
        vietnamese: "Rất tiếc, bảo hiểm của chị không chi trả cho loại này.",
        prompt: "Does my insurance cover this medicine?",
        promptVietnamese: "Bảo hiểm của tôi có chi trả cho thuốc này không?",
        choices: [
          { id: "a", text: "Unfortunately, your insurance doesn't cover this one." },
          { id: "b", text: "Yes, this is the cheapest option here." },
          { id: "c", text: "This medicine is out of stock." },
        ],
        correctAnswer: "a",
        explanation:
          "Nếu bảo hiểm không chi trả, dược sĩ nên báo rõ để khách biết và cân nhắc lựa chọn khác.",
        wrongAnswerExplanations:
          "'Yes, this is the cheapest option here.' không trả lời đúng vào câu hỏi về bảo hiểm. 'This medicine is out of stock.' nói về việc hết hàng, không liên quan.",
        usageTip: "Dùng khi cần báo cho khách biết bảo hiểm không chi trả cho một loại thuốc.",
      },
      {
        id: "de-9-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "There is a generic version that costs less.",
        vietnamese: "Có một loại thuốc gốc rẻ hơn đó.",
        audioText: "There is a generic version that costs less.",
        choices: [
          { id: "a", text: "Có một loại thuốc gốc rẻ hơn đó." },
          { id: "b", text: "Có một loại thuốc mới đắt hơn đó." },
          { id: "c", text: "Có một cửa hàng khác gần đây." },
        ],
        correctAnswer: "a",
        explanation:
          "'Generic version that costs less' nghĩa là 'thuốc gốc rẻ hơn' — gợi ý phổ biến khi thuốc nhãn hiệu không được bảo hiểm chi trả.",
        wrongAnswerExplanations:
          "Câu gốc không nói về thuốc mới đắt hơn hay cửa hàng khác, chỉ nói về lựa chọn thuốc gốc rẻ hơn.",
        usageTip: "Dùng để hiểu khi dược sĩ gợi ý một lựa chọn thuốc rẻ hơn.",
      },
      {
        id: "de-9-7",
        type: "english_to_vietnamese",
        badgeEmoji: "📄",
        english: "You can call your insurance company for more details.",
        vietnamese: "Chị có thể gọi công ty bảo hiểm để biết thêm chi tiết.",
        prompt: "You can call your insurance company for more details.",
        choices: [
          { id: "a", text: "Chị có thể gọi công ty bảo hiểm để biết thêm chi tiết." },
          { id: "b", text: "Chị có thể gọi bác sĩ để đặt lịch hẹn." },
          { id: "c", text: "Chị có thể gọi siêu thị để hỏi giá." },
        ],
        correctAnswer: "a",
        explanation:
          "'Call your insurance company' nghĩa là 'gọi công ty bảo hiểm' — gợi ý khi dược sĩ không thể trả lời hết chi tiết về bảo hiểm.",
        wrongAnswerExplanations:
          "Câu gốc không nói gọi bác sĩ hay siêu thị, chỉ gợi ý gọi công ty bảo hiểm để biết thêm.",
        usageTip: "Dùng khi dược sĩ hướng dẫn khách liên hệ công ty bảo hiểm để rõ thêm chi tiết.",
      },
      {
        id: "de-9-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Can I use a different insurance card?",
        vietnamese: "Tôi có thể dùng thẻ bảo hiểm khác không?",
        promptContext:
          "Bạn có hai thẻ bảo hiểm và muốn hỏi dược sĩ xem có thể dùng thẻ khác cho lần lấy thuốc này không.",
        choices: [
          { id: "a", text: "Can I use a different insurance card?" },
          { id: "b", text: "Can I use a insurance different card?" },
          { id: "c", text: "Can I a different insurance card use?" },
        ],
        correctAnswer: "a",
        explanation:
          "Trật tự tính từ đúng là 'a different insurance card' — tính từ 'different' đứng trước danh từ ghép 'insurance card'.",
        wrongAnswerExplanations:
          "'Can I use a insurance different card?' đặt sai vị trí tính từ 'different'. 'Can I a different insurance card use?' đặt động từ 'use' sai vị trí, làm câu vô nghĩa.",
        usageTip: "Dùng khi bạn muốn hỏi về việc đổi sang thẻ bảo hiểm khác khi lấy thuốc.",
      },
      {
        id: "de-9-9",
        type: "situation_response",
        badgeEmoji: "🔄",
        english: "My insurance changed. Can you update it?",
        vietnamese: "Bảo hiểm của tôi đã đổi rồi. Chị cập nhật giúp được không?",
        promptContext:
          "Bạn vừa đổi công ty bảo hiểm mới và muốn thông báo để hiệu thuốc cập nhật lại thông tin.",
        choices: [
          { id: "a", text: "My insurance changed. Can you update it?" },
          { id: "b", text: "My address changed. Can you update it?" },
          { id: "c", text: "My phone number changed. Can you update it?" },
        ],
        correctAnswer: "a",
        explanation:
          "Vì bạn vừa đổi bảo hiểm mới, câu đúng cần nói rõ 'my insurance changed' để nhân viên cập nhật đúng thông tin.",
        wrongAnswerExplanations:
          "'My address changed...' và 'My phone number changed...' đều nói về thông tin khác, không đúng với việc cần cập nhật bảo hiểm.",
        usageTip: "Dùng khi bạn cần thông báo thay đổi bảo hiểm y tế cho hiệu thuốc.",
      },
      {
        id: "de-9-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "Is there a cheaper option without insurance?",
        vietnamese: "Có lựa chọn nào rẻ hơn mà không cần bảo hiểm không?",
        promptContext:
          "Bảo hiểm không chi trả cho thuốc và bạn muốn hỏi xem có lựa chọn nào rẻ hơn không.",
        choices: [
          { id: "a", text: "Is there a cheaper option without insurance?" },
          { id: "b", text: "Is there a bigger size without insurance?" },
          { id: "c", text: "Is there a faster delivery without insurance?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Cheaper option without insurance' nghĩa là 'lựa chọn rẻ hơn mà không cần bảo hiểm' — đúng câu hỏi khi tìm cách giảm chi phí thuốc.",
        wrongAnswerExplanations:
          "'Is there a bigger size...' hỏi về kích cỡ, không phải giá cả. 'Is there a faster delivery...' hỏi về giao hàng, không liên quan đến bảo hiểm.",
        usageTip: "Dùng khi bảo hiểm không chi trả và bạn muốn tìm lựa chọn thuốc rẻ hơn.",
      },
    ],
  },
  {
    id: "de-10",
    slug: "de-10-thuoc-can-toa-hay-khong-1",
    topicId: "daily-english",
    title: "Hỏi thuốc có cần toa bác sĩ không",
    description: "Luyện hỏi xem một loại thuốc có cần đơn của bác sĩ hay có thể mua tự do.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-10-1",
        type: "situation_response",
        badgeEmoji: "❓",
        english: "Do I need a prescription for this?",
        vietnamese: "Tôi có cần toa bác sĩ để mua cái này không?",
        promptContext:
          "Bạn cầm một hộp thuốc trên kệ và không chắc nó có cần đơn bác sĩ hay có thể mua tự do.",
        choices: [
          { id: "a", text: "Do I need a prescription for this?" },
          { id: "b", text: "Do I need a cart for this?" },
          { id: "c", text: "Do I need a receipt for this?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Need a prescription' nghĩa là 'cần toa bác sĩ' — đúng câu hỏi khi bạn không chắc thuốc có cần đơn hay không.",
        wrongAnswerExplanations:
          "'Do I need a cart for this?' và 'Do I need a receipt for this?' không liên quan đến việc kiểm tra thuốc có cần đơn không.",
        usageTip: "Dùng khi bạn không chắc một loại thuốc có cần đơn bác sĩ hay không.",
      },
      {
        id: "de-10-2",
        type: "conversation_response",
        speaker: "Dược sĩ",
        badgeEmoji: "✅",
        english: "No, this one is over-the-counter.",
        vietnamese: "Không cần, loại này bán tự do không cần toa.",
        prompt: "Do I need a prescription for this?",
        promptVietnamese: "Tôi có cần toa bác sĩ để mua cái này không?",
        choices: [
          { id: "a", text: "No, this one is over-the-counter." },
          { id: "b", text: "Yes, it's on the top shelf." },
          { id: "c", text: "No, it's out of stock today." },
        ],
        correctAnswer: "a",
        explanation:
          "'Over-the-counter' nghĩa là 'bán tự do không cần toa' — đúng câu trả lời khi thuốc không cần đơn bác sĩ.",
        wrongAnswerExplanations:
          "'Yes, it's on the top shelf.' trả lời về vị trí, không trả lời đúng câu hỏi về toa thuốc. 'No, it's out of stock today.' nói về việc hết hàng, không liên quan.",
        usageTip: "Dùng khi xác nhận với khách rằng thuốc có thể mua tự do không cần toa.",
      },
      {
        id: "de-10-3",
        type: "vietnamese_to_english",
        badgeEmoji: "📋",
        english: "This one requires a doctor's prescription.",
        vietnamese: "Loại này cần có toa của bác sĩ.",
        promptContext:
          "Dược sĩ muốn giải thích cho khách rằng loại thuốc này bắt buộc phải có đơn của bác sĩ mới mua được.",
        choices: [
          { id: "a", text: "This one requires a doctor's prescription." },
          { id: "b", text: "This one requires a store card." },
          { id: "c", text: "This one requires a longer wait." },
        ],
        correctAnswer: "a",
        explanation:
          "'Requires a doctor's prescription' nghĩa là 'cần có toa bác sĩ' — đúng câu để giải thích loại thuốc cần đơn mới được bán.",
        wrongAnswerExplanations:
          "'This one requires a store card.' và 'This one requires a longer wait.' đều không liên quan đến quy định về đơn thuốc.",
        usageTip: "Dùng khi giải thích cho khách rằng một loại thuốc cần đơn bác sĩ mới được bán.",
      },
      {
        id: "de-10-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "You can buy this without a prescription.",
        vietnamese: "Chị có thể mua cái này mà không cần toa.",
        prompt: "You can buy this without a ___.",
        choices: [
          { id: "a", text: "prescription" },
          { id: "b", text: "cart" },
          { id: "c", text: "bag" },
        ],
        correctAnswer: "a",
        explanation:
          "'Without a prescription' nghĩa là 'không cần toa' — đúng cụm từ để nói về thuốc bán tự do.",
        wrongAnswerExplanations:
          "'Cart' (xe đẩy) và 'bag' (túi) không liên quan đến quy định mua thuốc cần toa hay không.",
        usageTip: "Dùng để nhận biết mẫu câu nói về thuốc không cần đơn bác sĩ.",
      },
      {
        id: "de-10-5",
        type: "conversation_response",
        speaker: "Dược sĩ",
        badgeEmoji: "📞",
        english: "You'll need to see a doctor first.",
        vietnamese: "Chị cần gặp bác sĩ trước đã.",
        prompt: "Can I buy this stronger medicine today?",
        promptVietnamese: "Hôm nay tôi có thể mua loại thuốc mạnh hơn này không?",
        choices: [
          { id: "a", text: "You'll need to see a doctor first." },
          { id: "b", text: "Sure, that will be five dollars." },
          { id: "c", text: "Sure, it's in aisle two." },
        ],
        correctAnswer: "a",
        explanation:
          "Với thuốc mạnh cần đơn, dược sĩ nên giải thích rằng khách cần gặp bác sĩ trước khi có thể mua.",
        wrongAnswerExplanations:
          "'Sure, that will be five dollars.' và 'Sure, it's in aisle two.' đều ngụ ý bán được ngay, không đúng với thuốc cần đơn.",
        usageTip: "Dùng khi từ chối bán thuốc cần đơn cho khách chưa có toa bác sĩ.",
      },
      {
        id: "de-10-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Ask your doctor if you need something stronger.",
        vietnamese: "Hỏi bác sĩ nếu chị cần thuốc mạnh hơn.",
        audioText: "Ask your doctor if you need something stronger.",
        choices: [
          { id: "a", text: "Hỏi bác sĩ nếu chị cần thuốc mạnh hơn." },
          { id: "b", text: "Hỏi thu ngân nếu chị cần giảm giá." },
          { id: "c", text: "Hỏi nhân viên nếu chị cần túi lớn hơn." },
        ],
        correctAnswer: "a",
        explanation:
          "'Ask your doctor if you need something stronger' nghĩa là 'hỏi bác sĩ nếu cần thuốc mạnh hơn' — lời khuyên khi thuốc không kê đơn không đủ hiệu quả.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc hỏi thu ngân hay nhân viên, chỉ nói về việc hỏi bác sĩ.",
        usageTip: "Dùng để hiểu lời khuyên khi thuốc không cần đơn không đủ mạnh cho triệu chứng.",
      },
      {
        id: "de-10-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🔒",
        english: "This medicine is kept behind the counter.",
        vietnamese: "Thuốc này được giữ ở phía sau quầy.",
        prompt: "This medicine is kept behind the counter.",
        choices: [
          { id: "a", text: "Thuốc này được giữ ở phía sau quầy." },
          { id: "b", text: "Thuốc này được bán giảm giá." },
          { id: "c", text: "Thuốc này đã hết hàng." },
        ],
        correctAnswer: "a",
        explanation:
          "'Kept behind the counter' nghĩa là 'được giữ phía sau quầy' — một số thuốc cần dược sĩ lấy trực tiếp thay vì để trên kệ.",
        wrongAnswerExplanations:
          "Câu gốc không nói về giảm giá hay hết hàng, chỉ nói về vị trí bảo quản đặc biệt của thuốc.",
        usageTip: "Dùng để hiểu khi một số thuốc đặc biệt được giữ sau quầy thay vì bày trên kệ.",
      },
      {
        id: "de-10-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Can you tell me if this needs a prescription?",
        vietnamese: "Chị chỉ giúp tôi xem cái này có cần toa không?",
        promptContext:
          "Bạn cầm một hộp thuốc và muốn hỏi lịch sự xem nó có cần đơn bác sĩ hay không.",
        choices: [
          { id: "a", text: "Can you tell me if this needs a prescription?" },
          { id: "b", text: "Can you tell me if needs this a prescription?" },
          { id: "c", text: "Can you tell me this needs if a prescription?" },
        ],
        correctAnswer: "a",
        explanation:
          "Trong mệnh đề hỏi gián tiếp với 'if', trật tự từ giữ nguyên như câu khẳng định: 'this needs a prescription'.",
        wrongAnswerExplanations:
          "'Can you tell me if needs this a prescription?' đảo sai trật tự chủ ngữ và động từ. 'Can you tell me this needs if a prescription?' đặt sai vị trí của 'if'.",
        usageTip: "Dùng khi hỏi lịch sự về việc một loại thuốc có cần đơn bác sĩ hay không.",
      },
      {
        id: "de-10-9",
        type: "situation_response",
        badgeEmoji: "🙆",
        english: "Great, I'll take this one then.",
        vietnamese: "Tốt quá, vậy tôi lấy loại này luôn.",
        promptContext:
          "Sau khi biết loại thuốc không cần đơn bác sĩ, bạn quyết định mua ngay.",
        choices: [
          { id: "a", text: "Great, I'll take this one then." },
          { id: "b", text: "I don't want this anymore." },
          { id: "c", text: "I need to see a doctor first." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi biết thuốc có thể mua tự do, câu trả lời tự nhiên là quyết định mua ngay món đó.",
        wrongAnswerExplanations:
          "'I don't want this anymore.' và 'I need to see a doctor first.' đều không hợp lý khi bạn vừa biết có thể mua tự do và muốn mua.",
        usageTip: "Dùng khi bạn quyết định mua ngay sau khi biết thuốc không cần toa.",
      },
      {
        id: "de-10-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "Is there an over-the-counter option for this?",
        vietnamese: "Có loại nào bán tự do cho việc này không?",
        promptContext:
          "Bạn vừa biết một loại thuốc cần đơn và muốn hỏi xem có phiên bản khác bán tự do không.",
        choices: [
          { id: "a", text: "Is there an over-the-counter option for this?" },
          { id: "b", text: "Is there a bigger bottle for this?" },
          { id: "c", text: "Is there a faster way to pay for this?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Over-the-counter option' nghĩa là 'lựa chọn bán tự do' — đúng câu hỏi khi tìm phiên bản không cần đơn của một loại thuốc.",
        wrongAnswerExplanations:
          "'Is there a bigger bottle for this?' hỏi về kích cỡ chai, không liên quan. 'Is there a faster way to pay for this?' hỏi về thanh toán, không đúng ý.",
        usageTip: "Dùng khi bạn muốn tìm phiên bản thuốc không cần đơn thay cho loại cần toa.",
      },
    ],
  },
];
