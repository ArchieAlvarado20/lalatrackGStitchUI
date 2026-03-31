"use client";
import SettingsButton from "../trends/SettingsButton";
import SettingsModal from "../trends/SettingsModal";
import { useState } from "react";

export default function Head() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="w-full top-0 sticky z-50 bg-[#131313] flex items-center justify-between px-6 py-4 shadow-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/20">
            <img
              alt="Rider profile picture"
              className="w-full h-full object-cover"
              data-alt="close-up portrait of a smiling delivery rider wearing a modern matte black helmet with professional urban lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAORb8_vNxSj6fLj2_g0V2ngN-okzJuNuxHAV9MEnGxKg1jyYDsu4Q9WazBi4C7p1P0Gy0LDWU0t7aaSApOaAqcPMg66Untgj4-xjxvZUFM-5p8deq8PUc80XHerqRWaZUYgGJIG_NMpH0WyWXXIBUr_opeG2YCJWB0wfXs0zI9DfWHjtiauOGVmodjl2-EX7wDuP9itMC_J75yACYsiDaACuA9wMTdrLLFh5S0ATlZ2IXpCSvi-AcV8GDypAlX89prZftK0J40vWIm"
            />
          </div>
          <h1 className="font-['Inter'] font-black italic tracking-tighter text-[#f26722] text-2xl">
            Lalatrack
          </h1>
        </div>
        <div className="flex items-center">
          <button className="text-[#adaaaa] hover:bg-[#20201f] transition-colors p-2 rounded-full active:scale-95 duration-150">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <SettingsButton onOpen={() => setOpen(true)} />
          <SettingsModal open={open} onClose={() => setOpen(false)} />
        </div>
      </header>
    </>
  );
}
