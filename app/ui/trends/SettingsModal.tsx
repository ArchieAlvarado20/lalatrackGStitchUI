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
        className="w-[90%] max-w-sm bg-surface-container-low rounded-2xl p-6 space-y-3"
      >
        <h2 className="text-lg font-bold text-center mb-2">Settings</h2>

        {/* Profile */}
        <button className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition">
          <span className="material-symbols-outlined text-primary">
            account_circle
          </span>
          <span className="text-sm font-medium">Profile</span>
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-3 hover:bg-red-500/10 rounded-lg transition"
        >
          <span className="material-symbols-outlined text-red-500">logout</span>
          <span className="text-sm font-medium text-red-500">Logout</span>
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          className="w-full text-sm text-gray-400 pt-2 hover:text-white transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
