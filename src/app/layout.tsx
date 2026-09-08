import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VietVia - Luyện tiếng Anh nghề Nails",
  description:
    "5 câu tiếng Anh nghề nails mỗi ngày. Không cần đăng nhập, chỉ khoảng 2 phút.",
  openGraph: {
    title: "VietVia - Luyện tiếng Anh nghề Nails",
    description:
      "Hôm nay bạn nói gì với khách? 5 câu tiếng Anh nghề nails, khoảng 2 phút.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#fdf2f8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-rose-50 font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}
