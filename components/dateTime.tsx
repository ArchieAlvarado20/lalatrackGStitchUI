"use client";

import { useEffect, useState } from "react";

export default function DateTime() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

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
          {date}
        </div>
      </div>

      {/* Time */}
      <div className="bg-[#131313] p-5 rounded-2xl border border-white/5">
        <p className="text-[8px] font-black uppercase text-[#adaaaa] tracking-widest mb-2">
          Time
        </p>
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="text-[#f26722] opacity-60">🕒</span>
          {time}
        </div>
      </div>
    </div>
  );
}
