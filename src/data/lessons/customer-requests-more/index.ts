import { Lesson } from "@/types/content";
import { customerRequestsGroup01 } from "./01-ngan-hon-dai-hon";
import { customerRequestsGroup02 } from "./02-dang-mong";
import { customerRequestsGroup03 } from "./03-doi-mau";
import { customerRequestsGroup04 } from "./04-design";
import { customerRequestsGroup05 } from "./05-french-tip";
import { customerRequestsGroup06 } from "./06-fix-broken-nail";
import { customerRequestsGroup07 } from "./07-mong-hon-day-hon";
import { customerRequestsGroup08 } from "./08-cuticle";
import { customerRequestsGroup09 } from "./09-yeu-cau-dac-biet";
import { customerRequestsGroup10 } from "./10-doi-y-giua-dich-vu";

/**
 * 50 additional "Khách Yêu Cầu" (customer-requests) lessons, grouped by
 * subtopic. Combined here in lesson-number order (1 -> 50) so a consumer
 * only needs one import.
 */
export const customerRequestsMoreLessons: Lesson[] = [
  ...customerRequestsGroup01,
  ...customerRequestsGroup02,
  ...customerRequestsGroup03,
  ...customerRequestsGroup04,
  ...customerRequestsGroup05,
  ...customerRequestsGroup06,
  ...customerRequestsGroup07,
  ...customerRequestsGroup08,
  ...customerRequestsGroup09,
  ...customerRequestsGroup10,
];
