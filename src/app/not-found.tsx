import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f0fdf4] flex flex-col items-center justify-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md">
        <span className="text-white text-xl font-bold">BD</span>
      </div>
      <p className="text-green-900 font-semibold">페이지를 찾을 수 없어요</p>
      <Link href="/" className="text-sm text-green-600 underline underline-offset-2">
        목록으로 돌아가기
      </Link>
    </div>
  );
}
