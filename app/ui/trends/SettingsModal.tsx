"use client";

import { useRouter } from "next/navigation";

export default function SettingsModal({ open, onClose }) {
  const router = useRouter();

  if (!open) return null;

  const handleLogout = () => {
    // optional: clear auth here
    router.push("/auth/login");
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-sm bg-surface-container-low rounded-2xl p-6 space-y-5"
      >
        <h2 className="text-lg font-bold text-center">Settings</h2>

        <button className="w-full text-center p-3 hover:bg-[#20201f] rounded-lg">
          Profile
        </button>

        <button
          onClick={handleLogout}
          className="w-full text-center p-3  hover:bg-red-500/10 rounded-lg"
        >
          Logout
        </button>

        <button onClick={onClose} className="w-full text-sm text-gray-400">
          Close
        </button>
      </div>
    </div>
  );
}
