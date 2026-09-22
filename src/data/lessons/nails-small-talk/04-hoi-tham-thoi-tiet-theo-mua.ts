import { Lesson } from "@/types/content";

/** nails-small-talk — migrated group 4 (lessons 16-20 of existing content). */
export const nailsSmallTalkGroup04: Lesson[] = [
{
    id: "st-15",
    slug: "st-15-thoi-tiet-5",
    topicId: "nails-small-talk",
    title: "Hỏi thăm thời tiết theo mùa",
    description: "Cách trò chuyện về sự thay đổi thời tiết theo từng mùa trong năm.",
    level: "beginner",
    coverImage: "/images/lessons/st-15-thoi-tiet-5.jpg",
    questions: [
      {
        id: "st-15-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🍂",
        english: "Fall is my favorite season, honestly.",
        vietnamese: "Thật ra mùa thu là mùa tôi thích nhất.",
        prompt: "What's your favorite season?",
        promptVietnamese: "Mùa bạn thích nhất là mùa gì?",
        choices: [
          { id: "a", text: "Fall is my favorite season, honestly." },
          { id: "b", text: "It's twenty dollars for a pedicure." },
          { id: "c", text: "We open at nine every morning." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về mùa yêu thích, mình chia sẻ thật và ngắn gọn, đây là câu hỏi small talk rất phổ biến.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a pedicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về mùa yêu thích. 'We open at nine every morning.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi về mùa mà mình thích nhất trong năm.",
      },
      {
        id: "st-15-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🍁",
        english: "Can you believe it's almost fall already?",
        vietnamese: "Bạn có tin được là gần đến mùa thu rồi không?",
        promptContext:
          "Trời đang bắt đầu se lạnh và lá cây chuyển màu, khách muốn nói về việc thời gian trôi nhanh và mùa thu đang đến.",
        choices: [
          { id: "a", text: "Can you believe it's almost fall already?" },
          { id: "b", text: "Your nails look great this time." },
          { id: "c", text: "We just got new colors in stock." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi mùa đang thay đổi, khách có thể nhận xét về việc thời gian trôi nhanh, một câu small talk rất tự nhiên.",
        wrongAnswerExplanations:
          "'Your nails look great this time.' là lời khen về móng, không liên quan đến việc thay đổi mùa. 'We just got new colors in stock.' nói về màu sơn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi thời tiết đang chuyển mùa và muốn nhận xét về việc thời gian trôi nhanh.",
      },
      {
        id: "st-15-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🌷",
        english: "Spring is when I feel the most energetic.",
        vietnamese: "Mùa xuân là lúc tôi cảm thấy tràn đầy năng lượng nhất.",
        choices: [
          { id: "a", text: "Mùa xuân là lúc tôi cảm thấy tràn đầy năng lượng nhất." },
          { id: "b", text: "Mùa đông là lúc tôi cảm thấy buồn nhất." },
          { id: "c", text: "Mùa hè là lúc tôi thấy mệt nhất." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ cảm nhận tích cực về mùa xuân, một cách nói tự nhiên về cảm giác theo từng mùa.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về mùa khác và cảm giác tiêu cực — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ cảm nhận của mình về một mùa cụ thể trong năm.",
      },
      {
        id: "st-15-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎃",
        english: "Me too! I love the cool air in fall.",
        vietnamese: "Tôi cũng vậy! Tôi thích không khí mát mẻ của mùa thu.",
        prompt: "I always look forward to autumn.",
        promptVietnamese: "Tôi luôn mong đến mùa thu.",
        choices: [
          { id: "a", text: "Me too! I love the cool air in fall." },
          { id: "b", text: "We are booked through next week." },
          { id: "c", text: "This color is available in stock." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nói mong chờ mùa thu, mình có thể đồng tình và chia sẻ thêm lý do vì sao mình thích mùa đó.",
        wrongAnswerExplanations:
          "'We are booked through next week.' nói về lịch hẹn, không liên quan đến chuyện mùa thu. 'This color is available in stock.' nói về việc còn hàng màu sơn, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách chia sẻ về việc mong chờ một mùa cụ thể trong năm.",
      },
      {
        id: "st-15-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🌦️",
        english: "The weather changes so fast this time of year.",
        vietnamese: "Thời tiết thay đổi nhanh vào thời điểm này trong năm.",
        prompt: "The weather changes so fast this ___ of year.",
        choices: [
          { id: "a", text: "time" },
          { id: "b", text: "times" },
          { id: "c", text: "timing" },
        ],
        correctAnswer: "a",
        explanation:
          "'This time of year' là cụm cố định nghĩa là 'vào thời điểm này trong năm' — dùng 'time' số ít là đúng.",
        wrongAnswerExplanations:
          "'Times' số nhiều không phù hợp trong cụm cố định này. 'Timing' mang nghĩa khác, không dùng được ở đây.",
        usageTip: "Dùng khi nhận xét về việc thời tiết thay đổi nhanh vào thời điểm chuyển mùa.",
      },
      {
        id: "st-15-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧥",
        english: "I never know what to wear these days.",
        vietnamese: "Những ngày này tôi không biết nên mặc gì nữa.",
        promptContext:
          "Thời tiết đang thay đổi liên tục giữa nóng và lạnh trong ngày, khách muốn phàn nàn nhẹ về việc không biết nên mặc gì.",
        choices: [
          { id: "a", text: "I never know what to wear these days." },
          { id: "b", text: "Your total is thirty-five dollars." },
          { id: "c", text: "We changed our business hours." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi thời tiết thay đổi liên tục, khách có thể phàn nàn nhẹ nhàng về việc khó chọn quần áo phù hợp, một câu small talk rất đời thường.",
        wrongAnswerExplanations:
          "'Your total is thirty-five dollars.' nói về giá tiền, không liên quan đến chuyện thời tiết. 'We changed our business hours.' nói về giờ làm việc, hoàn toàn lạc đề.",
        usageTip: "Dùng khi thời tiết thay đổi liên tục trong ngày, gây khó khăn khi chọn trang phục.",
      },
      {
        id: "st-15-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "I always keep a jacket in my car just in case.",
        vietnamese: "Tôi luôn để một cái áo khoác trong xe để dự phòng.",
        audioText: "I always keep a jacket in my car just in case.",
        choices: [
          { id: "a", text: "Tôi luôn để một cái áo khoác trong xe để dự phòng." },
          { id: "b", text: "Tôi không bao giờ mang áo khoác theo." },
          { id: "c", text: "Xe tôi bị hỏng máy sưởi rồi." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ một thói quen nhỏ, luôn để áo khoác trong xe để phòng khi thời tiết thay đổi bất ngờ.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoặc không liên quan đến ý nghĩa của câu nghe.",
        usageTip: "Dùng khi chia sẻ thói quen chuẩn bị trước cho thời tiết thay đổi bất ngờ.",
      },
      {
        id: "st-15-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👍",
        english: "That's smart! I should start doing that too.",
        vietnamese: "Thông minh đấy! Tôi cũng nên làm vậy.",
        prompt: "I always keep a jacket in my car just in case.",
        promptVietnamese: "Tôi luôn để một cái áo khoác trong xe để dự phòng.",
        choices: [
          { id: "a", text: "That's smart! I should start doing that too." },
          { id: "b", text: "We ran out of hand cream today." },
          { id: "c", text: "Your nail shape looks perfect." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe một thói quen hữu ích, khách có thể khen và nói rằng mình cũng nên bắt đầu làm giống vậy.",
        wrongAnswerExplanations:
          "'We ran out of hand cream today.' nói về việc hết kem tay, hoàn toàn không liên quan. 'Your nail shape looks perfect.' là lời khen về hình dáng móng, chưa hợp lúc này.",
        usageTip: "Dùng khi nghe ai đó chia sẻ một thói quen hay và muốn khen ngợi ý tưởng đó.",
      },
      {
        id: "st-15-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🍃",
        english: "Each season has something nice about it.",
        vietnamese: "Mỗi mùa đều có điều gì đó hay riêng.",
        promptContext: "Chloe muốn chia sẻ quan điểm rằng mùa nào trong năm cũng có nét đẹp riêng của nó.",
        choices: [
          { id: "a", text: "Each season has something nice about it." },
          { id: "b", text: "Each season have something nice about it." },
          { id: "c", text: "Each seasons has something nice about it." },
        ],
        correctAnswer: "a",
        explanation:
          "'Each' luôn đi với danh từ số ít và động từ số ít, nên 'season has' là đúng ngữ pháp.",
        wrongAnswerExplanations:
          "'Each season have something nice about it.' sai vì chủ ngữ số ít phải đi với 'has', không dùng 'have'. 'Each seasons has something nice about it.' sai vì 'each' luôn đi với danh từ số ít 'season', không phải 'seasons'.",
        usageTip: "Dùng khi muốn chia sẻ quan điểm tích cực rằng mỗi mùa đều có nét đẹp riêng.",
      },
      {
        id: "st-15-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌦️",
        english: "You never really know what the weather will do here.",
        vietnamese: "Ở đây bạn không bao giờ biết chắc thời tiết sẽ ra sao.",
        promptContext: "Chloe muốn nói rằng thời tiết ở khu vực này rất khó đoán trước.",
        choices: [
          { id: "a", text: "You never really know what the weather will do here." },
          { id: "b", text: "You never really know what weather will the do here." },
          { id: "c", text: "You never really knowing what the weather will do here." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng giữ nguyên thứ tự chủ ngữ - động từ 'the weather will do' trong mệnh đề danh từ sau 'know what'.",
        wrongAnswerExplanations:
          "'You never really know what weather will the do here.' sai vì đặt 'the' lạc chỗ, làm sai trật tự câu. 'You never really knowing what the weather will do here.' sai vì dùng 'knowing' thay cho 'know' sau chủ ngữ 'you'.",
        usageTip: "Dùng khi muốn nói rằng thời tiết ở nơi mình sống rất khó đoán trước được.",
      },
    ],
  },
{
    id: "st-16",
    slug: "st-16-cuoi-tuan-1",
    topicId: "nails-small-talk",
    title: "Hỏi khách về kế hoạch cuối tuần",
    description: "Cách hỏi khách xem họ có kế hoạch gì cho cuối tuần này không.",
    level: "practice",
    coverImage: "/images/lessons/st-16-cuoi-tuan-1.jpg",
    questions: [
      {
        id: "st-16-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎉",
        english: "Nothing big, just relaxing at home.",
        vietnamese: "Không có gì to tát, chỉ nghỉ ngơi ở nhà thôi.",
        prompt: "Any plans this weekend?",
        promptVietnamese: "Cuối tuần này bạn có kế hoạch gì không?",
        choices: [
          { id: "a", text: "Nothing big, just relaxing at home." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We are open on Saturdays too." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về kế hoạch cuối tuần, mình trả lời đơn giản và thật, đây là câu hỏi small talk rất phổ biến.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về kế hoạch cuối tuần. 'We are open on Saturdays too.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi thăm kế hoạch cuối tuần của mình.",
      },
      {
        id: "st-16-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🎊",
        english: "Do you have anything fun planned this weekend?",
        vietnamese: "Cuối tuần này bạn có định làm gì vui không?",
        promptContext:
          "Khách muốn trò chuyện nhẹ và hỏi thăm xem chị có kế hoạch gì thú vị cho cuối tuần sắp tới.",
        choices: [
          { id: "a", text: "Do you have anything fun planned this weekend?" },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách hỏi thăm về kế hoạch cuối tuần bằng một câu hỏi thân thiện và tự nhiên, thường dùng để bắt chuyện.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến câu hỏi về cuối tuần. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thăm ai đó về kế hoạch vui vẻ cho cuối tuần.",
      },
      {
        id: "st-16-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🛍️",
        english: "I might go shopping this weekend.",
        vietnamese: "Cuối tuần này chắc tôi sẽ đi mua sắm.",
        choices: [
          { id: "a", text: "Cuối tuần này chắc tôi sẽ đi mua sắm." },
          { id: "b", text: "Cuối tuần này tôi phải đi làm." },
          { id: "c", text: "Cuối tuần này tôi sẽ ở nhà dọn dẹp." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ kế hoạch nhỏ cho cuối tuần, đó là đi mua sắm — một cách trò chuyện tự nhiên về cuối tuần.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc đi làm hoặc dọn dẹp — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ với khách về kế hoạch cuối tuần của mình.",
      },
      {
        id: "st-16-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎬",
        english: "That sounds like a great way to relax.",
        vietnamese: "Nghe có vẻ là cách hay để thư giãn.",
        prompt: "I'm planning to watch movies all weekend.",
        promptVietnamese: "Tôi định xem phim cả cuối tuần.",
        choices: [
          { id: "a", text: "That sounds like a great way to relax." },
          { id: "b", text: "We take walk-ins on Saturdays." },
          { id: "c", text: "This design takes extra time." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách chia sẻ kế hoạch xem phim cả cuối tuần, mình đáp lại thể hiện sự đồng tình rằng đó là cách thư giãn tốt.",
        wrongAnswerExplanations:
          "'We take walk-ins on Saturdays.' nói về việc nhận khách không hẹn, không liên quan đến kế hoạch của khách. 'This design takes extra time.' nói về thời gian làm mẫu nail, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách chia sẻ kế hoạch thư giãn đơn giản cho cuối tuần.",
      },
      {
        id: "st-16-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "📅",
        english: "I don't have any plans this weekend yet.",
        vietnamese: "Cuối tuần này tôi chưa có kế hoạch gì.",
        prompt: "I don't have any ___ this weekend yet.",
        choices: [
          { id: "a", text: "plans" },
          { id: "b", text: "plan" },
          { id: "c", text: "planning" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'any' khi nói về kế hoạch thường dùng số nhiều 'plans' — đây là cách nói tự nhiên và phổ biến nhất.",
        wrongAnswerExplanations:
          "'Plan' số ít nghe không tự nhiên trong câu này. 'Planning' là danh động từ, không phù hợp với cấu trúc 'any + danh từ' ở đây.",
        usageTip: "Dùng khi được hỏi về kế hoạch cuối tuần mà thật ra chưa có kế hoạch gì cụ thể.",
      },
      {
        id: "st-16-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🏖️",
        english: "We're heading to the beach this weekend.",
        vietnamese: "Cuối tuần này gia đình tôi sẽ đi biển.",
        promptContext:
          "Chị hỏi khách có kế hoạch gì cho cuối tuần, và khách muốn chia sẻ rằng gia đình sẽ đi biển.",
        choices: [
          { id: "a", text: "We're heading to the beach this weekend." },
          { id: "b", text: "The nail dryer needs to be fixed." },
          { id: "c", text: "We are closing early this Saturday." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi về kế hoạch cuối tuần, khách chia sẻ rằng gia đình sẽ đi biển, một câu trả lời cụ thể và vui vẻ.",
        wrongAnswerExplanations:
          "'The nail dryer needs to be fixed.' nói về máy sấy móng cần sửa, hoàn toàn không liên quan. 'We are closing early this Saturday.' nói về giờ đóng cửa của tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ kế hoạch đi chơi cụ thể cho cuối tuần.",
      },
      {
        id: "st-16-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "That sounds like so much fun, I'm jealous.",
        vietnamese: "Nghe vui quá, tôi ganh tị luôn đó.",
        audioText: "That sounds like so much fun, I'm jealous.",
        choices: [
          { id: "a", text: "Nghe vui quá, tôi ganh tị luôn đó." },
          { id: "b", text: "Nghe có vẻ mệt quá, tôi không muốn đi." },
          { id: "c", text: "Tôi cũng có kế hoạch giống bạn." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện sự vui vẻ, hơi đùa khi nói 'ganh tị' vì kế hoạch cuối tuần của khách nghe rất hấp dẫn.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa khác, không đúng với cảm xúc vui vẻ, hào hứng trong câu nghe.",
        usageTip: "Dùng khi khách chia sẻ một kế hoạch cuối tuần nghe rất thú vị.",
      },
      {
        id: "st-16-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎣",
        english: "You should come along sometime!",
        vietnamese: "Lần sau bạn nên đi cùng luôn!",
        prompt: "That sounds like so much fun, I'm jealous.",
        promptVietnamese: "Nghe vui quá, tôi ganh tị luôn đó.",
        choices: [
          { id: "a", text: "You should come along sometime!" },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi mình nói ganh tị với kế hoạch của khách, khách có thể đùa vui rằng lần sau nên đi cùng.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' nói về việc hết màu gel, hoàn toàn không liên quan. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi ai đó nói họ ganh tị với kế hoạch vui của mình, mình mời họ đi cùng cho vui.",
      },
      {
        id: "st-16-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌅",
        english: "I hope you have a great weekend.",
        vietnamese: "Tôi hy vọng bạn sẽ có một cuối tuần thật vui.",
        promptContext: "Chloe muốn chúc khách một cuối tuần vui vẻ trước khi khách ra về.",
        choices: [
          { id: "a", text: "I hope you have a great weekend." },
          { id: "b", text: "I hope you having a great weekend." },
          { id: "c", text: "I hope have you a great weekend." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'hope' dùng chủ ngữ + động từ chia đúng thì, nên 'you have' là đúng ngữ pháp và tự nhiên.",
        wrongAnswerExplanations:
          "'I hope you having a great weekend.' sai vì thiếu trợ động từ 'are' trước 'having'. 'I hope have you a great weekend.' sai hoàn toàn về thứ tự chủ ngữ và động từ.",
        usageTip: "Dùng để chúc khách một cuối tuần vui vẻ trước khi họ ra về.",
      },
      {
        id: "st-16-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "✨",
        english: "Weekends always go by too fast.",
        vietnamese: "Cuối tuần lúc nào cũng trôi qua nhanh quá.",
        promptContext: "Chloe muốn nói rằng cuối tuần luôn cảm giác trôi qua rất nhanh.",
        choices: [
          { id: "a", text: "Weekends always go by too fast." },
          { id: "b", text: "Weekends always goes by too fast." },
          { id: "c", text: "Weekends always go by fast too." },
        ],
        correctAnswer: "a",
        explanation:
          "'Weekends' là chủ ngữ số nhiều nên động từ phải là 'go', không thêm 's' — câu này đúng ngữ pháp.",
        wrongAnswerExplanations:
          "'Weekends always goes by too fast.' sai vì chủ ngữ số nhiều không được chia động từ thêm 's'. 'Weekends always go by fast too.' sai vì đặt 'too' lạc chỗ, làm thay đổi nghĩa của câu.",
        usageTip: "Dùng khi trò chuyện về việc cuối tuần luôn cảm thấy quá ngắn ngủi.",
      },
    ],
  },
{
    id: "st-17",
    slug: "st-17-cuoi-tuan-2",
    topicId: "nails-small-talk",
    title: "Chia sẻ kế hoạch cuối tuần của mình",
    description: "Cách chia sẻ kế hoạch cuối tuần của thợ nails với khách.",
    level: "practice",
    coverImage: "/images/lessons/st-17-cuoi-tuan-2.jpg",
    questions: [
      {
        id: "st-17-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🍳",
        english: "I'm just cooking and staying in this weekend.",
        vietnamese: "Cuối tuần này tôi chỉ nấu ăn và ở nhà thôi.",
        prompt: "What are you up to this weekend?",
        promptVietnamese: "Cuối tuần này bạn định làm gì?",
        choices: [
          { id: "a", text: "I'm just cooking and staying in this weekend." },
          { id: "b", text: "It's fifteen dollars for that color." },
          { id: "c", text: "We close at six on Sundays." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi kế hoạch cuối tuần của mình, mình chia sẻ đơn giản, ở đây là nấu ăn và ở nhà.",
        wrongAnswerExplanations:
          "'It's fifteen dollars for that color.' nói về giá tiền, không liên quan đến câu hỏi về cuối tuần. 'We close at six on Sundays.' nói về giờ đóng cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình sẽ làm gì vào cuối tuần này.",
      },
      {
        id: "st-17-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🎮",
        english: "I'm going to a family gathering this weekend.",
        vietnamese: "Cuối tuần này tôi sẽ đi họp mặt gia đình.",
        promptContext:
          "Khách hỏi chị có kế hoạch gì cho cuối tuần, và chị muốn chia sẻ rằng mình sẽ đi họp mặt gia đình.",
        choices: [
          { id: "a", text: "I'm going to a family gathering this weekend." },
          { id: "b", text: "The gel polish just arrived today." },
          { id: "c", text: "We take appointments online now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi về kế hoạch cuối tuần, mình chia sẻ một hoạt động cụ thể như đi họp mặt gia đình.",
        wrongAnswerExplanations:
          "'The gel polish just arrived today.' nói về việc hàng vừa về, không liên quan đến câu hỏi này. 'We take appointments online now.' nói về việc đặt hẹn online, hoàn toàn lạc đề.",
        usageTip: "Dùng khi chia sẻ kế hoạch cuối tuần cụ thể của mình với khách.",
      },
      {
        id: "st-17-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "😴",
        english: "Honestly, I just want to sleep in this weekend.",
        vietnamese: "Thật ra cuối tuần này tôi chỉ muốn ngủ nướng.",
        choices: [
          { id: "a", text: "Thật ra cuối tuần này tôi chỉ muốn ngủ nướng." },
          { id: "b", text: "Cuối tuần này tôi phải dậy sớm đi làm." },
          { id: "c", text: "Cuối tuần này tôi sẽ đi du lịch xa." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ mong muốn đơn giản là được ngủ nướng vào cuối tuần — một câu trò chuyện rất gần gũi và thật.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc dậy sớm hoặc đi du lịch xa — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ mong muốn được nghỉ ngơi, ngủ nướng vào cuối tuần.",
      },
      {
        id: "st-17-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😌",
        english: "You deserve it after a long week!",
        vietnamese: "Bạn đáng được vậy sau một tuần dài rồi!",
        prompt: "Honestly, I just want to sleep in this weekend.",
        promptVietnamese: "Thật ra cuối tuần này tôi chỉ muốn ngủ nướng.",
        choices: [
          { id: "a", text: "You deserve it after a long week!" },
          { id: "b", text: "We open at ten on weekends." },
          { id: "c", text: "This color will look great on you." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi mình nói muốn ngủ nướng vào cuối tuần, khách có thể đáp lại thể hiện sự đồng cảm rằng mình đáng được nghỉ ngơi.",
        wrongAnswerExplanations:
          "'We open at ten on weekends.' nói về giờ mở cửa, không liên quan đến câu chia sẻ này. 'This color will look great on you.' là lời khen về màu sơn, chưa hợp lúc này.",
        usageTip: "Dùng khi ai đó chia sẻ muốn nghỉ ngơi sau một tuần làm việc dài, mình động viên họ.",
      },
      {
        id: "st-17-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "📖",
        english: "I plan to read a book this weekend.",
        vietnamese: "Cuối tuần này tôi định đọc một cuốn sách.",
        prompt: "I plan to ___ a book this weekend.",
        choices: [
          { id: "a", text: "read" },
          { id: "b", text: "reading" },
          { id: "c", text: "reads" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'plan to' phải dùng động từ nguyên mẫu, nên 'read' là đúng — câu này nghĩa là định đọc một cuốn sách vào cuối tuần.",
        wrongAnswerExplanations:
          "'Reading' sai vì sau 'to' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'. 'Reads' sai vì đây không phải câu chia theo chủ ngữ số ít ở thời hiện tại.",
        usageTip: "Dùng khi chia sẻ kế hoạch đọc sách của mình vào cuối tuần.",
      },
      {
        id: "st-17-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🍔",
        english: "I might try that new restaurant this weekend.",
        vietnamese: "Cuối tuần này chắc tôi sẽ thử nhà hàng mới đó.",
        promptContext:
          "Khách nghe nói có một nhà hàng mới mở gần đây, và muốn chia sẻ kế hoạch đi thử vào cuối tuần.",
        choices: [
          { id: "a", text: "I might try that new restaurant this weekend." },
          { id: "b", text: "Your nails will chip in a week." },
          { id: "c", text: "We are running low on cotton balls." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi có một nhà hàng mới mở, khách có thể chia sẻ kế hoạch đi thử vào cuối tuần, một câu chuyện nhẹ nhàng và tự nhiên.",
        wrongAnswerExplanations:
          "'Your nails will chip in a week.' nói về việc móng sẽ bị tróc, không liên quan đến kế hoạch cuối tuần. 'We are running low on cotton balls.' nói về việc thiếu bông tẩy trang, hoàn toàn lạc đề.",
        usageTip: "Dùng khi chia sẻ kế hoạch đi thử một nhà hàng mới vào cuối tuần.",
      },
      {
        id: "st-17-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "Let me know how it is if you go.",
        vietnamese: "Nếu bạn đi thì cho tôi biết thế nào nha.",
        audioText: "Let me know how it is if you go.",
        choices: [
          { id: "a", text: "Nếu bạn đi thì cho tôi biết thế nào nha." },
          { id: "b", text: "Tôi sẽ không đi nhà hàng đó đâu." },
          { id: "c", text: "Nhà hàng đó đã đóng cửa rồi." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện sự quan tâm, muốn nghe khách kể lại trải nghiệm sau khi đi thử nhà hàng mới.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa khác, không đúng với ý nghĩa quan tâm và tò mò trong câu nghe.",
        usageTip: "Dùng khi khách chia sẻ kế hoạch thử điều gì mới và mình muốn nghe kết quả sau đó.",
      },
      {
        id: "st-17-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👍",
        english: "Will do! I'll tell you next time.",
        vietnamese: "Chắc chắn rồi! Lần sau tôi sẽ kể cho bạn nghe.",
        prompt: "Let me know how it is if you go.",
        promptVietnamese: "Nếu bạn đi thì cho tôi biết thế nào nha.",
        choices: [
          { id: "a", text: "Will do! I'll tell you next time." },
          { id: "b", text: "We don't have that item anymore." },
          { id: "c", text: "Your total is fifteen dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được nhắc kể lại trải nghiệm, khách đồng ý và hứa sẽ kể vào lần gặp sau, giữ cuộc trò chuyện thân thiện.",
        wrongAnswerExplanations:
          "'We don't have that item anymore.' hoàn toàn không liên quan đến lời hứa của khách. 'Your total is fifteen dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi hứa với ai đó sẽ kể lại trải nghiệm vào lần gặp tiếp theo.",
      },
      {
        id: "st-17-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "I can't wait to hear all about it.",
        vietnamese: "Tôi không thể chờ để nghe bạn kể hết luôn.",
        promptContext: "Chloe muốn nói rằng mình rất mong được nghe khách kể lại chuyện đi ăn nhà hàng mới.",
        choices: [
          { id: "a", text: "I can't wait to hear all about it." },
          { id: "b", text: "I can't wait hear all about it." },
          { id: "c", text: "I can't wait to hearing all about it." },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc 'can't wait to + động từ' là đúng ngữ pháp, nghĩa là mong chờ điều gì xảy ra.",
        wrongAnswerExplanations:
          "'I can't wait hear all about it.' thiếu chữ 'to' trước động từ 'hear'. 'I can't wait to hearing all about it.' sai vì sau 'to' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi thật sự mong chờ được nghe ai đó kể lại một trải nghiệm.",
      },
      {
        id: "st-17-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌻",
        english: "A relaxing weekend sounds perfect right now.",
        vietnamese: "Một cuối tuần thư giãn nghe thật hoàn hảo lúc này.",
        promptContext: "Chloe muốn nói rằng lúc này mình chỉ mong có một cuối tuần thư giãn thật sự.",
        choices: [
          { id: "a", text: "A relaxing weekend sounds perfect right now." },
          { id: "b", text: "A relax weekend sounds perfect right now." },
          { id: "c", text: "A relaxing weekend sound perfect right now." },
        ],
        correctAnswer: "a",
        explanation:
          "'Relaxing' là tính từ đúng để bổ nghĩa cho 'weekend', và động từ 'sounds' chia đúng theo chủ ngữ số ít 'weekend'.",
        wrongAnswerExplanations:
          "'A relax weekend sounds perfect right now.' sai vì 'relax' là động từ, không dùng làm tính từ trước danh từ. 'A relaxing weekend sound perfect right now.' sai vì thiếu 's' ở động từ 'sounds' khi chủ ngữ số ít.",
        usageTip: "Dùng khi thật sự mong chờ một cuối tuần được nghỉ ngơi thư giãn.",
      },
    ],
  },
{
    id: "st-18",
    slug: "st-18-cuoi-tuan-3",
    topicId: "nails-small-talk",
    title: "Hỏi về cuối tuần đã qua",
    description: "Cách hỏi khách về cuối tuần vừa qua đã diễn ra như thế nào.",
    level: "practice",
    coverImage: "/images/lessons/st-18-cuoi-tuan-3.jpg",
    questions: [
      {
        id: "st-18-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "It was great! I got a lot of rest.",
        vietnamese: "Rất tuyệt! Tôi được nghỉ ngơi nhiều lắm.",
        prompt: "How was your weekend?",
        promptVietnamese: "Cuối tuần của bạn thế nào?",
        choices: [
          { id: "a", text: "It was great! I got a lot of rest." },
          { id: "b", text: "It's twenty dollars for that service." },
          { id: "c", text: "We are open again on Monday." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về cuối tuần vừa qua, mình trả lời ngắn gọn và tích cực, đây là câu hỏi small talk rất phổ biến vào đầu tuần.",
        wrongAnswerExplanations:
          "'It's twenty dollars for that service.' nói về giá dịch vụ, không liên quan đến câu hỏi về cuối tuần. 'We are open again on Monday.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi thăm về cuối tuần vừa qua của mình.",
      },
      {
        id: "st-18-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🗒️",
        english: "Did you do anything fun this weekend?",
        vietnamese: "Cuối tuần vừa rồi bạn có làm gì vui không?",
        promptContext:
          "Đầu tuần mới, chị muốn hỏi thăm khách xem cuối tuần vừa qua khách có làm gì thú vị không.",
        choices: [
          { id: "a", text: "Did you do anything fun this weekend?" },
          { id: "b", text: "Your total came to forty dollars." },
          { id: "c", text: "We had to close early yesterday." },
        ],
        correctAnswer: "a",
        explanation:
          "Vào đầu tuần, mình có thể hỏi thăm khách về cuối tuần vừa qua, một cách bắt chuyện rất tự nhiên và thân thiện.",
        wrongAnswerExplanations:
          "'Your total came to forty dollars.' nói về giá tiền, không liên quan đến câu hỏi này. 'We had to close early yesterday.' nói về việc đóng cửa sớm, hoàn toàn lạc đề.",
        usageTip: "Dùng vào đầu tuần khi muốn hỏi thăm khách về cuối tuần vừa qua.",
      },
      {
        id: "st-18-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🎂",
        english: "We celebrated my mom's birthday this weekend.",
        vietnamese: "Cuối tuần vừa rồi chúng tôi ăn mừng sinh nhật mẹ tôi.",
        choices: [
          { id: "a", text: "Cuối tuần vừa rồi chúng tôi ăn mừng sinh nhật mẹ tôi." },
          { id: "b", text: "Cuối tuần vừa rồi tôi phải làm việc cả ngày." },
          { id: "c", text: "Cuối tuần vừa rồi tôi bị bệnh và ở nhà." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ về việc cuối tuần vừa qua có tổ chức sinh nhật cho mẹ — một câu chuyện vui về cuối tuần.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc làm việc hoặc bị bệnh — không đúng với nội dung vui vẻ của câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ về một dịp đặc biệt đã diễn ra vào cuối tuần vừa qua.",
      },
      {
        id: "st-18-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎈",
        english: "That's so sweet! I hope she had a great day.",
        vietnamese: "Ngọt ngào quá! Tôi hy vọng mẹ bạn có một ngày thật vui.",
        prompt: "We celebrated my mom's birthday this weekend.",
        promptVietnamese: "Cuối tuần vừa rồi chúng tôi ăn mừng sinh nhật mẹ tôi.",
        choices: [
          { id: "a", text: "That's so sweet! I hope she had a great day." },
          { id: "b", text: "We are out of that nail shape." },
          { id: "c", text: "Your appointment starts in ten minutes." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách chia sẻ về việc ăn mừng sinh nhật mẹ, mình đáp lại thể hiện sự vui thay và gửi lời chúc tốt đẹp.",
        wrongAnswerExplanations:
          "'We are out of that nail shape.' hoàn toàn không liên quan đến câu chuyện sinh nhật. 'Your appointment starts in ten minutes.' nói về giờ hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi khách chia sẻ về một dịp vui trong gia đình như sinh nhật.",
      },
      {
        id: "st-18-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🍽️",
        english: "We went out to eat as a family this weekend.",
        vietnamese: "Cuối tuần này gia đình tôi đi ăn ngoài.",
        prompt: "We went out to eat ___ a family this weekend.",
        choices: [
          { id: "a", text: "as" },
          { id: "b", text: "for" },
          { id: "c", text: "like" },
        ],
        correctAnswer: "a",
        explanation:
          "'As a family' là cụm cố định nghĩa là 'với vai trò là một gia đình' — dùng 'as' là đúng và tự nhiên nhất.",
        wrongAnswerExplanations:
          "'For a family' không mang nghĩa đúng trong câu này. 'Like a family' mang nghĩa so sánh, không phù hợp với ý nghĩa câu này.",
        usageTip: "Dùng khi chia sẻ về một buổi đi ăn ngoài cùng cả gia đình vào cuối tuần.",
      },
      {
        id: "st-18-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🌦️",
        english: "The weather ruined our plans a bit this weekend.",
        vietnamese: "Thời tiết làm hỏng kế hoạch của tôi một chút cuối tuần này.",
        promptContext:
          "Chị hỏi khách cuối tuần vừa qua thế nào, và khách muốn chia sẻ rằng thời tiết đã làm ảnh hưởng đến kế hoạch của họ.",
        choices: [
          { id: "a", text: "The weather ruined our plans a bit this weekend." },
          { id: "b", text: "Your nails look really nice today." },
          { id: "c", text: "We just restocked our nail colors." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi kế hoạch cuối tuần bị ảnh hưởng vì thời tiết, khách có thể chia sẻ điều đó một cách nhẹ nhàng, không quá phàn nàn.",
        wrongAnswerExplanations:
          "'Your nails look really nice today.' là lời khen về móng, không liên quan đến câu hỏi về cuối tuần. 'We just restocked our nail colors.' nói về việc nhập hàng mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi kế hoạch cuối tuần bị ảnh hưởng bởi thời tiết xấu.",
      },
      {
        id: "st-18-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "That's too bad, but there's always next time.",
        vietnamese: "Tiếc quá, nhưng vẫn còn lần sau mà.",
        audioText: "That's too bad, but there's always next time.",
        choices: [
          { id: "a", text: "Tiếc quá, nhưng vẫn còn lần sau mà." },
          { id: "b", text: "Thật tuyệt vời, kế hoạch của bạn hoàn hảo." },
          { id: "c", text: "Bạn nên hủy hết kế hoạch đi." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện sự đồng cảm khi kế hoạch không như ý, kèm câu động viên rằng vẫn còn cơ hội lần sau.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa khác, không đúng với ý nghĩa an ủi trong câu nghe.",
        usageTip: "Dùng khi khách kể kế hoạch cuối tuần không như ý và mình muốn an ủi nhẹ.",
      },
      {
        id: "st-18-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🙂",
        english: "True! We'll try again next weekend.",
        vietnamese: "Đúng vậy! Tuần sau chúng tôi sẽ thử lại.",
        prompt: "That's too bad, but there's always next time.",
        promptVietnamese: "Tiếc quá, nhưng vẫn còn lần sau mà.",
        choices: [
          { id: "a", text: "True! We'll try again next weekend." },
          { id: "b", text: "We changed our prices this month." },
          { id: "c", text: "Your total is thirty dollars now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được an ủi rằng vẫn còn lần sau, khách có thể đồng ý và nói rằng sẽ thử lại vào cuối tuần tới.",
        wrongAnswerExplanations:
          "'We changed our prices this month.' hoàn toàn không liên quan đến lời an ủi. 'Your total is thirty dollars now.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng ý với lời an ủi và muốn nói sẽ thử lại vào lần sau.",
      },
      {
        id: "st-18-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌈",
        english: "I hope next weekend goes better for you.",
        vietnamese: "Tôi hy vọng cuối tuần sau sẽ tốt hơn với bạn.",
        promptContext: "Chloe muốn chúc khách cuối tuần tới sẽ suôn sẻ hơn cuối tuần vừa qua.",
        choices: [
          { id: "a", text: "I hope next weekend goes better for you." },
          { id: "b", text: "I hope next weekend go better for you." },
          { id: "c", text: "I hope next weekend goes better you for." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'next weekend' là số ít nên động từ phải chia là 'goes' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'I hope next weekend go better for you.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít. 'I hope next weekend goes better you for.' sai về thứ tự từ ở cuối câu.",
        usageTip: "Dùng khi muốn chúc khách một cuối tuần tới suôn sẻ hơn.",
      },
      {
        id: "st-18-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌤️",
        english: "Not every weekend goes as planned, and that's okay.",
        vietnamese: "Không phải cuối tuần nào cũng diễn ra như dự định, và điều đó cũng không sao.",
        promptContext: "Chloe muốn an ủi khách rằng việc kế hoạch không diễn ra như mong muốn cũng là điều bình thường.",
        choices: [
          { id: "a", text: "Not every weekend goes as planned, and that's okay." },
          { id: "b", text: "Not every weekend go as planned, and that's okay." },
          { id: "c", text: "Not every weekend goes as plan, and that's okay." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'every weekend' là số ít nên động từ chia là 'goes', và 'as planned' là dạng đúng nghĩa là 'như đã định'.",
        wrongAnswerExplanations:
          "'Not every weekend go as planned, and that's okay.' sai vì thiếu 's' ở động từ 'goes'. 'Not every weekend goes as plan, and that's okay.' sai vì phải dùng 'planned' (dạng quá khứ phân từ), không dùng 'plan'.",
        usageTip: "Dùng khi muốn an ủi ai đó rằng không phải lúc nào kế hoạch cũng diễn ra hoàn hảo.",
      },
    ],
  },
{
    id: "st-19",
    slug: "st-19-cuoi-tuan-4",
    topicId: "nails-small-talk",
    title: "Hoạt động cuối tuần yêu thích",
    description: "Cách trò chuyện về những hoạt động khách và thợ nails thích làm vào cuối tuần.",
    level: "practice",
    coverImage: "/images/lessons/st-19-cuoi-tuan-4.jpg",
    questions: [
      {
        id: "st-19-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🌻",
        english: "I love gardening on the weekends.",
        vietnamese: "Tôi thích làm vườn vào những ngày cuối tuần.",
        prompt: "What do you like to do on weekends?",
        promptVietnamese: "Cuối tuần bạn thích làm gì?",
        choices: [
          { id: "a", text: "I love gardening on the weekends." },
          { id: "b", text: "It's ten dollars for a manicure." },
          { id: "c", text: "We close at five on Sundays." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về hoạt động yêu thích vào cuối tuần, mình chia sẻ một sở thích cụ thể, ví dụ làm vườn.",
        wrongAnswerExplanations:
          "'It's ten dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về sở thích. 'We close at five on Sundays.' nói về giờ đóng cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình thích làm gì vào cuối tuần.",
      },
      {
        id: "st-19-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🎨",
        english: "I like painting in my free time.",
        vietnamese: "Tôi thích vẽ tranh vào thời gian rảnh.",
        promptContext:
          "Khách hỏi chị thích làm gì vào cuối tuần, và chị muốn chia sẻ về sở thích vẽ tranh của mình.",
        choices: [
          { id: "a", text: "I like painting in my free time." },
          { id: "b", text: "Your total comes to twenty dollars." },
          { id: "c", text: "We just got a new gel machine." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ sở thích vẽ tranh vào thời gian rảnh — một cách trò chuyện nhẹ nhàng về đam mê cá nhân.",
        wrongAnswerExplanations:
          "'Your total comes to twenty dollars.' nói về giá tiền, không liên quan đến câu hỏi về sở thích. 'We just got a new gel machine.' nói về máy gel mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi chia sẻ với khách về sở thích cá nhân vào thời gian rảnh.",
      },
      {
        id: "st-19-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🎵",
        english: "I like going to karaoke with friends.",
        vietnamese: "Tôi thích đi hát karaoke với bạn bè.",
        choices: [
          { id: "a", text: "Tôi thích đi hát karaoke với bạn bè." },
          { id: "b", text: "Tôi không thích hát chút nào." },
          { id: "c", text: "Tôi thích đi làm với đồng nghiệp." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ sở thích đi hát karaoke với bạn bè — một hoạt động cuối tuần rất phổ biến và vui vẻ.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc nói về việc đi làm — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ với khách về hoạt động vui chơi cùng bạn bè vào cuối tuần.",
      },
      {
        id: "st-19-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎤",
        english: "That sounds so fun! I love karaoke too.",
        vietnamese: "Nghe vui quá! Tôi cũng thích karaoke.",
        prompt: "I like going to karaoke with friends.",
        promptVietnamese: "Tôi thích đi hát karaoke với bạn bè.",
        choices: [
          { id: "a", text: "That sounds so fun! I love karaoke too." },
          { id: "b", text: "We only accept cash on weekends." },
          { id: "c", text: "Your nail polish is drying now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi chia sẻ về sở thích karaoke, khách đáp lại vui vẻ, thể hiện sự đồng điệu nếu họ cũng thích hoạt động đó.",
        wrongAnswerExplanations:
          "'We only accept cash on weekends.' nói về hình thức thanh toán, hoàn toàn không liên quan. 'Your nail polish is drying now.' nói về việc sơn đang khô, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi khách chia sẻ sở thích giống với mình và mình muốn đồng cảm.",
      },
      {
        id: "st-19-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🚴",
        english: "I enjoy riding my bike on weekends.",
        vietnamese: "Tôi thích đi xe đạp vào cuối tuần.",
        prompt: "I enjoy ___ my bike on weekends.",
        choices: [
          { id: "a", text: "riding" },
          { id: "b", text: "ride" },
          { id: "c", text: "rode" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'enjoy' luôn dùng động từ dạng '-ing', nên 'riding' là đúng — nghĩa là thích đi xe đạp.",
        wrongAnswerExplanations:
          "'Ride' sai vì thiếu dạng '-ing' sau 'enjoy'. 'Rode' là dạng quá khứ, không dùng được sau 'enjoy'.",
        usageTip: "Dùng khi chia sẻ với khách về sở thích đi xe đạp vào cuối tuần.",
      },
      {
        id: "st-19-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧑‍🍳",
        english: "I love trying new recipes on the weekend.",
        vietnamese: "Tôi thích thử món mới vào cuối tuần.",
        promptContext:
          "Khách chia sẻ rằng cuối tuần là lúc khách thích thử nấu những món ăn mới mà chưa từng làm.",
        choices: [
          { id: "a", text: "I love trying new recipes on the weekend." },
          { id: "b", text: "The nail file is on the table." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách chia sẻ rằng cuối tuần là lúc thích thử nấu những món mới — một sở thích nhẹ nhàng, dễ trò chuyện.",
        wrongAnswerExplanations:
          "'The nail file is on the table.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ về sở thích nấu ăn hoặc thử món mới vào cuối tuần.",
      },
      {
        id: "st-19-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "You'll have to share the recipe with me sometime.",
        vietnamese: "Lúc nào bạn phải chia công thức đó cho tôi nha.",
        audioText: "You'll have to share the recipe with me sometime.",
        choices: [
          { id: "a", text: "Lúc nào bạn phải chia công thức đó cho tôi nha." },
          { id: "b", text: "Tôi không thích ăn món đó đâu." },
          { id: "c", text: "Công thức đó rất khó làm." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói vui rằng mình muốn được chia sẻ công thức nấu ăn từ khách — một cách trò chuyện thân thiện, gần gũi.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa khác, không đúng với ý nghĩa vui vẻ, thân thiện trong câu nghe.",
        usageTip: "Dùng khi khách chia sẻ về một món ăn ngon và mình muốn học theo.",
      },
      {
        id: "st-19-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😄",
        english: "Of course! I'll write it down for you.",
        vietnamese: "Được chứ! Tôi sẽ viết ra cho bạn.",
        prompt: "You'll have to share the recipe with me sometime.",
        promptVietnamese: "Lúc nào bạn phải chia công thức đó cho tôi nha.",
        choices: [
          { id: "a", text: "Of course! I'll write it down for you." },
          { id: "b", text: "We ran out of nail glue today." },
          { id: "c", text: "Your total is twenty-five dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được yêu cầu chia sẻ công thức, khách đồng ý vui vẻ và hứa sẽ viết ra cho mình, một cách đáp lại rất thân thiện.",
        wrongAnswerExplanations:
          "'We ran out of nail glue today.' hoàn toàn không liên quan đến lời hứa chia công thức. 'Your total is twenty-five dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng ý chia sẻ điều gì đó với ai và muốn thể hiện sự vui vẻ, sẵn lòng.",
      },
      {
        id: "st-19-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🍰",
        english: "I can't cook, but I love eating good food.",
        vietnamese: "Tôi không biết nấu ăn, nhưng tôi thích ăn ngon.",
        promptContext: "Chloe muốn chia sẻ vui rằng mình không giỏi nấu ăn nhưng lại rất thích ăn ngon.",
        choices: [
          { id: "a", text: "I can't cook, but I love eating good food." },
          { id: "b", text: "I can't cooking, but I love eating good food." },
          { id: "c", text: "I can't cook, but I love eat good food." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'can't' luôn dùng động từ nguyên mẫu 'cook', và sau 'love' dùng dạng '-ing' 'eating' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'I can't cooking, but I love eating good food.' sai vì sau 'can't' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'. 'I can't cook, but I love eat good food.' sai vì sau 'love' nên dùng 'eating', không dùng 'eat' trực tiếp.",
        usageTip: "Dùng khi muốn chia sẻ vui vẻ về việc mình không giỏi nấu ăn nhưng thích ăn ngon.",
      },
      {
        id: "st-19-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌼",
        english: "It's nice to have something to look forward to.",
        vietnamese: "Có điều gì để mong chờ thật là hay.",
        promptContext: "Chloe muốn nói rằng có một hoạt động yêu thích để mong chờ vào cuối tuần là điều rất tốt.",
        choices: [
          { id: "a", text: "It's nice to have something to look forward to." },
          { id: "b", text: "It's nice to have something to look forward." },
          { id: "c", text: "It's nice having something look forward to." },
        ],
        correctAnswer: "a",
        explanation:
          "'Look forward to' luôn cần đủ chữ 'to' ở cuối cụm — câu này đúng ngữ pháp và giữ đúng cấu trúc cố định.",
        wrongAnswerExplanations:
          "'It's nice to have something to look forward.' sai vì thiếu chữ 'to' ở cuối cụm 'look forward to'. 'It's nice having something look forward to.' sai vì thiếu 'to' trước 'look' làm câu không đúng ngữ pháp.",
        usageTip: "Dùng khi muốn nói rằng có điều gì để mong chờ vào cuối tuần là điều tích cực.",
      },
    ],
  },
];
