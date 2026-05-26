import Header from "@/components/Header";
import VersionCard from "@/components/VersionCard";
import { getReleases } from "@/lib/queries";

export const revalidate = 60;

export default async function Home() {
  const releases = await getReleases();

  return (
    <div className="min-h-screen bg-[#f0fdf4]">
      <Header />

      <div className="max-w-md mx-auto px-4 pt-6 pb-4 animate-slide-up">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md">
            <span className="text-white text-sm font-bold">BD</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-green-900 tracking-tight">BuddyDrop</h1>
            <p className="text-xs text-green-500 font-medium">StudyBuddy Release Notes</p>
          </div>
        </div>
        <p className="text-sm text-green-700 mt-3 leading-relaxed">
          StudyBuddy의 새 소식을 가장 먼저 전해드려요 🌿
        </p>
      </div>

      <div className="max-w-md mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl shadow-sm border border-green-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-green-50 flex items-center justify-between">
            <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
              릴리즈 목록
            </span>
            <span className="text-xs text-gray-400">{releases.length}개 버전</span>
          </div>

          {releases.length === 0 ? (
            <div className="px-4 py-10 text-center text-sm text-gray-400">
              아직 릴리즈가 없어요
            </div>
          ) : (
            releases.map((release, i) => (
              <VersionCard key={release.id} release={release} index={i} />
            ))
          )}
        </div>

        <p className="text-center text-xs text-green-400 mt-6">Made with 💚 for StudyBuddy</p>
      </div>
    </div>
  );
}
