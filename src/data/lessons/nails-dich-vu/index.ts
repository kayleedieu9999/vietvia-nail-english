import { Lesson } from "@/types/content";
import { nailsDichVuGroup01 } from "./01-lam-manicure";
import { nailsDichVuGroup02 } from "./02-khi-khach-oi-y";
import { nailsDichVuGroup03 } from "./03-khach-muon-thao-bo-cu";
import { nailsDichVuGroup04 } from "./04-cat-ngan-mong-mot-chut";
import { nailsDichVuGroup05 } from "./05-yeu-cau-ve-o-day-cho-tung-ngon";
import { nailsDichVuGroup06 } from "./06-chu-ong-e-nghi-dua-mong-lai";
import { nailsDichVuGroup07 } from "./07-kiem-tra-mong-sau-khi-thao-son";
import { nailsDichVuGroup08 } from "./08-bat-au-giua-mong";
import { nailsDichVuGroup09 } from "./09-bat-au-cham-soc-da-quanh-mong";
import { nailsDichVuGroup10 } from "./10-anh-gia-o-bong-tu-nhien-cua-mong";
import { nailsDichVuGroup11 } from "./11-son-lop-bong-cuoi-cung";
import { nailsDichVuGroup12 } from "./12-huong-dan-cham-soc-gel-tai-nha";
import { nailsDichVuGroupReclassified } from "./99-reclassified";

export const nailsDichVuLessons: Lesson[] = [
  ...nailsDichVuGroup01,
  ...nailsDichVuGroup02,
  ...nailsDichVuGroup03,
  ...nailsDichVuGroup04,
  ...nailsDichVuGroup05,
  ...nailsDichVuGroup06,
  ...nailsDichVuGroup07,
  ...nailsDichVuGroup08,
  ...nailsDichVuGroup09,
  ...nailsDichVuGroup10,
  ...nailsDichVuGroup11,
  ...nailsDichVuGroup12,
  ...nailsDichVuGroupReclassified,
];
