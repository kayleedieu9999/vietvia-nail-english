import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
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
  themeColor: "#fdf2f8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-rose-50 font-sans text-slate-900">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
