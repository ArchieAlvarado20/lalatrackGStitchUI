export default function TransactionItem({
  title,
  subtitle,
  amount,
  icon,
  negative = true,
  currency = "₱",
}) {
  return (
    <div className="bg-surface-container rounded-xl p-4 flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center">
        <span className="material-symbols-outlined text-primary-fixed">
          {icon}
        </span>
      </div>

      <div className="flex-1">
        <p className="text-on-surface font-bold text-sm">{title}</p>
        <p className="text-on-surface-variant text-xs font-medium">
          {subtitle}
        </p>
      </div>

      <div className="text-right">
        <p
          className={`font-black text-sm ${
            negative ? "text-error" : "text-secondary"
          }`}
        >
          {negative ? "-" : "+"}
          {currency}
          {amount}
        </p>
      </div>
    </div>
  );
}
