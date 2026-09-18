import { Lesson } from "@/types/content";

const S_CHOICES = [
  { id: "a", text: "đọc là /s/ (âm gió, giống chữ 's')" },
  { id: "b", text: "đọc là /z/ (âm rung, giống chữ 'z')" },
  { id: "c", text: "đọc là /ɪz/ (thêm hẳn một âm 'ít')" },
];

export const pronunciationGroup04: Lesson[] = [
  {
    id: "pr-16",
    slug: "pr-16-duoi-s-am-s-1",
    topicId: "pronunciation",
    title: "Đuôi -S đọc là /s/ (works, stops)",
    description: "Nhận diện nhóm động từ/danh từ có đuôi -S phát âm thành /s/.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-16-1",
        type: "listening",
        badgeEmoji: "💼",
        english: "works",
        vietnamese: "làm việc (anh ấy/cô ấy)",
        audioText: "works",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Work' tận cùng bằng âm 'K' — một âm không rung. Khi động từ hoặc danh từ tận cùng bằng âm không rung (trừ các âm rít như S, SH, CH), đuôi -S đọc gọn thành /s/: 'works' đọc là /wɜːrks/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'K' không rung nên -S cũng không thể rung theo. Không đọc /ɪz/ vì 'work' không kết thúc bằng âm rít như S hay SH.",
        usageTip: "Dùng khi nói về đồng nghiệp, ví dụ 'She works here on weekends.'",
      },
      {
        id: "pr-16-2",
        type: "listening",
        badgeEmoji: "🛑",
        english: "stops",
        vietnamese: "dừng lại (anh ấy/cô ấy)",
        audioText: "stops",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Stop' tận cùng bằng âm 'P' — không rung dây thanh. Vì vậy -S đọc thành /s/: 'stops' đọc là /stɑːps/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'P' không rung. Không đọc /ɪz/ vì 'stop' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi kể chuyện, ví dụ 'The bus stops right in front of the salon.'",
      },
      {
        id: "pr-16-3",
        type: "listening",
        badgeEmoji: "🐱",
        english: "cats",
        vietnamese: "những con mèo",
        audioText: "cats",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Cat' tận cùng bằng âm 'T' — không rung dây thanh. Vì vậy -S đọc thành /s/: 'cats' đọc là /kæts/. Đây là danh từ số nhiều, quy tắc âm giống hệt động từ ngôi thứ ba.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'T' không rung. Không đọc /ɪz/ vì 'cat' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi trò chuyện phiếm về thú cưng, ví dụ 'I have two cats at home.'",
      },
      {
        id: "pr-16-4",
        type: "listening",
        badgeEmoji: "☕",
        english: "cups",
        vietnamese: "những cái ly",
        audioText: "cups",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Cup' tận cùng bằng âm 'P' — không rung dây thanh. Vì vậy -S đọc thành /s/: 'cups' đọc là /kʌps/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'P' không rung. Không đọc /ɪz/ vì 'cup' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi dọn dẹp, ví dụ 'Please wash these cups.'",
      },
      {
        id: "pr-16-5",
        type: "listening",
        badgeEmoji: "😂",
        english: "laughs",
        vietnamese: "cười (anh ấy/cô ấy)",
        audioText: "laughs",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Laugh' đọc là âm 'F' ở cuối — không rung dây thanh, dù chữ viết là 'gh'. Vì vậy -S đọc thành /s/: 'laughs' đọc là /læfs/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm cuối thật sự là 'F' không rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi kể chuyện, ví dụ 'She always laughs at my jokes.'",
      },
      {
        id: "pr-16-6",
        type: "listening",
        badgeEmoji: "👒",
        english: "hats",
        vietnamese: "những cái mũ",
        audioText: "hats",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Hat' tận cùng bằng âm 'T' — không rung dây thanh. Vì vậy -S đọc thành /s/: 'hats' đọc là /hæts/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'T' không rung. Không đọc /ɪz/ vì 'hat' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi mô tả trang phục, ví dụ 'They are wearing matching hats.'",
      },
      {
        id: "pr-16-7",
        type: "true_false",
        badgeEmoji: "❓",
        english: "books",
        vietnamese: "những quyển sách",
        prompt: "Đuôi -S của từ 'books' đọc giống với đuôi -S của từ 'cats'.",
        promptVietnamese: "Đuôi -S của từ 'books' đọc giống với đuôi -S của từ 'cats'.",
        audioText: "books",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — 'book' tận cùng bằng âm 'K' (không rung), giống 'cat' tận cùng bằng âm 'T' (cũng không rung). Cả hai đều thêm -S đọc thành /s/.",
        wrongAnswerExplanations: "Quy tắc đuôi -S dựa trên âm cuối của từ gốc, đây là quy tắc cố định, không phải điều còn tùy.",
        usageTip: "Dùng khi nói về đồ vật, ví dụ 'These books are for the waiting area.'",
      },
      {
        id: "pr-16-8",
        type: "listening",
        badgeEmoji: "💬",
        english: "talks",
        vietnamese: "nói chuyện (anh ấy/cô ấy)",
        audioText: "talks",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Talk' tận cùng bằng âm 'K' — không rung dây thanh. Vì vậy -S đọc thành /s/: 'talks' đọc là /tɔːks/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'K' không rung. Không đọc /ɪz/ vì 'talk' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi nói về ai đó, ví dụ 'He talks a lot about his family.'",
      },
      {
        id: "pr-16-9",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "She always helps new customers.",
        vietnamese: "Cô ấy luôn giúp đỡ khách hàng mới.",
        promptContext: "Bạn muốn khen đồng nghiệp luôn giúp khách mới, dùng đúng cách phát âm đuôi -S của 'helps'.",
        choices: [
          { id: "a", text: "She always helps new customers. (đuôi -S đọc là /s/)" },
          { id: "b", text: "She always helps new customers. (đuôi -S đọc là /z/)" },
          { id: "c", text: "She always helps new customers. (đuôi -S đọc là /ɪz/)" },
        ],
        correctAnswer: "a",
        explanation:
          "'Help' tận cùng bằng âm 'P' — không rung dây thanh. Vì vậy -S đọc thành /s/: 'helps' đọc là /hɛlps/.",
        wrongAnswerExplanations:
          "Đọc /z/ sẽ sai vì âm 'P' cuối không rung. Đọc /ɪz/ cũng sai vì 'help' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi khen đồng nghiệp chu đáo với khách mới.",
      },
      {
        id: "pr-16-10",
        type: "listening",
        badgeEmoji: "🪑",
        english: "sits",
        vietnamese: "ngồi (anh ấy/cô ấy)",
        audioText: "sits",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Sit' tận cùng bằng âm 'T' — không rung dây thanh. Vì vậy -S đọc thành /s/: 'sits' đọc là /sɪts/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'T' không rung. Không đọc /ɪz/ vì 'sit' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi mô tả thói quen, ví dụ 'He usually sits at the first station.'",
      },
    ],
  },
  {
    id: "pr-17",
    slug: "pr-17-duoi-s-am-z-1",
    topicId: "pronunciation",
    title: "Đuôi -S đọc là /z/ (plays, runs)",
    description: "Nhận diện nhóm động từ/danh từ có đuôi -S phát âm thành /z/.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-17-1",
        type: "listening",
        badgeEmoji: "🎮",
        english: "plays",
        vietnamese: "chơi (anh ấy/cô ấy)",
        audioText: "plays",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Play' tận cùng bằng nguyên âm đôi /eɪ/ — nguyên âm luôn được coi là 'có rung'. Vì vậy -S đọc thành /z/: 'plays' đọc là /pleɪz/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm cuối gốc là nguyên âm, có rung chứ không phải âm gió không rung. Không đọc /ɪz/ vì 'play' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi nói về trẻ con, ví dụ 'Her daughter plays quietly while she gets a pedicure.'",
      },
      {
        id: "pr-17-2",
        type: "listening",
        badgeEmoji: "🏃",
        english: "runs",
        vietnamese: "chạy (anh ấy/cô ấy)",
        audioText: "runs",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Run' tận cùng bằng âm mũi 'N' — có rung dây thanh. Vì vậy -S đọc thành /z/: 'runs' đọc là /rʌnz/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm 'N' có rung. Không đọc /ɪz/ vì 'run' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi mô tả, ví dụ 'The shop runs late on Fridays.'",
      },
      {
        id: "pr-17-3",
        type: "listening",
        badgeEmoji: "❤️",
        english: "loves",
        vietnamese: "yêu thích (anh ấy/cô ấy)",
        audioText: "loves",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Love' tận cùng bằng âm 'V' — có rung dây thanh. Vì vậy -S đọc thành /z/: 'loves' đọc là /lʌvz/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm 'V' có rung. Không đọc /ɪz/ vì 'love' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi khen ngợi, ví dụ 'She loves this new color line.'",
      },
      {
        id: "pr-17-4",
        type: "listening",
        badgeEmoji: "📞",
        english: "calls",
        vietnamese: "gọi (anh ấy/cô ấy)",
        audioText: "calls",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Call' tận cùng bằng âm 'L' — có rung dây thanh. Vì vậy -S đọc thành /z/: 'calls' đọc là /kɔːlz/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm 'L' có rung. Không đọc /ɪz/ vì 'call' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi mô tả, ví dụ 'He calls to confirm every appointment.'",
      },
      {
        id: "pr-17-5",
        type: "listening",
        badgeEmoji: "🚪",
        english: "opens",
        vietnamese: "mở (anh ấy/cô ấy)",
        audioText: "opens",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Open' tận cùng bằng âm mũi 'N' — có rung dây thanh. Vì vậy -S đọc thành /z/: 'opens' đọc là /oʊpənz/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm 'N' có rung. Không đọc /ɪz/ vì 'open' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi nói về giờ giấc, ví dụ 'The salon opens at nine.'",
      },
      {
        id: "pr-17-6",
        type: "listening",
        badgeEmoji: "🐶",
        english: "dogs",
        vietnamese: "những con chó",
        audioText: "dogs",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Dog' tận cùng bằng âm 'G' — có rung dây thanh. Vì vậy -S đọc thành /z/: 'dogs' đọc là /dɔːgz/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm 'G' có rung. Không đọc /ɪz/ vì 'dog' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi trò chuyện phiếm, ví dụ 'They have two dogs at home.'",
      },
      {
        id: "pr-17-7",
        type: "true_false",
        badgeEmoji: "❓",
        english: "cars",
        vietnamese: "những chiếc xe hơi",
        prompt: "Đuôi -S của từ 'cars' đọc giống với đuôi -S của từ 'dogs'.",
        promptVietnamese: "Đuôi -S của từ 'cars' đọc giống với đuôi -S của từ 'dogs'.",
        audioText: "cars",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — 'car' tận cùng bằng âm 'R' (có rung), giống 'dog' tận cùng bằng âm 'G' (cũng có rung). Cả hai đều thêm -S đọc thành /z/.",
        wrongAnswerExplanations: "Quy tắc đuôi -S dựa trên âm cuối của từ gốc, đây là quy tắc cố định, không phải điều còn tùy.",
        usageTip: "Dùng khi nói về bãi đậu xe, ví dụ 'There are many cars outside today.'",
      },
      {
        id: "pr-17-8",
        type: "listening",
        badgeEmoji: "👜",
        english: "bags",
        vietnamese: "những cái túi",
        audioText: "bags",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Bag' tận cùng bằng âm 'G' — có rung dây thanh. Vì vậy -S đọc thành /z/: 'bags' đọc là /bægz/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm 'G' có rung. Không đọc /ɪz/ vì 'bag' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi dặn khách để đồ, ví dụ 'You can leave your bags here.'",
      },
      {
        id: "pr-17-9",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "Two boys are waiting outside.",
        vietnamese: "Có hai cậu bé đang chờ ở ngoài.",
        promptContext: "Bạn muốn báo có hai cậu bé đang chờ khách, dùng đúng cách phát âm đuôi -S của 'boys'.",
        choices: [
          { id: "a", text: "Two boys are waiting outside. (đuôi -S đọc là /z/)" },
          { id: "b", text: "Two boys are waiting outside. (đuôi -S đọc là /s/)" },
          { id: "c", text: "Two boys are waiting outside. (đuôi -S đọc là /ɪz/)" },
        ],
        correctAnswer: "a",
        explanation:
          "'Boy' tận cùng bằng nguyên âm đôi /ɔɪ/ — nguyên âm luôn có rung. Vì vậy -S đọc thành /z/: 'boys' đọc là /bɔɪz/.",
        wrongAnswerExplanations:
          "Đọc /s/ sẽ sai vì âm cuối là nguyên âm, có rung. Đọc /ɪz/ cũng sai vì 'boy' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi thông báo có khách đang chờ ở khu vực chờ.",
      },
      {
        id: "pr-17-10",
        type: "listening",
        badgeEmoji: "👟",
        english: "shoes",
        vietnamese: "những đôi giày",
        audioText: "shoes",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Shoe' tận cùng bằng nguyên âm /uː/ — nguyên âm luôn có rung. Vì vậy -S đọc thành /z/: 'shoes' đọc là /ʃuːz/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm cuối là nguyên âm, có rung. Không đọc /ɪz/ vì 'shoe' không kết thúc bằng âm rít.",
        usageTip: "Dùng khi làm pedicure, ví dụ 'You can take off your shoes now.'",
      },
    ],
  },
  {
    id: "pr-18",
    slug: "pr-18-duoi-es-am-iz-1",
    topicId: "pronunciation",
    title: "Đuôi -ES đọc là /ɪz/ (washes, watches)",
    description: "Nhận diện nhóm động từ/danh từ có đuôi -ES thêm hẳn một âm tiết /ɪz/.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-18-1",
        type: "listening",
        badgeEmoji: "🧼",
        english: "washes",
        vietnamese: "rửa (anh ấy/cô ấy)",
        audioText: "washes",
        choices: S_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Wash' tận cùng bằng âm rít 'SH'. Khi từ gốc kết thúc bằng âm rít (S, Z, SH, CH, GE/DGE, X), đuôi -ES sẽ thêm hẳn một âm tiết, đọc là /ɪz/: 'washes' đọc là /wɑːʃɪz/ (hai âm tiết: wa-shiz).",
        wrongAnswerExplanations:
          "Không đọc /s/ hay /z/ đơn vì hai âm rít đứng liền nhau rất khó nói rõ ràng, nên tiếng Anh thêm nguyên âm /ɪ/ ở giữa để dễ phát âm hơn.",
        usageTip: "Dùng khi mô tả công việc, ví dụ 'She washes her hands before every service.'",
      },
      {
        id: "pr-18-2",
        type: "listening",
        badgeEmoji: "📺",
        english: "watches",
        vietnamese: "xem (anh ấy/cô ấy)",
        audioText: "watches",
        choices: S_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Watch' tận cùng bằng âm rít 'CH'. Vì vậy -ES thêm hẳn một âm tiết: 'watches' đọc là /wɑːtʃɪz/ (hai âm tiết: wa-chiz).",
        wrongAnswerExplanations:
          "Không đọc /s/ hay /z/ đơn vì cần thêm âm /ɪ/ ở giữa để tách hai âm rít ra cho dễ nói.",
        usageTip: "Dùng khi nói về thói quen, ví dụ 'He watches the front desk in the morning.'",
      },
      {
        id: "pr-18-3",
        type: "listening",
        badgeEmoji: "😘",
        english: "kisses",
        vietnamese: "hôn (anh ấy/cô ấy)",
        audioText: "kisses",
        choices: S_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Kiss' tận cùng bằng âm rít 'S'. Vì vậy -ES thêm hẳn một âm tiết: 'kisses' đọc là /kɪsɪz/ (hai âm tiết: ki-siz).",
        wrongAnswerExplanations:
          "Không đọc /s/ hay /z/ đơn vì hai âm S đứng liền nhau khó nói rõ, cần thêm âm /ɪ/ ở giữa.",
        usageTip: "Dùng trong các câu chuyện kể, ít dùng trực tiếp trong salon.",
      },
      {
        id: "pr-18-4",
        type: "listening",
        badgeEmoji: "🔧",
        english: "fixes",
        vietnamese: "sửa (anh ấy/cô ấy)",
        audioText: "fixes",
        choices: S_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Fix' tận cùng bằng âm rít 'X' (đọc là /ks/, kết thúc bằng âm S). Vì vậy -ES thêm hẳn một âm tiết: 'fixes' đọc là /fɪksɪz/ (hai âm tiết: fik-siz).",
        wrongAnswerExplanations:
          "Không đọc /s/ hay /z/ đơn vì âm 'X' cuối đã là âm rít, cần thêm âm /ɪ/ ở giữa để phát âm rõ ràng.",
        usageTip: "Dùng khi nói về sửa chữa, ví dụ 'He always fixes broken nails carefully.'",
      },
      {
        id: "pr-18-5",
        type: "listening",
        badgeEmoji: "💱",
        english: "changes",
        vietnamese: "thay đổi (anh ấy/cô ấy)",
        audioText: "changes",
        choices: S_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Change' tận cùng bằng âm rít 'GE' /dʒ/. Vì vậy -ES thêm hẳn một âm tiết: 'changes' đọc là /tʃeɪndʒɪz/ (hai âm tiết: chain-jiz).",
        wrongAnswerExplanations:
          "Không đọc /s/ hay /z/ đơn vì âm cuối gốc đã là âm rít /dʒ/, cần thêm âm /ɪ/ ở giữa để tách rõ.",
        usageTip: "Dùng khi nói 'She changes her nail color every month.'",
      },
      {
        id: "pr-18-6",
        type: "listening",
        badgeEmoji: "💃",
        english: "dances",
        vietnamese: "nhảy múa (anh ấy/cô ấy)",
        audioText: "dances",
        choices: S_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Dance' tận cùng bằng âm rít 'S' /s/. Vì vậy -ES thêm hẳn một âm tiết: 'dances' đọc là /dænsɪz/ (hai âm tiết: dan-siz).",
        wrongAnswerExplanations:
          "Không đọc /s/ hay /z/ đơn vì cần thêm âm /ɪ/ ở giữa để tách hai âm S ra cho dễ nói.",
        usageTip: "Dùng khi kể chuyện vui, ví dụ 'She dances at every wedding.'",
      },
      {
        id: "pr-18-7",
        type: "true_false",
        badgeEmoji: "❓",
        english: "brushes",
        vietnamese: "chải, quét (anh ấy/cô ấy)",
        prompt: "Từ 'brushes' có đuôi -ES đọc thêm hẳn một âm tiết, giống từ 'washes'.",
        promptVietnamese: "Từ 'brushes' có đuôi -ES đọc thêm hẳn một âm tiết, giống từ 'washes'.",
        audioText: "brushes",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — 'brush' tận cùng bằng âm rít 'SH', giống 'wash' cũng tận cùng bằng âm rít 'SH'. Cả hai đều thuộc nhóm âm rít nên -ES thêm hẳn một âm tiết /ɪz/: 'brushes' đọc là /brʌʃɪz/.",
        wrongAnswerExplanations: "Quy tắc này áp dụng cho mọi từ kết thúc bằng âm rít, đây là quy tắc cố định, không phải điều còn tùy.",
        usageTip: "Dùng khi mô tả công việc, ví dụ 'She brushes off the dust before polish.'",
      },
      {
        id: "pr-18-8",
        type: "listening",
        badgeEmoji: "⚖️",
        english: "judges",
        vietnamese: "đánh giá (anh ấy/cô ấy)",
        audioText: "judges",
        choices: S_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Judge' tận cùng bằng âm rít 'DGE' /dʒ/. Vì vậy -ES thêm hẳn một âm tiết: 'judges' đọc là /dʒʌdʒɪz/ (hai âm tiết: ju-jiz).",
        wrongAnswerExplanations:
          "Không đọc /s/ hay /z/ đơn vì âm cuối gốc đã là âm rít, cần thêm âm /ɪ/ ở giữa để tách rõ.",
        usageTip: "Dùng khi nói 'Please don't feel judged, everyone learns.'",
      },
      {
        id: "pr-18-9",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "The shelf holds several boxes of supplies.",
        vietnamese: "Cái kệ để mấy hộp đồ dùng.",
        promptContext: "Bạn muốn nói về mấy hộp đồ dùng trên kệ, dùng đúng cách phát âm đuôi -ES của 'boxes'.",
        choices: [
          { id: "a", text: "The shelf holds several boxes of supplies. (đuôi -ES đọc là /ɪz/)" },
          { id: "b", text: "The shelf holds several boxes of supplies. (đuôi -ES đọc là /s/)" },
          { id: "c", text: "The shelf holds several boxes of supplies. (đuôi -ES đọc là /z/)" },
        ],
        correctAnswer: "a",
        explanation:
          "'Box' tận cùng bằng âm rít 'X' (/ks/, kết thúc bằng âm S). Vì vậy -ES thêm hẳn một âm tiết: 'boxes' đọc là /bɑːksɪz/ (hai âm tiết: bak-siz).",
        wrongAnswerExplanations:
          "Đọc /s/ hay /z/ đơn đều sai vì âm cuối gốc đã là âm rít, cần thêm âm /ɪ/ ở giữa để phát âm rõ ràng.",
        usageTip: "Dùng khi kiểm kê đồ dùng trong tiệm.",
      },
      {
        id: "pr-18-10",
        type: "listening",
        badgeEmoji: "🌟",
        english: "wishes",
        vietnamese: "ước (anh ấy/cô ấy)",
        audioText: "wishes",
        choices: S_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Wish' tận cùng bằng âm rít 'SH'. Vì vậy -ES thêm hẳn một âm tiết: 'wishes' đọc là /wɪʃɪz/ (hai âm tiết: wi-shiz).",
        wrongAnswerExplanations:
          "Không đọc /s/ hay /z/ đơn vì cần thêm âm /ɪ/ ở giữa để tách hai âm rít ra cho dễ nói.",
        usageTip: "Dùng khi chúc mừng, ví dụ 'Everyone wishes her a happy birthday.'",
      },
    ],
  },
  {
    id: "pr-19",
    slug: "pr-19-quy-tac-duoi-s-1",
    topicId: "pronunciation",
    title: "Vì sao đuôi -S/-ES có 3 cách đọc khác nhau",
    description: "Hiểu quy tắc chọn cách đọc /s/, /z/, hay /ɪz/ dựa vào âm cuối của từ gốc.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-19-1",
        type: "listening",
        badgeEmoji: "🍳",
        english: "cooks",
        vietnamese: "nấu ăn (anh ấy/cô ấy)",
        audioText: "cooks",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "Quy tắc chung: nhìn vào âm CUỐI CÙNG của từ gốc, không nhìn chữ viết. 'Cook' tận cùng bằng âm 'K' (không rung, không phải âm rít) → -S đọc /s/: 'cooks' là /kʊks/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'K' không rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi nói 'He cooks dinner every night.'",
      },
      {
        id: "pr-19-2",
        type: "listening",
        badgeEmoji: "📖",
        english: "reads",
        vietnamese: "đọc (anh ấy/cô ấy)",
        audioText: "reads",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Read' tận cùng bằng âm 'D' (có rung, không phải âm rít) → -S đọc /z/: 'reads' là /riːdz/. Ba bước chọn đúng: (1) nghe âm cuối gốc, (2) nếu là âm rít → /ɪz/, (3) nếu không, rung → /z/, không rung → /s/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm 'D' có rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi nói 'She reads a magazine while waiting.'",
      },
      {
        id: "pr-19-3",
        type: "listening",
        badgeEmoji: "🍎",
        english: "teaches",
        vietnamese: "dạy học (anh ấy/cô ấy)",
        audioText: "teaches",
        choices: S_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Teach' tận cùng bằng âm rít 'CH' → -ES thêm hẳn một âm tiết: 'teaches' là /tiːtʃɪz/ (hai âm tiết: tee-chiz).",
        wrongAnswerExplanations:
          "Không đọc /s/ hay /z/ đơn vì âm cuối gốc là âm rít, cần thêm âm /ɪ/ ở giữa.",
        usageTip: "Dùng khi nói về nghề nghiệp, ví dụ 'My sister teaches English.'",
      },
      {
        id: "pr-19-4",
        type: "listening",
        badgeEmoji: "🗣️",
        english: "speaks",
        vietnamese: "nói (anh ấy/cô ấy)",
        audioText: "speaks",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Speak' tận cùng bằng âm 'K' (không rung, không phải âm rít) → -S đọc /s/: 'speaks' là /spiːks/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'K' không rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi giới thiệu, ví dụ 'She speaks a little Vietnamese.'",
      },
      {
        id: "pr-19-5",
        type: "listening",
        badgeEmoji: "👀",
        english: "sees",
        vietnamese: "nhìn thấy (anh ấy/cô ấy)",
        audioText: "sees",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'See' tận cùng bằng nguyên âm /iː/ (có rung, không phải âm rít) → -S đọc /z/: 'sees' là /siːz/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm cuối là nguyên âm, có rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi nói 'He sees a lot of regular customers.'",
      },
      {
        id: "pr-19-6",
        type: "true_false",
        badgeEmoji: "❓",
        english: "pushes",
        vietnamese: "đẩy (anh ấy/cô ấy)",
        prompt: "Đuôi -ES của từ 'pushes' đọc giống với đuôi -ES của từ 'teaches', vì cả hai đều tận cùng bằng âm rít.",
        promptVietnamese: "Đuôi -ES của từ 'pushes' đọc giống với đuôi -ES của từ 'teaches', vì cả hai đều tận cùng bằng âm rít.",
        audioText: "pushes",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — 'push' tận cùng bằng âm rít 'SH', giống 'teach' tận cùng bằng âm rít 'CH'. Cả hai đều thêm -ES đọc thành /ɪz/: 'pushes' là /pʊʃɪz/.",
        wrongAnswerExplanations: "Quy tắc này dựa trên đặc điểm âm rít của âm cuối, là quy tắc cố định, không phải điều còn tùy.",
        usageTip: "Dùng khi nói 'He pushes the cart around the salon.'",
      },
      {
        id: "pr-19-7",
        type: "listening",
        badgeEmoji: "😷",
        english: "coughs",
        vietnamese: "ho (anh ấy/cô ấy)",
        audioText: "coughs",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Cough' đọc là âm 'F' ở cuối (không rung, không phải âm rít) → -S đọc /s/: 'coughs' là /kɔːfs/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm cuối thật sự là 'F' không rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi hỏi thăm sức khỏe, ví dụ 'He coughs a lot when he's sick.'",
      },
      {
        id: "pr-19-8",
        type: "listening",
        badgeEmoji: "🌱",
        english: "grows",
        vietnamese: "lớn lên, mọc (anh ấy/cô ấy)",
        audioText: "grows",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Grow' tận cùng bằng nguyên âm đôi /oʊ/ (có rung, không phải âm rít) → -S đọc /z/: 'grows' là /groʊz/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm cuối là nguyên âm, có rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi nói về móng tay, ví dụ 'Her nail grows pretty fast.'",
      },
      {
        id: "pr-19-9",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "This color matches her dress perfectly.",
        vietnamese: "Màu này hợp với chiếc váy của cô ấy quá.",
        promptContext: "Bạn muốn khen màu sơn hợp với trang phục của khách, dùng đúng cách phát âm đuôi -ES của 'matches'.",
        choices: [
          { id: "a", text: "This color matches her dress perfectly. (đuôi -ES đọc là /ɪz/)" },
          { id: "b", text: "This color matches her dress perfectly. (đuôi -ES đọc là /s/)" },
          { id: "c", text: "This color matches her dress perfectly. (đuôi -ES đọc là /z/)" },
        ],
        correctAnswer: "a",
        explanation:
          "'Match' tận cùng bằng âm rít 'CH' → -ES thêm hẳn một âm tiết: 'matches' đọc là /mætʃɪz/ (hai âm tiết: ma-chiz).",
        wrongAnswerExplanations:
          "Đọc /s/ hay /z/ đơn đều sai vì âm cuối gốc là âm rít, cần thêm âm /ɪ/ ở giữa để phát âm rõ ràng.",
        usageTip: "Dùng khi tư vấn phối màu sơn với trang phục của khách.",
      },
      {
        id: "pr-19-10",
        type: "listening",
        badgeEmoji: "🤸",
        english: "jumps",
        vietnamese: "nhảy lên (anh ấy/cô ấy)",
        audioText: "jumps",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Jump' tận cùng bằng âm 'P' (không rung, không phải âm rít) → -S đọc /s/: 'jumps' là /dʒʌmps/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'P' không rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi kể chuyện vui về trẻ nhỏ, ví dụ 'He jumps around while waiting for mom.'",
      },
    ],
  },
  {
    id: "pr-20",
    slug: "pr-20-on-tap-duoi-s-1",
    topicId: "pronunciation",
    title: "Ôn tập tổng hợp ba cách đọc đuôi -S/-ES",
    description: "Luyện tập nhận diện cả ba nhóm /s/, /z/, /ɪz/ trộn lẫn với nhau.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-20-1",
        type: "listening",
        badgeEmoji: "🛠️",
        english: "makes",
        vietnamese: "làm ra (anh ấy/cô ấy)",
        audioText: "makes",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Make' tận cùng bằng âm 'K' (không rung, không phải âm rít) → -S đọc /s/: 'makes' là /meɪks/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'K' không rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi nói 'She makes beautiful nail art.'",
      },
      {
        id: "pr-20-2",
        type: "listening",
        badgeEmoji: "🚶",
        english: "walks",
        vietnamese: "đi bộ (anh ấy/cô ấy)",
        audioText: "walks",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Walk' tận cùng bằng âm 'K' (không rung, không phải âm rít) → -S đọc /s/: 'walks' là /wɔːks/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'K' không rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi nói 'He walks to work every day.'",
      },
      {
        id: "pr-20-3",
        type: "listening",
        badgeEmoji: "😴",
        english: "sleeps",
        vietnamese: "ngủ (anh ấy/cô ấy)",
        audioText: "sleeps",
        choices: S_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Sleep' tận cùng bằng âm 'P' (không rung, không phải âm rít) → -S đọc /s/: 'sleeps' là /sliːps/.",
        wrongAnswerExplanations:
          "Không đọc /z/ vì âm 'P' không rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi nói về giấc ngủ của trẻ, ví dụ 'The baby sleeps in the stroller.'",
      },
      {
        id: "pr-20-4",
        type: "listening",
        badgeEmoji: "🚗",
        english: "drives",
        vietnamese: "lái xe (anh ấy/cô ấy)",
        audioText: "drives",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Drive' tận cùng bằng âm 'V' (có rung, không phải âm rít) → -S đọc /z/: 'drives' là /draɪvz/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm 'V' có rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi nói 'She drives here every two weeks.'",
      },
      {
        id: "pr-20-5",
        type: "listening",
        badgeEmoji: "🎤",
        english: "sings",
        vietnamese: "hát (anh ấy/cô ấy)",
        audioText: "sings",
        choices: S_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Sing' tận cùng bằng âm mũi 'NG' (có rung, không phải âm rít) → -S đọc /z/: 'sings' là /sɪŋz/.",
        wrongAnswerExplanations:
          "Không đọc /s/ vì âm 'NG' có rung. Không đọc /ɪz/ vì âm cuối không phải âm rít.",
        usageTip: "Dùng khi trò chuyện phiếm, ví dụ 'She sings along to the radio.'",
      },
      {
        id: "pr-20-6",
        type: "true_false",
        badgeEmoji: "❓",
        english: "lives",
        vietnamese: "sống (anh ấy/cô ấy)",
        prompt: "Từ 'lives' có đuôi -S đọc là /z/ vì âm cuối của 'live' là âm 'V' có rung.",
        promptVietnamese: "Từ 'lives' có đuôi -S đọc là /z/ vì âm cuối của 'live' là âm 'V' có rung.",
        audioText: "lives",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — 'live' tận cùng bằng âm 'V', một âm có rung, nên -S đọc thành /z/: 'lives' là /lɪvz/.",
        wrongAnswerExplanations: "Đây là quy tắc phát âm cố định dựa trên âm cuối của từ gốc, không phải điều còn tùy.",
        usageTip: "Dùng khi hỏi thăm khách, ví dụ 'Where does she live now?' → 'She lives nearby.'",
      },
      {
        id: "pr-20-7",
        type: "listening",
        badgeEmoji: "🎣",
        english: "catches",
        vietnamese: "bắt (anh ấy/cô ấy)",
        audioText: "catches",
        choices: S_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Catch' tận cùng bằng âm rít 'CH' → -ES thêm hẳn một âm tiết: 'catches' đọc là /kætʃɪz/ (hai âm tiết: ca-chiz).",
        wrongAnswerExplanations:
          "Không đọc /s/ hay /z/ đơn vì âm cuối gốc là âm rít, cần thêm âm /ɪ/ ở giữa.",
        usageTip: "Dùng khi nói 'He catches the early bus every day.'",
      },
      {
        id: "pr-20-8",
        type: "listening",
        badgeEmoji: "🧽",
        english: "erases",
        vietnamese: "xóa (anh ấy/cô ấy)",
        audioText: "erases",
        choices: S_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Erase' tận cùng bằng âm rít 'Z' /z/ → -ES thêm hẳn một âm tiết: 'erases' đọc là /ɪreɪsɪz/ (ba âm tiết: i-rei-siz).",
        wrongAnswerExplanations:
          "Không đọc /s/ hay /z/ đơn vì âm cuối gốc đã là âm rít, cần thêm âm /ɪ/ ở giữa để tách rõ.",
        usageTip: "Dùng khi nói về việc chỉnh sửa, ví dụ 'She erases the pencil marks before drawing.'",
      },
      {
        id: "pr-20-9",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "The bus passes here every hour.",
        vietnamese: "Xe buýt đi ngang đây mỗi giờ.",
        promptContext: "Bạn muốn nói về giờ xe buýt chạy ngang tiệm, dùng đúng cách phát âm đuôi -ES của 'passes'.",
        choices: [
          { id: "a", text: "The bus passes here every hour. (đuôi -ES đọc là /ɪz/)" },
          { id: "b", text: "The bus passes here every hour. (đuôi -ES đọc là /s/)" },
          { id: "c", text: "The bus passes here every hour. (đuôi -ES đọc là /z/)" },
        ],
        correctAnswer: "a",
        explanation:
          "'Pass' tận cùng bằng âm rít 'S' → -ES thêm hẳn một âm tiết: 'passes' đọc là /pæsɪz/ (hai âm tiết: pa-siz).",
        wrongAnswerExplanations:
          "Đọc /s/ hay /z/ đơn đều sai vì hai âm S đứng liền nhau khó nói rõ, cần thêm âm /ɪ/ ở giữa.",
        usageTip: "Dùng khi chỉ đường cho khách đi xe buýt đến tiệm.",
      },
      {
        id: "pr-20-10",
        type: "listening",
        badgeEmoji: "🤏",
        english: "pinches",
        vietnamese: "véo, kẹp (anh ấy/cô ấy)",
        audioText: "pinches",
        choices: S_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Pinch' tận cùng bằng âm rít 'CH' → -ES thêm hẳn một âm tiết: 'pinches' đọc là /pɪntʃɪz/ (hai âm tiết: pin-chiz).",
        wrongAnswerExplanations:
          "Không đọc /s/ hay /z/ đơn vì âm cuối gốc là âm rít, cần thêm âm /ɪ/ ở giữa để phát âm rõ ràng.",
        usageTip: "Dùng khi nói về giày dép chật, ví dụ 'This shoe pinches her toes a little.'",
      },
    ],
  },
];
