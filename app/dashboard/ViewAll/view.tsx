"use client";
import { useState } from "react";
import {
  TrendingUp,
  Fuel,
  Wrench,
  Package,
  DollarSign,
  ReceiptText,
} from "lucide-react";
import TopAppBar from "@/components/topAppBar";
import BottomNavBar from "@/components/bottomNavBar";
import LogItem from "@/components/logItem";
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

export default function TransactionHistory({ session }: { session: Session }) {
  const [filter, setFilter] = useState("income"); // income, expenses

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white font-['Inter'] selection:bg-[#f26722] pb-32">
      <TopAppBar session={session} />

      <main className="px-6 pt-6 max-w-lg mx-auto">
        {/* Toggle Switch */}
        <div className="flex bg-[#131313] p-1.5 rounded-2xl border border-white/5 mb-8">
          <button
            onClick={() => setFilter("income")}
            className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.3em] rounded-xl transition-all ${filter === "income" ? "bg-[#f26722] text-white shadow-[0_4px_20px_rgba(242,103,34,0.3)]" : "text-[#adaaaa] hover:text-white"}`}
          >
            Income
          </button>
          <button
            onClick={() => setFilter("expenses")}
            className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.3em] rounded-xl transition-all ${filter === "expenses" ? "bg-[#f26722] text-white border border-white/5" : "text-[#adaaaa] hover:text-white"}`}
          >
            Expenses
          </button>
        </div>

        {/* Session Summary Card */}
        <div className="bg-[#131313] p-8 rounded-[2rem] border border-white/5 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#adaaaa] mb-2">
              Total {filter === "income" ? "Income" : "Expenses"}
            </p>
            <h2 className="text-5xl font-black text-[#f26722] tracking-tighter italic">
              $142.50
            </h2>
          </div>
          <div className="absolute right-[-20px] top-[-20px] opacity-5">
            {filter === "income" ? (
              <DollarSign size={160} />
            ) : (
              <ReceiptText size={160} />
            )}
          </div>
        </div>

        {/* Transaction Sections */}
        <div className="space-y-10">
          {/* Today */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#adaaaa]">
                Today
              </span>
              <div className="h-px flex-1 bg-white/5"></div>
            </div>
            <div className="space-y-3">
              <LogItem
                icon={Package}
                title="Delivery"
                subtitle="Shell Station • 2:14 PM"
                amount="$18.50"
                isNegative
              />
              <LogItem
                icon={Fuel}
                title="Maintenance"
                subtitle="Shell Station • 2:14 PM"
                amount="$18.50"
                isNegative
              />
              <LogItem
                icon={Package}
                title="Delivery"
                subtitle="Shell Station • 2:14 PM"
                amount="$18.50"
                isNegative
              />
            </div>
          </section>

          {/* Yesterday */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#adaaaa]">
                Yesterday
              </span>
              <div className="h-px flex-1 bg-white/5"></div>
            </div>
            <div className="space-y-3">
              <LogItem
                icon={TrendingUp}
                title="Maintenance"
                subtitle="Shell Station • 2:14 PM"
                amount="$18.50"
                isNegative
              />
              <LogItem
                icon={Wrench}
                title="Maintenance"
                subtitle="Shell Station • 2:14 PM"
                amount="$18.50"
                isNegative
              />
            </div>
          </section>
        </div>
      </main>

      <BottomNavBar session={session} />
    </div>
  );
}
