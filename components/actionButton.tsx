import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function ActionButton({
  label,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ActionButtonProps) {
  return (
    <button
      className={cn(
        "w-full bg-[#f26722] text-[#0e0e0e] py-6 rounded-[2rem] font-black text-xl uppercase tracking-widest",
        "flex items-center justify-center gap-4 shadow-[0_12px_40px_rgba(242,103,34,0.3)]",
        "hover:scale-[1.02] active:scale-95 transition-all group overflow-hidden relative cursor-pointer",
        className,
      )}
      {...props}
    >
      {/* shimmer effect */}
      <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]" />

      {leftIcon}

      {label}

      {rightIcon}
    </button>
  );
}
