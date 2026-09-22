import { Topic } from "@/types/content";

/**
 * All topics on the site. A topic with no lessons yet simply shows "Sắp có"
 * on its card — no extra flag needed, that's derived from lesson data.
 */
/** Shared group id for the 7 "Hội thoại Nails" sub-topics — see `src/app/hoi-thoai-nails/page.tsx`. */
export const HOI_THOAI_NAILS_GROUP = "hoi-thoai-nails";

export const topics: Topic[] = [
  {
    id: "nails-bat-dau",
    slug: "nails-bat-dau",
    title: "Bắt Đầu",
    description: "Chào khách, hỏi lịch hẹn, chọn dịch vụ — những câu đầu tiên khi khách bước vào tiệm.",
    emoji: "👋",
    group: HOI_THOAI_NAILS_GROUP,
  },
  {
    id: "nails-dich-vu",
    slug: "nails-dich-vu",
    title: "Dịch Vụ",
    description: "Manicure, acrylic, gel, fill, new set — giải thích và tư vấn dịch vụ cho khách.",
    emoji: "💅",
    group: HOI_THOAI_NAILS_GROUP,
  },
  {
    id: "nails-mau-design",
    slug: "nails-mau-design",
    title: "Màu & Design",
    description: "Giúp khách chọn màu, kiểu design, French, chrome, cat-eye và nail art.",
    emoji: "🎨",
    group: HOI_THOAI_NAILS_GROUP,
  },
  {
    id: "nails-xu-ly-tinh-huong",
    slug: "nails-xu-ly-tinh-huong",
    title: "Xử Lý Tình Huống",
    description: "Móng gãy, lỗi màu, khách không hài lòng — cách xin lỗi và sửa lỗi khéo léo.",
    emoji: "😟",
    group: HOI_THOAI_NAILS_GROUP,
  },
  {
    id: "nails-pedicure",
    slug: "nails-pedicure",
    title: "Pedicure",
    description: "Câu tiếng Anh thường dùng khi làm pedicure cho khách.",
    emoji: "🦶",
    group: HOI_THOAI_NAILS_GROUP,
  },
  {
    id: "nails-small-talk",
    slug: "nails-small-talk",
    title: "Small Talk",
    description: "Trò chuyện nhẹ nhàng, tự nhiên với khách trong lúc làm nails.",
    emoji: "💬",
    group: HOI_THOAI_NAILS_GROUP,
  },
  {
    id: "nails-thanh-toan",
    slug: "nails-thanh-toan",
    title: "Thanh Toán & Kết Thúc",
    description: "Tính tiền, tip, đặt lịch hẹn tiếp theo và tạm biệt khách.",
    emoji: "💳",
    group: HOI_THOAI_NAILS_GROUP,
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
