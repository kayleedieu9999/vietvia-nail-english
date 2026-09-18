import { Lesson } from "@/types/content";
import { pronunciationGroup01 } from "./01-am-th";
import { pronunciationGroup02 } from "./02-phu-am-cuoi";
import { pronunciationGroup03 } from "./03-duoi-ed";
import { pronunciationGroup04 } from "./04-duoi-s-es";
import { pronunciationGroup05 } from "./05-nguyen-am-dai-ngan";
import { pronunciationGroup06 } from "./06-am-l-r";
import { pronunciationGroup07 } from "./07-am-v-w";
import { pronunciationGroup08 } from "./08-trong-am-tu";
import { pronunciationGroup09 } from "./09-chu-cai-cau-am";
import { pronunciationGroup10 } from "./10-noi-lien-am";

/** 50 "Pronunciation" lessons, grouped by target sound, combined in lesson-number order. */
export const pronunciationLessons: Lesson[] = [
  ...pronunciationGroup01,
  ...pronunciationGroup02,
  ...pronunciationGroup03,
  ...pronunciationGroup04,
  ...pronunciationGroup05,
  ...pronunciationGroup06,
  ...pronunciationGroup07,
  ...pronunciationGroup08,
  ...pronunciationGroup09,
  ...pronunciationGroup10,
];
