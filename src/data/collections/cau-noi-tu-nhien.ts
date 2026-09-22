import { CollectionData } from "@/types/collection";

/**
 * "500 Câu nói tự nhiên kiểu Mỹ" — curriculum name/target size. Casual,
 * real spoken English (not textbook phrasing), organized by situation.
 */
export const cauNoiTuNhienData: CollectionData = {
  key: "cau-noi-tu-nhien",
  title: "500 Câu nói tự nhiên kiểu Mỹ",
  subtitle: "Những câu ngắn người Mỹ thường dùng trong giao tiếp hằng ngày.",
  groups: [
    {
      id: "small-talk",
      title: "Small Talk",
      items: [
        { id: "p-sounds-good", english: "Sounds good.", vietnamese: "Nghe hay đó / Được đó.", whenToUse: "Đồng ý với một ý kiến hoặc kế hoạch.", example: "\"Let's start at 9.\" \"Sounds good.\"" },
        { id: "p-how-is-it-going", english: "How's it going?", vietnamese: "Dạo này sao rồi?", whenToUse: "Chào hỏi thân mật.", example: "Hey! How's it going?" },
        { id: "p-not-much", english: "Not much, you?", vietnamese: "Không có gì nhiều, còn bạn?", whenToUse: "Trả lời khi ai hỏi \"What's up?\"", example: "\"What's up?\" \"Not much, you?\"" },
        { id: "p-long-time", english: "Long time no see.", vietnamese: "Lâu rồi không gặp.", whenToUse: "Gặp lại người quen sau lâu ngày.", example: "Hey, long time no see!" },
        { id: "p-im-good", english: "I'm good.", vietnamese: "Tôi ổn.", whenToUse: "Trả lời khi ai hỏi thăm.", example: "\"How are you?\" \"I'm good, thanks.\"" },
      ],
    },
    {
      id: "at-work",
      title: "At Work",
      items: [
        { id: "p-give-second", english: "Give me a second.", vietnamese: "Chờ tôi một chút.", whenToUse: "Cần thêm thời gian ngắn.", example: "Give me a second, I'll be right there." },
        { id: "p-take-your-time", english: "Take your time.", vietnamese: "Cứ từ từ.", whenToUse: "Trấn an ai đó không cần vội.", example: "No rush, take your time." },
        { id: "p-ill-let-you-know", english: "I'll let you know.", vietnamese: "Tôi sẽ báo lại cho bạn.", whenToUse: "Hứa sẽ trả lời sau.", example: "I'll let you know by tomorrow." },
        { id: "p-let-me-check", english: "Let me check.", vietnamese: "Để tôi kiểm tra.", whenToUse: "Cần xác nhận thông tin trước khi trả lời.", example: "Let me check the schedule." },
        { id: "p-works-for-me", english: "That works for me.", vietnamese: "Vậy được với tôi.", whenToUse: "Đồng ý với đề nghị về thời gian/kế hoạch.", example: "\"Is 3pm okay?\" \"That works for me.\"" },
      ],
    },
    {
      id: "appointments",
      title: "Appointments",
      items: [
        { id: "p-all-set", english: "Are you all set?", vietnamese: "Bạn xong chưa / sẵn sàng chưa?", whenToUse: "Hỏi khách đã sẵn sàng chưa.", example: "Are you all set for your appointment?" },
        { id: "p-on-my-way", english: "I'm on my way.", vietnamese: "Tôi đang trên đường đến.", whenToUse: "Báo đang di chuyển tới.", example: "I'm on my way, five minutes." },
        { id: "p-running-late", english: "I'm running a bit late.", vietnamese: "Tôi trễ một chút.", whenToUse: "Báo trước khi đến trễ.", example: "Sorry, I'm running a bit late." },
        { id: "p-hold-on", english: "Hold on a second.", vietnamese: "Chờ một chút.", whenToUse: "Yêu cầu ai đợi trong giây lát.", example: "Hold on a second, let me check." },
        { id: "p-see-you-then", english: "See you then.", vietnamese: "Hẹn gặp lúc đó nhé.", whenToUse: "Kết thúc khi đã chốt giờ hẹn.", example: "\"3pm works.\" \"Great, see you then.\"" },
      ],
    },
    {
      id: "shopping",
      title: "Shopping",
      items: [
        { id: "p-just-looking", english: "I'm just looking.", vietnamese: "Tôi chỉ xem thôi.", whenToUse: "Trả lời khi nhân viên hỏi cần giúp gì.", example: "\"Can I help you?\" \"I'm just looking, thanks.\"" },
        { id: "p-how-much", english: "How much is this?", vietnamese: "Cái này giá bao nhiêu?", whenToUse: "Hỏi giá.", example: "How much is this polish?" },
        { id: "p-ill-take-it", english: "I'll take it.", vietnamese: "Tôi lấy cái này.", whenToUse: "Quyết định mua.", example: "I'll take it, thank you." },
        { id: "p-do-you-have", english: "Do you have this in pink?", vietnamese: "Có màu hồng không?", whenToUse: "Hỏi màu/loại khác.", example: "Do you have this in a lighter color?" },
        { id: "p-thats-fine", english: "That's fine, thanks.", vietnamese: "Vậy được rồi, cảm ơn.", whenToUse: "Từ chối lịch sự hoặc đồng ý nhẹ nhàng.", example: "\"Want a bag?\" \"That's fine, thanks.\"" },
      ],
    },
    {
      id: "restaurant",
      title: "Restaurant",
      items: [
        { id: "p-table-for-two", english: "Table for two, please.", vietnamese: "Cho bàn hai người.", whenToUse: "Xin bàn khi vào nhà hàng.", example: "Hi, table for two, please." },
        { id: "p-can-i-get", english: "Can I get the check, please?", vietnamese: "Cho tôi xin hóa đơn.", whenToUse: "Xin thanh toán.", example: "Can I get the check, please?" },
        { id: "p-im-good-thanks", english: "I'm good, thanks.", vietnamese: "Tôi ổn rồi, cảm ơn.", whenToUse: "Từ chối gọi thêm món.", example: "\"Want anything else?\" \"I'm good, thanks.\"" },
        { id: "p-to-go", english: "Can I get this to go?", vietnamese: "Cho tôi mang về.", whenToUse: "Muốn mang đồ ăn về.", example: "Can I get this to go?" },
        { id: "p-thats-all", english: "That's all for now.", vietnamese: "Vậy là đủ rồi.", whenToUse: "Kết thúc gọi món.", example: "That's all for now, thank you." },
      ],
    },
    {
      id: "driving",
      title: "Driving",
      items: [
        { id: "p-almost-there", english: "We're almost there.", vietnamese: "Sắp tới nơi rồi.", whenToUse: "Báo sắp đến nơi.", example: "We're almost there, five more minutes." },
        { id: "p-traffic", english: "Traffic is bad today.", vietnamese: "Hôm nay kẹt xe.", whenToUse: "Nói về tình trạng giao thông.", example: "Sorry I'm late, traffic is bad today." },
        { id: "p-park-anywhere", english: "You can park anywhere here.", vietnamese: "Bạn đậu chỗ nào cũng được.", whenToUse: "Hướng dẫn khách đậu xe.", example: "You can park anywhere here, it's free." },
        { id: "p-need-gas", english: "I need to get gas.", vietnamese: "Tôi cần đổ xăng.", whenToUse: "Nói cần đổ xăng.", example: "I need to get gas before we go." },
        { id: "p-watch-out", english: "Watch out!", vietnamese: "Coi chừng!", whenToUse: "Cảnh báo nguy hiểm gấp.", example: "Watch out, the road is icy." },
      ],
    },
    {
      id: "phone-calls",
      title: "Phone Calls",
      items: [
        { id: "p-speaking", english: "This is she/he speaking.", vietnamese: "Tôi đây (đang nghe máy).", whenToUse: "Xác nhận chính mình khi nghe điện thoại.", example: "\"Is this Lan?\" \"This is she speaking.\"" },
        { id: "p-can-you-repeat", english: "Can you repeat that, please?", vietnamese: "Bạn nói lại được không?", whenToUse: "Nghe không rõ, cần nhắc lại.", example: "Sorry, can you repeat that, please?" },
        { id: "p-ill-call-back", english: "I'll call you back.", vietnamese: "Tôi sẽ gọi lại.", whenToUse: "Không tiện nói chuyện lúc này.", example: "I'm busy now, I'll call you back." },
        { id: "p-hold-please", english: "Please hold.", vietnamese: "Xin giữ máy.", whenToUse: "Yêu cầu người gọi chờ.", example: "Please hold, I'll check for you." },
        { id: "p-wrong-number", english: "Sorry, wrong number.", vietnamese: "Xin lỗi, nhầm số.", whenToUse: "Gọi nhầm số điện thoại.", example: "Sorry, wrong number." },
      ],
    },
    {
      id: "customer-service",
      title: "Customer Service",
      items: [
        { id: "p-what-can-i-do", english: "What can I do for you?", vietnamese: "Tôi giúp gì được cho bạn?", whenToUse: "Hỏi khách cần gì.", example: "Hi there, what can I do for you today?" },
        { id: "p-no-worries", english: "No worries.", vietnamese: "Không sao đâu.", whenToUse: "Trấn an khách khi họ xin lỗi.", example: "\"Sorry I'm late.\" \"No worries.\"" },
        { id: "p-lets-fix", english: "Let's fix that for you.", vietnamese: "Để tôi sửa lại cho bạn.", whenToUse: "Đề nghị khắc phục vấn đề của khách.", example: "I see the issue, let's fix that for you." },
        { id: "p-anything-else", english: "Is there anything else I can help with?", vietnamese: "Bạn cần gì thêm không?", whenToUse: "Hỏi trước khi kết thúc phục vụ.", example: "Is there anything else I can help with?" },
        { id: "p-appreciate-it", english: "I really appreciate it.", vietnamese: "Tôi thật sự cảm kích.", whenToUse: "Cảm ơn chân thành.", example: "Thanks for waiting, I really appreciate it." },
      ],
    },
    {
      id: "friends-family",
      title: "Friends & Family",
      items: [
        { id: "p-lets-hang-out", english: "Let's hang out sometime.", vietnamese: "Khi nào đi chơi nhé.", whenToUse: "Rủ gặp gỡ, không cụ thể lịch.", example: "Let's hang out sometime this week." },
        { id: "p-miss-you", english: "I miss you.", vietnamese: "Tôi nhớ bạn.", whenToUse: "Bày tỏ nhớ nhung.", example: "I miss you, call me soon." },
        { id: "p-take-care", english: "Take care!", vietnamese: "Giữ gìn sức khỏe nhé!", whenToUse: "Lời chào tạm biệt thân thiện.", example: "Bye, take care!" },
        { id: "p-cant-wait", english: "I can't wait!", vietnamese: "Nóng lòng quá!", whenToUse: "Háo hức mong chờ điều gì.", example: "I can't wait to see you." },
        { id: "p-same-here", english: "Same here.", vietnamese: "Tôi cũng vậy.", whenToUse: "Đồng cảm với ý người khác.", example: "\"I'm so tired.\" \"Same here.\"" },
      ],
    },
    {
      id: "everyday-reactions",
      title: "Everyday Reactions",
      items: [
        { id: "p-no-way", english: "No way!", vietnamese: "Không thể nào!", whenToUse: "Ngạc nhiên.", example: "\"I won!\" \"No way!\"" },
        { id: "p-thats-too-bad", english: "That's too bad.", vietnamese: "Vậy tệ quá.", whenToUse: "Thể hiện sự tiếc nuối.", example: "\"I missed the bus.\" \"That's too bad.\"" },
        { id: "p-good-for-you", english: "Good for you!", vietnamese: "Giỏi quá / Mừng cho bạn!", whenToUse: "Khen ngợi thành tích của ai.", example: "\"I got the job!\" \"Good for you!\"" },
        { id: "p-you-got-this", english: "You got this!", vietnamese: "Bạn làm được mà!", whenToUse: "Động viên trước việc khó.", example: "Don't worry, you got this!" },
        { id: "p-makes-sense", english: "That makes sense.", vietnamese: "Vậy là hợp lý rồi.", whenToUse: "Hiểu và đồng ý với lời giải thích.", example: "Oh, that makes sense now." },
      ],
    },
  ],
};
