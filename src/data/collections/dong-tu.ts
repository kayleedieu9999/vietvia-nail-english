import { CollectionData } from "@/types/collection";

/**
 * "500 Động từ thông dụng" — curriculum name/target size. This first pass
 * seeds real, correct A1–A2 verbs across all the requested categories; more
 * groups can be appended over time without touching the page/components.
 */
export const dongTuData: CollectionData = {
  key: "dong-tu",
  title: "500 Động từ thông dụng",
  subtitle: "Những động từ thường gặp trong giao tiếp hằng ngày và công việc.",
  groups: [
    {
      id: "moi-ngay",
      title: "Động từ dùng mỗi ngày",
      items: [
        { id: "v-choose", english: "choose", ipa: "/tʃuːz/", vietnamese: "chọn", example: "Please choose a color." },
        { id: "v-wait", english: "wait", ipa: "/weɪt/", vietnamese: "chờ, đợi", example: "Can you wait a minute?" },
        { id: "v-start", english: "start", ipa: "/stɑːrt/", vietnamese: "bắt đầu", example: "Let's start now." },
        { id: "v-finish", english: "finish", ipa: "/ˈfɪnɪʃ/", vietnamese: "hoàn thành, xong", example: "I'll finish in five minutes." },
        { id: "v-help", english: "help", ipa: "/hɛlp/", vietnamese: "giúp đỡ", example: "Can I help you?" },
      ],
    },
    {
      id: "tiem-nails",
      title: "Công việc & tiệm Nails",
      items: [
        { id: "v-file", english: "file", ipa: "/faɪl/", vietnamese: "dũa (móng)", example: "I'll file your nails first." },
        { id: "v-soak", english: "soak", ipa: "/soʊk/", vietnamese: "ngâm", example: "Please soak your hands here." },
        { id: "v-trim", english: "trim", ipa: "/trɪm/", vietnamese: "cắt tỉa", example: "I'll trim your cuticles." },
        { id: "v-apply", english: "apply", ipa: "/əˈplaɪ/", vietnamese: "sơn, thoa", example: "I'll apply the base coat now." },
        { id: "v-book", english: "book", ipa: "/bʊk/", vietnamese: "đặt lịch hẹn", example: "Would you like to book your next visit?" },
      ],
    },
    {
      id: "di-lai",
      title: "Đi lại & lái xe",
      items: [
        { id: "v-drive", english: "drive", ipa: "/draɪv/", vietnamese: "lái xe", example: "I drive to work every day." },
        { id: "v-park", english: "park", ipa: "/pɑːrk/", vietnamese: "đậu xe", example: "You can park right here." },
        { id: "v-turn", english: "turn", ipa: "/tɜːrn/", vietnamese: "rẽ, quẹo", example: "Turn left at the light." },
        { id: "v-arrive", english: "arrive", ipa: "/əˈraɪv/", vietnamese: "đến nơi", example: "I'll arrive in ten minutes." },
        { id: "v-stop", english: "stop", ipa: "/stɑːp/", vietnamese: "dừng lại", example: "Please stop here." },
      ],
    },
    {
      id: "mua-sam",
      title: "Mua sắm & thanh toán",
      items: [
        { id: "v-pay", english: "pay", ipa: "/peɪ/", vietnamese: "trả tiền", example: "How would you like to pay?" },
        { id: "v-return", english: "return", ipa: "/rɪˈtɜːrn/", vietnamese: "trả lại (hàng)", example: "Can I return this?" },
        { id: "v-cost", english: "cost", ipa: "/kɔːst/", vietnamese: "có giá", example: "How much does it cost?" },
        { id: "v-save", english: "save", ipa: "/seɪv/", vietnamese: "tiết kiệm", example: "This coupon will save you money." },
        { id: "v-charge", english: "charge", ipa: "/tʃɑːrdʒ/", vietnamese: "tính phí", example: "We charge extra for gel." },
      ],
    },
    {
      id: "an-uong",
      title: "Ăn uống",
      items: [
        { id: "v-order", english: "order", ipa: "/ˈɔːrdər/", vietnamese: "gọi món", example: "I'd like to order a coffee." },
        { id: "v-taste", english: "taste", ipa: "/teɪst/", vietnamese: "nếm, có vị", example: "This soup tastes great." },
        { id: "v-cook", english: "cook", ipa: "/kʊk/", vietnamese: "nấu ăn", example: "I cook dinner every night." },
        { id: "v-serve", english: "serve", ipa: "/sɜːrv/", vietnamese: "phục vụ", example: "We serve lunch until 3pm." },
        { id: "v-share", english: "share", ipa: "/ʃer/", vietnamese: "chia sẻ, dùng chung", example: "Let's share this dish." },
      ],
    },
    {
      id: "gia-dinh",
      title: "Gia đình & cuộc sống",
      items: [
        { id: "v-live", english: "live", ipa: "/lɪv/", vietnamese: "sống, sinh sống", example: "I live near the salon." },
        { id: "v-visit", english: "visit", ipa: "/ˈvɪzɪt/", vietnamese: "thăm", example: "We visit my parents on Sundays." },
        { id: "v-raise", english: "raise", ipa: "/reɪz/", vietnamese: "nuôi dạy", example: "They raised three kids." },
        { id: "v-move", english: "move", ipa: "/muːv/", vietnamese: "chuyển (nhà)", example: "We moved here last year." },
        { id: "v-rest", english: "rest", ipa: "/rɛst/", vietnamese: "nghỉ ngơi", example: "You should rest tonight." },
      ],
    },
    {
      id: "cam-xuc",
      title: "Cảm xúc & giao tiếp",
      items: [
        { id: "v-feel", english: "feel", ipa: "/fiːl/", vietnamese: "cảm thấy", example: "I feel great today." },
        { id: "v-worry", english: "worry", ipa: "/ˈwɜːri/", vietnamese: "lo lắng", example: "Don't worry, it's fine." },
        { id: "v-explain", english: "explain", ipa: "/ɪkˈspleɪn/", vietnamese: "giải thích", example: "Let me explain what happened." },
        { id: "v-agree", english: "agree", ipa: "/əˈɡriː/", vietnamese: "đồng ý", example: "I agree with you." },
        { id: "v-suggest", english: "suggest", ipa: "/səɡˈdʒɛst/", vietnamese: "đề nghị, gợi ý", example: "I suggest the pink color." },
      ],
    },
    {
      id: "lich-hen",
      title: "Công việc & lịch hẹn",
      items: [
        { id: "v-schedule", english: "schedule", ipa: "/ˈskɛdʒuːl/", vietnamese: "lên lịch", example: "Let's schedule your next visit." },
        { id: "v-confirm", english: "confirm", ipa: "/kənˈfɜːrm/", vietnamese: "xác nhận", example: "Can you confirm your appointment?" },
        { id: "v-cancel", english: "cancel", ipa: "/ˈkænsəl/", vietnamese: "hủy", example: "I need to cancel my appointment." },
        { id: "v-reschedule", english: "reschedule", ipa: "/ˌriːˈskɛdʒuːl/", vietnamese: "đổi lịch hẹn", example: "Can we reschedule to Friday?" },
        { id: "v-remind", english: "remind", ipa: "/rɪˈmaɪnd/", vietnamese: "nhắc nhở", example: "I'll remind you tomorrow." },
      ],
    },
    {
      id: "de-nham",
      title: "Các động từ dễ nhầm",
      items: [
        { id: "v-make-vs-do", english: "make", ipa: "/meɪk/", vietnamese: "làm ra, tạo ra", example: "I'll make an appointment for you." },
        { id: "v-do", english: "do", ipa: "/duː/", vietnamese: "làm (việc gì)", example: "What do you do for work?" },
        { id: "v-say-vs-tell", english: "say", ipa: "/seɪ/", vietnamese: "nói (ra điều gì)", example: "She said the color looks nice." },
        { id: "v-tell", english: "tell", ipa: "/tɛl/", vietnamese: "kể, bảo (ai đó)", example: "Tell me what you'd like." },
        { id: "v-hear-vs-listen", english: "hear", ipa: "/hɪr/", vietnamese: "nghe thấy", example: "I can't hear you well." },
      ],
    },
  ],
};
