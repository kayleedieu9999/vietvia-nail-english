"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useSidebarCollapsed } from "@/lib/sidebarState";
import { buildNavSections, isNavItemActive, type NavItem } from "./navItems";

const EXPANDED_WIDTH = 260;
const COLLAPSED_WIDTH = 72;

/**
 * Persistent left sidebar — desktop/wide-tablet only (`lg:flex`, pure CSS
 * responsive, no JS viewport detection). The real app is iPhone-only (no
 * tablet/desktop layout exists to mirror), so this is a desktop-appropriate
 * adaptation of the same 4 real destinations (see `navItems.ts`) plus the
 * Lộ trình content as its own section, coral active-state, collapsible.
 */
export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useSidebarCollapsed();
  const sections = buildNavSections();

  return (
    <aside
      style={{ width: collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH }}
      className="sticky top-0 hidden h-dvh shrink-0 flex-col border-r border-rose-100 bg-canvas-warm lg:flex"
    >
      <div className="flex-1 overflow-y-auto" style={{ padding: collapsed ? "20px 10px" : "20px 16px" }}>
        <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between"}`}>
          {!collapsed ? (
            <span className="text-lg font-extrabold tracking-wide text-rose-500">VIETVIA</span>
          ) : (
            <span className="text-lg font-extrabold text-rose-500">V</span>
          )}
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Mở rộng menu" : "Thu gọn menu"}
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-500 transition hover:text-rose-500 ${collapsed ? "mt-3" : ""}`}
          >
            {collapsed ? "»" : "«"}
          </button>
        </div>

        {!collapsed && (
          <form
            className="mt-4 flex items-center gap-2 rounded-full bg-well px-3 h-10"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.elements.namedItem("q") as HTMLInputElement;
              const q = input.value.trim();
              if (q) router.push(`/topics?q=${encodeURIComponent(q)}`);
            }}
          >
            <span aria-hidden className="text-slate-400">
              🔍
            </span>
            <input
              name="q"
              type="text"
              placeholder="Tìm chủ đề..."
              className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />
          </form>
        )}

        <nav className="mt-5 space-y-5">
          {sections.map((section) => (
            <div key={section.key}>
              {!collapsed && (
                <p className="mb-1 ml-2 text-xs font-extrabold tracking-wide text-slate-400">{section.title}</p>
              )}
              <div className="space-y-1">
                {section.items.map((item) => (
                  <SidebarRow key={item.key} item={item} collapsed={collapsed} pathname={pathname} />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
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

  return (
    <div>
      <Link
        href={item.href}
        onClick={() => {
          if (item.children && !collapsed) setExpanded((v) => !v);
        }}
        className={`flex items-center gap-2.5 rounded-2xl px-2.5 py-2 text-sm font-semibold transition ${
          collapsed ? "justify-center" : ""
        } ${active ? "bg-rose-100 text-rose-600" : "text-slate-700 hover:bg-well"}`}
      >
        <span className="text-lg leading-none">{item.icon}</span>
        {!collapsed && (
          <>
            <span className="min-w-0 flex-1 truncate">{item.label}</span>
            {item.children && <span className="text-xs text-slate-400">{expanded ? "▾" : "▸"}</span>}
          </>
        )}
      </Link>

      {item.children && expanded && !collapsed && (
        <div className="ml-8 mt-1 space-y-0.5">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={`block rounded-xl px-2 py-1.5 text-xs font-semibold transition ${
                isNavItemActive(child.href, pathname) ? "bg-rose-100 text-rose-600" : "text-slate-500 hover:bg-well"
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
