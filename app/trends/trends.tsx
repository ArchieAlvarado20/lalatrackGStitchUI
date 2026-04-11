"use client";

import { Target, Clock, Lightbulb, ChevronRight } from "lucide-react";
import BottomNavBar from "@/components/bottomNavBar";
import TopAppBar from "@/components/topAppBar";
import StatCard from "@/components/statCard";
import { auth } from "@/lib/auth";
import LockedFeature from "@/components/lockedFeature";

type Session = typeof auth.$Infer.Session;

export default function TrendPage({ session }: { session: Session }) {
  const weeklyData = [
    { day: "Mon", val: 40, amount: 120 },
    { day: "Tue", val: 70, amount: 210, active: true },
    { day: "Wed", val: 30, amount: 90 },
    { day: "Thu", val: 90, amount: 300 },
    { day: "Fri", val: 60, amount: 180 },
    { day: "Sat", val: 100, amount: 320 },
    { day: "Sun", val: 50, amount: 150 },
  ];

  return (
    <>
      <TopAppBar session={session} />
      <LockedFeature label="Coming Soon">
        <main className="px-6 py-6 max-w-lg mx-auto space-y-8">
          {/* Time Period Selector */}
          <div className="flex bg-[#131313] p-1.5 rounded-2xl border border-white/5">
            {["Week", "Month", "Year"].map((period) => (
              <button
                key={period}
                className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${
                  period === "Month"
                    ? "bg-[#20201f] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]"
                    : "text-[#adaaaa] hover:text-white"
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          {/* Monthly Goal Progress */}
          <section className="bg-[#131313] p-8 rounded-[2.5rem] border border-white/5 flex flex-col items-center relative overflow-hidden group hover:border-[#f26722]/30 transition-all duration-500">
            <div className="relative w-40 h-40 mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#20201f"
                  strokeWidth="12"
                  fill="transparent"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#f26722"
                  strokeWidth="12"
                  fill="transparent"
                  strokeDasharray="440"
                  strokeDashoffset="110"
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl font-black italic tracking-tighter">
                  75%
                </span>
                <span className="text-[8px] font-black uppercase tracking-widest text-[#adaaaa]">
                  Monthly Goal
                </span>
              </div>
            </div>
            <p className="text-center text-sm font-medium text-[#adaaaa] max-w-[200px] ">
              You are <span className="text-[#f26722] font-black">$1,250</span>{" "}
              away from your monthly target.
            </p>
            <div className="absolute top-[-50px] right-[-50px] opacity-[0.02] rotate-12">
              <Target size={200} />
            </div>
          </section>

          {/* Goal Progress Grid */}
          <section className="grid grid-cols-2 gap-4 mb-12">
            <StatCard
              label="Daily Goal"
              value="$142 / $200"
              percentage={75}
              color="#f26722"
              subtext="Warning: High Traffic"
            />
            <StatCard
              label="Fuel vs Income"
              value="$35.50 Exp."
              percentage={25}
              color="#f26722"
              subtext="Warning: High Traffic"
            />
          </section>

          {/* Peak Performance Card */}
          <section className="bg-[#131313] p-5 rounded-3xl border border-white/5 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#20201f] rounded-2xl flex items-center justify-center text-[#f26722]">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#adaaaa] mb-1">
                  Peak Performance
                </p>
                <p className="text-xl font-black italic tracking-tighter">
                  11 AM - 1 PM
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#f26722] font-black text-xl italic">$42/hr</p>
              <p className="text-[8px] font-bold text-[#adaaaa] uppercase tracking-tighter">
                Avg Earnings
              </p>
            </div>
          </section>

          {/* Weekly Earnings Chart */}
          <section className="bg-[#131313] p-8 rounded-[2.5rem] border border-white/5">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-1">
                  Weekly Earnings
                </h3>
                <p className="text-[10px] font-bold text-[#adaaaa] uppercase tracking-widest">
                  Last 7 days performance
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-[#f26722] italic tracking-tighter">
                  $984.12
                </p>
                <p className="text-[8px] font-bold text-[#adaaaa] uppercase tracking-widest">
                  Total This Week
                </p>
              </div>
            </div>

            <div className="h-40 flex items-end gap-3 px-2">
              {weeklyData.map((d, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-3 group"
                >
                  {d.active && (
                    <div className="bg-[#20201f] px-2 py-1 rounded-md text-[8px] font-black text-[#f26722] mb-1 animate-bounce">
                      ${d.amount}
                    </div>
                  )}
                  <div
                    className={`w-full rounded-t-xl transition-all duration-500 hover:brightness-125 ${d.active ? "bg-[#f26722]" : "bg-[#20201f]"}`}
                    style={{ height: `${d.val}%` }}
                  ></div>
                  <span
                    className={`text-[8px] font-black tracking-widest ${d.active ? "text-[#f26722]" : "text-[#adaaaa]"}`}
                  >
                    {d.day}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Optimization Tips */}
          <section className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#adaaaa] ml-2">
              Optimization Tips
            </h3>
            <div className="bg-[#131313] p-6 rounded-3xl border border-white/5 border-l-4 border-l-[#f26722] flex gap-4">
              <div className="w-12 h-12 bg-[#20201f] rounded-2xl flex-shrink-0 flex items-center justify-center text-[#f26722]">
                <Lightbulb size={24} />
              </div>
              <div>
                <h4 className="font-black italic text-lg tracking-tighter mb-1 uppercase">
                  Boost Your Lunch Earnings
                </h4>
                <p className="text-xs text-[#adaaaa] leading-relaxed font-medium">
                  Orders in the Downtown area are up 25% between 11:30 and
                  13:00. Head there to maximize hourly rates.
                </p>
                <button className="flex items-center gap-2 text-[10px] font-black text-[#f26722] uppercase tracking-widest mt-4 hover:gap-3 transition-all">
                  Learn More <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </section>
        </main>
      </LockedFeature>
      <BottomNavBar session={session} />
    </>
  );
}
