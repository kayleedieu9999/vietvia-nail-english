import Link from "next/link";
import Footer from "@/components/Footer";
import TextScaleEffect from "@/components/TextScaleEffect";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import TopBar from "./TopBar";

/**
 * Site-wide navigation shell — a desktop sidebar (`Sidebar`) beside the
 * page, a slim logo-only bar on mobile/tablet (bottom nav is the real
 * mobile navigation now, so there's nothing else to put up top), and a
 * fixed bottom tab bar (`BottomNav`) on mobile/tablet. Both breakpoints are
 * pure CSS (`lg:flex` / `lg:hidden`) — no JS viewport detection, so there's
 * no hydration-timing gap where the wrong nav briefly renders.
 */
export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh">
      <TextScaleEffect />
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex items-center justify-center border-b border-slate-200 bg-white/90 px-5 py-3 backdrop-blur lg:hidden">
          <Link href="/" className="text-base font-extrabold tracking-wide text-rose-600">
            VietVia
          </Link>
        </header>
        <header className="sticky top-0 z-20 hidden border-b border-slate-200 bg-white/95 px-10 py-4 backdrop-blur lg:block">
          <TopBar />
        </header>
        <main className="flex-1">{children}</main>
        <div className="pb-20 lg:pb-0">
          <Footer />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
