import { Lesson } from "@/types/content";

/**
 * Small Talk — subtopic group 4: Cuối tuần (lessons 16-20).
 */
export const smallTalkGroup04: Lesson[] = [
  {
    id: "st-16",
    slug: "st-16-cuoi-tuan-1",
    topicId: "small-talk",
    title: "Hỏi khách về kế hoạch cuối tuần",
    description: "Cách hỏi khách xem họ có kế hoạch gì cho cuối tuần này không.",
    level: "practice",
    section: "THỰC HÀNH",
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
    topicId: "small-talk",
    title: "Chia sẻ kế hoạch cuối tuần của mình",
    description: "Cách chia sẻ kế hoạch cuối tuần của thợ nails với khách.",
    level: "practice",
    section: "THỰC HÀNH",
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
    topicId: "small-talk",
    title: "Hỏi về cuối tuần đã qua",
    description: "Cách hỏi khách về cuối tuần vừa qua đã diễn ra như thế nào.",
    level: "practice",
    section: "THỰC HÀNH",
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
    topicId: "small-talk",
    title: "Hoạt động cuối tuần yêu thích",
    description: "Cách trò chuyện về những hoạt động khách và thợ nails thích làm vào cuối tuần.",
    level: "practice",
    section: "THỰC HÀNH",
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
  {
    id: "st-20",
    slug: "st-20-cuoi-tuan-5",
    topicId: "small-talk",
    title: "Cuối tuần với gia đình và bạn bè",
    description: "Cách trò chuyện về việc dành cuối tuần cho gia đình và bạn bè.",
    level: "practice",
    section: "THỰC HÀNH",
    questions: [
      {
        id: "st-20-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👨‍👩‍👧",
        english: "We're having a family barbecue this weekend.",
        vietnamese: "Cuối tuần này gia đình tôi sẽ tổ chức tiệc nướng.",
        prompt: "Are you doing anything with your family this weekend?",
        promptVietnamese: "Cuối tuần này bạn có làm gì với gia đình không?",
        choices: [
          { id: "a", text: "We're having a family barbecue this weekend." },
          { id: "b", text: "It's twenty dollars for gel polish." },
          { id: "c", text: "We're open until eight tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi về kế hoạch gia đình cuối tuần, mình chia sẻ hoạt động cụ thể, ví dụ tổ chức tiệc nướng.",
        wrongAnswerExplanations:
          "'It's twenty dollars for gel polish.' nói về giá dịch vụ, không liên quan đến câu hỏi về gia đình. 'We're open until eight tonight.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi về kế hoạch cuối tuần với gia đình.",
      },
      {
        id: "st-20-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧑‍🧑‍🧒",
        english: "That sounds like so much fun! Enjoy your time.",
        vietnamese: "Nghe vui quá! Chúc bạn có thời gian vui vẻ.",
        promptContext:
          "Chị vừa nói với khách rằng cuối tuần này sẽ có tiệc nướng gia đình, và khách muốn chúc chị vui vẻ.",
        choices: [
          { id: "a", text: "That sounds like so much fun! Enjoy your time." },
          { id: "b", text: "Your nails need to be filed more." },
          { id: "c", text: "We just got a new appointment system." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe kế hoạch vui vẻ với gia đình, khách chúc lại một câu ngắn để thể hiện sự vui thay và thân thiện.",
        wrongAnswerExplanations:
          "'Your nails need to be filed more.' nói về việc cần giũa thêm móng, không liên quan đến lời chúc. 'We just got a new appointment system.' nói về hệ thống đặt hẹn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn chúc ai đó có thời gian vui vẻ với gia đình vào cuối tuần.",
      },
      {
        id: "st-20-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🧑‍🤝‍🧑",
        english: "My friends and I are meeting up on Saturday.",
        vietnamese: "Tôi và bạn bè sẽ gặp nhau vào thứ Bảy.",
        choices: [
          { id: "a", text: "Tôi và bạn bè sẽ gặp nhau vào thứ Bảy." },
          { id: "b", text: "Tôi và bạn bè không gặp nhau đã lâu rồi." },
          { id: "c", text: "Tôi sẽ đi làm một mình vào thứ Bảy." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ kế hoạch gặp bạn bè vào thứ Bảy — một hoạt động cuối tuần rất phổ biến và vui vẻ.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc nói về việc đi làm một mình — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ về kế hoạch gặp bạn bè vào cuối tuần.",
      },
      {
        id: "st-20-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🥳",
        english: "That's great, it's nice to catch up with friends.",
        vietnamese: "Tốt đấy, gặp lại bạn bè để trò chuyện thì thật vui.",
        prompt: "My friends and I are meeting up on Saturday.",
        promptVietnamese: "Tôi và bạn bè sẽ gặp nhau vào thứ Bảy.",
        choices: [
          { id: "a", text: "That's great, it's nice to catch up with friends." },
          { id: "b", text: "We changed the color selection today." },
          { id: "c", text: "Your nail shape is almost done." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi chia sẻ kế hoạch gặp bạn bè, khách đáp lại thể hiện sự đồng tình rằng việc gặp gỡ bạn bè rất đáng quý.",
        wrongAnswerExplanations:
          "'We changed the color selection today.' nói về việc thay đổi lựa chọn màu sơn, hoàn toàn không liên quan. 'Your nail shape is almost done.' nói về việc gần hoàn thành hình dáng móng, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi ai đó chia sẻ kế hoạch gặp bạn bè và mình muốn đồng tình vui vẻ.",
      },
      {
        id: "st-20-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🏡",
        english: "My whole family is coming over this weekend.",
        vietnamese: "Cả gia đình tôi sẽ đến nhà tôi vào cuối tuần này.",
        prompt: "My whole family is ___ over this weekend.",
        choices: [
          { id: "a", text: "coming" },
          { id: "b", text: "come" },
          { id: "c", text: "comes" },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc 'is coming over' dùng thì hiện tại tiếp diễn để nói về kế hoạch chắc chắn trong tương lai gần — 'coming' là đúng.",
        wrongAnswerExplanations:
          "'Come' sai vì thiếu dạng '-ing' sau trợ động từ 'is'. 'Comes' sai vì sau 'is' không dùng động từ chia theo chủ ngữ số ít riêng.",
        usageTip: "Dùng khi chia sẻ về kế hoạch cả gia đình sẽ đến nhà mình vào cuối tuần.",
      },
      {
        id: "st-20-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🎊",
        english: "That must be a full house this weekend!",
        vietnamese: "Vậy cuối tuần này nhà bạn chắc đông vui lắm!",
        promptContext:
          "Chị vừa nói với khách rằng cả gia đình sẽ đến nhà mình vào cuối tuần, và khách muốn nhận xét vui về điều đó.",
        choices: [
          { id: "a", text: "That must be a full house this weekend!" },
          { id: "b", text: "Your total today is thirty dollars." },
          { id: "c", text: "We are low on nail polish remover." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe cả gia đình sẽ tụ họp, khách có thể nhận xét vui rằng nhà sẽ rất đông và náo nhiệt.",
        wrongAnswerExplanations:
          "'Your total today is thirty dollars.' nói về giá tiền, không liên quan đến câu chuyện gia đình. 'We are low on nail polish remover.' nói về việc thiếu nước tẩy sơn, hoàn toàn lạc đề.",
        usageTip: "Dùng khi nghe ai đó chia sẻ về việc cả gia đình sẽ tụ họp đông vui.",
      },
      {
        id: "st-20-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "It's always loud, but I love it.",
        vietnamese: "Lúc nào cũng ồn ào, nhưng tôi thích vậy.",
        audioText: "It's always loud, but I love it.",
        choices: [
          { id: "a", text: "Lúc nào cũng ồn ào, nhưng tôi thích vậy." },
          { id: "b", text: "Nhà tôi lúc nào cũng yên tĩnh." },
          { id: "c", text: "Tôi không thích khi gia đình tụ họp." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng dù nhà đông và ồn ào khi gia đình tụ họp, mình vẫn rất thích cảm giác đó.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi chia sẻ cảm xúc tích cực về những lúc gia đình đông đủ, ồn ào vui vẻ.",
      },
      {
        id: "st-20-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "❤️",
        english: "Family time is always worth it.",
        vietnamese: "Thời gian dành cho gia đình lúc nào cũng đáng giá.",
        prompt: "It's always loud, but I love it.",
        promptVietnamese: "Lúc nào cũng ồn ào, nhưng tôi thích vậy.",
        choices: [
          { id: "a", text: "Family time is always worth it." },
          { id: "b", text: "We are fully booked this Saturday." },
          { id: "c", text: "This gel color looks really nice." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi mình chia sẻ tình cảm về những lúc gia đình đông vui, khách có thể đồng tình rằng thời gian gia đình luôn đáng giá.",
        wrongAnswerExplanations:
          "'We are fully booked this Saturday.' nói về việc hết chỗ, không liên quan đến câu chuyện gia đình. 'This gel color looks really nice.' là lời khen về màu sơn, chưa hợp lúc này.",
        usageTip: "Dùng khi đồng tình rằng thời gian dành cho gia đình luôn là điều quý giá.",
      },
      {
        id: "st-20-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🏠",
        english: "I always look forward to seeing my family.",
        vietnamese: "Tôi luôn mong được gặp gia đình mình.",
        promptContext: "Chloe muốn chia sẻ rằng mình luôn mong chờ được gặp gia đình vào cuối tuần.",
        choices: [
          { id: "a", text: "I always look forward to seeing my family." },
          { id: "b", text: "I always look forward see my family." },
          { id: "c", text: "I always looking forward to seeing my family." },
        ],
        correctAnswer: "a",
        explanation:
          "'Look forward to + V-ing' là cấu trúc đúng — câu này nghĩa là mong chờ được gặp gia đình.",
        wrongAnswerExplanations:
          "'I always look forward see my family.' sai vì thiếu 'to' và phải dùng dạng '-ing' sau 'to'. 'I always looking forward to seeing my family.' sai vì thiếu trợ động từ 'am' trước 'looking'.",
        usageTip: "Dùng khi chia sẻ với khách về việc mình luôn mong chờ được gặp gia đình.",
      },
      {
        id: "st-20-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "Time with the people you love matters most.",
        vietnamese: "Thời gian với những người mình yêu thương quan trọng nhất.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về việc thời gian với người thân yêu quý giá như thế nào.",
        choices: [
          { id: "a", text: "Time with the people you love matters most." },
          { id: "b", text: "Time with the people you love matter most." },
          { id: "c", text: "Time with the people you love matters the most most." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ chính của câu là 'time' (số ít) nên động từ phải chia là 'matters' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Time with the people you love matter most.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít 'time'. 'Time with the people you love matters the most most.' sai vì lặp từ 'most' hai lần không cần thiết.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa về giá trị của thời gian bên người thân.",
      },
    ],
  },
];
