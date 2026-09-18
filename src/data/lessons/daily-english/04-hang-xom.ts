import { Lesson } from "@/types/content";

export const dailyEnglishGroup04: Lesson[] = [
  {
    id: "de-16",
    slug: "de-16-chao-hang-xom-moi-1",
    topicId: "daily-english",
    title: "Chào hỏi hàng xóm mới",
    description: "Học cách giới thiệu bản thân khi gặp hàng xóm mới dọn đến.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-16-1",
        type: "situation_response",
        badgeEmoji: "👋",
        english: "Hi, I'm your new neighbor.",
        vietnamese: "Chào anh, tôi là hàng xóm mới của anh đó.",
        promptContext:
          "Bạn vừa dọn đến căn nhà kế bên và gặp một người đang đứng ngoài sân. Bạn muốn giới thiệu bản thân.",
        choices: [
          { id: "a", text: "Hi, I'm your new neighbor." },
          { id: "b", text: "Hi, I'm your new doctor." },
          { id: "c", text: "Hi, I'm your new boss." },
        ],
        correctAnswer: "a",
        explanation:
          "'I'm your new neighbor' nghĩa là 'tôi là hàng xóm mới' — đúng câu để giới thiệu bản thân khi vừa dọn đến.",
        wrongAnswerExplanations:
          "'Hi, I'm your new doctor.' và 'Hi, I'm your new boss.' không đúng ngữ cảnh khi bạn chỉ là người hàng xóm mới dọn đến.",
        usageTip: "Dùng khi bạn vừa dọn đến nhà mới và muốn giới thiệu bản thân với hàng xóm.",
      },
      {
        id: "de-16-2",
        type: "conversation_response",
        speaker: "Hàng xóm",
        badgeEmoji: "😊",
        english: "Nice to meet you! Welcome to the neighborhood.",
        vietnamese: "Rất vui được gặp anh! Chào mừng đến khu này.",
        prompt: "Hi, I just moved in next door.",
        promptVietnamese: "Chào anh, tôi vừa dọn đến nhà kế bên.",
        choices: [
          { id: "a", text: "Nice to meet you! Welcome to the neighborhood." },
          { id: "b", text: "Sorry, I don't live here." },
          { id: "c", text: "Please move your car." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi có hàng xóm mới giới thiệu bản thân, câu trả lời tự nhiên là chào đón họ đến khu phố.",
        wrongAnswerExplanations:
          "'Sorry, I don't live here.' và 'Please move your car.' đều không phù hợp để đáp lại lời chào của hàng xóm mới.",
        usageTip: "Dùng để chào đón một hàng xóm mới vừa dọn đến gần nhà bạn.",
      },
      {
        id: "de-16-3",
        type: "vietnamese_to_english",
        badgeEmoji: "🏠",
        english: "We moved in last week from another state.",
        vietnamese: "Chúng tôi mới dọn đến tuần trước từ một tiểu bang khác.",
        promptContext:
          "Bạn muốn giải thích với hàng xóm rằng gia đình bạn mới chuyển đến từ tiểu bang khác.",
        choices: [
          { id: "a", text: "We moved in last week from another state." },
          { id: "b", text: "We are visiting for the weekend only." },
          { id: "c", text: "We are looking for a house to buy." },
        ],
        correctAnswer: "a",
        explanation:
          "'Moved in last week' nghĩa là 'dọn đến tuần trước' — đúng câu để giải thích thời điểm và lý do bạn có mặt ở đây.",
        wrongAnswerExplanations:
          "'We are visiting for the weekend only.' và 'We are looking for a house to buy.' đều không đúng với việc bạn đã dọn đến ở hẳn.",
        usageTip: "Dùng khi giải thích cho hàng xóm về thời điểm gia đình bạn chuyển đến sống ở đây.",
      },
      {
        id: "de-16-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "If you need anything, just let me know.",
        vietnamese: "Nếu anh cần gì, cứ nói cho tôi biết nhé.",
        prompt: "If you need anything, just let me ___.",
        choices: [
          { id: "a", text: "know" },
          { id: "b", text: "go" },
          { id: "c", text: "pay" },
        ],
        correctAnswer: "a",
        explanation:
          "'Let me know' nghĩa là 'cho tôi biết' — câu nói thân thiện thường dùng khi muốn giúp đỡ hàng xóm.",
        wrongAnswerExplanations:
          "'Go' và 'pay' đều không hợp nghĩa trong câu mời gọi giúp đỡ thân thiện này.",
        usageTip: "Dùng khi bạn muốn nói với hàng xóm rằng bạn sẵn sàng giúp đỡ khi cần.",
      },
      {
        id: "de-16-5",
        type: "conversation_response",
        speaker: "Hàng xóm",
        badgeEmoji: "🍪",
        english: "I baked some cookies, would you like some?",
        vietnamese: "Tôi mới nướng ít bánh quy, anh có muốn ăn không?",
        prompt: "Thank you so much for the warm welcome.",
        promptVietnamese: "Cảm ơn anh nhiều vì đã chào đón nồng nhiệt.",
        choices: [
          { id: "a", text: "That's so kind, yes, I'd love some." },
          { id: "b", text: "No, I already ate lunch." },
          { id: "c", text: "I don't like sweets at all." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi hàng xóm mời bánh, câu trả lời lịch sự và thân thiện nhất là cảm ơn và nhận lời mời.",
        wrongAnswerExplanations:
          "'No, I already ate lunch.' và 'I don't like sweets at all.' đều nghe hơi từ chối cứng nhắc, không phù hợp với lời mời thân thiện.",
        usageTip: "Dùng khi hàng xóm mời bạn một món quà nhỏ để làm quen.",
      },
      {
        id: "de-16-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Let me know if you have any questions about the area.",
        vietnamese: "Cứ hỏi tôi nếu anh có thắc mắc gì về khu vực này.",
        audioText: "Let me know if you have any questions about the area.",
        choices: [
          { id: "a", text: "Cứ hỏi tôi nếu anh có thắc mắc gì về khu vực này." },
          { id: "b", text: "Cứ gọi tôi nếu anh cần mượn tiền." },
          { id: "c", text: "Cứ ghé tôi nếu anh muốn ăn tối." },
        ],
        correctAnswer: "a",
        explanation:
          "'Questions about the area' nghĩa là 'thắc mắc về khu vực' — câu này mời bạn hỏi thêm thông tin về nơi mình mới chuyển đến.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc mượn tiền hay ăn tối, chỉ mời hỏi về khu vực sinh sống.",
        usageTip: "Dùng để hiểu khi hàng xóm mời bạn hỏi thêm về khu phố mới.",
      },
      {
        id: "de-16-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🗑️",
        english: "Trash pickup is every Tuesday morning.",
        vietnamese: "Xe rác đến lấy vào mỗi sáng thứ Ba.",
        prompt: "Trash pickup is every Tuesday morning.",
        choices: [
          { id: "a", text: "Xe rác đến lấy vào mỗi sáng thứ Ba." },
          { id: "b", text: "Chợ họp vào mỗi sáng thứ Ba." },
          { id: "c", text: "Trường học nghỉ vào mỗi thứ Ba." },
        ],
        correctAnswer: "a",
        explanation:
          "'Trash pickup' nghĩa là 'xe rác đến lấy' — thông tin hữu ích thường được hàng xóm chia sẻ khi bạn mới dọn đến.",
        wrongAnswerExplanations:
          "Câu gốc không nói về chợ hay trường học, chỉ nói về lịch lấy rác hàng tuần.",
        usageTip: "Dùng để hiểu thông tin về lịch lấy rác trong khu vực bạn mới chuyển đến.",
      },
      {
        id: "de-16-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "It's nice to finally meet you in person.",
        vietnamese: "Cuối cùng cũng được gặp anh trực tiếp, vui quá.",
        promptContext:
          "Bạn đã nghe nói về người hàng xóm này từ trước và giờ mới có dịp gặp mặt trực tiếp.",
        choices: [
          { id: "a", text: "It's nice to finally meet you in person." },
          { id: "b", text: "It's nice to finally meet you person in." },
          { id: "c", text: "It's nice finally to meet you in person." },
        ],
        correctAnswer: "a",
        explanation:
          "Trật tự đúng là 'meet you in person' — cụm giới từ 'in person' đứng ngay sau tân ngữ 'you'.",
        wrongAnswerExplanations:
          "'It's nice to finally meet you person in.' đảo sai vị trí giới từ 'in'. 'It's nice finally to meet you in person.' đặt trạng từ 'finally' sai vị trí thông thường trong câu.",
        usageTip: "Dùng khi bạn gặp mặt trực tiếp một người bạn chỉ mới biết qua lời kể trước đó.",
      },
      {
        id: "de-16-9",
        type: "situation_response",
        badgeEmoji: "🏡",
        english: "Your house looks really nice.",
        vietnamese: "Nhà anh trông đẹp thật đó.",
        promptContext:
          "Bạn đi ngang nhà hàng xóm và muốn khen ngợi vẻ ngoài ngôi nhà của họ.",
        choices: [
          { id: "a", text: "Your house looks really nice." },
          { id: "b", text: "Your car looks really old." },
          { id: "c", text: "Your dog looks really scary." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi muốn khen nhà hàng xóm, câu tự nhiên và lịch sự nhất là khen trực tiếp về ngôi nhà.",
        wrongAnswerExplanations:
          "'Your car looks really old.' và 'Your dog looks really scary.' đều là lời nhận xét tiêu cực, không phù hợp để làm quen.",
        usageTip: "Dùng khi bạn muốn khen ngợi nhà cửa của hàng xóm để làm quen thân thiện.",
      },
      {
        id: "de-16-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙏",
        english: "Thanks for stopping by to say hello.",
        vietnamese: "Cảm ơn anh đã ghé qua chào hỏi.",
        promptContext:
          "Hàng xóm vừa ghé qua để làm quen, và bạn muốn cảm ơn họ trước khi họ về.",
        choices: [
          { id: "a", text: "Thanks for stopping by to say hello." },
          { id: "b", text: "Thanks for fixing my car today." },
          { id: "c", text: "Thanks for the delicious dinner." },
        ],
        correctAnswer: "a",
        explanation:
          "'Stopping by to say hello' nghĩa là 'ghé qua chào hỏi' — đúng câu để cảm ơn khi hàng xóm ghé thăm làm quen.",
        wrongAnswerExplanations:
          "'Thanks for fixing my car today.' và 'Thanks for the delicious dinner.' đều không đúng với việc hàng xóm chỉ ghé qua chào hỏi.",
        usageTip: "Dùng để cảm ơn khi hàng xóm ghé qua chào hỏi làm quen lần đầu.",
      },
    ],
  },
  {
    id: "de-17",
    slug: "de-17-noi-chuyen-thoi-tiet-1",
    topicId: "daily-english",
    title: "Nói chuyện về thời tiết và cuối tuần",
    description: "Luyện các câu nói chuyện phiếm quen thuộc với hàng xóm.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-17-1",
        type: "situation_response",
        badgeEmoji: "☀️",
        english: "It's such a beautiful day today, isn't it?",
        vietnamese: "Hôm nay trời đẹp thật đó, phải không anh?",
        promptContext:
          "Bạn gặp hàng xóm khi cả hai đang ở ngoài sân vào một ngày nắng đẹp và muốn bắt chuyện.",
        choices: [
          { id: "a", text: "It's such a beautiful day today, isn't it?" },
          { id: "b", text: "It's such an expensive car, isn't it?" },
          { id: "c", text: "It's such a long movie, isn't it?" },
        ],
        correctAnswer: "a",
        explanation:
          "Nói về thời tiết là cách bắt chuyện phổ biến và tự nhiên nhất với hàng xóm ở Mỹ.",
        wrongAnswerExplanations:
          "'It's such an expensive car, isn't it?' và 'It's such a long movie, isn't it?' không liên quan đến ngữ cảnh gặp nhau ngoài trời nắng đẹp.",
        usageTip: "Dùng để bắt chuyện xã giao với hàng xóm về thời tiết đẹp.",
      },
      {
        id: "de-17-2",
        type: "conversation_response",
        speaker: "Hàng xóm",
        badgeEmoji: "🙂",
        english: "Yes, perfect weather for gardening.",
        vietnamese: "Đúng vậy, thời tiết tuyệt vời để làm vườn.",
        prompt: "It's such a beautiful day today, isn't it?",
        promptVietnamese: "Hôm nay trời đẹp thật đó, phải không anh?",
        choices: [
          { id: "a", text: "Yes, perfect weather for gardening." },
          { id: "b", text: "No, my car is broken." },
          { id: "c", text: "No, I don't have any pets." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi đồng ý về thời tiết đẹp, câu trả lời tự nhiên là nói thêm về việc gì đó phù hợp làm trong ngày đẹp trời.",
        wrongAnswerExplanations:
          "'No, my car is broken.' và 'No, I don't have any pets.' hoàn toàn lạc đề, không liên quan đến câu hỏi về thời tiết.",
        usageTip: "Dùng để đáp lại một cách tự nhiên khi ai đó nhận xét về thời tiết đẹp.",
      },
      {
        id: "de-17-3",
        type: "vietnamese_to_english",
        badgeEmoji: "🎉",
        english: "Do you have any plans for the weekend?",
        vietnamese: "Cuối tuần này anh có dự định gì không?",
        promptContext:
          "Bạn muốn hỏi thăm hàng xóm xem họ có kế hoạch gì cho cuối tuần sắp tới không.",
        choices: [
          { id: "a", text: "Do you have any plans for the weekend?" },
          { id: "b", text: "Do you have any tools for the garage?" },
          { id: "c", text: "Do you have any pets for the house?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Plans for the weekend' nghĩa là 'dự định cho cuối tuần' — đúng câu hỏi xã giao phổ biến với hàng xóm.",
        wrongAnswerExplanations:
          "'Do you have any tools for the garage?' và 'Do you have any pets for the house?' đều không liên quan đến việc hỏi thăm kế hoạch cuối tuần.",
        usageTip: "Dùng khi bạn muốn hỏi thăm hàng xóm về kế hoạch cuối tuần của họ.",
      },
      {
        id: "de-17-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "We're just staying home and relaxing this weekend.",
        vietnamese: "Cuối tuần này chúng tôi chỉ ở nhà nghỉ ngơi thôi.",
        prompt: "We're just staying home and ___ this weekend.",
        choices: [
          { id: "a", text: "relaxing" },
          { id: "b", text: "working" },
          { id: "c", text: "shopping" },
        ],
        correctAnswer: "a",
        explanation:
          "'Relaxing' nghĩa là 'nghỉ ngơi' — đúng từ để nói về cuối tuần thư giãn tại nhà.",
        wrongAnswerExplanations:
          "'Working' và 'shopping' đều không phù hợp với ngữ cảnh nói về việc ở nhà nghỉ ngơi.",
        usageTip: "Dùng khi bạn muốn nói về việc dành cuối tuần ở nhà thư giãn.",
      },
      {
        id: "de-17-5",
        type: "conversation_response",
        speaker: "Hàng xóm",
        badgeEmoji: "🌧️",
        english: "I heard it might rain later this week.",
        vietnamese: "Tôi nghe nói cuối tuần này có thể sẽ mưa đó.",
        prompt: "The weather has been so nice lately.",
        promptVietnamese: "Dạo này thời tiết đẹp thật đó.",
        choices: [
          { id: "a", text: "Really? I hope it doesn't rain on the weekend." },
          { id: "b", text: "Really? I hope my car is fast." },
          { id: "c", text: "Really? I hope the store is open." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe tin có thể mưa, câu trả lời tự nhiên là bày tỏ hy vọng thời tiết vẫn tốt, đặc biệt là cho cuối tuần.",
        wrongAnswerExplanations:
          "'Really? I hope my car is fast.' và 'Really? I hope the store is open.' đều lạc đề, không liên quan đến chủ đề thời tiết.",
        usageTip: "Dùng khi trò chuyện về dự báo thời tiết sắp tới với hàng xóm.",
      },
      {
        id: "de-17-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I'm thinking about having a barbecue this Saturday.",
        vietnamese: "Tôi đang định tổ chức tiệc nướng vào thứ Bảy này.",
        audioText: "I'm thinking about having a barbecue this Saturday.",
        choices: [
          { id: "a", text: "Tôi đang định tổ chức tiệc nướng vào thứ Bảy này." },
          { id: "b", text: "Tôi đang định sửa lại hàng rào vào thứ Bảy này." },
          { id: "c", text: "Tôi đang định đi du lịch vào thứ Bảy này." },
        ],
        correctAnswer: "a",
        explanation:
          "'Having a barbecue' nghĩa là 'tổ chức tiệc nướng' — câu này nói về kế hoạch cuối tuần của hàng xóm.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc sửa hàng rào hay đi du lịch, chỉ nói về việc tổ chức tiệc nướng.",
        usageTip: "Dùng để hiểu khi hàng xóm chia sẻ kế hoạch cuối tuần của họ.",
      },
      {
        id: "de-17-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🌸",
        english: "Spring is my favorite season here.",
        vietnamese: "Mùa xuân là mùa tôi thích nhất ở đây.",
        prompt: "Spring is my favorite season here.",
        choices: [
          { id: "a", text: "Mùa xuân là mùa tôi thích nhất ở đây." },
          { id: "b", text: "Mùa đông là mùa tôi ghét nhất ở đây." },
          { id: "c", text: "Mùa hè là mùa bận rộn nhất ở đây." },
        ],
        correctAnswer: "a",
        explanation:
          "'My favorite season' nghĩa là 'mùa tôi thích nhất' — câu này chia sẻ sở thích cá nhân về thời tiết theo mùa.",
        wrongAnswerExplanations:
          "Câu gốc không nói về mùa đông hay mùa hè, chỉ nói về việc thích mùa xuân nhất.",
        usageTip: "Dùng khi trò chuyện về sở thích mùa trong năm với hàng xóm.",
      },
      {
        id: "de-17-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "You should come over for the barbecue this weekend.",
        vietnamese: "Anh nên qua nhà ăn tiệc nướng cuối tuần này đi.",
        promptContext:
          "Bạn muốn mời hàng xóm tham gia buổi tiệc nướng bạn tổ chức vào cuối tuần.",
        choices: [
          { id: "a", text: "You should come over for the barbecue this weekend." },
          { id: "b", text: "You should come for over the barbecue this weekend." },
          { id: "c", text: "You should come over the barbecue for this weekend." },
        ],
        correctAnswer: "a",
        explanation:
          "'Come over for' là cụm động từ nghĩa là 'ghé qua để tham gia' — trật tự đúng giữ nguyên cụm này liền nhau.",
        wrongAnswerExplanations:
          "'You should come for over the barbecue...' tách sai cụm động từ 'come over'. 'You should come over the barbecue for...' đặt sai vị trí giới từ 'for'.",
        usageTip: "Dùng khi mời hàng xóm đến tham gia một sự kiện nhỏ tại nhà bạn.",
      },
      {
        id: "de-17-9",
        type: "situation_response",
        badgeEmoji: "🙌",
        english: "I'd love to come, thanks for inviting me.",
        vietnamese: "Tôi rất muốn đến, cảm ơn anh đã mời.",
        promptContext:
          "Hàng xóm vừa mời bạn tham gia tiệc nướng cuối tuần, và bạn muốn nhận lời mời một cách vui vẻ.",
        choices: [
          { id: "a", text: "I'd love to come, thanks for inviting me." },
          { id: "b", text: "I don't like barbecue food at all." },
          { id: "c", text: "I'm too busy to talk right now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được mời tham gia, câu trả lời lịch sự và vui vẻ nhất là nhận lời và cảm ơn.",
        wrongAnswerExplanations:
          "'I don't like barbecue food at all.' và 'I'm too busy to talk right now.' đều nghe hơi thô lỗ khi đáp lại lời mời thân thiện.",
        usageTip: "Dùng khi bạn muốn nhận lời mời tham gia sự kiện của hàng xóm.",
      },
      {
        id: "de-17-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "What time should I come on Saturday?",
        vietnamese: "Tôi nên đến lúc mấy giờ vào thứ Bảy vậy?",
        promptContext:
          "Bạn đã nhận lời mời tham gia tiệc và muốn hỏi rõ giờ giấc cụ thể.",
        choices: [
          { id: "a", text: "What time should I come on Saturday?" },
          { id: "b", text: "What time should I leave on Saturday?" },
          { id: "c", text: "What time should I sleep on Saturday?" },
        ],
        correctAnswer: "a",
        explanation:
          "'What time should I come' nghĩa là 'tôi nên đến lúc mấy giờ' — đúng câu hỏi để xác nhận giờ giấc tham gia sự kiện.",
        wrongAnswerExplanations:
          "'What time should I leave on Saturday?' hỏi về giờ rời đi, không phù hợp khi bạn chưa đến. 'What time should I sleep on Saturday?' hoàn toàn lạc đề.",
        usageTip: "Dùng khi bạn cần hỏi rõ giờ giấc trước khi đến dự một sự kiện.",
      },
    ],
  },
  {
    id: "de-18",
    slug: "de-18-nho-hang-xom-giup-do-1",
    topicId: "daily-english",
    title: "Nhờ hàng xóm giúp một việc nhỏ",
    description: "Học cách nhờ hàng xóm giúp mượn đồ hoặc trông thư từ khi vắng nhà.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-18-1",
        type: "situation_response",
        badgeEmoji: "🥚",
        english: "Could I borrow a cup of sugar?",
        vietnamese: "Tôi mượn anh một cốc đường được không?",
        promptContext:
          "Bạn đang nấu ăn thì phát hiện hết đường, và muốn hỏi mượn hàng xóm một ít.",
        choices: [
          { id: "a", text: "Could I borrow a cup of sugar?" },
          { id: "b", text: "Could I borrow your car keys?" },
          { id: "c", text: "Could I borrow some money?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Borrow a cup of sugar' là câu hỏi mượn đồ nhỏ rất quen thuộc giữa hàng xóm với nhau ở Mỹ.",
        wrongAnswerExplanations:
          "'Could I borrow your car keys?' và 'Could I borrow some money?' là những yêu cầu lớn hơn, không phù hợp với tình huống thiếu nguyên liệu nấu ăn.",
        usageTip: "Dùng khi bạn cần mượn một món đồ nhỏ, thường là nguyên liệu nấu ăn, từ hàng xóm.",
      },
      {
        id: "de-18-2",
        type: "conversation_response",
        speaker: "Hàng xóm",
        badgeEmoji: "😊",
        english: "Of course, let me get that for you.",
        vietnamese: "Dĩ nhiên rồi, để tôi lấy cho anh.",
        prompt: "Could I borrow a cup of sugar?",
        promptVietnamese: "Tôi mượn anh một cốc đường được không?",
        choices: [
          { id: "a", text: "Of course, let me get that for you." },
          { id: "b", text: "Sorry, I'm not home right now." },
          { id: "c", text: "That will be five dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi hàng xóm nhờ mượn đồ nhỏ, câu trả lời thân thiện nhất là đồng ý giúp ngay.",
        wrongAnswerExplanations:
          "'Sorry, I'm not home right now.' không hợp lý khi họ đang trực tiếp trả lời. 'That will be five dollars.' không phù hợp vì mượn đồ nhỏ giữa hàng xóm thường không tính tiền.",
        usageTip: "Dùng khi bạn đồng ý giúp hàng xóm mượn một món đồ nhỏ.",
      },
      {
        id: "de-18-3",
        type: "vietnamese_to_english",
        badgeEmoji: "📬",
        english: "Can you watch my mail while I'm on vacation?",
        vietnamese: "Anh trông giúp thư từ của tôi trong lúc tôi đi nghỉ được không?",
        promptContext:
          "Bạn sắp đi nghỉ mát một tuần và muốn nhờ hàng xóm để ý thư từ giúp mình.",
        choices: [
          { id: "a", text: "Can you watch my mail while I'm on vacation?" },
          { id: "b", text: "Can you watch my dog while I'm at work?" },
          { id: "c", text: "Can you watch my house while I'm cooking?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Watch my mail while I'm on vacation' nghĩa là 'trông thư từ trong lúc đi nghỉ' — đúng câu nhờ vả trong tình huống này.",
        wrongAnswerExplanations:
          "'Can you watch my dog while I'm at work?' và 'Can you watch my house while I'm cooking?' đều không đúng với việc nhờ trông thư khi đi nghỉ.",
        usageTip: "Dùng khi bạn sắp đi xa và muốn nhờ hàng xóm trông giúp thư từ.",
      },
      {
        id: "de-18-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "I'll be happy to pick up your mail.",
        vietnamese: "Tôi sẵn lòng lấy giúp thư của anh.",
        prompt: "I'll be happy to pick up your ___.",
        choices: [
          { id: "a", text: "mail" },
          { id: "b", text: "salary" },
          { id: "c", text: "receipt" },
        ],
        correctAnswer: "a",
        explanation:
          "'Pick up your mail' nghĩa là 'lấy giúp thư của anh' — đúng câu trả lời khi đồng ý giúp trông thư từ.",
        wrongAnswerExplanations:
          "'Salary' (lương) và 'receipt' (hóa đơn) không phù hợp trong ngữ cảnh nhờ trông thư từ khi vắng nhà.",
        usageTip: "Dùng khi bạn đồng ý giúp hàng xóm lấy thư trong lúc họ đi vắng.",
      },
      {
        id: "de-18-5",
        type: "conversation_response",
        speaker: "Hàng xóm",
        badgeEmoji: "🔧",
        english: "Sure, I have a ladder you can use.",
        vietnamese: "Được chứ, tôi có cái thang anh dùng được đó.",
        prompt: "Do you happen to have a ladder I could borrow?",
        promptVietnamese: "Anh có cái thang nào tôi mượn được không?",
        choices: [
          { id: "a", text: "Sure, I have a ladder you can use." },
          { id: "b", text: "Sorry, I don't have any tools." },
          { id: "c", text: "Sure, that's fifty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi hàng xóm hỏi mượn thang, câu trả lời thân thiện là xác nhận có và sẵn lòng cho mượn.",
        wrongAnswerExplanations:
          "'Sorry, I don't have any tools.' mâu thuẫn nếu bạn thực sự có thang. 'Sure, that's fifty dollars.' không phù hợp vì cho mượn đồ giữa hàng xóm thường miễn phí.",
        usageTip: "Dùng khi bạn đồng ý cho hàng xóm mượn một dụng cụ trong nhà.",
      },
      {
        id: "de-18-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I'll bring it back to you tomorrow morning.",
        vietnamese: "Tôi sẽ trả lại cho anh vào sáng mai.",
        audioText: "I'll bring it back to you tomorrow morning.",
        choices: [
          { id: "a", text: "Tôi sẽ trả lại cho anh vào sáng mai." },
          { id: "b", text: "Tôi sẽ mua lại cho anh cái mới." },
          { id: "c", text: "Tôi sẽ giữ nó luôn cho mình." },
        ],
        correctAnswer: "a",
        explanation:
          "'Bring it back tomorrow morning' nghĩa là 'trả lại vào sáng mai' — câu này cam kết thời gian trả đồ đã mượn.",
        wrongAnswerExplanations:
          "Câu gốc không nói mua cái mới hay giữ luôn, chỉ nói về việc trả lại vào ngày hôm sau.",
        usageTip: "Dùng khi bạn muốn cam kết thời gian trả lại món đồ đã mượn từ hàng xóm.",
      },
      {
        id: "de-18-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🚗",
        english: "Could you move your car a little? I can't get out.",
        vietnamese: "Anh dời xe một chút được không? Tôi không ra được.",
        prompt: "Could you move your car a little? I can't get out.",
        choices: [
          { id: "a", text: "Anh dời xe một chút được không? Tôi không ra được." },
          { id: "b", text: "Anh bán xe cho tôi được không? Tôi cần một chiếc." },
          { id: "c", text: "Anh rửa xe giúp tôi được không? Xe tôi dơ quá." },
        ],
        correctAnswer: "a",
        explanation:
          "'Move your car' nghĩa là 'dời xe' — đúng câu nhờ vả khi xe hàng xóm đang chắn lối ra vào của bạn.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc mua xe hay rửa xe, chỉ nhờ dời xe để có lối đi ra.",
        usageTip: "Dùng khi xe của hàng xóm đang chắn lối và bạn cần nhờ họ dời đi.",
      },
      {
        id: "de-18-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Would you mind keeping an eye on my house this weekend?",
        vietnamese: "Anh có phiền để ý giúp nhà tôi cuối tuần này không?",
        promptContext:
          "Bạn sắp đi xa cuối tuần và muốn nhờ hàng xóm để ý căn nhà giúp mình.",
        choices: [
          { id: "a", text: "Would you mind keeping an eye on my house this weekend?" },
          { id: "b", text: "Would you mind keeping an eye my house on this weekend?" },
          { id: "c", text: "Would you mind keep an eye on my house this weekend?" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'mind' cần động từ dạng V-ing ('keeping'), và cụm 'keep an eye on' phải giữ nguyên thứ tự với giới từ 'on' theo sau 'eye'.",
        wrongAnswerExplanations:
          "'...keeping an eye my house on this weekend?' đặt sai vị trí giới từ 'on'. 'Would you mind keep an eye...' thiếu đuôi '-ing' sau 'mind', sai ngữ pháp.",
        usageTip: "Dùng khi nhờ hàng xóm để ý căn nhà giúp trong lúc bạn đi vắng.",
      },
      {
        id: "de-18-9",
        type: "situation_response",
        badgeEmoji: "🙏",
        english: "I really appreciate your help with this.",
        vietnamese: "Tôi thật sự cảm kích vì anh đã giúp việc này.",
        promptContext:
          "Hàng xóm vừa đồng ý giúp bạn trông nhà trong lúc đi vắng, và bạn muốn bày tỏ lòng biết ơn.",
        choices: [
          { id: "a", text: "I really appreciate your help with this." },
          { id: "b", text: "I really don't need your help." },
          { id: "c", text: "I really think you should charge me." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được giúp đỡ, câu trả lời tự nhiên và chân thành nhất là bày tỏ sự biết ơn với sự giúp đỡ đó.",
        wrongAnswerExplanations:
          "'I really don't need your help.' và 'I really think you should charge me.' đều không phù hợp khi bạn vừa nhận được sự giúp đỡ chân thành.",
        usageTip: "Dùng để bày tỏ lòng biết ơn khi hàng xóm giúp đỡ bạn một việc.",
      },
      {
        id: "de-18-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🎁",
        english: "Let me know if you ever need help too.",
        vietnamese: "Nếu anh cần giúp gì thì cứ nói với tôi nhé.",
        promptContext:
          "Sau khi được hàng xóm giúp đỡ, bạn muốn nói rằng bạn cũng sẵn sàng giúp lại họ khi cần.",
        choices: [
          { id: "a", text: "Let me know if you ever need help too." },
          { id: "b", text: "Let me know if you ever sell your house." },
          { id: "c", text: "Let me know if you ever change your number." },
        ],
        correctAnswer: "a",
        explanation:
          "'If you ever need help too' nghĩa là 'nếu anh cần giúp gì thì' — đúng câu để đáp lại thiện chí giúp đỡ qua lại giữa hàng xóm.",
        wrongAnswerExplanations:
          "'Let me know if you ever sell your house.' và 'Let me know if you ever change your number.' đều không liên quan đến việc đáp lại sự giúp đỡ.",
        usageTip: "Dùng khi bạn muốn thể hiện thiện chí sẵn sàng giúp đỡ lại hàng xóm.",
      },
    ],
  },
  {
    id: "de-19",
    slug: "de-19-moi-hang-xom-qua-nha-1",
    topicId: "daily-english",
    title: "Mời hàng xóm qua nhà chơi",
    description: "Luyện câu mời hàng xóm ghé nhà ăn uống hoặc trò chuyện.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-19-1",
        type: "situation_response",
        badgeEmoji: "🍽️",
        english: "Would you like to come over for dinner sometime?",
        vietnamese: "Anh có muốn ghé qua nhà ăn tối lúc nào đó không?",
        promptContext:
          "Bạn muốn làm thân hơn với hàng xóm và quyết định mời họ ghé nhà ăn tối một hôm nào đó.",
        choices: [
          { id: "a", text: "Would you like to come over for dinner sometime?" },
          { id: "b", text: "Would you like to buy my house sometime?" },
          { id: "c", text: "Would you like to fix my car sometime?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Come over for dinner' nghĩa là 'ghé nhà ăn tối' — đúng câu mời khi muốn mời hàng xóm đến chơi.",
        wrongAnswerExplanations:
          "'Would you like to buy my house sometime?' và 'Would you like to fix my car sometime?' hoàn toàn không liên quan đến việc mời ăn tối.",
        usageTip: "Dùng khi bạn muốn mời hàng xóm ghé nhà ăn tối để làm quen thân hơn.",
      },
      {
        id: "de-19-2",
        type: "conversation_response",
        speaker: "Hàng xóm",
        badgeEmoji: "😊",
        english: "That sounds great, what day works for you?",
        vietnamese: "Nghe hay đó, ngày nào tiện cho anh vậy?",
        prompt: "Would you like to come over for dinner sometime?",
        promptVietnamese: "Anh có muốn ghé qua nhà ăn tối lúc nào đó không?",
        choices: [
          { id: "a", text: "That sounds great, what day works for you?" },
          { id: "b", text: "No, I don't eat dinner ever." },
          { id: "c", text: "I already have a house." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được mời ăn tối, câu trả lời tự nhiên là nhận lời vui vẻ và hỏi thêm về thời gian cụ thể.",
        wrongAnswerExplanations:
          "'No, I don't eat dinner ever.' nghe không tự nhiên vì ai cũng ăn tối. 'I already have a house.' hoàn toàn lạc đề, không liên quan đến lời mời ăn tối.",
        usageTip: "Dùng khi bạn nhận lời mời ăn tối và muốn hỏi thêm về ngày giờ cụ thể.",
      },
      {
        id: "de-19-3",
        type: "vietnamese_to_english",
        badgeEmoji: "🎂",
        english: "We're having a small party this Saturday, come join us.",
        vietnamese: "Cuối tuần này chúng tôi có tiệc nhỏ, mời anh đến chung vui.",
        promptContext:
          "Bạn tổ chức một buổi tiệc nhỏ vào cuối tuần và muốn mời hàng xóm tham gia cùng.",
        choices: [
          { id: "a", text: "We're having a small party this Saturday, come join us." },
          { id: "b", text: "We're having a small problem this Saturday, please help us." },
          { id: "c", text: "We're having a small meeting this Saturday, please attend." },
        ],
        correctAnswer: "a",
        explanation:
          "'Having a small party... come join us' nghĩa là 'có tiệc nhỏ... mời đến chung vui' — đúng câu mời tham gia sự kiện vui vẻ.",
        wrongAnswerExplanations:
          "'We're having a small problem...' và 'We're having a small meeting...' đều nghe như tình huống nghiêm túc hoặc công việc, không phù hợp với lời mời tiệc vui.",
        usageTip: "Dùng khi bạn muốn mời hàng xóm tham gia một bữa tiệc nhỏ tại nhà.",
      },
      {
        id: "de-19-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "Feel free to bring your family along.",
        vietnamese: "Cứ thoải mái dẫn gia đình đi cùng nhé.",
        prompt: "Feel free to bring your family ___.",
        choices: [
          { id: "a", text: "along" },
          { id: "b", text: "away" },
          { id: "c", text: "back" },
        ],
        correctAnswer: "a",
        explanation:
          "'Bring your family along' nghĩa là 'dẫn gia đình đi cùng' — đúng cụm từ khi mời ai đó mang theo người thân.",
        wrongAnswerExplanations:
          "'Away' (đi xa) và 'back' (quay lại) không hợp nghĩa trong ngữ cảnh mời ai đó dẫn gia đình đến cùng.",
        usageTip: "Dùng khi mời hàng xóm dẫn theo gia đình cùng tham gia sự kiện.",
      },
      {
        id: "de-19-5",
        type: "conversation_response",
        speaker: "Hàng xóm",
        badgeEmoji: "🍲",
        english: "Should I bring something, like a dish?",
        vietnamese: "Tôi có nên mang gì theo không, như một món ăn chẳng hạn?",
        prompt: "We're having a get-together this Saturday.",
        promptVietnamese: "Cuối tuần này chúng tôi có buổi họp mặt nhỏ.",
        choices: [
          { id: "a", text: "Should I bring something, like a dish?" },
          { id: "b", text: "Should I fix your roof this weekend?" },
          { id: "c", text: "Should I sell my car this weekend?" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được mời tham gia họp mặt, câu hỏi lịch sự thường thấy là hỏi xem có cần mang theo món gì không.",
        wrongAnswerExplanations:
          "'Should I fix your roof this weekend?' và 'Should I sell my car this weekend?' hoàn toàn không liên quan đến việc tham gia họp mặt.",
        usageTip: "Dùng khi được mời tham gia tiệc và muốn hỏi có cần mang theo món ăn không.",
      },
      {
        id: "de-19-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "You don't need to bring anything, just yourself.",
        vietnamese: "Anh không cần mang gì cả, đến người là được rồi.",
        audioText: "You don't need to bring anything, just yourself.",
        choices: [
          { id: "a", text: "Anh không cần mang gì cả, đến người là được rồi." },
          { id: "b", text: "Anh cần mang theo tiền mặt để vào cửa." },
          { id: "c", text: "Anh cần mang theo giấy mời để vào cửa." },
        ],
        correctAnswer: "a",
        explanation:
          "'Don't need to bring anything, just yourself' nghĩa là 'không cần mang gì, đến người là được' — câu trấn an khách mời không cần chuẩn bị gì.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc mang tiền mặt hay giấy mời, chỉ nói khách không cần mang gì cả.",
        usageTip: "Dùng để hiểu khi chủ nhà nói khách không cần mang theo gì khi đến chơi.",
      },
      {
        id: "de-19-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🕕",
        english: "We usually start around six in the evening.",
        vietnamese: "Chúng tôi thường bắt đầu khoảng sáu giờ tối.",
        prompt: "We usually start around six in the evening.",
        choices: [
          { id: "a", text: "Chúng tôi thường bắt đầu khoảng sáu giờ tối." },
          { id: "b", text: "Chúng tôi thường kết thúc khoảng sáu giờ sáng." },
          { id: "c", text: "Chúng tôi thường nghỉ khoảng sáu ngày một lần." },
        ],
        correctAnswer: "a",
        explanation:
          "'Start around six in the evening' nghĩa là 'bắt đầu khoảng sáu giờ tối' — thông tin về giờ giấc của buổi tiệc.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc kết thúc vào buổi sáng hay nghỉ theo chu kỳ ngày, chỉ nói về giờ bắt đầu buổi tối.",
        usageTip: "Dùng để hiểu thông tin về giờ giấc bắt đầu của một buổi tụ họp.",
      },
      {
        id: "de-19-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Thanks for having us, we had a wonderful time.",
        vietnamese: "Cảm ơn đã mời chúng tôi, chúng tôi đã có khoảng thời gian tuyệt vời.",
        promptContext:
          "Sau khi tham gia bữa tiệc của hàng xóm và chuẩn bị ra về, bạn muốn cảm ơn họ.",
        choices: [
          { id: "a", text: "Thanks for having us, we had a wonderful time." },
          { id: "b", text: "Thanks for having us, we had wonderful a time." },
          { id: "c", text: "Thanks having for us, we had a wonderful time." },
        ],
        correctAnswer: "a",
        explanation:
          "Trật tự đúng là 'a wonderful time' — mạo từ 'a' đứng trước tính từ 'wonderful' rồi mới đến danh từ 'time'.",
        wrongAnswerExplanations:
          "'...we had wonderful a time.' đặt sai vị trí mạo từ 'a'. 'Thanks having for us...' đảo sai vị trí giới từ 'for'.",
        usageTip: "Dùng để cảm ơn chủ nhà sau khi tham gia một buổi tiệc vui vẻ.",
      },
      {
        id: "de-19-9",
        type: "situation_response",
        badgeEmoji: "🙌",
        english: "We should do this again sometime.",
        vietnamese: "Lần sau mình nên làm vầy nữa nhé.",
        promptContext:
          "Sau một buổi tụ họp vui vẻ với hàng xóm, bạn muốn đề nghị sẽ gặp lại và làm điều tương tự lần sau.",
        choices: [
          { id: "a", text: "We should do this again sometime." },
          { id: "b", text: "We should never do this again." },
          { id: "c", text: "We should avoid each other now." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau một buổi vui vẻ, câu nói tự nhiên và tích cực nhất là đề nghị gặp lại và làm điều tương tự lần sau.",
        wrongAnswerExplanations:
          "'We should never do this again.' và 'We should avoid each other now.' đều mang nghĩa tiêu cực, không phù hợp sau một buổi tụ họp vui vẻ.",
        usageTip: "Dùng khi bạn muốn đề nghị tiếp tục gặp gỡ vui vẻ với hàng xóm trong tương lai.",
      },
      {
        id: "de-19-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "It was great getting to know you better.",
        vietnamese: "Thật vui vì đã hiểu anh hơn qua buổi hôm nay.",
        promptContext:
          "Sau buổi tụ họp, bạn muốn nói với hàng xóm rằng bạn cảm thấy vui vì đã hiểu họ hơn.",
        choices: [
          { id: "a", text: "It was great getting to know you better." },
          { id: "b", text: "It was great selling my old furniture." },
          { id: "c", text: "It was great finding a new job." },
        ],
        correctAnswer: "a",
        explanation:
          "'Getting to know you better' nghĩa là 'hiểu anh hơn' — đúng câu để bày tỏ cảm xúc sau khi có dịp trò chuyện gần gũi hơn.",
        wrongAnswerExplanations:
          "'It was great selling my old furniture.' và 'It was great finding a new job.' hoàn toàn không liên quan đến việc làm quen với hàng xóm.",
        usageTip: "Dùng để bày tỏ niềm vui khi có dịp hiểu hàng xóm hơn qua một buổi gặp gỡ.",
      },
    ],
  },
  {
    id: "de-20",
    slug: "de-20-tro-chuyen-khu-pho-1",
    topicId: "daily-english",
    title: "Trò chuyện về khu phố",
    description: "Luyện các câu nói chuyện về khu phố, tiện ích xung quanh với hàng xóm.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-20-1",
        type: "situation_response",
        badgeEmoji: "🏘️",
        english: "How long have you lived in this neighborhood?",
        vietnamese: "Anh sống ở khu này bao lâu rồi vậy?",
        promptContext:
          "Bạn muốn hỏi thăm hàng xóm xem họ đã sống ở khu vực này bao lâu rồi.",
        choices: [
          { id: "a", text: "How long have you lived in this neighborhood?" },
          { id: "b", text: "How long have you worked at your job?" },
          { id: "c", text: "How long have you owned that car?" },
        ],
        correctAnswer: "a",
        explanation:
          "'How long have you lived in this neighborhood?' nghĩa là 'sống ở khu này bao lâu rồi' — đúng câu hỏi để tìm hiểu về hàng xóm.",
        wrongAnswerExplanations:
          "'How long have you worked at your job?' và 'How long have you owned that car?' đều không liên quan đến việc hỏi về thời gian sống ở khu phố.",
        usageTip: "Dùng khi bạn muốn hỏi thăm hàng xóm về thời gian họ sống ở khu vực này.",
      },
      {
        id: "de-20-2",
        type: "conversation_response",
        speaker: "Hàng xóm",
        badgeEmoji: "🙂",
        english: "About ten years now, it's a great area.",
        vietnamese: "Khoảng mười năm rồi, đây là khu vực tuyệt vời đó.",
        prompt: "How long have you lived in this neighborhood?",
        promptVietnamese: "Anh sống ở khu này bao lâu rồi vậy?",
        choices: [
          { id: "a", text: "About ten years now, it's a great area." },
          { id: "b", text: "I don't like this neighborhood at all." },
          { id: "c", text: "I never lived here before." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi về thời gian sống, câu trả lời tự nhiên là nêu số năm và thêm nhận xét tích cực về khu vực.",
        wrongAnswerExplanations:
          "'I don't like this neighborhood at all.' và 'I never lived here before.' đều mâu thuẫn hoặc không phù hợp khi họ vẫn đang sống ở đó.",
        usageTip: "Dùng khi trả lời về thời gian bạn đã sống ở một khu vực.",
      },
      {
        id: "de-20-3",
        type: "vietnamese_to_english",
        badgeEmoji: "🛒",
        english: "Is there a good grocery store nearby?",
        vietnamese: "Gần đây có siêu thị nào tốt không vậy?",
        promptContext:
          "Bạn mới dọn đến và muốn hỏi hàng xóm xem có siêu thị nào gần đó tốt để mua sắm.",
        choices: [
          { id: "a", text: "Is there a good grocery store nearby?" },
          { id: "b", text: "Is there a good school nearby?" },
          { id: "c", text: "Is there a good hospital nearby?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Good grocery store nearby' nghĩa là 'siêu thị tốt gần đây' — đúng câu hỏi khi bạn cần tìm nơi mua sắm gần nhà.",
        wrongAnswerExplanations:
          "'Is there a good school nearby?' và 'Is there a good hospital nearby?' hỏi về trường học hoặc bệnh viện, không đúng ý câu gốc về siêu thị.",
        usageTip: "Dùng khi bạn mới chuyển đến và muốn tìm siêu thị gần nhà.",
      },
      {
        id: "de-20-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "The grocery store is just a five-minute walk.",
        vietnamese: "Siêu thị chỉ cách đây năm phút đi bộ thôi.",
        prompt: "The grocery store is just a five-minute ___.",
        choices: [
          { id: "a", text: "walk" },
          { id: "b", text: "call" },
          { id: "c", text: "wait" },
        ],
        correctAnswer: "a",
        explanation:
          "'A five-minute walk' nghĩa là 'năm phút đi bộ' — cách nói phổ biến để mô tả khoảng cách gần.",
        wrongAnswerExplanations:
          "'Call' (cuộc gọi) và 'wait' (chờ đợi) không phù hợp về nghĩa khi mô tả khoảng cách địa lý.",
        usageTip: "Dùng để hiểu cách mô tả khoảng cách bằng thời gian đi bộ.",
      },
      {
        id: "de-20-5",
        type: "conversation_response",
        speaker: "Hàng xóm",
        badgeEmoji: "🚸",
        english: "This area is very safe and quiet for kids.",
        vietnamese: "Khu này rất an toàn và yên tĩnh cho trẻ con.",
        prompt: "Is this a good area to raise kids?",
        promptVietnamese: "Khu này có tốt để nuôi dạy con cái không vậy?",
        choices: [
          { id: "a", text: "This area is very safe and quiet for kids." },
          { id: "b", text: "This area is very loud and busy at night." },
          { id: "c", text: "This area doesn't allow children at all." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi về khu vực nuôi dạy con, câu trả lời tự nhiên là nhận xét về sự an toàn và yên tĩnh nếu đúng vậy.",
        wrongAnswerExplanations:
          "'This area is very loud and busy at night.' nghe tiêu cực và mâu thuẫn với câu hỏi. 'This area doesn't allow children at all.' không hợp lý vì khu dân cư luôn cho phép trẻ em sinh sống.",
        usageTip: "Dùng khi trả lời về mức độ an toàn của khu vực cho trẻ em.",
      },
      {
        id: "de-20-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "There's a nice park just around the corner.",
        vietnamese: "Có một công viên đẹp ngay góc phố đó.",
        audioText: "There's a nice park just around the corner.",
        choices: [
          { id: "a", text: "Có một công viên đẹp ngay góc phố đó." },
          { id: "b", text: "Có một bệnh viện lớn ngay góc phố đó." },
          { id: "c", text: "Có một trạm xe buýt ngay góc phố đó." },
        ],
        correctAnswer: "a",
        explanation:
          "'A nice park just around the corner' nghĩa là 'một công viên đẹp ngay góc phố' — thông tin hữu ích về tiện ích gần nhà.",
        wrongAnswerExplanations:
          "Câu gốc không nói về bệnh viện hay trạm xe buýt, chỉ nói về công viên gần đó.",
        usageTip: "Dùng để hiểu khi hàng xóm giới thiệu về tiện ích gần khu vực sinh sống.",
      },
      {
        id: "de-20-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🚌",
        english: "The bus stop is right at the end of the street.",
        vietnamese: "Trạm xe buýt nằm ngay cuối con đường này.",
        prompt: "The bus stop is right at the end of the street.",
        choices: [
          { id: "a", text: "Trạm xe buýt nằm ngay cuối con đường này." },
          { id: "b", text: "Trạm xe buýt đã ngưng hoạt động lâu rồi." },
          { id: "c", text: "Trạm xe buýt cách đây rất xa." },
        ],
        correctAnswer: "a",
        explanation:
          "'Right at the end of the street' nghĩa là 'ngay cuối con đường' — thông tin chỉ vị trí cụ thể của trạm xe buýt.",
        wrongAnswerExplanations:
          "Câu gốc không nói trạm xe buýt ngưng hoạt động hay ở xa, chỉ nói vị trí ngay cuối đường.",
        usageTip: "Dùng để hiểu thông tin về vị trí trạm xe buýt gần nhà.",
      },
      {
        id: "de-20-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Do you know any good restaurants around here?",
        vietnamese: "Anh có biết nhà hàng nào ngon gần đây không?",
        promptContext:
          "Bạn muốn hỏi hàng xóm gợi ý một nhà hàng ngon gần khu vực sinh sống.",
        choices: [
          { id: "a", text: "Do you know any good restaurants around here?" },
          { id: "b", text: "Do you know any good restaurants here around?" },
          { id: "c", text: "Do you know restaurants any good around here?" },
        ],
        correctAnswer: "a",
        explanation:
          "Trật tự đúng là 'any good restaurants around here' — tính từ 'good' đứng trước danh từ, và 'around here' đứng cuối câu.",
        wrongAnswerExplanations:
          "'Do you know any good restaurants here around?' đảo sai vị trí 'around here'. 'Do you know restaurants any good around here?' đặt sai vị trí 'any good'.",
        usageTip: "Dùng khi hỏi hàng xóm gợi ý nhà hàng ngon trong khu vực.",
      },
      {
        id: "de-20-9",
        type: "situation_response",
        badgeEmoji: "🙌",
        english: "Thanks for all the great recommendations.",
        vietnamese: "Cảm ơn anh đã gợi ý nhiều điều hay quá.",
        promptContext:
          "Sau khi hàng xóm giới thiệu nhiều nơi hay ho trong khu vực, bạn muốn cảm ơn họ.",
        choices: [
          { id: "a", text: "Thanks for all the great recommendations." },
          { id: "b", text: "Thanks for all the loud noises." },
          { id: "c", text: "Thanks for all the traffic today." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được giới thiệu nhiều nơi hữu ích, câu cảm ơn tự nhiên nhất là nói đúng vào những gợi ý vừa nhận được.",
        wrongAnswerExplanations:
          "'Thanks for all the loud noises.' và 'Thanks for all the traffic today.' đều mang nghĩa tiêu cực, không phù hợp để cảm ơn.",
        usageTip: "Dùng để cảm ơn khi hàng xóm giới thiệu nhiều thông tin hữu ích về khu vực.",
      },
      {
        id: "de-20-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "I'm glad we live in the same neighborhood.",
        vietnamese: "Tôi vui vì chúng ta sống cùng khu phố.",
        promptContext:
          "Bạn muốn bày tỏ với hàng xóm rằng bạn thấy vui khi cả hai sống gần nhau.",
        choices: [
          { id: "a", text: "I'm glad we live in the same neighborhood." },
          { id: "b", text: "I'm glad we work at the same company." },
          { id: "c", text: "I'm glad we go to the same school." },
        ],
        correctAnswer: "a",
        explanation:
          "'Live in the same neighborhood' nghĩa là 'sống cùng khu phố' — đúng câu để bày tỏ niềm vui khi có hàng xóm thân thiện.",
        wrongAnswerExplanations:
          "'I'm glad we work at the same company.' và 'I'm glad we go to the same school.' đều không đúng ngữ cảnh nói về hàng xóm cùng khu phố.",
        usageTip: "Dùng để bày tỏ sự vui mừng khi có hàng xóm tốt sống gần nhà.",
      },
    ],
  },
];
