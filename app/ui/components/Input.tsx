export default function InputField({
  icon = "₱",
  placeholder = "0.00",
  type = "number",
  value,
  onChange,
  name,
}) {
  return (
    <div className="bg-surface-container-lowest neumorphic-inset rounded-xl p-4 flex items-center gap-4">
      <span className="text-2xl font-bold text-primary">{icon}</span>

      <input
        type={type}
        value={value}
        onChange={onChange}
        className="bg-transparent border-none p-0 text-2xl font-black text-on-surface focus:ring-0 w-full placeholder:text-surface-variant focus:shadow-none focus:outline-none"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}
