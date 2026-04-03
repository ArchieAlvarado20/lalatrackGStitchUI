import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  name,
  "data-icon": dataIcon,
  ...props
}: React.ComponentProps<"input"> & { "data-icon"?: string }) {
  return (
    <>
      <div className="group">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
          {name}
        </label>
        <div className="relative flex items-center">
          <span
            className="material-symbols-outlined absolute left-4 text-on-surface-variant/50 text-xl"
            data-icon={dataIcon}
          >
            {dataIcon}
          </span>

          <input
            type={type}
            data-slot="input"
            className={cn(
              "w-full bg-surface-container-lowest neumorphic-inset rounded-xl py-4 pl-12 pr-4 border-none text-on-surface focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/30 focus:shadow-none focus:outline-none",
              className,
            )}
            {...props}
          />
        </div>
      </div>
    </>
  );
}
export { Input };
