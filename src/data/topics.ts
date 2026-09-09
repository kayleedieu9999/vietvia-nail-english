import { Topic } from "@/types/content";

/**
 * All topics on the site. A topic with no lessons yet simply shows "Sắp có"
 * on its card — no extra flag needed, that's derived from lesson data.
 */
export const topics: Topic[] = [
  {
    id: "nail-general",
    slug: "nail-general",
    title: "Tiếng Anh nghề Nails",
    description: "Những câu tiếng Anh cơ bản nhất cần biết khi làm nails.",
    emoji: "💅",
  },
  {
    id: "small-talk",
    slug: "small-talk",
    title: "Small Talk",
    description: "Chào hỏi và trò chuyện nhẹ nhàng với khách.",
    emoji: "💬",
  },
  {
    id: "customer-requests",
    slug: "customer-requests",
    title: "Khách Yêu Cầu",
    description: "Nghe và đáp lại khi khách yêu cầu điều gì đó.",
    emoji: "🙋",
  },
  {
    id: "pedicure",
    slug: "pedicure",
    title: "Pedicure",
    description: "Câu tiếng Anh thường dùng khi làm pedicure cho khách.",
    emoji: "🦶",
  },
  {
    id: "nail-color",
    slug: "nail-color",
    title: "Chọn Màu",
    description: "Giúp khách chọn màu sơn ưng ý.",
    emoji: "🎨",
  },
  {
    id: "unhappy-customer",
    slug: "unhappy-customer",
    title: "Khi Khách Chưa Hài Lòng",
    description: "Cách xin lỗi và xử lý khéo léo khi khách không hài lòng.",
    emoji: "😟",
  },
  {
    id: "food-life",
    slug: "food-life",
    title: "Đồ Ăn & Cuộc Sống",
    description: "Trò chuyện đời thường với khách về đồ ăn và cuộc sống.",
    emoji: "🍜",
  },
  {
    id: "daily-english",
    slug: "daily-english",
    title: "Tiếng Anh Hằng Ngày",
    description: "Những câu tiếng Anh dùng mỗi ngày ngoài tiệm nails.",
    emoji: "🗓️",
  },
  {
    id: "airport",
    slug: "airport",
    title: "Airport",
    description: "Tiếng Anh cần dùng khi ở sân bay.",
    emoji: "✈️",
  },
  {
    id: "emergency",
    slug: "emergency",
    title: "911 & Emergency",
    description: "Câu tiếng Anh quan trọng khi cần gọi cấp cứu.",
    emoji: "🚨",
  },
  {
    id: "dmv",
    slug: "dmv",
    title: "DMV",
    description: "Tiếng Anh khi đi thi hoặc làm việc ở DMV.",
    emoji: "🚗",
  },
  {
    id: "citizenship",
    slug: "citizenship",
    title: "Thi Quốc Tịch Mỹ",
    description: "Ôn tập tiếng Anh cho kỳ thi quốc tịch.",
    emoji: "🇺🇸",
  },
  {
    id: "grammar",
    slug: "grammar",
    title: "Grammar",
    description: "Ngữ pháp tiếng Anh cơ bản, dễ hiểu.",
    emoji: "📘",
  },
  {
    id: "listening",
    slug: "listening",
    title: "Listening",
    description: "Luyện nghe tiếng Anh qua các câu hội thoại thực tế.",
    emoji: "🎧",
  },
  {
    id: "pronunciation",
    slug: "pronunciation",
    title: "Pronunciation",
    description: "Luyện phát âm tiếng Anh chuẩn hơn.",
    emoji: "🗣️",
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}
