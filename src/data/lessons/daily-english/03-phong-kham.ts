import { Lesson } from "@/types/content";

export const dailyEnglishGroup03: Lesson[] = [
  {
    id: "de-11",
    slug: "de-11-goi-dat-lich-hen-1",
    topicId: "daily-english",
    title: "Gọi điện đặt lịch khám bệnh",
    description: "Học cách gọi điện thoại đến phòng khám để đặt lịch hẹn.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-11-1",
        type: "situation_response",
        badgeEmoji: "📞",
        english: "I'd like to make an appointment, please.",
        vietnamese: "Tôi muốn đặt lịch hẹn khám, được không ạ.",
        promptContext:
          "Bạn gọi điện đến phòng khám vì cảm thấy không khỏe và muốn đặt lịch gặp bác sĩ.",
        choices: [
          { id: "a", text: "I'd like to make an appointment, please." },
          { id: "b", text: "I'd like to cancel my order, please." },
          { id: "c", text: "I'd like to return this item, please." },
        ],
        correctAnswer: "a",
        explanation:
          "'Make an appointment' nghĩa là 'đặt lịch hẹn' — đây là câu mở đầu chuẩn khi gọi điện đặt lịch khám bệnh.",
        wrongAnswerExplanations:
          "'I'd like to cancel my order, please.' và 'I'd like to return this item, please.' không liên quan đến việc đặt lịch khám bệnh.",
        usageTip: "Dùng khi bạn gọi điện đến phòng khám để đặt lịch hẹn.",
      },
      {
        id: "de-11-2",
        type: "conversation_response",
        speaker: "Lễ tân",
        badgeEmoji: "📅",
        english: "What day works best for you?",
        vietnamese: "Ngày nào tiện cho chị nhất vậy?",
        prompt: "I'd like to make an appointment, please.",
        promptVietnamese: "Tôi muốn đặt lịch hẹn khám, được không ạ.",
        choices: [
          { id: "a", text: "What day works best for you?" },
          { id: "b", text: "Do you have insurance?" },
          { id: "c", text: "What is your address?" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách muốn đặt lịch, lễ tân thường hỏi ngày nào thuận tiện trước để sắp xếp giờ hẹn.",
        wrongAnswerExplanations:
          "'Do you have insurance?' và 'What is your address?' là những câu hỏi có thể hỏi sau, không phải câu đầu tiên khi đặt lịch.",
        usageTip: "Dùng khi lễ tân bắt đầu sắp xếp lịch hẹn cho khách.",
      },
      {
        id: "de-11-3",
        type: "vietnamese_to_english",
        badgeEmoji: "🗓️",
        english: "Do you have any openings this week?",
        vietnamese: "Tuần này có còn giờ trống không vậy?",
        promptContext:
          "Bạn muốn biết phòng khám có còn lịch trống trong tuần này để đặt hẹn sớm.",
        choices: [
          { id: "a", text: "Do you have any openings this week?" },
          { id: "b", text: "Do you have any discounts this week?" },
          { id: "c", text: "Do you have any parking this week?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Any openings' nghĩa là 'giờ trống' — đúng câu hỏi khi muốn biết lịch hẹn còn trống hay không.",
        wrongAnswerExplanations:
          "'Do you have any discounts this week?' hỏi về giảm giá, không liên quan. 'Do you have any parking this week?' hỏi về bãi đậu xe, không đúng ý.",
        usageTip: "Dùng khi hỏi phòng khám còn giờ hẹn trống trong tuần không.",
      },
      {
        id: "de-11-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "We have an opening on Thursday at ten.",
        vietnamese: "Chúng tôi có giờ trống vào thứ Năm lúc mười giờ.",
        prompt: "We have an ___ on Thursday at ten.",
        choices: [
          { id: "a", text: "opening" },
          { id: "b", text: "discount" },
          { id: "c", text: "receipt" },
        ],
        correctAnswer: "a",
        explanation:
          "'Opening' nghĩa là 'giờ trống, chỗ trống' — đúng từ để nói về một khung giờ hẹn còn trống.",
        wrongAnswerExplanations:
          "'Discount' (giảm giá) và 'receipt' (hóa đơn) không liên quan đến việc thông báo giờ hẹn còn trống.",
        usageTip: "Dùng để hiểu khi lễ tân thông báo giờ hẹn trống cho khách chọn.",
      },
      {
        id: "de-11-5",
        type: "conversation_response",
        speaker: "Lễ tân",
        badgeEmoji: "🩺",
        english: "What's the reason for your visit?",
        vietnamese: "Lý do chị đến khám lần này là gì vậy?",
        prompt: "I'd like an appointment for Thursday.",
        promptVietnamese: "Tôi muốn đặt hẹn vào thứ Năm.",
        choices: [
          { id: "a", text: "What's the reason for your visit?" },
          { id: "b", text: "What's your favorite color?" },
          { id: "c", text: "What's the weather like today?" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau khi chọn ngày hẹn, lễ tân thường hỏi lý do khám để sắp xếp đúng bác sĩ hoặc đủ thời gian.",
        wrongAnswerExplanations:
          "'What's your favorite color?' và 'What's the weather like today?' hoàn toàn không liên quan đến việc đặt lịch khám.",
        usageTip: "Dùng khi lễ tân cần biết lý do khám để sắp xếp lịch hẹn phù hợp.",
      },
      {
        id: "de-11-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Please arrive fifteen minutes before your appointment.",
        vietnamese: "Vui lòng đến sớm mười lăm phút trước giờ hẹn.",
        audioText: "Please arrive fifteen minutes before your appointment.",
        choices: [
          { id: "a", text: "Vui lòng đến sớm mười lăm phút trước giờ hẹn." },
          { id: "b", text: "Vui lòng gọi lại sau mười lăm phút nữa." },
          { id: "c", text: "Vui lòng chờ mười lăm phút sau khi khám." },
        ],
        correctAnswer: "a",
        explanation:
          "'Arrive fifteen minutes before' nghĩa là 'đến sớm mười lăm phút trước' — hướng dẫn quan trọng khi đặt lịch hẹn.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc gọi lại sau hay chờ sau khi khám, chỉ nói về việc đến sớm trước giờ hẹn.",
        usageTip: "Dùng để hiểu hướng dẫn về giờ nên đến trước cuộc hẹn khám bệnh.",
      },
      {
        id: "de-11-7",
        type: "english_to_vietnamese",
        badgeEmoji: "📱",
        english: "We'll send you a text reminder the day before.",
        vietnamese: "Chúng tôi sẽ nhắn tin nhắc chị vào ngày trước đó.",
        prompt: "We'll send you a text reminder the day before.",
        choices: [
          { id: "a", text: "Chúng tôi sẽ nhắn tin nhắc chị vào ngày trước đó." },
          { id: "b", text: "Chúng tôi sẽ gọi điện xác nhận bảo hiểm." },
          { id: "c", text: "Chúng tôi sẽ gửi kết quả xét nghiệm qua thư." },
        ],
        correctAnswer: "a",
        explanation:
          "'Text reminder' nghĩa là 'tin nhắn nhắc nhở' — câu này nói về việc phòng khám sẽ nhắc lịch hẹn qua tin nhắn.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc xác nhận bảo hiểm hay gửi kết quả xét nghiệm, chỉ nói về tin nhắn nhắc lịch hẹn.",
        usageTip: "Dùng để hiểu khi phòng khám thông báo sẽ nhắc lịch hẹn qua tin nhắn.",
      },
      {
        id: "de-11-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Can I reschedule my appointment to next week?",
        vietnamese: "Tôi có thể dời lịch hẹn sang tuần sau không?",
        promptContext:
          "Bạn có việc bận đột xuất và muốn gọi điện xin dời lịch hẹn khám sang tuần sau.",
        choices: [
          { id: "a", text: "Can I reschedule my appointment to next week?" },
          { id: "b", text: "Can I reschedule to my appointment next week?" },
          { id: "c", text: "Can I my appointment reschedule to next week?" },
        ],
        correctAnswer: "a",
        explanation:
          "Trật tự đúng là 'reschedule my appointment to next week' — động từ, tân ngữ, rồi mới đến cụm chỉ thời gian.",
        wrongAnswerExplanations:
          "'Can I reschedule to my appointment next week?' đặt sai vị trí giới từ 'to'. 'Can I my appointment reschedule...' đặt sai vị trí động từ 'reschedule'.",
        usageTip: "Dùng khi cần xin dời lịch hẹn khám sang thời điểm khác.",
      },
      {
        id: "de-11-9",
        type: "situation_response",
        badgeEmoji: "🙅",
        english: "I need to cancel my appointment tomorrow.",
        vietnamese: "Tôi cần hủy lịch hẹn của mình vào ngày mai.",
        promptContext:
          "Bạn bị ốm nặng hơn dự kiến và không thể đến khám vào ngày mai, nên gọi điện báo hủy.",
        choices: [
          { id: "a", text: "I need to cancel my appointment tomorrow." },
          { id: "b", text: "I need to make a new appointment tomorrow." },
          { id: "c", text: "I need to pay my bill tomorrow." },
        ],
        correctAnswer: "a",
        explanation:
          "'Cancel my appointment' nghĩa là 'hủy lịch hẹn' — đúng câu để báo với phòng khám khi không thể đến khám.",
        wrongAnswerExplanations:
          "'I need to make a new appointment tomorrow.' nói về việc đặt lịch mới, không phải hủy. 'I need to pay my bill tomorrow.' nói về thanh toán, không liên quan.",
        usageTip: "Dùng khi bạn cần hủy một lịch hẹn khám đã đặt trước.",
      },
      {
        id: "de-11-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙏",
        english: "Thank you, I'll see you on Thursday.",
        vietnamese: "Cảm ơn chị, hẹn gặp lại vào thứ Năm.",
        promptContext:
          "Sau khi đặt lịch hẹn thành công, bạn muốn cảm ơn lễ tân và xác nhận sẽ đến vào ngày đã hẹn.",
        choices: [
          { id: "a", text: "Thank you, I'll see you on Thursday." },
          { id: "b", text: "Thank you, I'll call you tomorrow." },
          { id: "c", text: "Thank you, I'll cancel it soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi đặt lịch xong, câu kết thúc cuộc gọi tự nhiên là cảm ơn và xác nhận ngày hẹn sẽ đến.",
        wrongAnswerExplanations:
          "'Thank you, I'll call you tomorrow.' và 'Thank you, I'll cancel it soon.' đều không phù hợp sau khi vừa đặt lịch thành công.",
        usageTip: "Dùng để kết thúc cuộc gọi đặt lịch hẹn một cách lịch sự.",
      },
    ],
  },
  {
    id: "de-12",
    slug: "de-12-lam-thu-tuc-le-tan-1",
    topicId: "daily-english",
    title: "Làm thủ tục ở quầy lễ tân",
    description: "Học cách check-in và trả lời các câu hỏi thường gặp ở quầy lễ tân phòng khám.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-12-1",
        type: "situation_response",
        badgeEmoji: "🖊️",
        english: "I have a two o'clock appointment.",
        vietnamese: "Tôi có lịch hẹn lúc hai giờ.",
        promptContext:
          "Bạn đến phòng khám đúng giờ hẹn và cần báo với lễ tân để check-in.",
        choices: [
          { id: "a", text: "I have a two o'clock appointment." },
          { id: "b", text: "I have a two dollar coupon." },
          { id: "c", text: "I have a two day cold." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi đến phòng khám, câu mở đầu chuẩn là báo giờ hẹn để lễ tân kiểm tra thông tin nhanh.",
        wrongAnswerExplanations:
          "'I have a two dollar coupon.' và 'I have a two day cold.' không liên quan đến việc check-in khám bệnh.",
        usageTip: "Dùng khi bạn đến phòng khám đúng giờ hẹn và cần check-in.",
      },
      {
        id: "de-12-2",
        type: "conversation_response",
        speaker: "Lễ tân",
        badgeEmoji: "🪪",
        english: "Can I see your ID and insurance card?",
        vietnamese: "Cho tôi xem giấy tờ tùy thân và thẻ bảo hiểm được không?",
        prompt: "I have a two o'clock appointment.",
        promptVietnamese: "Tôi có lịch hẹn lúc hai giờ.",
        choices: [
          { id: "a", text: "Can I see your ID and insurance card?" },
          { id: "b", text: "Would you like some water?" },
          { id: "c", text: "Do you want to reschedule?" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách check-in, lễ tân thường cần kiểm tra giấy tờ tùy thân và thẻ bảo hiểm trước khi tiếp tục.",
        wrongAnswerExplanations:
          "'Would you like some water?' và 'Do you want to reschedule?' đều không phải bước cần thiết ngay khi check-in.",
        usageTip: "Dùng khi cần yêu cầu khách xuất trình giấy tờ và thẻ bảo hiểm lúc check-in.",
      },
      {
        id: "de-12-3",
        type: "vietnamese_to_english",
        badgeEmoji: "📝",
        english: "Here is my insurance card and my ID.",
        vietnamese: "Đây là thẻ bảo hiểm và giấy tờ tùy thân của tôi.",
        promptContext:
          "Lễ tân vừa yêu cầu bạn đưa giấy tờ, và bạn đưa cả hai loại giấy tờ cần thiết.",
        choices: [
          { id: "a", text: "Here is my insurance card and my ID." },
          { id: "b", text: "Here is my grocery list and my keys." },
          { id: "c", text: "Here is my phone and my wallet." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được yêu cầu đưa giấy tờ, câu trả lời đúng là đưa đúng loại giấy tờ được hỏi: thẻ bảo hiểm và ID.",
        wrongAnswerExplanations:
          "'Here is my grocery list and my keys.' và 'Here is my phone and my wallet.' đều không phải giấy tờ cần thiết cho việc khám bệnh.",
        usageTip: "Dùng khi bạn đưa giấy tờ tùy thân và thẻ bảo hiểm theo yêu cầu của lễ tân.",
      },
      {
        id: "de-12-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "Please fill out this form before your visit.",
        vietnamese: "Vui lòng điền vào mẫu đơn này trước khi khám.",
        prompt: "Please fill out this ___ before your visit.",
        choices: [
          { id: "a", text: "form" },
          { id: "b", text: "menu" },
          { id: "c", text: "receipt" },
        ],
        correctAnswer: "a",
        explanation:
          "'Fill out this form' nghĩa là 'điền vào mẫu đơn' — mẫu câu quen thuộc khi làm thủ tục khám bệnh.",
        wrongAnswerExplanations:
          "'Menu' (thực đơn) và 'receipt' (hóa đơn) không liên quan đến thủ tục giấy tờ khi khám bệnh.",
        usageTip: "Dùng để nhớ mẫu câu khi lễ tân yêu cầu điền thông tin trước khi khám.",
      },
      {
        id: "de-12-5",
        type: "conversation_response",
        speaker: "Lễ tân",
        badgeEmoji: "🪑",
        english: "Please have a seat, the doctor will call you soon.",
        vietnamese: "Mời chị ngồi chờ, bác sĩ sẽ gọi chị vào sớm thôi.",
        prompt: "I filled out the form. What should I do now?",
        promptVietnamese: "Tôi điền form xong rồi. Giờ tôi làm gì tiếp?",
        choices: [
          { id: "a", text: "Please have a seat, the doctor will call you soon." },
          { id: "b", text: "Please pay the bill now." },
          { id: "c", text: "Please come back tomorrow." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau khi điền form xong, lễ tân thường mời khách ngồi chờ đến lượt được gọi vào khám.",
        wrongAnswerExplanations:
          "'Please pay the bill now.' và 'Please come back tomorrow.' không phù hợp với bước ngay sau khi điền form xong.",
        usageTip: "Dùng khi hướng dẫn khách ngồi chờ sau khi hoàn tất thủ tục giấy tờ.",
      },
      {
        id: "de-12-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "The doctor is running a little late today.",
        vietnamese: "Hôm nay bác sĩ trễ hẹn một chút.",
        audioText: "The doctor is running a little late today.",
        choices: [
          { id: "a", text: "Hôm nay bác sĩ trễ hẹn một chút." },
          { id: "b", text: "Hôm nay bác sĩ nghỉ làm." },
          { id: "c", text: "Hôm nay bác sĩ đến sớm hơn dự kiến." },
        ],
        correctAnswer: "a",
        explanation:
          "'Running a little late' nghĩa là 'trễ hẹn một chút' — thông báo phổ biến khi lịch khám bị chậm trễ.",
        wrongAnswerExplanations:
          "Câu gốc không nói bác sĩ nghỉ làm hay đến sớm hơn, chỉ nói bác sĩ đang bị trễ hẹn một chút.",
        usageTip: "Dùng để hiểu thông báo khi bác sĩ khám trễ hơn giờ hẹn dự kiến.",
      },
      {
        id: "de-12-7",
        type: "english_to_vietnamese",
        badgeEmoji: "💳",
        english: "Your co-pay is due at check-in.",
        vietnamese: "Tiền đồng chi trả cần đóng lúc check-in.",
        prompt: "Your co-pay is due at check-in.",
        choices: [
          { id: "a", text: "Tiền đồng chi trả cần đóng lúc check-in." },
          { id: "b", text: "Tiền đồng chi trả sẽ được hoàn lại sau." },
          { id: "c", text: "Tiền đồng chi trả không cần thiết nữa." },
        ],
        correctAnswer: "a",
        explanation:
          "'Due at check-in' nghĩa là 'cần đóng lúc check-in' — thông báo về thời điểm cần thanh toán tiền đồng chi trả.",
        wrongAnswerExplanations:
          "Câu gốc không nói tiền sẽ được hoàn lại hay không cần thiết, chỉ nói rõ thời điểm cần đóng.",
        usageTip: "Dùng để hiểu thông báo về thời điểm cần thanh toán tiền đồng chi trả khi khám bệnh.",
      },
      {
        id: "de-12-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Is my address still the same on file?",
        vietnamese: "Địa chỉ của tôi trong hồ sơ vẫn như cũ đúng không?",
        promptContext:
          "Lễ tân muốn xác nhận với bạn xem địa chỉ trong hồ sơ có còn đúng hay không.",
        choices: [
          { id: "a", text: "Is my address still the same on file?" },
          { id: "b", text: "Is my address still the same file on?" },
          { id: "c", text: "Is still my address the same on file?" },
        ],
        correctAnswer: "a",
        explanation:
          "Trật tự đúng là 'the same on file' — cụm giới từ 'on file' đứng sau tính từ 'the same' để bổ nghĩa cho nó.",
        wrongAnswerExplanations:
          "'Is my address still the same file on?' đặt sai vị trí giới từ 'on'. 'Is still my address the same on file?' đặt sai vị trí trạng từ 'still'.",
        usageTip: "Dùng khi cần xác nhận lại thông tin cá nhân trong hồ sơ bệnh án.",
      },
      {
        id: "de-12-9",
        type: "situation_response",
        badgeEmoji: "🙋",
        english: "I need to update my phone number.",
        vietnamese: "Tôi cần cập nhật lại số điện thoại của mình.",
        promptContext:
          "Bạn vừa đổi số điện thoại mới và muốn báo cho lễ tân cập nhật vào hồ sơ.",
        choices: [
          { id: "a", text: "I need to update my phone number." },
          { id: "b", text: "I need to update my appointment time." },
          { id: "c", text: "I need to update my insurance plan." },
        ],
        correctAnswer: "a",
        explanation:
          "Vì bạn vừa đổi số điện thoại, câu đúng cần nói rõ 'my phone number' để lễ tân cập nhật đúng thông tin.",
        wrongAnswerExplanations:
          "'I need to update my appointment time.' và 'I need to update my insurance plan.' đều nói về thông tin khác, không đúng với việc cập nhật số điện thoại.",
        usageTip: "Dùng khi bạn cần thông báo thay đổi số điện thoại liên lạc cho phòng khám.",
      },
      {
        id: "de-12-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙏",
        english: "Thank you for helping me check in.",
        vietnamese: "Cảm ơn chị đã giúp tôi làm thủ tục check-in.",
        promptContext:
          "Sau khi hoàn tất thủ tục check-in, bạn muốn cảm ơn lễ tân đã hỗ trợ.",
        choices: [
          { id: "a", text: "Thank you for helping me check in." },
          { id: "b", text: "Thank you for the free sample." },
          { id: "c", text: "Thank you for the discount today." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau khi được giúp làm thủ tục, câu cảm ơn phù hợp nhất là nói đúng vào điều họ vừa hỗ trợ.",
        wrongAnswerExplanations:
          "'Thank you for the free sample.' và 'Thank you for the discount today.' đều không liên quan đến việc làm thủ tục check-in.",
        usageTip: "Dùng để cảm ơn lễ tân sau khi hoàn tất thủ tục check-in khám bệnh.",
      },
    ],
  },
  {
    id: "de-13",
    slug: "de-13-mo-ta-trieu-chung-1",
    topicId: "daily-english",
    title: "Mô tả triệu chứng cho y tá",
    description: "Luyện cách mô tả các triệu chứng cơ bản khi y tá hỏi thăm.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-13-1",
        type: "conversation_response",
        speaker: "Y tá",
        badgeEmoji: "🩺",
        english: "What symptoms are you having today?",
        vietnamese: "Hôm nay chị có triệu chứng gì vậy?",
        prompt: "Hi, I'll be checking you in today.",
        promptVietnamese: "Chào chị, tôi sẽ kiểm tra sơ bộ cho chị hôm nay.",
        choices: [
          { id: "a", text: "I have a fever and a headache." },
          { id: "b", text: "I have an appointment next week." },
          { id: "c", text: "I have insurance with my job." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi y tá hỏi triệu chứng, câu trả lời đúng là mô tả những gì bạn đang cảm thấy, ví dụ như sốt và nhức đầu.",
        wrongAnswerExplanations:
          "'I have an appointment next week.' và 'I have insurance with my job.' đều không trả lời đúng vào câu hỏi về triệu chứng hiện tại.",
        usageTip: "Dùng khi y tá hỏi về triệu chứng bạn đang gặp phải.",
      },
      {
        id: "de-13-2",
        type: "situation_response",
        badgeEmoji: "🤒",
        english: "I've had a fever since yesterday.",
        vietnamese: "Tôi bị sốt từ hôm qua đến giờ.",
        promptContext:
          "Y tá hỏi bạn bị triệu chứng này bao lâu rồi, và bạn muốn nói rõ đã bị sốt từ hôm qua.",
        choices: [
          { id: "a", text: "I've had a fever since yesterday." },
          { id: "b", text: "I've had a fever since last year." },
          { id: "c", text: "I've had a good day yesterday." },
        ],
        correctAnswer: "a",
        explanation:
          "'Since yesterday' nghĩa là 'từ hôm qua' — đúng câu để nói về thời gian bắt đầu bị triệu chứng gần đây.",
        wrongAnswerExplanations:
          "'I've had a fever since last year.' không hợp lý vì sốt kéo dài cả năm là quá lâu và bất thường. 'I've had a good day yesterday.' không liên quan đến việc mô tả triệu chứng bệnh.",
        usageTip: "Dùng khi mô tả thời gian bạn bắt đầu bị một triệu chứng.",
      },
      {
        id: "de-13-3",
        type: "vietnamese_to_english",
        badgeEmoji: "🤕",
        english: "My stomach hurts a lot.",
        vietnamese: "Bụng tôi đau nhiều lắm.",
        promptContext:
          "Bạn muốn nói với y tá rằng bụng bạn đang đau nhiều để họ ghi nhận triệu chứng.",
        choices: [
          { id: "a", text: "My stomach hurts a lot." },
          { id: "b", text: "My stomach feels great today." },
          { id: "c", text: "My back is very strong." },
        ],
        correctAnswer: "a",
        explanation:
          "'My stomach hurts' nghĩa là 'bụng tôi đau' — đúng câu để mô tả triệu chứng đau bụng cho y tá.",
        wrongAnswerExplanations:
          "'My stomach feels great today.' ngược nghĩa hoàn toàn với việc bị đau bụng. 'My back is very strong.' nói về lưng, không liên quan đến triệu chứng đau bụng.",
        usageTip: "Dùng khi bạn muốn mô tả cơn đau bụng cho nhân viên y tế.",
      },
      {
        id: "de-13-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "I feel dizzy when I stand up.",
        vietnamese: "Tôi thấy chóng mặt khi đứng dậy.",
        prompt: "I feel ___ when I stand up.",
        choices: [
          { id: "a", text: "dizzy" },
          { id: "b", text: "happy" },
          { id: "c", text: "hungry" },
        ],
        correctAnswer: "a",
        explanation:
          "'Dizzy' nghĩa là 'chóng mặt' — đúng từ mô tả cảm giác thường gặp khi đứng dậy đột ngột trong lúc không khỏe.",
        wrongAnswerExplanations:
          "'Happy' (vui) và 'hungry' (đói) không phải là triệu chứng phù hợp trong ngữ cảnh mô tả cảm giác chóng mặt.",
        usageTip: "Dùng để nhớ từ 'dizzy' khi mô tả triệu chứng chóng mặt.",
      },
      {
        id: "de-13-5",
        type: "conversation_response",
        speaker: "Y tá",
        badgeEmoji: "🌡️",
        english: "Let me take your temperature first.",
        vietnamese: "Để tôi đo nhiệt độ cho chị trước đã.",
        prompt: "I think I have a fever.",
        promptVietnamese: "Tôi nghĩ tôi bị sốt.",
        choices: [
          { id: "a", text: "Let me take your temperature first." },
          { id: "b", text: "Let me schedule your next visit." },
          { id: "c", text: "Let me check your insurance card." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nói nghi ngờ bị sốt, y tá nên đo nhiệt độ ngay để kiểm tra chính xác.",
        wrongAnswerExplanations:
          "'Let me schedule your next visit.' và 'Let me check your insurance card.' đều không liên quan đến việc kiểm tra triệu chứng sốt ngay lúc đó.",
        usageTip: "Dùng khi y tá cần kiểm tra nhiệt độ cơ thể của bệnh nhân.",
      },
      {
        id: "de-13-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "On a scale of one to ten, how bad is the pain?",
        vietnamese: "Trên thang điểm từ một đến mười, cơn đau nặng cỡ nào?",
        audioText: "On a scale of one to ten, how bad is the pain?",
        choices: [
          { id: "a", text: "Trên thang điểm từ một đến mười, cơn đau nặng cỡ nào?" },
          { id: "b", text: "Chị đã uống bao nhiêu ly nước hôm nay?" },
          { id: "c", text: "Chị đã ngủ được bao nhiêu tiếng tối qua?" },
        ],
        correctAnswer: "a",
        explanation:
          "'On a scale of one to ten' là cách hỏi phổ biến để đánh giá mức độ đau, từ nhẹ đến nặng.",
        wrongAnswerExplanations:
          "Câu gốc không hỏi về số ly nước hay số giờ ngủ, chỉ hỏi về mức độ đau theo thang điểm.",
        usageTip: "Dùng để hiểu cách nhân viên y tế đánh giá mức độ đau của bệnh nhân.",
      },
      {
        id: "de-13-7",
        type: "english_to_vietnamese",
        badgeEmoji: "😷",
        english: "I've been coughing for three days.",
        vietnamese: "Tôi bị ho ba ngày rồi.",
        prompt: "I've been coughing for three days.",
        choices: [
          { id: "a", text: "Tôi bị ho ba ngày rồi." },
          { id: "b", text: "Tôi bị sốt ba lần rồi." },
          { id: "c", text: "Tôi đã khám ba lần rồi." },
        ],
        correctAnswer: "a",
        explanation:
          "'Coughing for three days' nghĩa là 'bị ho ba ngày' — câu này mô tả thời gian kéo dài của triệu chứng ho.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc sốt ba lần hay khám ba lần, chỉ mô tả triệu chứng ho kéo dài ba ngày.",
        usageTip: "Dùng khi mô tả thời gian bạn đã bị ho cho nhân viên y tế.",
      },
      {
        id: "de-13-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "The pain gets worse when I breathe deeply.",
        vietnamese: "Cơn đau nặng hơn khi tôi hít thở sâu.",
        promptContext:
          "Bạn muốn mô tả rằng cơn đau ngực trở nên nặng hơn mỗi khi hít thở sâu.",
        choices: [
          { id: "a", text: "The pain gets worse when I breathe deeply." },
          { id: "b", text: "The pain gets worse when I breathing deeply." },
          { id: "c", text: "The pain get worse when I breathe deeply." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'when I' cần động từ chia đúng thì hiện tại đơn 'breathe', và chủ ngữ số ít 'the pain' cần động từ 'gets' có thêm 's'.",
        wrongAnswerExplanations:
          "'...when I breathing deeply.' dùng sai dạng động từ, thiếu 'am' trước 'breathing'. 'The pain get worse...' chia sai động từ vì chủ ngữ số ít cần 'gets' chứ không phải 'get'.",
        usageTip: "Dùng khi mô tả một triệu chứng đau trở nên nặng hơn trong một tình huống cụ thể.",
      },
      {
        id: "de-13-9",
        type: "situation_response",
        badgeEmoji: "💊",
        english: "Are you taking any medicine right now?",
        vietnamese: "Chị có đang uống thuốc gì không vậy?",
        promptContext:
          "Y tá muốn hỏi bạn xem hiện tại có đang dùng loại thuốc nào không để ghi vào hồ sơ.",
        choices: [
          { id: "a", text: "Are you taking any medicine right now?" },
          { id: "b", text: "Are you taking any pictures right now?" },
          { id: "c", text: "Are you taking any classes right now?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Taking any medicine' nghĩa là 'đang uống thuốc gì' — đúng câu hỏi y tá thường dùng để kiểm tra tiền sử dùng thuốc.",
        wrongAnswerExplanations:
          "'Are you taking any pictures right now?' và 'Are you taking any classes right now?' hoàn toàn không liên quan đến việc khám bệnh.",
        usageTip: "Dùng khi y tá cần hỏi về các loại thuốc bạn đang sử dụng.",
      },
      {
        id: "de-13-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "I'm allergic to penicillin.",
        vietnamese: "Tôi bị dị ứng với thuốc penicillin.",
        promptContext:
          "Y tá hỏi bạn có bị dị ứng thuốc gì không, và bạn muốn báo rằng mình dị ứng với penicillin.",
        choices: [
          { id: "a", text: "I'm allergic to penicillin." },
          { id: "b", text: "I'm allergic to sunlight." },
          { id: "c", text: "I'm allergic to loud noise." },
        ],
        correctAnswer: "a",
        explanation:
          "'Allergic to penicillin' nghĩa là 'dị ứng với penicillin' — thông tin quan trọng cần báo cho y tá trước khi khám.",
        wrongAnswerExplanations:
          "'I'm allergic to sunlight.' và 'I'm allergic to loud noise.' không phải là loại dị ứng thuốc thường được hỏi trong bối cảnh khám bệnh này.",
        usageTip: "Dùng khi bạn cần báo về dị ứng thuốc trước khi được kê đơn.",
      },
    ],
  },
  {
    id: "de-14",
    slug: "de-14-hoi-ket-qua-tai-kham-1",
    topicId: "daily-english",
    title: "Hỏi về kết quả xét nghiệm và tái khám",
    description: "Luyện hỏi bác sĩ về kết quả xét nghiệm và lịch tái khám sau đó.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-14-1",
        type: "situation_response",
        badgeEmoji: "🧪",
        english: "When will my test results be ready?",
        vietnamese: "Khi nào thì có kết quả xét nghiệm của tôi vậy?",
        promptContext:
          "Bạn vừa làm xét nghiệm máu và muốn hỏi bác sĩ khi nào sẽ có kết quả.",
        choices: [
          { id: "a", text: "When will my test results be ready?" },
          { id: "b", text: "When will my next appointment be?" },
          { id: "c", text: "When will the pharmacy open?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Test results be ready' nghĩa là 'kết quả xét nghiệm sẵn sàng' — đúng câu hỏi khi bạn muốn biết thời gian có kết quả.",
        wrongAnswerExplanations:
          "'When will my next appointment be?' hỏi về lịch hẹn tiếp theo, không phải kết quả xét nghiệm. 'When will the pharmacy open?' hoàn toàn không liên quan.",
        usageTip: "Dùng khi bạn vừa làm xét nghiệm và muốn biết khi nào có kết quả.",
      },
      {
        id: "de-14-2",
        type: "conversation_response",
        speaker: "Bác sĩ",
        badgeEmoji: "📋",
        english: "Your results should be ready in three days.",
        vietnamese: "Kết quả của chị sẽ có trong khoảng ba ngày nữa.",
        prompt: "When will my test results be ready?",
        promptVietnamese: "Khi nào thì có kết quả xét nghiệm của tôi vậy?",
        choices: [
          { id: "a", text: "Your results should be ready in three days." },
          { id: "b", text: "Your appointment is next Monday." },
          { id: "c", text: "Your insurance covers this visit." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về kết quả xét nghiệm, bác sĩ nên trả lời rõ thời gian dự kiến có kết quả.",
        wrongAnswerExplanations:
          "'Your appointment is next Monday.' và 'Your insurance covers this visit.' đều không trả lời đúng vào câu hỏi về kết quả xét nghiệm.",
        usageTip: "Dùng khi thông báo cho bệnh nhân thời gian dự kiến có kết quả xét nghiệm.",
      },
      {
        id: "de-14-3",
        type: "vietnamese_to_english",
        badgeEmoji: "📞",
        english: "Will you call me, or do I need to come back?",
        vietnamese: "Bác sĩ sẽ gọi cho tôi, hay tôi cần quay lại đây?",
        promptContext:
          "Bạn muốn hỏi rõ cách nhận kết quả xét nghiệm: qua điện thoại hay phải đến trực tiếp.",
        choices: [
          { id: "a", text: "Will you call me, or do I need to come back?" },
          { id: "b", text: "Will you pay me, or do I need to pay you?" },
          { id: "c", text: "Will you help me, or do I need a new doctor?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Call me, or come back' nghĩa là 'gọi cho tôi, hay quay lại' — đúng câu hỏi để làm rõ cách nhận kết quả.",
        wrongAnswerExplanations:
          "'Will you pay me, or do I need to pay you?' và 'Will you help me, or do I need a new doctor?' đều không liên quan đến việc hỏi cách nhận kết quả xét nghiệm.",
        usageTip: "Dùng khi bạn muốn biết cách thức nhận kết quả xét nghiệm sau khi khám.",
      },
      {
        id: "de-14-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "You need to come back for a follow-up visit.",
        vietnamese: "Chị cần quay lại để tái khám.",
        prompt: "You need to come back for a ___ visit.",
        choices: [
          { id: "a", text: "follow-up" },
          { id: "b", text: "grocery" },
          { id: "c", text: "salon" },
        ],
        correctAnswer: "a",
        explanation:
          "'Follow-up visit' nghĩa là 'buổi tái khám' — cụm từ quan trọng khi bác sĩ yêu cầu bệnh nhân quay lại kiểm tra.",
        wrongAnswerExplanations:
          "'Grocery' (đi chợ) và 'salon' (tiệm làm đẹp) không liên quan đến ngữ cảnh khám bệnh.",
        usageTip: "Dùng để nhớ cụm từ 'follow-up visit' khi nói về việc tái khám.",
      },
      {
        id: "de-14-5",
        type: "conversation_response",
        speaker: "Bác sĩ",
        badgeEmoji: "✅",
        english: "Everything looks normal, no need to worry.",
        vietnamese: "Mọi thứ đều bình thường, không cần lo lắng đâu.",
        prompt: "Are my test results okay?",
        promptVietnamese: "Kết quả xét nghiệm của tôi có ổn không vậy?",
        choices: [
          { id: "a", text: "Everything looks normal, no need to worry." },
          { id: "b", text: "The pharmacy is closed today." },
          { id: "c", text: "Your appointment was canceled." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi kết quả bình thường, bác sĩ nên trấn an bệnh nhân bằng câu nói rõ ràng và tích cực.",
        wrongAnswerExplanations:
          "'The pharmacy is closed today.' và 'Your appointment was canceled.' đều không trả lời đúng vào câu hỏi về kết quả xét nghiệm.",
        usageTip: "Dùng khi bác sĩ thông báo kết quả xét nghiệm bình thường cho bệnh nhân.",
      },
      {
        id: "de-14-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "We need to run one more test to be sure.",
        vietnamese: "Chúng tôi cần làm thêm một xét nghiệm nữa để chắc chắn.",
        audioText: "We need to run one more test to be sure.",
        choices: [
          { id: "a", text: "Chúng tôi cần làm thêm một xét nghiệm nữa để chắc chắn." },
          { id: "b", text: "Chúng tôi cần hủy lịch hẹn tuần sau." },
          { id: "c", text: "Chúng tôi cần đổi loại thuốc khác." },
        ],
        correctAnswer: "a",
        explanation:
          "'Run one more test' nghĩa là 'làm thêm một xét nghiệm' — thông báo khi cần kiểm tra thêm để có kết luận chính xác.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc hủy lịch hẹn hay đổi thuốc, chỉ nói về việc cần làm thêm xét nghiệm.",
        usageTip: "Dùng để hiểu khi bác sĩ yêu cầu làm thêm xét nghiệm để chẩn đoán chính xác.",
      },
      {
        id: "de-14-7",
        type: "english_to_vietnamese",
        badgeEmoji: "📆",
        english: "Let's schedule your follow-up for next month.",
        vietnamese: "Chúng ta hãy đặt lịch tái khám của chị vào tháng sau.",
        prompt: "Let's schedule your follow-up for next month.",
        choices: [
          { id: "a", text: "Chúng ta hãy đặt lịch tái khám của chị vào tháng sau." },
          { id: "b", text: "Chúng ta hãy hủy lịch hẹn của chị luôn." },
          { id: "c", text: "Chúng ta hãy đổi bác sĩ khác cho chị." },
        ],
        correctAnswer: "a",
        explanation:
          "'Schedule your follow-up' nghĩa là 'đặt lịch tái khám' — câu này nói về việc sắp xếp buổi khám tiếp theo.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc hủy lịch hẹn hay đổi bác sĩ, chỉ nói về việc đặt lịch tái khám vào tháng sau.",
        usageTip: "Dùng khi bác sĩ đề nghị đặt lịch tái khám cho lần sau.",
      },
      {
        id: "de-14-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Is there anything I should watch out for?",
        vietnamese: "Có gì tôi cần lưu ý theo dõi không vậy?",
        promptContext:
          "Sau khi nghe kết quả, bạn muốn hỏi bác sĩ có triệu chứng nào cần chú ý theo dõi thêm không.",
        choices: [
          { id: "a", text: "Is there anything I should watch out for?" },
          { id: "b", text: "Is there anything I should watch for out?" },
          { id: "c", text: "Is anything there I should watch out for?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Watch out for' là cụm động từ nghĩa là 'lưu ý, đề phòng' — cụm giới từ 'for' phải đứng cuối câu khi câu là câu hỏi.",
        wrongAnswerExplanations:
          "'Is there anything I should watch for out?' đảo sai vị trí của cụm 'out for'. 'Is anything there I should watch out for?' đặt sai vị trí 'there' và 'anything'.",
        usageTip: "Dùng khi hỏi bác sĩ về những dấu hiệu cần chú ý theo dõi sau khi khám.",
      },
      {
        id: "de-14-9",
        type: "situation_response",
        badgeEmoji: "💰",
        english: "Will my insurance cover the follow-up visit?",
        vietnamese: "Bảo hiểm của tôi có chi trả cho buổi tái khám không?",
        promptContext:
          "Bạn muốn biết trước khi đặt lịch tái khám xem bảo hiểm có chi trả cho buổi khám đó không.",
        choices: [
          { id: "a", text: "Will my insurance cover the follow-up visit?" },
          { id: "b", text: "Will my insurance cover a new car?" },
          { id: "c", text: "Will my insurance cover my rent?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Insurance cover the follow-up visit' nghĩa là 'bảo hiểm chi trả cho buổi tái khám' — đúng câu hỏi trong ngữ cảnh y tế này.",
        wrongAnswerExplanations:
          "'Will my insurance cover a new car?' và 'Will my insurance cover my rent?' hoàn toàn không liên quan đến bảo hiểm y tế cho việc khám bệnh.",
        usageTip: "Dùng khi bạn muốn kiểm tra bảo hiểm y tế có chi trả cho buổi tái khám không.",
      },
      {
        id: "de-14-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙏",
        english: "Thank you, doctor. I'll see you next month.",
        vietnamese: "Cảm ơn bác sĩ. Hẹn gặp lại tháng sau.",
        promptContext:
          "Sau khi kết thúc buổi khám và đặt lịch tái khám, bạn muốn cảm ơn bác sĩ trước khi ra về.",
        choices: [
          { id: "a", text: "Thank you, doctor. I'll see you next month." },
          { id: "b", text: "Thank you, doctor. I'll never come back." },
          { id: "c", text: "Thank you, doctor. I'll cancel my insurance." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi kết thúc buổi khám tốt đẹp, câu nói tự nhiên là cảm ơn bác sĩ và xác nhận lịch tái khám sắp tới.",
        wrongAnswerExplanations:
          "'Thank you, doctor. I'll never come back.' và 'Thank you, doctor. I'll cancel my insurance.' đều không phù hợp khi bạn vừa đặt lịch tái khám.",
        usageTip: "Dùng để cảm ơn bác sĩ và kết thúc buổi khám một cách lịch sự.",
      },
    ],
  },
  {
    id: "de-15",
    slug: "de-15-hoi-bao-hiem-kham-benh-1",
    topicId: "daily-english",
    title: "Hỏi về bảo hiểm khi khám bệnh",
    description: "Luyện các câu hỏi liên quan đến bảo hiểm y tế và chi phí khám bệnh.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-15-1",
        type: "situation_response",
        badgeEmoji: "🏥",
        english: "Do you accept my insurance here?",
        vietnamese: "Ở đây có nhận bảo hiểm của tôi không vậy?",
        promptContext:
          "Trước khi đặt lịch hẹn, bạn muốn hỏi phòng khám xem họ có nhận loại bảo hiểm bạn đang có không.",
        choices: [
          { id: "a", text: "Do you accept my insurance here?" },
          { id: "b", text: "Do you accept my coupon here?" },
          { id: "c", text: "Do you accept my resume here?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Accept my insurance' nghĩa là 'nhận bảo hiểm của tôi' — đúng câu hỏi khi kiểm tra phòng khám có làm việc với bảo hiểm của bạn không.",
        wrongAnswerExplanations:
          "'Do you accept my coupon here?' và 'Do you accept my resume here?' không liên quan đến việc kiểm tra bảo hiểm y tế.",
        usageTip: "Dùng khi bạn muốn kiểm tra phòng khám có nhận loại bảo hiểm của mình không.",
      },
      {
        id: "de-15-2",
        type: "conversation_response",
        speaker: "Lễ tân",
        badgeEmoji: "✅",
        english: "Yes, we accept that insurance plan.",
        vietnamese: "Dạ có, chúng tôi nhận gói bảo hiểm đó.",
        prompt: "Do you accept my insurance here?",
        promptVietnamese: "Ở đây có nhận bảo hiểm của tôi không vậy?",
        choices: [
          { id: "a", text: "Yes, we accept that insurance plan." },
          { id: "b", text: "Yes, we close at five today." },
          { id: "c", text: "Yes, the doctor is very kind." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về bảo hiểm, lễ tân nên xác nhận rõ ràng gói bảo hiểm đó có được chấp nhận hay không.",
        wrongAnswerExplanations:
          "'Yes, we close at five today.' và 'Yes, the doctor is very kind.' đều không trả lời đúng vào câu hỏi về bảo hiểm.",
        usageTip: "Dùng khi xác nhận với khách rằng phòng khám nhận loại bảo hiểm của họ.",
      },
      {
        id: "de-15-3",
        type: "vietnamese_to_english",
        badgeEmoji: "💵",
        english: "How much will this visit cost without insurance?",
        vietnamese: "Buổi khám này tốn bao nhiêu nếu không có bảo hiểm?",
        promptContext:
          "Bạn không chắc phòng khám có nhận bảo hiểm của mình không, nên muốn hỏi giá nếu không dùng bảo hiểm.",
        choices: [
          { id: "a", text: "How much will this visit cost without insurance?" },
          { id: "b", text: "How much will this visit cost with a coupon?" },
          { id: "c", text: "How much will this visit cost next year?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Cost without insurance' nghĩa là 'tốn bao nhiêu nếu không có bảo hiểm' — đúng câu hỏi để biết chi phí khi không dùng bảo hiểm.",
        wrongAnswerExplanations:
          "'How much will this visit cost with a coupon?' hỏi về phiếu giảm giá, không liên quan. 'How much will this visit cost next year?' hỏi về thời gian, không đúng ý.",
        usageTip: "Dùng khi bạn muốn biết chi phí khám bệnh nếu không sử dụng bảo hiểm.",
      },
      {
        id: "de-15-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "You may need a referral from your doctor.",
        vietnamese: "Chị có thể cần giấy giới thiệu từ bác sĩ của mình.",
        prompt: "You may need a ___ from your doctor.",
        choices: [
          { id: "a", text: "referral" },
          { id: "b", text: "receipt" },
          { id: "c", text: "coupon" },
        ],
        correctAnswer: "a",
        explanation:
          "'Referral' nghĩa là 'giấy giới thiệu' — thường cần khi muốn khám chuyên khoa với một số loại bảo hiểm.",
        wrongAnswerExplanations:
          "'Receipt' (hóa đơn) và 'coupon' (phiếu giảm giá) không liên quan đến thủ tục giấy giới thiệu khám chuyên khoa.",
        usageTip: "Dùng để hiểu khi cần giấy giới thiệu từ bác sĩ gia đình để khám chuyên khoa.",
      },
      {
        id: "de-15-5",
        type: "conversation_response",
        speaker: "Lễ tân",
        badgeEmoji: "📄",
        english: "You'll get a bill in the mail later.",
        vietnamese: "Chị sẽ nhận hóa đơn qua thư sau này.",
        prompt: "How will I know how much I owe?",
        promptVietnamese: "Làm sao tôi biết mình nợ bao nhiêu tiền?",
        choices: [
          { id: "a", text: "You'll get a bill in the mail later." },
          { id: "b", text: "You'll get a new appointment card." },
          { id: "c", text: "You'll get a free gift today." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về số tiền còn nợ, lễ tân nên giải thích rằng hóa đơn sẽ được gửi qua thư sau.",
        wrongAnswerExplanations:
          "'You'll get a new appointment card.' và 'You'll get a free gift today.' đều không trả lời đúng vào câu hỏi về hóa đơn.",
        usageTip: "Dùng khi giải thích cho khách về việc nhận hóa đơn chi phí sau buổi khám.",
      },
      {
        id: "de-15-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Your insurance requires a co-pay of twenty dollars.",
        vietnamese: "Bảo hiểm của chị yêu cầu đồng chi trả hai mươi đô la.",
        audioText: "Your insurance requires a co-pay of twenty dollars.",
        choices: [
          { id: "a", text: "Bảo hiểm của chị yêu cầu đồng chi trả hai mươi đô la." },
          { id: "b", text: "Bảo hiểm của chị đã hết hạn từ hai mươi ngày trước." },
          { id: "c", text: "Bảo hiểm của chị sẽ hoàn lại hai mươi đô la." },
        ],
        correctAnswer: "a",
        explanation:
          "'Requires a co-pay of twenty dollars' nghĩa là 'yêu cầu đồng chi trả hai mươi đô' — thông báo về số tiền cần đóng.",
        wrongAnswerExplanations:
          "Câu gốc không nói bảo hiểm hết hạn hay sẽ hoàn tiền, chỉ nói về số tiền đồng chi trả cần đóng.",
        usageTip: "Dùng để hiểu thông báo về số tiền đồng chi trả theo yêu cầu bảo hiểm.",
      },
      {
        id: "de-15-7",
        type: "english_to_vietnamese",
        badgeEmoji: "📑",
        english: "Please bring your insurance card to every visit.",
        vietnamese: "Vui lòng mang thẻ bảo hiểm mỗi lần đến khám.",
        prompt: "Please bring your insurance card to every visit.",
        choices: [
          { id: "a", text: "Vui lòng mang thẻ bảo hiểm mỗi lần đến khám." },
          { id: "b", text: "Vui lòng mang tiền mặt mỗi lần đến khám." },
          { id: "c", text: "Vui lòng mang kết quả xét nghiệm cũ đến khám." },
        ],
        correctAnswer: "a",
        explanation:
          "'Bring your insurance card to every visit' nghĩa là 'mang thẻ bảo hiểm mỗi lần khám' — nhắc nhở quan trọng để làm thủ tục nhanh hơn.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc mang tiền mặt hay kết quả xét nghiệm cũ, chỉ nhắc mang thẻ bảo hiểm.",
        usageTip: "Dùng để hiểu nhắc nhở về việc mang thẻ bảo hiểm mỗi lần đến khám.",
      },
      {
        id: "de-15-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Can you check if this is covered before I schedule?",
        vietnamese: "Chị kiểm tra giúp xem cái này có được bảo hiểm trước khi tôi đặt lịch không?",
        promptContext:
          "Bạn muốn chắc chắn dịch vụ khám sẽ được bảo hiểm chi trả trước khi quyết định đặt lịch hẹn.",
        choices: [
          { id: "a", text: "Can you check if this is covered before I schedule?" },
          { id: "b", text: "Can you check if this covered is before I schedule?" },
          { id: "c", text: "Can you check this is covered if before I schedule?" },
        ],
        correctAnswer: "a",
        explanation:
          "Trong mệnh đề 'if' làm tân ngữ, trật tự đúng là 'if this is covered' — chủ ngữ trước động từ, không đảo lộn.",
        wrongAnswerExplanations:
          "'Can you check if this covered is before I schedule?' đảo sai vị trí động từ 'is'. 'Can you check this is covered if before I schedule?' đặt sai vị trí liên từ 'if'.",
        usageTip: "Dùng khi bạn muốn xác nhận bảo hiểm chi trả trước khi đặt lịch hẹn khám.",
      },
      {
        id: "de-15-9",
        type: "situation_response",
        badgeEmoji: "🙁",
        english: "I don't have insurance right now.",
        vietnamese: "Hiện tại tôi không có bảo hiểm.",
        promptContext:
          "Lễ tân hỏi về bảo hiểm của bạn, nhưng hiện tại bạn chưa có bảo hiểm y tế nào.",
        choices: [
          { id: "a", text: "I don't have insurance right now." },
          { id: "b", text: "I don't have an appointment right now." },
          { id: "c", text: "I don't have a car right now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi về bảo hiểm mà bạn chưa có, câu trả lời trực tiếp và rõ ràng nhất là nói thẳng điều đó.",
        wrongAnswerExplanations:
          "'I don't have an appointment right now.' và 'I don't have a car right now.' đều không trả lời đúng vào câu hỏi về bảo hiểm.",
        usageTip: "Dùng khi bạn cần thông báo rằng mình hiện chưa có bảo hiểm y tế.",
      },
      {
        id: "de-15-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "Do you have a payment plan for people without insurance?",
        vietnamese: "Có chương trình trả góp cho người không có bảo hiểm không vậy?",
        promptContext:
          "Bạn không có bảo hiểm và muốn hỏi phòng khám có cách nào giúp trả chi phí dần dần không.",
        choices: [
          { id: "a", text: "Do you have a payment plan for people without insurance?" },
          { id: "b", text: "Do you have a parking lot for people without insurance?" },
          { id: "c", text: "Do you have a waiting room for people without insurance?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Payment plan for people without insurance' nghĩa là 'chương trình trả góp cho người không có bảo hiểm' — đúng câu hỏi trong tình huống này.",
        wrongAnswerExplanations:
          "'Do you have a parking lot...' và 'Do you have a waiting room...' đều không liên quan đến việc hỏi về hỗ trợ thanh toán chi phí.",
        usageTip: "Dùng khi bạn không có bảo hiểm và muốn hỏi về các lựa chọn hỗ trợ chi phí khám bệnh.",
      },
    ],
  },
];
