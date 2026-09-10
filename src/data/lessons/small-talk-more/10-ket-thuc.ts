import { Lesson } from "@/types/content";

/**
 * Small Talk — subtopic group 10: Kết thúc small talk tự nhiên (lessons 46-50).
 */
export const smallTalkGroup10: Lesson[] = [
  {
    id: "st-46",
    slug: "st-46-ket-thuc-1",
    topicId: "small-talk",
    title: "Chuyển từ trò chuyện sang công việc",
    description: "Cách chuyển nhẹ nhàng từ trò chuyện sang tập trung vào dịch vụ nails.",
    level: "situation",
    section: "NÂNG CAO HƠN MỘT CHÚT",
    questions: [
      {
        id: "st-46-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "💅",
        english: "Anyway, let's get started on your nails.",
        vietnamese: "Thôi, mình bắt đầu làm móng cho bạn nhé.",
        prompt: "That's such a fun story!",
        promptVietnamese: "Câu chuyện đó vui thật đấy!",
        choices: [
          { id: "a", text: "Anyway, let's get started on your nails." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau khi trò chuyện vui vẻ, mình có thể nhẹ nhàng chuyển sang công việc bằng từ 'anyway' để bắt đầu làm nails cho khách.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không phải cách chuyển chủ đề tự nhiên. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn nhẹ nhàng chuyển từ trò chuyện sang bắt đầu công việc.",
      },
      {
        id: "st-46-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "⏰",
        english: "Let's go ahead and pick your color now.",
        vietnamese: "Giờ mình chọn màu sơn cho bạn nhé.",
        promptContext:
          "Chị và khách đã trò chuyện khá lâu, và chị muốn nhẹ nhàng chuyển sang bước tiếp theo là chọn màu sơn.",
        choices: [
          { id: "a", text: "Let's go ahead and pick your color now." },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi đã trò chuyện đủ lâu, mình có thể nhẹ nhàng chuyển sang bước tiếp theo trong dịch vụ, ví dụ chọn màu sơn.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, chưa hợp lúc chuyển chủ đề. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn nhẹ nhàng chuyển từ trò chuyện sang bước tiếp theo của dịch vụ.",
      },
      {
        id: "st-46-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🙂",
        english: "Let's get you all set up here.",
        vietnamese: "Mình chuẩn bị mọi thứ cho bạn ở đây nhé.",
        choices: [
          { id: "a", text: "Mình chuẩn bị mọi thứ cho bạn ở đây nhé." },
          { id: "b", text: "Chúng tôi không còn chỗ trống nào." },
          { id: "c", text: "Bạn cần đợi thêm mười phút nữa." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này dùng để nhẹ nhàng bắt đầu chuẩn bị dịch vụ cho khách sau khi đã trò chuyện xong phần chào hỏi.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc hết chỗ hoặc phải đợi — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi muốn bắt đầu chuẩn bị dịch vụ cho khách sau phần trò chuyện mở đầu.",
      },
      {
        id: "st-46-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "Sounds good, I'm ready whenever you are.",
        vietnamese: "Được đó, tôi sẵn sàng khi nào bạn muốn.",
        prompt: "Let's get you all set up here.",
        promptVietnamese: "Mình chuẩn bị mọi thứ cho bạn ở đây nhé.",
        choices: [
          { id: "a", text: "Sounds good, I'm ready whenever you are." },
          { id: "b", text: "We take walk-ins every day." },
          { id: "c", text: "This gel color dries fast." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được thông báo chuẩn bị bắt đầu dịch vụ, khách đồng ý và nói mình đã sẵn sàng.",
        wrongAnswerExplanations:
          "'We take walk-ins every day.' nói về việc nhận khách không hẹn, không liên quan đến việc chuẩn bị. 'This gel color dries fast.' nói về sơn gel khô nhanh, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách đồng ý và thể hiện sự sẵn sàng để bắt đầu dịch vụ.",
      },
      {
        id: "st-46-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "👌",
        english: "Let's go ahead and get started now.",
        vietnamese: "Giờ mình bắt đầu luôn nhé.",
        prompt: "Let's go ahead and get ___ now.",
        choices: [
          { id: "a", text: "started" },
          { id: "b", text: "start" },
          { id: "c", text: "starting" },
        ],
        correctAnswer: "a",
        explanation:
          "'Get started' là cụm cố định nghĩa là 'bắt đầu' — dùng dạng quá khứ phân từ 'started' sau 'get' là đúng.",
        wrongAnswerExplanations:
          "'Start' sai vì cụm cố định là 'get started', không dùng nguyên mẫu trực tiếp sau 'get' theo cách này. 'Starting' sai vì không đúng với cụm cố định 'get started'.",
        usageTip: "Dùng khi muốn nhẹ nhàng bắt đầu công việc sau khi đã trò chuyện với khách.",
      },
      {
        id: "st-46-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "💬",
        english: "We can keep chatting while I work, if you'd like.",
        vietnamese: "Chúng ta có thể tiếp tục trò chuyện trong lúc tôi làm, nếu bạn muốn.",
        promptContext:
          "Chị chuẩn bị bắt đầu làm nails cho khách, và muốn nói rằng hai người vẫn có thể tiếp tục trò chuyện trong lúc làm.",
        choices: [
          { id: "a", text: "We can keep chatting while I work, if you'd like." },
          { id: "b", text: "The nail file is on the table." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi bắt đầu công việc, mình có thể nói rằng cuộc trò chuyện vẫn có thể tiếp tục, giúp khách cảm thấy thoải mái.",
        wrongAnswerExplanations:
          "'The nail file is on the table.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi muốn nói rằng cuộc trò chuyện có thể tiếp tục trong lúc làm dịch vụ.",
      },
      {
        id: "st-46-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "Let me know if you want to keep talking.",
        vietnamese: "Cho tôi biết nếu bạn muốn tiếp tục nói chuyện nha.",
        audioText: "Let me know if you want to keep talking.",
        choices: [
          { id: "a", text: "Cho tôi biết nếu bạn muốn tiếp tục nói chuyện nha." },
          { id: "b", text: "Bạn không được nói chuyện trong lúc làm." },
          { id: "c", text: "Tôi không muốn nói chuyện nữa." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này cho khách biết rằng họ có thể tiếp tục trò chuyện nếu muốn, thể hiện sự thoải mái và linh hoạt.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi muốn cho khách biết rằng họ có thể tiếp tục trò chuyện trong lúc làm dịch vụ.",
      },
      {
        id: "st-46-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😄",
        english: "I think I'll just relax for now, thank you.",
        vietnamese: "Tôi nghĩ tôi sẽ nghỉ ngơi thôi, cảm ơn bạn.",
        prompt: "Let me know if you want to keep talking.",
        promptVietnamese: "Cho tôi biết nếu bạn muốn tiếp tục nói chuyện nha.",
        choices: [
          { id: "a", text: "I think I'll just relax for now, thank you." },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi có muốn tiếp tục nói chuyện không, khách có thể chọn nghỉ ngơi và cảm ơn vì sự quan tâm.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến câu hỏi này. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi khách muốn thư giãn im lặng thay vì tiếp tục trò chuyện.",
      },
      {
        id: "st-46-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌿",
        english: "Of course, just relax and enjoy.",
        vietnamese: "Được chứ, bạn cứ thư giãn và tận hưởng nha.",
        promptContext: "Chloe muốn nói với khách rằng họ có thể yên tâm thư giãn khi không muốn nói chuyện nữa.",
        choices: [
          { id: "a", text: "Of course, just relax and enjoy." },
          { id: "b", text: "Of course, just relaxing and enjoy." },
          { id: "c", text: "Of course, just relax and enjoying." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'just' dùng động từ nguyên mẫu, nên 'relax and enjoy' là đúng — câu này đúng ngữ pháp và tự nhiên.",
        wrongAnswerExplanations:
          "'Of course, just relaxing and enjoy.' sai vì không đồng nhất dạng động từ, 'relaxing' không khớp với 'enjoy'. 'Of course, just relax and enjoying.' sai vì 'enjoying' không khớp dạng với 'relax' ở đầu câu.",
        usageTip: "Dùng khi muốn nói với khách rằng họ có thể yên tâm thư giãn trong lúc làm dịch vụ.",
      },
      {
        id: "st-46-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "✨",
        english: "It's nice to talk, but it's okay to relax too.",
        vietnamese: "Trò chuyện thì vui, nhưng thư giãn cũng không sao cả.",
        promptContext: "Chloe muốn nói rằng dù trò chuyện vui, khách cũng hoàn toàn có thể chọn thư giãn im lặng nếu muốn.",
        choices: [
          { id: "a", text: "It's nice to talk, but it's okay to relax too." },
          { id: "b", text: "It's nice talk, but it's okay to relax too." },
          { id: "c", text: "It's nice to talk, but it's okay relax too." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng giữ nguyên cấu trúc 'it's nice to + động từ' và 'it's okay to + động từ' đầy đủ chữ 'to' ở cả hai vị trí.",
        wrongAnswerExplanations:
          "'It's nice talk, but it's okay to relax too.' sai vì thiếu chữ 'to' trước 'talk'. 'It's nice to talk, but it's okay relax too.' sai vì thiếu chữ 'to' trước 'relax'.",
        usageTip: "Dùng khi muốn nói rằng cả trò chuyện và thư giãn im lặng đều là lựa chọn tốt cho khách.",
      },
    ],
  },
  {
    id: "st-47",
    slug: "st-47-ket-thuc-2",
    topicId: "small-talk",
    title: "Kết thúc cuộc trò chuyện khi khách sắp về",
    description: "Cách kết thúc cuộc trò chuyện một cách tự nhiên khi khách chuẩn bị ra về.",
    level: "situation",
    section: "NÂNG CAO HƠN MỘT CHÚT",
    questions: [
      {
        id: "st-47-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👋",
        english: "It was so nice talking with you today.",
        vietnamese: "Hôm nay trò chuyện với bạn vui thật đấy.",
        prompt: "Well, I should get going now.",
        promptVietnamese: "Thôi, tôi nên đi rồi.",
        choices: [
          { id: "a", text: "It was so nice talking with you today." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nói sắp phải đi, mình có thể kết thúc cuộc trò chuyện bằng một câu vui vẻ, nói rằng đã có buổi trò chuyện thú vị.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không phải cách kết thúc trò chuyện tự nhiên. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách chuẩn bị ra về và mình muốn kết thúc cuộc trò chuyện một cách ấm áp.",
      },
      {
        id: "st-47-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🕐",
        english: "I hope you have a great rest of your day.",
        vietnamese: "Tôi hy vọng phần còn lại của ngày bạn sẽ tuyệt vời.",
        promptContext:
          "Khách chuẩn bị rời khỏi tiệm sau khi làm nails xong, và chị muốn chúc khách một câu ngắn trước khi khách về.",
        choices: [
          { id: "a", text: "I hope you have a great rest of your day." },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách chuẩn bị ra về, mình chúc khách một câu ngắn, ấm áp trước khi họ rời khỏi tiệm.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, chưa hợp lúc chúc khách. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn chúc khách một câu ngắn trước khi họ rời khỏi tiệm.",
      },
      {
        id: "st-47-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🙂",
        english: "Thanks for coming in today, take care!",
        vietnamese: "Cảm ơn bạn đã đến hôm nay, giữ gìn sức khỏe nha!",
        choices: [
          { id: "a", text: "Cảm ơn bạn đã đến hôm nay, giữ gìn sức khỏe nha!" },
          { id: "b", text: "Xin lỗi vì hôm nay tiệm đóng cửa." },
          { id: "c", text: "Bạn cần đặt hẹn trước khi đến." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này cảm ơn khách vì đã đến tiệm và chúc họ giữ gìn sức khỏe — một cách kết thúc cuộc gặp rất tự nhiên và thân thiện.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc đóng cửa hoặc cần đặt hẹn — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi cảm ơn khách và chào tạm biệt trước khi họ rời khỏi tiệm.",
      },
      {
        id: "st-47-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "You too! I'll see you next time.",
        vietnamese: "Bạn cũng vậy nha! Lần sau gặp lại.",
        prompt: "Thanks for coming in today, take care!",
        promptVietnamese: "Cảm ơn bạn đã đến hôm nay, giữ gìn sức khỏe nha!",
        choices: [
          { id: "a", text: "You too! I'll see you next time." },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được chúc giữ gìn sức khỏe, khách đáp lại vui vẻ và nói hẹn gặp lại lần sau.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' hoàn toàn không liên quan đến lời chào tạm biệt. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đáp lại lời chào tạm biệt và hẹn gặp lại lần sau.",
      },
      {
        id: "st-47-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "👋",
        english: "See you next time, have a good one!",
        vietnamese: "Hẹn gặp lại lần sau, chúc bạn một ngày tốt lành!",
        prompt: "See you next time, have a good ___!",
        choices: [
          { id: "a", text: "one" },
          { id: "b", text: "day one" },
          { id: "c", text: "ones" },
        ],
        correctAnswer: "a",
        explanation:
          "'Have a good one' là cách nói thân mật, ngắn gọn nghĩa là 'chúc bạn một ngày tốt lành' — dùng 'one' là đúng và tự nhiên nhất.",
        wrongAnswerExplanations:
          "'Day one' không phải cách nói tự nhiên trong cụm chào tạm biệt này. 'Ones' số nhiều không phù hợp trong cụm cố định 'have a good one'.",
        usageTip: "Dùng khi chào tạm biệt khách một cách thân mật, ngắn gọn.",
      },
      {
        id: "st-47-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🚪",
        english: "Thanks again, I'll definitely be back soon.",
        vietnamese: "Cảm ơn lần nữa, tôi sẽ quay lại sớm.",
        promptContext:
          "Khách chuẩn bị ra về sau khi làm nails xong, và muốn cảm ơn lần cuối cùng với ý định sẽ quay lại tiệm.",
        choices: [
          { id: "a", text: "Thanks again, I'll definitely be back soon." },
          { id: "b", text: "The nail dryer is broken today." },
          { id: "c", text: "We need to close early tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi chuẩn bị ra về, khách cảm ơn lần cuối và nói rằng mình sẽ quay lại tiệm sớm, thể hiện sự hài lòng.",
        wrongAnswerExplanations:
          "'The nail dryer is broken today.' nói về máy sấy móng bị hỏng, hoàn toàn không liên quan. 'We need to close early tonight.' nói về việc đóng cửa sớm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi khách muốn cảm ơn lần cuối và nói ý định sẽ quay lại tiệm.",
      },
      {
        id: "st-47-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "We'll be looking forward to seeing you again.",
        vietnamese: "Chúng tôi sẽ mong được gặp lại bạn.",
        audioText: "We'll be looking forward to seeing you again.",
        choices: [
          { id: "a", text: "Chúng tôi sẽ mong được gặp lại bạn." },
          { id: "b", text: "Chúng tôi không muốn gặp lại bạn." },
          { id: "c", text: "Chúng tôi sẽ đóng cửa tiệm sớm." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện sự mong chờ được gặp lại khách trong lần tới, một cách chào tạm biệt ấm áp và chuyên nghiệp.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoặc không liên quan đến ý nghĩa trong câu nghe.",
        usageTip: "Dùng khi muốn thể hiện sự mong chờ được gặp lại khách trong lần tới.",
      },
      {
        id: "st-47-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🙏",
        english: "That's so sweet, I'll see you soon!",
        vietnamese: "Ngọt ngào quá, hẹn gặp lại sớm nha!",
        prompt: "We'll be looking forward to seeing you again.",
        promptVietnamese: "Chúng tôi sẽ mong được gặp lại bạn.",
        choices: [
          { id: "a", text: "That's so sweet, I'll see you soon!" },
          { id: "b", text: "We changed our shop hours today." },
          { id: "c", text: "Your total comes to fifteen dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe lời chào ấm áp, khách đáp lại vui vẻ và nói hẹn gặp lại sớm.",
        wrongAnswerExplanations:
          "'We changed our shop hours today.' hoàn toàn không liên quan đến lời chào tạm biệt. 'Your total comes to fifteen dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đáp lại một lời chào tạm biệt ấm áp bằng một câu vui vẻ.",
      },
      {
        id: "st-47-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌸",
        english: "It was a pleasure having you today.",
        vietnamese: "Hôm nay được phục vụ bạn là một niềm vui.",
        promptContext: "Chloe muốn nói một câu lịch sự, ấm áp để cảm ơn khách trước khi họ ra về.",
        choices: [
          { id: "a", text: "It was a pleasure having you today." },
          { id: "b", text: "It was a pleasure have you today." },
          { id: "c", text: "It was pleasure a having you today." },
        ],
        correctAnswer: "a",
        explanation:
          "'A pleasure' cần đi sau bởi 'having' dạng '-ing' để đúng ngữ pháp — câu này nghĩa là 'thật vui khi được phục vụ bạn'.",
        wrongAnswerExplanations:
          "'It was a pleasure have you today.' sai vì thiếu dạng '-ing' sau 'a pleasure'. 'It was pleasure a having you today.' sai vì đặt mạo từ 'a' lạc chỗ trong câu.",
        usageTip: "Dùng khi muốn nói lời cảm ơn lịch sự, ấm áp với khách trước khi họ ra về.",
      },
      {
        id: "st-47-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "Take care, and I hope to see you again soon.",
        vietnamese: "Giữ gìn sức khỏe nha, tôi hy vọng sẽ sớm gặp lại bạn.",
        promptContext: "Chloe muốn nói một câu chào tạm biệt ấm áp, thể hiện sự mong chờ gặp lại khách.",
        choices: [
          { id: "a", text: "Take care, and I hope to see you again soon." },
          { id: "b", text: "Take care, and I hope see you again soon." },
          { id: "c", text: "Take care, and I hope to seeing you again soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'hope to' phải dùng động từ nguyên mẫu, nên 'see' là đúng — câu này đúng ngữ pháp và rất tự nhiên khi chào tạm biệt.",
        wrongAnswerExplanations:
          "'Take care, and I hope see you again soon.' sai vì thiếu chữ 'to' sau 'hope'. 'Take care, and I hope to seeing you again soon.' sai vì sau 'to' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi chào tạm biệt khách một cách ấm áp và thể hiện mong muốn gặp lại.",
      },
    ],
  },
  {
    id: "st-48",
    slug: "st-48-ket-thuc-3",
    topicId: "small-talk",
    title: "Xin lỗi vì phải tạm dừng trò chuyện",
    description: "Cách xin lỗi nhẹ nhàng khi cần tạm dừng trò chuyện để tập trung làm việc.",
    level: "situation",
    section: "NÂNG CAO HƠN MỘT CHÚT",
    questions: [
      {
        id: "st-48-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🤫",
        english: "Sorry, I need to focus on this part for a second.",
        vietnamese: "Xin lỗi, tôi cần tập trung phần này một chút.",
        prompt: "So then what happened next?",
        promptVietnamese: "Vậy rồi chuyện gì xảy ra tiếp theo?",
        choices: [
          { id: "a", text: "Sorry, I need to focus on this part for a second." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi cần tập trung vào một chi tiết khó trong lúc làm nails, mình xin lỗi nhẹ nhàng và xin khách chờ một chút.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến việc xin tạm dừng trò chuyện. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi cần tạm dừng trò chuyện để tập trung vào một chi tiết khó trong lúc làm việc.",
      },
      {
        id: "st-48-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🎯",
        english: "Give me just a moment to finish this line.",
        vietnamese: "Cho tôi một chút để hoàn thành đường vẽ này.",
        promptContext:
          "Chị đang vẽ một chi tiết nail art khó, và muốn xin khách một chút thời gian yên tĩnh để hoàn thành.",
        choices: [
          { id: "a", text: "Give me just a moment to finish this line." },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi cần tập trung vào một chi tiết khó, mình xin khách một chút thời gian yên tĩnh để hoàn thành tốt.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, chưa hợp lúc xin tạm dừng trò chuyện. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi cần một chút thời gian yên tĩnh để hoàn thành một chi tiết khó.",
      },
      {
        id: "st-48-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🎨",
        english: "This part needs a steady hand, one second.",
        vietnamese: "Phần này cần tay chắc, chờ một chút nha.",
        choices: [
          { id: "a", text: "Phần này cần tay chắc, chờ một chút nha." },
          { id: "b", text: "Phần này đã xong hoàn toàn rồi." },
          { id: "c", text: "Tôi không cần tập trung vào phần này." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giải thích rằng phần đang làm cần sự tập trung và tay chắc, xin khách chờ một chút.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi cần giải thích cho khách vì sao mình cần im lặng tập trung một chút.",
      },
      {
        id: "st-48-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "No worries, take all the time you need.",
        vietnamese: "Không sao đâu, bạn cứ làm cho kỹ.",
        prompt: "This part needs a steady hand, one second.",
        promptVietnamese: "Phần này cần tay chắc, chờ một chút nha.",
        choices: [
          { id: "a", text: "No worries, take all the time you need." },
          { id: "b", text: "We take walk-ins every day." },
          { id: "c", text: "This gel color dries fast." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được xin chờ để tập trung, khách trấn an rằng không sao và cứ làm cho kỹ, không cần vội.",
        wrongAnswerExplanations:
          "'We take walk-ins every day.' nói về việc nhận khách không hẹn, không liên quan đến việc xin chờ. 'This gel color dries fast.' nói về sơn gel khô nhanh, hoàn toàn lạc đề.",
        usageTip: "Dùng khi trấn an ai đó rằng không cần vội và cứ làm cho kỹ.",
      },
      {
        id: "st-48-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🖌️",
        english: "Okay, all done! Sorry about that.",
        vietnamese: "Được rồi, xong rồi! Xin lỗi vì lúc đó nha.",
        prompt: "Okay, all done! Sorry ___ that.",
        choices: [
          { id: "a", text: "about" },
          { id: "b", text: "for" },
          { id: "c", text: "of" },
        ],
        correctAnswer: "a",
        explanation:
          "'Sorry about that' là cụm cố định nghĩa là 'xin lỗi về điều đó' — dùng 'about' là đúng và tự nhiên nhất.",
        wrongAnswerExplanations:
          "'Sorry for that' cũng có thể nghe được nhưng không tự nhiên bằng 'sorry about that' trong ngữ cảnh xin lỗi vì đã im lặng. 'Sorry of that' không phải cách nói đúng trong tiếng Anh.",
        usageTip: "Dùng khi xin lỗi nhẹ nhàng sau khi đã tạm dừng trò chuyện để tập trung làm việc.",
      },
      {
        id: "st-48-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "👌",
        english: "It's totally fine, I understand you were focused.",
        vietnamese: "Không sao cả, tôi hiểu bạn đang tập trung.",
        promptContext:
          "Chị vừa xin lỗi vì đã im lặng một chút để tập trung vẽ, và khách muốn trấn an rằng không có gì phải lo lắng.",
        choices: [
          { id: "a", text: "It's totally fine, I understand you were focused." },
          { id: "b", text: "The nail file is on the table." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nhận được lời xin lỗi, khách trấn an rằng không có gì phải lo và hiểu được lý do vì sao mình cần tập trung.",
        wrongAnswerExplanations:
          "'The nail file is on the table.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi trấn an ai đó rằng mình hoàn toàn hiểu và không phiền vì họ cần tập trung.",
      },
      {
        id: "st-48-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "I just want to make sure it looks perfect.",
        vietnamese: "Tôi chỉ muốn chắc chắn nó thật hoàn hảo.",
        audioText: "I just want to make sure it looks perfect.",
        choices: [
          { id: "a", text: "Tôi chỉ muốn chắc chắn nó thật hoàn hảo." },
          { id: "b", text: "Tôi không quan tâm nó đẹp hay không." },
          { id: "c", text: "Tôi sẽ làm nhanh cho xong." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giải thích rằng mình dành thời gian tập trung vì muốn kết quả thật hoàn hảo cho khách.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi giải thích rằng mình dành thời gian tập trung vì muốn kết quả tốt nhất.",
      },
      {
        id: "st-48-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🥰",
        english: "I really appreciate that about you.",
        vietnamese: "Tôi thật sự trân trọng điều đó ở bạn.",
        prompt: "I just want to make sure it looks perfect.",
        promptVietnamese: "Tôi chỉ muốn chắc chắn nó thật hoàn hảo.",
        choices: [
          { id: "a", text: "I really appreciate that about you." },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về sự tận tâm trong công việc, khách thể hiện sự trân trọng đối với thái độ làm việc chăm chút đó.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến câu chuyện về sự tận tâm. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi trân trọng sự tận tâm, chăm chút trong công việc của ai đó.",
      },
      {
        id: "st-48-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "💎",
        english: "Your nails are always my top priority.",
        vietnamese: "Móng của bạn luôn là điều tôi quan tâm hàng đầu.",
        promptContext: "Chloe muốn nói với khách rằng chất lượng công việc luôn là điều mình đặt lên hàng đầu.",
        choices: [
          { id: "a", text: "Your nails are always my top priority." },
          { id: "b", text: "Your nails is always my top priority." },
          { id: "c", text: "Your nails are always my top priorities." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'your nails' là số nhiều nên động từ phải chia là 'are', và 'priority' ở dạng số ít vì chỉ có một điều ưu tiên hàng đầu.",
        wrongAnswerExplanations:
          "'Your nails is always my top priority.' sai vì chủ ngữ số nhiều phải đi với 'are', không dùng 'is'. 'Your nails are always my top priorities.' sai vì 'top priority' thường dùng số ít khi nói về một điều ưu tiên nhất.",
        usageTip: "Dùng khi muốn khẳng định với khách rằng chất lượng dịch vụ luôn được đặt lên hàng đầu.",
      },
      {
        id: "st-48-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "Good work takes a little patience sometimes.",
        vietnamese: "Công việc tốt đôi khi cần một chút kiên nhẫn.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về việc làm việc chất lượng đôi khi cần thời gian và sự kiên nhẫn.",
        choices: [
          { id: "a", text: "Good work takes a little patience sometimes." },
          { id: "b", text: "Good work take a little patience sometimes." },
          { id: "c", text: "Good work takes a little patiences sometimes." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'good work' là số ít nên động từ phải chia là 'takes', và 'patience' là danh từ không đếm được nên không thêm 's'.",
        wrongAnswerExplanations:
          "'Good work take a little patience sometimes.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít. 'Good work takes a little patiences sometimes.' sai vì 'patience' là danh từ không đếm được, không thêm 's'.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa về việc làm việc chất lượng cần thời gian và kiên nhẫn.",
      },
    ],
  },
  {
    id: "st-49",
    slug: "st-49-ket-thuc-4",
    topicId: "small-talk",
    title: "Nói lời cảm ơn khách vì đã trò chuyện",
    description: "Cách nói lời cảm ơn khách vì một buổi trò chuyện vui vẻ.",
    level: "situation",
    section: "NÂNG CAO HƠN MỘT CHÚT",
    questions: [
      {
        id: "st-49-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "Thank you for such a fun conversation today.",
        vietnamese: "Cảm ơn bạn vì cuộc trò chuyện vui vẻ hôm nay.",
        prompt: "I really enjoyed talking with you today.",
        promptVietnamese: "Tôi thật sự thích trò chuyện với bạn hôm nay.",
        choices: [
          { id: "a", text: "Thank you for such a fun conversation today." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nói thích cuộc trò chuyện, mình cảm ơn lại và thể hiện rằng mình cũng thấy vui vì cuộc trò chuyện đó.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến lời cảm ơn về cuộc trò chuyện. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách nói thích cuộc trò chuyện và mình muốn cảm ơn lại.",
      },
      {
        id: "st-49-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🙏",
        english: "I always look forward to chatting with you.",
        vietnamese: "Tôi luôn mong được trò chuyện với bạn.",
        promptContext:
          "Buổi làm nails đã kết thúc, và khách muốn nói với chị rằng mình luôn thích những cuộc trò chuyện với chị.",
        choices: [
          { id: "a", text: "I always look forward to chatting with you." },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi buổi làm nails kết thúc, khách có thể chia sẻ rằng mình luôn thích những cuộc trò chuyện với chị, một lời khen chân thành.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, chưa hợp lúc nhận lời khen này. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi nhận được lời khen về những cuộc trò chuyện thân thiện của mình.",
      },
      {
        id: "st-49-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "😊",
        english: "That means a lot, thank you for saying that.",
        vietnamese: "Điều đó có ý nghĩa nhiều lắm, cảm ơn bạn đã nói vậy.",
        choices: [
          { id: "a", text: "Điều đó có ý nghĩa nhiều lắm, cảm ơn bạn đã nói vậy." },
          { id: "b", text: "Tôi không thích trò chuyện với khách." },
          { id: "c", text: "Điều đó không quan trọng với tôi." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện sự cảm ơn chân thành khi nhận được lời khen ý nghĩa từ khách.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa tiêu cực hoặc ngược lại, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi nhận được một lời khen ý nghĩa và muốn cảm ơn chân thành.",
      },
      {
        id: "st-49-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🥰",
        english: "You always make my visits so much better.",
        vietnamese: "Bạn luôn làm những lần tôi đến đây tốt hơn nhiều.",
        prompt: "That means a lot, thank you for saying that.",
        promptVietnamese: "Điều đó có ý nghĩa nhiều lắm, cảm ơn bạn đã nói vậy.",
        choices: [
          { id: "a", text: "You always make my visits so much better." },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được cảm ơn, khách chia sẻ thêm rằng chị luôn làm những lần khách đến tiệm trở nên vui vẻ hơn.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' hoàn toàn không liên quan đến câu chuyện về sự trân trọng này. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi chia sẻ thêm về việc ai đó luôn làm mình cảm thấy vui vẻ hơn.",
      },
      {
        id: "st-49-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "💛",
        english: "I really enjoy getting to know my customers.",
        vietnamese: "Tôi thật sự thích được tìm hiểu về khách hàng của mình.",
        prompt: "I really enjoy getting to know my ___.",
        choices: [
          { id: "a", text: "customers" },
          { id: "b", text: "customer" },
          { id: "c", text: "customer's" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nói chung về khách hàng của mình, dùng số nhiều 'customers' là đúng và tự nhiên nhất.",
        wrongAnswerExplanations:
          "'Customer' số ít không phù hợp khi nói chung về nhiều khách hàng. 'Customer's' là dạng sở hữu cách, hoàn toàn không phù hợp trong câu này.",
        usageTip: "Dùng khi chia sẻ rằng mình thích được tìm hiểu và trò chuyện với khách hàng.",
      },
      {
        id: "st-49-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "💫",
        english: "You're really good at making people feel comfortable.",
        vietnamese: "Bạn giỏi làm người khác cảm thấy thoải mái lắm.",
        promptContext:
          "Khách vừa trải qua một buổi làm nails vui vẻ, thoải mái, và muốn khen chị vì kỹ năng giao tiếp tốt.",
        choices: [
          { id: "a", text: "You're really good at making people feel comfortable." },
          { id: "b", text: "The nail dryer is broken today." },
          { id: "c", text: "We need to close early tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách khen chị vì khả năng làm cho khách cảm thấy thoải mái trong suốt buổi làm nails, một lời khen rất ý nghĩa.",
        wrongAnswerExplanations:
          "'The nail dryer is broken today.' nói về máy sấy móng bị hỏng, hoàn toàn không liên quan. 'We need to close early tonight.' nói về việc đóng cửa sớm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi khen ai đó vì khả năng làm người khác cảm thấy thoải mái.",
      },
      {
        id: "st-49-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "That's such a kind thing to say, thank you.",
        vietnamese: "Bạn nói câu đó tốt bụng quá, cảm ơn bạn.",
        audioText: "That's such a kind thing to say, thank you.",
        choices: [
          { id: "a", text: "Bạn nói câu đó tốt bụng quá, cảm ơn bạn." },
          { id: "b", text: "Tôi không đồng ý với điều đó." },
          { id: "c", text: "Bạn không cần phải nói vậy." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện sự cảm ơn chân thành khi nhận được một lời khen tốt bụng từ khách.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa khác, không đúng với ý nghĩa cảm ơn chân thành trong câu nghe.",
        usageTip: "Dùng khi nhận được một lời khen tốt bụng và muốn cảm ơn chân thành.",
      },
      {
        id: "st-49-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😄",
        english: "I mean every word of it, honestly.",
        vietnamese: "Tôi nói thật lòng đấy, không đùa đâu.",
        prompt: "That's such a kind thing to say, thank you.",
        promptVietnamese: "Bạn nói câu đó tốt bụng quá, cảm ơn bạn.",
        choices: [
          { id: "a", text: "I mean every word of it, honestly." },
          { id: "b", text: "We changed our shop hours today." },
          { id: "c", text: "Your total comes to fifteen dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được cảm ơn vì lời khen, khách khẳng định lại rằng mình nói thật lòng, không phải chỉ nói cho vui.",
        wrongAnswerExplanations:
          "'We changed our shop hours today.' hoàn toàn không liên quan đến câu chuyện về lời khen. 'Your total comes to fifteen dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi khẳng định rằng một lời khen mình vừa nói là hoàn toàn chân thật.",
      },
      {
        id: "st-49-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌸",
        english: "Conversations like this make my day so much brighter.",
        vietnamese: "Những cuộc trò chuyện như vậy làm ngày của tôi tươi sáng hơn nhiều.",
        promptContext: "Chloe muốn chia sẻ rằng những cuộc trò chuyện vui vẻ với khách luôn làm ngày làm việc của mình tốt hơn.",
        choices: [
          { id: "a", text: "Conversations like this make my day so much brighter." },
          { id: "b", text: "Conversations like this makes my day so much brighter." },
          { id: "c", text: "Conversations like this make my day so much bright." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'conversations' là số nhiều nên động từ phải là 'make', và 'brighter' là dạng so sánh hơn đúng của 'bright'.",
        wrongAnswerExplanations:
          "'Conversations like this makes my day so much brighter.' sai vì chủ ngữ số nhiều không được chia động từ thêm 's'. 'Conversations like this make my day so much bright.' sai vì phải dùng dạng so sánh 'brighter' sau 'so much', không dùng dạng gốc 'bright'.",
        usageTip: "Dùng khi chia sẻ cảm xúc tích cực về việc những cuộc trò chuyện vui làm ngày làm việc tốt hơn.",
      },
      {
        id: "st-49-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "The best part of this job is the people I meet.",
        vietnamese: "Phần tốt nhất của công việc này là những người tôi được gặp.",
        promptContext: "Chloe muốn chia sẻ rằng điều tuyệt vời nhất trong công việc của mình là được gặp gỡ nhiều người khác nhau.",
        choices: [
          { id: "a", text: "The best part of this job is the people I meet." },
          { id: "b", text: "The best part of this job are the people I meet." },
          { id: "c", text: "The best part of this job is the people I meets." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ chính 'the best part' là số ít nên động từ phải chia là 'is', và 'I meet' đúng vì chủ ngữ 'I' không thêm 's'.",
        wrongAnswerExplanations:
          "'The best part of this job are the people I meet.' sai vì chủ ngữ chính số ít 'the best part' phải đi với 'is', không dùng 'are'. 'The best part of this job is the people I meets.' sai vì chủ ngữ 'I' không được chia động từ thêm 's'.",
        usageTip: "Dùng khi chia sẻ một suy nghĩ ý nghĩa về việc yêu thích công việc vì được gặp gỡ nhiều người.",
      },
    ],
  },
  {
    id: "st-50",
    slug: "st-50-ket-thuc-5",
    topicId: "small-talk",
    title: "Chào tạm biệt và hẹn gặp lại lần sau",
    description: "Những câu chào tạm biệt tự nhiên và hẹn gặp lại khách ở lần sau.",
    level: "situation",
    section: "NÂNG CAO HƠN MỘT CHÚT",
    questions: [
      {
        id: "st-50-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👋",
        english: "Bye! Thanks so much, see you soon.",
        vietnamese: "Chào bạn! Cảm ơn nhiều, hẹn gặp lại sớm.",
        prompt: "Alright, I'm heading out now.",
        promptVietnamese: "Được rồi, tôi đi đây.",
        choices: [
          { id: "a", text: "Bye! Thanks so much, see you soon." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nói mình sắp rời khỏi tiệm, mình chào tạm biệt vui vẻ và hẹn gặp lại sớm.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không phải cách chào tạm biệt tự nhiên. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách chuẩn bị rời khỏi tiệm và mình muốn chào tạm biệt.",
      },
      {
        id: "st-50-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🚶",
        english: "Have a great rest of your day, see you next time!",
        vietnamese: "Chúc bạn một ngày tốt lành, hẹn gặp lại lần sau!",
        promptContext:
          "Khách đã làm nails xong và đang chuẩn bị bước ra khỏi tiệm, chị muốn nói một câu chào tạm biệt ấm áp.",
        choices: [
          { id: "a", text: "Have a great rest of your day, see you next time!" },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách chuẩn bị ra về, mình chào tạm biệt bằng lời chúc ngày tốt lành và hẹn gặp lại lần sau.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, chưa hợp lúc chào tạm biệt. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách chuẩn bị ra về và mình muốn chào tạm biệt một cách ấm áp.",
      },
      {
        id: "st-50-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🙂",
        english: "It was great seeing you today, take care!",
        vietnamese: "Hôm nay gặp bạn thật vui, giữ gìn sức khỏe nha!",
        choices: [
          { id: "a", text: "Hôm nay gặp bạn thật vui, giữ gìn sức khỏe nha!" },
          { id: "b", text: "Hôm nay tiệm chúng tôi rất đông." },
          { id: "c", text: "Bạn cần đặt hẹn cho lần sau." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này là lời chào tạm biệt ấm áp, nói rằng gặp khách hôm nay rất vui và chúc khách giữ gìn sức khỏe.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc tiệm đông khách hoặc cần đặt hẹn — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chào tạm biệt khách sau một buổi làm nails vui vẻ.",
      },
      {
        id: "st-50-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "You too! Thanks for everything today.",
        vietnamese: "Bạn cũng vậy! Cảm ơn về mọi thứ hôm nay.",
        prompt: "It was great seeing you today, take care!",
        promptVietnamese: "Hôm nay gặp bạn thật vui, giữ gìn sức khỏe nha!",
        choices: [
          { id: "a", text: "You too! Thanks for everything today." },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được chúc giữ gìn sức khỏe, khách đáp lại vui vẻ và cảm ơn về toàn bộ buổi làm nails hôm nay.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' hoàn toàn không liên quan đến lời chào tạm biệt. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đáp lại lời chào tạm biệt và cảm ơn về buổi làm nails.",
      },
      {
        id: "st-50-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "👋",
        english: "Take care, and see you around!",
        vietnamese: "Giữ gìn sức khỏe nha, hẹn gặp lại!",
        prompt: "Take care, and see you ___!",
        choices: [
          { id: "a", text: "around" },
          { id: "b", text: "there" },
          { id: "c", text: "here" },
        ],
        correctAnswer: "a",
        explanation:
          "'See you around' là cách nói thân mật nghĩa là 'hẹn gặp lại đâu đó' — dùng 'around' là đúng và tự nhiên nhất.",
        wrongAnswerExplanations:
          "'See you there' mang nghĩa hẹn gặp ở một nơi cụ thể, không phù hợp trong ngữ cảnh chào tạm biệt chung này. 'See you here' cũng không phải cách nói tự nhiên trong cụm chào tạm biệt này.",
        usageTip: "Dùng khi chào tạm biệt ai đó một cách thân mật, không hẹn cụ thể thời gian hay nơi gặp lại.",
      },
      {
        id: "st-50-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "💐",
        english: "I'll definitely book with you again next time.",
        vietnamese: "Lần sau tôi chắc chắn sẽ đặt hẹn với bạn nữa.",
        promptContext:
          "Khách rất hài lòng với buổi làm nails hôm nay, và muốn nói rằng lần sau sẽ chắc chắn đặt hẹn với chị.",
        choices: [
          { id: "a", text: "I'll definitely book with you again next time." },
          { id: "b", text: "The nail file is on the table." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi hài lòng với dịch vụ, khách nói rằng lần sau sẽ chắc chắn đặt hẹn lại với người thợ đã làm cho mình.",
        wrongAnswerExplanations:
          "'The nail file is on the table.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi khách hài lòng và muốn nói rằng sẽ đặt hẹn lại lần sau.",
      },
      {
        id: "st-50-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "I would love that, just ask for me next time.",
        vietnamese: "Tôi rất mong điều đó, lần sau cứ hỏi tôi nha.",
        audioText: "I would love that, just ask for me next time.",
        choices: [
          { id: "a", text: "Tôi rất mong điều đó, lần sau cứ hỏi tôi nha." },
          { id: "b", text: "Tôi sẽ không làm việc ở đây nữa." },
          { id: "c", text: "Lần sau bạn nên tìm thợ khác." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện sự vui mừng khi khách muốn đặt hẹn lại, và mời khách cứ hỏi tên mình vào lần sau.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi vui mừng vì khách muốn đặt hẹn lại và muốn khách nhớ tên mình cho lần sau.",
      },
      {
        id: "st-50-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😄",
        english: "I definitely will, I won't forget your name!",
        vietnamese: "Chắc chắn rồi, tôi sẽ không quên tên bạn đâu!",
        prompt: "I would love that, just ask for me next time.",
        promptVietnamese: "Tôi rất mong điều đó, lần sau cứ hỏi tôi nha.",
        choices: [
          { id: "a", text: "I definitely will, I won't forget your name!" },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được nhắc nhớ tên để đặt hẹn lần sau, khách khẳng định vui vẻ rằng sẽ không quên tên người thợ.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến câu chuyện về việc đặt hẹn lại. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi khẳng định vui vẻ rằng mình sẽ nhớ tên ai đó cho lần gặp sau.",
      },
      {
        id: "st-50-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "💫",
        english: "I can't wait to see you again next time.",
        vietnamese: "Tôi mong được gặp lại bạn vào lần sau.",
        promptContext: "Chloe muốn nói lời chào tạm biệt ấm áp, thể hiện sự mong chờ được gặp lại khách vào lần tới.",
        choices: [
          { id: "a", text: "I can't wait to see you again next time." },
          { id: "b", text: "I can't wait see you again next time." },
          { id: "c", text: "I can't wait to seeing you again next time." },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc 'can't wait to + động từ nguyên mẫu' là đúng, nghĩa là mong chờ điều gì xảy ra, ở đây là gặp lại khách.",
        wrongAnswerExplanations:
          "'I can't wait see you again next time.' thiếu chữ 'to' trước động từ 'see'. 'I can't wait to seeing you again next time.' sai vì sau 'to' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi chào tạm biệt khách và thể hiện sự mong chờ được gặp lại vào lần sau.",
      },
      {
        id: "st-50-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "Every goodbye is just a see-you-later.",
        vietnamese: "Mỗi lời tạm biệt chỉ là một lời hẹn gặp lại.",
        promptContext: "Chloe muốn nói một câu ý nghĩa, ấm áp để kết thúc buổi trò chuyện và chào tạm biệt khách.",
        choices: [
          { id: "a", text: "Every goodbye is just a see-you-later." },
          { id: "b", text: "Every goodbye are just a see-you-later." },
          { id: "c", text: "Every goodbyes is just a see-you-later." },
        ],
        correctAnswer: "a",
        explanation:
          "'Every' luôn đi với danh từ số ít 'goodbye' và động từ số ít 'is' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Every goodbye are just a see-you-later.' sai vì chủ ngữ số ít phải đi với 'is', không dùng 'are'. 'Every goodbyes is just a see-you-later.' sai vì 'every' luôn đi với danh từ số ít 'goodbye', không phải 'goodbyes'.",
        usageTip: "Dùng khi muốn chào tạm biệt khách bằng một câu ấm áp và ý nghĩa, thể hiện sẽ còn gặp lại.",
      },
    ],
  },
];
