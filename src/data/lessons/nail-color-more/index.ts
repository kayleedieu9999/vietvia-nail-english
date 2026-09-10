import { Lesson } from "@/types/content";
import { nailColorGroup01 } from "@/data/lessons/nail-color-more/01-hoi-mau";
import { nailColorGroup02 } from "@/data/lessons/nail-color-more/02-light-dark";
import { nailColorGroup03 } from "@/data/lessons/nail-color-more/03-pink-nude";
import { nailColorGroup04 } from "@/data/lessons/nail-color-more/04-red-burgundy";
import { nailColorGroup05 } from "@/data/lessons/nail-color-more/05-neutral";
import { nailColorGroup06 } from "@/data/lessons/nail-color-more/06-seasonal";
import { nailColorGroup07 } from "@/data/lessons/nail-color-more/07-matching-hands-toes";
import { nailColorGroup08 } from "@/data/lessons/nail-color-more/08-undecided";
import { nailColorGroup09 } from "@/data/lessons/nail-color-more/09-similar-shade";
import { nailColorGroup10 } from "@/data/lessons/nail-color-more/10-doi-mau";

/**
 * All 50 additional "Chọn Màu" (nail-color) lessons, in lesson-number order (clr-1..clr-50).
 * This does NOT include the original single nail-color.ts lesson, and is not yet wired
 * into the site-wide lessons aggregator — that happens elsewhere.
 */
export const nailColorMoreLessons: Lesson[] = [
  ...nailColorGroup01,
  ...nailColorGroup02,
  ...nailColorGroup03,
  ...nailColorGroup04,
  ...nailColorGroup05,
  ...nailColorGroup06,
  ...nailColorGroup07,
  ...nailColorGroup08,
  ...nailColorGroup09,
  ...nailColorGroup10,
];
