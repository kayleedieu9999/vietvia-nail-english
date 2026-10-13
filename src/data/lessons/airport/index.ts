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
import { airportBatch2026_10 } from "./11-batch-2026-10";

/**
 * Filter category per original group. Added here (not in each lesson) so the
 * original content stays untouched; groups with no clear filter (directions,
 * food) simply carry no category and show under "Tất cả".
 */
const withCategory = (lessons: Lesson[], category: string): Lesson[] => lessons.map((l) => ({ ...l, category }));

/** 50 original "Airport" lessons (grouped by subtopic) followed by the Oct 2026 batch (ap-51 – ap-60). */
export const airportLessons: Lesson[] = [
  ...withCategory(airportGroup01, "check-in"),
  ...withCategory(airportGroup02, "tsa"),
  ...withCategory(airportGroup03, "boarding"),
  ...airportGroup04,
  ...withCategory(airportGroup05, "baggage"),
  ...airportGroup06,
  ...withCategory(airportGroup07, "delay"),
  ...airportGroup08,
  ...withCategory(airportGroup09, "delay"),
  ...withCategory(airportGroup10, "baggage"),
  ...airportBatch2026_10,
];
