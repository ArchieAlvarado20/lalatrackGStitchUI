"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth-actions";

type SettingsProps = {
  open: boolean;
  onClose: () => void;
};

export default function SettingsModal({ open, onClose }: SettingsProps) {
  const router = useRouter();

  if (!open) return null;

  const handleSignOut = async () => {
    await signOut();
    router.push("/auth");
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
        <div className="w-10 h-10 rounded-full bg-neutral-800 overflow-hidden border border-[#f26722]/20 shadow-[0_0_15px_rgba(242,103,34,0.1)]">
          {/* <img
              src={
                user?.image ??
                "data:image/svg+xml;utf8,\
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>\
                  <defs>\
                  <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>\
                  <stop offset='0%' stop-color='%23f26722'/>\
                  <stop offset='100%' stop-color='%23ff8a50'/>\
                  </linearGradient>\
                  </defs>\
                  <rect width='100%' height='100%' rx='16' fill='%23111111'/>\
                  <circle cx='32' cy='24' r='10' fill='url(%23g)'/>\
                  <path d='M16 52c0-8 8-12 16-12s16 4 16 12' fill='url(%23g)'/>\
                  </svg>"
              }
              alt="User Profile"
              className="w-full h-full object-cover"
            /> */}
          <img
            src={
              "data:image/svg+xml;utf8,\
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>\
                    <defs>\
                      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>\
                        <stop offset='0%' stop-color='%23f26722'/>\
                        <stop offset='100%' stop-color='%23ff8a50'/>\
                      </linearGradient>\
                    </defs>\
                    <rect width='100%' height='100%' rx='16' fill='%23111111'/>\
                    <text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle'\
                      font-family='Arial, sans-serif' font-size='32' font-weight='900'\
                      fill='url(%23g)'>\
                      L\
                    </text>\
                  </svg>"
            }
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Profile */}
        <button className="w-full flex flex-col items-center justify-center gap-1 p-4 hover:bg-white/5 rounded-lg transition cursor-pointer">
          <span className="material-symbols-outlined text-primary text-2xl">
            account_circle
          </span>
          <span className="text-sm font-medium">Profile</span>
        </button>

        {/* Logout */}
        <button
          onClick={handleSignOut}
          className="w-full flex flex-col items-center justify-center gap-1 p-4 hover:bg-red-500/10 rounded-lg transition cursor-pointer"
        >
          <span className="material-symbols-outlined text-red-500 text-2xl">
            logout
          </span>
          <span className="text-sm font-medium text-red-500">Logout</span>
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          className="w-full text-sm text-gray-400 pt-2 hover:text-white transition text-center"
        >
          Close
        </button>
      </div>
    </div>
  );
}
