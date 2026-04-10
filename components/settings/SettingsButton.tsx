import { Settings } from "lucide-react";

export default function SettingsButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="text-[#adaaaa] hover:bg-[#20201f] transition-colors p-2 rounded-full active:scale-95 duration-150 cursor-pointer"
    >
      <Settings size={24} />
    </button>
  );
}
