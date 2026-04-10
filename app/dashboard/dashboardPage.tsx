"use client";
import { Power, Fuel, ArrowRight } from "lucide-react";
import TopAppBar from "@/components/topAppBar";
import BottomNavBar from "@/components/bottomNavBar";
import LogItem from "@/components/logItem";
import StatCard from "@/components/statCard";
import { auth } from "@/lib/auth";
import { useState, useEffect } from "react";
import {
  createRide,
  getTodayIncome,
  getTodayRides,
  getTodayTip,
} from "@/lib/actions/logs-actions";
import LockedFeature from "@/components/lockedFeature";

type Session = typeof auth.$Infer.Session;

type Ride = {
  id: number;
  userId: string;
  fare: number;
  payment: number;
  tip: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

export default function DashboardPage({ session }: { session: Session }) {
  const [rides, setRides] = useState<Ride[]>([]);
  const [tip, setTip] = useState<number>(0);

  const loadTip = async () => {
    const result = await getTodayTip(session.user.id);
    setTip(result);
  };

  const loadLogs = async () => {
    const data = await getTodayRides(session.user.id);

    const formatted: Ride[] = data.map((r) => ({
      ...r,
      fare: Number(r.fare),
      payment: Number(r.payment),
      tip: Number(r.tip),
    }));

    setRides(formatted);
  };
  useEffect(() => {
    const init = async () => {
      await Promise.all([loadLogs(), loadTip()]);
    };

    init();
  }, []);

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
              ₱{tip}
            </h2>
            <span className="text-xl font-black text-white/40 mb-3 tracking-tighter">
              PHP
            </span>
          </div>
        </section>

        {/* Goal Progress Grid */}

        <section className="grid grid-cols-2 gap-4 mb-12 w-full items-stretch">
          <LockedFeature label="Coming Soon">
            <StatCard
              label="Daily Goal"
              value="$142 / $200"
              percentage={75}
              color="#f26722"
              subtext="Warning: High Traffic"
            />
          </LockedFeature>

          <LockedFeature label="Coming Soon">
            <StatCard
              label="Fuel vs Income"
              value="$35.50 Exp."
              percentage={25}
              color="#f26722"
              subtext="Warning: High Traffic"
            />
          </LockedFeature>
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
            {rides.map((ride) => (
              <LogItem
                key={ride.id}
                icon={() => <div className="font-black italic text-sm">D</div>}
                title="Successful Delivery"
                subtitle={new Date(ride.createdAt!).toLocaleString()}
                amount={`₱${Number(ride.payment).toFixed(2)}`}
              />
            ))}
          </div>
        </section>

        <LockedFeature label="Coming Soon">
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
        </LockedFeature>
      </main>

      <BottomNavBar session={session} />
    </>
  );
}
