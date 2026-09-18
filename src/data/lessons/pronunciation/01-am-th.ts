import { Lesson } from "@/types/content";

export const pronunciationGroup01: Lesson[] = [
  {
    id: "pr-1",
    slug: "pr-01-th-khong-rung-1",
    topicId: "pronunciation",
    title: "Âm TH không rung (think, thanks)",
    description: "Phân biệt âm TH không rung với âm S và T mà người Việt hay lẫn.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-1-1",
        type: "listening",
        badgeEmoji: "🗣️",
        english: "think",
        vietnamese: "nghĩ, suy nghĩ",
        audioText: "think",
        choices: [
          { id: "a", text: "think" },
          { id: "b", text: "sink" },
          { id: "c", text: "tink" },
        ],
        correctAnswer: "a",
        explanation:
          "Âm 'TH' trong 'think' là âm gió, không rung dây thanh: đặt đầu lưỡi hờ giữa hai hàm răng rồi thổi hơi ra, không chạm lưỡi vào răng cửa như âm 'S' hay 'T' của tiếng Việt.",
        wrongAnswerExplanations:
          "'Sink' (bồn rửa) phát âm 'S' bằng cách đưa hơi qua giữa lưỡi và vòm miệng, lưỡi không hề chạm răng. 'Tink' không phải từ tiếng Anh — đó là lỗi thường gặp khi thay TH bằng âm 'T' bật hơi.",
        usageTip: "Dùng khi muốn nói 'Tôi nghĩ là...' — ví dụ 'I think so.' Nếu nói thành 'I sink so.' nghĩa sẽ đổi thành 'Tôi chìm vậy à?', khiến khách hiểu lầm.",
      },
      {
        id: "pr-1-2",
        type: "listening",
        badgeEmoji: "🙏",
        english: "thanks",
        vietnamese: "cảm ơn",
        audioText: "thanks",
        choices: [
          { id: "a", text: "thanks" },
          { id: "b", text: "sanks" },
          { id: "c", text: "tanks" },
        ],
        correctAnswer: "a",
        explanation:
          "'Thanks' bắt đầu bằng âm TH gió: lưỡi hé ra giữa răng, hơi đi ra nhẹ nhàng, miệng gần như mỉm cười khi nói. Không có sự rung ở cổ họng.",
        wrongAnswerExplanations:
          "'Sanks' và 'tanks' (xe tăng) đều là cách phát âm sai khi người Việt né âm TH bằng cách thay bằng S hoặc T quen thuộc hơn.",
        usageTip: "Dùng để cảm ơn khách — 'Thanks so much!' — luyện kỹ vì đây là từ bạn sẽ nói mỗi ngày với khách.",
      },
      {
        id: "pr-1-3",
        type: "listening",
        badgeEmoji: "🔢",
        english: "three",
        vietnamese: "số ba",
        audioText: "three",
        choices: [
          { id: "a", text: "three" },
          { id: "b", text: "tree" },
          { id: "c", text: "free" },
        ],
        correctAnswer: "a",
        explanation:
          "'Three' có âm TH ở đầu (lưỡi giữa răng, thổi hơi), rồi mới đến âm 'R'. Khác hẳn 'tree' (cái cây) bắt đầu bằng âm 'T' bật hơi ở đầu lưỡi.",
        wrongAnswerExplanations:
          "'Tree' (cây) và 'free' (miễn phí) đều là từ có thật nhưng khác nghĩa hoàn toàn — nếu nói nhầm 'three dollars' thành 'tree dollars', khách sẽ không hiểu bạn đang nói giá tiền.",
        usageTip: "Dùng khi nói giá hoặc số lượng, ví dụ 'That's three dollars.' — rất hay dùng khi tính tiền cho khách.",
      },
      {
        id: "pr-1-4",
        type: "listening",
        badgeEmoji: "👍",
        english: "thumb",
        vietnamese: "ngón tay cái",
        audioText: "thumb",
        choices: [
          { id: "a", text: "thumb" },
          { id: "b", text: "some" },
          { id: "c", text: "tum" },
        ],
        correctAnswer: "a",
        explanation:
          "'Thumb' bắt đầu bằng âm TH gió rồi tới âm 'm' cuối — chữ 'b' ở cuối không phát âm. Lưỡi phải đặt giữa răng ngay từ đầu từ.",
        wrongAnswerExplanations:
          "'Some' (một ít) phát âm bằng âm 'S' xì hơi qua giữa lưỡi, không đặt lưỡi giữa răng. 'Tum' không phải từ thật, chỉ là lỗi thay TH bằng T.",
        usageTip: "Dùng khi làm móng và cần nói về ngón tay cái, ví dụ 'Can I see your thumb?'",
      },
      {
        id: "pr-1-5",
        type: "listening",
        badgeEmoji: "🛁",
        english: "bath",
        vietnamese: "bồn tắm, tắm",
        audioText: "bath",
        choices: [
          { id: "a", text: "bath" },
          { id: "b", text: "bat" },
          { id: "c", text: "bass" },
        ],
        correctAnswer: "a",
        explanation:
          "Ở đây âm TH nằm ở cuối từ: sau khi nói 'ba', bạn đưa đầu lưỡi ra giữa răng và thổi hơi nhẹ ra ngoài, không được nuốt mất âm cuối.",
        wrongAnswerExplanations:
          "'Bat' (cái gậy/con dơi) kết thúc bằng âm 'T' bật hơi ở đầu lưỡi, còn 'bass' (âm trầm) kết thúc bằng âm 'S' — cả hai đều không đặt lưỡi giữa răng như TH.",
        usageTip: "Dùng khi nói về dịch vụ ngâm tay/chân, ví dụ 'a warm bath for your feet.'",
      },
      {
        id: "pr-1-6",
        type: "listening",
        badgeEmoji: "🦷",
        english: "teeth",
        vietnamese: "răng (số nhiều)",
        audioText: "teeth",
        choices: [
          { id: "a", text: "teeth" },
          { id: "b", text: "teets" },
          { id: "c", text: "tees" },
        ],
        correctAnswer: "a",
        explanation:
          "'Teeth' kết thúc bằng âm TH gió — sau âm 'i' dài, đầu lưỡi chạm nhẹ ra rìa răng và thổi hơi, không bật thành âm 'T' hay xì thành âm 'S'.",
        wrongAnswerExplanations:
          "'Teets' và 'tees' không phải cách phát âm đúng của 'teeth' — đây là lỗi thường gặp khi thay âm TH cuối bằng T hoặc S quen thuộc.",
        usageTip: "Dùng khi nói về việc cười, ví dụ 'Smile and show your teeth!' khi chụp ảnh cho khách.",
      },
      {
        id: "pr-1-7",
        type: "true_false",
        badgeEmoji: "❓",
        english: "month",
        vietnamese: "tháng",
        prompt: "Từ 'month' kết thúc bằng âm TH giống với âm TH trong từ 'think'.",
        promptVietnamese: "Từ 'month' kết thúc bằng âm TH giống với âm TH trong từ 'think'.",
        audioText: "month",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — cả 'month' và 'think' đều dùng âm TH không rung (gió), không rung dây thanh. Đầu lưỡi đặt giữa răng và thổi hơi ra nhẹ ở cả hai từ.",
        wrongAnswerExplanations:
          "Đây không phải trường hợp mơ hồ: quy tắc phát âm TH của một từ luôn cố định, không phụ thuộc người nói hay ngữ cảnh, nên 'Không chắc chắn' không đúng.",
        usageTip: "Dùng khi nói về thời gian, ví dụ 'once a month' (mỗi tháng một lần) khi hẹn lịch tái khám cho khách.",
      },
      {
        id: "pr-1-8",
        type: "listening",
        badgeEmoji: "🤏",
        english: "thin",
        vietnamese: "mỏng, gầy",
        audioText: "thin",
        choices: [
          { id: "a", text: "thin" },
          { id: "b", text: "sin" },
          { id: "c", text: "tin" },
        ],
        correctAnswer: "a",
        explanation:
          "'Thin' bắt đầu bằng âm TH gió — lưỡi đặt giữa răng, thổi hơi ra rồi mới chuyển sang âm 'i' và 'n'. Không chạm lưỡi vào chân răng như âm 'S' hay 'T'.",
        wrongAnswerExplanations:
          "'Sin' (tội lỗi) và 'tin' (thiếc, tin tức) là hai từ có thật nhưng khác nghĩa — nói lộn sẽ khiến câu trở nên vô nghĩa hoặc buồn cười.",
        usageTip: "Dùng khi mô tả lớp sơn, ví dụ 'Apply a thin layer of polish.' (thoa một lớp sơn mỏng).",
      },
      {
        id: "pr-1-9",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "My throat feels a little dry.",
        vietnamese: "Cổ họng tôi cảm thấy hơi khô.",
        promptContext: "Bạn muốn nói cổ họng mình hơi khô, dùng đúng âm TH không rung ở đầu từ 'throat'.",
        choices: [
          { id: "a", text: "My throat feels a little dry." },
          { id: "b", text: "My sroat feels a little dry." },
          { id: "c", text: "My troat feels a little dry." },
        ],
        correctAnswer: "a",
        explanation:
          "'Throat' bắt đầu bằng âm TH không rung — lưỡi giữa răng, thổi hơi ra rồi mới đến âm 'r'. Đây là cách viết và phát âm chuẩn của từ 'cổ họng'.",
        wrongAnswerExplanations:
          "'Sroat' và 'troat' không phải từ tiếng Anh — đây là lỗi phổ biến khi thay âm TH đầu từ bằng S hoặc T quen thuộc hơn.",
        usageTip: "Dùng khi bạn hơi mệt hoặc khát, một câu nhỏ để giải thích với đồng nghiệp hoặc khách.",
      },
      {
        id: "pr-1-10",
        type: "listening",
        badgeEmoji: "👄",
        english: "mouth",
        vietnamese: "miệng",
        audioText: "Open your mouth a little, please.",
        choices: [
          { id: "a", text: "Há miệng ra một chút giúp tôi." },
          { id: "b", text: "Nhắm mắt lại một chút giúp tôi." },
          { id: "c", text: "Giơ tay ra một chút giúp tôi." },
        ],
        correctAnswer: "a",
        explanation:
          "'Mouth' kết thúc bằng âm TH gió — sau âm 'ao', đầu lưỡi đưa nhẹ ra giữa răng và thổi hơi ra, không nuốt mất âm cuối thành 'mao' trống trơn.",
        wrongAnswerExplanations:
          "Câu gốc không nhắc đến mắt ('eyes') hay tay ('hands'), chỉ nói về miệng ('mouth') — nghe kỹ âm TH cuối để không nhầm với các từ khác.",
        usageTip: "Câu này ít dùng trong nail salon nhưng hữu ích khi đi khám răng hoặc khám sức khỏe tổng quát ở Mỹ.",
      },
    ],
  },
  {
    id: "pr-2",
    slug: "pr-02-th-co-rung-1",
    topicId: "pronunciation",
    title: "Âm TH có rung (this, that, mother)",
    description: "Luyện âm TH có rung dây thanh, phân biệt với âm D và Z.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-2-1",
        type: "listening",
        badgeEmoji: "👉",
        english: "this",
        vietnamese: "cái này",
        audioText: "this",
        choices: [
          { id: "a", text: "this" },
          { id: "b", text: "dis" },
          { id: "c", text: "zis" },
        ],
        correctAnswer: "a",
        explanation:
          "'This' dùng âm TH có rung: đầu lưỡi đặt giữa răng như âm TH thường, nhưng lần này dây thanh trong cổ họng phải rung lên (đặt tay lên cổ sẽ cảm thấy rung). Đây là cặp âm với 'think' — cùng vị trí lưỡi, khác việc rung hay không.",
        wrongAnswerExplanations:
          "'Dis' đặt lưỡi chạm vào răng trên chứ không phải giữa hai hàm răng. 'Zis' xì hơi qua giữa lưỡi như âm Z — cả hai đều là lỗi phổ biến khi né tránh vị trí lưỡi đúng của TH.",
        usageTip: "Dùng liên tục mỗi ngày: 'this color', 'this nail', 'this hand' — luyện kỹ vì đây là từ cực kỳ thông dụng.",
      },
      {
        id: "pr-2-2",
        type: "listening",
        badgeEmoji: "👈",
        english: "that",
        vietnamese: "cái đó",
        audioText: "that",
        choices: [
          { id: "a", text: "that" },
          { id: "b", text: "dat" },
          { id: "c", text: "zat" },
        ],
        correctAnswer: "a",
        explanation:
          "'That' cũng dùng âm TH có rung giống 'this' — lưỡi giữa răng, dây thanh rung. Khác với 'that' không rung là sai vị trí lưỡi hoàn toàn.",
        wrongAnswerExplanations:
          "'Dat' và 'zat' không phải từ tiếng Anh chuẩn — đây là cách nói của người mới học khi chưa quen đặt lưỡi giữa răng.",
        usageTip: "Dùng khi chỉ vào vật gì đó xa hơn, ví dụ 'Do you like that design?'",
      },
      {
        id: "pr-2-3",
        type: "listening",
        badgeEmoji: "👩",
        english: "mother",
        vietnamese: "mẹ",
        audioText: "mother",
        choices: [
          { id: "a", text: "mother" },
          { id: "b", text: "modder" },
          { id: "c", text: "mozzer" },
        ],
        correctAnswer: "a",
        explanation:
          "Âm TH có rung ở giữa từ 'mother': lưỡi chạm nhẹ giữa hai hàm răng khi đang nói, dây thanh vẫn rung liên tục vì các nguyên âm xung quanh cũng rung.",
        wrongAnswerExplanations:
          "'Modder' thay TH bằng âm D (lưỡi chạm nướu răng trên), còn 'mozzer' thay bằng âm Z (lưỡi không chạm răng) — cả hai đều là lỗi thường gặp của người Việt.",
        usageTip: "Dùng khi trò chuyện với khách về gia đình, ví dụ 'Is this a gift for your mother?'",
      },
      {
        id: "pr-2-4",
        type: "listening",
        badgeEmoji: "👨",
        english: "father",
        vietnamese: "cha, bố",
        audioText: "father",
        choices: [
          { id: "a", text: "father" },
          { id: "b", text: "fadder" },
          { id: "c", text: "farmer" },
        ],
        correctAnswer: "a",
        explanation:
          "Giống 'mother', 'father' có âm TH rung ở giữa từ. Chú ý âm 'f' đầu từ (răng trên chạm môi dưới) khác hoàn toàn với âm TH ở giữa (lưỡi giữa răng).",
        wrongAnswerExplanations:
          "'Fadder' thay TH bằng D. 'Farmer' (nông dân) là một từ khác hoàn toàn về nghĩa, dễ bị nhầm nếu nghe không kỹ phần giữa từ.",
        usageTip: "Dùng khi hỏi thăm khách, ví dụ 'Is your father doing well?'",
      },
      {
        id: "pr-2-5",
        type: "listening",
        badgeEmoji: "👦",
        english: "brother",
        vietnamese: "anh/em trai",
        audioText: "brother",
        choices: [
          { id: "a", text: "brother" },
          { id: "b", text: "brudder" },
          { id: "c", text: "bruzzer" },
        ],
        correctAnswer: "a",
        explanation:
          "'Brother' có âm TH rung ở giữa, sau cụm phụ âm 'br'. Hãy nói chậm 'bro-TH-er', giữ lưỡi giữa răng đủ lâu để tạo ra âm rung rõ ràng.",
        wrongAnswerExplanations:
          "'Brudder' và 'bruzzer' là hai cách thay thế phổ biến (D và Z) khi người nói chưa quen đặt lưỡi đúng vị trí giữa răng.",
        usageTip: "Dùng khi trò chuyện thân mật với khách quen, ví dụ 'My brother works here too.'",
      },
      {
        id: "pr-2-6",
        type: "listening",
        badgeEmoji: "☀️",
        english: "weather",
        vietnamese: "thời tiết",
        audioText: "weather",
        choices: [
          { id: "a", text: "weather" },
          { id: "b", text: "wedder" },
          { id: "c", text: "wetter" },
        ],
        correctAnswer: "a",
        explanation:
          "'Weather' có âm TH rung ở giữa. So sánh với 'wetter' (ướt hơn) — từ này dùng âm 'T' bật hơi rõ ràng, hoàn toàn khác vị trí lưỡi với TH.",
        wrongAnswerExplanations:
          "'Wedder' thay TH bằng D. 'Wetter' là một từ có thật (ướt hơn) nhưng khác nghĩa hoàn toàn với 'weather' (thời tiết) — dễ gây hiểu lầm nếu phát âm sai.",
        usageTip: "Dùng để bắt chuyện nhỏ với khách, ví dụ 'The weather is so nice today!'",
      },
      {
        id: "pr-2-7",
        type: "true_false",
        badgeEmoji: "🤝",
        english: "together",
        vietnamese: "cùng nhau",
        prompt: "Âm TH trong từ 'together' được phát âm bằng cách rung dây thanh, giống âm TH trong từ 'that'.",
        promptVietnamese: "Âm TH trong từ 'together' được phát âm bằng cách rung dây thanh, giống âm TH trong từ 'that'.",
        audioText: "together",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — 'together' dùng âm TH có rung (giống 'this', 'that', 'mother'), khác với âm TH không rung trong 'think' hay 'three'.",
        wrongAnswerExplanations:
          "Loại âm TH của một từ là cố định theo quy tắc phát âm tiếng Anh, không thay đổi tùy người nói, nên đáp án 'Không chắc chắn' không phù hợp.",
        usageTip: "Dùng khi nói 'Let's do this together.' (Cùng làm việc này nhé) với đồng nghiệp.",
      },
      {
        id: "pr-2-8",
        type: "listening",
        badgeEmoji: "👫",
        english: "they",
        vietnamese: "họ (đại từ)",
        audioText: "they",
        choices: [
          { id: "a", text: "they" },
          { id: "b", text: "day" },
          { id: "c", text: "zay" },
        ],
        correctAnswer: "a",
        explanation:
          "'They' bắt đầu bằng âm TH có rung — lưỡi giữa răng, dây thanh rung ngay từ đầu từ, khác hẳn 'day' (ngày) bắt đầu bằng âm 'D' chạm nướu răng.",
        wrongAnswerExplanations:
          "'Day' là từ có thật nhưng nghĩa là 'ngày', hoàn toàn khác 'they' (họ). 'Zay' không phải từ tiếng Anh, chỉ là lỗi phát âm.",
        usageTip: "Dùng khi nói về khách hàng khác, ví dụ 'They are waiting outside.'",
      },
      {
        id: "pr-2-9",
        type: "choose_best_sentence",
        badgeEmoji: "💅",
        english: "Then we can move to the next color.",
        vietnamese: "Vậy thì mình chuyển sang màu tiếp theo nhé.",
        promptContext: "Bạn vừa xong một bước và muốn chuyển sang màu tiếp theo, dùng đúng âm TH có rung trong 'then'.",
        choices: [
          { id: "a", text: "Then we can move to the next color." },
          { id: "b", text: "Den we can move to the next color." },
          { id: "c", text: "Zen we can move to the next color." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng viết và đọc 'then' với âm TH có rung chuẩn — lưỡi giữa răng, dây thanh rung.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại thể hiện cách phát âm sai thường gặp: thay TH bằng D ('den') hoặc bằng Z ('zen') — đều không phải chính tả hay cách nói chuẩn.",
        usageTip: "Dùng khi chuyển từ bước này sang bước khác trong lúc làm nail cho khách.",
      },
      {
        id: "pr-2-10",
        type: "listening",
        badgeEmoji: "🖐️",
        english: "these",
        vietnamese: "những cái này",
        audioText: "these",
        choices: [
          { id: "a", text: "these" },
          { id: "b", text: "deez" },
          { id: "c", text: "dees" },
        ],
        correctAnswer: "a",
        explanation:
          "'These' bắt đầu bằng âm TH có rung, giống 'this' nhưng là số nhiều. Giữ lưỡi giữa răng và cho dây thanh rung ngay khi bắt đầu nói.",
        wrongAnswerExplanations:
          "'Deez' và 'dees' đều thay âm TH bằng âm D — lỗi rất phổ biến vì âm D là âm gần giống nhất trong tiếng Việt mà người học hay dùng để thay thế.",
        usageTip: "Dùng khi chỉ vào nhiều mẫu móng cùng lúc, ví dụ 'Do you like these designs?'",
      },
    ],
  },
  {
    id: "pr-3",
    slug: "pr-03-th-dau-tu-1",
    topicId: "pronunciation",
    title: "Âm TH ở đầu từ (there, thief, thirteen)",
    description: "Nhận diện âm TH có rung và không rung khi đứng ở đầu những từ mới.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-3-1",
        type: "listening",
        badgeEmoji: "💧",
        english: "thirsty",
        vietnamese: "khát nước",
        audioText: "thirsty",
        choices: [
          { id: "a", text: "thirsty" },
          { id: "b", text: "sirsty" },
          { id: "c", text: "tirsty" },
        ],
        correctAnswer: "a",
        explanation:
          "'Thirsty' bắt đầu bằng âm TH không rung (gió) — giống 'think', 'three' — lưỡi giữa răng, thổi hơi ra, không rung dây thanh.",
        wrongAnswerExplanations:
          "'Sirsty' và 'tirsty' là hai cách thay TH bằng S hoặc T thường gặp, nghe không tự nhiên với người bản xứ.",
        usageTip: "Dùng khi mời khách nước uống, ví dụ 'Are you thirsty? Would you like some water?'",
      },
      {
        id: "pr-3-2",
        type: "listening",
        badgeEmoji: "📅",
        english: "Thursday",
        vietnamese: "thứ Năm",
        audioText: "Thursday",
        choices: [
          { id: "a", text: "Thursday" },
          { id: "b", text: "Sursday" },
          { id: "c", text: "Tursday" },
        ],
        correctAnswer: "a",
        explanation:
          "'Thursday' bắt đầu bằng âm TH không rung, giống 'thirsty'. Hãy chú ý phần đầu từ trước khi vào âm 'ur'.",
        wrongAnswerExplanations:
          "'Sursday' và 'Tursday' không phải cách phát âm hay chính tả đúng của thứ Năm trong tiếng Anh.",
        usageTip: "Dùng khi hẹn lịch với khách, ví dụ 'See you on Thursday!'",
      },
      {
        id: "pr-3-3",
        type: "listening",
        badgeEmoji: "🔢",
        english: "thirteen",
        vietnamese: "số mười ba",
        audioText: "thirteen",
        choices: [
          { id: "a", text: "thirteen" },
          { id: "b", text: "sirteen" },
          { id: "c", text: "tirteen" },
        ],
        correctAnswer: "a",
        explanation:
          "'Thirteen' cũng dùng âm TH không rung ở đầu. Cần phân biệt rõ với 'thirty' (ba mươi) vì trọng âm khác nhau, nhưng âm TH đầu từ giống nhau.",
        wrongAnswerExplanations:
          "'Sirteen' và 'tirteen' đều là lỗi phát âm phổ biến khi thay TH bằng âm quen thuộc hơn trong tiếng Việt.",
        usageTip: "Dùng khi nói về giá tiền hoặc số lượng, ví dụ 'That will be thirteen dollars.'",
      },
      {
        id: "pr-3-4",
        type: "listening",
        badgeEmoji: "🕵️",
        english: "thief",
        vietnamese: "kẻ trộm",
        audioText: "thief",
        choices: [
          { id: "a", text: "thief" },
          { id: "b", text: "sief" },
          { id: "c", text: "chief" },
        ],
        correctAnswer: "a",
        explanation:
          "'Thief' bắt đầu bằng âm TH không rung. So sánh với 'chief' (thủ lĩnh) — từ này bắt đầu bằng âm 'CH', lưỡi chạm vòm miệng, hoàn toàn khác vị trí với TH.",
        wrongAnswerExplanations:
          "'Sief' không phải từ tiếng Anh. 'Chief' là từ có thật nhưng nghĩa khác hẳn (thủ lĩnh, sếp) và âm đầu khác hoàn toàn với TH.",
        usageTip: "Từ này ít dùng trong salon nhưng hữu ích khi xem tin tức hoặc nói về an toàn, an ninh.",
      },
      {
        id: "pr-3-5",
        type: "listening",
        badgeEmoji: "🎭",
        english: "theater",
        vietnamese: "rạp hát, rạp chiếu phim",
        audioText: "theater",
        choices: [
          { id: "a", text: "theater" },
          { id: "b", text: "seater" },
          { id: "c", text: "teeter" },
        ],
        correctAnswer: "a",
        explanation:
          "'Theater' bắt đầu bằng âm TH không rung. Giữ lưỡi giữa răng thật rõ ở âm đầu trước khi chuyển sang các âm còn lại của từ.",
        wrongAnswerExplanations:
          "'Seater' và 'teeter' đều không đúng — đây là lỗi thay TH bằng S hoặc T như các từ khác trong nhóm này.",
        usageTip: "Dùng khi trò chuyện ngoài lề với khách về cuối tuần, ví dụ 'I went to the theater last night.'",
      },
      {
        id: "pr-3-6",
        type: "listening",
        badgeEmoji: "📍",
        english: "there",
        vietnamese: "ở đó",
        audioText: "there",
        choices: [
          { id: "a", text: "there" },
          { id: "b", text: "dare" },
          { id: "c", text: "dear" },
        ],
        correctAnswer: "a",
        explanation:
          "'There' bắt đầu bằng âm TH có rung (giống 'this', 'that'), khác hẳn 'dare' (dám) bắt đầu bằng âm D chạm nướu răng trên.",
        wrongAnswerExplanations:
          "'Dare' (dám làm gì đó) và 'dear' (thân mến) đều là từ có thật nhưng nghĩa khác hoàn toàn — nghe kỹ để không nhầm lẫn khi chỉ đường cho khách.",
        usageTip: "Dùng khi chỉ chỗ ngồi cho khách, ví dụ 'Please sit over there.'",
      },
      {
        id: "pr-3-7",
        type: "listening",
        badgeEmoji: "🙋",
        english: "their",
        vietnamese: "của họ",
        audioText: "their",
        choices: [
          { id: "a", text: "their" },
          { id: "b", text: "dare" },
          { id: "c", text: "hair" },
        ],
        correctAnswer: "a",
        explanation:
          "'Their' phát âm giống 'there' — âm TH có rung ở đầu. Đây là ba từ đồng âm dễ gây lẫn lộn khi viết: there / their / they're, nhưng đọc gần giống nhau.",
        wrongAnswerExplanations:
          "'Dare' thay TH bằng D. 'Hair' (tóc) bắt đầu bằng âm H thổi hơi, hoàn toàn khác vị trí lưỡi với TH.",
        usageTip: "Dùng khi nói về đồ đạc của khách khác, ví dụ 'That's their table.'",
      },
      {
        id: "pr-3-8",
        type: "listening",
        badgeEmoji: "👥",
        english: "them",
        vietnamese: "họ (tân ngữ)",
        audioText: "them",
        choices: [
          { id: "a", text: "them" },
          { id: "b", text: "dem" },
          { id: "c", text: "zem" },
        ],
        correctAnswer: "a",
        explanation:
          "'Them' bắt đầu bằng âm TH có rung, cùng nhóm với 'they', 'there', 'their'. Giữ lưỡi giữa răng và cho dây thanh rung ngay từ chữ cái đầu.",
        wrongAnswerExplanations:
          "'Dem' và 'zem' là hai lỗi phát âm phổ biến khi thay TH có rung bằng D hoặc Z — cả hai đều không phải từ chuẩn.",
        usageTip: "Dùng khi nói về nhiều khách cùng lúc, ví dụ 'Can you help them first?'",
      },
      {
        id: "pr-3-9",
        type: "true_false",
        badgeEmoji: "❓",
        english: "though",
        vietnamese: "mặc dù",
        prompt: "Âm TH đầu từ trong 'though' được phát âm giống âm TH đầu từ trong 'thief'.",
        promptVietnamese: "Âm TH đầu từ trong 'though' được phát âm giống âm TH đầu từ trong 'thief'.",
        audioText: "though",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai — 'though' dùng âm TH có rung (giống 'they', 'there'), còn 'thief' dùng âm TH không rung (giống 'think', 'three'). Vị trí lưỡi giống nhau nhưng việc rung dây thanh thì khác.",
        wrongAnswerExplanations:
          "Đây không phải điều mơ hồ — mỗi từ tiếng Anh có một cách phát âm TH cố định, nên 'Không chắc chắn' không đúng.",
        usageTip: "Dùng khi nói 'It's a little expensive, though.' (Hơi đắt một chút, nhưng thôi cũng được) khi giải thích giá dịch vụ.",
      },
      {
        id: "pr-3-10",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "This design looks better than the last one.",
        vietnamese: "Mẫu này trông đẹp hơn mẫu trước.",
        promptContext: "Bạn muốn khen mẫu móng mới đẹp hơn mẫu trước, dùng đúng âm TH có rung trong 'than'.",
        choices: [
          { id: "a", text: "This design looks better than the last one." },
          { id: "b", text: "This design looks better dan the last one." },
          { id: "c", text: "This design looks better zan the last one." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng dùng 'than' với âm TH có rung chuẩn ở đầu từ — lưỡi giữa răng, dây thanh rung. 'Than' dùng để so sánh hai điều với nhau.",
        wrongAnswerExplanations:
          "'Dan' và 'zan' đều thay âm TH bằng D hoặc Z — lỗi phổ biến khi né tránh vị trí lưỡi giữa răng của TH.",
        usageTip: "Dùng khi so sánh nhẹ nhàng giữa hai mẫu móng, giữ giọng thân thiện, không chê bai.",
      },
    ],
  },
  {
    id: "pr-4",
    slug: "pr-04-th-giua-cuoi-tu-1",
    topicId: "pronunciation",
    title: "Âm TH ở giữa và cuối từ (birthday, clothes, other)",
    description: "Luyện nghe âm TH khi nó nằm ở giữa hoặc cuối một từ dài hơn.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-4-1",
        type: "listening",
        badgeEmoji: "🎂",
        english: "birthday",
        vietnamese: "sinh nhật",
        audioText: "birthday",
        choices: [
          { id: "a", text: "birthday" },
          { id: "b", text: "birdday" },
          { id: "c", text: "birsday" },
        ],
        correctAnswer: "a",
        explanation:
          "'Birthday' có âm TH không rung ở giữa từ, sau âm 'r'. Cần giữ lưỡi giữa răng rõ ràng trước khi chuyển sang âm 'd' của 'day'.",
        wrongAnswerExplanations:
          "'Birdday' nghe như ghép từ 'bird' (chim) — sai hoàn toàn. 'Birsday' thay TH bằng S, một lỗi phổ biến khi nói nhanh.",
        usageTip: "Dùng khi chúc mừng khách, ví dụ 'Happy birthday! Do you want a special design today?'",
      },
      {
        id: "pr-4-2",
        type: "listening",
        badgeEmoji: "🤷",
        english: "something",
        vietnamese: "một điều gì đó",
        audioText: "something",
        choices: [
          { id: "a", text: "something" },
          { id: "b", text: "sumting" },
          { id: "c", text: "sumfing" },
        ],
        correctAnswer: "a",
        explanation:
          "'Something' có âm TH không rung ở giữa, giữa 'some' và 'thing'. Hãy tách chậm 'some-thing' khi mới tập để cảm nhận rõ vị trí lưỡi.",
        wrongAnswerExplanations:
          "'Sumting' thay TH bằng T, 'sumfing' thay bằng F — cả hai đều là lỗi phát âm phổ biến vì né tránh việc đặt lưỡi giữa răng.",
        usageTip: "Dùng khi hỏi khách, ví dụ 'Would you like something to drink?'",
      },
      {
        id: "pr-4-3",
        type: "listening",
        badgeEmoji: "🙅",
        english: "nothing",
        vietnamese: "không có gì",
        audioText: "nothing",
        choices: [
          { id: "a", text: "nothing" },
          { id: "b", text: "notting" },
          { id: "c", text: "nossing" },
        ],
        correctAnswer: "a",
        explanation:
          "'Nothing' cũng có âm TH không rung ở giữa, giống cấu trúc của 'something'. Giữ lưỡi giữa răng ở phần giữa từ.",
        wrongAnswerExplanations:
          "'Notting' thay TH bằng T bật hơi, 'nossing' thay bằng S — cả hai là cách phát âm sai thường gặp.",
        usageTip: "Dùng khi trả lời 'It's nothing, don't worry.' để trấn an khách.",
      },
      {
        id: "pr-4-4",
        type: "listening",
        badgeEmoji: "🚻",
        english: "bathroom",
        vietnamese: "phòng vệ sinh",
        audioText: "bathroom",
        choices: [
          { id: "a", text: "bathroom" },
          { id: "b", text: "batroom" },
          { id: "c", text: "basroom" },
        ],
        correctAnswer: "a",
        explanation:
          "'Bathroom' có âm TH không rung ở giữa, giữa 'bath' và 'room'. Đây là ghép của từ 'bath' (đã học ở bài trước) với 'room'.",
        wrongAnswerExplanations:
          "'Batroom' và 'basroom' đều thay âm TH giữa từ bằng T hoặc S — lỗi rất phổ biến khi nói nhanh trong giao tiếp hàng ngày.",
        usageTip: "Dùng khi khách hỏi đường, ví dụ 'The bathroom is right over there.'",
      },
      {
        id: "pr-4-5",
        type: "listening",
        badgeEmoji: "🧭",
        english: "north",
        vietnamese: "hướng bắc",
        audioText: "north",
        choices: [
          { id: "a", text: "north" },
          { id: "b", text: "nort" },
          { id: "c", text: "nose" },
        ],
        correctAnswer: "a",
        explanation:
          "'North' kết thúc bằng âm TH không rung, sau âm 'r'. Đầu lưỡi đưa ra giữa răng ở cuối từ, không được cắt bỏ âm cuối.",
        wrongAnswerExplanations:
          "'Nort' bỏ mất âm TH cuối, chỉ còn âm 'T'. 'Nose' (mũi) là một từ hoàn toàn khác về nghĩa, không liên quan đến phương hướng.",
        usageTip: "Dùng khi chỉ đường, ví dụ 'Go north on this street.'",
      },
      {
        id: "pr-4-6",
        type: "listening",
        badgeEmoji: "🔟",
        english: "tenth",
        vietnamese: "thứ mười",
        audioText: "tenth",
        choices: [
          { id: "a", text: "tenth" },
          { id: "b", text: "tent" },
          { id: "c", text: "tens" },
        ],
        correctAnswer: "a",
        explanation:
          "'Tenth' kết thúc bằng âm TH không rung, ngay sau âm 'n'. Cần giữ đầu lưỡi ở răng đủ lâu để nghe rõ cả âm 'n' và âm TH.",
        wrongAnswerExplanations:
          "'Tent' (cái lều) là một từ có thật nhưng khác nghĩa hoàn toàn. 'Tens' (số nhiều của mười) cũng là từ khác, dùng âm S thay vì TH.",
        usageTip: "Dùng khi nói ngày tháng, ví dụ 'My appointment is on the tenth.'",
      },
      {
        id: "pr-4-7",
        type: "listening",
        badgeEmoji: "👕",
        english: "clothes",
        vietnamese: "quần áo",
        audioText: "clothes",
        choices: [
          { id: "a", text: "clothes" },
          { id: "b", text: "close" },
          { id: "c", text: "clots" },
        ],
        correctAnswer: "a",
        explanation:
          "'Clothes' (quần áo) có âm TH có rung ở giữa, cộng thêm âm 's' cuối rất nhẹ. Từ này thường bị đọc lướt giống hệt 'close' (đóng lại/gần) — nhưng khi viết và nói chuẩn thì vẫn giữ âm TH.",
        wrongAnswerExplanations:
          "'Close' là từ có thật nhưng nghĩa là 'đóng' hoặc 'gần', hoàn toàn khác 'clothes' (quần áo). 'Clots' (cục máu đông) cũng là từ khác, không liên quan.",
        usageTip: "Dùng khi khách sợ sơn dính vào quần áo, ví dụ 'Be careful with your clothes, the polish is wet.'",
      },
      {
        id: "pr-4-8",
        type: "listening",
        badgeEmoji: "🧈",
        english: "smooth",
        vietnamese: "mịn, mượt",
        audioText: "smooth",
        choices: [
          { id: "a", text: "smooth" },
          { id: "b", text: "smood" },
          { id: "c", text: "smooz" },
        ],
        correctAnswer: "a",
        explanation:
          "'Smooth' kết thúc bằng âm TH có rung — hiếm gặp vì hầu hết các từ TH cuối đều không rung, nhưng 'smooth' là một ngoại lệ quan trọng trong nghề làm móng.",
        wrongAnswerExplanations:
          "'Smood' thay TH bằng D, 'smooz' thay bằng Z — cả hai đều là lỗi phổ biến khi người học chưa quen với âm TH rung ở vị trí cuối từ.",
        usageTip: "Từ cực kỳ hữu ích trong nghề: 'Your nails feel so smooth now!' để khen kết quả sau khi giũa xong.",
      },
      {
        id: "pr-4-9",
        type: "true_false",
        badgeEmoji: "❓",
        english: "other",
        vietnamese: "khác",
        prompt: "Từ 'other' có âm TH giống với âm TH có rung trong từ 'mother'.",
        promptVietnamese: "Từ 'other' có âm TH giống với âm TH có rung trong từ 'mother'.",
        audioText: "other",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — 'other' và 'mother' đều dùng âm TH có rung ở giữa từ. Nhiều khách hay lẫn 'other' với 'udder' (bầu vú bò) khi nghe không kỹ vì hai từ nghe khá giống nhau.",
        wrongAnswerExplanations:
          "Quy tắc phát âm TH của một từ là cố định trong tiếng Anh chuẩn, không phụ thuộc vào ngữ cảnh, nên 'Không chắc chắn' không phải đáp án đúng.",
        usageTip: "Dùng khi nói 'Can I see your other hand?' — câu rất thường dùng trong lúc làm nail.",
      },
      {
        id: "pr-4-10",
        type: "choose_best_sentence",
        badgeEmoji: "🙌",
        english: "Sorry to bother you, can you check this color?",
        vietnamese: "Xin lỗi làm phiền chị, chị xem giúp màu này được không?",
        promptContext: "Bạn muốn xin lỗi vì làm phiền khách một chút, dùng đúng âm TH có rung trong 'bother'.",
        choices: [
          { id: "a", text: "Sorry to bother you, can you check this color?" },
          { id: "b", text: "Sorry to bodder you, can you check this color?" },
          { id: "c", text: "Sorry to bozzer you, can you check this color?" },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng dùng 'bother' với âm TH có rung chuẩn ở giữa từ — lưỡi giữa răng, dây thanh rung.",
        wrongAnswerExplanations:
          "'Bodder' thay TH bằng D, 'bozzer' thay bằng Z — cả hai đều là lỗi phát âm phổ biến, không phải chính tả chuẩn.",
        usageTip: "Dùng khi cần làm phiền khách một chút để hỏi ý kiến hoặc xác nhận điều gì đó.",
      },
    ],
  },
  {
    id: "pr-5",
    slug: "pr-05-th-cau-day-du-1",
    topicId: "pronunciation",
    title: "Ôn tập: câu đầy đủ có nhiều âm TH",
    description: "Ôn lại cả hai loại âm TH qua các câu và từ mới trong ngữ cảnh thật.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-5-1",
        type: "listening",
        badgeEmoji: "🧮",
        english: "I'm good at math.",
        vietnamese: "Tôi giỏi môn toán.",
        audioText: "I'm good at math.",
        choices: [
          { id: "a", text: "Tôi giỏi môn toán." },
          { id: "b", text: "Tôi giỏi nấu ăn." },
          { id: "c", text: "Tôi giỏi vẽ tranh." },
        ],
        correctAnswer: "a",
        explanation:
          "'Math' kết thúc bằng âm TH không rung — từ này là viết tắt của 'mathematics' (toán học). Đầu lưỡi ra giữa răng, thổi hơi nhẹ ở cuối từ.",
        wrongAnswerExplanations: "Câu gốc không nhắc đến nấu ăn ('cooking') hay vẽ tranh ('drawing'), chỉ nói về môn toán.",
        usageTip: "Dùng khi tính tiền nhanh cho khách và muốn đùa vui, ví dụ khi cộng hóa đơn.",
      },
      {
        id: "pr-5-2",
        type: "listening",
        badgeEmoji: "🚶",
        english: "Walk on the path, not the grass.",
        vietnamese: "Đi trên lối đi, đừng đi trên cỏ.",
        audioText: "Walk on the path, not the grass.",
        choices: [
          { id: "a", text: "Đi trên lối đi, đừng đi trên cỏ." },
          { id: "b", text: "Đi trên đường lớn, đừng đi trên vỉa hè." },
          { id: "c", text: "Đi qua cầu, đừng đi qua đường." },
        ],
        correctAnswer: "a",
        explanation:
          "'Path' (lối đi nhỏ) kết thúc bằng âm TH không rung, giống 'math'. Nghe kỹ âm cuối để phân biệt với 'pass' (đi qua) hay 'pat' (vỗ nhẹ).",
        wrongAnswerExplanations: "Câu gốc dùng từ 'path' (lối đi) và 'grass' (cỏ), không nhắc đến đường lớn, vỉa hè hay cây cầu.",
        usageTip: "Dùng khi đi dạo công viên hoặc chỉ đường ngoài trời cho bạn bè, người thân.",
      },
      {
        id: "pr-5-3",
        type: "listening",
        badgeEmoji: "🧵",
        english: "This cloth is very soft.",
        vietnamese: "Miếng vải này rất mềm.",
        audioText: "This cloth is very soft.",
        choices: [
          { id: "a", text: "Miếng vải này rất mềm." },
          { id: "b", text: "Miếng vải này rất cứng." },
          { id: "c", text: "Cái áo này rất đắt." },
        ],
        correctAnswer: "a",
        explanation:
          "'Cloth' (miếng vải, khăn lau) kết thúc bằng âm TH không rung. Đừng nhầm với 'clothes' (quần áo, có âm TH rung và thêm 's') đã học ở bài trước.",
        wrongAnswerExplanations: "Câu gốc nói vải 'rất mềm' ('soft'), không phải cứng, và không nhắc gì đến giá tiền quần áo.",
        usageTip: "Dùng khi làm việc với khăn lau móng trong salon, ví dụ 'Use a clean cloth to wipe the nail.'",
      },
      {
        id: "pr-5-4",
        type: "listening",
        badgeEmoji: "✍️",
        english: "She is a famous author.",
        vietnamese: "Cô ấy là một tác giả nổi tiếng.",
        audioText: "She is a famous author.",
        choices: [
          { id: "a", text: "Cô ấy là một tác giả nổi tiếng." },
          { id: "b", text: "Cô ấy là một ca sĩ nổi tiếng." },
          { id: "c", text: "Cô ấy là một con rái cá dễ thương." },
        ],
        correctAnswer: "a",
        explanation:
          "'Author' (tác giả) có âm TH không rung ở giữa từ. Chú ý đừng nhầm với 'otter' (con rái cá) — hai từ nghe khá giống nếu bỏ mất âm TH.",
        wrongAnswerExplanations: "Câu gốc nói về 'author' (tác giả viết sách), không phải ca sĩ ('singer') hay con rái cá ('otter').",
        usageTip: "Dùng khi trò chuyện với khách về sách hoặc phim đang nổi, tạo chủ đề nói chuyện nhẹ nhàng.",
      },
      {
        id: "pr-5-5",
        type: "listening",
        badgeEmoji: "🧩",
        english: "We need a new method.",
        vietnamese: "Chúng ta cần một phương pháp mới.",
        audioText: "We need a new method.",
        choices: [
          { id: "a", text: "Chúng ta cần một phương pháp mới." },
          { id: "b", text: "Chúng ta cần một chiếc huy chương mới." },
          { id: "c", text: "Chúng ta cần một cái ghế mới." },
        ],
        correctAnswer: "a",
        explanation:
          "'Method' (phương pháp) có âm TH không rung ở giữa. Phân biệt với 'medal' (huy chương) — hoàn toàn khác về âm và nghĩa.",
        wrongAnswerExplanations: "Câu gốc nói về 'phương pháp' để làm việc gì đó, không liên quan đến huy chương hay ghế ngồi.",
        usageTip: "Dùng khi thảo luận với đồng nghiệp về cách làm nail hiệu quả hơn.",
      },
      {
        id: "pr-5-6",
        type: "true_false",
        badgeEmoji: "❓",
        english: "thick",
        vietnamese: "dày",
        prompt: "Từ 'thick' phát âm âm TH giống với âm TH trong từ 'think'.",
        promptVietnamese: "Từ 'thick' phát âm âm TH giống với âm TH trong từ 'think'.",
        audioText: "thick",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — cả 'thick' và 'think' đều dùng âm TH không rung ở đầu từ. Lưỡi đặt giữa răng, thổi hơi ra, không rung dây thanh ở cả hai từ.",
        wrongAnswerExplanations: "Cách phát âm TH của mỗi từ là cố định theo quy tắc tiếng Anh, nên 'Không chắc chắn' không đúng.",
        usageTip: "Dùng khi mô tả lớp sơn gel, ví dụ 'Don't make it too thick.' (Đừng để lớp sơn quá dày).",
      },
      {
        id: "pr-5-7",
        type: "true_false",
        badgeEmoji: "❓",
        english: "worth",
        vietnamese: "đáng giá",
        prompt: "Từ 'worth' kết thúc bằng âm TH giống với âm TH trong từ 'this'.",
        promptVietnamese: "Từ 'worth' kết thúc bằng âm TH giống với âm TH trong từ 'this'.",
        audioText: "worth",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai — 'worth' kết thúc bằng âm TH không rung (giống 'think'), trong khi 'this' dùng âm TH có rung. Vị trí lưỡi giống nhau nhưng việc rung dây thanh thì khác nhau.",
        wrongAnswerExplanations: "Đây là một sự thật cố định về ngữ âm tiếng Anh, không phải điều mơ hồ, nên 'Không chắc chắn' không phù hợp.",
        usageTip: "Dùng khi nói về giá trị dịch vụ, ví dụ 'It's worth the price.' (Nó đáng giá với số tiền đó).",
      },
      {
        id: "pr-5-8",
        type: "true_false",
        badgeEmoji: "❓",
        english: "fourth",
        vietnamese: "thứ tư",
        prompt: "Âm TH trong 'fourth' được tạo ra bằng cách rung dây thanh giống chữ D.",
        promptVietnamese: "Âm TH trong 'fourth' được tạo ra bằng cách rung dây thanh giống chữ D.",
        audioText: "fourth",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai — âm TH trong 'fourth' là âm không rung: chỉ có luồng hơi thổi ra qua kẽ răng, dây thanh không rung, và cũng không giống cách tạo âm D (lưỡi chạm nướu răng, có rung).",
        wrongAnswerExplanations: "Đây là quy tắc ngữ âm cố định, không phải điều còn tùy hay chưa rõ, nên 'Không chắc chắn' không đúng.",
        usageTip: "Dùng khi nói thứ tự, ví dụ 'You're the fourth customer today.' (Chị là khách thứ tư hôm nay).",
      },
      {
        id: "pr-5-9",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "I need to breathe deeply.",
        vietnamese: "Tôi cần hít thở thật sâu.",
        promptContext: "Bạn muốn nói với khách rằng bạn cần hít thở sâu, ví dụ khi khách hồi hộp trước khi làm dịch vụ.",
        choices: [
          { id: "a", text: "I need to breathe deeply." },
          { id: "b", text: "I need to breed deeply." },
          { id: "c", text: "I need to breeze deeply." },
        ],
        correctAnswer: "a",
        explanation:
          "'Breathe' (hít thở, động từ) kết thúc bằng âm TH có rung. Đây là cách viết và phát âm chuẩn của động từ 'thở'.",
        wrongAnswerExplanations:
          "'Breed' (nhân giống) thay TH bằng D. 'Breeze' (làn gió nhẹ) thay TH bằng Z — cả hai đều là từ có thật nhưng nghĩa hoàn toàn khác.",
        usageTip: "Dùng để trấn an khách đang lo lắng, ví dụ trước khi làm thủ thuật nào đó hơi đau như đắp bột.",
      },
      {
        id: "pr-5-10",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "The southern part of the city is quiet.",
        vietnamese: "Khu vực phía nam thành phố khá yên tĩnh.",
        promptContext: "Bạn muốn nói về khu vực phía nam thành phố, dùng đúng âm TH có rung trong 'southern'.",
        choices: [
          { id: "a", text: "The southern part of the city is quiet." },
          { id: "b", text: "The suddern part of the city is quiet." },
          { id: "c", text: "The suzzern part of the city is quiet." },
        ],
        correctAnswer: "a",
        explanation:
          "'Southern' (phía nam) có âm TH có rung ở giữa từ, sau 'sou'. Lưỡi đặt giữa răng, dây thanh rung khi phát âm phần giữa của từ.",
        wrongAnswerExplanations:
          "'Suddern' thay TH bằng D, 'suzzern' thay bằng Z — cả hai đều không phải chính tả chuẩn của 'southern' trong tiếng Anh.",
        usageTip: "Dùng khi trò chuyện về khu vực sinh sống, ví dụ khi khách hỏi bạn ở đâu tại Mỹ.",
      },
    ],
  },
];
