import { Lesson } from "@/types/content";
import { buildSituationQuestions, SituationItem } from "@/data/lessons/_shared/situationKit";
import { BATCH_2026_10 } from "@/data/newBatch";

/**
 * Nails expansion (Oct 2026): 11 new 5-question lessons = 55 new items, one
 * per requested filter category. Each lesson is placed in the existing
 * "Hội thoại Nails" topic where it fits best (see the per-topic exports).
 * Customer says the prompt line, the technician (learner) replies.
 */
type TopicId = "nails-bat-dau" | "nails-dich-vu" | "nails-mau-design" | "nails-xu-ly-tinh-huong" | "nails-pedicure" | "nails-small-talk" | "nails-thanh-toan";

const K = "Khách";
const c = (emoji: string, pEn: string, pVi: string, en: string, vi: string, wrong1: string, wrong2: string, note: string, tip: string): SituationItem => ({
  emoji, who: K, pEn, pVi, en, vi, wrong1, wrong2, note, tip,
});

/** Topic-matched realistic photos (existing library assets) — one distinct image per category, never the cartoon fallback. */
const COVER_BY_CATEGORY: Record<string, string> = {
  consultation: "/images/lessons/cr-17-mau-theo-hinh.jpg",
  appointment: "/images/lessons/bd-new-1-dat-hen-truoc.jpg",
  manicure: "/images/lessons/hoi-khach-muon-lam-gi-hom-nay.jpg",
  pedicure: "/images/lessons/lam-pedicure-cho-khach.jpg",
  gel: "/images/lessons/hand-41-gel-1.jpg",
  acrylic: "/images/lessons/acrylic-new-set-va-fill.jpg",
  "gel-x": "/images/lessons/khach-hoi-gel-x.jpg",
  upsell: "/images/lessons/gia-dich-vu-va-add-on.jpg",
  concerns: "/images/lessons/khi-khach-chua-hai-long-mong.jpg",
  "small-talk": "/images/lessons/st-31-du-lich-1.jpg",
  checkout: "/images/lessons/ket-thuc-dich-vu-va-thanh-toan.jpg",
};

function lesson(
  topicId: TopicId,
  n: string,
  slug: string,
  category: string,
  title: string,
  description: string,
  items: SituationItem[],
): Lesson {
  const id = `nails-n${n}`;
  return {
    id,
    slug,
    topicId,
    title,
    description,
    level: "beginner",
    category,
    coverImage: COVER_BY_CATEGORY[category],
    ...BATCH_2026_10,
    questions: buildSituationQuestions(id, items),
  };
}

const consultation = lesson("nails-mau-design", "01", "nb-01-tu-van-shape-length-photo", "consultation",
  "Tư vấn: shape, length, màu & reference photo",
  "Khách đưa ảnh mẫu, muốn móng ngắn hơn, tự nhiên, đồng bộ tay và chân — và xác nhận lại trước khi bắt đầu.",
  [
    c("📸", "Can you do this shape? I have a photo.", "Chị làm dáng này được không? Tôi có ảnh.", "Yes, I can. Which part do you like most — the shape or the color?", "Được ạ. Chị thích nhất phần nào — dáng hay màu?", "I'm sorry, we're closed.", "That will be forty dollars.", "Hỏi điểm khách thích nhất để làm đúng ý.", "Dùng khi khách đưa reference photo."),
    c("✂️", "I want them a little shorter.", "Tôi muốn móng ngắn hơn một chút.", "Okay, I'll file them down. Tell me when it looks right.", "Được, tôi dũa ngắn lại. Chị bảo tôi dừng khi vừa ý nhé.", "The water is too hot.", "Do you have an appointment?", "Cho khách quyền quyết định lúc nào dừng.", "Dùng khi khách muốn đổi độ dài."),
    c("🌸", "I want a natural look.", "Tôi muốn nhìn tự nhiên.", "Got it. A soft pink or nude would look great.", "Hiểu rồi. Màu hồng nhạt hoặc nude sẽ rất đẹp.", "Natural look costs extra.", "We only do red today.", "Gợi ý hai màu cụ thể thay vì hỏi chung chung.", "Dùng khi khách muốn kiểu nhẹ nhàng, tự nhiên."),
    c("👣", "Can you match my toes to my hands?", "Chị làm móng chân giống móng tay giúp tôi được không?", "Of course. I'll use the same color.", "Dĩ nhiên. Tôi sẽ dùng cùng màu.", "My toes are fine.", "That's all for today.", "Đồng ý và nói rõ sẽ dùng cùng màu.", "Dùng khi khách làm cả tay lẫn chân."),
    c("✅", "Okay, I think I'm ready.", "Được rồi, tôi nghĩ mình sẵn sàng.", "Great. Let me confirm: almond shape, medium length, soft pink. Is that right?", "Tuyệt. Để tôi xác nhận: dáng almond, độ dài vừa, hồng nhạt. Đúng không chị?", "Please pay at the front.", "I'll see you next week.", "Nhắc lại lựa chọn để tránh làm sai.", "Dùng ngay trước khi bắt đầu làm."),
  ]);

