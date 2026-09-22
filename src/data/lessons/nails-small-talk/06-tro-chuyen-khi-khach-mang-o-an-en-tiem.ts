import { Lesson } from "@/types/content";

/** nails-small-talk — migrated group 6 (lessons 26-30 of existing content). */
export const nailsSmallTalkGroup06: Lesson[] = [
{
    id: "st-25",
    slug: "st-25-do-an-nha-hang-5",
    topicId: "nails-small-talk",
    title: "Trò chuyện khi khách mang đồ ăn đến tiệm",
    description: "Cách trò chuyện tự nhiên khi khách mang đồ ăn hoặc đồ uống vào tiệm.",
    level: "practice",
    questions: [
      {
        id: "st-25-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🍩",
        english: "That smells amazing! What did you bring?",
        vietnamese: "Thơm quá! Bạn mang gì vậy?",
        prompt: "I brought some snacks with me today.",
        promptVietnamese: "Hôm nay tôi có mang theo ít đồ ăn nhẹ.",
        choices: [
          { id: "a", text: "That smells amazing! What did you bring?" },
          { id: "b", text: "It's fifteen dollars for a manicure." },
          { id: "c", text: "We close at seven tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách mang đồ ăn nhẹ vào tiệm, mình có thể hỏi thăm tò mò xem đó là món gì, một cách trò chuyện vui vẻ.",
        wrongAnswerExplanations:
          "'It's fifteen dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu chuyện về đồ ăn nhẹ. 'We close at seven tonight.' nói về giờ đóng cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách mang đồ ăn nhẹ vào tiệm và mình muốn hỏi thăm tò mò.",
      },
      {
        id: "st-25-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🍪",
        english: "Would you like to try one? I brought extra.",
        vietnamese: "Bạn có muốn thử một cái không? Tôi mang dư đó.",
        promptContext:
          "Khách mang theo bánh quy vào tiệm và muốn chia sẻ với chị, mời chị thử một cái.",
        choices: [
          { id: "a", text: "Would you like to try one? I brought extra." },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We are running low on hand towels." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi mang đồ ăn dư, khách có thể mời chia sẻ với người khác, một hành động thân thiện rất phổ biến trong small talk.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến việc mời đồ ăn. 'We are running low on hand towels.' nói về việc thiếu khăn tay, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn mời ai đó thử món đồ ăn mình mang theo dư.",
      },
      {
        id: "st-25-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "😊",
        english: "That's so kind of you, thank you!",
        vietnamese: "Bạn tốt bụng quá, cảm ơn nha!",
        choices: [
          { id: "a", text: "Bạn tốt bụng quá, cảm ơn nha!" },
          { id: "b", text: "Bạn không nên mang đồ ăn vào đây." },
          { id: "c", text: "Tôi không thích món đó." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện sự cảm ơn chân thành khi ai đó mời mình đồ ăn — một cách đáp lại rất lịch sự và thân thiện.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa tiêu cực hoặc không liên quan đến lời cảm ơn trong câu tiếng Anh này.",
        usageTip: "Dùng khi được ai đó mời đồ ăn và muốn cảm ơn một cách chân thành.",
      },
      {
        id: "st-25-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🍫",
        english: "Of course! Enjoy, I made them myself.",
        vietnamese: "Có gì đâu! Ăn ngon miệng nha, tôi tự làm đó.",
        prompt: "That's so kind of you, thank you!",
        promptVietnamese: "Bạn tốt bụng quá, cảm ơn nha!",
        choices: [
          { id: "a", text: "Of course! Enjoy, I made them myself." },
          { id: "b", text: "We are out of that gel color today." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được cảm ơn vì mời đồ ăn, khách đáp lại nhẹ nhàng và chia sẻ thêm rằng món đó tự làm — thể hiện sự tự hào nhỏ và thân thiện.",
        wrongAnswerExplanations:
          "'We are out of that gel color today.' hoàn toàn không liên quan đến câu chuyện về đồ ăn tự làm. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi ai đó cảm ơn mình vì mời họ món đồ ăn tự làm.",
      },
      {
        id: "st-25-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🧁",
        english: "You did an amazing job baking these.",
        vietnamese: "Bạn nướng món này giỏi quá.",
        prompt: "You did an amazing job ___ these.",
        choices: [
          { id: "a", text: "baking" },
          { id: "b", text: "bake" },
          { id: "c", text: "baked" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'a job of' hoặc 'a job' khi nói về việc làm điều gì, thường dùng dạng '-ing', nên 'baking' là đúng.",
        wrongAnswerExplanations:
          "'Bake' thiếu dạng '-ing' cần thiết trong cấu trúc này. 'Baked' là dạng quá khứ, không phù hợp ở vị trí này trong câu.",
        usageTip: "Dùng khi khen ai đó làm bánh hoặc nướng món ăn rất ngon.",
      },
      {
        id: "st-25-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🍬",
        english: "Feel free to have more if you want.",
        vietnamese: "Bạn cứ lấy thêm nếu muốn nhé.",
        promptContext:
          "Khách mang theo kẹo hoặc bánh vào tiệm và mời chị lấy thêm nếu chị muốn ăn nhiều hơn.",
        choices: [
          { id: "a", text: "Feel free to have more if you want." },
          { id: "b", text: "Your nail polish just dried completely." },
          { id: "c", text: "We need to close the shop early." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi mời ai đó ăn thêm, khách dùng câu 'Feel free to...' để thể hiện sự thoải mái, không ngại ngùng.",
        wrongAnswerExplanations:
          "'Your nail polish just dried completely.' nói về việc sơn đã khô hoàn toàn, không liên quan đến việc mời ăn thêm. 'We need to close the shop early.' nói về việc đóng cửa sớm, hoàn toàn lạc đề.",
        usageTip: "Dùng khi mời ai đó lấy thêm đồ ăn một cách thoải mái, không ngại ngùng.",
      },
      {
        id: "st-25-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "I really shouldn't, but I will anyway.",
        vietnamese: "Thật ra tôi không nên ăn nữa, nhưng thôi ăn luôn.",
        audioText: "I really shouldn't, but I will anyway.",
        choices: [
          { id: "a", text: "Thật ra tôi không nên ăn nữa, nhưng thôi ăn luôn." },
          { id: "b", text: "Tôi thật sự không muốn ăn món này." },
          { id: "c", text: "Tôi phải ăn kiêng nghiêm ngặt." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này là cách nói vui, hơi đùa khi biết là 'không nên' ăn thêm nhưng vẫn quyết định ăn vì món quá ngon.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa khác, không đúng với ý nghĩa vui đùa nhẹ nhàng trong câu nghe.",
        usageTip: "Dùng khi đùa vui về việc mình biết không nên ăn thêm nhưng vẫn ăn vì món ngon quá.",
      },
      {
        id: "st-25-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😂",
        english: "Ha! That's exactly how I feel too.",
        vietnamese: "Haha! Tôi cũng cảm thấy giống vậy đó.",
        prompt: "I really shouldn't, but I will anyway.",
        promptVietnamese: "Thật ra tôi không nên ăn nữa, nhưng thôi ăn luôn.",
        choices: [
          { id: "a", text: "Ha! That's exactly how I feel too." },
          { id: "b", text: "We are fully booked this afternoon." },
          { id: "c", text: "Your color needs one more coat." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe ai đó nói đùa về việc ăn dù biết không nên, khách có thể cười và đồng cảm rằng mình cũng cảm thấy giống vậy.",
        wrongAnswerExplanations:
          "'We are fully booked this afternoon.' hoàn toàn không liên quan đến câu đùa về đồ ăn. 'Your color needs one more coat.' nói về việc cần sơn thêm lớp, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng cảm vui vẻ với một câu đùa về việc ăn quá nhiều đồ ngọt.",
      },
      {
        id: "st-25-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🍪",
        english: "Thanks for sharing, that was really thoughtful.",
        vietnamese: "Cảm ơn bạn đã chia sẻ, bạn thật chu đáo.",
        promptContext: "Chloe muốn cảm ơn khách vì đã mang đồ ăn đến chia sẻ với mình, một hành động rất chu đáo.",
        choices: [
          { id: "a", text: "Thanks for sharing, that was really thoughtful." },
          { id: "b", text: "Thanks for share, that was really thoughtful." },
          { id: "c", text: "Thanks for sharing, that were really thoughtful." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau giới từ 'for' phải dùng động từ dạng '-ing', nên 'sharing' là đúng, và 'that was' đúng chia theo chủ ngữ số ít.",
        wrongAnswerExplanations:
          "'Thanks for share, that was really thoughtful.' sai vì sau 'for' phải dùng dạng '-ing', không dùng nguyên mẫu. 'Thanks for sharing, that were really thoughtful.' sai vì chủ ngữ số ít 'that' phải đi với 'was', không dùng 'were'.",
        usageTip: "Dùng khi cảm ơn ai đó đã chia sẻ đồ ăn hoặc làm một việc chu đáo cho mình.",
      },
      {
        id: "st-25-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🍰",
        english: "Sharing food always brings people closer.",
        vietnamese: "Chia sẻ đồ ăn luôn giúp mọi người thân thiết hơn.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về việc chia sẻ đồ ăn giúp con người gắn kết với nhau hơn.",
        choices: [
          { id: "a", text: "Sharing food always brings people closer." },
          { id: "b", text: "Sharing food always bring people closer." },
          { id: "c", text: "Sharing food always brings people close." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'sharing food' là số ít nên động từ phải chia là 'brings', và 'closer' là dạng so sánh hơn đúng nghĩa 'gần hơn, thân thiết hơn'.",
        wrongAnswerExplanations:
          "'Sharing food always bring people closer.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít. 'Sharing food always brings people close.' sai vì dùng 'close' thay cho dạng so sánh 'closer', làm câu không đúng nghĩa mong muốn.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa về việc chia sẻ đồ ăn với người khác.",
      },
    ],
  },
{
    id: "st-26",
    slug: "st-26-ca-phe-do-uong-1",
    topicId: "nails-small-talk",
    title: "Mời khách uống nước",
    description: "Cách mời khách một ly nước hoặc đồ uống trong lúc làm nails.",
    level: "practice",
    questions: [
      {
        id: "st-26-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "☕",
        english: "Coffee would be great, thank you.",
        vietnamese: "Cà phê thì tuyệt lắm, cảm ơn bạn.",
        prompt: "Would you like some coffee or water?",
        promptVietnamese: "Bạn muốn uống cà phê hay nước lọc?",
        choices: [
          { id: "a", text: "Coffee would be great, thank you." },
          { id: "b", text: "It's twenty dollars for gel." },
          { id: "c", text: "We close at eight tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được mời chọn giữa cà phê và nước, khách trả lời lựa chọn của mình kèm lời cảm ơn lịch sự.",
        wrongAnswerExplanations:
          "'It's twenty dollars for gel.' nói về giá dịch vụ, không liên quan đến câu hỏi về đồ uống. 'We close at eight tonight.' nói về giờ đóng cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi được mời chọn giữa các loại đồ uống và muốn trả lời lựa chọn của mình.",
      },
      {
        id: "st-26-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🥤",
        english: "Can I get you something to drink while you wait?",
        vietnamese: "Bạn có muốn uống gì trong lúc chờ không?",
        promptContext:
          "Khách vừa ngồi xuống chờ đến lượt làm nails, chị muốn hỏi khách có muốn uống gì không.",
        choices: [
          { id: "a", text: "Can I get you something to drink while you wait?" },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We are fully booked this afternoon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách đang chờ đến lượt, mình hỏi thăm xem họ có muốn uống gì không, thể hiện sự quan tâm và chu đáo.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến việc mời đồ uống. 'We are fully booked this afternoon.' nói về việc hết chỗ, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách đang chờ đến lượt và mình muốn mời khách uống gì đó.",
      },
      {
        id: "st-26-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🍵",
        english: "We also have hot tea if you prefer.",
        vietnamese: "Chúng tôi cũng có trà nóng nếu bạn muốn.",
        choices: [
          { id: "a", text: "Chúng tôi cũng có trà nóng nếu bạn muốn." },
          { id: "b", text: "Chúng tôi hết nước rồi." },
          { id: "c", text: "Chúng tôi không phục vụ đồ uống." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giới thiệu thêm lựa chọn trà nóng cho khách nếu họ không muốn cà phê hoặc nước lọc.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi muốn giới thiệu thêm lựa chọn đồ uống khác cho khách.",
      },
      {
        id: "st-26-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🧊",
        english: "Sure, I'll get that for you right away.",
        vietnamese: "Được rồi, tôi sẽ lấy ngay cho bạn.",
        prompt: "Can I have some ice water, please?",
        promptVietnamese: "Cho tôi ly nước đá được không?",
        choices: [
          { id: "a", text: "Sure, I'll get that for you right away." },
          { id: "b", text: "We are out of nail polish remover." },
          { id: "c", text: "This design takes extra time." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách yêu cầu nước đá, mình đồng ý ngay và nói sẽ mang tới nhanh, thể hiện sự nhiệt tình phục vụ.",
        wrongAnswerExplanations:
          "'We are out of nail polish remover.' nói về việc hết nước tẩy sơn, hoàn toàn không liên quan. 'This design takes extra time.' nói về thời gian làm mẫu nail, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi khách yêu cầu một ly nước đá.",
      },
      {
        id: "st-26-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🥛",
        english: "Let me know if you need a refill.",
        vietnamese: "Cho tôi biết nếu bạn cần châm thêm nước nha.",
        prompt: "Let me know if you need a ___.",
        choices: [
          { id: "a", text: "refill" },
          { id: "b", text: "refilling" },
          { id: "c", text: "refilled" },
        ],
        correctAnswer: "a",
        explanation:
          "'Refill' là danh từ nghĩa là 'châm thêm' — dùng sau 'a' là đúng và tự nhiên nhất trong câu này.",
        wrongAnswerExplanations:
          "'Refilling' là danh động từ, không phù hợp sau mạo từ 'a' trong ngữ cảnh này. 'Refilled' là dạng quá khứ phân từ của động từ, không dùng được ở vị trí danh từ này.",
        usageTip: "Dùng khi mời khách cho biết nếu họ cần thêm nước hoặc đồ uống.",
      },
      {
        id: "st-26-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🍋",
        english: "Do you have anything with lemon?",
        vietnamese: "Bạn có đồ uống nào có chanh không?",
        promptContext:
          "Khách được mời đồ uống, và khách muốn hỏi xem có loại nào có vị chanh không vì khách thích vị đó.",
        choices: [
          { id: "a", text: "Do you have anything with lemon?" },
          { id: "b", text: "Your nails are almost done now." },
          { id: "c", text: "We take card and cash both." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được mời đồ uống, khách có thể hỏi thêm về một vị cụ thể mà họ thích, ví dụ vị chanh.",
        wrongAnswerExplanations:
          "'Your nails are almost done now.' nói về việc móng gần xong, không liên quan đến câu hỏi về đồ uống. 'We take card and cash both.' nói về thanh toán, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách muốn hỏi thêm về một loại đồ uống có vị cụ thể.",
      },
      {
        id: "st-26-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "We have lemon water, if that sounds good.",
        vietnamese: "Chúng tôi có nước chanh, nếu bạn muốn thử.",
        audioText: "We have lemon water, if that sounds good.",
        choices: [
          { id: "a", text: "Chúng tôi có nước chanh, nếu bạn muốn thử." },
          { id: "b", text: "Chúng tôi không có nước chanh." },
          { id: "c", text: "Nước chanh của chúng tôi đã hết." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giới thiệu rằng tiệm có nước chanh cho khách thử nếu khách thích vị đó.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi giới thiệu một loại đồ uống cụ thể mà tiệm có sẵn cho khách.",
      },
      {
        id: "st-26-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "That sounds perfect, I'll take that.",
        vietnamese: "Nghe tuyệt đấy, cho tôi ly đó.",
        prompt: "We have lemon water, if that sounds good.",
        promptVietnamese: "Chúng tôi có nước chanh, nếu bạn muốn thử.",
        choices: [
          { id: "a", text: "That sounds perfect, I'll take that." },
          { id: "b", text: "We changed our prices this month." },
          { id: "c", text: "Your total is twenty dollars now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được giới thiệu nước chanh, khách đồng ý và chọn thử, thể hiện sự hài lòng với lựa chọn được đưa ra.",
        wrongAnswerExplanations:
          "'We changed our prices this month.' hoàn toàn không liên quan đến câu chuyện về đồ uống. 'Your total is twenty dollars now.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng ý chọn một loại đồ uống được gợi ý.",
      },
      {
        id: "st-26-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🧉",
        english: "I'll bring that right over for you.",
        vietnamese: "Tôi sẽ mang lại ngay cho bạn.",
        promptContext: "Chloe muốn nói với khách rằng mình sẽ mang đồ uống đến ngay sau khi khách chọn xong.",
        choices: [
          { id: "a", text: "I'll bring that right over for you." },
          { id: "b", text: "I'll bringing that right over for you." },
          { id: "c", text: "I'll bring that right over you for." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'I'll' phải dùng động từ nguyên mẫu, nên 'bring' là đúng — câu này nghĩa là sẽ mang đồ uống đến ngay.",
        wrongAnswerExplanations:
          "'I'll bringing that right over for you.' sai vì sau 'will' (rút gọn 'll) phải dùng động từ nguyên mẫu, không dùng dạng '-ing'. 'I'll bring that right over you for.' sai về thứ tự từ ở cuối câu.",
        usageTip: "Dùng khi muốn nói với khách rằng mình sẽ mang đồ uống đến ngay.",
      },
      {
        id: "st-26-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🥤",
        english: "It's always nice to have a cold drink on a busy day.",
        vietnamese: "Vào ngày bận rộn có ly nước lạnh thì thật tuyệt.",
        promptContext: "Chloe muốn nói rằng vào những ngày bận rộn, có một ly nước lạnh để uống là điều rất tốt.",
        choices: [
          { id: "a", text: "It's always nice to have a cold drink on a busy day." },
          { id: "b", text: "It's always nice having a cold drink on a busy day to." },
          { id: "c", text: "It's always nice to has a cold drink on a busy day." },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc 'It's nice to + động từ nguyên mẫu' là đúng, và câu này giữ đúng thứ tự từ cũng như động từ nguyên mẫu 'have'.",
        wrongAnswerExplanations:
          "'It's always nice having a cold drink on a busy day to.' sai vì thừa chữ 'to' ở cuối câu và dùng sai cấu trúc. 'It's always nice to has a cold drink on a busy day.' sai vì sau 'to' phải dùng động từ nguyên mẫu 'have', không dùng 'has'.",
        usageTip: "Dùng khi muốn nói rằng có đồ uống lạnh vào ngày bận rộn thật sự rất dễ chịu.",
      },
    ],
  },
{
    id: "st-27",
    slug: "st-27-ca-phe-do-uong-2",
    topicId: "nails-small-talk",
    title: "Nói về cà phê Việt Nam",
    description: "Cách trò chuyện về hương vị và cách pha cà phê Việt Nam với khách.",
    level: "practice",
    questions: [
      {
        id: "st-27-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "☕",
        english: "It's stronger, but I really like it.",
        vietnamese: "Nó đậm hơn, nhưng tôi thích lắm.",
        prompt: "Is Vietnamese coffee different from regular coffee?",
        promptVietnamese: "Cà phê Việt Nam có khác với cà phê thường không?",
        choices: [
          { id: "a", text: "It's stronger, but I really like it." },
          { id: "b", text: "It's twenty dollars for a manicure." },
          { id: "c", text: "We're open until nine tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về sự khác biệt của cà phê Việt Nam, mình trả lời ngắn gọn rằng nó đậm hơn và mình thích vị đó.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về cà phê. 'We're open until nine tonight.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi về sự khác biệt giữa cà phê Việt Nam và cà phê thông thường.",
      },
      {
        id: "st-27-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🥄",
        english: "You should try Vietnamese coffee with condensed milk.",
        vietnamese: "Bạn nên thử cà phê Việt Nam với sữa đặc.",
        promptContext:
          "Khách chưa từng uống cà phê Việt Nam, và chị muốn gợi ý khách thử với sữa đặc, cách uống phổ biến nhất.",
        choices: [
          { id: "a", text: "You should try Vietnamese coffee with condensed milk." },
          { id: "b", text: "Your total comes to fifteen dollars." },
          { id: "c", text: "We are almost out of top coat." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách chưa từng uống cà phê Việt Nam, mình gợi ý cách uống phổ biến nhất, đó là kèm sữa đặc.",
        wrongAnswerExplanations:
          "'Your total comes to fifteen dollars.' nói về giá tiền, không liên quan đến câu hỏi về cà phê. 'We are almost out of top coat.' nói về việc sắp hết sơn phủ, hoàn toàn lạc đề.",
        usageTip: "Dùng khi gợi ý khách thử cà phê Việt Nam theo cách uống truyền thống.",
      },
      {
        id: "st-27-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🧊",
        english: "It's really good served over ice too.",
        vietnamese: "Uống với đá cũng ngon lắm.",
        choices: [
          { id: "a", text: "Uống với đá cũng ngon lắm." },
          { id: "b", text: "Không nên uống với đá đâu." },
          { id: "c", text: "Cà phê này chỉ uống nóng thôi." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói rằng cà phê Việt Nam cũng ngon khi uống lạnh với đá — một cách chia sẻ thêm về cách thưởng thức món này.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ thêm cách uống cà phê Việt Nam lạnh với đá.",
      },
      {
        id: "st-27-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😋",
        english: "I'll definitely try it next time I see it.",
        vietnamese: "Chắc chắn lần sau thấy tôi sẽ thử.",
        prompt: "It's really good served over ice too.",
        promptVietnamese: "Uống với đá cũng ngon lắm.",
        choices: [
          { id: "a", text: "I'll definitely try it next time I see it." },
          { id: "b", text: "We ran out of nail glue today." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được gợi ý thêm cách uống cà phê, khách phản hồi tích cực và nói sẽ thử vào lần tới.",
        wrongAnswerExplanations:
          "'We ran out of nail glue today.' hoàn toàn không liên quan đến lời gợi ý về cà phê. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng ý thử một cách thưởng thức đồ uống mới được gợi ý.",
      },
      {
        id: "st-27-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🍮",
        english: "Vietnamese coffee is famous for being very strong.",
        vietnamese: "Cà phê Việt Nam nổi tiếng vì rất đậm.",
        prompt: "Vietnamese coffee is famous for being very ___.",
        choices: [
          { id: "a", text: "strong" },
          { id: "b", text: "strength" },
          { id: "c", text: "strongly" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'being very' cần dùng tính từ, nên 'strong' là đúng — câu này nghĩa là cà phê Việt Nam rất đậm và nổi tiếng vì điều đó.",
        wrongAnswerExplanations:
          "'Strength' là danh từ, không dùng được sau 'being very' theo cách này. 'Strongly' là trạng từ, không phù hợp để mô tả tính chất của cà phê ở đây.",
        usageTip: "Dùng khi giới thiệu với khách rằng cà phê Việt Nam nổi tiếng vì rất đậm.",
      },
      {
        id: "st-27-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🫖",
        english: "How do you usually make it at home?",
        vietnamese: "Bạn thường pha ở nhà như thế nào?",
        promptContext:
          "Khách tò mò về cách pha cà phê Việt Nam tại nhà, và muốn hỏi chị cách pha thông thường.",
        choices: [
          { id: "a", text: "How do you usually make it at home?" },
          { id: "b", text: "Your nail polish just arrived today." },
          { id: "c", text: "We are open on holidays too." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách tò mò về cách pha cà phê Việt Nam tại nhà và hỏi thăm để học hỏi thêm.",
        wrongAnswerExplanations:
          "'Your nail polish just arrived today.' nói về việc hàng mới về, không liên quan đến câu hỏi về cách pha cà phê. 'We are open on holidays too.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi tò mò và muốn hỏi ai đó cách pha một món đồ uống tại nhà.",
      },
      {
        id: "st-27-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "I use a small metal filter to make it drip slowly.",
        vietnamese: "Tôi dùng một cái phin nhỏ để cà phê nhỏ từng giọt.",
        audioText: "I use a small metal filter to make it drip slowly.",
        choices: [
          { id: "a", text: "Tôi dùng một cái phin nhỏ để cà phê nhỏ từng giọt." },
          { id: "b", text: "Tôi mua cà phê pha sẵn ở tiệm." },
          { id: "c", text: "Tôi không bao giờ tự pha cà phê." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giải thích cách pha cà phê Việt Nam truyền thống, dùng phin nhỏ để cà phê chảy từng giọt chậm.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa khác, không đúng với việc mô tả cách pha cà phê truyền thống trong câu nghe.",
        usageTip: "Dùng khi giải thích cho khách cách pha cà phê Việt Nam truyền thống bằng phin.",
      },
      {
        id: "st-27-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🤯",
        english: "That's so interesting, I've never seen that before.",
        vietnamese: "Thú vị quá, tôi chưa từng thấy cách đó bao giờ.",
        prompt: "I use a small metal filter to make it drip slowly.",
        promptVietnamese: "Tôi dùng một cái phin nhỏ để cà phê nhỏ từng giọt.",
        choices: [
          { id: "a", text: "That's so interesting, I've never seen that before." },
          { id: "b", text: "We are out of that nail shape." },
          { id: "c", text: "Your color choice looks great." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về cách pha cà phê lạ với mình, khách thể hiện sự thích thú và tò mò vì chưa từng thấy trước đây.",
        wrongAnswerExplanations:
          "'We are out of that nail shape.' hoàn toàn không liên quan đến câu chuyện về cà phê. 'Your color choice looks great.' là lời khen về màu sơn, chưa hợp lúc này.",
        usageTip: "Dùng khi thể hiện sự thích thú, tò mò về một cách làm điều gì đó mới lạ với mình.",
      },
      {
        id: "st-27-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "☕",
        english: "I can show you a picture of it sometime.",
        vietnamese: "Lúc nào tôi có thể cho bạn xem hình cái phin đó.",
        promptContext: "Chloe muốn cho khách xem hình ảnh của phin cà phê mà mình đã mô tả.",
        choices: [
          { id: "a", text: "I can show you a picture of it sometime." },
          { id: "b", text: "I can show you a picture of it sometimes." },
          { id: "c", text: "I can showing you a picture of it sometime." },
        ],
        correctAnswer: "a",
        explanation:
          "'Sometime' nghĩa là 'lúc nào đó' — khác với 'sometimes' nghĩa là 'đôi khi' — nên 'sometime' là đúng trong câu này.",
        wrongAnswerExplanations:
          "'I can show you a picture of it sometimes.' sai vì 'sometimes' mang nghĩa 'đôi khi', không phù hợp ý nghĩa 'lúc nào đó' trong câu. 'I can showing you a picture of it sometime.' sai vì sau 'can' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi hứa sẽ cho ai đó xem một hình ảnh cụ thể vào lúc nào đó sau này.",
      },
      {
        id: "st-27-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "There's something special about coffee from home.",
        vietnamese: "Cà phê từ quê nhà có gì đó rất đặc biệt.",
        promptContext: "Chloe muốn nói rằng cà phê Việt Nam mang lại cảm giác đặc biệt vì gắn với quê hương.",
        choices: [
          { id: "a", text: "There's something special about coffee from home." },
          { id: "b", text: "There's something special about coffee from home to." },
          { id: "c", text: "There's something special about coffee at home from." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng giữ nguyên cấu trúc 'something special about + danh từ' rất tự nhiên và dễ hiểu.",
        wrongAnswerExplanations:
          "'There's something special about coffee from home to.' sai vì thừa chữ 'to' ở cuối câu không cần thiết. 'There's something special about coffee at home from.' sai vì đặt lộn xộn hai giới từ 'at' và 'from' ở cuối câu.",
        usageTip: "Dùng khi chia sẻ cảm xúc gắn bó với cà phê hoặc món ăn quê nhà.",
      },
    ],
  },
{
    id: "st-28",
    slug: "st-28-ca-phe-do-uong-3",
    topicId: "nails-small-talk",
    title: "Hỏi khách thích đồ uống gì",
    description: "Cách hỏi khách về loại đồ uống họ thích khi trò chuyện nhẹ nhàng.",
    level: "practice",
    questions: [
      {
        id: "st-28-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🧋",
        english: "I love bubble tea, especially with boba.",
        vietnamese: "Tôi thích trà sữa, đặc biệt là có trân châu.",
        prompt: "What's your favorite drink?",
        promptVietnamese: "Bạn thích đồ uống gì nhất?",
        choices: [
          { id: "a", text: "I love bubble tea, especially with boba." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open until nine tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về đồ uống yêu thích, mình chia sẻ thật và cụ thể, ví dụ trà sữa trân châu.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về đồ uống. 'We're open until nine tonight.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi về đồ uống mình thích nhất.",
      },
      {
        id: "st-28-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🍹",
        english: "Do you like sweet drinks or something more simple?",
        vietnamese: "Bạn thích đồ uống ngọt hay đơn giản hơn?",
        promptContext:
          "Khách tò mò muốn biết chị thích loại đồ uống ngọt hay loại đơn giản như nước lọc, trà nhạt.",
        choices: [
          { id: "a", text: "Do you like sweet drinks or something more simple?" },
          { id: "b", text: "Your total comes to twenty dollars." },
          { id: "c", text: "We just got new nail colors in." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách hỏi thăm về sở thích đồ uống, cụ thể là thích ngọt hay đơn giản, một câu hỏi tự nhiên trong trò chuyện.",
        wrongAnswerExplanations:
          "'Your total comes to twenty dollars.' nói về giá tiền, không liên quan đến câu hỏi về đồ uống. 'We just got new nail colors in.' nói về màu sơn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi ai đó về sở thích đồ uống ngọt hay đơn giản.",
      },
      {
        id: "st-28-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🍓",
        english: "I usually go for something fruity.",
        vietnamese: "Tôi thường chọn loại có vị trái cây.",
        choices: [
          { id: "a", text: "Tôi thường chọn loại có vị trái cây." },
          { id: "b", text: "Tôi không bao giờ uống nước ngọt." },
          { id: "c", text: "Tôi chỉ uống nước lọc mỗi ngày." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ sở thích chọn đồ uống có vị trái cây — một cách trò chuyện nhẹ nhàng về sở thích cá nhân.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc không liên quan đến sở thích trái cây trong câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ về loại đồ uống mình thường chọn.",
      },
      {
        id: "st-28-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🍑",
        english: "Me too! Peach flavor is my go-to.",
        vietnamese: "Tôi cũng vậy! Vị đào là món tôi hay chọn nhất.",
        prompt: "I usually go for something fruity.",
        promptVietnamese: "Tôi thường chọn loại có vị trái cây.",
        choices: [
          { id: "a", text: "Me too! Peach flavor is my go-to." },
          { id: "b", text: "We only take card today." },
          { id: "c", text: "Your nail shape looks perfect." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi chia sẻ sở thích chọn đồ uống trái cây, khách có thể đồng điệu và chia sẻ thêm vị mình hay chọn.",
        wrongAnswerExplanations:
          "'We only take card today.' hoàn toàn không liên quan đến câu chuyện về đồ uống. 'Your nail shape looks perfect.' là lời khen về hình dáng móng, chưa hợp lúc này.",
        usageTip: "Dùng khi đồng điệu sở thích với ai đó về loại đồ uống trái cây.",
      },
      {
        id: "st-28-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🍵",
        english: "I try to drink more tea than soda now.",
        vietnamese: "Giờ tôi cố uống nhiều trà hơn nước ngọt.",
        prompt: "I try to drink more tea than ___ now.",
        choices: [
          { id: "a", text: "soda" },
          { id: "b", text: "sodas" },
          { id: "c", text: "soda's" },
        ],
        correctAnswer: "a",
        explanation:
          "'Soda' theo nghĩa chung là danh từ không đếm được, không thêm 's' — dùng 'soda' là đúng trong câu này.",
        wrongAnswerExplanations:
          "'Sodas' sai vì khi nói chung về nước ngọt không cần số nhiều. 'Soda's' là dạng sở hữu cách, hoàn toàn không phù hợp trong câu này.",
        usageTip: "Dùng khi chia sẻ về việc cố gắng uống nhiều trà hơn nước ngọt.",
      },
      {
        id: "st-28-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧃",
        english: "I've been trying to cut back on sugar lately.",
        vietnamese: "Gần đây tôi đang cố giảm đường.",
        promptContext:
          "Khách chia sẻ với chị rằng gần đây khách đang cố gắng ăn uống lành mạnh hơn, giảm đường trong đồ uống.",
        choices: [
          { id: "a", text: "I've been trying to cut back on sugar lately." },
          { id: "b", text: "The nail dryer is broken today." },
          { id: "c", text: "We need to close early tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách chia sẻ về việc cố gắng giảm đường trong đồ uống gần đây, một câu chuyện nhẹ về sức khỏe cá nhân.",
        wrongAnswerExplanations:
          "'The nail dryer is broken today.' nói về máy sấy móng bị hỏng, hoàn toàn không liên quan. 'We need to close early tonight.' nói về việc đóng cửa sớm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ về việc cố gắng ăn uống lành mạnh hơn, giảm đường.",
      },
      {
        id: "st-28-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "That's a good habit to start, honestly.",
        vietnamese: "Thật ra đó là thói quen tốt để bắt đầu.",
        audioText: "That's a good habit to start, honestly.",
        choices: [
          { id: "a", text: "Thật ra đó là thói quen tốt để bắt đầu." },
          { id: "b", text: "Đó là thói quen không tốt cho sức khỏe." },
          { id: "c", text: "Bạn nên uống nhiều nước ngọt hơn." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này khen ngợi việc cố gắng giảm đường là một thói quen tốt, thể hiện sự đồng cảm và động viên.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi khen ngợi ai đó về một thói quen ăn uống tốt mà họ mới bắt đầu.",
      },
      {
        id: "st-28-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "💪",
        english: "Thanks, it's hard but I'm getting used to it.",
        vietnamese: "Cảm ơn bạn, cũng khó nhưng tôi đang quen dần rồi.",
        prompt: "That's a good habit to start, honestly.",
        promptVietnamese: "Thật ra đó là thói quen tốt để bắt đầu.",
        choices: [
          { id: "a", text: "Thanks, it's hard but I'm getting used to it." },
          { id: "b", text: "We changed our menu this week." },
          { id: "c", text: "Your nail color looks fresh." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được khen về thói quen tốt, khách cảm ơn và chia sẻ thêm rằng dù khó nhưng đang dần quen với thay đổi đó.",
        wrongAnswerExplanations:
          "'We changed our menu this week.' hoàn toàn không liên quan đến câu chuyện về thói quen ăn uống. 'Your nail color looks fresh.' là lời khen về màu sơn, chưa hợp lúc này.",
        usageTip: "Dùng khi cảm ơn ai đó vì đã khen mình và muốn chia sẻ thêm về quá trình thay đổi thói quen.",
      },
      {
        id: "st-28-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🍋",
        english: "Small changes can really add up over time.",
        vietnamese: "Những thay đổi nhỏ có thể tích lại thành nhiều theo thời gian.",
        promptContext: "Chloe muốn động viên khách rằng những thay đổi nhỏ trong thói quen sẽ mang lại kết quả lớn theo thời gian.",
        choices: [
          { id: "a", text: "Small changes can really add up over time." },
          { id: "b", text: "Small changes can really adds up over time." },
          { id: "c", text: "Small changes can really add up time over." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'can' luôn dùng động từ nguyên mẫu, nên 'add' là đúng — câu này nghĩa là những thay đổi nhỏ sẽ tích lại theo thời gian.",
        wrongAnswerExplanations:
          "'Small changes can really adds up over time.' sai vì sau 'can' không được thêm 's' vào động từ. 'Small changes can really add up time over.' sai về thứ tự từ ở cuối câu.",
        usageTip: "Dùng khi động viên ai đó rằng những thay đổi nhỏ trong thói quen sẽ có kết quả tốt theo thời gian.",
      },
      {
        id: "st-28-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌿",
        english: "Everyone has their own way of staying healthy.",
        vietnamese: "Mỗi người có cách riêng để giữ sức khỏe.",
        promptContext: "Chloe muốn nói rằng mỗi người có phương pháp riêng để duy trì sức khỏe tốt.",
        choices: [
          { id: "a", text: "Everyone has their own way of staying healthy." },
          { id: "b", text: "Everyone have their own way of staying healthy." },
          { id: "c", text: "Everyone has their own way stay healthy of." },
        ],
        correctAnswer: "a",
        explanation:
          "'Everyone' là chủ ngữ số ít nên động từ phải chia là 'has' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Everyone have their own way of staying healthy.' sai vì chủ ngữ số ít phải đi với 'has', không dùng 'have'. 'Everyone has their own way stay healthy of.' sai vì đặt sai vị trí giới từ 'of' và động từ 'stay' trong câu.",
        usageTip: "Dùng khi muốn nói rằng mỗi người có cách riêng để chăm sóc sức khỏe của mình.",
      },
    ],
  },
{
    id: "st-29",
    slug: "st-29-ca-phe-do-uong-4",
    topicId: "nails-small-talk",
    title: "Trò chuyện về buổi sáng và cà phê",
    description: "Cách trò chuyện nhẹ nhàng về thói quen uống cà phê vào buổi sáng.",
    level: "practice",
    questions: [
      {
        id: "st-29-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🌅",
        english: "I can't function without my morning coffee.",
        vietnamese: "Tôi không thể làm gì nếu chưa uống cà phê sáng.",
        prompt: "Do you drink coffee every morning?",
        promptVietnamese: "Bạn có uống cà phê mỗi buổi sáng không?",
        choices: [
          { id: "a", text: "I can't function without my morning coffee." },
          { id: "b", text: "It's twenty dollars for a manicure." },
          { id: "c", text: "We open at nine every day." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về thói quen uống cà phê sáng, mình chia sẻ vui rằng không thể hoạt động được nếu thiếu nó.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về cà phê. 'We open at nine every day.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi chia sẻ vui về việc mình cần cà phê vào buổi sáng.",
      },
      {
        id: "st-29-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "😴",
        english: "I'm not a morning person without my coffee.",
        vietnamese: "Nếu chưa có cà phê thì tôi không tỉnh táo được vào buổi sáng.",
        promptContext:
          "Khách trông có vẻ chưa tỉnh táo hoàn toàn vào buổi sáng, và muốn chia sẻ vui về việc cần cà phê để tỉnh táo.",
        choices: [
          { id: "a", text: "I'm not a morning person without my coffee." },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We are fully booked this afternoon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách chia sẻ vui vẻ về việc mình chưa tỉnh táo nếu chưa uống cà phê buổi sáng, một câu chuyện đời thường dễ đồng cảm.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến câu chuyện này. 'We are fully booked this afternoon.' nói về việc hết chỗ, hoàn toàn lạc đề.",
        usageTip: "Dùng khi chia sẻ vui về việc mình cần cà phê để tỉnh táo vào buổi sáng.",
      },
      {
        id: "st-29-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "☕",
        english: "Same here, coffee is part of my morning routine.",
        vietnamese: "Tôi cũng vậy, cà phê là một phần thói quen buổi sáng của tôi.",
        choices: [
          { id: "a", text: "Tôi cũng vậy, cà phê là một phần thói quen buổi sáng của tôi." },
          { id: "b", text: "Tôi không bao giờ uống cà phê." },
          { id: "c", text: "Buổi sáng tôi chỉ uống nước lọc." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng cà phê là một phần không thể thiếu trong thói quen buổi sáng của mình, giống với khách.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ đồng điệu về thói quen uống cà phê buổi sáng với khách.",
      },
      {
        id: "st-29-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "It's nice to know we have that in common!",
        vietnamese: "Vui vì biết chúng ta có điểm chung này!",
        prompt: "Same here, coffee is part of my morning routine.",
        promptVietnamese: "Tôi cũng vậy, cà phê là một phần thói quen buổi sáng của tôi.",
        choices: [
          { id: "a", text: "It's nice to know we have that in common!" },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi biết cả hai có cùng thói quen uống cà phê sáng, khách vui vẻ nhận xét rằng đó là điểm chung thú vị.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' hoàn toàn không liên quan đến câu chuyện về cà phê. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi vui vẻ nhận ra mình có điểm chung với ai đó trong cuộc trò chuyện.",
      },
      {
        id: "st-29-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🕐",
        english: "I usually have my coffee before I come to work.",
        vietnamese: "Tôi thường uống cà phê trước khi đi làm.",
        prompt: "I usually have my coffee before I ___ to work.",
        choices: [
          { id: "a", text: "come" },
          { id: "b", text: "came" },
          { id: "c", text: "coming" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'before I' dùng động từ hiện tại đơn vì nói về việc lặp lại thường xuyên — 'come' là đúng.",
        wrongAnswerExplanations:
          "'Came' là dạng quá khứ, không hợp với câu nói về thói quen lặp lại này. 'Coming' sai vì thiếu trợ động từ và không đúng ngữ pháp ở vị trí này.",
        usageTip: "Dùng khi chia sẻ về thói quen uống cà phê trước khi đi làm mỗi ngày.",
      },
      {
        id: "st-29-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🚗",
        english: "I usually grab coffee on my way here.",
        vietnamese: "Tôi thường mua cà phê trên đường đến đây.",
        promptContext:
          "Khách chia sẻ với chị rằng trước khi đến tiệm, khách thường tiện đường mua một ly cà phê.",
        choices: [
          { id: "a", text: "I usually grab coffee on my way here." },
          { id: "b", text: "The nail file is on the counter." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách chia sẻ thói quen mua cà phê trên đường đến tiệm, một câu chuyện đời thường rất tự nhiên.",
        wrongAnswerExplanations:
          "'The nail file is on the counter.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ thói quen mua cà phê trên đường đi đến một nơi nào đó.",
      },
      {
        id: "st-29-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "There's a good coffee shop right around the corner.",
        vietnamese: "Có một quán cà phê ngon ngay góc đường này.",
        audioText: "There's a good coffee shop right around the corner.",
        choices: [
          { id: "a", text: "Có một quán cà phê ngon ngay góc đường này." },
          { id: "b", text: "Không có quán cà phê nào gần đây." },
          { id: "c", text: "Quán cà phê gần đây đã đóng cửa." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giới thiệu về một quán cà phê ngon gần tiệm, một cách trò chuyện hữu ích và thân thiện.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi giới thiệu cho khách về một quán cà phê ngon gần khu vực tiệm.",
      },
      {
        id: "st-29-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "📍",
        english: "Oh really? I'll have to check it out.",
        vietnamese: "Ồ vậy hả? Tôi sẽ phải thử ghé qua đó.",
        prompt: "There's a good coffee shop right around the corner.",
        promptVietnamese: "Có một quán cà phê ngon ngay góc đường này.",
        choices: [
          { id: "a", text: "Oh really? I'll have to check it out." },
          { id: "b", text: "We changed our shop hours today." },
          { id: "c", text: "Your total comes to fifteen dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được giới thiệu một quán cà phê mới, khách thể hiện sự tò mò và hứng thú muốn ghé thử.",
        wrongAnswerExplanations:
          "'We changed our shop hours today.' hoàn toàn không liên quan đến lời giới thiệu về quán cà phê. 'Your total comes to fifteen dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi thể hiện sự tò mò và muốn ghé thử một nơi mới được giới thiệu.",
      },
      {
        id: "st-29-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🗺️",
        english: "I'll write down the name for you.",
        vietnamese: "Tôi sẽ viết tên quán ra cho bạn.",
        promptContext: "Chloe muốn viết ra tên quán cà phê để khách dễ tìm hơn sau này.",
        choices: [
          { id: "a", text: "I'll write down the name for you." },
          { id: "b", text: "I'll write down the name for you to." },
          { id: "c", text: "I'll writing down the name for you." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'I'll' phải dùng động từ nguyên mẫu, nên 'write' là đúng — câu này nghĩa là sẽ viết tên quán ra cho khách.",
        wrongAnswerExplanations:
          "'I'll write down the name for you to.' sai vì thừa chữ 'to' ở cuối câu không cần thiết. 'I'll writing down the name for you.' sai vì sau 'will' (rút gọn 'll) phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi muốn viết ra thông tin hữu ích để giúp khách dễ nhớ hơn.",
      },
      {
        id: "st-29-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌞",
        english: "A good cup of coffee can really start your day right.",
        vietnamese: "Một ly cà phê ngon thật sự có thể khởi đầu ngày mới tốt đẹp.",
        promptContext: "Chloe muốn nói rằng một ly cà phê ngon có thể giúp bắt đầu một ngày thật tốt.",
        choices: [
          { id: "a", text: "A good cup of coffee can really start your day right." },
          { id: "b", text: "A good cup of coffee can really starts your day right." },
          { id: "c", text: "A good cup coffee of can really start your day right." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'can' luôn dùng động từ nguyên mẫu, nên 'start' là đúng — câu này giữ đúng cấu trúc 'a cup of coffee'.",
        wrongAnswerExplanations:
          "'A good cup of coffee can really starts your day right.' sai vì sau 'can' không được thêm 's' vào động từ. 'A good cup coffee of can really start your day right.' sai vì đảo lộn thứ tự của cụm từ 'cup of coffee'.",
        usageTip: "Dùng khi muốn nói rằng một ly cà phê ngon có thể giúp khởi đầu ngày mới thật tốt.",
      },
    ],
  },
];
