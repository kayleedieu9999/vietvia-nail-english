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
}

export interface NavSection {
  key: string;
  title: string;
  items: NavItem[];
}

/**
 * Sidebar/bottom-nav structure. The REAL published VietVia app (verified
 * from its actual App Store listing/screenshots, not just the in-progress
 * Expo source) has exactly 4 bottom tabs — Học / Thư viện / Gia Sư / Hồ sơ —
 * with "Lộ trình học tập" living as a section ON the Học (home) screen, not
 * a 5th tab. This mirrors that: 4 primary destinations, with the grammar
 * program + other Lộ trình content grouped as a section rather than a peer
 * tab. "Gia Sư" (AI tutor chat) and "Hồ sơ" (login/profile) have no website
 * equivalent — inventing fake destinations for them would be dishonest, so
 * those slots map to the closest REAL features instead (quick practice,
 * results) rather than being labeled as something they're not.
 */
export function buildNavSections(): NavSection[] {
  return [
    {
      key: "main",
      title: "MAIN",
      items: [
        { key: "home", icon: "🏠", label: "Học", href: "/" },
        { key: "topics", icon: "📚", label: "Thư viện", href: "/topics" },
        { key: "daily", icon: "⚡", label: "Luyện nhanh", href: "/daily" },
        { key: "results", icon: "📊", label: "Kết quả", href: "/results" },
      ],
    },
    {
      key: "path",
      title: "LỘ TRÌNH HỌC TẬP",
      items: [
        { key: "lo-trinh", icon: "✨", label: "Lộ trình của bạn", href: "/lo-trinh" },
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
