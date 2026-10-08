import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مدیریت | هلدینگ فولاد کاویان سپنتا",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
