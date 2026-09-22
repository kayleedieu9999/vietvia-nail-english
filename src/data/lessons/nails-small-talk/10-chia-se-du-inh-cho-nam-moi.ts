import { Lesson } from "@/types/content";

/** nails-small-talk — migrated group 10 (lessons 46-50 of existing content). */
export const nailsSmallTalkGroup10: Lesson[] = [
{
    id: "st-45",
    slug: "st-45-holiday-birthday-5",
    topicId: "nails-small-talk",
    title: "Chia sẻ dự định cho năm mới",
    description: "Cách trò chuyện nhẹ nhàng về những dự định hoặc mục tiêu cho năm mới.",
    level: "situation",
    coverImage: "/images/lessons/st-45-holiday-birthday-5.jpg",
    questions: [
      {
        id: "st-45-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🎯",
        english: "I want to travel more this year.",
        vietnamese: "Năm nay tôi muốn đi du lịch nhiều hơn.",
        prompt: "Do you have any goals for this year?",
        promptVietnamese: "Năm nay bạn có mục tiêu gì không?",
        choices: [
          { id: "a", text: "I want to travel more this year." },
          { id: "b", text: "It's twenty dollars for a manicure." },
          { id: "c", text: "We open at nine every day." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi về mục tiêu năm mới, mình chia sẻ một mục tiêu cụ thể, ví dụ muốn đi du lịch nhiều hơn.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a manicure.' nói về giá dịch vụ, không liên quan đến câu hỏi về mục tiêu năm mới. 'We open at nine every day.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi được hỏi về mục tiêu hoặc dự định của mình cho năm mới.",
      },
      {
        id: "st-45-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "📝",
        english: "Have you made any New Year's resolutions?",
        vietnamese: "Bạn có đặt mục tiêu năm mới nào không?",
        promptContext:
          "Đầu năm mới, khách muốn hỏi thăm chị xem có đặt ra mục tiêu hay lời hứa gì cho năm mới không.",
        choices: [
          { id: "a", text: "Have you made any New Year's resolutions?" },
          { id: "b", text: "Your total comes to twenty dollars." },
          { id: "c", text: "We just got new nail colors in." },
        ],
        correctAnswer: "a",
        explanation:
          "Vào đầu năm mới, khách có thể hỏi thăm về mục tiêu năm mới của mình, một câu hỏi small talk rất phổ biến.",
        wrongAnswerExplanations:
          "'Your total comes to twenty dollars.' nói về giá tiền, không liên quan đến câu hỏi về mục tiêu năm mới. 'We just got new nail colors in.' nói về màu sơn mới, hoàn toàn lạc đề.",
        usageTip: "Dùng vào đầu năm mới khi muốn hỏi ai đó về mục tiêu của họ.",
      },
      {
        id: "st-45-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "💪",
        english: "I'm trying to save more money this year.",
        vietnamese: "Năm nay tôi đang cố tiết kiệm nhiều tiền hơn.",
        choices: [
          { id: "a", text: "Năm nay tôi đang cố tiết kiệm nhiều tiền hơn." },
          { id: "b", text: "Năm nay tôi sẽ chi tiêu nhiều hơn." },
          { id: "c", text: "Tôi không có mục tiêu nào cho năm nay." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ mục tiêu năm mới cụ thể, đó là tiết kiệm tiền nhiều hơn — một mục tiêu rất phổ biến vào đầu năm.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoặc không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi chia sẻ về mục tiêu tiết kiệm tiền của mình cho năm mới.",
      },
      {
        id: "st-45-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "👍",
        english: "That's a great goal, I should do that too.",
        vietnamese: "Mục tiêu hay đấy, tôi cũng nên làm vậy.",
        prompt: "I'm trying to save more money this year.",
        promptVietnamese: "Năm nay tôi đang cố tiết kiệm nhiều tiền hơn.",
        choices: [
          { id: "a", text: "That's a great goal, I should do that too." },
          { id: "b", text: "We are out of that gel color." },
          { id: "c", text: "Your appointment is confirmed now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về mục tiêu tiết kiệm tiền, khách khen ngợi và chia sẻ rằng mình cũng nên có mục tiêu giống vậy.",
        wrongAnswerExplanations:
          "'We are out of that gel color.' hoàn toàn không liên quan đến câu chuyện về mục tiêu năm mới. 'Your appointment is confirmed now.' nói về việc xác nhận hẹn, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi khen ngợi một mục tiêu tốt và muốn chia sẻ ý định làm theo.",
      },
      {
        id: "st-45-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "📊",
        english: "It's hard to stick to a goal sometimes.",
        vietnamese: "Đôi khi thật khó để giữ vững một mục tiêu.",
        prompt: "It's hard to stick to a goal ___.",
        choices: [
          { id: "a", text: "sometimes" },
          { id: "b", text: "sometime" },
          { id: "c", text: "some time" },
        ],
        correctAnswer: "a",
        explanation:
          "'Sometimes' nghĩa là 'đôi khi' — dùng đúng ở cuối câu để nói về việc thỉnh thoảng gặp khó khăn khi giữ mục tiêu.",
        wrongAnswerExplanations:
          "'Sometime' nghĩa là 'lúc nào đó', không phù hợp với ý nghĩa 'đôi khi' trong câu này. 'Some time' nghĩa là 'một khoảng thời gian', hoàn toàn khác với ý nghĩa cần diễn đạt.",
        usageTip: "Dùng khi chia sẻ rằng đôi khi việc giữ vững một mục tiêu năm mới không dễ dàng.",
      },
      {
        id: "st-45-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🏃",
        english: "My goal is to exercise more this year.",
        vietnamese: "Mục tiêu của tôi năm nay là tập thể dục nhiều hơn.",
        promptContext:
          "Khách chia sẻ với chị rằng mục tiêu năm nay của khách là tập thể dục thường xuyên hơn.",
        choices: [
          { id: "a", text: "My goal is to exercise more this year." },
          { id: "b", text: "The nail file is on the table." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khách chia sẻ về mục tiêu tập thể dục của mình cho năm mới, một mục tiêu rất phổ biến và tích cực.",
        wrongAnswerExplanations:
          "'The nail file is on the table.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi chia sẻ về mục tiêu tập thể dục của mình cho năm mới.",
      },
      {
        id: "st-45-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "Starting small is always a good way to begin.",
        vietnamese: "Bắt đầu từ những việc nhỏ luôn là cách hay để khởi đầu.",
        audioText: "Starting small is always a good way to begin.",
        choices: [
          { id: "a", text: "Bắt đầu từ những việc nhỏ luôn là cách hay để khởi đầu." },
          { id: "b", text: "Bạn nên bắt đầu với mục tiêu lớn ngay." },
          { id: "c", text: "Không nên đặt mục tiêu gì cả." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này chia sẻ lời khuyên tích cực rằng bắt đầu từ những bước nhỏ là cách tốt để đạt được mục tiêu lớn.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi khuyên ai đó nên bắt đầu mục tiêu năm mới từ những bước nhỏ.",
      },
      {
        id: "st-45-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "That's good advice, I'll try to remember that.",
        vietnamese: "Lời khuyên hay đấy, tôi sẽ cố nhớ điều đó.",
        prompt: "Starting small is always a good way to begin.",
        promptVietnamese: "Bắt đầu từ những việc nhỏ luôn là cách hay để khởi đầu.",
        choices: [
          { id: "a", text: "That's good advice, I'll try to remember that." },
          { id: "b", text: "We changed our shop hours today." },
          { id: "c", text: "Your total comes to fifteen dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nhận được một lời khuyên hữu ích, khách cảm ơn và nói sẽ cố gắng nhớ và áp dụng lời khuyên đó.",
        wrongAnswerExplanations:
          "'We changed our shop hours today.' hoàn toàn không liên quan đến lời khuyên về mục tiêu. 'Your total comes to fifteen dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi nhận được một lời khuyên hữu ích và muốn nói sẽ cố gắng áp dụng nó.",
      },
      {
        id: "st-45-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌱",
        english: "Every small step counts toward your goal.",
        vietnamese: "Mỗi bước nhỏ đều có giá trị hướng đến mục tiêu của bạn.",
        promptContext: "Chloe muốn động viên khách rằng mỗi bước nhỏ đều đóng góp vào việc đạt được mục tiêu lớn.",
        choices: [
          { id: "a", text: "Every small step counts toward your goal." },
          { id: "b", text: "Every small step count toward your goal." },
          { id: "c", text: "Every small steps counts toward your goal." },
        ],
        correctAnswer: "a",
        explanation:
          "'Every' luôn đi với danh từ số ít 'step' và động từ số ít 'counts' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'Every small step count toward your goal.' sai vì chủ ngữ số ít phải đi với 'counts', không dùng 'count'. 'Every small steps counts toward your goal.' sai vì 'every' luôn đi với danh từ số ít 'step', không phải 'steps'.",
        usageTip: "Dùng khi động viên ai đó rằng mỗi bước nhỏ đều có giá trị trong việc đạt mục tiêu.",
      },
      {
        id: "st-45-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "A new year always feels like a fresh start.",
        vietnamese: "Một năm mới luôn mang cảm giác như một khởi đầu mới.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về việc mỗi năm mới đều mang lại cảm giác được bắt đầu lại từ đầu.",
        choices: [
          { id: "a", text: "A new year always feels like a fresh start." },
          { id: "b", text: "A new year always feel like a fresh start." },
          { id: "c", text: "A new year always feels like fresh a start." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'a new year' là số ít nên động từ phải chia là 'feels' — câu này đúng ngữ pháp hoàn toàn.",
        wrongAnswerExplanations:
          "'A new year always feel like a fresh start.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít. 'A new year always feels like fresh a start.' sai vì đặt mạo từ 'a' sai vị trí, phải đứng trước tính từ 'fresh'.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ tích cực về ý nghĩa của năm mới.",
      },
    ],
  },
{
    id: "st-46",
    slug: "st-46-ket-thuc-1",
    topicId: "nails-small-talk",
    title: "Chuyển từ trò chuyện sang công việc",
    description: "Cách chuyển nhẹ nhàng từ trò chuyện sang tập trung vào dịch vụ nails.",
    level: "situation",
    coverImage: "/images/lessons/st-46-ket-thuc-1.jpg",
    questions: [
      {
        id: "st-46-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "💅",
        english: "Anyway, let's get started on your nails.",
        vietnamese: "Thôi, mình bắt đầu làm móng cho bạn nhé.",
        prompt: "That's such a fun story!",
        promptVietnamese: "Câu chuyện đó vui thật đấy!",
        choices: [
          { id: "a", text: "Anyway, let's get started on your nails." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau khi trò chuyện vui vẻ, mình có thể nhẹ nhàng chuyển sang công việc bằng từ 'anyway' để bắt đầu làm nails cho khách.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không phải cách chuyển chủ đề tự nhiên. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn nhẹ nhàng chuyển từ trò chuyện sang bắt đầu công việc.",
      },
      {
        id: "st-46-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "⏰",
        english: "Let's go ahead and pick your color now.",
        vietnamese: "Giờ mình chọn màu sơn cho bạn nhé.",
        promptContext:
          "Chị và khách đã trò chuyện khá lâu, và chị muốn nhẹ nhàng chuyển sang bước tiếp theo là chọn màu sơn.",
        choices: [
          { id: "a", text: "Let's go ahead and pick your color now." },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi đã trò chuyện đủ lâu, mình có thể nhẹ nhàng chuyển sang bước tiếp theo trong dịch vụ, ví dụ chọn màu sơn.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, chưa hợp lúc chuyển chủ đề. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi muốn nhẹ nhàng chuyển từ trò chuyện sang bước tiếp theo của dịch vụ.",
      },
      {
        id: "st-46-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🙂",
        english: "Let's get you all set up here.",
        vietnamese: "Mình chuẩn bị mọi thứ cho bạn ở đây nhé.",
        choices: [
          { id: "a", text: "Mình chuẩn bị mọi thứ cho bạn ở đây nhé." },
          { id: "b", text: "Chúng tôi không còn chỗ trống nào." },
          { id: "c", text: "Bạn cần đợi thêm mười phút nữa." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này dùng để nhẹ nhàng bắt đầu chuẩn bị dịch vụ cho khách sau khi đã trò chuyện xong phần chào hỏi.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói về việc hết chỗ hoặc phải đợi — không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi muốn bắt đầu chuẩn bị dịch vụ cho khách sau phần trò chuyện mở đầu.",
      },
      {
        id: "st-46-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "Sounds good, I'm ready whenever you are.",
        vietnamese: "Được đó, tôi sẵn sàng khi nào bạn muốn.",
        prompt: "Let's get you all set up here.",
        promptVietnamese: "Mình chuẩn bị mọi thứ cho bạn ở đây nhé.",
        choices: [
          { id: "a", text: "Sounds good, I'm ready whenever you are." },
          { id: "b", text: "We take walk-ins every day." },
          { id: "c", text: "This gel color dries fast." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được thông báo chuẩn bị bắt đầu dịch vụ, khách đồng ý và nói mình đã sẵn sàng.",
        wrongAnswerExplanations:
          "'We take walk-ins every day.' nói về việc nhận khách không hẹn, không liên quan đến việc chuẩn bị. 'This gel color dries fast.' nói về sơn gel khô nhanh, hoàn toàn lạc đề.",
        usageTip: "Dùng khi khách đồng ý và thể hiện sự sẵn sàng để bắt đầu dịch vụ.",
      },
      {
        id: "st-46-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "👌",
        english: "Let's go ahead and get started now.",
        vietnamese: "Giờ mình bắt đầu luôn nhé.",
        prompt: "Let's go ahead and get ___ now.",
        choices: [
          { id: "a", text: "started" },
          { id: "b", text: "start" },
          { id: "c", text: "starting" },
        ],
        correctAnswer: "a",
        explanation:
          "'Get started' là cụm cố định nghĩa là 'bắt đầu' — dùng dạng quá khứ phân từ 'started' sau 'get' là đúng.",
        wrongAnswerExplanations:
          "'Start' sai vì cụm cố định là 'get started', không dùng nguyên mẫu trực tiếp sau 'get' theo cách này. 'Starting' sai vì không đúng với cụm cố định 'get started'.",
        usageTip: "Dùng khi muốn nhẹ nhàng bắt đầu công việc sau khi đã trò chuyện với khách.",
      },
      {
        id: "st-46-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "💬",
        english: "We can keep chatting while I work, if you'd like.",
        vietnamese: "Chúng ta có thể tiếp tục trò chuyện trong lúc tôi làm, nếu bạn muốn.",
        promptContext:
          "Chị chuẩn bị bắt đầu làm nails cho khách, và muốn nói rằng hai người vẫn có thể tiếp tục trò chuyện trong lúc làm.",
        choices: [
          { id: "a", text: "We can keep chatting while I work, if you'd like." },
          { id: "b", text: "The nail file is on the table." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi bắt đầu công việc, mình có thể nói rằng cuộc trò chuyện vẫn có thể tiếp tục, giúp khách cảm thấy thoải mái.",
        wrongAnswerExplanations:
          "'The nail file is on the table.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi muốn nói rằng cuộc trò chuyện có thể tiếp tục trong lúc làm dịch vụ.",
      },
      {
        id: "st-46-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "Let me know if you want to keep talking.",
        vietnamese: "Cho tôi biết nếu bạn muốn tiếp tục nói chuyện nha.",
        audioText: "Let me know if you want to keep talking.",
        choices: [
          { id: "a", text: "Cho tôi biết nếu bạn muốn tiếp tục nói chuyện nha." },
          { id: "b", text: "Bạn không được nói chuyện trong lúc làm." },
          { id: "c", text: "Tôi không muốn nói chuyện nữa." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này cho khách biết rằng họ có thể tiếp tục trò chuyện nếu muốn, thể hiện sự thoải mái và linh hoạt.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi muốn cho khách biết rằng họ có thể tiếp tục trò chuyện trong lúc làm dịch vụ.",
      },
      {
        id: "st-46-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😄",
        english: "I think I'll just relax for now, thank you.",
        vietnamese: "Tôi nghĩ tôi sẽ nghỉ ngơi thôi, cảm ơn bạn.",
        prompt: "Let me know if you want to keep talking.",
        promptVietnamese: "Cho tôi biết nếu bạn muốn tiếp tục nói chuyện nha.",
        choices: [
          { id: "a", text: "I think I'll just relax for now, thank you." },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi có muốn tiếp tục nói chuyện không, khách có thể chọn nghỉ ngơi và cảm ơn vì sự quan tâm.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến câu hỏi này. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi khách muốn thư giãn im lặng thay vì tiếp tục trò chuyện.",
      },
      {
        id: "st-46-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "🌿",
        english: "Of course, just relax and enjoy.",
        vietnamese: "Được chứ, bạn cứ thư giãn và tận hưởng nha.",
        promptContext: "Chloe muốn nói với khách rằng họ có thể yên tâm thư giãn khi không muốn nói chuyện nữa.",
        choices: [
          { id: "a", text: "Of course, just relax and enjoy." },
          { id: "b", text: "Of course, just relaxing and enjoy." },
          { id: "c", text: "Of course, just relax and enjoying." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau 'just' dùng động từ nguyên mẫu, nên 'relax and enjoy' là đúng — câu này đúng ngữ pháp và tự nhiên.",
        wrongAnswerExplanations:
          "'Of course, just relaxing and enjoy.' sai vì không đồng nhất dạng động từ, 'relaxing' không khớp với 'enjoy'. 'Of course, just relax and enjoying.' sai vì 'enjoying' không khớp dạng với 'relax' ở đầu câu.",
        usageTip: "Dùng khi muốn nói với khách rằng họ có thể yên tâm thư giãn trong lúc làm dịch vụ.",
      },
      {
        id: "st-46-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "✨",
        english: "It's nice to talk, but it's okay to relax too.",
        vietnamese: "Trò chuyện thì vui, nhưng thư giãn cũng không sao cả.",
        promptContext: "Chloe muốn nói rằng dù trò chuyện vui, khách cũng hoàn toàn có thể chọn thư giãn im lặng nếu muốn.",
        choices: [
          { id: "a", text: "It's nice to talk, but it's okay to relax too." },
          { id: "b", text: "It's nice talk, but it's okay to relax too." },
          { id: "c", text: "It's nice to talk, but it's okay relax too." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng giữ nguyên cấu trúc 'it's nice to + động từ' và 'it's okay to + động từ' đầy đủ chữ 'to' ở cả hai vị trí.",
        wrongAnswerExplanations:
          "'It's nice talk, but it's okay to relax too.' sai vì thiếu chữ 'to' trước 'talk'. 'It's nice to talk, but it's okay relax too.' sai vì thiếu chữ 'to' trước 'relax'.",
        usageTip: "Dùng khi muốn nói rằng cả trò chuyện và thư giãn im lặng đều là lựa chọn tốt cho khách.",
      },
    ],
  },
{
    id: "st-48",
    slug: "st-48-ket-thuc-3",
    topicId: "nails-small-talk",
    title: "Xin lỗi vì phải tạm dừng trò chuyện",
    description: "Cách xin lỗi nhẹ nhàng khi cần tạm dừng trò chuyện để tập trung làm việc.",
    level: "situation",
    coverImage: "/images/lessons/st-48-ket-thuc-3.jpg",
    questions: [
      {
        id: "st-48-1",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🤫",
        english: "Sorry, I need to focus on this part for a second.",
        vietnamese: "Xin lỗi, tôi cần tập trung phần này một chút.",
        prompt: "So then what happened next?",
        promptVietnamese: "Vậy rồi chuyện gì xảy ra tiếp theo?",
        choices: [
          { id: "a", text: "Sorry, I need to focus on this part for a second." },
          { id: "b", text: "It's twenty dollars for a fill-in." },
          { id: "c", text: "We're open every day this week." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi cần tập trung vào một chi tiết khó trong lúc làm nails, mình xin lỗi nhẹ nhàng và xin khách chờ một chút.",
        wrongAnswerExplanations:
          "'It's twenty dollars for a fill-in.' nói về giá dịch vụ, không liên quan đến việc xin tạm dừng trò chuyện. 'We're open every day this week.' nói về giờ mở cửa, hoàn toàn lạc đề.",
        usageTip: "Dùng khi cần tạm dừng trò chuyện để tập trung vào một chi tiết khó trong lúc làm việc.",
      },
      {
        id: "st-48-2",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "🎯",
        english: "Give me just a moment to finish this line.",
        vietnamese: "Cho tôi một chút để hoàn thành đường vẽ này.",
        promptContext:
          "Chị đang vẽ một chi tiết nail art khó, và muốn xin khách một chút thời gian yên tĩnh để hoàn thành.",
        choices: [
          { id: "a", text: "Give me just a moment to finish this line." },
          { id: "b", text: "Your total is thirty dollars today." },
          { id: "c", text: "We only have one chair open now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi cần tập trung vào một chi tiết khó, mình xin khách một chút thời gian yên tĩnh để hoàn thành tốt.",
        wrongAnswerExplanations:
          "'Your total is thirty dollars today.' nói về giá tiền, chưa hợp lúc xin tạm dừng trò chuyện. 'We only have one chair open now.' nói về việc còn một ghế trống, hoàn toàn lạc đề.",
        usageTip: "Dùng khi cần một chút thời gian yên tĩnh để hoàn thành một chi tiết khó.",
      },
      {
        id: "st-48-3",
        type: "english_to_vietnamese",
        speaker: "Chloe",
        badgeEmoji: "🎨",
        english: "This part needs a steady hand, one second.",
        vietnamese: "Phần này cần tay chắc, chờ một chút nha.",
        choices: [
          { id: "a", text: "Phần này cần tay chắc, chờ một chút nha." },
          { id: "b", text: "Phần này đã xong hoàn toàn rồi." },
          { id: "c", text: "Tôi không cần tập trung vào phần này." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giải thích rằng phần đang làm cần sự tập trung và tay chắc, xin khách chờ một chút.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại nói ngược nghĩa hoàn toàn, không đúng với nội dung câu tiếng Anh này.",
        usageTip: "Dùng khi cần giải thích cho khách vì sao mình cần im lặng tập trung một chút.",
      },
      {
        id: "st-48-4",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "😊",
        english: "No worries, take all the time you need.",
        vietnamese: "Không sao đâu, bạn cứ làm cho kỹ.",
        prompt: "This part needs a steady hand, one second.",
        promptVietnamese: "Phần này cần tay chắc, chờ một chút nha.",
        choices: [
          { id: "a", text: "No worries, take all the time you need." },
          { id: "b", text: "We take walk-ins every day." },
          { id: "c", text: "This gel color dries fast." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được xin chờ để tập trung, khách trấn an rằng không sao và cứ làm cho kỹ, không cần vội.",
        wrongAnswerExplanations:
          "'We take walk-ins every day.' nói về việc nhận khách không hẹn, không liên quan đến việc xin chờ. 'This gel color dries fast.' nói về sơn gel khô nhanh, hoàn toàn lạc đề.",
        usageTip: "Dùng khi trấn an ai đó rằng không cần vội và cứ làm cho kỹ.",
      },
      {
        id: "st-48-5",
        type: "fill_blank",
        speaker: "Chloe",
        badgeEmoji: "🖌️",
        english: "Okay, all done! Sorry about that.",
        vietnamese: "Được rồi, xong rồi! Xin lỗi vì lúc đó nha.",
        prompt: "Okay, all done! Sorry ___ that.",
        choices: [
          { id: "a", text: "about" },
          { id: "b", text: "for" },
          { id: "c", text: "of" },
        ],
        correctAnswer: "a",
        explanation:
          "'Sorry about that' là cụm cố định nghĩa là 'xin lỗi về điều đó' — dùng 'about' là đúng và tự nhiên nhất.",
        wrongAnswerExplanations:
          "'Sorry for that' cũng có thể nghe được nhưng không tự nhiên bằng 'sorry about that' trong ngữ cảnh xin lỗi vì đã im lặng. 'Sorry of that' không phải cách nói đúng trong tiếng Anh.",
        usageTip: "Dùng khi xin lỗi nhẹ nhàng sau khi đã tạm dừng trò chuyện để tập trung làm việc.",
      },
      {
        id: "st-48-6",
        type: "situation_response",
        speaker: "Khách",
        badgeEmoji: "👌",
        english: "It's totally fine, I understand you were focused.",
        vietnamese: "Không sao cả, tôi hiểu bạn đang tập trung.",
        promptContext:
          "Chị vừa xin lỗi vì đã im lặng một chút để tập trung vẽ, và khách muốn trấn an rằng không có gì phải lo lắng.",
        choices: [
          { id: "a", text: "It's totally fine, I understand you were focused." },
          { id: "b", text: "The nail file is on the table." },
          { id: "c", text: "We are closing the shop soon." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nhận được lời xin lỗi, khách trấn an rằng không có gì phải lo và hiểu được lý do vì sao mình cần tập trung.",
        wrongAnswerExplanations:
          "'The nail file is on the table.' nói về vị trí dụng cụ giũa móng, hoàn toàn không liên quan. 'We are closing the shop soon.' nói về việc đóng cửa tiệm, không phải câu trả lời phù hợp.",
        usageTip: "Dùng khi trấn an ai đó rằng mình hoàn toàn hiểu và không phiền vì họ cần tập trung.",
      },
      {
        id: "st-48-7",
        type: "listening",
        speaker: "Chloe",
        badgeEmoji: "🎧",
        english: "I just want to make sure it looks perfect.",
        vietnamese: "Tôi chỉ muốn chắc chắn nó thật hoàn hảo.",
        audioText: "I just want to make sure it looks perfect.",
        choices: [
          { id: "a", text: "Tôi chỉ muốn chắc chắn nó thật hoàn hảo." },
          { id: "b", text: "Tôi không quan tâm nó đẹp hay không." },
          { id: "c", text: "Tôi sẽ làm nhanh cho xong." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này giải thích rằng mình dành thời gian tập trung vì muốn kết quả thật hoàn hảo cho khách.",
        wrongAnswerExplanations:
          "Hai đáp án còn lại mang nghĩa ngược lại hoàn toàn với câu nghe được.",
        usageTip: "Dùng khi giải thích rằng mình dành thời gian tập trung vì muốn kết quả tốt nhất.",
      },
      {
        id: "st-48-8",
        type: "conversation_response",
        speaker: "Khách",
        badgeEmoji: "🥰",
        english: "I really appreciate that about you.",
        vietnamese: "Tôi thật sự trân trọng điều đó ở bạn.",
        prompt: "I just want to make sure it looks perfect.",
        promptVietnamese: "Tôi chỉ muốn chắc chắn nó thật hoàn hảo.",
        choices: [
          { id: "a", text: "I really appreciate that about you." },
          { id: "b", text: "We changed our menu of services." },
          { id: "c", text: "Your total comes to twenty dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi nghe về sự tận tâm trong công việc, khách thể hiện sự trân trọng đối với thái độ làm việc chăm chút đó.",
        wrongAnswerExplanations:
          "'We changed our menu of services.' hoàn toàn không liên quan đến câu chuyện về sự tận tâm. 'Your total comes to twenty dollars.' nói về giá tiền, không phải câu đáp lại phù hợp.",
        usageTip: "Dùng khi trân trọng sự tận tâm, chăm chút trong công việc của ai đó.",
      },
      {
        id: "st-48-9",
        type: "vietnamese_to_english",
        speaker: "Chloe",
        badgeEmoji: "💎",
        english: "Your nails are always my top priority.",
        vietnamese: "Móng của bạn luôn là điều tôi quan tâm hàng đầu.",
        promptContext: "Chloe muốn nói với khách rằng chất lượng công việc luôn là điều mình đặt lên hàng đầu.",
        choices: [
          { id: "a", text: "Your nails are always my top priority." },
          { id: "b", text: "Your nails is always my top priority." },
          { id: "c", text: "Your nails are always my top priorities." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'your nails' là số nhiều nên động từ phải chia là 'are', và 'priority' ở dạng số ít vì chỉ có một điều ưu tiên hàng đầu.",
        wrongAnswerExplanations:
          "'Your nails is always my top priority.' sai vì chủ ngữ số nhiều phải đi với 'are', không dùng 'is'. 'Your nails are always my top priorities.' sai vì 'top priority' thường dùng số ít khi nói về một điều ưu tiên nhất.",
        usageTip: "Dùng khi muốn khẳng định với khách rằng chất lượng dịch vụ luôn được đặt lên hàng đầu.",
      },
      {
        id: "st-48-10",
        type: "choose_best_sentence",
        speaker: "Chloe",
        badgeEmoji: "🌟",
        english: "Good work takes a little patience sometimes.",
        vietnamese: "Công việc tốt đôi khi cần một chút kiên nhẫn.",
        promptContext: "Chloe muốn nói một câu ý nghĩa về việc làm việc chất lượng đôi khi cần thời gian và sự kiên nhẫn.",
        choices: [
          { id: "a", text: "Good work takes a little patience sometimes." },
          { id: "b", text: "Good work take a little patience sometimes." },
          { id: "c", text: "Good work takes a little patiences sometimes." },
        ],
        correctAnswer: "a",
        explanation:
          "Chủ ngữ 'good work' là số ít nên động từ phải chia là 'takes', và 'patience' là danh từ không đếm được nên không thêm 's'.",
        wrongAnswerExplanations:
          "'Good work take a little patience sometimes.' sai vì thiếu 's' ở động từ khi chủ ngữ số ít. 'Good work takes a little patiences sometimes.' sai vì 'patience' là danh từ không đếm được, không thêm 's'.",
        usageTip: "Dùng khi muốn chia sẻ một suy nghĩ ý nghĩa về việc làm việc chất lượng cần thời gian và kiên nhẫn.",
      },
    ],
  },
];
