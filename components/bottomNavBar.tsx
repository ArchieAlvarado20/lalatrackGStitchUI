"use client";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@/lib/auth";
import { useState } from "react";

type Session = typeof auth.$Infer.Session;
const BottomNavBar = ({ session }: { session: Session | null }) => {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();

  const navItems = [
    { href: "/dashboard", icon: "home", label: "Home" },
    { href: "/logs", icon: "history", label: "Logs" },
    { href: "/expenses", icon: "receipt_long", label: "Expenses" },
    { href: "/trends", icon: "trending_up", label: "Trends" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#131313]/90 backdrop-blur-xl rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.6)] border-t border-white/5">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <button
            key={item.href}
            onClick={() => {
              setActive(item.href);
              router.push(item.href);
            }}
            className={`flex flex-col items-center justify-center transition-all px-4 py-2 rounded-2xl ${
              isActive
                ? "text-primary scale-110 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] rounded-2xl"
                : "text-[#adaaaa] opacity-60 hover:opacity-100"
            }`}
          >
            <span
              className={`material-symbols-outlined ${isActive ? "text-primary-fixed-dim" : ""}`}
              style={isActive ? { fontVariationSettings: '"FILL" 1' } : {}}
            >
              {item.icon}
            </span>

            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
