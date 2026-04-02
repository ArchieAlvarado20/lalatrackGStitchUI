export default function SessionCard({
  label,
  amount,
  icon = "payments",
  currency = "₱",
}) {
  return (
    <section className="bg-surface-container-low rounded-xl p-5 relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-on-surface-variant label-md font-medium text-center  uppercase tracking-wider mb-1">
          {label}
        </p>
        <h2 className="text-4xl font-black text-primary text-center tracking-tight">
          {currency}
          {amount}
        </h2>
      </div>

      {/* <div className="relative -right-4 -bottom-4 opacity-10">
        <span
          className="material-symbols-outlined text-9xl"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          {icon}
        </span>
      </div> */}
    </section>
  );
}
