import { Lesson } from "@/types/content";
import { dmvGroup01 } from "./01-dat-lich-hen";
import { dmvGroup02 } from "./02-thi-viet";
import { dmvGroup03 } from "./03-gia-han-bang-lai";
import { dmvGroup04 } from "./04-dang-ky-xe";
import { dmvGroup05 } from "./05-thi-lai-xe";
import { dmvGroup06 } from "./06-doi-dia-chi";
import { dmvGroup07 } from "./07-canh-sat-giao-thong";
import { dmvGroup08 } from "./08-bien-bao-giao-thong";
import { dmvGroup09 } from "./09-bao-hiem-xe";
import { dmvGroup10 } from "./10-giay-to-can-thiet";

/** 50 "DMV" lessons, grouped by subtopic, combined in lesson-number order. */
export const dmvLessons: Lesson[] = [
  ...dmvGroup01,
  ...dmvGroup02,
  ...dmvGroup03,
  ...dmvGroup04,
  ...dmvGroup05,
  ...dmvGroup06,
  ...dmvGroup07,
  ...dmvGroup08,
  ...dmvGroup09,
  ...dmvGroup10,
];
