import { Lesson } from "@/types/content";
import { pedicureGroup01 } from "@/data/lessons/pedicure-more/01-bat-dau";
import { pedicureGroup02 } from "@/data/lessons/pedicure-more/02-nhiet-do-nuoc";
import { pedicureGroup03 } from "@/data/lessons/pedicure-more/03-cat-giua-mong";
import { pedicureGroup04 } from "@/data/lessons/pedicure-more/04-cuticle";
import { pedicureGroup05 } from "@/data/lessons/pedicure-more/05-callus";
import { pedicureGroup06 } from "@/data/lessons/pedicure-more/06-massage";
import { pedicureGroup07 } from "@/data/lessons/pedicure-more/07-hot-towel-scrub";
import { pedicureGroup08 } from "@/data/lessons/pedicure-more/08-chon-mau-chan";
import { pedicureGroup09 } from "@/data/lessons/pedicure-more/09-gel-pedicure";
import { pedicureGroup10 } from "@/data/lessons/pedicure-more/10-hoan-tat";

/**
 * 50 additional "Pedicure" lessons (500 questions), grouped by subtopic in
 * chain order (lesson 1 -> 50). The site-wide aggregator in
 * `src/data/lessons/index.ts` is responsible for importing this and adding
 * it to `allLessons`.
 */
export const pedicureMoreLessons: Lesson[] = [
  ...pedicureGroup01,
  ...pedicureGroup02,
  ...pedicureGroup03,
  ...pedicureGroup04,
  ...pedicureGroup05,
  ...pedicureGroup06,
  ...pedicureGroup07,
  ...pedicureGroup08,
  ...pedicureGroup09,
  ...pedicureGroup10,
];
