import { Lesson } from "@/types/content";
import { listeningGroup01 } from "./01-thong-bao-cong-cong";
import { listeningGroup02 } from "./02-chi-duong";
import { listeningGroup03 } from "./03-tin-nhan-thoai";
import { listeningGroup04 } from "./04-thoi-tiet";
import { listeningGroup05 } from "./05-so-va-gio";
import { listeningGroup06 } from "./06-tro-chuyen-ban-be";
import { listeningGroup07 } from "./07-huong-dan-cong-viec";
import { listeningGroup08 } from "./08-tin-tuc-ngan";
import { listeningGroup09 } from "./09-thong-tin-cu-the";
import { listeningGroup10 } from "./10-noi-chuyen-tu-nhien";

/** 50 "Listening" lessons, grouped by subtopic, combined in lesson-number order. */
export const listeningLessons: Lesson[] = [
  ...listeningGroup01,
  ...listeningGroup02,
  ...listeningGroup03,
  ...listeningGroup04,
  ...listeningGroup05,
  ...listeningGroup06,
  ...listeningGroup07,
  ...listeningGroup08,
  ...listeningGroup09,
  ...listeningGroup10,
];
