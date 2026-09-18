import { Lesson } from "@/types/content";
import { dailyEnglishGroup01 } from "./01-di-sieu-thi";
import { dailyEnglishGroup02 } from "./02-hieu-thuoc";
import { dailyEnglishGroup03 } from "./03-phong-kham";
import { dailyEnglishGroup04 } from "./04-hang-xom";
import { dailyEnglishGroup05 } from "./05-truong-hoc";
import { dailyEnglishGroup06 } from "./06-buu-dien";
import { dailyEnglishGroup07 } from "./07-ngan-hang";
import { dailyEnglishGroup08 } from "./08-nha-hang";
import { dailyEnglishGroup09 } from "./09-goi-dien-thoai";
import { dailyEnglishGroup10 } from "./10-thoi-tiet-tro-chuyen";

/** 50 "Tiếng Anh Hằng Ngày" (daily-english) lessons, grouped by subtopic, combined in lesson-number order. */
export const dailyEnglishLessons: Lesson[] = [
  ...dailyEnglishGroup01,
  ...dailyEnglishGroup02,
  ...dailyEnglishGroup03,
  ...dailyEnglishGroup04,
  ...dailyEnglishGroup05,
  ...dailyEnglishGroup06,
  ...dailyEnglishGroup07,
  ...dailyEnglishGroup08,
  ...dailyEnglishGroup09,
  ...dailyEnglishGroup10,
];
