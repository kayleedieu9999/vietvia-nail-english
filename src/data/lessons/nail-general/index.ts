import { Lesson } from "@/types/content";
import { chaoKhachLesson } from "@/data/lessons/nail-general/01-chao-khach";
import { hoiKhachMuonLamGiLesson } from "@/data/lessons/nail-general/02-hoi-khach-muon-lam-gi";
import { chonMauSonNailsLesson } from "@/data/lessons/nail-general/03-chon-mau-son";
import { doDaiMongLesson } from "@/data/lessons/nail-general/04-do-dai-mong";
import { dangMongLesson } from "@/data/lessons/nail-general/05-dang-mong";
import { lamManicureLesson } from "@/data/lessons/nail-general/06-lam-manicure";
import { lamPedicureLesson } from "@/data/lessons/nail-general/07-lam-pedicure";
import { gelPolishLesson } from "@/data/lessons/nail-general/08-gel-polish";
import { acrylicNewSetFillLesson } from "@/data/lessons/nail-general/09-acrylic-new-set-fill";
import { gelXBuilderGelLesson } from "@/data/lessons/nail-general/10-gel-x-builder-gel";
import { giaDichVuLesson } from "@/data/lessons/nail-general/11-gia-dich-vu";
import { hoiThoiGianLesson } from "@/data/lessons/nail-general/12-hoi-thoi-gian";
import { khiKhachDoiYLesson } from "@/data/lessons/nail-general/13-khi-khach-doi-y";
import { khiKhachChuaHaiLongLesson } from "@/data/lessons/nail-general/14-khi-khach-chua-hai-long";
import { ketThucThanhToanLesson } from "@/data/lessons/nail-general/15-ket-thuc-thanh-toan";

/** All 15 lessons under "Tiếng Anh nghề Nails", in display/chain order. */
export const nailGeneralLessons: Lesson[] = [
  chaoKhachLesson,
  hoiKhachMuonLamGiLesson,
  chonMauSonNailsLesson,
  doDaiMongLesson,
  dangMongLesson,
  lamManicureLesson,
  lamPedicureLesson,
  gelPolishLesson,
  acrylicNewSetFillLesson,
  gelXBuilderGelLesson,
  giaDichVuLesson,
  hoiThoiGianLesson,
  khiKhachDoiYLesson,
  khiKhachChuaHaiLongLesson,
  ketThucThanhToanLesson,
];
