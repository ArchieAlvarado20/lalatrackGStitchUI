"use client";
import { useState, useEffect } from "react";
import { DollarSign, ArrowRight, Fuel, GiftIcon } from "lucide-react";
import TopAppBar from "@/components/topAppBar";
import BottomNavBar from "@/components/bottomNavBar";
import { ActionButton } from "@/components/actionButton";
import LogItem from "@/components/logItem";
import { auth } from "@/lib/auth";
import {
  createRide,
  getTodayIncome,
  getTodayRides,
} from "@/lib/actions/logs-actions";
import toast from "react-hot-toast";
import DateTime from "@/components/dateTime";
import SkeletonCardMedium from "@/components/skeleton";

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

type Session = typeof auth.$Infer.Session;

export default function IncomeLogPage({ session }: { session: Session }) {
  const [fare, setFare] = useState("");
  const [payment, setPayment] = useState("");
  const [income, setIncome] = useState<number | "*****">("*****");
  const [isLoading, setIsLoading] = useState(false);
  const [rides, setRides] = useState<Ride[]>([]);

  const tip = (parseFloat(payment) || 0) - (parseFloat(fare) || 0);

  const load = async () => {
    const result = await getTodayIncome(session.user.id);
    setIncome(result);
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
      await Promise.all([load(), loadLogs()]);
    };

    init();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fare || !payment) {
      toast.error("Please fill in all fields");
      return;
    }

    if (Number(fare) <= 0 || Number(payment) <= 0) {
      toast.error("Values must be greater than 0");
      return;
    }

    if (Number(payment) < Number(fare)) {
      toast.error("Payment cannot be less than fare");
      return;
    }

    try {
      setIsLoading(true);
      await createRide({
        fare: Number(fare),
        payment: Number(payment),
        tip: Number(tip),
        userId: session.user.id,
      });

      setFare("");
      setPayment("");

      toast.success("Ride created successfully!");
      setIsLoading(false);

      // 🔥 refresh data after submit
      await Promise.all([load(), loadLogs()]);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <TopAppBar session={session} />

      <main className="px-6 py-6 max-w-md mx-auto pb-32">
        {/* Session Summary Card */}
        <div className="bg-[#131313] p-8 rounded-[2rem] border border-white/5 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#adaaaa] mb-2">
              Total Payment Recieved
            </p>
            <h2 className="text-5xl font-black text-[#f26722] tracking-tighter italic">
              ₱{typeof income === "number" ? income.toFixed(2) : income}
            </h2>
          </div>
          <div className="absolute right-[-20px] top-[-20px] opacity-5">
            <DollarSign size={160} />
          </div>
        </div>

        {/* Date/Time Row */}
        <DateTime />

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
                  ₱
                </div>
                <input
                  type="number"
                  value={fare}
                  name="fare"
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
                  ₱
                </div>
                <input
                  type="number"
                  name="payment"
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
                  <p className="text-xs font-bold text-[#f26722] transition-colors">
                    Auto-calculated
                  </p>
                </div>
              </div>
              <div
                className={`text-2xl font-black italic tracking-tighter ${tip > 0 ? "text-[#f26722]" : "text-neutral-700"}`}
              >
                +₱{tip.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Log Button */}
          <ActionButton
            type="submit"
            disabled={isLoading}
            label={isLoading ? "Processing" : "Log Income"}
            leftIcon={
              <DollarSign size={28} strokeWidth={3} className="animate-pulse" />
            }
            rightIcon={
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            }
          />
        </form>

        {/* Recent Logs Section */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#adaaaa]">
              Today
            </span>
            <div className="h-px flex-1 bg-white/5"></div>

            <button className="text-[10px] font-black text-[#f26722] uppercase tracking-[0.2em] hover:underline underline-offset-4">
              <a href="dashboard/ViewAll">View All</a>
            </button>
          </div>
          {isLoading ? (
            <>
              <SkeletonCardMedium />
              <SkeletonCardMedium />
              <SkeletonCardMedium />
            </>
          ) : (
            <div className="space-y-3">
              {rides.map((ride) => (
                <div key={ride.id}>
                  {/* Fare */}
                  <LogItem
                    icon={() => (
                      <div className="font-black italic text-sm">₱</div>
                    )}
                    title="Actual Fare"
                    subtitle={new Date(ride.createdAt!).toLocaleString()}
                    amount={`₱${Number(ride.fare).toFixed(2)}`}
                    isFare
                  />
                  <div className="mb-3"></div>
                  {/* Paymenr */}
                  {ride.payment && (
                    <LogItem
                      icon={() => (
                        <div className="font-black italic text-sm">D</div>
                      )}
                      title="Payment Received"
                      subtitle={new Date(ride.createdAt!).toLocaleString()}
                      amount={`₱${Number(ride.payment).toFixed(2)}`}
                    />
                  )}
                  <div className="mb-3"></div>
                  {/* Tip */}
                  {ride.tip != 0 && (
                    <LogItem
                      icon={GiftIcon}
                      title="Tip Received"
                      subtitle={new Date(ride.createdAt!).toLocaleString()}
                      amount={`₱${Number(ride.tip).toFixed(2)}`}
                      isTip
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <BottomNavBar session={session} />
    </>
  );
}
