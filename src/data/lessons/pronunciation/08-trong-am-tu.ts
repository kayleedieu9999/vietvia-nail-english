import { Lesson } from "@/types/content";

export const pronunciationGroup08: Lesson[] = [
  {
    id: "pr-36",
    slug: "pr-36-trong-am-danh-tu-dong-tu-1",
    topicId: "pronunciation",
    title: "Trọng âm danh từ và động từ giống nhau",
    description: "Học cách một từ đổi nghĩa khi đổi trọng âm, như RE-cord và re-CORD.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-36-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "RE-cord (noun)",
        vietnamese: "bản ghi / kỷ lục (danh từ)",
        audioText: "record",
        prompt: "Nghe từ 'record' được nhấn ở âm tiết đầu — đây là dạng danh từ.",
        choices: [
          { id: "a", text: "RE-cord — trọng âm rơi vào âm tiết đầu" },
          { id: "b", text: "re-CORD — trọng âm rơi vào âm tiết sau" },
          { id: "c", text: "Cả hai âm tiết đều nhấn như nhau" },
        ],
        correctAnswer: "a",
        explanation:
          "Trong tiếng Anh, nhiều từ 2 âm tiết vừa là danh từ vừa là động từ thay đổi nghĩa theo vị trí trọng âm: khi làm danh từ, trọng âm thường rơi vào âm tiết ĐẦU. 'RE-cord' (danh từ) nghĩa là bản ghi âm hoặc kỷ lục.",
        wrongAnswerExplanations:
          "'re-CORD' với trọng âm ở sau là dạng ĐỘNG TỪ, nghĩa là 'ghi âm lại' — khác nghĩa với danh từ. Tiếng Anh không có từ nào nhấn đều cả hai âm tiết như nhau, luôn có một âm nhấn rõ hơn.",
        usageTip: "Dùng khi nói về kỷ lục hoặc bản nhạc/bản ghi, ví dụ 'a world record' (kỷ lục thế giới).",
      },
      {
        id: "pr-36-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "re-CORD (verb)",
        vietnamese: "ghi âm (động từ)",
        audioText: "record",
        prompt: "Nghe từ 'record' được nhấn ở âm tiết sau — đây là dạng động từ.",
        choices: [
          { id: "a", text: "RE-cord — trọng âm rơi vào âm tiết đầu" },
          { id: "b", text: "re-CORD — trọng âm rơi vào âm tiết sau" },
          { id: "c", text: "Không có sự khác biệt khi nói" },
        ],
        correctAnswer: "b",
        explanation:
          "Khi 'record' làm ĐỘNG TỪ (nghĩa là ghi âm, thu lại), trọng âm chuyển sang âm tiết SAU: 're-CORD'. Đây là quy tắc chung: nhiều từ đôi danh từ/động từ có trọng âm đầu khi là danh từ, trọng âm sau khi là động từ.",
        wrongAnswerExplanations:
          "'RE-cord' với trọng âm đầu là dạng danh từ (bản ghi/kỷ lục), khác nghĩa. Người bản xứ luôn nghe ra sự khác biệt này rất rõ ràng, không phải không có khác biệt.",
        usageTip: "Dùng khi nói về hành động ghi âm, ví dụ 'record a video' (quay/ghi lại một video).",
      },
      {
        id: "pr-36-3",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "The word 'present' changes meaning depending on which syllable is stressed.",
        vietnamese: "Từ 'present' thay đổi nghĩa tùy vào âm tiết nào được nhấn.",
        prompt: "The word 'present' changes meaning depending on which syllable is stressed.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. 'PRE-sent' (nhấn đầu) là danh từ nghĩa là 'món quà' hoặc tính từ nghĩa 'hiện tại, có mặt'. 'pre-SENT' (nhấn sau) là động từ nghĩa 'trình bày, tặng'. Đây là ví dụ điển hình của quy tắc trọng âm danh từ/động từ.",
        wrongAnswerExplanations:
          "Đây là một quy tắc rõ ràng và phổ biến trong tiếng Anh, không có gì mơ hồ — rất nhiều từ 2 âm tiết hoạt động theo cách này.",
        usageTip: "Dùng để nhớ: 'a PRE-sent' (một món quà) khác với 'to pre-SENT' (trình bày điều gì đó).",
      },
      {
        id: "pr-36-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I will PRE-sent my ideas at the meeting.",
        vietnamese: "Tôi sẽ trình bày ý tưởng của mình tại cuộc họp.",
        audioText: "I will present my ideas at the meeting.",
        prompt: "Từ 'present' trong câu này được nhấn ở âm tiết nào?",
        choices: [
          { id: "a", text: "PRE-sent — nhấn âm tiết đầu (sai vì đây là động từ)" },
          { id: "b", text: "pre-SENT — nhấn âm tiết sau (đúng vì đây là động từ)" },
          { id: "c", text: "Không nhấn âm tiết nào" },
        ],
        correctAnswer: "b",
        explanation:
          "Vì 'present' ở đây là ĐỘNG TỪ (trình bày), trọng âm phải rơi vào âm tiết SAU: 'pre-SENT'. Nếu nhấn nhầm thành 'PRE-sent', người nghe có thể hiểu lầm bạn đang nói về danh từ (món quà/hiện tại).",
        wrongAnswerExplanations:
          "'PRE-sent' với trọng âm đầu chỉ đúng khi từ này là danh từ hoặc tính từ, không phải động từ như trong câu này. Mọi từ đa âm tiết trong tiếng Anh đều có ít nhất một âm được nhấn rõ.",
        usageTip: "Dùng khi nói về việc trình bày báo cáo hoặc ý tưởng trước người khác.",
      },
      {
        id: "pr-36-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "This is a nice PRE-sent for you.",
        vietnamese: "Đây là một món quà đẹp cho bạn.",
        audioText: "This is a nice present for you.",
        prompt: "Từ 'present' trong câu này được nhấn ở âm tiết nào?",
        choices: [
          { id: "a", text: "PRE-sent — nhấn âm tiết đầu (đúng vì đây là danh từ)" },
          { id: "b", text: "pre-SENT — nhấn âm tiết sau (sai vì đây là danh từ)" },
          { id: "c", text: "Cả hai cách đều đúng như nhau" },
        ],
        correctAnswer: "a",
        explanation:
          "Vì 'present' ở đây là DANH TỪ (món quà), trọng âm rơi vào âm tiết ĐẦU: 'PRE-sent'. Đây là dạng phổ biến nhất khi nói về quà tặng.",
        wrongAnswerExplanations:
          "'pre-SENT' với trọng âm sau là dạng động từ (trình bày), không phù hợp khi nói về món quà. Vị trí trọng âm quyết định nghĩa nên hai cách đọc không thể đúng như nhau.",
        usageTip: "Dùng khi tặng quà cho ai đó, ví dụ vào dịp sinh nhật hay lễ tết.",
      },
      {
        id: "pr-36-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "EX-port (noun) vs ex-PORT (verb)",
        vietnamese: "hàng xuất khẩu (danh từ) và xuất khẩu (động từ)",
        audioText: "export",
        prompt: "Nghe từ 'export' với trọng âm đầu — đây là danh từ hay động từ?",
        choices: [
          { id: "a", text: "Danh từ (hàng xuất khẩu)" },
          { id: "b", text: "Động từ (xuất khẩu)" },
          { id: "c", text: "Tính từ" },
        ],
        correctAnswer: "a",
        explanation:
          "'EX-port' với trọng âm đầu là DANH TỪ, nghĩa là 'hàng xuất khẩu'. Cũng giống 'record' và 'present', quy tắc chung là trọng âm đầu cho danh từ, trọng âm sau cho động từ ('ex-PORT' - xuất khẩu, hành động).",
        wrongAnswerExplanations:
          "Nếu là động từ, từ này sẽ được nhấn ở âm tiết sau: 'ex-PORT'. 'Export' không có dạng tính từ thông dụng.",
        usageTip: "Dùng khi nói về hàng hóa xuất khẩu, ví dụ 'coffee is a major export' (cà phê là mặt hàng xuất khẩu chính).",
      },
      {
        id: "pr-36-7",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "Vietnam will export more coffee this year.",
        vietnamese: "Việt Nam sẽ xuất khẩu nhiều cà phê hơn trong năm nay.",
        promptContext: "Bạn muốn nói về hành động xuất khẩu (động từ), cần nhấn đúng trọng âm ở âm tiết sau.",
        choices: [
          { id: "a", text: "Vietnam will ex-PORT more coffee this year." },
          { id: "b", text: "Vietnam will EX-port more coffee this year." },
          { id: "c", text: "Vietnam will export more coffee this year (nhấn đều cả hai âm)." },
        ],
        correctAnswer: "a",
        explanation:
          "Vì 'export' ở đây là động từ (sau 'will'), trọng âm phải rơi vào âm tiết sau: 'ex-PORT'. Đây là quy tắc chuẩn cho các từ đôi danh từ/động từ như thế này.",
        wrongAnswerExplanations:
          "'EX-port' với trọng âm đầu chỉ đúng khi từ là danh từ, không phù hợp ở đây vì đây là động từ theo sau 'will'. Không có từ tiếng Anh nào nhấn đều hai âm tiết như nhau.",
        usageTip: "Dùng khi nói về hoạt động xuất khẩu của một quốc gia hoặc công ty.",
      },
      {
        id: "pr-36-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "OB-ject (noun) vs ob-JECT (verb)",
        vietnamese: "đồ vật (danh từ) và phản đối (động từ)",
        audioText: "object",
        prompt: "Nghe từ 'object' với trọng âm sau — đây là danh từ hay động từ?",
        choices: [
          { id: "a", text: "Danh từ (đồ vật)" },
          { id: "b", text: "Động từ (phản đối)" },
          { id: "c", text: "Không thể xác định" },
        ],
        correctAnswer: "b",
        explanation:
          "'ob-JECT' với trọng âm sau là ĐỘNG TỪ, nghĩa là 'phản đối'. Nếu là danh từ (đồ vật), trọng âm sẽ ở đầu: 'OB-ject'. Đây là một cặp từ khác cùng quy tắc trọng âm danh từ/động từ.",
        wrongAnswerExplanations:
          "Nếu là danh từ (đồ vật), từ này được nhấn ở đầu: 'OB-ject'. Vị trí trọng âm luôn cho biết rõ đây là dạng từ loại nào, không phải không xác định được.",
        usageTip: "Dùng khi ai đó không đồng ý với điều gì, ví dụ 'I object to this plan' (tôi phản đối kế hoạch này).",
      },
      {
        id: "pr-36-9",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Getting the stress wrong in words like 'record' or 'present' can confuse a native listener.",
        vietnamese: "Nhấn sai trọng âm trong các từ như 'record' hay 'present' có thể khiến người bản xứ hiểu lầm.",
        prompt: "Getting the stress wrong in words like 'record' or 'present' can confuse a native listener.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Vì trọng âm sai có thể biến một danh từ thành động từ (hoặc ngược lại) trong đầu người nghe, khiến cả câu trở nên khó hiểu hoặc sai nghĩa hoàn toàn, dù các âm và từ vựng khác đều đúng.",
        wrongAnswerExplanations:
          "Đây là một thực tế được nhiều giáo viên phát âm xác nhận — trọng âm sai là một trong những nguyên nhân chính khiến người bản xứ không hiểu người học tiếng Anh, kể cả khi phát âm từng âm đều đúng.",
        usageTip: "Dùng để nhắc bản thân luôn chú ý trọng âm khi học từ mới có 2 âm tiết trở lên.",
      },
      {
        id: "pr-36-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Please don't object to my present.",
        vietnamese: "Xin đừng phản đối món quà của tôi.",
        audioText: "Please don't object to my present.",
        choices: [
          { id: "a", text: "Xin đừng phản đối món quà của tôi." },
          { id: "b", text: "Xin đừng ghi âm món quà của tôi." },
          { id: "c", text: "Xin hãy nhận món quà xuất khẩu này." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có 'object' (động từ, nhấn sau: ob-JECT, nghĩa là phản đối) và 'present' (danh từ, nhấn đầu: PRE-sent, nghĩa là món quà) — hai từ đổi nghĩa theo trọng âm xuất hiện cùng nhau.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc ghi âm hay xuất khẩu, chỉ nói về việc đừng phản đối món quà.",
        usageTip: "Dùng để ôn lại cả hai cặp từ 'object' và 'present' cùng lúc trong một câu.",
      },
    ],
  },
  {
    id: "pr-37",
    slug: "pr-37-trong-am-tu-dai-1",
    topicId: "pronunciation",
    title: "Trọng âm trong từ nhiều âm tiết",
    description: "Luyện trọng âm trong các từ dài thường gặp như important, computer.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-37-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "important",
        vietnamese: "quan trọng",
        audioText: "important",
        prompt: "Từ 'important' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "im-POR-tant — nhấn âm tiết giữa" },
          { id: "b", text: "IM-por-tant — nhấn âm tiết đầu" },
          { id: "c", text: "im-por-TANT — nhấn âm tiết cuối" },
        ],
        correctAnswer: "a",
        explanation:
          "'Important' có 3 âm tiết (im-por-tant), trọng âm rơi vào âm tiết GIỮA: 'im-POR-tant'. Âm tiết này được đọc to hơn, dài hơn, và cao giọng hơn hai âm tiết còn lại.",
        wrongAnswerExplanations:
          "Nếu nhấn âm đầu ('IM-por-tant') hoặc âm cuối ('im-por-TANT'), người bản xứ sẽ nghe thấy rất lạ tai và có thể mất một lúc để hiểu bạn đang nói từ gì.",
        usageTip: "Dùng khi nói điều gì đó rất cần thiết, ví dụ 'this is very important' (điều này rất quan trọng).",
      },
      {
        id: "pr-37-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "computer",
        vietnamese: "máy tính",
        audioText: "computer",
        prompt: "Từ 'computer' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "COM-pu-ter — nhấn âm tiết đầu" },
          { id: "b", text: "com-PU-ter — nhấn âm tiết giữa" },
          { id: "c", text: "com-pu-TER — nhấn âm tiết cuối" },
        ],
        correctAnswer: "b",
        explanation:
          "'Computer' có 3 âm tiết (com-pu-ter), trọng âm rơi vào âm tiết GIỮA: 'com-PU-ter'. Âm 'pu' được kéo dài và nhấn mạnh hơn hẳn hai âm còn lại.",
        wrongAnswerExplanations:
          "'COM-pu-ter' (nhấn đầu) và 'com-pu-TER' (nhấn cuối) đều không đúng — nếu đọc sai vị trí này, từ nghe sẽ khác hẳn với cách người bản xứ quen nghe.",
        usageTip: "Dùng khi nói về máy tính, ví dụ 'turn on the computer' (bật máy tính lên).",
      },
      {
        id: "pr-37-3",
        type: "listening",
        badgeEmoji: "🎧",
        english: "beautiful",
        vietnamese: "xinh đẹp",
        audioText: "beautiful",
        prompt: "Từ 'beautiful' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "BEAU-ti-ful — nhấn âm tiết đầu" },
          { id: "b", text: "beau-TI-ful — nhấn âm tiết giữa" },
          { id: "c", text: "beau-ti-FUL — nhấn âm tiết cuối" },
        ],
        correctAnswer: "a",
        explanation:
          "'Beautiful' có 3 âm tiết (beau-ti-ful), trọng âm rơi vào âm tiết ĐẦU: 'BEAU-ti-ful'. Không phải từ 3 âm tiết nào cũng nhấn giữa — mỗi từ có quy luật riêng cần học thuộc.",
        wrongAnswerExplanations:
          "Nếu nhấn 'beau-TI-ful' hoặc 'beau-ti-FUL', từ sẽ nghe sai và không tự nhiên — khác với 'important' và 'computer' vốn nhấn ở giữa, 'beautiful' lại nhấn ở đầu.",
        usageTip: "Dùng khi khen ai đó hoặc điều gì đó đẹp, ví dụ 'a beautiful dress' (một chiếc váy đẹp).",
      },
      {
        id: "pr-37-4",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "All English words with three syllables have the stress on the middle syllable.",
        vietnamese: "Mọi từ tiếng Anh có 3 âm tiết đều nhấn ở âm tiết giữa.",
        prompt: "All English words with three syllables have the stress on the middle syllable.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai. Ví dụ 'beautiful' nhấn âm ĐẦU, còn 'important' và 'computer' nhấn âm GIỮA. Không có quy tắc cố định cho mọi từ 3 âm tiết — mỗi từ cần được học và nghe riêng để nhớ đúng trọng âm.",
        wrongAnswerExplanations:
          "Đây chính xác là lý do vì sao trọng âm tiếng Anh khó — không thể áp dụng một quy tắc chung cho tất cả các từ, phải học từng từ một qua nghe và tra từ điển.",
        usageTip: "Dùng để nhắc bản thân: khi học từ mới, luôn tra và nghe kỹ để biết chính xác trọng âm rơi vào đâu.",
      },
      {
        id: "pr-37-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "photograph vs photographer",
        vietnamese: "bức ảnh và người chụp ảnh",
        audioText: "photograph, photographer",
        prompt: "Trọng âm của 'photograph' và 'photographer' có giống nhau không?",
        choices: [
          { id: "a", text: "Giống nhau — cả hai đều nhấn âm đầu" },
          { id: "b", text: "Khác nhau — trọng âm chuyển vị trí khi thêm đuôi '-er'" },
          { id: "c", text: "Cả hai đều không có trọng âm" },
        ],
        correctAnswer: "b",
        explanation:
          "'PHO-to-graph' nhấn âm ĐẦU, nhưng khi thêm đuôi '-er' thành 'pho-TOG-ra-pher', trọng âm CHUYỂN sang âm tiết thứ hai. Đây là ví dụ cho thấy thêm hậu tố có thể làm thay đổi vị trí trọng âm của cả từ.",
        wrongAnswerExplanations:
          "Trọng âm của hai từ này không giống nhau — đây chính là điểm khó và thú vị của tiếng Anh khi từ cùng gốc nhưng thêm đuôi lại đổi trọng âm. Mọi từ tiếng Anh đa âm tiết đều có ít nhất một âm được nhấn.",
        usageTip: "Dùng để nhớ rằng khi thêm đuôi vào từ gốc, trọng âm có thể thay đổi vị trí — cần tra từ điển khi không chắc.",
      },
      {
        id: "pr-37-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "understand",
        vietnamese: "hiểu",
        audioText: "understand",
        prompt: "Từ 'understand' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "UN-der-stand — nhấn âm tiết đầu" },
          { id: "b", text: "un-DER-stand — nhấn âm tiết giữa" },
          { id: "c", text: "un-der-STAND — nhấn âm tiết cuối" },
        ],
        correctAnswer: "c",
        explanation:
          "'Understand' có 3 âm tiết (un-der-stand), trọng âm rơi vào âm tiết CUỐI: 'un-der-STAND'. Đây là từ rất phổ biến nhưng nhiều người học đọc sai trọng âm vì quen nghĩ trọng âm hay rơi vào giữa.",
        wrongAnswerExplanations:
          "Nếu nhấn 'UN-der-stand' hoặc 'un-DER-stand', từ sẽ nghe không tự nhiên với người bản xứ vì họ luôn quen nghe trọng âm ở âm cuối của từ này.",
        usageTip: "Dùng khi nói về việc hiểu điều gì đó, ví dụ 'I understand now' (bây giờ tôi hiểu rồi).",
      },
      {
        id: "pr-37-7",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "It's important to use the computer correctly.",
        vietnamese: "Việc sử dụng máy tính đúng cách là quan trọng.",
        promptContext: "Bạn muốn nói câu có cả hai từ trọng âm giữa: important và computer, cần nhấn đúng.",
        choices: [
          { id: "a", text: "It's im-POR-tant to use the com-PU-ter correctly." },
          { id: "b", text: "It's IM-por-tant to use the COM-pu-ter correctly." },
          { id: "c", text: "It's im-por-TANT to use the com-pu-TER correctly." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng nhấn cả hai từ ở âm tiết GIỮA: 'im-POR-tant' và 'com-PU-ter' — đúng theo quy luật trọng âm chuẩn của hai từ này.",
        wrongAnswerExplanations:
          "'IM-por-tant' và 'COM-pu-ter' (nhấn đầu) đều sai vị trí trọng âm chuẩn. 'im-por-TANT' và 'com-pu-TER' (nhấn cuối) cũng sai — cả hai từ này đều nhấn ở âm tiết giữa, không phải đầu hay cuối.",
        usageTip: "Dùng câu này để luyện nói hai từ trọng âm giữa cùng lúc trong một câu tự nhiên.",
      },
      {
        id: "pr-37-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "family",
        vietnamese: "gia đình",
        audioText: "family",
        prompt: "Từ 'family' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "FAM-i-ly — nhấn âm tiết đầu" },
          { id: "b", text: "fam-I-ly — nhấn âm tiết giữa" },
          { id: "c", text: "fam-i-LY — nhấn âm tiết cuối" },
        ],
        correctAnswer: "a",
        explanation:
          "'Family' có 3 âm tiết (fam-i-ly), trọng âm rơi vào âm tiết ĐẦU: 'FAM-i-ly'. Đây là một trong những từ cơ bản nhất nên cần nhớ trọng âm đúng ngay từ đầu.",
        wrongAnswerExplanations:
          "Nếu nhấn 'fam-I-ly' hoặc 'fam-i-LY', từ sẽ nghe rất lạ và khó hiểu với người bản xứ, vì họ luôn quen nghe trọng âm ở âm đầu của từ này.",
        usageTip: "Dùng khi nói về gia đình, ví dụ 'my family is important to me' (gia đình tôi rất quan trọng với tôi).",
      },
      {
        id: "pr-37-9",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "In English, the stressed syllable is usually said louder, longer, and a bit higher in pitch.",
        vietnamese: "Trong tiếng Anh, âm tiết được nhấn thường được đọc to hơn, dài hơn, và cao giọng hơn một chút.",
        prompt: "In English, the stressed syllable is usually said louder, longer, and a bit higher in pitch.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Đây là ba đặc điểm chính giúp nhận biết âm tiết được nhấn trong tiếng Anh: to hơn (louder), kéo dài hơn (longer), và cao giọng hơn (higher pitch) so với các âm tiết không được nhấn xung quanh nó.",
        wrongAnswerExplanations:
          "Đây là mô tả chuẩn về ngữ điệu tiếng Anh được dạy trong hầu hết giáo trình phát âm, không có gì để nghi ngờ.",
        usageTip: "Dùng ba đặc điểm này (to, dài, cao) để tự kiểm tra khi luyện đọc từ mới — thử nhấn mạnh một âm tiết theo cả ba cách cùng lúc.",
      },
      {
        id: "pr-37-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "It's important for my family to understand me.",
        vietnamese: "Điều quan trọng là gia đình tôi hiểu tôi.",
        audioText: "It's important for my family to understand me.",
        choices: [
          { id: "a", text: "Điều quan trọng là gia đình tôi hiểu tôi." },
          { id: "b", text: "Gia đình tôi không quan trọng với tôi." },
          { id: "c", text: "Tôi không hiểu gia đình mình." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chứa 4 từ đa âm tiết cần đúng trọng âm: 'important' (giữa), 'family' (đầu), 'understand' (cuối) — luyện tổng hợp các vị trí trọng âm khác nhau trong một câu.",
        wrongAnswerExplanations:
          "Câu gốc khẳng định gia đình quan trọng và mong được hiểu, không nói ngược lại là không quan trọng hay không hiểu gia đình.",
        usageTip: "Dùng câu này để luyện nói một câu dài có nhiều từ với các vị trí trọng âm khác nhau.",
      },
    ],
  },
  {
    id: "pr-38",
    slug: "pr-38-trong-am-gay-hieu-lam-1",
    topicId: "pronunciation",
    title: "Trọng âm sai gây hiểu lầm",
    description: "Xem cách trọng âm sai có thể khiến người nghe không hiểu hoặc hiểu nhầm nghĩa.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-38-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "desert (noun) vs dessert (noun)",
        vietnamese: "sa mạc và món tráng miệng",
        audioText: "desert, dessert",
        prompt: "'DE-sert' (nhấn đầu) và 'des-SERT' (nhấn sau) — từ nào nghĩa là 'món tráng miệng'?",
        choices: [
          { id: "a", text: "DE-sert — nhấn âm đầu" },
          { id: "b", text: "des-SERT — nhấn âm sau" },
          { id: "c", text: "Cả hai đều nghĩa là món tráng miệng" },
        ],
        correctAnswer: "b",
        explanation:
          "'des-SERT' với trọng âm ở âm SAU nghĩa là 'món tráng miệng' (thường có 2 chữ S). Còn 'DE-sert' với trọng âm ĐẦU (1 chữ S) nghĩa là 'sa mạc'. Đây là cặp từ mà trọng âm sai có thể gây hiểu lầm hoàn toàn khác nghĩa.",
        wrongAnswerExplanations:
          "'DE-sert' nhấn đầu là 'sa mạc', hoàn toàn không liên quan đến món tráng miệng. Hai từ này khác nghĩa rõ ràng, không thể dùng thay thế cho nhau.",
        usageTip: "Dùng khi gọi món tráng miệng sau bữa ăn, ví dụ 'what's for dessert?' (món tráng miệng là gì vậy?).",
      },
      {
        id: "pr-38-2",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "If you say 'DE-sert' when you mean 'dessert', a listener might think you are talking about a dry, sandy place.",
        vietnamese: "Nếu bạn nói 'DE-sert' khi ý muốn nói 'dessert', người nghe có thể tưởng bạn đang nói về một nơi khô cằn, nhiều cát.",
        prompt: "If you say 'DE-sert' when you mean 'dessert', a listener might think you are talking about a dry, sandy place.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. 'DE-sert' (trọng âm đầu) nghĩa là 'sa mạc' — một nơi khô cằn, nhiều cát. Nếu bạn muốn nói 'món tráng miệng' nhưng lại nhấn nhầm thành 'DE-sert', người nghe hoàn toàn có thể hiểu lầm bạn đang nói về sa mạc.",
        wrongAnswerExplanations:
          "Đây là ví dụ kinh điển về việc trọng âm sai gây hiểu lầm hoàn toàn về nghĩa — không có gì để nghi ngờ về khả năng gây hiểu lầm này.",
        usageTip: "Dùng để nhớ mẹo: 'dessert' (tráng miệng) có 2 chữ S và nhấn sau, còn 'desert' (sa mạc) có 1 chữ S và nhấn đầu.",
      },
      {
        id: "pr-38-3",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I would like some dessert, please.",
        vietnamese: "Tôi muốn dùng món tráng miệng, làm ơn.",
        audioText: "I would like some dessert, please.",
        prompt: "Từ 'dessert' trong câu này nên nhấn ở âm tiết nào?",
        choices: [
          { id: "a", text: "DES-sert — nhấn âm đầu" },
          { id: "b", text: "des-SERT — nhấn âm sau" },
          { id: "c", text: "Nhấn đều cả hai âm" },
        ],
        correctAnswer: "b",
        explanation:
          "'Dessert' (món tráng miệng) luôn nhấn ở âm SAU: 'des-SERT'. Nếu nhấn nhầm thành âm đầu, người phục vụ trong nhà hàng có thể hiểu lầm bạn đang nói về từ khác.",
        wrongAnswerExplanations:
          "'DES-sert' với trọng âm đầu không đúng cho từ này — dễ nhầm với 'desert' (sa mạc, 1 chữ S). Không có từ tiếng Anh nào nhấn đều hai âm tiết như nhau.",
        usageTip: "Dùng câu này khi gọi món tráng miệng ở nhà hàng sau bữa chính.",
      },
      {
        id: "pr-38-4",
        type: "listening",
        badgeEmoji: "🎧",
        english: "content (noun) vs content (adjective)",
        vietnamese: "nội dung (danh từ) và hài lòng (tính từ)",
        audioText: "content, content",
        prompt: "'CON-tent' (nhấn đầu) nghĩa là gì?",
        choices: [
          { id: "a", text: "Nội dung (danh từ)" },
          { id: "b", text: "Hài lòng (tính từ)" },
          { id: "c", text: "Cả hai nghĩa như nhau" },
        ],
        correctAnswer: "a",
        explanation:
          "'CON-tent' nhấn âm đầu là DANH TỪ, nghĩa là 'nội dung' (ví dụ nội dung một bài viết). Còn 'con-TENT' nhấn âm sau là TÍNH TỪ, nghĩa là 'hài lòng, mãn nguyện' — hai nghĩa khác hẳn nhau dù viết giống hệt.",
        wrongAnswerExplanations:
          "'con-TENT' (nhấn sau) mới là tính từ nghĩa 'hài lòng'. Hai từ này tuy viết giống nhau nhưng nghĩa hoàn toàn khác nhau tùy vào trọng âm, không thể coi là giống nhau.",
        usageTip: "Dùng 'CON-tent' khi nói về nội dung, ví dụ 'the content of the email' (nội dung email).",
      },
      {
        id: "pr-38-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "I am content with my life.",
        vietnamese: "Tôi hài lòng với cuộc sống của mình.",
        audioText: "I am content with my life.",
        prompt: "Từ 'content' trong câu này nên nhấn ở âm tiết nào?",
        choices: [
          { id: "a", text: "CON-tent — nhấn âm đầu" },
          { id: "b", text: "con-TENT — nhấn âm sau" },
          { id: "c", text: "Không nhấn âm nào" },
        ],
        correctAnswer: "b",
        explanation:
          "Vì 'content' ở đây là TÍNH TỪ (nghĩa là hài lòng), trọng âm rơi vào âm SAU: 'con-TENT'. Nếu nhấn nhầm thành 'CON-tent', người nghe có thể hiểu lầm bạn đang nói về danh từ 'nội dung'.",
        wrongAnswerExplanations:
          "'CON-tent' nhấn đầu là danh từ (nội dung), không phù hợp trong câu nói về cảm xúc hài lòng này. Mọi từ đa âm tiết trong tiếng Anh đều cần có một âm được nhấn.",
        usageTip: "Dùng khi diễn tả cảm giác hài lòng, mãn nguyện với cuộc sống hoặc công việc.",
      },
      {
        id: "pr-38-6",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "The content of this book made me feel content.",
        vietnamese: "Nội dung cuốn sách này khiến tôi cảm thấy hài lòng.",
        promptContext: "Bạn muốn nói một câu chơi chữ dùng cả hai nghĩa của 'content' với hai trọng âm khác nhau.",
        choices: [
          { id: "a", text: "The CON-tent of this book made me feel con-TENT." },
          { id: "b", text: "The con-TENT of this book made me feel CON-tent." },
          { id: "c", text: "The CON-tent of this book made me feel CON-tent." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng nhấn từ đầu là 'CON-tent' (danh từ - nội dung) và từ sau là 'con-TENT' (tính từ - hài lòng) — đúng theo nghĩa của từng từ trong câu.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại đều đảo ngược hoặc nhấn sai vị trí trọng âm so với nghĩa cần diễn đạt, khiến câu nghe không tự nhiên hoặc gây hiểu lầm về nghĩa.",
        usageTip: "Dùng câu chơi chữ này để luyện phân biệt và ghi nhớ cặp từ 'content' danh từ và tính từ.",
      },
      {
        id: "pr-38-7",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Word stress in English can change a noun into an adjective, not just a noun into a verb.",
        vietnamese: "Trọng âm trong tiếng Anh có thể biến một danh từ thành tính từ, không chỉ danh từ thành động từ.",
        prompt: "Word stress in English can change a noun into an adjective, not just a noun into a verb.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Ví dụ 'content' — khi nhấn đầu là danh từ (nội dung), khi nhấn sau là tính từ (hài lòng). Đây là ví dụ mở rộng cho thấy quy tắc đổi trọng âm không chỉ áp dụng cho cặp danh từ/động từ mà cả danh từ/tính từ.",
        wrongAnswerExplanations:
          "Đây là một sự thật về ngữ pháp tiếng Anh đã được minh họa qua ví dụ 'content' — không có gì để nghi ngờ.",
        usageTip: "Dùng để mở rộng hiểu biết: đừng chỉ nghĩ trọng âm chỉ đổi giữa danh từ và động từ, nó còn có thể đổi sang tính từ.",
      },
      {
        id: "pr-38-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "address (noun) vs address (verb)",
        vietnamese: "địa chỉ (danh từ) và giải quyết/phát biểu (động từ)",
        audioText: "address",
        prompt: "'AD-dress' (nhấn đầu, cách nói phổ biến ở Mỹ cho danh từ) nghĩa là gì?",
        choices: [
          { id: "a", text: "Địa chỉ (danh từ)" },
          { id: "b", text: "Giải quyết một vấn đề (động từ)" },
          { id: "c", text: "Một loại trang phục" },
        ],
        correctAnswer: "a",
        explanation:
          "'AD-dress' (nhấn đầu, thường dùng trong tiếng Anh Mỹ cho danh từ) nghĩa là 'địa chỉ'. Còn 'ad-DRESS' (nhấn sau) là động từ nghĩa 'giải quyết vấn đề' hoặc 'phát biểu trước đám đông'.",
        wrongAnswerExplanations:
          "'ad-DRESS' nhấn sau mới là động từ nghĩa 'giải quyết/phát biểu'. Từ này không liên quan gì đến trang phục (đó là từ 'dress' viết riêng, không phải 'address').",
        usageTip: "Dùng 'AD-dress' khi hỏi hoặc cho địa chỉ nhà, ví dụ 'what's your address?' (địa chỉ của bạn là gì?).",
      },
      {
        id: "pr-38-9",
        type: "listening",
        badgeEmoji: "🎧",
        english: "We need to address this problem soon.",
        vietnamese: "Chúng ta cần giải quyết vấn đề này sớm.",
        audioText: "We need to address this problem soon.",
        prompt: "Từ 'address' trong câu này nên nhấn ở âm tiết nào?",
        choices: [
          { id: "a", text: "AD-dress — nhấn âm đầu" },
          { id: "b", text: "ad-DRESS — nhấn âm sau" },
          { id: "c", text: "Nhấn đều cả hai âm" },
        ],
        correctAnswer: "b",
        explanation:
          "Vì 'address' ở đây là ĐỘNG TỪ (giải quyết), trọng âm rơi vào âm SAU: 'ad-DRESS'. Nếu nhấn nhầm thành 'AD-dress', người nghe có thể tưởng bạn đang nói về danh từ 'địa chỉ'.",
        wrongAnswerExplanations:
          "'AD-dress' nhấn đầu là danh từ (địa chỉ), không phù hợp trong câu nói về việc giải quyết vấn đề. Không có từ tiếng Anh nào nhấn đều cả hai âm tiết.",
        usageTip: "Dùng khi nói về việc giải quyết một vấn đề nào đó, ví dụ trong công việc hoặc cuộc sống.",
      },
      {
        id: "pr-38-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Can I have your address so I can send the dessert?",
        vietnamese: "Tôi có thể xin địa chỉ của bạn để gửi món tráng miệng không?",
        audioText: "Can I have your address so I can send the dessert?",
        choices: [
          { id: "a", text: "Tôi có thể xin địa chỉ của bạn để gửi món tráng miệng không?" },
          { id: "b", text: "Tôi có thể xin địa chỉ của bạn để đi sa mạc không?" },
          { id: "c", text: "Tôi có thể giải quyết vấn đề của bạn không?" },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này có 'address' (danh từ, nhấn đầu: AD-dress, nghĩa là địa chỉ) và 'dessert' (nhấn sau: des-SERT, nghĩa là món tráng miệng) — hai từ dễ nhầm lẫn trọng âm xuất hiện cùng nhau.",
        wrongAnswerExplanations:
          "Câu gốc nói về 'dessert' (món tráng miệng, 2 chữ S), không phải 'desert' (sa mạc, 1 chữ S), và cũng không nói về việc giải quyết vấn đề.",
        usageTip: "Dùng để ôn lại cả hai cặp từ 'address/dress' và 'desert/dessert' cùng lúc trong một câu.",
      },
    ],
  },
  {
    id: "pr-39",
    slug: "pr-39-nhan-dien-trong-am-1",
    topicId: "pronunciation",
    title: "Nhận diện trọng âm bằng tai",
    description: "Luyện nghe để nhận ra âm tiết nào được nhấn trong các từ quen thuộc.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-39-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "hotel",
        vietnamese: "khách sạn",
        audioText: "hotel",
        prompt: "Từ 'hotel' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "HO-tel — nhấn âm đầu" },
          { id: "b", text: "ho-TEL — nhấn âm sau" },
          { id: "c", text: "Nhấn đều cả hai âm" },
        ],
        correctAnswer: "b",
        explanation:
          "'Hotel' có trọng âm rơi vào âm SAU: 'ho-TEL'. Đây là một từ mượn từ tiếng Pháp và giữ nguyên kiểu nhấn âm cuối, khác với nhiều từ tiếng Anh gốc thường nhấn âm đầu.",
        wrongAnswerExplanations:
          "Nếu nhấn 'HO-tel' (âm đầu), từ sẽ nghe sai và lạ tai với người bản xứ. Không có từ tiếng Anh nào nhấn đều cả hai âm tiết như nhau.",
        usageTip: "Dùng khi nói về nơi lưu trú, ví dụ 'book a hotel room' (đặt phòng khách sạn).",
      },
      {
        id: "pr-39-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "banana",
        vietnamese: "quả chuối",
        audioText: "banana",
        prompt: "Từ 'banana' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "BA-na-na — nhấn âm đầu" },
          { id: "b", text: "ba-NA-na — nhấn âm giữa" },
          { id: "c", text: "ba-na-NA — nhấn âm cuối" },
        ],
        correctAnswer: "b",
        explanation:
          "'Banana' có 3 âm tiết, trọng âm rơi vào âm GIỮA: 'ba-NA-na'. Âm 'na' ở giữa được đọc dài và to hơn rõ rệt so với hai âm 'ba' và 'na' còn lại.",
        wrongAnswerExplanations:
          "Nếu nhấn âm đầu hoặc âm cuối, từ 'banana' sẽ nghe rất khác lạ — đây là một trong những từ trọng âm giữa rất phổ biến mà người học nên nhớ kỹ.",
        usageTip: "Dùng khi nói về trái cây, ví dụ 'a banana smoothie' (sinh tố chuối).",
      },
      {
        id: "pr-39-3",
        type: "listening",
        badgeEmoji: "🎧",
        english: "chocolate",
        vietnamese: "sô-cô-la",
        audioText: "chocolate",
        prompt: "Từ 'chocolate' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "CHOC-o-late — nhấn âm đầu" },
          { id: "b", text: "choc-O-late — nhấn âm giữa" },
          { id: "c", text: "choc-o-LATE — nhấn âm cuối" },
        ],
        correctAnswer: "a",
        explanation:
          "'Chocolate' có trọng âm rơi vào âm ĐẦU: 'CHOC-o-late'. Từ này thường được đọc nhanh với âm giữa gần như bị lướt qua, nghe gần giống 2 âm tiết hơn là 3.",
        wrongAnswerExplanations:
          "Nếu nhấn âm giữa hoặc âm cuối, từ sẽ nghe rất khác so với cách người bản xứ nói — 'chocolate' luôn được nhấn ở âm đầu tiên.",
        usageTip: "Dùng khi nói về món ngọt yêu thích, ví dụ 'I love chocolate' (tôi thích sô-cô-la).",
      },
      {
        id: "pr-39-4",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Guessing word stress just by looking at spelling always works correctly in English.",
        vietnamese: "Đoán trọng âm chỉ bằng cách nhìn cách viết luôn luôn đúng trong tiếng Anh.",
        prompt: "Guessing word stress just by looking at spelling always works correctly in English.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai. Tiếng Anh không có quy tắc chính tả cố định để đoán trọng âm — ví dụ 'hotel' nhấn sau nhưng 'chocolate' lại nhấn đầu, dù cả hai đều có 3 âm tiết viết theo kiểu tương tự. Cách tốt nhất là nghe và tra từ điển.",
        wrongAnswerExplanations:
          "Đây chính là lý do trọng âm tiếng Anh khó với người học — không thể chỉ dựa vào chữ viết mà phải luyện nghe nhiều để quen dần.",
        usageTip: "Dùng để nhắc bản thân: luôn nghe phát âm mẫu (audio) khi học từ mới, đừng chỉ đoán qua cách viết.",
      },
      {
        id: "pr-39-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "umbrella",
        vietnamese: "cây dù/ô",
        audioText: "umbrella",
        prompt: "Từ 'umbrella' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "UM-brel-la — nhấn âm đầu" },
          { id: "b", text: "um-BREL-la — nhấn âm giữa" },
          { id: "c", text: "um-brel-LA — nhấn âm cuối" },
        ],
        correctAnswer: "b",
        explanation:
          "'Umbrella' có trọng âm rơi vào âm GIỮA: 'um-BREL-la'. Âm 'brel' được nhấn rõ và kéo dài hơn hẳn hai âm còn lại trong từ.",
        wrongAnswerExplanations:
          "Nếu nhấn âm đầu hoặc âm cuối, từ sẽ nghe khác hẳn với cách phát âm chuẩn mà người bản xứ quen nghe.",
        usageTip: "Dùng khi trời mưa, ví dụ 'bring an umbrella' (mang theo dù/ô).",
      },
      {
        id: "pr-39-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "afternoon",
        vietnamese: "buổi chiều",
        audioText: "afternoon",
        prompt: "Từ 'afternoon' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "AF-ter-noon — nhấn âm đầu" },
          { id: "b", text: "af-TER-noon — nhấn âm giữa" },
          { id: "c", text: "af-ter-NOON — nhấn âm cuối" },
        ],
        correctAnswer: "c",
        explanation:
          "'Afternoon' có trọng âm rơi vào âm CUỐI: 'af-ter-NOON'. Đây là một quy luật khá phổ biến cho các từ ghép chỉ thời gian trong ngày, âm cuối thường được nhấn mạnh và kéo dài.",
        wrongAnswerExplanations:
          "Nếu nhấn âm đầu hoặc âm giữa, từ 'afternoon' sẽ nghe khác lạ — người bản xứ luôn nhấn rõ âm 'noon' ở cuối từ này.",
        usageTip: "Dùng khi nói về thời gian trong ngày, ví dụ 'see you this afternoon' (hẹn gặp chiều nay).",
      },
      {
        id: "pr-39-7",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "Let's meet at the hotel this afternoon.",
        vietnamese: "Hãy gặp nhau ở khách sạn vào chiều nay.",
        promptContext: "Bạn muốn hẹn gặp ai đó, dùng đúng trọng âm cho cả 'hotel' và 'afternoon'.",
        choices: [
          { id: "a", text: "Let's meet at the ho-TEL this af-ter-NOON." },
          { id: "b", text: "Let's meet at the HO-tel this AF-ter-noon." },
          { id: "c", text: "Let's meet at the ho-TEL this AF-ter-noon." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng nhấn 'hotel' ở âm sau (ho-TEL) và 'afternoon' ở âm cuối (af-ter-NOON) — đúng theo trọng âm chuẩn của cả hai từ.",
        wrongAnswerExplanations:
          "'HO-tel' và 'AF-ter-noon' (đều nhấn đầu) sai trọng âm cho cả hai từ. Lựa chọn thứ ba vẫn còn sai ở 'afternoon' vì nhấn nhầm âm đầu thay vì âm cuối.",
        usageTip: "Dùng câu này để luyện hẹn gặp ai đó, chú ý trọng âm của cả địa điểm và thời gian.",
      },
      {
        id: "pr-39-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "engineer",
        vietnamese: "kỹ sư",
        audioText: "engineer",
        prompt: "Từ 'engineer' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "EN-gi-neer — nhấn âm đầu" },
          { id: "b", text: "en-GI-neer — nhấn âm giữa" },
          { id: "c", text: "en-gi-NEER — nhấn âm cuối" },
        ],
        correctAnswer: "c",
        explanation:
          "'Engineer' có trọng âm rơi vào âm CUỐI: 'en-gi-NEER'. Nhiều từ chỉ nghề nghiệp có đuôi '-eer' hoặc '-ee' thường nhấn ở chính âm đó, ví dụ cả 'volunteer' cũng nhấn âm cuối tương tự.",
        wrongAnswerExplanations:
          "Nếu nhấn âm đầu hoặc âm giữa, từ 'engineer' sẽ nghe không tự nhiên — quy tắc chung cho các từ có đuôi '-eer' là nhấn ngay tại đuôi đó.",
        usageTip: "Dùng khi nói về nghề nghiệp kỹ sư, ví dụ 'she is an engineer' (cô ấy là kỹ sư).",
      },
      {
        id: "pr-39-9",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Clapping your hands on the stressed syllable while practicing can help you feel the rhythm of a word.",
        vietnamese: "Vỗ tay vào âm tiết được nhấn khi luyện tập có thể giúp bạn cảm nhận nhịp điệu của từ.",
        prompt: "Clapping your hands on the stressed syllable while practicing can help you feel the rhythm of a word.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Vỗ tay hoặc gõ nhịp vào đúng âm tiết được nhấn là một kỹ thuật luyện phát âm rất hiệu quả, giúp cơ thể cảm nhận được nhịp điệu (rhythm) của từ, không chỉ nghe bằng tai mà còn 'cảm' bằng cơ thể.",
        wrongAnswerExplanations:
          "Đây là một mẹo luyện tập được nhiều giáo viên phát âm khuyên dùng, không có gì để nghi ngờ về hiệu quả của nó.",
        usageTip: "Dùng mẹo này khi tự luyện ở nhà: vừa đọc từ vừa vỗ tay vào đúng âm tiết được nhấn.",
      },
      {
        id: "pr-39-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "The engineer will meet us at the hotel in the afternoon.",
        vietnamese: "Kỹ sư sẽ gặp chúng tôi ở khách sạn vào buổi chiều.",
        audioText: "The engineer will meet us at the hotel in the afternoon.",
        choices: [
          { id: "a", text: "Kỹ sư sẽ gặp chúng tôi ở khách sạn vào buổi chiều." },
          { id: "b", text: "Kỹ sư sẽ gặp chúng tôi vào buổi sáng." },
          { id: "c", text: "Kỹ sư không thể gặp chúng tôi hôm nay." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này ôn tập ba từ có trọng âm cuối: 'engineer' (en-gi-NEER), 'hotel' (ho-TEL), và 'afternoon' (af-ter-NOON) — cùng xuất hiện trong một câu để luyện nghe tổng hợp.",
        wrongAnswerExplanations:
          "Câu gốc nói về buổi chiều (afternoon), không phải buổi sáng, và khẳng định cuộc gặp sẽ diễn ra chứ không bị hủy.",
        usageTip: "Dùng câu này để luyện nghe tổng hợp nhiều từ có trọng âm rơi vào âm cuối.",
      },
    ],
  },
  {
    id: "pr-40",
    slug: "pr-40-trong-am-tinh-tu-1",
    topicId: "pronunciation",
    title: "Ôn tập trọng âm trong câu giao tiếp",
    description: "Ôn tập tổng hợp các quy tắc trọng âm đã học qua câu giao tiếp thực tế.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-40-1",
        type: "listening",
        badgeEmoji: "🎧",
        english: "manager",
        vietnamese: "quản lý",
        audioText: "manager",
        prompt: "Từ 'manager' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "MAN-a-ger — nhấn âm đầu" },
          { id: "b", text: "man-A-ger — nhấn âm giữa" },
          { id: "c", text: "man-a-GER — nhấn âm cuối" },
        ],
        correctAnswer: "a",
        explanation:
          "'Manager' có trọng âm rơi vào âm ĐẦU: 'MAN-a-ger'. Từ này thường dùng trong môi trường công việc để chỉ người quản lý.",
        wrongAnswerExplanations:
          "Nếu nhấn âm giữa hoặc âm cuối, từ sẽ nghe khác hẳn với cách người bản xứ quen nói — 'manager' luôn được nhấn rõ ở âm 'man' đầu tiên.",
        usageTip: "Dùng khi nói về người quản lý ở nơi làm việc, ví dụ 'talk to the manager' (nói chuyện với quản lý).",
      },
      {
        id: "pr-40-2",
        type: "listening",
        badgeEmoji: "🎧",
        english: "appointment",
        vietnamese: "cuộc hẹn",
        audioText: "appointment",
        prompt: "Từ 'appointment' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "AP-point-ment — nhấn âm đầu" },
          { id: "b", text: "ap-POINT-ment — nhấn âm giữa" },
          { id: "c", text: "ap-point-MENT — nhấn âm cuối" },
        ],
        correctAnswer: "b",
        explanation:
          "'Appointment' có trọng âm rơi vào âm GIỮA: 'ap-POINT-ment'. Đây là từ rất quan trọng khi đặt lịch hẹn, ví dụ ở tiệm nail hoặc phòng khám.",
        wrongAnswerExplanations:
          "Nếu nhấn âm đầu hoặc âm cuối, từ 'appointment' sẽ nghe sai lệch, có thể khiến người nghe (như lễ tân) khó hiểu bạn đang nói gì.",
        usageTip: "Dùng khi đặt lịch hẹn, ví dụ 'I have an appointment at 3pm' (tôi có hẹn lúc 3 giờ chiều).",
      },
      {
        id: "pr-40-3",
        type: "listening",
        badgeEmoji: "🎧",
        english: "customer",
        vietnamese: "khách hàng",
        audioText: "customer",
        prompt: "Từ 'customer' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "CUS-tom-er — nhấn âm đầu" },
          { id: "b", text: "cus-TOM-er — nhấn âm giữa" },
          { id: "c", text: "cus-tom-ER — nhấn âm cuối" },
        ],
        correctAnswer: "a",
        explanation:
          "'Customer' có trọng âm rơi vào âm ĐẦU: 'CUS-tom-er'. Đây là từ cực kỳ thông dụng trong môi trường kinh doanh, dịch vụ.",
        wrongAnswerExplanations:
          "Nếu nhấn âm giữa hoặc âm cuối, từ sẽ nghe không tự nhiên — 'customer' luôn được nhấn ở âm 'cus' đầu tiên trong cách nói chuẩn.",
        usageTip: "Dùng khi nói về khách hàng, ví dụ 'the customer is happy' (khách hàng rất hài lòng).",
      },
      {
        id: "pr-40-4",
        type: "choose_best_sentence",
        badgeEmoji: "🗣️",
        english: "The manager made an appointment for the customer.",
        vietnamese: "Người quản lý đã đặt lịch hẹn cho khách hàng.",
        promptContext: "Bạn muốn nói một câu công việc có ba từ trọng âm khác nhau, cần nhấn đúng cả ba.",
        choices: [
          { id: "a", text: "The MAN-a-ger made an ap-POINT-ment for the CUS-tom-er." },
          { id: "b", text: "The man-A-ger made an AP-point-ment for the cus-TOM-er." },
          { id: "c", text: "The MAN-a-ger made an AP-point-ment for the CUS-tom-er." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng nhấn 'manager' ở đầu (MAN-a-ger), 'appointment' ở giữa (ap-POINT-ment), và 'customer' ở đầu (CUS-tom-er) — đúng theo trọng âm chuẩn của từng từ.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại đều nhấn sai vị trí trọng âm của từ 'appointment' (phải là âm giữa 'ap-POINT-ment', không phải đầu hay đều các từ khác).",
        usageTip: "Dùng câu này để luyện nói ba từ công việc phổ biến trong cùng một câu, chú ý từng vị trí trọng âm.",
      },
      {
        id: "pr-40-5",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "Dictionaries usually mark the stressed syllable with a small mark before it, like /kəmˈpjuːtər/.",
        vietnamese: "Từ điển thường đánh dấu âm tiết được nhấn bằng một ký hiệu nhỏ đứng trước nó, như /kəmˈpjuːtər/.",
        prompt: "Dictionaries usually mark the stressed syllable with a small mark before it, like /kəmˈpjuːtər/.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng. Hầu hết từ điển tiếng Anh (như Oxford, Cambridge) dùng ký hiệu dấu phẩy trên nhỏ (ˈ) đặt ngay trước âm tiết được nhấn trong phiên âm quốc tế (IPA), ví dụ /kəmˈpjuːtər/ cho 'computer' cho biết âm 'pju' được nhấn.",
        wrongAnswerExplanations:
          "Đây là quy ước chuẩn quốc tế được hầu hết từ điển sử dụng, không có gì để nghi ngờ về tính chính xác của thông tin này.",
        usageTip: "Dùng mẹo này: khi tra từ điển, tìm dấu (ˈ) trong phần phiên âm để biết chính xác trọng âm rơi vào đâu.",
      },
      {
        id: "pr-40-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Excuse me, I need to cancel my appointment.",
        vietnamese: "Xin lỗi, tôi cần hủy cuộc hẹn của mình.",
        audioText: "Excuse me, I need to cancel my appointment.",
        choices: [
          { id: "a", text: "Xin lỗi, tôi cần hủy cuộc hẹn của mình." },
          { id: "b", text: "Xin lỗi, tôi cần đặt thêm một cuộc hẹn." },
          { id: "c", text: "Xin lỗi, tôi đến trễ giờ hẹn." },
        ],
        correctAnswer: "a",
        explanation:
          "'Appointment' (ap-POINT-ment, nhấn giữa) và 'cancel' đều xuất hiện trong câu này — câu nói về việc hủy lịch hẹn, rất hữu ích khi cần báo hủy trước.",
        wrongAnswerExplanations:
          "Câu gốc nói về việc 'cancel' (hủy) cuộc hẹn, không phải đặt thêm hay đến trễ giờ.",
        usageTip: "Dùng khi cần báo hủy một cuộc hẹn đã đặt trước, ví dụ ở phòng khám hoặc tiệm làm đẹp.",
      },
      {
        id: "pr-40-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "success",
        vietnamese: "thành công",
        audioText: "success",
        prompt: "Từ 'success' có trọng âm rơi vào âm tiết nào?",
        choices: [
          { id: "a", text: "SUC-cess — nhấn âm đầu" },
          { id: "b", text: "suc-CESS — nhấn âm sau" },
          { id: "c", text: "Nhấn đều cả hai âm" },
        ],
        correctAnswer: "b",
        explanation:
          "'Success' có trọng âm rơi vào âm SAU: 'suc-CESS'. Đây là từ 2 âm tiết thường bị nhấn sai vì người học hay quen nhấn âm đầu.",
        wrongAnswerExplanations:
          "Nếu nhấn 'SUC-cess' (âm đầu), từ sẽ nghe sai — người bản xứ luôn nhấn rõ âm 'cess' ở cuối từ này. Không có từ tiếng Anh nào nhấn đều hai âm tiết như nhau.",
        usageTip: "Dùng khi chúc mừng ai đó thành công, ví dụ 'wish you success' (chúc bạn thành công).",
      },
      {
        id: "pr-40-8",
        type: "listening",
        badgeEmoji: "🎧",
        english: "The manager wishes the new customer success.",
        vietnamese: "Người quản lý chúc khách hàng mới thành công.",
        audioText: "The manager wishes the new customer success.",
        choices: [
          { id: "a", text: "Người quản lý chúc khách hàng mới thành công." },
          { id: "b", text: "Người quản lý không thích khách hàng mới." },
          { id: "c", text: "Khách hàng mới chúc người quản lý thành công." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này ôn tập 'manager' (nhấn đầu), 'customer' (nhấn đầu), và 'success' (nhấn sau) — ba từ với các kiểu trọng âm khác nhau trong một câu tự nhiên.",
        wrongAnswerExplanations:
          "Câu gốc nói người quản lý (chủ ngữ) chúc khách hàng (tân ngữ) thành công, không phải ngược lại, và cũng không nói về việc không thích.",
        usageTip: "Dùng câu này để luyện nghe và xác định đúng chủ ngữ, tân ngữ trong câu có nhiều từ trọng âm khác nhau.",
      },
      {
        id: "pr-40-9",
        type: "true_false",
        badgeEmoji: "🔤",
        english: "The best way to learn a new word's stress is to only read it silently, never listen to it.",
        vietnamese: "Cách tốt nhất để học trọng âm của một từ mới là chỉ đọc thầm, không bao giờ nghe nó.",
        prompt: "The best way to learn a new word's stress is to only read it silently, never listen to it.",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc" },
        ],
        correctAnswer: "b",
        explanation:
          "Sai. Đọc thầm không cho biết được trọng âm rơi vào đâu vì chữ viết không thể hiện rõ điều này. Cách tốt nhất là NGHE người bản xứ đọc mẫu (qua từ điển có audio, video...) kết hợp tra ký hiệu trọng âm.",
        wrongAnswerExplanations:
          "Đọc thầm hoàn toàn không giúp ích cho việc học trọng âm — đây là kỹ năng cần luyện qua tai nghe, không phải qua mắt đọc.",
        usageTip: "Dùng từ điển online có nút phát âm (audio) mỗi khi học từ mới để nghe đúng trọng âm ngay từ đầu.",
      },
      {
        id: "pr-40-10",
        type: "listening",
        badgeEmoji: "🎧",
        english: "It's important to make an appointment before you visit the manager.",
        vietnamese: "Điều quan trọng là phải đặt lịch hẹn trước khi bạn gặp người quản lý.",
        audioText: "It's important to make an appointment before you visit the manager.",
        choices: [
          { id: "a", text: "Điều quan trọng là phải đặt lịch hẹn trước khi bạn gặp người quản lý." },
          { id: "b", text: "Bạn không cần đặt lịch hẹn để gặp quản lý." },
          { id: "c", text: "Người quản lý sẽ tự tìm đến bạn." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này ôn tập tổng hợp: 'important' (giữa), 'appointment' (giữa), 'visit' (đầu), 'manager' (đầu) — bốn từ đa âm tiết với các vị trí trọng âm cần luyện thuộc.",
        wrongAnswerExplanations:
          "Câu gốc khẳng định cần đặt lịch hẹn trước, không nói ngược lại là không cần, và cũng không nói quản lý sẽ tự tìm đến.",
        usageTip: "Dùng câu này để ôn tập tổng hợp nhiều từ đa âm tiết với trọng âm khác nhau trong một câu hoàn chỉnh.",
      },
    ],
  },
];
