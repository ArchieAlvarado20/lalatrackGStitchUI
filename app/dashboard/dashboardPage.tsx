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
import { useState, useEffect, useRef } from "react";
import { getTodayRides, getTodayTip } from "@/lib/actions/logs-actions";
import { getTodayNetIncome } from "@/lib/actions/dashboard.action";
import LockedFeature from "@/components/lockedFeature";
import SkeletonCardMedium from "@/components/skeleton";
import {
  getTodayExpense,
  getTodayExpenseAmount,
} from "@/lib/actions/expense-actions";
import Loading from "@/components/loading";
import toast from "react-hot-toast";
import { activeShift, endShift, startShift } from "@/lib/actions/shift.actions";
import { ActionButton } from "@/components/actionButton";
import TipCard from "@/components/tipCard";

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
  const [income, setIncome] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [expenseAmount, setExpenseAmount] = useState<number>(0);
  const [expense, setExpense] = useState<Expense[]>([]);
  const [netIncome, setNetIncome] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [activeShiftTime, setActiveShiftTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const loadNetIncome = async () => {
    const result = await getTodayNetIncome(session.user.id);
    setNetIncome(result.net);
    setIncome(result.rides);
    setExpenseAmount(result.expense);
  };

  const loadTip = async () => {
    const tip = await getTodayTip(session.user.id);
    setTip(tip);
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

  const loadActiveShift = async () => {
    const result = await activeShift({
      userId: session.user.id,
    });

    const start = result?.startTime;

    // clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (start) {
      intervalRef.current = setInterval(() => {
        const time = Date.now() - new Date(start).getTime();
        setActiveShiftTime(time);
        console.log(time);
      }, 1000);
    }
  };

  const hours = Math.floor(activeShiftTime / (1000 * 60 * 60));
  const minutes = Math.floor((activeShiftTime / (1000 * 60)) % 60);
  const seconds = Math.floor((activeShiftTime / 1000) % 60);

  useEffect(() => {
    const init = async () => {
      setIsLoading(true);

      await Promise.allSettled([
        loadLogs(),
        loadExpense(),
        loadNetIncome(),
        loadActiveShift(),
        loadTip(),
      ]);
      setActiveShiftTime(activeShiftTime);
      setIsLoading(false);
    };

    init();
  }, []);

  const handleStartShift = async () => {
    try {
      await startShift({
        userId: session.user.id,
      });
      await loadActiveShift();
      toast.success("Shift started!");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to start shift";
      toast.error(message);
    }
  };

  const handleEndShift = async () => {
    try {
      await endShift({
        userId: session.user.id,
      });

      // STOP the timer
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      setActiveShiftTime(0); // force reset

      toast.success("Shift ended!");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to end shift";
      toast.error(message);
    }
  };
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
            {activeShiftTime > 0 ? (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#131313] border border-white/5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>

                <span className="text-[10px] font-black text-[#adaaaa] uppercase tracking-[0.2em]">
                  Shift Active:{`${hours > 0 ? `${hours}h ` : ""}`}{" "}
                  {`${minutes > 0 ? `${minutes}m ` : ""}${seconds}s`}
                </span>
              </div>
            ) : (
              ""
            )}

            <p className="text-[10px] uppercase tracking-[0.4em] text-[#adaaaa] mb-2 font-black">
              Real-time Daily Profit Monitoring
            </p>
            <div className="flex items-end justify-center gap-2 mb-2">
              <h2 className="text-7xl font-black text-[#f26722] tracking-tighter italic">
                {isLoading ? "₱00.00" : `₱${netIncome.toFixed(2)}`}
              </h2>
              <span className="text-xl font-black text-white/40 mb-3 tracking-tighter">
                PHP
              </span>
            </div>
            <div className="flex justify-center text-center text-[10px] uppercase tracking-[0.4em] text-[#adaaaa] mb-2 font-black">
              income(<p className="text-[#f26722]">₱{Number(income)}</p>) -
              expenses(
              <p className="text-[#f26722]">₱{Number(expenseAmount)}</p>)
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
          <div className="my-3">
            <TipCard amount={Number(tip)} isLoading={isLoading} />
          </div>

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
          {/* <LockedFeature label="Coming Soon"> */}
          {/* Action Button */}
          <ActionButton
            onClick={activeShiftTime > 0 ? handleEndShift : handleStartShift}
            label={activeShiftTime > 0 ? "END SHIFT" : "START SHIFT"}
            leftIcon={
              <Power size={28} strokeWidth={3} className="animate-pulse" />
            }
            rightIcon={
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            }
            className={
              activeShiftTime > 0
                ? "bg-[#59b602] shadow-[0_12px_40px_rgba(22,163,74,0.3)]"
                : "bg-[#f26722] shadow-[0_12px_40px_rgba(242,103,34,0.3)]"
            }
          />

          {/* </LockedFeature> */}
        </main>
      )}

      <BottomNavBar session={session} />
    </>
  );
}