const appointment = lesson("nails-bat-dau", "02", "nb-02-hen-den-tre-walk-in", "appointment",
  "Appointment: xác nhận, đến trễ, walk-in & đổi lịch",
  "Khách có hẹn, đến trễ, hỏi walk-in, đổi lịch và khi thợ đang bị trễ giờ.",
  [
    c("📅", "Hi, I have a two o'clock with Lily.", "Chào, tôi có hẹn hai giờ với Lily.", "Yes, welcome. Lily will be right with you.", "Vâng, chào chị. Lily sẽ ra ngay.", "We don't have an appointment.", "Please pay first.", "Xác nhận có hẹn và báo thợ sắp ra.", "Dùng khi khách đến đúng hẹn."),
    c("⏱️", "I'm sorry, I'm ten minutes late.", "Xin lỗi, tôi đến trễ mười phút.", "No problem. Let me see if we can still take you.", "Không sao. Để tôi xem mình còn nhận chị được không.", "You're late. Please leave.", "Your total is thirty dollars.", "Trấn an khách rồi kiểm tra lịch.", "Dùng khi khách đến muộn."),
    c("🚶", "Do you take walk-ins?", "Ở đây có nhận khách không hẹn không?", "Yes, but there might be a short wait.", "Có, nhưng có thể phải chờ một chút.", "No, we're never open.", "I'll take the red one.", "Báo trước thời gian chờ để khách quyết định.", "Dùng khi có khách walk-in."),
    c("🔄", "Can I reschedule for tomorrow?", "Tôi dời sang ngày mai được không?", "Sure. What time works for you?", "Được. Chị tiện giờ nào?", "Yes, the gel is ready.", "That color looks great.", "Hỏi giờ khách tiện để xếp lịch.", "Dùng khi khách xin đổi lịch hẹn."),
    c("🕒", "How much longer will it be?", "Còn bao lâu nữa vậy?", "I'm sorry for the wait. We're running about ten minutes behind.", "Xin lỗi vì để chị chờ. Bên em đang trễ khoảng mười phút.", "It will be ready tomorrow.", "Please keep your hand flat.", "Xin lỗi và nói thời gian cụ thể.", "Dùng khi thợ đang bị trễ lịch."),
  ]);

