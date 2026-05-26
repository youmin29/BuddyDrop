import { notFound } from "next/navigation";
import Header from "@/components/Header";
import MessageBubble from "@/components/MessageBubble";
import { getReleaseWithMessages, getAllVersions } from "@/lib/queries";
import { formatDate } from "@/lib/utils";

export const revalidate = 60;

interface Props {
  params: Promise<{ version: string }>;
}

export async function generateStaticParams() {
  const versions = await getAllVersions();
  return versions.map((r) => ({ version: r.version }));
}

export async function generateMetadata({ params }: Props) {
  const { version } = await params;
  const release = await getReleaseWithMessages(version);
  if (!release) return {};
  return {
    title: `v${release.version} — BuddyDrop`,
    description: release.summary,
  };
}

const tagBadgeStyles = {
  latest: "bg-green-500 text-white",
  stable: "bg-green-100 text-green-700",
  legacy: "bg-gray-100 text-gray-500",
};

const tagLabels = {
  latest: "최신",
  stable: "안정",
  legacy: "구버전",
};

export default async function ReleasePage({ params }: Props) {
  const { version } = await params;
  const release = await getReleaseWithMessages(version);

  if (!release) notFound();

  const messages = release.release_messages ?? [];

  return (
    <div className="min-h-screen bg-[#f0fdf4] flex flex-col">
      <Header showBack backLabel="릴리즈 목록" />

      <div className="max-w-md mx-auto w-full px-4 pt-4 pb-2 animate-slide-up">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-sm">
            <span className="text-white text-xs font-bold">BD</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-green-900">StudyBuddy</span>
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${tagBadgeStyles[release.tag]}`}>
                {tagLabels[release.tag]}
              </span>
            </div>
            <p className="text-xs text-green-500">v{release.version} · {formatDate(release.date)}</p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto w-full px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-green-100" />
          <span className="text-[11px] text-green-400 font-medium px-2">{formatDate(release.date)}</span>
          <div className="flex-1 h-px bg-green-100" />
        </div>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full px-4 py-2 pb-8">
        {messages.map((msg, i) => (
          <MessageBubble key={msg.id} message={msg} index={i} />
        ))}

        <div className="flex justify-center mt-6">
          <span className="text-[11px] text-green-300 bg-white border border-green-100 px-3 py-1 rounded-full">
            v{release.version} 업데이트 완료 ✓
          </span>
        </div>
      </div>
    </div>
  );
}
