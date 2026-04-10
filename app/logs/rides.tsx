"use client";
import { useState } from "react";
import { DollarSign, ArrowRight, Fuel, GiftIcon } from "lucide-react";
import TopAppBar from "@/components/topAppBar";
import BottomNavBar from "@/components/bottomNavBar";
import { ActionButton } from "@/components/actionButton";
import LogItem from "@/components/logItem";
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

export default function IncomeLogPage({ session }: { session: Session }) {
  const [fare, setFare] = useState("");
  const [payment, setPayment] = useState("");

  // Tip Calculation Logic: Payment Received - Fare Amount = Tip
  const tip = (parseFloat(payment) || 0) - (parseFloat(fare) || 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging income:", { fare, payment, tip });
    // Add backend integration here
  };

  return (
    <>
      <TopAppBar session={session} />

      <main className="px-6 py-6 max-w-md mx-auto">
        {/* Session Summary Card */}
        <div className="bg-[#131313] p-8 rounded-[2rem] border border-white/5 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#adaaaa] mb-2">
              Current Session
            </p>
            <h2 className="text-5xl font-black text-[#f26722] tracking-tighter italic">
              $142.50
            </h2>
          </div>
          <div className="absolute right-[-20px] top-[-20px] opacity-5">
            <DollarSign size={160} />
          </div>
        </div>

        {/* Date/Time Row */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-[#131313] p-5 rounded-2xl border border-white/5">
            <p className="text-[8px] font-black uppercase text-[#adaaaa] tracking-widest mb-2">
              Date
            </p>
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="text-[#f26722] opacity-60">📅</span>
              Oct 24, 2023
            </div>
          </div>
          <div className="bg-[#131313] p-5 rounded-2xl border border-white/5">
            <p className="text-[8px] font-black uppercase text-[#adaaaa] tracking-widest mb-2">
              Time
            </p>
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="text-[#f26722] opacity-60">🕒</span>
              14:30 PM
            </div>
          </div>
        </div>

        {/* Input Form Section */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-[#131313] p-6 rounded-[2rem] border border-white/5 space-y-8">
            {/* Fare Amount */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#adaaaa] ml-1">
                  Fare Amount
                </label>
                <span className="text-[10px] font-bold text-[#adaaaa]/40 italic">
                  Estimated: $12.00
                </span>
              </div>
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#f26722] font-black text-2xl">
                  $
                </div>
                <input
                  type="number"
                  value={fare}
                  onChange={(e) => setFare(e.target.value)}
                  className="w-full bg-[#0e0e0e] border border-white/5 rounded-2xl p-3 pl-12 text-3xl font-black text-white outline-none focus:border-[#f26722]/40 transition-all placeholder:text-neutral-800"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Payment Received */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#adaaaa] block ml-1">
                Total Payment Received
              </label>
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#f26722] font-black text-2xl">
                  $
                </div>
                <input
                  type="number"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  className="w-full bg-[#0e0e0e] border border-white/5 rounded-2xl p-3 pl-12 text-3xl font-black text-white outline-none focus:border-[#f26722]/40 transition-all placeholder:text-neutral-800"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Calculated Tip Display */}
            <div className="bg-[#0e0e0e] p-3 rounded-2xl border border-white/5 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#131313] rounded-xl flex items-center justify-center text-[#f26722] border border-white/5">
                  <GiftIcon size={24} />
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase text-[#adaaaa] tracking-widest">
                    Calculated Tip
                  </p>
                  <p className="text-xs font-bold text-white group-hover:text-[#f26722] transition-colors">
                    Auto-calculated
                  </p>
                </div>
              </div>
              <div
                className={`text-2xl font-black italic tracking-tighter ${tip > 0 ? "text-[#f26722]" : "text-neutral-700"}`}
              >
                +${tip.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Log Button */}
          <ActionButton
            type="submit"
            label="Log Income"
            leftIcon={
              <DollarSign size={28} strokeWidth={3} className="animate-pulse" />
            }
            rightIcon={
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            }
          />
        </form>
        <div className="space-y-3 mt-5  ">
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
      </main>

      <BottomNavBar session={session} />
    </>
  );
}
