import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
  containerClassName?: string;
}

export function InputField({
  label,
  icon,
  className,
  rightElement,
  containerClassName,
  ...props
}: InputFieldProps) {
  return (
    <div className={cn("space-y-2", containerClassName)}>
      <label className="text-[10px] font-black text-[#adaaaa] uppercase tracking-widest ml-4">
        {label}
      </label>

      <div className="relative group">
        {icon && (
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#adaaaa] group-focus-within:text-[#f26722] transition-colors">
            {icon}
          </div>
        )}

        <input
          className={cn(
            "w-full bg-[#131313] border border-white/5 rounded-2xl p-5 pl-14 text-white outline-none focus:border-[#f26722]/50 transition-all placeholder:text-neutral-700 font-medium",
            className,
          )}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#adaaaa] hover:text-white transition-colors">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}
