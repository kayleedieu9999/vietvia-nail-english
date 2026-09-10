import { Lesson } from "@/types/content";

/**
 * Small Talk — subtopic group 5: Đồ ăn & nhà hàng (lessons 21-25).
 */
export const smallTalkGroup05: Lesson[] = [
  {
    id: "st-21",
    slug: "st-21-do-an-nha-hang-1",
    topicId: "small-talk",
    title: "Hỏi về nhà hàng mới",
    description: "Cách hỏi khách xem họ đã thử nhà hàng nào gần đây chưa.",
    level: "practice",
    section: "THỰC HÀNH",
    questions: [
      {
        id: "st-21-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🍽️",
        english: "Yes, I tried it last week. It was really good.",
        vietnamese: "Có, tôi đã thử tuần trước. Ngon lắm.",
        prompt: "Have you tried this new restaurant on the corner?",
        promptVietnamese: "Bạn đã thử nhà hàng mới ở góc đường chưa?",
        choices: [
          { id: "a", text: "Yes, I tried it last week. It was really good." },
          { id: "b", text: "It's twenty dollars for that design." },
          { id: "c", text: "We're closed on Mondays." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về một nhà hàng mới, mình trả lời thật, chia sẻ trải nghiệm cá nhân để trò chuyện thêm tự nhiên.",
        wrongAnswerExplanations:
          "'It's twenty dollars for that design.' nói về giá dịch vụ, không liên quan đến câu hỏi về nhà hàng. 'We're closed on Mondays.' nói về ngày nghỉ, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình có thử một nhà hàng mới nào chưa.",
      },
      {
        id: "st-21-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🍜",
        english: "Have you been to that pho place downtown?",
        vietnamese: "Bạn đã đến quán phở ở trung tâm thành phố chưa?",
        promptContext:
          "Khách nghe nói có một quán phở mới rất ngon ở trung tâm thành phố, và muốn hỏi xem chị đã đến đó chưa.",
        choices: [
          { id: "a", text: "Have you been to that pho place downtown?" },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only take walk-ins today." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách hỏi thăm xem mình đã từng đến một quán ăn cụ thể chưa, một câu hỏi small talk rất tự nhiên khi nói về đồ ăn.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến câu hỏi về quán ăn. 'We only take walk-ins today.' nói về việc nhận khách không hẹn, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi ai đó xem họ đã từng đến một quán ăn cụ thể chưa.",
      },
      {
        id: "st-21-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "😋",
        english: "I heard the food there is amazing.",
        vietnamese: "Tôi nghe nói đồ ăn ở đó ngon tuyệt.",
        choices: [
          { id: "a", text: "Tôi nghe nói đồ ăn ở đó ngon tuyệt." },
          { id: "b", text: "Tôi nghe nói quán đó đã đóng cửa." },
          { id: "c", text: "Tôi nghe nói giá ở đó rất đắt." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng mình nghe người khác nói đồ ăn ở một nơi nào đó rất ngon — một cách trò chuyện tự nhiên về nhà hàng.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc đóng cửa hoặc giá đắt — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ những gì mình nghe được về một nhà hàng mà mình chưa thử.",
      },
      {
        id: "st-21-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🤔",
        english: "You should try it, I think you'd like it.",
        vietnamese: "Bạn nên thử đi, tôi nghĩ bạn sẽ thích nó.",
        prompt: "I haven't tried that place yet, is it good?",
        promptVietnamese: "Tôi chưa thử quán đó, ngon không?",
        choices: [
          { id: "a", text: "You should try it, I think you'd like it." },
          { id: "b", text: "We are open every day this week." },
          { id: "c", text: "This nail shape is very popular now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi liệu một quán ăn có ngon không, mình có thể gợi ý khách nên thử vì tin rằng khách sẽ thích.",
        wrongAnswerExplanations:
          "'We are open every day this week.' nói về giờ mở cửa của tiệm, không liên quan đến câu hỏi này. 'This nail shape is very popular now.' nói về hình dáng móng, hoàn toàn lạc đề.",
        usageTip: "Dùng khi gợi ý ai đó nên thử một nhà hàng mà mình tin họ sẽ thích.",
      },
      {
        id: "st-21-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "📍",
        english: "It's a little far, but worth the drive.",
        vietnamese: "Hơi xa một chút, nhưng đáng để lái xe đến.",
        prompt: "It's a little far, but worth the ___.",
        choices: [
          { id: "a", text: "drive" },
          { id: "b", text: "driving" },
          { id: "c", text: "drove" },
        ],
        correctAnswer: "a",
        explanation:
          "'Worth the drive' là cụm cố định nghĩa là 'đáng để lái xe đến' — dùng danh từ 'drive' là đúng.",
        wrongAnswerExplanations:
          "'Driving' không phù hợp trong cụm cố định này. 'Drove' là dạng quá khứ của động từ, không dùng được ở vị trí danh từ này.",
        usageTip: "Dùng khi nói về một nhà hàng hơi xa nhưng vẫn đáng để đi.",
      },
      {
        id: "st-21-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🥡",
        english: "I usually just order takeout instead of eating there.",
        vietnamese: "Tôi thường chỉ mua mang về thay vì ăn tại quán.",
        promptContext:
          "Khách chia sẻ với chị rằng khách thích mua đồ ăn mang về hơn là ngồi ăn tại nhà hàng.",
        choices: [
          { id: "a", text: "I usually just order takeout instead of eating there." },
          { id: "b", text: "Your nails need to dry a bit longer." },
          { id: "c", text: "We are almost out of gel polish." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách chia sẻ thói quen ăn uống của mình, cụ thể là thích mua mang về hơn ngồi tại quán — một cách trò chuyện rất đời thường.",
        wrongAnswerExplanations:
          "'Your nails need to dry a bit longer.' nói về việc chờ khô sơn, không liên quan đến câu chuyện về đồ ăn. 'We are almost out of gel polish.' nói về việc thiếu sơn gel, hoàn toàn lạc đề.",
        usageTip: "Dùng khi chia sẻ thói quen thích mua đồ ăn mang về hơn là ngồi ăn tại quán.",
      },
      {
        id: "st-21-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "That's smart, especially when you're busy.",
        vietnamese: "Vậy thông minh đó, đặc biệt khi bạn bận.",
        audioText: "That's smart, especially when you're busy.",
        choices: [
          { id: "a", text: "Vậy thông minh đó, đặc biệt khi bạn bận." },
          { id: "b", text: "Vậy không tốt cho sức khỏe của bạn." },
          { id: "c", text: "Bạn nên nấu ăn ở nhà nhiều hơn." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này khen ngợi thói quen mua đồ ăn mang về khi bận, một cách trò chuyện tích cực và đồng cảm.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa tiêu cực hoặc khác, không đúng với ý nghĩa tích cực của câu nghe.",
        usageTip: "Dùng khi ai đó chia sẻ thói quen ăn uống của họ khi bận rộn.",
      },
      {
        id: "st-21-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🍕",
        english: "Pizza is my go-to when I'm in a rush.",
        vietnamese: "Pizza là món tôi chọn mỗi khi vội.",
        prompt: "What do you usually order when you're short on time?",
        promptVietnamese: "Khi ít thời gian bạn thường gọi món gì?",
        choices: [
          { id: "a", text: "Pizza is my go-to when I'm in a rush." },
          { id: "b", text: "We only serve customers by appointment." },
          { id: "c", text: "Your nail color is drying nicely." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi món ăn nhanh yêu thích, mình chia sẻ đơn giản, ví dụ pizza là món tiện lợi khi vội.",
        wrongAnswerExplanations:
          "'We only serve customers by appointment.' nói về việc chỉ nhận khách có hẹn, không liên quan đến câu hỏi về đồ ăn. 'Your nail color is drying nicely.' nói về việc sơn đang khô tốt, hoàn toàn lạc đề.",
        usageTip: "Dùng khi chia sẻ về món ăn tiện lợi mình thường chọn khi ít thời gian.",
      },
      {
        id: "st-21-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🍱",
        english: "I try to eat something healthy most days.",
        vietnamese: "Tôi cố ăn món gì đó lành mạnh vào hầu hết các ngày.",
        promptContext: "Chloe muốn chia sẻ rằng mình cố gắng ăn uống lành mạnh trong ngày làm việc.",
        choices: [
          { id: "a", text: "I try to eat something healthy most days." },
          { id: "b", text: "I try eat something healthy most days." },
          { id: "c", text: "I try to eating something healthy most days." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'try to' phải dùng động từ nguyên mẫu, nên 'eat' là đúng — câu này nghĩa là cố gắng ăn uống lành mạnh.",
        wrongAnswerExplanations:
          "'I try eat something healthy most days.' thiếu chữ 'to' sau 'try'. 'I try to eating something healthy most days.' sai vì sau 'to' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi chia sẻ về việc cố gắng ăn uống lành mạnh trong ngày làm việc bận rộn.",
      },
      {
        id: "st-21-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌮",
        english: "There are so many good places to eat around here.",
        vietnamese: "Ở khu này có nhiều quán ăn ngon lắm.",
        promptContext: "Chloe muốn nói về việc khu vực xung quanh tiệm có rất nhiều quán ăn ngon.",
        choices: [
          { id: "a", text: "There are so many good places to eat around here." },
          { id: "b", text: "There is so many good places to eat around here." },
          { id: "c", text: "There are so many good place to eat around here." },
        ],
        correctAnswer: "a",
        explanation:
          "'Places' là số nhiều nên phải dùng 'are', không dùng 'is' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'There is so many good places to eat around here.' sai vì chủ ngữ số nhiều 'places' phải đi với 'are'. 'There are so many good place to eat around here.' sai vì 'many' phải đi với danh từ số nhiều 'places', không dùng số ít 'place'.",
        usageTip: "Dùng khi muốn giới thiệu với khách rằng khu vực xung quanh có nhiều quán ăn ngon.",
      },
    ],
  },
  {
    id: "st-22",
    slug: "st-22-do-an-nha-hang-2",
    topicId: "small-talk",
    title: "Hỏi khách có thích đồ ăn Việt không",
    description: "Cách trò chuyện về việc khách có thích các món ăn Việt Nam không.",
    level: "practice",
    section: "THỰC HÀNH",
    questions: [
      {
        id: "st-22-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🍲",
        english: "I love it! Pho is my favorite.",
        vietnamese: "Tôi thích lắm! Phở là món tôi yêu thích nhất.",
        prompt: "Do you like Vietnamese food?",
        promptVietnamese: "Bạn có thích món ăn Việt Nam không?",
        choices: [
          { id: "a", text: "I love it! Pho is my favorite." },
          { id: "b", text: "It's fifteen dollars for a fill-in." },
          { id: "c", text: "We close early on Sundays." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi có thích món ăn Việt Nam không, mình trả lời thật, kèm món mình yêu thích để trò chuyện thêm tự nhiên.",
        wrongAnswerExplanations:
          "'It's fifteen dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về đồ ăn. 'We close early on Sundays.' nói về giờ đóng cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình có thích món ăn Việt Nam không.",
      },
      {
        id: "st-22-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🍤",
        english: "What's your favorite Vietnamese dish?",
        vietnamese: "Món ăn Việt Nam bạn thích nhất là gì?",
        promptContext:
          "Khách tò mò về văn hóa Việt Nam và muốn hỏi chị món ăn Việt Nam mà chị thích nhất.",
        choices: [
          { id: "a", text: "What's your favorite Vietnamese dish?" },
          { id: "b", text: "Your total today is twenty dollars." },
          { id: "c", text: "We take both cash and card." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách hỏi thăm về món ăn Việt Nam mà mình thích nhất, một câu hỏi tự nhiên khi khách tò mò về văn hóa Việt.",
        wrongAnswerExplanations:
          "'Your total today is twenty dollars.' nói về giá tiền, không liên quan đến câu hỏi này. 'We take both cash and card.' nói về thanh toán, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách tò mò và muốn hỏi về món ăn Việt Nam mà mình thích nhất.",
      },
      {
        id: "st-22-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🥢",
        english: "Spring rolls are my favorite Vietnamese food.",
        vietnamese: "Chả giò là món ăn Việt Nam tôi thích nhất.",
        choices: [
          { id: "a", text: "Chả giò là món ăn Việt Nam tôi thích nhất." },
          { id: "b", text: "Tôi không thích món ăn Việt Nam." },
          { id: "c", text: "Tôi chưa từng ăn món Việt Nam nào." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng chả giò là món ăn Việt Nam yêu thích của mình — một cách trò chuyện vui về ẩm thực Việt.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ với khách về món ăn Việt Nam mà mình thích nhất.",
      },
      {
        id: "st-22-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😄",
        english: "Those are so good! I could eat them every day.",
        vietnamese: "Món đó ngon lắm! Tôi có thể ăn mỗi ngày luôn.",
        prompt: "Spring rolls are my favorite Vietnamese food.",
        promptVietnamese: "Chả giò là món ăn Việt Nam tôi thích nhất.",
        choices: [
          { id: "a", text: "Those are so good! I could eat them every day." },
          { id: "b", text: "We ran out of nail polish remover." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi mình chia sẻ món ăn yêu thích, khách có thể đồng tình và nói rằng họ cũng rất thích món đó.",
        wrongAnswerExplanations:
          "'We ran out of nail polish remover.' hoàn toàn không liên quan đến câu chuyện về món ăn. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng tình về một món ăn ngon mà cả hai đều thích.",
      },
      {
        id: "st-22-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🍚",
        english: "Have you ever tried Vietnamese sticky rice?",
        vietnamese: "Bạn đã từng thử xôi Việt Nam chưa?",
        prompt: "Have you ever ___ Vietnamese sticky rice?",
        choices: [
          { id: "a", text: "tried" },
          { id: "b", text: "try" },
          { id: "c", text: "tries" },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc 'Have you ever + động từ quá khứ phân từ' dùng để hỏi về trải nghiệm — 'tried' là đúng vì đây là dạng quá khứ phân từ của 'try'.",
        wrongAnswerExplanations:
          "'Try' sai vì sau 'have you ever' phải dùng dạng quá khứ phân từ, không dùng nguyên mẫu. 'Tries' cũng sai vì đây không phải câu chia theo chủ ngữ số ít ở hiện tại đơn.",
        usageTip: "Dùng khi hỏi khách xem họ đã từng thử một món ăn Việt Nam cụ thể chưa.",
      },
      {
        id: "st-22-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🌶️",
        english: "Is Vietnamese food usually spicy?",
        vietnamese: "Món ăn Việt Nam thường có cay không?",
        promptContext:
          "Khách chưa quen với ẩm thực Việt Nam và tò mò muốn hỏi xem đồ ăn Việt có cay như một số nước châu Á khác không.",
        choices: [
          { id: "a", text: "Is Vietnamese food usually spicy?" },
          { id: "b", text: "Your nail color just came in today." },
          { id: "c", text: "We are open on holidays too." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách tò mò về mức độ cay của món ăn Việt Nam, một câu hỏi rất tự nhiên khi chưa quen với ẩm thực Việt.",
        wrongAnswerExplanations:
          "'Your nail color just came in today.' nói về việc hàng mới về, không liên quan đến câu hỏi về đồ ăn. 'We are open on holidays too.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách tò mò về mức độ cay hoặc đặc điểm của món ăn Việt Nam.",
      },
      {
        id: "st-22-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "It depends, but you can always ask for it mild.",
        vietnamese: "Tùy món, nhưng bạn luôn có thể yêu cầu ít cay hơn.",
        audioText: "It depends, but you can always ask for it mild.",
        choices: [
          { id: "a", text: "Tùy món, nhưng bạn luôn có thể yêu cầu ít cay hơn." },
          { id: "b", text: "Món ăn Việt Nam luôn rất cay." },
          { id: "c", text: "Món ăn Việt Nam không bao giờ cay." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giải thích rằng độ cay tùy vào từng món, và khách luôn có thể yêu cầu làm nhạt hơn nếu không ăn cay được.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói tuyệt đối 'luôn' hoặc 'không bao giờ' — không đúng với ý nghĩa linh hoạt trong câu nghe.",
        usageTip: "Dùng khi giải thích cho khách về độ cay của món ăn Việt Nam có thể điều chỉnh được.",
      },
      {
        id: "st-22-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👍",
        english: "Good to know! I'll keep that in mind.",
        vietnamese: "Biết rồi! Tôi sẽ nhớ điều đó.",
        prompt: "You can always ask for it mild if it's too spicy.",
        promptVietnamese: "Bạn luôn có thể yêu cầu ít cay hơn nếu nó quá cay.",
        choices: [
          { id: "a", text: "Good to know! I'll keep that in mind." },
          { id: "b", text: "We are running low on gel polish." },
          { id: "c", text: "Your nail shape looks amazing." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hướng dẫn hữu ích về việc yêu cầu ít cay hơn, khách cảm ơn và nói sẽ nhớ lời khuyên đó.",
        wrongAnswerExplanations:
          "'We are running low on gel polish.' hoàn toàn không liên quan đến lời khuyên về đồ ăn. 'Your nail shape looks amazing.' là lời khen về móng, chưa hợp lúc này.",
        usageTip: "Dùng khi nhận được một lời khuyên hữu ích và muốn thể hiện sự cảm ơn.",
      },
      {
        id: "st-22-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🍜",
        english: "I can recommend a good place if you want.",
        vietnamese: "Nếu bạn muốn, tôi có thể gợi ý một quán ngon.",
        promptContext: "Chloe muốn gợi ý cho khách một quán ăn Việt Nam ngon nếu khách muốn thử.",
        choices: [
          { id: "a", text: "I can recommend a good place if you want." },
          { id: "b", text: "I can recommend a good place if you wants." },
          { id: "c", text: "I can recommending a good place if you want." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau chủ ngữ 'you' dùng động từ nguyên mẫu 'want', không thêm 's' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'I can recommend a good place if you wants.' sai vì thêm 's' vào động từ sau chủ ngữ 'you'. 'I can recommending a good place if you want.' sai vì sau 'can' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi muốn gợi ý cho khách một quán ăn ngon mà mình biết.",
      },
      {
        id: "st-22-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🍛",
        english: "Vietnamese food has a little bit of everything.",
        vietnamese: "Món ăn Việt Nam có đủ một chút của tất cả mọi thứ.",
        promptContext: "Chloe muốn nói về sự đa dạng của món ăn Việt Nam, có đủ vị chua, cay, mặn, ngọt.",
        choices: [
          { id: "a", text: "Vietnamese food has a little bit of everything." },
          { id: "b", text: "Vietnamese food have a little bit of everything." },
          { id: "c", text: "Vietnamese food has a little bit everything of." },
        ],
        correctAnswer: "a",
        explanation:
          "'Vietnamese food' là danh từ không đếm được số ít nên động từ phải chia là 'has' — câu này đúng ngữ pháp.",
        wrongAnswerExplanations:
          "'Vietnamese food have a little bit of everything.' sai vì chủ ngữ số ít phải đi với 'has', không dùng 'have'. 'Vietnamese food has a little bit everything of.' sai vì đặt 'of' lạc chỗ trong câu.",
        usageTip: "Dùng khi muốn giới thiệu về sự đa dạng và phong phú của món ăn Việt Nam.",
      },
    ],
  },
  {
    id: "st-23",
    slug: "st-23-do-an-nha-hang-3",
    topicId: "small-talk",
    title: "Gợi ý món ăn cho khách",
    description: "Cách gợi ý món ăn hoặc quán ăn cho khách một cách tự nhiên.",
    level: "practice",
    section: "THỰC HÀNH",
    questions: [
      {
        id: "st-23-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🍜",
        english: "I'd recommend the beef pho, it's amazing.",
        vietnamese: "Tôi khuyên bạn nên thử phở bò, ngon tuyệt luôn.",
        prompt: "What should I order if I go there?",
        promptVietnamese: "Tôi nên gọi món gì nếu đến đó?",
        choices: [
          { id: "a", text: "I'd recommend the beef pho, it's amazing." },
          { id: "b", text: "It's twenty dollars for a manicure." },
          { id: "c", text: "We're open on weekends too." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi nên gọi món gì, mình gợi ý cụ thể một món mà mình tin là ngon, ở đây là phở bò.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về món ăn. 'We're open on weekends too.' nói về giờ mở cửa tiệm, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình nên gọi món gì tại một quán ăn cụ thể.",
      },
      {
        id: "st-23-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🥗",
        english: "If you like fresh food, you'll love the spring rolls there.",
        vietnamese: "Nếu bạn thích món tươi mát, bạn sẽ thích chả giò cuốn ở đó lắm.",
        promptContext:
          "Khách hỏi chị nên gọi món gì ở một quán Việt Nam, và chị muốn gợi ý món chả giò cuốn tươi.",
        choices: [
          { id: "a", text: "If you like fresh food, you'll love the spring rolls there." },
          { id: "b", text: "Your total comes to twenty-five dollars." },
          { id: "c", text: "We are out of that shade of pink." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi gợi ý món ăn, mình có thể liên kết với sở thích của khách, ví dụ nếu khách thích món tươi mát thì gợi ý chả giò cuốn.",
        wrongAnswerExplanations:
          "'Your total comes to twenty-five dollars.' nói về giá tiền, không liên quan đến câu hỏi về món ăn. 'We are out of that shade of pink.' nói về việc hết màu sơn, hoàn toàn lạc đề.",
        usageTip: "Dùng khi gợi ý món ăn dựa theo sở thích cụ thể của khách.",
      },
      {
        id: "st-23-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🍮",
        english: "You have to try the Vietnamese coffee flan.",
        vietnamese: "Bạn phải thử bánh flan cà phê Việt Nam đi.",
        choices: [
          { id: "a", text: "Bạn phải thử bánh flan cà phê Việt Nam đi." },
          { id: "b", text: "Bạn không nên ăn món tráng miệng." },
          { id: "c", text: "Bạn nên tránh xa món cà phê." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này gợi ý mạnh mẽ rằng khách nên thử món bánh flan cà phê — một cách nói nhiệt tình khi gợi ý món ngon.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi thật sự muốn khuyên khách nên thử một món tráng miệng ngon.",
      },
      {
        id: "st-23-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😋",
        english: "That sounds delicious, I'll have to try it.",
        vietnamese: "Nghe ngon quá, tôi sẽ phải thử nó.",
        prompt: "You have to try the Vietnamese coffee flan.",
        promptVietnamese: "Bạn phải thử bánh flan cà phê Việt Nam đi.",
        choices: [
          { id: "a", text: "That sounds delicious, I'll have to try it." },
          { id: "b", text: "We only accept walk-ins today." },
          { id: "c", text: "Your nail polish is chipping already." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được gợi ý món ngon, khách phản hồi tích cực và nói sẽ thử món đó, giữ cuộc trò chuyện tự nhiên.",
        wrongAnswerExplanations:
          "'We only accept walk-ins today.' hoàn toàn không liên quan đến lời gợi ý món ăn. 'Your nail polish is chipping already.' nói về việc sơn bị tróc, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi được gợi ý một món ăn ngon và muốn phản hồi tích cực.",
      },
      {
        id: "st-23-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🍤",
        english: "This dish is not too spicy for beginners.",
        vietnamese: "Món này không quá cay cho người mới ăn thử.",
        prompt: "This dish is not too spicy for ___.",
        choices: [
          { id: "a", text: "beginners" },
          { id: "b", text: "begin" },
          { id: "c", text: "beginning" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau giới từ 'for' cần dùng danh từ, và 'beginners' nghĩa là 'người mới bắt đầu' là đúng nghĩa trong câu này.",
        wrongAnswerExplanations:
          "'Begin' là động từ, không dùng được sau giới từ 'for' theo nghĩa này. 'Beginning' là danh động từ mang nghĩa khác, không phù hợp với câu này.",
        usageTip: "Dùng khi giới thiệu món ăn phù hợp cho người mới bắt đầu thử món Việt Nam.",
      },
      {
        id: "st-23-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🍹",
        english: "What's a good drink to try there too?",
        vietnamese: "Ở đó có đồ uống nào ngon để thử không?",
        promptContext:
          "Khách vừa được gợi ý món ăn ngon, và muốn hỏi thêm về đồ uống ngon tại quán đó.",
        choices: [
          { id: "a", text: "What's a good drink to try there too?" },
          { id: "b", text: "Your appointment is at two o'clock." },
          { id: "c", text: "We need to order more supplies." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau khi hỏi về món ăn, khách có thể hỏi thêm về đồ uống ngon tại quán đó để có trải nghiệm đầy đủ hơn.",
        wrongAnswerExplanations:
          "'Your appointment is at two o'clock.' nói về giờ hẹn, không liên quan đến câu hỏi về đồ uống. 'We need to order more supplies.' nói về việc cần đặt thêm vật liệu, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thêm về đồ uống ngon sau khi đã nghe gợi ý về món ăn.",
      },
      {
        id: "st-23-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "The Vietnamese iced coffee there is really good.",
        vietnamese: "Cà phê đá Việt Nam ở đó rất ngon.",
        audioText: "The Vietnamese iced coffee there is really good.",
        choices: [
          { id: "a", text: "Cà phê đá Việt Nam ở đó rất ngon." },
          { id: "b", text: "Quán đó không bán cà phê." },
          { id: "c", text: "Cà phê ở đó quá đắng, không ai thích." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này gợi ý rằng cà phê đá Việt Nam ở quán đó rất ngon, một cách giới thiệu đồ uống nhiệt tình.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoặc không đúng với ý nghĩa tích cực trong câu nghe.",
        usageTip: "Dùng khi gợi ý cho khách thử một loại đồ uống ngon tại quán ăn Việt Nam.",
      },
      {
        id: "st-23-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🙌",
        english: "I'll definitely order that when I go.",
        vietnamese: "Tôi sẽ gọi món đó khi tôi đến đấy.",
        prompt: "The Vietnamese iced coffee there is really good.",
        promptVietnamese: "Cà phê đá Việt Nam ở đó rất ngon.",
        choices: [
          { id: "a", text: "I'll definitely order that when I go." },
          { id: "b", text: "We changed the shop hours today." },
          { id: "c", text: "Your total comes to fifteen dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được gợi ý đồ uống ngon, khách hào hứng nói sẽ chắc chắn gọi món đó khi đến quán.",
        wrongAnswerExplanations:
          "'We changed the shop hours today.' hoàn toàn không liên quan đến lời gợi ý đồ uống. 'Your total comes to fifteen dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi hào hứng đồng ý sẽ thử món hoặc đồ uống được gợi ý.",
      },
      {
        id: "st-23-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🍽️",
        english: "Let me know what you think after you try it.",
        vietnamese: "Sau khi thử rồi cho tôi biết bạn nghĩ sao nha.",
        promptContext: "Chloe muốn nhờ khách chia sẻ cảm nhận sau khi đã thử món hoặc quán ăn được gợi ý.",
        choices: [
          { id: "a", text: "Let me know what you think after you try it." },
          { id: "b", text: "Let me know what you think after you tried it." },
          { id: "c", text: "Let me knowing what you think after you try it." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'after you' dùng động từ hiện tại đơn 'try' vì đây là hành động sẽ xảy ra trong tương lai — câu này đúng ngữ pháp.",
        wrongAnswerExplanations:
          "'Let me know what you think after you tried it.' sai vì dùng thì quá khứ 'tried' không hợp với hành động chưa xảy ra. 'Let me knowing what you think after you try it.' sai vì sau 'let me' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi muốn nhờ ai đó chia sẻ cảm nhận sau khi thử món ăn được gợi ý.",
      },
      {
        id: "st-23-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🥮",
        english: "Food always makes for good conversation.",
        vietnamese: "Chuyện đồ ăn lúc nào cũng là đề tài trò chuyện hay.",
        promptContext: "Chloe muốn nói rằng nói về đồ ăn luôn là một cách trò chuyện thú vị với khách.",
        choices: [
          { id: "a", text: "Food always makes for good conversation." },
          { id: "b", text: "Food always make for good conversation." },
          { id: "c", text: "Food always makes good for conversation." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'food' là số ít nên động từ phải chia là 'makes' — câu này đúng ngữ pháp và tự nhiên.",
        wrongAnswerExplanations:
          "'Food always make for good conversation.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít 'food'. 'Food always makes good for conversation.' sai vì đặt 'good' lạc chỗ, làm sai cụm từ 'makes for good conversation'.",
        usageTip: "Dùng khi muốn nói rằng nói chuyện về đồ ăn luôn là một đề tài dễ trò chuyện.",
      },
    ],
  },
  {
    id: "st-24",
    slug: "st-24-do-an-nha-hang-4",
    topicId: "small-talk",
    title: "Chia sẻ về bữa ăn gần đây",
    description: "Cách trò chuyện về bữa ăn hoặc nhà hàng mà mình vừa đi ăn gần đây.",
    level: "practice",
    section: "THỰC HÀNH",
    questions: [
      {
        id: "st-24-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🍽️",
        english: "I went out for dinner with my family last night.",
        vietnamese: "Tối qua tôi đi ăn tối với gia đình.",
        prompt: "Did you do anything fun last night?",
        promptVietnamese: "Tối qua bạn có làm gì vui không?",
        choices: [
          { id: "a", text: "I went out for dinner with my family last night." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We close at six on Sundays." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi về tối hôm trước, mình chia sẻ hoạt động cụ thể, ví dụ đi ăn tối với gia đình.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về tối qua. 'We close at six on Sundays.' nói về giờ đóng cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi chia sẻ về hoạt động tối hôm trước, ví dụ đi ăn ngoài với gia đình.",
      },
      {
        id: "st-24-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🍝",
        english: "How was the food at the place you went?",
        vietnamese: "Đồ ăn ở quán bạn đến hôm đó thế nào?",
        promptContext:
          "Chị vừa nói với khách rằng mình đi ăn tối với gia đình hôm qua, và khách muốn hỏi thêm về đồ ăn ở đó.",
        choices: [
          { id: "a", text: "How was the food at the place you went?" },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We just restocked our nail supplies." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe ai đó chia sẻ về việc đi ăn ngoài, khách có thể hỏi thêm về đồ ăn để tiếp tục cuộc trò chuyện.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến câu hỏi về bữa ăn. 'We just restocked our nail supplies.' nói về việc nhập vật liệu mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thêm chi tiết về một bữa ăn mà ai đó vừa chia sẻ.",
      },
      {
        id: "st-24-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "😍",
        english: "It was so good, we finished everything.",
        vietnamese: "Ngon lắm, chúng tôi ăn hết luôn.",
        choices: [
          { id: "a", text: "Ngon lắm, chúng tôi ăn hết luôn." },
          { id: "b", text: "Dở lắm, chúng tôi không ăn hết được." },
          { id: "c", text: "Chúng tôi quên đặt món luôn." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng bữa ăn rất ngon đến mức ăn hết sạch — một cách khen món ăn rất tự nhiên và vui vẻ.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc không liên quan đến nội dung tích cực của câu tiếng Anh này.",
        usageTip: "Dùng khi muốn khen một bữa ăn thật sự rất ngon.",
      },
      {
        id: "st-24-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😄",
        english: "That's how you know it was a good meal!",
        vietnamese: "Vậy mới biết đó là một bữa ăn ngon!",
        prompt: "It was so good, we finished everything.",
        promptVietnamese: "Ngon lắm, chúng tôi ăn hết luôn.",
        choices: [
          { id: "a", text: "That's how you know it was a good meal!" },
          { id: "b", text: "We are out of that nail color." },
          { id: "c", text: "Your appointment starts soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi ai đó nói ăn hết sạch vì món ngon, khách có thể đáp lại vui vẻ, đồng ý rằng đó là dấu hiệu của một bữa ăn ngon.",
        wrongAnswerExplanations:
          "'We are out of that nail color.' hoàn toàn không liên quan đến câu chuyện về bữa ăn. 'Your appointment starts soon.' nói về giờ hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng tình vui vẻ rằng một bữa ăn ngon thường được ăn hết sạch.",
      },
      {
        id: "st-24-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🍛",
        english: "We ordered way too much food that night.",
        vietnamese: "Đêm đó chúng tôi gọi quá nhiều đồ ăn.",
        prompt: "We ordered way too much ___ that night.",
        choices: [
          { id: "a", text: "food" },
          { id: "b", text: "foods" },
          { id: "c", text: "meal" },
        ],
        correctAnswer: "a",
        explanation:
          "'Food' là danh từ không đếm được nên không thêm 's', và câu này nghĩa là gọi quá nhiều đồ ăn.",
        wrongAnswerExplanations:
          "'Foods' sai vì 'food' theo nghĩa chung không đếm được, không thêm 's'. 'Meal' mang nghĩa là 'bữa ăn' cụ thể, không phù hợp với ý nghĩa 'quá nhiều đồ ăn' trong câu này.",
        usageTip: "Dùng khi chia sẻ về việc đã gọi quá nhiều đồ ăn trong một bữa.",
      },
      {
        id: "st-24-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🥡",
        english: "We had to take the rest home in a box.",
        vietnamese: "Chúng tôi phải mang phần còn lại về nhà.",
        promptContext:
          "Chị chia sẻ với khách rằng bữa ăn hôm đó gọi quá nhiều, nên phải mang phần dư về nhà trong hộp.",
        choices: [
          { id: "a", text: "We had to take the rest home in a box." },
          { id: "b", text: "The nail file is in the drawer." },
          { id: "c", text: "We are closing the shop early today." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi gọi quá nhiều đồ ăn, mình có thể chia sẻ rằng phải mang phần dư về nhà — một câu chuyện đời thường rất dễ đồng cảm.",
        wrongAnswerExplanations:
          "'The nail file is in the drawer.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop early today.' nói về việc đóng cửa sớm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ về việc đã gọi quá nhiều đồ ăn và phải mang phần dư về nhà.",
      },
      {
        id: "st-24-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "Leftovers the next day are always the best part.",
        vietnamese: "Đồ ăn dư ngày hôm sau lúc nào cũng ngon nhất.",
        audioText: "Leftovers the next day are always the best part.",
        choices: [
          { id: "a", text: "Đồ ăn dư ngày hôm sau lúc nào cũng ngon nhất." },
          { id: "b", text: "Tôi không thích ăn đồ ăn dư." },
          { id: "c", text: "Đồ ăn dư luôn bị bỏ đi ngay." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ vui rằng phần đồ ăn dư ăn lại vào ngày sau thường rất ngon, một câu nói rất đời thường và dễ đồng cảm.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi chia sẻ niềm vui nhỏ về việc ăn lại đồ ăn dư vào ngày sau.",
      },
      {
        id: "st-24-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😂",
        english: "So true! I look forward to it the next day.",
        vietnamese: "Đúng vậy đó! Tôi mong đến ngày hôm sau để ăn tiếp.",
        prompt: "Leftovers the next day are always the best part.",
        promptVietnamese: "Đồ ăn dư ngày hôm sau lúc nào cũng ngon nhất.",
        choices: [
          { id: "a", text: "So true! I look forward to it the next day." },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe ai đó nói vui về đồ ăn dư, khách có thể đồng tình vui vẻ và chia sẻ cảm giác mong chờ được ăn tiếp vào ngày sau.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến câu chuyện về đồ ăn dư. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng tình vui vẻ với một câu nói về việc thích ăn đồ dư vào ngày sau.",
      },
      {
        id: "st-24-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🍴",
        english: "I always eat too much when the food is good.",
        vietnamese: "Tôi luôn ăn quá nhiều khi đồ ăn ngon.",
        promptContext: "Chloe muốn chia sẻ vui rằng mình luôn ăn quá nhiều mỗi khi gặp món ngon.",
        choices: [
          { id: "a", text: "I always eat too much when the food is good." },
          { id: "b", text: "I always eat too much when the food are good." },
          { id: "c", text: "I always eating too much when the food is good." },
        ],
        correctAnswer: "a",
        explanation:
          "'The food' là danh từ không đếm được, số ít, nên động từ phải là 'is' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'I always eat too much when the food are good.' sai vì 'food' số ít phải đi với 'is', không dùng 'are'. 'I always eating too much when the food is good.' sai vì thiếu trợ động từ và dùng '-ing' không đúng chỗ ở chủ ngữ 'I'.",
        usageTip: "Dùng khi muốn chia sẻ vui vẻ rằng mình dễ ăn quá nhiều khi gặp món ngon.",
      },
      {
        id: "st-24-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🍱",
        english: "A good meal can turn a bad day around.",
        vietnamese: "Một bữa ăn ngon có thể làm ngày tồi tệ trở nên tốt hơn.",
        promptContext: "Chloe muốn nói rằng một bữa ăn ngon có thể cải thiện tâm trạng sau một ngày mệt mỏi.",
        choices: [
          { id: "a", text: "A good meal can turn a bad day around." },
          { id: "b", text: "A good meal can turns a bad day around." },
          { id: "c", text: "A good meal can turn around a bad day a." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'can' luôn dùng động từ nguyên mẫu, nên 'turn' là đúng — câu này đúng ngữ pháp và rất tự nhiên.",
        wrongAnswerExplanations:
          "'A good meal can turns a bad day around.' sai vì sau 'can' không được thêm 's' vào động từ. 'A good meal can turn around a bad day a.' sai vì thừa mạo từ 'a' ở cuối câu, làm câu vô nghĩa.",
        usageTip: "Dùng khi muốn nói rằng một bữa ăn ngon có thể giúp cải thiện tâm trạng sau ngày mệt.",
      },
    ],
  },
  {
    id: "st-25",
    slug: "st-25-do-an-nha-hang-5",
    topicId: "small-talk",
    title: "Trò chuyện khi khách mang đồ ăn đến tiệm",
    description: "Cách trò chuyện tự nhiên khi khách mang đồ ăn hoặc đồ uống vào tiệm.",
    level: "practice",
    section: "THỰC HÀNH",
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
];
