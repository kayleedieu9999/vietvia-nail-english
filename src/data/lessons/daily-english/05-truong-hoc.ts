import { Lesson } from "@/types/content";

export const dailyEnglishGroup05: Lesson[] = [
  {
    id: "de-21",
    slug: "de-21-don-con-noi-chuyen-co-giao-1",
    topicId: "daily-english",
    title: "Nói chuyện với cô giáo lúc đón con",
    description: "Học cách trò chuyện ngắn với giáo viên khi đón con ở trường.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-21-1",
        type: "situation_response",
        badgeEmoji: "🏫",
        english: "Hi, how was my son's day today?",
        vietnamese: "Chào cô, hôm nay con trai tôi học thế nào ạ?",
        promptContext:
          "Bạn đến đón con và gặp cô giáo ở cửa lớp. Bạn muốn hỏi thăm về ngày học của con.",
        choices: [
          { id: "a", text: "Hi, how was my son's day today?" },
          { id: "b", text: "Hi, how was your vacation?" },
          { id: "c", text: "Hi, how was the traffic today?" },
        ],
        correctAnswer: "a",
        explanation:
          "'How was my son's day' nghĩa là 'con trai tôi học thế nào' — đúng câu hỏi khi đón con và muốn biết tình hình học tập trong ngày.",
        wrongAnswerExplanations:
          "'Hi, how was your vacation?' và 'Hi, how was the traffic today?' không liên quan đến việc hỏi thăm về con ở trường.",
        usageTip: "Dùng khi bạn đón con ở trường và muốn hỏi thăm cô giáo về ngày học của con.",
      },
      {
        id: "de-21-2",
        type: "conversation_response",
        speaker: "Cô giáo",
        badgeEmoji: "😊",
        english: "He had a great day, he did well in math.",
        vietnamese: "Bé có một ngày rất tốt, bé làm bài toán rất giỏi.",
        prompt: "Hi, how was my son's day today?",
        promptVietnamese: "Chào cô, hôm nay con trai tôi học thế nào ạ?",
        choices: [
          { id: "a", text: "He had a great day, he did well in math." },
          { id: "b", text: "The bus will arrive in ten minutes." },
          { id: "c", text: "The school is closed tomorrow." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi phụ huynh hỏi về ngày học của con, cô giáo nên trả lời cụ thể về hoạt động hoặc kết quả học tập trong ngày.",
        wrongAnswerExplanations:
          "'The bus will arrive in ten minutes.' và 'The school is closed tomorrow.' đều không trả lời đúng vào câu hỏi về việc học của con.",
        usageTip: "Dùng khi cô giáo báo cáo tình hình học tập của học sinh cho phụ huynh.",
      },
      {
        id: "de-21-3",
        type: "vietnamese_to_english",
        badgeEmoji: "📚",
        english: "Does he need help with homework tonight?",
        vietnamese: "Tối nay bé có cần giúp làm bài tập không ạ?",
        promptContext:
          "Bạn muốn hỏi cô giáo xem con mình có bài tập cần được hỗ trợ ở nhà tối nay không.",
        choices: [
          { id: "a", text: "Does he need help with homework tonight?" },
          { id: "b", text: "Does he need a new backpack tonight?" },
          { id: "c", text: "Does he need a nap tonight?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Help with homework' nghĩa là 'giúp làm bài tập' — đúng câu hỏi khi bạn quan tâm đến việc học của con ở nhà.",
        wrongAnswerExplanations:
          "'Does he need a new backpack tonight?' và 'Does he need a nap tonight?' không liên quan đến việc hỏi về bài tập về nhà.",
        usageTip: "Dùng khi bạn muốn hỏi cô giáo về bài tập về nhà của con.",
      },
      {
        id: "de-21-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "He made a lot of new friends this week.",
        vietnamese: "Tuần này bé kết bạn được với nhiều bạn mới.",
        prompt: "He made a lot of new ___ this week.",
        choices: [
          { id: "a", text: "friends" },
          { id: "b", text: "homework" },
          { id: "c", text: "lunches" },
        ],
        correctAnswer: "a",
        explanation:
          "'Made new friends' nghĩa là 'kết bạn mới' — đúng cụm từ khi nói về việc trẻ hòa nhập với bạn học.",
        wrongAnswerExplanations:
          "'Homework' (bài tập) và 'lunches' (bữa trưa) không phù hợp về nghĩa trong câu nói về việc kết bạn.",
        usageTip: "Dùng để hiểu khi cô giáo báo về việc con bạn hòa nhập tốt với bạn học.",
      },
      {
        id: "de-21-5",
        type: "conversation_response",
        speaker: "Cô giáo",
        badgeEmoji: "🖍️",
        english: "He needs to bring more crayons tomorrow.",
        vietnamese: "Ngày mai bé cần mang thêm bút sáp màu ạ.",
        prompt: "Is there anything he needs for tomorrow?",
        promptVietnamese: "Ngày mai bé có cần chuẩn bị gì thêm không ạ?",
        choices: [
          { id: "a", text: "He needs to bring more crayons tomorrow." },
          { id: "b", text: "He needs to stay home tomorrow." },
          { id: "c", text: "He needs a doctor's appointment tomorrow." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi phụ huynh hỏi về đồ dùng cần chuẩn bị, cô giáo nên trả lời cụ thể món đồ cần mang theo.",
        wrongAnswerExplanations:
          "'He needs to stay home tomorrow.' và 'He needs a doctor's appointment tomorrow.' đều không trả lời đúng câu hỏi về đồ dùng học tập.",
        usageTip: "Dùng khi cô giáo thông báo về đồ dùng học sinh cần mang theo ngày hôm sau.",
      },
      {
        id: "de-21-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "He was a little quiet today, but he's fine.",
        vietnamese: "Hôm nay bé hơi trầm một chút, nhưng bé vẫn ổn.",
        audioText: "He was a little quiet today, but he's fine.",
        choices: [
          { id: "a", text: "Hôm nay bé hơi trầm một chút, nhưng bé vẫn ổn." },
          { id: "b", text: "Hôm nay bé bị sốt nặng, cần đi khám ngay." },
          { id: "c", text: "Hôm nay bé nghỉ học cả ngày." },
        ],
        correctAnswer: "a",
        explanation:
          "'A little quiet today, but he's fine' nghĩa là 'hơi trầm một chút, nhưng vẫn ổn' — thông báo nhẹ nhàng về tâm trạng của bé trong ngày.",
        wrongAnswerExplanations:
          "Câu gốc không nói bé bị sốt nặng hay nghỉ học cả ngày, chỉ nói bé hơi trầm nhưng vẫn ổn.",
        usageTip: "Dùng để hiểu khi cô giáo nhận xét nhẹ nhàng về tâm trạng của học sinh trong ngày.",
      },
      {
        id: "de-21-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🎨",
        english: "He really enjoyed art class today.",
        vietnamese: "Hôm nay bé rất thích giờ học vẽ.",
        prompt: "He really enjoyed art class today.",
        choices: [
          { id: "a", text: "Hôm nay bé rất thích giờ học vẽ." },
          { id: "b", text: "Hôm nay bé không thích giờ ăn trưa." },
          { id: "c", text: "Hôm nay bé mệt vì giờ thể dục." },
        ],
        correctAnswer: "a",
        explanation:
          "'Enjoyed art class' nghĩa là 'thích giờ học vẽ' — câu này chia sẻ về hoạt động bé yêu thích trong ngày.",
        wrongAnswerExplanations:
          "Câu gốc không nói về giờ ăn trưa hay giờ thể dục, chỉ nói về việc bé thích giờ học vẽ.",
        usageTip: "Dùng để hiểu khi cô giáo chia sẻ về hoạt động con bạn yêu thích ở trường.",
      },
      {
        id: "de-21-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Could you let me know if he has any trouble in class?",
        vietnamese: "Cô có thể cho tôi biết nếu bé gặp khó khăn gì trong lớp không ạ?",
        promptContext:
          "Bạn muốn nhờ cô giáo thông báo cho mình nếu con có gặp vấn đề gì trong lớp học.",
        choices: [
          { id: "a", text: "Could you let me know if he has any trouble in class?" },
          { id: "b", text: "Could you let me know if he trouble has any in class?" },
          { id: "c", text: "Could you let know me if he has any trouble in class?" },
        ],
        correctAnswer: "a",
        explanation:
          "Trật tự đúng là 'let me know' và 'he has any trouble' — chủ ngữ trước động từ trong mệnh đề 'if'.",
        wrongAnswerExplanations:
          "'...if he trouble has any in class?' đảo sai vị trí động từ 'has'. 'Could you let know me...' đặt sai vị trí 'me' sau 'let know'.",
        usageTip: "Dùng khi nhờ giáo viên thông báo nếu con bạn gặp khó khăn trong lớp học.",
      },
      {
        id: "de-21-9",
        type: "situation_response",
        badgeEmoji: "🙏",
        english: "Thank you for taking such good care of him.",
        vietnamese: "Cảm ơn cô đã chăm sóc bé chu đáo như vậy.",
        promptContext:
          "Sau khi nghe cô giáo báo cáo tốt về con, bạn muốn cảm ơn sự chăm sóc của cô.",
        choices: [
          { id: "a", text: "Thank you for taking such good care of him." },
          { id: "b", text: "Thank you for the free lunch today." },
          { id: "c", text: "Thank you for canceling class tomorrow." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được chăm sóc con tốt, câu cảm ơn tự nhiên nhất là nói đúng vào sự chăm sóc chu đáo của giáo viên.",
        wrongAnswerExplanations:
          "'Thank you for the free lunch today.' và 'Thank you for canceling class tomorrow.' đều không liên quan đến việc cảm ơn sự chăm sóc.",
        usageTip: "Dùng để cảm ơn giáo viên đã chăm sóc con bạn tốt ở trường.",
      },
      {
        id: "de-21-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "See you tomorrow, have a good evening.",
        vietnamese: "Hẹn gặp lại cô ngày mai, chúc cô buổi tối vui vẻ.",
        promptContext:
          "Trước khi rời trường, bạn muốn chào tạm biệt cô giáo một cách lịch sự.",
        choices: [
          { id: "a", text: "See you tomorrow, have a good evening." },
          { id: "b", text: "See you tomorrow, don't be late again." },
          { id: "c", text: "See you tomorrow, pay the school fee." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi tạm biệt cô giáo, câu nói lịch sự và tự nhiên nhất là chúc buổi tối vui vẻ và hẹn gặp lại ngày mai.",
        wrongAnswerExplanations:
          "'See you tomorrow, don't be late again.' và 'See you tomorrow, pay the school fee.' đều nghe không lịch sự, không phù hợp để chào tạm biệt.",
        usageTip: "Dùng để chào tạm biệt cô giáo một cách lịch sự khi rời trường.",
      },
    ],
  },
  {
    id: "de-22",
    slug: "de-22-goi-bao-nghi-hoc-1",
    topicId: "daily-english",
    title: "Gọi điện báo con nghỉ học",
    description: "Học cách gọi điện thoại đến trường để báo con bị bệnh, nghỉ học.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-22-1",
        type: "situation_response",
        badgeEmoji: "📞",
        english: "I'm calling to report my daughter is absent today.",
        vietnamese: "Tôi gọi để báo con gái tôi nghỉ học hôm nay.",
        promptContext:
          "Con bạn bị ốm và không thể đến trường, nên bạn gọi điện đến văn phòng trường để báo nghỉ.",
        choices: [
          { id: "a", text: "I'm calling to report my daughter is absent today." },
          { id: "b", text: "I'm calling to sign my daughter up for school." },
          { id: "c", text: "I'm calling to pick up my daughter early." },
        ],
        correctAnswer: "a",
        explanation:
          "'Report absent' nghĩa là 'báo nghỉ học' — đúng câu mở đầu khi gọi điện thông báo con không đến trường.",
        wrongAnswerExplanations:
          "'I'm calling to sign my daughter up for school.' và 'I'm calling to pick up my daughter early.' đều không đúng với việc báo nghỉ học vì ốm.",
        usageTip: "Dùng khi bạn gọi điện đến trường để báo con nghỉ học vì lý do sức khỏe.",
      },
      {
        id: "de-22-2",
        type: "conversation_response",
        speaker: "Nhân viên văn phòng",
        badgeEmoji: "📋",
        english: "What's the reason for her absence?",
        vietnamese: "Lý do bé nghỉ học là gì vậy ạ?",
        prompt: "I'm calling to report my daughter is absent today.",
        promptVietnamese: "Tôi gọi để báo con gái tôi nghỉ học hôm nay.",
        choices: [
          { id: "a", text: "What's the reason for her absence?" },
          { id: "b", text: "What time does school start?" },
          { id: "c", text: "What grade is she in?" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi phụ huynh báo nghỉ học, nhân viên văn phòng thường hỏi lý do để ghi vào hồ sơ điểm danh.",
        wrongAnswerExplanations:
          "'What time does school start?' và 'What grade is she in?' đều là những câu hỏi có thể hỏi sau, không phải câu đầu tiên khi báo nghỉ.",
        usageTip: "Dùng khi nhân viên trường cần biết lý do học sinh nghỉ học.",
      },
      {
        id: "de-22-3",
        type: "vietnamese_to_english",
        badgeEmoji: "🤒",
        english: "She has a fever and a sore throat.",
        vietnamese: "Bé bị sốt và đau họng.",
        promptContext:
          "Bạn muốn giải thích lý do cụ thể vì sao con bạn nghỉ học hôm nay là do bị sốt và đau họng.",
        choices: [
          { id: "a", text: "She has a fever and a sore throat." },
          { id: "b", text: "She has a test and a project." },
          { id: "c", text: "She has a new backpack and shoes." },
        ],
        correctAnswer: "a",
        explanation:
          "'Fever and a sore throat' nghĩa là 'sốt và đau họng' — đúng câu để giải thích lý do bé nghỉ học vì bệnh.",
        wrongAnswerExplanations:
          "'She has a test and a project.' và 'She has a new backpack and shoes.' đều không liên quan đến lý do sức khỏe khiến bé nghỉ học.",
        usageTip: "Dùng khi giải thích triệu chứng bệnh cụ thể khiến con bạn phải nghỉ học.",
      },
      {
        id: "de-22-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "She will bring a doctor's note when she returns.",
        vietnamese: "Bé sẽ mang giấy khám bệnh khi quay lại trường.",
        prompt: "She will bring a doctor's ___ when she returns.",
        choices: [
          { id: "a", text: "note" },
          { id: "b", text: "backpack" },
          { id: "c", text: "lunch" },
        ],
        correctAnswer: "a",
        explanation:
          "'Doctor's note' nghĩa là 'giấy khám bệnh' — thường cần khi học sinh nghỉ học nhiều ngày vì lý do sức khỏe.",
        wrongAnswerExplanations:
          "'Backpack' (cặp sách) và 'lunch' (bữa trưa) không liên quan đến giấy tờ y tế khi nghỉ học vì bệnh.",
        usageTip: "Dùng khi thông báo sẽ mang giấy khám bệnh khi con quay lại trường.",
      },
      {
        id: "de-22-5",
        type: "conversation_response",
        speaker: "Nhân viên văn phòng",
        badgeEmoji: "📚",
        english: "I'll let her teacher know about the homework.",
        vietnamese: "Tôi sẽ báo cho cô giáo của bé về việc bài tập.",
        prompt: "She's worried about missing her homework today.",
        promptVietnamese: "Bé lo lắng vì bị trễ bài tập hôm nay.",
        choices: [
          { id: "a", text: "I'll let her teacher know about the homework." },
          { id: "b", text: "She needs to come to school anyway." },
          { id: "c", text: "The school will close early today." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi phụ huynh lo lắng về bài tập, nhân viên nên trấn an bằng cách hứa sẽ báo cho giáo viên biết.",
        wrongAnswerExplanations:
          "'She needs to come to school anyway.' đi ngược lại việc bé đang bị ốm cần nghỉ học. 'The school will close early today.' không liên quan đến vấn đề bài tập.",
        usageTip: "Dùng khi nhân viên trường trấn an phụ huynh về việc bài tập của học sinh nghỉ học.",
      },
      {
        id: "de-22-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Please make sure she rests well and drinks water.",
        vietnamese: "Nhớ cho bé nghỉ ngơi đầy đủ và uống nhiều nước nhé.",
        audioText: "Please make sure she rests well and drinks water.",
        choices: [
          { id: "a", text: "Nhớ cho bé nghỉ ngơi đầy đủ và uống nhiều nước nhé." },
          { id: "b", text: "Nhớ cho bé làm hết bài tập về nhà nhé." },
          { id: "c", text: "Nhớ đưa bé đến trường sớm ngày mai nhé." },
        ],
        correctAnswer: "a",
        explanation:
          "'Rests well and drinks water' nghĩa là 'nghỉ ngơi đầy đủ và uống nhiều nước' — lời khuyên chăm sóc khi trẻ bị bệnh.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc làm bài tập hay đến trường sớm, chỉ khuyên nghỉ ngơi và uống nước.",
        usageTip: "Dùng để hiểu lời khuyên chăm sóc sức khỏe khi trẻ nghỉ học vì bệnh.",
      },
      {
        id: "de-22-7",
        type: "english_to_vietnamese",
        badgeEmoji: "📅",
        english: "She can make up the test next week.",
        vietnamese: "Bé có thể thi bù vào tuần sau.",
        prompt: "She can make up the test next week.",
        choices: [
          { id: "a", text: "Bé có thể thi bù vào tuần sau." },
          { id: "b", text: "Bé phải nghỉ học thêm một tuần nữa." },
          { id: "c", text: "Bé sẽ bị điểm kém vì nghỉ học." },
        ],
        correctAnswer: "a",
        explanation:
          "'Make up the test' nghĩa là 'thi bù' — thông tin hữu ích khi học sinh bỏ lỡ bài kiểm tra do nghỉ ốm.",
        wrongAnswerExplanations:
          "Câu gốc không nói bé phải nghỉ thêm hay bị điểm kém, chỉ nói bé có thể thi bù sau.",
        usageTip: "Dùng để hiểu thông tin về việc thi bù khi học sinh bỏ lỡ bài kiểm tra vì nghỉ ốm.",
      },
      {
        id: "de-22-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "I'll send an email if she needs more days off.",
        vietnamese: "Tôi sẽ gửi email nếu bé cần nghỉ thêm vài ngày nữa.",
        promptContext:
          "Bạn không chắc con sẽ khỏe kịp để đi học lại và muốn báo trước rằng sẽ gửi email nếu cần nghỉ thêm.",
        choices: [
          { id: "a", text: "I'll send an email if she needs more days off." },
          { id: "b", text: "I'll send an email if she needs more off days." },
          { id: "c", text: "I'll send if an email she needs more days off." },
        ],
        correctAnswer: "a",
        explanation:
          "Cụm từ đúng là 'days off' (những ngày nghỉ) — 'off' đứng sau 'days', không đảo ngược thứ tự.",
        wrongAnswerExplanations:
          "'...if she needs more off days.' đảo sai vị trí của 'off' và 'days'. 'I'll send if an email...' đặt sai vị trí mệnh đề 'if' trước tân ngữ 'an email'.",
        usageTip: "Dùng khi báo trước với trường rằng có thể cần xin nghỉ thêm cho con.",
      },
      {
        id: "de-22-9",
        type: "situation_response",
        badgeEmoji: "🙏",
        english: "Thank you for letting the teacher know.",
        vietnamese: "Cảm ơn đã báo giúp cho cô giáo biết.",
        promptContext:
          "Sau khi nhân viên văn phòng hứa sẽ báo cho giáo viên về việc con nghỉ học, bạn muốn cảm ơn họ.",
        choices: [
          { id: "a", text: "Thank you for letting the teacher know." },
          { id: "b", text: "Thank you for closing the school today." },
          { id: "c", text: "Thank you for the school lunch menu." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được giúp thông báo cho giáo viên, câu cảm ơn tự nhiên nhất là nói đúng vào việc họ vừa giúp.",
        wrongAnswerExplanations:
          "'Thank you for closing the school today.' và 'Thank you for the school lunch menu.' đều không liên quan đến việc thông báo cho giáo viên.",
        usageTip: "Dùng để cảm ơn nhân viên trường sau khi họ đồng ý thông báo cho giáo viên.",
      },
      {
        id: "de-22-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "I hope she feels better soon and can go back tomorrow.",
        vietnamese: "Tôi hy vọng bé sẽ khỏe hơn sớm và có thể quay lại trường vào ngày mai.",
        promptContext:
          "Trước khi kết thúc cuộc gọi, bạn muốn bày tỏ hy vọng con sẽ khỏe lại sớm.",
        choices: [
          { id: "a", text: "I hope she feels better soon and can go back tomorrow." },
          { id: "b", text: "I hope she stays home forever now." },
          { id: "c", text: "I hope she changes schools next year." },
        ],
        correctAnswer: "a",
        explanation:
          "'Feels better soon and can go back tomorrow' nghĩa là 'khỏe hơn sớm và quay lại trường mai' — câu kết thúc cuộc gọi hợp lý và tích cực.",
        wrongAnswerExplanations:
          "'I hope she stays home forever now.' và 'I hope she changes schools next year.' đều không phù hợp với ngữ cảnh mong con khỏe lại để đi học.",
        usageTip: "Dùng để kết thúc cuộc gọi báo nghỉ học với lời chúc con mau khỏe.",
      },
    ],
  },
  {
    id: "de-23",
    slug: "de-23-hop-phu-huynh-1",
    topicId: "daily-english",
    title: "Trò chuyện trong buổi họp phụ huynh",
    description: "Luyện các câu nói chuyện phổ biến trong buổi họp phụ huynh - giáo viên.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-23-1",
        type: "situation_response",
        badgeEmoji: "🤝",
        english: "Thank you for meeting with me today.",
        vietnamese: "Cảm ơn cô đã gặp tôi hôm nay.",
        promptContext:
          "Bạn vừa ngồi xuống bắt đầu buổi họp phụ huynh với cô giáo của con.",
        choices: [
          { id: "a", text: "Thank you for meeting with me today." },
          { id: "b", text: "Thank you for the free gift today." },
          { id: "c", text: "Thank you for canceling the meeting." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi bắt đầu một buổi họp, câu mở đầu lịch sự là cảm ơn đối phương đã dành thời gian gặp mặt.",
        wrongAnswerExplanations:
          "'Thank you for the free gift today.' và 'Thank you for canceling the meeting.' đều không phù hợp để mở đầu một buổi họp phụ huynh.",
        usageTip: "Dùng để mở đầu buổi họp phụ huynh với giáo viên một cách lịch sự.",
      },
      {
        id: "de-23-2",
        type: "conversation_response",
        speaker: "Cô giáo",
        badgeEmoji: "📊",
        english: "Overall, he's doing very well this semester.",
        vietnamese: "Nhìn chung, học kỳ này bé học rất tốt.",
        prompt: "How is he doing this semester?",
        promptVietnamese: "Học kỳ này bé học thế nào ạ?",
        choices: [
          { id: "a", text: "Overall, he's doing very well this semester." },
          { id: "b", text: "The school will be closed next week." },
          { id: "c", text: "The bus schedule has changed." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi phụ huynh hỏi về kết quả học tập, giáo viên nên trả lời tổng quan về tình hình học tập của học sinh.",
        wrongAnswerExplanations:
          "'The school will be closed next week.' và 'The bus schedule has changed.' đều không trả lời đúng câu hỏi về kết quả học tập.",
        usageTip: "Dùng khi giáo viên báo cáo tổng quan về tình hình học tập của học sinh.",
      },
      {
        id: "de-23-3",
        type: "vietnamese_to_english",
        badgeEmoji: "📖",
        english: "Which subject does he need to improve on?",
        vietnamese: "Bé cần cải thiện thêm ở môn nào ạ?",
        promptContext:
          "Bạn muốn hỏi cô giáo xem con mình cần cố gắng hơn ở môn học nào.",
        choices: [
          { id: "a", text: "Which subject does he need to improve on?" },
          { id: "b", text: "Which teacher does he like the most?" },
          { id: "c", text: "Which friend does he play with most?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Subject... improve on' nghĩa là 'môn học... cần cải thiện' — đúng câu hỏi khi tìm hiểu điểm cần cố gắng thêm của con.",
        wrongAnswerExplanations:
          "'Which teacher does he like the most?' và 'Which friend does he play with most?' đều không liên quan đến việc hỏi về môn học cần cải thiện.",
        usageTip: "Dùng khi bạn muốn biết con cần cố gắng thêm ở môn học nào.",
      },
      {
        id: "de-23-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "He could use more practice with reading.",
        vietnamese: "Bé cần luyện tập thêm về đọc hiểu.",
        prompt: "He could use more practice with ___.",
        choices: [
          { id: "a", text: "reading" },
          { id: "b", text: "lunch" },
          { id: "c", text: "recess" },
        ],
        correctAnswer: "a",
        explanation:
          "'Practice with reading' nghĩa là 'luyện tập đọc hiểu' — đúng cụm từ khi nói về kỹ năng học tập cần cải thiện.",
        wrongAnswerExplanations:
          "'Lunch' (bữa trưa) và 'recess' (giờ ra chơi) không liên quan đến việc học tập cần cải thiện.",
        usageTip: "Dùng để hiểu khi giáo viên gợi ý một kỹ năng học tập cần luyện tập thêm.",
      },
      {
        id: "de-23-5",
        type: "conversation_response",
        speaker: "Cô giáo",
        badgeEmoji: "🏠",
        english: "You can read with him for fifteen minutes each night.",
        vietnamese: "Anh có thể đọc sách cùng bé mười lăm phút mỗi tối.",
        prompt: "What can I do at home to help him?",
        promptVietnamese: "Tôi có thể làm gì ở nhà để giúp bé không ạ?",
        choices: [
          { id: "a", text: "You can read with him for fifteen minutes each night." },
          { id: "b", text: "You can buy him a new phone." },
          { id: "c", text: "You can let him skip his homework." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi phụ huynh hỏi cách hỗ trợ tại nhà, giáo viên nên gợi ý hoạt động cụ thể và thực tế, như đọc sách cùng con.",
        wrongAnswerExplanations:
          "'You can buy him a new phone.' và 'You can let him skip his homework.' đều không phải cách hỗ trợ học tập hợp lý.",
        usageTip: "Dùng khi giáo viên gợi ý hoạt động cụ thể phụ huynh có thể làm ở nhà để giúp con học tốt hơn.",
      },
      {
        id: "de-23-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "He's very kind and helps his classmates a lot.",
        vietnamese: "Bé rất tốt bụng và hay giúp đỡ bạn học nhiều lắm.",
        audioText: "He's very kind and helps his classmates a lot.",
        choices: [
          { id: "a", text: "Bé rất tốt bụng và hay giúp đỡ bạn học nhiều lắm." },
          { id: "b", text: "Bé rất nghịch ngợm và hay trêu chọc bạn học." },
          { id: "c", text: "Bé rất nhút nhát và ít nói chuyện với bạn." },
        ],
        correctAnswer: "a",
        explanation:
          "'Very kind and helps his classmates' nghĩa là 'tốt bụng và hay giúp đỡ bạn học' — nhận xét tích cực về tính cách của bé.",
        wrongAnswerExplanations:
          "Câu gốc không nói bé nghịch ngợm hay nhút nhát, chỉ khen bé tốt bụng và hay giúp đỡ bạn.",
        usageTip: "Dùng để hiểu khi giáo viên nhận xét tích cực về tính cách của học sinh.",
      },
      {
        id: "de-23-7",
        type: "english_to_vietnamese",
        badgeEmoji: "🎯",
        english: "Let's set a small goal for next month.",
        vietnamese: "Chúng ta hãy đặt một mục tiêu nhỏ cho tháng sau.",
        prompt: "Let's set a small goal for next month.",
        choices: [
          { id: "a", text: "Chúng ta hãy đặt một mục tiêu nhỏ cho tháng sau." },
          { id: "b", text: "Chúng ta hãy hủy buổi họp tháng sau." },
          { id: "c", text: "Chúng ta hãy đổi lớp học cho bé." },
        ],
        correctAnswer: "a",
        explanation:
          "'Set a small goal' nghĩa là 'đặt một mục tiêu nhỏ' — câu này đề nghị cùng lên kế hoạch cải thiện việc học cho bé.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc hủy buổi họp hay đổi lớp, chỉ đề nghị đặt mục tiêu học tập nhỏ.",
        usageTip: "Dùng khi giáo viên và phụ huynh cùng thống nhất một mục tiêu học tập cho học sinh.",
      },
      {
        id: "de-23-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Please let me know if there's anything I should do differently.",
        vietnamese: "Xin cô cho tôi biết nếu có gì tôi nên làm khác đi.",
        promptContext:
          "Bạn muốn nhờ giáo viên góp ý nếu cách bạn hỗ trợ con học ở nhà cần thay đổi.",
        choices: [
          { id: "a", text: "Please let me know if there's anything I should do differently." },
          { id: "b", text: "Please let me know if there's anything I should differently do." },
          { id: "c", text: "Please let me know if anything there's I should do differently." },
        ],
        correctAnswer: "a",
        explanation:
          "Trạng từ 'differently' đứng sau động từ 'do' ở cuối câu — đây là trật tự đúng và tự nhiên trong tiếng Anh.",
        wrongAnswerExplanations:
          "'...if there's anything I should differently do.' đặt sai vị trí trạng từ 'differently'. 'Please let me know if anything there's I should do differently.' đảo sai vị trí 'there's' và 'anything'.",
        usageTip: "Dùng khi bạn muốn nhờ giáo viên góp ý về cách hỗ trợ con học tập.",
      },
      {
        id: "de-23-9",
        type: "situation_response",
        badgeEmoji: "🙏",
        english: "I really appreciate everything you do for him.",
        vietnamese: "Tôi thật sự cảm kích những gì cô đã làm cho bé.",
        promptContext:
          "Cuối buổi họp, bạn muốn bày tỏ lòng biết ơn với sự tận tâm của giáo viên dành cho con mình.",
        choices: [
          { id: "a", text: "I really appreciate everything you do for him." },
          { id: "b", text: "I really think you should work harder." },
          { id: "c", text: "I really don't agree with your methods." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi kết thúc buổi họp tích cực, câu cảm ơn chân thành nhất là bày tỏ sự trân trọng công sức của giáo viên.",
        wrongAnswerExplanations:
          "'I really think you should work harder.' và 'I really don't agree with your methods.' đều mang tính phê bình, không phù hợp để kết thúc buổi họp tích cực.",
        usageTip: "Dùng để bày tỏ lòng biết ơn với giáo viên vào cuối buổi họp phụ huynh.",
      },
      {
        id: "de-23-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙋",
        english: "I'll make sure he practices reading every night.",
        vietnamese: "Tôi sẽ nhớ cho bé luyện đọc mỗi tối.",
        promptContext:
          "Sau khi nghe gợi ý của cô giáo, bạn muốn cam kết sẽ giúp con luyện đọc ở nhà mỗi tối.",
        choices: [
          { id: "a", text: "I'll make sure he practices reading every night." },
          { id: "b", text: "I'll make sure he skips homework every night." },
          { id: "c", text: "I'll make sure he watches TV every night." },
        ],
        correctAnswer: "a",
        explanation:
          "'Make sure he practices reading' nghĩa là 'nhớ cho bé luyện đọc' — đúng câu cam kết thực hiện theo gợi ý của giáo viên.",
        wrongAnswerExplanations:
          "'I'll make sure he skips homework every night.' và 'I'll make sure he watches TV every night.' đều đi ngược lại mục tiêu hỗ trợ việc học của con.",
        usageTip: "Dùng khi bạn cam kết sẽ thực hiện theo gợi ý học tập của giáo viên tại nhà.",
      },
    ],
  },
  {
    id: "de-24",
    slug: "de-24-do-dung-su-kien-truong-1",
    topicId: "daily-english",
    title: "Hỏi về đồ dùng học tập và sự kiện trường",
    description: "Luyện hỏi về danh sách đồ dùng học tập và các sự kiện của trường.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-24-1",
        type: "situation_response",
        badgeEmoji: "🎒",
        english: "Where can I find the school supply list?",
        vietnamese: "Tôi có thể tìm danh sách đồ dùng học tập ở đâu vậy?",
        promptContext:
          "Năm học mới sắp bắt đầu và bạn cần biết con mình cần chuẩn bị những đồ dùng gì.",
        choices: [
          { id: "a", text: "Where can I find the school supply list?" },
          { id: "b", text: "Where can I find the bus schedule?" },
          { id: "c", text: "Where can I find the lunch menu?" },
        ],
        correctAnswer: "a",
        explanation:
          "'School supply list' nghĩa là 'danh sách đồ dùng học tập' — đúng câu hỏi khi cần biết cần mua sắm gì cho năm học mới.",
        wrongAnswerExplanations:
          "'Where can I find the bus schedule?' và 'Where can I find the lunch menu?' không liên quan đến việc tìm danh sách đồ dùng học tập.",
        usageTip: "Dùng khi bạn cần tìm danh sách đồ dùng học tập cho năm học mới.",
      },
      {
        id: "de-24-2",
        type: "conversation_response",
        speaker: "Nhân viên văn phòng",
        badgeEmoji: "📄",
        english: "It's posted on the school website.",
        vietnamese: "Nó được đăng trên trang web của trường đó.",
        prompt: "Where can I find the school supply list?",
        promptVietnamese: "Tôi có thể tìm danh sách đồ dùng học tập ở đâu vậy?",
        choices: [
          { id: "a", text: "It's posted on the school website." },
          { id: "b", text: "It costs twenty dollars." },
          { id: "c", text: "It starts at eight in the morning." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi phụ huynh hỏi tìm thông tin ở đâu, nhân viên nên chỉ rõ nguồn thông tin, ví dụ như trang web trường.",
        wrongAnswerExplanations:
          "'It costs twenty dollars.' và 'It starts at eight in the morning.' đều không trả lời đúng câu hỏi về nơi tìm danh sách.",
        usageTip: "Dùng khi hướng dẫn phụ huynh nơi tìm thông tin về đồ dùng học tập.",
      },
      {
        id: "de-24-3",
        type: "vietnamese_to_english",
        badgeEmoji: "🎪",
        english: "When is the school's fall festival this year?",
        vietnamese: "Năm nay lễ hội mùa thu của trường tổ chức khi nào vậy?",
        promptContext:
          "Bạn muốn hỏi thông tin về ngày tổ chức lễ hội mùa thu thường niên của trường.",
        choices: [
          { id: "a", text: "When is the school's fall festival this year?" },
          { id: "b", text: "When is the school's summer break this year?" },
          { id: "c", text: "When is the school's report card this year?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Fall festival' nghĩa là 'lễ hội mùa thu' — đúng câu hỏi khi tìm thông tin về sự kiện cụ thể của trường.",
        wrongAnswerExplanations:
          "'When is the school's summer break this year?' hỏi về kỳ nghỉ hè, không phải sự kiện. 'When is the school's report card this year?' hỏi về học bạ, không đúng ý.",
        usageTip: "Dùng khi bạn muốn hỏi về ngày tổ chức một sự kiện của trường.",
      },
      {
        id: "de-24-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "The festival will be held in the school gym.",
        vietnamese: "Lễ hội sẽ được tổ chức trong nhà thi đấu của trường.",
        prompt: "The festival will be ___ in the school gym.",
        choices: [
          { id: "a", text: "held" },
          { id: "b", text: "sold" },
          { id: "c", text: "closed" },
        ],
        correctAnswer: "a",
        explanation:
          "'Held in the school gym' nghĩa là 'được tổ chức trong nhà thi đấu' — đúng động từ để nói về địa điểm tổ chức sự kiện.",
        wrongAnswerExplanations:
          "'Sold' (được bán) và 'closed' (bị đóng cửa) không hợp nghĩa khi nói về việc tổ chức một sự kiện.",
        usageTip: "Dùng để hiểu mẫu câu thông báo địa điểm tổ chức sự kiện của trường.",
      },
      {
        id: "de-24-5",
        type: "conversation_response",
        speaker: "Nhân viên văn phòng",
        badgeEmoji: "🎫",
        english: "Tickets are five dollars per family.",
        vietnamese: "Vé là năm đô la cho mỗi gia đình.",
        prompt: "Do we need to pay to attend the festival?",
        promptVietnamese: "Chúng tôi có cần trả tiền để tham dự lễ hội không ạ?",
        choices: [
          { id: "a", text: "Tickets are five dollars per family." },
          { id: "b", text: "The festival is canceled this year." },
          { id: "c", text: "The school is closed on weekends." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi phụ huynh hỏi về chi phí, nhân viên nên trả lời rõ số tiền cần trả để tham dự sự kiện.",
        wrongAnswerExplanations:
          "'The festival is canceled this year.' và 'The school is closed on weekends.' đều không trả lời đúng câu hỏi về chi phí tham dự.",
        usageTip: "Dùng khi thông báo giá vé tham dự một sự kiện của trường.",
      },
      {
        id: "de-24-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Don't forget to bring a backpack and notebooks.",
        vietnamese: "Đừng quên mang theo cặp sách và tập vở nhé.",
        audioText: "Don't forget to bring a backpack and notebooks.",
        choices: [
          { id: "a", text: "Đừng quên mang theo cặp sách và tập vở nhé." },
          { id: "b", text: "Đừng quên đóng học phí trước thứ Sáu nhé." },
          { id: "c", text: "Đừng quên ký tên vào phiếu điểm danh nhé." },
        ],
        correctAnswer: "a",
        explanation:
          "'Bring a backpack and notebooks' nghĩa là 'mang theo cặp sách và tập vở' — nhắc nhở về đồ dùng học tập cần chuẩn bị.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc đóng học phí hay ký phiếu điểm danh, chỉ nhắc mang đồ dùng học tập.",
        usageTip: "Dùng để hiểu nhắc nhở về đồ dùng học tập cần chuẩn bị cho năm học mới.",
      },
      {
        id: "de-24-7",
        type: "english_to_vietnamese",
        badgeEmoji: "📸",
        english: "School picture day is next Wednesday.",
        vietnamese: "Ngày chụp ảnh trường là thứ Tư tuần sau.",
        prompt: "School picture day is next Wednesday.",
        choices: [
          { id: "a", text: "Ngày chụp ảnh trường là thứ Tư tuần sau." },
          { id: "b", text: "Ngày nghỉ lễ của trường là thứ Tư tuần sau." },
          { id: "c", text: "Ngày họp phụ huynh là thứ Tư tuần sau." },
        ],
        correctAnswer: "a",
        explanation:
          "'School picture day' nghĩa là 'ngày chụp ảnh trường' — thông báo về một sự kiện thường niên ở trường học Mỹ.",
        wrongAnswerExplanations:
          "Câu gốc không nói về ngày nghỉ lễ hay họp phụ huynh, chỉ thông báo về ngày chụp ảnh trường.",
        usageTip: "Dùng để hiểu thông báo về ngày chụp ảnh lưu niệm ở trường.",
      },
      {
        id: "de-24-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "What should he wear for picture day?",
        vietnamese: "Bé nên mặc gì vào ngày chụp ảnh vậy?",
        promptContext:
          "Bạn muốn hỏi giáo viên xem con nên mặc trang phục như thế nào vào ngày chụp ảnh trường.",
        choices: [
          { id: "a", text: "What should he wear for picture day?" },
          { id: "b", text: "What should he wear picture for day?" },
          { id: "c", text: "What he should wear for picture day?" },
        ],
        correctAnswer: "a",
        explanation:
          "Trật tự câu hỏi đúng là 'should he wear' — trợ động từ 'should' đứng trước chủ ngữ 'he' trong câu hỏi.",
        wrongAnswerExplanations:
          "'What should he wear picture for day?' đặt sai vị trí 'for day'. 'What he should wear for picture day?' không đảo trợ động từ lên trước chủ ngữ, sai cấu trúc câu hỏi.",
        usageTip: "Dùng khi hỏi về trang phục phù hợp cho một sự kiện đặc biệt ở trường.",
      },
      {
        id: "de-24-9",
        type: "situation_response",
        badgeEmoji: "🙋",
        english: "Is there a deadline to order the pictures?",
        vietnamese: "Có hạn chót để đặt mua ảnh không vậy?",
        promptContext:
          "Bạn muốn hỏi xem có thời hạn cụ thể nào để đặt mua ảnh chụp của con không.",
        choices: [
          { id: "a", text: "Is there a deadline to order the pictures?" },
          { id: "b", text: "Is there a deadline to order lunch?" },
          { id: "c", text: "Is there a deadline to order supplies?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Deadline to order the pictures' nghĩa là 'hạn chót đặt mua ảnh' — đúng câu hỏi trong ngữ cảnh ngày chụp ảnh trường.",
        wrongAnswerExplanations:
          "'Is there a deadline to order lunch?' và 'Is there a deadline to order supplies?' đều không liên quan đến việc đặt mua ảnh chụp.",
        usageTip: "Dùng khi bạn muốn hỏi về hạn chót đặt mua ảnh chụp của trường.",
      },
      {
        id: "de-24-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙏",
        english: "Thank you for the information about the festival.",
        vietnamese: "Cảm ơn đã cung cấp thông tin về lễ hội.",
        promptContext:
          "Sau khi nhận được đầy đủ thông tin về lễ hội trường, bạn muốn cảm ơn nhân viên văn phòng.",
        choices: [
          { id: "a", text: "Thank you for the information about the festival." },
          { id: "b", text: "Thank you for the free lunch today." },
          { id: "c", text: "Thank you for canceling my appointment." },
        ],
        correctAnswer: "a",
        explanation:
          "Sau khi nhận thông tin hữu ích, câu cảm ơn tự nhiên nhất là nói đúng vào điều vừa được cung cấp.",
        wrongAnswerExplanations:
          "'Thank you for the free lunch today.' và 'Thank you for canceling my appointment.' đều không liên quan đến việc nhận thông tin về lễ hội.",
        usageTip: "Dùng để cảm ơn khi nhận được thông tin hữu ích về sự kiện trường.",
      },
    ],
  },
  {
    id: "de-25",
    slug: "de-25-noi-chuyen-van-phong-truong-1",
    topicId: "daily-english",
    title: "Trò chuyện với nhân viên văn phòng trường",
    description: "Luyện các câu hỏi thường gặp khi liên hệ văn phòng nhà trường.",
    level: "intermediate",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "de-25-1",
        type: "situation_response",
        badgeEmoji: "🏫",
        english: "I need to update my emergency contact information.",
        vietnamese: "Tôi cần cập nhật thông tin liên lạc khẩn cấp của mình.",
        promptContext:
          "Bạn vừa đổi số điện thoại và muốn báo cho văn phòng trường cập nhật thông tin liên lạc khẩn cấp.",
        choices: [
          { id: "a", text: "I need to update my emergency contact information." },
          { id: "b", text: "I need to update my child's grade." },
          { id: "c", text: "I need to update my child's lunch order." },
        ],
        correctAnswer: "a",
        explanation:
          "'Update my emergency contact information' nghĩa là 'cập nhật thông tin liên lạc khẩn cấp' — đúng câu để báo thay đổi thông tin liên lạc.",
        wrongAnswerExplanations:
          "'I need to update my child's grade.' và 'I need to update my child's lunch order.' đều không liên quan đến việc cập nhật thông tin liên lạc.",
        usageTip: "Dùng khi bạn cần cập nhật thông tin liên lạc khẩn cấp với văn phòng trường.",
      },
      {
        id: "de-25-2",
        type: "conversation_response",
        speaker: "Nhân viên văn phòng",
        badgeEmoji: "📝",
        english: "Sure, can you give me the new phone number?",
        vietnamese: "Dạ được, chị cho tôi xin số điện thoại mới được không?",
        prompt: "I need to update my emergency contact information.",
        promptVietnamese: "Tôi cần cập nhật thông tin liên lạc khẩn cấp của mình.",
        choices: [
          { id: "a", text: "Sure, can you give me the new phone number?" },
          { id: "b", text: "Sorry, the office is closed now." },
          { id: "c", text: "Sure, that will be ten dollars." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi phụ huynh muốn cập nhật thông tin, nhân viên nên hỏi ngay thông tin mới cần thay đổi.",
        wrongAnswerExplanations:
          "'Sorry, the office is closed now.' không hợp lý vì họ đang trực tiếp trả lời. 'Sure, that will be ten dollars.' không đúng vì cập nhật thông tin thường không tính phí.",
        usageTip: "Dùng khi nhân viên trường cần lấy thông tin mới để cập nhật hồ sơ.",
      },
      {
        id: "de-25-3",
        type: "vietnamese_to_english",
        badgeEmoji: "🚌",
        english: "What time does the school bus arrive at my stop?",
        vietnamese: "Xe buýt trường đến trạm của tôi lúc mấy giờ vậy?",
        promptContext:
          "Bạn muốn hỏi văn phòng trường về giờ xe buýt đến đón con tại trạm gần nhà.",
        choices: [
          { id: "a", text: "What time does the school bus arrive at my stop?" },
          { id: "b", text: "What time does the school library close?" },
          { id: "c", text: "What time does the school cafeteria open?" },
        ],
        correctAnswer: "a",
        explanation:
          "'School bus arrive at my stop' nghĩa là 'xe buýt trường đến trạm của tôi' — đúng câu hỏi khi cần biết giờ đón của xe buýt.",
        wrongAnswerExplanations:
          "'What time does the school library close?' và 'What time does the school cafeteria open?' đều không liên quan đến việc hỏi giờ xe buýt.",
        usageTip: "Dùng khi bạn cần hỏi giờ xe buýt trường đến đón con tại trạm gần nhà.",
      },
      {
        id: "de-25-4",
        type: "fill_blank",
        badgeEmoji: "✏️",
        english: "The bus usually arrives around seven fifteen.",
        vietnamese: "Xe buýt thường đến khoảng bảy giờ mười lăm.",
        prompt: "The bus usually ___ around seven fifteen.",
        choices: [
          { id: "a", text: "arrives" },
          { id: "b", text: "closes" },
          { id: "c", text: "pays" },
        ],
        correctAnswer: "a",
        explanation:
          "'Arrives around seven fifteen' nghĩa là 'thường đến khoảng bảy giờ mười lăm' — đúng động từ để nói về giờ xe buýt đến.",
        wrongAnswerExplanations:
          "'Closes' (đóng cửa) và 'pays' (trả tiền) không hợp nghĩa khi nói về giờ xe buýt đến đón.",
        usageTip: "Dùng để hiểu khi nhân viên trường thông báo giờ xe buýt đến đón học sinh.",
      },
      {
        id: "de-25-5",
        type: "conversation_response",
        speaker: "Nhân viên văn phòng",
        badgeEmoji: "🍱",
        english: "You can add money to his lunch account online.",
        vietnamese: "Anh có thể nạp tiền vào tài khoản ăn trưa của bé qua mạng.",
        prompt: "How do I pay for his school lunch?",
        promptVietnamese: "Tôi trả tiền ăn trưa cho bé như thế nào vậy?",
        choices: [
          { id: "a", text: "You can add money to his lunch account online." },
          { id: "b", text: "You can bring cash to the classroom." },
          { id: "c", text: "You can talk to the bus driver about it." },
        ],
        correctAnswer: "a",
        explanation:
          "Nhiều trường ở Mỹ dùng hệ thống tài khoản ăn trưa trực tuyến, nên nhân viên nên hướng dẫn cách nạp tiền qua mạng.",
        wrongAnswerExplanations:
          "'You can bring cash to the classroom.' và 'You can talk to the bus driver about it.' đều không phải cách thông thường để trả tiền ăn trưa ở trường.",
        usageTip: "Dùng khi hướng dẫn phụ huynh cách thanh toán tiền ăn trưa cho con ở trường.",
      },
      {
        id: "de-25-6",
        type: "listening",
        badgeEmoji: "🎧",
        english: "You can check his grades on the parent portal.",
        vietnamese: "Anh có thể xem điểm của bé trên cổng thông tin phụ huynh.",
        audioText: "You can check his grades on the parent portal.",
        choices: [
          { id: "a", text: "Anh có thể xem điểm của bé trên cổng thông tin phụ huynh." },
          { id: "b", text: "Anh có thể đăng ký xe buýt trên cổng thông tin phụ huynh." },
          { id: "c", text: "Anh có thể đổi lớp học trên cổng thông tin phụ huynh." },
        ],
        correctAnswer: "a",
        explanation:
          "'Check his grades on the parent portal' nghĩa là 'xem điểm trên cổng thông tin phụ huynh' — hướng dẫn phổ biến ở nhiều trường Mỹ.",
        wrongAnswerExplanations:
          "Câu gốc không nói về việc đăng ký xe buýt hay đổi lớp học, chỉ nói về việc xem điểm trực tuyến.",
        usageTip: "Dùng để hiểu hướng dẫn cách xem điểm của con qua hệ thống trực tuyến của trường.",
      },
      {
        id: "de-25-7",
        type: "english_to_vietnamese",
        badgeEmoji: "📮",
        english: "You'll receive a username and password by email.",
        vietnamese: "Anh sẽ nhận được tên đăng nhập và mật khẩu qua email.",
        prompt: "You'll receive a username and password by email.",
        choices: [
          { id: "a", text: "Anh sẽ nhận được tên đăng nhập và mật khẩu qua email." },
          { id: "b", text: "Anh sẽ nhận được hóa đơn học phí qua email." },
          { id: "c", text: "Anh sẽ nhận được lịch nghỉ lễ qua email." },
        ],
        correctAnswer: "a",
        explanation:
          "'Username and password by email' nghĩa là 'tên đăng nhập và mật khẩu qua email' — thông tin cần thiết để truy cập cổng thông tin phụ huynh.",
        wrongAnswerExplanations:
          "Câu gốc không nói về hóa đơn học phí hay lịch nghỉ lễ, chỉ nói về thông tin đăng nhập được gửi qua email.",
        usageTip: "Dùng để hiểu thông báo về việc nhận thông tin đăng nhập cổng thông tin phụ huynh.",
      },
      {
        id: "de-25-8",
        type: "choose_best_sentence",
        badgeEmoji: "💡",
        english: "Could you tell me how to reset my password?",
        vietnamese: "Chị chỉ giúp tôi cách đặt lại mật khẩu được không?",
        promptContext:
          "Bạn quên mật khẩu đăng nhập cổng thông tin phụ huynh và cần hỏi nhân viên cách khôi phục lại.",
        choices: [
          { id: "a", text: "Could you tell me how to reset my password?" },
          { id: "b", text: "Could you tell me how reset to my password?" },
          { id: "c", text: "Could you tell me my password how to reset?" },
        ],
        correctAnswer: "a",
        explanation:
          "Cấu trúc đúng là 'how to reset my password' — 'to' đứng ngay trước động từ nguyên mẫu 'reset'.",
        wrongAnswerExplanations:
          "'Could you tell me how reset to my password?' đặt sai vị trí 'to'. 'Could you tell me my password how to reset?' đảo lộn vị trí tân ngữ và cụm 'how to'.",
        usageTip: "Dùng khi bạn cần hỏi cách khôi phục mật khẩu tài khoản trên hệ thống trường.",
      },
      {
        id: "de-25-9",
        type: "situation_response",
        badgeEmoji: "🙋",
        english: "Can I speak to someone about my child's schedule?",
        vietnamese: "Tôi có thể nói chuyện với ai đó về thời khóa biểu của con tôi không ạ?",
        promptContext:
          "Bạn có thắc mắc về thời khóa biểu học của con và muốn được nói chuyện với người phụ trách.",
        choices: [
          { id: "a", text: "Can I speak to someone about my child's schedule?" },
          { id: "b", text: "Can I speak to someone about my car payment?" },
          { id: "c", text: "Can I speak to someone about my job application?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Speak to someone about my child's schedule' nghĩa là 'nói chuyện về thời khóa biểu của con' — đúng câu hỏi khi cần hỗ trợ về vấn đề này.",
        wrongAnswerExplanations:
          "'Can I speak to someone about my car payment?' và 'Can I speak to someone about my job application?' hoàn toàn không liên quan đến trường học.",
        usageTip: "Dùng khi bạn cần trao đổi trực tiếp với nhân viên trường về thời khóa biểu của con.",
      },
      {
        id: "de-25-10",
        type: "vietnamese_to_english",
        badgeEmoji: "🙏",
        english: "Thank you for your help, I appreciate it.",
        vietnamese: "Cảm ơn chị đã giúp đỡ, tôi rất trân trọng điều đó.",
        promptContext:
          "Sau khi được nhân viên văn phòng trường hỗ trợ giải đáp thắc mắc, bạn muốn cảm ơn họ trước khi kết thúc cuộc gọi.",
        choices: [
          { id: "a", text: "Thank you for your help, I appreciate it." },
          { id: "b", text: "Thank you for nothing at all." },
          { id: "c", text: "Thank you for wasting my time." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được giúp đỡ tận tình, câu cảm ơn chân thành và tự nhiên nhất là bày tỏ sự trân trọng đối với sự giúp đỡ đó.",
        wrongAnswerExplanations:
          "'Thank you for nothing at all.' và 'Thank you for wasting my time.' đều mang nghĩa châm biếm, tiêu cực, không phù hợp khi thực sự được giúp đỡ.",
        usageTip: "Dùng để kết thúc cuộc trò chuyện với nhân viên trường một cách lịch sự và biết ơn.",
      },
    ],
  },
];
