export default function CategoryButton({ item, active, onClick }) {
  return (
    <button
      onClick={() => onClick(item.name)}
      className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition-all active:scale-95 border cursor-pointer
        ${
          active
            ? "bg-surface-container-high text-[#ff9061] neumorphic-outset border-[#ff9061]/20"
            : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
        }`}
    >
      <span
        className="material-symbols-outlined text-sm"
        style={{
          fontVariationSettings: active ? '"FILL" 1' : '"FILL" 0',
        }}
      >
        {item.icon}
      </span>
      {item.name}
    </button>
  );
}
