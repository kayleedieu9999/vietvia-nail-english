"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useNotifications, markRead, markAllRead } from "@/lib/notifications";

/**
 * Notification bell + panel — desktop shows a dropdown anchored below the
 * bell, mobile shows a bottom sheet (same component, just different
 * positioning classes at the `lg:` breakpoint). Escape and click-outside
 * both close it; each item marks itself read and navigates on click.
 */
export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { items, unreadCount } = useNotifications();

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Thông báo"
        aria-expanded={open}
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-500 transition hover:text-rose-500"
      >
        🔔
        {unreadCount > 0 && (
          <span
            aria-hidden
            className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-500"
          />
        )}
      </button>

      {open && (
        <>
          <div
            aria-hidden
            className="fixed inset-0 z-40 bg-slate-900/30 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-label="Thông báo"
            className="fixed inset-x-0 bottom-0 z-50 max-h-[75vh] overflow-y-auto rounded-t-3xl border border-slate-200 bg-white p-4 shadow-xl lg:absolute lg:inset-x-auto lg:bottom-auto lg:right-0 lg:top-[calc(100%+8px)] lg:w-96 lg:rounded-3xl"
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 16px)" }}
          >
            <div className="flex items-center justify-between px-1 pb-3">
              <p className="text-base font-extrabold text-slate-900">Thông báo</p>
              {items.some((n) => !n.read) && (
                <button
                  type="button"
                  onClick={() => markAllRead(items.map((n) => n.id))}
                  className="text-xs font-semibold text-rose-500"
                >
                  Đánh dấu đã đọc
                </button>
              )}
            </div>

            {items.length === 0 ? (
              <div className="flex flex-col items-center gap-2 px-4 py-10 text-center">
                <span aria-hidden className="text-3xl">
                  🌸
                </span>
                <p className="text-sm font-semibold text-slate-500">Bạn đã xem hết thông báo.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {items.map((n) => (
                  <Link
                    key={n.id}
                    href={n.href}
                    onClick={() => {
                      markRead(n.id);
                      setOpen(false);
                    }}
                    className={`flex items-start gap-3 rounded-2xl border p-3.5 transition ${
                      n.read ? "border-slate-100 bg-white" : "border-rose-200 bg-rose-50"
                    }`}
                  >
                    <span aria-hidden className="text-xl">
                      {n.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-slate-900">{n.title}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{n.body}</p>
                      <span className="mt-2 inline-block text-xs font-bold text-rose-500">
                        {n.cta} →
                      </span>
                    </div>
                    {!n.read && (
                      <span aria-hidden className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
