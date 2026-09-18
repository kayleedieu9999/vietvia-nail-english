import { Lesson } from "@/types/content";

export const pronunciationGroup09: Lesson[] = [
  {
    id: "pr-41",
    slug: "pr-41-chu-cai-cau-am-k-w-1",
    topicId: "pronunciation",
    title: "Chữ cái câm K và W",
    description: "Học các từ có chữ K hoặc W câm ở đầu từ như know, write, wrong.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-41-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "know",
        vietnamese: "biết",
        audioText: "know",
        choices: [
          { id: "a", text: "know (đọc là 'nô', chữ K không phát âm)" },
          { id: "b", text: "know (đọc là 'k-nô', có phát âm chữ K)" },
          { id: "c", text: "know (đọc là 'ka-nô')" },
        ],
        correctAnswer: "a",
        explanation:
          "Chữ 'K' đứng trước 'N' ở đầu từ luôn CÂM (không phát âm) trong tiếng Anh hiện đại — 'know' chỉ đọc là /noʊ/ ('nô'), giống hệt cách đọc chữ 'no'. Đây là dấu tích còn sót lại từ tiếng Anh cổ, khi xưa chữ K này thực sự được đọc.",
        wrongAnswerExplanations:
          "Không ai phát âm chữ K trong 'know' cả — nếu đọc thành 'k-nô' hay 'ka-nô', người bản xứ sẽ thấy rất lạ tai vì âm K trước N ở đầu từ luôn bị bỏ qua hoàn toàn.",
        usageTip: "Dùng khi nói về việc biết điều gì đó, ví dụ 'I don't know' (tôi không biết) — cụm rất phổ biến.",
      },
      {
        id: "pr-41-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "write",
        vietnamese: "viết",
        audioText: "write",
        choices: [
          { id: "a", text: "write (đọc là 'rai-tơ', có âm W)" },
          { id: "b", text: "write (đọc là 'rai-tơ', chữ W không phát âm)" },
          { id: "c", text: "write (đọc là 'wờ-rai-tơ')" },
        ],
        correctAnswer: "b",
        explanation:
          "Chữ 'W' đứng trước 'R' ở đầu từ luôn CÂM trong tiếng Anh — 'write' chỉ đọc là /raɪt/ ('rai-tơ'), giống hệt từ 'right'. Quy tắc này áp dụng cho mọi từ có 'wr' ở đầu như 'wrong', 'wrap', 'wrist'.",
        wrongAnswerExplanations:
          "Nếu cố phát âm chữ W trước R (như 'wờ-rai-tơ'), từ sẽ nghe rất sai và không tự nhiên — quy tắc 'wr' luôn câm chữ W là quy tắc cố định, không có ngoại lệ.",
        usageTip: "Dùng khi nói về việc viết, ví dụ 'write your name here' (viết tên bạn vào đây).",
      },
      {
        id: "pr-41-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "The letter W is always silent whenever it appears in an English word.",
        vietnamese: "Chữ W luôn luôn câm mỗi khi nó xuất hiện trong một từ tiếng Anh.",
        prompt: "The letter W is always silent whenever it appears in an English word.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai. Chữ W chỉ câm trong một số trường hợp cụ thể, ví dụ khi đứng trước R ở đầu từ ('write', 'wrong'). Nhưng trong hầu hết các từ khác như 'want', 'water', 'week', chữ W vẫn được phát âm bình thường và rõ ràng.",
        wrongAnswerExplanations:
          "Đây là một hiểu lầm phổ biến — W chỉ câm trong ngữ cảnh cụ thể (trước R), không phải câm ở mọi nơi nó xuất hiện.",
        usageTip: "Dùng để nhớ: chỉ khi thấy cụm 'wr' ở đầu từ thì mới bỏ qua âm W, các trường hợp khác vẫn đọc W bình thường.",
      },
      {
        id: "pr-41-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "wrong",
        vietnamese: "sai",
        audioText: "wrong",
        choices: [
          { id: "a", text: "wrong (đọc là 'rong', chữ W câm)" },
          { id: "b", text: "wrong (đọc là 'w-rong', có âm W)" },
          { id: "c", text: "wrong (đọc là 'vơ-rong')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Wrong' có cụm 'wr' ở đầu nên chữ W câm hoàn toàn — chỉ đọc là /rɔːŋ/ ('rong'), với âm R (lưỡi cong) ngay từ đầu.",
        wrongAnswerExplanations:
          "Nếu cố đọc thêm âm W trước R, từ sẽ nghe sai. Cũng không có âm V nào trong từ này — 'vơ-rong' là cách đọc sai hoàn toàn không liên quan.",
        usageTip: "Dùng khi nói điều gì đó không đúng, ví dụ 'that's wrong' (điều đó sai rồi).",
      },
      {
        id: "pr-41-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "knee",
        vietnamese: "đầu gối",
        audioText: "knee",
        choices: [
          { id: "a", text: "knee (đọc là 'ni', chữ K câm)" },
          { id: "b", text: "knee (đọc là 'k-ni', có âm K)" },
          { id: "c", text: "knee (đọc là 'kơ-ni')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Knee' có chữ K đứng trước N ở đầu từ nên K câm hoàn toàn — chỉ đọc là /niː/ ('ni'), nghe giống hệt từ 'knee' không có K nếu chỉ nghe qua tai.",
        wrongAnswerExplanations:
          "Nếu cố phát âm chữ K trước N, từ sẽ nghe rất khác lạ với người bản xứ — quy tắc K câm trước N ở đầu từ không có ngoại lệ trong tiếng Anh hiện đại.",
        usageTip: "Dùng khi nói về bộ phận cơ thể, ví dụ 'my knee hurts' (đầu gối tôi đau).",
      },
      {
        id: "pr-41-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "wrap",
        vietnamese: "gói / bọc",
        audioText: "wrap",
        choices: [
          { id: "a", text: "wrap (đọc là 'rap', chữ W câm)" },
          { id: "b", text: "wrap (đọc là 'w-rap', có âm W)" },
          { id: "c", text: "wrap (đọc giống 'wrap' và 'rap' khác nhau)" },
        ],
        correctAnswer: "a",
        explanation:
          "'Wrap' (gói/bọc) có cụm 'wr' nên W câm — đọc giống hệt từ 'rap' (nhạc rap hoặc gõ nhẹ). Đây là một cặp từ đồng âm (nghe giống nhau nhưng viết khác, nghĩa khác) do quy tắc W câm.",
        wrongAnswerExplanations:
          "Không có âm W nào được phát âm trong từ này. 'wrap' và 'rap' thực chất đọc HOÀN TOÀN GIỐNG NHAU /ræp/, không khác nhau như lựa chọn C gợi ý.",
        usageTip: "Dùng khi nói về việc gói quà hoặc cuộn thức ăn, ví dụ 'wrap the gift' (gói món quà).",
      },
      {
        id: "pr-41-7",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "I don't know the right answer.",
        vietnamese: "Tôi không biết câu trả lời đúng.",
        promptContext: "Bạn muốn nói câu chứa từ có chữ K câm (know), cần chọn cách phát âm đúng.",
        choices: [
          { id: "a", text: "I don't [nô] the right answer. (không phát âm chữ K)" },
          { id: "b", text: "I don't [k-nô] the right answer. (có phát âm chữ K)" },
          { id: "c", text: "I don't [ka-nô] the right answer. (thêm nguyên âm giữa K và N)" },
        ],
        correctAnswer: "a",
        explanation:
          "Cách đọc đúng bỏ qua hoàn toàn chữ K, chỉ đọc 'know' là /noʊ/ ('nô') — đây là quy tắc chuẩn cho mọi từ có 'kn' ở đầu như 'know', 'knee', 'knife', 'knock'.",
        wrongAnswerExplanations:
          "Cả hai lựa chọn còn lại đều cố thêm âm K vào, khiến từ nghe sai hoàn toàn và không tự nhiên — người bản xứ không bao giờ phát âm chữ K trong các từ bắt đầu bằng 'kn'.",
        usageTip: "Dùng câu này khi bạn không chắc câu trả lời cho một câu hỏi nào đó.",
      },
      {
        id: "pr-41-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "knife",
        vietnamese: "con dao",
        audioText: "knife",
        choices: [
          { id: "a", text: "knife (đọc là 'k-naif', có âm K)" },
          { id: "b", text: "knife (đọc là 'naif', chữ K câm)" },
          { id: "c", text: "knife (đọc là 'ki-naif')" },
        ],
        correctAnswer: "b",
        explanation:
          "'Knife' có chữ K câm trước N — chỉ đọc là /naɪf/ ('naif'). Cả họ từ liên quan đến 'knee', 'know', 'knife', 'knock' đều theo cùng một quy tắc K câm này.",
        wrongAnswerExplanations:
          "Không có âm K nào được phát âm — nếu đọc thêm K ở đầu, từ sẽ nghe rất kỳ lạ với người bản xứ tiếng Anh.",
        usageTip: "Dùng khi nói về dao, ví dụ 'a sharp knife' (con dao sắc bén) — từ hay dùng trong bếp.",
      },
      {
        id: "pr-41-9",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "In old English, the K in 'knife' used to be pronounced.",
        vietnamese: "Trong tiếng Anh cổ, chữ K trong 'knife' từng được phát âm.",
        prompt: "In old English, the K in 'knife' used to be pronounced.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Cách đây vài trăm năm, người nói tiếng Anh cổ thực sự phát âm chữ K trong các từ như 'knife', 'know', 'knee'. Theo thời gian, cách phát âm thay đổi và âm K bị lược bỏ, nhưng chữ viết vẫn giữ nguyên — đó là lý do nhiều từ tiếng Anh có chữ câm.",
        wrongAnswerExplanations:
          "Đây là một sự thật lịch sử ngôn ngữ được ghi nhận rõ ràng, giải thích tại sao chữ viết và cách đọc tiếng Anh hiện đại không luôn khớp nhau.",
        usageTip: "Dùng kiến thức này để bớt bối rối khi gặp chữ câm: chúng là dấu tích lịch sử, không phải lỗi hay ngẫu nhiên.",
      },
      {
        id: "pr-41-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I know it's wrong to write with a knife.",
        vietnamese: "Tôi biết viết bằng dao là sai.",
        audioText: "I know it's wrong to write with a knife.",
        choices: [
          { id: "a", text: "Tôi biết viết bằng dao là sai." },
          { id: "b", text: "Tôi không biết cách dùng dao." },
          { id: "c", text: "Tôi thích viết bằng bút." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chứa 4 từ có chữ câm: 'know' (K câm), 'wrong' (W câm), 'write' (W câm), 'knife' (K câm) — một câu ôn tập tổng hợp các quy tắc chữ câm K và W đã học.",
        wrongAnswerExplanations:
          "Câu gốc khẳng định NGƯỜI NÓI BIẾT điều đó là sai (know it's wrong), không phải không biết cách dùng dao, và cũng không nói về việc thích viết bằng bút.",
        usageTip: "Dùng câu này để ôn tập tổng hợp các từ có chữ K và W câm trong cùng một câu.",
      },
    ],
  },
  {
    id: "pr-42",
    slug: "pr-42-chu-cai-cau-am-h-b-1",
    topicId: "pronunciation",
    title: "Chữ cái câm H và B",
    description: "Học các từ có chữ H hoặc B câm như hour, honest, comb, climb.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-42-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "hour",
        vietnamese: "giờ đồng hồ",
        audioText: "hour",
        choices: [
          { id: "a", text: "hour (đọc là 'au-ơ', chữ H câm)" },
          { id: "b", text: "hour (đọc là 'h-au-ơ', có âm H)" },
          { id: "c", text: "hour (đọc là 'hau-rờ')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Hour' có chữ H câm hoàn toàn ở đầu — chỉ đọc là /aʊər/ ('au-ơ'), nghe giống hệt từ 'our' (của chúng ta). Đây là một trong số ít từ tiếng Anh mà H đầu từ hoàn toàn không phát âm.",
        wrongAnswerExplanations:
          "Nếu cố phát âm chữ H, từ sẽ nghe sai hoàn toàn — 'hour' và 'our' thực chất đọc GIỐNG HỆT NHAU, đây là một cặp từ đồng âm phổ biến gây nhầm lẫn.",
        usageTip: "Dùng khi nói về thời gian, ví dụ 'in one hour' (trong một giờ nữa).",
      },
      {
        id: "pr-42-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "honest",
        vietnamese: "trung thực",
        audioText: "honest",
        choices: [
          { id: "a", text: "honest (đọc là 'h-on-nist', có âm H)" },
          { id: "b", text: "honest (đọc là 'on-nist', chữ H câm)" },
          { id: "c", text: "honest (đọc là 'hô-nét')" },
        ],
        correctAnswer: "b",
        explanation:
          "'Honest' có chữ H câm ở đầu — chỉ đọc là /ˈɒnɪst/ ('on-nist'). Đây là một quy tắc đặc biệt: chỉ một số từ gốc Pháp/Latin như 'honest', 'hour', 'honor' có H câm, còn phần lớn từ tiếng Anh khác thì H vẫn phát âm bình thường.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ H trong từ này, sẽ nghe sai — mặc dù đa số từ tiếng Anh có H đều phát âm rõ (như 'hello', 'house'), riêng nhóm từ nhỏ này thì H lại câm.",
        usageTip: "Dùng khi nói về sự trung thực, ví dụ 'be honest with me' (hãy trung thực với tôi).",
      },
      {
        id: "pr-42-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Most English words starting with H do pronounce the H sound, but a few special words like 'hour' and 'honest' do not.",
        vietnamese: "Hầu hết các từ tiếng Anh bắt đầu bằng H đều phát âm âm H, nhưng một số từ đặc biệt như 'hour' và 'honest' thì không.",
        prompt: "Most English words starting with H do pronounce the H sound, but a few special words like 'hour' and 'honest' do not.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Phần lớn từ có H như 'house', 'happy', 'hello' đều phát âm H rõ ràng. Chỉ một nhóm nhỏ từ đặc biệt (thường có gốc Pháp) như 'hour', 'honest', 'honor' mới có H câm — cần học thuộc riêng nhóm từ này.",
        wrongAnswerExplanations:
          "Đây là mô tả chính xác về quy tắc H câm trong tiếng Anh — nó là ngoại lệ hiếm gặp chứ không phải quy tắc chung cho mọi từ có H.",
        usageTip: "Dùng để nhớ: khi gặp từ mới có H, mặc định là phát âm H, trừ khi bạn đã học riêng rằng từ đó có H câm.",
      },
      {
        id: "pr-42-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "comb",
        vietnamese: "cái lược",
        audioText: "comb",
        choices: [
          { id: "a", text: "comb (đọc là 'côm-bờ', có âm B)" },
          { id: "b", text: "comb (đọc là 'côm', chữ B câm)" },
          { id: "c", text: "comb (đọc là 'cô-mờ-bờ')" },
        ],
        correctAnswer: "b",
        explanation:
          "'Comb' có chữ B câm ở cuối từ — chỉ đọc là /koʊm/ ('côm'). Quy tắc: chữ B đứng sau M ở cuối từ thường câm, ví dụ như trong 'thumb', 'climb', 'lamb'.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ B ở cuối, từ sẽ nghe sai — quy tắc 'mb' cuối từ có B câm rất phổ biến và áp dụng cho nhiều từ thông dụng khác.",
        usageTip: "Dùng khi nói về việc chải tóc, ví dụ 'use a comb' (dùng lược).",
      },
      {
        id: "pr-42-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "climb",
        vietnamese: "leo trèo",
        audioText: "climb",
        choices: [
          { id: "a", text: "climb (đọc là 'klaim-bờ', có âm B)" },
          { id: "b", text: "climb (đọc là 'klaim', chữ B câm)" },
          { id: "c", text: "climb (đọc là 'ki-laim')" },
        ],
        correctAnswer: "b",
        explanation:
          "'Climb' có chữ B câm ở cuối, đọc là /klaɪm/ ('klaim') — giống hệt quy tắc 'mb' cuối từ như 'comb'. Chữ B này là dấu tích lịch sử, ngày xưa được phát âm nhưng nay đã bị lược bỏ.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ B ở cuối, từ sẽ nghe sai và lạ tai. Cũng không có sự tách âm 'ki-laim' — chữ C và L đọc liền thành một cụm /kl/.",
        usageTip: "Dùng khi nói về việc leo núi hoặc leo cầu thang, ví dụ 'climb the stairs' (leo cầu thang).",
      },
      {
        id: "pr-42-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "answer",
        vietnamese: "trả lời",
        audioText: "answer",
        choices: [
          { id: "a", text: "answer (đọc là 'an-sờ', chữ W câm)" },
          { id: "b", text: "answer (đọc là 'an-sờ-guơ', có âm W)" },
          { id: "c", text: "answer (đọc là 'ăn-sơ')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Answer' (trả lời) có chữ W câm ở giữa, đọc là /ˈænsər/ ('an-sờ') — cùng nhóm quy tắc W câm với 'wrap', 'write' và 'wrong' đã học.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ W ở giữa, từ sẽ nghe sai — đây cùng nhóm quy tắc W câm với 'wrap', 'write' và 'wrong' đã học.",
        usageTip: "Dùng khi nói về việc trả lời khách, ví dụ 'Let me answer that question.'",
      },
      {
        id: "pr-42-7",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "It will take about an hour to climb this mountain.",
        vietnamese: "Sẽ mất khoảng một giờ để leo lên ngọn núi này.",
        promptContext: "Bạn muốn nói câu chứa từ có chữ H câm (hour) và B câm (climb), cần đọc đúng cả hai.",
        choices: [
          { id: "a", text: "It will take about an [au-ơ] to [klaim] this mountain." },
          { id: "b", text: "It will take about an [h-au-ơ] to [klaim-bờ] this mountain." },
          { id: "c", text: "It will take about an [au-ơ] to [klaim-bờ] this mountain." },
        ],
        correctAnswer: "a",
        explanation:
          "Cách đọc đúng bỏ qua cả chữ H trong 'hour' và chữ B trong 'climb' — đúng theo quy tắc chữ câm đã học cho cả hai từ này.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại đều cố phát âm ít nhất một chữ câm (H hoặc B), khiến từ nghe sai và không tự nhiên với người bản xứ.",
        usageTip: "Dùng câu này khi ước lượng thời gian cho một hoạt động thể chất như leo núi, leo cầu thang.",
      },
      {
        id: "pr-42-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "lamb",
        vietnamese: "cừu con",
        audioText: "lamb",
        choices: [
          { id: "a", text: "lamb (đọc là 'lam', chữ B câm)" },
          { id: "b", text: "lamb (đọc là 'lam-bờ', có âm B)" },
          { id: "c", text: "lamb (đọc là 'la-mờ-bờ')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Lamb' (cừu con) có chữ B câm ở cuối, đọc là /læm/ ('lam') — cùng quy tắc 'mb' như các từ đã học trước đó.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ B, từ sẽ nghe sai hoàn toàn — quy tắc 'mb' cuối từ luôn câm B, không có ngoại lệ trong các từ thông dụng.",
        usageTip: "Dùng khi nói về món ăn hoặc động vật, ví dụ 'roast lamb' (thịt cừu nướng).",
      },
      {
        id: "pr-42-9",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "In the words 'comb', 'climb', 'thumb', and 'lamb', the silent B always comes right after the letter M.",
        vietnamese: "Trong các từ 'comb', 'climb', 'thumb', và 'lamb', chữ B câm luôn đứng ngay sau chữ M.",
        prompt: "In the words 'comb', 'climb', 'thumb', and 'lamb', the silent B always comes right after the letter M.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Đây chính là quy tắc: cụm 'mb' ở cuối từ luôn có B câm — quan sát bốn từ trên đều theo đúng mẫu này, giúp bạn nhận diện các từ khác có cùng kiểu (ví dụ: 'bomb', 'crumb', 'numb').",
        wrongAnswerExplanations:
          "Đây là một quy tắc chính tả-phát âm rõ ràng và nhất quán trong tiếng Anh, không có gì để nghi ngờ khi áp dụng cho các từ có đuôi 'mb'.",
        usageTip: "Dùng quy tắc này để đoán cách đọc các từ mới có đuôi 'mb' mà bạn gặp sau này.",
      },
      {
        id: "pr-42-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I hurt my thumb while trying to climb the wall.",
        vietnamese: "Tôi bị đau ngón tay cái khi cố leo qua bức tường.",
        audioText: "I hurt my thumb while trying to climb the wall.",
        choices: [
          { id: "a", text: "Tôi bị đau ngón tay cái khi cố leo qua bức tường." },
          { id: "b", text: "Tôi bị đau chân khi chạy bộ." },
          { id: "c", text: "Tôi không thể leo qua bức tường." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chứa hai từ có B câm: 'thumb' (ngón tay cái) và 'climb' (leo trèo) — cả hai đều theo quy tắc 'mb' cuối từ đã học.",
        wrongAnswerExplanations:
          "Câu gốc nói về việc đau ngón tay cái (thumb), không phải chân, và khẳng định đã cố leo tường chứ không nói là không thể.",
        usageTip: "Dùng câu này để ôn lại hai từ có B câm cùng lúc trong một tình huống thực tế.",
      },
    ],
  },
  {
    id: "pr-43",
    slug: "pr-43-chu-cai-cau-am-t-l-1",
    topicId: "pronunciation",
    title: "Chữ cái câm T và L",
    description: "Học các từ có chữ T hoặc L câm như listen, castle, half, calm.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-43-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "listen",
        vietnamese: "lắng nghe",
        audioText: "listen",
        choices: [
          { id: "a", text: "listen (đọc là 'li-sờn', chữ T câm)" },
          { id: "b", text: "listen (đọc là 'li-sờ-tờn', có âm T)" },
          { id: "c", text: "listen (đọc là 'lít-sờn')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Listen' có chữ T câm ở giữa — chỉ đọc là /ˈlɪsən/ ('li-sờn'). Quy tắc: chữ T đứng giữa 'S' và 'EN/LE' ở nhiều từ thường câm, ví dụ 'castle', 'whistle', 'fasten'.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ T, từ sẽ nghe sai và cứng — người bản xứ luôn lướt qua chữ T này khi nói 'listen'.",
        usageTip: "Dùng khi nhờ ai đó lắng nghe, ví dụ 'please listen to me' (làm ơn lắng nghe tôi).",
      },
      {
        id: "pr-43-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "castle",
        vietnamese: "lâu đài",
        audioText: "castle",
        choices: [
          { id: "a", text: "castle (đọc là 'cát-tồ', có âm T)" },
          { id: "b", text: "castle (đọc là 'ca-sồ', chữ T câm)" },
          { id: "c", text: "castle (đọc là 'ca-tồ-lơ')" },
        ],
        correctAnswer: "b",
        explanation:
          "'Castle' có chữ T câm — chỉ đọc là /ˈkæsəl/ ('ca-sồ'). Cùng quy tắc với 'listen': chữ T đứng giữa 'S' và 'LE' thường bị lược âm hoàn toàn.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ T, từ sẽ nghe sai hoàn toàn — quy tắc T câm trong nhóm từ có 'stle' hoặc 'sten' rất phổ biến và nhất quán.",
        usageTip: "Dùng khi nói về lâu đài, ví dụ trong chuyện cổ tích hoặc khi đi du lịch châu Âu.",
      },
      {
        id: "pr-43-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "The T sound often disappears when it comes right after S in words like 'listen' and 'castle'.",
        vietnamese: "Âm T thường biến mất khi nó đứng ngay sau S trong các từ như 'listen' và 'castle'.",
        prompt: "The T sound often disappears when it comes right after S in words like 'listen' and 'castle'.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Đây là một quy tắc phổ biến trong tiếng Anh: chữ T đứng ngay sau S (trong cụm 'st') ở một số từ nhất định thường bị câm, đặc biệt khi theo sau bởi 'en' hoặc 'le' — ví dụ 'listen', 'castle', 'whistle', 'wrestle', 'fasten'.",
        wrongAnswerExplanations:
          "Đây là một quy tắc chính xác và được nhiều giáo trình phát âm tiếng Anh dạy, không có gì để nghi ngờ.",
        usageTip: "Dùng quy tắc này khi gặp từ mới có 'stle' hoặc 'sten' — thử bỏ qua chữ T để xem có đọc tự nhiên hơn không.",
      },
      {
        id: "pr-43-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "half",
        vietnamese: "một nửa",
        audioText: "half",
        choices: [
          { id: "a", text: "half (đọc là 'ha-lờ-fờ', có âm L)" },
          { id: "b", text: "half (đọc là 'haf', chữ L câm)" },
          { id: "c", text: "half (đọc là 'hôn-fờ')" },
        ],
        correctAnswer: "b",
        explanation:
          "'Half' có chữ L câm — chỉ đọc là /hæf/ ('haf'). Chữ L trước 'f' trong một số từ như 'half', 'calf', 'behalf' thường không được phát âm.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ L, từ sẽ nghe sai và không tự nhiên — quy tắc L câm trước F trong nhóm từ này khá cố định.",
        usageTip: "Dùng khi nói về một nửa của thứ gì đó, ví dụ 'half price' (nửa giá).",
      },
      {
        id: "pr-43-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "calm",
        vietnamese: "bình tĩnh",
        audioText: "calm",
        choices: [
          { id: "a", text: "calm (đọc là 'cal-mờ', có âm L)" },
          { id: "b", text: "calm (đọc là 'cam', chữ L câm)" },
          { id: "c", text: "calm (đọc là 'ke-lam')" },
        ],
        correctAnswer: "b",
        explanation:
          "'Calm' có chữ L câm — chỉ đọc là /kɑːm/ ('cam'). Chữ L trước 'm' trong một số từ như 'calm', 'palm', 'salmon' thường bị lược bỏ khi phát âm.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ L, từ sẽ nghe sai hoàn toàn — người bản xứ luôn lướt qua chữ L này khi nói 'calm'.",
        usageTip: "Dùng khi khuyên ai đó bình tĩnh lại, ví dụ 'stay calm' (hãy bình tĩnh) — rất hữu ích khi xử lý tình huống căng thẳng với khách.",
      },
      {
        id: "pr-43-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "walk",
        vietnamese: "đi bộ",
        audioText: "walk",
        choices: [
          { id: "a", text: "walk (đọc là 'wa-lờ-cờ', có âm L)" },
          { id: "b", text: "walk (đọc là 'wok', chữ L câm)" },
          { id: "c", text: "walk (đọc là 'oa-lờ-cơ')" },
        ],
        correctAnswer: "b",
        explanation:
          "'Walk' có chữ L câm — chỉ đọc là /wɔːk/ ('wok'). Chữ L trước 'k' trong một số từ như 'walk', 'talk', 'chalk' thường không được phát âm.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ L, từ sẽ nghe sai — 'walk' và 'wok' (chảo) thực chất nghe gần giống nhau vì cùng quy tắc L câm trước K.",
        usageTip: "Dùng khi nói về việc đi bộ, ví dụ 'let's walk together' (mình cùng đi bộ nhé).",
      },
      {
        id: "pr-43-7",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "Please listen and stay calm.",
        vietnamese: "Xin hãy lắng nghe và giữ bình tĩnh.",
        promptContext: "Bạn muốn trấn an ai đó, dùng đúng cách đọc của từ có T câm (listen) và L câm (calm).",
        choices: [
          { id: "a", text: "Please [li-sờn] and stay [cam]." },
          { id: "b", text: "Please [li-sờ-tờn] and stay [cal-mờ]." },
          { id: "c", text: "Please [lít-sờn] and stay [cam]." },
        ],
        correctAnswer: "a",
        explanation:
          "Cách đọc đúng bỏ qua chữ T trong 'listen' và chữ L trong 'calm' — đúng theo quy tắc chữ câm đã học cho cả hai từ.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại đều cố phát âm ít nhất một chữ câm (T hoặc L), khiến câu nghe cứng và không tự nhiên với người bản xứ.",
        usageTip: "Dùng câu này khi cần trấn an khách hàng hoặc ai đó đang lo lắng, một tình huống rất thường gặp trong dịch vụ.",
      },
      {
        id: "pr-43-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "often",
        vietnamese: "thường xuyên",
        audioText: "often",
        choices: [
          { id: "a", text: "often (đọc là 'o-fờn', chữ T thường câm)" },
          { id: "b", text: "often (đọc là 'op-tờn', có âm T rõ)" },
          { id: "c", text: "often (đọc là 'o-tơn-phen')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Often' thường được đọc với chữ T câm — /ˈɒfən/ ('o-fờn') — đây là cách phát âm phổ biến nhất và được coi là chuẩn ở cả Anh lẫn Mỹ, dù một số người vẫn phát âm nhẹ chữ T.",
        wrongAnswerExplanations:
          "Cách phát âm với T rõ ràng ('op-tờn') ít phổ biến hơn nhiều và có thể nghe hơi trang trọng hoặc cổ; cách còn lại hoàn toàn sai cấu trúc âm của từ.",
        usageTip: "Dùng khi nói về tần suất, ví dụ 'I often visit my mom' (tôi thường xuyên thăm mẹ tôi).",
      },
      {
        id: "pr-43-9",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Silent letters exist because English spelling didn't always change when pronunciation changed over time.",
        vietnamese: "Chữ cái câm tồn tại vì cách viết tiếng Anh không phải lúc nào cũng thay đổi theo khi cách phát âm thay đổi theo thời gian.",
        prompt: "Silent letters exist because English spelling didn't always change when pronunciation changed over time.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Đây là lý do lịch sử chính cho hầu hết chữ cái câm trong tiếng Anh: cách phát âm của người nói thay đổi dần theo thời gian, nhưng cách viết (chính tả) lại được giữ nguyên hoặc thay đổi rất chậm, tạo ra khoảng cách giữa chữ viết và cách đọc.",
        wrongAnswerExplanations:
          "Đây là lời giải thích được các nhà ngôn ngữ học công nhận rộng rãi về nguồn gốc của chữ cái câm trong tiếng Anh.",
        usageTip: "Dùng kiến thức này để hiểu rằng chữ câm không phải ngẫu nhiên mà có lý do lịch sử, giúp việc học bớt khó chịu hơn.",
      },
      {
        id: "pr-43-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I often walk to the castle to stay calm and listen to the birds.",
        vietnamese: "Tôi thường đi bộ đến lâu đài để giữ bình tĩnh và nghe tiếng chim hót.",
        audioText: "I often walk to the castle to stay calm and listen to the birds.",
        choices: [
          { id: "a", text: "Tôi thường đi bộ đến lâu đài để giữ bình tĩnh và nghe tiếng chim hót." },
          { id: "b", text: "Tôi không bao giờ đi bộ đến lâu đài." },
          { id: "c", text: "Tôi lái xe đến lâu đài mỗi ngày." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này ôn tập tổng hợp 5 từ có chữ câm: 'often' (T thường câm), 'walk' (L câm), 'castle' (T câm), 'calm' (L câm), 'listen' (T câm) — một câu dài luyện nhiều quy tắc chữ câm cùng lúc.",
        wrongAnswerExplanations:
          "Câu gốc khẳng định 'thường' (often) đi bộ, không phải 'không bao giờ', và nói về đi bộ (walk) chứ không phải lái xe.",
        usageTip: "Dùng câu này để ôn tập tổng hợp nhiều từ có chữ T và L câm trong một câu hoàn chỉnh.",
      },
    ],
  },
  {
    id: "pr-44",
    slug: "pr-44-chu-cai-cau-am-g-1",
    topicId: "pronunciation",
    title: "Chữ cái câm G và các âm câm khác",
    description: "Học thêm các từ có chữ G câm, và ôn lại các nhóm chữ câm đã học.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-44-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "sign",
        vietnamese: "dấu hiệu / bảng hiệu",
        audioText: "sign",
        choices: [
          { id: "a", text: "sign (đọc là 'sain', chữ G câm)" },
          { id: "b", text: "sign (đọc là 'si-nhờ', có âm G)" },
          { id: "c", text: "sign (đọc là 'sinh-gờ')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Sign' có chữ G câm trước N ở cuối từ — chỉ đọc là /saɪn/ ('sain'). Đây là quy tắc: cụm 'gn' ở cuối từ thường có G câm, ví dụ như 'design', 'foreign', 'campaign'.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ G, từ sẽ nghe sai hoàn toàn — người bản xứ luôn bỏ qua chữ G trong cụm 'gn' cuối từ này.",
        usageTip: "Dùng khi nói về biển báo hoặc việc ký tên, ví dụ 'sign here' (ký vào đây) hoặc 'a stop sign' (biển báo dừng).",
      },
      {
        id: "pr-44-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "design",
        vietnamese: "thiết kế",
        audioText: "design",
        choices: [
          { id: "a", text: "design (đọc là 'đi-si-nhờ', có âm G)" },
          { id: "b", text: "design (đọc là 'đi-sain', chữ G câm)" },
          { id: "c", text: "design (đọc là 'đét-sinh')" },
        ],
        correctAnswer: "b",
        explanation:
          "'Design' có chữ G câm — chỉ đọc là /dɪˈzaɪn/ ('đi-sain'). Cùng quy tắc 'gn' cuối từ với 'sign' — rất hữu ích trong nghề nail khi nói về thiết kế móng.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ G, từ sẽ nghe sai — quy tắc G câm trong cụm 'gn' cuối từ áp dụng nhất quán cho cả 'sign' và 'design' vì chúng cùng gốc từ.",
        usageTip: "Dùng khi nói về hoa văn hoặc kiểu dáng, ví dụ 'a nail design' (thiết kế móng tay) — từ cực kỳ hữu ích trong công việc.",
      },
      {
        id: "pr-44-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Because 'sign' has a silent G, the related word 'design' also has a silent G.",
        vietnamese: "Vì 'sign' có chữ G câm, nên từ liên quan 'design' cũng có chữ G câm.",
        prompt: "Because 'sign' has a silent G, the related word 'design' also has a silent G.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Vì 'design' có chứa từ gốc 'sign' bên trong (de + sign), nó giữ nguyên quy tắc phát âm G câm của từ gốc. Đây là một mẹo hữu ích: nếu biết cách đọc từ gốc, bạn có thể đoán được cách đọc của các từ phái sinh từ nó.",
        wrongAnswerExplanations:
          "Đây là một quan sát chính xác về cách các từ cùng gốc thường giữ nguyên đặc điểm phát âm — không có gì để nghi ngờ trong trường hợp cụ thể này.",
        usageTip: "Dùng mẹo này: các từ như 'signal', 'signature', 'resign' cũng đều giữ chữ G câm vì cùng gốc 'sign'.",
      },
      {
        id: "pr-44-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "foreign",
        vietnamese: "nước ngoài",
        audioText: "foreign",
        choices: [
          { id: "a", text: "foreign (đọc là 'fo-rin', chữ G câm)" },
          { id: "b", text: "foreign (đọc là 'fo-rên-gờ', có âm G)" },
          { id: "c", text: "foreign (đọc là 'phô-rên')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Foreign' có chữ G câm — chỉ đọc là /ˈfɒrɪn/ ('fo-rin'). Từ này khá đặc biệt vì cách viết không phản ánh rõ cách đọc, nhưng vẫn theo quy tắc chung của cụm 'gn'.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ G, từ sẽ nghe sai — 'foreign' luôn được đọc mà không có âm G, dù chữ viết có chứa nó.",
        usageTip: "Dùng khi nói về điều gì đó thuộc nước ngoài, ví dụ 'a foreign language' (một ngôn ngữ nước ngoài).",
      },
      {
        id: "pr-44-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "island",
        vietnamese: "hòn đảo",
        audioText: "island",
        choices: [
          { id: "a", text: "island (đọc là 'ai-lơn', chữ S câm)" },
          { id: "b", text: "island (đọc là 'ít-len', có âm S)" },
          { id: "c", text: "island (đọc là 'i-san-đờ')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Island' có chữ S câm ở giữa — chỉ đọc là /ˈaɪlənd/ ('ai-lơn'). Đây là một trường hợp đặc biệt: chữ S được thêm vào cách viết từ nhiều thế kỷ trước do nhầm lẫn với từ Latin 'insula', nhưng chưa bao giờ được phát âm.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ S, từ sẽ nghe hoàn toàn sai — đây là lỗi lịch sử về chính tả chứ không phải quy tắc phát âm chuẩn có S.",
        usageTip: "Dùng khi nói về hòn đảo, ví dụ 'a tropical island' (một hòn đảo nhiệt đới) — hữu ích khi nói về kỳ nghỉ.",
      },
      {
        id: "pr-44-6",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "This nail design looks like a foreign island.",
        vietnamese: "Bộ thiết kế móng này trông giống một hòn đảo nước ngoài.",
        promptContext: "Bạn muốn khen mẫu thiết kế móng, dùng đúng cách đọc các chữ câm trong 'design', 'foreign', 'island'.",
        choices: [
          { id: "a", text: "This nail [đi-sain] looks like a [fo-rin] [ai-lơn]." },
          { id: "b", text: "This nail [đi-si-nhờ] looks like a [fo-rên-gờ] [i-san-đờ]." },
          { id: "c", text: "This nail [đi-sain] looks like a [fo-rên-gờ] [ai-lơn]." },
        ],
        correctAnswer: "a",
        explanation:
          "Cách đọc đúng bỏ qua chữ G câm trong 'design' và 'foreign', và chữ S câm trong 'island' — đúng theo cả ba quy tắc chữ câm đã học.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại đều cố phát âm ít nhất một chữ câm, khiến câu nghe sai và không tự nhiên với người bản xứ.",
        usageTip: "Dùng câu khen này khi làm nail cho khách với mẫu thiết kế đẹp và độc đáo.",
      },
      {
        id: "pr-44-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Wednesday",
        vietnamese: "thứ Tư",
        audioText: "Wednesday",
        choices: [
          { id: "a", text: "Wednesday (đọc là 'wenz-đây', chữ D giữa câm)" },
          { id: "b", text: "Wednesday (đọc là 'wed-nes-đây', có âm D)" },
          { id: "c", text: "Wednesday (đọc là 'oe-nờ-đây')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Wednesday' có chữ D ở giữa (Wed-NES-day) hoàn toàn câm — chỉ đọc là /ˈwenzdeɪ/ ('wenz-đây'). Đây là một trong những từ có chữ câm gây bất ngờ nhất vì cách viết dài hơn nhiều so với cách đọc thực tế.",
        wrongAnswerExplanations:
          "Nếu phát âm đầy đủ 'wed-nes-đây' theo cách viết, từ sẽ nghe rất khác với cách người bản xứ nói — họ luôn lược bỏ âm tiết giữa này khi nói nhanh.",
        usageTip: "Dùng khi nói về ngày trong tuần, ví dụ 'see you on Wednesday' (hẹn gặp vào thứ Tư).",
      },
      {
        id: "pr-44-8",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "'Wednesday' is pronounced with three clear syllables, matching its spelling exactly.",
        vietnamese: "'Wednesday' được phát âm với ba âm tiết rõ ràng, khớp chính xác với cách viết.",
        prompt: "'Wednesday' is pronounced with three clear syllables, matching its spelling exactly.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai. Dù viết có vẻ như 3 âm tiết (Wed-nes-day), thực tế người bản xứ chỉ đọc 2 âm tiết: 'Wenz-day' — âm tiết giữa 'nes' gần như biến mất hoàn toàn trong cách nói tự nhiên.",
        wrongAnswerExplanations:
          "Đây chính xác là ví dụ cho thấy cách viết và cách đọc tiếng Anh có thể khác biệt lớn — 'Wednesday' là một trong những từ điển hình nhất cho hiện tượng này.",
        usageTip: "Dùng để nhớ: đừng cố đọc từng chữ cái của một từ tiếng Anh, hãy nghe cách người bản xứ nói để biết âm tiết thực sự.",
      },
      {
        id: "pr-44-9",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Do you have an appointment on Wednesday?",
        vietnamese: "Bạn có lịch hẹn vào thứ Tư không?",
        audioText: "Do you have an appointment on Wednesday?",
        choices: [
          { id: "a", text: "Bạn có lịch hẹn vào thứ Tư không?" },
          { id: "b", text: "Bạn có lịch hẹn vào thứ Năm không?" },
          { id: "c", text: "Bạn có rảnh cuối tuần không?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Wednesday' (đọc là 'wenz-đây', chữ D giữa câm) là từ chính trong câu hỏi này về lịch hẹn — rất hữu ích khi làm việc ở tiệm nail cần xác nhận lịch với khách.",
        wrongAnswerExplanations:
          "Câu gốc hỏi về 'Wednesday' (thứ Tư), không phải 'Thursday' (thứ Năm) hay cuối tuần nói chung.",
        usageTip: "Dùng câu này khi xác nhận lịch hẹn với khách hàng tại nơi làm việc.",
      },
      {
        id: "pr-44-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Every foreign design on this island has its own sign.",
        vietnamese: "Mỗi thiết kế nước ngoài trên hòn đảo này đều có bảng hiệu riêng.",
        audioText: "Every foreign design on this island has its own sign.",
        choices: [
          { id: "a", text: "Mỗi thiết kế nước ngoài trên hòn đảo này đều có bảng hiệu riêng." },
          { id: "b", text: "Không có thiết kế nào trên hòn đảo này." },
          { id: "c", text: "Bảng hiệu trên đảo này đều giống nhau." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này ôn tập tổng hợp 4 từ có chữ câm: 'foreign' (G câm), 'design' (G câm), 'island' (S câm), 'sign' (G câm) — một câu dài luyện các quy tắc chữ câm G và S đã học.",
        wrongAnswerExplanations:
          "Câu gốc khẳng định MỖI thiết kế đều có bảng hiệu riêng, không nói là không có thiết kế nào hay các bảng hiệu đều giống nhau.",
        usageTip: "Dùng câu này để ôn tập tổng hợp các từ có chữ G và S câm trong cùng một câu.",
      },
    ],
  },
  {
    id: "pr-45",
    slug: "pr-45-chu-cai-cau-am-on-tap-1",
    topicId: "pronunciation",
    title: "Ôn tập tổng hợp chữ cái câm",
    description: "Ôn tập toàn bộ các nhóm chữ cái câm đã học qua các câu hội thoại thực tế.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-45-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I know you are honest about your hour of work.",
        vietnamese: "Tôi biết bạn trung thực về giờ làm việc của mình.",
        audioText: "I know you are honest about your hour of work.",
        choices: [
          { id: "a", text: "Tôi biết bạn trung thực về giờ làm việc của mình." },
          { id: "b", text: "Tôi không tin bạn về giờ làm việc." },
          { id: "c", text: "Bạn làm việc không đủ giờ." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chứa 'know' (K câm), 'honest' (H câm), 'hour' (H câm) — ba từ có chữ câm khác nhau xuất hiện trong cùng một câu để ôn tập.",
        wrongAnswerExplanations:
          "Câu gốc khẳng định TIN TƯỞNG (know... honest), không phải không tin, và không nói về việc làm không đủ giờ.",
        usageTip: "Dùng câu này để khen ngợi sự trung thực của đồng nghiệp hoặc nhân viên.",
      },
      {
        id: "pr-45-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "psychology",
        vietnamese: "tâm lý học",
        audioText: "psychology",
        choices: [
          { id: "a", text: "psychology (đọc là 'sai-co-lo-ji', chữ P câm)" },
          { id: "b", text: "psychology (đọc là 'p-sai-co-lo-ji', có âm P)" },
          { id: "c", text: "psychology (đọc là 'pờ-si-cô-lô-gi')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Psychology' có chữ P câm ở đầu — chỉ đọc là /saɪˈkɒlədʒi/ ('sai-co-lo-ji'). Nhiều từ gốc Hy Lạp bắt đầu bằng 'ps' đều có P câm, ví dụ 'psychiatrist', 'psychic'.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ P, từ sẽ nghe sai — nhóm từ gốc Hy Lạp có 'ps' đầu từ luôn bỏ qua âm P khi phát âm trong tiếng Anh.",
        usageTip: "Dùng khi nói về ngành học tâm lý học, ví dụ 'study psychology' (học ngành tâm lý học).",
      },
      {
        id: "pr-45-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Words borrowed from Greek, like 'psychology', often keep silent letters from their original spelling.",
        vietnamese: "Các từ mượn từ tiếng Hy Lạp, như 'psychology', thường giữ lại chữ cái câm từ cách viết gốc.",
        prompt: "Words borrowed from Greek, like 'psychology', often keep silent letters from their original spelling.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Tiếng Anh mượn rất nhiều từ khoa học và học thuật từ tiếng Hy Lạp và Latin, và thường giữ nguyên cách viết gốc dù cách phát âm trong tiếng Anh đã đơn giản hóa (bỏ bớt một số âm khó phát âm như 'ps', 'pn').",
        wrongAnswerExplanations:
          "Đây là một sự thật về nguồn gốc ngôn ngữ được các nhà ngôn ngữ học xác nhận — không có gì để nghi ngờ về việc từ mượn giữ lại chữ viết gốc.",
        usageTip: "Dùng kiến thức này khi gặp các từ khoa học dài bắt đầu bằng 'ps' hoặc 'pn' — hãy thử bỏ qua âm đầu để đọc tự nhiên hơn.",
      },
      {
        id: "pr-45-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Can you write down your honest answer?",
        vietnamese: "Bạn có thể viết xuống câu trả lời trung thực của mình không?",
        audioText: "Can you write down your honest answer?",
        choices: [
          { id: "a", text: "Bạn có thể viết xuống câu trả lời trung thực của mình không?" },
          { id: "b", text: "Bạn có thể nói to câu trả lời của mình không?" },
          { id: "c", text: "Bạn có câu trả lời sai không?" },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có 'write' (W câm) và 'honest' (H câm) — hai từ có chữ câm khác nhau, cùng với 'answer' cũng có W câm ở giữa (an-SWER — thực ra W ở đây được phát âm, chỉ là ví dụ dễ nhầm cần chú ý riêng).",
        wrongAnswerExplanations:
          "Câu gốc yêu cầu VIẾT xuống (write down), không phải nói to, và hỏi về câu trả lời trung thực chứ không phải câu trả lời sai.",
        usageTip: "Dùng câu này khi cần một câu trả lời thành thật bằng văn bản, ví dụ trong khảo sát hoặc form góp ý.",
      },
      {
        id: "pr-45-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "The nail design takes about half an hour.",
        vietnamese: "Mẫu thiết kế móng này mất khoảng nửa tiếng.",
        audioText: "The nail design takes about half an hour.",
        choices: [
          { id: "a", text: "Mẫu thiết kế móng này mất khoảng nửa tiếng." },
          { id: "b", text: "Mẫu thiết kế móng này mất cả buổi." },
          { id: "c", text: "Mẫu thiết kế móng này miễn phí." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chứa 'design' (G câm), 'half' (L câm), 'hour' (H câm) — ba từ có chữ câm khác nhau, rất hữu ích khi báo thời gian làm nail cho khách.",
        wrongAnswerExplanations:
          "Câu gốc nói 'half an hour' (nửa tiếng), không phải cả buổi, và không nói gì về việc miễn phí.",
        usageTip: "Dùng câu này khi báo thời gian ước tính cho một dịch vụ làm nail.",
      },
      {
        id: "pr-45-6",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "Stay calm, listen carefully, and don't worry about the wrong answer.",
        vietnamese: "Hãy bình tĩnh, lắng nghe cẩn thận, và đừng lo về câu trả lời sai.",
        promptContext: "Bạn muốn trấn an ai đó, dùng đúng các từ có chữ L câm (calm), T câm (listen), W câm (wrong).",
        choices: [
          { id: "a", text: "Stay [cam], [li-sờn] carefully, and don't worry about the [rong] answer." },
          { id: "b", text: "Stay [cal-mờ], [li-sờ-tờn] carefully, and don't worry about the [w-rong] answer." },
          { id: "c", text: "Stay [cam], [lít-sờn] carefully, and don't worry about the [w-rong] answer." },
        ],
        correctAnswer: "a",
        explanation:
          "Cách đọc đúng bỏ qua cả ba chữ câm: L trong 'calm', T trong 'listen', và W trong 'wrong' — đúng theo tất cả các quy tắc chữ câm đã học trong nhóm bài này.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại đều cố phát âm ít nhất một chữ câm, khiến câu nghe sai và cứng, không tự nhiên như cách người bản xứ nói.",
        usageTip: "Dùng câu này để trấn an ai đó đang lo lắng, đồng thời ôn lại ba quy tắc chữ câm khác nhau.",
      },
      {
        id: "pr-45-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "climbing",
        vietnamese: "việc leo trèo",
        audioText: "climbing",
        choices: [
          { id: "a", text: "climbing (đọc là 'klai-ming', chữ B câm)" },
          { id: "b", text: "climbing (đọc là 'klaim-bing', có âm B)" },
          { id: "c", text: "climbing (đọc là 'ki-lai-ming')" },
        ],
        correctAnswer: "a",
        explanation:
          "'Climbing' vẫn giữ chữ B câm dù đã thêm đuôi '-ing' — đọc là /ˈklaɪmɪŋ/ ('klai-ming'). Quy tắc chữ câm của từ gốc ('climb') vẫn áp dụng khi thêm hậu tố.",
        wrongAnswerExplanations:
          "Nếu phát âm chữ B, từ sẽ nghe sai — việc thêm '-ing' không làm chữ B câm trở lại có âm, nó vẫn câm như trong từ gốc 'climb'.",
        usageTip: "Dùng khi nói về hoạt động leo trèo, ví dụ 'rock climbing' (leo núi đá) — một môn thể thao phổ biến.",
      },
      {
        id: "pr-45-8",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "When you add an ending like '-ing' to a word with a silent letter, the silent letter usually stays silent.",
        vietnamese: "Khi bạn thêm đuôi như '-ing' vào một từ có chữ cái câm, chữ cái câm đó thường vẫn tiếp tục câm.",
        prompt: "When you add an ending like '-ing' to a word with a silent letter, the silent letter usually stays silent.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Ví dụ 'climb' → 'climbing' vẫn giữ B câm; 'know' → 'knowing' vẫn giữ K câm. Quy tắc chữ câm của từ gốc thường không thay đổi khi thêm các hậu tố phổ biến như '-ing', '-ed', '-er'.",
        wrongAnswerExplanations:
          "Đây là một quan sát nhất quán qua rất nhiều ví dụ trong tiếng Anh — chữ câm của từ gốc gần như luôn được giữ nguyên khi thêm hậu tố.",
        usageTip: "Dùng quy tắc này để tự tin đọc các dạng biến đổi (thêm đuôi) của những từ có chữ câm mà bạn đã học.",
      },
      {
        id: "pr-45-9",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Do you know how to write a design that customers love?",
        vietnamese: "Bạn có biết cách vẽ một mẫu thiết kế mà khách hàng yêu thích không?",
        audioText: "Do you know how to write a design that customers love?",
        choices: [
          { id: "a", text: "Bạn có biết cách vẽ một mẫu thiết kế mà khách hàng yêu thích không?" },
          { id: "b", text: "Bạn có thích thiết kế của khách hàng không?" },
          { id: "c", text: "Khách hàng không thích mẫu thiết kế này." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này ôn tập tổng hợp: 'know' (K câm), 'write' (W câm), 'design' (G câm) — ba từ có chữ câm khác nhau trong một câu hỏi về công việc thiết kế móng.",
        wrongAnswerExplanations:
          "Câu gốc hỏi liệu người nghe có BIẾT CÁCH làm điều đó không, không phải hỏi về sở thích cá nhân hay phủ định về việc khách hàng thích mẫu thiết kế.",
        usageTip: "Dùng câu này khi trò chuyện với đồng nghiệp về kỹ năng vẽ thiết kế móng.",
      },
      {
        id: "pr-45-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "It's Wednesday, and I know it will take half an hour to finish this design.",
        vietnamese: "Hôm nay là thứ Tư, và tôi biết sẽ mất nửa tiếng để hoàn thành mẫu thiết kế này.",
        audioText: "It's Wednesday, and I know it will take half an hour to finish this design.",
        choices: [
          { id: "a", text: "Hôm nay là thứ Tư, và tôi biết sẽ mất nửa tiếng để hoàn thành mẫu thiết kế này." },
          { id: "b", text: "Hôm nay là thứ Hai, và tôi không chắc thời gian." },
          { id: "c", text: "Mẫu thiết kế này đã hoàn thành rồi." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu ôn tập cuối cùng chứa 5 từ có chữ câm: 'Wednesday' (D giữa câm), 'know' (K câm), 'half' (L câm), 'hour' (H câm), 'design' (G câm) — tổng kết toàn bộ các quy tắc chữ câm đã học trong nhóm bài này.",
        wrongAnswerExplanations:
          "Câu gốc nói rõ là 'Wednesday' (thứ Tư), không phải thứ Hai, và khẳng định BIẾT rõ thời gian (know it will take), cũng như mẫu thiết kế CHƯA hoàn thành (sẽ mất nửa tiếng nữa).",
        usageTip: "Dùng câu này để ôn tập tổng hợp toàn bộ các quy tắc chữ câm đã học: K, W, H, L, G, D.",
      },
    ],
  },
];
