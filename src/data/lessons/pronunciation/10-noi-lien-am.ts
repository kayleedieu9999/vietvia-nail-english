import { Lesson } from "@/types/content";

export const pronunciationGroup10: Lesson[] = [
  {
    id: "pr-46",
    slug: "pr-46-noi-lien-am-phu-am-nguyen-am-1",
    topicId: "pronunciation",
    title: "Nối phụ âm với nguyên âm",
    description: "Học cách người bản xứ nối âm cuối phụ âm với âm đầu nguyên âm của từ sau.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-46-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "an apple",
        vietnamese: "một quả táo",
        audioText: "an apple",
        prompt: "Nghe cụm từ này — nó nối âm như thế nào khi nói tự nhiên?",
        choices: [
          { id: "a", text: "Nghe tách rời: 'an' — 'apple'" },
          { id: "b", text: "Nghe nối liền: 'a-napple' (âm N nối sang từ sau)" },
          { id: "c", text: "Nghe mất hẳn âm N: 'a-apple'" },
        ],
        correctAnswer: "b",
        explanation:
          "Khi phụ âm cuối của một từ ('an' kết thúc bằng N) đứng trước một từ bắt đầu bằng nguyên âm ('apple' bắt đầu bằng 'a'), người bản xứ tự động NỐI âm cuối đó sang đầu từ tiếp theo — nghe như 'a-napple' thay vì tách rời hai từ.",
        wrongAnswerExplanations:
          "Người bản xứ nói tiếng Anh tự nhiên KHÔNG tách rời từng từ một cách rõ ràng như khi mới học — đó là lý do người học nghe 'nhanh quá không kịp' dù từng từ đều quen thuộc. Âm N cũng không biến mất, nó chỉ chuyển sang đầu từ sau.",
        usageTip: "Dùng để hiểu tại sao khi nghe người Mỹ nói nhanh, các từ nghe như dính liền vào nhau thay vì tách biệt.",
      },
      {
        id: "pr-46-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "turn off",
        vietnamese: "tắt (đèn, máy...)",
        audioText: "turn off",
        prompt: "Nghe cụm từ này khi nói nhanh, nó nối âm ra sao?",
        choices: [
          { id: "a", text: "Nghe tách rời: 'turn' — 'off'" },
          { id: "b", text: "Nghe nối liền: 'tur-noff' (âm N nối sang 'off')" },
          { id: "c", text: "Nghe thành ba từ riêng biệt" },
        ],
        correctAnswer: "b",
        explanation:
          "'Turn' kết thúc bằng phụ âm N, và 'off' bắt đầu bằng nguyên âm 'o' — nên khi nói nhanh, âm N của 'turn' nối liền sang 'off', nghe thành 'tur-noff'. Đây là quy tắc nối âm rất phổ biến trong tiếng Anh giao tiếp.",
        wrongAnswerExplanations:
          "Nếu cố tách rời hai từ rõ ràng, câu nói sẽ nghe cứng và không tự nhiên — người bản xứ luôn nối âm khi gặp trường hợp phụ âm cuối gặp nguyên âm đầu như thế này.",
        usageTip: "Dùng khi nói về việc tắt thiết bị, ví dụ 'turn off the light' (tắt đèn).",
      },
      {
        id: "pr-46-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Linking happens when a word ending in a consonant sound is followed by a word starting with a vowel sound.",
        vietnamese: "Nối âm xảy ra khi một từ kết thúc bằng âm phụ âm được theo sau bởi một từ bắt đầu bằng âm nguyên âm.",
        prompt: "Linking happens when a word ending in a consonant sound is followed by a word starting with a vowel sound.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Đây chính là quy tắc nối âm cơ bản nhất trong tiếng Anh nói tự nhiên: khi từ trước kết thúc bằng âm phụ âm và từ sau bắt đầu bằng âm nguyên âm, hai âm này tự động nối liền với nhau khi phát âm liên tục, không có khoảng dừng.",
        wrongAnswerExplanations:
          "Đây là một quy tắc phát âm được xác nhận rõ ràng trong ngữ âm học tiếng Anh, không có gì để nghi ngờ về tính chính xác.",
        usageTip: "Dùng quy tắc này để luyện nghe: khi nghe người bản xứ nói, tìm những chỗ phụ âm cuối 'chạy' sang từ nguyên âm tiếp theo.",
      },
      {
        id: "pr-46-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Wake up!",
        vietnamese: "Dậy đi!",
        audioText: "Wake up!",
        prompt: "Nghe câu này, nó nối âm ra sao?",
        choices: [
          { id: "a", text: "Nghe tách rời: 'wake' — 'up'" },
          { id: "b", text: "Nghe nối liền: 'wei-kup' (âm K nối sang 'up')" },
          { id: "c", text: "Nghe thành 'wai-cấp'" },
        ],
        correctAnswer: "b",
        explanation:
          "'Wake' kết thúc bằng phụ âm K, và 'up' bắt đầu bằng nguyên âm 'u' — nên khi nói, âm K nối liền sang 'up', nghe thành 'wei-kup' thay vì hai từ tách biệt rõ ràng.",
        wrongAnswerExplanations:
          "Nếu tách rời hai từ, câu sẽ nghe không tự nhiên với người bản xứ. 'wai-cấp' là cách đọc sai hoàn toàn, không phản ánh đúng âm gốc của cụm từ này.",
        usageTip: "Dùng khi đánh thức ai đó, ví dụ 'wake up, it's morning!' (dậy đi, sáng rồi!).",
      },
      {
        id: "pr-46-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Check it out.",
        vietnamese: "Xem thử đi.",
        audioText: "Check it out.",
        prompt: "Nghe câu này, có bao nhiêu chỗ nối âm?",
        choices: [
          { id: "a", text: "Không có chỗ nào nối âm" },
          { id: "b", text: "Hai chỗ: 'check-it' và 'it-out'" },
          { id: "c", text: "Chỉ một chỗ: 'it-out'" },
        ],
        correctAnswer: "b",
        explanation:
          "Câu này có 2 điểm nối: 'check' (kết thúc phụ âm K) nối với 'it' (bắt đầu nguyên âm 'i') thành 'che-kit', và 'it' (kết thúc phụ âm T) nối với 'out' (bắt đầu nguyên âm 'ou') thành 'i-tout'. Cả câu nghe liền mạch như 'che-ki-tout'.",
        wrongAnswerExplanations:
          "Câu này có nhiều hơn một chỗ nối âm vì có tới ba từ liên tiếp đều thỏa điều kiện phụ âm cuối gặp nguyên âm đầu — cả hai điểm nối đều xảy ra, không chỉ một.",
        usageTip: "Dùng khi giới thiệu ai đó xem thử thứ gì, ví dụ một sản phẩm hoặc mẫu thiết kế mới.",
      },
      {
        id: "pr-46-6",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "Put it on the table.",
        vietnamese: "Đặt nó lên bàn.",
        promptContext: "Bạn muốn hiểu câu này được nói tự nhiên (nối âm) như thế nào, không phải cách viết.",
        choices: [
          { id: "a", text: "Nghe như: 'pu-ti-ton-the-table' (nối liền các âm)" },
          { id: "b", text: "Nghe như: 'put. it. on. the. table.' (mỗi từ tách biệt rõ ràng)" },
          { id: "c", text: "Nghe như: 'puton table' (bỏ hẳn từ 'it')" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nói tự nhiên, 'put' nối với 'it' (T nối sang I), và 'it' nối với 'on' (T nối sang O) — cả cụm nghe liền mạch như 'pu-ti-ton'. Đây là lý do câu nói tự nhiên nghe nhanh và khó tách từng từ với người mới học.",
        wrongAnswerExplanations:
          "Nếu tách từng từ rõ ràng như khi đọc chậm cho người mới học, câu sẽ nghe không tự nhiên. Từ 'it' vẫn được giữ nguyên trong câu, không hề bị bỏ qua.",
        usageTip: "Dùng để hiểu vì sao câu ra lệnh ngắn như thế này lại nghe nhanh và khó bắt kịp khi giao tiếp thực tế.",
      },
      {
        id: "pr-46-7",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Understanding linking helps you realize that spoken English often sounds different from how words look when written separately.",
        vietnamese: "Hiểu về nối âm giúp bạn nhận ra rằng tiếng Anh nói thường nghe khác với cách các từ trông khi viết tách biệt.",
        prompt: "Understanding linking helps you realize that spoken English often sounds different from how words look when written separately.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Đây là lý do chính khiến nhiều người học tiếng Anh cảm thấy nghe hiểu khó hơn nhiều so với đọc — khi viết, mỗi từ tách biệt rõ ràng, nhưng khi nói tự nhiên, các từ liên kết với nhau qua hiện tượng nối âm, tạo ra âm thanh khác hẳn với tưởng tượng ban đầu.",
        wrongAnswerExplanations:
          "Đây là một hiện tượng ngôn ngữ học đã được nghiên cứu kỹ và là lý do chính giải thích tại sao nghe tiếng Anh tự nhiên lại khó hơn đọc, không có gì để nghi ngờ.",
        usageTip: "Dùng nhận thức này để bớt nản khi nghe không kịp — hãy luyện nghe nhiều câu có nối âm để quen dần.",
      },
      {
        id: "pr-46-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I love it!",
        vietnamese: "Tôi thích nó lắm!",
        audioText: "I love it!",
        prompt: "Nghe câu này, nó nối âm ra sao?",
        choices: [
          { id: "a", text: "Nghe tách rời: 'love' — 'it'" },
          { id: "b", text: "Nghe nối liền: 'lo-vit' (âm V nối sang 'it')" },
          { id: "c", text: "Nghe mất âm V: 'lo-it'" },
        ],
        correctAnswer: "b",
        explanation:
          "'Love' kết thúc bằng phụ âm V, và 'it' bắt đầu bằng nguyên âm 'i' — nên khi nói tự nhiên, âm V nối liền sang 'it', nghe thành 'lo-vit'. Đây là một câu khen rất phổ biến khi khách hài lòng với dịch vụ.",
        wrongAnswerExplanations:
          "Nếu tách rời, câu sẽ nghe cứng và không tự nhiên. Âm V không hề biến mất, nó chỉ chuyển vị trí nghe như đầu từ 'it' thay vì cuối từ 'love'.",
        usageTip: "Dùng khi khách khen món nail vừa làm xong, ví dụ 'I love it!' (Tôi thích nó lắm!) — câu cực kỳ thông dụng trong tiệm nail.",
      },
      {
        id: "pr-46-9",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Take a seat and relax.",
        vietnamese: "Mời ngồi và thư giãn.",
        audioText: "Take a seat and relax.",
        choices: [
          { id: "a", text: "Mời ngồi và thư giãn." },
          { id: "b", text: "Đứng dậy và ra ngoài." },
          { id: "c", text: "Đừng ngồi ở đây." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có nối âm giữa 'take' và 'a' (K nối sang A) nghe như 'tei-ka seat' — một câu mời khách ngồi rất lịch sự và phổ biến trong tiệm nail hoặc spa.",
        wrongAnswerExplanations:
          "Câu gốc mời NGỒI XUỐNG (take a seat), không phải đứng dậy hay ra ngoài, và không có ý phủ định 'đừng ngồi'.",
        usageTip: "Dùng câu này để mời khách hàng ngồi xuống ghế khi họ mới đến tiệm.",
      },
      {
        id: "pr-46-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Put an ice pack on it.",
        vietnamese: "Đặt một túi đá lên đó.",
        audioText: "Put an ice pack on it.",
        choices: [
          { id: "a", text: "Đặt một túi đá lên đó." },
          { id: "b", text: "Bỏ túi đá ra khỏi đó." },
          { id: "c", text: "Đừng dùng đá lạnh." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có nhiều điểm nối âm: 'put an' (T nối sang A), 'an ice' (N nối sang I), 'pack on' (K nối sang O), 'on it' (N nối sang I) — một câu dày đặc hiện tượng nối âm rất điển hình khi nói nhanh.",
        wrongAnswerExplanations:
          "Câu gốc yêu cầu ĐẶT túi đá lên (put... on it), không phải lấy ra, và không có ý phủ định việc dùng đá lạnh.",
        usageTip: "Dùng câu này khi cần hướng dẫn ai đó chườm đá lên vết thương hoặc chỗ sưng.",
      },
    ],
  },
  {
    id: "pr-47",
    slug: "pr-47-noi-lien-am-cung-phu-am-1",
    topicId: "pronunciation",
    title: "Nối âm khi hai phụ âm giống nhau",
    description: "Học cách hai âm phụ âm giống nhau nối thành một âm dài khi nói liên tục.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-47-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "black coffee",
        vietnamese: "cà phê đen",
        audioText: "black coffee",
        prompt: "Nghe cụm từ này, hai chữ K liên tiếp được đọc ra sao?",
        choices: [
          { id: "a", text: "Đọc hai lần âm K rõ ràng: 'black' - 'coffee'" },
          { id: "b", text: "Chỉ đọc MỘT âm K kéo dài, không tách rời" },
          { id: "c", text: "Bỏ hẳn âm K của cả hai từ" },
        ],
        correctAnswer: "b",
        explanation:
          "Khi hai từ liên tiếp có âm phụ âm CUỐI và ĐẦU giống nhau (ở đây cả hai đều là âm K), người bản xứ không đọc tách rời hai lần mà chỉ giữ hơi ở vị trí đó rồi bật ra MỘT LẦN, nghe như một âm K hơi dài chứ không phải hai âm riêng biệt.",
        wrongAnswerExplanations:
          "Đọc tách hai âm K liên tiếp nghe rất không tự nhiên và mất công. Âm K không biến mất, nó vẫn được giữ và bật hơi ra, chỉ là không lặp lại hai lần.",
        usageTip: "Dùng khi order thức uống, ví dụ 'black coffee, please' (cho tôi cà phê đen).",
      },
      {
        id: "pr-47-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "big game",
        vietnamese: "trận đấu lớn",
        audioText: "big game",
        prompt: "Nghe cụm từ này, hai chữ G liên tiếp được đọc ra sao?",
        choices: [
          { id: "a", text: "Đọc hai lần âm G rõ ràng" },
          { id: "b", text: "Chỉ đọc MỘT âm G, không tách rời" },
          { id: "c", text: "Nối thành âm K thay vì G" },
        ],
        correctAnswer: "b",
        explanation:
          "'Big' kết thúc bằng G và 'game' bắt đầu bằng G — hai âm G giống nhau liên tiếp chỉ được giữ hơi và bật ra MỘT LẦN duy nhất, không đọc tách hai lần riêng biệt như khi đọc từng từ.",
        wrongAnswerExplanations:
          "Đọc hai lần âm G liên tiếp nghe rất gượng và không tự nhiên với người bản xứ. Âm G vẫn giữ nguyên là G, không đổi thành K hay bất kỳ âm nào khác.",
        usageTip: "Dùng khi nói về một sự kiện thể thao quan trọng, ví dụ 'watch the big game' (xem trận đấu lớn).",
      },
      {
        id: "pr-47-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "When the same consonant sound ends one word and starts the next, native speakers usually pronounce it only once, held slightly longer.",
        vietnamese: "Khi cùng một âm phụ âm kết thúc một từ và bắt đầu từ kế tiếp, người bản xứ thường chỉ phát âm nó một lần, giữ hơi lâu hơn một chút.",
        prompt: "When the same consonant sound ends one word and starts the next, native speakers usually pronounce it only once, held slightly longer.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Đây là quy tắc nối âm cho các phụ âm giống nhau: thay vì đọc hai lần tách biệt (điều này đòi hỏi dừng và bật hơi hai lần, không tự nhiên), người bản xứ giữ vị trí lưỡi/môi ở đó lâu hơn một chút rồi chỉ bật hơi ra một lần.",
        wrongAnswerExplanations:
          "Đây là mô tả chính xác về hiện tượng nối âm phụ âm giống nhau (gọi là 'geminate consonant merging') trong tiếng Anh nói tự nhiên, không có gì để nghi ngờ.",
        usageTip: "Dùng quy tắc này để luyện nói mượt hơn: khi gặp hai từ có phụ âm cuối/đầu giống nhau, đừng cố tách rời chúng.",
      },
      {
        id: "pr-47-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "some money",
        vietnamese: "một ít tiền",
        audioText: "some money",
        prompt: "Nghe cụm từ này, hai chữ M liên tiếp được đọc ra sao?",
        choices: [
          { id: "a", text: "Đọc hai lần âm M rõ ràng, có khoảng dừng ở giữa" },
          { id: "b", text: "Chỉ đọc MỘT âm M kéo dài, không có khoảng dừng" },
          { id: "c", text: "Bỏ hẳn âm M ở cuối từ 'some'" },
        ],
        correctAnswer: "b",
        explanation:
          "'Some' kết thúc bằng M và 'money' bắt đầu bằng M — âm M được giữ liên tục và kéo dài hơn một chút, không có khoảng dừng giữa hai từ như khi đọc tách biệt.",
        wrongAnswerExplanations:
          "Có khoảng dừng rõ ràng giữa hai âm M sẽ nghe rất gượng gạo. Âm M không hề biến mất, nó vẫn xuất hiện nhưng chỉ được đọc như một âm kéo dài duy nhất.",
        usageTip: "Dùng khi nói về tiền bạc, ví dụ 'I need some money' (tôi cần một ít tiền).",
      },
      {
        id: "pr-47-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "stop pushing",
        vietnamese: "đừng đẩy nữa",
        audioText: "stop pushing",
        prompt: "Nghe cụm từ này, hai chữ P liên tiếp được đọc ra sao?",
        choices: [
          { id: "a", text: "Chỉ đọc MỘT âm P, giữ môi khép rồi bật ra một lần" },
          { id: "b", text: "Đọc hai lần âm P tách biệt rõ ràng" },
          { id: "c", text: "Bỏ hẳn âm P của từ 'stop'" },
        ],
        correctAnswer: "a",
        explanation:
          "'Stop' kết thúc bằng P và 'pushing' bắt đầu bằng P — môi khép lại một lần cho cả hai âm P, giữ một chút rồi mới bật hơi ra, nghe như một âm P duy nhất thay vì hai lần bật môi riêng biệt.",
        wrongAnswerExplanations:
          "Bật môi hai lần liên tiếp cho hai âm P sẽ nghe rất máy móc và không tự nhiên. Âm P đầu của 'stop' vẫn có, nó chỉ được giữ và nối liền với âm P của từ sau.",
        usageTip: "Dùng khi yêu cầu ai đó ngừng một hành động, ví dụ 'stop pushing me' (đừng đẩy tôi nữa).",
      },
      {
        id: "pr-47-6",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "This soap smells nice.",
        vietnamese: "Xà phòng này có mùi thơm.",
        promptContext: "Bạn muốn hiểu cách nói tự nhiên của câu có hai âm S liên tiếp (soap smells).",
        choices: [
          { id: "a", text: "'soap smells' nghe như một âm S kéo dài, không tách hai lần" },
          { id: "b", text: "'soap smells' đọc tách rời hoàn toàn hai âm S riêng biệt" },
          { id: "c", text: "'soap smells' bỏ hẳn âm S của từ 'soap'" },
        ],
        correctAnswer: "a",
        explanation:
          "'Soap' kết thúc bằng âm S và 'smells' bắt đầu bằng âm S — khi nói tự nhiên, hai âm S này nối thành một âm S kéo dài duy nhất, không đọc tách hai lần riêng biệt.",
        wrongAnswerExplanations:
          "Đọc tách hai âm S riêng biệt sẽ nghe rất gượng gạo và mất tự nhiên. Âm S của 'soap' vẫn tồn tại, chỉ là nó hòa vào âm S của từ tiếp theo thành một âm kéo dài.",
        usageTip: "Dùng khi khen mùi hương của sản phẩm chăm sóc, ví dụ xà phòng hoặc kem dưỡng da.",
      },
      {
        id: "pr-47-7",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "This kind of linking only happens with the letter P, never with other consonants.",
        vietnamese: "Kiểu nối âm này chỉ xảy ra với chữ P, không bao giờ xảy ra với các phụ âm khác.",
        prompt: "This kind of linking only happens with the letter P, never with other consonants.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai. Quy tắc nối âm giữa hai phụ âm giống nhau áp dụng cho NHIỀU phụ âm khác nhau, không chỉ riêng P — như đã thấy qua các ví dụ K ('black coffee'), G ('big game'), M ('some money'), S ('soap smells').",
        wrongAnswerExplanations:
          "Đây là một quy tắc chung áp dụng cho hầu hết các cặp phụ âm giống nhau khi gặp nhau ở ranh giới hai từ, không giới hạn riêng cho một chữ cái nào.",
        usageTip: "Dùng để nhớ: bất kỳ khi nào hai từ liên tiếp có phụ âm cuối/đầu giống nhau, hãy thử nối chúng lại thành một âm khi luyện nói.",
      },
      {
        id: "pr-47-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I need dark red nail polish.",
        vietnamese: "Tôi cần sơn móng màu đỏ đậm.",
        audioText: "I need dark red nail polish.",
        choices: [
          { id: "a", text: "Tôi cần sơn móng màu đỏ đậm." },
          { id: "b", text: "Tôi cần sơn móng màu đỏ nhạt." },
          { id: "c", text: "Tôi không thích màu đỏ." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có 'dark red' với hai âm D/R gần giống nhau nối liền khi nói nhanh (nghe như 'dar-red') — một câu hữu ích khi khách yêu cầu màu sơn cụ thể tại tiệm nail.",
        wrongAnswerExplanations:
          "Câu gốc nói về màu đỏ ĐẬM (dark red), không phải nhạt, và khẳng định muốn màu đó chứ không phải không thích màu đỏ.",
        usageTip: "Dùng câu này khi khách yêu cầu một tông màu sơn cụ thể trong tiệm nail.",
      },
      {
        id: "pr-47-9",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Can you pass some sugar, please?",
        vietnamese: "Bạn có thể đưa giúp tôi ít đường không?",
        audioText: "Can you pass some sugar, please?",
        choices: [
          { id: "a", text: "Bạn có thể đưa giúp tôi ít đường không?" },
          { id: "b", text: "Bạn có thể đưa giúp tôi ít muối không?" },
          { id: "c", text: "Bạn không cần đường." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có 'pass some' với hai âm S gần nhau nối liền, nghe như 'pa-som' — một câu lịch sự thường dùng khi ăn uống, nhờ ai đó đưa đồ trên bàn.",
        wrongAnswerExplanations:
          "Câu gốc hỏi xin 'sugar' (đường), không phải 'salt' (muối), và không có ý phủ định là không cần đường.",
        usageTip: "Dùng câu này khi ăn cùng người khác và cần nhờ đưa giúp gia vị trên bàn.",
      },
      {
        id: "pr-47-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "This shop sells black coffee and big cakes.",
        vietnamese: "Cửa hàng này bán cà phê đen và bánh lớn.",
        audioText: "This shop sells black coffee and big cakes.",
        choices: [
          { id: "a", text: "Cửa hàng này bán cà phê đen và bánh lớn." },
          { id: "b", text: "Cửa hàng này không bán cà phê." },
          { id: "c", text: "Cửa hàng này chỉ bán bánh nhỏ." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này ôn tập hai cặp nối âm cùng phụ âm đã học: 'black coffee' (âm K) và có thể nghe thêm nối âm ở 'big cakes' — luyện nghe tổng hợp trong một câu tự nhiên về một cửa hàng.",
        wrongAnswerExplanations:
          "Câu gốc khẳng định cửa hàng CÓ bán cà phê đen và bánh lớn, không nói ngược lại là không bán cà phê hay chỉ có bánh nhỏ.",
        usageTip: "Dùng câu này để luyện nghe tổng hợp hiện tượng nối âm cùng phụ âm trong một câu miêu tả.",
      },
    ],
  },
  {
    id: "pr-48",
    slug: "pr-48-noi-lien-am-cau-ngan-1",
    topicId: "pronunciation",
    title: "Nhận diện nối âm trong câu ngắn",
    description: "Luyện nghe các câu giao tiếp ngắn, thường ngày có hiện tượng nối âm.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-48-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Not at all.",
        vietnamese: "Không có chi.",
        audioText: "Not at all.",
        prompt: "Nghe câu này, nó nối âm ra sao khi nói tự nhiên?",
        choices: [
          { id: "a", text: "Nghe tách rời hoàn toàn ba từ" },
          { id: "b", text: "Nghe nối liền: 'no-ta-tall'" },
          { id: "c", text: "Nghe chỉ còn một từ 'not'" },
        ],
        correctAnswer: "b",
        explanation:
          "'Not' nối với 'at' (T nối sang A), và 'at' nối với 'all' (T nối sang A) — cả câu nghe liền mạch thành 'no-ta-tall' thay vì ba từ tách biệt rõ ràng. Đây là câu đáp lịch sự rất phổ biến khi ai đó cảm ơn bạn.",
        wrongAnswerExplanations:
          "Nếu tách rời ba từ, câu sẽ nghe cứng và không tự nhiên với người bản xứ. Cả ba từ đều được giữ nguyên, không có từ nào biến mất khi nói nối âm.",
        usageTip: "Dùng để đáp lại lời cảm ơn một cách lịch sự, ví dụ khi khách nói 'thank you' bạn có thể đáp 'not at all'.",
      },
      {
        id: "pr-48-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Hold on a second.",
        vietnamese: "Chờ một chút.",
        audioText: "Hold on a second.",
        prompt: "Nghe câu này, những chỗ nào có nối âm?",
        choices: [
          { id: "a", text: "'hold on' và 'on a' đều nối liền" },
          { id: "b", text: "Không có chỗ nào nối âm trong câu này" },
          { id: "c", text: "Chỉ 'a second' nối âm, còn lại tách rời" },
        ],
        correctAnswer: "a",
        explanation:
          "'Hold' nối với 'on' (D nối sang O) nghe như 'hol-don', và 'on' nối với 'a' (N nối sang A) nghe như 'o-na' — cả cụm nghe liền mạch. Câu này rất hữu ích khi cần khách đợi một chút.",
        wrongAnswerExplanations:
          "Câu này có nhiều điểm nối âm rõ ràng, không phải không có chỗ nào. 'hold on' cũng nối âm chứ không chỉ riêng 'a second'.",
        usageTip: "Dùng khi cần ai đó chờ một chút, ví dụ khi đang bận trả lời điện thoại hoặc xử lý việc khác.",
      },
      {
        id: "pr-48-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Common short phrases like 'not at all' are linked so often that native speakers barely notice they're doing it.",
        vietnamese: "Các cụm từ ngắn thông dụng như 'not at all' được nối âm thường xuyên đến mức người bản xứ hầu như không nhận ra mình đang làm điều đó.",
        prompt: "Common short phrases like 'not at all' are linked so often that native speakers barely notice they're doing it.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Nối âm là một phần tự nhiên và vô thức trong cách người bản xứ nói — họ không nghĩ về quy tắc này, nó chỉ đơn giản là cách miệng họ di chuyển khi nói nhanh và trôi chảy. Đây là lý do người học cần luyện nghe nhiều để quen với hiện tượng này.",
        wrongAnswerExplanations:
          "Đây là một quan sát chính xác về cách người bản xứ sử dụng ngôn ngữ mẹ đẻ một cách tự động, không có gì để nghi ngờ.",
        usageTip: "Dùng nhận thức này để hiểu: bạn không cần cố tình nối âm mà chỉ cần luyện nói nhanh, tự nhiên, nối âm sẽ tự xảy ra.",
      },
      {
        id: "pr-48-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "What is it?",
        vietnamese: "Đó là gì vậy?",
        audioText: "What is it?",
        prompt: "Nghe câu này, nó nối âm ra sao?",
        choices: [
          { id: "a", text: "Nghe nối liền: 'wha-tizit'" },
          { id: "b", text: "Nghe tách rời từng từ rõ ràng" },
          { id: "c", text: "Nghe mất hẳn từ 'is'" },
        ],
        correctAnswer: "a",
        explanation:
          "'What' nối với 'is' (T nối sang I), và 'is' nối với 'it' (S nối sang I) — cả câu nghe liền mạch thành 'wha-tizit' khi hỏi nhanh, thay vì ba từ tách biệt.",
        wrongAnswerExplanations:
          "Tách rời từng từ sẽ nghe rất chậm và không tự nhiên. Từ 'is' vẫn xuất hiện đầy đủ, chỉ là nó hòa vào âm của các từ xung quanh.",
        usageTip: "Dùng khi tò mò hỏi về một vật gì đó, ví dụ khi thấy sản phẩm mới lạ.",
      },
      {
        id: "pr-48-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Give it a try.",
        vietnamese: "Hãy thử xem sao.",
        audioText: "Give it a try.",
        prompt: "Nghe câu này, nó nối âm ra sao?",
        choices: [
          { id: "a", text: "Nghe nối liền: 'gi-vi-ta-try'" },
          { id: "b", text: "Nghe tách rời hoàn toàn" },
          { id: "c", text: "Nghe mất từ 'it'" },
        ],
        correctAnswer: "a",
        explanation:
          "'Give' nối với 'it' (V nối sang I), và 'it' nối với 'a' (T nối sang A) — cả cụm nghe liền mạch thành 'gi-vi-ta-try'. Câu này thường dùng để khuyến khích ai đó thử làm điều gì mới.",
        wrongAnswerExplanations:
          "Nếu tách rời hoàn toàn, câu sẽ nghe không tự nhiên. Từ 'it' vẫn còn nguyên trong câu, chỉ là hòa vào âm liền mạch với các từ xung quanh.",
        usageTip: "Dùng để khuyến khích ai đó thử một sản phẩm mới hoặc một trải nghiệm mới, ví dụ một màu sơn móng mới.",
      },
      {
        id: "pr-48-6",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "Come on in, make yourself at home.",
        vietnamese: "Vào đi, cứ tự nhiên như ở nhà nhé.",
        promptContext: "Bạn muốn mời khách vào nhà một cách thân thiện, hiểu cách câu này nối âm tự nhiên.",
        choices: [
          { id: "a", text: "Nghe nối liền: 'cu-mo-nin, mei-kyour-sel-fat-home'" },
          { id: "b", text: "Nghe tách rời hoàn toàn từng từ một" },
          { id: "c", text: "Nghe mất hẳn cụm từ 'at home'" },
        ],
        correctAnswer: "a",
        explanation:
          "'Come on in' nối liền thành 'cu-mo-nin' (M nối O, N nối I), và 'yourself at home' cũng nối liền — cả câu chào đón nghe rất tự nhiên và mượt mà khi có nối âm, đúng như cách người bản xứ nói.",
        wrongAnswerExplanations:
          "Nếu tách rời từng từ, câu chào đón sẽ nghe cứng nhắc, thiếu tự nhiên. Cụm 'at home' vẫn còn nguyên trong câu, không hề bị lược bỏ.",
        usageTip: "Dùng câu này khi mời khách vào nhà hoặc nơi làm việc một cách thân thiện, thoải mái.",
      },
      {
        id: "pr-48-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Is everything okay?",
        vietnamese: "Mọi thứ ổn chứ?",
        audioText: "Is everything okay?",
        choices: [
          { id: "a", text: "Mọi thứ ổn chứ?" },
          { id: "b", text: "Có chuyện gì xảy ra vậy?" },
          { id: "c", text: "Bạn có cần giúp đỡ không?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Is everything' nối liền (S nối sang E) nghe như 'i-zevrything' — một câu hỏi thăm quan tâm rất phổ biến, hữu ích khi hỏi thăm khách hàng hoặc đồng nghiệp.",
        wrongAnswerExplanations:
          "Câu gốc hỏi chung chung 'mọi thứ ổn chứ' (is everything okay), không hỏi cụ thể có chuyện gì xảy ra hay đề nghị giúp đỡ trực tiếp.",
        usageTip: "Dùng câu này khi thấy ai đó có vẻ không ổn và muốn hỏi thăm một cách nhẹ nhàng.",
      },
      {
        id: "pr-48-8",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Practicing short, common phrases with linking is a good way to sound more natural in English.",
        vietnamese: "Luyện tập các cụm từ ngắn, thông dụng có nối âm là một cách tốt để nói tiếng Anh nghe tự nhiên hơn.",
        prompt: "Practicing short, common phrases with linking is a good way to sound more natural in English.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Các cụm từ ngắn, thông dụng (như 'not at all', 'what is it', 'give it a try') xuất hiện rất nhiều trong giao tiếp hằng ngày, nên luyện nối âm qua chúng giúp bạn quen dần với nhịp điệu tự nhiên của tiếng Anh nói, cả khi nghe lẫn khi nói.",
        wrongAnswerExplanations:
          "Đây là một phương pháp học được nhiều giáo viên phát âm khuyên dùng, không có gì để nghi ngờ về hiệu quả của nó.",
        usageTip: "Dùng chiến lược này: chọn 5-10 cụm từ ngắn thông dụng, nghe và lặp lại nhiều lần để quen với cách nối âm tự nhiên.",
      },
      {
        id: "pr-48-9",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Take it easy.",
        vietnamese: "Thư giãn thôi, đừng lo.",
        audioText: "Take it easy.",
        choices: [
          { id: "a", text: "Thư giãn thôi, đừng lo." },
          { id: "b", text: "Làm việc chăm chỉ vào." },
          { id: "c", text: "Đi nhanh lên." },
        ],
        correctAnswer: "a",
        explanation:
          "'Take it' nối liền (K nối sang I) nghe như 'tei-kit' — một câu trấn an rất phổ biến, khuyên ai đó đừng quá căng thẳng hoặc vội vàng.",
        wrongAnswerExplanations:
          "Câu gốc khuyên nên THƯ GIÃN (take it easy), không phải làm việc chăm chỉ hay đi nhanh — hai lựa chọn này trái ngược với ý nghĩa thư giãn của câu.",
        usageTip: "Dùng câu này để trấn an ai đó đang căng thẳng hoặc vội vã, khuyên họ chậm lại và thư giãn.",
      },
      {
        id: "pr-48-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Hold on a second, is everything okay? Take it easy.",
        vietnamese: "Chờ một chút, mọi thứ ổn chứ? Thư giãn thôi.",
        audioText: "Hold on a second, is everything okay? Take it easy.",
        choices: [
          { id: "a", text: "Chờ một chút, mọi thứ ổn chứ? Thư giãn thôi." },
          { id: "b", text: "Đừng chờ nữa, đi luôn đi." },
          { id: "c", text: "Mọi thứ đã xong rồi, không cần lo." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu ôn tập này kết hợp ba cụm nối âm đã học: 'hold on', 'is everything', 'take it easy' — luyện nghe tổng hợp nhiều điểm nối âm trong một đoạn hội thoại ngắn tự nhiên.",
        wrongAnswerExplanations:
          "Câu gốc yêu cầu CHỜ (hold on), không phải đi luôn, và hỏi thăm tình hình (is everything okay) chứ không khẳng định mọi thứ đã xong.",
        usageTip: "Dùng đoạn hội thoại này để luyện nghe tổng hợp nhiều cụm từ có nối âm trong tình huống giao tiếp thực tế.",
      },
    ],
  },
  {
    id: "pr-49",
    slug: "pr-49-noi-lien-am-cau-dai-1",
    topicId: "pronunciation",
    title: "Nối âm trong câu giao tiếp dài hơn",
    description: "Luyện nghe nối âm qua các câu dài hơn, gần với tốc độ nói tự nhiên.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-49-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I'll call you as soon as I can.",
        vietnamese: "Tôi sẽ gọi cho bạn ngay khi có thể.",
        audioText: "I'll call you as soon as I can.",
        choices: [
          { id: "a", text: "Tôi sẽ gọi cho bạn ngay khi có thể." },
          { id: "b", text: "Tôi sẽ không gọi cho bạn nữa." },
          { id: "c", text: "Tôi đã gọi cho bạn rồi." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có nhiều điểm nối âm: 'as soon' và 'as I' đều nối liền khi nói nhanh — một câu hứa hẹn rất thông dụng khi cần trì hoãn việc liên lạc lại sau.",
        wrongAnswerExplanations:
          "Câu gốc dùng thì tương lai 'I'll call' (tôi sẽ gọi), không phải phủ định (sẽ không gọi) hay quá khứ (đã gọi rồi).",
        usageTip: "Dùng câu này khi hứa sẽ liên lạc lại với ai đó ngay khi rảnh.",
      },
      {
        id: "pr-49-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Let me know if you need anything else.",
        vietnamese: "Cho tôi biết nếu bạn cần gì thêm.",
        audioText: "Let me know if you need anything else.",
        choices: [
          { id: "a", text: "Cho tôi biết nếu bạn cần gì thêm." },
          { id: "b", text: "Tôi không có gì để cho bạn." },
          { id: "c", text: "Bạn không cần gì cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có 'need anything' nối liền (D nối sang A) — một câu dịch vụ khách hàng rất phổ biến, thể hiện sự sẵn lòng giúp đỡ thêm.",
        wrongAnswerExplanations:
          "Câu gốc mời khách nói ra nếu CẦN THÊM gì đó, không nói về việc không có gì để cho hay khách không cần gì cả.",
        usageTip: "Dùng câu này ở cuối cuộc trò chuyện với khách hàng để thể hiện sự chu đáo, sẵn sàng hỗ trợ thêm.",
      },
      {
        id: "pr-49-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Longer sentences usually have more linking points than short ones, because there are more word boundaries.",
        vietnamese: "Câu dài hơn thường có nhiều điểm nối âm hơn câu ngắn, vì có nhiều ranh giới từ hơn.",
        prompt: "Longer sentences usually have more linking points than short ones, because there are more word boundaries.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Vì nối âm xảy ra ở ranh giới giữa hai từ liền kề khi thỏa điều kiện phù hợp (phụ âm gặp nguyên âm, hoặc hai phụ âm giống nhau), nên câu càng dài, càng có nhiều cặp từ liền kề, dẫn đến càng nhiều cơ hội xảy ra nối âm.",
        wrongAnswerExplanations:
          "Đây là một suy luận logic đơn giản và chính xác dựa trên cách nối âm hoạt động — không có gì để nghi ngờ về mối quan hệ giữa độ dài câu và số điểm nối âm.",
        usageTip: "Dùng nhận thức này để không nản khi nghe câu dài: hãy chia nhỏ câu thành các cụm và tìm điểm nối âm trong từng cụm.",
      },
      {
        id: "pr-49-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Thank you for waiting, I'll be right with you.",
        vietnamese: "Cảm ơn đã chờ, tôi sẽ đến với bạn ngay.",
        audioText: "Thank you for waiting, I'll be right with you.",
        choices: [
          { id: "a", text: "Cảm ơn đã chờ, tôi sẽ đến với bạn ngay." },
          { id: "b", text: "Xin lỗi, bạn phải chờ thêm rất lâu." },
          { id: "c", text: "Tôi không thể giúp bạn lúc này." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có 'right with' nối liền tự nhiên — một câu rất hữu ích trong tiệm nail khi khách phải chờ và bạn muốn thông báo sẽ phục vụ ngay.",
        wrongAnswerExplanations:
          "Câu gốc nói sẽ đến NGAY (right with you), không phải phải chờ thêm rất lâu, và không nói là không thể giúp.",
        usageTip: "Dùng câu này khi khách đang chờ và bạn muốn báo sẽ đến phục vụ ngay lập tức.",
      },
      {
        id: "pr-49-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "It looks like it's going to rain.",
        vietnamese: "Có vẻ như trời sắp mưa.",
        audioText: "It looks like it's going to rain.",
        choices: [
          { id: "a", text: "Có vẻ như trời sắp mưa." },
          { id: "b", text: "Trời đang nắng đẹp." },
          { id: "c", text: "Trời đã tạnh mưa rồi." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có 'it looks' và 'it's going' đều có nối âm — một câu dự đoán thời tiết rất tự nhiên và thường gặp trong trò chuyện thường ngày.",
        wrongAnswerExplanations:
          "Câu gốc dự đoán trời SẮP MƯA (going to rain), không phải đang nắng đẹp hay đã tạnh mưa.",
        usageTip: "Dùng câu này khi trò chuyện về thời tiết, một chủ đề rất phổ biến để bắt chuyện.",
      },
      {
        id: "pr-49-6",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "I'm looking forward to seeing you again.",
        vietnamese: "Tôi rất mong được gặp lại bạn.",
        promptContext: "Bạn muốn hiểu câu này khi nói tự nhiên (có nối âm) khác gì với đọc từng chữ.",
        choices: [
          { id: "a", text: "Nghe nối liền: 'I'm lookin-forward-ta seein-you again'" },
          { id: "b", text: "Nghe tách rời từng từ một cách rõ ràng, chậm rãi" },
          { id: "c", text: "Nghe mất hẳn từ 'forward'" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nói tự nhiên, các từ trong câu này nối liền với nhau — 'looking forward' và 'to seeing' hòa vào nhau, tạo cảm giác trôi chảy hơn nhiều so với đọc từng từ tách biệt như trong sách giáo khoa.",
        wrongAnswerExplanations:
          "Đọc tách rời từng từ nghe rất chậm và không giống cách người bản xứ nói thật. Từ 'forward' vẫn còn nguyên, không hề bị lược bỏ khi nói nối âm.",
        usageTip: "Dùng câu này khi tạm biệt ai đó và mong muốn gặp lại họ trong tương lai.",
      },
      {
        id: "pr-49-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Would you mind if I asked you a question?",
        vietnamese: "Bạn có phiền nếu tôi hỏi một câu không?",
        audioText: "Would you mind if I asked you a question?",
        choices: [
          { id: "a", text: "Bạn có phiền nếu tôi hỏi một câu không?" },
          { id: "b", text: "Tôi không có câu hỏi nào cả." },
          { id: "c", text: "Bạn đã trả lời câu hỏi của tôi rồi." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có nhiều điểm nối âm: 'mind if', 'asked you', 'a question' — một câu hỏi lịch sự rất phổ biến trước khi hỏi điều gì đó nhạy cảm hoặc riêng tư.",
        wrongAnswerExplanations:
          "Câu gốc đang XIN PHÉP để hỏi một câu (would you mind if I asked), không nói là không có câu hỏi hay đã được trả lời rồi.",
        usageTip: "Dùng câu này khi muốn hỏi một câu hỏi lịch sự, đặc biệt là câu hỏi có thể hơi riêng tư hoặc nhạy cảm.",
      },
      {
        id: "pr-49-8",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "You should try to consciously plan every linking sound before you speak, or your English will sound wrong.",
        vietnamese: "Bạn nên cố ý lên kế hoạch trước cho từng âm nối trước khi nói, nếu không tiếng Anh của bạn sẽ nghe sai.",
        prompt: "You should try to consciously plan every linking sound before you speak, or your English will sound wrong.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai. Nối âm là một hiện tượng TỰ NHIÊN xảy ra khi bạn nói trôi chảy, không phải điều bạn cần tính toán trước từng bước. Mục tiêu học nối âm là để NGHE HIỂU tốt hơn khi người khác nói nhanh, và để nói trôi chảy hơn qua luyện tập nhiều — không phải để lo lắng, cố ý tính toán trước mỗi từ.",
        wrongAnswerExplanations:
          "Cách tiếp cận này sẽ khiến người học căng thẳng và nói chậm, không tự nhiên hơn — nối âm nên đến từ việc luyện tập lặp lại nhiều, để nó trở thành phản xạ tự nhiên, không phải từ việc lên kế hoạch có ý thức trước khi nói.",
        usageTip: "Dùng để giảm áp lực: đừng cố tính toán nối âm khi nói, chỉ cần luyện nghe và lặp lại nhiều để nó tự nhiên xảy ra.",
      },
      {
        id: "pr-49-9",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I appreciate all of your help today.",
        vietnamese: "Tôi rất cảm kích sự giúp đỡ của bạn hôm nay.",
        audioText: "I appreciate all of your help today.",
        choices: [
          { id: "a", text: "Tôi rất cảm kích sự giúp đỡ của bạn hôm nay." },
          { id: "b", text: "Tôi không cần sự giúp đỡ của bạn." },
          { id: "c", text: "Bạn chưa giúp gì cho tôi cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có 'all of' nối liền (L nối sang O) nghe như 'a-lof' — một câu cảm ơn chân thành rất thường dùng sau khi nhận được sự giúp đỡ.",
        wrongAnswerExplanations:
          "Câu gốc thể hiện sự CẢM KÍCH (appreciate), không phải từ chối hay phủ nhận sự giúp đỡ đã nhận được.",
        usageTip: "Dùng câu này để cảm ơn đồng nghiệp hoặc ai đó đã giúp đỡ bạn nhiều trong một ngày làm việc.",
      },
      {
        id: "pr-49-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I'll be right with you, and thank you for waiting so patiently.",
        vietnamese: "Tôi sẽ đến với bạn ngay, và cảm ơn bạn đã kiên nhẫn chờ đợi.",
        audioText: "I'll be right with you, and thank you for waiting so patiently.",
        choices: [
          { id: "a", text: "Tôi sẽ đến với bạn ngay, và cảm ơn bạn đã kiên nhẫn chờ đợi." },
          { id: "b", text: "Tôi sẽ không phục vụ bạn hôm nay." },
          { id: "c", text: "Bạn không cần chờ đợi nữa vì đã xong rồi." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu ôn tập này kết hợp nhiều cụm nối âm đã học trong bài trước ('right with', 'thank you for') — luyện nghe một câu dài, tự nhiên trong ngữ cảnh phục vụ khách hàng.",
        wrongAnswerExplanations:
          "Câu gốc hứa sẽ phục vụ NGAY (right with you), không phải từ chối phục vụ, và cảm ơn khách đã chờ chứ không nói là đã xong việc.",
        usageTip: "Dùng câu này khi khách phải chờ lâu và bạn muốn vừa xin lỗi vừa cảm ơn sự kiên nhẫn của họ.",
      },
    ],
  },
  {
    id: "pr-50",
    slug: "pr-50-noi-lien-am-on-tap-1",
    topicId: "pronunciation",
    title: "Ôn tập tổng hợp nối âm",
    description: "Ôn tập toàn diện các kiểu nối âm đã học qua đoạn hội thoại tự nhiên.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-50-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Come on in and have a seat.",
        vietnamese: "Vào đi và ngồi xuống nhé.",
        audioText: "Come on in and have a seat.",
        choices: [
          { id: "a", text: "Vào đi và ngồi xuống nhé." },
          { id: "b", text: "Đừng vào đây." },
          { id: "c", text: "Hãy đứng đợi ở ngoài." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có nhiều điểm nối âm: 'come on' (M nối O), 'have a' (V nối A) — kết hợp cả nối phụ âm-nguyên âm đã học ở bài đầu, dùng để mời khách vào và ngồi xuống.",
        wrongAnswerExplanations:
          "Câu gốc mời VÀO (come on in), không phải cấm vào, và mời ngồi xuống chứ không bảo đứng đợi ngoài.",
        usageTip: "Dùng câu này để mời khách vào tiệm và ngồi xuống ghế chờ hoặc ghế làm nail.",
      },
      {
        id: "pr-50-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "black ink",
        vietnamese: "mực đen",
        audioText: "black ink",
        prompt: "Cụm từ này có kiểu nối âm nào?",
        choices: [
          { id: "a", text: "Nối phụ âm cuối K sang nguyên âm đầu I (nối liền, không lặp K)" },
          { id: "b", text: "Nối hai âm K giống nhau thành một âm dài" },
          { id: "c", text: "Không có nối âm nào cả" },
        ],
        correctAnswer: "a",
        explanation:
          "'Black' kết thúc bằng phụ âm K, và 'ink' bắt đầu bằng nguyên âm 'i' — đây là kiểu nối PHỤ ÂM sang NGUYÊN ÂM (như 'an apple' đã học), khác với kiểu nối hai phụ âm giống nhau như 'black coffee'.",
        wrongAnswerExplanations:
          "Đây không phải trường hợp hai phụ âm giống nhau (vì 'ink' bắt đầu bằng nguyên âm, không phải phụ âm K). Chắc chắn có nối âm xảy ra ở đây, không phải không có.",
        usageTip: "Dùng để phân biệt hai kiểu nối âm khác nhau: phụ âm-nguyên âm và phụ âm-phụ âm giống nhau.",
      },
      {
        id: "pr-50-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "There are two main types of linking you've learned: consonant-to-vowel linking, and same-consonant linking.",
        vietnamese: "Có hai kiểu nối âm chính bạn đã học: nối phụ âm với nguyên âm, và nối hai phụ âm giống nhau.",
        prompt: "There are two main types of linking you've learned: consonant-to-vowel linking, and same-consonant linking.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Đây là tổng kết hai kiểu nối âm chính đã học trong nhóm bài này: (1) nối phụ âm cuối với nguyên âm đầu của từ sau (như 'an apple'), và (2) nối hai âm phụ âm giống nhau thành một âm duy nhất (như 'black coffee').",
        wrongAnswerExplanations:
          "Đây là tổng kết chính xác về nội dung đã học — không có gì để nghi ngờ về việc đây là hai kiểu nối âm chính đã được trình bày.",
        usageTip: "Dùng để tự ôn tập: khi nghe một câu tiếng Anh, thử xác định xem có kiểu nối âm nào trong hai loại này không.",
      },
      {
        id: "pr-50-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Take a look at this new design.",
        vietnamese: "Hãy xem thử mẫu thiết kế mới này.",
        audioText: "Take a look at this new design.",
        choices: [
          { id: "a", text: "Hãy xem thử mẫu thiết kế mới này." },
          { id: "b", text: "Đừng nhìn vào mẫu thiết kế này." },
          { id: "c", text: "Mẫu thiết kế này đã cũ rồi." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có 'take a' và 'look at' đều nối âm phụ âm-nguyên âm — một câu rất hữu ích khi giới thiệu mẫu thiết kế móng mới cho khách xem.",
        wrongAnswerExplanations:
          "Câu gốc mời XEM THỬ (take a look), không phải cấm nhìn, và nói về mẫu MỚI (new design) chứ không phải đã cũ.",
        usageTip: "Dùng câu này khi muốn giới thiệu một mẫu thiết kế móng mới cho khách hàng xem.",
      },
      {
        id: "pr-50-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Big group coming in for a party.",
        vietnamese: "Một nhóm lớn sắp đến để dự tiệc.",
        audioText: "Big group coming in for a party.",
        prompt: "Cụm 'big group' có kiểu nối âm nào?",
        choices: [
          { id: "a", text: "Nối hai âm G giống nhau thành một âm" },
          { id: "b", text: "Nối phụ âm sang nguyên âm" },
          { id: "c", text: "Không có nối âm" },
        ],
        correctAnswer: "a",
        explanation:
          "'Big' kết thúc bằng G và 'group' bắt đầu bằng G — hai âm G giống nhau nối thành một âm duy nhất, giống kiểu nối đã học ở 'big game'. Câu này hữu ích khi tiệm nail chuẩn bị đón một nhóm khách đông.",
        wrongAnswerExplanations:
          "Đây không phải nối phụ âm-nguyên âm vì cả hai từ đều bắt đầu/kết thúc bằng phụ âm G giống nhau. Chắc chắn có nối âm xảy ra ở đây.",
        usageTip: "Dùng câu này khi thông báo có một nhóm khách đông sắp đến tiệm.",
      },
      {
        id: "pr-50-6",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "I'll be right with you in just a moment.",
        vietnamese: "Tôi sẽ đến với bạn ngay trong một lát nữa thôi.",
        promptContext: "Bạn muốn nói câu này một cách tự nhiên, mượt mà, không tách rời từng từ.",
        choices: [
          { id: "a", text: "Nói liền mạch, nối các âm phụ âm-nguyên âm và không dừng giữa từ" },
          { id: "b", text: "Nói chậm, dừng rõ ràng giữa mỗi từ" },
          { id: "c", text: "Nói và bỏ qua hẳn từ 'just'" },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có nhiều điểm nối âm ('right with', 'in just', 'just a') — nói liền mạch, tự nhiên là cách người bản xứ thực sự nói, giúp câu nghe trôi chảy và chuyên nghiệp hơn khi phục vụ khách.",
        wrongAnswerExplanations:
          "Nói chậm và dừng rõ giữa mỗi từ sẽ nghe rất máy móc, không giống cách giao tiếp tự nhiên. Từ 'just' vẫn cần giữ nguyên trong câu để đúng nghĩa 'chỉ một lát'.",
        usageTip: "Dùng câu này khi cần khách chờ thêm một chút trước khi bạn có thể phục vụ họ.",
      },
      {
        id: "pr-50-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Thanks a lot for coming in today.",
        vietnamese: "Cảm ơn rất nhiều vì đã đến hôm nay.",
        audioText: "Thanks a lot for coming in today.",
        choices: [
          { id: "a", text: "Cảm ơn rất nhiều vì đã đến hôm nay." },
          { id: "b", text: "Xin lỗi vì đã làm phiền bạn hôm nay." },
          { id: "c", text: "Hẹn gặp lại bạn vào ngày mai." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có 'thanks a' và 'coming in' đều nối âm — một câu cảm ơn khách hàng rất tự nhiên và ấm áp, thường nói khi khách rời tiệm.",
        wrongAnswerExplanations:
          "Câu gốc thể hiện lời CẢM ƠN (thanks a lot), không phải lời xin lỗi, và nói về hôm nay chứ không hẹn gặp ngày mai.",
        usageTip: "Dùng câu này để cảm ơn khách hàng đã đến tiệm, một câu chào tạm biệt lịch sự và thân thiện.",
      },
      {
        id: "pr-50-8",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Even after learning the rules of linking, the best way to improve is still lots of listening practice.",
        vietnamese: "Ngay cả sau khi học các quy tắc nối âm, cách tốt nhất để tiến bộ vẫn là luyện nghe thật nhiều.",
        prompt: "Even after learning the rules of linking, the best way to improve is still lots of listening practice.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Hiểu quy tắc nối âm là bước khởi đầu tốt, nhưng để thực sự nghe hiểu và nói tự nhiên, bạn cần luyện nghe (và nói theo) rất nhiều — quy tắc chỉ giúp bạn hiểu TẠI SAO mình nghe khó, còn luyện tập thực tế mới giúp tai và miệng quen dần với nhịp điệu này.",
        wrongAnswerExplanations:
          "Đây là lời khuyên phổ biến và đúng đắn từ hầu hết giáo viên ngôn ngữ — kiến thức lý thuyết cần đi kèm luyện tập thực hành nhiều để có hiệu quả thực sự.",
        usageTip: "Dùng lời khuyên này: sau khi học xong nhóm bài về nối âm, hãy tìm thêm video hoặc audio tiếng Anh để luyện nghe thường xuyên.",
      },
      {
        id: "pr-50-9",
        type: "listening",
        badgeEmoji: "🎧",
        english: "It was nice talking with you, see you next time.",
        vietnamese: "Rất vui được trò chuyện với bạn, hẹn gặp lại lần sau.",
        audioText: "It was nice talking with you, see you next time.",
        choices: [
          { id: "a", text: "Rất vui được trò chuyện với bạn, hẹn gặp lại lần sau." },
          { id: "b", text: "Tôi không muốn nói chuyện với bạn nữa." },
          { id: "c", text: "Chúng ta chưa từng gặp nhau trước đây." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có 'it was' nối âm và 'next time' — một câu chào tạm biệt ấm áp, thường dùng khi kết thúc một cuộc trò chuyện vui vẻ với khách hàng hoặc bạn bè.",
        wrongAnswerExplanations:
          "Câu gốc thể hiện sự VUI VẺ (it was nice), không phải không muốn nói chuyện nữa, và hẹn gặp LẦN SAU chứ không nói là chưa từng gặp.",
        usageTip: "Dùng câu này để chào tạm biệt sau một cuộc trò chuyện thoải mái với khách hàng.",
      },
      {
        id: "pr-50-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Come on in, take a seat, and I'll be right with you in a moment.",
        vietnamese: "Vào đi, ngồi xuống nhé, và tôi sẽ đến với bạn ngay trong một lát nữa.",
        audioText: "Come on in, take a seat, and I'll be right with you in a moment.",
        choices: [
          { id: "a", text: "Vào đi, ngồi xuống nhé, và tôi sẽ đến với bạn ngay trong một lát nữa." },
          { id: "b", text: "Xin lỗi, tiệm đã đóng cửa rồi." },
          { id: "c", text: "Bạn cần đặt lịch hẹn trước khi đến." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu ôn tập cuối cùng kết hợp nhiều cụm nối âm đã học xuyên suốt cả nhóm bài: 'come on in', 'take a seat', 'right with you', 'in a moment' — tổng kết toàn bộ các kiểu nối âm trong một câu chào đón khách hoàn chỉnh, tự nhiên.",
        wrongAnswerExplanations:
          "Câu gốc là lời CHÀO ĐÓN khách vào tiệm (come on in, take a seat), không phải thông báo đóng cửa hay yêu cầu đặt lịch trước.",
        usageTip: "Dùng câu chào đón hoàn chỉnh này khi khách mới bước vào tiệm, kết hợp mời vào, mời ngồi, và báo sẽ phục vụ ngay.",
      },
    ],
  },
];
