"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", icon: "home", label: "Home" },
    { href: "/logs", icon: "history", label: "Logs" },
    { href: "/expenses", icon: "receipt_long", label: "Expenses" },
    { href: "/trends", icon: "trending_up", label: "Trends" },
  ];

  return (
    <>
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-lg bg-surface-container-low glass-nav rounded-md p-3 flex justify-around items-center z-10">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname.startsWith("/dashboard")
              : pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 text-sm transition-all ${
                isActive ? "text-primary scale-110" : "text-on-surface-dim"
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: '"FILL" 1' } : {}}
              >
                {item.icon}
              </span>

              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="fixed inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-[#0e0e0e] to-transparent"></div>
    </>
  );
}
