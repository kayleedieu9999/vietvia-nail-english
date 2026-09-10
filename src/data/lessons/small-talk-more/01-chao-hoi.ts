import { Lesson } from "@/types/content";

/**
 * Small Talk — subtopic group 1: Chào hỏi & bắt đầu trò chuyện (lessons 1-5).
 */
export const smallTalkGroup01: Lesson[] = [
  {
    id: "st-1",
    slug: "st-01-chao-hoi-1",
    topicId: "small-talk",
    title: "Chào khách mới bước vào",
    description: "Những câu chào tự nhiên khi khách vừa bước vào tiệm.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "st-1-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👋",
        english: "I'm doing great, thanks! Have a seat.",
        vietnamese: "Tôi khỏe, cảm ơn! Mời chị ngồi.",
        prompt: "Hi! How are you doing today?",
        promptVietnamese: "Chào chị! Dạo này chị thế nào?",
        choices: [
          { id: "a", text: "I'm doing great, thanks! Have a seat." },
          { id: "b", text: "It's five dollars extra." },
          { id: "c", text: "Let me get a towel." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách chào và hỏi thăm, mình đáp lại vui vẻ rồi mời khách ngồi luôn để bắt đầu buổi làm nails thoải mái.",
        wrongAnswerExplanations:
          "'It's five dollars extra.' là câu nói về giá tiền, không phải lời chào đáp lại. 'Let me get a towel.' là câu nói khi chuẩn bị đồ nghề, không liên quan đến câu chào hỏi.",
        usageTip: "Dùng ngay khi khách bước vào và chào hỏi mình đầu tiên.",
      },
      {
        id: "st-1-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🚪",
        english: "Welcome! Have you been here before?",
        vietnamese: "Chào mừng! Bạn đã đến đây trước đây chưa?",
        promptContext:
          "Một khách mới bước vào tiệm và nhìn quanh, có vẻ đây là lần đầu khách đến. Chọn câu chào phù hợp.",
        choices: [
          { id: "a", text: "Welcome! Have you been here before?" },
          { id: "b", text: "Do you want gel or regular polish?" },
          { id: "c", text: "That will be thirty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Với khách lạ, mình chào mừng thân thiện và hỏi nhẹ xem khách có phải khách mới không, để dễ hướng dẫn tiếp.",
        wrongAnswerExplanations:
          "'Do you want gel or regular polish?' là câu hỏi về dịch vụ, chưa phù hợp khi khách còn đang ở cửa. 'That will be thirty dollars.' là câu tính tiền, hoàn toàn chưa đúng lúc.",
        usageTip: "Dùng khi thấy một khách mới, chưa quen mặt, bước vào tiệm.",
      },
      {
        id: "st-1-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🙂",
        english: "Welcome in! Give me one second.",
        vietnamese: "Chào mừng bạn! Cho tôi một chút xíu.",
        choices: [
          { id: "a", text: "Chào mừng bạn! Cho tôi một chút xíu." },
          { id: "b", text: "Bạn muốn làm móng dài hơn không?" },
          { id: "c", text: "Xin lỗi, chúng tôi đã đóng cửa." },
        ],
        correctAnswer: "a",
        explanation:
          "'Welcome in!' là lời chào khi khách bước vào, và 'Give me one second' nghĩa là xin khách đợi một chút vì mình đang bận tay.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về độ dài móng và việc đóng cửa — không liên quan đến câu chào và xin khách đợi.",
        usageTip: "Dùng khi khách vào tiệm lúc mình đang dở tay chưa ra đón được ngay.",
      },
      {
        id: "st-1-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🌤️",
        english: "Good morning! Come on in.",
        vietnamese: "Chào buổi sáng! Mời vào.",
        prompt: "Good morning!",
        promptVietnamese: "Chào buổi sáng!",
        choices: [
          { id: "a", text: "Good morning! Come on in." },
          { id: "b", text: "Sure, I can do that." },
          { id: "c", text: "It's going to rain today." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách chào buổi sáng, mình chào lại rồi mời khách vào tiệm luôn, rất đơn giản và tự nhiên.",
        wrongAnswerExplanations:
          "'Sure, I can do that.' là câu đồng ý làm gì đó, không phải câu chào. 'It's going to rain today.' là câu nói về thời tiết, chưa hợp lúc khách vừa bước vào.",
        usageTip: "Dùng vào buổi sáng khi khách đến chào mình trước.",
      },
      {
        id: "st-1-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "➡️",
        english: "Good morning! Right this way.",
        vietnamese: "Chào buổi sáng! Mời đi hướng này.",
        prompt: "___ morning! Right this way.",
        choices: [
          { id: "a", text: "Good" },
          { id: "b", text: "Well" },
          { id: "c", text: "Nice" },
        ],
        correctAnswer: "a",
        explanation:
          "'Good morning' là cách chào buổi sáng chuẩn và quen tai nhất, ai cũng hiểu ngay.",
        wrongAnswerExplanations:
          "'Well morning' không phải cách nói tiếng Anh tự nhiên. 'Nice morning' nghe kỳ, người Mỹ không chào nhau kiểu đó.",
        usageTip: "Dùng để chào khách vào buổi sáng rồi dẫn khách vào chỗ ngồi.",
      },
      {
        id: "st-1-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "Hey! Good to see you again.",
        vietnamese: "Chào chị! Vui được gặp lại chị.",
        promptContext:
          "Một khách quen bước vào tiệm, chị muốn chào thân thiện vì đã gặp khách này rồi.",
        choices: [
          { id: "a", text: "Hey! Good to see you again." },
          { id: "b", text: "Do you have an appointment?" },
          { id: "c", text: "That looks amazing on you." },
        ],
        correctAnswer: "a",
        explanation:
          "Với khách quen, mình chào thân thiện hơn khách mới, thể hiện là mình còn nhớ và vui khi gặp lại.",
        wrongAnswerExplanations:
          "'Do you have an appointment?' là câu hỏi thường dùng cho khách mới chưa quen, không hợp khi mình đã biết khách này rồi. 'That looks amazing on you.' là lời khen, chưa phải lúc để nói ngay từ đầu.",
        usageTip: "Dùng khi thấy một khách quen mặt bước vào lại tiệm.",
      },
      {
        id: "st-1-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🔔",
        english: "Hi there! Come on in, we'll be right with you.",
        vietnamese: "Chào bạn! Mời vào, chúng tôi sẽ ra ngay.",
        audioText: "Hi there! Come on in, we'll be right with you.",
        choices: [
          { id: "a", text: "Chào bạn! Mời vào, chúng tôi sẽ ra ngay." },
          { id: "b", text: "Xin lỗi, hôm nay tiệm nghỉ." },
          { id: "c", text: "Bạn cần đặt hẹn trước một tuần." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này là lời chào kèm lời hứa sẽ phục vụ khách sớm, dùng khi tiệm đang bận tay nhưng vẫn muốn khách thấy được chào đón.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc tiệm nghỉ hoặc yêu cầu đặt hẹn — không đúng nghĩa của câu nghe được.",
        usageTip: "Dùng khi khách vừa bước vào lúc tiệm đang đông, chưa ai ra đón ngay được.",
      },
      {
        id: "st-1-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🙋",
        english: "Yes, right this way.",
        vietnamese: "Có, mời đi hướng này.",
        prompt: "Is anyone free right now?",
        promptVietnamese: "Có ai đang trống không?",
        choices: [
          { id: "a", text: "Yes, right this way." },
          { id: "b", text: "It's very hot today." },
          { id: "c", text: "I like that color too." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách hỏi có ai trống để làm ngay không, nếu có mình trả lời có và dẫn khách vào chỗ ngồi luôn.",
        wrongAnswerExplanations:
          "'It's very hot today.' nói về thời tiết, không trả lời câu hỏi có ai trống hay không. 'I like that color too.' là lời khen về màu sơn, không liên quan đến câu hỏi này.",
        usageTip: "Dùng khi khách hỏi liệu có thợ nào đang trống để làm ngay.",
      },
      {
        id: "st-1-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "💺",
        english: "Hi! Come sit right here.",
        vietnamese: "Chào bạn! Mời ngồi ngay đây.",
        promptContext: "Chloe muốn chào khách vui vẻ và mời khách ngồi vào ghế trống ngay bên cạnh.",
        choices: [
          { id: "a", text: "Hi! Come sit right here." },
          { id: "b", text: "Hi! You sit right here already." },
          { id: "c", text: "Hi! Sitting right here you." },
        ],
        correctAnswer: "a",
        explanation:
          "'Come sit right here' là câu mời ngồi rất tự nhiên, ngắn gọn và lịch sự, người Mỹ hay nói y như vậy.",
        wrongAnswerExplanations:
          "'Hi! You sit right here already.' sai vì thêm 'already' vào đây không đúng nghĩa và nghe rất kỳ. 'Hi! Sitting right here you.' sai hoàn toàn về thứ tự từ trong câu.",
        usageTip: "Dùng khi ghế đang trống và mình muốn mời khách vào ngồi ngay.",
      },
      {
        id: "st-1-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🤗",
        english: "It's so nice to see you again.",
        vietnamese: "Rất vui được gặp lại bạn.",
        promptContext: "Chloe muốn nói 'Rất vui được gặp lại bạn' theo cách tự nhiên nhất.",
        choices: [
          { id: "a", text: "It's so nice to see you again." },
          { id: "b", text: "It is nice for see you again." },
          { id: "c", text: "I so nice see you again." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng dùng cấu trúc quen thuộc 'It's so nice to see you again' — cách nói này rất tự nhiên và ai cũng dùng khi gặp lại người quen.",
        wrongAnswerExplanations:
          "'It is nice for see you again.' sai vì sau 'nice' phải dùng 'to see', không dùng 'for see'. 'I so nice see you again.' sai vì thiếu động từ 'am' và ghép từ lộn xộn, không đúng ngữ pháp.",
        usageTip: "Dùng khi gặp lại một khách quen mà mình thật sự vui khi thấy họ trở lại.",
      },
    ],
  },
  {
    id: "st-2",
    slug: "st-02-chao-hoi-2",
    topicId: "small-talk",
    title: "Hỏi thăm khách quen",
    description: "Cách hỏi thăm nhẹ nhàng với khách đã từng làm ở tiệm.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "st-2-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😄",
        english: "Pretty good! Same for you?",
        vietnamese: "Khá tốt! Còn bạn thì sao?",
        prompt: "Hey, how have you been?",
        promptVietnamese: "Này, gần đây bạn thế nào?",
        choices: [
          { id: "a", text: "Pretty good! Same for you?" },
          { id: "b", text: "It's fifteen dollars." },
          { id: "c", text: "We close at seven." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách quen hỏi thăm mình gần đây thế nào, mình trả lời ngắn gọn rồi hỏi lại khách cho lịch sự và thân thiện.",
        wrongAnswerExplanations:
          "'It's fifteen dollars.' nói về giá cả, không phải cách trả lời câu hỏi thăm. 'We close at seven.' nói về giờ đóng cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách quen hỏi thăm mình một cách thân mật.",
      },
      {
        id: "st-2-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🗓️",
        english: "It's been a while! How are you?",
        vietnamese: "Lâu rồi không gặp! Bạn khỏe không?",
        promptContext:
          "Một khách quen mà đã lâu không thấy quay lại tiệm, chị muốn hỏi thăm khách vì thấy khách trở lại.",
        choices: [
          { id: "a", text: "It's been a while! How are you?" },
          { id: "b", text: "Your total is forty dollars." },
          { id: "c", text: "We don't have that color anymore." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi thấy khách quen lâu ngày không gặp, mình nhắc nhẹ điều đó và hỏi thăm khách để tạo cảm giác thân thiện.",
        wrongAnswerExplanations:
          "'Your total is forty dollars.' là câu tính tiền, không hợp để mở đầu cuộc gặp lại. 'We don't have that color anymore.' nói về màu sơn, không liên quan đến việc hỏi thăm khách.",
        usageTip: "Dùng khi một khách quen lâu ngày mới quay lại tiệm.",
      },
      {
        id: "st-2-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "😌",
        english: "You look great today!",
        vietnamese: "Hôm nay bạn trông thật đẹp!",
        choices: [
          { id: "a", text: "Hôm nay bạn trông thật đẹp!" },
          { id: "b", text: "Hôm nay bạn có bận không?" },
          { id: "c", text: "Bạn muốn đổi màu sơn khác không?" },
        ],
        correctAnswer: "a",
        explanation:
          "'You look great today!' là một lời khen nhẹ nhàng, thân thiện, dùng để mở đầu chuyện với khách quen.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc bận rộn và đổi màu sơn — không phải nghĩa của câu khen này.",
        usageTip: "Dùng khi muốn khen khách một câu ngắn để bắt đầu trò chuyện vui vẻ.",
      },
      {
        id: "st-2-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "💇",
        english: "I love it! It really suits you.",
        vietnamese: "Tôi thích nó lắm! Nó rất hợp với bạn.",
        prompt: "Did you notice I got a new haircut?",
        promptVietnamese: "Bạn có nhận ra tôi mới cắt tóc không?",
        choices: [
          { id: "a", text: "I love it! It really suits you." },
          { id: "b", text: "Let me wash my hands first." },
          { id: "c", text: "We're open until eight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách khoe kiểu tóc mới, mình khen thật lòng và ngắn gọn để khách vui, đây là cách trò chuyện nhẹ nhàng thường gặp.",
        wrongAnswerExplanations:
          "'Let me wash my hands first.' không liên quan gì đến việc khách hỏi về tóc. 'We're open until eight.' nói về giờ mở cửa, hoàn toàn lạc đề với câu khách nói.",
        usageTip: "Dùng khi khách khoe điều gì mới, ví dụ kiểu tóc, quần áo mới.",
      },
      {
        id: "st-2-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🙋‍♀️",
        english: "It's so good to see you!",
        vietnamese: "Vui quá được gặp lại bạn!",
        prompt: "It's so ___ to see you!",
        choices: [
          { id: "a", text: "good" },
          { id: "b", text: "goodly" },
          { id: "c", text: "gooder" },
        ],
        correctAnswer: "a",
        explanation:
          "'Good' là tính từ đúng để đi sau 'so', dùng để diễn tả cảm xúc vui khi gặp lại ai đó.",
        wrongAnswerExplanations:
          "'Goodly' không phải từ thông dụng trong tiếng Anh hiện đại. 'Gooder' không đúng ngữ pháp — so sánh hơn của 'good' là 'better', không phải 'gooder'.",
        usageTip: "Dùng khi thật sự vui vì gặp lại một khách quen sau một thời gian.",
      },
      {
        id: "st-2-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧴",
        english: "Same color as last time, or something new?",
        vietnamese: "Vẫn màu như lần trước, hay đổi màu mới?",
        promptContext:
          "Khách quen đến làm lại, chị muốn hỏi khách xem có muốn giữ màu cũ hay đổi màu mới, vừa là câu hỏi công việc vừa mang tính trò chuyện.",
        choices: [
          { id: "a", text: "Same color as last time, or something new?" },
          { id: "b", text: "It takes two hours today." },
          { id: "c", text: "We are fully booked this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Với khách quen, mình có thể nhắc lại màu lần trước một cách thân thiện, cho khách thấy mình còn nhớ khách.",
        wrongAnswerExplanations:
          "'It takes two hours today.' nói về thời gian làm, không liên quan đến việc chọn màu. 'We are fully booked this week.' nói về việc hết chỗ, không phải câu hỏi về màu sơn.",
        usageTip: "Dùng khi khách quen quay lại và mình muốn hỏi thăm nhẹ về màu sơn lần này.",
      },
      {
        id: "st-2-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "Long time no see! I missed you.",
        vietnamese: "Lâu quá không gặp! Tôi nhớ bạn đấy.",
        audioText: "Long time no see! I missed you.",
        choices: [
          { id: "a", text: "Lâu quá không gặp! Tôi nhớ bạn đấy." },
          { id: "b", text: "Xin lỗi, chúng tôi hết chỗ hôm nay." },
          { id: "c", text: "Bạn cần thanh toán trước khi làm." },
        ],
        correctAnswer: "a",
        explanation:
          "'Long time no see' là câu nói quen tai khi gặp lại ai đó sau một thời gian dài, và 'I missed you' nghĩa là mình nhớ người đó.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc hết chỗ và thanh toán trước — không đúng với ý nghĩa vui mừng gặp lại trong câu nghe.",
        usageTip: "Dùng khi gặp lại một khách quen đã lâu không đến tiệm.",
      },
      {
        id: "st-2-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🧡",
        english: "Aww, thank you! That's so sweet.",
        vietnamese: "Ồ, cảm ơn bạn! Bạn ngọt ngào quá.",
        prompt: "You're always so nice to me.",
        promptVietnamese: "Bạn lúc nào cũng tốt với tôi quá.",
        choices: [
          { id: "a", text: "Aww, thank you! That's so sweet." },
          { id: "b", text: "Your nails need to dry first." },
          { id: "c", text: "We're closed on Mondays." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nói lời tốt về mình, mình cảm ơn lại nhẹ nhàng, đây là cách đáp lại lời khen rất tự nhiên.",
        wrongAnswerExplanations:
          "'Your nails need to dry first.' nói về việc khô móng, không liên quan gì đến lời khen của khách. 'We're closed on Mondays.' nói về ngày nghỉ, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách khen mình tốt bụng hoặc dễ chịu.",
      },
      {
        id: "st-2-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "😁",
        english: "I remember you! How are you doing?",
        vietnamese: "Tôi nhớ bạn đấy! Bạn khỏe không?",
        promptContext: "Chloe nhận ra một khách quen và muốn nói mình còn nhớ khách rồi hỏi thăm.",
        choices: [
          { id: "a", text: "I remember you! How are you doing?" },
          { id: "b", text: "I remembering you, how you doing?" },
          { id: "c", text: "I remember you doing how?" },
        ],
        correctAnswer: "a",
        explanation:
          "'I remember you!' là cách nói tự nhiên để cho khách biết mình còn nhớ họ, sau đó hỏi thăm bằng câu quen thuộc 'How are you doing?'",
        wrongAnswerExplanations:
          "'I remembering you, how you doing?' sai ngữ pháp vì thiếu trợ động từ và dùng '-ing' không đúng chỗ. 'I remember you doing how?' sai hoàn toàn về thứ tự từ trong câu hỏi.",
        usageTip: "Dùng khi nhận ra một khách đã từng đến tiệm trước đây.",
      },
      {
        id: "st-2-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "✨",
        english: "You're one of my favorite customers.",
        vietnamese: "Bạn là một trong những khách hàng tôi thích nhất.",
        promptContext: "Chloe muốn nói với khách quen rằng đây là một trong những khách mà mình rất thích.",
        choices: [
          { id: "a", text: "You're one of my favorite customers." },
          { id: "b", text: "You are one my favorite customer." },
          { id: "c", text: "You one of favorite my customers." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng dùng 'one of my favorite customers' — cấu trúc 'one of my favorite + danh từ số nhiều' rất phổ biến khi khen ai đó là một trong những người mình yêu thích.",
        wrongAnswerExplanations:
          "'You are one my favorite customer.' thiếu chữ 'of' và dùng số ít sai chỗ. 'You one of favorite my customers.' sai hoàn toàn về thứ tự các từ trong câu.",
        usageTip: "Dùng với khách quen lâu năm mà mình thật sự quý mến.",
      },
    ],
  },
  {
    id: "st-3",
    slug: "st-03-chao-hoi-3",
    topicId: "small-talk",
    title: "Giới thiệu tên & hỏi tên khách",
    description: "Cách giới thiệu tên mình và hỏi tên khách một cách lịch sự.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "st-3-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🪪",
        english: "Nice to meet you, I'm Chloe.",
        vietnamese: "Rất vui được gặp bạn, tôi là Chloe.",
        prompt: "Hi, what's your name?",
        promptVietnamese: "Chào bạn, tên bạn là gì?",
        choices: [
          { id: "a", text: "Nice to meet you, I'm Chloe." },
          { id: "b", text: "It's ten dollars for that." },
          { id: "c", text: "We open at nine." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi tên, mình trả lời tên mình và nói rất vui được gặp khách — đây là cách giới thiệu bản thân rất tự nhiên.",
        wrongAnswerExplanations:
          "'It's ten dollars for that.' nói về giá cả, hoàn toàn không liên quan đến câu hỏi tên. 'We open at nine.' nói về giờ mở cửa, không phải câu trả lời cho câu hỏi này.",
        usageTip: "Dùng khi khách hỏi tên mình lần đầu gặp mặt.",
      },
      {
        id: "st-3-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🤝",
        english: "What's your name? I want to remember it.",
        vietnamese: "Tên bạn là gì? Tôi muốn nhớ tên bạn.",
        promptContext:
          "Chị vừa làm xong cho một khách mới và muốn hỏi tên khách để lần sau dễ nhớ và chào hỏi thân thiện hơn.",
        choices: [
          { id: "a", text: "What's your name? I want to remember it." },
          { id: "b", text: "Your total comes to fifty dollars." },
          { id: "c", text: "Please wait for your nails to dry." },
        ],
        correctAnswer: "a",
        explanation:
          "Hỏi tên khách một cách nhẹ nhàng, kèm lý do là muốn nhớ tên khách, giúp cuộc trò chuyện thân thiện hơn.",
        wrongAnswerExplanations:
          "'Your total comes to fifty dollars.' là câu tính tiền, không liên quan đến việc hỏi tên. 'Please wait for your nails to dry.' nói về việc chờ khô móng, không phải câu hỏi tên khách.",
        usageTip: "Dùng khi muốn hỏi tên một khách mới để lần sau nhớ và chào thân thiện hơn.",
      },
      {
        id: "st-3-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "😀",
        english: "My name is Chloe. It's nice to meet you.",
        vietnamese: "Tên tôi là Chloe. Rất vui được gặp bạn.",
        choices: [
          { id: "a", text: "Tên tôi là Chloe. Rất vui được gặp bạn." },
          { id: "b", text: "Tiệm chúng tôi mở cửa cả tuần." },
          { id: "c", text: "Bạn muốn làm móng ngắn hay dài?" },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này dùng để giới thiệu tên mình và nói lời vui mừng khi gặp khách mới, rất thường dùng khi mới quen ai đó.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về giờ mở cửa và độ dài móng — không liên quan đến việc giới thiệu tên.",
        usageTip: "Dùng khi gặp một khách mới và muốn tự giới thiệu tên mình trước.",
      },
      {
        id: "st-3-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "Sarah? That's a beautiful name.",
        vietnamese: "Sarah? Tên đó đẹp quá.",
        prompt: "My name is Sarah.",
        promptVietnamese: "Tên tôi là Sarah.",
        choices: [
          { id: "a", text: "Sarah? That's a beautiful name." },
          { id: "b", text: "We take cash only today." },
          { id: "c", text: "The dryer is over there." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách giới thiệu tên, mình có thể lặp lại tên đó và khen nhẹ để cuộc nói chuyện thêm thân thiện.",
        wrongAnswerExplanations:
          "'We take cash only today.' nói về hình thức thanh toán, hoàn toàn không liên quan. 'The dryer is over there.' chỉ vị trí máy sấy, không phải cách đáp lại khi khách giới thiệu tên.",
        usageTip: "Dùng ngay sau khi khách nói tên mình lần đầu.",
      },
      {
        id: "st-3-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "✋",
        english: "How do you spell your name?",
        vietnamese: "Tên bạn viết như thế nào?",
        prompt: "How do you ___ your name?",
        choices: [
          { id: "a", text: "spell" },
          { id: "b", text: "spelling" },
          { id: "c", text: "spelled" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'do you' phải dùng động từ nguyên mẫu, nên 'spell' là đúng — câu này nghĩa là hỏi cách viết chính xác tên khách.",
        wrongAnswerExplanations:
          "'Spelling' sai vì đây không phải câu tiếp diễn. 'Spelled' sai vì sau 'do you' không dùng dạng quá khứ.",
        usageTip: "Dùng khi cần ghi tên khách vào giấy hẹn hoặc hóa đơn mà chưa chắc cách viết.",
      },
      {
        id: "st-3-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "📝",
        english: "Sorry, can you say your name again?",
        vietnamese: "Xin lỗi, bạn có thể nói lại tên không?",
        promptContext:
          "Khách vừa nói tên nhưng chị nghe không rõ, chị muốn hỏi lại một cách lịch sự.",
        choices: [
          { id: "a", text: "Sorry, can you say your name again?" },
          { id: "b", text: "Sorry, we are closed today." },
          { id: "c", text: "Sorry, this color is out of stock." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe không rõ tên khách, mình xin lỗi nhẹ rồi hỏi lại một cách lịch sự, khách sẽ không thấy phiền.",
        wrongAnswerExplanations:
          "'Sorry, we are closed today.' nói về việc tiệm đóng cửa, không liên quan đến việc nghe không rõ tên. 'Sorry, this color is out of stock.' nói về màu sơn hết hàng, hoàn toàn lạc đề.",
        usageTip: "Dùng khi nghe không rõ tên khách và cần hỏi lại.",
      },
      {
        id: "st-3-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🔊",
        english: "It's great to finally put a name to your face.",
        vietnamese: "Cuối cùng cũng biết tên của bạn, vui quá.",
        audioText: "It's great to finally put a name to your face.",
        choices: [
          { id: "a", text: "Cuối cùng cũng biết tên của bạn, vui quá." },
          { id: "b", text: "Xin lỗi, bạn cần đặt hẹn trước." },
          { id: "c", text: "Tiệm chúng tôi không có chỗ đậu xe." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này là cách nói vui, thân thiện khi cuối cùng biết được tên của một khách mà mình đã gặp vài lần.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc đặt hẹn và chỗ đậu xe — không liên quan đến ý nghĩa vui vì biết tên khách.",
        usageTip: "Dùng khi cuối cùng biết được tên một khách đã quen mặt từ trước.",
      },
      {
        id: "st-3-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🙂",
        english: "I'm Chloe, by the way. Just so you know.",
        vietnamese: "Tôi là Chloe, tiện thể nói luôn. Để bạn biết.",
        prompt: "You never told me your name.",
        promptVietnamese: "Bạn chưa từng nói tên bạn cho tôi biết.",
        choices: [
          { id: "a", text: "I'm Chloe, by the way. Just so you know." },
          { id: "b", text: "Your nails look dry now." },
          { id: "c", text: "We close early on Sundays." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nhắc mình chưa từng nói tên, mình giới thiệu tên ngay bằng câu tự nhiên 'by the way' nghĩa là 'tiện thể nói luôn'.",
        wrongAnswerExplanations:
          "'Your nails look dry now.' nói về việc móng đã khô, không liên quan đến việc giới thiệu tên. 'We close early on Sundays.' nói về giờ đóng cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách nhắc là chưa biết tên mình và mình muốn giới thiệu ngay.",
      },
      {
        id: "st-3-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌸",
        english: "Everyone here calls me Chloe.",
        vietnamese: "Mọi người ở đây gọi tôi là Chloe.",
        promptContext: "Chloe muốn nói với khách rằng đó là tên mọi người trong tiệm gọi mình.",
        choices: [
          { id: "a", text: "Everyone here calls me Chloe." },
          { id: "b", text: "Everyone here call me Chloe." },
          { id: "c", text: "Everyone here calling Chloe me." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'Everyone' là số ít nên động từ phải chia là 'calls' — 'Everyone here calls me Chloe' là câu đúng ngữ pháp.",
        wrongAnswerExplanations:
          "'Everyone here call me Chloe.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít. 'Everyone here calling Chloe me.' sai hoàn toàn về cấu trúc câu.",
        usageTip: "Dùng khi muốn nói tên thường gọi của mình trong tiệm.",
      },
      {
        id: "st-3-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "It's nice to finally know your name.",
        vietnamese: "Cuối cùng cũng biết tên bạn, thật vui.",
        promptContext: "Chloe muốn nói rằng cuối cùng cũng biết được tên khách theo cách tự nhiên nhất.",
        choices: [
          { id: "a", text: "It's nice to finally know your name." },
          { id: "b", text: "It nice finally to know your name." },
          { id: "c", text: "It's nice finally knowing your name is." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng dùng cấu trúc 'It's nice to + động từ' rất phổ biến để nói cảm xúc vui về một điều gì đó.",
        wrongAnswerExplanations:
          "'It nice finally to know your name.' thiếu chữ 'is' sau 'It'. 'It's nice finally knowing your name is.' sai vì thừa chữ 'is' ở cuối và sai cấu trúc câu.",
        usageTip: "Dùng khi cuối cùng cũng biết được tên một khách quen mặt.",
      },
    ],
  },
  {
    id: "st-4",
    slug: "st-04-chao-hoi-4",
    topicId: "small-talk",
    title: "Chào khách đi cùng bạn bè",
    description: "Cách chào khi khách đến tiệm cùng một hoặc nhiều người bạn.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "st-4-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👭",
        english: "Welcome, both of you! Come on in.",
        vietnamese: "Chào mừng cả hai bạn! Mời vào.",
        prompt: "Hi, we're here together.",
        promptVietnamese: "Chào, chúng tôi đến cùng nhau.",
        choices: [
          { id: "a", text: "Welcome, both of you! Come on in." },
          { id: "b", text: "It takes an hour for that." },
          { id: "c", text: "We only have one chair open." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi hai khách đến cùng nhau, mình chào cả hai người luôn thể để không ai cảm thấy bị bỏ quên.",
        wrongAnswerExplanations:
          "'It takes an hour for that.' nói về thời gian làm dịch vụ, chưa hợp lúc mới chào. 'We only have one chair open.' nói về việc thiếu ghế, không phải câu chào phù hợp lúc này.",
        usageTip: "Dùng khi hai khách bước vào tiệm cùng lúc.",
      },
      {
        id: "st-4-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "👯",
        english: "Hi ladies! Are you together?",
        vietnamese: "Chào các bạn! Hai bạn đi cùng nhau đúng không?",
        promptContext:
          "Hai khách nữ bước vào tiệm cùng lúc, chị muốn chào cả hai và hỏi xem họ có đi cùng nhau không.",
        choices: [
          { id: "a", text: "Hi ladies! Are you together?" },
          { id: "b", text: "Your total is thirty dollars." },
          { id: "c", text: "This color is very popular." },
        ],
        correctAnswer: "a",
        explanation:
          "Chào cả hai người bằng 'Hi ladies!' rồi hỏi nhẹ xem họ có đi cùng nhau không, để sắp xếp chỗ ngồi hợp lý.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars.' là câu tính tiền, chưa hợp lúc khách vừa vào. 'This color is very popular.' nói về màu sơn, chưa liên quan lúc mới chào khách.",
        usageTip: "Dùng khi hai hoặc nhiều khách bước vào tiệm cùng lúc.",
      },
      {
        id: "st-4-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🪑",
        english: "We can seat you both together.",
        vietnamese: "Chúng tôi có thể cho hai bạn ngồi cạnh nhau.",
        choices: [
          { id: "a", text: "Chúng tôi có thể cho hai bạn ngồi cạnh nhau." },
          { id: "b", text: "Chúng tôi hết chỗ ngồi rồi." },
          { id: "c", text: "Hai bạn phải đợi ở ngoài." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này dùng để nói cho hai khách biết là họ có thể ngồi gần nhau để vừa làm nails vừa trò chuyện.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc hết chỗ hoặc phải đợi ngoài — ngược nghĩa với câu tiếng Anh đang nói.",
        usageTip: "Dùng khi hai khách đi cùng muốn ngồi gần nhau để nói chuyện trong lúc làm.",
      },
      {
        id: "st-4-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👋",
        english: "Nice to meet you too! Right this way.",
        vietnamese: "Cũng rất vui được gặp bạn! Mời đi hướng này.",
        prompt: "This is my friend. She's never been here before.",
        promptVietnamese: "Đây là bạn tôi. Cô ấy chưa từng đến đây bao giờ.",
        choices: [
          { id: "a", text: "Nice to meet you too! Right this way." },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Please pay before we start." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách giới thiệu bạn của mình, mình chào người bạn mới đó rồi mời cả hai vào trong.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' nói về việc hết màu gel, hoàn toàn lạc đề khi vừa mới giới thiệu. 'Please pay before we start.' nói về việc thanh toán trước, chưa hợp lúc này.",
        usageTip: "Dùng khi khách quen giới thiệu người bạn đi cùng lần đầu đến tiệm.",
      },
      {
        id: "st-4-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🧑‍🤝‍🧑",
        english: "You two can sit next to each other.",
        vietnamese: "Hai bạn có thể ngồi cạnh nhau.",
        prompt: "You two can sit next to ___ other.",
        choices: [
          { id: "a", text: "each" },
          { id: "b", text: "every" },
          { id: "c", text: "another" },
        ],
        correctAnswer: "a",
        explanation:
          "'Next to each other' là cụm từ cố định nghĩa là 'ngồi cạnh nhau' — luôn dùng 'each other' khi nói về hai người.",
        wrongAnswerExplanations:
          "'Every other' có nghĩa khác, không dùng để nói 'cạnh nhau'. 'Another' không ghép được với 'next to' theo cách này.",
        usageTip: "Dùng khi sắp xếp chỗ ngồi cho hai khách đi cùng nhau.",
      },
      {
        id: "st-4-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🥳",
        english: "Are you three celebrating something today?",
        vietnamese: "Ba bạn hôm nay có ăn mừng gì không?",
        promptContext:
          "Ba khách bước vào tiệm cùng nhau trông rất vui vẻ, chị muốn hỏi thăm xem họ có dịp gì đặc biệt không.",
        choices: [
          { id: "a", text: "Are you three celebrating something today?" },
          { id: "b", text: "You three need to wait outside." },
          { id: "c", text: "We only take card today." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi thấy nhóm khách đông vui, mình hỏi thăm nhẹ xem có dịp gì đặc biệt để trò chuyện thân thiện hơn.",
        wrongAnswerExplanations:
          "'You three need to wait outside.' nghe khá lạnh lùng, không hợp để chào một nhóm khách vui vẻ. 'We only take card today.' nói về thanh toán, không liên quan đến việc hỏi thăm.",
        usageTip: "Dùng khi một nhóm khách đến tiệm trông có vẻ đang ăn mừng dịp gì đó.",
      },
      {
        id: "st-4-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "💬",
        english: "Feel free to chat while I work.",
        vietnamese: "Hai bạn cứ nói chuyện thoải mái trong lúc tôi làm.",
        audioText: "Feel free to chat while I work.",
        choices: [
          { id: "a", text: "Hai bạn cứ nói chuyện thoải mái trong lúc tôi làm." },
          { id: "b", text: "Xin đừng nói chuyện trong lúc tôi làm." },
          { id: "c", text: "Hai bạn phải ngồi cách xa nhau." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này dùng để mời khách trò chuyện thoải mái trong lúc mình đang làm nails cho họ, tạo không khí vui vẻ.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoặc không liên quan đến việc mời khách trò chuyện tự nhiên.",
        usageTip: "Dùng khi hai khách đi cùng nhau và mình muốn họ thoải mái nói chuyện trong lúc làm.",
      },
      {
        id: "st-4-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎉",
        english: "That's exciting! Congratulations.",
        vietnamese: "Vui quá! Chúc mừng bạn nha.",
        prompt: "We're here for my sister's bridal shower.",
        promptVietnamese: "Chúng tôi đến đây cho buổi tiệc trước đám cưới của em tôi.",
        choices: [
          { id: "a", text: "That's exciting! Congratulations." },
          { id: "b", text: "We ran out of towels." },
          { id: "c", text: "Please turn off your phone." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách chia sẻ về một dịp vui, mình chúc mừng ngắn gọn để hòa vào không khí vui vẻ của khách.",
        wrongAnswerExplanations:
          "'We ran out of towels.' nói về việc hết khăn, hoàn toàn lạc đề với lời chia sẻ vui của khách. 'Please turn off your phone.' là yêu cầu tắt điện thoại, không hợp lúc này.",
        usageTip: "Dùng khi khách kể về một dịp vui như sinh nhật, đám cưới, tiệc mừng.",
      },
      {
        id: "st-4-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌈",
        english: "It's fun having a group in today.",
        vietnamese: "Vui thật khi hôm nay có một nhóm khách đến cùng.",
        promptContext: "Chloe muốn nói rằng mình thấy vui khi có một nhóm khách đông vui đến tiệm hôm nay.",
        choices: [
          { id: "a", text: "It's fun having a group in today." },
          { id: "b", text: "It's fun have a group today in." },
          { id: "c", text: "Fun it's having group today in." },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc 'It's fun + V-ing' dùng để nói điều gì mang lại cảm giác vui — đây là cách nói tự nhiên và đúng ngữ pháp.",
        wrongAnswerExplanations:
          "'It's fun have a group today in.' sai vì phải dùng 'having' chứ không phải 'have' sau 'It's fun'. 'Fun it's having group today in.' sai hoàn toàn về thứ tự từ.",
        usageTip: "Dùng khi có một nhóm khách vui vẻ đến tiệm cùng lúc và mình muốn chia sẻ cảm xúc tích cực.",
      },
      {
        id: "st-4-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌻",
        english: "You two seem like great friends.",
        vietnamese: "Hai bạn có vẻ là bạn thân của nhau.",
        promptContext: "Chloe muốn khen nhẹ hai khách đi cùng nhau rằng họ trông rất thân thiết.",
        choices: [
          { id: "a", text: "You two seem like great friends." },
          { id: "b", text: "You two seem like a great friend." },
          { id: "c", text: "You two seems great friends like." },
        ],
        correctAnswer: "a",
        explanation:
          "'You two' là hai người nên danh từ sau phải ở số nhiều là 'friends' — câu đúng là 'You two seem like great friends.'",
        wrongAnswerExplanations:
          "'You two seem like a great friend.' sai vì dùng số ít 'a great friend' cho hai người. 'You two seems great friends like.' sai cả về chia động từ và thứ tự từ.",
        usageTip: "Dùng khi thấy hai khách đi cùng có vẻ rất thân thiết với nhau.",
      },
    ],
  },
  {
    id: "st-5",
    slug: "st-05-chao-hoi-5",
    topicId: "small-talk",
    title: "Bắt chuyện nhẹ khi mới ngồi vào ghế",
    description: "Những câu mở đầu nhẹ nhàng ngay khi khách vừa ngồi vào ghế làm nails.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "st-5-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "💆",
        english: "I'm glad you like it! It's new.",
        vietnamese: "Tôi mừng vì bạn thích nó! Ghế này mới đó.",
        prompt: "Wow, this chair is so comfortable!",
        promptVietnamese: "Ồ, cái ghế này thoải mái quá!",
        choices: [
          { id: "a", text: "This chair is so comfortable!" },
          { id: "b", text: "I'm glad you like it! It's new." },
          { id: "c", text: "We got it last month." },
        ],
        correctAnswer: "b",
        explanation:
          "Khi khách khen chiếc ghế, mình đáp lại vui vẻ bằng cách đồng ý và chia sẻ thêm một chi tiết nhỏ như ghế mới, giúp cuộc trò chuyện tự nhiên hơn.",
        wrongAnswerExplanations:
          "'This chair is so comfortable!' là lặp lại chính câu khách vừa nói, không phải câu đáp lại. 'We got it last month.' thiếu phần đồng tình ban đầu nên nghe cụt và không tự nhiên bằng câu đúng.",
        usageTip: "Dùng khi khách vừa ngồi vào ghế và khen sự thoải mái.",
      },
      {
        id: "st-5-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🛋️",
        english: "Make yourself comfortable, we'll get started.",
        vietnamese: "Bạn cứ ngồi thoải mái, chúng ta sẽ bắt đầu ngay.",
        promptContext:
          "Khách vừa ngồi xuống ghế, chị muốn nói một câu nhẹ nhàng để khách thấy thoải mái trước khi bắt đầu làm.",
        choices: [
          { id: "a", text: "Make yourself comfortable, we'll get started." },
          { id: "b", text: "Please stand up right now." },
          { id: "c", text: "You need to pay first." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giúp khách cảm thấy thư giãn ngay từ đầu, thể hiện sự quan tâm trước khi bắt đầu dịch vụ.",
        wrongAnswerExplanations:
          "'Please stand up right now.' hoàn toàn ngược nghĩa với việc mời khách ngồi thoải mái. 'You need to pay first.' nói về thanh toán, không phù hợp lúc khách mới ngồi xuống.",
        usageTip: "Dùng ngay khi khách vừa ngồi vào ghế làm nails.",
      },
      {
        id: "st-5-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🎶",
        english: "Do you want me to turn the music up?",
        vietnamese: "Bạn có muốn tôi mở nhạc to hơn không?",
        choices: [
          { id: "a", text: "Bạn có muốn tôi mở nhạc to hơn không?" },
          { id: "b", text: "Bạn có muốn đổi màu sơn không?" },
          { id: "c", text: "Bạn có cần thêm khăn không?" },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này hỏi khách có muốn nghe nhạc to hơn không, một câu hỏi nhỏ để khách thấy được quan tâm và thoải mái.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại hỏi về màu sơn và khăn — không đúng với nội dung câu tiếng Anh đang hỏi về âm lượng nhạc.",
        usageTip: "Dùng khi thấy nhạc trong tiệm quá nhỏ và muốn hỏi ý khách trước khi chỉnh.",
      },
      {
        id: "st-5-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🥤",
        english: "That's totally fine, go ahead.",
        vietnamese: "Không sao đâu, bạn cứ dùng đi.",
        prompt: "Is it okay if I bring my own drink?",
        promptVietnamese: "Tôi mang đồ uống riêng vào có được không?",
        choices: [
          { id: "a", text: "Would you like something to drink?" },
          { id: "b", text: "That's totally fine, go ahead." },
          { id: "c", text: "We are closing in ten minutes." },
        ],
        correctAnswer: "b",
        explanation:
          "Khách hỏi xin phép mang đồ uống riêng vào, mình chỉ cần đồng ý nhẹ nhàng bằng 'That's totally fine, go ahead' để khách thấy được chào đón.",
        wrongAnswerExplanations:
          "'Would you like something to drink?' là câu hỏi mời nước, không phải câu trả lời cho câu hỏi xin phép của khách. 'We are closing in ten minutes.' hoàn toàn lạc đề và có thể khiến khách hiểu lầm là tiệm sắp đóng cửa.",
        usageTip: "Dùng khi khách hỏi xin phép làm điều gì đó nhỏ, ví dụ mang đồ uống riêng vào.",
      },
      {
        id: "st-5-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "😌",
        english: "Just relax and let me know if anything feels off.",
        vietnamese: "Bạn cứ thư giãn, có gì không ổn thì cho tôi biết nha.",
        prompt: "Just relax and let me ___ if anything feels off.",
        choices: [
          { id: "a", text: "know" },
          { id: "b", text: "knowing" },
          { id: "c", text: "known" },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc 'let me + động từ nguyên mẫu' rất phổ biến, nên 'know' là đúng — nghĩa là 'cho tôi biết'.",
        wrongAnswerExplanations:
          "'Knowing' sai vì sau 'let me' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'. 'Known' sai vì đây không phải câu bị động hay hoàn thành.",
        usageTip: "Dùng khi bắt đầu làm dịch vụ và muốn khách biết có thể nói ra nếu cảm thấy không ổn.",
      },
      {
        id: "st-5-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "📱",
        english: "Take your time, no rush at all.",
        vietnamese: "Bạn cứ từ từ, không cần vội gì cả.",
        promptContext:
          "Khách đang xin lỗi vì phải trả lời một cuộc gọi ngắn trước khi bắt đầu làm, chị muốn trấn an khách là không sao.",
        choices: [
          { id: "a", text: "Take your time, no rush at all." },
          { id: "b", text: "You need to hang up right now." },
          { id: "c", text: "That will make us late today." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách cần chút thời gian riêng, mình trấn an khách rằng không cần vội, giúp khách cảm thấy thoải mái.",
        wrongAnswerExplanations:
          "'You need to hang up right now.' nghe khá bất lịch sự và không phù hợp với tình huống. 'That will make us late today.' tạo cảm giác áp lực, không phải cách nói phù hợp lúc này.",
        usageTip: "Dùng khi khách cần thêm chút thời gian trước khi bắt đầu dịch vụ, ví dụ để nghe điện thoại.",
      },
      {
        id: "st-5-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎵",
        english: "Let me know if the water is too hot.",
        vietnamese: "Cho tôi biết nếu nước quá nóng nha.",
        audioText: "Let me know if the water is too hot.",
        choices: [
          { id: "a", text: "Cho tôi biết nếu nước quá nóng nha." },
          { id: "b", text: "Nước hôm nay bị hết rồi." },
          { id: "c", text: "Bạn cần thêm mười phút nữa." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này dùng để hỏi khách xem nhiệt độ nước có phù hợp không, một câu quan tâm nhỏ khi bắt đầu dịch vụ pedicure hoặc rửa tay.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc hết nước và thời gian chờ — không đúng với nội dung câu nghe.",
        usageTip: "Dùng khi bắt đầu ngâm tay hoặc chân cho khách và muốn kiểm tra nhiệt độ nước.",
      },
      {
        id: "st-5-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎬",
        english: "Sure, go ahead. I don't mind at all.",
        vietnamese: "Được chứ, bạn cứ xem. Tôi không phiền đâu.",
        prompt: "Do you mind if I watch a show on my phone?",
        promptVietnamese: "Tôi xem show trên điện thoại có phiền bạn không?",
        choices: [
          { id: "a", text: "Sure, go ahead. I don't mind at all." },
          { id: "b", text: "We close at six today." },
          { id: "c", text: "Your total is twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách hỏi xin phép xem điện thoại, mình đồng ý nhẹ nhàng để khách thấy thoải mái trong suốt buổi làm.",
        wrongAnswerExplanations:
          "'We close at six today.' nói về giờ đóng cửa, không liên quan đến câu hỏi xin phép của khách. 'Your total is twenty dollars.' nói về giá tiền, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi xin phép làm điều gì đó cá nhân trong lúc chờ được làm nails.",
      },
      {
        id: "st-5-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌼",
        english: "I hope you enjoy your time here.",
        vietnamese: "Tôi hy vọng bạn sẽ có thời gian vui vẻ ở đây.",
        promptContext: "Chloe muốn nói một câu chúc nhẹ nhàng ngay khi khách vừa ngồi vào ghế.",
        choices: [
          { id: "a", text: "I hope you enjoy your time here." },
          { id: "b", text: "I hope you enjoying your time here." },
          { id: "c", text: "I hope enjoy your time here you." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'hope' dùng chủ ngữ + động từ nguyên mẫu chia đúng thì, nên 'I hope you enjoy...' là cấu trúc chuẩn.",
        wrongAnswerExplanations:
          "'I hope you enjoying your time here.' sai vì thiếu trợ động từ 'are' trước 'enjoying'. 'I hope enjoy your time here you.' sai hoàn toàn về thứ tự từ trong câu.",
        usageTip: "Dùng như một lời chúc nhỏ khi khách bắt đầu buổi làm nails.",
      },
      {
        id: "st-5-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🍃",
        english: "Sit back and relax, we've got you.",
        vietnamese: "Bạn cứ ngồi tựa vào thư giãn, để chúng tôi lo.",
        promptContext: "Chloe muốn nói một câu trấn an nhẹ nhàng, thân thiện để khách thư giãn hoàn toàn.",
        choices: [
          { id: "a", text: "Sit back and relax, we've got you." },
          { id: "b", text: "Sit back and relax, we have got." },
          { id: "c", text: "Sitting back relax, got you we've." },
        ],
        correctAnswer: "a",
        explanation:
          "'We've got you' là cách nói tự nhiên nghĩa là 'để chúng tôi lo cho bạn' — câu này rất ấm áp và thân thiện, hay dùng trong tiếng Anh đời thường.",
        wrongAnswerExplanations:
          "'Sit back and relax, we have got.' thiếu tân ngữ 'you' ở cuối nên câu chưa hoàn chỉnh. 'Sitting back relax, got you we've.' sai hoàn toàn về thứ tự từ trong câu.",
        usageTip: "Dùng để trấn an khách ngay từ đầu, giúp khách cảm thấy được chăm sóc tận tình.",
      },
    ],
  },
];