const manicure = lesson("nails-dich-vu", "03", "nb-03-manicure-gel-cu-mong-mong", "manicure",
  "Manicure: gỡ gel cũ, móng mỏng & tay đặt phẳng",
  "Gỡ gel cũ, móng mỏng, móng ngắn, sơn bị nhăn và nhắc khách để tay phẳng.",
  [
    c("🧽", "I have old gel on. Can you take it off?", "Tôi còn gel cũ. Chị gỡ giúp được không?", "Sure. I'll soak it off first.", "Được. Tôi sẽ ngâm gỡ trước.", "No, keep it on forever.", "That's thirty dollars.", "Nói rõ bước đầu để khách yên tâm.", "Dùng khi khách còn gel cũ."),
    c("🪶", "My nails are really thin.", "Móng của tôi mỏng lắm.", "No worries. I'll take it slow with your nails.", "Không sao. Em sẽ làm chậm và nhẹ tay.", "Then I'll use the strongest tool.", "We only do long nails.", "Trấn an và hứa làm nhẹ nhàng.", "Dùng khi khách lo móng yếu."),
    c("🔹", "My nails are short. Can you still do a manicure?", "Móng tôi ngắn. Chị vẫn làm manicure được chứ?", "Yes, we can. Short nails look neat and clean.", "Được ạ. Móng ngắn trông gọn gàng, sạch sẽ.", "No, they're too short.", "Come back next year.", "Khẳng định làm được và khen móng ngắn.", "Dùng khi khách ngại móng ngắn."),
    c("🎨", "Why is the polish wrinkling?", "Sao lớp sơn bị nhăn vậy?", "It was a little thick. Let me redo this nail.", "Lớp sơn hơi dày. Để tôi làm lại móng này.", "That's the new style.", "It's your fault.", "Nhận phần mình và sửa ngay.", "Dùng khi sơn bị nhăn hoặc không đều."),
    c("🖐️", "Do I rest my hand here?", "Tôi đặt tay ở đây phải không?", "Yes, please keep your hand flat on the towel.", "Vâng, xin chị để tay phẳng trên khăn.", "Please take your hand out now.", "Put it in your pocket.", "Hướng dẫn đơn giản để lớp sơn không bị lem.", "Dùng khi bắt đầu sơn."),
  ]);

const pedicure = lesson("nails-pedicure", "04", "nb-04-pedicure-nuoc-callus-massage", "pedicure",
  "Pedicure: nước, callus, lực massage & chỗ nhạy cảm",
  "Nhiệt độ nước, xử lý callus, massage mạnh/nhẹ, tập trung gót chân và vùng nhạy cảm.",
  [
    c("🛁", "I think the water needs to be cooler.", "Tôi nghĩ nước cần mát hơn.", "Let me add some cold water. Is that better?", "Để tôi thêm nước lạnh. Vậy đỡ hơn chưa chị?", "It's supposed to be hot.", "Please take off your shoes.", "Chỉnh nước rồi hỏi lại khách ngay.", "Dùng khi khách thấy nước quá nóng."),
    c("🦶", "Can you work on my calluses?", "Chị xử lý chai chân cho tôi được không?", "Sure. I'll soften them first.", "Được. Tôi sẽ làm mềm trước.", "No, calluses are good.", "That costs ten dollars.", "Nói bước làm cho khách biết.", "Dùng khi khách muốn làm callus."),
    c("💪", "That's too hard.", "Mạnh quá.", "Sorry. Let me use a lighter touch.", "Xin lỗi. Để tôi làm nhẹ hơn.", "This is the normal pressure.", "I'll go harder.", "Xin lỗi và điều chỉnh ngay.", "Dùng khi khách thấy massage quá mạnh."),
    c("👟", "Can you focus on the bottom of my feet?", "Chị tập trung phần dưới lòng bàn chân giúp tôi nhé?", "Sure. I'll spend extra time on the heels.", "Được. Tôi sẽ làm kỹ phần gót.", "We don't do feet.", "Please pay first.", "Nhắc cụ thể vùng sẽ làm kỹ.", "Dùng khi khách muốn chú trọng một vùng."),
    c("⚠️", "That spot is sensitive.", "Chỗ đó nhạy cảm lắm.", "Thanks for telling me. I'll go easy there.", "Cảm ơn chị đã nói. Tôi sẽ làm nhẹ chỗ đó.", "I'll press more there.", "It looks fine to me.", "Cảm ơn và hứa làm nhẹ tay.", "Dùng khi khách báo vùng đau/nhạy."),
  ]);

