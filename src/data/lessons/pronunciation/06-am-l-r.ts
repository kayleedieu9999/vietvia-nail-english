import { Lesson } from "@/types/content";

export const pronunciationGroup06: Lesson[] = [
  {
    id: "pr-26",
    slug: "pr-26-am-l-r-dau-tu-1",
    topicId: "pronunciation",
    title: "Phân biệt L và R ở đầu từ",
    description: "Nghe và phân biệt âm L và R khi chúng đứng đầu từ, ví dụ light và right.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-26-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "light",
        vietnamese: "nhẹ / ánh sáng",
        audioText: "light",
        choices: [
          { id: "a", text: "light" },
          { id: "b", text: "right" },
          { id: "c", text: "night" },
        ],
        correctAnswer: "a",
        explanation:
          "Âm 'L' đầu từ được tạo bằng cách đưa đầu lưỡi chạm vào ngay sau răng cửa trên, giống như khi mình đọc chữ 'l' trong tiếng Việt (ví dụ 'la'). Hơi bật ra ở hai bên lưỡi, không rung.",
        wrongAnswerExplanations:
          "'right' bắt đầu bằng âm R — lưỡi cong lên, không chạm vào đâu cả, và hơi thoát ra ở giữa lưỡi chứ không phải hai bên. 'night' bắt đầu bằng âm N, đầu lưỡi cũng chạm gần răng nhưng hơi thoát ra bằng mũi, nghe khác hẳn.",
        usageTip: "Dùng khi cần phân biệt các từ bắt đầu bằng L với các từ bắt đầu bằng R hoặc N.",
      },
      {
        id: "pr-26-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "right",
        vietnamese: "đúng / bên phải",
        audioText: "right",
        choices: [
          { id: "a", text: "light" },
          { id: "b", text: "right" },
          { id: "c", text: "write" },
        ],
        correctAnswer: "b",
        explanation:
          "Âm 'R' đầu từ trong tiếng Anh — lưỡi cong nhẹ về phía sau, không chạm vào răng hay vòm miệng, môi hơi tròn lại một chút. Đây là âm không có trong tiếng Việt nên cần tập riêng, đừng đọc thành 'r' rung như tiếng Việt.",
        wrongAnswerExplanations:
          "'light' và 'write' đọc gần giống hệt 'right' về nghĩa lẫn âm cuối, nhưng câu hỏi này đang luyện nghe âm mở đầu — 'light' bắt đầu bằng L (lưỡi chạm răng), còn từ đúng 'right' bắt đầu bằng R (lưỡi cong, không chạm).",
        usageTip: "Dùng khi cần chỉ hướng hoặc xác nhận điều gì đó đúng.",
      },
      {
        id: "pr-26-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "'Long' and 'wrong' start with the same sound.",
        vietnamese: "'Long' và 'wrong' bắt đầu bằng cùng một âm.",
        prompt: "'Long' and 'wrong' start with the same sound.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai. 'Long' bắt đầu bằng âm L (lưỡi chạm ngay sau răng cửa trên), còn 'wrong' bắt đầu bằng âm R (lưỡi cong lại, không chạm đâu cả) — dù chữ 'w' xuất hiện trước 'r' trong cách viết nhưng không phát âm ra tiếng W.",
        wrongAnswerExplanations:
          "Nhiều người nhầm vì cách viết 'wrong' có chữ W, nhưng chữ W ở đây câm, từ này chỉ đọc là /rɔːŋ/ với âm R ở đầu, khác hoàn toàn với âm L của 'long'.",
        usageTip: "Dùng để nhớ rằng chữ W trong 'wrong', 'write', 'wrap' không được phát âm.",
      },
      {
        id: "pr-26-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "collect",
        vietnamese: "thu thập / lấy về",
        audioText: "collect",
        choices: [
          { id: "a", text: "collect" },
          { id: "b", text: "correct" },
          { id: "c", text: "connect" },
        ],
        correctAnswer: "a",
        explanation:
          "Trong 'collect', âm L nằm ở giữa từ (co-LL-ect) — lưỡi vẫn chạm vào sau răng cửa trên giống như âm L đầu từ, chỉ khác là nó xuất hiện ở giữa.",
        wrongAnswerExplanations:
          "'correct' có âm R ở giữa (cor-R-ect) — lưỡi cong lại chứ không chạm răng. 'connect' có âm N ở giữa, hơi thoát ra bằng mũi, nghe rất khác với L hay R.",
        usageTip: "Dùng khi nói về việc lấy đồ hoặc thu thập thứ gì đó, ví dụ 'collect the package' (lấy gói hàng).",
      },
      {
        id: "pr-26-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "correct",
        vietnamese: "đúng / sửa lại",
        audioText: "correct",
        choices: [
          { id: "a", text: "collect" },
          { id: "b", text: "correct" },
          { id: "c", text: "connect" },
        ],
        correctAnswer: "b",
        explanation:
          "Trong 'correct', âm R ở giữa từ (cor-R-ect) — lưỡi cong lên, không chạm vào đâu, khác với âm L cần lưỡi chạm vào sau răng cửa trên.",
        wrongAnswerExplanations:
          "Cả hai lựa chọn còn lại đều là 'collect' với âm L — nếu chọn nhầm nghĩa là đang nghe lưỡi chạm răng (L) thay vì lưỡi cong không chạm (R).",
        usageTip: "Dùng khi muốn nói điều gì đó là đúng, ví dụ 'That's correct' (Đúng vậy).",
      },
      {
        id: "pr-26-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "feel",
        vietnamese: "cảm thấy",
        audioText: "feel",
        choices: [
          { id: "a", text: "feel" },
          { id: "b", text: "fear" },
          { id: "c", text: "field" },
        ],
        correctAnswer: "a",
        explanation:
          "Âm L cuối từ như trong 'feel' — lưỡi vẫn chạm vào sau răng cửa trên như L đầu từ, nhưng hơi 'tối' hơn một chút vì đứng cuối từ (nghe hơi giống 'fi-ồ'), khác hẳn với không có âm R nào ở đây.",
        wrongAnswerExplanations:
          "'fear' kết thúc bằng âm R — lưỡi cong nhẹ, không chạm đâu, không có sự chạm lưỡi rõ ràng như L. 'field' có thêm âm D sau L, làm từ dài hơn và kết thúc khác hẳn.",
        usageTip: "Dùng khi nói về cảm xúc, ví dụ 'I feel good' (Tôi cảm thấy khỏe).",
      },
      {
        id: "pr-26-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "fear",
        vietnamese: "sợ hãi",
        audioText: "fear",
        choices: [
          { id: "a", text: "feel" },
          { id: "b", text: "fear" },
          { id: "c", text: "fee" },
        ],
        correctAnswer: "b",
        explanation:
          "Âm R cuối từ trong 'fear' không rung và không rõ ràng như R tiếng Việt — lưỡi chỉ cong nhẹ về sau, gần như chỉ làm cho nguyên âm trước đó nghe hơi 'sẫm' lại, không có sự chạm lưỡi.",
        wrongAnswerExplanations:
          "'feel' kết thúc bằng âm L rõ ràng, lưỡi chạm vào sau răng cửa trên. 'fee' không có phụ âm cuối, chỉ có nguyên âm dài.",
        usageTip: "Dùng khi nói về cảm giác sợ hãi, ví dụ 'no fear' (không sợ).",
      },
      {
        id: "pr-26-8",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "Please turn right at the light.",
        vietnamese: "Làm ơn rẽ phải ở đèn giao thông.",
        promptContext: "Bạn muốn chỉ đường cho khách, nói đúng cả hai từ chứa âm R và âm L.",
        choices: [
          { id: "a", text: "Please turn right at the light." },
          { id: "b", text: "Please turn light at the right." },
          { id: "c", text: "Please turn right at the night." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng dùng 'right' (rẽ phải, âm R) và 'light' (đèn, âm L) đúng vị trí — đây là câu chỉ đường tự nhiên và thường gặp.",
        wrongAnswerExplanations:
          "'Please turn light at the right.' đảo ngược hai từ khiến câu vô nghĩa. 'Please turn right at the night.' thay 'light' bằng 'night' (ban đêm), làm sai nghĩa hoàn toàn của câu chỉ đường.",
        usageTip: "Dùng khi chỉ đường cho khách hoặc bạn bè bằng tiếng Anh.",
      },
      {
        id: "pr-26-9",
        type: "listening",
        badgeEmoji: "🎧",
        english: "glass",
        vietnamese: "ly / kính",
        audioText: "glass",
        choices: [
          { id: "a", text: "grass" },
          { id: "b", text: "glass" },
          { id: "c", text: "class" },
        ],
        correctAnswer: "b",
        explanation:
          "Trong 'glass', sau âm G là âm L — lưỡi chạm vào sau răng cửa trên ngay khi bật hơi từ G ra, tạo cụm 'gl' rõ ràng.",
        wrongAnswerExplanations:
          "'grass' (cỏ) có cụm 'gr' với âm R — lưỡi cong, không chạm đâu, nghe khác hẳn cụm 'gl'. 'class' không có âm G ở đầu, chỉ có 'cl'.",
        usageTip: "Dùng khi nói về ly uống nước hoặc kính, ví dụ 'a glass of water' (một ly nước).",
      },
      {
        id: "pr-26-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "grass",
        vietnamese: "cỏ",
        audioText: "grass",
        choices: [
          { id: "a", text: "glass" },
          { id: "b", text: "class" },
          { id: "c", text: "grass" },
        ],
        correctAnswer: "c",
        explanation:
          "Trong 'grass', cụm 'gr' có âm R — sau khi bật hơi G, lưỡi cong lại chứ không chạm vào răng, khác hẳn cụm 'gl' có lưỡi chạm rõ ràng.",
        wrongAnswerExplanations:
          "'glass' (ly) có cụm 'gl' với âm L — lưỡi chạm sau răng cửa trên. 'class' (lớp học) cũng có âm L trong 'cl', không có âm G ở đầu.",
        usageTip: "Dùng khi nói về cỏ trong sân vườn, ví dụ 'cut the grass' (cắt cỏ).",
      },
    ],
  },
  {
    id: "pr-27",
    slug: "pr-27-am-l-r-cuoi-tu-1",
    topicId: "pronunciation",
    title: "Phân biệt L và R ở cuối từ",
    description: "Luyện nghe âm L và R khi đứng cuối từ, dễ bị lẫn khi nói nhanh.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-27-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "call",
        vietnamese: "gọi (điện)",
        audioText: "call",
        choices: [
          { id: "a", text: "call" },
          { id: "b", text: "car" },
          { id: "c", text: "core" },
        ],
        correctAnswer: "a",
        explanation:
          "'Call' kết thúc bằng âm L rõ ràng — lưỡi đưa lên chạm vào sau răng cửa trên. Người Việt hay bỏ luôn âm cuối này, nên cần chú ý giữ lưỡi chạm đủ.",
        wrongAnswerExplanations:
          "'car' kết thúc bằng âm R (không chạm lưỡi, chỉ cong nhẹ). 'core' cũng kết thúc bằng R và có nguyên âm khác — cả hai không có sự chạm lưỡi rõ như L.",
        usageTip: "Dùng khi nói về việc gọi điện thoại, ví dụ 'call me later' (gọi tôi sau nhé).",
      },
      {
        id: "pr-27-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "car",
        vietnamese: "xe hơi",
        audioText: "car",
        choices: [
          { id: "a", text: "call" },
          { id: "b", text: "car" },
          { id: "c", text: "core" },
        ],
        correctAnswer: "b",
        explanation:
          "'Car' kết thúc bằng âm R kiểu Mỹ — lưỡi cong nhẹ về sau ở cuối từ, không hề chạm vào đâu, nghe như âm được kéo dài ra chứ không dứt khoát như L.",
        wrongAnswerExplanations:
          "'call' kết thúc bằng L, có sự chạm lưỡi rõ ràng vào răng. 'core' tuy cũng có R nhưng nguyên âm khác hẳn (nghe như 'co-rr'), không phải từ 'car'.",
        usageTip: "Dùng khi nói về xe hơi, ví dụ 'my car is outside' (xe của tôi ở ngoài kia).",
      },
      {
        id: "pr-27-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "'Feel' and 'fear' end with the same sound.",
        vietnamese: "'Feel' và 'fear' kết thúc bằng cùng một âm.",
        prompt: "'Feel' and 'fear' end with the same sound.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai. 'Feel' kết thúc bằng âm L (lưỡi chạm vào sau răng), còn 'fear' kết thúc bằng âm R (lưỡi cong, không chạm). Hai âm này rất khác nhau dù người mới học dễ nghe nhầm là giống.",
        wrongAnswerExplanations:
          "Nếu nghe hai từ này thấy giống nhau, có thể bạn đang bỏ qua âm cuối — hãy tập nghe kỹ phần cuối từ, chú ý xem lưỡi có chạm vào răng hay không.",
        usageTip: "Dùng để luyện tai phân biệt âm cuối L và R trong các từ một âm tiết.",
      },
      {
        id: "pr-27-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "tell",
        vietnamese: "nói (cho ai biết)",
        audioText: "tell",
        choices: [
          { id: "a", text: "tell" },
          { id: "b", text: "tear" },
          { id: "c", text: "tail" },
        ],
        correctAnswer: "a",
        explanation:
          "'Tell' kết thúc bằng âm L — sau nguyên âm 'e', lưỡi đưa lên chạm ngay vào sau răng cửa trên, tạo âm dứt khoát.",
        wrongAnswerExplanations:
          "'tear' (nước mắt/xé) kết thúc bằng âm R, không có sự chạm lưỡi. 'tail' (cái đuôi) tuy cũng có âm L cuối nhưng nguyên âm khác hẳn ('ay' thay vì 'e').",
        usageTip: "Dùng khi muốn nhờ ai đó nói cho mình biết điều gì, ví dụ 'tell me' (nói cho tôi biết).",
      },
      {
        id: "pr-27-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "wear",
        vietnamese: "mặc / đeo",
        audioText: "wear",
        choices: [
          { id: "a", text: "well" },
          { id: "b", text: "wear" },
          { id: "c", text: "wall" },
        ],
        correctAnswer: "b",
        explanation:
          "'Wear' kết thúc bằng âm R — lưỡi cong nhẹ, không chạm đâu cả, âm nghe kéo dài và mềm hơn so với âm L dứt khoát.",
        wrongAnswerExplanations:
          "Cả hai lựa chọn còn lại là 'well' (khỏe/giếng nước) kết thúc bằng âm L rõ ràng — nếu chọn nhầm nghĩa là bạn đang nghe ra sự chạm lưỡi thay vì âm cong lưỡi của R.",
        usageTip: "Dùng khi nói về việc mặc quần áo hoặc đeo trang sức, ví dụ 'wear gloves' (đeo găng tay).",
      },
      {
        id: "pr-27-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "well",
        vietnamese: "khỏe / giếng",
        audioText: "well",
        choices: [
          { id: "a", text: "wear" },
          { id: "b", text: "well" },
          { id: "c", text: "where" },
        ],
        correctAnswer: "b",
        explanation:
          "'Well' kết thúc bằng âm L đúp — lưỡi chạm rõ vào sau răng cửa trên, âm nghe dứt khoát và hơi 'nặng' ở cuối, khác với âm R mềm và kéo dài.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại đều là 'wear' với âm R cuối — nếu bạn nghe không phân biệt được nghĩa là cần luyện thêm việc nhận ra sự chạm lưỡi của âm L.",
        usageTip: "Dùng khi hỏi thăm sức khỏe, ví dụ 'I feel well' (tôi cảm thấy khỏe).",
      },
      {
        id: "pr-27-7",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "I feel well today.",
        vietnamese: "Hôm nay tôi cảm thấy khỏe.",
        promptContext: "Bạn muốn nói với đồng nghiệp rằng hôm nay mình khỏe, dùng đúng từ có âm L cuối.",
        choices: [
          { id: "a", text: "I feel well today." },
          { id: "b", text: "I fear well today." },
          { id: "c", text: "I feel wear today." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng dùng 'feel' (cảm thấy, âm L cuối) và 'well' (khỏe, âm L cuối) — cả hai từ đều kết thúc bằng âm L, không phải R.",
        wrongAnswerExplanations:
          "'I fear well today.' thay 'feel' bằng 'fear' (sợ hãi, âm R), làm câu vô nghĩa. 'I feel wear today.' thay 'well' bằng 'wear' (mặc), cũng làm câu sai nghĩa hoàn toàn.",
        usageTip: "Dùng khi ai đó hỏi thăm sức khỏe của bạn.",
      },
      {
        id: "pr-27-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "cool",
        vietnamese: "mát, lạnh",
        audioText: "cool",
        choices: [
          { id: "a", text: "cool" },
          { id: "b", text: "core" },
          { id: "c", text: "curl" },
        ],
        correctAnswer: "a",
        explanation:
          "'Cool' kết thúc bằng âm L sau nguyên âm dài 'oo' — lưỡi chạm vào sau răng cửa trên ở cuối, tạo cảm giác âm bị 'khép' lại.",
        wrongAnswerExplanations:
          "'Core' (lõi, trung tâm) kết thúc bằng âm R, không có sự chạm lưỡi. 'Curl' (xoăn, cuộn) có nguyên âm hoàn toàn khác ở giữa từ, không phải âm 'oo' dài.",
        usageTip: "Dùng khi nói về hồ bơi, ví dụ 'swim in the pool' (bơi trong hồ bơi).",
      },
      {
        id: "pr-27-9",
        type: "listening",
        badgeEmoji: "🎧",
        english: "poor",
        vietnamese: "nghèo / tội nghiệp",
        audioText: "poor",
        choices: [
          { id: "a", text: "pool" },
          { id: "b", text: "poor" },
          { id: "c", text: "pull" },
        ],
        correctAnswer: "b",
        explanation:
          "'Poor' kết thúc bằng âm R — lưỡi cong nhẹ về sau, không chạm vào đâu, âm nghe kéo dài hơn 'pool' và không có cảm giác khép miệng lại.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại là 'pool' (hồ bơi) với âm L cuối rõ ràng — nếu nhầm, hãy luyện lại cảm giác lưỡi chạm răng khi đọc L.",
        usageTip: "Dùng khi nói ai đó đáng thương hoặc hoàn cảnh khó khăn, ví dụ 'poor guy' (tội nghiệp anh ta).",
      },
      {
        id: "pr-27-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Turn left, not right.",
        vietnamese: "Rẽ trái, không phải rẽ phải.",
        audioText: "Turn left, not right.",
        choices: [
          { id: "a", text: "Rẽ trái, không phải rẽ phải." },
          { id: "b", text: "Rẽ phải, không phải rẽ trái." },
          { id: "c", text: "Đi thẳng, không rẽ." },
        ],
        correctAnswer: "a",
        explanation:
          "'Left' (âm L đầu, trái) và 'right' (âm R đầu, phải) là cặp từ chỉ hướng ngược nhau — câu này nhấn mạnh nên rẽ trái chứ không rẽ phải.",
        wrongAnswerExplanations:
          "Nếu nghe nhầm 'left' thành 'right' do lẫn âm L và R, sẽ hiểu ngược nghĩa câu, chỉ sai đường. Câu gốc cũng không nói về việc đi thẳng.",
        usageTip: "Dùng khi chỉ đường và cần nhấn mạnh rõ hướng rẽ để tránh nhầm lẫn L/R.",
      },
    ],
  },
  {
    id: "pr-28",
    slug: "pr-28-am-l-r-giua-tu-1",
    topicId: "pronunciation",
    title: "Phân biệt L và R ở giữa từ",
    description: "Luyện nghe âm L và R khi nằm giữa từ, như trong belly và berry.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-28-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "belly",
        vietnamese: "bụng",
        audioText: "belly",
        choices: [
          { id: "a", text: "belly" },
          { id: "b", text: "berry" },
          { id: "c", text: "bury" },
        ],
        correctAnswer: "a",
        explanation:
          "'Belly' có âm L đúp ở giữa — lưỡi chạm chắc vào sau răng cửa trên, giữ nguyên vị trí đó một chút rồi mới hạ xuống, nghe rõ và dứt khoát.",
        wrongAnswerExplanations:
          "'berry' (quả mọng) có âm R ở giữa — lưỡi cong, không chạm đâu, nghe mềm hơn. 'bury' (chôn) phát âm gần giống 'berry' về âm R nhưng nghĩa khác hoàn toàn.",
        usageTip: "Dùng khi nói về vùng bụng, ví dụ 'my belly hurts' (bụng tôi đau).",
      },
      {
        id: "pr-28-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "berry",
        vietnamese: "quả mọng",
        audioText: "berry",
        choices: [
          { id: "a", text: "belly" },
          { id: "b", text: "berry" },
          { id: "c", text: "jelly" },
        ],
        correctAnswer: "b",
        explanation:
          "'Berry' có âm R ở giữa — lưỡi cong nhẹ về sau mà không chạm vào răng hay vòm miệng, tạo âm 'rung nhẹ trong miệng' đặc trưng của R tiếng Anh Mỹ.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại là 'belly' (bụng) với âm L — lưỡi có chạm rõ vào răng. Nếu nhầm, hãy để ý xem lưỡi mình có thực sự chạm vào đâu không.",
        usageTip: "Dùng khi nói về các loại quả mọng như dâu, việt quất, ví dụ 'strawberry' (dâu tây).",
      },
      {
        id: "pr-28-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "'Alive' and 'arrive' sound exactly the same.",
        vietnamese: "'Alive' và 'arrive' phát âm giống hệt nhau.",
        prompt: "'Alive' and 'arrive' sound exactly the same.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai. 'Alive' (còn sống) có âm L ở giữa (a-L-ive), lưỡi chạm răng. 'Arrive' (đến nơi) có âm R ở giữa (a-RR-ive), lưỡi cong không chạm. Nghĩa và âm đều khác nhau hoàn toàn.",
        wrongAnswerExplanations:
          "Vì hai từ trông gần giống nhau khi viết và đều có 2 âm tiết với trọng âm rơi vào âm tiết sau, người mới học dễ nhầm là chúng đọc giống nhau — nhưng phụ âm giữa hoàn toàn khác.",
        usageTip: "Dùng để nhớ rằng chỉ một chữ cái khác nhau (L và R) có thể tạo ra hai từ nghĩa hoàn toàn khác.",
      },
      {
        id: "pr-28-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "alive",
        vietnamese: "còn sống",
        audioText: "alive",
        choices: [
          { id: "a", text: "alive" },
          { id: "b", text: "arrive" },
          { id: "c", text: "alone" },
        ],
        correctAnswer: "a",
        explanation:
          "'Alive' có âm L ở giữa — lưỡi chạm ngay sau răng cửa trên trước khi chuyển sang nguyên âm 'ai'.",
        wrongAnswerExplanations:
          "Lựa chọn 'arrive' (đến nơi) có âm R ở giữa, lưỡi cong không chạm — nghe khác hẳn và mang nghĩa hoàn toàn khác (đến nơi, không phải còn sống).",
        usageTip: "Dùng khi nói ai đó vẫn còn sống, ví dụ 'she's still alive' (cô ấy vẫn còn sống).",
      },
      {
        id: "pr-28-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "arrive",
        vietnamese: "đến nơi",
        audioText: "arrive",
        choices: [
          { id: "a", text: "alive" },
          { id: "b", text: "arrive" },
          { id: "c", text: "alone" },
        ],
        correctAnswer: "b",
        explanation:
          "'Arrive' có âm R ở giữa — lưỡi cong về phía sau, không chạm vào răng hay vòm miệng, tạo âm mềm và hơi rung trong khoang miệng.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại là 'alive' (còn sống) với âm L — lưỡi chạm chắc vào răng. Nếu chọn nhầm, hãy luyện cảm nhận lưỡi có chạm hay không khi đọc.",
        usageTip: "Dùng khi nói về việc đến nơi, ví dụ 'the bus will arrive soon' (xe buýt sắp đến).",
      },
      {
        id: "pr-28-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "yellow",
        vietnamese: "màu vàng",
        audioText: "yellow",
        choices: [
          { id: "a", text: "yellow" },
          { id: "b", text: "hero" },
          { id: "c", text: "window" },
        ],
        correctAnswer: "a",
        explanation:
          "'Yellow' có âm L ở giữa — sau âm 'ye', lưỡi chạm vào sau răng cửa trên trước khi kết thúc bằng âm 'ow'.",
        wrongAnswerExplanations:
          "'hero' (anh hùng) có âm R ở giữa, không liên quan đến màu sắc và phát âm cũng khác hoàn toàn ở phần đầu và giữa từ.",
        usageTip: "Dùng khi nói về màu sắc, ví dụ 'a yellow shirt' (áo màu vàng).",
      },
      {
        id: "pr-28-7",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "The plane will arrive at three o'clock.",
        vietnamese: "Máy bay sẽ đến lúc ba giờ.",
        promptContext: "Bạn muốn nói với ai đó thời gian máy bay hạ cánh, dùng đúng từ có âm R.",
        choices: [
          { id: "a", text: "The plane will arrive at three o'clock." },
          { id: "b", text: "The plane will alive at three o'clock." },
          { id: "c", text: "The plane will arrive at flee o'clock." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng dùng 'arrive' (đến nơi, âm R) đúng ngữ pháp — 'alive' (còn sống) là tính từ, không thể dùng làm động từ trong câu này.",
        wrongAnswerExplanations:
          "'The plane will alive...' sai vì 'alive' không phải động từ. 'flee o'clock' thay 'three' bằng từ sai nghĩa hoàn toàn (flee nghĩa là chạy trốn), không phải giờ giấc.",
        usageTip: "Dùng khi thông báo giờ đến của xe, máy bay, hoặc chuyến đi.",
      },
      {
        id: "pr-28-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "hello",
        vietnamese: "xin chào",
        audioText: "hello",
        choices: [
          { id: "a", text: "hello" },
          { id: "b", text: "hero" },
          { id: "c", text: "yellow" },
        ],
        correctAnswer: "a",
        explanation:
          "'Hello' có âm L ở giữa — lưỡi chạm vào sau răng cửa trên rõ ràng giữa hai nguyên âm 'e' và 'o'.",
        wrongAnswerExplanations:
          "'hero' (anh hùng) có âm R ở giữa, lưỡi cong không chạm — nghe khác hẳn và nghĩa cũng không liên quan đến lời chào.",
        usageTip: "Dùng khi chào hỏi ai đó, đây là từ tiếng Anh cơ bản nhất cần phát âm đúng.",
      },
      {
        id: "pr-28-9",
        type: "listening",
        badgeEmoji: "🎧",
        english: "correctly",
        vietnamese: "một cách chính xác",
        audioText: "correctly",
        choices: [
          { id: "a", text: "collectly" },
          { id: "b", text: "correctly" },
          { id: "c", text: "connectly" },
        ],
        correctAnswer: "b",
        explanation:
          "'Correctly' có âm R ở giữa (cor-R-ectly) — lưỡi cong, không chạm răng. Đây là dạng trạng từ của 'correct' (đúng), thường dùng để khen ai làm đúng cách.",
        wrongAnswerExplanations:
          "'collectly' không phải từ thật trong tiếng Anh (từ đúng là 'collectively' — cùng nhau). 'connectly' cũng không tồn tại — cả hai là từ bị nhầm lẫn âm để đánh lừa.",
        usageTip: "Dùng khi khen ai đó làm đúng cách, ví dụ 'you did it correctly' (bạn làm đúng rồi).",
      },
      {
        id: "pr-28-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Please spell your name correctly.",
        vietnamese: "Làm ơn viết tên của bạn cho đúng chính tả.",
        audioText: "Please spell your name correctly.",
        choices: [
          { id: "a", text: "Làm ơn viết tên của bạn cho đúng chính tả." },
          { id: "b", text: "Làm ơn đọc tên của bạn to lên." },
          { id: "c", text: "Làm ơn đổi tên của bạn." },
        ],
        correctAnswer: "a",
        explanation:
          "'Spell' nghĩa là 'đánh vần/viết chính tả' và 'correctly' là 'đúng cách' — câu này yêu cầu viết tên đúng chính tả, chứa cả âm L (spell) và âm R (correctly) để luyện nghe phân biệt.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc đọc to hay đổi tên, chỉ nói về việc viết đúng chính tả.",
        usageTip: "Dùng khi cần nhắc ai đó viết tên hoặc từ nào đó cho đúng chính tả, ví dụ khi điền form.",
      },
    ],
  },
  {
    id: "pr-29",
    slug: "pr-29-am-l-r-cum-tu-1",
    topicId: "pronunciation",
    title: "L và R trong cụm phụ âm",
    description: "Luyện nghe L và R khi đứng sau các phụ âm khác như bl, pl, br, pr.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-29-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "play",
        vietnamese: "chơi",
        audioText: "play",
        choices: [
          { id: "a", text: "play" },
          { id: "b", text: "pray" },
          { id: "c", text: "plate" },
        ],
        correctAnswer: "a",
        explanation:
          "Cụm 'pl' trong 'play' — sau khi bật hơi âm P, lưỡi lập tức chạm vào sau răng cửa trên để tạo âm L, nghe rõ và gọn.",
        wrongAnswerExplanations:
          "'pray' (cầu nguyện) có cụm 'pr' — sau P, lưỡi cong lại chứ không chạm răng, tạo âm R mềm hơn, nghe khác hẳn cụm 'pl'.",
        usageTip: "Dùng khi nói về việc chơi đùa hoặc chơi thể thao, ví dụ 'play soccer' (chơi bóng đá).",
      },
      {
        id: "pr-29-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "pray",
        vietnamese: "cầu nguyện",
        audioText: "pray",
        choices: [
          { id: "a", text: "play" },
          { id: "b", text: "pray" },
          { id: "c", text: "plate" },
        ],
        correctAnswer: "b",
        explanation:
          "Cụm 'pr' trong 'pray' — sau âm P, lưỡi cong về sau ngay lập tức mà không chạm vào đâu, tạo âm R đặc trưng, hơi nghe như có 'w' nhẹ ở giữa.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại là 'play' (chơi) với cụm 'pl' — lưỡi chạm rõ vào răng sau âm P. Nếu nhầm, hãy chú ý cảm giác lưỡi có chạm hay chỉ cong lại.",
        usageTip: "Dùng khi nói về việc cầu nguyện, thường gặp trong ngữ cảnh tôn giáo.",
      },
      {
        id: "pr-29-3",
        type: "listening",
        badgeEmoji: "🎧",
        english: "blue",
        vietnamese: "màu xanh dương",
        audioText: "blue",
        choices: [
          { id: "a", text: "blue" },
          { id: "b", text: "brew" },
          { id: "c", text: "glue" },
        ],
        correctAnswer: "a",
        explanation:
          "Cụm 'bl' trong 'blue' — sau âm B (môi chạm nhau), lưỡi chạm ngay vào sau răng cửa trên để tạo âm L trước khi vào nguyên âm 'ue'.",
        wrongAnswerExplanations:
          "'brew' (pha/ủ, như pha cà phê) có cụm 'br' — lưỡi cong lại sau âm B thay vì chạm răng, tạo âm R nghe mềm và khác nghĩa hoàn toàn.",
        usageTip: "Dùng khi nói về màu xanh dương, ví dụ 'the sky is blue' (bầu trời màu xanh).",
      },
      {
        id: "pr-29-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "brown",
        vietnamese: "màu nâu",
        audioText: "brown",
        choices: [
          { id: "a", text: "blown" },
          { id: "b", text: "brown" },
          { id: "c", text: "blow" },
        ],
        correctAnswer: "b",
        explanation:
          "Cụm 'br' trong 'brown' — lưỡi cong về sau ngay sau âm B, không chạm đâu cả, khác với cụm 'bl' cần lưỡi chạm răng.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại là 'blown' (được thổi, quá khứ phân từ của blow) với cụm 'bl' — lưỡi chạm răng. Nghĩa cũng hoàn toàn khác, không liên quan đến màu sắc.",
        usageTip: "Dùng khi nói về màu nâu, ví dụ 'brown eyes' (mắt màu nâu).",
      },
      {
        id: "pr-29-5",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "'Fly' and 'fry' have the same consonant cluster sound.",
        vietnamese: "'Fly' và 'fry' có cụm phụ âm giống nhau.",
        prompt: "'Fly' and 'fry' have the same consonant cluster sound.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai. 'Fly' (bay) có cụm 'fl' với âm L (lưỡi chạm răng), còn 'fry' (chiên) có cụm 'fr' với âm R (lưỡi cong, không chạm). Đây là hai từ khác nghĩa hoàn toàn và dễ gây nhầm lẫn khi nói về nấu ăn hay di chuyển.",
        wrongAnswerExplanations:
          "Nếu tưởng hai từ giống nhau, có thể bạn chưa phân biệt được cảm giác lưỡi chạm (L) và lưỡi cong không chạm (R) khi đứng sau âm F.",
        usageTip: "Dùng khi nói về việc chiên đồ ăn (fry) khác với việc bay (fly) — rất dễ nhầm trong bếp.",
      },
      {
        id: "pr-29-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "fly",
        vietnamese: "bay / con ruồi",
        audioText: "fly",
        choices: [
          { id: "a", text: "fly" },
          { id: "b", text: "fry" },
          { id: "c", text: "flow" },
        ],
        correctAnswer: "a",
        explanation:
          "Cụm 'fl' trong 'fly' — sau âm F (răng chạm môi dưới), lưỡi chạm vào sau răng cửa trên để tạo âm L trước nguyên âm.",
        wrongAnswerExplanations:
          "'fry' (chiên) có cụm 'fr' — lưỡi cong về sau, không chạm đâu, tạo âm R khác hẳn và mang nghĩa liên quan đến nấu ăn.",
        usageTip: "Dùng khi nói về việc bay hoặc con ruồi, ví dụ 'birds fly' (chim bay).",
      },
      {
        id: "pr-29-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "fry",
        vietnamese: "chiên",
        audioText: "fry",
        choices: [
          { id: "a", text: "fly" },
          { id: "b", text: "fry" },
          { id: "c", text: "flow" },
        ],
        correctAnswer: "b",
        explanation:
          "Cụm 'fr' trong 'fry' — lưỡi cong về sau ngay sau âm F, không chạm vào răng hay vòm miệng, âm nghe mềm hơn cụm 'fl'.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại là 'fly' (bay) với cụm 'fl' — lưỡi chạm rõ vào răng. Nếu nhầm khi nấu ăn, có thể gây hiểu lầm buồn cười khi nói chuyện.",
        usageTip: "Dùng khi nói về việc chiên thức ăn, ví dụ 'fry the eggs' (chiên trứng).",
      },
      {
        id: "pr-29-8",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "I need to fry the chicken, not fly it.",
        vietnamese: "Tôi cần chiên gà, không phải cho gà bay.",
        promptContext: "Bạn muốn đùa vui về việc dễ nhầm giữa 'fry' và 'fly' khi nói về nấu ăn.",
        choices: [
          { id: "a", text: "I need to fry the chicken, not fly it." },
          { id: "b", text: "I need to fly the chicken, not fry it." },
          { id: "c", text: "I need to fry the chicken, not blue it." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng dùng 'fry' (chiên, âm R) làm hành động chính vì đang nói về nấu ăn, và nhắc đến 'fly' (bay, âm L) như một sự nhầm lẫn buồn cười.",
        wrongAnswerExplanations:
          "'I need to fly the chicken, not fry it.' đảo ngược nghĩa, nghe vô lý vì không ai 'cho gà bay' khi nấu ăn. 'not blue it' thay 'fly' bằng 'blue' (một tính từ chỉ màu), hoàn toàn sai ngữ pháp và nghĩa.",
        usageTip: "Dùng để nhớ sự khác biệt quan trọng giữa 'fry' và 'fly' khi nói chuyện trong bếp.",
      },
      {
        id: "pr-29-9",
        type: "listening",
        badgeEmoji: "🎧",
        english: "clean",
        vietnamese: "sạch sẽ",
        audioText: "clean",
        choices: [
          { id: "a", text: "clean" },
          { id: "b", text: "cream" },
          { id: "c", text: "green" },
        ],
        correctAnswer: "a",
        explanation:
          "Cụm 'cl' trong 'clean' — sau âm C/K, lưỡi chạm vào sau răng cửa trên để tạo âm L, nghe gọn và rõ.",
        wrongAnswerExplanations:
          "'cream' (kem) có cụm 'cr' — lưỡi cong về sau, không chạm răng, tạo âm R và mang nghĩa hoàn toàn khác (kem, không phải sạch sẽ).",
        usageTip: "Dùng khi nói về sự sạch sẽ, ví dụ 'clean hands' (tay sạch).",
      },
      {
        id: "pr-29-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Please clean the table, not the cream jar.",
        vietnamese: "Làm ơn lau bàn, không phải hũ kem.",
        audioText: "Please clean the table, not the cream jar.",
        choices: [
          { id: "a", text: "Làm ơn lau bàn, không phải hũ kem." },
          { id: "b", text: "Làm ơn ăn kem, không phải lau bàn." },
          { id: "c", text: "Làm ơn mua kem mới." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nhấn mạnh sự khác biệt giữa 'clean' (sạch/lau, cụm CL) và 'cream' (kem, cụm CR) — hai từ dễ nhầm nếu không phân biệt được L và R sau âm C.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc ăn kem hay mua kem mới, chỉ nói về việc cần lau bàn chứ không phải đụng vào hũ kem.",
        usageTip: "Dùng để luyện phân biệt cặp từ 'clean' và 'cream' dễ gây nhầm lẫn khi nói nhanh.",
      },
    ],
  },
  {
    id: "pr-30",
    slug: "pr-30-am-l-r-cau-tong-hop-1",
    topicId: "pronunciation",
    title: "Ôn tập L và R trong câu",
    description: "Ôn tập tổng hợp cách phân biệt L và R qua các câu tiếng Anh thông dụng.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-30-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "really",
        vietnamese: "thật sự",
        audioText: "really",
        choices: [
          { id: "a", text: "really" },
          { id: "b", text: "rarely" },
          { id: "c", text: "rally" },
        ],
        correctAnswer: "a",
        explanation:
          "'Really' có cả R đầu (lưỡi cong) và L giữa (lưỡi chạm răng) — một từ luyện cả hai âm cùng lúc. Đọc chậm: 're' (cong lưỡi) + 'ally' (chạm lưỡi ở L).",
        wrongAnswerExplanations:
          "'rarely' (hiếm khi) có âm R ở cả hai vị trí và nguyên âm giữa khác hẳn, mang nghĩa hoàn toàn khác (hiếm khi, không phải thật sự).",
        usageTip: "Dùng để nhấn mạnh điều gì đó là thật, ví dụ 'I really like it' (tôi thật sự thích nó).",
      },
      {
        id: "pr-30-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "world",
        vietnamese: "thế giới",
        audioText: "world",
        choices: [
          { id: "a", text: "world" },
          { id: "b", text: "whirl" },
          { id: "c", text: "word" },
        ],
        correctAnswer: "a",
        explanation:
          "'World' có âm R sau W (lưỡi cong) rồi kết thúc bằng âm L (lưỡi chạm răng) — một từ có cả hai âm liên tiếp, khá khó với người Việt nên cần tập chậm từng phần.",
        wrongAnswerExplanations:
          "'whirl' (xoay tròn) thiếu âm D cuối và nguyên âm hơi khác, mang nghĩa khác hoàn toàn (xoay tròn, không phải thế giới).",
        usageTip: "Dùng khi nói về thế giới nói chung, ví dụ 'around the world' (khắp thế giới).",
      },
      {
        id: "pr-30-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "In 'library', there is both an L sound and an R sound.",
        vietnamese: "Trong từ 'library', có cả âm L và âm R.",
        prompt: "In 'library', there is both an L sound and an R sound.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. 'Library' (thư viện) có âm L ở đầu (li-) và âm R ở giữa (-brar-) — đọc là /ˈlaɪ.brer.i/. Đây là từ tốt để luyện chuyển đổi giữa hai âm trong cùng một từ.",
        wrongAnswerExplanations:
          "Nếu nghĩ từ này chỉ có một âm, có thể bạn đang bỏ sót âm R ở giữa — hãy đọc chậm từng phần: 'lai' - 'brer' - 'y'.",
        usageTip: "Dùng khi nói về thư viện, và để luyện tập chuyển đổi nhanh giữa âm L và R.",
      },
      {
        id: "pr-30-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "library",
        vietnamese: "thư viện",
        audioText: "library",
        choices: [
          { id: "a", text: "library" },
          { id: "b", text: "livery" },
          { id: "c", text: "literary" },
        ],
        correctAnswer: "a",
        explanation:
          "'Library' bắt đầu bằng L (lưỡi chạm răng) rồi chuyển sang R (lưỡi cong) ở giữa — một từ luyện cả hai âm, đọc chậm: 'lai-brer-y'.",
        wrongAnswerExplanations:
          "'livery' (đồng phục hầu cận, ít dùng) chỉ có âm L, không có âm R ở giữa, và nghĩa khác hoàn toàn với thư viện.",
        usageTip: "Dùng khi nói về nơi mượn sách, ví dụ 'go to the library' (đi đến thư viện).",
      },
      {
        id: "pr-30-5",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "I will really love to visit that library.",
        vietnamese: "Tôi sẽ thật sự rất thích ghé thăm thư viện đó.",
        promptContext: "Bạn muốn nói một câu chứa nhiều từ có cả âm L và R để luyện tập.",
        choices: [
          { id: "a", text: "I will really love to visit that library." },
          { id: "b", text: "I will really rove to visit that library." },
          { id: "c", text: "I will really love to fisit that riblary." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng dùng 'really' (thật sự), 'love' (yêu thích, âm L), 'visit' và 'library' (thư viện) đúng chính tả và ngữ pháp — mỗi từ đều minh họa rõ vị trí âm L hoặc R.",
        wrongAnswerExplanations:
          "'rove' không phải từ đúng nghĩa trong ngữ cảnh này (rove nghĩa là lang thang). 'fisit' và 'riblary' là các từ viết sai/không tồn tại, chỉ để đánh lừa người nghe không chú ý.",
        usageTip: "Dùng để luyện đọc một câu dài có nhiều âm L và R xen kẽ nhau.",
      },
      {
        id: "pr-30-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Larry likes to read at the library regularly.",
        vietnamese: "Larry thích đọc sách ở thư viện thường xuyên.",
        audioText: "Larry likes to read at the library regularly.",
        choices: [
          { id: "a", text: "Larry thích đọc sách ở thư viện thường xuyên." },
          { id: "b", text: "Larry ghét đọc sách ở nhà." },
          { id: "c", text: "Larry làm việc ở thư viện." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chứa nhiều từ luyện âm L/R: 'Larry' (tên riêng, cả L và R), 'likes' (L), 'read' (R), 'library' (cả hai), 'regularly' (R nhiều lần) — câu ôn tập tổng hợp tốt.",
        wrongAnswerExplanations:
          "Câu gốc không nói Larry ghét đọc sách, cũng không nói anh ấy làm việc ở đó — chỉ nói anh ấy thích đọc sách ở thư viện thường xuyên.",
        usageTip: "Dùng để luyện nghe một câu dài có mật độ âm L và R cao, giúp quen tai nhanh hơn.",
      },
      {
        id: "pr-30-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "clearly",
        vietnamese: "một cách rõ ràng",
        audioText: "clearly",
        choices: [
          { id: "a", text: "clearly" },
          { id: "b", text: "nearly" },
          { id: "c", text: "queerly" },
        ],
        correctAnswer: "a",
        explanation:
          "'Clearly' có cụm 'cl' (âm L sau C) ở đầu và âm R ở giữa (clear-) rồi kết bằng 'ly' (âm L) — một từ luyện cả hai âm liên tiếp nhiều lần.",
        wrongAnswerExplanations:
          "'queerly' (kỳ quặc, hiếm dùng) có âm đầu khác hẳn (kw- thay vì kl-) và nghĩa hoàn toàn không liên quan đến sự rõ ràng.",
        usageTip: "Dùng khi muốn nói ai đó trình bày điều gì rõ ràng, ví dụ 'explain it clearly' (giải thích rõ ràng).",
      },
      {
        id: "pr-30-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Can you speak more clearly, please?",
        vietnamese: "Bạn có thể nói rõ ràng hơn được không?",
        audioText: "Can you speak more clearly, please?",
        choices: [
          { id: "a", text: "Bạn có thể nói rõ ràng hơn được không?" },
          { id: "b", text: "Bạn có thể nói nhỏ hơn được không?" },
          { id: "c", text: "Bạn có thể nói nhanh hơn được không?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Speak more clearly' nghĩa là 'nói rõ ràng hơn' — đây là câu rất hữu ích khi bạn cần nhờ ai đó nói chậm và rõ để dễ nghe hơn.",
        wrongAnswerExplanations:
          "Câu gốc không nói về âm lượng (nhỏ hơn) hay tốc độ (nhanh hơn), chỉ nói về sự rõ ràng khi phát âm.",
        usageTip: "Dùng khi bạn nghe không rõ người khác nói gì và muốn nhờ họ nói lại rõ hơn.",
      },
      {
        id: "pr-30-9",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Practicing minimal pairs like 'light/right' helps train your ear for L and R.",
        vietnamese: "Luyện các cặp từ tối thiểu như 'light/right' giúp luyện tai nghe phân biệt L và R.",
        prompt: "Practicing minimal pairs like 'light/right' helps train your ear for L and R.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Các cặp từ chỉ khác nhau đúng một âm (gọi là 'minimal pairs') như 'light/right' là cách luyện tai rất hiệu quả, vì nó giúp tai tập trung chính xác vào điểm khác biệt duy nhất giữa hai âm.",
        wrongAnswerExplanations:
          "Đây là một kỹ thuật học ngôn ngữ được công nhận rộng rãi, không phải điều gây tranh cãi hay không chắc chắn.",
        usageTip: "Dùng phương pháp này để tự luyện thêm: tìm các cặp từ minimal pairs khác và nghe đi nghe lại.",
      },
      {
        id: "pr-30-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Right now, I really want to relax and read.",
        vietnamese: "Ngay bây giờ, tôi thật sự muốn thư giãn và đọc sách.",
        audioText: "Right now, I really want to relax and read.",
        choices: [
          { id: "a", text: "Ngay bây giờ, tôi thật sự muốn thư giãn và đọc sách." },
          { id: "b", text: "Ngay bây giờ, tôi thật sự muốn đi làm việc." },
          { id: "c", text: "Sau này, tôi sẽ thư giãn và đọc sách." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này ôn tập tổng hợp: 'right' (R đầu), 'really' (R rồi L), 'relax' (R đầu), 'read' (R đầu) — toàn bộ câu tập trung vào âm R với vài âm L xen kẽ để luyện phân biệt.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc đi làm, và cũng không nói 'sau này' mà là 'ngay bây giờ' (right now) — nghe nhầm 'right now' có thể khiến hiểu sai thời điểm.",
        usageTip: "Dùng câu này để luyện nghe tổng hợp nhiều từ có âm R trong cùng một câu.",
      },
    ],
  },
];
