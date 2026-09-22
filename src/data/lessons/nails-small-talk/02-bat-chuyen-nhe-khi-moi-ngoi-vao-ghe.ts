import { Lesson } from "@/types/content";

/** nails-small-talk — migrated group 2 (lessons 6-10 of existing content). */
export const nailsSmallTalkGroup02: Lesson[] = [
{
    id: "st-5",
    slug: "st-05-chao-hoi-5",
    topicId: "nails-small-talk",
    title: "Bắt chuyện nhẹ khi mới ngồi vào ghế",
    description: "Những câu mở đầu nhẹ nhàng ngay khi khách vừa ngồi vào ghế làm nails.",
    level: "beginner",
    coverImage: "/images/lessons/st-05-chao-hoi-5.jpg",
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
{
    id: "st-6",
    slug: "st-06-cong-viec-ngay-nghi-1",
    topicId: "nails-small-talk",
    title: "Hỏi khách hôm nay thế nào",
    description: "Cách hỏi thăm nhẹ nhàng về ngày hôm nay của khách.",
    level: "beginner",
    coverImage: "/images/lessons/st-06-cong-viec-ngay-nghi-1.jpg",
    questions: [
      {
        id: "st-6-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "📆",
        english: "It's been busy, but good. How about you?",
        vietnamese: "Bận rộn, nhưng ổn. Còn bạn thì sao?",
        prompt: "How's your day going?",
        promptVietnamese: "Hôm nay của bạn thế nào?",
        choices: [
          { id: "a", text: "It's been busy, but good. How about you?" },
          { id: "b", text: "It costs thirty dollars." },
          { id: "c", text: "We're out of that color." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi ngày hôm nay của mình thế nào, mình trả lời ngắn gọn rồi hỏi lại khách cho thân thiện, đây là cách trò chuyện qua lại rất tự nhiên.",
        wrongAnswerExplanations:
          "'It costs thirty dollars.' nói về giá tiền, không liên quan đến câu hỏi về ngày hôm nay. 'We're out of that color.' nói về màu sơn hết hàng, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi thăm ngày làm việc của mình hôm nay.",
      },
      {
        id: "st-6-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "😅",
        english: "Today has been a little crazy, honestly.",
        vietnamese: "Thật ra hôm nay hơi điên cuồng luôn.",
        promptContext:
          "Khách hỏi thăm hôm nay của chị thế nào, và tiệm hôm nay thật sự rất đông khách nên chị muốn chia sẻ thật.",
        choices: [
          { id: "a", text: "Today has been a little crazy, honestly." },
          { id: "b", text: "Your nails need to dry for ten minutes." },
          { id: "c", text: "We close early on weekends." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi ngày làm việc thật sự bận rộn, mình có thể chia sẻ nhẹ với khách bằng câu này, vừa thật vừa dễ tạo cuộc trò chuyện.",
        wrongAnswerExplanations:
          "'Your nails need to dry for ten minutes.' nói về việc khô móng, không liên quan đến câu hỏi về ngày hôm nay. 'We close early on weekends.' nói về giờ đóng cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi tiệm đang rất đông khách và mình muốn chia sẻ thật với khách.",
      },
      {
        id: "st-6-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🙂",
        english: "It's a pretty normal day so far.",
        vietnamese: "Đến giờ thì cũng là một ngày bình thường thôi.",
        choices: [
          { id: "a", text: "Đến giờ thì cũng là một ngày bình thường thôi." },
          { id: "b", text: "Hôm nay tiệm chúng tôi đóng cửa." },
          { id: "c", text: "Hôm nay tôi không đi làm." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này dùng để trả lời nhẹ nhàng khi ngày làm việc không có gì đặc biệt, vừa vui vừa dễ chịu.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc đóng cửa tiệm hoặc không đi làm — không đúng với ý nghĩa 'một ngày bình thường'.",
        usageTip: "Dùng khi khách hỏi thăm ngày hôm nay mà thật ra không có gì đặc biệt xảy ra.",
      },
      {
        id: "st-6-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "☺️",
        english: "Better now that you're here!",
        vietnamese: "Tốt hơn rồi vì bạn đến đây!",
        prompt: "Hope your day is going well.",
        promptVietnamese: "Hy vọng ngày của bạn ổn nhé.",
        choices: [
          { id: "a", text: "Better now that you're here!" },
          { id: "b", text: "We don't have that size." },
          { id: "c", text: "Please sign here first." },
        ],
        correctAnswer: "a",
        explanation:
          "Đây là câu đáp lại vui vẻ, hơi đùa một chút, nói rằng ngày càng tốt hơn vì khách vừa đến — cách nói này rất dễ thương và thân thiện.",
        wrongAnswerExplanations:
          "'We don't have that size.' hoàn toàn không liên quan đến lời chúc của khách. 'Please sign here first.' là yêu cầu ký tên, không phải cách đáp lại câu chúc này.",
        usageTip: "Dùng khi khách chúc mình một ngày tốt lành và mình muốn đáp lại vui vẻ.",
      },
      {
        id: "st-6-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "📋",
        english: "It's a busy day, but I'm not complaining.",
        vietnamese: "Hôm nay bận, nhưng tôi không phàn nàn đâu.",
        prompt: "It's a busy day, but I'm not ___.",
        choices: [
          { id: "a", text: "complaining" },
          { id: "b", text: "complain" },
          { id: "c", text: "complained" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'I'm not' cần dùng động từ dạng '-ing' để diễn tả hành động đang diễn ra — 'complaining' nghĩa là 'không phàn nàn gì'.",
        wrongAnswerExplanations:
          "'Complain' thiếu dạng '-ing' nên không đúng ngữ pháp sau 'I'm not'. 'Complained' là dạng quá khứ, không phù hợp trong câu này.",
        usageTip: "Dùng khi ngày làm việc bận rộn nhưng mình vẫn giữ tinh thần vui vẻ.",
      },
      {
        id: "st-6-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🌞",
        english: "So far so good! Thanks for asking.",
        vietnamese: "Đến giờ vẫn ổn! Cảm ơn bạn đã hỏi.",
        promptContext:
          "Khách hỏi thăm ngày hôm nay của chị, và thật ra hôm nay khá ổn, không có gì phàn nàn.",
        choices: [
          { id: "a", text: "So far so good! Thanks for asking." },
          { id: "b", text: "We ran out of gel polish." },
          { id: "c", text: "Please come back tomorrow." },
        ],
        correctAnswer: "a",
        explanation:
          "'So far so good' là cách nói rất tự nhiên nghĩa là 'đến giờ vẫn ổn', kèm lời cảm ơn vì khách đã hỏi thăm.",
        wrongAnswerExplanations:
          "'We ran out of gel polish.' nói về việc hết sơn gel, hoàn toàn lạc đề với câu hỏi thăm. 'Please come back tomorrow.' nói về việc quay lại ngày khác, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi khách hỏi thăm và ngày hôm nay thật sự đang ổn.",
      },
      {
        id: "st-6-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "I can't complain, every day is different here.",
        vietnamese: "Tôi không có gì để phàn nàn, mỗi ngày ở đây đều khác nhau.",
        audioText: "I can't complain, every day is different here.",
        choices: [
          { id: "a", text: "Tôi không có gì để phàn nàn, mỗi ngày ở đây đều khác nhau." },
          { id: "b", text: "Hôm nay tiệm quá đông, tôi mệt lắm." },
          { id: "c", text: "Tôi chưa từng làm việc ở đây trước đây." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói rằng công việc mỗi ngày đều khác nhau và mình không có gì để phàn nàn — một cách trả lời tích cực khi khách hỏi thăm về công việc.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa mệt mỏi hoặc chưa từng làm — không đúng với ý nghĩa tích cực của câu nghe.",
        usageTip: "Dùng khi khách hỏi về công việc hàng ngày và mình muốn trả lời tích cực, tự nhiên.",
      },
      {
        id: "st-6-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🕰️",
        english: "It's flying by today, actually.",
        vietnamese: "Thật ra hôm nay trôi qua nhanh lắm.",
        prompt: "Is today going by fast for you?",
        promptVietnamese: "Hôm nay có trôi qua nhanh với bạn không?",
        choices: [
          { id: "a", text: "It's flying by today, actually." },
          { id: "b", text: "It takes an hour to dry." },
          { id: "c", text: "We are open until nine." },
        ],
        correctAnswer: "a",
        explanation:
          "'Flying by' là cách nói thời gian trôi qua rất nhanh — dùng khi ngày làm việc bận rộn nhưng vui nên không thấy dài.",
        wrongAnswerExplanations:
          "'It takes an hour to dry.' nói về thời gian khô sơn, không liên quan đến câu hỏi về thời gian trong ngày. 'We are open until nine.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi ngày làm việc bận đến mức cảm thấy thời gian trôi rất nhanh.",
      },
      {
        id: "st-6-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "😄",
        english: "Today has been a good one.",
        vietnamese: "Hôm nay là một ngày tốt đẹp.",
        promptContext: "Chloe muốn nói rằng hôm nay là một ngày làm việc khá vui vẻ, thoải mái.",
        choices: [
          { id: "a", text: "Today has been a good one." },
          { id: "b", text: "Today has being a good one." },
          { id: "c", text: "Today have been good one a." },
        ],
        correctAnswer: "a",
        explanation:
          "'Today has been a good one' dùng thì hiện tại hoàn thành để nói về cả ngày tính đến giờ hiện tại — cách nói rất tự nhiên và phổ biến.",
        wrongAnswerExplanations:
          "'Today has being a good one.' sai vì phải dùng 'been', không dùng 'being' sau 'has'. 'Today have been good one a.' sai cả về chia động từ và thứ tự từ trong câu.",
        usageTip: "Dùng khi muốn nói ngày hôm nay của mình khá vui và ổn.",
      },
      {
        id: "st-6-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌤️",
        english: "Every day is a little different around here.",
        vietnamese: "Ở đây mỗi ngày đều có một chút khác nhau.",
        promptContext: "Chloe muốn nói rằng công việc mỗi ngày trong tiệm không giống nhau hoàn toàn.",
        choices: [
          { id: "a", text: "Every day is a little different around here." },
          { id: "b", text: "Every day is little different around here a." },
          { id: "c", text: "Every days are a little different around here." },
        ],
        correctAnswer: "a",
        explanation:
          "'Every day' luôn đi với động từ số ít 'is', và câu này đúng cấu trúc, nghĩa là công việc mỗi ngày không giống hoàn toàn.",
        wrongAnswerExplanations:
          "'Every day is little different around here a.' sai vì đặt 'a' lạc chỗ ở cuối câu. 'Every days are a little different around here.' sai vì 'every' luôn đi với danh từ số ít 'day', không phải 'days'.",
        usageTip: "Dùng khi muốn nói với khách rằng công việc trong tiệm luôn có gì đó mới mỗi ngày.",
      },
    ],
  },
{
    id: "st-7",
    slug: "st-07-cong-viec-ngay-nghi-2",
    topicId: "nails-small-talk",
    title: "Hỏi khách có bận không",
    description: "Cách hỏi khách có đang bận công việc hôm nay hay không.",
    level: "beginner",
    coverImage: "/images/lessons/st-07-cong-viec-ngay-nghi-2.jpg",
    questions: [
      {
        id: "st-7-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "💼",
        english: "Pretty busy, but I made time for this.",
        vietnamese: "Khá bận, nhưng tôi vẫn dành thời gian cho việc này.",
        prompt: "Are you busy today?",
        promptVietnamese: "Hôm nay bạn có bận không?",
        choices: [
          { id: "a", text: "Pretty busy, but I made time for this." },
          { id: "b", text: "It's twenty dollars for a manicure." },
          { id: "c", text: "We don't have that shape." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi mình có bận không, mình trả lời thật và nhẹ nhàng nói rằng vẫn dành thời gian cho việc này, thể hiện sự vui vẻ với công việc.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về sự bận rộn. 'We don't have that shape.' nói về kiểu móng, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi thăm mình có bận rộn với công việc hôm nay không.",
      },
      {
        id: "st-7-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🗂️",
        english: "Are you off work today, or just stopping by?",
        vietnamese: "Hôm nay bạn nghỉ làm, hay chỉ tạt qua thôi?",
        promptContext:
          "Chị thấy một khách quen đến tiệm vào giữa tuần, giờ mà bình thường khách hay đi làm, nên chị hỏi thăm nhẹ.",
        choices: [
          { id: "a", text: "Are you off work today, or just stopping by?" },
          { id: "b", text: "Your nails are ready now." },
          { id: "c", text: "We are fully booked this afternoon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi thấy khách đến vào giờ lạ hơn thường lệ, mình có thể hỏi thăm nhẹ xem khách có nghỉ làm hôm nay không.",
        wrongAnswerExplanations:
          "'Your nails are ready now.' nói về việc móng đã xong, không liên quan đến câu hỏi thăm này. 'We are fully booked this afternoon.' nói về việc hết chỗ, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách đến vào một giờ khác thường và mình muốn hỏi thăm nhẹ nhàng.",
      },
      {
        id: "st-7-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🤔",
        english: "Do you get a lunch break at work?",
        vietnamese: "Chỗ bạn làm có giờ nghỉ trưa không?",
        choices: [
          { id: "a", text: "Chỗ bạn làm có giờ nghỉ trưa không?" },
          { id: "b", text: "Bạn thích ăn trưa món gì?" },
          { id: "c", text: "Bạn làm việc ở đâu vậy?" },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này hỏi khách xem công việc của họ có giờ nghỉ trưa hay không, một câu hỏi nhẹ nhàng về cuộc sống công việc.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại hỏi về món ăn hoặc nơi làm việc — không đúng với ý nghĩa của câu tiếng Anh này.",
        usageTip: "Dùng khi trò chuyện về công việc của khách và muốn hỏi về giờ nghỉ trưa.",
      },
      {
        id: "st-7-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🏢",
        english: "That sounds like a lot of work!",
        vietnamese: "Nghe có vẻ nhiều việc quá!",
        prompt: "I have three meetings back to back today.",
        promptVietnamese: "Hôm nay tôi có ba cuộc họp liên tiếp.",
        choices: [
          { id: "a", text: "That sounds like a lot of work!" },
          { id: "b", text: "We close at five today." },
          { id: "c", text: "Your color will be ready soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách kể về một ngày làm việc bận rộn, mình đáp lại thể hiện sự đồng cảm bằng câu ngắn gọn này.",
        wrongAnswerExplanations:
          "'We close at five today.' nói về giờ đóng cửa, không liên quan đến việc khách kể về công việc. 'Your color will be ready soon.' nói về việc pha màu, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách chia sẻ về một ngày làm việc bận rộn của họ.",
      },
      {
        id: "st-7-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "📅",
        english: "Do you work tomorrow, or do you have the day off?",
        vietnamese: "Ngày mai bạn đi làm, hay được nghỉ?",
        prompt: "Do you work tomorrow, or do you have the day ___?",
        choices: [
          { id: "a", text: "off" },
          { id: "b", text: "out" },
          { id: "c", text: "away" },
        ],
        correctAnswer: "a",
        explanation:
          "'Have the day off' là cụm cố định nghĩa là 'được nghỉ một ngày' — đây là cách nói rất phổ biến khi hỏi về ngày nghỉ.",
        wrongAnswerExplanations:
          "'Have the day out' không phải cách nói tự nhiên trong tiếng Anh. 'Have the day away' cũng không đúng, không phải cụm từ được dùng theo cách này.",
        usageTip: "Dùng khi hỏi khách xem ngày mai họ có đi làm hay được nghỉ.",
      },
      {
        id: "st-7-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "😮‍💨",
        english: "It's been a really long week for me.",
        vietnamese: "Tuần này đối với tôi thật sự rất dài.",
        promptContext:
          "Khách trông có vẻ mệt mỏi khi bước vào tiệm, chị hỏi thăm và khách muốn chia sẻ về tuần làm việc vất vả của mình.",
        choices: [
          { id: "a", text: "It's been a really long week for me." },
          { id: "b", text: "The polish needs three coats." },
          { id: "c", text: "We take walk-ins on weekdays." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách trông mệt mỏi và muốn chia sẻ, mình để khách nói ra cảm giác của họ bằng câu tự nhiên này.",
        wrongAnswerExplanations:
          "'The polish needs three coats.' nói về việc sơn móng, không liên quan gì đến cảm giác mệt mỏi của khách. 'We take walk-ins on weekdays.' nói về việc nhận khách không hẹn, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách trông mệt mỏi và muốn chia sẻ về tuần làm việc vất vả.",
      },
      {
        id: "st-7-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "You deserve some rest after a week like that.",
        vietnamese: "Bạn đáng được nghỉ ngơi sau một tuần như vậy.",
        audioText: "You deserve some rest after a week like that.",
        choices: [
          { id: "a", text: "Bạn đáng được nghỉ ngơi sau một tuần như vậy." },
          { id: "b", text: "Bạn cần làm việc nhiều hơn tuần này." },
          { id: "c", text: "Tuần sau chúng tôi sẽ rất bận." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện sự đồng cảm, nói rằng khách đáng được nghỉ ngơi sau một tuần làm việc mệt mỏi.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoặc không liên quan gì đến sự đồng cảm trong câu nghe.",
        usageTip: "Dùng khi khách vừa kể về một tuần làm việc mệt mỏi và mình muốn động viên nhẹ.",
      },
      {
        id: "st-7-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🧑‍💻",
        english: "That must keep you on your feet all day.",
        vietnamese: "Vậy chắc bạn phải đứng cả ngày rồi.",
        prompt: "I work at a restaurant, so it's always busy.",
        promptVietnamese: "Tôi làm ở nhà hàng, nên lúc nào cũng bận.",
        choices: [
          { id: "a", text: "That must keep you on your feet all day." },
          { id: "b", text: "We only do gel here." },
          { id: "c", text: "Please choose a color first." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách kể về công việc bận rộn cần đi lại nhiều, mình đáp lại thể hiện sự hiểu và đồng cảm.",
        wrongAnswerExplanations:
          "'We only do gel here.' nói về dịch vụ của tiệm, hoàn toàn không liên quan đến câu chuyện công việc của khách. 'Please choose a color first.' cũng lạc đề, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi khách chia sẻ về một công việc phải di chuyển hoặc đứng nhiều.",
      },
      {
        id: "st-7-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🙌",
        english: "I bet you're glad it's almost the weekend.",
        vietnamese: "Chắc bạn vui vì gần đến cuối tuần rồi.",
        promptContext: "Chloe muốn nói với khách rằng chắc khách đang mong đến cuối tuần sau một tuần bận rộn.",
        choices: [
          { id: "a", text: "I bet you're glad it's almost the weekend." },
          { id: "b", text: "I bet you glad it's almost the weekend." },
          { id: "c", text: "I bet you're glad almost it's the weekend." },
        ],
        correctAnswer: "a",
        explanation:
          "'I bet you're glad...' là cách nói tự nhiên nghĩa là 'chắc bạn vui vì...', và câu này đúng ngữ pháp với 'you're' đầy đủ chủ ngữ và động từ.",
        wrongAnswerExplanations:
          "'I bet you glad it's almost the weekend.' sai vì thiếu động từ 'are' (rút gọn 're). 'I bet you're glad almost it's the weekend.' sai vì đặt từ 'almost' lạc chỗ trong câu.",
        usageTip: "Dùng vào cuối tuần làm việc khi muốn trò chuyện vui vẻ với khách.",
      },
      {
        id: "st-7-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "☕",
        english: "You definitely earned a break today.",
        vietnamese: "Hôm nay bạn chắc chắn đáng được nghỉ ngơi.",
        promptContext: "Chloe muốn nói với khách rằng họ xứng đáng có một khoảng nghỉ hôm nay.",
        choices: [
          { id: "a", text: "You definitely earned a break today." },
          { id: "b", text: "You definitely earn a break today." },
          { id: "c", text: "You definitely earned break a today." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này dùng thì quá khứ đơn 'earned' vì nói về việc khách đã làm việc chăm chỉ trước đó và giờ xứng đáng nghỉ ngơi.",
        wrongAnswerExplanations:
          "'You definitely earn a break today.' dùng sai thì, không hợp ngữ cảnh nói về công sức đã có từ trước. 'You definitely earned break a today.' sai vì đặt mạo từ 'a' lạc chỗ trong câu.",
        usageTip: "Dùng khi khách kể về một ngày hoặc tuần làm việc vất vả và mình muốn động viên nhẹ.",
      },
    ],
  },
{
    id: "st-8",
    slug: "st-08-cong-viec-ngay-nghi-3",
    topicId: "nails-small-talk",
    title: "Chia sẻ về công việc của mình",
    description: "Cách chia sẻ nhẹ nhàng về công việc làm nails của mình khi khách hỏi.",
    level: "beginner",
    coverImage: "/images/lessons/st-08-cong-viec-ngay-nghi-3.jpg",
    questions: [
      {
        id: "st-8-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "💅",
        english: "About five years now. I really enjoy it.",
        vietnamese: "Khoảng năm năm rồi. Tôi thật sự thích công việc này.",
        prompt: "How long have you been doing nails?",
        promptVietnamese: "Bạn làm nails được bao lâu rồi?",
        choices: [
          { id: "a", text: "About five years now. I really enjoy it." },
          { id: "b", text: "It takes about thirty minutes." },
          { id: "c", text: "We open at ten every day." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi mình làm nghề bao lâu, mình trả lời cụ thể rồi thêm câu ngắn thể hiện mình thích công việc này.",
        wrongAnswerExplanations:
          "'It takes about thirty minutes.' nói về thời gian làm dịch vụ, không phải câu trả lời cho câu hỏi về kinh nghiệm làm nghề. 'We open at ten every day.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình đã làm nghề nails được bao lâu.",
      },
      {
        id: "st-8-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧑‍🏫",
        english: "I'm still learning new things every day.",
        vietnamese: "Tôi vẫn học được điều mới mỗi ngày.",
        promptContext:
          "Khách hỏi chị có cảm thấy công việc nhàm chán sau nhiều năm không, và chị muốn trả lời rằng công việc luôn có điều mới.",
        choices: [
          { id: "a", text: "I'm still learning new things every day." },
          { id: "b", text: "The nail glue is on the shelf." },
          { id: "c", text: "We need to reschedule your appointment." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện tinh thần yêu nghề, nói rằng công việc luôn có điều mới để học, giúp khách thấy công việc này thú vị.",
        wrongAnswerExplanations:
          "'The nail glue is on the shelf.' nói về vị trí keo dán móng, hoàn toàn không liên quan đến câu hỏi này. 'We need to reschedule your appointment.' nói về việc đổi hẹn, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi khách hỏi liệu công việc làm nails có nhàm chán sau nhiều năm không.",
      },
      {
        id: "st-8-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🎨",
        english: "I love doing nail art the most.",
        vietnamese: "Tôi thích vẽ nail art nhất.",
        choices: [
          { id: "a", text: "Tôi thích vẽ nail art nhất." },
          { id: "b", text: "Tôi không thích làm việc vào cuối tuần." },
          { id: "c", text: "Tôi mới học nghề này gần đây." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói về phần công việc mà mình thích nhất, đó là vẽ nail art — một cách chia sẻ vui về công việc.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc không thích cuối tuần hoặc mới học nghề — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi trò chuyện với khách về phần công việc mà mình yêu thích nhất.",
      },
      {
        id: "st-8-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😃",
        english: "It can be tiring, but I love making people happy.",
        vietnamese: "Cũng mệt lắm, nhưng tôi thích làm khách vui.",
        prompt: "Doesn't standing all day get tiring?",
        promptVietnamese: "Đứng cả ngày như vậy không mệt sao?",
        choices: [
          { id: "a", text: "It can be tiring, but I love making people happy." },
          { id: "b", text: "We are open seven days a week." },
          { id: "c", text: "This polish dries in five minutes." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi công việc có mệt không, mình trả lời thật nhưng thêm phần tích cực để giữ không khí vui vẻ.",
        wrongAnswerExplanations:
          "'We are open seven days a week.' nói về giờ mở cửa, không phải câu trả lời cho câu hỏi về sự mệt mỏi. 'This polish dries in five minutes.' nói về thời gian khô sơn, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi thăm liệu công việc đứng cả ngày có mệt không.",
      },
      {
        id: "st-8-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "I really enjoy meeting new people every day.",
        vietnamese: "Tôi thật sự thích gặp người mới mỗi ngày.",
        prompt: "I really enjoy ___ new people every day.",
        choices: [
          { id: "a", text: "meeting" },
          { id: "b", text: "meet" },
          { id: "c", text: "met" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'enjoy' luôn dùng động từ dạng '-ing', nên 'meeting' là đúng — nghĩa là 'thích gặp người mới'.",
        wrongAnswerExplanations:
          "'Meet' sai vì thiếu dạng '-ing' sau 'enjoy'. 'Met' là dạng quá khứ, không dùng được sau 'enjoy'.",
        usageTip: "Dùng khi chia sẻ về niềm vui gặp nhiều khách mới trong công việc mỗi ngày.",
      },
      {
        id: "st-8-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧠",
        english: "You must remember so many faces.",
        vietnamese: "Chắc bạn phải nhớ nhiều gương mặt lắm.",
        promptContext:
          "Khách ngạc nhiên vì chị nhớ được rất nhiều khách quen, khách muốn nói lên sự ngạc nhiên đó.",
        choices: [
          { id: "a", text: "You must remember so many faces." },
          { id: "b", text: "Your appointment is at three." },
          { id: "c", text: "We changed our hours this month." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách ngạc nhiên về khả năng nhớ mặt khách hàng, khách có thể nói câu này để khen nhẹ.",
        wrongAnswerExplanations:
          "'Your appointment is at three.' nói về giờ hẹn, không liên quan đến việc ngạc nhiên về trí nhớ. 'We changed our hours this month.' nói về giờ mở cửa thay đổi, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách bất ngờ vì thấy mình nhớ được nhiều khách quen.",
      },
      {
        id: "st-8-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "It's a skill you build over time, honestly.",
        vietnamese: "Thật ra đó là kỹ năng mình rèn được qua thời gian.",
        audioText: "It's a skill you build over time, honestly.",
        choices: [
          { id: "a", text: "Thật ra đó là kỹ năng mình rèn được qua thời gian." },
          { id: "b", text: "Tôi mới bắt đầu làm việc này tuần trước." },
          { id: "c", text: "Tôi không nhớ tên khách nào cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói rằng khả năng nhớ mặt và tên khách là một kỹ năng được rèn luyện qua thời gian, không phải tự nhiên mà có.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại, không đúng với ý nghĩa của câu nghe được.",
        usageTip: "Dùng khi khách khen mình nhớ mặt khách hàng giỏi và mình muốn giải thích nhẹ.",
      },
      {
        id: "st-8-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "💪",
        english: "Every job has its hard days, right?",
        vietnamese: "Công việc nào cũng có ngày khó khăn, đúng không?",
        prompt: "Do you ever have really hard days at work?",
        promptVietnamese: "Bạn có bao giờ có những ngày làm việc khó khăn không?",
        choices: [
          { id: "a", text: "Every job has its hard days, right?" },
          { id: "b", text: "We only accept card payments." },
          { id: "c", text: "This gel color just came in." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về những ngày khó khăn trong công việc, mình đáp lại chân thật nhưng nhẹ nhàng, kèm câu hỏi lại để giữ trò chuyện tự nhiên.",
        wrongAnswerExplanations:
          "'We only accept card payments.' nói về hình thức thanh toán, hoàn toàn không liên quan. 'This gel color just came in.' nói về màu sơn mới, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi khách hỏi thăm về những ngày làm việc khó khăn của mình.",
      },
      {
        id: "st-8-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌈",
        english: "I try to stay positive no matter what.",
        vietnamese: "Tôi luôn cố gắng giữ tinh thần tích cực dù thế nào.",
        promptContext: "Chloe muốn chia sẻ với khách rằng mình luôn cố gắng giữ tinh thần vui vẻ trong công việc.",
        choices: [
          { id: "a", text: "I try to stay positive no matter what." },
          { id: "b", text: "I try stay positive no matter what." },
          { id: "c", text: "I try to staying positive no matter what." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'try to' phải dùng động từ nguyên mẫu, nên 'stay' là đúng — câu này nghĩa là luôn cố gắng giữ tinh thần tích cực.",
        wrongAnswerExplanations:
          "'I try stay positive no matter what.' thiếu chữ 'to' sau 'try'. 'I try to staying positive no matter what.' sai vì sau 'to' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi chia sẻ với khách về cách mình giữ tinh thần tích cực trong công việc.",
      },
      {
        id: "st-8-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "💬",
        english: "I love this job because of days like today.",
        vietnamese: "Tôi thích công việc này vì những ngày như hôm nay.",
        promptContext: "Chloe muốn nói rằng chính những ngày vui vẻ như hôm nay làm mình yêu công việc này.",
        choices: [
          { id: "a", text: "I love this job because of days like today." },
          { id: "b", text: "I love this job because days like today." },
          { id: "c", text: "I love this job of days because like today." },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc 'because of + danh từ' là đúng khi muốn nói lý do gắn với một danh từ, ở đây là 'days like today' — câu này đúng và tự nhiên.",
        wrongAnswerExplanations:
          "'I love this job because days like today.' thiếu chữ 'of' sau 'because'. 'I love this job of days because like today.' sai hoàn toàn về thứ tự các từ trong câu.",
        usageTip: "Dùng vào một ngày làm việc thật sự vui vẻ và mình muốn chia sẻ cảm xúc đó với khách.",
      },
    ],
  },
{
    id: "st-9",
    slug: "st-09-cong-viec-ngay-nghi-4",
    topicId: "nails-small-talk",
    title: "Hỏi khách về ngày nghỉ",
    description: "Cách hỏi khách về ngày nghỉ và lịch làm việc một cách tự nhiên.",
    level: "beginner",
    coverImage: "/images/lessons/st-09-cong-viec-ngay-nghi-4.jpg",
    questions: [
      {
        id: "st-9-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🗓️",
        english: "Yes, I'm off tomorrow. I can't wait.",
        vietnamese: "Vâng, ngày mai tôi được nghỉ. Tôi mong lắm.",
        prompt: "Are you off tomorrow?",
        promptVietnamese: "Ngày mai bạn có nghỉ không?",
        choices: [
          { id: "a", text: "Yes, I'm off tomorrow. I can't wait." },
          { id: "b", text: "It's fifteen dollars for that." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi mình có nghỉ ngày mai không, mình trả lời thật và thêm cảm xúc để trò chuyện thêm tự nhiên.",
        wrongAnswerExplanations:
          "'It's fifteen dollars for that.' nói về giá tiền, không liên quan đến câu hỏi về ngày nghỉ. 'We're open every day this week.' nói về giờ mở cửa của tiệm, không phải câu trả lời cho câu hỏi cá nhân này.",
        usageTip: "Dùng khi khách hỏi thăm mình có được nghỉ vào ngày mai không.",
      },
      {
        id: "st-9-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "😴",
        english: "Do you get weekends off, or do you work then too?",
        vietnamese: "Bạn có được nghỉ cuối tuần không, hay vẫn phải làm?",
        promptContext:
          "Khách tò mò về lịch làm việc của chị, muốn biết liệu chị có được nghỉ cuối tuần như đa số người khác không.",
        choices: [
          { id: "a", text: "Do you get weekends off, or do you work then too?" },
          { id: "b", text: "Your nails are still wet." },
          { id: "c", text: "We take card and cash both." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách hỏi thăm về lịch làm việc cuối tuần của mình, một câu hỏi nhẹ nhàng thể hiện sự quan tâm.",
        wrongAnswerExplanations:
          "'Your nails are still wet.' nói về việc móng còn ướt, không liên quan đến câu hỏi về lịch làm việc. 'We take card and cash both.' nói về thanh toán, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách tò mò về lịch làm việc cuối tuần của thợ nails.",
      },
      {
        id: "st-9-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🛌",
        english: "I usually take Mondays off.",
        vietnamese: "Tôi thường nghỉ vào thứ Hai.",
        choices: [
          { id: "a", text: "Tôi thường nghỉ vào thứ Hai." },
          { id: "b", text: "Tôi làm việc suốt cả tuần, không nghỉ." },
          { id: "c", text: "Tôi thích đi làm vào cuối tuần." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói về ngày nghỉ cố định trong tuần của mình, ở đây là thứ Hai — một cách chia sẻ lịch làm việc rất tự nhiên.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi khách hỏi về ngày nghỉ cố định trong tuần của mình.",
      },
      {
        id: "st-9-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🌴",
        english: "That sounds like a nice little break.",
        vietnamese: "Nghe có vẻ là một kỳ nghỉ nhỏ dễ chịu đấy.",
        prompt: "I'm taking a few days off next week.",
        promptVietnamese: "Tuần sau tôi sẽ nghỉ vài ngày.",
        choices: [
          { id: "a", text: "That sounds like a nice little break." },
          { id: "b", text: "We need your phone number." },
          { id: "c", text: "This polish chips easily." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách kể sắp có vài ngày nghỉ, mình đáp lại vui vẻ, thể hiện sự vui thay cho khách.",
        wrongAnswerExplanations:
          "'We need your phone number.' nói về việc xin số điện thoại, hoàn toàn lạc đề với câu chuyện về ngày nghỉ. 'This polish chips easily.' nói về việc sơn dễ tróc, không liên quan gì.",
        usageTip: "Dùng khi khách chia sẻ về việc sắp có vài ngày nghỉ.",
      },
      {
        id: "st-9-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "📴",
        english: "I have the next two days off.",
        vietnamese: "Tôi được nghỉ hai ngày tới.",
        prompt: "I have the next two days ___.",
        choices: [
          { id: "a", text: "off" },
          { id: "b", text: "out" },
          { id: "c", text: "away" },
        ],
        correctAnswer: "a",
        explanation:
          "'Days off' là cách nói cố định nghĩa là 'những ngày được nghỉ' — dùng 'off' là đúng nhất.",
        wrongAnswerExplanations:
          "'Days out' không mang nghĩa 'ngày nghỉ' trong tiếng Anh. 'Days away' cũng không đúng nghĩa trong trường hợp này.",
        usageTip: "Dùng khi chia sẻ với khách rằng mình sắp có vài ngày nghỉ liên tiếp.",
      },
      {
        id: "st-9-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧳",
        english: "Any big plans for your day off?",
        vietnamese: "Ngày nghỉ của bạn có kế hoạch gì hay không?",
        promptContext:
          "Chị vừa nói với khách là ngày mai mình được nghỉ, và khách muốn hỏi thăm xem chị có định làm gì đặc biệt không.",
        choices: [
          { id: "a", text: "Any big plans for your day off?" },
          { id: "b", text: "Your total today is forty dollars." },
          { id: "c", text: "We are short-staffed today." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi biết mình có ngày nghỉ, khách có thể hỏi thăm xem có kế hoạch gì đặc biệt không, một câu hỏi rất tự nhiên trong small talk.",
        wrongAnswerExplanations:
          "'Your total today is forty dollars.' nói về giá tiền, không liên quan đến câu hỏi về ngày nghỉ. 'We are short-staffed today.' nói về việc thiếu người, hoàn toàn lạc đề.",
        usageTip: "Dùng khi biết ai đó sắp có ngày nghỉ và muốn hỏi thăm kế hoạch của họ.",
      },
      {
        id: "st-9-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "Nothing big, just resting at home.",
        vietnamese: "Không có gì to tát, chỉ nghỉ ngơi ở nhà thôi.",
        audioText: "Nothing big, just resting at home.",
        choices: [
          { id: "a", text: "Không có gì to tát, chỉ nghỉ ngơi ở nhà thôi." },
          { id: "b", text: "Tôi sẽ đi làm cả ngày nghỉ." },
          { id: "c", text: "Tôi chưa có ngày nghỉ nào cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này trả lời rằng ngày nghỉ không có kế hoạch gì lớn, chỉ đơn giản là nghỉ ngơi ở nhà — một câu trả lời rất bình dị và tự nhiên.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoặc không liên quan đến câu trả lời nhẹ nhàng này.",
        usageTip: "Dùng khi được hỏi về kế hoạch ngày nghỉ mà thật ra chỉ muốn nghỉ ngơi ở nhà.",
      },
      {
        id: "st-9-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👍",
        english: "Sometimes doing nothing is the best plan.",
        vietnamese: "Đôi khi không làm gì cả lại là kế hoạch tốt nhất.",
        prompt: "I don't have any plans, just resting.",
        promptVietnamese: "Tôi không có kế hoạch gì, chỉ nghỉ ngơi thôi.",
        choices: [
          { id: "a", text: "Sometimes doing nothing is the best plan." },
          { id: "b", text: "We only have one color left." },
          { id: "c", text: "Your appointment is confirmed." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nói không có kế hoạch gì cho ngày nghỉ, mình có thể đáp lại đồng tình rằng đôi khi nghỉ ngơi là điều tốt nhất.",
        wrongAnswerExplanations:
          "'We only have one color left.' nói về việc còn một màu sơn, hoàn toàn không liên quan. 'Your appointment is confirmed.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi khách nói ngày nghỉ của họ không có kế hoạch gì đặc biệt.",
      },
      {
        id: "st-9-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🧡",
        english: "I hope you enjoy your time off.",
        vietnamese: "Tôi hy vọng bạn sẽ có kỳ nghỉ vui vẻ.",
        promptContext: "Chloe muốn chúc khách một ngày nghỉ vui vẻ sau khi biết khách sắp được nghỉ.",
        choices: [
          { id: "a", text: "I hope you enjoy your time off." },
          { id: "b", text: "I hope you enjoy you time off." },
          { id: "c", text: "I hope enjoy your time off you." },
        ],
        correctAnswer: "a",
        explanation:
          "'Your time off' là cụm từ đúng nghĩa 'thời gian nghỉ của bạn' — câu này đúng ngữ pháp và rất tự nhiên khi chúc ai đó.",
        wrongAnswerExplanations:
          "'I hope you enjoy you time off.' sai vì phải dùng 'your' (tính từ sở hữu), không dùng 'you'. 'I hope enjoy your time off you.' sai hoàn toàn về thứ tự từ trong câu.",
        usageTip: "Dùng để chúc khách một câu ngắn khi biết họ sắp có ngày nghỉ.",
      },
      {
        id: "st-9-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌻",
        english: "Days off are the best when you need them.",
        vietnamese: "Ngày nghỉ tuyệt nhất khi mình thật sự cần nó.",
        promptContext: "Chloe muốn nói rằng ngày nghỉ đặc biệt quý giá khi mình đang cần nghỉ ngơi.",
        choices: [
          { id: "a", text: "Days off are the best when you need them." },
          { id: "b", text: "Days off is the best when you need them." },
          { id: "c", text: "Days off are the best when you needing them." },
        ],
        correctAnswer: "a",
        explanation:
          "'Days off' là số nhiều nên động từ phải chia là 'are', và câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Days off is the best when you need them.' sai vì chủ ngữ số nhiều phải đi với 'are', không dùng 'is'. 'Days off are the best when you needing them.' sai vì sau 'you' phải dùng động từ chia đúng thì, không dùng dạng '-ing' một mình.",
        usageTip: "Dùng khi trò chuyện về việc ngày nghỉ quý giá như thế nào sau một tuần bận rộn.",
      },
    ],
  },
];
