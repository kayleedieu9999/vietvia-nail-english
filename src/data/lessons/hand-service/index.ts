import { Lesson } from "@/types/content";
import { handServiceGroup01 } from "@/data/lessons/hand-service/01-greeting-choosing";
import { handServiceGroup02 } from "@/data/lessons/hand-service/02-removing-polish";
import { handServiceGroup03 } from "@/data/lessons/hand-service/03-cutting-nails";
import { handServiceGroup04 } from "@/data/lessons/hand-service/04-filing";
import { handServiceGroup05 } from "@/data/lessons/hand-service/05-shape";
import { handServiceGroup06 } from "@/data/lessons/hand-service/06-cuticles";
import { handServiceGroup07 } from "@/data/lessons/hand-service/07-buffing-cleaning";
import { handServiceGroup08 } from "@/data/lessons/hand-service/08-regular-polish";
import { handServiceGroup09 } from "@/data/lessons/hand-service/09-gel-manicure";
import { handServiceGroup10 } from "@/data/lessons/hand-service/10-finishing";

/** All 50 lessons under "Dịch Vụ Tay" (topicId "hand-service"), in lesson-number order. */
export const handServiceLessons: Lesson[] = [
  ...handServiceGroup01,
  ...handServiceGroup02,
  ...handServiceGroup03,
  ...handServiceGroup04,
  ...handServiceGroup05,
  ...handServiceGroup06,
  ...handServiceGroup07,
  ...handServiceGroup08,
  ...handServiceGroup09,
  ...handServiceGroup10,
];
