"use client";

import { LessonSummary } from "@/types/content";
import LessonList from "@/components/LessonList";
import PracticeBatchLink from "@/components/PracticeBatchLink";

interface NailsNewLessonsProps {
  lessons: LessonSummary[];
}

/**
 * "Bài mới theo kỹ năng" on the Hội thoại Nails hub — the newest content
 * batch's lessons across all 7 topics in one place, with filter chips per
 * skill (Consultation, Appointment, Manicure, Pedicure, Gel, Acrylic, Gel-X,
 * Upsell, Customer concerns, Small talk, Checkout) and search.
 */
export default function NailsNewLessons({ lessons }: NailsNewLessonsProps) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-extrabold text-slate-900 lg:text-2xl">Bài mới theo kỹ năng</h2>
      <p className="mt-1 text-sm text-slate-600">
        {lessons.length} bài mới — chọn một kỹ năng để lọc, hoặc tìm theo từ khóa.
      </p>
      <PracticeBatchLink href="/lesson/nails-batch-2026-10/luyen-tap" label="Luyện tập bài mới" />
      <LessonList lessons={lessons} enableSearch />
    </section>
  );
}
