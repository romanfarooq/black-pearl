export default function LoadingPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-[#2a2d43] to-[#2d314f]">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="h-24 w-24 animate-spin rounded-full border-8 border-[#2a2d43] border-b-orange-300 border-r-orange-400 border-t-orange-500"></div>
        </div>
        <p className="mt-4 animate-pulse text-xl font-medium text-orange-400">
          Loading...
        </p>
      </div>
    </div>
  );
}
