export default function DateTimeField({
  label,
  icon,
  type,
  value,
  max,
  name,
  onChange,
}) {
  return (
    <div className="space-y-2">
      <label className="text-on-surface-variant label-md ml-1">{label}</label>
      <div className="bg-surface-container-lowest neumorphic-inset rounded-xl p-3 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-sm">
          {icon}
        </span>
        <input
          name={name}
          type={type}
          defaultValue={value}
          max={max}
          onChange={onChange}
          className="bg-transparent border-none p-0 text-on-surface focus:ring-0 text-sm w-full font-medium focus:shadow-none focus:outline-none"
        />
      </div>
    </div>
  );
}
