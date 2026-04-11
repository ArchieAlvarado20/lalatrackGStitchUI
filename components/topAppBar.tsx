"use client";
import SettingsButton from "./settings/SettingsButton";
import { useState } from "react";
import SettingsModal from "./settings/SettingsModal";
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

const TopAppBar = ({ session }: { session: Session }) => {
  const user = session.user;
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 w-full bg-[#0e0e0e] sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-800 overflow-hidden border border-[#f26722]/20 shadow-[0_0_15px_rgba(242,103,34,0.1)]">
            <img
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
            />
          </div>
          <h1 className="text-[#f26722] font-black italic tracking-tighter text-2xl uppercase">
            {user?.name?.split(" ")[0] ?? "Rider"}
          </h1>
        </div>
        <SettingsButton onOpen={() => setOpen(true)} />
        <SettingsModal open={open} onClose={() => setOpen(false)} />
      </header>
    </>
  );
};

export default TopAppBar;
