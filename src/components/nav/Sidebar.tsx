"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSidebarCollapsed } from "@/lib/sidebarState";
import { buildNavSections, isNavItemActive, type NavItem } from "./navItems";

const EXPANDED_WIDTH = 268;
const COLLAPSED_WIDTH = 76;

/**
 * Persistent left sidebar — desktop/wide-tablet only (`lg:flex`, pure CSS
 * responsive, no JS viewport detection). Modern Nail Lounge styling: warm
 * white surface, soft burgundy selected state with a left accent bar,
 * grouped sections (Học hôm nay / Lộ trình / Tiến độ / Tài khoản),
 * collapsible to an icon rail. Search now lives in the desktop `TopBar`
 * instead of duplicating it here.
 */
export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useSidebarCollapsed();
  const sections = buildNavSections();

  return (
    <aside
      style={{ width: collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH }}
      className="sticky top-0 hidden h-dvh shrink-0 flex-col border-r border-slate-200 bg-white lg:flex"
    >
      <div className="min-h-0 flex-1 overflow-y-auto" style={{ padding: collapsed ? "20px 12px" : "24px 18px" }}>
        <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between"}`}>
          {!collapsed ? (
            <div className="flex items-center gap-2">
              <span aria-hidden className="text-2xl leading-none text-rose-500">
                💅
              </span>
              <div className="leading-tight">
                <p className="text-xl font-extrabold tracking-wide text-rose-600">VietVia</p>
                <p className="text-[11px] font-semibold text-slate-400">
                  Nói tiếng Anh · Làm nails tự tin hơn
                </p>
              </div>
            </div>
          ) : (
            <span className="text-lg font-extrabold text-rose-600">V</span>
          )}
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Mở rộng menu" : "Thu gọn menu"}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-well text-slate-500 transition hover:text-rose-500 ${collapsed ? "mt-3" : ""}`}
          >
            {collapsed ? "»" : "«"}
          </button>
        </div>

        <nav className="mt-5 space-y-4">
          {sections.map((section) => (
            <div key={section.key}>
              {!collapsed && (
                <p className="mb-2 ml-3 text-xs font-extrabold tracking-wide text-slate-400">
                  {section.title}
                </p>
              )}
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <SidebarRow key={item.key} item={item} collapsed={collapsed} pathname={pathname} />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {!collapsed && (
        <div className="px-[18px] pb-4">
          <div className="rounded-2xl bg-rose-50 px-4 py-3.5">
            <p className="text-sm font-extrabold leading-snug text-slate-900">
              Cùng bạn tiến bộ mỗi ngày <span aria-hidden>🤍</span>
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}

function SidebarRow({
  item,
  collapsed,
  pathname,
}: {
  item: NavItem;
  collapsed: boolean;
  pathname: string;
}) {
  const active = isNavItemActive(item.href, pathname);
  const [expanded, setExpanded] = useState(active && !!item.children);

  if (item.disabled) {
    return (
      <div
        className={`flex items-center gap-2.5 rounded-2xl border-l-[3px] border-transparent px-2.5 py-2 text-sm font-semibold text-slate-300 ${
          collapsed ? "justify-center" : ""
        }`}
        aria-disabled
      >
        <span className="text-lg leading-none opacity-60">{item.icon}</span>
        {!collapsed && (
          <>
            <span className="min-w-0 flex-1 truncate">{item.label}</span>
            <span className="shrink-0 text-[10px] font-extrabold uppercase tracking-wide text-slate-300">
              Sắp có
            </span>
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      <Link
        href={item.href}
        onClick={() => {
          if (item.children && !collapsed) setExpanded((v) => !v);
        }}
        className={`flex items-center gap-2.5 rounded-2xl border-l-[3px] px-2.5 py-2 text-sm font-semibold transition ${
          collapsed ? "justify-center" : ""
        } ${
          active
            ? "border-rose-500 bg-rose-100 text-rose-600"
            : "border-transparent text-slate-700 hover:bg-well"
        }`}
      >
        <span className={`text-lg leading-none ${active ? "" : "opacity-80"}`}>{item.icon}</span>
        {!collapsed && (
          <>
            <span className="min-w-0 flex-1 truncate">{item.label}</span>
            {item.children && <span className="text-xs text-slate-400">{expanded ? "▾" : "▸"}</span>}
          </>
        )}
      </Link>

      {item.children && expanded && !collapsed && (
        <div className="ml-9 mt-1 space-y-0.5 border-l border-slate-200 pl-3">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={`block rounded-xl px-2 py-1.5 text-xs font-semibold transition ${
                isNavItemActive(child.href, pathname)
                  ? "bg-rose-100 text-rose-600"
                  : "text-slate-500 hover:bg-well"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
