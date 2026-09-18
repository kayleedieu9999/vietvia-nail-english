/**
 * Deterministic per-item accent color — same idea as the sister Expo app's
 * `accentForKey()` (src/theme/academy.ts): topic/shortcut icon chips rotate
 * through a fixed palette instead of every card using the same flat rose
 * wash, matching the real app's colorful icon chips (screenshot: Thư viện
 * list — pink chat bubble, orange house, green basket, blue card, ...).
 */

export interface Accent {
  /** Icon chip background. */
  chipBg: string;
  /** Icon chip glyph/text color. */
  chipText: string;
  /** Progress-bar fill — a literal class, not derived from `chipText` at
   *  runtime, since Tailwind's build-time scanner only picks up class names
   *  that appear as complete string literals somewhere in the source. */
  barBg: string;
}

const ACCENT_CYCLE: Accent[] = [
  { chipBg: "bg-rose-100", chipText: "text-rose-600", barBg: "bg-rose-500" },
  { chipBg: "bg-orange-100", chipText: "text-orange-600", barBg: "bg-orange-500" },
  { chipBg: "bg-emerald-100", chipText: "text-emerald-600", barBg: "bg-emerald-500" },
  { chipBg: "bg-blue-100", chipText: "text-blue-600", barBg: "bg-blue-500" },
  { chipBg: "bg-violet-100", chipText: "text-violet-600", barBg: "bg-violet-500" },
  { chipBg: "bg-teal-100", chipText: "text-teal-600", barBg: "bg-teal-500" },
];

/** Same id always gets the same accent. */
export function accentForKey(key: string): Accent {
  let hash = 0;
  for (let i = 0; i < key.length; i += 1) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return ACCENT_CYCLE[hash % ACCENT_CYCLE.length]!;
}
