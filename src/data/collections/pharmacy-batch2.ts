import { CollectionItem } from "@/types/collection";
import { BATCH_2026_10 } from "@/data/newBatch";

/**
 * Pharmacy expansion batch (Oct 2026) — 50 new items, merged into the
 * existing groups in `pharmacy.ts` plus a new "Cách dùng thuốc" group.
 * Communication practice ONLY: every medication-use item is a question the
 * learner asks the pharmacist — never an instruction about what to take.
 */
const NEW = BATCH_2026_10.newUntil;

const n = (id: string, english: string, vietnamese: string, whenToUse: string, example: string): CollectionItem => ({
  id: `ph-n-${id}`,
  english,
  vietnamese,
  whenToUse,
  example,
  newUntil: NEW,
});

export const layThuocNew: CollectionItem[] = [
  n("01", "Is everything ready for pickup?", "Mọi thứ đã sẵn sàng để lấy chưa?", "Hỏi khi bạn có nhiều đơn thuốc và muốn biết đã xong hết chưa.", "\"Hi, Tran.\" \"Is everything ready for pickup?\""),
  n("02", "We could only fill part of it today.", "Hôm nay chúng tôi chỉ chuẩn bị được một phần.", "Nhân viên báo thuốc chỉ được giao một phần (partial fill).", "We could only fill part of it today. The rest will be in tomorrow."),
  n("03", "When will the rest be ready?", "Khi nào phần còn lại sẽ xong?", "Hỏi tiếp sau khi biết thuốc mới có một phần.", "\"Only part is ready.\" \"When will the rest be ready?\""),
  n("04", "It's on back order.", "Thuốc này đang chờ hàng về (back order).", "Nhân viên giải thích nhà cung cấp chưa giao hàng.", "It's on back order. We expect it in a few days."),
  n("05", "The quantity looks wrong.", "Số lượng có vẻ không đúng.", "Nói khi bạn thấy số viên/số lượng khác với đơn thuốc.", "The quantity looks wrong. Can you check it with me?"),
  n("06", "Can I pick it up at the drive-thru?", "Tôi lấy thuốc ở cửa drive-thru được không?", "Hỏi khi muốn lấy thuốc mà không cần xuống xe.", "Can I pick it up at the drive-thru? I have my kids in the car."),
  n("07", "Your prescription is still in the queue.", "Đơn thuốc của bạn vẫn đang trong hàng chờ.", "Nhân viên báo đơn chưa tới lượt xử lý.", "Your prescription is still in the queue. It'll be about thirty minutes."),
  n("08", "Your doctor hasn't responded yet.", "Bác sĩ của bạn vẫn chưa trả lời.", "Nhân viên báo đã liên hệ bác sĩ nhưng chưa có phản hồi.", "We called your doctor, but your doctor hasn't responded yet."),
  n("09", "Can you ask the doctor to resend it?", "Bạn nhờ bác sĩ gửi lại đơn thuốc được không?", "Nhờ pharmacy liên hệ khi đơn chưa đến hoặc bị lỗi.", "I don't see it here. Can you ask the doctor to resend it?"),
  n("10", "The information on the bag is wrong.", "Thông tin trên túi thuốc bị sai.", "Nói khi tên, ngày sinh hoặc thông tin khác trên túi không đúng.", "The information on the bag is wrong. That's not my date of birth."),
];

export const refillNew: CollectionItem[] = [
  n("11", "Can you set up automatic refills?", "Bạn cài tự động refill cho tôi được không?", "Yêu cầu pharmacy tự động chuẩn bị thuốc mỗi kỳ.", "Can you set up automatic refills for this one?"),
  n("12", "I'd like to turn off automatic refills.", "Tôi muốn tắt tự động refill.", "Nói khi không muốn pharmacy tự chuẩn bị thuốc nữa.", "I'd like to turn off automatic refills for this medication."),
  n("13", "What's the status of my refill?", "Refill của tôi đang ở bước nào rồi?", "Hỏi tình trạng của yêu cầu refill.", "Hi, what's the status of my refill?"),
  n("14", "I'm going on vacation. Can I get it early?", "Tôi sắp đi nghỉ. Tôi lấy sớm được không?", "Hỏi khi cần lấy thuốc trước chuyến đi.", "I'm going on vacation next week. Can I get it early?"),
  n("15", "Please contact my doctor for a refill.", "Làm ơn liên hệ bác sĩ của tôi để xin refill.", "Nhờ pharmacy xin bác sĩ thêm lượt thuốc.", "I'm out of refills. Please contact my doctor for a refill."),
  n("16", "Can you transfer my refills to another store?", "Bạn chuyển các lượt refill của tôi sang chi nhánh khác được không?", "Yêu cầu chuyển thuốc sang pharmacy khác.", "I'm moving soon. Can you transfer my refills to another store?"),
  n("17", "When will my refill be ready?", "Khi nào refill của tôi sẽ xong?", "Hỏi thời gian dự kiến sau khi đã xin refill.", "I called yesterday. When will my refill be ready?"),
];

