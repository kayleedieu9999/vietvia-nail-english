"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOTTOM_NAV_ITEMS, isNavItemActive } from "./navItems";

/**
 * Fixed bottom tab bar — mobile/tablet only (`lg:hidden`). Matches the real
 * published VietVia app's bottom bar exactly in count (4 tabs, verified from
 * the actual App Store screenshots — Học / Thư viện / Gia Sư / Hồ sơ), with
 * the 2 tabs that have no website equivalent (Gia Sư's AI chat, Hồ sơ's
 * login/profile) mapped to the closest real features instead of faked.
 * Replaces the previous hamburger menu — with 4 always-visible destinations
 * covering every page on the site, a hidden drawer is no longer needed.
 */
export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto flex w-full max-w-sm items-stretch justify-between px-2">
        {BOTTOM_NAV_ITEMS.map((item) => {
          const active = isNavItemActive(item.href, pathname);
          return (
            <li key={item.key} className="flex-1">
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-0.5 py-2 text-[11px] font-bold transition ${
                  active ? "text-rose-600" : "text-slate-400"
                }`}
              >
                <span className={`text-xl leading-none transition ${active ? "" : "opacity-70"}`}>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