const gel = lesson("nails-dich-vu", "05", "nb-05-gel-va-builder-gel", "gel",
  "Gel & builder gel: gel bị mẻ, bong, đèn nóng",
  "Gel bị mẻ hoặc bong sớm, đèn curing quá nóng, builder gel khi nuôi móng và khi nào được rút tay ra.",
  [
    c("🪨", "I like the gel, but it feels heavy.", "Tôi thích gel nhưng thấy hơi nặng.", "Next time I can use a thinner layer.", "Lần sau em sẽ làm lớp mỏng hơn.", "Heavy is the best way.", "Then don't use gel at all.", "Đề nghị điều chỉnh cho lần sau.", "Dùng khi khách thấy gel dày/nặng."),
    c("🌫️", "I don't want a shiny finish.", "Tôi không muốn bóng.", "We can do a matte top coat. It looks soft and modern.", "Mình có thể phủ top coat mờ (matte). Nhìn nhẹ nhàng và hiện đại.", "All gel must be shiny.", "Matte costs a hundred dollars.", "Gợi ý lựa chọn thay thế cụ thể.", "Dùng khi khách muốn lớp hoàn thiện khác."),
    c("🔥", "The lamp feels hot.", "Đèn nóng quá.", "Take your hand out for a second, then try again.", "Chị rút tay ra một chút rồi thử lại nhé.", "Keep it there. It's normal.", "I'll turn on the heater.", "Cho khách rút tay ra rồi thử lại.", "Dùng khi khách thấy nóng dưới đèn."),
    c("🏗️", "Should I do builder gel over my natural nails?", "Tôi làm builder gel lên móng thật nhé?", "Builder gel is great if you want to grow them out without tips.", "Builder gel rất hợp nếu chị muốn nuôi móng mà không dùng tip.", "No, builder gel is only for toes.", "It will make your nails fall off.", "Gợi ý bằng lợi ích cụ thể.", "Dùng khi khách muốn nuôi móng."),
    c("⏲️", "Can I take my hand out now?", "Tôi rút tay ra được chưa?", "Please keep your hand under the lamp until the timer beeps.", "Chị để tay dưới đèn đến khi đồng hồ kêu nhé.", "Yes, take it out right now.", "Please leave the lamp on.", "Nhắc chờ tiếng bíp để gel khô đều.", "Dùng khi khách muốn rút tay sớm."),
  ]);

const acrylic = lesson("nails-dich-vu", "06", "nb-06-acrylic-fill-lifting", "acrylic",
  "Acrylic: fill hay full set, nail bị lifting & bảo dưỡng",
  "Phân biệt fill và full set, móng bị bong (lifting), gãy móng, thời gian làm và cách giữ acrylic bền.",
  [
    c("🔧", "Do I need a fill or a full set?", "Tôi cần fill hay làm full set?", "It looks like you need a fill. Your nails are growing out.", "Có vẻ chị cần fill. Móng đang mọc dài ra.", "You need a new car.", "You need a haircut.", "Nhìn móng rồi nói gợi ý ngắn.", "Dùng khi khách đến làm lại acrylic."),
    c("📈", "One of my nails is lifting.", "Một móng của tôi bị bong.", "I can fix that. Let me check it first.", "Tôi sửa được. Để tôi xem trước.", "That's how it should look.", "Please pay first.", "Kiểm tra trước khi sửa.", "Dùng khi móng acrylic bị bong."),
    c("💔", "I broke a nail. Can you repair it?", "Tôi làm gãy một móng. Chị sửa được không?", "Sure. I'll repair it with acrylic.", "Được. Tôi sẽ sửa bằng acrylic.", "No, I can't fix it.", "Just glue it with water.", "Nói cách sửa ngắn gọn.", "Dùng khi khách gãy móng."),
    c("⌛", "How long will a full set take?", "Làm full set mất bao lâu?", "About an hour and a half.", "Khoảng một tiếng rưỡi.", "About ten seconds.", "It takes a whole week.", "Cho khách thời gian cụ thể.", "Dùng khi khách hỏi thời gian làm."),
    c("🛠️", "How do I take care of acrylics?", "Tôi chăm sóc móng acrylic thế nào?", "Avoid using your nails as tools, and come back for a fill in two to three weeks.", "Đừng dùng móng làm dụng cụ, và quay lại fill sau hai đến ba tuần.", "Never wash your hands.", "Use them to open cans.", "Hai lời dặn dễ nhớ.", "Dùng khi kết thúc dịch vụ acrylic."),
  ]);

