import { Lesson } from "@/types/content";

/**
 * Small Talk — subtopic group 7: Du lịch / vacation (lessons 31-35).
 */
export const smallTalkGroup07: Lesson[] = [
  {
    id: "st-31",
    slug: "st-31-du-lich-1",
    topicId: "small-talk",
    title: "Hỏi khách về chuyến đi sắp tới",
    description: "Cách hỏi khách về kế hoạch du lịch sắp tới của họ.",
    level: "situation",
    section: "GIAO TIẾP THỰC TẾ",
    questions: [
      {
        id: "st-31-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "✈️",
        english: "Yes! I'm going to Hawaii next month.",
        vietnamese: "Vâng! Tháng sau tôi sẽ đi Hawaii.",
        prompt: "Are you traveling anywhere soon?",
        promptVietnamese: "Bạn có sắp đi du lịch đâu không?",
        choices: [
          { id: "a", text: "Yes! I'm going to Hawaii next month." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về chuyến đi sắp tới, mình chia sẻ thật và cụ thể, ví dụ điểm đến và thời gian đi.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về du lịch. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình có sắp đi du lịch đâu không.",
      },
      {
        id: "st-31-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧳",
        english: "Do you have any trips planned this year?",
        vietnamese: "Năm nay bạn có kế hoạch đi du lịch không?",
        promptContext:
          "Khách muốn hỏi thăm chị xem có kế hoạch đi du lịch nào trong năm nay không, một cách bắt chuyện thân thiện.",
        choices: [
          { id: "a", text: "Do you have any trips planned this year?" },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách hỏi thăm về kế hoạch du lịch trong năm, một câu hỏi small talk rất phổ biến và thân thiện.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến câu hỏi về du lịch. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi ai đó về kế hoạch du lịch trong năm.",
      },
      {
        id: "st-31-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🗺️",
        english: "I'm still deciding where to go this year.",
        vietnamese: "Tôi vẫn đang cân nhắc năm nay nên đi đâu.",
        choices: [
          { id: "a", text: "Tôi vẫn đang cân nhắc năm nay nên đi đâu." },
          { id: "b", text: "Tôi sẽ không đi đâu năm nay cả." },
          { id: "c", text: "Tôi đã đặt vé máy bay rồi." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng mình vẫn chưa quyết định nơi sẽ đi du lịch trong năm — một cách trò chuyện tự nhiên về kế hoạch còn đang cân nhắc.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc không đúng với ý nghĩa 'vẫn đang cân nhắc' trong câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ rằng mình chưa quyết định nơi sẽ đi du lịch.",
      },
      {
        id: "st-31-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🏔️",
        english: "You should visit the mountains, it's beautiful there.",
        vietnamese: "Bạn nên đi vùng núi, ở đó đẹp lắm.",
        prompt: "I'm still deciding where to go this year.",
        promptVietnamese: "Tôi vẫn đang cân nhắc năm nay nên đi đâu.",
        choices: [
          { id: "a", text: "You should visit the mountains, it's beautiful there." },
          { id: "b", text: "We take walk-ins every day." },
          { id: "c", text: "This gel color dries fast." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi mình nói còn đang cân nhắc nơi đi du lịch, khách có thể gợi ý một địa điểm đẹp mà họ biết.",
        wrongAnswerExplanations:
          "'We take walk-ins every day.' nói về việc nhận khách không hẹn, không liên quan đến chuyện du lịch. 'This gel color dries fast.' nói về sơn gel khô nhanh, hoàn toàn lạc đề.",
        usageTip: "Dùng khi gợi ý cho ai đó một địa điểm du lịch đẹp mà mình biết.",
      },
      {
        id: "st-31-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "📸",
        english: "That sounds like a great place to visit.",
        vietnamese: "Nghe có vẻ là nơi tuyệt vời để đến thăm.",
        prompt: "That sounds like a great place to ___.",
        choices: [
          { id: "a", text: "visit" },
          { id: "b", text: "visiting" },
          { id: "c", text: "visited" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'place to' phải dùng động từ nguyên mẫu, nên 'visit' là đúng — câu này nghĩa là nơi tuyệt vời để đến thăm.",
        wrongAnswerExplanations:
          "'Visiting' sai vì sau 'to' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'. 'Visited' là dạng quá khứ, không phù hợp ở vị trí này.",
        usageTip: "Dùng khi nhận xét về một địa điểm nghe có vẻ rất đáng để ghé thăm.",
      },
      {
        id: "st-31-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🌴",
        english: "I've always wanted to go somewhere tropical.",
        vietnamese: "Tôi luôn muốn đi một nơi nào đó vùng nhiệt đới.",
        promptContext:
          "Khách chia sẻ với chị rằng khách luôn mơ ước được đi du lịch một nơi có khí hậu nhiệt đới, biển đẹp.",
        choices: [
          { id: "a", text: "I've always wanted to go somewhere tropical." },
          { id: "b", text: "Your nails are ready to dry now." },
          { id: "c", text: "We take card and cash both." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách chia sẻ về ước muốn du lịch một nơi nhiệt đới, một câu chuyện vui và mơ ước nhẹ nhàng.",
        wrongAnswerExplanations:
          "'Your nails are ready to dry now.' nói về việc móng sẵn sàng để khô, không liên quan đến câu hỏi về du lịch. 'We take card and cash both.' nói về thanh toán, hoàn toàn lạc đề.",
        usageTip: "Dùng khi chia sẻ ước muốn đi du lịch một nơi cụ thể.",
      },
      {
        id: "st-31-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "You should definitely make that happen someday.",
        vietnamese: "Bạn nên chắc chắn thực hiện điều đó vào lúc nào đó.",
        audioText: "You should definitely make that happen someday.",
        choices: [
          { id: "a", text: "Bạn nên chắc chắn thực hiện điều đó vào lúc nào đó." },
          { id: "b", text: "Bạn không nên đi du lịch xa." },
          { id: "c", text: "Tôi nghĩ điều đó sẽ không xảy ra." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này khuyến khích khách nên thực hiện ước muốn du lịch của mình vào một lúc nào đó trong tương lai.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa tiêu cực hoặc ngược lại, không đúng với ý nghĩa khuyến khích trong câu nghe.",
        usageTip: "Dùng khi muốn khuyến khích ai đó thực hiện một ước muốn du lịch của họ.",
      },
      {
        id: "st-31-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "💭",
        english: "I hope so! Maybe next year.",
        vietnamese: "Tôi hy vọng vậy! Có thể năm sau.",
        prompt: "You should definitely make that happen someday.",
        promptVietnamese: "Bạn nên chắc chắn thực hiện điều đó vào lúc nào đó.",
        choices: [
          { id: "a", text: "I hope so! Maybe next year." },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được khuyến khích thực hiện ước muốn, khách đáp lại hy vọng và nói có thể sẽ thực hiện vào năm sau.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' hoàn toàn không liên quan đến lời khuyến khích này. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đáp lại một lời khuyến khích với sự hy vọng nhẹ nhàng.",
      },
      {
        id: "st-31-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌍",
        english: "I hope your dream trip comes true soon.",
        vietnamese: "Tôi hy vọng chuyến du lịch mơ ước của bạn sẽ thành sự thật sớm.",
        promptContext: "Chloe muốn chúc khách sớm thực hiện được chuyến du lịch mơ ước của mình.",
        choices: [
          { id: "a", text: "I hope your dream trip comes true soon." },
          { id: "b", text: "I hope your dream trip come true soon." },
          { id: "c", text: "I hope your dream trip comes soon true." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'your dream trip' là số ít nên động từ phải chia là 'comes' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'I hope your dream trip come true soon.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít. 'I hope your dream trip comes soon true.' sai về thứ tự từ ở cuối câu.",
        usageTip: "Dùng khi muốn chúc ai đó sớm thực hiện được ước muốn du lịch của họ.",
      },
      {
        id: "st-31-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "It's never too late to plan a trip.",
        vietnamese: "Không bao giờ là quá muộn để lên kế hoạch một chuyến đi.",
        promptContext: "Chloe muốn động viên khách rằng không bao giờ là quá muộn để lên kế hoạch cho một chuyến du lịch.",
        choices: [
          { id: "a", text: "It's never too late to plan a trip." },
          { id: "b", text: "It's never too late for plan a trip." },
          { id: "c", text: "It's never too late to planning a trip." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'too late to' phải dùng động từ nguyên mẫu, nên 'plan' là đúng — câu này đúng ngữ pháp và tự nhiên.",
        wrongAnswerExplanations:
          "'It's never too late for plan a trip.' sai vì sau 'for' phải dùng dạng '-ing' hoặc dùng 'to + verb', không dùng 'for plan' trực tiếp. 'It's never too late to planning a trip.' sai vì sau 'to' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi động viên ai đó rằng không bao giờ quá muộn để lên kế hoạch du lịch.",
      },
    ],
  },
  {
    id: "st-32",
    slug: "st-32-du-lich-2",
    topicId: "small-talk",
    title: "Hỏi về chuyến đi đã qua",
    description: "Cách hỏi khách về một chuyến du lịch mà họ đã thực hiện gần đây.",
    level: "situation",
    section: "GIAO TIẾP THỰC TẾ",
    questions: [
      {
        id: "st-32-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🏖️",
        english: "It was amazing! I didn't want to come back.",
        vietnamese: "Tuyệt vời lắm! Tôi không muốn về luôn.",
        prompt: "How was your trip?",
        promptVietnamese: "Chuyến đi của bạn thế nào?",
        choices: [
          { id: "a", text: "It was amazing! I didn't want to come back." },
          { id: "b", text: "It's twenty dollars for a pedicure." },
          { id: "c", text: "We're open until nine tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về chuyến đi, mình chia sẻ cảm xúc thật, ví dụ chuyến đi rất tuyệt và không muốn về.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a pedicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về chuyến đi. 'We're open until nine tonight.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi thăm về chuyến du lịch vừa qua của mình.",
      },
      {
        id: "st-32-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "📷",
        english: "Did you take a lot of pictures on your trip?",
        vietnamese: "Chuyến đi bạn có chụp nhiều hình không?",
        promptContext:
          "Chị vừa kể với khách về chuyến du lịch vừa qua, và khách muốn hỏi thêm xem chị có chụp nhiều hình không.",
        choices: [
          { id: "a", text: "Did you take a lot of pictures on your trip?" },
          { id: "b", text: "Your total comes to twenty dollars." },
          { id: "c", text: "We just got new nail colors in." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe kể về chuyến đi, khách có thể hỏi thêm về việc chụp hình để tiếp tục cuộc trò chuyện.",
        wrongAnswerExplanations:
          "'Your total comes to twenty dollars.' nói về giá tiền, không liên quan đến câu hỏi về chụp hình. 'We just got new nail colors in.' nói về màu sơn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thêm về việc chụp hình trong chuyến du lịch của ai đó.",
      },
      {
        id: "st-32-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "📱",
        english: "I have so many pictures, I can't choose my favorite.",
        vietnamese: "Tôi có nhiều hình lắm, không biết chọn tấm nào thích nhất.",
        choices: [
          { id: "a", text: "Tôi có nhiều hình lắm, không biết chọn tấm nào thích nhất." },
          { id: "b", text: "Tôi quên mang máy chụp hình theo." },
          { id: "c", text: "Tôi không chụp hình nào cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng mình chụp được rất nhiều hình đẹp và khó chọn được tấm nào thích nhất — một cách nói vui về chuyến đi.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ rằng mình chụp được rất nhiều hình đẹp trong chuyến đi.",
      },
      {
        id: "st-32-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😍",
        english: "You'll have to show me sometime!",
        vietnamese: "Lúc nào bạn phải cho tôi xem nha!",
        prompt: "I have so many pictures, I can't choose my favorite.",
        promptVietnamese: "Tôi có nhiều hình lắm, không biết chọn tấm nào thích nhất.",
        choices: [
          { id: "a", text: "You'll have to show me sometime!" },
          { id: "b", text: "We only accept cash today." },
          { id: "c", text: "Your nail shape looks perfect." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe mình có nhiều hình đẹp từ chuyến đi, khách có thể tò mò muốn xem vào lúc nào đó.",
        wrongAnswerExplanations:
          "'We only accept cash today.' hoàn toàn không liên quan đến câu chuyện về hình ảnh. 'Your nail shape looks perfect.' là lời khen về hình dáng móng, chưa hợp lúc này.",
        usageTip: "Dùng khi thể hiện sự tò mò và muốn xem hình ảnh từ chuyến đi của ai đó.",
      },
      {
        id: "st-32-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🧳",
        english: "I just got back from my trip yesterday.",
        vietnamese: "Hôm qua tôi mới đi chuyến du lịch về.",
        prompt: "I just got back from my trip ___.",
        choices: [
          { id: "a", text: "yesterday" },
          { id: "b", text: "tomorrow" },
          { id: "c", text: "tonight" },
        ],
        correctAnswer: "a",
        explanation:
          "'Got back' là thì quá khứ nên đi với 'yesterday' nghĩa là 'hôm qua' — đây là đáp án đúng theo nghĩa của câu.",
        wrongAnswerExplanations:
          "'Tomorrow' là thời gian trong tương lai, không phù hợp với động từ quá khứ 'got back'. 'Tonight' cũng là thời gian trong tương lai gần hoặc hiện tại, không hợp với 'got back'.",
        usageTip: "Dùng khi chia sẻ rằng mình mới trở về từ chuyến du lịch vào ngày hôm trước.",
      },
      {
        id: "st-32-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🛫",
        english: "The flight back was so long, I'm exhausted.",
        vietnamese: "Chuyến bay về dài quá, tôi mệt lắm.",
        promptContext:
          "Khách vừa từ chuyến du lịch xa về, và muốn chia sẻ rằng chuyến bay về khá dài và mệt.",
        choices: [
          { id: "a", text: "The flight back was so long, I'm exhausted." },
          { id: "b", text: "The nail dryer is broken today." },
          { id: "c", text: "We need to close early tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách chia sẻ về sự mệt mỏi sau chuyến bay dài, một câu chuyện đời thường rất dễ đồng cảm.",
        wrongAnswerExplanations:
          "'The nail dryer is broken today.' nói về máy sấy móng bị hỏng, hoàn toàn không liên quan. 'We need to close early tonight.' nói về việc đóng cửa sớm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ về sự mệt mỏi sau một chuyến bay dài.",
      },
      {
        id: "st-32-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "You must be ready for a good rest, then.",
        vietnamese: "Vậy chắc bạn cần nghỉ ngơi thật nhiều rồi.",
        audioText: "You must be ready for a good rest, then.",
        choices: [
          { id: "a", text: "Vậy chắc bạn cần nghỉ ngơi thật nhiều rồi." },
          { id: "b", text: "Vậy bạn nên đi du lịch tiếp." },
          { id: "c", text: "Vậy bạn cần đi làm ngay hôm nay." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện sự đồng cảm khi nghe khách mệt sau chuyến bay dài, nói rằng chắc khách cần nghỉ ngơi.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa khác, không đúng với ý nghĩa đồng cảm và quan tâm trong câu nghe.",
        usageTip: "Dùng khi thể hiện sự đồng cảm với ai đó vừa trải qua một chuyến đi mệt mỏi.",
      },
      {
        id: "st-32-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😌",
        english: "Definitely! I'm sleeping in tomorrow for sure.",
        vietnamese: "Chắc chắn rồi! Ngày mai tôi sẽ ngủ nướng.",
        prompt: "You must be ready for a good rest, then.",
        promptVietnamese: "Vậy chắc bạn cần nghỉ ngơi thật nhiều rồi.",
        choices: [
          { id: "a", text: "Definitely! I'm sleeping in tomorrow for sure." },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được nhận xét cần nghỉ ngơi, khách đồng ý mạnh mẽ và chia sẻ kế hoạch ngủ nướng vào ngày sau.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến câu chuyện về nghỉ ngơi. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng ý mạnh mẽ với việc cần nghỉ ngơi sau một chuyến đi dài.",
      },
      {
        id: "st-32-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌙",
        english: "You definitely deserve a good night's sleep.",
        vietnamese: "Bạn thật sự đáng được có một đêm ngủ ngon.",
        promptContext: "Chloe muốn nói với khách rằng sau chuyến đi mệt mỏi, khách đáng được nghỉ ngơi thật tốt.",
        choices: [
          { id: "a", text: "You definitely deserve a good night's sleep." },
          { id: "b", text: "You definitely deserve a good nights sleep." },
          { id: "c", text: "You definitely deserve good a night's sleep." },
        ],
        correctAnswer: "a",
        explanation:
          "'A good night's sleep' là cụm cố định với dấu nháy đơn 's' đúng vị trí, nghĩa là 'một đêm ngủ ngon'.",
        wrongAnswerExplanations:
          "'You definitely deserve a good nights sleep.' sai vì thiếu dấu nháy đơn ở 'night's', làm sai cụm từ cố định. 'You definitely deserve good a night's sleep.' sai vì đặt mạo từ 'a' lạc chỗ trong câu.",
        usageTip: "Dùng khi muốn chúc ai đó có một đêm ngủ ngon sau một chuyến đi mệt mỏi.",
      },
      {
        id: "st-32-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌅",
        english: "Coming home always feels good after a long trip.",
        vietnamese: "Về đến nhà luôn cảm thấy thật tốt sau một chuyến đi dài.",
        promptContext: "Chloe muốn nói rằng dù chuyến đi vui, nhưng về đến nhà sau một chuyến đi dài luôn là cảm giác dễ chịu.",
        choices: [
          { id: "a", text: "Coming home always feels good after a long trip." },
          { id: "b", text: "Coming home always feel good after a long trip." },
          { id: "c", text: "Coming home always feels good after long a trip." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'coming home' là số ít nên động từ phải chia là 'feels' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Coming home always feel good after a long trip.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít. 'Coming home always feels good after long a trip.' sai vì đặt mạo từ 'a' sai vị trí trước 'long trip'.",
        usageTip: "Dùng khi muốn chia sẻ cảm giác dễ chịu khi về đến nhà sau một chuyến đi dài.",
      },
    ],
  },
  {
    id: "st-33",
    slug: "st-33-du-lich-3",
    topicId: "small-talk",
    title: "Hỏi khách đã từng đến đó chưa",
    description: "Cách hỏi khách xem họ đã từng đến một địa điểm cụ thể chưa.",
    level: "situation",
    section: "GIAO TIẾP THỰC TẾ",
    questions: [
      {
        id: "st-33-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🗽",
        english: "No, I've never been, but I'd love to go.",
        vietnamese: "Chưa, tôi chưa từng đến, nhưng tôi rất muốn đi.",
        prompt: "Have you been to New York before?",
        promptVietnamese: "Bạn đã từng đến New York chưa?",
        choices: [
          { id: "a", text: "No, I've never been, but I'd love to go." },
          { id: "b", text: "It's twenty dollars for a manicure." },
          { id: "c", text: "We open at nine every day." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi mình đã từng đến một nơi cụ thể chưa, mình trả lời thật và thêm mong muốn được đi trong tương lai.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về du lịch. 'We open at nine every day.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình đã từng đến một địa điểm cụ thể chưa.",
      },
      {
        id: "st-33-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🌉",
        english: "Have you ever been to San Francisco?",
        vietnamese: "Bạn đã từng đến San Francisco chưa?",
        promptContext:
          "Khách tò mò muốn biết chị đã từng đến San Francisco chưa, một câu hỏi small talk về du lịch rất tự nhiên.",
        choices: [
          { id: "a", text: "Have you ever been to San Francisco?" },
          { id: "b", text: "Your total comes to twenty dollars." },
          { id: "c", text: "We just got new nail colors in." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách hỏi thăm xem mình đã từng đến một thành phố cụ thể chưa, một câu hỏi rất phổ biến khi nói về du lịch.",
        wrongAnswerExplanations:
          "'Your total comes to twenty dollars.' nói về giá tiền, không liên quan đến câu hỏi về du lịch. 'We just got new nail colors in.' nói về màu sơn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi ai đó xem họ đã từng đến một thành phố cụ thể chưa.",
      },
      {
        id: "st-33-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🌁",
        english: "I went there a few years ago, it was beautiful.",
        vietnamese: "Tôi đã đến đó vài năm trước, ở đó đẹp lắm.",
        choices: [
          { id: "a", text: "Tôi đã đến đó vài năm trước, ở đó đẹp lắm." },
          { id: "b", text: "Tôi chưa từng đến nơi đó." },
          { id: "c", text: "Tôi không thích nơi đó lắm." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng mình đã từng đến một nơi vài năm trước và nhận xét rằng nơi đó rất đẹp.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ về một chuyến đi đã thực hiện từ vài năm trước.",
      },
      {
        id: "st-33-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😍",
        english: "I've always wanted to go, maybe I will soon.",
        vietnamese: "Tôi luôn muốn đi, chắc lúc nào tôi sẽ đi thôi.",
        prompt: "I went there a few years ago, it was beautiful.",
        promptVietnamese: "Tôi đã đến đó vài năm trước, ở đó đẹp lắm.",
        choices: [
          { id: "a", text: "I've always wanted to go, maybe I will soon." },
          { id: "b", text: "We are out of that nail shape." },
          { id: "c", text: "Your color choice looks great." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về một chuyến đi đẹp, khách chia sẻ mong muốn được đến đó và có thể sẽ thực hiện trong tương lai gần.",
        wrongAnswerExplanations:
          "'We are out of that nail shape.' hoàn toàn không liên quan đến câu chuyện về du lịch. 'Your color choice looks great.' là lời khen về màu sơn, chưa hợp lúc này.",
        usageTip: "Dùng khi chia sẻ mong muốn được đến một nơi mà mình chưa từng đến.",
      },
      {
        id: "st-33-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🏛️",
        english: "It's definitely worth visiting at least once.",
        vietnamese: "Nơi đó chắc chắn đáng để đến thăm ít nhất một lần.",
        prompt: "It's definitely worth ___ at least once.",
        choices: [
          { id: "a", text: "visiting" },
          { id: "b", text: "visit" },
          { id: "c", text: "visited" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'worth' luôn dùng động từ dạng '-ing', nên 'visiting' là đúng — cụm 'worth visiting' nghĩa là 'đáng để đến thăm'.",
        wrongAnswerExplanations:
          "'Visit' sai vì thiếu dạng '-ing' sau 'worth'. 'Visited' là dạng quá khứ, không dùng được sau 'worth' theo cách này.",
        usageTip: "Dùng khi giới thiệu về một địa điểm đáng để ghé thăm ít nhất một lần.",
      },
      {
        id: "st-33-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🗼",
        english: "What surprised you most about that place?",
        vietnamese: "Điều gì làm bạn ngạc nhiên nhất về nơi đó?",
        promptContext:
          "Khách nghe chị kể về một chuyến đi, và muốn hỏi thêm điều gì làm chị ngạc nhiên nhất về nơi đó.",
        choices: [
          { id: "a", text: "What surprised you most about that place?" },
          { id: "b", text: "Your nail polish just arrived today." },
          { id: "c", text: "We are open on holidays too." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe kể về một chuyến đi, khách có thể hỏi thêm về điều gì đó làm ngạc nhiên, giữ cuộc trò chuyện thú vị.",
        wrongAnswerExplanations:
          "'Your nail polish just arrived today.' nói về việc hàng mới về, không liên quan đến câu hỏi về du lịch. 'We are open on holidays too.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thêm chi tiết thú vị về một chuyến đi của ai đó.",
      },
      {
        id: "st-33-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "The people there were so much friendlier than I expected.",
        vietnamese: "Người dân ở đó thân thiện hơn tôi tưởng nhiều.",
        audioText: "The people there were so much friendlier than I expected.",
        choices: [
          { id: "a", text: "Người dân ở đó thân thiện hơn tôi tưởng nhiều." },
          { id: "b", text: "Người dân ở đó rất lạnh lùng với tôi." },
          { id: "c", text: "Tôi không gặp ai ở đó cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ một điều ngạc nhiên tích cực về chuyến đi, đó là người dân địa phương rất thân thiện.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoặc không liên quan đến ý nghĩa tích cực trong câu nghe.",
        usageTip: "Dùng khi chia sẻ một điều bất ngờ tích cực từ một chuyến đi đã trải qua.",
      },
      {
        id: "st-33-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🙂",
        english: "That's always a nice surprise when traveling.",
        vietnamese: "Đó luôn là một bất ngờ dễ thương khi đi du lịch.",
        prompt: "The people there were so much friendlier than I expected.",
        promptVietnamese: "Người dân ở đó thân thiện hơn tôi tưởng nhiều.",
        choices: [
          { id: "a", text: "That's always a nice surprise when traveling." },
          { id: "b", text: "We changed our shop hours today." },
          { id: "c", text: "Your total comes to fifteen dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về sự thân thiện bất ngờ của người dân địa phương, khách đồng tình rằng đó luôn là điều dễ thương khi đi du lịch.",
        wrongAnswerExplanations:
          "'We changed our shop hours today.' hoàn toàn không liên quan đến câu chuyện về du lịch. 'Your total comes to fifteen dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng tình về một điều bất ngờ dễ thương thường gặp khi đi du lịch.",
      },
      {
        id: "st-33-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🧭",
        english: "Traveling always teaches you something new.",
        vietnamese: "Du lịch luôn dạy bạn điều gì đó mới.",
        promptContext: "Chloe muốn chia sẻ suy nghĩ rằng mỗi chuyến du lịch luôn mang lại một bài học hoặc trải nghiệm mới.",
        choices: [
          { id: "a", text: "Traveling always teaches you something new." },
          { id: "b", text: "Traveling always teach you something new." },
          { id: "c", text: "Traveling always teaches you new something." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'traveling' là số ít nên động từ phải chia là 'teaches' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Traveling always teach you something new.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít. 'Traveling always teaches you new something.' sai vì đặt sai thứ tự 'something' và 'new'.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa về giá trị của việc đi du lịch.",
      },
      {
        id: "st-33-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌎",
        english: "There's always somewhere new to explore.",
        vietnamese: "Luôn có nơi mới nào đó để khám phá.",
        promptContext: "Chloe muốn nói rằng thế giới luôn có những nơi mới đáng để khám phá.",
        choices: [
          { id: "a", text: "There's always somewhere new to explore." },
          { id: "b", text: "There's always somewhere new for explore." },
          { id: "c", text: "There's always somewhere new to exploring." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'somewhere new to' phải dùng động từ nguyên mẫu, nên 'explore' là đúng — câu này đúng ngữ pháp và tự nhiên.",
        wrongAnswerExplanations:
          "'There's always somewhere new for explore.' sai vì dùng 'for' thay cho 'to' trước động từ nguyên mẫu. 'There's always somewhere new to exploring.' sai vì sau 'to' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi muốn nói rằng luôn có những nơi mới thú vị để khám phá trên thế giới.",
      },
    ],
  },
  {
    id: "st-34",
    slug: "st-34-du-lich-4",
    topicId: "small-talk",
    title: "Nói về nơi mình từng sống hoặc lớn lên",
    description: "Cách trò chuyện nhẹ nhàng về quê hương hoặc nơi mình từng sống.",
    level: "situation",
    section: "GIAO TIẾP THỰC TẾ",
    questions: [
      {
        id: "st-34-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🏡",
        english: "I grew up in Vietnam, near the coast.",
        vietnamese: "Tôi lớn lên ở Việt Nam, gần biển.",
        prompt: "Where did you grow up?",
        promptVietnamese: "Bạn lớn lên ở đâu?",
        choices: [
          { id: "a", text: "I grew up in Vietnam, near the coast." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We open at nine every morning." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi mình lớn lên ở đâu, mình chia sẻ nơi cụ thể, ví dụ Việt Nam, gần biển.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về quê hương. 'We open at nine every morning.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình lớn lên ở đâu.",
      },
      {
        id: "st-34-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🌊",
        english: "That must have been beautiful growing up near the beach.",
        vietnamese: "Chắc lớn lên gần biển đẹp lắm.",
        promptContext:
          "Chị vừa chia sẻ với khách rằng mình lớn lên gần biển ở Việt Nam, và khách muốn nhận xét về điều đó.",
        choices: [
          { id: "a", text: "That must have been beautiful growing up near the beach." },
          { id: "b", text: "Your total comes to twenty dollars." },
          { id: "c", text: "We just got new nail colors in." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe ai đó lớn lên gần biển, khách nhận xét rằng đó chắc là một nơi rất đẹp để trưởng thành.",
        wrongAnswerExplanations:
          "'Your total comes to twenty dollars.' nói về giá tiền, không liên quan đến câu chuyện về quê hương. 'We just got new nail colors in.' nói về màu sơn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi nhận xét tích cực về nơi ai đó đã lớn lên.",
      },
      {
        id: "st-34-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🌅",
        english: "It really was, I miss it sometimes.",
        vietnamese: "Đúng vậy đó, đôi khi tôi cũng nhớ nơi đó.",
        choices: [
          { id: "a", text: "Đúng vậy đó, đôi khi tôi cũng nhớ nơi đó." },
          { id: "b", text: "Tôi không thích nơi đó chút nào." },
          { id: "c", text: "Tôi chưa từng sống ở đó." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng mình đồng ý nơi đó thật đẹp và đôi khi cảm thấy nhớ quê hương — một cảm xúc rất tự nhiên và chân thật.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ cảm xúc nhớ quê hương một cách nhẹ nhàng.",
      },
      {
        id: "st-34-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "❤️",
        english: "Do you ever get to go back and visit?",
        vietnamese: "Bạn có bao giờ về lại thăm quê không?",
        prompt: "It really was, I miss it sometimes.",
        promptVietnamese: "Đúng vậy đó, đôi khi tôi cũng nhớ nơi đó.",
        choices: [
          { id: "a", text: "Do you ever get to go back and visit?" },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe ai đó nhớ quê hương, khách hỏi thăm xem họ có cơ hội về thăm lại không, thể hiện sự quan tâm.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' hoàn toàn không liên quan đến câu chuyện về quê hương. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi hỏi thăm ai đó có cơ hội về thăm quê hương của họ không.",
      },
      {
        id: "st-34-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "✈️",
        english: "I try to go back home every few years.",
        vietnamese: "Tôi cố gắng về quê vài năm một lần.",
        prompt: "I try to go back home every ___ years.",
        choices: [
          { id: "a", text: "few" },
          { id: "b", text: "little" },
          { id: "c", text: "less" },
        ],
        correctAnswer: "a",
        explanation:
          "'Every few years' là cụm cố định nghĩa là 'vài năm một lần' — dùng 'few' là đúng và tự nhiên nhất.",
        wrongAnswerExplanations:
          "'Little' thường đi với danh từ không đếm được, không phù hợp với 'years' là danh từ đếm được. 'Less' mang nghĩa so sánh, không phù hợp trong cụm 'every ... years' này.",
        usageTip: "Dùng khi chia sẻ về việc mình cố gắng về quê hương thăm nhà thường xuyên.",
      },
      {
        id: "st-34-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🛬",
        english: "The last time I went back was three years ago.",
        vietnamese: "Lần cuối tôi về là ba năm trước.",
        promptContext:
          "Chị chia sẻ với khách về lần gần nhất mình về quê hương thăm gia đình, cách đây ba năm.",
        choices: [
          { id: "a", text: "The last time I went back was three years ago." },
          { id: "b", text: "The nail dryer is broken today." },
          { id: "c", text: "We need to close early tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi chia sẻ về lần gần nhất về quê, mình nói cụ thể về thời gian, ví dụ ba năm trước.",
        wrongAnswerExplanations:
          "'The nail dryer is broken today.' nói về máy sấy móng bị hỏng, hoàn toàn không liên quan. 'We need to close early tonight.' nói về việc đóng cửa sớm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ về lần gần nhất mình về quê hương thăm gia đình.",
      },
      {
        id: "st-34-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "I'm hoping to go back again next year.",
        vietnamese: "Tôi mong sẽ về lại vào năm sau.",
        audioText: "I'm hoping to go back again next year.",
        choices: [
          { id: "a", text: "Tôi mong sẽ về lại vào năm sau." },
          { id: "b", text: "Tôi không có ý định về quê nữa." },
          { id: "c", text: "Tôi sẽ không bao giờ về quê nữa." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ mong muốn được về quê hương lần nữa vào năm sau, một cảm xúc rất tự nhiên và tích cực.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi chia sẻ mong muốn được về quê hương lần nữa trong tương lai.",
      },
      {
        id: "st-34-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🙏",
        english: "I hope that works out for you!",
        vietnamese: "Tôi hy vọng điều đó sẽ thành công với bạn!",
        prompt: "I'm hoping to go back again next year.",
        promptVietnamese: "Tôi mong sẽ về lại vào năm sau.",
        choices: [
          { id: "a", text: "I hope that works out for you!" },
          { id: "b", text: "We changed our menu this week." },
          { id: "c", text: "Your nail color looks fresh." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe ai đó chia sẻ mong muốn về quê hương, khách chúc họ điều đó sẽ thành công, thể hiện sự quan tâm chân thành.",
        wrongAnswerExplanations:
          "'We changed our menu this week.' hoàn toàn không liên quan đến câu chuyện về quê hương. 'Your nail color looks fresh.' là lời khen về màu sơn, chưa hợp lúc này.",
        usageTip: "Dùng khi chúc ai đó thành công với một mong muốn hoặc kế hoạch của họ.",
      },
      {
        id: "st-34-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🏘️",
        english: "Home will always feel special to me.",
        vietnamese: "Quê hương sẽ luôn có cảm giác đặc biệt với tôi.",
        promptContext: "Chloe muốn chia sẻ rằng dù ở đâu, quê hương vẫn luôn có một vị trí đặc biệt trong lòng mình.",
        choices: [
          { id: "a", text: "Home will always feel special to me." },
          { id: "b", text: "Home will always feels special to me." },
          { id: "c", text: "Home always will feel special to me." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'will' luôn dùng động từ nguyên mẫu, nên 'feel' là đúng — câu này đúng ngữ pháp và tự nhiên.",
        wrongAnswerExplanations:
          "'Home will always feels special to me.' sai vì sau 'will' không được thêm 's' vào động từ. 'Home always will feel special to me.' sai vì đặt 'always' lạc chỗ, không đúng vị trí thông thường giữa 'will' và động từ.",
        usageTip: "Dùng khi chia sẻ cảm xúc gắn bó đặc biệt với quê hương của mình.",
      },
      {
        id: "st-34-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌾",
        english: "No matter where you go, home stays with you.",
        vietnamese: "Dù đi đâu, quê hương vẫn luôn ở trong bạn.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về việc quê hương luôn theo mình dù đi đến bất cứ đâu.",
        choices: [
          { id: "a", text: "No matter where you go, home stays with you." },
          { id: "b", text: "No matter where you go, home stay with you." },
          { id: "c", text: "No matter you go where, home stays with you." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'home' là số ít nên động từ phải chia là 'stays' — câu này đúng ngữ pháp và giữ nguyên cấu trúc 'no matter where...'",
        wrongAnswerExplanations:
          "'No matter where you go, home stay with you.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít 'home'. 'No matter you go where, home stays with you.' sai vì đặt sai thứ tự từ trong cụm 'no matter where you go'.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa về sự gắn bó với quê hương.",
      },
    ],
  },
  {
    id: "st-35",
    slug: "st-35-du-lich-5",
    topicId: "small-talk",
    title: "Gợi ý địa điểm du lịch cho khách",
    description: "Cách gợi ý một địa điểm du lịch mà mình yêu thích cho khách.",
    level: "situation",
    section: "GIAO TIẾP THỰC TẾ",
    questions: [
      {
        id: "st-35-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🏝️",
        english: "I'd say try the coast, the views are incredible.",
        vietnamese: "Tôi khuyên bạn nên đi vùng biển, cảnh ở đó tuyệt đẹp lắm.",
        prompt: "Where do you think I should go for vacation?",
        promptVietnamese: "Bạn nghĩ tôi nên đi đâu cho kỳ nghỉ?",
        choices: [
          { id: "a", text: "I'd say try the coast, the views are incredible." },
          { id: "b", text: "It's twenty dollars for a manicure." },
          { id: "c", text: "We open at nine every day." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi nên đi đâu du lịch, mình gợi ý cụ thể một nơi mà mình tin là đẹp, ví dụ vùng biển.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về du lịch. 'We open at nine every day.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi ý kiến mình về nơi nên đi du lịch.",
      },
      {
        id: "st-35-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🏞️",
        english: "If you like nature, the national parks are amazing.",
        vietnamese: "Nếu bạn thích thiên nhiên, các công viên quốc gia rất tuyệt.",
        promptContext:
          "Khách hỏi chị nên đi đâu cho kỳ nghỉ tiếp theo, và chị muốn gợi ý các công viên quốc gia vì khách thích thiên nhiên.",
        choices: [
          { id: "a", text: "If you like nature, the national parks are amazing." },
          { id: "b", text: "Your total comes to twenty dollars." },
          { id: "c", text: "We just got new nail colors in." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi gợi ý địa điểm du lịch, mình có thể liên kết với sở thích của khách, ví dụ nếu khách thích thiên nhiên thì gợi ý công viên quốc gia.",
        wrongAnswerExplanations:
          "'Your total comes to twenty dollars.' nói về giá tiền, không liên quan đến câu hỏi về du lịch. 'We just got new nail colors in.' nói về màu sơn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi gợi ý địa điểm du lịch dựa theo sở thích cụ thể của khách.",
      },
      {
        id: "st-35-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🌄",
        english: "The hiking trails there are absolutely stunning.",
        vietnamese: "Những con đường mòn đi bộ ở đó đẹp tuyệt vời.",
        choices: [
          { id: "a", text: "Những con đường mòn đi bộ ở đó đẹp tuyệt vời." },
          { id: "b", text: "Những con đường ở đó rất nguy hiểm." },
          { id: "c", text: "Ở đó không có gì để làm cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này khen ngợi những con đường mòn đi bộ ở một nơi cụ thể rất đẹp — một cách giới thiệu địa điểm du lịch nhiệt tình.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc không liên quan đến nội dung tích cực của câu tiếng Anh này.",
        usageTip: "Dùng khi giới thiệu về những con đường mòn đẹp tại một địa điểm du lịch.",
      },
      {
        id: "st-35-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🥾",
        english: "That sounds perfect, I love hiking!",
        vietnamese: "Nghe tuyệt quá, tôi thích đi bộ đường dài lắm!",
        prompt: "The hiking trails there are absolutely stunning.",
        promptVietnamese: "Những con đường mòn đi bộ ở đó đẹp tuyệt vời.",
        choices: [
          { id: "a", text: "That sounds perfect, I love hiking!" },
          { id: "b", text: "We only take card today." },
          { id: "c", text: "Your nail shape looks perfect." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về những con đường mòn đẹp, khách phản hồi hào hứng vì đó cũng là sở thích của họ.",
        wrongAnswerExplanations:
          "'We only take card today.' hoàn toàn không liên quan đến câu chuyện về du lịch. 'Your nail shape looks perfect.' là lời khen về hình dáng móng, chưa hợp lúc này.",
        usageTip: "Dùng khi hào hứng đồng ý với một gợi ý du lịch phù hợp với sở thích của mình.",
      },
      {
        id: "st-35-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🎒",
        english: "Make sure to pack comfortable walking shoes.",
        vietnamese: "Nhớ mang giày đi bộ thoải mái nha.",
        prompt: "Make sure to pack comfortable walking ___.",
        choices: [
          { id: "a", text: "shoes" },
          { id: "b", text: "shoe" },
          { id: "c", text: "shoeing" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nói về giày, thường dùng số nhiều 'shoes' vì luôn đi thành đôi — đây là cách nói tự nhiên và đúng ngữ pháp.",
        wrongAnswerExplanations:
          "'Shoe' số ít nghe không tự nhiên khi nói về giày để mang đi bộ. 'Shoeing' không phải danh từ có nghĩa trong ngữ cảnh này.",
        usageTip: "Dùng khi nhắc nhở ai đó chuẩn bị giày phù hợp cho một chuyến đi bộ đường dài.",
      },
      {
        id: "st-35-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🌤️",
        english: "What's the best time of year to go there?",
        vietnamese: "Thời điểm nào trong năm là tốt nhất để đến đó?",
        promptContext:
          "Khách được gợi ý một địa điểm du lịch, và muốn hỏi thêm về thời điểm tốt nhất trong năm để đến đó.",
        choices: [
          { id: "a", text: "What's the best time of year to go there?" },
          { id: "b", text: "Your appointment is at two o'clock." },
          { id: "c", text: "We need to order more supplies." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau khi nghe gợi ý một địa điểm, khách có thể hỏi thêm về thời điểm tốt nhất để đến đó, giữ cuộc trò chuyện thực tế và hữu ích.",
        wrongAnswerExplanations:
          "'Your appointment is at two o'clock.' nói về giờ hẹn, không liên quan đến câu hỏi về thời điểm du lịch. 'We need to order more supplies.' nói về việc cần đặt thêm vật liệu, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thêm về thời điểm tốt nhất để đi du lịch một nơi cụ thể.",
      },
      {
        id: "st-35-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "Spring and fall are usually the best times to go.",
        vietnamese: "Mùa xuân và mùa thu thường là thời điểm tốt nhất để đi.",
        audioText: "Spring and fall are usually the best times to go.",
        choices: [
          { id: "a", text: "Mùa xuân và mùa thu thường là thời điểm tốt nhất để đi." },
          { id: "b", text: "Mùa hè là thời điểm duy nhất để đi." },
          { id: "c", text: "Không có thời điểm nào tốt để đi cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giới thiệu rằng mùa xuân và mùa thu là thời điểm tốt nhất để đi du lịch một nơi cụ thể, thường do thời tiết dễ chịu hơn.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói tuyệt đối hoặc ngược nghĩa hoàn toàn, không đúng với thông tin trong câu nghe.",
        usageTip: "Dùng khi giới thiệu cho khách về thời điểm lý tưởng để đi du lịch một địa điểm cụ thể.",
      },
      {
        id: "st-35-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "📅",
        english: "Good to know, I'll plan around that.",
        vietnamese: "Biết rồi, tôi sẽ lên kế hoạch dựa vào đó.",
        prompt: "Spring and fall are usually the best times to go.",
        promptVietnamese: "Mùa xuân và mùa thu thường là thời điểm tốt nhất để đi.",
        choices: [
          { id: "a", text: "Good to know, I'll plan around that." },
          { id: "b", text: "We are running low on gel polish." },
          { id: "c", text: "Your nail shape looks amazing." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nhận được thông tin hữu ích về thời điểm du lịch tốt nhất, khách cảm ơn và nói sẽ dựa vào đó để lên kế hoạch.",
        wrongAnswerExplanations:
          "'We are running low on gel polish.' hoàn toàn không liên quan đến thông tin về thời điểm du lịch. 'Your nail shape looks amazing.' là lời khen về hình dáng móng, chưa hợp lúc này.",
        usageTip: "Dùng khi nhận được một thông tin hữu ích và muốn nói sẽ dựa vào đó để lên kế hoạch.",
      },
      {
        id: "st-35-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🗓️",
        english: "I hope you have an amazing trip whenever you go.",
        vietnamese: "Tôi hy vọng bạn sẽ có một chuyến đi tuyệt vời khi nào bạn đi.",
        promptContext: "Chloe muốn chúc khách có một chuyến đi thật tuyệt vời khi khách thực hiện chuyến du lịch được gợi ý.",
        choices: [
          { id: "a", text: "I hope you have an amazing trip whenever you go." },
          { id: "b", text: "I hope you having an amazing trip whenever you go." },
          { id: "c", text: "I hope you have amazing a trip whenever you go." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'hope' dùng chủ ngữ + động từ chia đúng thì, nên 'you have' là đúng, và mạo từ 'an' đặt đúng trước 'amazing trip'.",
        wrongAnswerExplanations:
          "'I hope you having an amazing trip whenever you go.' sai vì thiếu trợ động từ 'are' trước 'having'. 'I hope you have amazing a trip whenever you go.' sai vì đặt mạo từ 'a' sau tính từ 'amazing' không đúng vị trí.",
        usageTip: "Dùng để chúc ai đó có một chuyến du lịch thật vui vẻ và tuyệt vời.",
      },
      {
        id: "st-35-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🧭",
        english: "The best trips are the ones you plan with excitement.",
        vietnamese: "Những chuyến đi hay nhất là những chuyến được lên kế hoạch với sự hào hứng.",
        promptContext: "Chloe muốn nói rằng những chuyến đi tuyệt vời nhất thường bắt đầu từ sự hào hứng khi lên kế hoạch.",
        choices: [
          { id: "a", text: "The best trips are the ones you plan with excitement." },
          { id: "b", text: "The best trips is the ones you plan with excitement." },
          { id: "c", text: "The best trips are the ones you plan with excited." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'the best trips' là số nhiều nên động từ phải chia là 'are', và sau 'with' cần dùng danh từ 'excitement' không dùng tính từ.",
        wrongAnswerExplanations:
          "'The best trips is the ones you plan with excitement.' sai vì chủ ngữ số nhiều phải đi với 'are', không dùng 'is'. 'The best trips are the ones you plan with excited.' sai vì sau giới từ 'with' phải dùng danh từ 'excitement', không dùng tính từ 'excited'.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa về việc lên kế hoạch cho một chuyến du lịch.",
      },
    ],
  },
];
