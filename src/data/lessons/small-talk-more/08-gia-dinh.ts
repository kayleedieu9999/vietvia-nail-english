import { Lesson } from "@/types/content";

/**
 * Small Talk — subtopic group 8: Gia đình nhẹ nhàng, không quá riêng tư (lessons 36-40).
 */
export const smallTalkGroup08: Lesson[] = [
  {
    id: "st-36",
    slug: "st-36-gia-dinh-1",
    topicId: "small-talk",
    title: "Hỏi khách về con cái nhẹ nhàng",
    description: "Cách hỏi khách về con cái một cách nhẹ nhàng, không riêng tư quá.",
    level: "situation",
    section: "GIAO TIẾP THỰC TẾ",
    questions: [
      {
        id: "st-36-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👶",
        english: "Yes, I have two kids. They keep me busy.",
        vietnamese: "Vâng, tôi có hai đứa con. Chúng làm tôi bận suốt.",
        prompt: "Do you have kids?",
        promptVietnamese: "Bạn có con chưa?",
        choices: [
          { id: "a", text: "Yes, I have two kids. They keep me busy." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi mình có con chưa, mình trả lời thật và ngắn gọn, thêm một câu nhẹ về việc chăm con bận rộn.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về con cái. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình có con chưa một cách thân thiện.",
      },
      {
        id: "st-36-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🧒",
        english: "How old are your kids now?",
        vietnamese: "Con của bạn bây giờ mấy tuổi rồi?",
        promptContext:
          "Chị vừa nói với khách rằng mình có con, và khách muốn hỏi thăm thêm về tuổi của các con.",
        choices: [
          { id: "a", text: "How old are your kids now?" },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi biết ai đó có con, khách có thể hỏi thăm thêm về tuổi của các con, một câu hỏi nhẹ nhàng và thân thiện.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến câu hỏi về con cái. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thăm thêm về tuổi của con của ai đó.",
      },
      {
        id: "st-36-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🎒",
        english: "My son just started school this year.",
        vietnamese: "Con trai tôi năm nay mới bắt đầu đi học.",
        choices: [
          { id: "a", text: "Con trai tôi năm nay mới bắt đầu đi học." },
          { id: "b", text: "Con trai tôi chưa biết đi." },
          { id: "c", text: "Tôi không có con trai." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng con trai mình năm nay mới bắt đầu đi học — một mốc quan trọng và vui trong cuộc sống gia đình.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ về một mốc quan trọng của con mình, ví dụ bắt đầu đi học.",
      },
      {
        id: "st-36-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎓",
        english: "That's such a big milestone! How's he doing?",
        vietnamese: "Đó là một cột mốc lớn đấy! Con thế nào rồi?",
        prompt: "My son just started school this year.",
        promptVietnamese: "Con trai tôi năm nay mới bắt đầu đi học.",
        choices: [
          { id: "a", text: "That's such a big milestone! How's he doing?" },
          { id: "b", text: "We take walk-ins every day." },
          { id: "c", text: "This gel color dries fast." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về việc con mới bắt đầu đi học, khách nhận xét đó là một cột mốc lớn và hỏi thăm thêm về việc con thích nghi thế nào.",
        wrongAnswerExplanations:
          "'We take walk-ins every day.' nói về việc nhận khách không hẹn, không liên quan đến câu chuyện về con cái. 'This gel color dries fast.' nói về sơn gel khô nhanh, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thăm thêm về việc con của ai đó đang thích nghi với điều mới.",
      },
      {
        id: "st-36-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "😊",
        english: "He's doing really well, he loves his new teacher.",
        vietnamese: "Con làm tốt lắm, con rất thích cô giáo mới.",
        prompt: "He's doing really well, he loves his new ___.",
        choices: [
          { id: "a", text: "teacher" },
          { id: "b", text: "teach" },
          { id: "c", text: "teaching" },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'his new' cần dùng danh từ, và 'teacher' nghĩa là 'giáo viên' là đúng nghĩa trong câu này.",
        wrongAnswerExplanations:
          "'Teach' là động từ, không dùng được ở vị trí danh từ này. 'Teaching' là danh động từ mang nghĩa khác, không phù hợp với ý nghĩa 'giáo viên' trong câu.",
        usageTip: "Dùng khi chia sẻ rằng con mình đang thích nghi tốt với việc đi học, đặc biệt là thích cô giáo mới.",
      },
      {
        id: "st-36-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🥰",
        english: "That's so sweet, kids adjust so quickly sometimes.",
        vietnamese: "Ngọt ngào quá, đôi khi trẻ con thích nghi nhanh lắm.",
        promptContext:
          "Chị vừa chia sẻ rằng con mình thích cô giáo mới, và khách muốn nhận xét vui về việc trẻ con thích nghi nhanh.",
        choices: [
          { id: "a", text: "That's so sweet, kids adjust so quickly sometimes." },
          { id: "b", text: "Your nail polish just arrived today." },
          { id: "c", text: "We are open on holidays too." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về việc con thích nghi tốt, khách nhận xét vui rằng trẻ con thường thích nghi rất nhanh với môi trường mới.",
        wrongAnswerExplanations:
          "'Your nail polish just arrived today.' nói về việc hàng mới về, không liên quan đến câu chuyện về con cái. 'We are open on holidays too.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi nhận xét vui về khả năng thích nghi nhanh của trẻ con.",
      },
      {
        id: "st-36-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "Kids are more flexible than we think sometimes.",
        vietnamese: "Đôi khi trẻ con linh hoạt hơn chúng ta nghĩ.",
        audioText: "Kids are more flexible than we think sometimes.",
        choices: [
          { id: "a", text: "Đôi khi trẻ con linh hoạt hơn chúng ta nghĩ." },
          { id: "b", text: "Trẻ con luôn khó thích nghi với điều mới." },
          { id: "c", text: "Trẻ con không thích thay đổi bao giờ." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ một suy nghĩ tích cực rằng trẻ con thường linh hoạt và thích nghi tốt hơn người lớn nghĩ.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi chia sẻ suy nghĩ tích cực về khả năng thích nghi của trẻ con.",
      },
      {
        id: "st-36-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👍",
        english: "That's very true, they surprise us all the time.",
        vietnamese: "Đúng vậy đó, con nít làm chúng ta ngạc nhiên hoài.",
        prompt: "Kids are more flexible than we think sometimes.",
        promptVietnamese: "Đôi khi trẻ con linh hoạt hơn chúng ta nghĩ.",
        choices: [
          { id: "a", text: "That's very true, they surprise us all the time." },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe suy nghĩ về sự linh hoạt của trẻ con, khách đồng tình mạnh mẽ và chia sẻ thêm rằng trẻ con luôn làm người lớn ngạc nhiên.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến câu chuyện về trẻ con. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng tình mạnh mẽ với một suy nghĩ tích cực về trẻ con.",
      },
      {
        id: "st-36-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🧸",
        english: "Watching them grow up is the best part.",
        vietnamese: "Nhìn con lớn lên là điều tuyệt nhất.",
        promptContext: "Chloe muốn chia sẻ rằng nhìn con cái trưởng thành là điều tuyệt vời nhất trong cuộc sống làm cha mẹ.",
        choices: [
          { id: "a", text: "Watching them grow up is the best part." },
          { id: "b", text: "Watching them grow up are the best part." },
          { id: "c", text: "Watching them grown up is the best part." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'watching them grow up' là số ít nên động từ phải chia là 'is' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Watching them grow up are the best part.' sai vì chủ ngữ số ít phải đi với 'is', không dùng 'are'. 'Watching them grown up is the best part.' sai vì phải dùng động từ nguyên mẫu 'grow', không dùng dạng quá khứ phân từ 'grown'.",
        usageTip: "Dùng khi chia sẻ cảm xúc vui vẻ và tự hào khi nhìn con cái lớn lên.",
      },
      {
        id: "st-36-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "Every stage of childhood goes by so fast.",
        vietnamese: "Mỗi giai đoạn của tuổi thơ đều trôi qua nhanh lắm.",
        promptContext: "Chloe muốn nói rằng mỗi giai đoạn phát triển của con cái đều trôi qua rất nhanh.",
        choices: [
          { id: "a", text: "Every stage of childhood goes by so fast." },
          { id: "b", text: "Every stage of childhood go by so fast." },
          { id: "c", text: "Every stages of childhood goes by so fast." },
        ],
        correctAnswer: "a",
        explanation:
          "'Every' luôn đi với danh từ số ít 'stage' và động từ số ít 'goes' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Every stage of childhood go by so fast.' sai vì chủ ngữ số ít phải đi với 'goes', không dùng 'go'. 'Every stages of childhood goes by so fast.' sai vì 'every' luôn đi với danh từ số ít 'stage', không phải 'stages'.",
        usageTip: "Dùng khi muốn chia sẻ suy nghĩ về việc thời gian trôi nhanh khi nhìn con cái lớn lên.",
      },
    ],
  },
  {
    id: "st-37",
    slug: "st-37-gia-dinh-2",
    topicId: "small-talk",
    title: "Trò chuyện về ông bà, cha mẹ",
    description: "Cách trò chuyện nhẹ nhàng về ông bà hoặc cha mẹ mà không quá riêng tư.",
    level: "situation",
    section: "GIAO TIẾP THỰC TẾ",
    questions: [
      {
        id: "st-37-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👵",
        english: "She's doing well, thanks for asking.",
        vietnamese: "Bà khỏe, cảm ơn bạn đã hỏi.",
        prompt: "How's your mom doing?",
        promptVietnamese: "Mẹ bạn khỏe không?",
        choices: [
          { id: "a", text: "She's doing well, thanks for asking." },
          { id: "b", text: "It's twenty dollars for a manicure." },
          { id: "c", text: "We open at nine every day." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi thăm về mẹ mình, mình trả lời ngắn gọn và cảm ơn vì sự quan tâm.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi thăm về mẹ. 'We open at nine every day.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi thăm về sức khỏe của mẹ mình.",
      },
      {
        id: "st-37-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "👴",
        english: "Do your parents live nearby?",
        vietnamese: "Cha mẹ bạn có sống gần đây không?",
        promptContext:
          "Khách tò mò muốn biết liệu cha mẹ chị có sống gần khu vực này hay ở xa.",
        choices: [
          { id: "a", text: "Do your parents live nearby?" },
          { id: "b", text: "Your total comes to twenty dollars." },
          { id: "c", text: "We just got new nail colors in." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách hỏi thăm về việc cha mẹ có sống gần đây không, một câu hỏi nhẹ nhàng, không quá riêng tư.",
        wrongAnswerExplanations:
          "'Your total comes to twenty dollars.' nói về giá tiền, không liên quan đến câu hỏi về gia đình. 'We just got new nail colors in.' nói về màu sơn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thăm nhẹ nhàng về việc cha mẹ ai đó sống gần hay xa.",
      },
      {
        id: "st-37-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🏠",
        english: "My parents live just a few minutes away.",
        vietnamese: "Cha mẹ tôi sống chỉ cách vài phút.",
        choices: [
          { id: "a", text: "Cha mẹ tôi sống chỉ cách vài phút." },
          { id: "b", text: "Cha mẹ tôi sống ở một nước khác." },
          { id: "c", text: "Tôi sống một mình, không gần ai." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng cha mẹ mình sống rất gần, chỉ cách vài phút — một cách trò chuyện nhẹ nhàng về gia đình.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc không liên quan đến nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ rằng cha mẹ mình sống gần nơi mình đang ở.",
      },
      {
        id: "st-37-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "That's nice, it must be easy to visit them.",
        vietnamese: "Vậy tốt đấy, chắc dễ đến thăm ông bà lắm.",
        prompt: "My parents live just a few minutes away.",
        promptVietnamese: "Cha mẹ tôi sống chỉ cách vài phút.",
        choices: [
          { id: "a", text: "That's nice, it must be easy to visit them." },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe cha mẹ sống gần, khách nhận xét rằng điều đó thuận lợi cho việc thăm ông bà thường xuyên.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' hoàn toàn không liên quan đến câu chuyện về gia đình. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi nhận xét về sự thuận lợi khi gia đình sống gần nhau.",
      },
      {
        id: "st-37-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🍲",
        english: "I visit my parents almost every weekend.",
        vietnamese: "Tôi thăm cha mẹ mình gần như mỗi cuối tuần.",
        prompt: "I visit my parents almost every ___.",
        choices: [
          { id: "a", text: "weekend" },
          { id: "b", text: "weekends" },
          { id: "c", text: "weekly" },
        ],
        correctAnswer: "a",
        explanation:
          "'Every' luôn đi với danh từ số ít, nên 'weekend' là đúng — câu này nghĩa là gần như mỗi cuối tuần đều đi thăm cha mẹ.",
        wrongAnswerExplanations:
          "'Weekends' sai vì 'every' phải đi với danh từ số ít, không dùng số nhiều. 'Weekly' là trạng từ, không dùng được sau 'every' trong cấu trúc này.",
        usageTip: "Dùng khi chia sẻ về việc mình thường xuyên thăm cha mẹ vào cuối tuần.",
      },
      {
        id: "st-37-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🥘",
        english: "Do you all eat dinner together when you visit?",
        vietnamese: "Khi bạn đến thăm, cả nhà có ăn tối cùng nhau không?",
        promptContext:
          "Khách nghe chị chia sẻ về việc thường thăm cha mẹ, và tò mò muốn hỏi thêm về việc gia đình có ăn tối cùng nhau không.",
        choices: [
          { id: "a", text: "Do you all eat dinner together when you visit?" },
          { id: "b", text: "The nail file is on the table." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách tò mò về việc gia đình có ăn tối cùng nhau khi thăm cha mẹ không, một câu hỏi tự nhiên và ấm áp.",
        wrongAnswerExplanations:
          "'The nail file is on the table.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi tò mò và muốn hỏi thêm về hoạt động gia đình khi tụ họp.",
      },
      {
        id: "st-37-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "Yes, my mom always cooks something special.",
        vietnamese: "Có, mẹ tôi luôn nấu món gì đó đặc biệt.",
        audioText: "Yes, my mom always cooks something special.",
        choices: [
          { id: "a", text: "Có, mẹ tôi luôn nấu món gì đó đặc biệt." },
          { id: "b", text: "Không, chúng tôi không ăn cùng nhau." },
          { id: "c", text: "Mẹ tôi không thích nấu ăn." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng mẹ mình luôn nấu món đặc biệt khi gia đình tụ họp, một chi tiết ấm áp về gia đình.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi chia sẻ chi tiết ấm áp về việc mẹ mình nấu ăn cho gia đình.",
      },
      {
        id: "st-37-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😋",
        english: "That sounds so nice, family meals are the best.",
        vietnamese: "Nghe ấm áp quá, bữa ăn gia đình luôn là tuyệt nhất.",
        prompt: "Yes, my mom always cooks something special.",
        promptVietnamese: "Có, mẹ tôi luôn nấu món gì đó đặc biệt.",
        choices: [
          { id: "a", text: "That sounds so nice, family meals are the best." },
          { id: "b", text: "We changed our shop hours today." },
          { id: "c", text: "Your total comes to fifteen dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về việc mẹ nấu ăn cho gia đình, khách đồng tình rằng bữa ăn gia đình luôn là điều tuyệt vời nhất.",
        wrongAnswerExplanations:
          "'We changed our shop hours today.' hoàn toàn không liên quan đến câu chuyện về gia đình. 'Your total comes to fifteen dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng tình về giá trị ấm áp của những bữa ăn gia đình.",
      },
      {
        id: "st-37-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🍚",
        english: "Family dinners always bring everyone together.",
        vietnamese: "Bữa tối gia đình luôn giúp mọi người tụ họp lại.",
        promptContext: "Chloe muốn chia sẻ suy nghĩ rằng những bữa tối gia đình luôn là dịp để mọi người gần nhau hơn.",
        choices: [
          { id: "a", text: "Family dinners always bring everyone together." },
          { id: "b", text: "Family dinners always brings everyone together." },
          { id: "c", text: "Family dinners always bring together everyone." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'family dinners' là số nhiều nên động từ phải là 'bring', không thêm 's' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Family dinners always brings everyone together.' sai vì chủ ngữ số nhiều không được chia động từ thêm 's'. 'Family dinners always bring together everyone.' sai vì đặt 'everyone' và 'together' sai thứ tự trong câu.",
        usageTip: "Dùng khi chia sẻ một suy nghĩ ý nghĩa về giá trị của những bữa ăn gia đình.",
      },
      {
        id: "st-37-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "❤️",
        english: "Nothing beats a home-cooked meal with family.",
        vietnamese: "Không có gì bằng một bữa ăn nhà nấu cùng gia đình.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về việc không có gì tuyệt hơn một bữa ăn gia đình tự nấu.",
        choices: [
          { id: "a", text: "Nothing beats a home-cooked meal with family." },
          { id: "b", text: "Nothing beat a home-cooked meal with family." },
          { id: "c", text: "Nothing beats a home-cook meal with family." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'nothing' là số ít nên động từ phải chia là 'beats', và 'home-cooked' là tính từ đúng dạng để mô tả bữa ăn.",
        wrongAnswerExplanations:
          "'Nothing beat a home-cooked meal with family.' sai vì chủ ngữ số ít phải đi với 'beats', không dùng 'beat'. 'Nothing beats a home-cook meal with family.' sai vì phải dùng 'home-cooked' (dạng quá khứ phân từ), không dùng 'home-cook'.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa về giá trị của bữa ăn gia đình tự nấu.",
      },
    ],
  },
  {
    id: "st-38",
    slug: "st-38-gia-dinh-3",
    topicId: "small-talk",
    title: "Nói về thú cưng trong nhà",
    description: "Cách trò chuyện nhẹ nhàng về thú cưng như một phần của gia đình.",
    level: "situation",
    section: "GIAO TIẾP THỰC TẾ",
    questions: [
      {
        id: "st-38-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🐶",
        english: "Yes, I have a dog. He's my best friend.",
        vietnamese: "Vâng, tôi có một con chó. Nó là bạn thân nhất của tôi.",
        prompt: "Do you have any pets?",
        promptVietnamese: "Bạn có nuôi thú cưng không?",
        choices: [
          { id: "a", text: "Yes, I have a dog. He's my best friend." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi mình có nuôi thú cưng không, mình trả lời thật và thêm câu nhẹ về tình cảm với thú cưng.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về thú cưng. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình có nuôi thú cưng không.",
      },
      {
        id: "st-38-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🐱",
        english: "What kind of dog do you have?",
        vietnamese: "Bạn nuôi giống chó gì?",
        promptContext:
          "Chị vừa nói với khách rằng mình có nuôi một con chó, và khách muốn hỏi thêm về giống chó đó.",
        choices: [
          { id: "a", text: "What kind of dog do you have?" },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi biết ai đó nuôi chó, khách có thể hỏi thêm về giống chó đó, một câu hỏi tự nhiên và thân thiện.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến câu hỏi về thú cưng. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thêm về giống thú cưng mà ai đó đang nuôi.",
      },
      {
        id: "st-38-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🐾",
        english: "He's a small dog, but he acts really big.",
        vietnamese: "Nó là chó nhỏ, nhưng hành xử như chó lớn vậy.",
        choices: [
          { id: "a", text: "Nó là chó nhỏ, nhưng hành xử như chó lớn vậy." },
          { id: "b", text: "Nó là con chó rất to lớn." },
          { id: "c", text: "Tôi không có thú cưng nào." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ vui rằng con chó nhỏ của mình có tính cách như thể nó rất to lớn — một cách nói dí dỏm về thú cưng.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ vui vẻ về tính cách đặc biệt của thú cưng nhỏ nhưng dũng cảm.",
      },
      {
        id: "st-38-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😂",
        english: "That's so funny, small dogs have big personalities.",
        vietnamese: "Buồn cười thật, chó nhỏ luôn có cá tính lớn.",
        prompt: "He's a small dog, but he acts really big.",
        promptVietnamese: "Nó là chó nhỏ, nhưng hành xử như chó lớn vậy.",
        choices: [
          { id: "a", text: "That's so funny, small dogs have big personalities." },
          { id: "b", text: "We take walk-ins every day." },
          { id: "c", text: "This gel color dries fast." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về tính cách vui của chó nhỏ, khách cười và đồng tình rằng chó nhỏ thường có cá tính rất lớn.",
        wrongAnswerExplanations:
          "'We take walk-ins every day.' nói về việc nhận khách không hẹn, không liên quan đến câu chuyện về thú cưng. 'This gel color dries fast.' nói về sơn gel khô nhanh, hoàn toàn lạc đề.",
        usageTip: "Dùng khi cười và đồng tình vui vẻ về tính cách của một con vật nhỏ nhưng cá tính lớn.",
      },
      {
        id: "st-38-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🦴",
        english: "He follows me around the house all day.",
        vietnamese: "Nó đi theo tôi khắp nhà cả ngày.",
        prompt: "He ___ me around the house all day.",
        choices: [
          { id: "a", text: "follows" },
          { id: "b", text: "follow" },
          { id: "c", text: "following" },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'He' là số ít nên động từ phải chia là 'follows' — câu này đúng ngữ pháp và tự nhiên.",
        wrongAnswerExplanations:
          "'Follow' sai vì thiếu 's' ở động từ khi chủ ngữ số ít. 'Following' sai vì thiếu trợ động từ 'is' trước dạng '-ing'.",
        usageTip: "Dùng khi chia sẻ về thói quen của thú cưng luôn đi theo mình khắp nhà.",
      },
      {
        id: "st-38-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🐕",
        english: "Sounds like he really loves being with you.",
        vietnamese: "Nghe có vẻ nó thật sự thích được ở cạnh bạn.",
        promptContext:
          "Chị chia sẻ với khách rằng con chó của mình luôn theo mình khắp nhà, và khách muốn nhận xét về điều đó.",
        choices: [
          { id: "a", text: "Sounds like he really loves being with you." },
          { id: "b", text: "The nail dryer is broken today." },
          { id: "c", text: "We need to close early tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về thói quen theo chủ khắp nhà, khách nhận xét rằng đó là dấu hiệu tình cảm gắn bó của thú cưng.",
        wrongAnswerExplanations:
          "'The nail dryer is broken today.' nói về máy sấy móng bị hỏng, hoàn toàn không liên quan. 'We need to close early tonight.' nói về việc đóng cửa sớm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi nhận xét về sự gắn bó tình cảm giữa thú cưng và chủ.",
      },
      {
        id: "st-38-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "He's basically my little shadow at home.",
        vietnamese: "Nó gần như là cái bóng nhỏ của tôi ở nhà.",
        audioText: "He's basically my little shadow at home.",
        choices: [
          { id: "a", text: "Nó gần như là cái bóng nhỏ của tôi ở nhà." },
          { id: "b", text: "Nó không bao giờ ở gần tôi." },
          { id: "c", text: "Nó sợ tôi lắm." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này là cách nói dí dỏm, ví con vật luôn theo sát mình như một 'cái bóng nhỏ' — thể hiện tình cảm gắn bó.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi muốn miêu tả vui vẻ về việc thú cưng luôn theo sát mình.",
      },
      {
        id: "st-38-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🥹",
        english: "That's the cutest thing I've heard all day.",
        vietnamese: "Đó là điều dễ thương nhất tôi nghe được hôm nay.",
        prompt: "He's basically my little shadow at home.",
        promptVietnamese: "Nó gần như là cái bóng nhỏ của tôi ở nhà.",
        choices: [
          { id: "a", text: "That's the cutest thing I've heard all day." },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe câu chuyện dễ thương về thú cưng, khách phản hồi vui vẻ rằng đó là điều dễ thương nhất họ nghe được.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến câu chuyện về thú cưng. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi phản hồi vui vẻ, dễ thương trước một câu chuyện ấm áp về thú cưng.",
      },
      {
        id: "st-38-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🐕‍🦺",
        english: "Pets really do make a house feel like home.",
        vietnamese: "Thú cưng thật sự làm một căn nhà cảm giác ấm cúng hơn.",
        promptContext: "Chloe muốn chia sẻ suy nghĩ rằng thú cưng giúp căn nhà cảm thấy ấm cúng và tràn đầy tình yêu thương hơn.",
        choices: [
          { id: "a", text: "Pets really do make a house feel like home." },
          { id: "b", text: "Pets really does make a house feel like home." },
          { id: "c", text: "Pets really do makes a house feel like home." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'pets' là số nhiều nên trợ động từ phải là 'do', không dùng 'does' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Pets really does make a house feel like home.' sai vì chủ ngữ số nhiều phải đi với 'do', không dùng 'does'. 'Pets really do makes a house feel like home.' sai vì sau trợ động từ 'do' phải dùng động từ nguyên mẫu 'make', không thêm 's'.",
        usageTip: "Dùng khi chia sẻ một suy nghĩ ấm áp về việc thú cưng làm cho căn nhà thêm ấm cúng.",
      },
      {
        id: "st-38-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🐈",
        english: "A pet's love is one of the purest things in life.",
        vietnamese: "Tình yêu của thú cưng là một trong những điều thuần khiết nhất trong cuộc sống.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về tình cảm chân thành mà thú cưng dành cho con người.",
        choices: [
          { id: "a", text: "A pet's love is one of the purest things in life." },
          { id: "b", text: "A pet's love are one of the purest things in life." },
          { id: "c", text: "A pet's love is one of the pure things in life." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'a pet's love' là số ít nên động từ phải chia là 'is', và 'purest' là dạng so sánh nhất đúng của 'pure'.",
        wrongAnswerExplanations:
          "'A pet's love are one of the purest things in life.' sai vì chủ ngữ số ít phải đi với 'is', không dùng 'are'. 'A pet's love is one of the pure things in life.' sai vì phải dùng dạng so sánh nhất 'purest' khi có 'one of the', không dùng dạng gốc 'pure'.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa về tình cảm chân thành của thú cưng.",
      },
    ],
  },
  {
    id: "st-39",
    slug: "st-39-gia-dinh-4",
    topicId: "small-talk",
    title: "Trò chuyện về anh chị em trong nhà",
    description: "Cách trò chuyện nhẹ nhàng về anh chị em trong gia đình.",
    level: "situation",
    section: "GIAO TIẾP THỰC TẾ",
    questions: [
      {
        id: "st-39-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👫",
        english: "I have one older sister, she lives close by.",
        vietnamese: "Tôi có một chị gái, chị sống gần đây.",
        prompt: "Do you have any siblings?",
        promptVietnamese: "Bạn có anh chị em không?",
        choices: [
          { id: "a", text: "I have one older sister, she lives close by." },
          { id: "b", text: "It's twenty dollars for a manicure." },
          { id: "c", text: "We open at nine every day." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi mình có anh chị em không, mình trả lời thật và chia sẻ thêm chi tiết nhỏ, ví dụ chị sống gần đây.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về gia đình. 'We open at nine every day.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách hỏi mình có anh chị em không.",
      },
      {
        id: "st-39-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "👬",
        english: "Are you close with your siblings?",
        vietnamese: "Bạn có thân với anh chị em mình không?",
        promptContext:
          "Chị vừa nói với khách rằng mình có chị gái, và khách muốn hỏi thêm xem hai người có thân thiết không.",
        choices: [
          { id: "a", text: "Are you close with your siblings?" },
          { id: "b", text: "Your total comes to twenty dollars." },
          { id: "c", text: "We just got new nail colors in." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi biết ai đó có anh chị em, khách có thể hỏi thêm về mối quan hệ thân thiết giữa họ, một câu hỏi nhẹ nhàng.",
        wrongAnswerExplanations:
          "'Your total comes to twenty dollars.' nói về giá tiền, không liên quan đến câu hỏi về gia đình. 'We just got new nail colors in.' nói về màu sơn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn hỏi thăm về mối quan hệ giữa ai đó với anh chị em của họ.",
      },
      {
        id: "st-39-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "📞",
        english: "We talk on the phone almost every day.",
        vietnamese: "Chúng tôi gọi điện cho nhau gần như mỗi ngày.",
        choices: [
          { id: "a", text: "Chúng tôi gọi điện cho nhau gần như mỗi ngày." },
          { id: "b", text: "Chúng tôi không nói chuyện đã nhiều năm." },
          { id: "c", text: "Chúng tôi chưa từng gọi điện cho nhau." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng mình và chị gái thường xuyên gọi điện cho nhau — một cách thể hiện mối quan hệ thân thiết.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ về mối quan hệ thân thiết, thường xuyên liên lạc với anh chị em.",
      },
      {
        id: "st-39-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "That's really nice, not everyone is that close.",
        vietnamese: "Vậy tốt đấy, không phải ai cũng thân như vậy.",
        prompt: "We talk on the phone almost every day.",
        promptVietnamese: "Chúng tôi gọi điện cho nhau gần như mỗi ngày.",
        choices: [
          { id: "a", text: "That's really nice, not everyone is that close." },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về mối quan hệ thân thiết với chị gái, khách nhận xét rằng đó là điều đáng quý vì không phải ai cũng có được.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' hoàn toàn không liên quan đến câu chuyện về gia đình. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi nhận xét rằng một mối quan hệ gia đình thân thiết là điều đáng quý.",
      },
      {
        id: "st-39-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🎉",
        english: "We always celebrate birthdays together as a family.",
        vietnamese: "Chúng tôi luôn ăn mừng sinh nhật cùng nhau như một gia đình.",
        prompt: "We always celebrate birthdays together ___ a family.",
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
        usageTip: "Dùng khi chia sẻ về truyền thống gia đình luôn ăn mừng sinh nhật cùng nhau.",
      },
      {
        id: "st-39-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🎂",
        english: "That sounds like such a fun tradition.",
        vietnamese: "Nghe có vẻ là một truyền thống rất vui.",
        promptContext:
          "Chị chia sẻ với khách về truyền thống gia đình luôn ăn mừng sinh nhật cùng nhau, và khách muốn nhận xét vui về điều đó.",
        choices: [
          { id: "a", text: "That sounds like such a fun tradition." },
          { id: "b", text: "The nail file is on the table." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về một truyền thống gia đình vui, khách nhận xét rằng đó nghe có vẻ là một truyền thống rất thú vị.",
        wrongAnswerExplanations:
          "'The nail file is on the table.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi nhận xét vui về một truyền thống gia đình mà ai đó chia sẻ.",
      },
      {
        id: "st-39-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "It's something we've done since we were kids.",
        vietnamese: "Đó là điều chúng tôi đã làm từ khi còn nhỏ.",
        audioText: "It's something we've done since we were kids.",
        choices: [
          { id: "a", text: "Đó là điều chúng tôi đã làm từ khi còn nhỏ." },
          { id: "b", text: "Chúng tôi mới bắt đầu làm việc này năm nay." },
          { id: "c", text: "Chúng tôi không còn làm việc đó nữa." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng truyền thống gia đình này đã được duy trì từ khi còn nhỏ, thể hiện sự gắn bó lâu dài.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa khác, không đúng với ý nghĩa lâu dài trong câu nghe.",
        usageTip: "Dùng khi chia sẻ về một truyền thống gia đình đã được duy trì lâu dài từ nhỏ.",
      },
      {
        id: "st-39-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🥰",
        english: "Those childhood traditions are always the best ones.",
        vietnamese: "Những truyền thống từ nhỏ đó luôn là hay nhất.",
        prompt: "It's something we've done since we were kids.",
        promptVietnamese: "Đó là điều chúng tôi đã làm từ khi còn nhỏ.",
        choices: [
          { id: "a", text: "Those childhood traditions are always the best ones." },
          { id: "b", text: "We changed our shop hours today." },
          { id: "c", text: "Your total comes to fifteen dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về một truyền thống từ nhỏ, khách nhận xét rằng những truyền thống như vậy luôn là điều đáng quý nhất.",
        wrongAnswerExplanations:
          "'We changed our shop hours today.' hoàn toàn không liên quan đến câu chuyện về gia đình. 'Your total comes to fifteen dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi nhận xét về giá trị của những truyền thống gia đình từ nhỏ.",
      },
      {
        id: "st-39-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🏡",
        english: "Family traditions help keep everyone close.",
        vietnamese: "Truyền thống gia đình giúp mọi người luôn gần gũi nhau.",
        promptContext: "Chloe muốn chia sẻ suy nghĩ rằng những truyền thống gia đình giúp các thành viên luôn gắn kết với nhau.",
        choices: [
          { id: "a", text: "Family traditions help keep everyone close." },
          { id: "b", text: "Family traditions helps keep everyone close." },
          { id: "c", text: "Family traditions help keep close everyone." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'family traditions' là số nhiều nên động từ phải là 'help', không thêm 's' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Family traditions helps keep everyone close.' sai vì chủ ngữ số nhiều không được chia động từ thêm 's'. 'Family traditions help keep close everyone.' sai vì đặt 'close' và 'everyone' sai thứ tự trong câu.",
        usageTip: "Dùng khi chia sẻ một suy nghĩ ý nghĩa về giá trị của truyền thống gia đình.",
      },
      {
        id: "st-39-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌸",
        english: "Siblings are some of the best friends you'll ever have.",
        vietnamese: "Anh chị em là những người bạn tốt nhất mà bạn có thể có.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về việc anh chị em cũng giống như những người bạn tốt nhất trong đời.",
        choices: [
          { id: "a", text: "Siblings are some of the best friends you'll ever have." },
          { id: "b", text: "Siblings is some of the best friends you'll ever have." },
          { id: "c", text: "Siblings are some of the best friend you'll ever have." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'siblings' là số nhiều nên động từ phải là 'are', và 'friends' cũng phải ở dạng số nhiều đúng ngữ pháp.",
        wrongAnswerExplanations:
          "'Siblings is some of the best friends you'll ever have.' sai vì chủ ngữ số nhiều phải đi với 'are', không dùng 'is'. 'Siblings are some of the best friend you'll ever have.' sai vì sau 'some of the best' phải dùng danh từ số nhiều 'friends', không dùng số ít 'friend'.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa về tình cảm giữa anh chị em trong gia đình.",
      },
    ],
  },
  {
    id: "st-40",
    slug: "st-40-gia-dinh-5",
    topicId: "small-talk",
    title: "Chia sẻ về hoạt động gia đình cuối tuần",
    description: "Cách chia sẻ nhẹ nhàng về hoạt động gia đình vào những ngày cuối tuần.",
    level: "situation",
    section: "GIAO TIẾP THỰC TẾ",
    questions: [
      {
        id: "st-40-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎲",
        english: "We usually play board games together at night.",
        vietnamese: "Chúng tôi thường chơi board game cùng nhau vào buổi tối.",
        prompt: "What do you all do together as a family?",
        promptVietnamese: "Gia đình bạn thường làm gì cùng nhau?",
        choices: [
          { id: "a", text: "We usually play board games together at night." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi về hoạt động gia đình, mình chia sẻ cụ thể, ví dụ chơi board game cùng nhau vào buổi tối.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến câu hỏi về gia đình. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi chia sẻ về hoạt động gia đình thường làm cùng nhau.",
      },
      {
        id: "st-40-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🎬",
        english: "We have a movie night every Friday.",
        vietnamese: "Chúng tôi có đêm xem phim vào mỗi thứ Sáu.",
        promptContext:
          "Khách hỏi chị gia đình thường làm gì cùng nhau, và chị muốn chia sẻ về truyền thống xem phim mỗi thứ Sáu.",
        choices: [
          { id: "a", text: "We have a movie night every Friday." },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ về truyền thống gia đình xem phim cùng nhau vào mỗi thứ Sáu — một hoạt động gia đình rất phổ biến.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, không liên quan đến câu hỏi về gia đình. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi chia sẻ về một truyền thống gia đình cố định vào một ngày trong tuần.",
      },
      {
        id: "st-40-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🍿",
        english: "We take turns picking the movie each week.",
        vietnamese: "Chúng tôi thay phiên chọn phim mỗi tuần.",
        choices: [
          { id: "a", text: "Chúng tôi thay phiên chọn phim mỗi tuần." },
          { id: "b", text: "Chúng tôi không bao giờ xem phim cùng nhau." },
          { id: "c", text: "Chỉ có tôi được chọn phim mỗi lần." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ rằng các thành viên gia đình thay phiên nhau chọn phim mỗi tuần — một cách công bằng và vui vẻ.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ về cách gia đình chia sẻ công bằng trong việc chọn hoạt động.",
      },
      {
        id: "st-40-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😄",
        english: "That's such a fair way to do it!",
        vietnamese: "Vậy công bằng thật đấy!",
        prompt: "We take turns picking the movie each week.",
        promptVietnamese: "Chúng tôi thay phiên chọn phim mỗi tuần.",
        choices: [
          { id: "a", text: "That's such a fair way to do it!" },
          { id: "b", text: "We take walk-ins every day." },
          { id: "c", text: "This gel color dries fast." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về cách chia sẻ công bằng trong việc chọn phim, khách nhận xét vui rằng đó là cách làm rất công bằng.",
        wrongAnswerExplanations:
          "'We take walk-ins every day.' nói về việc nhận khách không hẹn, không liên quan đến câu chuyện về gia đình. 'This gel color dries fast.' nói về sơn gel khô nhanh, hoàn toàn lạc đề.",
        usageTip: "Dùng khi nhận xét vui về một cách làm công bằng trong gia đình hoặc nhóm bạn.",
      },
      {
        id: "st-40-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🧩",
        english: "Sometimes we do puzzles instead of watching TV.",
        vietnamese: "Đôi khi chúng tôi chơi xếp hình thay vì xem TV.",
        prompt: "Sometimes we do puzzles ___ of watching TV.",
        choices: [
          { id: "a", text: "instead" },
          { id: "b", text: "instead of" },
          { id: "c", text: "instead for" },
        ],
        correctAnswer: "b",
        explanation:
          "'Instead of' là cụm cố định nghĩa là 'thay vì' — luôn cần đủ chữ 'of' sau 'instead' để đúng ngữ pháp.",
        wrongAnswerExplanations:
          "'Instead' thiếu chữ 'of' cần thiết trong cụm cố định này. 'Instead for' không phải cụm từ có nghĩa trong tiếng Anh.",
        usageTip: "Dùng khi chia sẻ về một hoạt động gia đình thay thế cho việc xem TV.",
      },
      {
        id: "st-40-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🎨",
        english: "My kids love doing crafts on the weekend.",
        vietnamese: "Con tôi thích làm đồ thủ công vào cuối tuần.",
        promptContext:
          "Khách chia sẻ với chị rằng con của khách thích làm đồ thủ công cùng gia đình vào cuối tuần.",
        choices: [
          { id: "a", text: "My kids love doing crafts on the weekend." },
          { id: "b", text: "The nail dryer is broken today." },
          { id: "c", text: "We need to close early tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách chia sẻ về hoạt động gia đình yêu thích của con mình, cụ thể là làm đồ thủ công vào cuối tuần.",
        wrongAnswerExplanations:
          "'The nail dryer is broken today.' nói về máy sấy móng bị hỏng, hoàn toàn không liên quan. 'We need to close early tonight.' nói về việc đóng cửa sớm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ về hoạt động gia đình yêu thích của con cái vào cuối tuần.",
      },
      {
        id: "st-40-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "That sounds like such a creative way to spend time.",
        vietnamese: "Nghe có vẻ là cách sáng tạo để dùng thời gian.",
        audioText: "That sounds like such a creative way to spend time.",
        choices: [
          { id: "a", text: "Nghe có vẻ là cách sáng tạo để dùng thời gian." },
          { id: "b", text: "Nghe có vẻ tốn thời gian quá." },
          { id: "c", text: "Tôi không thích cách đó chút nào." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này khen ngợi hoạt động làm đồ thủ công là một cách sáng tạo và ý nghĩa để dùng thời gian gia đình.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa tiêu cực hoặc ngược lại, không đúng với ý nghĩa tích cực trong câu nghe.",
        usageTip: "Dùng khi khen ngợi một hoạt động gia đình sáng tạo và ý nghĩa.",
      },
      {
        id: "st-40-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👏",
        english: "It really is, and they love showing off their work.",
        vietnamese: "Đúng vậy đó, và con thích khoe sản phẩm của mình lắm.",
        prompt: "That sounds like such a creative way to spend time.",
        promptVietnamese: "Nghe có vẻ là cách sáng tạo để dùng thời gian.",
        choices: [
          { id: "a", text: "It really is, and they love showing off their work." },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được khen về hoạt động sáng tạo, khách đồng tình và chia sẻ thêm rằng con mình thích khoe thành quả.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến câu chuyện về gia đình. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi đồng tình và chia sẻ thêm chi tiết vui về hoạt động của con cái.",
      },
      {
        id: "st-40-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🖼️",
        english: "It's nice to see kids proud of what they make.",
        vietnamese: "Thấy con tự hào về những gì con làm ra thì thật vui.",
        promptContext: "Chloe muốn chia sẻ rằng nhìn thấy trẻ con tự hào về thành quả của mình là điều rất đáng yêu.",
        choices: [
          { id: "a", text: "It's nice to see kids proud of what they make." },
          { id: "b", text: "It's nice to see kids proud of what they makes." },
          { id: "c", text: "It's nice see kids proud of what they make." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'to see' dùng chủ ngữ + động từ chia đúng theo chủ ngữ 'they', nên 'make' không thêm 's' là đúng.",
        wrongAnswerExplanations:
          "'It's nice to see kids proud of what they makes.' sai vì chủ ngữ 'they' phải đi với 'make', không thêm 's'. 'It's nice see kids proud of what they make.' sai vì thiếu chữ 'to' trước 'see'.",
        usageTip: "Dùng khi chia sẻ cảm xúc vui vẻ khi thấy trẻ con tự hào về thành quả của mình.",
      },
      {
        id: "st-40-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌈",
        english: "The little moments together matter the most.",
        vietnamese: "Những khoảnh khắc nhỏ cùng nhau quan trọng nhất.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về việc những khoảnh khắc nhỏ bên gia đình lại là điều quý giá nhất.",
        choices: [
          { id: "a", text: "The little moments together matter the most." },
          { id: "b", text: "The little moments together matters the most." },
          { id: "c", text: "The little moments together matter most the." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'the little moments' là số nhiều nên động từ phải là 'matter', không thêm 's' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'The little moments together matters the most.' sai vì chủ ngữ số nhiều không được chia động từ thêm 's'. 'The little moments together matter most the.' sai vì đặt 'the' lạc chỗ ở cuối câu.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa về giá trị của những khoảnh khắc nhỏ bên gia đình.",
      },
    ],
  },
];
