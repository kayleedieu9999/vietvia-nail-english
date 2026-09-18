import { Lesson } from "@/types/content";
import { citizenshipGroup01 } from "./01-gioi-thieu-ban-than";
import { citizenshipGroup02 } from "./02-hoi-gia-dinh";
import { citizenshipGroup03 } from "./03-cong-viec-cuoc-song";
import { citizenshipGroup04 } from "./04-doc-viet-co-ban";
import { citizenshipGroup05 } from "./05-ly-do-nhap-tich";
import { citizenshipGroup06 } from "./06-lich-su-dia-chi";
import { citizenshipGroup07 } from "./07-lich-su-di-lai";
import { citizenshipGroup08 } from "./08-thanh-vien-gia-dinh";
import { citizenshipGroup09 } from "./09-cau-hoi-co-khong";
import { citizenshipGroup10 } from "./10-ket-thuc-phong-van";

/** 50 "Thi Quốc Tịch Mỹ" (citizenship) lessons, grouped by subtopic, combined in lesson-number order. */
export const citizenshipLessons: Lesson[] = [
  ...citizenshipGroup01,
  ...citizenshipGroup02,
  ...citizenshipGroup03,
  ...citizenshipGroup04,
  ...citizenshipGroup05,
  ...citizenshipGroup06,
  ...citizenshipGroup07,
  ...citizenshipGroup08,
  ...citizenshipGroup09,
  ...citizenshipGroup10,
];
