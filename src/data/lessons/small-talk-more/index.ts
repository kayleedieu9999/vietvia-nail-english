import { Lesson } from "@/types/content";
import { smallTalkGroup01 } from "./01-chao-hoi";
import { smallTalkGroup02 } from "./02-cong-viec-ngay-nghi";
import { smallTalkGroup03 } from "./03-thoi-tiet";
import { smallTalkGroup04 } from "./04-cuoi-tuan";
import { smallTalkGroup05 } from "./05-do-an-nha-hang";
import { smallTalkGroup06 } from "./06-ca-phe-do-uong";
import { smallTalkGroup07 } from "./07-du-lich";
import { smallTalkGroup08 } from "./08-gia-dinh";
import { smallTalkGroup09 } from "./09-holiday-birthday";
import { smallTalkGroup10 } from "./10-ket-thuc";

/**
 * All 50 additional "Small Talk" lessons (st-1..st-50), in lesson-number order.
 * The original single small-talk.ts lesson is untouched and lives separately.
 */
export const smallTalkMoreLessons: Lesson[] = [
  ...smallTalkGroup01,
  ...smallTalkGroup02,
  ...smallTalkGroup03,
  ...smallTalkGroup04,
  ...smallTalkGroup05,
  ...smallTalkGroup06,
  ...smallTalkGroup07,
  ...smallTalkGroup08,
  ...smallTalkGroup09,
  ...smallTalkGroup10,
];
