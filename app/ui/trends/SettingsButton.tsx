export default function SettingsButton({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="text-[#adaaaa] hover:bg-[#20201f] transition-colors p-2 rounded-full active:scale-95 duration-150"
    >
      <span className="material-symbols-outlined">settings</span>
    </button>
  );
}
