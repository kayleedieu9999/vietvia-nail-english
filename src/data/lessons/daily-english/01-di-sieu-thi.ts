import { Lesson } from "@/types/content";

export const dailyEnglishGroup01: Lesson[] = [
  {
    id: "de-1",
    slug: "de-01-tim-do-sieu-thi-1",
    topicId: "daily-english",
    title: "Tìm đồ trong siêu thị",
    description: "Học cách hỏi nhân viên siêu thị chỗ để một món đồ.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-1-1",
        type: "situation_response",
        badgeEmoji: "🛒",
        english: "Excuse me, where can I find the rice?",
        vietnamese: "Xin lỗi, gạo để ở đâu vậy?",
        promptContext:
          "Bạn đang đi trong siêu thị và không tìm thấy kệ để gạo. Bạn muốn hỏi một nhân viên đang đứng gần đó.",
        choices: [
          { id: "a", text: "Excuse me, where can I find the rice?" },
          { id: "b", text: "Excuse me, how much is this?" },
          { id: "c", text: "Excuse me, what time do you close?" },
        ],
        correctAnswer: "a",
        explanation:
          "Bạn đang tìm một món đồ cụ thể (gạo) nên cần hỏi 'where can I find' để biết vị trí của nó trong siêu thị.",
        wrongAnswerExplanations:
          "'How much is this?' hỏi về giá, không giúp bạn tìm chỗ để gạo. 'What time do you close?' hỏi về giờ đóng cửa, không liên quan đến việc tìm đồ.",
        usageTip: "Dùng khi bạn không biết một món đồ nằm ở khu vực nào trong siêu thị.",
      },
      {
        id: "de-1-2",
        type: "conversation_response",
        speaker: "Nhân viên",
        badgeEmoji: "🙋",
        english: "It's in aisle five, next to the pasta.",
        vietnamese: "Nó ở dãy số năm, kế bên mì Ý đó.",
        prompt: "Where can I find the rice?",
        promptVietnamese: "Gạo để ở đâu vậy?",
        choices: [
          { id: "a", text: "It's in aisle five, next to the pasta." },
          { id: "b", text: "It costs three dollars." },
          { id: "c", text: "We open at eight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi vị trí món đồ, nhân viên nên trả lời bằng số dãy (aisle) và vật gần đó để khách dễ tìm.",
        wrongAnswerExplanations:
          "'It costs three dollars.' trả lời về giá, không phải vị trí. 'We open at eight.' nói về giờ mở cửa, không liên quan đến câu hỏi.",
        usageTip: "Dùng khi bạn là người được hỏi và biết món đồ nằm ở dãy nào.",
      },
      {
        id: "de-1-3",
        type: "vietnamese_to_english",
        badgeEmoji: "🥚",
        english: "Do you know which aisle the eggs are in?",
        vietnamese: "Chị có biết trứng ở dãy nào không?",
        promptContext:
          "Bạn muốn hỏi một người đang mua sắm gần đó xem họ có biết trứng nằm ở dãy nào không.",
        choices: [
          { id: "a", text: "Do you know which aisle the eggs are in?" },
          { id: "b", text: "Do you know what time it is?" },
          { id: "c", text: "Do you know if this is fresh?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Which aisle' là 'dãy nào' — câu này hỏi đúng về vị trí của trứng trong siêu thị.",
        wrongAnswerExplanations:
          "'Do you know what time it is?' hỏi về giờ giấc, không liên quan. 'Do you know if this is fresh?' hỏi về độ tươi, không phải vị trí.",
        usageTip: "Dùng khi bạn muốn hỏi một người mua sắm khác (không phải nhân viên) về vị trí đồ.",
      },
      {
        id: "de-1-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "The milk is in the back, near the dairy section.",
        vietnamese: "Sữa ở phía sau, gần khu sản phẩm từ sữa.",
        prompt: "The milk is in the ___, near the dairy section.",
        choices: [
          { id: "a", text: "back" },
          { id: "b", text: "price" },
          { id: "c", text: "receipt" },
        ],
        correctAnswer: "a",
        explanation: "'In the back' nghĩa là 'ở phía sau' — đúng vị trí thường thấy của khu sữa trong siêu thị.",
        wrongAnswerExplanations:
          "'Price' và 'receipt' đều là danh từ không hợp ngữ pháp và ngữ nghĩa ở vị trí này.",
        usageTip: "Dùng để nhớ mẫu câu chỉ vị trí đồ trong siêu thị bằng 'in the back'.",
      },
      {
        id: "de-1-5",
        type: "conversation_response",
        speaker: "Nhân viên",
        badgeEmoji: "😊",
        english: "Sure, follow me, I'll show you.",
        vietnamese: "Dạ được, đi theo tôi, tôi chỉ cho.",
        prompt: "Can you show me where the bread is?",
        promptVietnamese: "Chị chỉ giúp tôi bánh mì để ở đâu được không?",
        choices: [
          { id: "a", text: "Sure, follow me, I'll show you." },
          { id: "b", text: "Sorry, we don't sell bread." },
          { id: "c", text: "It closes in ten minutes." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách nhờ chỉ đường đến một khu, nhân viên nên sẵn lòng dẫn khách đến đó.",
        wrongAnswerExplanations:
          "'Sorry, we don't sell bread.' không hợp lý vì hầu hết siêu thị đều có bán bánh mì. 'It closes in ten minutes.' lạc đề, không liên quan đến việc chỉ đường.",
        usageTip: "Dùng khi khách nhờ dẫn đến khu vực có món đồ họ cần.",
      },
      {
        id: "de-1-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Is there anything else I can help you find?",
        vietnamese: "Còn gì khác tôi giúp chị tìm không?",
        audioText: "Is there anything else I can help you find?",
        choices: [
          { id: "a", text: "Còn gì khác tôi giúp chị tìm không?" },
          { id: "b", text: "Chị có muốn thanh toán bằng thẻ không?" },
          { id: "c", text: "Chị có phải là thành viên không?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Anything else' là 'còn gì khác', và 'help you find' là 'giúp tìm' — câu này hỏi xem khách còn cần tìm thêm gì không.",
        wrongAnswerExplanations:
          "Câu gốc không nhắc đến việc thanh toán hay thẻ thành viên, chỉ hỏi về việc tìm thêm đồ.",
        usageTip: "Dùng khi nhân viên vừa giúp khách tìm xong một món và muốn hỏi thêm.",
      },
      {
        id: "de-1-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🧴",
        english: "The shampoo is on the shelf above the soap.",
        vietnamese: "Dầu gội ở trên kệ, phía trên xà phòng.",
        prompt: "The shampoo is on the shelf above the soap.",
        choices: [
          { id: "a", text: "Dầu gội ở trên kệ, phía trên xà phòng." },
          { id: "b", text: "Dầu gội đang giảm giá năm mươi phần trăm." },
          { id: "c", text: "Dầu gội đã hết hàng rồi." },
        ],
        correctAnswer: "a",
        explanation:
          "'Above' nghĩa là 'phía trên' — câu này chỉ chính xác vị trí của dầu gội so với xà phòng.",
        wrongAnswerExplanations:
          "Câu gốc không nói gì về giảm giá hay hết hàng, chỉ mô tả vị trí trên kệ.",
        usageTip: "Dùng khi mô tả vị trí một món đồ so với món đồ khác trên kệ.",
      },
      {
        id: "de-1-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Could you tell me where the frozen food is?",
        vietnamese: "Chị chỉ giúp tôi đồ đông lạnh ở đâu được không?",
        promptContext:
          "Bạn muốn hỏi lịch sự một nhân viên xem đồ đông lạnh nằm ở đâu trong siêu thị.",
        choices: [
          { id: "a", text: "Could you tell me where the frozen food is?" },
          { id: "b", text: "Could you tell me where is the frozen food?" },
          { id: "c", text: "Could you tell me the frozen food where is?" },
        ],
        correctAnswer: "a",
        explanation:
          "Trong câu hỏi gián tiếp, trật tự từ giữ nguyên như câu khẳng định: 'where the frozen food is', không đảo động từ lên trước chủ ngữ.",
        wrongAnswerExplanations:
          "'Could you tell me where is the frozen food?' đảo sai trật tự từ trong mệnh đề hỏi gián tiếp. 'Could you tell me the frozen food where is?' bị xáo trộn hoàn toàn, không đúng ngữ pháp.",
        usageTip: "Dùng khi hỏi lịch sự về vị trí đồ, đặc biệt trong câu hỏi gián tiếp bắt đầu bằng 'could you tell me'.",
      },
      {
        id: "de-1-9",
        type: "conversation_response",
        speaker: "Nhân viên",
        badgeEmoji: "📦",
        english: "It's right around the corner, on your left.",
        vietnamese: "Nó ngay góc kia, bên tay trái của chị.",
        prompt: "Where is the cereal aisle?",
        promptVietnamese: "Dãy để ngũ cốc ở đâu vậy?",
        choices: [
          { id: "a", text: "It's right around the corner, on your left." },
          { id: "b", text: "It's five dollars a box." },
          { id: "c", text: "We're closed on Sundays." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi vị trí một dãy hàng, nhân viên nên chỉ hướng cụ thể như 'around the corner, on your left'.",
        wrongAnswerExplanations:
          "'It's five dollars a box.' trả lời về giá, không phải vị trí. 'We're closed on Sundays.' nói về giờ mở cửa, lạc đề hoàn toàn.",
        usageTip: "Dùng khi chỉ đường đến một khu vực cụ thể trong siêu thị bằng cách nói hướng rẽ.",
      },
      {
        id: "de-1-10",
        type: "situation_response",
        badgeEmoji: "🙏",
        english: "Thank you so much for your help.",
        vietnamese: "Cảm ơn chị rất nhiều vì đã giúp đỡ.",
        promptContext:
          "Nhân viên vừa dẫn bạn đến đúng khu vực có món đồ bạn cần tìm. Bạn muốn cảm ơn họ.",
        choices: [
          { id: "a", text: "Thank you so much for your help." },
          { id: "b", text: "This is too expensive for me." },
          { id: "c", text: "I don't need this anymore." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau khi được giúp đỡ, câu trả lời tự nhiên và lịch sự nhất là cảm ơn người đã giúp mình.",
        wrongAnswerExplanations:
          "'This is too expensive for me.' và 'I don't need this anymore.' đều không liên quan đến việc cảm ơn sự giúp đỡ vừa nhận được.",
        usageTip: "Dùng bất cứ khi nào ai đó vừa giúp bạn tìm được món đồ cần mua.",
      },
    ],
  },
  {
    id: "de-2",
    slug: "de-02-hoi-gia-khuyen-mai-1",
    topicId: "daily-english",
    title: "Hỏi giá và khuyến mãi",
    description: "Luyện câu hỏi về giá cả và chương trình giảm giá ở siêu thị.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-2-1",
        type: "situation_response",
        badgeEmoji: "💲",
        english: "Excuse me, how much is this box of cereal?",
        vietnamese: "Xin lỗi, hộp ngũ cốc này giá bao nhiêu vậy?",
        promptContext:
          "Bạn cầm một hộp ngũ cốc không có giá niêm yết rõ ràng và muốn hỏi nhân viên gần đó.",
        choices: [
          { id: "a", text: "Excuse me, how much is this box of cereal?" },
          { id: "b", text: "Excuse me, where is the exit?" },
          { id: "c", text: "Excuse me, do you have a restroom?" },
        ],
        correctAnswer: "a",
        explanation:
          "Bạn đang cầm món đồ và không biết giá, nên câu hỏi phù hợp nhất là hỏi trực tiếp giá của nó.",
        wrongAnswerExplanations:
          "'Where is the exit?' và 'Do you have a restroom?' không liên quan gì đến việc hỏi giá món đồ.",
        usageTip: "Dùng khi một món hàng không ghi giá rõ ràng và bạn cần hỏi nhân viên.",
      },
      {
        id: "de-2-2",
        type: "conversation_response",
        speaker: "Nhân viên",
        badgeEmoji: "🏷️",
        english: "It's four ninety-nine, but it's on sale this week.",
        vietnamese: "Giá bốn đô chín mươi chín xu, nhưng tuần này đang giảm giá.",
        prompt: "How much is this box of cereal?",
        promptVietnamese: "Hộp ngũ cốc này giá bao nhiêu vậy?",
        choices: [
          { id: "a", text: "It's four ninety-nine, but it's on sale this week." },
          { id: "b", text: "It's in aisle three." },
          { id: "c", text: "We close at nine tonight." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách hỏi giá, nhân viên nên trả lời số tiền cụ thể, và có thể thêm thông tin về khuyến mãi nếu có.",
        wrongAnswerExplanations:
          "'It's in aisle three.' trả lời về vị trí, không phải giá. 'We close at nine tonight.' nói về giờ đóng cửa, lạc đề.",
        usageTip: "Dùng khi trả lời khách về giá một món hàng cụ thể.",
      },
      {
        id: "de-2-3",
        type: "vietnamese_to_english",
        badgeEmoji: "📉",
        english: "Is this item on sale this week?",
        vietnamese: "Món này tuần này có đang giảm giá không?",
        promptContext:
          "Bạn thấy một món đồ có bảng giá màu đỏ và muốn hỏi xem nó có đang được giảm giá không.",
        choices: [
          { id: "a", text: "Is this item on sale this week?" },
          { id: "b", text: "Is this item fresh today?" },
          { id: "c", text: "Is this item made in the USA?" },
        ],
        correctAnswer: "a",
        explanation:
          "'On sale' nghĩa là 'đang giảm giá' — đây là câu hỏi đúng để kiểm tra một món đồ có khuyến mãi không.",
        wrongAnswerExplanations:
          "'Is this item fresh today?' hỏi về độ tươi, không liên quan đến giá. 'Is this item made in the USA?' hỏi về xuất xứ, không phải khuyến mãi.",
        usageTip: "Dùng khi bạn nghi ngờ một món đồ đang có chương trình giảm giá.",
      },
      {
        id: "de-2-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "Buy one, get one free this week only.",
        vietnamese: "Mua một tặng một, chỉ trong tuần này thôi.",
        prompt: "Buy one, get one ___ this week only.",
        choices: [
          { id: "a", text: "free" },
          { id: "b", text: "receipt" },
          { id: "c", text: "cart" },
        ],
        correctAnswer: "a",
        explanation:
          "'Buy one, get one free' là mẫu câu khuyến mãi rất phổ biến, nghĩa là 'mua một tặng một'.",
        wrongAnswerExplanations:
          "'Receipt' và 'cart' đều là danh từ không phù hợp về nghĩa trong mẫu câu khuyến mãi này.",
        usageTip: "Dùng để nhận biết mẫu câu khuyến mãi phổ biến ở siêu thị Mỹ.",
      },
      {
        id: "de-2-5",
        type: "conversation_response",
        speaker: "Nhân viên",
        badgeEmoji: "🎟️",
        english: "You need a store card to get that discount.",
        vietnamese: "Chị cần thẻ thành viên của cửa hàng để được giảm giá đó.",
        prompt: "Why is the price different on the shelf?",
        promptVietnamese: "Sao giá trên kệ lại khác vậy?",
        choices: [
          { id: "a", text: "You need a store card to get that discount." },
          { id: "b", text: "The store is closing early today." },
          { id: "c", text: "That item is out of stock." },
        ],
        correctAnswer: "a",
        explanation:
          "Nhiều siêu thị có giá riêng cho thành viên, nên nhân viên nên giải thích rõ lý do giá khác nhau.",
        wrongAnswerExplanations:
          "'The store is closing early today.' và 'That item is out of stock.' đều không giải thích được lý do giá khác nhau trên kệ.",
        usageTip: "Dùng khi giải thích cho khách về chương trình giá thành viên.",
      },
      {
        id: "de-2-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "This price is only for members with a store card.",
        vietnamese: "Giá này chỉ dành cho thành viên có thẻ cửa hàng.",
        audioText: "This price is only for members with a store card.",
        choices: [
          { id: "a", text: "Giá này chỉ dành cho thành viên có thẻ cửa hàng." },
          { id: "b", text: "Giá này áp dụng cho tất cả mọi người." },
          { id: "c", text: "Giá này chỉ áp dụng vào cuối tuần." },
        ],
        correctAnswer: "a",
        explanation:
          "'Only for members' nghĩa là 'chỉ dành cho thành viên' — câu này nói rõ điều kiện để được giá đó.",
        wrongAnswerExplanations:
          "Câu gốc không nói giá áp dụng cho tất cả mọi người, và cũng không nhắc đến cuối tuần.",
        usageTip: "Dùng khi nghe thông báo về điều kiện áp dụng giá khuyến mãi.",
      },
      {
        id: "de-2-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🧾",
        english: "The discount will show up at checkout.",
        vietnamese: "Tiền giảm giá sẽ hiện ra khi tính tiền.",
        prompt: "The discount will show up at checkout.",
        choices: [
          { id: "a", text: "Tiền giảm giá sẽ hiện ra khi tính tiền." },
          { id: "b", text: "Món hàng đã hết hạn sử dụng." },
          { id: "c", text: "Món hàng phải trả lại trong ba mươi ngày." },
        ],
        correctAnswer: "a",
        explanation:
          "'Show up at checkout' nghĩa là 'hiện ra khi tính tiền' — câu này nói tiền giảm giá sẽ tự động trừ lúc thanh toán.",
        wrongAnswerExplanations:
          "Câu gốc không nói gì về hạn sử dụng hay chính sách trả hàng, chỉ nói về việc giảm giá lúc tính tiền.",
        usageTip: "Dùng khi giải thích cho khách rằng khuyến mãi sẽ tự động áp dụng lúc thanh toán.",
      },
      {
        id: "de-2-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Do you have a coupon for this item?",
        vietnamese: "Chị có phiếu giảm giá cho món này không?",
        promptContext:
          "Nhân viên thu ngân muốn hỏi khách có phiếu giảm giá (coupon) cho món hàng đang mua không.",
        choices: [
          { id: "a", text: "Do you have a coupon for this item?" },
          { id: "b", text: "Do you have a coupon this item for?" },
          { id: "c", text: "Do you have this item a coupon for?" },
        ],
        correctAnswer: "a",
        explanation:
          "Trật tự đúng là 'a coupon for this item' — giới từ 'for' đứng trước danh từ mà nó bổ nghĩa.",
        wrongAnswerExplanations:
          "'Do you have a coupon this item for?' và 'Do you have this item a coupon for?' đều đặt sai vị trí của 'for this item', làm câu khó hiểu.",
        usageTip: "Dùng khi thu ngân hỏi khách về phiếu giảm giá trước khi tính tiền.",
      },
      {
        id: "de-2-9",
        type: "situation_response",
        badgeEmoji: "🤔",
        english: "Is there a cheaper brand available?",
        vietnamese: "Có nhãn hiệu nào rẻ hơn không vậy?",
        promptContext:
          "Bạn thấy giá món đồ hơi cao và muốn hỏi nhân viên xem có loại rẻ hơn không.",
        choices: [
          { id: "a", text: "Is there a cheaper brand available?" },
          { id: "b", text: "Is there a bigger size available?" },
          { id: "c", text: "Is there a manager available?" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi bạn quan tâm đến giá, câu hỏi phù hợp là hỏi về một nhãn hiệu rẻ hơn, không phải kích cỡ hay người quản lý.",
        wrongAnswerExplanations:
          "'Is there a bigger size available?' hỏi về kích cỡ, không liên quan đến giá. 'Is there a manager available?' hỏi về người quản lý, không phù hợp ngữ cảnh này.",
        usageTip: "Dùng khi bạn thấy giá cao và muốn tìm lựa chọn rẻ hơn.",
      },
      {
        id: "de-2-10",
        type: "vietnamese_to_english",
        badgeEmoji: "✅",
        english: "That's a good deal, I'll take two.",
        vietnamese: "Giá đó tốt đó, tôi lấy hai cái.",
        promptContext:
          "Bạn thấy giá khuyến mãi rất tốt và quyết định mua hai món luôn.",
        choices: [
          { id: "a", text: "That's a good deal, I'll take two." },
          { id: "b", text: "That's too expensive, no thanks." },
          { id: "c", text: "I already have one at home." },
        ],
        correctAnswer: "a",
        explanation:
          "'Good deal' nghĩa là 'giá tốt' — khi hài lòng với giá, bạn nói sẽ mua thêm số lượng mình muốn.",
        wrongAnswerExplanations:
          "'That's too expensive, no thanks.' ngược nghĩa với việc hài lòng và muốn mua. 'I already have one at home.' không phù hợp khi bạn đang muốn mua thêm.",
        usageTip: "Dùng khi bạn thấy giá khuyến mãi hời và quyết định mua thêm.",
      },
    ],
  },
  {
    id: "de-3",
    slug: "de-03-thanh-toan-tro-chuyen-1",
    topicId: "daily-english",
    title: "Trò chuyện lúc thanh toán",
    description: "Những câu nói nhỏ thường nghe khi xếp hàng thanh toán ở quầy thu ngân.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-3-1",
        type: "conversation_response",
        speaker: "Thu ngân",
        badgeEmoji: "🛍️",
        english: "Did you find everything you needed today?",
        vietnamese: "Hôm nay chị đã tìm được hết đồ cần mua chưa?",
        prompt: "Hi, how are you today?",
        promptVietnamese: "Chào chị, hôm nay chị khỏe không?",
        choices: [
          { id: "a", text: "I'm good, thanks. Did you find everything you needed today?" },
          { id: "b", text: "That will be twenty dollars." },
          { id: "c", text: "Do you have a bag?" },
        ],
        correctAnswer: "a",
        explanation:
          "Đây là câu chào xã giao phổ biến ở quầy thu ngân Mỹ, đáp lại lời hỏi thăm rồi hỏi lại khách một câu quen thuộc.",
        wrongAnswerExplanations:
          "'That will be twenty dollars.' và 'Do you have a bag?' đều chưa phù hợp để đáp lại lời chào hỏi ban đầu.",
        usageTip: "Dùng khi thu ngân chào hỏi bạn lúc bắt đầu thanh toán.",
      },
      {
        id: "de-3-2",
        type: "situation_response",
        badgeEmoji: "🙂",
        english: "Yes, I found everything, thank you.",
        vietnamese: "Dạ, tôi tìm được hết rồi, cảm ơn chị.",
        promptContext:
          "Thu ngân hỏi bạn có tìm được hết đồ cần mua không. Bạn đã mua đủ và muốn trả lời lịch sự.",
        choices: [
          { id: "a", text: "Yes, I found everything, thank you." },
          { id: "b", text: "No, this store is too small." },
          { id: "c", text: "I don't like this store." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi thăm xã giao, câu trả lời tự nhiên và lịch sự nhất là xác nhận đã tìm đủ đồ và cảm ơn.",
        wrongAnswerExplanations:
          "'No, this store is too small.' và 'I don't like this store.' nghe tiêu cực, không phù hợp để đáp lại câu hỏi xã giao thân thiện.",
        usageTip: "Dùng để đáp lại câu hỏi thăm dò xã giao thường gặp ở quầy thanh toán.",
      },
      {
        id: "de-3-3",
        type: "conversation_response",
        speaker: "Thu ngân",
        badgeEmoji: "💳",
        english: "Will that be cash or card today?",
        vietnamese: "Hôm nay chị trả tiền mặt hay thẻ vậy?",
        prompt: "Your total is thirty-two dollars.",
        promptVietnamese: "Tổng cộng là ba mươi hai đô la.",
        choices: [
          { id: "a", text: "I'll pay with card, please." },
          { id: "b", text: "I found everything, thanks." },
          { id: "c", text: "Yes, this is on sale." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe tổng tiền, bạn nên nói hình thức thanh toán mình chọn, ví dụ như thẻ hay tiền mặt.",
        wrongAnswerExplanations:
          "'I found everything, thanks.' và 'Yes, this is on sale.' đều không trả lời đúng vào việc chọn hình thức thanh toán.",
        usageTip: "Dùng khi thu ngân báo tổng tiền và bạn cần chọn cách thanh toán.",
      },
      {
        id: "de-3-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "Do you need a bag for these items?",
        vietnamese: "Chị có cần túi để đựng mấy món này không?",
        prompt: "Do you need a ___ for these items?",
        choices: [
          { id: "a", text: "bag" },
          { id: "b", text: "receipt" },
          { id: "c", text: "coupon" },
        ],
        correctAnswer: "a",
        explanation:
          "'Bag' là 'túi' — câu này hỏi khách có cần túi để đựng đồ vừa mua không, rất thường gặp ở quầy thu ngân.",
        wrongAnswerExplanations:
          "'Receipt' (hóa đơn) và 'coupon' (phiếu giảm giá) không phù hợp với ngữ cảnh câu hỏi về việc đựng đồ.",
        usageTip: "Dùng để nhận biết câu hỏi quen thuộc của thu ngân về việc cần túi hay không.",
      },
      {
        id: "de-3-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Would you like your receipt in the bag or in your hand?",
        vietnamese: "Chị muốn để hóa đơn trong túi hay cầm tay?",
        audioText: "Would you like your receipt in the bag or in your hand?",
        choices: [
          { id: "a", text: "Chị muốn để hóa đơn trong túi hay cầm tay?" },
          { id: "b", text: "Chị muốn trả bằng tiền mặt hay thẻ?" },
          { id: "c", text: "Chị muốn thêm túi nữa không?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Receipt' là 'hóa đơn' — câu này hỏi bạn muốn để hóa đơn ở đâu sau khi thanh toán xong.",
        wrongAnswerExplanations:
          "Câu gốc không hỏi về hình thức thanh toán hay số lượng túi, chỉ hỏi về vị trí để hóa đơn.",
        usageTip: "Dùng khi nghe thu ngân hỏi về việc để hóa đơn ở đâu sau khi tính tiền xong.",
      },
      {
        id: "de-3-6",
        type: "english_to_vietnamese",
        badgeEmoji: "💵",
        english: "Your change is three dollars and fifty cents.",
        vietnamese: "Tiền thối của chị là ba đô năm mươi xu.",
        prompt: "Your change is three dollars and fifty cents.",
        choices: [
          { id: "a", text: "Tiền thối của chị là ba đô năm mươi xu." },
          { id: "b", text: "Tổng tiền của chị là ba đô năm mươi xu." },
          { id: "c", text: "Phiếu giảm giá của chị là ba đô năm mươi xu." },
        ],
        correctAnswer: "a",
        explanation:
          "'Change' nghĩa là 'tiền thối lại' — câu này thông báo số tiền thu ngân trả lại cho bạn sau khi thanh toán.",
        wrongAnswerExplanations:
          "Câu gốc không nói về tổng tiền phải trả hay phiếu giảm giá, chỉ nói về tiền thối lại.",
        usageTip: "Dùng để nhận biết khi thu ngân thông báo tiền thối lại cho bạn.",
      },
      {
        id: "de-3-7",
        type: "situation_response",
        badgeEmoji: "🧾",
        english: "Can I get a receipt, please?",
        vietnamese: "Cho tôi xin hóa đơn được không?",
        promptContext:
          "Bạn vừa thanh toán xong nhưng thu ngân quên đưa hóa đơn cho bạn. Bạn muốn xin lại.",
        choices: [
          { id: "a", text: "Can I get a receipt, please?" },
          { id: "b", text: "Can I get a discount, please?" },
          { id: "c", text: "Can I get a refund, please?" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi chưa nhận hóa đơn, câu hỏi phù hợp là xin lại hóa đơn, không phải xin giảm giá hay hoàn tiền.",
        wrongAnswerExplanations:
          "'Can I get a discount, please?' và 'Can I get a refund, please?' không liên quan đến việc thiếu hóa đơn.",
        usageTip: "Dùng khi thu ngân quên đưa hóa đơn sau khi bạn thanh toán xong.",
      },
      {
        id: "de-3-8",
        type: "conversation_response",
        speaker: "Thu ngân",
        badgeEmoji: "😊",
        english: "Have a nice day, see you next time!",
        vietnamese: "Chúc chị một ngày tốt lành, hẹn gặp lại lần sau nhé!",
        prompt: "Thank you, have a great day.",
        promptVietnamese: "Cảm ơn chị, chúc chị một ngày tốt lành.",
        choices: [
          { id: "a", text: "You too, thanks for your help!" },
          { id: "b", text: "This is too expensive." },
          { id: "c", text: "I need a bigger cart." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi thu ngân chúc bạn một ngày tốt lành, bạn nên đáp lại lịch sự và cảm ơn họ đã giúp đỡ.",
        wrongAnswerExplanations:
          "'This is too expensive.' và 'I need a bigger cart.' đều không phù hợp để đáp lại lời chúc tạm biệt.",
        usageTip: "Dùng để đáp lại lời chào tạm biệt của thu ngân sau khi thanh toán xong.",
      },
      {
        id: "de-3-9",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "I think this item rang up wrong.",
        vietnamese: "Tôi nghĩ món này bị tính sai giá rồi.",
        promptContext:
          "Bạn thấy giá trên màn hình thu ngân cao hơn giá dán trên kệ và muốn báo lại.",
        choices: [
          { id: "a", text: "I think this item rang up wrong." },
          { id: "b", text: "I think this item rang wrong up." },
          { id: "c", text: "I think this item up rang wrong." },
        ],
        correctAnswer: "a",
        explanation:
          "'Ring up' là cụm động từ nghĩa là 'tính tiền vào máy' — dạng đúng ở đây là 'rang up wrong' (bị tính sai).",
        wrongAnswerExplanations:
          "'I think this item rang wrong up.' và 'I think this item up rang wrong.' đều sắp xếp sai vị trí của cụm động từ 'ring up'.",
        usageTip: "Dùng khi bạn phát hiện giá tính tiền không khớp với giá niêm yết trên kệ.",
      },
      {
        id: "de-3-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🛒",
        english: "Sorry, can I add one more item?",
        vietnamese: "Xin lỗi, tôi có thể thêm một món nữa được không?",
        promptContext:
          "Bạn đang đứng ở quầy thanh toán nhưng nhớ ra còn quên một món chưa lấy. Bạn muốn hỏi thu ngân có thể thêm vào không.",
        choices: [
          { id: "a", text: "Sorry, can I add one more item?" },
          { id: "b", text: "Sorry, can I return this item?" },
          { id: "c", text: "Sorry, can I cancel my order?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Add one more item' nghĩa là 'thêm một món nữa' — đúng câu để nói khi bạn muốn mua thêm ngay lúc đang thanh toán.",
        wrongAnswerExplanations:
          "'Can I return this item?' là xin trả hàng, không phải thêm hàng. 'Can I cancel my order?' là hủy đơn, không đúng ý muốn thêm đồ.",
        usageTip: "Dùng khi bạn nhớ ra cần mua thêm một món trong lúc đang thanh toán.",
      },
    ],
  },
  {
    id: "de-4",
    slug: "de-04-hoi-nhan-hieu-kich-co-1",
    topicId: "daily-english",
    title: "Hỏi về nhãn hiệu và kích cỡ",
    description: "Luyện hỏi nhân viên về một nhãn hiệu cụ thể hoặc kích cỡ khác.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-4-1",
        type: "situation_response",
        badgeEmoji: "🏷️",
        english: "Do you carry this brand of coffee?",
        vietnamese: "Ở đây có bán nhãn hiệu cà phê này không?",
        promptContext:
          "Bạn đang tìm một nhãn hiệu cà phê quen thuộc nhưng không thấy trên kệ. Bạn muốn hỏi nhân viên.",
        choices: [
          { id: "a", text: "Do you carry this brand of coffee?" },
          { id: "b", text: "Do you sell coffee cups?" },
          { id: "c", text: "Do you have a coffee machine?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Carry a brand' nghĩa là 'có bán nhãn hiệu đó' — đây là cách hỏi tự nhiên khi tìm một nhãn hiệu cụ thể.",
        wrongAnswerExplanations:
          "'Do you sell coffee cups?' hỏi về ly cà phê, không phải nhãn hiệu. 'Do you have a coffee machine?' hỏi về máy pha cà phê, lạc đề.",
        usageTip: "Dùng khi bạn tìm một nhãn hiệu cụ thể mà không thấy trên kệ.",
      },
      {
        id: "de-4-2",
        type: "conversation_response",
        speaker: "Nhân viên",
        badgeEmoji: "😔",
        english: "Sorry, we don't carry that brand here.",
        vietnamese: "Xin lỗi, ở đây không có bán nhãn hiệu đó.",
        prompt: "Do you carry this brand of coffee?",
        promptVietnamese: "Ở đây có bán nhãn hiệu cà phê này không?",
        choices: [
          { id: "a", text: "Sorry, we don't carry that brand here." },
          { id: "b", text: "Yes, that's five dollars." },
          { id: "c", text: "It closes at ten." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi siêu thị không có nhãn hiệu khách hỏi, nhân viên nên xin lỗi và nói rõ là không có bán.",
        wrongAnswerExplanations:
          "'Yes, that's five dollars.' không hợp lý vì câu hỏi không phải về giá. 'It closes at ten.' nói về giờ đóng cửa, không liên quan.",
        usageTip: "Dùng khi trả lời khách rằng siêu thị không bán nhãn hiệu họ đang tìm.",
      },
      {
        id: "de-4-3",
        type: "vietnamese_to_english",
        badgeEmoji: "📏",
        english: "Do you have this in a bigger size?",
        vietnamese: "Có món này cỡ lớn hơn không vậy?",
        promptContext:
          "Bạn cầm một hộp bột giặt nhỏ và muốn hỏi xem có cỡ lớn hơn không.",
        choices: [
          { id: "a", text: "Do you have this in a bigger size?" },
          { id: "b", text: "Do you have this in a different color?" },
          { id: "c", text: "Do you have this for a lower price?" },
        ],
        correctAnswer: "a",
        explanation:
          "'In a bigger size' nghĩa là 'cỡ lớn hơn' — đúng câu hỏi khi bạn muốn tìm phiên bản lớn hơn của một món đồ.",
        wrongAnswerExplanations:
          "'In a different color' hỏi về màu sắc, không phải kích cỡ. 'For a lower price' hỏi về giá, không đúng ý câu gốc.",
        usageTip: "Dùng khi bạn muốn hỏi có phiên bản lớn hơn của một sản phẩm không.",
      },
      {
        id: "de-4-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "This detergent comes in a smaller size too.",
        vietnamese: "Bột giặt này cũng có cỡ nhỏ hơn nữa.",
        prompt: "This detergent comes in a ___ size too.",
        choices: [
          { id: "a", text: "smaller" },
          { id: "b", text: "cheaper" },
          { id: "c", text: "fresher" },
        ],
        correctAnswer: "a",
        explanation:
          "'Smaller size' nghĩa là 'cỡ nhỏ hơn' — đúng từ để nói về kích cỡ khác của sản phẩm.",
        wrongAnswerExplanations:
          "'Cheaper' nói về giá và 'fresher' nói về độ tươi, cả hai không phù hợp khi đang nói về kích cỡ.",
        usageTip: "Dùng khi giới thiệu cho khách một kích cỡ khác của cùng sản phẩm.",
      },
      {
        id: "de-4-5",
        type: "conversation_response",
        speaker: "Nhân viên",
        badgeEmoji: "🔍",
        english: "Let me check in the back for you.",
        vietnamese: "Để tôi kiểm tra ở kho phía sau cho chị.",
        prompt: "I can't find the large size on the shelf.",
        promptVietnamese: "Tôi không thấy cỡ lớn trên kệ.",
        choices: [
          { id: "a", text: "Let me check in the back for you." },
          { id: "b", text: "That size doesn't exist." },
          { id: "c", text: "You should go to another store." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách không tìm thấy hàng trên kệ, nhân viên nên sẵn lòng kiểm tra kho phía sau trước khi kết luận.",
        wrongAnswerExplanations:
          "'That size doesn't exist.' là câu trả lời thiếu nhiệt tình và có thể sai. 'You should go to another store.' không nên nói ngay khi chưa kiểm tra kỹ.",
        usageTip: "Dùng khi khách không tìm thấy kích cỡ mong muốn trên kệ hàng.",
      },
      {
        id: "de-4-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "This is our store brand. It's cheaper than the name brand.",
        vietnamese: "Đây là nhãn hiệu riêng của cửa hàng. Nó rẻ hơn nhãn hiệu nổi tiếng.",
        audioText: "This is our store brand. It's cheaper than the name brand.",
        choices: [
          { id: "a", text: "Đây là nhãn hiệu riêng của cửa hàng. Nó rẻ hơn nhãn hiệu nổi tiếng." },
          { id: "b", text: "Đây là hàng mới về. Nó đắt hơn hàng cũ." },
          { id: "c", text: "Đây là hàng hết hạn. Nó phải bỏ đi." },
        ],
        correctAnswer: "a",
        explanation:
          "'Store brand' là 'nhãn hiệu riêng của cửa hàng' và 'cheaper' là 'rẻ hơn' — câu này giới thiệu về nhãn hiệu riêng giá tốt.",
        wrongAnswerExplanations:
          "Câu gốc không nói về hàng mới về hay hàng hết hạn, chỉ so sánh giá giữa nhãn hiệu riêng và nhãn hiệu nổi tiếng.",
        usageTip: "Dùng khi nhân viên giới thiệu nhãn hiệu riêng của siêu thị như một lựa chọn rẻ hơn.",
      },
      {
        id: "de-4-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🌈",
        english: "This brand only comes in two colors.",
        vietnamese: "Nhãn hiệu này chỉ có hai màu thôi.",
        prompt: "This brand only comes in two colors.",
        choices: [
          { id: "a", text: "Nhãn hiệu này chỉ có hai màu thôi." },
          { id: "b", text: "Nhãn hiệu này chỉ có hai cỡ thôi." },
          { id: "c", text: "Nhãn hiệu này chỉ bán vào cuối tuần." },
        ],
        correctAnswer: "a",
        explanation:
          "'Comes in two colors' nghĩa là 'chỉ có hai màu' — câu này nói về số lượng màu sắc có sẵn của nhãn hiệu đó.",
        wrongAnswerExplanations:
          "Câu gốc nói về màu sắc, không phải kích cỡ hay ngày bán hàng.",
        usageTip: "Dùng khi giải thích cho khách về số lượng màu sắc có sẵn của một sản phẩm.",
      },
      {
        id: "de-4-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Is there a difference between these two brands?",
        vietnamese: "Hai nhãn hiệu này có gì khác nhau không?",
        promptContext:
          "Bạn thấy hai hộp bột giặt khác nhãn hiệu nhưng giá gần giống nhau, và muốn hỏi nhân viên sự khác biệt.",
        choices: [
          { id: "a", text: "Is there a difference between these two brands?" },
          { id: "b", text: "Is there a difference between these two brand?" },
          { id: "c", text: "Is there difference between these two brands?" },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng cần danh từ số nhiều 'brands' vì đang so sánh hai nhãn hiệu, và cần mạo từ 'a' trước 'difference'.",
        wrongAnswerExplanations:
          "'...these two brand?' dùng sai số ít cho danh từ đáng lẽ phải số nhiều. 'Is there difference...' thiếu mạo từ 'a' trước 'difference', sai ngữ pháp.",
        usageTip: "Dùng khi so sánh hai nhãn hiệu và muốn biết sự khác biệt giữa chúng.",
      },
      {
        id: "de-4-9",
        type: "situation_response",
        badgeEmoji: "✅",
        english: "I'll take the store brand instead, thanks.",
        vietnamese: "Vậy tôi lấy nhãn hiệu của cửa hàng luôn nhé, cảm ơn.",
        promptContext:
          "Sau khi nghe nhân viên giải thích nhãn hiệu riêng của cửa hàng rẻ hơn, bạn quyết định chọn nó.",
        choices: [
          { id: "a", text: "I'll take the store brand instead, thanks." },
          { id: "b", text: "I don't want to buy anything now." },
          { id: "c", text: "I'll come back another day." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi đã quyết định chọn nhãn hiệu rẻ hơn, câu trả lời tự nhiên là xác nhận lựa chọn đó và cảm ơn.",
        wrongAnswerExplanations:
          "'I don't want to buy anything now.' và 'I'll come back another day.' đều không phù hợp khi bạn đã quyết định mua.",
        usageTip: "Dùng khi bạn quyết định chọn nhãn hiệu riêng của cửa hàng thay vì nhãn hiệu nổi tiếng.",
      },
      {
        id: "de-4-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "Do you have this in a different flavor?",
        vietnamese: "Có món này vị khác không vậy?",
        promptContext:
          "Bạn đang cầm một hộp sữa chua và muốn hỏi nhân viên có vị khác không.",
        choices: [
          { id: "a", text: "Do you have this in a different flavor?" },
          { id: "b", text: "Do you have this in a different store?" },
          { id: "c", text: "Do you have this for a different day?" },
        ],
        correctAnswer: "a",
        explanation:
          "'A different flavor' nghĩa là 'một vị khác' — đúng câu hỏi khi bạn muốn tìm vị khác của một sản phẩm ăn uống.",
        wrongAnswerExplanations:
          "'A different store' và 'a different day' không liên quan đến việc hỏi về vị của sản phẩm.",
        usageTip: "Dùng khi bạn muốn hỏi về các vị khác nhau của thực phẩm hoặc đồ uống.",
      },
    ],
  },
  {
    id: "de-5",
    slug: "de-05-tra-hang-sieu-thi-1",
    topicId: "daily-english",
    title: "Trả lại món hàng đã mua",
    description: "Học cách nói khi muốn trả lại một món hàng ở siêu thị.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-5-1",
        type: "situation_response",
        badgeEmoji: "↩️",
        english: "I'd like to return this item, please.",
        vietnamese: "Tôi muốn trả lại món này, được không ạ.",
        promptContext:
          "Bạn mua nhầm một món đồ và muốn đem đến quầy dịch vụ khách hàng để trả lại.",
        choices: [
          { id: "a", text: "I'd like to return this item, please." },
          { id: "b", text: "I'd like to buy this item, please." },
          { id: "c", text: "I'd like to try this item, please." },
        ],
        correctAnswer: "a",
        explanation:
          "'Return an item' nghĩa là 'trả lại một món hàng' — đây là câu mở đầu chuẩn khi muốn trả hàng.",
        wrongAnswerExplanations:
          "'I'd like to buy this item, please.' nghĩa là muốn mua, ngược lại với ý định trả hàng. 'I'd like to try this item, please.' là muốn dùng thử, không đúng ngữ cảnh.",
        usageTip: "Dùng khi bạn mang một món hàng đến quầy dịch vụ khách hàng để trả lại.",
      },
      {
        id: "de-5-2",
        type: "conversation_response",
        speaker: "Nhân viên",
        badgeEmoji: "🧾",
        english: "Do you have your receipt with you?",
        vietnamese: "Chị có mang theo hóa đơn không?",
        prompt: "I'd like to return this item, please.",
        promptVietnamese: "Tôi muốn trả lại món này, được không ạ.",
        choices: [
          { id: "a", text: "Do you have your receipt with you?" },
          { id: "b", text: "What time do you close?" },
          { id: "c", text: "Do you need a bigger cart?" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi khách muốn trả hàng, nhân viên thường cần kiểm tra hóa đơn trước để xác nhận việc mua hàng.",
        wrongAnswerExplanations:
          "'What time do you close?' và 'Do you need a bigger cart?' đều không liên quan đến thủ tục trả hàng.",
        usageTip: "Dùng khi bắt đầu xử lý yêu cầu trả hàng của khách.",
      },
      {
        id: "de-5-3",
        type: "vietnamese_to_english",
        badgeEmoji: "💔",
        english: "This is broken. Can I get a refund?",
        vietnamese: "Cái này bị hư rồi. Tôi có thể được hoàn tiền không?",
        promptContext:
          "Bạn mở hộp ra ở nhà và phát hiện món đồ bị hư, nên quay lại siêu thị để xin hoàn tiền.",
        choices: [
          { id: "a", text: "This is broken. Can I get a refund?" },
          { id: "b", text: "This is heavy. Can I get some help?" },
          { id: "c", text: "This is expensive. Can I get a discount?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Broken' là 'bị hư', và 'refund' là 'hoàn tiền' — đúng câu để nói khi món hàng bị lỗi và bạn muốn lấy lại tiền.",
        wrongAnswerExplanations:
          "'This is heavy. Can I get some help?' là nhờ giúp mang đồ nặng, không liên quan đến hàng bị hư. 'This is expensive. Can I get a discount?' là xin giảm giá, khác với việc hoàn tiền do hàng lỗi.",
        usageTip: "Dùng khi phát hiện món hàng bị hư hỏng và muốn xin hoàn lại tiền.",
      },
      {
        id: "de-5-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "You can get store credit instead of cash.",
        vietnamese: "Chị có thể nhận tiền để mua đồ trong cửa hàng thay vì tiền mặt.",
        prompt: "You can get store ___ instead of cash.",
        choices: [
          { id: "a", text: "credit" },
          { id: "b", text: "brand" },
          { id: "c", text: "discount" },
        ],
        correctAnswer: "a",
        explanation:
          "'Store credit' là một hình thức hoàn tiền dưới dạng số dư để mua đồ trong cửa hàng, thay vì trả lại tiền mặt.",
        wrongAnswerExplanations:
          "'Brand' và 'discount' không phù hợp về nghĩa trong ngữ cảnh nói về hình thức hoàn tiền.",
        usageTip: "Dùng để hiểu cụm từ 'store credit' — một lựa chọn hoàn tiền phổ biến khi trả hàng.",
      },
      {
        id: "de-5-5",
        type: "conversation_response",
        speaker: "Nhân viên",
        badgeEmoji: "❓",
        english: "What's the reason for the return?",
        vietnamese: "Lý do chị trả hàng là gì vậy?",
        prompt: "I'd like to return this, please.",
        promptVietnamese: "Tôi muốn trả lại món này, được không ạ.",
        choices: [
          { id: "a", text: "What's the reason for the return?" },
          { id: "b", text: "How much does it cost?" },
          { id: "c", text: "Where did you park?" },
        ],
        correctAnswer: "a",
        explanation:
          "Nhân viên thường cần hỏi lý do trả hàng để xử lý đúng thủ tục, ví dụ hàng lỗi hay mua nhầm.",
        wrongAnswerExplanations:
          "'How much does it cost?' và 'Where did you park?' đều không liên quan đến quy trình xử lý trả hàng.",
        usageTip: "Dùng khi nhân viên cần biết lý do khách muốn trả hàng.",
      },
      {
        id: "de-5-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "You have thirty days to return this item.",
        vietnamese: "Chị có ba mươi ngày để trả lại món này.",
        audioText: "You have thirty days to return this item.",
        choices: [
          { id: "a", text: "Chị có ba mươi ngày để trả lại món này." },
          { id: "b", text: "Chị có ba mươi phần trăm giảm giá." },
          { id: "c", text: "Chị có ba mươi món hàng trong giỏ." },
        ],
        correctAnswer: "a",
        explanation:
          "'Thirty days to return' nghĩa là 'ba mươi ngày để trả hàng' — thông báo về thời hạn được phép trả lại món hàng.",
        wrongAnswerExplanations:
          "Câu gốc không nhắc đến phần trăm giảm giá hay số lượng món hàng, chỉ nói về thời hạn trả hàng.",
        usageTip: "Dùng để hiểu thông báo về chính sách thời hạn trả hàng của cửa hàng.",
      },
      {
        id: "de-5-7",
        type: "english_to_vietnamese",
        badgeEmoji: "📦",
        english: "The item must be unopened to get a full refund.",
        vietnamese: "Món hàng phải còn nguyên chưa mở để được hoàn tiền đầy đủ.",
        prompt: "The item must be unopened to get a full refund.",
        choices: [
          { id: "a", text: "Món hàng phải còn nguyên chưa mở để được hoàn tiền đầy đủ." },
          { id: "b", text: "Món hàng phải còn hạn sử dụng để được đổi mới." },
          { id: "c", text: "Món hàng phải có hóa đơn gốc để được giảm giá." },
        ],
        correctAnswer: "a",
        explanation:
          "'Unopened' nghĩa là 'chưa mở' và 'full refund' là 'hoàn tiền đầy đủ' — đây là điều kiện thường gặp khi trả hàng.",
        wrongAnswerExplanations:
          "Câu gốc không nói về hạn sử dụng hay giảm giá, chỉ nói về điều kiện hàng chưa mở để được hoàn tiền đủ.",
        usageTip: "Dùng khi nhân viên giải thích điều kiện để được hoàn tiền đầy đủ.",
      },
      {
        id: "de-5-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "I bought this by mistake, can I exchange it?",
        vietnamese: "Tôi mua nhầm món này, tôi đổi được không?",
        promptContext:
          "Bạn vô tình mua nhầm loại sữa không phải loại mình cần và muốn đổi sang loại khác.",
        choices: [
          { id: "a", text: "I bought this by mistake, can I exchange it?" },
          { id: "b", text: "I bought this by mistake, can I exchange?" },
          { id: "c", text: "I bought this mistake, can I exchange it?" },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng cần cụm 'by mistake' (do nhầm lẫn) và động từ 'exchange' cần có tân ngữ 'it' theo sau.",
        wrongAnswerExplanations:
          "'...can I exchange?' thiếu tân ngữ 'it' sau động từ. 'I bought this mistake...' thiếu giới từ 'by' trước 'mistake', sai ngữ pháp.",
        usageTip: "Dùng khi bạn mua nhầm sản phẩm và muốn đổi sang sản phẩm khác.",
      },
      {
        id: "de-5-9",
        type: "situation_response",
        badgeEmoji: "✅",
        english: "Thank you, this refund really helps.",
        vietnamese: "Cảm ơn chị, tiền hoàn lại này giúp tôi nhiều lắm.",
        promptContext:
          "Sau khi nhân viên xử lý xong việc hoàn tiền cho món hàng bị lỗi, bạn muốn cảm ơn họ.",
        choices: [
          { id: "a", text: "Thank you, this refund really helps." },
          { id: "b", text: "This store is too far from my house." },
          { id: "c", text: "I will never shop here again." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau khi được giải quyết ổn thỏa, câu trả lời tự nhiên nhất là cảm ơn nhân viên đã giúp đỡ.",
        wrongAnswerExplanations:
          "'This store is too far from my house.' và 'I will never shop here again.' đều không phù hợp khi bạn vừa được giúp đỡ tốt.",
        usageTip: "Dùng để cảm ơn sau khi được hoàn tiền hoặc đổi hàng thành công.",
      },
      {
        id: "de-5-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "How long does the refund take to process?",
        vietnamese: "Hoàn tiền mất bao lâu để xử lý xong vậy?",
        promptContext:
          "Bạn vừa nộp yêu cầu hoàn tiền và muốn biết mất bao lâu thì tiền sẽ về lại thẻ.",
        choices: [
          { id: "a", text: "How long does the refund take to process?" },
          { id: "b", text: "How long does the store stay open?" },
          { id: "c", text: "How long does the sale last?" },
        ],
        correctAnswer: "a",
        explanation:
          "'How long does it take to process' nghĩa là 'mất bao lâu để xử lý' — đúng câu hỏi khi bạn muốn biết thời gian nhận lại tiền hoàn.",
        wrongAnswerExplanations:
          "'How long does the store stay open?' hỏi về giờ mở cửa, không liên quan. 'How long does the sale last?' hỏi về thời gian khuyến mãi, không đúng ý câu gốc.",
        usageTip: "Dùng khi bạn muốn biết thời gian xử lý một yêu cầu hoàn tiền.",
      },
    ],
  },
];