const gelx = lesson("nails-dich-vu", "07", "nb-07-gel-x-la-gi", "gel-x",
  "Gel-X thực tế: tip không vừa, bị bật, đi du lịch & đổi dáng",
  "Tình huống thật khi làm Gel-X: tip quá rộng, móng bị bật, khách sắp đi xa, chỉnh độ dài và đổi shape lần sau.",
  [
    c("📏", "These tips feel a little too wide.", "Mấy cái tip này hơi rộng.", "Let me swap them for a smaller size.", "Để tôi đổi sang cỡ nhỏ hơn.", "They're supposed to be wide.", "Please pay first.", "Đổi cỡ tip ngay thay vì giải thích.", "Dùng khi tip không vừa móng."),
    c("🤕", "One Gel-X popped off after a week.", "Một móng Gel-X của tôi bị bật ra sau một tuần.", "I'm sorry. I'll replace it for you today.", "Em xin lỗi. Hôm nay em thay móng đó cho chị.", "That happens every day.", "Please come back in a month.", "Xin lỗi và hứa sửa cụ thể.", "Dùng khi móng Gel-X bị bật."),
    c("✈️", "I'm going on a trip. Will these hold up?", "Tôi sắp đi du lịch. Móng này có bền không?", "They should hold up well. Just avoid picking at them.", "Chắc chắn bền. Chị chỉ cần đừng cạy móng.", "No, they'll fall off tomorrow.", "Trips are bad for nails.", "Trấn an và đưa một lời dặn ngắn.", "Dùng khi khách sắp đi xa."),
    c("✂️", "Can you cut them shorter later if I don't like it?", "Nếu không thích, sau này chị cắt ngắn lại giúp tôi được không?", "Yes, I can file them shorter anytime.", "Được, em dũa ngắn lại lúc nào cũng được.", "No, they stay long forever.", "You have to remove all of them.", "Cho khách yên tâm có thể chỉnh lại.", "Dùng khi khách còn phân vân độ dài."),
    c("🔄", "Can I try a different shape next time?", "Lần sau tôi đổi dáng móng được không?", "No problem. We can reshape them at your next visit.", "Không sao. Lần sau mình tạo lại dáng cho chị.", "No, shapes can't change.", "You can only have square.", "Cho khách biết có thể thay đổi.", "Dùng khi khách muốn thử dáng khác."),
  ]);

const upsell = lesson("nails-dich-vu", "08", "nb-08-upsell-massage-gel-chrome", "upsell",
  "Upsell tự nhiên: gel, extra massage, chrome & French",
  "Gợi ý thêm gel, extra massage, callus treatment, design hoặc chrome mà không làm khách thấy bị ép.",
  [
    c("➕", "I'll just get a regular manicure.", "Tôi chỉ làm manicure thường thôi.", "Would you like to add gel? It lasts much longer.", "Chị có muốn thêm gel không? Bền hơn nhiều.", "You must add gel.", "No gel for you.", "Dùng câu hỏi nhẹ nhàng nêu lợi ích.", "Dùng khi gợi ý nâng cấp dịch vụ."),
    c("💆", "I'm getting a pedicure.", "Tôi làm pedicure.", "Would you like an extra massage? It's a nice way to relax.", "Chị có muốn massage thêm không? Rất thư giãn.", "Massage is required.", "Please pay extra now.", "Nêu lợi ích thay vì ép.", "Dùng khi khách làm pedicure."),
    c("🦵", "My heels are really dry.", "Gót chân tôi khô lắm.", "I can add a callus treatment. It makes them smooth.", "Tôi có thể thêm callus treatment. Giúp gót mịn hơn.", "That's your problem.", "Dry heels are normal forever.", "Gợi ý đúng nhu cầu khách vừa nói.", "Dùng khi khách nói về gót chân khô."),
    c("🇫🇷", "I'm not sure about design.", "Tôi chưa chắc về design.", "How about simple French tips? They look clean.", "Làm French tips đơn giản nhé? Nhìn gọn gàng.", "You need a huge design.", "No design is allowed.", "Gợi ý một lựa chọn đơn giản.", "Dùng khi khách chưa biết chọn design."),
    c("✨", "Do you have anything shiny?", "Bên chị có kiểu nào lấp lánh không?", "Yes! We can do chrome. It's very popular right now.", "Có ạ! Bên em làm chrome. Đang rất được ưa chuộng.", "We don't have shiny things.", "Shiny costs a hundred dollars.", "Giới thiệu kiểu cụ thể và vì sao hợp.", "Dùng khi khách muốn kiểu nổi bật."),
  ]);

