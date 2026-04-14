"use client";

import {
  Fuel,
  Utensils,
  Wallet,
  Wrench,
  Smartphone,
  MoreHorizontal,
  ReceiptText,
  LucideIcon,
  DollarSign,
  GiftIcon,
} from "lucide-react";
import TopAppBar from "@/components/topAppBar";
import BottomNavBar from "@/components/bottomNavBar";
import LogItem from "@/components/logItem";
import { auth } from "@/lib/auth";
import { useState, useEffect } from "react";
import {
  createRide,
  getRides,
  getRideTotal,
  getTodayIncome,
  getTodayRides,
} from "@/lib/actions/logs-actions";

import {
  getExpenses,
  getExpenseTotal,
  getTodayExpense,
} from "@/lib/actions/expense-actions";
import SkeletonCardMedium from "@/components/skeleton";
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

export default function TransactionHistory({ session }: { session: Session }) {
  const [filter, setFilter] = useState("income"); // income, expenses
  const [rides, setRides] = useState<Ride[]>([]);
  const [totalIncome, setTotalIncome] = useState<number | "00.00">("00.00");
  const [expense, setExpense] = useState<Expense[]>([]);
  const [expenseAmount, setExpenseAmount] = useState<number | "00.00">("00.00");
  const [isLoading, setIsLoading] = useState(true);

  const categoryIcons: Record<string, LucideIcon> = {
    Gas: Fuel,
    Food: Utensils,
    Topup: Wallet,
    Maintenance: Wrench,
    Load: Smartphone,
    Others: MoreHorizontal,
  };

  const loadTotalIncome = async () => {
    const result = await getRideTotal(session.user.id);
    setTotalIncome(result);
  };

  const loadLogs = async () => {
    const data = await getRides(session.user.id);

    const formatted: Ride[] = data.map((r) => ({
      ...r,
      fare: Number(r.fare),
      payment: Number(r.payment),
      tip: Number(r.tip),
    }));

    setRides(formatted);
    setIsLoading(false);
  };

  const loadExpenseAmount = async () => {
    const result = await getExpenseTotal(session.user.id);
    setExpenseAmount(result);
  };

  const loadExpense = async () => {
    const data = await getExpenses(session.user.id);

    const formatted: Expense[] = data.map((r) => ({
      ...r,
      category: String(r.category),
      amount: Number(r.amount),
    }));

    setExpense(formatted);
  };

  useEffect(() => {
    const init = async () => {
      await Promise.all([
        loadLogs(),
        loadTotalIncome(),
        loadExpense(),
        loadExpenseAmount(),
      ]);
    };

    init();
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white font-['Inter'] selection:bg-[#f26722] pb-32">
      <TopAppBar session={session} />
      {isLoading ? (
        <Loading />
      ) : (
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
                ₱ {filter === "income" ? `${totalIncome}` : `${expenseAmount}`}
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
              {isLoading ? (
                <>
                  <SkeletonCardMedium />
                  <SkeletonCardMedium />
                  <SkeletonCardMedium />
                  <SkeletonCardMedium />
                  <SkeletonCardMedium />
                </>
              ) : (
                <div className="space-y-3">
                  {filter === "income" ? (
                    <div className="space-y-3">
                      {rides.map((ride) => (
                        <div key={ride.id}>
                          {/* Fare */}
                          <LogItem
                            icon={() => (
                              <div className="font-black italic text-sm">₱</div>
                            )}
                            title="Actual Fare"
                            subtitle={new Date(
                              ride.createdAt!,
                            ).toLocaleString()}
                            amount={`₱${Number(ride.fare).toFixed(2)}`}
                            isFare
                          />
                          <div className="mb-3"></div>
                          {/* Paymenr */}
                          {ride.payment && (
                            <LogItem
                              icon={() => (
                                <div className="font-black italic text-sm">
                                  D
                                </div>
                              )}
                              title="Payment Received"
                              subtitle={new Date(
                                ride.createdAt!,
                              ).toLocaleString()}
                              amount={`₱${Number(ride.payment).toFixed(2)}`}
                            />
                          )}
                          <div className="mb-3"></div>
                          {/* Tip */}
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
                      ))}
                    </div>
                  ) : (
                    expense.map((expenses) => {
                      const Icon =
                        categoryIcons[expenses.category] || MoreHorizontal;

                      return (
                        <LogItem
                          key={expenses.id}
                          icon={Icon}
                          title={expenses.category}
                          subtitle={
                            expenses.createdAt
                              ? new Date(expenses.createdAt).toLocaleString()
                              : "No date"
                          }
                          amount={`-₱${expenses.amount.toFixed(2)}`}
                          isNegative
                        />
                      );
                    })
                  )}
                </div>
              )}
            </section>

            {/* Yesterday */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#adaaaa]">
                  Yesterday
                </span>
                <div className="h-px flex-1 bg-white/5"></div>
              </div>
              <div className="space-y-3"></div>
            </section>
          </div>
        </main>
      )}

      <BottomNavBar session={session} />
    </div>
  );
}
