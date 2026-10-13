interface LessonStatusBadgeProps {
  isNew: boolean;
  isDone: boolean;
}

/**
 * Shared NEW / DONE pill for lesson-like cards. Priority: DONE > NEW — never
 * two badges at once, and nothing at all for an old, not-completed item.
 */
export default function LessonStatusBadge({ isNew, isDone }: LessonStatusBadgeProps) {
  if (isDone) {
    return (
      <span className="inline-flex shrink-0 items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide text-emerald-700">
        DONE
      </span>
    );
  }
  if (isNew) {
    return (
      <span className="inline-flex shrink-0 items-center rounded-full bg-rose-500 px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide text-white">
        NEW
      </span>
    );
  }
  return null;
}
