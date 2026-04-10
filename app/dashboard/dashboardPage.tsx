import { Power, Fuel, ArrowRight } from "lucide-react";
import TopAppBar from "@/components/topAppBar";
import BottomNavBar from "@/components/bottomNavBar";
import LogItem from "@/components/logItem";
import StatCard from "@/components/statCard";
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

export default function DashboardPage({ session }: { session: Session }) {
  return (
    <>
      <TopAppBar session={session} />

      <main className="px-6 pt-8 max-w-lg mx-auto">
        {/* Main Earnings Display */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#131313] border border-white/5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-black text-[#adaaaa] uppercase tracking-[0.2em]">
              Shift Active: 4h 12m
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#adaaaa] mb-2 font-black">
            Real-time Net Profit
          </p>
          <div className="flex items-end justify-center gap-2 mb-2">
            <h2 className="text-7xl font-black text-[#f26722] tracking-tighter italic">
              $142.85
            </h2>
            <span className="text-xl font-black text-white/40 mb-3 tracking-tighter">
              USD
            </span>
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

        {/* Recent Logs Section */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#adaaaa]">
              Today
            </span>
            <div className="h-px flex-1 bg-white/5"></div>

            <button className="text-[10px] font-black text-[#f26722] uppercase tracking-[0.2em] hover:underline underline-offset-4">
              <a href="dashboard/ViewAll">View All</a>
            </button>
          </div>

          <div className="space-y-3">
            <LogItem
              icon={Fuel}
              title="Fuel Refill"
              subtitle="Shell Station • 2:14 PM"
              amount="$18.50"
              isNegative
            />
            <LogItem
              icon={() => <div className="font-black italic text-sm">D</div>}
              title="Large Delivery Tip"
              subtitle="Order #8821 • 1:45 PM"
              amount="$12.00"
            />
          </div>
        </section>

        {/* Action Button */}
        <button className="w-full bg-[#f26722] text-[#0e0e0e] py-6 rounded-[2rem] font-black text-xl uppercase tracking-widest flex items-center justify-center gap-4 shadow-[0_12px_40px_rgba(242,103,34,0.3)] hover:scale-[1.02] active:scale-95 transition-all group overflow-hidden relative">
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></div>
          <Power size={28} strokeWidth={3} className="animate-pulse" />
          START SHIFT
          <ArrowRight
            size={20}
            className="group-hover:translate-x-2 transition-transform"
          />
        </button>
      </main>

      <BottomNavBar session={session} />
    </>
  );
}
