import { Lesson } from "@/types/content";

const T_CHOICES = [
  { id: "a", text: "đọc là /t/ (giống chữ 't')" },
  { id: "b", text: "đọc là /d/ (giống chữ 'd')" },
  { id: "c", text: "đọc là /ɪd/ (thêm hẳn một âm 'ít')" },
];

export const pronunciationGroup03: Lesson[] = [
  {
    id: "pr-11",
    slug: "pr-11-duoi-ed-am-t-1",
    topicId: "pronunciation",
    title: "Đuôi -ED đọc là /t/ (walked, watched)",
    description: "Nhận diện nhóm động từ có đuôi -ED phát âm thành /t/.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-11-1",
        type: "listening",
        badgeEmoji: "🚶",
        english: "walked",
        vietnamese: "đã đi bộ",
        audioText: "walked",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Walk' tận cùng bằng âm 'K' — một âm không rung (không rung dây thanh). Khi động từ tận cùng bằng âm không rung (trừ chính âm T), đuôi -ED sẽ đọc gọn thành /t/, không thêm âm tiết nào cả. Vậy 'walked' đọc là /wɔːkt/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'K' cuối không rung nên -ED cũng không thể rung theo. Không đọc /ɪd/ vì 'walk' không kết thúc bằng âm T hay D.",
        usageTip: "Dùng khi kể việc đã làm, ví dụ 'I walked to work today.'",
      },
      {
        id: "pr-11-2",
        type: "listening",
        badgeEmoji: "📺",
        english: "watched",
        vietnamese: "đã xem",
        audioText: "watched",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Watch' tận cùng bằng âm 'CH' /tʃ/ — cũng là âm không rung. Vì vậy -ED đọc thành /t/: 'watched' đọc là /wɑːtʃt/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'CH' không rung. Không đọc /ɪd/ vì 'watch' không kết thúc bằng T hay D, dù cách viết có chữ 'ch' gần chữ 't'.",
        usageTip: "Dùng khi hỏi khách 'Did you watch the game last night?' để bắt chuyện.",
      },
      {
        id: "pr-11-3",
        type: "listening",
        badgeEmoji: "🛑",
        english: "stopped",
        vietnamese: "đã dừng lại",
        audioText: "stopped",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Stop' tận cùng bằng âm 'P' — hai môi khép lại, không rung dây thanh. Vì vậy -ED đọc thành /t/: 'stopped' đọc là /stɑːpt/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'P' không rung. Không đọc /ɪd/ vì 'stop' không kết thúc bằng âm T hay D.",
        usageTip: "Dùng khi kể chuyện, ví dụ 'The car stopped suddenly.'",
      },
      {
        id: "pr-11-4",
        type: "listening",
        badgeEmoji: "😘",
        english: "kissed",
        vietnamese: "đã hôn",
        audioText: "kissed",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Kiss' tận cùng bằng âm 'S' — không rung dây thanh. Vì vậy -ED đọc thành /t/: 'kissed' đọc là /kɪst/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'S' không rung. Không đọc /ɪd/ vì 'kiss' không kết thúc bằng T hay D.",
        usageTip: "Dùng trong các câu chuyện kể lại, ví dụ trong phim hoặc tiểu thuyết.",
      },
      {
        id: "pr-11-5",
        type: "listening",
        badgeEmoji: "🧼",
        english: "washed",
        vietnamese: "đã rửa, đã giặt",
        audioText: "washed",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Wash' tận cùng bằng âm 'SH' /ʃ/ — không rung dây thanh. Vì vậy -ED đọc thành /t/: 'washed' đọc là /wɑːʃt/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'SH' không rung. Không đọc /ɪd/ vì 'wash' không kết thúc bằng T hay D.",
        usageTip: "Dùng khi nói về việc đã rửa tay hoặc giặt đồ, ví dụ 'I washed my hands before starting.'",
      },
      {
        id: "pr-11-6",
        type: "listening",
        badgeEmoji: "😂",
        english: "laughed",
        vietnamese: "đã cười",
        audioText: "laughed",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Laugh' viết có 'gh' nhưng đọc là âm 'F' — một âm không rung. Vì vậy -ED đọc thành /t/: 'laughed' đọc là /læft/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm cuối thật sự là 'F' (không rung), dù chữ viết có vẻ khác lạ. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi kể lại một câu chuyện vui, ví dụ 'We laughed so much yesterday.'",
      },
      {
        id: "pr-11-7",
        type: "true_false",
        badgeEmoji: "❓",
        english: "helped",
        vietnamese: "đã giúp",
        prompt: "Từ 'helped' có đuôi -ED đọc giống với đuôi -ED của từ 'watched'.",
        promptVietnamese: "Từ 'helped' có đuôi -ED đọc giống với đuôi -ED của từ 'watched'.",
        audioText: "helped",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — 'help' tận cùng bằng âm 'P' (không rung), giống 'watch' tận cùng bằng âm 'CH' (cũng không rung). Cả hai đều thêm -ED đọc thành /t/.",
        wrongAnswerExplanations: "Quy tắc đuôi -ED dựa trên âm cuối của động từ gốc, đây là quy tắc cố định, không phải điều còn tùy.",
        usageTip: "Dùng khi nói 'I helped her choose a color.'",
      },
      {
        id: "pr-11-8",
        type: "listening",
        badgeEmoji: "💬",
        english: "talked",
        vietnamese: "đã nói chuyện",
        audioText: "talked",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Talk' tận cùng bằng âm 'K' — không rung dây thanh. Vì vậy -ED đọc thành /t/: 'talked' đọc là /tɔːkt/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'K' không rung. Không đọc /ɪd/ vì 'talk' không kết thúc bằng T hay D.",
        usageTip: "Dùng khi kể lại cuộc trò chuyện, ví dụ 'We talked about the new colors.'",
      },
      {
        id: "pr-11-9",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "She wished for a longer appointment.",
        vietnamese: "Cô ấy ước có được cuộc hẹn dài hơn.",
        promptContext: "Bạn muốn nói về một điều ai đó đã ước, dùng đúng cách phát âm đuôi -ED của 'wished'.",
        choices: [
          { id: "a", text: "She wished for a longer appointment. (đuôi -ED đọc là /t/)" },
          { id: "b", text: "She wished for a longer appointment. (đuôi -ED đọc là /d/)" },
          { id: "c", text: "She wished for a longer appointment. (đuôi -ED đọc là /ɪd/)" },
        ],
        correctAnswer: "a",
        explanation:
          "'Wish' tận cùng bằng âm 'SH' — không rung dây thanh, nên -ED đọc thành /t/: 'wished' đọc là /wɪʃt/, không thêm âm tiết.",
        wrongAnswerExplanations:
          "Đọc /d/ sẽ sai vì âm 'SH' cuối không rung. Đọc /ɪd/ cũng sai vì 'wish' không kết thúc bằng T hay D.",
        usageTip: "Dùng khi nói về mong ước hoặc lời chúc, ví dụ trong dịp lễ, sinh nhật.",
      },
      {
        id: "pr-11-10",
        type: "listening",
        badgeEmoji: "🍳",
        english: "cooked",
        vietnamese: "đã nấu ăn",
        audioText: "cooked",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Cook' tận cùng bằng âm 'K' — không rung dây thanh. Vì vậy -ED đọc thành /t/: 'cooked' đọc là /kʊkt/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'K' không rung. Không đọc /ɪd/ vì 'cook' không kết thúc bằng T hay D.",
        usageTip: "Dùng khi trò chuyện về bữa ăn, ví dụ 'I cooked dinner last night.'",
      },
    ],
  },
  {
    id: "pr-12",
    slug: "pr-12-duoi-ed-am-d-1",
    topicId: "pronunciation",
    title: "Đuôi -ED đọc là /d/ (played, called)",
    description: "Nhận diện nhóm động từ có đuôi -ED phát âm thành /d/.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-12-1",
        type: "listening",
        badgeEmoji: "🎮",
        english: "played",
        vietnamese: "đã chơi",
        audioText: "played",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Play' tận cùng bằng nguyên âm đôi /eɪ/ — mọi nguyên âm đều được coi là 'có rung' (rung dây thanh tự nhiên). Vì vậy -ED đọc thành /d/: 'played' đọc là /pleɪd/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm cuối gốc là nguyên âm, có rung chứ không phải âm gió không rung. Không đọc /ɪd/ vì 'play' không kết thúc bằng T hay D.",
        usageTip: "Dùng khi kể lại hoạt động, ví dụ 'The kids played while their mom got a manicure.'",
      },
      {
        id: "pr-12-2",
        type: "listening",
        badgeEmoji: "📞",
        english: "called",
        vietnamese: "đã gọi",
        audioText: "called",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Call' tận cùng bằng âm 'L' — một âm có rung dây thanh. Vì vậy -ED đọc thành /d/: 'called' đọc là /kɔːld/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm 'L' có rung, không phải âm gió. Không đọc /ɪd/ vì 'call' không kết thúc bằng T hay D.",
        usageTip: "Dùng khi nói 'She called to book an appointment.'",
      },
      {
        id: "pr-12-3",
        type: "listening",
        badgeEmoji: "🧹",
        english: "cleaned",
        vietnamese: "đã dọn dẹp",
        audioText: "cleaned",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Clean' tận cùng bằng âm mũi 'N' — có rung dây thanh. Vì vậy -ED đọc thành /d/: 'cleaned' đọc là /kliːnd/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm 'N' có rung. Không đọc /ɪd/ vì 'clean' không kết thúc bằng T hay D.",
        usageTip: "Dùng khi nói về việc dọn dẹp tiệm, ví dụ 'I cleaned the station before you arrived.'",
      },
      {
        id: "pr-12-4",
        type: "listening",
        badgeEmoji: "🚪",
        english: "opened",
        vietnamese: "đã mở",
        audioText: "opened",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Open' tận cùng bằng âm mũi 'N' — có rung dây thanh. Vì vậy -ED đọc thành /d/: 'opened' đọc là /oʊpənd/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm 'N' có rung. Không đọc /ɪd/ vì 'open' không kết thúc bằng T hay D.",
        usageTip: "Dùng khi kể về việc mở tiệm, ví dụ 'We opened at nine this morning.'",
      },
      {
        id: "pr-12-5",
        type: "listening",
        badgeEmoji: "🎧",
        english: "listened",
        vietnamese: "đã lắng nghe",
        audioText: "listened",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Listen' có chữ 't' câm (đọc là 'lis-sn'), nên âm cuối thật sự là 'N' — có rung dây thanh. Vì vậy -ED đọc thành /d/: 'listened' đọc là /lɪsənd/.",
        wrongAnswerExplanations:
          "Không đọc /t/ dù trong chữ viết có chữ 't' — vì chữ 't' đó không được phát âm, âm cuối thật sự là 'N' có rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi nói 'I listened carefully to what you wanted.'",
      },
      {
        id: "pr-12-6",
        type: "listening",
        badgeEmoji: "🎲",
        english: "tried",
        vietnamese: "đã thử",
        audioText: "tried",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Try' tận cùng bằng nguyên âm /aɪ/ (chữ 'y' đọc như 'ai') — nguyên âm luôn có rung. Vì vậy -ED đọc thành /d/: 'tried' đọc là /traɪd/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm cuối là nguyên âm, có rung. Không đọc /ɪd/ vì 'try' không kết thúc bằng T hay D.",
        usageTip: "Dùng khi nói 'I tried a new gel brand this week.'",
      },
      {
        id: "pr-12-7",
        type: "true_false",
        badgeEmoji: "❓",
        english: "loved",
        vietnamese: "đã yêu thích",
        prompt: "Đuôi -ED của từ 'loved' phát âm giống với đuôi -ED của từ 'called'.",
        promptVietnamese: "Đuôi -ED của từ 'loved' phát âm giống với đuôi -ED của từ 'called'.",
        audioText: "loved",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — 'love' tận cùng bằng âm 'V' (có rung), giống 'call' tận cùng bằng âm 'L' (cũng có rung). Cả hai đều thêm -ED đọc thành /d/.",
        wrongAnswerExplanations: "Quy tắc đuôi -ED phụ thuộc vào âm cuối động từ gốc, đây là quy tắc cố định, không phải điều còn tùy.",
        usageTip: "Dùng khi khen ngợi, ví dụ 'She loved the new design.'",
      },
      {
        id: "pr-12-8",
        type: "listening",
        badgeEmoji: "🎬",
        english: "showed",
        vietnamese: "đã cho xem, đã chỉ",
        audioText: "showed",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Show' tận cùng bằng nguyên âm đôi /oʊ/ — nguyên âm luôn có rung. Vì vậy -ED đọc thành /d/: 'showed' đọc là /ʃoʊd/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm cuối là nguyên âm, có rung. Không đọc /ɪd/ vì 'show' không kết thúc bằng T hay D.",
        usageTip: "Dùng khi nói 'I showed her three color options.'",
      },
      {
        id: "pr-12-9",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "The store closed early today.",
        vietnamese: "Cửa hàng đóng cửa sớm hôm nay.",
        promptContext: "Bạn muốn nói cửa hàng đã đóng sớm, dùng đúng cách phát âm đuôi -ED của 'closed'.",
        choices: [
          { id: "a", text: "The store closed early today. (đuôi -ED đọc là /d/)" },
          { id: "b", text: "The store closed early today. (đuôi -ED đọc là /t/)" },
          { id: "c", text: "The store closed early today. (đuôi -ED đọc là /ɪd/)" },
        ],
        correctAnswer: "a",
        explanation:
          "Động từ 'close' tuy viết bằng 's' nhưng đọc là âm 'Z' — một âm có rung dây thanh. Vì vậy -ED đọc thành /d/: 'closed' đọc là /kloʊzd/.",
        wrongAnswerExplanations:
          "Đọc /t/ sẽ sai vì âm cuối thật sự là 'Z' có rung, không phải âm gió. Đọc /ɪd/ cũng sai vì 'close' không kết thúc bằng T hay D.",
        usageTip: "Dùng khi báo giờ đóng cửa tiệm cho khách, ví dụ khi khách gọi hỏi giờ mở cửa.",
      },
      {
        id: "pr-12-10",
        type: "listening",
        badgeEmoji: "🥤",
        english: "filled",
        vietnamese: "đã đổ đầy, đã lấp đầy",
        audioText: "filled",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Fill' tận cùng bằng âm 'L' — có rung dây thanh. Vì vậy -ED đọc thành /d/: 'filled' đọc là /fɪld/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm 'L' có rung. Không đọc /ɪd/ vì 'fill' không kết thúc bằng T hay D.",
        usageTip: "Dùng khi nói 'I filled the bowl with warm water.'",
      },
    ],
  },
  {
    id: "pr-13",
    slug: "pr-13-duoi-ed-am-id-1",
    topicId: "pronunciation",
    title: "Đuôi -ED đọc là /ɪd/ (wanted, needed)",
    description: "Nhận diện nhóm động từ có đuôi -ED thêm hẳn một âm tiết /ɪd/.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-13-1",
        type: "listening",
        badgeEmoji: "🙏",
        english: "wanted",
        vietnamese: "đã muốn",
        audioText: "wanted",
        choices: T_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Want' tận cùng bằng chính âm 'T'. Khi động từ gốc đã kết thúc bằng âm T hoặc D, đuôi -ED sẽ thêm hẳn một âm tiết mới, đọc là /ɪd/: 'wanted' đọc là /wɑːntɪd/ (hai âm tiết: wan-tid).",
        wrongAnswerExplanations:
          "Không đọc /t/ hay /d/ đơn giản vì nếu vậy sẽ nghe như 'wantt' hoặc 'wantd' — rất khó phát âm liền nhau, nên tiếng Anh thêm nguyên âm /ɪ/ ở giữa để dễ nói hơn.",
        usageTip: "Từ cực kỳ thông dụng: 'She wanted a shorter length.'",
      },
      {
        id: "pr-13-2",
        type: "listening",
        badgeEmoji: "🙌",
        english: "needed",
        vietnamese: "đã cần",
        audioText: "needed",
        choices: T_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Need' tận cùng bằng chính âm 'D'. Vì vậy -ED thêm hẳn một âm tiết: 'needed' đọc là /niːdɪd/ (hai âm tiết: nee-did).",
        wrongAnswerExplanations:
          "Không đọc /t/ hay /d/ đơn vì hai âm D đứng liền nhau rất khó nói rõ ràng — tiếng Anh thêm âm /ɪ/ ở giữa để tách chúng ra.",
        usageTip: "Dùng khi hỏi khách 'What color did you say you needed?'",
      },
      {
        id: "pr-13-3",
        type: "listening",
        badgeEmoji: "🎨",
        english: "painted",
        vietnamese: "đã sơn",
        audioText: "painted",
        choices: T_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Paint' tận cùng bằng chính âm 'T'. Vì vậy -ED thêm hẳn một âm tiết: 'painted' đọc là /peɪntɪd/ (hai âm tiết: pain-tid).",
        wrongAnswerExplanations:
          "Nếu đọc /t/ hay /d/ đơn, hai âm T sẽ dính liền nhau khó nghe — vì vậy cần thêm âm /ɪ/ ở giữa.",
        usageTip: "Dùng khi nói 'I painted her nails a light pink.'",
      },
      {
        id: "pr-13-4",
        type: "listening",
        badgeEmoji: "🏁",
        english: "started",
        vietnamese: "đã bắt đầu",
        audioText: "started",
        choices: T_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Start' tận cùng bằng chính âm 'T'. Vì vậy -ED thêm hẳn một âm tiết: 'started' đọc là /stɑːrtɪd/ (hai âm tiết: star-tid).",
        wrongAnswerExplanations:
          "Không đọc /t/ hay /d/ đơn vì âm T cuối và -ED cùng là T, cần thêm âm /ɪ/ ở giữa để phát âm dễ dàng hơn.",
        usageTip: "Dùng khi kể lại quá trình làm việc, ví dụ 'We started the service at two o'clock.'",
      },
      {
        id: "pr-13-5",
        type: "listening",
        badgeEmoji: "🏁",
        english: "ended",
        vietnamese: "đã kết thúc",
        audioText: "ended",
        choices: T_CHOICES,
        correctAnswer: "c",
        explanation:
          "'End' tận cùng bằng chính âm 'D'. Vì vậy -ED thêm hẳn một âm tiết: 'ended' đọc là /ɛndɪd/ (hai âm tiết: en-did).",
        wrongAnswerExplanations:
          "Không đọc /t/ hay /d/ đơn vì hai âm D đứng liền nhau rất khó nói rõ ràng, cần thêm âm /ɪ/ ở giữa.",
        usageTip: "Dùng khi nói 'The appointment ended a little late today.'",
      },
      {
        id: "pr-13-6",
        type: "true_false",
        badgeEmoji: "❓",
        english: "added",
        vietnamese: "đã thêm vào",
        prompt: "Từ 'added' có đuôi -ED đọc thêm hẳn một âm tiết, giống từ 'wanted'.",
        promptVietnamese: "Từ 'added' có đuôi -ED đọc thêm hẳn một âm tiết, giống từ 'wanted'.",
        audioText: "added",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — 'add' tận cùng bằng chính âm 'D', giống 'want' tận cùng bằng chính âm 'T'. Cả hai đều thuộc nhóm động từ gốc kết thúc bằng T hoặc D, nên -ED thêm hẳn một âm tiết /ɪd/.",
        wrongAnswerExplanations: "Quy tắc này áp dụng cho mọi động từ kết thúc bằng T hoặc D, đây là quy tắc cố định, không phải điều còn tùy.",
        usageTip: "Dùng khi nói 'I added some glitter on top.'",
      },
      {
        id: "pr-13-7",
        type: "listening",
        badgeEmoji: "⏳",
        english: "waited",
        vietnamese: "đã chờ đợi",
        audioText: "waited",
        choices: T_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Wait' tận cùng bằng chính âm 'T'. Vì vậy -ED thêm hẳn một âm tiết: 'waited' đọc là /weɪtɪd/ (hai âm tiết: wai-tid).",
        wrongAnswerExplanations:
          "Không đọc /t/ hay /d/ đơn vì cần thêm âm /ɪ/ ở giữa hai âm T để dễ phát âm.",
        usageTip: "Dùng khi xin lỗi khách vì để chờ lâu, ví dụ 'Thank you for waiting. Sorry you waited so long.'",
      },
      {
        id: "pr-13-8",
        type: "listening",
        badgeEmoji: "🏥",
        english: "visited",
        vietnamese: "đã đến thăm, đã ghé qua",
        audioText: "visited",
        choices: T_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Visit' tận cùng bằng chính âm 'T'. Vì vậy -ED thêm hẳn một âm tiết: 'visited' đọc là /vɪzɪtɪd/ (ba âm tiết: vi-si-tid).",
        wrongAnswerExplanations:
          "Không đọc /t/ hay /d/ đơn vì âm T cuối cần thêm âm /ɪ/ ở giữa để tách rõ với -ED.",
        usageTip: "Dùng khi nói 'She visited us last month.'",
      },
      {
        id: "pr-13-9",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "She decided on a bright red color.",
        vietnamese: "Cô ấy đã quyết định chọn màu đỏ tươi.",
        promptContext: "Bạn muốn nói khách đã quyết định chọn màu, dùng đúng cách phát âm đuôi -ED của 'decided'.",
        choices: [
          { id: "a", text: "She decided on a bright red color. (đuôi -ED đọc là /ɪd/)" },
          { id: "b", text: "She decided on a bright red color. (đuôi -ED đọc là /t/)" },
          { id: "c", text: "She decided on a bright red color. (đuôi -ED đọc là /d/)" },
        ],
        correctAnswer: "a",
        explanation:
          "'Decide' tận cùng bằng chính âm 'D'. Vì vậy -ED thêm hẳn một âm tiết: 'decided' đọc là /dɪsaɪdɪd/ (ba âm tiết: đe-sai-dịt).",
        wrongAnswerExplanations:
          "Đọc /t/ hay /d/ đơn đều sai vì hai âm D đứng cạnh nhau rất khó nói liền — cần thêm âm /ɪ/ ở giữa để tách ra.",
        usageTip: "Dùng khi khách vừa chọn xong màu sắc hoặc kiểu dáng cuối cùng.",
      },
      {
        id: "pr-13-10",
        type: "listening",
        badgeEmoji: "🛌",
        english: "rested",
        vietnamese: "đã nghỉ ngơi",
        audioText: "rested",
        choices: T_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Rest' tận cùng bằng chính âm 'T'. Vì vậy -ED thêm hẳn một âm tiết: 'rested' đọc là /rɛstɪd/ (hai âm tiết: res-tid).",
        wrongAnswerExplanations:
          "Không đọc /t/ hay /d/ đơn vì cần thêm âm /ɪ/ ở giữa để phát âm rõ ràng, dễ nghe hơn.",
        usageTip: "Dùng khi hỏi thăm khách sau kỳ nghỉ, ví dụ 'Did you get some rest this weekend?'",
      },
    ],
  },
  {
    id: "pr-14",
    slug: "pr-14-quy-tac-duoi-ed-1",
    topicId: "pronunciation",
    title: "Vì sao đuôi -ED có 3 cách đọc khác nhau",
    description: "Hiểu quy tắc chọn cách đọc /t/, /d/, hay /ɪd/ dựa vào âm cuối của động từ gốc.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-14-1",
        type: "listening",
        badgeEmoji: "💼",
        english: "worked",
        vietnamese: "đã làm việc",
        audioText: "worked",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "Quy tắc chung: nhìn vào âm CUỐI CÙNG của động từ gốc, không nhìn chữ viết. 'Work' tận cùng bằng âm 'K' (không rung, không phải T/D) → -ED đọc /t/: 'worked' là /wɜːrkt/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'K' không rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi nói 'I worked here for two years.'",
      },
      {
        id: "pr-14-2",
        type: "listening",
        badgeEmoji: "😔",
        english: "missed",
        vietnamese: "đã lỡ, đã nhớ",
        audioText: "missed",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Miss' tận cùng bằng âm 'S' (không rung, không phải T/D) → -ED đọc /t/: 'missed' là /mɪst/. Ba bước để chọn đúng: (1) nghe âm cuối gốc, (2) nếu là T/D → /ɪd/, (3) nếu không, rung → /d/, không rung → /t/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'S' không rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi xin lỗi vì lỡ hẹn, ví dụ 'I'm sorry I missed your call.'",
      },
      {
        id: "pr-14-3",
        type: "listening",
        badgeEmoji: "🛒",
        english: "pushed",
        vietnamese: "đã đẩy",
        audioText: "pushed",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Push' tận cùng bằng âm 'SH' (không rung, không phải T/D) → -ED đọc /t/: 'pushed' là /pʊʃt/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'SH' không rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi kể lại, ví dụ 'She pushed the door open.'",
      },
      {
        id: "pr-14-4",
        type: "listening",
        badgeEmoji: "🖌️",
        english: "brushed",
        vietnamese: "đã chải, đã quét",
        audioText: "brushed",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Brush' tận cùng bằng âm 'SH' (không rung, không phải T/D) → -ED đọc /t/: 'brushed' là /brʌʃt/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'SH' không rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi mô tả bước cuối, ví dụ 'I brushed off the dust before polish.'",
      },
      {
        id: "pr-14-5",
        type: "listening",
        badgeEmoji: "🕵️",
        english: "robbed",
        vietnamese: "đã cướp",
        audioText: "robbed",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Rob' tận cùng bằng âm 'B' (có rung, không phải T/D) → -ED đọc /d/: 'robbed' là /rɑːbd/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm 'B' có rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Từ này hữu ích khi xem tin tức hoặc đọc báo bằng tiếng Anh.",
      },
      {
        id: "pr-14-6",
        type: "listening",
        badgeEmoji: "⚖️",
        english: "judged",
        vietnamese: "đã đánh giá, đã phán xét",
        audioText: "judged",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Judge' tận cùng bằng âm 'DGE' /dʒ/ (có rung, không phải T/D) → -ED đọc /d/: 'judged' là /dʒʌdʒd/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm /dʒ/ có rung. Không đọc /ɪd/ vì âm cuối không phải T hay D (dù chữ viết có 'dge' trông giống 'd').",
        usageTip: "Dùng khi nói 'Please don't feel judged, everyone starts somewhere.'",
      },
      {
        id: "pr-14-7",
        type: "true_false",
        badgeEmoji: "❓",
        english: "arrived",
        vietnamese: "đã đến nơi",
        prompt: "Đuôi -ED của từ 'arrived' đọc giống với đuôi -ED của từ 'robbed', vì cả hai đều tận cùng bằng âm có rung.",
        promptVietnamese: "Đuôi -ED của từ 'arrived' đọc giống với đuôi -ED của từ 'robbed', vì cả hai đều tận cùng bằng âm có rung.",
        audioText: "arrived",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — 'arrive' tận cùng bằng âm 'V' (có rung), giống 'rob' tận cùng bằng âm 'B' (cũng có rung). Cả hai đều thêm -ED đọc thành /d/: 'arrived' là /əraɪvd/.",
        wrongAnswerExplanations: "Quy tắc này dựa trên đặc điểm rung/không rung của âm cuối, là quy tắc cố định, không phải điều còn tùy.",
        usageTip: "Dùng khi thông báo khách đã đến, ví dụ 'Your friend just arrived.'",
      },
      {
        id: "pr-14-8",
        type: "listening",
        badgeEmoji: "🚚",
        english: "moved",
        vietnamese: "đã di chuyển, đã dọn nhà",
        audioText: "moved",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Move' tận cùng bằng âm 'V' (có rung, không phải T/D) → -ED đọc /d/: 'moved' là /muːvd/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm 'V' có rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi trò chuyện, ví dụ 'We moved to a bigger salon last year.'",
      },
      {
        id: "pr-14-9",
        type: "listening",
        badgeEmoji: "📦",
        english: "folded",
        vietnamese: "đã gấp lại",
        audioText: "folded",
        choices: T_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Fold' tận cùng bằng chính âm 'D' → -ED thêm hẳn một âm tiết: 'folded' đọc là /foʊldɪd/ (hai âm tiết: fol-did).",
        wrongAnswerExplanations:
          "Không đọc /t/ hay /d/ đơn vì hai âm D liền nhau rất khó nói rõ, cần thêm âm /ɪ/ ở giữa.",
        usageTip: "Dùng khi nói về khăn hoặc giấy, ví dụ 'I folded the towels for the station.'",
      },
      {
        id: "pr-14-10",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "The plane landed safely.",
        vietnamese: "Máy bay đã hạ cánh an toàn.",
        promptContext: "Bạn muốn nói máy bay đã hạ cánh an toàn, dùng đúng cách phát âm đuôi -ED của 'landed'.",
        choices: [
          { id: "a", text: "The plane landed safely. (đuôi -ED đọc là /ɪd/)" },
          { id: "b", text: "The plane landed safely. (đuôi -ED đọc là /t/)" },
          { id: "c", text: "The plane landed safely. (đuôi -ED đọc là /d/)" },
        ],
        correctAnswer: "a",
        explanation:
          "'Land' tận cùng bằng chính âm 'D' → -ED thêm hẳn một âm tiết: 'landed' đọc là /lændɪd/ (hai âm tiết: lan-did).",
        wrongAnswerExplanations:
          "Đọc /t/ hay /d/ đơn đều sai vì hai âm D liền nhau khó nói rõ ràng, cần thêm âm /ɪ/ ở giữa để tách ra.",
        usageTip: "Dùng khi trò chuyện phiếm về chuyến bay hoặc kỳ nghỉ của khách.",
      },
    ],
  },
  {
    id: "pr-15",
    slug: "pr-15-on-tap-duoi-ed-1",
    topicId: "pronunciation",
    title: "Ôn tập tổng hợp ba cách đọc đuôi -ED",
    description: "Luyện tập nhận diện cả ba nhóm /t/, /d/, /ɪd/ trộn lẫn với nhau.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "pr-15-1",
        type: "listening",
        badgeEmoji: "🔧",
        english: "fixed",
        vietnamese: "đã sửa",
        audioText: "fixed",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Fix' tận cùng bằng âm 'S' (âm cuối của cụm 'ks', không rung) → -ED đọc /t/: 'fixed' là /fɪkst/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm cuối không rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi nói 'I fixed the broken nail for you.'",
      },
      {
        id: "pr-15-2",
        type: "listening",
        badgeEmoji: "🎒",
        english: "packed",
        vietnamese: "đã đóng gói, đã sắp xếp hành lý",
        audioText: "packed",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Pack' tận cùng bằng âm 'K' (không rung) → -ED đọc /t/: 'packed' là /pækt/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'K' không rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi nói về việc chuẩn bị đi xa, ví dụ 'I packed my bag for the trip.'",
      },
      {
        id: "pr-15-3",
        type: "listening",
        badgeEmoji: "💃",
        english: "danced",
        vietnamese: "đã nhảy múa",
        audioText: "danced",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Dance' tận cùng bằng âm 'S' (không rung) → -ED đọc /t/: 'danced' là /dænst/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'S' không rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi kể chuyện vui, ví dụ 'We danced at the wedding.'",
      },
      {
        id: "pr-15-4",
        type: "listening",
        badgeEmoji: "🎁",
        english: "wrapped",
        vietnamese: "đã gói",
        audioText: "wrapped",
        choices: T_CHOICES,
        correctAnswer: "a",
        explanation:
          "'Wrap' tận cùng bằng âm 'P' (không rung) → -ED đọc /t/: 'wrapped' là /ræpt/.",
        wrongAnswerExplanations:
          "Không đọc /d/ vì âm 'P' không rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi nói về quà, ví dụ 'I wrapped the gift for my mother.'",
      },
      {
        id: "pr-15-5",
        type: "listening",
        badgeEmoji: "🔄",
        english: "turned",
        vietnamese: "đã xoay, đã rẽ",
        audioText: "turned",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Turn' tận cùng bằng âm mũi 'N' (có rung) → -ED đọc /d/: 'turned' là /tɜːrnd/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm 'N' có rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi chỉ đường, ví dụ 'I turned left at the light.'",
      },
      {
        id: "pr-15-6",
        type: "listening",
        badgeEmoji: "💱",
        english: "changed",
        vietnamese: "đã thay đổi",
        audioText: "changed",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Change' tận cùng bằng âm 'NGE' /ndʒ/ (có rung) → -ED đọc /d/: 'changed' là /tʃeɪndʒd/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm cuối có rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi khách đổi ý về màu sắc, ví dụ 'She changed her mind about the color.'",
      },
      {
        id: "pr-15-7",
        type: "true_false",
        badgeEmoji: "❓",
        english: "remained",
        vietnamese: "vẫn còn, vẫn giữ nguyên",
        prompt: "Từ 'remained' có đuôi -ED đọc là /d/ vì âm cuối của 'remain' là âm mũi 'N' có rung.",
        promptVietnamese: "Từ 'remained' có đuôi -ED đọc là /d/ vì âm cuối của 'remain' là âm mũi 'N' có rung.",
        audioText: "remained",
        choices: [
          { id: "a", text: "Đúng" },
          { id: "b", text: "Sai" },
          { id: "c", text: "Không chắc chắn" },
        ],
        correctAnswer: "a",
        explanation:
          "Đúng — 'remain' tận cùng bằng âm mũi 'N', một âm có rung, nên -ED đọc thành /d/: 'remained' là /rɪmeɪnd/.",
        wrongAnswerExplanations: "Đây là quy tắc phát âm cố định dựa trên âm cuối của động từ gốc, không phải điều còn tùy.",
        usageTip: "Dùng khi nói 'The color remained bright after two weeks.'",
      },
      {
        id: "pr-15-8",
        type: "listening",
        badgeEmoji: "😊",
        english: "smiled",
        vietnamese: "đã mỉm cười",
        audioText: "smiled",
        choices: T_CHOICES,
        correctAnswer: "b",
        explanation:
          "'Smile' tận cùng bằng âm 'L' (có rung) → -ED đọc /d/: 'smiled' là /smaɪld/.",
        wrongAnswerExplanations:
          "Không đọc /t/ vì âm 'L' có rung. Không đọc /ɪd/ vì âm cuối không phải T hay D.",
        usageTip: "Dùng khi kể lại phản ứng của khách, ví dụ 'She smiled when she saw the result.'",
      },
      {
        id: "pr-15-9",
        type: "listening",
        badgeEmoji: "🏠",
        english: "rented",
        vietnamese: "đã thuê",
        audioText: "rented",
        choices: T_CHOICES,
        correctAnswer: "c",
        explanation:
          "'Rent' tận cùng bằng chính âm 'T' → -ED thêm hẳn một âm tiết: 'rented' đọc là /rɛntɪd/ (hai âm tiết: ren-tid).",
        wrongAnswerExplanations:
          "Không đọc /t/ hay /d/ đơn vì cần thêm âm /ɪ/ ở giữa để tách hai âm T ra cho dễ nói.",
        usageTip: "Dùng khi trò chuyện về nhà ở, ví dụ 'We rented this space two years ago.'",
      },
      {
        id: "pr-15-10",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "They invited us to the party.",
        vietnamese: "Họ đã mời chúng tôi đến bữa tiệc.",
        promptContext: "Bạn muốn nói ai đó đã được mời đến dự tiệc, dùng đúng cách phát âm đuôi -ED của 'invited'.",
        choices: [
          { id: "a", text: "They invited us to the party. (đuôi -ED đọc là /ɪd/)" },
          { id: "b", text: "They invited us to the party. (đuôi -ED đọc là /t/)" },
          { id: "c", text: "They invited us to the party. (đuôi -ED đọc là /d/)" },
        ],
        correctAnswer: "a",
        explanation:
          "'Invite' tận cùng bằng chính âm 'T' → -ED thêm hẳn một âm tiết: 'invited' đọc là /ɪnvaɪtɪd/ (ba âm tiết: in-vai-tịt).",
        wrongAnswerExplanations:
          "Đọc /t/ hay /d/ đơn đều sai vì hai âm T liền nhau rất khó nói rõ ràng, cần thêm âm /ɪ/ ở giữa để tách ra.",
        usageTip: "Dùng khi trò chuyện về các sự kiện, tiệc tùng với khách quen.",
      },
    ],
  },
];
