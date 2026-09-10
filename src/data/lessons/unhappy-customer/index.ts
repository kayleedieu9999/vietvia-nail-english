import { Lesson } from "@/types/content";
import { unhappyCustomerGroup01 } from "./01-too-short";
import { unhappyCustomerGroup02 } from "./02-too-long";
import { unhappyCustomerGroup03 } from "./03-too-thick";
import { unhappyCustomerGroup04 } from "./04-shape-uneven";
import { unhappyCustomerGroup05 } from "./05-wrong-color";
import { unhappyCustomerGroup06 } from "./06-design-not-matching";
import { unhappyCustomerGroup07 } from "./07-one-nail-different";
import { unhappyCustomerGroup08 } from "./08-asks-for-correction";
import { unhappyCustomerGroup09 } from "./09-apologizing";
import { unhappyCustomerGroup10 } from "./10-fixing-checking";

export const unhappyCustomerLessons: Lesson[] = [
  ...unhappyCustomerGroup01,
  ...unhappyCustomerGroup02,
  ...unhappyCustomerGroup03,
  ...unhappyCustomerGroup04,
  ...unhappyCustomerGroup05,
  ...unhappyCustomerGroup06,
  ...unhappyCustomerGroup07,
  ...unhappyCustomerGroup08,
  ...unhappyCustomerGroup09,
  ...unhappyCustomerGroup10,
];
