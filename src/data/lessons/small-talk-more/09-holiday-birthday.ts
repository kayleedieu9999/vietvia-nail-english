import { Lesson } from "@/types/content";

/**
 * Small Talk — subtopic group 9: Holiday / birthday / plans (lessons 41-45).
 */
export const smallTalkGroup09: Lesson[] = [
  {
    id: "st-41",
    slug: "st-41-holiday-birthday-1",
    topicId: "small-talk",
    title: "Hỏi khách về dịp lễ sắp tới",
    description: "Cách hỏi khách xem họ có kế hoạch gì cho dịp lễ sắp tới không.",
    level: "situation",
    section: "NÂNG CAO HƠN MỘT CHÚT",
    questions: [
      {
        id: "st-41-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎉",
        english: "We're hosting a big dinner this year.",
        vietnamese: "Năm nay gia đình tôi sẽ tổ chức một buổi tối lớn.",
        prompt: "Any special plans for the holiday?",
        promptVietnamese: "Dịp lễ này bạn có kế hoạch gì đặc biệt không?",
        choices: [
          { id: "a", text: "We're hosting a big dinner this year." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi về kế hoạch dịp lễ, mình chia sẻ cụ thể, ví dụ tổ chức một buổi tối lớn cho gia đình.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về dịp lễ. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi về kế hoạch của mình cho dịp lễ sắp tới.",
      },
      {
        id: "st-41-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🎄",
        english: "Are you doing anything special for the holidays this year?",
        vietnamese: "Dịp lễ năm nay bạn có làm gì đặc biệt không?",
        promptContext:
          "Khách muốn hỏi thăm chị xem có kế hoạch gì đặc biệt cho dịp lễ sắp tới, một câu hỏi small talk rất phổ biến vào cuối năm.",
        choices: [
          { id: "a", text: "Are you doing anything special for the holidays this year?" },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách hỏi thăm về kế hoạch dịp lễ năm nay, một câu hỏi rất phổ biến vào những tháng cuối năm.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến câu hỏi về dịp lễ. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi ai đó về kế hoạch của họ cho dịp lễ sắp tới.",
      },
      {
        id: "st-41-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🎁",
        english: "We usually just stay home and relax during the holidays.",
        vietnamese: "Chúng tôi thường chỉ ở nhà nghỉ ngơi vào dịp lễ.",
        choices: [
          { id: "a", text: "Chúng tôi thường chỉ ở nhà nghỉ ngơi vào dịp lễ." },
          { id: "b", text: "Chúng tôi phải đi làm suốt dịp lễ." },
          { id: "c", text: "Chúng tôi luôn đi du lịch xa vào dịp lễ." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng gia đình mình thường chọn ở nhà nghỉ ngơi vào dịp lễ thay vì đi đâu xa — một cách trò chuyện đơn giản và chân thật.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ rằng mình thường chọn ở nhà thư giãn vào dịp lễ.",
      },
      {
        id: "st-41-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😌",
        english: "That sounds like such a calm way to spend it.",
        vietnamese: "Nghe có vẻ là cách nghỉ lễ rất bình yên.",
        prompt: "We usually just stay home and relax during the holidays.",
        promptVietnamese: "Chúng tôi thường chỉ ở nhà nghỉ ngơi vào dịp lễ.",
        choices: [
          { id: "a", text: "That sounds like such a calm way to spend it." },
          { id: "b", text: "We take walk-ins every day." },
          { id: "c", text: "This gel color dries fast." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về kế hoạch nghỉ ngơi ở nhà vào dịp lễ, khách nhận xét rằng nghe có vẻ là một cách nghỉ lễ rất bình yên.",
        wrongAnswerExplanations:
          "'We take walk-ins every day.' nói về việc nhận khách không hẹn, không liên quan đến câu chuyện về dịp lễ. 'This gel color dries fast.' nói về sơn gel khô nhanh, hoàn toàn lạc đề.",
        usageTip: "Dùng khi nhận xét rằng một kế hoạch nghỉ ngơi đơn giản nghe có vẻ rất thư giãn.",
      },
      {
        id: "st-41-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🍗",
        english: "We always have a big meal on the holiday.",
        vietnamese: "Chúng tôi luôn có một bữa ăn lớn vào dịp lễ.",
        prompt: "We always have a big ___ on the holiday.",
        choices: [
          { id: "a", text: "meal" },
          { id: "b", text: "meals" },
          { id: "c", text: "eating" },
        ],
        correctAnswer: "a",
        explanation:
          "'A big meal' là cụm từ đúng nghĩa là 'một bữa ăn lớn' — dùng số ít 'meal' vì đi sau mạo từ 'a'.",
        wrongAnswerExplanations:
          "'Meals' sai vì không thể dùng số nhiều sau mạo từ số ít 'a'. 'Eating' là danh động từ, không phù hợp về nghĩa trong câu này.",
        usageTip: "Dùng khi chia sẻ về truyền thống có một bữa ăn lớn vào dịp lễ trong gia đình.",
      },
      {
        id: "st-41-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🕯️",
        english: "This holiday is always about family for us.",
        vietnamese: "Dịp lễ này luôn là về gia đình đối với chúng tôi.",
        promptContext:
          "Khách chia sẻ với chị rằng đối với gia đình khách, ý nghĩa lớn nhất của dịp lễ này là được ở cùng gia đình.",
        choices: [
          { id: "a", text: "This holiday is always about family for us." },
          { id: "b", text: "The nail file is on the table." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách chia sẻ về ý nghĩa của dịp lễ đối với gia đình mình, một câu chuyện ấm áp và ý nghĩa.",
        wrongAnswerExplanations:
          "'The nail file is on the table.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ ý nghĩa của một dịp lễ đối với gia đình mình.",
      },
      {
        id: "st-41-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "I feel the exact same way about it.",
        vietnamese: "Tôi cũng cảm thấy y như vậy về điều đó.",
        audioText: "I feel the exact same way about it.",
        choices: [
          { id: "a", text: "Tôi cũng cảm thấy y như vậy về điều đó." },
          { id: "b", text: "Tôi không đồng ý với điều đó." },
          { id: "c", text: "Tôi không quan tâm đến dịp lễ này." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện sự đồng cảm hoàn toàn với ý kiến của khách về ý nghĩa của dịp lễ.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoặc không liên quan đến ý nghĩa đồng cảm trong câu nghe.",
        usageTip: "Dùng khi muốn thể hiện sự đồng cảm hoàn toàn với ý kiến của ai đó.",
      },
      {
        id: "st-41-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🥰",
        english: "It's nice knowing we feel the same way.",
        vietnamese: "Vui vì biết chúng ta cùng cảm nhận như vậy.",
        prompt: "I feel the exact same way about it.",
        promptVietnamese: "Tôi cũng cảm thấy y như vậy về điều đó.",
        choices: [
          { id: "a", text: "It's nice knowing we feel the same way." },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi biết hai người có cùng suy nghĩ, khách vui vẻ nhận xét rằng điều đó tạo cảm giác gần gũi hơn.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến câu chuyện về dịp lễ. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi vui vẻ nhận ra mình có cùng suy nghĩ với ai đó trong cuộc trò chuyện.",
      },
      {
        id: "st-41-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🎊",
        english: "I hope your holiday is full of good memories.",
        vietnamese: "Tôi hy vọng dịp lễ của bạn tràn đầy những kỷ niệm đẹp.",
        promptContext: "Chloe muốn chúc khách một dịp lễ tràn đầy những kỷ niệm đẹp cùng gia đình.",
        choices: [
          { id: "a", text: "I hope your holiday is full of good memories." },
          { id: "b", text: "I hope your holiday are full of good memories." },
          { id: "c", text: "I hope your holiday is full good of memories." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'your holiday' là số ít nên động từ phải chia là 'is' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'I hope your holiday are full of good memories.' sai vì chủ ngữ số ít phải đi với 'is', không dùng 'are'. 'I hope your holiday is full good of memories.' sai vì đặt sai thứ tự 'good' và 'of' trong cụm 'full of good memories'.",
        usageTip: "Dùng để chúc ai đó một dịp lễ tràn đầy kỷ niệm đẹp cùng gia đình.",
      },
      {
        id: "st-41-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "✨",
        english: "The holidays always fly by faster than expected.",
        vietnamese: "Dịp lễ lúc nào cũng trôi qua nhanh hơn mong đợi.",
        promptContext: "Chloe muốn nói rằng dịp lễ luôn có cảm giác trôi qua rất nhanh, nhanh hơn mình nghĩ.",
        choices: [
          { id: "a", text: "The holidays always fly by faster than expected." },
          { id: "b", text: "The holidays always flies by faster than expected." },
          { id: "c", text: "The holidays always fly by fast than expected." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'the holidays' là số nhiều nên động từ phải là 'fly', không thêm 's', và 'faster' là dạng so sánh hơn đúng của 'fast'.",
        wrongAnswerExplanations:
          "'The holidays always flies by faster than expected.' sai vì chủ ngữ số nhiều không được chia động từ thêm 's'. 'The holidays always fly by fast than expected.' sai vì phải dùng dạng so sánh 'faster' trước 'than', không dùng dạng gốc 'fast'.",
        usageTip: "Dùng khi muốn nói rằng dịp lễ luôn trôi qua nhanh hơn mình mong đợi.",
      },
    ],
  },
  {
    id: "st-42",
    slug: "st-42-holiday-birthday-2",
    topicId: "small-talk",
    title: "Chúc mừng sinh nhật khách",
    description: "Cách chúc mừng sinh nhật khách một cách chân thành và tự nhiên.",
    level: "situation",
    section: "NÂNG CAO HƠN MỘT CHÚT",
    questions: [
      {
        id: "st-42-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎂",
        english: "Happy birthday! I hope you have a wonderful day.",
        vietnamese: "Chúc mừng sinh nhật! Tôi hy vọng bạn có một ngày tuyệt vời.",
        prompt: "Actually, today is my birthday!",
        promptVietnamese: "Thật ra hôm nay là sinh nhật tôi đó!",
        choices: [
          { id: "a", text: "Happy birthday! I hope you have a wonderful day." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nói hôm nay là sinh nhật, mình chúc mừng ngay và gửi lời chúc một ngày tốt lành.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến việc chúc mừng sinh nhật. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng ngay khi biết hôm nay là sinh nhật của khách.",
      },
      {
        id: "st-42-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🥳",
        english: "Are you doing anything special for your birthday?",
        vietnamese: "Sinh nhật này bạn có kế hoạch gì đặc biệt không?",
        promptContext:
          "Chị vừa biết hôm nay là sinh nhật của khách, và muốn hỏi thăm thêm về kế hoạch của họ cho ngày đặc biệt này.",
        choices: [
          { id: "a", text: "Are you doing anything special for your birthday?" },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi biết hôm nay là sinh nhật của khách, mình hỏi thăm thêm về kế hoạch của họ cho ngày đặc biệt này.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến câu hỏi về sinh nhật. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thăm về kế hoạch của khách cho ngày sinh nhật của họ.",
      },
      {
        id: "st-42-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🎈",
        english: "We're going out for dinner tonight to celebrate.",
        vietnamese: "Tối nay chúng tôi sẽ đi ăn tối để ăn mừng.",
        choices: [
          { id: "a", text: "Tối nay chúng tôi sẽ đi ăn tối để ăn mừng." },
          { id: "b", text: "Tối nay tôi sẽ ở nhà một mình." },
          { id: "c", text: "Tôi không muốn ăn mừng sinh nhật." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ kế hoạch cho sinh nhật, cụ thể là đi ăn tối cùng gia đình hoặc bạn bè để ăn mừng.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ kế hoạch ăn mừng sinh nhật của mình.",
      },
      {
        id: "st-42-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "That sounds like a great way to celebrate!",
        vietnamese: "Nghe có vẻ là cách ăn mừng tuyệt vời!",
        prompt: "We're going out for dinner tonight to celebrate.",
        promptVietnamese: "Tối nay chúng tôi sẽ đi ăn tối để ăn mừng.",
        choices: [
          { id: "a", text: "That sounds like a great way to celebrate!" },
          { id: "b", text: "We take walk-ins every day." },
          { id: "c", text: "This gel color dries fast." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về kế hoạch ăn mừng sinh nhật, khách nhận xét vui rằng đó là một cách ăn mừng tuyệt vời.",
        wrongAnswerExplanations:
          "'We take walk-ins every day.' nói về việc nhận khách không hẹn, không liên quan đến câu chuyện về sinh nhật. 'This gel color dries fast.' nói về sơn gel khô nhanh, hoàn toàn lạc đề.",
        usageTip: "Dùng khi nhận xét vui về một kế hoạch ăn mừng sinh nhật.",
      },
      {
        id: "st-42-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🎀",
        english: "I hope this year brings you so much happiness.",
        vietnamese: "Tôi hy vọng năm này sẽ mang lại cho bạn thật nhiều hạnh phúc.",
        prompt: "I hope this year brings you so much ___.",
        choices: [
          { id: "a", text: "happiness" },
          { id: "b", text: "happy" },
          { id: "c", text: "happily" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'so much' cần dùng danh từ, và 'happiness' nghĩa là 'hạnh phúc' là đúng nghĩa trong câu này.",
        wrongAnswerExplanations:
          "'Happy' là tính từ, không dùng được sau 'so much' theo cách này. 'Happily' là trạng từ, cũng không phù hợp ở vị trí danh từ này.",
        usageTip: "Dùng khi chúc ai đó một năm mới đầy hạnh phúc vào dịp sinh nhật.",
      },
      {
        id: "st-42-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🎁",
        english: "Thank you so much, that's really sweet of you.",
        vietnamese: "Cảm ơn bạn nhiều lắm, bạn thật tốt bụng.",
        promptContext:
          "Chị vừa gửi lời chúc sinh nhật ấm áp cho khách, và khách muốn cảm ơn vì lời chúc chân thành đó.",
        choices: [
          { id: "a", text: "Thank you so much, that's really sweet of you." },
          { id: "b", text: "The nail file is on the table." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nhận được lời chúc sinh nhật ấm áp, khách cảm ơn chân thành và khen sự tốt bụng của người chúc.",
        wrongAnswerExplanations:
          "'The nail file is on the table.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi cảm ơn ai đó vì một lời chúc sinh nhật ấm áp và chân thành.",
      },
      {
        id: "st-42-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "You deserve all the good things this year.",
        vietnamese: "Bạn đáng được nhận tất cả những điều tốt đẹp năm nay.",
        audioText: "You deserve all the good things this year.",
        choices: [
          { id: "a", text: "Bạn đáng được nhận tất cả những điều tốt đẹp năm nay." },
          { id: "b", text: "Năm nay sẽ khó khăn với bạn." },
          { id: "c", text: "Bạn không cần điều gì đặc biệt cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này gửi một lời chúc chân thành rằng khách đáng được nhận những điều tốt đẹp trong năm mới của mình.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa tiêu cực hoặc ngược lại, không đúng với ý nghĩa tích cực trong câu nghe.",
        usageTip: "Dùng khi gửi một lời chúc chân thành và tích cực cho ai đó vào dịp sinh nhật.",
      },
      {
        id: "st-42-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🥹",
        english: "That means so much to me, thank you.",
        vietnamese: "Điều đó có ý nghĩa nhiều với tôi lắm, cảm ơn bạn.",
        prompt: "You deserve all the good things this year.",
        promptVietnamese: "Bạn đáng được nhận tất cả những điều tốt đẹp năm nay.",
        choices: [
          { id: "a", text: "That means so much to me, thank you." },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nhận được lời chúc ý nghĩa, khách cảm ơn chân thành và chia sẻ rằng lời chúc đó có ý nghĩa lớn với họ.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến lời chúc sinh nhật. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi cảm ơn chân thành vì một lời chúc có ý nghĩa với mình.",
      },
      {
        id: "st-42-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🎉",
        english: "I hope this birthday is your best one yet.",
        vietnamese: "Tôi hy vọng sinh nhật này là sinh nhật tuyệt nhất của bạn từ trước đến nay.",
        promptContext: "Chloe muốn chúc khách rằng sinh nhật năm nay sẽ là sinh nhật tuyệt nhất mà khách từng có.",
        choices: [
          { id: "a", text: "I hope this birthday is your best one yet." },
          { id: "b", text: "I hope this birthday are your best one yet." },
          { id: "c", text: "I hope this birthday is your good one yet." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'this birthday' là số ít nên động từ phải chia là 'is', và 'best' là dạng so sánh nhất đúng của 'good'.",
        wrongAnswerExplanations:
          "'I hope this birthday are your best one yet.' sai vì chủ ngữ số ít phải đi với 'is', không dùng 'are'. 'I hope this birthday is your good one yet.' sai vì phải dùng dạng so sánh nhất 'best' khi có 'yet' đi kèm, không dùng dạng gốc 'good'.",
        usageTip: "Dùng để chúc ai đó có sinh nhật tuyệt vời nhất từ trước đến nay.",
      },
      {
        id: "st-42-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "Another year older means another year of great memories.",
        vietnamese: "Thêm một năm tuổi nghĩa là thêm một năm với những kỷ niệm tuyệt vời.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về việc mỗi năm sinh nhật là thêm một năm với nhiều kỷ niệm đẹp.",
        choices: [
          { id: "a", text: "Another year older means another year of great memories." },
          { id: "b", text: "Another year older mean another year of great memories." },
          { id: "c", text: "Another year older means another year great of memories." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'another year older' là số ít nên động từ phải chia là 'means' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Another year older mean another year of great memories.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít. 'Another year older means another year great of memories.' sai vì đặt sai thứ tự 'great' và 'of' trong cụm từ.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa vào dịp sinh nhật của ai đó.",
      },
    ],
  },
  {
    id: "st-43",
    slug: "st-43-holiday-birthday-3",
    topicId: "small-talk",
    title: "Nói về ngày lễ Tết truyền thống",
    description: "Cách chia sẻ về Tết hoặc các dịp lễ truyền thống của Việt Nam với khách.",
    level: "situation",
    section: "NÂNG CAO HƠN MỘT CHÚT",
    questions: [
      {
        id: "st-43-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🧧",
        english: "It's the Vietnamese New Year, a really important holiday.",
        vietnamese: "Đó là Tết Nguyên Đán của Việt Nam, một dịp lễ rất quan trọng.",
        prompt: "What is Tet exactly?",
        promptVietnamese: "Tết chính xác là gì vậy?",
        choices: [
          { id: "a", text: "It's the Vietnamese New Year, a really important holiday." },
          { id: "b", text: "It's twenty dollars for a manicure." },
          { id: "c", text: "We open at nine every day." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi Tết là gì, mình giải thích ngắn gọn rằng đó là Tết Nguyên Đán, dịp lễ quan trọng nhất của người Việt.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về Tết. 'We open at nine every day.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách tò mò và hỏi về ý nghĩa của ngày Tết Việt Nam.",
      },
      {
        id: "st-43-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🏮",
        english: "How do you usually celebrate Tet?",
        vietnamese: "Bạn thường ăn Tết như thế nào?",
        promptContext:
          "Khách tò mò về văn hóa Việt Nam và muốn hỏi chị cách gia đình mình thường tổ chức Tết.",
        choices: [
          { id: "a", text: "How do you usually celebrate Tet?" },
          { id: "b", text: "Your total comes to twenty dollars." },
          { id: "c", text: "We just got new nail colors in." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách tò mò và hỏi thêm về cách gia đình mình thường tổ chức Tết, một câu hỏi rất tự nhiên khi tìm hiểu văn hóa.",
        wrongAnswerExplanations:
          "'Your total comes to twenty dollars.' nói về giá tiền, không liên quan đến câu hỏi về Tết. 'We just got new nail colors in.' nói về màu sơn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách tò mò và muốn hỏi về cách tổ chức Tết truyền thống.",
      },
      {
        id: "st-43-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🍊",
        english: "We visit family and give red envelopes to kids.",
        vietnamese: "Chúng tôi đi thăm gia đình và lì xì cho trẻ con.",
        choices: [
          { id: "a", text: "Chúng tôi đi thăm gia đình và lì xì cho trẻ con." },
          { id: "b", text: "Chúng tôi không làm gì đặc biệt vào Tết." },
          { id: "c", text: "Chúng tôi phải đi làm suốt kỳ Tết." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giải thích một phong tục Tết quan trọng, đó là đi thăm gia đình và lì xì cho trẻ con — một nét đẹp văn hóa Việt Nam.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi giải thích cho khách về phong tục lì xì và thăm gia đình vào Tết.",
      },
      {
        id: "st-43-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "That's such a beautiful tradition!",
        vietnamese: "Đó là một truyền thống đẹp quá!",
        prompt: "We visit family and give red envelopes to kids.",
        promptVietnamese: "Chúng tôi đi thăm gia đình và lì xì cho trẻ con.",
        choices: [
          { id: "a", text: "That's such a beautiful tradition!" },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về phong tục lì xì, khách khen ngợi rằng đó là một truyền thống rất đẹp và ý nghĩa.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' hoàn toàn không liên quan đến câu chuyện về Tết. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi khen ngợi một truyền thống văn hóa đẹp mà ai đó chia sẻ.",
      },
      {
        id: "st-43-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🎆",
        english: "The color red is very important during Tet.",
        vietnamese: "Màu đỏ rất quan trọng trong dịp Tết.",
        prompt: "The color red is very ___ during Tet.",
        choices: [
          { id: "a", text: "important" },
          { id: "b", text: "importance" },
          { id: "c", text: "importantly" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'very' cần dùng tính từ, nên 'important' là đúng — câu này nghĩa là màu đỏ có ý nghĩa quan trọng trong dịp Tết.",
        wrongAnswerExplanations:
          "'Importance' là danh từ, không dùng được sau 'very' trong trường hợp này. 'Importantly' là trạng từ, không phù hợp để mô tả tính chất của màu đỏ ở đây.",
        usageTip: "Dùng khi giới thiệu với khách về ý nghĩa của màu đỏ trong dịp Tết Việt Nam.",
      },
      {
        id: "st-43-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🍜",
        english: "Do you make special food for the holiday?",
        vietnamese: "Bạn có làm món ăn đặc biệt cho dịp lễ này không?",
        promptContext:
          "Khách tò mò về ẩm thực ngày Tết và muốn hỏi chị có làm món ăn đặc biệt nào cho dịp này không.",
        choices: [
          { id: "a", text: "Do you make special food for the holiday?" },
          { id: "b", text: "Your nail polish just arrived today." },
          { id: "c", text: "We are open on holidays too." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách tò mò về ẩm thực ngày Tết và hỏi thêm về món ăn đặc biệt cho dịp này, một câu hỏi rất tự nhiên.",
        wrongAnswerExplanations:
          "'Your nail polish just arrived today.' nói về việc hàng mới về, không liên quan đến câu hỏi về Tết. 'We are open on holidays too.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi tò mò và muốn hỏi về món ăn đặc biệt trong một dịp lễ truyền thống.",
      },
      {
        id: "st-43-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "We make sticky rice cakes wrapped in banana leaves.",
        vietnamese: "Chúng tôi làm bánh chưng gói bằng lá chuối.",
        audioText: "We make sticky rice cakes wrapped in banana leaves.",
        choices: [
          { id: "a", text: "Chúng tôi làm bánh chưng gói bằng lá chuối." },
          { id: "b", text: "Chúng tôi không nấu ăn gì vào dịp lễ." },
          { id: "c", text: "Chúng tôi mua đồ ăn sẵn ở tiệm." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giới thiệu về bánh chưng, món ăn truyền thống của Tết Việt Nam làm bằng gạo nếp gói trong lá chuối.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoặc không đúng với nội dung của câu nghe.",
        usageTip: "Dùng khi giới thiệu cho khách về món bánh chưng truyền thống trong dịp Tết.",
      },
      {
        id: "st-43-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🤩",
        english: "That sounds so unique, I'd love to try it.",
        vietnamese: "Nghe độc đáo quá, tôi muốn thử món đó lắm.",
        prompt: "We make sticky rice cakes wrapped in banana leaves.",
        promptVietnamese: "Chúng tôi làm bánh chưng gói bằng lá chuối.",
        choices: [
          { id: "a", text: "That sounds so unique, I'd love to try it." },
          { id: "b", text: "We are out of that nail shape." },
          { id: "c", text: "Your color choice looks great." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về món ăn truyền thống độc đáo, khách thể hiện sự thích thú và mong muốn được thử.",
        wrongAnswerExplanations:
          "'We are out of that nail shape.' hoàn toàn không liên quan đến câu chuyện về món ăn. 'Your color choice looks great.' là lời khen về màu sơn, chưa hợp lúc này.",
        usageTip: "Dùng khi thể hiện sự thích thú và mong muốn được thử một món ăn truyền thống mới.",
      },
      {
        id: "st-43-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🎋",
        english: "I would love to bring you some next time.",
        vietnamese: "Lần sau tôi sẽ mang cho bạn một ít nha.",
        promptContext: "Chloe muốn hứa với khách rằng lần sau mình sẽ mang bánh chưng đến cho khách thử.",
        choices: [
          { id: "a", text: "I would love to bring you some next time." },
          { id: "b", text: "I would love bring you some next time." },
          { id: "c", text: "I would love to bringing you some next time." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'would love to' phải dùng động từ nguyên mẫu, nên 'bring' là đúng — câu này nghĩa là muốn mang cho khách một ít vào lần sau.",
        wrongAnswerExplanations:
          "'I would love bring you some next time.' thiếu chữ 'to' sau 'love'. 'I would love to bringing you some next time.' sai vì sau 'to' phải dùng động từ nguyên mẫu, không dùng dạng '-ing'.",
        usageTip: "Dùng khi hứa với ai đó sẽ mang cho họ thử một món ăn đặc biệt vào lần sau.",
      },
      {
        id: "st-43-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🎑",
        english: "Sharing traditions is one of my favorite things to do.",
        vietnamese: "Chia sẻ truyền thống là một trong những điều tôi thích làm nhất.",
        promptContext: "Chloe muốn nói rằng mình rất thích được chia sẻ về văn hóa và truyền thống của mình với khách.",
        choices: [
          { id: "a", text: "Sharing traditions is one of my favorite things to do." },
          { id: "b", text: "Sharing traditions are one of my favorite things to do." },
          { id: "c", text: "Sharing traditions is one of my favorite thing to do." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'sharing traditions' là số ít nên động từ phải chia là 'is', và 'things' phải ở dạng số nhiều sau 'one of'.",
        wrongAnswerExplanations:
          "'Sharing traditions are one of my favorite things to do.' sai vì chủ ngữ số ít phải đi với 'is', không dùng 'are'. 'Sharing traditions is one of my favorite thing to do.' sai vì sau 'one of my favorite' phải dùng danh từ số nhiều 'things', không dùng số ít 'thing'.",
        usageTip: "Dùng khi chia sẻ niềm vui về việc giới thiệu văn hóa và truyền thống của mình cho người khác.",
      },
    ],
  },
  {
    id: "st-44",
    slug: "st-44-holiday-birthday-4",
    topicId: "small-talk",
    title: "Hỏi khách về kỷ niệm lễ đáng nhớ",
    description: "Cách hỏi khách về một kỷ niệm đáng nhớ trong dịp lễ hoặc sinh nhật.",
    level: "situation",
    section: "NÂNG CAO HƠN MỘT CHÚT",
    questions: [
      {
        id: "st-44-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎇",
        english: "My favorite was probably my sixteenth birthday.",
        vietnamese: "Sinh nhật tôi thích nhất chắc là năm mười sáu tuổi.",
        prompt: "What's your favorite birthday memory?",
        promptVietnamese: "Kỷ niệm sinh nhật đáng nhớ nhất của bạn là gì?",
        choices: [
          { id: "a", text: "My favorite was probably my sixteenth birthday." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi về kỷ niệm sinh nhật đáng nhớ, mình chia sẻ một mốc thời gian cụ thể, ví dụ năm mười sáu tuổi.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về kỷ niệm. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi được hỏi về một kỷ niệm sinh nhật đáng nhớ của mình.",
      },
      {
        id: "st-44-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🎊",
        english: "What made that birthday so special?",
        vietnamese: "Điều gì làm sinh nhật đó đặc biệt vậy?",
        promptContext:
          "Chị vừa chia sẻ với khách về sinh nhật đáng nhớ nhất của mình, và khách muốn hỏi thêm lý do vì sao nó đặc biệt.",
        choices: [
          { id: "a", text: "What made that birthday so special?" },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về một kỷ niệm sinh nhật đáng nhớ, khách có thể hỏi thêm lý do vì sao nó đặc biệt, giữ cuộc trò chuyện thú vị.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến câu hỏi về kỷ niệm. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thêm chi tiết thú vị về một kỷ niệm đáng nhớ của ai đó.",
      },
      {
        id: "st-44-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🎇",
        english: "All my friends surprised me at the party.",
        vietnamese: "Tất cả bạn bè tôi đã tạo bất ngờ cho tôi tại buổi tiệc.",
        choices: [
          { id: "a", text: "Tất cả bạn bè tôi đã tạo bất ngờ cho tôi tại buổi tiệc." },
          { id: "b", text: "Không ai đến buổi tiệc của tôi." },
          { id: "c", text: "Tôi đã quên sinh nhật của mình." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng bạn bè đã tạo một bất ngờ đáng nhớ tại buổi tiệc sinh nhật — một kỷ niệm rất vui và ấm áp.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ về một bất ngờ vui vẻ mà bạn bè đã tạo ra cho mình.",
      },
      {
        id: "st-44-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😱",
        english: "That must have been such a happy surprise!",
        vietnamese: "Chắc đó là bất ngờ vui lắm!",
        prompt: "All my friends surprised me at the party.",
        promptVietnamese: "Tất cả bạn bè tôi đã tạo bất ngờ cho tôi tại buổi tiệc.",
        choices: [
          { id: "a", text: "That must have been such a happy surprise!" },
          { id: "b", text: "We take walk-ins every day." },
          { id: "c", text: "This gel color dries fast." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về một bất ngờ vui, khách nhận xét rằng đó chắc là một khoảnh khắc rất hạnh phúc và đáng nhớ.",
        wrongAnswerExplanations:
          "'We take walk-ins every day.' nói về việc nhận khách không hẹn, không liên quan đến câu chuyện về sinh nhật. 'This gel color dries fast.' nói về sơn gel khô nhanh, hoàn toàn lạc đề.",
        usageTip: "Dùng khi nhận xét về một bất ngờ vui vẻ mà ai đó chia sẻ.",
      },
      {
        id: "st-44-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "📸",
        english: "I still have pictures from that night.",
        vietnamese: "Tôi vẫn còn giữ hình ảnh từ đêm đó.",
        prompt: "I still have pictures ___ that night.",
        choices: [
          { id: "a", text: "from" },
          { id: "b", text: "of" },
          { id: "c", text: "at" },
        ],
        correctAnswer: "a",
        explanation:
          "'Pictures from that night' là cụm cố định nghĩa là 'hình ảnh từ đêm đó' — dùng 'from' là đúng và tự nhiên nhất.",
        wrongAnswerExplanations:
          "'Of' có thể dùng trong ngữ cảnh khác nhưng không tự nhiên bằng 'from' khi nói về nguồn gốc thời gian của hình ảnh. 'At' không phù hợp với cấu trúc này khi nói về hình ảnh từ một thời điểm.",
        usageTip: "Dùng khi chia sẻ về việc mình vẫn còn giữ hình ảnh từ một kỷ niệm đáng nhớ.",
      },
      {
        id: "st-44-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "💌",
        english: "Do you still keep in touch with those friends?",
        vietnamese: "Bạn có còn giữ liên lạc với những người bạn đó không?",
        promptContext:
          "Chị chia sẻ với khách về kỷ niệm sinh nhật với bạn bè, và khách tò mò muốn hỏi liệu chị có còn giữ liên lạc với họ không.",
        choices: [
          { id: "a", text: "Do you still keep in touch with those friends?" },
          { id: "b", text: "The nail dryer is broken today." },
          { id: "c", text: "We need to close early tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về những người bạn từ kỷ niệm cũ, khách tò mò và hỏi thêm liệu mình có còn giữ liên lạc với họ không.",
        wrongAnswerExplanations:
          "'The nail dryer is broken today.' nói về máy sấy móng bị hỏng, hoàn toàn không liên quan. 'We need to close early tonight.' nói về việc đóng cửa sớm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi tò mò và muốn hỏi thêm về việc còn giữ liên lạc với những người bạn cũ.",
      },
      {
        id: "st-44-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "A few of us still talk every once in a while.",
        vietnamese: "Vài người trong chúng tôi vẫn còn nói chuyện đôi khi.",
        audioText: "A few of us still talk every once in a while.",
        choices: [
          { id: "a", text: "Vài người trong chúng tôi vẫn còn nói chuyện đôi khi." },
          { id: "b", text: "Chúng tôi không còn liên lạc với ai cả." },
          { id: "c", text: "Chúng tôi nói chuyện với nhau mỗi ngày." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng mình vẫn giữ liên lạc với một vài người bạn cũ, dù không thường xuyên như trước.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa tuyệt đối, không đúng với ý nghĩa 'đôi khi' trong câu nghe.",
        usageTip: "Dùng khi chia sẻ về việc vẫn giữ liên lạc không thường xuyên với bạn bè cũ.",
      },
      {
        id: "st-44-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🙂",
        english: "That's nice, good friendships last a long time.",
        vietnamese: "Vậy tốt đấy, tình bạn tốt thường kéo dài lâu.",
        prompt: "A few of us still talk every once in a while.",
        promptVietnamese: "Vài người trong chúng tôi vẫn còn nói chuyện đôi khi.",
        choices: [
          { id: "a", text: "That's nice, good friendships last a long time." },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về việc vẫn giữ liên lạc với bạn cũ, khách nhận xét rằng những tình bạn tốt thường kéo dài lâu dài.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến câu chuyện về bạn bè. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi nhận xét về giá trị của những tình bạn lâu dài.",
      },
      {
        id: "st-44-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "💝",
        english: "Good memories like that are hard to forget.",
        vietnamese: "Những kỷ niệm đẹp như vậy thật khó quên.",
        promptContext: "Chloe muốn chia sẻ rằng những kỷ niệm sinh nhật đẹp thường rất khó quên theo thời gian.",
        choices: [
          { id: "a", text: "Good memories like that are hard to forget." },
          { id: "b", text: "Good memories like that is hard to forget." },
          { id: "c", text: "Good memories like that are hard forget to." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'good memories' là số nhiều nên động từ phải chia là 'are' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Good memories like that is hard to forget.' sai vì chủ ngữ số nhiều phải đi với 'are', không dùng 'is'. 'Good memories like that are hard forget to.' sai vì đặt sai thứ tự 'forget' và 'to' trong câu.",
        usageTip: "Dùng khi chia sẻ một suy nghĩ ý nghĩa về những kỷ niệm đẹp khó quên.",
      },
      {
        id: "st-44-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🎆",
        english: "The people around us make celebrations special.",
        vietnamese: "Những người xung quanh chúng ta làm cho những lễ mừng trở nên đặc biệt.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về việc điều làm các dịp lễ đặc biệt chính là những người xung quanh mình.",
        choices: [
          { id: "a", text: "The people around us make celebrations special." },
          { id: "b", text: "The people around us makes celebrations special." },
          { id: "c", text: "The people around us make celebration special." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'the people' là số nhiều nên động từ phải là 'make', không thêm 's', và 'celebrations' đúng ở dạng số nhiều.",
        wrongAnswerExplanations:
          "'The people around us makes celebrations special.' sai vì chủ ngữ số nhiều không được chia động từ thêm 's'. 'The people around us make celebration special.' sai vì nên dùng số nhiều 'celebrations' khi nói chung về các dịp lễ, không dùng số ít 'celebration'.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa về giá trị của những người thân yêu trong các dịp lễ.",
      },
    ],
  },
  {
    id: "st-45",
    slug: "st-45-holiday-birthday-5",
    topicId: "small-talk",
    title: "Chia sẻ dự định cho năm mới",
    description: "Cách trò chuyện nhẹ nhàng về những dự định hoặc mục tiêu cho năm mới.",
    level: "situation",
    section: "NÂNG CAO HƠN MỘT CHÚT",
    questions: [
      {
        id: "st-45-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎯",
        english: "I want to travel more this year.",
        vietnamese: "Năm nay tôi muốn đi du lịch nhiều hơn.",
        prompt: "Do you have any goals for this year?",
        promptVietnamese: "Năm nay bạn có mục tiêu gì không?",
        choices: [
          { id: "a", text: "I want to travel more this year." },
          { id: "b", text: "It's twenty dollars for a manicure." },
          { id: "c", text: "We open at nine every day." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi về mục tiêu năm mới, mình chia sẻ một mục tiêu cụ thể, ví dụ muốn đi du lịch nhiều hơn.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về mục tiêu năm mới. 'We open at nine every day.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi được hỏi về mục tiêu hoặc dự định của mình cho năm mới.",
      },
      {
        id: "st-45-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "📝",
        english: "Have you made any New Year's resolutions?",
        vietnamese: "Bạn có đặt mục tiêu năm mới nào không?",
        promptContext:
          "Đầu năm mới, khách muốn hỏi thăm chị xem có đặt ra mục tiêu hay lời hứa gì cho năm mới không.",
        choices: [
          { id: "a", text: "Have you made any New Year's resolutions?" },
          { id: "b", text: "Your total comes to twenty dollars." },
          { id: "c", text: "We just got new nail colors in." },
        ],
        correctAnswer: "a",
        explanation:
          "Vào đầu năm mới, khách có thể hỏi thăm về mục tiêu năm mới của mình, một câu hỏi small talk rất phổ biến.",
        wrongAnswerExplanations:
          "'Your total comes to twenty dollars.' nói về giá tiền, không liên quan đến câu hỏi về mục tiêu năm mới. 'We just got new nail colors in.' nói về màu sơn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng vào đầu năm mới khi muốn hỏi ai đó về mục tiêu của họ.",
      },
      {
        id: "st-45-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "💪",
        english: "I'm trying to save more money this year.",
        vietnamese: "Năm nay tôi đang cố tiết kiệm nhiều tiền hơn.",
        choices: [
          { id: "a", text: "Năm nay tôi đang cố tiết kiệm nhiều tiền hơn." },
          { id: "b", text: "Năm nay tôi sẽ chi tiêu nhiều hơn." },
          { id: "c", text: "Tôi không có mục tiêu nào cho năm nay." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ mục tiêu năm mới cụ thể, đó là tiết kiệm tiền nhiều hơn — một mục tiêu rất phổ biến vào đầu năm.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ về mục tiêu tiết kiệm tiền của mình cho năm mới.",
      },
      {
        id: "st-45-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👍",
        english: "That's a great goal, I should do that too.",
        vietnamese: "Mục tiêu hay đấy, tôi cũng nên làm vậy.",
        prompt: "I'm trying to save more money this year.",
        promptVietnamese: "Năm nay tôi đang cố tiết kiệm nhiều tiền hơn.",
        choices: [
          { id: "a", text: "That's a great goal, I should do that too." },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về mục tiêu tiết kiệm tiền, khách khen ngợi và chia sẻ rằng mình cũng nên có mục tiêu giống vậy.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' hoàn toàn không liên quan đến câu chuyện về mục tiêu năm mới. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi khen ngợi một mục tiêu tốt và muốn chia sẻ ý định làm theo.",
      },
      {
        id: "st-45-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "📊",
        english: "It's hard to stick to a goal sometimes.",
        vietnamese: "Đôi khi thật khó để giữ vững một mục tiêu.",
        prompt: "It's hard to stick to a goal ___.",
        choices: [
          { id: "a", text: "sometimes" },
          { id: "b", text: "sometime" },
          { id: "c", text: "some time" },
        ],
        correctAnswer: "a",
        explanation:
          "'Sometimes' nghĩa là 'đôi khi' — dùng đúng ở cuối câu để nói về việc thỉnh thoảng gặp khó khăn khi giữ mục tiêu.",
        wrongAnswerExplanations:
          "'Sometime' nghĩa là 'lúc nào đó', không phù hợp với ý nghĩa 'đôi khi' trong câu này. 'Some time' nghĩa là 'một khoảng thời gian', hoàn toàn khác với ý nghĩa cần diễn đạt.",
        usageTip: "Dùng khi chia sẻ rằng đôi khi việc giữ vững một mục tiêu năm mới không dễ dàng.",
      },
      {
        id: "st-45-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🏃",
        english: "My goal is to exercise more this year.",
        vietnamese: "Mục tiêu của tôi năm nay là tập thể dục nhiều hơn.",
        promptContext:
          "Khách chia sẻ với chị rằng mục tiêu năm nay của khách là tập thể dục thường xuyên hơn.",
        choices: [
          { id: "a", text: "My goal is to exercise more this year." },
          { id: "b", text: "The nail file is on the table." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách chia sẻ về mục tiêu tập thể dục của mình cho năm mới, một mục tiêu rất phổ biến và tích cực.",
        wrongAnswerExplanations:
          "'The nail file is on the table.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ về mục tiêu tập thể dục của mình cho năm mới.",
      },
      {
        id: "st-45-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "Starting small is always a good way to begin.",
        vietnamese: "Bắt đầu từ những việc nhỏ luôn là cách hay để khởi đầu.",
        audioText: "Starting small is always a good way to begin.",
        choices: [
          { id: "a", text: "Bắt đầu từ những việc nhỏ luôn là cách hay để khởi đầu." },
          { id: "b", text: "Bạn nên bắt đầu với mục tiêu lớn ngay." },
          { id: "c", text: "Không nên đặt mục tiêu gì cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ lời khuyên tích cực rằng bắt đầu từ những bước nhỏ là cách tốt để đạt được mục tiêu lớn.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi khuyên ai đó nên bắt đầu mục tiêu năm mới từ những bước nhỏ.",
      },
      {
        id: "st-45-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "That's good advice, I'll try to remember that.",
        vietnamese: "Lời khuyên hay đấy, tôi sẽ cố nhớ điều đó.",
        prompt: "Starting small is always a good way to begin.",
        promptVietnamese: "Bắt đầu từ những việc nhỏ luôn là cách hay để khởi đầu.",
        choices: [
          { id: "a", text: "That's good advice, I'll try to remember that." },
          { id: "b", text: "We changed our shop hours today." },
          { id: "c", text: "Your total comes to fifteen dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nhận được một lời khuyên hữu ích, khách cảm ơn và nói sẽ cố gắng nhớ và áp dụng lời khuyên đó.",
        wrongAnswerExplanations:
          "'We changed our shop hours today.' hoàn toàn không liên quan đến lời khuyên về mục tiêu. 'Your total comes to fifteen dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi nhận được một lời khuyên hữu ích và muốn nói sẽ cố gắng áp dụng nó.",
      },
      {
        id: "st-45-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌱",
        english: "Every small step counts toward your goal.",
        vietnamese: "Mỗi bước nhỏ đều có giá trị hướng đến mục tiêu của bạn.",
        promptContext: "Chloe muốn động viên khách rằng mỗi bước nhỏ đều đóng góp vào việc đạt được mục tiêu lớn.",
        choices: [
          { id: "a", text: "Every small step counts toward your goal." },
          { id: "b", text: "Every small step count toward your goal." },
          { id: "c", text: "Every small steps counts toward your goal." },
        ],
        correctAnswer: "a",
        explanation:
          "'Every' luôn đi với danh từ số ít 'step' và động từ số ít 'counts' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Every small step count toward your goal.' sai vì chủ ngữ số ít phải đi với 'counts', không dùng 'count'. 'Every small steps counts toward your goal.' sai vì 'every' luôn đi với danh từ số ít 'step', không phải 'steps'.",
        usageTip: "Dùng khi động viên ai đó rằng mỗi bước nhỏ đều có giá trị trong việc đạt mục tiêu.",
      },
      {
        id: "st-45-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "A new year always feels like a fresh start.",
        vietnamese: "Một năm mới luôn mang cảm giác như một khởi đầu mới.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về việc mỗi năm mới đều mang lại cảm giác được bắt đầu lại từ đầu.",
        choices: [
          { id: "a", text: "A new year always feels like a fresh start." },
          { id: "b", text: "A new year always feel like a fresh start." },
          { id: "c", text: "A new year always feels like fresh a start." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'a new year' là số ít nên động từ phải chia là 'feels' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'A new year always feel like a fresh start.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít. 'A new year always feels like fresh a start.' sai vì đặt mạo từ 'a' sai vị trí, phải đứng trước tính từ 'fresh'.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ tích cực về ý nghĩa của năm mới.",
      },
    ],
  },
];
