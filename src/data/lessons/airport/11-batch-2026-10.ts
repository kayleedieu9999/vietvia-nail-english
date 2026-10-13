import { Lesson } from "@/types/content";
import { buildSituationQuestions } from "@/data/lessons/_shared/situationKit";
import { BATCH_2026_10 } from "@/data/newBatch";

/**
 * Airport expansion (Oct 2026): 10 new 5-question lessons = 50 new items,
 * weighted toward the gaps in the original 50 (nothing covered the flight
 * itself, gate changes, standby, overhead bins, terminal changes, vouchers).
 * Each lesson carries a filter `category` plus freshness metadata.
 */
const meta = { ...BATCH_2026_10, section: "BẮT ĐẦU", topicId: "airport", level: "beginner" as const };

export const airportBatch2026_10: Lesson[] = [
  {
    id: "ap-51",
    slug: "ap-51-bag-qua-kho-qua-can",
    ...meta,
    category: "check-in",
    title: "Bag quá khổ, quá cân & chuyến nối",
    description: "Oversized bag, overweight bag, tên không khớp, chuyến nối và nhờ hỗ trợ đặc biệt tại quầy check-in.",
    questions: buildSituationQuestions("ap-51", [
      { emoji: "🧳", who: "Nhân viên", pEn: "This bag is oversized. There's an extra fee.", pVi: "Túi này quá khổ. Sẽ có thêm phí.", en: "Okay. How much is the extra fee?", vi: "Vâng. Phí thêm là bao nhiêu?", wrong1: "I'd like a window seat.", wrong2: "My flight was yesterday.", note: "Khi bag quá khổ, hỏi ngay mức phí để quyết định.", tip: "Dùng khi nhân viên báo bag oversized." },
      { emoji: "⚖️", who: "Nhân viên", pEn: "I'm sorry, but your suitcase is overweight.", pVi: "Xin lỗi, nhưng vali của anh/chị bị quá cân.", en: "Can I move a few things to my carry-on?", vi: "Tôi chuyển vài món sang túi xách tay được không?", wrong1: "Where is the restroom?", wrong2: "I'll pay with cash tomorrow.", note: "Chuyển bớt đồ sang carry-on thường tránh được phí overweight.", tip: "Dùng khi bag ký gửi bị quá cân." },
      { emoji: "🪪", who: "Nhân viên", pEn: "The name on your ticket doesn't match your ID.", pVi: "Tên trên vé không khớp với giấy tờ của anh/chị.", en: "Oh, I'm sorry. Can we fix it here?", vi: "Ôi, xin lỗi. Mình sửa tại đây được không?", wrong1: "That's not my ticket.", wrong2: "I don't need a boarding pass.", note: "Tên lỗi vẫn sửa được ở quầy — hỏi thẳng cách khắc phục.", tip: "Dùng khi tên trên vé và hộ chiếu khác nhau." },
      { emoji: "🔁", who: "Nhân viên", pEn: "Is Dallas your final destination?", pVi: "Dallas là điểm đến cuối của anh/chị phải không?", en: "No, I'm connecting to Seattle.", vi: "Không, tôi nối chuyến đi Seattle.", wrong1: "Yes, the gate is B12.", wrong2: "I'd like an aisle seat.", note: "Nói rõ bạn nối chuyến để bag được ký gửi thẳng tới điểm cuối.", tip: "Dùng khi vé có chuyến nối." },
      { emoji: "♿", who: "Nhân viên", pEn: "Do you need any assistance today?", pVi: "Hôm nay anh/chị có cần hỗ trợ gì không?", en: "Yes, could I get a wheelchair to the gate?", vi: "Vâng, cho tôi xe lăn đến cổng được không?", wrong1: "No, my bag is a carry-on.", wrong2: "I'm early for my flight.", note: "Xin hỗ trợ đặc biệt ngay tại quầy để được chuẩn bị trước.", tip: "Dùng khi bạn hoặc người đi cùng cần hỗ trợ di chuyển." },
    ]),
  },
  {
    id: "ap-52",
    slug: "ap-52-tsa-chat-long-vat-cam",
    ...meta,
    category: "tsa",
    title: "TSA: chất lỏng, vật cấm & kiểm tra thêm",
    description: "Hỏi và trả lời nhân viên TSA về liquids, túi bị kiểm tra lại, secondary screening và vật không được mang.",
    questions: buildSituationQuestions("ap-52", [
      { emoji: "🧴", who: "TSA", pEn: "Any liquids, gels, or sprays in your carry-on?", pVi: "Trong túi xách tay có chất lỏng, gel hay bình xịt nào không?", en: "Yes, a small bottle of lotion in a clear bag.", vi: "Có, một chai kem dưỡng nhỏ trong túi trong suốt.", wrong1: "No, I only have a boarding pass.", wrong2: "I'm connecting to Denver.", note: "Chất lỏng nhỏ thường để trong túi trong suốt riêng.", tip: "Dùng khi TSA hỏi về liquids." },
      { emoji: "👖", who: "TSA", pEn: "Please empty your pockets.", pVi: "Làm ơn bỏ hết đồ trong túi ra.", en: "Just my phone and keys. Where should I put them?", vi: "Chỉ có điện thoại và chìa khóa. Tôi để đâu?", wrong1: "I'd like a window seat.", wrong2: "My bag is overweight.", note: "Trả lời ngắn gọn rồi hỏi nơi để đồ.", tip: "Dùng khi được yêu cầu bỏ đồ trong túi quần/áo." },
      { emoji: "🔍", who: "TSA", pEn: "We need to check your bag again.", pVi: "Chúng tôi cần kiểm tra lại túi của anh/chị.", en: "Of course. Is something wrong?", vi: "Được ạ. Có vấn đề gì không?", wrong1: "That's not my flight.", wrong2: "I already checked in.", note: "Giữ bình tĩnh, đồng ý và hỏi nhẹ nhàng nếu cần.", tip: "Dùng khi túi bị kéo ra kiểm tra." },
      { emoji: "🚫", who: "TSA", pEn: "You can't take this through security.", pVi: "Món này không được mang qua cổng an ninh.", en: "I'm sorry. Can I throw it away?", vi: "Xin lỗi. Tôi bỏ nó đi được không?", wrong1: "It's my favorite seat.", wrong2: "The flight is delayed.", note: "Khi gặp vật cấm, xin lỗi và hỏi cách xử lý.", tip: "Dùng khi TSA giữ lại một món đồ." },
      { emoji: "❓", who: "TSA", pEn: "Step up here, please. Next.", pVi: "Mời bước lên đây. Người tiếp theo.", en: "Excuse me, what needs to come out of my bag?", vi: "Xin lỗi, tôi cần lấy món nào ra khỏi túi?", wrong1: "Which gate is Flight 90?", wrong2: "I'd like some water.", note: "Nếu không chắc, hỏi trước để không bị gọi lại.", tip: "Dùng khi lần đầu qua an ninh hoặc quên quy định." },
    ]),
  },
  {
    id: "ap-53",
    slug: "ap-53-gate-change-standby",
    ...meta,
    category: "boarding",
    title: "Gate change, standby & final boarding call",
    description: "Hiểu thông báo đổi cổng (gate change), boarding delayed, standby, vào nhầm cổng và final boarding call.",
    questions: buildSituationQuestions("ap-53", [
      { emoji: "📢", who: "Thông báo", pEn: "Flight 482 has a gate change to B7.", pVi: "Chuyến bay 482 đổi cổng sang B7.", en: "Excuse me, did you say gate B7?", vi: "Xin lỗi, chị vừa nói cổng B7 phải không?", wrong1: "I'd like a blanket, please.", wrong2: "Where is the taxi stand?", note: "Xác nhận lại số cổng ngay để tránh đi nhầm.", tip: "Dùng khi nghe thông báo gate change." },
      { emoji: "⏳", who: "Nhân viên", pEn: "Boarding has been delayed by twenty minutes.", pVi: "Việc lên máy bay bị hoãn hai mươi phút.", en: "Do you know why it's delayed?", vi: "Chị có biết vì sao bị hoãn không?", wrong1: "My bag is a carry-on.", wrong2: "I need a window seat.", note: "Hỏi lý do để biết có ảnh hưởng chuyến nối không.", tip: "Dùng khi boarding bị trễ." },
      { emoji: "📣", who: "Thông báo", pEn: "Last call for Denver, Flight 215. The doors are closing.", pVi: "Gọi lần cuối chuyến đi Denver, số 215. Cửa sắp đóng.", en: "Wait, that's my flight! Can I still board?", vi: "Khoan, đó là chuyến của tôi! Tôi còn lên được không?", wrong1: "I'll wait for the next one.", wrong2: "Is breakfast included?", note: "Báo ngay cho nhân viên cổng khi nghe final call đúng chuyến mình.", tip: "Dùng khi nghe final boarding call." },
      { emoji: "🪑", who: "Nhân viên", pEn: "The flight is full. I can put you on standby.", pVi: "Chuyến bay đã đầy. Tôi có thể cho anh/chị vào danh sách chờ.", en: "How does standby work?", vi: "Danh sách chờ (standby) hoạt động thế nào?", wrong1: "I already have a seat.", wrong2: "The bag is too heavy.", note: "Standby = chờ chỗ trống; hỏi cách họ gọi tên bạn.", tip: "Dùng khi được đề nghị standby." },
      { emoji: "🚪", who: "Nhân viên", pEn: "This flight boards at gate C4, not this gate.", pVi: "Chuyến này lên ở cổng C4, không phải cổng này.", en: "Oh, I'm at the wrong gate. How do I get to C4?", vi: "Ôi, tôi nhầm cổng. Đi đến C4 bằng cách nào?", wrong1: "I'd like a different seat.", wrong2: "Can I pay by card?", note: "Nhận lỗi nhẹ nhàng và hỏi đường ngay.", tip: "Dùng khi đứng nhầm cổng." },
    ]),
  },
  {
    id: "ap-54",
    slug: "ap-54-overhead-bin-gate-check",
    ...meta,
    category: "boarding",
    title: "Overhead bin đầy, gate-check & quét vé",
    description: "Khi overhead bin đầy phải gate-check carry-on, hỏi chuyện chỗ ngồi và quét boarding pass.",
    questions: buildSituationQuestions("ap-54", [
      { emoji: "🧳", who: "Nhân viên cổng", pEn: "The overhead bins are almost full. We may gate-check your carry-on.", pVi: "Ngăn để đồ trên đầu gần đầy. Chúng tôi có thể gate-check túi xách tay của anh/chị.", en: "Okay. Will I get it back when we land?", vi: "Vâng. Khi hạ cánh tôi nhận lại ngay chứ?", wrong1: "I'd like a pillow.", wrong2: "That's not my flight.", note: "Gate-check thường trả túi ngay cửa máy bay khi đến.", tip: "Dùng khi bị yêu cầu gate-check." },
      { emoji: "📱", who: "Nhân viên cổng", pEn: "Scan your boarding pass here, please.", pVi: "Mời quét thẻ lên máy bay ở đây.", en: "Like this? It's on my phone.", vi: "Như thế này phải không? Vé của tôi trên điện thoại.", wrong1: "I'd like to check a bag.", wrong2: "Where's the baggage claim?", note: "Cho nhân viên thấy mã QR trên màn hình.", tip: "Dùng khi quét boarding pass điện tử." },
      { emoji: "💺", who: "Nhân viên cổng", pEn: "There's a problem with your seat assignment.", pVi: "Ghế được xếp cho anh/chị có vấn đề.", en: "What's the problem? Do I still have a seat?", vi: "Vấn đề là gì vậy? Tôi vẫn có ghế chứ?", wrong1: "I'll take the red one.", wrong2: "My bag is two pounds over.", note: "Hỏi thẳng để biết mình vẫn bay được hay không.", tip: "Dùng khi ghế bị trùng hoặc đổi." },
      { emoji: "🎒", who: "Tiếp viên", pEn: "Is that bag going in the overhead bin?", pVi: "Túi đó để lên ngăn trên đầu phải không?", en: "Yes, if there's room. Where can I put it?", vi: "Vâng, nếu còn chỗ. Tôi để ở đâu được?", wrong1: "No, I want the window shade.", wrong2: "It's my passport.", note: "Trả lời ngắn và hỏi chỗ để túi.", tip: "Dùng khi lên máy bay mang theo carry-on." },
      { emoji: "👥", who: "Nhân viên cổng", pEn: "We're boarding people who need extra time first.", pVi: "Chúng tôi mời hành khách cần thêm thời gian lên trước.", en: "Thank you. I need a little extra time, please.", vi: "Cảm ơn. Tôi cần thêm chút thời gian.", wrong1: "I'll pay in cash.", wrong2: "This is my first bag.", note: "Nói rõ nhu cầu để được ưu tiên lên máy bay.", tip: "Dùng khi bạn hoặc người đi cùng cần boarding sớm." },
    ]),
  },
  {
    id: "ap-55",
    slug: "ap-55-tim-ghe-tren-may-bay",
    ...meta,
    category: "plane",
    title: "Trên máy bay: tìm ghế & đổi chỗ",
    description: "Tìm ghế ngồi, khi có người ngồi nhầm ghế, nhờ đổi chỗ để ngồi cạnh nhau và cho người khác đi qua.",
    questions: buildSituationQuestions("ap-55", [
      { emoji: "💺", who: "Tiếp viên", pEn: "Can I help you find your seat?", pVi: "Tôi giúp anh/chị tìm ghế nhé?", en: "Yes, I'm looking for 18C.", vi: "Vâng, tôi đang tìm ghế 18C.", wrong1: "No, I'd like some water.", wrong2: "Yes, my bag is overweight.", note: "Nói số ghế trên thẻ lên máy bay.", tip: "Dùng khi vừa lên máy bay." },
      { emoji: "🙋", who: "Tiếp viên", pEn: "Is there a problem with your seat?", pVi: "Ghế của anh/chị có vấn đề gì không?", en: "Someone is sitting in my seat. Could you help me?", vi: "Có người ngồi ghế của tôi. Chị giúp tôi được không?", wrong1: "It's a little cold in here.", wrong2: "The screen is working fine.", note: "Nhờ tiếp viên giải quyết thay vì tranh cãi.", tip: "Dùng khi ghế đã có người ngồi." },
      { emoji: "👋", who: "Hành khách", pEn: "Oh, is this seat yours?", pVi: "Ồ, đây là ghế của bạn à?", en: "I think so. Could I see your boarding pass?", vi: "Tôi nghĩ vậy. Cho tôi xem thẻ lên máy bay của bạn được không?", wrong1: "No, I'm connecting to Boston.", wrong2: "I'd like to recline.", note: "Lịch sự đề nghị hai bên cùng kiểm tra vé.", tip: "Dùng khi đứng trước người ngồi nhầm ghế." },
      { emoji: "👨‍👩‍👧", who: "Hành khách", pEn: "Would you mind switching seats so my family can sit together?", pVi: "Bạn có phiền đổi chỗ để gia đình tôi ngồi cạnh nhau không?", en: "Sure, no problem. Which seat is it?", vi: "Được chứ, không sao. Ghế nào vậy?", wrong1: "I don't have a boarding pass.", wrong2: "Please close the window shade.", note: "Đồng ý lịch sự và hỏi số ghế mới.", tip: "Dùng khi có người nhờ đổi chỗ." },
      { emoji: "🚶", who: "Hành khách", pEn: "Excuse me, I need to get to my window seat.", pVi: "Xin lỗi, tôi cần vào ghế cạnh cửa sổ.", en: "Of course. Let me stand up so you can get by.", vi: "Dạ được. Để tôi đứng lên cho anh vào.", wrong1: "That's my bag.", wrong2: "I'd like a blanket.", note: "Đứng dậy và nói câu lịch sự cho người khác đi qua.", tip: "Dùng khi ngồi ghế lối đi hoặc ghế giữa." },
    ]),
  },
  {
    id: "ap-56",
    slug: "ap-56-nho-tiep-vien-chan-nuoc-bua-an",
    ...meta,
    category: "plane",
    title: "Nhờ tiếp viên: chăn, nước, bữa ăn & màn hình",
    description: "Xin blanket, nước uống, hỏi bữa ăn bị lỡ, tai nghe và báo màn hình không hoạt động.",
    questions: buildSituationQuestions("ap-56", [
      { emoji: "🧣", who: "Tiếp viên", pEn: "Is there anything I can get for you?", pVi: "Tôi lấy gì cho anh/chị nhé?", en: "It's a little cold in here. Could I have a blanket?", vi: "Ở đây hơi lạnh. Cho tôi xin cái chăn được không?", wrong1: "I'd like to check a bag.", wrong2: "Which gate is this?", note: "Nói lý do ngắn rồi xin blanket.", tip: "Dùng khi thấy lạnh trên máy bay." },
      { emoji: "🥤", who: "Tiếp viên", pEn: "Would you like something to drink?", pVi: "Anh/chị muốn uống gì không?", en: "Just water, please. No ice.", vi: "Cho tôi nước lọc thôi, không đá.", wrong1: "Yes, my seat is 24B.", wrong2: "I'm connecting in Dallas.", note: "Gọi thức uống ngắn gọn, thêm yêu cầu nếu cần.", tip: "Dùng khi tiếp viên đẩy xe nước." },
      { emoji: "🍽️", who: "Tiếp viên", pEn: "Hi, how can I help you?", pVi: "Chào anh/chị, tôi giúp gì được?", en: "I missed the meal earlier. Is there any food left?", vi: "Lúc nãy tôi lỡ bữa ăn. Còn đồ ăn không?", wrong1: "I lost my boarding pass.", wrong2: "The window shade is broken.", note: "Hỏi lịch sự, tiếp viên thường còn phần dự trữ.", tip: "Dùng khi bạn ngủ quên lúc phát bữa." },
      { emoji: "📺", who: "Tiếp viên", pEn: "Is everything okay here?", pVi: "Mọi thứ ở đây ổn chứ ạ?", en: "My screen isn't working. Can you reset it?", vi: "Màn hình của tôi không hoạt động. Chị khởi động lại giúp được không?", wrong1: "I'd like the chicken.", wrong2: "My bag is too heavy.", note: "Nêu vấn đề rõ ràng và đề nghị cách xử lý.", tip: "Dùng khi màn hình giải trí bị lỗi." },
      { emoji: "🎧", who: "Tiếp viên", pEn: "Do you need headphones?", pVi: "Anh/chị có cần tai nghe không?", en: "Yes, please. Are they free?", vi: "Có, cho tôi xin. Có miễn phí không?", wrong1: "No, I'm at the wrong gate.", wrong2: "I need a taxi.", note: "Hỏi giá luôn để tránh bất ngờ.", tip: "Dùng khi hãng có bán tai nghe." },
    ]),
  },
  {
    id: "ap-57",
    slug: "ap-57-thoai-mai-turbulence-exit-row",
    ...meta,
    category: "plane",
    title: "Thoải mái trên máy bay: turbulence & exit row",
    description: "Đi vệ sinh, ngả ghế, cửa sổ, turbulence, seatbelt và câu hỏi về hàng ghế exit row.",
    questions: buildSituationQuestions("ap-57", [
      { emoji: "🚻", who: "Tiếp viên", pEn: "The seatbelt sign is off. You can move around now.", pVi: "Đèn thắt dây an toàn đã tắt. Anh/chị có thể đi lại.", en: "Thanks. Is the restroom free?", vi: "Cảm ơn. Nhà vệ sinh có trống không?", wrong1: "I'd like to change my flight.", wrong2: "Where's baggage claim?", note: "Đèn tắt mới được rời ghế; hỏi nhà vệ sinh có người không.", tip: "Dùng khi muốn đi vệ sinh trên chuyến bay." },
      { emoji: "😴", who: "Hành khách", pEn: "Do you mind if I recline my seat?", pVi: "Bạn có phiền nếu tôi ngả ghế không?", en: "A little. Could you wait until after the meal?", vi: "Hơi phiền một chút. Bạn đợi sau bữa ăn được không?", wrong1: "My seat is 14A.", wrong2: "It's a direct flight.", note: "Từ chối nhẹ nhàng và đề nghị thời điểm khác.", tip: "Dùng khi người ngồi trước muốn ngả ghế." },
      { emoji: "🌅", who: "Hành khách", pEn: "Is it okay if I close the window shade?", pVi: "Tôi đóng tấm che cửa sổ được không?", en: "Sure, go ahead. The sun is bright.", vi: "Được, bạn cứ đóng. Nắng chói thật.", wrong1: "I'm at the wrong gate.", wrong2: "That's my passport.", note: "Đồng ý ngắn gọn.", tip: "Dùng khi ngồi cạnh người ngồi gần cửa sổ." },
      { emoji: "🌀", who: "Cơ trưởng", pEn: "Please return to your seats. We're expecting some turbulence.", pVi: "Xin quay về chỗ ngồi. Chúng ta sắp gặp turbulence (rung lắc).", en: "Okay. Is it going to be bumpy for long?", vi: "Vâng. Rung lắc có kéo dài lâu không?", wrong1: "I'd like to buy a coffee.", wrong2: "My luggage is delayed.", note: "Hỏi thời gian để bớt lo lắng.", tip: "Dùng khi nghe thông báo turbulence." },
      { emoji: "🚨", who: "Tiếp viên", pEn: "These are exit row seats. Are you able to help in an emergency?", pVi: "Đây là hàng ghế thoát hiểm. Anh/chị có thể hỗ trợ khi khẩn cấp không?", en: "Yes, I can. What do I need to do?", vi: "Được ạ. Tôi cần làm gì?", wrong1: "No, I want a bigger bag.", wrong2: "I'll have the pasta.", note: "Ngồi exit row phải đồng ý hỗ trợ — hỏi rõ nhiệm vụ.", tip: "Dùng khi được xếp ghế exit row." },
    ]),
  },
  {
    id: "ap-58",
    slug: "ap-58-tre-chuyen-lo-noi-chuyen-rebook",
    ...meta,
    category: "delay",
    title: "Chuyến bay trễ, lỡ chuyến nối & rebook",
    description: "Delayed flight, missed connection, rebooking, hỏi chuyến kế tiếp và hành lý ký gửi khi bị hủy.",
    questions: buildSituationQuestions("ap-58", [
      { emoji: "⏰", who: "Nhân viên", pEn: "Your flight is delayed by two hours.", pVi: "Chuyến bay của anh/chị bị trễ hai tiếng.", en: "Will I still make my connection?", vi: "Tôi có còn kịp chuyến nối không?", wrong1: "I'd like a window seat.", wrong2: "That's not my bag.", note: "Hỏi ngay ảnh hưởng đến chuyến nối.", tip: "Dùng khi nghe thông báo trễ chuyến." },
      { emoji: "😓", who: "Nhân viên", pEn: "How may I assist you?", pVi: "Tôi có thể hỗ trợ gì cho anh/chị?", en: "I missed my connecting flight. Can you rebook me?", vi: "Tôi lỡ chuyến nối. Chị đổi vé giúp tôi được không?", wrong1: "I'd like a blanket.", wrong2: "Where is the taxi stand?", note: "Nói rõ vấn đề và nhờ rebook.", tip: "Dùng khi lỡ chuyến nối." },
      { emoji: "🌙", who: "Nhân viên", pEn: "The next available flight leaves at 6:40 tomorrow morning.", pVi: "Chuyến kế tiếp còn chỗ cất cánh lúc 6:40 sáng mai.", en: "Is there anything earlier tonight?", vi: "Tối nay có chuyến nào sớm hơn không?", wrong1: "I'm at the wrong gate.", wrong2: "My bag is a carry-on.", note: "Hỏi lựa chọn khác trước khi đồng ý.", tip: "Dùng khi chuyến kế tiếp quá muộn." },
      { emoji: "🧳", who: "Nhân viên", pEn: "Your flight was canceled. We'll find you another one.", pVi: "Chuyến bay của anh/chị bị hủy. Chúng tôi sẽ tìm chuyến khác.", en: "Thank you. What happens to my checked bag?", vi: "Cảm ơn chị. Hành lý ký gửi của tôi sẽ thế nào?", wrong1: "I'd like the aisle seat.", wrong2: "Can I board now?", note: "Hỏi về bag để biết có phải nhận lại không.", tip: "Dùng khi chuyến bay bị hủy." },
      { emoji: "🗣️", who: "Nhân viên", pEn: "We'll know more in a few minutes.", pVi: "Vài phút nữa chúng tôi sẽ biết thêm.", en: "About how long will the delay be?", vi: "Khoảng bao lâu thì chuyến bay mới đi?", wrong1: "Yes, I have a boarding pass.", wrong2: "I'll take the pasta.", note: "Hỏi thời gian ước tính để lên kế hoạch.", tip: "Dùng khi chưa có giờ bay mới." },
    ]),
  },
  {
    id: "ap-59",
    slug: "ap-59-doi-terminal-voucher-hotel",
    ...meta,
    category: "delay",
    title: "Đổi terminal, meal voucher & hotel voucher",
    description: "Terminal change, xin meal voucher, hotel voucher và hỏi nơi rebook khi bị trễ qua đêm.",
    questions: buildSituationQuestions("ap-59", [
      { emoji: "🚏", who: "Thông báo", pEn: "Flight 308 is moving to Terminal 2.", pVi: "Chuyến bay 308 chuyển sang Terminal 2.", en: "How do I get to Terminal 2?", vi: "Tôi đến Terminal 2 bằng cách nào?", wrong1: "I'd like water, please.", wrong2: "My flight was yesterday.", note: "Hỏi cách di chuyển (tàu nội bộ, xe buýt, đi bộ).", tip: "Dùng khi đổi nhà ga (terminal)." },
      { emoji: "🍔", who: "Nhân viên", pEn: "I'm sorry for the long delay.", pVi: "Tôi xin lỗi vì chuyến bay trễ lâu.", en: "That's okay. Do you offer a meal voucher?", vi: "Không sao. Bên chị có meal voucher không?", wrong1: "I'd like a window seat.", wrong2: "I'm at the wrong gate.", note: "Hỏi lịch sự về hỗ trợ ăn uống khi trễ lâu.", tip: "Dùng khi bị trễ nhiều giờ." },
      { emoji: "🏨", who: "Nhân viên", pEn: "We can't get you out until tomorrow.", pVi: "Chúng tôi không thể đưa anh/chị đi trước ngày mai.", en: "Is a hotel voucher available?", vi: "Có hotel voucher (phiếu khách sạn) không?", wrong1: "Please scan my boarding pass.", wrong2: "I'll check one bag.", note: "Hỏi xem hãng có hỗ trợ chỗ ở không.", tip: "Dùng khi phải ở lại qua đêm." },
      { emoji: "🎫", who: "Nhân viên cổng", pEn: "You'll need to rebook at customer service.", pVi: "Anh/chị cần đổi vé ở quầy chăm sóc khách hàng.", en: "Where is the customer service desk?", vi: "Quầy chăm sóc khách hàng ở đâu?", wrong1: "I'd like the chicken.", wrong2: "Where is the blanket?", note: "Hỏi vị trí quầy để rebook.", tip: "Dùng khi cổng không thể đổi vé cho bạn." },
      { emoji: "📞", who: "Nhân viên", pEn: "You can also rebook on the airline's app.", pVi: "Anh/chị cũng có thể đổi vé trên ứng dụng của hãng.", en: "Good to know. Which one is faster?", vi: "Tốt quá. Cách nào nhanh hơn vậy?", wrong1: "I'm connecting to Seattle.", wrong2: "I need a taxi.", note: "So sánh để chọn cách nhanh nhất.", tip: "Dùng khi có nhiều cách đổi vé." },
    ]),
  },
  {
    id: "ap-60",
    slug: "ap-60-nhan-hanh-ly-mat-hu-rideshare",
    ...meta,
    category: "baggage",
    title: "Baggage claim, hành lý mất/hư & rideshare",
    description: "Tìm băng chuyền (carousel), báo hành lý mất, hành lý trễ, vali hư và hỏi khu đón rideshare.",
    questions: buildSituationQuestions("ap-60", [
      { emoji: "🎠", who: "Nhân viên", pEn: "Can I help you find something?", pVi: "Tôi giúp anh/chị tìm gì không?", en: "Yes, which carousel is for the flight from Chicago?", vi: "Vâng, băng chuyền nào là của chuyến bay từ Chicago?", wrong1: "I'd like a blanket.", wrong2: "My boarding pass is on my phone.", note: "Nói rõ chuyến bay đến từ đâu.", tip: "Dùng khi không thấy bảng thông tin băng chuyền." },
      { emoji: "😟", who: "Nhân viên", pEn: "What seems to be the problem?", pVi: "Anh/chị gặp vấn đề gì vậy?", en: "My bag didn't come out. Where's the baggage service office?", vi: "Hành lý của tôi không ra. Văn phòng hỗ trợ hành lý ở đâu?", wrong1: "I'd like a window seat.", wrong2: "I'm boarding in ten minutes.", note: "Báo bag không ra và hỏi nơi làm thủ tục.", tip: "Dùng khi hành lý không xuất hiện." },
      { emoji: "🚚", who: "Nhân viên", pEn: "Your bag was delayed. We'll deliver it tomorrow.", pVi: "Hành lý của anh/chị bị trễ. Ngày mai chúng tôi sẽ giao.", en: "Can you deliver it to my hotel?", vi: "Chị giao đến khách sạn của tôi được không?", wrong1: "I'll check it again.", wrong2: "I'd like the pasta.", note: "Đưa địa chỉ nhận để hãng giao tận nơi.", tip: "Dùng khi bag đến sau." },
      { emoji: "💥", who: "Nhân viên", pEn: "Is there something wrong with your luggage?", pVi: "Hành lý của anh/chị có vấn đề gì không?", en: "My suitcase is damaged. What should I do?", vi: "Vali của tôi bị hư. Tôi nên làm gì?", wrong1: "It's my carry-on.", wrong2: "I'm at gate C4.", note: "Nói rõ vali hư và hỏi thủ tục báo cáo.", tip: "Dùng khi vali bị vỡ/rách." },
      { emoji: "🚗", who: "Nhân viên", pEn: "Do you need directions to ground transportation?", pVi: "Anh/chị cần chỉ đường đến chỗ đón xe không?", en: "Yes. Which way is the rideshare pickup area?", vi: "Có. Khu đón xe công nghệ đi hướng nào?", wrong1: "I'd like an aisle seat.", wrong2: "My flight is delayed.", note: "Hỏi hướng đi cụ thể đến rideshare.", tip: "Dùng khi vừa nhận xong hành lý." },
    ]),
  },
];
