"use client";

import Link from "next/link";

interface HeaderProps {
  showBack?: boolean;
  backLabel?: string;
}

export default function Header({ showBack = false, backLabel }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center gap-3">
        {showBack ? (
          <Link
            href="/"
            className="flex items-center gap-2 text-green-700 hover:text-green-900 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span className="text-sm font-medium">{backLabel ?? "목록"}</span>
          </Link>
        ) : (
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-sm">
              <span className="text-white text-xs font-bold">BD</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-green-900 tracking-tight">BuddyDrop</p>
              <p className="text-[10px] text-green-500 font-medium">StudyBuddy 릴리즈 노트</p>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
}
