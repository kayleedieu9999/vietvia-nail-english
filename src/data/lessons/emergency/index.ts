import { Lesson } from "@/types/content";
import { emergencyGroup01 } from "./01-goi-911";
import { emergencyGroup02 } from "./02-dia-chi-vi-tri";
import { emergencyGroup03 } from "./03-trieu-chung-benh";
import { emergencyGroup04 } from "./04-hoa-hoan";
import { emergencyGroup05 } from "./05-tai-nan-xe";
import { emergencyGroup06 } from "./06-noi-voi-canh-sat";
import { emergencyGroup07 } from "./07-nhan-vien-cap-cuu";
import { emergencyGroup08 } from "./08-phong-cap-cuu";
import { emergencyGroup09 } from "./09-trung-doc-kham-gap";
import { emergencyGroup10 } from "./10-huong-dan-an-toan";

/** 50 "911 & Emergency" lessons, grouped by subtopic, combined in lesson-number order. */
export const emergencyLessons: Lesson[] = [
  ...emergencyGroup01,
  ...emergencyGroup02,
  ...emergencyGroup03,
  ...emergencyGroup04,
  ...emergencyGroup05,
  ...emergencyGroup06,
  ...emergencyGroup07,
  ...emergencyGroup08,
  ...emergencyGroup09,
  ...emergencyGroup10,
];
