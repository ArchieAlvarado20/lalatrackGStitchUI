"use client";
import {
  Power,
  Fuel,
  ArrowRight,
  GiftIcon,
  LucideIcon,
  Utensils,
  Wallet,
  Wrench,
  Smartphone,
  MoreHorizontal,
} from "lucide-react";
import TopAppBar from "@/components/topAppBar";
import BottomNavBar from "@/components/bottomNavBar";
import LogItem from "@/components/logItem";
import StatCard from "@/components/statCard";
import { auth } from "@/lib/auth";
import { useState, useEffect } from "react";
import { getTodayRides, getTodayTip } from "@/lib/actions/logs-actions";
import { getTodayNetIncome } from "@/lib/actions/dashboard.action";
import LockedFeature from "@/components/lockedFeature";
import SkeletonCardMedium from "@/components/skeleton";
import {
  getTodayExpense,
  getTodayExpenseAmount,
} from "@/lib/actions/expense-actions";
import Loading from "@/components/loading";

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

type Expense = {
  id: number;
  userId: string;
  amount: number;
  category: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

export default function DashboardPage({ session }: { session: Session }) {
  const [rides, setRides] = useState<Ride[]>([]);
  const [tip, setTip] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [expenseAmount, setExpenseAmount] = useState<number>(0);
  const [expense, setExpense] = useState<Expense[]>([]);
  const [netIncome, setNetIncome] = useState<number>(0);

  const loadNetIncome = async () => {
    const result = await getTodayNetIncome(session.user.id);
    setNetIncome(result.net);
    setIncome(result.rides);
    setExpenseAmount(result.expense);
  };

  const loadTip = async () => {
    const result = await getTodayTip(session.user.id);
    setTip(result);
  };

  const loadLogs = async () => {
    const data = await getTodayRides(session.user.id);

    const formatted: Ride[] = data.slice(0, 3).map((r) => ({
      ...r,
      fare: Number(r.fare),
      payment: Number(r.payment),
      tip: Number(r.tip),
    }));

    setRides(formatted);
  };

  const categoryIcons: Record<string, LucideIcon> = {
    Gas: Fuel,
    Food: Utensils,
    Topup: Wallet,
    Maintenance: Wrench,
    Load: Smartphone,
    Others: MoreHorizontal,
  };

  const loadExpense = async () => {
    const data = await getTodayExpense(session.user.id);

    const formatted: Expense[] = data.slice(0, 3).map((r) => ({
      ...r,
      category: String(r.category),
      amount: Number(r.amount),
    }));

    setExpense(formatted);
  };

  useEffect(() => {
    const init = async () => {
      setIsLoading(true);

      await loadLogs();
      await loadTip();
      await loadExpense();
      await loadNetIncome();

      setIsLoading(false);
    };

    init();
  }, []);

  return (
    <>
      <TopAppBar session={session} />
      {isLoading ? (
        <Loading />
      ) : (
        <main className="px-6 pt-8 max-w-lg mx-auto pb-32">
          {/* Main Earnings Display */}
          {/* <SkeletonCard size="sm" />
        
        <SkeletonCard size="lg" /> */}
          <section className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#131313] border border-white/5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-black text-[#adaaaa] uppercase tracking-[0.2em]">
                Shift Active: 4h 12m
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#adaaaa] mb-2 font-black">
              Real-time Income(₱{Number(income)}) - Expenses ( ₱
              {Number(expenseAmount)})
            </p>
            <div className="flex items-end justify-center gap-2 mb-2">
              <h2 className="text-7xl font-black text-[#f26722] tracking-tighter italic">
                {isLoading ? "₱00.00" : `₱${netIncome.toFixed(2)}`}
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
                Recent Orders
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
                {[
                  // Rides
                  ...rides.map((ride) => ({
                    id: `ride-${ride.id}`,
                    type: "ride",
                    createdAt: ride.createdAt,
                    element: (
                      <div key={`ride-${ride.id}`}>
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

                        {ride.payment && (
                          <LogItem
                            icon={() => (
                              <div className="font-black italic text-sm">D</div>
                            )}
                            title="Payment Received"
                            subtitle={new Date(
                              ride.createdAt!,
                            ).toLocaleString()}
                            amount={`₱${Number(ride.payment).toFixed(2)}`}
                          />
                        )}

                        <div className="mb-3"></div>

                        {ride.tip != 0 && (
                          <LogItem
                            icon={GiftIcon}
                            title="Tip Received"
                            subtitle={new Date(
                              ride.createdAt!,
                            ).toLocaleString()}
                            amount={`₱${Number(ride.tip).toFixed(2)}`}
                            isTip
                          />
                        )}
                      </div>
                    ),
                  })),

                  // Expenses
                  ...expense.map((exp) => {
                    const Icon = categoryIcons[exp.category] || MoreHorizontal;

                    return {
                      id: `exp-${exp.id}`,
                      type: "expense",
                      createdAt: exp.createdAt,
                      element: (
                        <LogItem
                          key={`exp-${exp.id}`}
                          icon={Icon}
                          title={exp.category}
                          subtitle={
                            exp.createdAt
                              ? new Date(exp.createdAt).toLocaleString()
                              : "No date"
                          }
                          amount={`-₱${exp.amount.toFixed(2)}`}
                          isNegative
                        />
                      ),
                    };
                  }),
                ]
                  .sort(
                    (a, b) =>
                      new Date(b.createdAt!).getTime() -
                      new Date(a.createdAt!).getTime(),
                  )
                  .slice(0, 3)
                  .map((item) => item.element)}
              </div>
            )}

            <div className="space-y-3 mt-5"></div>
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
      )}

      <BottomNavBar session={session} />
    </>
  );
}
