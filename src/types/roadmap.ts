/**
 * Content model for the "Lộ trình" roadmap — the sidebar's LỘ TRÌNH section
 * and the `/lo-trinh` page are both built from the same `RoadmapEntry[]`
 * (see `src/data/roadmap.ts`), so a path's title/description/href/progress
 * source is defined exactly once.
 */

export type RoadmapContentRef =
  | { kind: "topics"; topicIds: string[] }
  | { kind: "collection"; collectionKey: "dong-tu" | "cau-noi-tu-nhien" | "phrasal-verbs" | "tu-vung" }
  | { kind: "grammar" }
  | { kind: "stories" }
  | { kind: "review-queue" }
  | { kind: "placeholder" };

export interface RoadmapEntry {
  key: string;
  title: string;
  description: string;
  emoji: string;
  /** Lucide icon name (e.g. "Plane") — resolved to a component where rendered. Falls back to `emoji` if unset. */
  iconName?: string;
  /** Real route, or "#" for a placeholder entry (never linked — always renders disabled). */
  href: string;
  contentRef: RoadmapContentRef;
  /** Only set for entries with a dedicated realistic photo. */
  photo?: string;
  /** Descriptive-only subtopic labels shown as plain chips — never their own progress bar. */
  subpathTags?: string[];
  /** True for a page-only card that shares its sidebar row with a sibling entry (e.g. "Story dài" lives inside the "Nghe & phản xạ" sidebar row). */
  sidebarHide?: boolean;
}

export interface RoadmapGroup {
  key: string;
  /** Sidebar section title, e.g. "NỀN TẢNG". */
  sidebarTitle: string;
  /** `/lo-trinh` page heading, e.g. "Nền tảng tiếng Anh". */
  pageTitle: string;
  pageSubtitle: string;
  entries: RoadmapEntry[];
}
