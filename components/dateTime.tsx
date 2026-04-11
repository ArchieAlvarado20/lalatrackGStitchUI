"use client";

import { useEffect, useState } from "react";

export default function DateTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {/* Date */}
      <div className="bg-[#131313] p-5 rounded-2xl border border-white/5">
        <p className="text-[8px] font-black uppercase text-[#adaaaa] tracking-widest mb-2">
          Date
        </p>
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="text-[#f26722] opacity-60">📅</span>
          {now.toLocaleDateString()}
        </div>
      </div>

      {/* Time */}
      <div className="bg-[#131313] p-5 rounded-2xl border border-white/5">
        <p className="text-[8px] font-black uppercase text-[#adaaaa] tracking-widest mb-2">
          Time
        </p>
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="text-[#f26722] opacity-60">🕒</span>
          {now.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
