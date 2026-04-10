export default function LockedFeature({
  children,
  label = "Coming Soon",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div className="relative">
      <div className="blur-sm opacity-50 pointer-events-none">{children}</div>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-black/70 text-white/40 px-4 py-1 rounded-xl text-xs font-black tracking-[0.3em] uppercase rotate-[-12deg] select-none">
          {label}
        </span>
      </div>
    </div>
  );
}
