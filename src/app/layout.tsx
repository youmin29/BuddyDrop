import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuddyDrop — StudyBuddy 릴리즈 노트",
  description: "StudyBuddy의 새로운 업데이트를 확인해보세요.",
};

export const viewport: Viewport = {
  themeColor: "#16a34a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#f0fdf4]">{children}</body>
    </html>
  );
}
