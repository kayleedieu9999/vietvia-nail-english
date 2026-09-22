import { CollectionData } from "@/types/collection";

/**
 * "300 Phrasal Verbs thực tế" — curriculum name/target size. Kept short and
 * practical, no long academic explanations per the design brief.
 */
export const phrasalVerbsData: CollectionData = {
  key: "phrasal-verbs",
  title: "300 Phrasal Verbs thực tế",
  subtitle: "Những cụm động từ thường nghe trong đời sống ở Mỹ.",
  groups: [
    {
      id: "di-lai-hen-gap",
      title: "Đi lại & Hẹn gặp",
      items: [
        { id: "pv-pick-up", english: "pick up", vietnamese: "đón / lấy", example: "I'll pick you up at 5." },
        { id: "pv-drop-off", english: "drop off", vietnamese: "thả xuống / để lại", example: "I can drop you off at the salon." },
        { id: "pv-come-back", english: "come back", vietnamese: "quay lại", example: "Please come back next week." },
        { id: "pv-get-back", english: "get back", vietnamese: "trở về", example: "I'll get back to you by tonight." },
        { id: "pv-show-up", english: "show up", vietnamese: "xuất hiện, đến", example: "She showed up ten minutes late." },
        { id: "pv-head-out", english: "head out", vietnamese: "lên đường, đi ra", example: "We should head out now." },
      ],
    },
    {
      id: "tim-hieu-giai-quyet",
      title: "Tìm hiểu & Giải quyết",
      items: [
        { id: "pv-find-out", english: "find out", vietnamese: "tìm ra, phát hiện", example: "Let me find out for you." },
        { id: "pv-figure-out", english: "figure out", vietnamese: "tìm hiểu ra, hiểu được", example: "I'll figure out what's wrong." },
        { id: "pv-work-out", english: "work out", vietnamese: "diễn ra tốt đẹp", example: "Don't worry, it'll work out." },
        { id: "pv-sort-out", english: "sort out", vietnamese: "giải quyết ổn thỏa", example: "We'll sort it out together." },
        { id: "pv-look-into", english: "look into", vietnamese: "tìm hiểu kỹ", example: "I'll look into that for you." },
        { id: "pv-deal-with", english: "deal with", vietnamese: "xử lý", example: "I can deal with that today." },
      ],
    },
    {
      id: "cong-viec-giay-to",
      title: "Công việc & Giấy tờ",
      items: [
        { id: "pv-fill-out", english: "fill out", vietnamese: "điền (giấy tờ)", example: "Please fill out this form." },
        { id: "pv-check-in", english: "check in", vietnamese: "làm thủ tục nhận phòng/nhận việc", example: "You can check in at the front desk." },
        { id: "pv-check-out", english: "check out", vietnamese: "trả phòng / thanh toán", example: "Checkout is at 11am." },
        { id: "pv-turn-in", english: "turn in", vietnamese: "nộp lại", example: "Turn in the form by Friday." },
        { id: "pv-sign-up", english: "sign up", vietnamese: "đăng ký", example: "You can sign up online." },
        { id: "pv-set-up", english: "set up", vietnamese: "sắp xếp, thiết lập", example: "Let's set up your next appointment." },
      ],
    },
    {
      id: "giao-tiep-hang-ngay",
      title: "Giao tiếp hằng ngày",
      items: [
        { id: "pv-hold-on", english: "hold on", vietnamese: "chờ chút", example: "Hold on, I'll be right there." },
        { id: "pv-go-ahead", english: "go ahead", vietnamese: "cứ tự nhiên, tiếp tục đi", example: "Go ahead, I'm listening." },
        { id: "pv-get-along", english: "get along", vietnamese: "hòa hợp", example: "We get along really well." },
        { id: "pv-come-over", english: "come over", vietnamese: "ghé qua", example: "Come over whenever you're free." },
        { id: "pv-catch-up", english: "catch up", vietnamese: "cập nhật, nói chuyện bù", example: "Let's catch up soon." },
        { id: "pv-bring-up", english: "bring up", vietnamese: "nhắc đến, đề cập", example: "She brought up a good point." },
      ],
    },
    {
      id: "mua-sam-sinh-hoat",
      title: "Mua sắm & Sinh hoạt",
      items: [
        { id: "pv-run-out", english: "run out (of)", vietnamese: "hết (đồ)", example: "We ran out of that color." },
        { id: "pv-try-on", english: "try on", vietnamese: "thử (đồ, giày...)", example: "You can try it on first." },
        { id: "pv-put-away", english: "put away", vietnamese: "cất đi", example: "I'll put this away for you." },
        { id: "pv-take-off", english: "take off", vietnamese: "tháo ra, cởi ra", example: "Please take off your rings." },
        { id: "pv-clean-up", english: "clean up", vietnamese: "dọn dẹp", example: "Let me clean up the station." },
        { id: "pv-throw-away", english: "throw away", vietnamese: "vứt đi", example: "You can throw that away." },
      ],
    },
  ],
};
