import { Lesson } from "@/types/content";

/**
 * The very first lesson on the site. Content preserved 1:1 from the
 * original standalone "mon-an-viet" quiz.
 */
export const vietnameseFoodLesson: Lesson = {
  id: "vietnamese-food",
  slug: "noi-chuyen-mon-viet",
  topicId: "food-life",
  title: "Nói chuyện về món Việt",
  description: "Trò chuyện với khách về phở và cà phê Việt Nam.",
  level: "beginner",
  coverImage: "/images/food-talk-1.webp",
  questions: [
    {
      id: "food-1",
      type: "english_to_vietnamese",
      speaker: "Chloe",
      badgeEmoji: "🍜",
      imageUrl: "/images/food-talk-1.webp",
      english: "Have you ever had pho before?",
      vietnamese: "Bạn đã từng ăn phở chưa?",
      choices: [
        { id: "a", text: "Bạn đã từng ăn phở chưa?" },
        { id: "b", text: "Bạn có thích màu sơn này không?" },
        { id: "c", text: "Bạn muốn làm móng dài hơn không?" },
      ],
      correctAnswer: "a",
      explanation:
        "Câu này đúng vì 'Have you ever had pho before?' dùng để hỏi khách đã từng ăn phở chưa. Mẫu câu 'Have you ever...?' rất thường dùng để hỏi về trải nghiệm trong quá khứ. Đây là câu hỏi tự nhiên và thân thiện khi trò chuyện với khách.",
      wrongAnswerExplanations:
        "Các đáp án còn lại sai vì chúng nói về màu sơn và độ dài móng — không liên quan gì đến chuyện ăn uống hay món phở mà câu tiếng Anh đang hỏi.",
      usageTip:
        "Câu này thường dùng để mở đầu câu chuyện về đồ ăn Việt Nam với khách, đặc biệt khi khách tò mò về văn hóa Việt Nam hoặc khi hai người đang trò chuyện thoải mái lúc làm nails.",
    },
    {
      id: "food-2",
      type: "vietnamese_to_english",
      speaker: "Chloe",
      badgeEmoji: "😋",
      imageUrl: "/images/food-talk-1.webp",
      english: "Do you like pho?",
      vietnamese: "Bạn có thích phở không?",
      promptContext: "Chloe muốn hỏi khách có thích ăn phở không. Chọn câu tiếng Anh đúng.",
      choices: [
        { id: "a", text: "Do you like pho?" },
        { id: "b", text: "Are you like pho?" },
        { id: "c", text: "Do you liking pho?" },
      ],
      correctAnswer: "a",
      explanation:
        "Câu đúng là 'Do you like pho?' vì đây là câu hỏi Yes/No ở thì hiện tại đơn, dùng trợ động từ 'Do' + chủ ngữ + động từ nguyên mẫu 'like'. Đây là cách hỏi sở thích rất phổ biến và tự nhiên trong tiếng Anh.",
      wrongAnswerExplanations:
        "Đáp án 'Are you like pho?' sai vì 'like' là động từ thường, không được dùng với 'are'. Đáp án 'Do you liking pho?' sai vì sau trợ động từ 'do' phải dùng động từ nguyên mẫu 'like', không phải dạng '-ing' là 'liking'.",
      usageTip:
        "Dùng câu này khi muốn hỏi khách có thích một món ăn nào đó không — rất hữu ích khi trò chuyện thân thiện trong lúc làm nails.",
    },
    {
      id: "food-3",
      type: "vietnamese_to_english",
      speaker: "Chloe",
      badgeEmoji: "☕",
      imageUrl: "/images/food-talk-2.webp",
      english: "You should try Vietnamese coffee sometime.",
      vietnamese: "Bạn nên thử cà phê Việt Nam vào lúc nào đó.",
      promptContext: "Chloe muốn gợi ý khách thử cà phê Việt Nam. Chọn câu tiếng Anh đúng.",
      choices: [
        { id: "a", text: "You should try Vietnamese coffee sometime." },
        { id: "b", text: "You should trying Vietnamese coffee." },
        { id: "c", text: "Your nails look great today." },
      ],
      correctAnswer: "a",
      explanation:
        "Câu đúng dùng mẫu 'should + động từ nguyên mẫu' để đưa ra lời khuyên hoặc gợi ý một cách nhẹ nhàng, thân thiện. 'Sometime' nghĩa là 'lúc nào đó', dùng khi gợi ý mà không ép buộc thời gian cụ thể.",
      wrongAnswerExplanations:
        "Đáp án 'You should trying Vietnamese coffee.' sai vì sau 'should' phải dùng động từ nguyên mẫu 'try', không phải dạng '-ing' là 'trying'. Đáp án 'Your nails look great today.' sai vì câu này nói về móng tay, không liên quan đến việc gợi ý đồ uống.",
      usageTip:
        "Câu này rất hữu ích khi bạn muốn giới thiệu món ăn hoặc thức uống Việt Nam cho khách một cách tự nhiên, không tạo cảm giác ép buộc.",
    },
    {
      id: "food-4",
      type: "fill_blank",
      speaker: "Khách",
      badgeEmoji: "🤔",
      imageUrl: "/images/food-talk-2.webp",
      english: "Is Vietnamese coffee very strong?",
      vietnamese: "Cà phê Việt Nam có đậm lắm không?",
      prompt: "Is Vietnamese coffee very ___?",
      choices: [
        { id: "a", text: "strong" },
        { id: "b", text: "strongly" },
        { id: "c", text: "strength" },
      ],
      correctAnswer: "a",
      explanation:
        "Đáp án đúng là 'strong' vì sau 'very' cần dùng tính từ để mô tả cà phê. 'Strong' là tính từ nghĩa là 'đậm, mạnh' — dùng để nói về hương vị cà phê đậm đặc.",
      wrongAnswerExplanations:
        "'Strongly' là trạng từ, không dùng để mô tả danh từ sau 'very' trong câu này. 'Strength' là danh từ (nghĩa là 'sức mạnh'), không phù hợp về ngữ pháp trong câu hỏi này.",
      usageTip:
        "Khách nước ngoài thường tò mò vì cà phê Việt Nam có vị đậm hơn cà phê Mỹ, nên đây là câu hỏi rất thường gặp khi nói về cà phê Việt Nam.",
    },
    {
      id: "food-5",
      type: "english_to_vietnamese",
      speaker: "Chloe",
      badgeEmoji: "🍲",
      imageUrl: "/images/food-talk-3.webp",
      english: "What kind of pho do you like?",
      vietnamese: "Bạn thích loại phở nào?",
      choices: [
        { id: "a", text: "Bạn thích loại phở nào?" },
        { id: "b", text: "Bạn thích màu sơn nào?" },
        { id: "c", text: "Bạn muốn làm móng kiểu nào?" },
      ],
      correctAnswer: "a",
      explanation:
        "'What kind of...?' là mẫu câu dùng để hỏi về loại hoặc kiểu của một thứ gì đó. Trong câu này, Chloe hỏi khách thích loại phở nào, ví dụ phở bò hay phở gà.",
      wrongAnswerExplanations:
        "Các đáp án còn lại sai vì chúng nói về màu sơn và kiểu móng — đây là câu hỏi về đồ ăn, không liên quan đến dịch vụ nails.",
      usageTip:
        "Dùng câu này khi bạn muốn hỏi khách cụ thể hơn về sở thích ăn uống, ví dụ để sau đó giới thiệu món phở phù hợp.",
    },
    {
      id: "food-6",
      type: "conversation_response",
      speaker: "Khách",
      badgeEmoji: "👍",
      imageUrl: "/images/food-talk-3.webp",
      english: "I recommend beef pho. It's the most popular.",
      vietnamese: "Tôi đề nghị phở bò. Đó là món phổ biến nhất.",
      prompt: "I'm not sure which pho to try.",
      promptVietnamese: "Tôi không chắc nên thử loại phở nào.",
      choices: [
        { id: "a", text: "I recommend beef pho. It's the most popular." },
        { id: "b", text: "I recommend beef pho, it popular most." },
        { id: "c", text: "The pho is too expensive today." },
      ],
      correctAnswer: "a",
      explanation:
        "'I recommend...' dùng để gợi ý hoặc giới thiệu một món gì đó. 'It's the most popular' nghĩa là 'đó là món phổ biến nhất', dùng để giải thích lý do nên chọn món này.",
      wrongAnswerExplanations:
        "Đáp án 'I recommend beef pho, it popular most.' sai vì trật tự từ không đúng ngữ pháp — phải nói 'It's the most popular', không phải 'it popular most'. Đáp án 'The pho is too expensive today.' sai vì không liên quan đến việc giới thiệu món ăn, mà nói về giá cả.",
      usageTip:
        "Câu này hữu ích khi bạn muốn giúp khách chọn món ăn Việt Nam, đặc biệt khi khách chưa biết nên thử món gì.",
    },
    {
      id: "food-7",
      type: "conversation_response",
      speaker: "Chloe",
      badgeEmoji: "🙂",
      imageUrl: "/images/food-talk-4.webp",
      english: "Not yet, but I'd like to try it.",
      vietnamese: "Chưa, nhưng tôi muốn thử.",
      prompt: "Have you ever had pho before?",
      promptVietnamese: "Bạn đã từng ăn phở chưa?",
      choices: [
        { id: "a", text: "Not yet, but I'd like to try it." },
        { id: "b", text: "Not yet, but I don't want to try it." },
        { id: "c", text: "Yes, I make pho every day." },
      ],
      correctAnswer: "a",
      explanation:
        "'Not yet' nghĩa là 'chưa', dùng để trả lời rằng chưa từng làm việc gì đó. 'I'd like to try it' (viết đầy đủ là 'I would like to try it') nghĩa là 'tôi muốn thử', thể hiện sự quan tâm một cách lịch sự.",
      wrongAnswerExplanations:
        "Đáp án 'Not yet, but I don't want to try it.' sai vì mang nghĩa ngược lại — nói rằng khách không muốn thử, không phù hợp với ý 'muốn thử'. Đáp án 'Yes, I make pho every day.' sai vì không tự nhiên trong ngữ cảnh — khách đang trò chuyện ở tiệm nails, không phải đang tự nấu phở ở nhà.",
      usageTip:
        "Đây là cách trả lời rất tự nhiên và lịch sự khi ai đó hỏi bạn đã từng thử món gì chưa, thể hiện bạn cởi mở và quan tâm.",
    },
    {
      id: "food-8",
      type: "fill_blank",
      speaker: "Khách",
      badgeEmoji: "👂",
      imageUrl: "/images/food-talk-4.webp",
      english: "I've heard it's really good.",
      vietnamese: "Tôi nghe nói nó rất ngon.",
      prompt: "I've ___ it's really good.",
      choices: [
        { id: "a", text: "heard" },
        { id: "b", text: "hear" },
        { id: "c", text: "hearing" },
      ],
      correctAnswer: "a",
      explanation:
        "'I've heard' (viết đầy đủ là 'I have heard') là thì hiện tại hoàn thành, dùng động từ 'heard' — dạng quá khứ phân từ của 'hear'. Cấu trúc này dùng để nói bạn đã nghe được thông tin gì đó từ người khác.",
      wrongAnswerExplanations:
        "'Hear' là dạng nguyên mẫu, không dùng sau 'have/has' trong thì hiện tại hoàn thành. 'Hearing' là dạng '-ing', cũng không đúng ngữ pháp trong câu này.",
      usageTip:
        "Câu này rất thường dùng khi khách muốn nói họ đã nghe người khác khen một món ăn nào đó, dù chưa từng ăn thử.",
    },
    {
      id: "food-9",
      type: "vietnamese_to_english",
      speaker: "Khách",
      badgeEmoji: "😅",
      imageUrl: "/images/food-talk-5.webp",
      english: "It's strong, but delicious.",
      vietnamese: "Nó đậm, nhưng ngon.",
      promptContext:
        "Khách vừa nếm thử cà phê Việt Nam. Chọn câu khách nói để diễn tả cà phê đậm nhưng ngon.",
      choices: [
        { id: "a", text: "It's strong, but delicious." },
        { id: "b", text: "It's strong, but deliciously." },
        { id: "c", text: "It's too sweet for me." },
      ],
      correctAnswer: "a",
      explanation:
        "Câu này dùng hai tính từ 'strong' và 'delicious' nối bằng 'but' để diễn tả hai đặc điểm trái ngược của cà phê — vừa đậm vừa ngon. Đây là cách nói tự nhiên khi nhận xét về hương vị món ăn hoặc thức uống.",
      wrongAnswerExplanations:
        "Đáp án 'It's strong, but deliciously.' sai vì 'deliciously' là trạng từ, không dùng để mô tả tính chất của cà phê ở đây — phải dùng tính từ 'delicious'. Đáp án 'It's too sweet for me.' sai vì nói về độ ngọt, không đúng với nội dung 'đậm nhưng ngon' mà tình huống yêu cầu.",
      usageTip:
        "Câu này hữu ích khi khách muốn khen một món ăn hoặc thức uống có vị mạnh nhưng vẫn ngon — nhận xét rất phổ biến về cà phê Việt Nam.",
    },
    {
      id: "food-10",
      type: "english_to_vietnamese",
      speaker: "Khách",
      badgeEmoji: "👋",
      imageUrl: "/images/food-talk-5.webp",
      english: "I'll try it next time.",
      vietnamese: "Lần sau tôi sẽ thử nó.",
      choices: [
        { id: "a", text: "Lần sau tôi sẽ thử nó." },
        { id: "b", text: "Tôi không bao giờ muốn thử." },
        { id: "c", text: "Tôi đã thử rồi hôm qua." },
      ],
      correctAnswer: "a",
      explanation:
        "'I'll' là viết tắt của 'I will', dùng để nói về dự định trong tương lai. 'Next time' nghĩa là 'lần sau'. Câu này thể hiện ý định nhẹ nhàng, tích cực mà không cần cam kết ngay lập tức.",
      wrongAnswerExplanations:
        "Đáp án 'Tôi không bao giờ muốn thử.' sai vì mang nghĩa từ chối hoàn toàn, ngược với ý 'sẽ thử'. Đáp án 'Tôi đã thử rồi hôm qua.' sai vì nói về việc đã làm trong quá khứ, không phù hợp với 'next time' (chỉ tương lai).",
      usageTip:
        "Đây là câu kết thúc cuộc trò chuyện rất tự nhiên và tích cực, thường dùng khi khách quan tâm nhưng chưa sẵn sàng thử ngay lúc đó.",
    },
  ],
};
