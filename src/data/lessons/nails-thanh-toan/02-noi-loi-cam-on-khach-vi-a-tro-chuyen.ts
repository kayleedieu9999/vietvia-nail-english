import { Lesson } from "@/types/content";

/** nails-thanh-toan — migrated group 2 (lessons 6-10 of existing content). */
export const nailsThanhToanGroup02: Lesson[] = [
{
    id: "st-49",
    slug: "st-49-ket-thuc-4",
    topicId: "nails-thanh-toan",
    title: "Nói lời cảm ơn khách vì đã trò chuyện",
    description: "Cách nói lời cảm ơn khách vì một buổi trò chuyện vui vẻ.",
    level: "situation",
    coverImage: "/images/lessons/st-49-ket-thuc-4.jpg",
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
    topicId: "nails-thanh-toan",
    title: "Chào tạm biệt và hẹn gặp lại lần sau",
    description: "Những câu chào tạm biệt tự nhiên và hẹn gặp lại khách ở lần sau.",
    level: "situation",
    coverImage: "/images/lessons/st-50-ket-thuc-5.jpg",
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
