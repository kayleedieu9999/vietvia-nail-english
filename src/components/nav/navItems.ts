import type { ComponentType } from "react";
import {
  Layers,
  BookMarked,
  ListChecks,
  MessagesSquare,
  Shuffle,
  Library,
  Volume2,
  Headphones,
  Sparkles,
  CalendarDays,
  Plane,
  Car,
  ShieldAlert,
  Home,
  ShoppingBag,
  Stethoscope,
  Phone,
  GraduationCap,
  Landmark,
  Coffee,
  BookOpenText,
  Mic,
  Flag,
} from "lucide-react";
import { grammarPhases } from "@/data/grammar/phases";
import { roadmapGroups } from "@/data/roadmap";

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  key: string;
  icon: string;
  /** Lucide icon component — when present, rendered instead of the emoji `icon` (used by the "Lộ trình" section). */
  Icon?: ComponentType<{ className?: string }>;
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

/** One collapsible group within a section (currently only "LỘ TRÌNH" uses this — every other section stays a flat `items` list). */
export interface NavGroup {
  key: string;
  title: string;
  items: NavItem[];
}

export interface NavSection {
  key: string;
  title: string;
  items: NavItem[];
  /** When set, the section renders as collapsible sub-groups instead of a flat item list. */
  groups?: NavGroup[];
}

/** Maps `RoadmapEntry.iconName` (a plain string, kept framework-agnostic in `src/data/roadmap.ts`) to its lucide component. */
const ROADMAP_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Layers,
  BookMarked,
  ListChecks,
  MessagesSquare,
  Shuffle,
  Library,
  Volume2,
  Headphones,
  Sparkles,
  CalendarDays,
  Plane,
  Car,
  ShieldAlert,
  Home,
  ShoppingBag,
  Stethoscope,
  Phone,
  GraduationCap,
  Landmark,
  Coffee,
  BookOpenText,
  Mic,
  Flag,
};

/** Builds the 4 collapsible "LỘ TRÌNH" groups from the shared roadmap manifest (`src/data/roadmap.ts`) — one source of truth for the sidebar and the `/lo-trinh` page. */
function buildLoTrinhGroups(): NavGroup[] {
  return roadmapGroups.map((group) => ({
    key: group.key,
    title: group.sidebarTitle,
    items: group.entries
      .filter((entry) => !entry.sidebarHide)
      .map((entry) => {
        const item: NavItem = {
          key: entry.key,
          icon: entry.emoji,
          Icon: entry.iconName ? ROADMAP_ICONS[entry.iconName] : undefined,
          label: entry.title,
          href: entry.href === "#" ? "" : entry.href,
          disabled: entry.href === "#",
        };
        if (entry.key === "grammar100") {
          item.children = grammarPhases.map((phase) => ({
            label: `CHẶNG ${phase.phaseNumber}`,
            href: `/lo-trinh/ngu-phap/${phase.phaseNumber}`,
          }));
        }
        return item;
      }),
  }));
}

/**
 * Sidebar/bottom-nav structure. Grouped into "Học hôm nay" (daily practice
 * entry points) / "Lộ trình" (the full roadmap — now organized into 4
 * collapsible groups built from `src/data/roadmap.ts`) / "Tiến độ" (progress
 * tracking) / "Tài khoản" (a local on-device profile + settings — "Gói học"
 * stays disabled since there's no real subscription system yet). Every
 * enabled item maps to a REAL route.
 */
export function buildNavSections(): NavSection[] {
  return [
    {
      key: "today",
      title: "HỌC HÔM NAY",
      items: [
        { key: "home", icon: "🏠", label: "Hôm nay", href: "/" },
        { key: "speak", icon: "🗣️", label: "Luyện nói", href: "/daily" },
        { key: "nails-convo", icon: "💅", label: "Hội thoại Nails", href: "/hoi-thoai-nails" },
        { key: "drills", icon: "📚", label: "Bài luyện", href: "/topics" },
      ],
    },
    {
      key: "path",
      title: "LỘ TRÌNH",
      items: [],
      groups: buildLoTrinhGroups(),
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

/** The 5 bottom-tab destinations on mobile/tablet, matching the broader VietVia app's roadmap-aware navigation. */
export const BOTTOM_NAV_ITEMS: NavItem[] = [
  { key: "home", icon: "🏠", label: "Hôm nay", href: "/" },
  { key: "speak", icon: "🗣️", label: "Luyện nói", href: "/daily" },
  { key: "topics", icon: "📚", label: "Bài học", href: "/topics" },
  { key: "lo-trinh", icon: "🧭", label: "Lộ trình", href: "/lo-trinh" },
  { key: "results", icon: "📊", label: "Tiến độ", href: "/results" },
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
  if (!href) return false;
  if (href === "/") return pathname === "/";
  // "/lo-trinh" is its own hub page, not a parent of every other "/lo-trinh/*"
  // route (100 Quy tắc, 500 Động từ, etc. each have their own sidebar row and
  // shouldn't also light up "Tiếng Anh nền tảng") — exact match only.
  if (href === "/lo-trinh") return pathname === "/lo-trinh";
  if (pathname === href || pathname.startsWith(`${href}/`)) return true;
  return (ACTIVE_ALIASES[href] ?? []).some((prefix) => pathname.startsWith(prefix));
}
