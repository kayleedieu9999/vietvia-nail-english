import { Lesson } from "@/types/content";

/**
 * Small Talk — subtopic group 6: Cà phê / đồ uống (lessons 26-30).
 */
export const smallTalkGroup06: Lesson[] = [
  {
    id: "st-26",
    slug: "st-26-ca-phe-do-uong-1",
    topicId: "small-talk",
    title: "Mời khách uống nước",
    description: "Cách mời khách một ly nước hoặc đồ uống trong lúc làm nails.",
    level: "practice",
    section: "THỰC HÀNH",
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
    topicId: "small-talk",
    title: "Nói về cà phê Việt Nam",
    description: "Cách trò chuyện về hương vị và cách pha cà phê Việt Nam với khách.",
    level: "practice",
    section: "THỰC HÀNH",
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
    topicId: "small-talk",
    title: "Hỏi khách thích đồ uống gì",
    description: "Cách hỏi khách về loại đồ uống họ thích khi trò chuyện nhẹ nhàng.",
    level: "practice",
    section: "THỰC HÀNH",
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
    topicId: "small-talk",
    title: "Trò chuyện về buổi sáng và cà phê",
    description: "Cách trò chuyện nhẹ nhàng về thói quen uống cà phê vào buổi sáng.",
    level: "practice",
    section: "THỰC HÀNH",
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
  {
    id: "st-30",
    slug: "st-30-ca-phe-do-uong-5",
    topicId: "small-talk",
    title: "Trò chuyện về trà và đồ uống lành mạnh",
    description: "Cách trò chuyện nhẹ nhàng về trà và các loại đồ uống lành mạnh với khách.",
    level: "practice",
    section: "THỰC HÀNH",
    questions: [
      {
        id: "st-30-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🍵",
        english: "I switched to tea because it's gentler on my stomach.",
        vietnamese: "Tôi chuyển sang uống trà vì nó nhẹ nhàng hơn với dạ dày tôi.",
        prompt: "Why did you switch from coffee to tea?",
        promptVietnamese: "Sao bạn lại chuyển từ cà phê sang trà?",
        choices: [
          { id: "a", text: "I switched to tea because it's gentler on my stomach." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We open at nine every morning." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi lý do chuyển sang uống trà, mình chia sẻ lý do sức khỏe cụ thể, một cách trò chuyện chân thật.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về trà. 'We open at nine every morning.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi giải thích lý do mình chuyển từ cà phê sang trà.",
      },
      {
        id: "st-30-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🌿",
        english: "Green tea is my favorite these days.",
        vietnamese: "Gần đây trà xanh là loại tôi thích nhất.",
        promptContext:
          "Khách chia sẻ với chị rằng gần đây khách rất thích uống trà xanh mỗi ngày.",
        choices: [
          { id: "a", text: "Green tea is my favorite these days." },
          { id: "b", text: "Your total comes to twenty dollars." },
          { id: "c", text: "We just got new nail colors in." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách chia sẻ về loại trà mà mình đang thích nhất gần đây, một câu chuyện nhẹ nhàng về sở thích cá nhân.",
        wrongAnswerExplanations:
          "'Your total comes to twenty dollars.' nói về giá tiền, không liên quan đến câu hỏi về trà. 'We just got new nail colors in.' nói về màu sơn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi chia sẻ về loại trà hoặc đồ uống mình đang thích gần đây.",
      },
      {
        id: "st-30-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🍯",
        english: "I like to add a little honey to my tea.",
        vietnamese: "Tôi thích cho một chút mật ong vào trà.",
        choices: [
          { id: "a", text: "Tôi thích cho một chút mật ong vào trà." },
          { id: "b", text: "Tôi không bao giờ uống trà ngọt." },
          { id: "c", text: "Tôi thích trà đắng, không thêm gì cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ thói quen thêm một chút mật ong vào trà — một cách trò chuyện nhẹ nhàng về sở thích uống trà.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ về cách mình thích pha trà, ví dụ thêm mật ong.",
      },
      {
        id: "st-30-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "That sounds so soothing, honestly.",
        vietnamese: "Nghe có vẻ thư giãn thật đó.",
        prompt: "I like to add a little honey to my tea.",
        promptVietnamese: "Tôi thích cho một chút mật ong vào trà.",
        choices: [
          { id: "a", text: "That sounds so soothing, honestly." },
          { id: "b", text: "We only take card today." },
          { id: "c", text: "Your nail shape looks perfect." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về cách pha trà với mật ong, khách nhận xét rằng nghe có vẻ rất dễ chịu, thư giãn.",
        wrongAnswerExplanations:
          "'We only take card today.' hoàn toàn không liên quan đến câu chuyện về trà. 'Your nail shape looks perfect.' là lời khen về hình dáng móng, chưa hợp lúc này.",
        usageTip: "Dùng khi nhận xét về một điều gì đó nghe có vẻ dễ chịu, thư giãn.",
      },
      {
        id: "st-30-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🍋",
        english: "I drink warm water with lemon every morning.",
        vietnamese: "Mỗi sáng tôi uống nước ấm với chanh.",
        prompt: "I drink warm water with lemon ___ morning.",
        choices: [
          { id: "a", text: "every" },
          { id: "b", text: "each" },
          { id: "c", text: "all" },
        ],
        correctAnswer: "a",
        explanation:
          "'Every morning' là cụm cố định nghĩa là 'mỗi buổi sáng' — dùng 'every' là đúng và tự nhiên nhất.",
        wrongAnswerExplanations:
          "'Each morning' cũng có thể dùng nhưng không phải cụm quen thuộc nhất trong ngữ cảnh này so với 'every morning'. 'All morning' mang nghĩa 'suốt cả buổi sáng', không đúng ý nghĩa 'mỗi sáng' cần diễn đạt.",
        usageTip: "Dùng khi chia sẻ về thói quen uống nước ấm với chanh vào mỗi buổi sáng.",
      },
      {
        id: "st-30-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧃",
        english: "That's supposed to be really good for you.",
        vietnamese: "Nghe nói uống vậy tốt cho sức khỏe lắm.",
        promptContext:
          "Chị chia sẻ với khách về thói quen uống nước ấm với chanh mỗi sáng, và khách muốn nhận xét về lợi ích của thói quen đó.",
        choices: [
          { id: "a", text: "That's supposed to be really good for you." },
          { id: "b", text: "The nail dryer is broken today." },
          { id: "c", text: "We need to close early tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về một thói quen tốt cho sức khỏe, khách có thể nhận xét đồng tình rằng thói quen đó thật sự có lợi.",
        wrongAnswerExplanations:
          "'The nail dryer is broken today.' nói về máy sấy móng bị hỏng, hoàn toàn không liên quan. 'We need to close early tonight.' nói về việc đóng cửa sớm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi nhận xét đồng tình về lợi ích sức khỏe của một thói quen ăn uống.",
      },
      {
        id: "st-30-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "It helps me feel more awake without coffee.",
        vietnamese: "Nó giúp tôi tỉnh táo hơn mà không cần cà phê.",
        audioText: "It helps me feel more awake without coffee.",
        choices: [
          { id: "a", text: "Nó giúp tôi tỉnh táo hơn mà không cần cà phê." },
          { id: "b", text: "Nó làm tôi buồn ngủ hơn." },
          { id: "c", text: "Nó không có tác dụng gì cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng thói quen uống nước ấm với chanh giúp tỉnh táo mà không cần dùng cà phê.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi chia sẻ lợi ích của một thói quen uống nước thay thế cho cà phê.",
      },
      {
        id: "st-30-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👏",
        english: "I might try that instead of coffee sometime.",
        vietnamese: "Lúc nào tôi cũng nên thử cách đó thay vì uống cà phê.",
        prompt: "It helps me feel more awake without coffee.",
        promptVietnamese: "Nó giúp tôi tỉnh táo hơn mà không cần cà phê.",
        choices: [
          { id: "a", text: "I might try that instead of coffee sometime." },
          { id: "b", text: "We ran out of hand cream today." },
          { id: "c", text: "Your nail color looks fresh now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về một thói quen tốt thay thế cho cà phê, khách thể hiện sự quan tâm và muốn thử vào lúc nào đó.",
        wrongAnswerExplanations:
          "'We ran out of hand cream today.' hoàn toàn không liên quan đến câu chuyện về đồ uống. 'Your nail color looks fresh now.' là lời khen về màu sơn, chưa hợp lúc này.",
        usageTip: "Dùng khi thể hiện sự quan tâm và muốn thử một thói quen tốt được chia sẻ.",
      },
      {
        id: "st-30-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌸",
        english: "It's a small change, but it makes a difference.",
        vietnamese: "Đó chỉ là một thay đổi nhỏ, nhưng lại tạo ra khác biệt.",
        promptContext: "Chloe muốn chia sẻ rằng dù chỉ là một thay đổi nhỏ trong thói quen, nhưng nó thật sự có tác dụng.",
        choices: [
          { id: "a", text: "It's a small change, but it makes a difference." },
          { id: "b", text: "It's a small change, but it make a difference." },
          { id: "c", text: "It's a small change, but it makes difference a." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'it' là số ít nên động từ phải chia là 'makes' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'It's a small change, but it make a difference.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít 'it'. 'It's a small change, but it makes difference a.' sai vì đặt mạo từ 'a' lạc chỗ ở cuối câu.",
        usageTip: "Dùng khi muốn nói rằng một thay đổi nhỏ trong thói quen có thể mang lại kết quả tốt.",
      },
      {
        id: "st-30-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🍃",
        english: "Finding what works for you takes a little time.",
        vietnamese: "Tìm ra cách phù hợp với bản thân cần một chút thời gian.",
        promptContext: "Chloe muốn nói rằng việc tìm ra thói quen sức khỏe phù hợp với mỗi người cần thời gian để thử.",
        choices: [
          { id: "a", text: "Finding what works for you takes a little time." },
          { id: "b", text: "Finding what works for you take a little time." },
          { id: "c", text: "Finding what work for you takes a little time." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'Finding what works for you' được xem là số ít nên động từ chia là 'takes' — câu này đúng ngữ pháp.",
        wrongAnswerExplanations:
          "'Finding what works for you take a little time.' sai vì thiếu 's' ở động từ 'takes' khi chủ ngữ là cụm số ít. 'Finding what work for you takes a little time.' sai vì trong mệnh đề 'what works for you', động từ phải là 'works' không phải 'work'.",
        usageTip: "Dùng khi động viên ai đó rằng việc tìm ra thói quen sức khỏe phù hợp cần thời gian.",
      },
    ],
  },
];
