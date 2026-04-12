export default function SkeletonCardMedium() {
  return (
    <div className="bg-[#131313] mb-2 p-10 rounded-2xl border border-white/5 flex items-center justify-between relative overflow-hidden">
      {/* shimmer */}
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export function SkeletonCardContent() {
  return (
    <div className="bg-[#131313] p-10 rounded-2xl border border-white/5 flex items-center justify-between relative overflow-hidden">
      {/* shimmer */}
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* fake content (aligned sa typical card layout) */}
      <div className="flex flex-col gap-3 w-full relative">
        <div className="h-4 w-1/3 bg-white/10 rounded" />
        <div className="h-8 w-1/2 bg-white/10 rounded" />
      </div>

      {/* right side (icon placeholder) */}
      <div className="h-10 w-10 bg-white/10 rounded-full relative" />
    </div>
  );
}
