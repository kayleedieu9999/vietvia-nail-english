import { grammarPhases } from "@/data/grammar/phases";

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  key: string;
  icon: string;
  label: string;
  href: string;
  /** Present only on the expandable "100 Quy tắc ngữ pháp" row. */
  children?: NavChild[];
  /**
   * True for a destination that doesn't exist yet on the site (e.g. account
   * settings — there's no auth/profile system to link to). Rendered as a
   * visible-but-non-clickable "Sắp có" row instead of inventing a fake page,
   * same honesty rule as `TopicListRow`'s disabled state.
   */
  disabled?: boolean;
}

export interface NavSection {
  key: string;
  title: string;
  items: NavItem[];
}

/**
 * Sidebar/bottom-nav structure. Grouped into "Học hôm nay" (daily practice
 * entry points) / "Lộ trình" (structured curriculum) / "Tiến độ" (progress
 * tracking) / "Tài khoản" (a local on-device profile + settings — "Gói học"
 * stays disabled since there's no real subscription system yet) per the
 * Modern Nail Lounge redesign. Every enabled item maps to a REAL route.
 */
export function buildNavSections(): NavSection[] {
  return [
    {
      key: "today",
      title: "HỌC HÔM NAY",
      items: [
        { key: "home", icon: "🏠", label: "Hôm nay", href: "/" },
        { key: "speak", icon: "🗣️", label: "Luyện nói", href: "/daily" },
        { key: "nails-convo", icon: "💅", label: "Hội thoại Nails", href: "/topic/nail-general" },
        { key: "drills", icon: "📚", label: "Bài luyện", href: "/topics" },
      ],
    },
    {
      key: "path",
      title: "LỘ TRÌNH",
      items: [
        { key: "foundation", icon: "🧱", label: "Tiếng Anh nền tảng", href: "/lo-trinh" },
        {
          key: "grammar100",
          icon: "🧩",
          label: "100 Quy tắc ngữ pháp",
          href: "/lo-trinh/ngu-phap",
          children: grammarPhases.map((phase) => ({
            label: `CHẶNG ${phase.phaseNumber}`,
            href: `/lo-trinh/ngu-phap/${phase.phaseNumber}`,
          })),
        },
        { key: "pronunciation", icon: "🔊", label: "Phát âm", href: "/topic/pronunciation" },
        { key: "listening", icon: "👂", label: "Nghe & phản xạ", href: "/topic/listening" },
      ],
    },
    {
      key: "progress",
      title: "TIẾN ĐỘ",
      items: [
        { key: "my-progress", icon: "📊", label: "Tiến độ của tôi", href: "/results" },
        { key: "review", icon: "🔁", label: "Câu cần ôn lại", href: "/lo-trinh/ngu-phap" },
      ],
    },
    {
      key: "account",
      title: "TÀI KHOẢN",
      items: [
        { key: "profile", icon: "👤", label: "Hồ sơ", href: "/account/profile" },
        { key: "plan", icon: "💳", label: "Gói học", href: "/account/plan", disabled: true },
        { key: "settings", icon: "⚙️", label: "Cài đặt", href: "/account/settings" },
      ],
    },
  ];
}

/** The 4 bottom-tab destinations on mobile/tablet — same count/order as the real app's 4 tabs, adapted to real website routes. */
export const BOTTOM_NAV_ITEMS: NavItem[] = [
  { key: "home", icon: "🏠", label: "Học", href: "/" },
  { key: "topics", icon: "📚", label: "Thư viện", href: "/topics" },
  { key: "daily", icon: "⚡", label: "Luyện nhanh", href: "/daily" },
  { key: "results", icon: "📊", label: "Kết quả", href: "/results" },
];

/**
 * Extra path prefixes that should also count as "on" a nav item, beyond its
 * own `href` — e.g. browsing any `/topic/:slug` or `/lesson/:slug` page
 * should keep "Thư viện" highlighted, the way the real app's tab bar stays
 * lit while you're anywhere inside that tab's stack.
 */
const ACTIVE_ALIASES: Record<string, string[]> = {
  "/topics": ["/topic/", "/lesson/"],
};

export function isNavItemActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  if (pathname === href || pathname.startsWith(`${href}/`)) return true;
  return (ACTIVE_ALIASES[href] ?? []).some((prefix) => pathname.startsWith(prefix));
}
