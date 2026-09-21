import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import AppShell from "@/components/nav/AppShell";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/** Decorative handwritten accent — used only for the small hero-banner caption on desktop. */
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VietVia English Practice",
  description:
    "Luyện tiếng Anh mỗi ngày cho người Việt ở Mỹ. Không cần đăng nhập, có giải thích tiếng Việt.",
  openGraph: {
    title: "VietVia English Practice",
    description: "Mỗi ngày một chút, tiếng Anh sẽ dễ hơn.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#fbf6f1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas font-sans text-slate-900">
        <AppShell>{children}</AppShell>
        <Analytics />
      </body>
    </html>
  );
}
