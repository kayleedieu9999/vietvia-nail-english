import { Lesson } from "@/types/content";
import { airportGroup01 } from "./01-check-in";
import { airportGroup02 } from "./02-an-ninh";
import { airportGroup03 } from "./03-cong-len-may-bay";
import { airportGroup04 } from "./04-hoi-duong";
import { airportGroup05 } from "./05-hanh-ly-that-lac";
import { airportGroup06 } from "./06-hai-quan";
import { airportGroup07 } from "./07-tre-huy-chuyen-bay";
import { airportGroup08 } from "./08-mua-do-an";
import { airportGroup09 } from "./09-chuyen-bay-noi-tiep";
import { airportGroup10 } from "./10-taxi-xe-don";

/** 50 "Airport" lessons, grouped by subtopic, combined in lesson-number order. */
export const airportLessons: Lesson[] = [
  ...airportGroup01,
  ...airportGroup02,
  ...airportGroup03,
  ...airportGroup04,
  ...airportGroup05,
  ...airportGroup06,
  ...airportGroup07,
  ...airportGroup08,
  ...airportGroup09,
  ...airportGroup10,
];