const concerns = lesson("nails-xu-ly-tinh-huong", "09", "nb-09-khach-lo-ngai-sua-chua", "concerns",
  "Khách lo ngại: shape không đều, quá dày, đổi ý giữa chừng",
  "Xử lý bình tĩnh khi móng không đều, quá dày, màu khác hình mẫu, khách đổi ý hoặc móng quá ngắn cho design.",
  [
    c("📐", "The edge on my ring finger feels rough.", "Cạnh móng ngón áp út của tôi hơi nhám.", "Let me smooth that for you right away.", "Để tôi làm mịn ngay cho chị.", "They all look perfect.", "Please come back tomorrow.", "Sửa ngay thay vì giải thích dài.", "Dùng khi khách chỉ ra một móng chưa đẹp."),
    c("🧱", "It feels too thick.", "Cảm giác hơi dày.", "I can make it thinner. Give me a moment.", "Tôi làm mỏng lại được. Chờ tôi một chút nhé.", "Thick is better.", "That's how it should be.", "Đề nghị làm mỏng và xin thời gian.", "Dùng khi khách thấy lớp gel/acrylic dày."),
    c("🎨", "The color looks different from the bottle.", "Màu nhìn khác với trong chai.", "That can happen under different lighting. Would you like to try another shade?", "Có thể do ánh sáng khác nhau. Chị muốn thử tông khác không?", "The bottle is wrong.", "You chose it yourself.", "Giải thích và đưa lựa chọn.", "Dùng khi màu khác kỳ vọng."),
    c("🔄", "I changed my mind. I want something darker.", "Tôi đổi ý rồi. Tôi muốn màu đậm hơn.", "Sure. I'll take this off and start over with a darker shade.", "Được. Tôi sẽ tháo ra và làm lại với màu đậm hơn.", "No, it's too late.", "That costs double.", "Đồng ý và nói bước sắp làm.", "Dùng khi khách đổi ý giữa chừng."),
    c("🖼️", "I want this design, but my nails are too short.", "Tôi muốn design này nhưng móng tôi quá ngắn.", "We can make it work. Let me show you a simpler version.", "Mình làm được. Để tôi cho chị xem phiên bản đơn giản hơn.", "Then you can't do any design.", "Just grow them for a year.", "Giữ thái độ tích cực và đưa phương án.", "Dùng khi ảnh mẫu không hợp độ dài móng."),
  ]);