export const insuranceNew: CollectionItem[] = [
  n("18", "My insurance isn't going through.", "Bảo hiểm của tôi không xử lý được.", "Nhân viên/bạn nói khi hệ thống bảo hiểm báo lỗi.", "I'm sorry, your insurance isn't going through."),
  n("19", "Why did my insurance reject it?", "Vì sao bảo hiểm từ chối?", "Hỏi lý do sau khi claim bị từ chối.", "It says rejected. Why did my insurance reject it?"),
  n("20", "This one needs prior authorization.", "Thuốc này cần được bảo hiểm chấp thuận trước (prior authorization).", "Nhân viên giải thích bảo hiểm cần duyệt trước khi chi trả.", "This one needs prior authorization from your insurance."),
  n("21", "We're waiting on approval from your insurance.", "Chúng tôi đang chờ bảo hiểm của bạn duyệt.", "Nhân viên báo đang chờ bảo hiểm phản hồi.", "We're waiting on approval from your insurance. We'll text you."),
  n("22", "I changed my insurance last month.", "Tháng trước tôi đã đổi bảo hiểm.", "Báo cho nhân viên khi thông tin bảo hiểm mới.", "I changed my insurance last month. Here's the new card."),
  n("23", "I haven't met my deductible yet.", "Tôi chưa đạt mức deductible.", "Giải thích vì sao giá còn cao (chưa trả đủ phần tự chi trả).", "I think I haven't met my deductible yet."),
  n("24", "Does this count toward my deductible?", "Khoản này có được tính vào deductible của tôi không?", "Hỏi khi trả tiền nhưng không chắc có tính vào mức khấu trừ.", "I'm paying full price. Does this count toward my deductible?"),
  n("25", "What's the cash price without insurance?", "Giá tiền mặt khi không dùng bảo hiểm là bao nhiêu?", "Hỏi để so sánh với giá khi dùng bảo hiểm.", "What's the cash price without insurance?"),
];

export const thanhToanNew: CollectionItem[] = [
  n("26", "How much is it?", "Cái này bao nhiêu tiền?", "Câu hỏi giá ngắn gọn, hay dùng nhất ở quầy.", "\"Your total is ready.\" \"How much is it?\""),
  n("27", "Can I pay by card?", "Tôi trả bằng thẻ được không?", "Hỏi hình thức thanh toán bằng thẻ.", "Can I pay by card, or is it cash only?"),
  n("28", "Can you use the card you have on file?", "Bạn dùng thẻ đang lưu trong hồ sơ được không?", "Nhờ nhân viên tính vào thẻ đã lưu.", "Can you use the card you have on file?"),
  n("29", "Is there a discount card I can use?", "Có thẻ giảm giá nào tôi dùng được không?", "Hỏi về thẻ giảm giá — chỉ hỏi, để nhân viên cho biết lựa chọn có sẵn.", "Is there a discount card I can use for this?"),
  n("30", "What's the price difference between brand and generic?", "Giá khác nhau bao nhiêu giữa thuốc hiệu gốc và generic?", "So sánh giá hai loại trước khi quyết định.", "What's the price difference between brand and generic?"),
  n("31", "I'd like the brand name, please.", "Tôi muốn loại thuốc hiệu gốc (brand).", "Yêu cầu loại brand thay vì generic.", "I'd like the brand name, please."),
  n("32", "I'd prefer the generic, please.", "Tôi muốn loại generic.", "Yêu cầu loại generic.", "I'd prefer the generic, please, if that's okay."),
  n("33", "Can you ask the pharmacist if a generic is okay for me?", "Bạn hỏi giúp pharmacist xem generic có phù hợp với tôi không?", "Việc chọn generic nên hỏi pharmacist, không tự quyết định.", "Can you ask the pharmacist if a generic is okay for me?"),
];

