"use client";

import { useRouter } from "next/navigation";
import { Release } from "@/lib/supabase";
import { getRelativeDate } from "@/lib/utils";

const tagStyles = {
  latest: "bg-green-500 text-white",
  stable: "bg-green-100 text-green-700",
  legacy: "bg-gray-100 text-gray-500",
};

const tagLabels = {
  latest: "최신",
  stable: "안정",
  legacy: "구버전",
};

interface VersionCardProps {
  release: Release;
  index: number;
}

export default function VersionCard({ release, index }: VersionCardProps) {
  const router = useRouter();
  const isLatest = release.tag === "latest";

  return (
    <div
      className="animate-slide-up"
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: "both" }}
    >
      <div
        onClick={() => router.push(`/releases/${release.version}`)}
        className="relative flex items-center gap-4 px-4 py-4 border-b border-green-50 last:border-0 hover:bg-green-50/50 active:bg-green-100/50 transition-colors duration-150 cursor-pointer"
      >
        <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold shadow-sm ${isLatest ? "bg-gradient-to-br from-green-400 to-green-600 text-white" : "bg-green-50 text-green-600 border border-green-200"}`}>
          v{release.version}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-semibold text-gray-900 text-sm">{release.version}</span>
            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${tagStyles[release.tag]}`}>
              {tagLabels[release.tag]}
            </span>
          </div>
          <p className="text-sm text-gray-500 truncate">{release.summary}</p>
        </div>

        <div className="flex-shrink-0 flex flex-col items-end gap-1">
          <span className="text-[11px] text-gray-400">{getRelativeDate(release.date)}</span>
          <div className="flex items-center gap-1.5">
            {release.download_url && (
              <a
                href={release.download_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-green-400 hover:text-green-600 transition-colors"
                title="다운로드"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            )}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>

        {isLatest && (
          <div className="absolute left-[52px] top-[14px] w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white" />
        )}
      </div>
    </div>
  );
}
