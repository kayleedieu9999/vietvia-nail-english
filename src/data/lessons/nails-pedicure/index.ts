import { Lesson } from "@/types/content";
import { nailsPedicureGroup01 } from "./01-hoi-khach-muon-lam-gi-hom-nay";
import { nailsPedicureGroup02 } from "./02-pedicure-gioi-thieu-pedicure-upgrade";
import { nailsPedicureGroup03 } from "./03-chuan-bi-bon-ngam-chan";
import { nailsPedicureGroup04 } from "./04-khach-khen-nuoc-ngam-chan";
import { nailsPedicureGroup05 } from "./05-thoa-dau-duong-cho-cuticle";
import { nailsPedicureGroup06 } from "./06-khi-can-tinh-them-phi-xu-ly-chai-chan-na";
import { nailsPedicureGroup07 } from "./07-khach-tro-chuyen-trong-luc-massage";
import { nailsPedicureGroup08 } from "./08-kiem-tra-su-thoai-mai-trong-luc-quan-kha";
import { nailsPedicureGroup09 } from "./09-xac-nhan-mau-truoc-khi-son";
import { nailsPedicureGroup10 } from "./10-huong-dan-khach-trong-luc-say-gel";

export const nailsPedicureLessons: Lesson[] = [
  ...nailsPedicureGroup01,
  ...nailsPedicureGroup02,
  ...nailsPedicureGroup03,
  ...nailsPedicureGroup04,
  ...nailsPedicureGroup05,
  ...nailsPedicureGroup06,
  ...nailsPedicureGroup07,
  ...nailsPedicureGroup08,
  ...nailsPedicureGroup09,
  ...nailsPedicureGroup10,
];
