import Link from "next/link";
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
  const isLatest = release.tag === "latest";

  return (
    <Link
      href={`/releases/${release.version}`}
      className="block animate-slide-up"
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: "both" }}
    >
      <div className="relative flex items-center gap-4 px-4 py-4 border-b border-green-50 last:border-0 hover:bg-green-50/50 active:bg-green-100/50 transition-colors duration-150 cursor-pointer">
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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>

        {isLatest && (
          <div className="absolute left-[52px] top-[14px] w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white" />
        )}
      </div>
    </Link>
  );
}
