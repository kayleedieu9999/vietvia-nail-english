import { Lesson } from "@/types/content";

/** nails-small-talk — migrated group 3 (lessons 11-15 of existing content). */
export const nailsSmallTalkGroup03: Lesson[] = [
{
    id: "st-10",
    slug: "st-10-cong-viec-ngay-nghi-5",
    topicId: "nails-small-talk",
    title: "Chia sẻ về ngày nghỉ của mình",
    description: "Cách chia sẻ nhẹ nhàng về ngày nghỉ hoặc lịch làm việc riêng của thợ nails.",
    level: "beginner",
    questions: [
      {
        id: "st-10-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🌅",
        english: "I usually just sleep in and relax.",
        vietnamese: "Tôi thường chỉ ngủ nướng và nghỉ ngơi.",
        prompt: "What do you usually do on your day off?",
        promptVietnamese: "Ngày nghỉ bạn thường làm gì?",
        choices: [
          { id: "a", text: "I usually just sleep in and relax." },
          { id: "b", text: "It's twenty-five dollars total." },
          { id: "c", text: "We're closed on holidays." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi mình thường làm gì vào ngày nghỉ, mình chia sẻ đơn giản, ví dụ như ngủ nướng và thư giãn.",
        wrongAnswerExplanations:
          "'It's twenty-five dollars total.' nói về giá tiền, không liên quan đến câu hỏi về ngày nghỉ. 'We're closed on holidays.' nói về việc đóng cửa dịp lễ, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình thường làm gì trong ngày nghỉ.",
      },
      {
        id: "st-10-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🛍️",
        english: "I like to go shopping on my days off.",
        vietnamese: "Tôi thích đi mua sắm vào những ngày nghỉ.",
        promptContext:
          "Khách hỏi chị thường làm gì khi nghỉ, và chị muốn nói rằng mình thích đi mua sắm vào những ngày đó.",
        choices: [
          { id: "a", text: "I like to go shopping on my days off." },
          { id: "b", text: "The nail dryer is broken today." },
          { id: "c", text: "We need to close early tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ về hoạt động yêu thích trong ngày nghỉ, ở đây là đi mua sắm — một cách trò chuyện nhẹ nhàng, gần gũi.",
        wrongAnswerExplanations:
          "'The nail dryer is broken today.' nói về máy sấy móng bị hỏng, hoàn toàn không liên quan. 'We need to close early tonight.' nói về việc đóng cửa sớm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ với khách về hoạt động mình thích làm vào ngày nghỉ.",
      },
      {
        id: "st-10-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🍳",
        english: "I love cooking on my days off.",
        vietnamese: "Tôi thích nấu ăn vào những ngày nghỉ.",
        choices: [
          { id: "a", text: "Tôi thích nấu ăn vào những ngày nghỉ." },
          { id: "b", text: "Tôi không có thời gian nấu ăn." },
          { id: "c", text: "Tôi ăn ngoài tiệm mỗi ngày." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói về việc mình thích nấu ăn khi có ngày nghỉ, một cách chia sẻ sở thích cá nhân rất nhẹ nhàng.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoặc không liên quan đến sở thích nấu ăn được nói trong câu tiếng Anh.",
        usageTip: "Dùng khi chia sẻ với khách về sở thích nấu ăn vào ngày nghỉ.",
      },
      {
        id: "st-10-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎬",
        english: "That sounds so relaxing, honestly.",
        vietnamese: "Nghe có vẻ thư giãn thật sự luôn.",
        prompt: "I just watch movies all day on my days off.",
        promptVietnamese: "Ngày nghỉ tôi chỉ xem phim cả ngày thôi.",
        choices: [
          { id: "a", text: "That sounds so relaxing, honestly." },
          { id: "b", text: "We only take walk-ins in the morning." },
          { id: "c", text: "This design takes extra time." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách chia sẻ hoạt động ngày nghỉ đơn giản như xem phim, mình đáp lại thể hiện sự đồng cảm và thấy đó là điều dễ chịu.",
        wrongAnswerExplanations:
          "'We only take walk-ins in the morning.' nói về giờ nhận khách, hoàn toàn không liên quan. 'This design takes extra time.' nói về thời gian làm mẫu nail, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi khách chia sẻ về hoạt động thư giãn của họ vào ngày nghỉ.",
      },
      {
        id: "st-10-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🚶",
        english: "I like to take walks when I'm off work.",
        vietnamese: "Tôi thích đi bộ khi được nghỉ làm.",
        prompt: "I like to take walks when I'm ___ work.",
        choices: [
          { id: "a", text: "off" },
          { id: "b", text: "out" },
          { id: "c", text: "of" },
        ],
        correctAnswer: "a",
        explanation:
          "'Off work' là cụm từ cố định nghĩa là 'nghỉ làm' — đây là cách dùng đúng và phổ biến nhất.",
        wrongAnswerExplanations:
          "'Out work' không phải cụm từ có nghĩa trong tiếng Anh. 'Of work' cũng không đúng ngữ pháp trong trường hợp này.",
        usageTip: "Dùng khi chia sẻ với khách về việc thích đi bộ vào những ngày được nghỉ làm.",
      },
      {
        id: "st-10-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧘",
        english: "I try to do something for myself on my day off.",
        vietnamese: "Ngày nghỉ tôi luôn cố làm gì đó cho riêng mình.",
        promptContext:
          "Khách hỏi chị có làm gì đặc biệt cho bản thân vào ngày nghỉ không, và chị muốn chia sẻ rằng mình luôn cố gắng làm điều gì đó cho riêng mình.",
        choices: [
          { id: "a", text: "I try to do something for myself on my day off." },
          { id: "b", text: "We need more towels in the back." },
          { id: "c", text: "Your nail polish just arrived today." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng mình luôn cố gắng dành thời gian cho bản thân vào ngày nghỉ, một câu chia sẻ ấm áp và gần gũi.",
        wrongAnswerExplanations:
          "'We need more towels in the back.' nói về việc cần thêm khăn, hoàn toàn không liên quan. 'Your nail polish just arrived today.' nói về việc hàng vừa về, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ với khách về việc chăm sóc bản thân vào ngày nghỉ.",
      },
      {
        id: "st-10-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "A quiet day off is all I need sometimes.",
        vietnamese: "Đôi khi tôi chỉ cần một ngày nghỉ yên tĩnh.",
        audioText: "A quiet day off is all I need sometimes.",
        choices: [
          { id: "a", text: "Đôi khi tôi chỉ cần một ngày nghỉ yên tĩnh." },
          { id: "b", text: "Tôi không thích ngày nghỉ chút nào." },
          { id: "c", text: "Tôi sẽ đi làm cả ngày nghỉ này." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói rằng đôi khi chỉ cần một ngày nghỉ yên tĩnh là đủ, một cách chia sẻ chân thật và dễ đồng cảm.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi chia sẻ với khách rằng đôi khi mình chỉ cần một ngày nghỉ thật yên tĩnh.",
      },
      {
        id: "st-10-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👏",
        english: "That's a great way to recharge.",
        vietnamese: "Đó là cách tuyệt vời để nạp lại năng lượng.",
        prompt: "I spend my day off with my family.",
        promptVietnamese: "Ngày nghỉ tôi dành thời gian cho gia đình.",
        choices: [
          { id: "a", text: "That's a great way to recharge." },
          { id: "b", text: "We changed the price list." },
          { id: "c", text: "Your nails chipped already." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách chia sẻ dành ngày nghỉ cho gia đình, mình đáp lại thể hiện sự đồng tình rằng đó là cách tốt để nghỉ ngơi.",
        wrongAnswerExplanations:
          "'We changed the price list.' nói về việc thay đổi giá, hoàn toàn không liên quan. 'Your nails chipped already.' nói về việc móng bị tróc, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi khách chia sẻ về việc dành ngày nghỉ cho gia đình.",
      },
      {
        id: "st-10-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌿",
        english: "I always look forward to my next day off.",
        vietnamese: "Tôi luôn mong đến ngày nghỉ tiếp theo.",
        promptContext: "Chloe muốn chia sẻ rằng mình luôn mong chờ ngày nghỉ tiếp theo sau những ngày bận rộn.",
        choices: [
          { id: "a", text: "I always look forward to my next day off." },
          { id: "b", text: "I always look forward my next day off." },
          { id: "c", text: "I always look forward to my next day off to." },
        ],
        correctAnswer: "a",
        explanation:
          "'Look forward to' là cụm động từ cố định nghĩa là 'mong chờ điều gì đó' — luôn phải có chữ 'to' đi kèm.",
        wrongAnswerExplanations:
          "'I always look forward my next day off.' sai vì thiếu chữ 'to' sau 'forward'. 'I always look forward to my next day off to.' sai vì thừa chữ 'to' ở cuối câu.",
        usageTip: "Dùng khi chia sẻ với khách rằng mình luôn mong chờ ngày nghỉ tiếp theo.",
      },
      {
        id: "st-10-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🎈",
        english: "A good day off can really change your week.",
        vietnamese: "Một ngày nghỉ tốt thật sự có thể thay đổi cả tuần của bạn.",
        promptContext: "Chloe muốn nói rằng một ngày nghỉ chất lượng có thể giúp cả tuần của mình tốt hơn.",
        choices: [
          { id: "a", text: "A good day off can really change your week." },
          { id: "b", text: "A good day off can really changes your week." },
          { id: "c", text: "A good day off really can change week your." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau trợ động từ 'can' luôn dùng động từ nguyên mẫu, nên 'change' là đúng — câu này đúng ngữ pháp và tự nhiên.",
        wrongAnswerExplanations:
          "'A good day off can really changes your week.' sai vì sau 'can' không được thêm 's' vào động từ. 'A good day off really can change week your.' sai hoàn toàn về thứ tự từ trong câu.",
        usageTip: "Dùng khi trò chuyện về việc một ngày nghỉ tốt có thể ảnh hưởng tích cực đến cả tuần.",
      },
    ],
  },
{
    id: "st-11",
    slug: "st-11-thoi-tiet-1",
    topicId: "nails-small-talk",
    title: "Nói về thời tiết nóng",
    description: "Cách trò chuyện nhẹ nhàng khi thời tiết đang nóng bức.",
    level: "beginner",
    questions: [
      {
        id: "st-11-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "☀️",
        english: "It sure is! Summer here is no joke.",
        vietnamese: "Đúng vậy! Mùa hè ở đây không đùa đâu.",
        prompt: "Is it always this hot here?",
        promptVietnamese: "Ở đây có luôn nóng như vậy không?",
        choices: [
          { id: "a", text: "It sure is! Summer here is no joke." },
          { id: "b", text: "It's fifteen dollars for a fill-in." },
          { id: "c", text: "We open at ten on weekends." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về thời tiết nóng, mình đồng ý và thêm câu ngắn về mùa hè để trò chuyện tự nhiên hơn.",
        wrongAnswerExplanations:
          "'It's fifteen dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về thời tiết. 'We open at ten on weekends.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách nhận xét về thời tiết nóng ở khu vực mình sống.",
      },
      {
        id: "st-11-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🥵",
        english: "It's so hot outside today, isn't it?",
        vietnamese: "Hôm nay bên ngoài nóng quá, đúng không?",
        promptContext:
          "Khách vừa bước vào tiệm, trông rất nóng nực, chị muốn bắt chuyện nhẹ về thời tiết.",
        choices: [
          { id: "a", text: "It's so hot outside today, isn't it?" },
          { id: "b", text: "Your total is thirty dollars." },
          { id: "c", text: "We ran out of that shade." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi thấy khách vừa từ ngoài nóng bước vào, mình mở đầu câu chuyện bằng một câu nhận xét nhẹ về thời tiết.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars.' nói về giá tiền, chưa hợp lúc mới chào khách. 'We ran out of that shade.' nói về việc hết màu sơn, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách vừa bước vào tiệm từ ngoài trời nóng.",
      },
      {
        id: "st-11-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🧊",
        english: "It feels even hotter than yesterday.",
        vietnamese: "Cảm giác còn nóng hơn hôm qua nữa.",
        choices: [
          { id: "a", text: "Cảm giác còn nóng hơn hôm qua nữa." },
          { id: "b", text: "Hôm nay lạnh hơn hôm qua nhiều." },
          { id: "c", text: "Trời hôm nay có vẻ sắp mưa." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói rằng thời tiết hôm nay cảm giác nóng hơn so với ngày hôm trước — một nhận xét nhỏ về thời tiết rất tự nhiên.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc nói về mưa — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi muốn so sánh thời tiết hôm nay với hôm qua trong cuộc trò chuyện nhẹ.",
      },
      {
        id: "st-11-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "❄️",
        english: "Yes, it's nice and cool in here.",
        vietnamese: "Vâng, ở trong đây mát mẻ lắm.",
        prompt: "The AC in here feels amazing.",
        promptVietnamese: "Máy lạnh ở đây cảm giác thật tuyệt.",
        choices: [
          { id: "a", text: "Yes, it's nice and cool in here." },
          { id: "b", text: "We close the shop at eight." },
          { id: "c", text: "Your color will take ten minutes." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách khen máy lạnh trong tiệm mát mẻ, mình đồng ý và thêm câu ngắn để tiếp tục cuộc trò chuyện.",
        wrongAnswerExplanations:
          "'We close the shop at eight.' nói về giờ đóng cửa, không liên quan đến lời khen về máy lạnh. 'Your color will take ten minutes.' nói về thời gian pha màu, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách khen không khí mát mẻ trong tiệm so với ngoài trời nóng.",
      },
      {
        id: "st-11-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🌡️",
        english: "It's way too hot to be outside today.",
        vietnamese: "Hôm nay quá nóng để ở ngoài trời.",
        prompt: "It's way too ___ to be outside today.",
        choices: [
          { id: "a", text: "hot" },
          { id: "b", text: "heat" },
          { id: "c", text: "heating" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'too' cần dùng tính từ, nên 'hot' là đúng — câu này nghĩa là thời tiết quá nóng để ra ngoài.",
        wrongAnswerExplanations:
          "'Heat' là danh từ, không dùng được sau 'too' trong trường hợp này. 'Heating' là danh động từ, cũng không phù hợp ở vị trí này.",
        usageTip: "Dùng khi muốn nói thời tiết hôm nay quá nóng để đi ra ngoài.",
      },
      {
        id: "st-11-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧢",
        english: "You must be tired of this heat by now.",
        vietnamese: "Chắc bạn cũng chán cái nóng này rồi.",
        promptContext:
          "Đã nhiều tuần trời nóng liên tục, khách muốn hỏi thăm xem chị có mệt vì thời tiết này không.",
        choices: [
          { id: "a", text: "You must be tired of this heat by now." },
          { id: "b", text: "The appointment book is full today." },
          { id: "c", text: "We just got new nail tips in." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi thời tiết nóng kéo dài, khách có thể hỏi thăm nhẹ xem mình có cảm thấy mệt vì cái nóng đó không.",
        wrongAnswerExplanations:
          "'The appointment book is full today.' nói về việc lịch hẹn đầy, không liên quan đến chuyện thời tiết. 'We just got new nail tips in.' nói về hàng mới về, hoàn toàn lạc đề.",
        usageTip: "Dùng khi thời tiết nóng kéo dài nhiều ngày và muốn hỏi thăm về điều đó.",
      },
      {
        id: "st-11-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "Honestly, I stay inside as much as I can.",
        vietnamese: "Thật ra tôi ở trong nhà nhiều nhất có thể.",
        audioText: "Honestly, I stay inside as much as I can.",
        choices: [
          { id: "a", text: "Thật ra tôi ở trong nhà nhiều nhất có thể." },
          { id: "b", text: "Tôi thích đi bộ ngoài trời nắng." },
          { id: "c", text: "Tôi chưa từng thấy trời nóng như vậy." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói rằng mình cố gắng ở trong nhà nhiều nhất có thể để tránh nóng — một câu trả lời rất tự nhiên khi nói về mùa hè.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa khác hoặc không đúng với ý nghĩa của câu nghe.",
        usageTip: "Dùng khi trò chuyện về cách mình đối phó với thời tiết nóng.",
      },
      {
        id: "st-11-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🍦",
        english: "That sounds like the perfect summer treat.",
        vietnamese: "Nghe có vẻ là món giải nhiệt mùa hè hoàn hảo.",
        prompt: "I always get ice cream when it's this hot.",
        promptVietnamese: "Lúc nóng thế này tôi luôn mua kem ăn.",
        choices: [
          { id: "a", text: "That sounds like the perfect summer treat." },
          { id: "b", text: "We don't sell nail polish here." },
          { id: "c", text: "Your appointment starts in ten minutes." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách kể về việc ăn kem giải nhiệt, mình đáp lại vui vẻ để tiếp tục cuộc trò chuyện nhẹ nhàng.",
        wrongAnswerExplanations:
          "'We don't sell nail polish here.' hoàn toàn không liên quan đến việc khách nói về kem. 'Your appointment starts in ten minutes.' nói về giờ hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi khách chia sẻ về cách họ giải nhiệt vào mùa hè.",
      },
      {
        id: "st-11-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌞",
        english: "I can't wait for it to cool down a little.",
        vietnamese: "Tôi mong trời dịu lại một chút.",
        promptContext: "Chloe muốn nói rằng mình mong thời tiết sẽ mát hơn một chút sau những ngày quá nóng.",
        choices: [
          { id: "a", text: "I can't wait for it to cool down a little." },
          { id: "b", text: "I can't wait for it cool down a little." },
          { id: "c", text: "I can't wait it to cooling down a little." },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc 'can't wait for it to + động từ' là đúng ngữ pháp, nghĩa là mong chờ điều gì xảy ra.",
        wrongAnswerExplanations:
          "'I can't wait for it cool down a little.' thiếu chữ 'to' trước động từ. 'I can't wait it to cooling down a little.' sai vì thiếu chữ 'for' và dùng sai dạng động từ.",
        usageTip: "Dùng khi mong chờ thời tiết bớt nóng hơn sau một thời gian dài nắng nóng.",
      },
      {
        id: "st-11-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌬️",
        english: "This heat is no joke this summer.",
        vietnamese: "Cái nóng mùa hè này thật không đùa được.",
        promptContext: "Chloe muốn nói về cái nóng mùa hè năm nay theo cách tự nhiên nhất.",
        choices: [
          { id: "a", text: "This heat is no joke this summer." },
          { id: "b", text: "This heat is no jokes this summer." },
          { id: "c", text: "This heat no joke is this summer." },
        ],
        correctAnswer: "a",
        explanation:
          "'No joke' là cụm cố định nghĩa là 'không đùa được, thật sự nghiêm trọng' — luôn dùng dạng số ít 'joke'.",
        wrongAnswerExplanations:
          "'This heat is no jokes this summer.' sai vì thêm 's' vào 'joke' trong cụm cố định này. 'This heat no joke is this summer.' sai hoàn toàn về thứ tự từ trong câu.",
        usageTip: "Dùng khi muốn nhấn mạnh rằng thời tiết mùa hè năm nay đặc biệt nóng.",
      },
    ],
  },
{
    id: "st-12",
    slug: "st-12-thoi-tiet-2",
    topicId: "nails-small-talk",
    title: "Nói về trời mưa",
    description: "Cách trò chuyện nhẹ nhàng khi trời đang mưa hoặc sắp mưa.",
    level: "beginner",
    questions: [
      {
        id: "st-12-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🌧️",
        english: "It's supposed to rain all afternoon.",
        vietnamese: "Nghe nói sẽ mưa cả buổi chiều.",
        prompt: "Do you know if it's going to rain later?",
        promptVietnamese: "Bạn có biết chút nữa có mưa không?",
        choices: [
          { id: "a", text: "It's supposed to rain all afternoon." },
          { id: "b", text: "It's twenty dollars for a manicure." },
          { id: "c", text: "We're open until nine tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về khả năng mưa, mình chia sẻ thông tin mình biết bằng câu ngắn gọn và tự nhiên.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về thời tiết. 'We're open until nine tonight.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi về khả năng mưa trong ngày.",
      },
      {
        id: "st-12-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "☔",
        english: "Did you get caught in the rain earlier?",
        vietnamese: "Nãy bạn có bị dính mưa không?",
        promptContext:
          "Khách bước vào tiệm với áo còn hơi ướt, chị muốn hỏi thăm xem khách có bị mưa ướt trên đường đến không.",
        choices: [
          { id: "a", text: "Did you get caught in the rain earlier?" },
          { id: "b", text: "Your nails need one more coat." },
          { id: "c", text: "We are fully booked this weekend." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi thấy khách có vẻ vừa bị mưa ướt, mình hỏi thăm nhẹ để thể hiện sự quan tâm.",
        wrongAnswerExplanations:
          "'Your nails need one more coat.' nói về việc cần sơn thêm lớp, không liên quan đến việc bị mưa. 'We are fully booked this weekend.' nói về lịch hẹn cuối tuần, hoàn toàn lạc đề.",
        usageTip: "Dùng khi thấy khách có vẻ vừa bị mưa ướt trên đường đến tiệm.",
      },
      {
        id: "st-12-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🌦️",
        english: "I love the smell of rain, honestly.",
        vietnamese: "Thật ra tôi thích mùi mưa lắm.",
        choices: [
          { id: "a", text: "Thật ra tôi thích mùi mưa lắm." },
          { id: "b", text: "Tôi ghét trời mưa nhất." },
          { id: "c", text: "Tôi không thích ra ngoài khi mưa." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ một sở thích nhỏ, đó là thích mùi của mưa — một cách trò chuyện nhẹ nhàng, dễ thương về thời tiết.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi muốn chia sẻ một cảm nhận tích cực nhỏ về trời mưa.",
      },
      {
        id: "st-12-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🌂",
        english: "Good thing I brought my umbrella today.",
        vietnamese: "May mà hôm nay tôi mang dù theo.",
        prompt: "Look, it's starting to rain outside!",
        promptVietnamese: "Nhìn kìa, ngoài trời bắt đầu mưa rồi!",
        choices: [
          { id: "a", text: "Good thing I brought my umbrella today." },
          { id: "b", text: "We take walk-ins every day." },
          { id: "c", text: "This gel color dries fast." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách chỉ ra trời đang mưa, mình có thể đáp lại bằng một câu nhẹ liên quan đến việc chuẩn bị dù, giữ cuộc trò chuyện tự nhiên.",
        wrongAnswerExplanations:
          "'We take walk-ins every day.' nói về việc nhận khách không hẹn, không liên quan đến chuyện trời mưa. 'This gel color dries fast.' nói về sơn gel khô nhanh, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách chỉ ra rằng trời đang bắt đầu mưa.",
      },
      {
        id: "st-12-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "💧",
        english: "I forgot my umbrella at home today.",
        vietnamese: "Hôm nay tôi quên mang dù ở nhà.",
        prompt: "I forgot my umbrella at ___ today.",
        choices: [
          { id: "a", text: "home" },
          { id: "b", text: "house" },
          { id: "c", text: "there" },
        ],
        correctAnswer: "a",
        explanation:
          "'At home' là cụm từ cố định nghĩa là 'ở nhà' — dùng 'home' là đúng và tự nhiên nhất trong câu này.",
        wrongAnswerExplanations:
          "'At house' không phải cách nói tự nhiên trong tiếng Anh. 'At there' cũng không đúng ngữ pháp trong trường hợp này.",
        usageTip: "Dùng khi chia sẻ với khách rằng mình quên mang dù trước khi trời mưa.",
      },
      {
        id: "st-12-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🌈",
        english: "At least the rain will cool things down.",
        vietnamese: "Ít ra mưa sẽ làm trời mát hơn.",
        promptContext:
          "Sau nhiều ngày nóng liên tục, trời bắt đầu mưa, khách muốn nói một câu tích cực về việc này.",
        choices: [
          { id: "a", text: "At least the rain will cool things down." },
          { id: "b", text: "Your total is fifty dollars today." },
          { id: "c", text: "We need to reschedule your visit." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau những ngày nóng, mưa xuống có thể được xem là điều tích cực vì làm dịu thời tiết — khách nói câu này để nhìn vào mặt tốt.",
        wrongAnswerExplanations:
          "'Your total is fifty dollars today.' nói về giá tiền, không liên quan đến chuyện thời tiết. 'We need to reschedule your visit.' nói về việc đổi hẹn, hoàn toàn lạc đề.",
        usageTip: "Dùng khi trời mưa sau một thời gian dài nắng nóng và muốn nhìn vào mặt tích cực.",
      },
      {
        id: "st-12-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "I actually like rainy days like this.",
        vietnamese: "Thật ra tôi thích những ngày mưa như thế này.",
        audioText: "I actually like rainy days like this.",
        choices: [
          { id: "a", text: "Thật ra tôi thích những ngày mưa như thế này." },
          { id: "b", text: "Tôi ghét những ngày mưa lạnh." },
          { id: "c", text: "Hôm nay tôi không muốn đi làm." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng mình thích những ngày mưa như hôm nay — một cách trò chuyện tích cực về thời tiết.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa khác hoặc không đúng với ý nghĩa của câu nghe.",
        usageTip: "Dùng khi trời mưa và muốn chia sẻ cảm nhận tích cực với khách.",
      },
      {
        id: "st-12-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🚗",
        english: "Traffic must be crazy in this rain.",
        vietnamese: "Kẹt xe chắc kinh khủng lắm trong lúc mưa này.",
        prompt: "It took me forever to get here because of the rain.",
        promptVietnamese: "Tôi phải mất rất lâu mới đến được đây vì mưa.",
        choices: [
          { id: "a", text: "Traffic must be crazy in this rain." },
          { id: "b", text: "We are open seven days a week." },
          { id: "c", text: "Your color choice looks great." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nói mất nhiều thời gian đến tiệm vì mưa, mình đồng cảm bằng cách nhắc đến việc kẹt xe do mưa.",
        wrongAnswerExplanations:
          "'We are open seven days a week.' nói về giờ mở cửa, không liên quan đến câu chuyện về kẹt xe. 'Your color choice looks great.' là lời khen về màu sơn, chưa hợp lúc này.",
        usageTip: "Dùng khi khách phàn nàn về việc mất nhiều thời gian đến tiệm vì mưa.",
      },
      {
        id: "st-12-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌦️",
        english: "I hope the rain stops before you leave.",
        vietnamese: "Tôi hy vọng mưa sẽ tạnh trước khi bạn về.",
        promptContext: "Chloe muốn chúc khách trời sẽ tạnh mưa trước khi khách rời khỏi tiệm.",
        choices: [
          { id: "a", text: "I hope the rain stops before you leave." },
          { id: "b", text: "I hope the rain stop before you leave." },
          { id: "c", text: "I hope the rain stops before leave you." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'the rain' là số ít nên động từ phải chia là 'stops' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'I hope the rain stop before you leave.' sai vì thiếu 's' ở động từ 'stops' khi chủ ngữ số ít. 'I hope the rain stops before leave you.' sai về thứ tự từ ở cuối câu.",
        usageTip: "Dùng khi muốn chúc khách trời sẽ tạnh mưa trước khi họ ra về.",
      },
      {
        id: "st-12-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "☁️",
        english: "We could really use some rain lately.",
        vietnamese: "Gần đây thật sự cần có mưa một chút.",
        promptContext: "Chloe muốn nói rằng thời gian gần đây khô hạn quá và cần có mưa.",
        choices: [
          { id: "a", text: "We could really use some rain lately." },
          { id: "b", text: "We could really use some rains lately." },
          { id: "c", text: "We could really uses some rain lately." },
        ],
        correctAnswer: "a",
        explanation:
          "'Rain' khi nói về mưa nói chung là danh từ không đếm được, không thêm 's' — câu đúng là 'some rain'.",
        wrongAnswerExplanations:
          "'We could really use some rains lately.' sai vì 'rain' không đếm được nên không thêm 's'. 'We could really uses some rain lately.' sai vì sau 'could' không được thêm 's' vào động từ.",
        usageTip: "Dùng khi thời gian gần đây khô hạn và muốn trò chuyện nhẹ về việc mong mưa.",
      },
    ],
  },
{
    id: "st-13",
    slug: "st-13-thoi-tiet-3",
    topicId: "nails-small-talk",
    title: "Nói về trời lạnh",
    description: "Cách trò chuyện nhẹ nhàng khi thời tiết chuyển lạnh.",
    level: "beginner",
    questions: [
      {
        id: "st-13-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🧥",
        english: "It really did! I had to grab my jacket.",
        vietnamese: "Đúng vậy đó! Tôi phải lấy áo khoác ra mặc.",
        prompt: "It got cold really fast this week, didn't it?",
        promptVietnamese: "Tuần này trời lạnh nhanh quá, đúng không?",
        choices: [
          { id: "a", text: "It really did! I had to grab my jacket." },
          { id: "b", text: "It's twenty dollars for that design." },
          { id: "c", text: "We're open until six today." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nhận xét trời lạnh nhanh, mình đồng ý và chia sẻ thêm chi tiết nhỏ như việc phải mặc thêm áo.",
        wrongAnswerExplanations:
          "'It's twenty dollars for that design.' nói về giá dịch vụ, không liên quan đến câu hỏi về thời tiết. 'We're open until six today.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách nhận xét trời chuyển lạnh nhanh trong vài ngày gần đây.",
      },
      {
        id: "st-13-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🥶",
        english: "Aren't you cold with the door open?",
        vietnamese: "Cửa mở vậy bạn không lạnh sao?",
        promptContext:
          "Trời đang lạnh và cửa tiệm đang mở, khách muốn hỏi thăm xem chị có bị lạnh không.",
        choices: [
          { id: "a", text: "Aren't you cold with the door open?" },
          { id: "b", text: "Your nails are ready to dry now." },
          { id: "c", text: "We take both cash and card." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi cửa tiệm mở lúc trời lạnh, khách có thể hỏi thăm xem chị có cảm thấy lạnh không, một câu hỏi thể hiện sự quan tâm.",
        wrongAnswerExplanations:
          "'Your nails are ready to dry now.' nói về việc móng sẵn sàng để khô, không liên quan đến câu hỏi về lạnh. 'We take both cash and card.' nói về thanh toán, hoàn toàn lạc đề.",
        usageTip: "Dùng khi trời lạnh và cửa tiệm đang mở, khách hỏi thăm sự thoải mái của thợ.",
      },
      {
        id: "st-13-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🧣",
        english: "I need to wear more layers this week.",
        vietnamese: "Tuần này tôi phải mặc nhiều lớp áo hơn.",
        choices: [
          { id: "a", text: "Tuần này tôi phải mặc nhiều lớp áo hơn." },
          { id: "b", text: "Tuần này tôi không cần mặc áo khoác." },
          { id: "c", text: "Tuần này trời sẽ rất nóng." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói về việc cần mặc thêm nhiều lớp áo vì trời lạnh — một cách nói rất tự nhiên khi trời chuyển lạnh.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc nói về trời nóng — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ với khách về việc cần mặc thêm áo khi trời lạnh.",
      },
      {
        id: "st-13-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🧤",
        english: "Yes, my hands get cold so easily.",
        vietnamese: "Vâng, tay tôi lạnh rất dễ.",
        prompt: "Do your hands get cold in this weather?",
        promptVietnamese: "Thời tiết này tay bạn có bị lạnh không?",
        choices: [
          { id: "a", text: "Yes, my hands get cold so easily." },
          { id: "b", text: "We only take cash on Fridays." },
          { id: "c", text: "This color needs two coats." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về tay lạnh trong thời tiết lạnh, mình trả lời thật, một câu chuyện nhẹ nhàng về sức khỏe cá nhân.",
        wrongAnswerExplanations:
          "'We only take cash on Fridays.' nói về hình thức thanh toán, hoàn toàn không liên quan. 'This color needs two coats.' nói về việc sơn hai lớp, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi khách hỏi thăm liệu tay mình có bị lạnh vào thời tiết lạnh không.",
      },
      {
        id: "st-13-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🧦",
        english: "I always wear warm socks in the winter.",
        vietnamese: "Tôi luôn mang vớ ấm vào mùa đông.",
        prompt: "I always wear warm socks in the ___.",
        choices: [
          { id: "a", text: "winter" },
          { id: "b", text: "summer" },
          { id: "c", text: "weather" },
        ],
        correctAnswer: "a",
        explanation:
          "'Winter' là mùa đông, phù hợp với việc mang vớ ấm — đây là đáp án đúng theo nghĩa của câu.",
        wrongAnswerExplanations:
          "'Summer' là mùa hè, không hợp với việc cần mang vớ ấm. 'Weather' là danh từ chung về thời tiết, không thể thay cho một mùa cụ thể trong câu này.",
        usageTip: "Dùng khi chia sẻ về thói quen giữ ấm của mình vào mùa đông.",
      },
      {
        id: "st-13-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "☕",
        english: "This weather makes me want hot tea all day.",
        vietnamese: "Thời tiết này làm tôi muốn uống trà nóng cả ngày.",
        promptContext:
          "Trời đang rất lạnh, khách muốn chia sẻ rằng thời tiết này làm khách chỉ muốn uống đồ nóng cả ngày.",
        choices: [
          { id: "a", text: "This weather makes me want hot tea all day." },
          { id: "b", text: "Your appointment is at four today." },
          { id: "c", text: "We are low on gel polish colors." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi trời lạnh, khách có thể chia sẻ rằng mình chỉ muốn uống đồ nóng cả ngày, một cách trò chuyện rất tự nhiên về thời tiết.",
        wrongAnswerExplanations:
          "'Your appointment is at four today.' nói về giờ hẹn, không liên quan đến chuyện thời tiết lạnh. 'We are low on gel polish colors.' nói về việc thiếu màu sơn, hoàn toàn lạc đề.",
        usageTip: "Dùng khi trời lạnh và muốn chia sẻ sở thích uống đồ nóng trong ngày lạnh.",
      },
      {
        id: "st-13-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "I turned the heater on for you already.",
        vietnamese: "Tôi mở máy sưởi cho bạn rồi đó.",
        audioText: "I turned the heater on for you already.",
        choices: [
          { id: "a", text: "Tôi mở máy sưởi cho bạn rồi đó." },
          { id: "b", text: "Tôi tắt máy sưởi vì trời đang nóng." },
          { id: "c", text: "Máy sưởi ở đây đang bị hỏng." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói rằng mình đã mở máy sưởi cho khách rồi, một hành động nhỏ thể hiện sự quan tâm khi trời lạnh.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoặc không đúng với nội dung câu nghe.",
        usageTip: "Dùng khi trời lạnh và mình đã chủ động mở máy sưởi cho khách trước khi khách yêu cầu.",
      },
      {
        id: "st-13-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🙏",
        english: "Thank you, that's so thoughtful of you.",
        vietnamese: "Cảm ơn bạn, bạn thật chu đáo.",
        prompt: "I turned the heater on for you already.",
        promptVietnamese: "Tôi mở máy sưởi cho bạn rồi đó.",
        choices: [
          { id: "a", text: "Thank you, that's so thoughtful of you." },
          { id: "b", text: "We close early on Sundays." },
          { id: "c", text: "Your total is twenty-five dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi thợ chủ động mở máy sưởi vì thấy khách lạnh, khách cảm ơn lại thể hiện sự trân trọng sự chu đáo đó.",
        wrongAnswerExplanations:
          "'We close early on Sundays.' nói về giờ đóng cửa, hoàn toàn không liên quan. 'Your total is twenty-five dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi ai đó làm một việc nhỏ chu đáo cho mình, ví dụ mở máy sưởi.",
      },
      {
        id: "st-13-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🔥",
        english: "Let me know if you're still cold.",
        vietnamese: "Cho tôi biết nếu bạn còn thấy lạnh nha.",
        promptContext: "Chloe muốn hỏi thăm xem khách còn cảm thấy lạnh sau khi đã mở máy sưởi chưa.",
        choices: [
          { id: "a", text: "Let me know if you're still cold." },
          { id: "b", text: "Let me knowing if you're still cold." },
          { id: "c", text: "Let know me if you're still cold." },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc 'Let me know if...' rất phổ biến nghĩa là 'cho tôi biết nếu...', và động từ sau 'let me' phải là nguyên mẫu 'know'.",
        wrongAnswerExplanations:
          "'Let me knowing if you're still cold.' sai vì sau 'let me' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'. 'Let know me if you're still cold.' sai vì đặt sai thứ tự 'know' và 'me'.",
        usageTip: "Dùng khi muốn hỏi thăm khách xem họ còn cảm thấy lạnh không sau khi đã cố gắng làm ấm không gian.",
      },
      {
        id: "st-13-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌨️",
        english: "This is the coldest week we've had all year.",
        vietnamese: "Đây là tuần lạnh nhất trong năm nay.",
        promptContext: "Chloe muốn nói rằng tuần này là tuần lạnh nhất từ đầu năm đến giờ.",
        choices: [
          { id: "a", text: "This is the coldest week we've had all year." },
          { id: "b", text: "This is the more cold week we've had all year." },
          { id: "c", text: "This is coldest week we've had all year the." },
        ],
        correctAnswer: "a",
        explanation:
          "'Coldest' là dạng so sánh nhất của 'cold', dùng đúng khi muốn nói đây là tuần lạnh nhất trong năm.",
        wrongAnswerExplanations:
          "'This is the more cold week we've had all year.' sai vì 'cold' là tính từ ngắn nên so sánh nhất phải dùng '-est', không dùng 'more cold'. 'This is coldest week we've had all year the.' sai vì thiếu mạo từ 'the' đúng vị trí và đặt sai ở cuối câu.",
        usageTip: "Dùng khi muốn nhấn mạnh rằng thời tiết tuần này lạnh nhất so với cả năm.",
      },
    ],
  },
{
    id: "st-14",
    slug: "st-14-thoi-tiet-4",
    topicId: "nails-small-talk",
    title: "Nói về ngày nắng đẹp",
    description: "Cách trò chuyện nhẹ nhàng vào những ngày thời tiết đẹp, dễ chịu.",
    level: "beginner",
    questions: [
      {
        id: "st-14-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🌤️",
        english: "It really is! Perfect day to be outside.",
        vietnamese: "Đúng vậy đó! Ngày đẹp để ra ngoài.",
        prompt: "What a beautiful day today, right?",
        promptVietnamese: "Hôm nay trời đẹp quá, đúng không?",
        choices: [
          { id: "a", text: "It really is! Perfect day to be outside." },
          { id: "b", text: "It's ten dollars for a fill-in." },
          { id: "c", text: "We're closed on Tuesdays." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nhận xét trời đẹp, mình đồng ý và thêm câu ngắn để giữ cuộc trò chuyện tự nhiên và vui vẻ.",
        wrongAnswerExplanations:
          "'It's ten dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến nhận xét về thời tiết. 'We're closed on Tuesdays.' nói về ngày nghỉ, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách nhận xét thời tiết hôm nay rất đẹp.",
      },
      {
        id: "st-14-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🌸",
        english: "This is the kind of weather I love.",
        vietnamese: "Đây chính là kiểu thời tiết tôi thích.",
        promptContext:
          "Trời đang mát mẻ, có nắng nhẹ, khách muốn chia sẻ rằng đây là kiểu thời tiết mà khách rất thích.",
        choices: [
          { id: "a", text: "This is the kind of weather I love." },
          { id: "b", text: "Your nails are chipping already." },
          { id: "c", text: "We are almost out of top coat." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi thời tiết dễ chịu, khách có thể chia sẻ cảm nhận tích cực của mình về kiểu thời tiết đó.",
        wrongAnswerExplanations:
          "'Your nails are chipping already.' nói về việc móng bị tróc, không liên quan đến chuyện thời tiết. 'We are almost out of top coat.' nói về việc sắp hết sơn phủ, hoàn toàn lạc đề.",
        usageTip: "Dùng khi thời tiết đang mát mẻ, dễ chịu và muốn chia sẻ cảm nhận tích cực.",
      },
      {
        id: "st-14-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🌼",
        english: "Days like this make me want to be outside.",
        vietnamese: "Những ngày như thế này làm tôi muốn ra ngoài.",
        choices: [
          { id: "a", text: "Những ngày như thế này làm tôi muốn ra ngoài." },
          { id: "b", text: "Những ngày như thế này tôi chỉ muốn ở trong nhà." },
          { id: "c", text: "Những ngày như thế này tôi thấy rất mệt." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói rằng thời tiết đẹp làm mình muốn ra ngoài — một cảm nhận rất tự nhiên khi trời đẹp.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc không đúng với nội dung tích cực của câu tiếng Anh này.",
        usageTip: "Dùng khi thời tiết đẹp và muốn chia sẻ mong muốn được ra ngoài.",
      },
      {
        id: "st-14-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🌳",
        english: "I might go for a walk after this.",
        vietnamese: "Chắc tôi sẽ đi bộ một chút sau khi làm nails xong.",
        prompt: "The weather is so nice, I don't want to go home.",
        promptVietnamese: "Thời tiết đẹp quá, tôi không muốn về nhà luôn.",
        choices: [
          { id: "a", text: "I might go for a walk after this." },
          { id: "b", text: "We close the shop at seven." },
          { id: "c", text: "This polish needs to dry longer." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nói không muốn về nhà vì thời tiết đẹp, mình có thể chia sẻ kế hoạch nhỏ của mình, giữ cuộc trò chuyện tự nhiên.",
        wrongAnswerExplanations:
          "'We close the shop at seven.' nói về giờ đóng cửa, không liên quan đến chuyện thời tiết đẹp. 'This polish needs to dry longer.' nói về việc chờ khô sơn, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách chia sẻ cảm nhận thích thời tiết đẹp và không muốn về nhà ngay.",
      },
      {
        id: "st-14-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🌻",
        english: "I wish every day was as nice as today.",
        vietnamese: "Tôi mong mỗi ngày đều đẹp như hôm nay.",
        prompt: "I wish every day was as ___ as today.",
        choices: [
          { id: "a", text: "nice" },
          { id: "b", text: "nicely" },
          { id: "c", text: "niceness" },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc 'as + tính từ + as' cần dùng tính từ, nên 'nice' là đúng — câu này nghĩa là mong mỗi ngày đều đẹp như hôm nay.",
        wrongAnswerExplanations:
          "'Nicely' là trạng từ, không dùng được trong cấu trúc so sánh 'as...as' ở đây. 'Niceness' là danh từ, cũng không phù hợp với cấu trúc này.",
        usageTip: "Dùng khi muốn nói rằng mình mong thời tiết đẹp như hôm nay sẽ kéo dài mãi.",
      },
      {
        id: "st-14-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🚶‍♀️",
        english: "I walked here today since it's so nice out.",
        vietnamese: "Hôm nay tôi đi bộ đến đây vì trời đẹp quá.",
        promptContext:
          "Khách thường lái xe đến tiệm, nhưng hôm nay vì trời đẹp nên khách đã đi bộ, và muốn chia sẻ điều đó.",
        choices: [
          { id: "a", text: "I walked here today since it's so nice out." },
          { id: "b", text: "Your total comes to thirty dollars." },
          { id: "c", text: "We ran out of parking today." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi thời tiết đẹp, khách có thể chia sẻ rằng vì vậy mà họ chọn đi bộ đến tiệm thay vì lái xe.",
        wrongAnswerExplanations:
          "'Your total comes to thirty dollars.' nói về giá tiền, không liên quan đến chuyện đi bộ vì thời tiết đẹp. 'We ran out of parking today.' nói về việc hết chỗ đậu xe, hoàn toàn lạc đề.",
        usageTip: "Dùng khi thời tiết đẹp và khách muốn chia sẻ rằng họ đã đi bộ đến tiệm.",
      },
      {
        id: "st-14-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "That's such a nice way to start the day.",
        vietnamese: "Đó là cách tuyệt vời để bắt đầu một ngày.",
        audioText: "That's such a nice way to start the day.",
        choices: [
          { id: "a", text: "Đó là cách tuyệt vời để bắt đầu một ngày." },
          { id: "b", text: "Đó là cách tệ để bắt đầu một ngày." },
          { id: "c", text: "Tôi không thích đi bộ vào buổi sáng." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này khen ngợi việc khách chọn đi bộ vào buổi sáng đẹp trời, thể hiện sự đồng tình tích cực.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại, không đúng với ý nghĩa tích cực của câu nghe.",
        usageTip: "Dùng khi khách chia sẻ một hoạt động tích cực vào buổi sáng đẹp trời.",
      },
      {
        id: "st-14-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🌅",
        english: "Same here! I woke up feeling great.",
        vietnamese: "Tôi cũng vậy! Tôi thức dậy cảm thấy rất khỏe.",
        prompt: "I love mornings like this.",
        promptVietnamese: "Tôi thích những buổi sáng như thế này.",
        choices: [
          { id: "a", text: "Same here! I woke up feeling great." },
          { id: "b", text: "We are closed this morning." },
          { id: "c", text: "This design will take longer." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách chia sẻ thích buổi sáng như hôm nay, mình đồng tình và chia sẻ thêm cảm giác của mình.",
        wrongAnswerExplanations:
          "'We are closed this morning.' nói về việc tiệm đóng cửa sáng nay, không liên quan đến câu chuyện. 'This design will take longer.' nói về thời gian làm mẫu nail, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách chia sẻ cảm giác vui vẻ vào một buổi sáng đẹp trời.",
      },
      {
        id: "st-14-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌷",
        english: "I try to enjoy nice days like this.",
        vietnamese: "Tôi cố gắng tận hưởng những ngày đẹp như thế này.",
        promptContext: "Chloe muốn chia sẻ rằng mình cố gắng tận hưởng những ngày đẹp trời hiếm có.",
        choices: [
          { id: "a", text: "I try to enjoy nice days like this." },
          { id: "b", text: "I try enjoy nice days like this." },
          { id: "c", text: "I try to enjoying nice days like this." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'try to' phải dùng động từ nguyên mẫu, nên 'enjoy' là đúng — câu này nghĩa là cố gắng tận hưởng những ngày đẹp trời.",
        wrongAnswerExplanations:
          "'I try enjoy nice days like this.' thiếu chữ 'to' sau 'try'. 'I try to enjoying nice days like this.' sai vì sau 'to' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi chia sẻ với khách về việc cố gắng tận hưởng những ngày thời tiết đẹp.",
      },
      {
        id: "st-14-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌈",
        english: "We should get outside more on days like this.",
        vietnamese: "Những ngày như thế này mình nên ra ngoài nhiều hơn.",
        promptContext: "Chloe muốn nói rằng vào những ngày trời đẹp thế này, mọi người nên tranh thủ ra ngoài nhiều hơn.",
        choices: [
          { id: "a", text: "We should get outside more on days like this." },
          { id: "b", text: "We should got outside more on days like this." },
          { id: "c", text: "We should get outside more on this days like." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'should' luôn dùng động từ nguyên mẫu, nên 'get' là đúng — câu này nghĩa là nên tranh thủ ra ngoài nhiều hơn vào những ngày đẹp trời.",
        wrongAnswerExplanations:
          "'We should got outside more on days like this.' sai vì sau 'should' không dùng dạng quá khứ 'got'. 'We should get outside more on this days like.' sai hoàn toàn về thứ tự từ ở cuối câu.",
        usageTip: "Dùng khi trò chuyện về việc nên tranh thủ ra ngoài vào những ngày thời tiết đẹp hiếm có.",
      },
    ],
  },
];
