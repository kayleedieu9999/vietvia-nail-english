import { Story } from "@/types/story";

/**
 * First fully-built "Story dài" — a Vietnamese nail tech's busy Saturday.
 * Cơ bản level: short sentences, common words, natural (not robotic) slow
 * audio via the existing SLOW_SPEECH_RATE convention.
 */
export const motNgayDongKhachStory: Story = {
  id: "story-mot-ngay-dong-khach",
  slug: "mot-ngay-dong-khach",
  title: "Một ngày đông khách ở tiệm Nails",
  category: "nails",
  level: "co-ban",
  estimatedMinutes: 5,
  coverImage: "/images/story-busy-salon.png",
  coverImageAlt: "Tiệm nails đông khách vào một buổi chiều thứ Bảy",
  description: "Một thợ nails người Việt trải qua một ngày thứ Bảy bận rộn nhưng vui vẻ.",
  sections: [
    {
      id: "part-1",
      title: "Getting to the salon",
      audioText:
        "It was Saturday morning. Lan arrived at the nail salon at nine o'clock. The parking lot was empty. She unlocked the door and turned on the lights. She checked her schedule for the day. She had five appointments, but it was still early.",
      vietnamese:
        "Đó là sáng thứ Bảy. Lan đến tiệm nails lúc chín giờ. Bãi đậu xe còn vắng. Cô mở cửa và bật đèn. Cô xem lịch hẹn trong ngày. Cô có năm cuộc hẹn, nhưng vẫn còn sớm.",
      question: {
        question: "What time did Lan arrive at the salon?",
        choices: [
          { id: "a", text: "Eight o'clock" },
          { id: "b", text: "Nine o'clock" },
          { id: "c", text: "Ten o'clock" },
        ],
        correctAnswer: "b",
      },
      reaction: {
        cue: "Good morning! Are you open yet?",
        cueVietnamese: "Chào buổi sáng! Tiệm mở cửa chưa vậy?",
        modelAnswer: "Yes, come on in! I'm ready for you.",
        modelAnswerVietnamese: "Dạ mở rồi! Mời chị vào, tôi sẵn sàng rồi.",
      },
    },
    {
      id: "part-2",
      title: "The first customer",
      audioText:
        "At nine thirty, Mrs. Parker walked in. She was a regular customer. \"Good morning! The usual pink color, please,\" she said. Lan smiled and got her station ready. They talked about the weekend while Lan worked.",
      vietnamese:
        "Chín giờ rưỡi, bà Parker bước vào. Bà là khách quen. \"Chào buổi sáng! Cho tôi màu hồng như mọi khi nhé,\" bà nói. Lan mỉm cười và chuẩn bị chỗ ngồi. Họ vừa trò chuyện về cuối tuần vừa làm móng.",
      question: {
        question: "What color did Mrs. Parker want?",
        choices: [
          { id: "a", text: "Red" },
          { id: "b", text: "Blue" },
          { id: "c", text: "Pink" },
        ],
        correctAnswer: "c",
      },
      reaction: {
        cue: "So, do you have any plans for the weekend?",
        cueVietnamese: "Vậy cuối tuần chị có dự định gì không?",
        modelAnswer: "Not much, just relaxing at home.",
        modelAnswerVietnamese: "Không có gì nhiều, chỉ ở nhà nghỉ ngơi thôi.",
      },
    },
    {
      id: "part-3",
      title: "The salon gets busy",
      audioText:
        "By eleven o'clock, three more customers arrived at the same time. Every chair was full. The phone kept ringing. Lan's coworker, Mai, came in early to help. \"Wow, it's busy today!\" Mai said. Lan nodded. \"Yes, very busy. But that's a good thing!\"",
      vietnamese:
        "Đến mười một giờ, thêm ba khách đến cùng lúc. Ghế nào cũng có người ngồi. Điện thoại reo liên tục. Mai, đồng nghiệp của Lan, đến sớm để phụ giúp. \"Wow, hôm nay đông quá!\" Mai nói. Lan gật đầu. \"Ừ, đông thật. Nhưng vậy là tốt mà!\"",
      question: {
        question: "What was the salon like by eleven o'clock?",
        choices: [
          { id: "a", text: "It was empty." },
          { id: "b", text: "It was very busy." },
          { id: "c", text: "It was closing." },
        ],
        correctAnswer: "b",
      },
      reaction: {
        cue: "Do you need any help today?",
        cueVietnamese: "Hôm nay chị có cần tôi phụ không?",
        modelAnswer: "Yes, please! I really need it today.",
        modelAnswerVietnamese: "Có chứ! Hôm nay tôi cần phụ lắm.",
      },
    },
    {
      id: "part-4",
      title: "A customer changes her mind",
      audioText:
        "One customer, Sarah, looked at her nails and paused. \"I'm sorry, but I think this color is too dark,\" she said. Lan stayed calm. \"No problem at all. We can try a lighter color,\" she answered. Sarah smiled, relieved.",
      vietnamese:
        "Một khách tên Sarah nhìn móng tay và ngập ngừng. \"Xin lỗi, nhưng tôi thấy màu này hơi tối,\" cô nói. Lan vẫn bình tĩnh. \"Không sao đâu ạ. Mình thử màu sáng hơn nhé,\" cô trả lời. Sarah mỉm cười, nhẹ nhõm.",
      question: {
        question: "What was Sarah's problem?",
        choices: [
          { id: "a", text: "The color was too dark." },
          { id: "b", text: "The price was too high." },
          { id: "c", text: "She was late." },
        ],
        correctAnswer: "a",
      },
      reaction: {
        cue: "I'm sorry, but I think this color is too dark.",
        cueVietnamese: "Xin lỗi, nhưng tôi thấy màu này hơi tối.",
        modelAnswer: "No problem. We can try a lighter color.",
        modelAnswerVietnamese: "Không sao đâu. Mình thử màu sáng hơn nhé.",
      },
    },
    {
      id: "part-5",
      title: "A phone call for an appointment",
      audioText:
        "The phone rang again. \"Nail salon, how can I help you?\" Lan answered. A woman asked, \"Hi, are you available this afternoon?\" Lan checked the schedule. \"Yes, we have an opening at four o'clock.\" \"Perfect, I'll take it,\" the woman said.",
      vietnamese:
        "Điện thoại lại reo. \"Tiệm nails xin nghe, tôi giúp gì được ạ?\" Lan trả lời. Một phụ nữ hỏi, \"Chào, chiều nay tiệm có rảnh không ạ?\" Lan xem lịch. \"Dạ có, bốn giờ chiều còn trống.\" \"Vậy tốt quá, cho tôi đặt giờ đó,\" người phụ nữ nói.",
      question: {
        question: "What time was the opening?",
        choices: [
          { id: "a", text: "Two o'clock" },
          { id: "b", text: "Four o'clock" },
          { id: "c", text: "Six o'clock" },
        ],
        correctAnswer: "b",
      },
      reaction: {
        cue: "Hi, are you available this afternoon?",
        cueVietnamese: "Chào, chiều nay tiệm có rảnh không ạ?",
        modelAnswer: "Yes, we have an opening at four o'clock.",
        modelAnswerVietnamese: "Dạ có, bốn giờ chiều còn trống.",
      },
    },
    {
      id: "part-6",
      title: "The end of the day",
      audioText:
        "By six o'clock, the last customer left. Lan cleaned her station and turned off the lights. She was tired, but happy. Every customer left with a smile. \"That was a great day,\" she thought, and drove home.",
      vietnamese:
        "Đến sáu giờ, khách cuối cùng ra về. Lan dọn dẹp chỗ làm và tắt đèn. Cô mệt, nhưng vui. Khách nào ra về cũng cười tươi. \"Hôm nay thật là một ngày tuyệt vời,\" cô nghĩ, rồi lái xe về nhà.",
      question: {
        question: "How did Lan feel at the end of the day?",
        choices: [
          { id: "a", text: "Angry" },
          { id: "b", text: "Bored" },
          { id: "c", text: "Tired but happy" },
        ],
        correctAnswer: "c",
      },
      reaction: {
        cue: "How was your day today?",
        cueVietnamese: "Hôm nay của bạn thế nào?",
        modelAnswer: "It was busy, but it was a good day.",
        modelAnswerVietnamese: "Hôm nay bận lắm, nhưng là một ngày tốt.",
      },
    },
  ],
  vocabulary: [
    { english: "busy", ipa: "/ˈbɪzi/", vietnamese: "bận rộn, đông khách", sentence: "Wow, it's busy today!" },
    {
      english: "appointment",
      ipa: "/əˈpɔɪntmənt/",
      vietnamese: "cuộc hẹn",
      sentence: "She had five appointments, but it was still early.",
    },
    {
      english: "available",
      ipa: "/əˈveɪləbəl/",
      vietnamese: "còn rảnh, còn trống",
      sentence: "Hi, are you available this afternoon?",
    },
    {
      english: "lighter",
      ipa: "/ˈlaɪtər/",
      vietnamese: "sáng hơn (màu)",
      sentence: "No problem. We can try a lighter color.",
    },
    { english: "calm", ipa: "/kɑːm/", vietnamese: "bình tĩnh", sentence: "Lan stayed calm." },
  ],
};
