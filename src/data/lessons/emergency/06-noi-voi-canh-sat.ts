import { Lesson } from "@/types/content";

export const emergencyGroup06: Lesson[] = [
  {
    id: "em-26",
    slug: "em-26-bao-mat-cap-1",
    topicId: "emergency",
    title: "Báo cáo bị mất trộm đồ",
    description: "Học cách báo cho cảnh sát khi đồ của bạn bị mất trộm.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "em-26-1",
        type: "situation_response",
        badgeEmoji: "🚲",
        english: "Someone stole my bike from outside my house.",
        vietnamese: "Có người đã lấy trộm xe đạp của tôi ở trước nhà.",
        promptContext:
          "Bạn phát hiện xe đạp của mình bị mất trước cửa nhà và gọi báo cảnh sát.",
        choices: [
          { id: "a", text: "Someone stole my bike from outside my house." },
          { id: "b", text: "I lost my keys somewhere." },
          { id: "c", text: "My neighbor is very loud." },
        ],
        correctAnswer: "a",
        explanation:
          "Đây là câu báo cáo rõ ràng: nói bị mất gì (xe đạp) và ở đâu (trước nhà) — đúng thông tin cảnh sát cần.",
        wrongAnswerExplanations:
          "'I lost my keys somewhere.' là làm mất đồ, không phải bị trộm. 'My neighbor is very loud.' là than phiền tiếng ồn, không liên quan đến việc báo mất trộm.",
        usageTip: "Dùng khi gọi báo cảnh sát về việc đồ đạc bị lấy trộm.",
      },
      {
        id: "em-26-2",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🕐",
        english: "When did you last see it?",
        vietnamese: "Lần cuối anh/chị thấy nó là khi nào?",
        prompt: "Someone stole my bike from outside my house.",
        promptVietnamese: "Có người đã lấy trộm xe đạp của tôi ở trước nhà.",
        choices: [
          { id: "a", text: "When did you last see it?" },
          { id: "b", text: "What color do you like?" },
          { id: "c", text: "Do you want to buy a new one?" },
        ],
        correctAnswer: "a",
        explanation:
          "Cảnh sát cần biết thời gian gần nhất bạn còn thấy đồ vật để xác định khoảng thời gian mất.",
        wrongAnswerExplanations:
          "'What color do you like?' hỏi về sở thích màu sắc, không liên quan. 'Do you want to buy a new one?' là gợi ý mua đồ mới, không phải câu cảnh sát sẽ hỏi.",
        usageTip: "Đây là câu hỏi đầu tiên cảnh sát thường hỏi khi bạn báo mất đồ.",
      },
      {
        id: "em-26-3",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🚲",
        english: "It's a black mountain bike.",
        vietnamese: "Đó là một chiếc xe đạp địa hình màu đen.",
        prompt: "Can you describe the bike?",
        promptVietnamese: "Anh/chị có thể miêu tả chiếc xe đạp không?",
        choices: [
          { id: "a", text: "It's a black mountain bike." },
          { id: "b", text: "It's very expensive." },
          { id: "c", text: "I don't like bikes." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi miêu tả, nên nói màu sắc và loại xe cụ thể để cảnh sát dễ tìm.",
        wrongAnswerExplanations:
          "'It's very expensive.' nói về giá, không mô tả được xe trông ra sao. 'I don't like bikes.' là ý kiến cá nhân, không liên quan đến miêu tả.",
        usageTip: "Dùng khi cảnh sát yêu cầu miêu tả đồ vật bị mất.",
      },
      {
        id: "em-26-4",
        type: "english_to_vietnamese",
        badgeEmoji: "📝",
        english: "I want to file a police report.",
        vietnamese: "Tôi muốn làm đơn báo cáo với cảnh sát.",
        prompt: "I want to file a police report.",
        choices: [
          { id: "a", text: "Tôi muốn làm đơn báo cáo với cảnh sát." },
          { id: "b", text: "Tôi muốn mua bảo hiểm." },
          { id: "c", text: "Tôi muốn gặp bác sĩ." },
        ],
        correctAnswer: "a",
        explanation:
          "'File a police report' nghĩa là 'làm đơn báo cáo với cảnh sát' — câu dùng khi muốn chính thức báo một vụ việc.",
        wrongAnswerExplanations:
          "'Tôi muốn mua bảo hiểm.' và 'Tôi muốn gặp bác sĩ.' đều không liên quan đến việc báo cáo với cảnh sát.",
        usageTip: "Dùng khi muốn yêu cầu cảnh sát lập biên bản chính thức cho vụ việc.",
      },
      {
        id: "em-26-5",
        type: "vietnamese_to_english",
        badgeEmoji: "🚪",
        english: "My door was broken into and some things are missing.",
        vietnamese: "Cửa nhà tôi bị cạy và một số đồ đạc bị mất.",
        promptContext:
          "Bạn muốn nói với cảnh sát rằng cửa nhà bạn đã bị cạy và đồ đạc bên trong bị lấy mất.",
        choices: [
          { id: "a", text: "My door was broken into and some things are missing." },
          { id: "b", text: "My door is very old." },
          { id: "c", text: "I need a new door." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói rõ hai việc: cửa bị cạy (broken into) và có đồ bị mất (missing) — đúng thông tin cần báo cáo.",
        wrongAnswerExplanations:
          "'My door is very old.' và 'I need a new door.' chỉ nói về tình trạng cái cửa, không báo cáo về việc bị trộm.",
        usageTip: "Dùng khi nhà bị đột nhập và cần báo cảnh sát.",
      },
      {
        id: "em-26-6",
        type: "fill_blank",
        badgeEmoji: "👮",
        english: "Can you send an officer to my address?",
        vietnamese: "Anh/chị có thể cử một cảnh sát đến địa chỉ của tôi không?",
        prompt: "Can you send an ___ to my address?",
        choices: [
          { id: "a", text: "officer" },
          { id: "b", text: "doctor" },
          { id: "c", text: "driver" },
        ],
        correctAnswer: "a",
        explanation: "'Officer' nghĩa là cảnh sát — dùng khi yêu cầu cảnh sát đến tận nơi.",
        wrongAnswerExplanations:
          "'Doctor' là bác sĩ, 'driver' là tài xế — cả hai không phù hợp khi báo cáo với cảnh sát.",
        usageTip: "Dùng khi cần cảnh sát đến tận nhà để lập biên bản.",
      },
      {
        id: "em-26-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "What time did this happen?",
        vietnamese: "Việc này xảy ra vào lúc nào?",
        audioText: "What time did this happen?",
        choices: [
          { id: "a", text: "Việc này xảy ra vào lúc nào?" },
          { id: "b", text: "Tên của anh/chị là gì?" },
          { id: "c", text: "Số điện thoại của anh/chị là gì?" },
        ],
        correctAnswer: "a",
        explanation:
          "'What time did this happen?' hỏi về thời điểm xảy ra vụ việc — thông tin quan trọng cảnh sát cần để lập biên bản.",
        wrongAnswerExplanations:
          "Câu gốc không hỏi về tên hay số điện thoại, chỉ hỏi về thời điểm xảy ra.",
        usageTip: "Dùng để nhận diện câu hỏi về thời điểm khi cảnh sát lập biên bản.",
      },
      {
        id: "em-26-8",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🤷",
        english: "No, I didn't see anyone.",
        vietnamese: "Không, tôi không thấy ai cả.",
        prompt: "Do you know who did this?",
        promptVietnamese: "Anh/chị có biết ai đã làm việc này không?",
        choices: [
          { id: "a", text: "No, I didn't see anyone." },
          { id: "b", text: "Yes, it was my bike." },
          { id: "c", text: "I don't need help." },
        ],
        correctAnswer: "a",
        explanation:
          "Nếu không thấy thủ phạm, nên trả lời thật để cảnh sát biết mình không có thông tin đó.",
        wrongAnswerExplanations:
          "'Yes, it was my bike.' lặp lại thông tin đã biết, không trả lời câu hỏi. 'I don't need help.' không liên quan, không nên nói vậy khi đang báo mất trộm.",
        usageTip: "Dùng khi cảnh sát hỏi có biết ai gây ra vụ việc không mà bạn thực sự không biết.",
      },
      {
        id: "em-26-9",
        type: "choose_best_sentence",
        badgeEmoji: "📋",
        english: "Can I get a copy of the report for my insurance?",
        vietnamese: "Tôi có thể lấy một bản sao báo cáo để gửi bảo hiểm không?",
        promptContext:
          "Bạn muốn hỏi cảnh sát xem có thể lấy được một bản sao báo cáo để gửi cho công ty bảo hiểm không.",
        choices: [
          { id: "a", text: "Can I get a copy of the report for my insurance?" },
          { id: "b", text: "Can I get a copy the report for my insurance?" },
          { id: "c", text: "Can I got a copy of the report for my insurance?" },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng cần có 'of' giữa 'copy' và 'the report', và động từ chia đúng thì hiện tại 'get'.",
        wrongAnswerExplanations:
          "'Can I get a copy the report...' thiếu chữ 'of' nên sai ngữ pháp. 'Can I got a copy...' dùng 'got' thay vì 'get' là sai thì.",
        usageTip: "Dùng khi cần bản báo cáo chính thức để làm hồ sơ bảo hiểm.",
      },
      {
        id: "em-26-10",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🙏",
        english: "Thank you, I will keep it safe.",
        vietnamese: "Cảm ơn, tôi sẽ giữ nó cẩn thận.",
        prompt: "Here is your report number. Keep it for your records.",
        promptVietnamese: "Đây là số báo cáo của anh/chị. Hãy giữ lại để làm hồ sơ.",
        choices: [
          { id: "a", text: "Thank you, I will keep it safe." },
          { id: "b", text: "I don't need that." },
          { id: "c", text: "Can you find my bike today?" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được đưa số báo cáo, nên cảm ơn và xác nhận sẽ giữ lại cẩn thận.",
        wrongAnswerExplanations:
          "'I don't need that.' từ chối thông tin quan trọng cần giữ. 'Can you find my bike today?' đặt kỳ vọng không thực tế, cảnh sát không hứa tìm lại ngay trong ngày.",
        usageTip: "Dùng khi kết thúc buổi báo cáo và nhận số hồ sơ từ cảnh sát.",
      },
    ],
  },
  {
    id: "em-27",
    slug: "em-27-bao-cao-xao-tron-1",
    topicId: "emergency",
    title: "Báo cáo một vụ xích mích nhỏ",
    description: "Luyện câu báo cáo khi có tiếng ồn hoặc xích mích nhỏ cần cảnh sát can thiệp.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "em-27-1",
        type: "situation_response",
        badgeEmoji: "🔊",
        english: "My neighbor's music is too loud and it won't stop.",
        vietnamese: "Nhạc của hàng xóm quá to và không chịu tắt.",
        promptContext:
          "Hàng xóm mở nhạc quá lớn vào ban đêm nhiều lần dù bạn đã nhắc nhở, và bạn muốn gọi báo cảnh sát không khẩn cấp.",
        choices: [
          { id: "a", text: "My neighbor's music is too loud and it won't stop." },
          { id: "b", text: "My neighbor is very friendly." },
          { id: "c", text: "I need a plumber." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này mô tả đúng vấn đề: tiếng nhạc quá to kéo dài, đúng lý do gọi báo cáo tiếng ồn.",
        wrongAnswerExplanations:
          "'My neighbor is very friendly.' khen hàng xóm, ngược với tình huống. 'I need a plumber.' là gọi thợ sửa ống nước, không liên quan.",
        usageTip: "Dùng khi cần báo cáo tiếng ồn từ hàng xóm.",
      },
      {
        id: "em-27-2",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "❓",
        english: "No, it's not an emergency, just a noise complaint.",
        vietnamese: "Không, không khẩn cấp, chỉ là than phiền về tiếng ồn thôi.",
        prompt: "Is this an emergency?",
        promptVietnamese: "Đây có phải là trường hợp khẩn cấp không?",
        choices: [
          { id: "a", text: "No, it's not an emergency, just a noise complaint." },
          { id: "b", text: "Yes, someone is hurt." },
          { id: "c", text: "I don't know." },
        ],
        correctAnswer: "a",
        explanation:
          "Nói rõ đây không phải khẩn cấp giúp cảnh sát biết mức độ ưu tiên xử lý phù hợp.",
        wrongAnswerExplanations:
          "'Yes, someone is hurt.' nói có người bị thương, sai sự thật trong tình huống này. 'I don't know.' không rõ ràng, không giúp ích cho cảnh sát.",
        usageTip: "Dùng khi bạn gọi số không khẩn cấp để báo việc nhỏ như tiếng ồn.",
      },
      {
        id: "em-27-3",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🕑",
        english: "It's been going on for about two hours.",
        vietnamese: "Nó đã diễn ra khoảng hai tiếng rồi.",
        prompt: "How long has this been going on?",
        promptVietnamese: "Việc này diễn ra bao lâu rồi?",
        choices: [
          { id: "a", text: "It's been going on for about two hours." },
          { id: "b", text: "It happened last year." },
          { id: "c", text: "I really like music." },
        ],
        correctAnswer: "a",
        explanation:
          "Cảnh sát muốn biết thời gian sự việc diễn ra để đánh giá mức độ, nên trả lời cụ thể bằng thời gian.",
        wrongAnswerExplanations:
          "'It happened last year.' nói về quá khứ rất xa, không đúng với tình huống hiện tại. 'I really like music.' là ý kiến cá nhân, không trả lời câu hỏi.",
        usageTip: "Dùng khi cảnh sát hỏi bạn về khoảng thời gian sự việc kéo dài.",
      },
      {
        id: "em-27-4",
        type: "english_to_vietnamese",
        badgeEmoji: "🏠",
        english: "Can someone come talk to my neighbor?",
        vietnamese: "Có ai đến nói chuyện với hàng xóm của tôi được không?",
        prompt: "Can someone come talk to my neighbor?",
        choices: [
          { id: "a", text: "Có ai đến nói chuyện với hàng xóm của tôi được không?" },
          { id: "b", text: "Có ai đến sửa nhà tôi được không?" },
          { id: "c", text: "Có ai đến bán nhạc cho tôi không?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Talk to my neighbor' nghĩa là 'nói chuyện với hàng xóm' — câu này yêu cầu cảnh sát đến nhắc nhở hàng xóm.",
        wrongAnswerExplanations: "Hai lựa chọn còn lại dịch sai hoàn toàn nội dung câu gốc.",
        usageTip: "Dùng khi muốn nhờ cảnh sát nhắc nhở hàng xóm giúp mình.",
      },
      {
        id: "em-27-5",
        type: "vietnamese_to_english",
        badgeEmoji: "😟",
        english: "Two neighbors are arguing loudly outside and I'm worried.",
        vietnamese: "Hai người hàng xóm đang cãi nhau rất lớn tiếng ở ngoài sân và tôi lo lắng.",
        promptContext:
          "Bạn muốn nói rằng hai người hàng xóm đang cãi nhau rất lớn tiếng ở ngoài sân và bạn lo lắng.",
        choices: [
          { id: "a", text: "Two neighbors are arguing loudly outside and I'm worried." },
          { id: "b", text: "Two neighbors are friends and I'm happy." },
          { id: "c", text: "My neighbor is selling his house." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này truyền đạt đúng tình huống: có tranh cãi lớn tiếng và cảm giác lo lắng của bạn.",
        wrongAnswerExplanations:
          "'Two neighbors are friends and I'm happy.' và 'My neighbor is selling his house.' không liên quan đến việc tranh cãi đang xảy ra.",
        usageTip: "Dùng khi báo cáo một cuộc tranh cãi ồn ào giữa hàng xóm.",
      },
      {
        id: "em-27-6",
        type: "fill_blank",
        badgeEmoji: "🕓",
        english: "Please send someone when you can.",
        vietnamese: "Xin hãy cử người đến khi có thể.",
        prompt: "Please send someone when you ___.",
        choices: [
          { id: "a", text: "can" },
          { id: "b", text: "eat" },
          { id: "c", text: "sleep" },
        ],
        correctAnswer: "a",
        explanation:
          "'When you can' nghĩa là 'khi bạn có thể' — cách nói lịch sự khi báo việc không khẩn cấp.",
        wrongAnswerExplanations: "'Eat' và 'sleep' không có nghĩa phù hợp trong câu này.",
        usageTip: "Dùng khi báo việc không khẩn cấp và không cần cảnh sát đến ngay lập tức.",
      },
      {
        id: "em-27-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "An officer will be there soon.",
        vietnamese: "Một cảnh sát sẽ đến đó sớm thôi.",
        audioText: "An officer will be there soon.",
        choices: [
          { id: "a", text: "Một cảnh sát sẽ đến đó sớm thôi." },
          { id: "b", text: "Không ai sẽ đến cả." },
          { id: "c", text: "Cảnh sát đã đến rồi." },
        ],
        correctAnswer: "a",
        explanation:
          "'Will be there soon' nghĩa là 'sẽ đến sớm' — đây là câu cảnh sát trấn an bạn rằng sẽ có người đến giúp.",
        wrongAnswerExplanations:
          "Câu gốc không nói không ai đến, cũng không nói đã đến rồi — chỉ nói sẽ đến sớm.",
        usageTip: "Dùng để nhận biết khi cảnh sát xác nhận sẽ cử người đến.",
      },
      {
        id: "em-27-8",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🙂",
        english: "Yes, I'm safe, just annoyed by the noise.",
        vietnamese: "Có, tôi an toàn, chỉ khó chịu vì tiếng ồn thôi.",
        prompt: "Do you feel safe right now?",
        promptVietnamese: "Anh/chị có cảm thấy an toàn ngay bây giờ không?",
        choices: [
          { id: "a", text: "Yes, I'm safe, just annoyed by the noise." },
          { id: "b", text: "No, someone has a weapon." },
          { id: "c", text: "I don't understand the question." },
        ],
        correctAnswer: "a",
        explanation:
          "Xác nhận mình an toàn giúp cảnh sát biết mức độ ưu tiên, đồng thời nói rõ vấn đề chỉ là tiếng ồn.",
        wrongAnswerExplanations:
          "'No, someone has a weapon.' mô tả tình huống nguy hiểm hơn nhiều so với thực tế. 'I don't understand the question.' không trả lời câu hỏi được đặt ra.",
        usageTip: "Dùng khi cảnh sát hỏi thăm mức độ an toàn của bạn trong lúc báo việc nhỏ.",
      },
      {
        id: "em-27-9",
        type: "choose_best_sentence",
        badgeEmoji: "🏡",
        english: "Do I need to wait at home for the officer?",
        vietnamese: "Tôi có cần ở nhà chờ cảnh sát đến không?",
        promptContext:
          "Bạn muốn hỏi liệu mình có cần ở nhà chờ cảnh sát đến hay không.",
        choices: [
          { id: "a", text: "Do I need to wait at home for the officer?" },
          { id: "b", text: "Do I need wait at home for the officer?" },
          { id: "c", text: "Do I need to waiting at home for the officer?" },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng cần 'to' trước động từ nguyên mẫu 'wait' — cấu trúc 'need to + verb'.",
        wrongAnswerExplanations:
          "'Do I need wait...' thiếu chữ 'to' nên sai ngữ pháp. 'Do I need to waiting...' dùng 'waiting' (V-ing) thay vì động từ nguyên mẫu là sai.",
        usageTip: "Dùng khi muốn hỏi có cần ở nhà chờ cảnh sát tới hay không.",
      },
      {
        id: "em-27-10",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🤝",
        english: "Thank you for your help.",
        vietnamese: "Cảm ơn vì đã giúp đỡ.",
        prompt: "Thank you for reporting this.",
        promptVietnamese: "Cảm ơn anh/chị đã báo cáo việc này.",
        choices: [
          { id: "a", text: "Thank you for your help." },
          { id: "b", text: "I don't need your help." },
          { id: "c", text: "This is your fault." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi kết thúc cuộc gọi, nên cảm ơn lại lịch sự vì cảnh sát đã hỗ trợ.",
        wrongAnswerExplanations:
          "'I don't need your help.' và 'This is your fault.' đều không phù hợp, nghe thiếu lịch sự sau khi được giúp đỡ.",
        usageTip: "Dùng để kết thúc cuộc gọi báo cáo một cách lịch sự.",
      },
    ],
  },
  {
    id: "em-28",
    slug: "em-28-lam-nhan-chung-1",
    topicId: "emergency",
    title: "Kể lại những gì bạn đã chứng kiến",
    description: "Học cách mô tả sự việc khi bạn là nhân chứng cho cảnh sát.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "em-28-1",
        type: "situation_response",
        badgeEmoji: "👀",
        english: "I saw the whole thing happen.",
        vietnamese: "Tôi đã thấy toàn bộ sự việc xảy ra.",
        promptContext:
          "Bạn vừa chứng kiến một vụ va chạm xe hơi nhỏ ở góc đường và cảnh sát đến hỏi bạn đã thấy gì.",
        choices: [
          { id: "a", text: "I saw the whole thing happen." },
          { id: "b", text: "I was not there." },
          { id: "c", text: "I need to go home now." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi là nhân chứng, nên xác nhận mình đã tận mắt chứng kiến để cảnh sát biết bạn có thông tin hữu ích.",
        wrongAnswerExplanations:
          "'I was not there.' phủ nhận mình có mặt, mâu thuẫn với tình huống. 'I need to go home now.' muốn rời đi ngay, không phù hợp khi cảnh sát đang cần lời khai.",
        usageTip: "Dùng khi cảnh sát hỏi bạn có chứng kiến sự việc không.",
      },
      {
        id: "em-28-2",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🚗",
        english: "The red car ran the red light.",
        vietnamese: "Chiếc xe màu đỏ đã vượt đèn đỏ.",
        prompt: "What did you see?",
        promptVietnamese: "Anh/chị đã thấy gì?",
        choices: [
          { id: "a", text: "The red car ran the red light." },
          { id: "b", text: "The weather was nice today." },
          { id: "c", text: "I parked my car over there." },
        ],
        correctAnswer: "a",
        explanation:
          "Cảnh sát cần thông tin cụ thể về sự việc, nên trả lời trực tiếp điều bạn đã thấy.",
        wrongAnswerExplanations:
          "'The weather was nice today.' nói về thời tiết, không liên quan. 'I parked my car over there.' nói về việc đậu xe của bạn, không phải điều bạn chứng kiến.",
        usageTip: "Dùng khi cảnh sát hỏi bạn đã thấy chuyện gì xảy ra.",
      },
      {
        id: "em-28-3",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "📇",
        english: "Sure, here is my information.",
        vietnamese: "Dạ được, đây là thông tin của tôi.",
        prompt: "Can I get your name and phone number?",
        promptVietnamese: "Tôi có thể xin tên và số điện thoại của anh/chị không?",
        choices: [
          { id: "a", text: "Sure, here is my information." },
          { id: "b", text: "I don't want to give that." },
          { id: "c", text: "I'm in a hurry, sorry." },
        ],
        correctAnswer: "a",
        explanation:
          "Nhân chứng nên hợp tác cung cấp thông tin liên lạc để cảnh sát có thể liên hệ lại nếu cần.",
        wrongAnswerExplanations:
          "'I don't want to give that.' từ chối hợp tác không cần thiết. 'I'm in a hurry, sorry.' muốn rời đi ngay mà không hỗ trợ, không nên nói vậy khi có thể giúp.",
        usageTip: "Dùng khi cảnh sát xin thông tin liên lạc của bạn với tư cách nhân chứng.",
      },
      {
        id: "em-28-4",
        type: "english_to_vietnamese",
        badgeEmoji: "🤔",
        english: "I'm not sure exactly what happened before that.",
        vietnamese: "Tôi không chắc chính xác chuyện gì đã xảy ra trước đó.",
        prompt: "I'm not sure exactly what happened before that.",
        choices: [
          { id: "a", text: "Tôi không chắc chính xác chuyện gì đã xảy ra trước đó." },
          { id: "b", text: "Tôi biết rõ mọi chuyện." },
          { id: "c", text: "Tôi không muốn nói chuyện này." },
        ],
        correctAnswer: "a",
        explanation:
          "'Not sure exactly' nghĩa là 'không chắc chính xác' — câu này thành thật nói rằng bạn không nhớ rõ phần trước.",
        wrongAnswerExplanations:
          "'Tôi biết rõ mọi chuyện.' ngược nghĩa hoàn toàn với câu gốc. 'Tôi không muốn nói chuyện này.' là từ chối nói chuyện, không đúng với ý câu gốc.",
        usageTip: "Dùng khi bạn thành thật không nhớ rõ một phần của sự việc.",
      },
      {
        id: "em-28-5",
        type: "vietnamese_to_english",
        badgeEmoji: "📍",
        english: "I was standing on the corner across the street.",
        vietnamese: "Tôi đang đứng ở góc đường bên kia.",
        promptContext:
          "Bạn muốn nói với cảnh sát rằng bạn đang đứng ở góc đường bên kia khi sự việc xảy ra.",
        choices: [
          { id: "a", text: "I was standing on the corner across the street." },
          { id: "b", text: "I was driving my car." },
          { id: "c", text: "I was sleeping at home." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này nói rõ vị trí của bạn khi chứng kiến sự việc, giúp cảnh sát hiểu góc nhìn của bạn.",
        wrongAnswerExplanations:
          "'I was driving my car.' và 'I was sleeping at home.' mô tả tình huống khác, không phải vị trí đứng nhìn thấy sự việc.",
        usageTip: "Dùng khi mô tả vị trí của mình lúc chứng kiến sự việc.",
      },
      {
        id: "em-28-6",
        type: "fill_blank",
        badgeEmoji: "👕",
        english: "I can describe what the person was wearing.",
        vietnamese: "Tôi có thể miêu tả người đó mặc gì.",
        prompt: "I can describe what the person was ___.",
        choices: [
          { id: "a", text: "wearing" },
          { id: "b", text: "eating" },
          { id: "c", text: "buying" },
        ],
        correctAnswer: "a",
        explanation: "'Wearing' nghĩa là 'đang mặc' — dùng khi miêu tả trang phục của người liên quan.",
        wrongAnswerExplanations:
          "'Eating' và 'buying' không phù hợp khi đang miêu tả ngoại hình một người.",
        usageTip: "Dùng khi cần mô tả đặc điểm của người trong vụ việc.",
      },
      {
        id: "em-28-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Did you get a good look at the driver?",
        vietnamese: "Anh/chị có nhìn rõ tài xế không?",
        audioText: "Did you get a good look at the driver?",
        choices: [
          { id: "a", text: "Anh/chị có nhìn rõ tài xế không?" },
          { id: "b", text: "Anh/chị có biết lái xe không?" },
          { id: "c", text: "Anh/chị có mua xe mới không?" },
        ],
        correctAnswer: "a",
        explanation:
          "'Get a good look' nghĩa là 'nhìn rõ' — câu hỏi này muốn biết bạn có thấy rõ mặt tài xế hay không.",
        wrongAnswerExplanations:
          "Câu gốc không hỏi về khả năng lái xe hay việc mua xe.",
        usageTip: "Dùng để nhận diện câu hỏi cảnh sát hỏi về việc bạn có nhìn rõ ai đó không.",
      },
      {
        id: "em-28-8",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "✍️",
        english: "Yes, I'm happy to write one.",
        vietnamese: "Có, tôi sẵn lòng viết.",
        prompt: "Would you be willing to write a statement?",
        promptVietnamese: "Anh/chị có sẵn lòng viết một bản tường trình không?",
        choices: [
          { id: "a", text: "Yes, I'm happy to write one." },
          { id: "b", text: "No, I don't know how to write." },
          { id: "c", text: "That's too much work for me." },
        ],
        correctAnswer: "a",
        explanation:
          "Đồng ý viết bản tường trình giúp cảnh sát có thêm bằng chứng chính thức, nên trả lời sẵn lòng.",
        wrongAnswerExplanations:
          "'No, I don't know how to write.' và 'That's too much work for me.' đều là từ chối không cần thiết cho một việc đơn giản và hữu ích.",
        usageTip: "Dùng khi cảnh sát hỏi bạn có sẵn lòng viết tường trình không.",
      },
      {
        id: "em-28-9",
        type: "choose_best_sentence",
        badgeEmoji: "⏳",
        english: "I will stay here until you're done with me.",
        vietnamese: "Tôi sẽ ở lại đây cho đến khi anh xong việc với tôi.",
        promptContext:
          "Bạn muốn nói rằng mình sẽ ở lại đây cho đến khi cảnh sát nói xong với mình.",
        choices: [
          { id: "a", text: "I will stay here until you're done with me." },
          { id: "b", text: "I will stay here until you done with me." },
          { id: "c", text: "I will staying here until you're done with me." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng dùng 'you're' (you are) và động từ 'will stay' ở dạng nguyên mẫu sau 'will'.",
        wrongAnswerExplanations:
          "'...until you done with me.' thiếu 'are' trước 'done' nên sai ngữ pháp. 'I will staying...' dùng 'staying' (V-ing) sau 'will' là sai, phải dùng động từ nguyên mẫu.",
        usageTip: "Dùng khi muốn trấn an cảnh sát rằng bạn sẽ ở lại hỗ trợ cho đến khi xong việc.",
      },
      {
        id: "em-28-10",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "😊",
        english: "I'm glad I could help.",
        vietnamese: "Tôi rất vui vì đã giúp được.",
        prompt: "Thank you, this really helps our report.",
        promptVietnamese: "Cảm ơn anh/chị, điều này thực sự giúp ích cho báo cáo của chúng tôi.",
        choices: [
          { id: "a", text: "I'm glad I could help." },
          { id: "b", text: "I don't think it helped." },
          { id: "c", text: "Can I leave now, please?" },
        ],
        correctAnswer: "a",
        explanation: "Đáp lại lời cảm ơn một cách vui vẻ, thể hiện bạn sẵn lòng giúp đỡ.",
        wrongAnswerExplanations:
          "'I don't think it helped.' phủ nhận giá trị lời khai của mình, không cần thiết. 'Can I leave now, please?' chỉ muốn rời đi, nghe không lịch sự khi vừa được cảm ơn.",
        usageTip: "Dùng để đáp lại lời cảm ơn của cảnh sát sau khi cung cấp lời khai.",
      },
    ],
  },
  {
    id: "em-29",
    slug: "em-29-nho-canh-sat-giup-1",
    topicId: "emergency",
    title: "Nhờ cảnh sát giúp đỡ",
    description: "Luyện câu hỏi và nhờ cảnh sát giúp khi bạn cần hỗ trợ.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "em-29-1",
        type: "situation_response",
        badgeEmoji: "🗺️",
        english: "Excuse me, can you help me find this address?",
        vietnamese: "Xin lỗi, anh có thể giúp tôi tìm địa chỉ này không?",
        promptContext:
          "Bạn bị lạc đường và thấy một cảnh sát đang đứng gần đó, bạn muốn hỏi đường.",
        choices: [
          { id: "a", text: "Excuse me, can you help me find this address?" },
          { id: "b", text: "Excuse me, are you busy today?" },
          { id: "c", text: "Excuse me, can I take your picture?" },
        ],
        correctAnswer: "a",
        explanation:
          "Đây là câu lịch sự để nhờ cảnh sát giúp tìm đường, đúng với tình huống bị lạc.",
        wrongAnswerExplanations:
          "'Excuse me, are you busy today?' và 'Excuse me, can I take your picture?' không liên quan đến việc cần tìm đường.",
        usageTip: "Dùng khi bạn bị lạc đường và muốn nhờ cảnh sát chỉ đường.",
      },
      {
        id: "em-29-2",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🚙",
        english: "My car won't start and I'm stuck here.",
        vietnamese: "Xe của tôi không nổ máy được và tôi bị kẹt ở đây.",
        prompt: "What seems to be the problem?",
        promptVietnamese: "Vấn đề là gì vậy?",
        choices: [
          { id: "a", text: "My car won't start and I'm stuck here." },
          { id: "b", text: "I love this neighborhood." },
          { id: "c", text: "I just bought this car." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được hỏi vấn đề là gì, nên nói rõ tình huống cụ thể để được giúp đúng cách.",
        wrongAnswerExplanations:
          "'I love this neighborhood.' và 'I just bought this car.' không nói về vấn đề bạn đang gặp phải.",
        usageTip: "Dùng khi giải thích lý do bạn cần cảnh sát giúp đỡ.",
      },
      {
        id: "em-29-3",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🚚",
        english: "Yes, please, that would be great.",
        vietnamese: "Dạ có, làm ơn giúp tôi, vậy thì tốt quá.",
        prompt: "Do you need me to call a tow truck?",
        promptVietnamese: "Anh/chị có cần tôi gọi xe cứu hộ không?",
        choices: [
          { id: "a", text: "Yes, please, that would be great." },
          { id: "b", text: "No, I like walking." },
          { id: "c", text: "I already have a new car." },
        ],
        correctAnswer: "a",
        explanation: "Khi cần giúp đỡ, nên đồng ý và cảm ơn lời đề nghị của cảnh sát.",
        wrongAnswerExplanations:
          "'No, I like walking.' và 'I already have a new car.' đều không phù hợp với tình huống xe bị hỏng cần cứu hộ.",
        usageTip: "Dùng khi đồng ý nhận sự giúp đỡ cảnh sát đề nghị.",
      },
      {
        id: "em-29-4",
        type: "english_to_vietnamese",
        badgeEmoji: "🌙",
        english: "I feel unsafe walking home alone tonight.",
        vietnamese: "Tôi cảm thấy không an toàn khi đi bộ về nhà một mình tối nay.",
        prompt: "I feel unsafe walking home alone tonight.",
        choices: [
          { id: "a", text: "Tôi cảm thấy không an toàn khi đi bộ về nhà một mình tối nay." },
          { id: "b", text: "Tôi thích đi bộ vào ban đêm." },
          { id: "c", text: "Tôi muốn mua một chiếc xe mới." },
        ],
        correctAnswer: "a",
        explanation:
          "'Unsafe' nghĩa là 'không an toàn' — câu này nói lên cảm giác lo lắng khi phải đi bộ một mình vào ban đêm.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại không đúng với cảm giác lo lắng được diễn tả trong câu gốc.",
        usageTip: "Dùng khi bạn cảm thấy không an toàn và muốn nhờ cảnh sát hỗ trợ.",
      },
      {
        id: "em-29-5",
        type: "vietnamese_to_english",
        badgeEmoji: "🏥",
        english: "Can you tell me how to get to the nearest hospital?",
        vietnamese: "Anh có thể chỉ tôi cách đến bệnh viện gần nhất không?",
        promptContext:
          "Bạn muốn nhờ cảnh sát chỉ cho bạn cách đến bệnh viện gần nhất vì bạn không quen đường.",
        choices: [
          { id: "a", text: "Can you tell me how to get to the nearest hospital?" },
          { id: "b", text: "Can you tell me your name?" },
          { id: "c", text: "Can you buy me some food?" },
        ],
        correctAnswer: "a",
        explanation: "Câu này hỏi đúng điều bạn cần: đường đến bệnh viện gần nhất.",
        wrongAnswerExplanations:
          "'Can you tell me your name?' và 'Can you buy me some food?' không liên quan đến việc hỏi đường đến bệnh viện.",
        usageTip: "Dùng khi cần hỏi đường đến một nơi quan trọng như bệnh viện.",
      },
      {
        id: "em-29-6",
        type: "fill_blank",
        badgeEmoji: "➡️",
        english: "Can you point me in the right direction?",
        vietnamese: "Anh có thể chỉ tôi đi đúng hướng không?",
        prompt: "Can you point me in the right ___?",
        choices: [
          { id: "a", text: "direction" },
          { id: "b", text: "restaurant" },
          { id: "c", text: "color" },
        ],
        correctAnswer: "a",
        explanation:
          "'Direction' nghĩa là 'hướng đi' — cụm từ 'point in the right direction' nghĩa là chỉ đúng đường.",
        wrongAnswerExplanations:
          "'Restaurant' và 'color' không phù hợp về nghĩa trong câu hỏi đường.",
        usageTip: "Dùng khi cần nhờ ai đó chỉ đường cho mình.",
      },
      {
        id: "em-29-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Stay here, I'll help you in a moment.",
        vietnamese: "Cứ đứng đây, tôi sẽ giúp anh/chị ngay thôi.",
        audioText: "Stay here, I'll help you in a moment.",
        choices: [
          { id: "a", text: "Cứ đứng đây, tôi sẽ giúp anh/chị ngay thôi." },
          { id: "b", text: "Đi theo tôi ngay bây giờ." },
          { id: "c", text: "Tôi không thể giúp anh/chị." },
        ],
        correctAnswer: "a",
        explanation:
          "'In a moment' nghĩa là 'trong chốc lát' — cảnh sát yêu cầu bạn chờ một chút vì sẽ giúp ngay.",
        wrongAnswerExplanations:
          "Câu gốc không yêu cầu đi theo ngay, cũng không từ chối giúp đỡ.",
        usageTip: "Dùng để hiểu khi cảnh sát bảo bạn chờ trong giây lát.",
      },
      {
        id: "em-29-8",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🧭",
        english: "Yes, I'm just looking for this street.",
        vietnamese: "Dạ tôi ổn, tôi chỉ đang tìm con đường này thôi.",
        prompt: "Are you okay? You look lost.",
        promptVietnamese: "Anh/chị ổn không? Trông có vẻ bị lạc.",
        choices: [
          { id: "a", text: "Yes, I'm just looking for this street." },
          { id: "b", text: "No, I don't need anything." },
          { id: "c", text: "I'm going home now." },
        ],
        correctAnswer: "a",
        explanation:
          "Trả lời cụ thể lý do mình có vẻ bối rối giúp cảnh sát hiểu và giúp đúng việc.",
        wrongAnswerExplanations:
          "'No, I don't need anything.' từ chối giúp đỡ dù đang cần, không hợp lý. 'I'm going home now.' không giải thích được vấn đề, không hữu ích cho cảnh sát.",
        usageTip: "Dùng khi cảnh sát chủ động hỏi thăm vì thấy bạn có vẻ lạc đường.",
      },
      {
        id: "em-29-9",
        type: "choose_best_sentence",
        badgeEmoji: "🅿️",
        english: "Is it safe to park here overnight?",
        vietnamese: "Đậu xe ở đây qua đêm có an toàn không?",
        promptContext:
          "Bạn muốn hỏi cảnh sát xem nơi này có an toàn để đậu xe qua đêm không.",
        choices: [
          { id: "a", text: "Is it safe to park here overnight?" },
          { id: "b", text: "Is it safe park here overnight?" },
          { id: "c", text: "Is safe it to park here overnight?" },
        ],
        correctAnswer: "a",
        explanation:
          "Câu đúng cần 'to' trước động từ 'park', và trật tự từ chuẩn là 'Is it safe to...'.",
        wrongAnswerExplanations:
          "'Is it safe park here...' thiếu chữ 'to' trước động từ. 'Is safe it to park...' đảo sai vị trí của 'it', làm câu sai ngữ pháp.",
        usageTip: "Dùng khi muốn hỏi về sự an toàn của một địa điểm đậu xe.",
      },
      {
        id: "em-29-10",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "✅",
        english: "No, thank you, that's all I needed.",
        vietnamese: "Không, cảm ơn, đó là tất cả những gì tôi cần.",
        prompt: "Here's the address. Do you need anything else?",
        promptVietnamese: "Đây là địa chỉ. Anh/chị còn cần gì nữa không?",
        choices: [
          { id: "a", text: "No, thank you, that's all I needed." },
          { id: "b", text: "Yes, give me your car." },
          { id: "c", text: "I still don't understand anything." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi đã nhận đủ thông tin cần thiết, nên cảm ơn và xác nhận không cần thêm gì.",
        wrongAnswerExplanations:
          "'Yes, give me your car.' là yêu cầu vô lý, không liên quan. 'I still don't understand anything.' nghe như vẫn chưa hiểu dù đã được giúp đầy đủ.",
        usageTip: "Dùng để kết thúc cuộc trò chuyện sau khi được cảnh sát giúp đỡ xong.",
      },
    ],
  },
  {
    id: "em-30",
    slug: "em-30-tra-loi-canh-sat-binh-tinh-1",
    topicId: "emergency",
    title: "Trả lời câu hỏi của cảnh sát một cách bình tĩnh",
    description: "Luyện cách giữ bình tĩnh và trả lời rõ ràng khi cảnh sát hỏi thông tin cơ bản.",
    level: "beginner",
    section: "BẮT ĐẦU",
    questions: [
      {
        id: "em-30-1",
        type: "situation_response",
        badgeEmoji: "🙂",
        english: "Sure, I can answer your questions.",
        vietnamese: "Dạ được, tôi có thể trả lời câu hỏi của anh.",
        promptContext:
          "Cảnh sát dừng bạn lại để hỏi vài câu cơ bản sau một sự việc nhỏ trong khu phố. Bạn muốn giữ bình tĩnh và hợp tác.",
        choices: [
          { id: "a", text: "Sure, I can answer your questions." },
          { id: "b", text: "I don't have time for this." },
          { id: "c", text: "Why are you asking me?" },
        ],
        correctAnswer: "a",
        explanation:
          "Giữ thái độ hợp tác và bình tĩnh giúp buổi trao đổi diễn ra suôn sẻ hơn.",
        wrongAnswerExplanations:
          "'I don't have time for this.' và 'Why are you asking me?' đều thể hiện thái độ khó chịu, không nên nói vậy với cảnh sát.",
        usageTip: "Dùng khi cảnh sát muốn hỏi bạn vài câu và bạn sẵn lòng hợp tác.",
      },
      {
        id: "em-30-2",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🪪",
        english: "Yes, here it is.",
        vietnamese: "Dạ được, đây ạ.",
        prompt: "Can I see your ID, please?",
        promptVietnamese: "Tôi có thể xem giấy tờ tùy thân của anh/chị không?",
        choices: [
          { id: "a", text: "Yes, here it is." },
          { id: "b", text: "I don't have any ID." },
          { id: "c", text: "Why do you need to see it?" },
        ],
        correctAnswer: "a",
        explanation:
          "Khi cảnh sát yêu cầu xem giấy tờ, nên đưa ra ngay một cách hợp tác và bình tĩnh.",
        wrongAnswerExplanations:
          "'I don't have any ID.' chỉ nên nói nếu thực sự không mang giấy tờ. 'Why do you need to see it?' nghe như đang thắc mắc phản đối, không nên nói với giọng khó chịu.",
        usageTip: "Dùng khi cảnh sát yêu cầu xem giấy tờ tùy thân của bạn.",
      },
      {
        id: "em-30-3",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🙋",
        english: "My name is Lan Nguyen.",
        vietnamese: "Tên tôi là Lan Nguyễn.",
        prompt: "What's your name, please?",
        promptVietnamese: "Tên anh/chị là gì?",
        choices: [
          { id: "a", text: "My name is Lan Nguyen." },
          { id: "b", text: "I live near here." },
          { id: "c", text: "I'm fine, thank you." },
        ],
        correctAnswer: "a",
        explanation: "Khi được hỏi tên, nên trả lời trực tiếp và rõ ràng.",
        wrongAnswerExplanations:
          "'I live near here.' và 'I'm fine, thank you.' không trả lời đúng câu hỏi về tên.",
        usageTip: "Dùng khi cảnh sát hỏi tên của bạn.",
      },
      {
        id: "em-30-4",
        type: "english_to_vietnamese",
        badgeEmoji: "😌",
        english: "I understand, officer. I'll stay calm.",
        vietnamese: "Tôi hiểu rồi, thưa cảnh sát. Tôi sẽ giữ bình tĩnh.",
        prompt: "I understand, officer. I'll stay calm.",
        choices: [
          { id: "a", text: "Tôi hiểu rồi, thưa cảnh sát. Tôi sẽ giữ bình tĩnh." },
          { id: "b", text: "Tôi không hiểu gì cả." },
          { id: "c", text: "Tôi rất tức giận bây giờ." },
        ],
        correctAnswer: "a",
        explanation:
          "'Stay calm' nghĩa là 'giữ bình tĩnh' — câu này thể hiện thái độ hợp tác và điềm tĩnh.",
        wrongAnswerExplanations:
          "Hai lựa chọn còn lại đều ngược với thái độ bình tĩnh, hợp tác được thể hiện trong câu gốc.",
        usageTip: "Dùng để trấn an bản thân và thể hiện sự hợp tác với cảnh sát.",
      },
      {
        id: "em-30-5",
        type: "vietnamese_to_english",
        badgeEmoji: "🤝",
        english: "I'm willing to answer all your questions honestly.",
        vietnamese: "Tôi sẵn sàng trả lời mọi câu hỏi của anh một cách trung thực.",
        promptContext:
          "Bạn muốn nói với cảnh sát rằng bạn sẵn sàng trả lời mọi câu hỏi một cách trung thực.",
        choices: [
          { id: "a", text: "I'm willing to answer all your questions honestly." },
          { id: "b", text: "I don't want to talk to you." },
          { id: "c", text: "I already told everyone everything." },
        ],
        correctAnswer: "a",
        explanation:
          "Câu này thể hiện đúng thái độ sẵn sàng và trung thực khi trả lời cảnh sát.",
        wrongAnswerExplanations:
          "'I don't want to talk to you.' thể hiện thái độ không hợp tác. 'I already told everyone everything.' không phù hợp nếu bạn chưa từng kể chuyện này cho ai.",
        usageTip: "Dùng để thể hiện thiện chí hợp tác ngay từ đầu buổi làm việc với cảnh sát.",
      },
      {
        id: "em-30-6",
        type: "fill_blank",
        badgeEmoji: "🐢",
        english: "Please speak slowly, I want to understand you.",
        vietnamese: "Xin nói chậm lại, tôi muốn hiểu rõ anh.",
        prompt: "Please speak ___, I want to understand you.",
        choices: [
          { id: "a", text: "slowly" },
          { id: "b", text: "quickly" },
          { id: "c", text: "loudly" },
        ],
        correctAnswer: "a",
        explanation:
          "'Slowly' nghĩa là 'chậm lại' — dùng khi bạn cần thêm thời gian để hiểu câu hỏi bằng tiếng Anh.",
        wrongAnswerExplanations:
          "'Quickly' nghĩa là 'nhanh' và 'loudly' nghĩa là 'lớn tiếng', cả hai đều ngược với điều bạn cần lúc này.",
        usageTip: "Dùng khi bạn cần cảnh sát nói chậm lại để hiểu rõ hơn.",
      },
      {
        id: "em-30-7",
        type: "listening",
        badgeEmoji: "🎧",
        english: "Just relax and answer honestly.",
        vietnamese: "Cứ thư giãn và trả lời trung thực thôi.",
        audioText: "Just relax and answer honestly.",
        choices: [
          { id: "a", text: "Cứ thư giãn và trả lời trung thực thôi." },
          { id: "b", text: "Anh phải trả lời ngay lập tức." },
          { id: "c", text: "Anh không cần trả lời gì cả." },
        ],
        correctAnswer: "a",
        explanation:
          "'Relax' nghĩa là 'thư giãn' — cảnh sát đang trấn an bạn để trả lời một cách bình tĩnh và thành thật.",
        wrongAnswerExplanations:
          "Câu gốc không yêu cầu trả lời ngay lập tức, cũng không nói bạn không cần trả lời.",
        usageTip: "Dùng để hiểu khi cảnh sát trấn an bạn trước khi hỏi thêm.",
      },
      {
        id: "em-30-8",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🗣️",
        english: "Yes, let me explain from the beginning.",
        vietnamese: "Dạ được, để tôi kể từ đầu.",
        prompt: "Can you tell me what happened in your own words?",
        promptVietnamese: "Anh/chị có thể kể lại chuyện gì đã xảy ra theo cách của mình không?",
        choices: [
          { id: "a", text: "Yes, let me explain from the beginning." },
          { id: "b", text: "I don't remember anything at all." },
          { id: "c", text: "Ask someone else, not me." },
        ],
        correctAnswer: "a",
        explanation:
          "Khi được yêu cầu kể lại, nên đồng ý và bắt đầu kể một cách có trình tự.",
        wrongAnswerExplanations:
          "'I don't remember anything at all.' có thể gây khó khăn cho việc tìm hiểu sự việc nếu không đúng sự thật. 'Ask someone else, not me.' từ chối hợp tác, không nên nói vậy khi bạn có thể giúp.",
        usageTip: "Dùng khi cảnh sát muốn nghe bạn kể lại toàn bộ sự việc.",
      },
      {
        id: "em-30-9",
        type: "choose_best_sentence",
        badgeEmoji: "💬",
        english: "I'll answer as best as I can.",
        vietnamese: "Tôi sẽ trả lời hết sức có thể.",
        promptContext:
          "Bạn muốn nói rằng mình sẽ trả lời hết sức có thể, dù tiếng Anh của mình chưa tốt lắm.",
        choices: [
          { id: "a", text: "I'll answer as best as I can." },
          { id: "b", text: "I'll answer as best I can." },
          { id: "c", text: "I'll answer good as I can." },
        ],
        correctAnswer: "a",
        explanation:
          "'As best as I can' là cách nói đúng và phổ biến để diễn tả 'hết sức có thể'.",
        wrongAnswerExplanations:
          "'I'll answer as best I can.' bỏ chữ 'as' thứ hai nên nghe chưa trọn vẹn theo cấu trúc chuẩn được dạy ở đây. 'I'll answer good as I can.' dùng 'good' thay vì 'best', sai dạng so sánh.",
        usageTip: "Dùng khi muốn nói mình sẽ cố gắng trả lời tốt nhất có thể dù ngôn ngữ còn hạn chế.",
      },
      {
        id: "em-30-10",
        type: "conversation_response",
        speaker: "Cảnh sát",
        badgeEmoji: "🙏",
        english: "Thank you for being patient with me.",
        vietnamese: "Cảm ơn anh đã kiên nhẫn với tôi.",
        prompt: "Thank you for staying calm and cooperating.",
        promptVietnamese: "Cảm ơn anh/chị đã giữ bình tĩnh và hợp tác.",
        choices: [
          { id: "a", text: "Thank you for being patient with me." },
          { id: "b", text: "You are wasting my time." },
          { id: "c", text: "I don't trust you." },
        ],
        correctAnswer: "a",
        explanation: "Đáp lại lời khen bằng lời cảm ơn chân thành, thể hiện thiện chí hai bên.",
        wrongAnswerExplanations:
          "'You are wasting my time.' và 'I don't trust you.' đều thể hiện thái độ tiêu cực, không phù hợp sau một buổi trao đổi hợp tác.",
        usageTip: "Dùng để kết thúc buổi làm việc với cảnh sát một cách lịch sự.",
      },
    ],
  },
];
