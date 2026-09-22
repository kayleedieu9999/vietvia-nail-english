import { Story } from "@/types/story";

/**
 * Second "Story dài" — a calm, realistic domestic flight from check-in to
 * baggage claim. Cơ bản level: same short-sentence, common-word style and
 * pacing as `mot-ngay-dong-khach.ts`.
 */
export const motChuyenBayStory: Story = {
  id: "story-mot-chuyen-bay",
  slug: "mot-chuyen-bay",
  title: "Một chuyến bay đến Chicago",
  category: "san-bay",
  level: "co-ban",
  estimatedMinutes: 5,
  coverImage: "/images/roadmap/san-bay.jpg",
  coverImageAlt: "Hành khách tại sân bay chuẩn bị lên một chuyến bay nội địa",
  description: "Anh Minh trải qua từng bước của một chuyến bay nội địa ở Mỹ, từ check-in đến lúc nhận hành lý.",
  sections: [
    {
      id: "part-1",
      title: "Check-in tại sân bay",
      audioText:
        "Minh got to the airport two hours before his flight. He walked to the check-in counter and gave the agent his ID. \"Where are you flying today?\" the agent asked. \"I'm flying to Chicago,\" Minh said. The agent printed his boarding pass and told him his gate number.",
      vietnamese:
        "Minh đến sân bay trước giờ bay hai tiếng. Anh đi đến quầy check-in và đưa giấy tờ tùy thân cho nhân viên. \"Hôm nay anh bay đi đâu vậy?\" nhân viên hỏi. \"Tôi bay đi Chicago,\" Minh trả lời. Nhân viên in thẻ lên máy bay và cho anh biết số cổng.",
      question: {
        question: "Where did Minh give his ID?",
        choices: [
          { id: "a", text: "At the security line" },
          { id: "b", text: "At the check-in counter" },
          { id: "c", text: "At the gate" },
        ],
        correctAnswer: "b",
      },
      reaction: {
        cue: "Where are you flying today?",
        cueVietnamese: "Hôm nay anh bay đi đâu vậy?",
        modelAnswer: "I'm flying to Chicago.",
        modelAnswerVietnamese: "Tôi bay đi Chicago.",
      },
    },
    {
      id: "part-2",
      title: "Qua cổng an ninh",
      audioText:
        "Next, Minh walked to the security line. It was a little long, but it moved fast. He took off his shoes and put his laptop in a bin. A TSA officer looked at his boarding pass and said, \"You can go ahead.\" Minh picked up his things and walked toward his gate.",
      vietnamese:
        "Tiếp theo, Minh đi đến khu vực an ninh. Hàng chờ hơi dài, nhưng di chuyển khá nhanh. Anh cởi giày ra và bỏ laptop vào khay. Một nhân viên TSA nhìn thẻ lên máy bay của anh và nói, \"Anh đi tiếp được rồi.\" Minh cầm đồ đạc lên và đi về phía cổng của mình.",
      question: {
        question: "What did the TSA officer look at before letting Minh go?",
        choices: [
          { id: "a", text: "His boarding pass" },
          { id: "b", text: "His shoes" },
          { id: "c", text: "His phone" },
        ],
        correctAnswer: "a",
      },
      reaction: {
        cue: "You can go ahead.",
        cueVietnamese: "Anh đi tiếp được rồi.",
        modelAnswer: "Thank you, have a good day.",
        modelAnswerVietnamese: "Cảm ơn chị, chúc chị một ngày tốt lành.",
      },
    },
    {
      id: "part-3",
      title: "Chờ ở cổng lên máy bay",
      audioText:
        "Minh found gate B14 and sat down near the window. He had some time, so he bought a coffee at a small shop nearby. A woman walked up and asked if the seat next to him was free. They talked a little while they waited for the flight.",
      vietnamese:
        "Minh tìm thấy cổng B14 và ngồi xuống gần cửa sổ. Anh còn thời gian nên mua một ly cà phê ở tiệm gần đó. Một người phụ nữ đến hỏi xem chỗ ngồi bên cạnh anh có trống không. Họ trò chuyện một chút trong lúc chờ chuyến bay.",
      question: {
        question: "What did Minh buy while he waited at the gate?",
        choices: [
          { id: "a", text: "A sandwich" },
          { id: "b", text: "A magazine" },
          { id: "c", text: "A coffee" },
        ],
        correctAnswer: "c",
      },
      reaction: {
        cue: "Excuse me, is this seat taken?",
        cueVietnamese: "Xin lỗi, chỗ này có ai ngồi chưa vậy?",
        modelAnswer: "No, go ahead, it's free.",
        modelAnswerVietnamese: "Chưa ai ngồi đâu, mời chị ngồi.",
      },
    },
    {
      id: "part-4",
      title: "Lên máy bay",
      audioText:
        "Soon, Minh heard his flight announced for boarding. He lined up and handed his boarding pass to the gate agent. \"Have a nice flight!\" she said with a smile. Minh walked down the jet bridge and found his seat, 14C, near the window.",
      vietnamese:
        "Chẳng bao lâu, Minh nghe thông báo chuyến bay của mình bắt đầu lên máy bay. Anh xếp hàng và đưa thẻ lên máy bay cho nhân viên ở cổng. \"Chúc anh có chuyến bay vui vẻ!\" cô mỉm cười nói. Minh đi qua cầu lên máy bay và tìm thấy chỗ ngồi của mình, ghế 14C, cạnh cửa sổ.",
      question: {
        question: "What was Minh's seat number?",
        choices: [
          { id: "a", text: "12A" },
          { id: "b", text: "14C" },
          { id: "c", text: "20B" },
        ],
        correctAnswer: "b",
      },
      reaction: {
        cue: "Have a nice flight!",
        cueVietnamese: "Chúc anh có chuyến bay vui vẻ!",
        modelAnswer: "Thank you so much!",
        modelAnswerVietnamese: "Cảm ơn chị nhiều!",
      },
    },
    {
      id: "part-5",
      title: "Xin nước trên máy bay",
      audioText:
        "After takeoff, Minh felt a little thirsty. When the flight attendant came by with the drink cart, he raised his hand. \"Could I have some water, please?\" he asked. \"Of course, here you go,\" she said, handing him a cup. Minh thanked her and relaxed in his seat.",
      vietnamese:
        "Sau khi cất cánh, Minh cảm thấy hơi khát nước. Khi tiếp viên hàng không đẩy xe nước đi ngang qua, anh giơ tay lên. \"Cho tôi xin ít nước được không?\" anh hỏi. \"Dạ được, đây ạ,\" cô đưa cho anh một ly nước. Minh cảm ơn cô rồi ngồi thư giãn.",
      question: {
        question: "What did Minh ask the flight attendant for?",
        choices: [
          { id: "a", text: "Coffee" },
          { id: "b", text: "Water" },
          { id: "c", text: "A blanket" },
        ],
        correctAnswer: "b",
      },
      reaction: {
        cue: "Would you like something to drink?",
        cueVietnamese: "Anh có muốn uống gì không?",
        modelAnswer: "Yes, could I have some water, please?",
        modelAnswerVietnamese: "Dạ có, cho tôi xin ít nước được không?",
      },
    },
    {
      id: "part-6",
      title: "Trò chuyện với người ngồi cạnh",
      audioText:
        "Later in the flight, the man next to Minh started a conversation. \"Are you going to Chicago for work or vacation?\" he asked. \"I'm visiting my daughter,\" Minh answered. They talked for a few minutes about their trips. Then the pilot announced that the plane would land soon.",
      vietnamese:
        "Sau đó trong chuyến bay, người đàn ông ngồi cạnh Minh bắt chuyện. \"Anh đi Chicago để làm việc hay đi chơi vậy?\" anh ấy hỏi. \"Tôi đi thăm con gái tôi,\" Minh trả lời. Họ trò chuyện vài phút về chuyến đi của mình. Sau đó phi công thông báo máy bay sắp hạ cánh.",
      question: {
        question: "Why was Minh going to Chicago?",
        choices: [
          { id: "a", text: "For work" },
          { id: "b", text: "For vacation" },
          { id: "c", text: "To visit his daughter" },
        ],
        correctAnswer: "c",
      },
      reaction: {
        cue: "Are you going to Chicago for work or vacation?",
        cueVietnamese: "Anh đi Chicago để làm việc hay đi chơi vậy?",
        modelAnswer: "I'm visiting my daughter.",
        modelAnswerVietnamese: "Tôi đi thăm con gái tôi.",
      },
    },
    {
      id: "part-7",
      title: "Hạ cánh và nhận hành lý",
      audioText:
        "The plane landed safely in Chicago. Minh walked to baggage claim and waited for his suitcase. He watched the carousel carefully. After a few minutes, he saw his black suitcase and picked it up. He smiled, happy to finally be there.",
      vietnamese:
        "Máy bay hạ cánh an toàn ở Chicago. Minh đi đến khu nhận hành lý và chờ lấy vali. Anh chăm chú nhìn băng chuyền. Sau vài phút, anh thấy chiếc vali màu đen của mình và lấy nó lên. Anh mỉm cười, vui vì cuối cùng cũng đã đến nơi.",
      question: {
        question: "What color was Minh's suitcase?",
        choices: [
          { id: "a", text: "Blue" },
          { id: "b", text: "Red" },
          { id: "c", text: "Black" },
        ],
        correctAnswer: "c",
      },
      reaction: {
        cue: "Welcome to Chicago! Do you need help finding a taxi?",
        cueVietnamese: "Chào mừng đến Chicago! Anh có cần giúp tìm taxi không?",
        modelAnswer: "No, thank you. My daughter is picking me up.",
        modelAnswerVietnamese: "Dạ không cần, cảm ơn. Con gái tôi sẽ đến đón tôi.",
      },
    },
  ],
  vocabulary: [
    {
      english: "boarding pass",
      ipa: "/ˈbɔːrdɪŋ pæs/",
      vietnamese: "thẻ lên máy bay",
      sentence: "The agent printed his boarding pass and told him his gate number.",
    },
    {
      english: "gate",
      ipa: "/ɡeɪt/",
      vietnamese: "cổng lên máy bay",
      sentence: "Minh found gate B14 and sat down near the window.",
    },
    {
      english: "security",
      ipa: "/sɪˈkjʊrəti/",
      vietnamese: "an ninh (khu kiểm tra an ninh)",
      sentence: "Next, Minh walked to the security line.",
    },
    {
      english: "boarding",
      ipa: "/ˈbɔːrdɪŋ/",
      vietnamese: "việc lên máy bay",
      sentence: "Soon, Minh heard his flight announced for boarding.",
    },
    {
      english: "thirsty",
      ipa: "/ˈθɜːrsti/",
      vietnamese: "khát nước",
      sentence: "After takeoff, Minh felt a little thirsty.",
    },
    {
      english: "flight attendant",
      ipa: "/flaɪt əˈtendənt/",
      vietnamese: "tiếp viên hàng không",
      sentence: "When the flight attendant came by with the drink cart, he raised his hand.",
    },
    {
      english: "carousel",
      ipa: "/ˌkærəˈsel/",
      vietnamese: "băng chuyền hành lý",
      sentence: "He watched the carousel carefully.",
    },
    {
      english: "suitcase",
      ipa: "/ˈsuːtkeɪs/",
      vietnamese: "vali",
      sentence: "After a few minutes, he saw his black suitcase and picked it up.",
    },
  ],
};
