export function ActionButton({ label, icon, iconRight = false }) {
  return (
    <section className="fixed bottom-24 left-0 w-full px-6 flex justify-center pointer-events-none">
      <button className="pointer-events-auto w-full max-w-sm h-16 bg-gradient-to-br from-primary to-primary-fixed-dim rounded-2xl flex items-center justify-center gap-3 neumorphic-out active:scale-[0.98] active:shadow-inner transition-all duration-150 cursor-pointer">
        {!iconRight && (
          <span
            className="material-symbols-outlined text-on-primary-fixed font-bold"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            {icon}
          </span>
        )}

        <span className="text-on-primary-fixed font-black text-xl uppercase tracking-wider">
          {label}
        </span>

        {iconRight && (
          <span
            className="material-symbols-outlined text-on-primary-fixed font-bold"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            {icon}
          </span>
        )}
      </button>
    </section>
  );
}