const smallTalk = lesson("nails-small-talk", "10", "nb-10-small-talk-cuoi-tuan-du-lich", "small-talk",
  "Small talk: cuối tuần, du lịch, thời tiết & lời khen",
  "Trò chuyện nhẹ nhàng về cuối tuần, chuyến đi, thời tiết, sự kiện và đáp lại lời khen.",
  [
    c("🎉", "I'm so glad it's Friday.", "Tôi mừng vì hôm nay là thứ Sáu.", "Me too! Any plans for the weekend?", "Em cũng vậy! Cuối tuần chị có kế hoạch gì không?", "Fridays are terrible.", "Please pay first.", "Đồng cảm rồi hỏi tiếp một câu nhẹ.", "Dùng khi nói chuyện về cuối tuần."),
    c("🌴", "We're going to Hawaii next month.", "Tháng sau nhà tôi đi Hawaii.", "That sounds amazing! Have you been there before?", "Nghe tuyệt quá! Chị từng đến đó chưa?", "Hawaii is boring.", "I don't like trips.", "Hưởng ứng rồi hỏi tiếp.", "Dùng khi khách kể về chuyến đi."),
    c("🥶", "It's so cold outside today.", "Hôm nay bên ngoài lạnh quá.", "I know. It feels like winter already.", "Đúng vậy. Cảm giác như mùa đông rồi.", "It's very hot today.", "I like the heat.", "Đồng ý và thêm một nhận xét ngắn.", "Dùng khi nói chuyện thời tiết."),
    c("💍", "My cousin is getting married next week.", "Em họ tôi sắp cưới vào tuần sau.", "How exciting! Congratulations to your cousin.", "Vui quá! Chúc mừng em của chị.", "Weddings are too long.", "I don't go to weddings.", "Chúc mừng, giữ chuyện nhẹ nhàng, không riêng tư.", "Dùng khi khách nhắc sự kiện gia đình."),
    c("😊", "I love your shop. It smells so good.", "Tôi thích tiệm của chị. Thơm quá.", "Thank you! That makes my day.", "Cảm ơn chị! Chị làm em vui cả ngày.", "It smells bad to me.", "That's not a compliment.", "Nhận lời khen bằng câu ngắn, thân thiện.", "Dùng khi khách khen tiệm."),
  ]);

const checkout = lesson("nails-thanh-toan", "11", "nb-11-checkout-discount-tinh-tien", "checkout",
  "Checkout: tính tiền, receipt, hẹn lần sau & xin discount",
  "Báo tổng tiền, receipt, xác nhận hẹn lần sau, khách xin discount và khách phàn nàn về giá.",
  [
    c("💵", "Can you ring me up?", "Chị tính tiền giúp tôi nhé?", "Sure. Your total is forty-five dollars. You can pay by card.", "Được ạ. Tổng của chị là bốn mươi lăm đô. Chị trả bằng thẻ được.", "It's free today.", "Please come tomorrow.", "Nói tổng tiền và cách trả cùng lúc.", "Dùng khi khách muốn thanh toán."),
    c("🧾", "Could I get a receipt?", "Cho tôi xin biên lai được không?", "Sure. Do you want it printed or by text?", "Được ạ. Chị muốn in hay gửi tin nhắn?", "We don't have receipts.", "Receipts cost extra.", "Hỏi cách nhận receipt.", "Dùng khi khách xin receipt."),
    c("📆", "Can I book my next appointment?", "Tôi đặt lịch lần sau được không?", "Sure. Would the same day and time work in three weeks?", "Được. Cùng ngày và giờ này sau ba tuần được không chị?", "Next appointment is never.", "Please pay again.", "Đề xuất lịch cụ thể để khách xác nhận.", "Dùng khi khách đặt hẹn lần sau."),
    c("🏷️", "Can I get a discount?", "Tôi được giảm giá không?", "I'm sorry, we can't change the price. But we have a loyalty card.", "Xin lỗi, bên em không giảm được. Nhưng có thẻ khách hàng thân thiết.", "Yes, everything is half price.", "No, and please leave.", "Từ chối lịch sự và đưa lựa chọn khác.", "Dùng khi khách xin discount."),
    c("😕", "The price is higher than the website said.", "Giá cao hơn trên website.", "I understand. The difference is for the gel removal. I should have told you.", "Em hiểu. Phần chênh là phí gỡ gel. Lẽ ra em phải báo chị trước.", "That's the price. Pay now.", "I don't care.", "Giải thích rõ và nhận phần chưa báo trước.", "Dùng khi khách phàn nàn về giá."),
  ]);

export const nailsBatchByTopic: Record<TopicId, Lesson[]> = {
  "nails-bat-dau": [appointment],
  "nails-dich-vu": [manicure, gel, acrylic, gelx, upsell],
  "nails-mau-design": [consultation],
  "nails-xu-ly-tinh-huong": [concerns],
  "nails-pedicure": [pedicure],
  "nails-small-talk": [smallTalk],
  "nails-thanh-toan": [checkout],
};
