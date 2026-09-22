import { CollectionData } from "@/types/collection";

/**
 * "500 Từ vựng thiết yếu" — curriculum name/target size. Standard American
 * English IPA only — no Vietnamese-style respelling per the design brief.
 */
export const tuVungData: CollectionData = {
  key: "tu-vung",
  title: "500 Từ vựng thiết yếu",
  subtitle: "Từ vựng thực tế để nghe và nói trong cuộc sống hằng ngày.",
  groups: [
    {
      id: "nails",
      title: "Nails",
      items: [
        { id: "w-polish", english: "polish", ipa: "/ˈpɑːlɪʃ/", vietnamese: "sơn móng", example: "Which polish would you like?" },
        { id: "w-cuticle", english: "cuticle", ipa: "/ˈkjuːtɪkəl/", vietnamese: "da khóe móng", example: "I'll push back your cuticles." },
        { id: "w-shape", english: "shape", ipa: "/ʃeɪp/", vietnamese: "dáng móng", example: "What shape do you want?" },
        { id: "w-gel", english: "gel", ipa: "/dʒɛl/", vietnamese: "sơn gel", example: "Gel lasts longer than regular polish." },
        { id: "w-acrylic", english: "acrylic", ipa: "/əˈkrɪlɪk/", vietnamese: "bột acrylic", example: "She wants an acrylic full set." },
      ],
    },
    {
      id: "work",
      title: "Work",
      items: [
        { id: "w-schedule-n", english: "schedule", ipa: "/ˈskɛdʒuːl/", vietnamese: "lịch làm việc", example: "Here's your schedule for this week." },
        { id: "w-shift", english: "shift", ipa: "/ʃɪft/", vietnamese: "ca làm", example: "I work the morning shift." },
        { id: "w-coworker", english: "coworker", ipa: "/ˈkoʊˌwɜːrkər/", vietnamese: "đồng nghiệp", example: "My coworker is very friendly." },
        { id: "w-customer", english: "customer", ipa: "/ˈkʌstəmər/", vietnamese: "khách hàng", example: "The customer is waiting outside." },
        { id: "w-tip", english: "tip", ipa: "/tɪp/", vietnamese: "tiền boa", example: "Thank you for the tip." },
      ],
    },
    {
      id: "home",
      title: "Home",
      items: [
        { id: "w-rent", english: "rent", ipa: "/rɛnt/", vietnamese: "tiền thuê nhà", example: "Rent is due on the first." },
        { id: "w-neighbor", english: "neighbor", ipa: "/ˈneɪbər/", vietnamese: "hàng xóm", example: "My neighbor is very kind." },
        { id: "w-furniture", english: "furniture", ipa: "/ˈfɜːrnɪtʃər/", vietnamese: "đồ nội thất", example: "We bought new furniture." },
        { id: "w-landlord", english: "landlord", ipa: "/ˈlændlɔːrd/", vietnamese: "chủ nhà", example: "I need to call the landlord." },
        { id: "w-utilities", english: "utilities", ipa: "/juːˈtɪlətiz/", vietnamese: "tiền điện nước", example: "Utilities are not included in rent." },
      ],
    },
    {
      id: "shopping",
      title: "Shopping",
      items: [
        { id: "w-receipt", english: "receipt", ipa: "/rɪˈsiːt/", vietnamese: "hóa đơn", example: "Here's your receipt." },
        { id: "w-discount", english: "discount", ipa: "/ˈdɪskaʊnt/", vietnamese: "giảm giá", example: "Is there a discount today?" },
        { id: "w-cashier", english: "cashier", ipa: "/kæˈʃɪr/", vietnamese: "thu ngân", example: "Please pay the cashier." },
        { id: "w-refund", english: "refund", ipa: "/ˈriːfʌnd/", vietnamese: "hoàn tiền", example: "Can I get a refund?" },
        { id: "w-sale", english: "sale", ipa: "/seɪl/", vietnamese: "đợt giảm giá", example: "Everything is on sale today." },
      ],
    },
    {
      id: "driving",
      title: "Driving",
      items: [
        { id: "w-license", english: "license", ipa: "/ˈlaɪsəns/", vietnamese: "bằng lái", example: "I need to renew my license." },
        { id: "w-insurance", english: "insurance", ipa: "/ɪnˈʃʊrəns/", vietnamese: "bảo hiểm", example: "Do you have car insurance?" },
        { id: "w-gas-station", english: "gas station", ipa: "/ɡæs ˈsteɪʃən/", vietnamese: "trạm xăng", example: "There's a gas station nearby." },
        { id: "w-parking-lot", english: "parking lot", ipa: "/ˈpɑːrkɪŋ lɑːt/", vietnamese: "bãi đậu xe", example: "The parking lot is behind the store." },
        { id: "w-traffic-light", english: "traffic light", ipa: "/ˈtræfɪk laɪt/", vietnamese: "đèn giao thông", example: "Turn right at the traffic light." },
      ],
    },
    {
      id: "food",
      title: "Food",
      items: [
        { id: "w-menu", english: "menu", ipa: "/ˈmɛnjuː/", vietnamese: "thực đơn", example: "Can I see the menu?" },
        { id: "w-leftovers", english: "leftovers", ipa: "/ˈlɛftˌoʊvərz/", vietnamese: "đồ ăn thừa", example: "I'll save the leftovers." },
        { id: "w-grocery", english: "grocery", ipa: "/ˈɡroʊsəri/", vietnamese: "hàng tạp hóa/thực phẩm", example: "I need to buy groceries." },
        { id: "w-recipe", english: "recipe", ipa: "/ˈrɛsəpi/", vietnamese: "công thức nấu ăn", example: "This is my mom's recipe." },
        { id: "w-flavor", english: "flavor", ipa: "/ˈfleɪvər/", vietnamese: "hương vị", example: "What flavor do you like?" },
      ],
    },
    {
      id: "suc-khoe",
      title: "Health & pharmacy vocabulary",
      items: [
        { id: "w-pharmacy", english: "pharmacy", ipa: "/ˈfɑːrməsi/", vietnamese: "nhà thuốc", example: "The pharmacy is next door." },
        { id: "w-prescription", english: "prescription", ipa: "/prɪˈskrɪpʃən/", vietnamese: "toa thuốc", example: "I need to pick up my prescription." },
        { id: "w-appointment-n", english: "appointment", ipa: "/əˈpɔɪntmənt/", vietnamese: "cuộc hẹn (khám)", example: "I have a doctor's appointment." },
        { id: "w-symptom", english: "symptom", ipa: "/ˈsɪmptəm/", vietnamese: "triệu chứng", example: "What symptoms do you have?" },
        { id: "w-allergy", english: "allergy", ipa: "/ˈælərdʒi/", vietnamese: "dị ứng", example: "I have an allergy to latex." },
      ],
    },
    {
      id: "airport",
      title: "Airport",
      items: [
        { id: "w-boarding-pass", english: "boarding pass", ipa: "/ˈbɔːrdɪŋ pæs/", vietnamese: "thẻ lên máy bay", example: "Please show your boarding pass." },
        { id: "w-gate", english: "gate", ipa: "/ɡeɪt/", vietnamese: "cổng ra máy bay", example: "Our gate is B12." },
        { id: "w-luggage", english: "luggage", ipa: "/ˈlʌɡɪdʒ/", vietnamese: "hành lý", example: "Where can I check my luggage?" },
        { id: "w-security", english: "security", ipa: "/sɪˈkjʊrəti/", vietnamese: "an ninh", example: "Security is that way." },
        { id: "w-delay", english: "delay", ipa: "/dɪˈleɪ/", vietnamese: "trễ chuyến", example: "Our flight has a delay." },
      ],
    },
    {
      id: "appointments-vocab",
      title: "Appointments",
      items: [
        { id: "w-available", english: "available", ipa: "/əˈveɪləbəl/", vietnamese: "còn trống, rảnh", example: "Are you available on Monday?" },
        { id: "w-reminder", english: "reminder", ipa: "/rɪˈmaɪndər/", vietnamese: "lời nhắc", example: "I'll send you a reminder." },
        { id: "w-walk-in", english: "walk-in", ipa: "/ˈwɔːk ɪn/", vietnamese: "khách không đặt trước", example: "We accept walk-ins too." },
        { id: "w-waitlist", english: "waitlist", ipa: "/ˈweɪtlɪst/", vietnamese: "danh sách chờ", example: "I'll put you on the waitlist." },
        { id: "w-deposit", english: "deposit", ipa: "/dɪˈpɑːzɪt/", vietnamese: "tiền đặt cọc", example: "We require a small deposit." },
      ],
    },
    {
      id: "everyday-conversation",
      title: "Everyday conversation",
      items: [
        { id: "w-weather", english: "weather", ipa: "/ˈwɛðər/", vietnamese: "thời tiết", example: "The weather is nice today." },
        { id: "w-weekend", english: "weekend", ipa: "/ˈwiːkɛnd/", vietnamese: "cuối tuần", example: "What are your plans for the weekend?" },
        { id: "w-favor", english: "favor", ipa: "/ˈfeɪvər/", vietnamese: "sự giúp đỡ", example: "Can I ask you a favor?" },
        { id: "w-opinion", english: "opinion", ipa: "/əˈpɪnjən/", vietnamese: "ý kiến", example: "What's your opinion on this?" },
        { id: "w-plan", english: "plan", ipa: "/plæn/", vietnamese: "kế hoạch", example: "What's the plan for today?" },
      ],
    },
  ],
};