export const cachDungNew: CollectionItem[] = [
  n("34", "How often do I take it?", "Tôi dùng thuốc này bao lâu một lần?", "Câu hỏi dành cho pharmacist — luôn làm theo hướng dẫn của họ/bác sĩ.", "Excuse me, how often do I take it?"),
  n("35", "Do I take it before or after meals?", "Tôi uống trước hay sau bữa ăn?", "Hỏi pharmacist về thời điểm dùng thuốc.", "Do I take it before or after meals?"),
  n("36", "How many tablets do I take at a time?", "Mỗi lần tôi uống mấy viên?", "Hỏi pharmacist để chắc chắn đúng số viên.", "How many tablets do I take at a time?"),
  n("37", "Do I need to shake it first?", "Tôi có cần lắc chai trước không?", "Hỏi về cách dùng thuốc dạng lỏng.", "It's a liquid. Do I need to shake it first?"),
  n("38", "How do I use these eye drops?", "Tôi dùng thuốc nhỏ mắt này như thế nào?", "Nhờ pharmacist hướng dẫn cách dùng.", "How do I use these eye drops?"),
  n("39", "Where do I put this cream?", "Tôi thoa kem này ở đâu?", "Hỏi vị trí thoa thuốc dạng kem.", "Where do I put this cream?"),
  n("40", "Does this need to be refrigerated?", "Thuốc này có cần để tủ lạnh không?", "Hỏi cách bảo quản thuốc.", "Does this need to be refrigerated?"),
  n("41", "Can you show me how to use this inhaler?", "Bạn chỉ tôi cách dùng ống hít này được không?", "Nhờ pharmacist làm mẫu cho bạn xem.", "Can you show me how to use this inhaler?"),
  n("42", "What if I miss a dose?", "Nếu tôi quên một liều thì sao?", "Hỏi pharmacist — không tự quyết định bù liều.", "What if I miss a dose?"),
  n("43", "Is there anything I should avoid while taking this?", "Trong lúc dùng thuốc này có gì tôi cần tránh không?", "Hỏi pharmacist về những điều cần lưu ý.", "Is there anything I should avoid while taking this?"),
];

export const hoiPharmacistNew: CollectionItem[] = [
  n("44", "I'm allergic to some medications.", "Tôi bị dị ứng với một số loại thuốc.", "Báo cho pharmacist để họ kiểm tra giúp bạn.", "I'm allergic to some medications. Can you check my file?"),
  n("45", "Can I talk to the pharmacist about my other medications?", "Tôi nói chuyện với pharmacist về các loại thuốc khác của tôi được không?", "Xin tư vấn trực tiếp với dược sĩ.", "Can I talk to the pharmacist about my other medications?"),
  n("46", "Could you explain what this label means?", "Bạn giải thích giúp nhãn thuốc này nghĩa là gì được không?", "Nhờ pharmacist giải thích nhãn.", "Could you explain what this label means?"),
  n("47", "What does \"as needed\" mean on the label?", "\"As needed\" trên nhãn nghĩa là gì?", "Hỏi nghĩa của hướng dẫn thường gặp trên nhãn.", "What does \"as needed\" mean on the label?"),
  n("48", "What does \"twice daily\" mean?", "\"Twice daily\" nghĩa là gì?", "Hỏi nghĩa của cụm thường gặp trên nhãn.", "What does \"twice daily\" mean?"),
  n("49", "Sorry, my English isn't great. Can you repeat that?", "Xin lỗi, tiếng Anh của tôi chưa tốt. Bạn nhắc lại được không?", "Nói khi chưa hiểu pharmacist.", "Sorry, my English isn't great. Can you repeat that?"),
  n("50", "Can you tell me the instructions in simple words?", "Bạn nói hướng dẫn bằng từ đơn giản được không?", "Nhờ pharmacist nói dễ hiểu hơn.", "Can you tell me the instructions in simple words?"),
];
