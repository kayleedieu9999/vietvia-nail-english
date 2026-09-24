import { CollectionData } from "@/types/collection";

/**
 * "Đi Pharmacy & Lấy Thuốc ở Mỹ" — real, short customer ↔ pharmacy-staff
 * exchanges covering the 50 practical pharmacy situations Vietnamese adults
 * (A1–A2) actually run into: picking up, transfer/refill, out-of-stock/
 * generic, insurance/payment, and asking the pharmacist. This is LANGUAGE
 * PRACTICE ONLY — never medical advice. Every item touching dose, side
 * effects, interactions, or whether/how to take a medication teaches the
 * learner how to ASK the pharmacist, never a medical answer (see items in
 * the "Hỏi Pharmacist" group, e.g. ph-42/45/46/47) — this mirrors real
 * pharmacy-counter English, which is intentionally short and direct
 * ("Picking up?" / "Name?" / "It's not ready yet."), not textbook-formal.
 *
 * ~5–6 items per of the 50 source lesson topics (not the full 8–10 ceiling
 * requested) — a deliberate, disclosed scope decision to keep authoring
 * quality and medical-safety phrasing high within this pass; easy to expand
 * per lesson later without touching the review/collection architecture.
 */
export const pharmacyData: CollectionData = {
  key: "pharmacy",
  title: "Đi Pharmacy & Lấy Thuốc ở Mỹ",
  subtitle: "Luyện những câu thường dùng khi lấy thuốc, hỏi pharmacist và xử lý prescription ở Mỹ.",
  groups: [
    {
      id: "lay-thuoc",
      title: "Lấy thuốc",
      items: [
        // 01. Đến quầy Pharmacy lấy thuốc lần đầu
        { id: "ph-01a", english: "I'm here to pick up a prescription.", vietnamese: "Tôi đến lấy thuốc theo toa.", whenToUse: "Câu đầu tiên khi bạn bước tới quầy pharmacy.", example: "\"Hi. Picking up?\" \"Yes, I'm here to pick up a prescription.\"" },
        { id: "ph-01b", english: "Picking up?", vietnamese: "Anh/chị đến lấy thuốc phải không?", whenToUse: "Nhân viên thường hỏi ngắn gọn như vậy, không cần câu đầy đủ.", example: "\"Picking up?\" \"Yes, picking up.\"" },
        { id: "ph-01c", english: "Yes, picking up.", vietnamese: "Vâng, tôi đến lấy thuốc.", whenToUse: "Cách trả lời ngắn gọn, tự nhiên cho câu hỏi trên.", example: "\"Picking up?\" \"Yes, picking up.\"" },
        { id: "ph-01d", english: "I have a prescription to pick up.", vietnamese: "Tôi có một đơn thuốc cần lấy.", whenToUse: "Cách nói đầy đủ hơn khi mới đến quầy.", example: "Hi, I have a prescription to pick up, please." },
        { id: "ph-01e", english: "Is this the pharmacy pickup counter?", vietnamese: "Đây có phải quầy lấy thuốc không?", whenToUse: "Hỏi khi chưa chắc mình đứng đúng quầy.", example: "Excuse me, is this the pharmacy pickup counter?" },
        { id: "ph-01f", english: "I called earlier about my prescription.", vietnamese: "Tôi đã gọi trước về đơn thuốc của mình.", whenToUse: "Nhắc lại nếu bạn đã gọi điện trước khi đến.", example: "I called earlier about my prescription, is it ready?" },

        // 02. Nhân viên hỏi tên của bạn
        { id: "ph-02a", english: "What's the name on the prescription?", vietnamese: "Tên trên đơn thuốc là gì?", whenToUse: "Nhân viên hỏi để tìm đúng đơn thuốc của bạn.", example: "\"What's the name on the prescription?\" \"It's Nguyen.\"" },
        { id: "ph-02b", english: "Name?", vietnamese: "Tên?", whenToUse: "Cách hỏi ngắn gọn, rất thường gặp ở quầy pharmacy.", example: "\"Name?\" \"Tran.\"" },
        { id: "ph-02c", english: "It's under my name, Nguyen.", vietnamese: "Nó dưới tên tôi, Nguyen.", whenToUse: "Trả lời khi báo tên cho nhân viên.", example: "It's under my name, Nguyen. N-G-U-Y-E-N." },
        { id: "ph-02d", english: "Can you spell that for me?", vietnamese: "Bạn đánh vần giúp tôi được không?", whenToUse: "Nhân viên hỏi lại khi chưa nghe rõ tên.", example: "\"Can you spell that for me?\" \"N-G-U-Y-E-N.\"" },
        { id: "ph-02e", english: "How do you spell your last name?", vietnamese: "Họ của bạn viết như thế nào?", whenToUse: "Cách nhân viên hỏi cụ thể hơn về cách viết họ.", example: "How do you spell your last name?" },

        // 03. Xác nhận ngày sinh
        { id: "ph-03a", english: "What's your date of birth?", vietnamese: "Ngày sinh của bạn là gì?", whenToUse: "Nhân viên xác nhận danh tính trước khi đưa thuốc.", example: "\"What's your date of birth?\" \"June 12th, 1985.\"" },
        { id: "ph-03b", english: "Date of birth?", vietnamese: "Ngày sinh?", whenToUse: "Cách hỏi ngắn gọn, thường nghe ở quầy pharmacy.", example: "\"Date of birth?\" \"March 3rd, 1990.\"" },
        { id: "ph-03c", english: "June 12th, 1985.", vietnamese: "Ngày 12 tháng 6 năm 1985.", whenToUse: "Cách trả lời ngày sinh theo kiểu Mỹ (tháng - ngày - năm).", example: "\"Date of birth?\" \"June 12th, 1985.\"" },
        { id: "ph-03d", english: "Can you also confirm your address?", vietnamese: "Bạn xác nhận thêm địa chỉ được không?", whenToUse: "Đôi khi nhân viên hỏi thêm một chi tiết để xác nhận đúng người.", example: "Can you also confirm your address for me?" },
        { id: "ph-03e", english: "Sorry, one more time?", vietnamese: "Xin lỗi, nhắc lại lần nữa được không?", whenToUse: "Xin nhân viên nhắc lại khi chưa nghe rõ.", example: "\"Date of birth?\" \"Sorry, one more time?\"" },

        // 04. Thuốc đã sẵn sàng chưa?
        { id: "ph-04a", english: "Is my prescription ready?", vietnamese: "Thuốc của tôi đã sẵn sàng chưa?", whenToUse: "Hỏi khi muốn biết thuốc đã lấy được chưa.", example: "\"Is my prescription ready?\" \"Let me check.\"" },
        { id: "ph-04b", english: "Let me check.", vietnamese: "Để tôi kiểm tra.", whenToUse: "Nhân viên nói khi cần tra cứu hệ thống.", example: "\"Is it ready?\" \"Let me check.\"" },
        { id: "ph-04c", english: "Yes, it's ready.", vietnamese: "Vâng, thuốc đã sẵn sàng rồi.", whenToUse: "Câu nhân viên trả lời khi thuốc đã xong.", example: "\"Is my prescription ready?\" \"Yes, it's ready.\"" },
        { id: "ph-04d", english: "Give me one second to check.", vietnamese: "Chờ tôi một chút để kiểm tra.", whenToUse: "Nhân viên xin thêm chút thời gian trước khi trả lời.", example: "Give me one second to check that for you." },
        { id: "ph-04e", english: "Not yet, please have a seat.", vietnamese: "Chưa xong, mời bạn ngồi chờ.", whenToUse: "Nhân viên mời bạn ngồi chờ khi thuốc chưa xong.", example: "\"Is it ready?\" \"Not yet, please have a seat.\"" },

        // 05. Thuốc chưa ready
        { id: "ph-05a", english: "It's not ready yet.", vietnamese: "Thuốc chưa sẵn sàng.", whenToUse: "Nhân viên báo thuốc chưa xong.", example: "\"Is it ready?\" \"It's not ready yet.\"" },
        { id: "ph-05b", english: "How long will it take?", vietnamese: "Sẽ mất bao lâu?", whenToUse: "Hỏi tiếp sau khi biết thuốc chưa xong.", example: "\"It's not ready yet.\" \"How long will it take?\"" },
        { id: "ph-05c", english: "We're still working on it.", vietnamese: "Chúng tôi vẫn đang xử lý.", whenToUse: "Cách nhân viên giải thích khi thuốc đang được chuẩn bị.", example: "We're still working on it, sorry for the wait." },
        { id: "ph-05d", english: "Thanks for your patience.", vietnamese: "Cảm ơn bạn đã kiên nhẫn chờ.", whenToUse: "Nhân viên cảm ơn khi bạn phải chờ lâu hơn dự kiến.", example: "Thanks for your patience, almost done." },

        // 06. Hỏi phải chờ bao lâu
        { id: "ph-06a", english: "About how long is the wait?", vietnamese: "Khoảng bao lâu thì xong?", whenToUse: "Hỏi ước lượng thời gian chờ.", example: "\"About how long is the wait?\" \"About twenty minutes.\"" },
        { id: "ph-06b", english: "How much longer?", vietnamese: "Còn bao lâu nữa?", whenToUse: "Cách hỏi ngắn gọn khi đã chờ một lúc.", example: "\"How much longer?\" \"Just a few more minutes.\"" },
        { id: "ph-06c", english: "Is there a long wait today?", vietnamese: "Hôm nay có phải chờ lâu không?", whenToUse: "Hỏi trước khi quyết định chờ hay quay lại sau.", example: "Is there a long wait today?" },
        { id: "ph-06d", english: "It depends on how busy we are.", vietnamese: "Còn tùy hôm nay đông hay không.", whenToUse: "Nhân viên giải thích thời gian chờ không cố định.", example: "It depends on how busy we are today." },

        // 07. Pharmacy báo cần thêm 20 phút
        { id: "ph-07a", english: "It should be ready in about twenty minutes.", vietnamese: "Chắc khoảng hai mươi phút nữa sẽ xong.", whenToUse: "Nhân viên báo thời gian ước lượng.", example: "\"How long?\" \"It should be ready in about twenty minutes.\"" },
        { id: "ph-07b", english: "Give us about twenty minutes.", vietnamese: "Cho chúng tôi khoảng hai mươi phút.", whenToUse: "Cách nói ngắn gọn, rất tự nhiên ở quầy pharmacy.", example: "Give us about twenty minutes, okay?" },
        { id: "ph-07c", english: "We'll call your name when it's ready.", vietnamese: "Chúng tôi sẽ gọi tên khi thuốc xong.", whenToUse: "Nhân viên báo cách bạn sẽ biết khi nào đến lượt.", example: "We'll call your name when it's ready, please have a seat." },
        { id: "ph-07d", english: "We're a little backed up right now.", vietnamese: "Hiện tại chúng tôi đang hơi dồn việc.", whenToUse: "Nhân viên giải thích lý do cần thêm thời gian.", example: "We're a little backed up right now, sorry about that." },

        // 08. Hỏi có thể quay lại sau không
        { id: "ph-08a", english: "Can I come back later?", vietnamese: "Tôi có thể quay lại sau được không?", whenToUse: "Hỏi khi không muốn chờ tại chỗ.", example: "\"Can I come back later?\" \"Sure, anytime after 3.\"" },
        { id: "ph-08b", english: "I'll come back in an hour.", vietnamese: "Tôi sẽ quay lại sau một tiếng.", whenToUse: "Báo cho nhân viên biết kế hoạch của bạn.", example: "I'll come back in an hour, thank you." },
        { id: "ph-08c", english: "What time do you close?", vietnamese: "Mấy giờ pharmacy đóng cửa?", whenToUse: "Hỏi để biết còn kịp quay lại không.", example: "Before I leave — what time do you close?" },
        { id: "ph-08d", english: "That's totally fine.", vietnamese: "Như vậy hoàn toàn ổn.", whenToUse: "Nhân viên đồng ý khi bạn muốn quay lại sau.", example: "\"Can I come back later?\" \"That's totally fine.\"" },

        // 09. Nhận text báo thuốc ready
        { id: "ph-09a", english: "I got a text saying my prescription is ready.", vietnamese: "Tôi nhận được tin nhắn báo thuốc đã sẵn sàng.", whenToUse: "Nói khi bạn đến sau khi nhận thông báo qua điện thoại.", example: "I got a text saying my prescription is ready." },
        { id: "ph-09b", english: "I received a text message this morning.", vietnamese: "Sáng nay tôi có nhận được tin nhắn.", whenToUse: "Cách nói khác để giải thích lý do bạn đến.", example: "I received a text message this morning about my prescription." },
        { id: "ph-09c", english: "Does that mean it's ready to pick up?", vietnamese: "Vậy có nghĩa là thuốc đã sẵn sàng để lấy chưa?", whenToUse: "Hỏi xác nhận sau khi nhắc tin nhắn.", example: "\"I got a text.\" \"Does that mean it's ready to pick up?\"" },
        { id: "ph-09d", english: "Let me pull that up.", vietnamese: "Để tôi tra lại thông tin đó.", whenToUse: "Nhân viên nói khi cần tìm lại thông tin trong hệ thống.", example: "\"I got a text.\" \"Let me pull that up.\"" },

        // 10. Có nhiều prescription cùng lúc
        { id: "ph-10a", english: "I have two prescriptions to pick up.", vietnamese: "Tôi có hai đơn thuốc cần lấy.", whenToUse: "Nói khi bạn cần lấy nhiều hơn một loại thuốc.", example: "I have two prescriptions to pick up today." },
        { id: "ph-10b", english: "Are both of them ready?", vietnamese: "Cả hai đơn đều đã sẵn sàng chưa?", whenToUse: "Hỏi xác nhận khi có nhiều đơn thuốc.", example: "\"I have two prescriptions.\" \"Are both of them ready?\"" },
        { id: "ph-10c", english: "One of them is for my husband.", vietnamese: "Một trong hai đơn là của chồng tôi.", whenToUse: "Giải thích khi lấy thuốc giúp người thân.", example: "One of them is for my husband, is that okay?" },
        { id: "ph-10d", english: "Can I pay for them together?", vietnamese: "Tôi trả gộp chung được không?", whenToUse: "Hỏi khi muốn thanh toán chung cho nhiều đơn thuốc.", example: "Can I pay for them together?" },

        // 11. Một prescription còn thiếu
        { id: "ph-11a", english: "I'm supposed to have another prescription.", vietnamese: "Tôi nghĩ mình còn một đơn thuốc nữa.", whenToUse: "Nói khi bạn nghĩ còn thiếu một đơn chưa được đưa.", example: "I'm supposed to have another prescription, but I only got one." },
        { id: "ph-11b", english: "I think there's one missing.", vietnamese: "Tôi nghĩ còn thiếu một đơn.", whenToUse: "Cách nói ngắn gọn hơn cho cùng ý.", example: "I think there's one missing from my order." },
        { id: "ph-11c", english: "Can you double-check for me?", vietnamese: "Bạn kiểm tra lại giúp tôi được không?", whenToUse: "Nhờ nhân viên tra cứu lại kỹ hơn.", example: "Can you double-check for me? I think one is missing." },
        { id: "ph-11d", english: "Let me look into that for you.", vietnamese: "Để tôi kiểm tra giúp bạn việc đó.", whenToUse: "Nhân viên xác nhận sẽ tìm hiểu thêm.", example: "\"One is missing.\" \"Let me look into that for you.\"" },

        // 12. Pharmacy chưa nhận prescription từ doctor
        { id: "ph-12a", english: "We haven't received it yet.", vietnamese: "Chúng tôi chưa nhận được đơn thuốc đó.", whenToUse: "Nhân viên báo pharmacy chưa nhận được đơn từ bác sĩ.", example: "\"Is my prescription ready?\" \"We haven't received it yet.\"" },
        { id: "ph-12b", english: "Nothing has come through yet.", vietnamese: "Vẫn chưa có gì được gửi tới cả.", whenToUse: "Cách nói khác của nhân viên khi chưa nhận được đơn.", example: "Nothing has come through yet from your doctor's office." },
        { id: "ph-12c", english: "It hasn't arrived on our end.", vietnamese: "Bên chúng tôi chưa nhận được.", whenToUse: "Nhân viên giải thích thêm rằng lỗi không phải từ phía họ.", example: "It hasn't arrived on our end yet, unfortunately." },
        { id: "ph-12d", english: "Can you check again, please?", vietnamese: "Bạn kiểm tra lại giúp được không?", whenToUse: "Nhờ nhân viên tra cứu lại lần nữa.", example: "Can you check again, please? It's been a few days." },

        // 13. Hỏi doctor đã gửi thuốc chưa
        { id: "ph-13a", english: "Did my doctor send the prescription?", vietnamese: "Bác sĩ của tôi đã gửi đơn thuốc chưa?", whenToUse: "Hỏi khi không chắc bác sĩ đã gửi đơn hay chưa.", example: "Did my doctor send the prescription over yet?" },
        { id: "ph-13b", english: "Has anything come in for me?", vietnamese: "Có gì được gửi tới cho tôi chưa?", whenToUse: "Cách hỏi khác, tự nhiên hơn.", example: "\"Has anything come in for me?\" \"Not yet.\"" },
        { id: "ph-13c", english: "My doctor said he would send it today.", vietnamese: "Bác sĩ nói sẽ gửi hôm nay.", whenToUse: "Cung cấp thêm thông tin để nhân viên kiểm tra.", example: "My doctor said he would send it today." },
        { id: "ph-13d", english: "Maybe it's still being processed.", vietnamese: "Có thể vẫn đang được xử lý.", whenToUse: "Nhân viên đưa ra khả năng đơn đang trong quá trình xử lý.", example: "Maybe it's still being processed on their end." },

        // 14. Pharmacy đề nghị gọi doctor
        { id: "ph-14a", english: "We can contact your doctor.", vietnamese: "Chúng tôi có thể liên hệ bác sĩ của bạn.", whenToUse: "Nhân viên đề nghị giúp liên hệ để hỏi về đơn thuốc.", example: "We can contact your doctor's office for you." },
        { id: "ph-14b", english: "We'll reach out to the doctor's office.", vietnamese: "Chúng tôi sẽ liên hệ với phòng khám bác sĩ.", whenToUse: "Cách nói trang trọng hơn một chút.", example: "We'll reach out to the doctor's office and call you back." },
        { id: "ph-14c", english: "Could you contact my doctor, please?", vietnamese: "Bạn có thể liên hệ bác sĩ của tôi giúp được không?", whenToUse: "Cách bạn chủ động nhờ nhân viên liên hệ.", example: "Could you contact my doctor, please? It's been three days." },
        { id: "ph-14d", english: "Thank you, I appreciate it.", vietnamese: "Cảm ơn, tôi rất cảm kích.", whenToUse: "Cảm ơn nhân viên khi họ đề nghị giúp đỡ.", example: "\"We'll contact your doctor.\" \"Thank you, I appreciate it.\"" },

        // 15. Hỏi prescription được gửi đến pharmacy nào
        { id: "ph-15a", english: "Which pharmacy was it sent to?", vietnamese: "Đơn thuốc được gửi đến pharmacy nào?", whenToUse: "Hỏi khi không chắc đơn được gửi đúng nơi.", example: "Which pharmacy was it sent to? I'm not sure." },
        { id: "ph-15b", english: "Can you check which location it's at?", vietnamese: "Bạn kiểm tra giúp nó đang ở chi nhánh nào được không?", whenToUse: "Nhờ nhân viên tra cứu chi nhánh cụ thể.", example: "Can you check which location it's at?" },
        { id: "ph-15c", english: "It might have gone to a different branch.", vietnamese: "Có thể nó đã được gửi đến chi nhánh khác.", whenToUse: "Nhân viên giải thích khả năng gửi nhầm chi nhánh.", example: "It might have gone to a different branch nearby." },
        { id: "ph-15d", english: "That's not the one I usually go to.", vietnamese: "Đó không phải chi nhánh tôi thường đến.", whenToUse: "Nói khi phát hiện đơn bị gửi sai chi nhánh quen thuộc.", example: "That's not the one I usually go to, can we fix it?" },

        // 25. Thuốc hết hàng
        { id: "ph-25a", english: "This medication is out of stock.", vietnamese: "Thuốc này đang hết hàng.", whenToUse: "Nhân viên báo khi pharmacy tạm thời không còn thuốc.", example: "\"Is it ready?\" \"This medication is out of stock.\"" },
        { id: "ph-25b", english: "We're out of that one right now.", vietnamese: "Ngay lúc này chúng tôi hết loại đó.", whenToUse: "Cách nói ngắn gọn, tự nhiên hơn.", example: "We're out of that one right now, sorry." },
        { id: "ph-25c", english: "We don't have it in stock today.", vietnamese: "Hôm nay chúng tôi không có sẵn thuốc đó.", whenToUse: "Một cách khác để báo hết hàng.", example: "We don't have it in stock today, unfortunately." },
        { id: "ph-25d", english: "That's frustrating, I really need it today.", vietnamese: "Thật bực mình, tôi thực sự cần hôm nay.", whenToUse: "Cách bày tỏ sự lo lắng một cách lịch sự khi cần gấp.", example: "That's frustrating, I really need it today." },

        // 26. Hỏi khi nào thuốc có lại
        { id: "ph-26a", english: "When will it be back in stock?", vietnamese: "Khi nào thì có hàng lại?", whenToUse: "Hỏi thời gian dự kiến có thuốc trở lại.", example: "\"We're out of stock.\" \"When will it be back in stock?\"" },
        { id: "ph-26b", english: "Do you know when it'll come in?", vietnamese: "Bạn có biết khi nào thuốc sẽ về không?", whenToUse: "Cách hỏi tự nhiên khác cho cùng ý.", example: "Do you know when it'll come in?" },
        { id: "ph-26c", english: "It should be here by tomorrow.", vietnamese: "Chắc ngày mai sẽ có.", whenToUse: "Nhân viên trả lời với thời gian dự kiến.", example: "\"When will it come in?\" \"It should be here by tomorrow.\"" },
        { id: "ph-26d", english: "I'll check back tomorrow then.", vietnamese: "Vậy tôi sẽ quay lại kiểm tra vào ngày mai.", whenToUse: "Nói khi bạn quyết định quay lại sau.", example: "Okay, I'll check back tomorrow then." },

        // 27. Hỏi pharmacy khác có thuốc không
        { id: "ph-27a", english: "Can you check another location?", vietnamese: "Bạn kiểm tra giúp chi nhánh khác được không?", whenToUse: "Hỏi nhân viên tra cứu chi nhánh khác còn hàng không.", example: "Can you check another location for me?" },
        { id: "ph-27b", english: "Is it available at a nearby pharmacy?", vietnamese: "Chi nhánh gần đây có thuốc này không?", whenToUse: "Cách hỏi khác, cụ thể hơn về vị trí.", example: "Is it available at a nearby pharmacy?" },
        { id: "ph-27c", english: "There's one in stock at another store.", vietnamese: "Có một cửa hàng khác còn hàng.", whenToUse: "Nhân viên báo tin tốt sau khi kiểm tra.", example: "There's one in stock at another store nearby." },
        { id: "ph-27d", english: "Could you call them to confirm?", vietnamese: "Bạn gọi họ xác nhận giúp được không?", whenToUse: "Nhờ nhân viên gọi xác nhận trước khi bạn di chuyển đến đó.", example: "Could you call them to confirm before I drive over?" },

        // 28. Hỏi generic có available không
        { id: "ph-28a", english: "Is there a generic version available?", vietnamese: "Có phiên bản generic (thuốc gốc) không?", whenToUse: "Hỏi về thuốc generic khi thuốc chính hết hàng hoặc đắt.", example: "Is there a generic version available instead?" },
        { id: "ph-28b", english: "Do you carry the generic brand?", vietnamese: "Ở đây có bán loại generic không?", whenToUse: "Cách hỏi khác về thuốc generic.", example: "Do you carry the generic brand of this medication?" },
        { id: "ph-28c", english: "Would a generic work the same way?", vietnamese: "Thuốc generic có tác dụng giống vậy không?", whenToUse: "Câu hỏi chung — nên hỏi pharmacist để có câu trả lời chính xác, không tự suy đoán.", example: "Would a generic work the same way? I'll ask the pharmacist." },
        { id: "ph-28d", english: "Generic is usually cheaper.", vietnamese: "Generic thường rẻ hơn.", whenToUse: "Nhân viên giải thích lợi ích thường thấy của thuốc generic.", example: "Generic is usually cheaper, would you like to try it?" },

        // 29. Pharmacist nói đây là generic
        { id: "ph-29a", english: "This is the generic version.", vietnamese: "Đây là phiên bản generic.", whenToUse: "Pharmacist giải thích loại thuốc bạn đang nhận.", example: "\"Is this the same medication?\" \"This is the generic version.\"" },
        { id: "ph-29b", english: "It has the same active ingredient.", vietnamese: "Nó có cùng thành phần hoạt chất.", whenToUse: "Pharmacist giải thích thêm về thuốc generic.", example: "It has the same active ingredient as the brand name." },
        { id: "ph-29c", english: "Is that okay with you?", vietnamese: "Như vậy có được không ạ?", whenToUse: "Pharmacist hỏi ý bạn trước khi đổi sang generic.", example: "\"This is the generic version.\" \"Is that okay with you?\"" },
        { id: "ph-29d", english: "Yes, that's fine with me.", vietnamese: "Vâng, như vậy được rồi.", whenToUse: "Cách bạn đồng ý nhận thuốc generic.", example: "\"Is that okay with you?\" \"Yes, that's fine with me.\"" },

        // 49. Pharmacy đóng cửa sắp tới
        { id: "ph-49a", english: "What time does the pharmacy close?", vietnamese: "Mấy giờ pharmacy đóng cửa?", whenToUse: "Hỏi giờ đóng cửa để sắp xếp thời gian đến.", example: "What time does the pharmacy close today?" },
        { id: "ph-49b", english: "We close at nine tonight.", vietnamese: "Tối nay chúng tôi đóng cửa lúc chín giờ.", whenToUse: "Nhân viên trả lời giờ đóng cửa.", example: "\"What time do you close?\" \"We close at nine tonight.\"" },
        { id: "ph-49c", english: "Are you open on weekends?", vietnamese: "Cuối tuần có mở cửa không?", whenToUse: "Hỏi thêm về giờ mở cửa cuối tuần.", example: "Are you open on weekends too?" },
        { id: "ph-49d", english: "Good to know, thank you.", vietnamese: "Tốt quá, cảm ơn bạn.", whenToUse: "Cảm ơn sau khi biết giờ đóng cửa.", example: "\"We close at nine.\" \"Good to know, thank you.\"" },

        // 50. Kiểm tra mọi thứ trước khi rời pharmacy
        { id: "ph-50a", english: "Is that everything?", vietnamese: "Vậy là đủ hết rồi phải không?", whenToUse: "Xác nhận đã nhận đủ thuốc trước khi rời đi.", example: "\"Here's your bag.\" \"Is that everything?\"" },
        { id: "ph-50b", english: "Do I need to sign anything?", vietnamese: "Tôi có cần ký gì không?", whenToUse: "Hỏi trước khi rời quầy pharmacy.", example: "Do I need to sign anything before I go?" },
        { id: "ph-50c", english: "Thank you. Have a good day.", vietnamese: "Cảm ơn bạn. Chúc một ngày tốt lành.", whenToUse: "Câu chào tạm biệt lịch sự khi rời quầy.", example: "\"Here you go.\" \"Thank you. Have a good day.\"" },
        { id: "ph-50d", english: "You're welcome. Take care.", vietnamese: "Không có gì. Giữ gìn sức khỏe nhé.", whenToUse: "Câu nhân viên đáp lại khi bạn cảm ơn và rời đi.", example: "\"Thank you, have a good day.\" \"You're welcome. Take care.\"" },
      ],
    },
    {
      id: "refill",
      title: "Refill",
      items: [
        // 16. Prescription gửi nhầm pharmacy
        { id: "ph-16a", english: "It was sent to the wrong pharmacy.", vietnamese: "Nó bị gửi nhầm đến pharmacy khác.", whenToUse: "Nhân viên/bạn xác nhận đơn thuốc bị gửi sai nơi.", example: "\"We don't have it.\" \"It was sent to the wrong pharmacy.\"" },
        { id: "ph-16b", english: "I think it went to the wrong location.", vietnamese: "Tôi nghĩ nó bị gửi nhầm chi nhánh.", whenToUse: "Cách bạn tự nhận ra và nói với nhân viên.", example: "I think it went to the wrong location by mistake." },
        { id: "ph-16c", english: "That happens sometimes.", vietnamese: "Chuyện đó thỉnh thoảng vẫn xảy ra.", whenToUse: "Nhân viên trấn an khi có nhầm lẫn.", example: "That happens sometimes, don't worry, we can fix it." },
        { id: "ph-16d", english: "Can we fix that today?", vietnamese: "Hôm nay sửa được không?", whenToUse: "Hỏi xem có thể giải quyết ngay trong ngày không.", example: "Can we fix that today? I need it soon." },

        // 17. Chuyển prescription sang pharmacy này
        { id: "ph-17a", english: "Can you transfer my prescription here?", vietnamese: "Bạn chuyển đơn thuốc của tôi về đây được không?", whenToUse: "Yêu cầu chuyển đơn thuốc từ pharmacy khác về chi nhánh này.", example: "Can you transfer my prescription here from the other store?" },
        { id: "ph-17b", english: "I'd like to have it transferred to this location.", vietnamese: "Tôi muốn chuyển nó về chi nhánh này.", whenToUse: "Cách nói đầy đủ, lịch sự hơn.", example: "I'd like to have it transferred to this location, please." },
        { id: "ph-17c", english: "How long does a transfer usually take?", vietnamese: "Chuyển đơn thuốc thường mất bao lâu?", whenToUse: "Hỏi thời gian xử lý việc chuyển đơn.", example: "How long does a transfer usually take?" },
        { id: "ph-17d", english: "It's usually ready within a few hours.", vietnamese: "Thường sẽ xong trong vài giờ.", whenToUse: "Nhân viên trả lời thời gian xử lý thông thường.", example: "\"How long does it take?\" \"It's usually ready within a few hours.\"" },

        // 18. Chuyển prescription sang pharmacy khác
        { id: "ph-18a", english: "I'd like to transfer this prescription.", vietnamese: "Tôi muốn chuyển đơn thuốc này đi.", whenToUse: "Yêu cầu chuyển đơn thuốc từ đây sang pharmacy khác.", example: "I'd like to transfer this prescription to a CVS near my house." },
        { id: "ph-18b", english: "I'm moving, so I need to switch pharmacies.", vietnamese: "Tôi sắp chuyển nhà nên cần đổi pharmacy.", whenToUse: "Giải thích lý do muốn chuyển đơn thuốc.", example: "I'm moving, so I need to switch pharmacies." },
        { id: "ph-18c", english: "What information do you need from me?", vietnamese: "Bạn cần thông tin gì từ tôi?", whenToUse: "Hỏi để chuẩn bị đủ thông tin cho việc chuyển.", example: "What information do you need from me to transfer it?" },
        { id: "ph-18d", english: "Will my refills transfer too?", vietnamese: "Các lượt refill có được chuyển theo không?", whenToUse: "Hỏi xem lượt refill còn lại có giữ nguyên khi chuyển pharmacy không.", example: "Will my refills transfer too, or do I lose them?" },

        // 19. Hỏi còn refill không
        { id: "ph-19a", english: "Do I have any refills left?", vietnamese: "Tôi còn lượt refill nào không?", whenToUse: "Hỏi xem đơn thuốc còn lượt lấy thêm không.", example: "Do I have any refills left on this one?" },
        { id: "ph-19b", english: "How many refills do I have?", vietnamese: "Tôi còn bao nhiêu lượt refill?", whenToUse: "Hỏi số lượt refill còn lại cụ thể.", example: "\"Do I have refills?\" \"How many refills do I have exactly?\"" },
        { id: "ph-19c", english: "You have two refills left.", vietnamese: "Bạn còn hai lượt refill.", whenToUse: "Nhân viên trả lời số lượt còn lại.", example: "\"Do I have refills?\" \"You have two refills left.\"" },
        { id: "ph-19d", english: "Refills are good until next March.", vietnamese: "Refill còn hiệu lực đến tháng Ba năm sau.", whenToUse: "Nhân viên cho biết thời hạn còn dùng được của các lượt refill.", example: "Refills are good until next March, after that you'll need a new prescription." },

        // 20. Không còn refill
        { id: "ph-20a", english: "You don't have any refills left.", vietnamese: "Bạn không còn lượt refill nào cả.", whenToUse: "Nhân viên báo hết lượt refill.", example: "\"Can I refill this?\" \"You don't have any refills left.\"" },
        { id: "ph-20b", english: "This prescription is out of refills.", vietnamese: "Đơn thuốc này đã hết lượt refill.", whenToUse: "Cách nói khác cho cùng tình huống.", example: "This prescription is out of refills, you'll need a new one." },
        { id: "ph-20c", english: "You'll need a new prescription from your doctor.", vietnamese: "Bạn sẽ cần một đơn thuốc mới từ bác sĩ.", whenToUse: "Nhân viên hướng dẫn bước tiếp theo.", example: "You'll need a new prescription from your doctor for more." },
        { id: "ph-20d", english: "Can you ask my doctor for more?", vietnamese: "Bạn hỏi thêm bác sĩ giúp tôi được không?", whenToUse: "Nhờ nhân viên chủ động liên hệ bác sĩ giúp bạn.", example: "Can you ask my doctor for more refills?" },

        // 21. Xin refill prescription
        { id: "ph-21a", english: "I'd like to refill my prescription.", vietnamese: "Tôi muốn refill (lấy thêm) đơn thuốc của mình.", whenToUse: "Câu chính để yêu cầu refill.", example: "Hi, I'd like to refill my prescription, please." },
        { id: "ph-21b", english: "Can I get a refill on this one?", vietnamese: "Tôi refill loại này được không?", whenToUse: "Cách hỏi ngắn gọn, tự nhiên.", example: "Can I get a refill on this one today?" },
        { id: "ph-21c", english: "I need to refill this before I run out.", vietnamese: "Tôi cần refill trước khi hết thuốc.", whenToUse: "Giải thích lý do cần refill sớm.", example: "I need to refill this before I run out this weekend." },
        { id: "ph-21d", english: "Can I refill it online next time?", vietnamese: "Lần sau tôi refill online được không?", whenToUse: "Hỏi về cách refill tiện lợi hơn cho lần sau.", example: "Can I refill it online next time instead of coming in?" },

        // 22. Refill quá sớm
        { id: "ph-22a", english: "It's too soon to refill.", vietnamese: "Còn quá sớm để refill.", whenToUse: "Nhân viên báo chưa đến hạn refill.", example: "\"Can I refill this?\" \"It's too soon to refill.\"" },
        { id: "ph-22b", english: "You still have some left, based on our records.", vietnamese: "Theo hồ sơ, bạn vẫn còn thuốc.", whenToUse: "Nhân viên giải thích lý do từ chối refill sớm.", example: "You still have some left, based on our records." },
        { id: "ph-22c", english: "The system won't let me refill it yet.", vietnamese: "Hệ thống chưa cho phép refill lúc này.", whenToUse: "Nhân viên giải thích lý do kỹ thuật.", example: "The system won't let me refill it yet, sorry." },
        { id: "ph-22d", english: "When did I last fill this?", vietnamese: "Lần trước tôi lấy thuốc này khi nào?", whenToUse: "Hỏi lại để hiểu vì sao chưa đến hạn refill.", example: "When did I last fill this, do you know?" },

        // 23. Hỏi ngày nào có thể refill
        { id: "ph-23a", english: "When can I refill it?", vietnamese: "Khi nào tôi có thể refill?", whenToUse: "Hỏi ngày cụ thể được phép refill.", example: "\"It's too soon.\" \"When can I refill it?\"" },
        { id: "ph-23b", english: "What's the earliest date I can refill?", vietnamese: "Ngày sớm nhất tôi có thể refill là khi nào?", whenToUse: "Cách hỏi cụ thể hơn về ngày.", example: "What's the earliest date I can refill this?" },
        { id: "ph-23c", english: "You can refill it starting next Monday.", vietnamese: "Bạn có thể refill bắt đầu từ thứ Hai tới.", whenToUse: "Nhân viên trả lời ngày cụ thể.", example: "\"When can I refill?\" \"You can refill it starting next Monday.\"" },
        { id: "ph-23d", english: "I'll write that date down.", vietnamese: "Tôi sẽ ghi lại ngày đó.", whenToUse: "Nói khi bạn muốn ghi nhớ ngày được phép refill.", example: "Thanks, I'll write that date down." },

        // 24. Refill đang chờ doctor approve
        { id: "ph-24a", english: "We're waiting for your doctor's approval.", vietnamese: "Chúng tôi đang chờ bác sĩ của bạn đồng ý.", whenToUse: "Nhân viên báo refill cần bác sĩ duyệt trước.", example: "\"Is my refill ready?\" \"We're waiting for your doctor's approval.\"" },
        { id: "ph-24b", english: "We sent a request to your doctor.", vietnamese: "Chúng tôi đã gửi yêu cầu cho bác sĩ.", whenToUse: "Nhân viên giải thích đã liên hệ bác sĩ.", example: "We sent a request to your doctor this morning." },
        { id: "ph-24c", english: "How long does approval usually take?", vietnamese: "Việc duyệt thường mất bao lâu?", whenToUse: "Hỏi thời gian chờ bác sĩ duyệt.", example: "How long does approval usually take?" },
        { id: "ph-24d", english: "Can you call me when it's approved?", vietnamese: "Bạn gọi tôi khi được duyệt nhé?", whenToUse: "Nhờ nhân viên báo lại khi có kết quả.", example: "Can you call me when it's approved?" },
      ],
    },
    {
      id: "insurance",
      title: "Insurance",
      items: [
        // 31. Hỏi insurance có cover không
        { id: "ph-31a", english: "Does my insurance cover this?", vietnamese: "Bảo hiểm của tôi có chi trả cái này không?", whenToUse: "Hỏi trước khi biết chắc giá cuối cùng.", example: "Does my insurance cover this medication?" },
        { id: "ph-31b", english: "Is this covered by my plan?", vietnamese: "Cái này có nằm trong gói bảo hiểm của tôi không?", whenToUse: "Cách hỏi khác cho cùng ý.", example: "Is this covered by my plan, or do I pay full price?" },
        { id: "ph-31c", english: "Let me run it through your insurance.", vietnamese: "Để tôi kiểm tra qua bảo hiểm của bạn.", whenToUse: "Nhân viên nói trước khi kiểm tra hệ thống bảo hiểm.", example: "Let me run it through your insurance real quick." },
        { id: "ph-31d", english: "I'm not sure, let me check my card.", vietnamese: "Tôi không chắc, để tôi xem thẻ bảo hiểm.", whenToUse: "Trả lời khi chưa chắc về gói bảo hiểm của mình.", example: "\"Does your plan cover this?\" \"I'm not sure, let me check my card.\"" },

        // 32. Insurance không cover
        { id: "ph-32a", english: "Your insurance didn't cover it.", vietnamese: "Bảo hiểm của bạn không chi trả cho cái này.", whenToUse: "Nhân viên báo kết quả sau khi kiểm tra bảo hiểm.", example: "\"Is it covered?\" \"Your insurance didn't cover it.\"" },
        { id: "ph-32b", english: "It came back as not covered.", vietnamese: "Hệ thống báo là không được chi trả.", whenToUse: "Cách nói khác của nhân viên.", example: "It came back as not covered, unfortunately." },
        { id: "ph-32c", english: "Is there anything I can do?", vietnamese: "Có cách nào giải quyết không?", whenToUse: "Hỏi tiếp khi biết bảo hiểm không chi trả.", example: "\"Not covered.\" \"Is there anything I can do?\"" },
        { id: "ph-32d", english: "Can you try it again?", vietnamese: "Bạn thử lại lần nữa được không?", whenToUse: "Hỏi nhân viên kiểm tra lại phòng khi có sai sót.", example: "Can you try it again? That seems strange." },

        // 33. Hỏi copay
        { id: "ph-33a", english: "How much is my copay?", vietnamese: "Tiền copay của tôi là bao nhiêu?", whenToUse: "Hỏi số tiền bạn phải trả theo bảo hiểm.", example: "How much is my copay for this one?" },
        { id: "ph-33b", english: "What's my out-of-pocket cost?", vietnamese: "Tôi phải tự trả bao nhiêu?", whenToUse: "Cách hỏi khác về số tiền tự trả.", example: "What's my out-of-pocket cost after insurance?" },
        { id: "ph-33c", english: "Your copay is fifteen dollars.", vietnamese: "Tiền copay của bạn là mười lăm đô.", whenToUse: "Nhân viên trả lời số tiền cụ thể.", example: "\"How much is my copay?\" \"Your copay is fifteen dollars.\"" },
        { id: "ph-33d", english: "That seems high for this medication.", vietnamese: "Có vẻ hơi cao so với loại thuốc này.", whenToUse: "Nói khi thấy copay cao hơn bạn nghĩ.", example: "That seems high for this medication, is that right?" },

        // 34. Hỏi vì sao copay thay đổi
        { id: "ph-34a", english: "Why is my copay different this time?", vietnamese: "Sao lần này tiền copay lại khác?", whenToUse: "Hỏi khi thấy số tiền không giống lần trước.", example: "Why is my copay different this time?" },
        { id: "ph-34b", english: "It was cheaper last time.", vietnamese: "Lần trước rẻ hơn.", whenToUse: "Giải thích thêm khi thắc mắc về giá.", example: "It was cheaper last time. Why is it different now?" },
        { id: "ph-34c", english: "Your plan may have changed.", vietnamese: "Có thể gói bảo hiểm của bạn đã thay đổi.", whenToUse: "Nhân viên giải thích lý do có thể xảy ra.", example: "Your plan may have changed, or the dosage is different." },
        { id: "ph-34d", english: "I'll call my insurance to ask.", vietnamese: "Tôi sẽ gọi bảo hiểm để hỏi.", whenToUse: "Nói khi bạn quyết định tự liên hệ bảo hiểm để hỏi rõ.", example: "Okay, I'll call my insurance to ask about that." },

        // 35. Pharmacy cần insurance card
        { id: "ph-35a", english: "Can I see your insurance card?", vietnamese: "Cho tôi xem thẻ bảo hiểm của bạn được không?", whenToUse: "Nhân viên yêu cầu thẻ bảo hiểm.", example: "\"Can I see your insurance card?\" \"Sure, here it is.\"" },
        { id: "ph-35b", english: "Do you have your insurance card with you?", vietnamese: "Bạn có mang theo thẻ bảo hiểm không?", whenToUse: "Cách hỏi khác của nhân viên.", example: "Do you have your insurance card with you today?" },
        { id: "ph-35c", english: "I don't have it with me today.", vietnamese: "Hôm nay tôi không mang theo.", whenToUse: "Trả lời khi bạn quên mang thẻ.", example: "\"Do you have your card?\" \"I don't have it with me today.\"" },
        { id: "ph-35d", english: "Can I text you a photo of it?", vietnamese: "Tôi gửi ảnh thẻ qua tin nhắn được không?", whenToUse: "Đề nghị cách khác khi không mang thẻ vật lý theo.", example: "Can I text you a photo of it instead?" },

        // 36. Insurance information chưa đúng
        { id: "ph-36a", english: "We need to update your insurance information.", vietnamese: "Chúng tôi cần cập nhật lại thông tin bảo hiểm của bạn.", whenToUse: "Nhân viên báo thông tin bảo hiểm cần chỉnh sửa.", example: "We need to update your insurance information in the system." },
        { id: "ph-36b", english: "Your insurance information looks outdated.", vietnamese: "Thông tin bảo hiểm của bạn có vẻ đã cũ.", whenToUse: "Nhân viên giải thích lý do cần cập nhật.", example: "Your insurance information looks outdated, can you confirm it?" },
        { id: "ph-36c", english: "Can you give me your new insurance details?", vietnamese: "Bạn cho tôi thông tin bảo hiểm mới được không?", whenToUse: "Nhân viên yêu cầu thông tin mới.", example: "Can you give me your new insurance details, please?" },
        { id: "ph-36d", english: "I switched jobs recently.", vietnamese: "Gần đây tôi mới đổi việc.", whenToUse: "Giải thích lý do thông tin bảo hiểm thay đổi.", example: "I switched jobs recently, so my insurance changed too." },
      ],
    },
    {
      id: "thanh-toan",
      title: "Thanh toán",
      items: [
        // 30. Giá thuốc cao hơn dự kiến
        { id: "ph-30a", english: "Why is it so expensive?", vietnamese: "Sao nó lại đắt vậy?", whenToUse: "Hỏi khi giá thuốc cao hơn bạn nghĩ.", example: "\"That'll be eighty dollars.\" \"Why is it so expensive?\"" },
        { id: "ph-30b", english: "That's more than I expected.", vietnamese: "Cao hơn tôi nghĩ nhiều.", whenToUse: "Cách nói nhẹ nhàng hơn khi bất ngờ về giá.", example: "That's more than I expected, is that the final price?" },
        { id: "ph-30c", english: "Is this the price without insurance?", vietnamese: "Đây là giá chưa tính bảo hiểm phải không?", whenToUse: "Hỏi rõ để hiểu vì sao giá cao.", example: "Is this the price without insurance?" },
        { id: "ph-30d", english: "Prices can change depending on your plan.", vietnamese: "Giá có thể thay đổi tùy gói bảo hiểm.", whenToUse: "Nhân viên giải thích lý do giá khác nhau giữa các lần.", example: "Prices can change depending on your plan and dosage." },

        // 37. Hỏi có thể trả cash không
        { id: "ph-37a", english: "Can I pay cash for it?", vietnamese: "Tôi trả tiền mặt được không?", whenToUse: "Hỏi hình thức thanh toán bằng tiền mặt.", example: "Can I pay cash for it instead of using insurance?" },
        { id: "ph-37b", english: "Do you accept cash?", vietnamese: "Ở đây có nhận tiền mặt không?", whenToUse: "Cách hỏi khác, ngắn gọn hơn.", example: "Do you accept cash here?" },
        { id: "ph-37c", english: "Would it be cheaper if I pay cash?", vietnamese: "Nếu trả tiền mặt thì có rẻ hơn không?", whenToUse: "Hỏi so sánh giá giữa trả cash và qua bảo hiểm.", example: "Would it be cheaper if I pay cash instead?" },
        { id: "ph-37d", english: "I'll just pay cash today.", vietnamese: "Hôm nay tôi trả tiền mặt.", whenToUse: "Nói khi bạn quyết định trả tiền mặt.", example: "I'll just pay cash today, that's fine." },

        // 38. Hỏi tổng tiền
        { id: "ph-38a", english: "How much is the total?", vietnamese: "Tổng cộng bao nhiêu tiền?", whenToUse: "Hỏi số tiền cuối cùng cần trả.", example: "How much is the total for both prescriptions?" },
        { id: "ph-38b", english: "What do I owe today?", vietnamese: "Hôm nay tôi cần trả bao nhiêu?", whenToUse: "Cách hỏi tự nhiên khác.", example: "What do I owe today?" },
        { id: "ph-38c", english: "That'll be thirty-two dollars.", vietnamese: "Tổng cộng là ba mươi hai đô.", whenToUse: "Nhân viên báo số tiền cụ thể.", example: "\"What's the total?\" \"That'll be thirty-two dollars.\"" },
        { id: "ph-38d", english: "Can I get a receipt?", vietnamese: "Cho tôi xin hóa đơn được không?", whenToUse: "Xin hóa đơn sau khi thanh toán.", example: "Can I get a receipt, please?" },

        // 39. Hỏi có discount nào không
        { id: "ph-39a", english: "Is there any discount available?", vietnamese: "Có chương trình giảm giá nào không?", whenToUse: "Hỏi xem có cách nào giảm chi phí không — chỉ hỏi, không tự ý dùng chương trình nào chưa được pharmacy xác nhận.", example: "Is there any discount available for this medication?" },
        { id: "ph-39b", english: "Is there a cheaper option?", vietnamese: "Có lựa chọn nào rẻ hơn không?", whenToUse: "Cách hỏi khác về việc giảm chi phí.", example: "Is there a cheaper option you'd recommend?" },
        { id: "ph-39c", english: "Let me check if there's a coupon on file.", vietnamese: "Để tôi kiểm tra xem có coupon nào sẵn không.", whenToUse: "Nhân viên chủ động kiểm tra giúp bạn.", example: "Let me check if there's a coupon on file for you." },
        { id: "ph-39d", english: "No problem, thanks for checking.", vietnamese: "Không sao, cảm ơn bạn đã kiểm tra.", whenToUse: "Cảm ơn nhân viên dù có hay không có discount.", example: "\"No discount available.\" \"No problem, thanks for checking.\"" },

        // 40. Pharmacy yêu cầu ID
        { id: "ph-40a", english: "Can I see your ID?", vietnamese: "Cho tôi xem giấy tờ tùy thân được không?", whenToUse: "Nhân viên yêu cầu ID trước khi giao thuốc.", example: "\"Can I see your ID?\" \"Sure, here you go.\"" },
        { id: "ph-40b", english: "Do you have a photo ID with you?", vietnamese: "Bạn có mang giấy tờ có ảnh không?", whenToUse: "Cách hỏi cụ thể hơn về loại giấy tờ.", example: "Do you have a photo ID with you today?" },
        { id: "ph-40c", english: "Here's my driver's license.", vietnamese: "Đây là bằng lái xe của tôi.", whenToUse: "Cách bạn đưa giấy tờ khi được yêu cầu.", example: "\"Can I see your ID?\" \"Here's my driver's license.\"" },
        { id: "ph-40d", english: "Sorry, I left it in the car.", vietnamese: "Xin lỗi, tôi để quên trong xe.", whenToUse: "Trả lời khi tạm thời không có giấy tờ trên người.", example: "Sorry, I left it in the car. One second." },
      ],
    },
    {
      id: "hoi-pharmacist",
      title: "Hỏi pharmacist",
      items: [
        // 41. Hỏi pharmacist một câu
        { id: "ph-41a", english: "Can I speak to the pharmacist?", vietnamese: "Tôi nói chuyện với pharmacist được không?", whenToUse: "Yêu cầu gặp trực tiếp dược sĩ để hỏi kỹ hơn.", example: "Can I speak to the pharmacist for a second?" },
        { id: "ph-41b", english: "I have a quick question for the pharmacist.", vietnamese: "Tôi có một câu hỏi nhanh cho pharmacist.", whenToUse: "Cách nói khác khi cần hỏi dược sĩ.", example: "I have a quick question for the pharmacist, is she available?" },
        { id: "ph-41c", english: "The pharmacist will be right with you.", vietnamese: "Pharmacist sẽ ra gặp bạn ngay.", whenToUse: "Nhân viên báo dược sĩ sắp ra tiếp bạn.", example: "\"Can I speak to the pharmacist?\" \"The pharmacist will be right with you.\"" },
        { id: "ph-41d", english: "Sure, one moment please.", vietnamese: "Được, xin chờ một chút.", whenToUse: "Nhân viên xác nhận sẽ gọi pharmacist ra ngay.", example: "\"Can I speak to the pharmacist?\" \"Sure, one moment please.\"" },

        // 42. Hỏi thuốc này dùng như thế nào
        { id: "ph-42a", english: "How should I take this medication?", vietnamese: "Tôi nên uống thuốc này như thế nào?", whenToUse: "Câu hỏi để hỏi pharmacist — luôn hỏi trực tiếp dược sĩ về cách dùng, không tự đoán.", example: "How should I take this medication?" },
        { id: "ph-42b", english: "Can you walk me through how to use this?", vietnamese: "Bạn hướng dẫn tôi cách dùng cái này được không?", whenToUse: "Cách hỏi khác, xin pharmacist hướng dẫn cụ thể.", example: "Can you walk me through how to use this, please?" },
        { id: "ph-42c", english: "Let me explain how this one works.", vietnamese: "Để tôi giải thích cách dùng loại này.", whenToUse: "Câu pharmacist thường nói khi bắt đầu hướng dẫn bạn.", example: "\"How do I take it?\" \"Let me explain how this one works.\"" },
        { id: "ph-42d", english: "I'll make sure to follow the instructions.", vietnamese: "Tôi sẽ làm theo đúng hướng dẫn.", whenToUse: "Xác nhận với pharmacist rằng bạn sẽ làm đúng theo hướng dẫn.", example: "Thank you, I'll make sure to follow the instructions." },

        // 43. Không hiểu hướng dẫn trên label
        { id: "ph-43a", english: "I don't understand the directions on the label.", vietnamese: "Tôi không hiểu hướng dẫn trên nhãn thuốc.", whenToUse: "Nói khi bạn đọc nhãn thuốc nhưng chưa hiểu rõ.", example: "I don't understand the directions on the label. Can you help?" },
        { id: "ph-43b", english: "The instructions are a little confusing to me.", vietnamese: "Hướng dẫn hơi khó hiểu với tôi.", whenToUse: "Cách nói nhẹ nhàng hơn khi chưa hiểu rõ.", example: "The instructions are a little confusing to me, sorry." },
        { id: "ph-43c", english: "Can you read it with me?", vietnamese: "Bạn đọc cùng tôi được không?", whenToUse: "Nhờ pharmacist đọc và giải thích cùng bạn.", example: "Can you read it with me? I want to make sure I understand." },
        { id: "ph-43d", english: "That makes more sense now, thank you.", vietnamese: "Giờ tôi hiểu rõ hơn rồi, cảm ơn.", whenToUse: "Cảm ơn pharmacist sau khi được giải thích rõ.", example: "That makes more sense now, thank you." },

        // 44. Xin pharmacist giải thích chậm hơn
        { id: "ph-44a", english: "Could you explain that again more slowly?", vietnamese: "Bạn giải thích lại chậm hơn được không?", whenToUse: "Xin pharmacist nói chậm lại để dễ hiểu hơn.", example: "Could you explain that again more slowly, please?" },
        { id: "ph-44b", english: "Sorry, could you repeat that?", vietnamese: "Xin lỗi, bạn nhắc lại được không?", whenToUse: "Cách xin nhắc lại ngắn gọn, lịch sự.", example: "Sorry, could you repeat that? I didn't catch it." },
        { id: "ph-44c", english: "Can you write that down for me?", vietnamese: "Bạn viết ra giấy giúp tôi được không?", whenToUse: "Xin ghi ra giấy để dễ nhớ và đọc lại sau.", example: "Can you write that down for me so I remember?" },
        { id: "ph-44d", english: "Thank you, that helps a lot.", vietnamese: "Cảm ơn, vậy giúp tôi rất nhiều.", whenToUse: "Cảm ơn pharmacist khi họ đã giải thích chậm/ghi lại giúp.", example: "Thank you, that helps a lot." },

        // 45. Hỏi có cần uống cùng thức ăn không
        { id: "ph-45a", english: "Should I take this with food?", vietnamese: "Tôi nên uống thuốc này cùng thức ăn không?", whenToUse: "Câu hỏi để hỏi pharmacist — chỉ luyện ngôn ngữ, không tự trả lời câu này.", example: "Should I take this with food?" },
        { id: "ph-45b", english: "Is it okay to take this on an empty stomach?", vietnamese: "Uống lúc bụng đói có được không?", whenToUse: "Một cách hỏi liên quan khác — vẫn nên hỏi pharmacist trực tiếp.", example: "Is it okay to take this on an empty stomach?" },
        { id: "ph-45c", english: "What's the best time of day to take it?", vietnamese: "Thời điểm nào trong ngày là tốt nhất để uống?", whenToUse: "Hỏi thêm về thời gian uống thuốc trong ngày.", example: "What's the best time of day to take it?" },
        { id: "ph-45d", english: "Thank you for explaining.", vietnamese: "Cảm ơn đã giải thích.", whenToUse: "Cảm ơn pharmacist sau khi được hướng dẫn.", example: "\"Take it after breakfast.\" \"Thank you for explaining.\"" },

        // 46. Hỏi về side effects
        { id: "ph-46a", english: "What side effects should I watch for?", vietnamese: "Tôi nên chú ý những tác dụng phụ nào?", whenToUse: "Câu hỏi để hỏi pharmacist — luôn hỏi trực tiếp, không tự tra cứu và tự kết luận.", example: "What side effects should I watch for?" },
        { id: "ph-46b", english: "Is it normal to feel a little tired?", vietnamese: "Cảm thấy hơi mệt có bình thường không?", whenToUse: "Một cách hỏi cụ thể hơn về triệu chứng — vẫn nên hỏi pharmacist.", example: "Is it normal to feel a little tired after taking this?" },
        { id: "ph-46c", english: "When should I call the doctor?", vietnamese: "Khi nào tôi nên gọi bác sĩ?", whenToUse: "Hỏi khi nào cần liên hệ bác sĩ nếu có vấn đề.", example: "When should I call the doctor if something feels wrong?" },
        { id: "ph-46d", english: "I'll keep an eye on that.", vietnamese: "Tôi sẽ chú ý theo dõi điều đó.", whenToUse: "Xác nhận với pharmacist rằng bạn sẽ theo dõi triệu chứng.", example: "Thank you, I'll keep an eye on that." },

        // 47. Hỏi về drug interaction
        { id: "ph-47a", english: "Can I take this with my other medications?", vietnamese: "Tôi uống cái này cùng các thuốc khác được không?", whenToUse: "Câu hỏi để hỏi pharmacist — luôn để pharmacist/bác sĩ quyết định, không tự kết hợp thuốc.", example: "Can I take this with my other medications?" },
        { id: "ph-47b", english: "I'm also taking something else for my blood pressure.", vietnamese: "Tôi cũng đang uống thuốc khác cho huyết áp.", whenToUse: "Cung cấp thông tin để pharmacist kiểm tra giúp bạn.", example: "I'm also taking something else for my blood pressure." },
        { id: "ph-47c", english: "You should check with your doctor about that combination.", vietnamese: "Bạn nên hỏi bác sĩ về việc kết hợp thuốc đó.", whenToUse: "Câu pharmacist thường nói để hướng bạn hỏi đúng người có chuyên môn.", example: "You should check with your doctor about that combination." },
        { id: "ph-47d", english: "Thank you, I'll ask my doctor first.", vietnamese: "Cảm ơn, tôi sẽ hỏi bác sĩ trước.", whenToUse: "Xác nhận bạn sẽ hỏi đúng người trước khi kết hợp thuốc.", example: "Thank you, I'll ask my doctor first." },

        // 48. Thuốc trông khác lần trước
        { id: "ph-48a", english: "This looks different from last time.", vietnamese: "Lần này thuốc trông khác lần trước.", whenToUse: "Nói khi thấy hình dạng/màu thuốc khác lạ.", example: "This looks different from last time. Is that normal?" },
        { id: "ph-48b", english: "The pill is a different color this time.", vietnamese: "Lần này viên thuốc có màu khác.", whenToUse: "Mô tả cụ thể sự khác biệt bạn thấy.", example: "The pill is a different color this time, is it the same medicine?" },
        { id: "ph-48c", english: "That's normal — it's just a different manufacturer.", vietnamese: "Bình thường thôi — chỉ là nhà sản xuất khác.", whenToUse: "Pharmacist giải thích lý do thường gặp.", example: "\"It looks different.\" \"That's normal — it's just a different manufacturer.\"" },
        { id: "ph-48d", english: "Thanks for explaining, that makes sense.", vietnamese: "Cảm ơn đã giải thích, vậy hợp lý rồi.", whenToUse: "Cảm ơn pharmacist sau khi được giải thích lý do.", example: "Thanks for explaining, that makes sense." },
      ],
    },
  ],
};
