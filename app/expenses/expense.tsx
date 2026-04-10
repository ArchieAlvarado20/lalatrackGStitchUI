"use client";
import { useState, useTransition, useEffect } from "react";
import {
  Fuel,
  Utensils,
  Wallet,
  Wrench,
  Smartphone,
  MoreHorizontal,
  ReceiptText,
  Camera,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import BottomNavBar from "@/components/bottomNavBar";
import TopAppBar from "@/components/topAppBar";
import LogItem from "@/components/logItem";
import { ActionButton } from "@/components/actionButton";
import { auth } from "@/lib/auth";
import {
  createExpense,
  getTodayExpense,
  getTodayExpenseAmount,
} from "@/lib/actions/expense-actions";
import toast from "react-hot-toast";

type Session = typeof auth.$Infer.Session;

type Expense = {
  id: number;
  userId: string;
  amount: number;
  category: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

export default function ExpenseLogPage({ session }: { session: Session }) {
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Gas");
  const [otherCategory, setOtherCategory] = useState("");
  const [isPending, startTransition] = useTransition();
  const [expenseAmount, setExpenseAmount] = useState<number>(0);
  const [expense, setExpense] = useState<Expense[]>([]);

  const categories = [
    { id: "Gas", icon: Fuel },
    { id: "Food", icon: Utensils },
    { id: "Topup", icon: Wallet },
    { id: "Maintenance", icon: Wrench },
    { id: "Load", icon: Smartphone },
    { id: "Others", icon: MoreHorizontal },
  ];

  const categoryIcons: Record<string, LucideIcon> = {
    Gas: Fuel,
    Food: Utensils,
    Topup: Wallet,
    Maintenance: Wrench,
    Load: Smartphone,
    Others: MoreHorizontal,
  };

  const loadExpenseAmount = async () => {
    const result = await getTodayExpenseAmount(session.user.id);
    setExpenseAmount(result);
  };

  const loadExpense = async () => {
    const data = await getTodayExpense(session.user.id);

    const formatted: Expense[] = data.map((r) => ({
      ...r,
      category: String(r.category),
      amount: Number(r.amount),
    }));

    setExpense(formatted);
  };

  useEffect(() => {
    const init = async () => {
      await Promise.all([loadExpenseAmount(), loadExpense()]);
    };

    init();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const finalCategory =
      selectedCategory === "Others" ? otherCategory : selectedCategory;

    if (!amount) {
      toast.error("Please fill out the amount");
      return;
    }

    if (Number(amount) <= 0) {
      toast.error("Values must be greater than 0");
      return;
    }

    startTransition(async () => {
      try {
        await createExpense({
          amount: Number(amount),
          category: finalCategory,
          userId: session.user.id,
        });

        setAmount("");
        setOtherCategory("");
        setSelectedCategory("Gas");
        loadExpenseAmount();
        loadExpense();
        toast.success("Expense added successfully!");
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong");
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white font-['Inter'] selection:bg-[#f26722] pb-24">
      <TopAppBar session={session} />

      <main className="px-6 py-6 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Session Summary Card */}
          <div className="bg-[#131313] p-8 rounded-[2rem] border border-white/5 mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#adaaaa] mb-2">
                Total Expenses
              </p>
              <h2 className="text-5xl font-black text-[#f26722] tracking-tighter italic">
                ₱{expenseAmount}
              </h2>
            </div>
            <div className="absolute right-[-20px] top-[-20px] opacity-5 rotate-12">
              <ReceiptText size={160} />
            </div>
          </div>

          {/* Date & Note Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#131313] p-5 rounded-2xl border border-white/5">
              <p className="text-[8px] font-black uppercase text-[#adaaaa] tracking-widest mb-2">
                Date
              </p>
              <div className="flex items-center gap-2 text-sm font-bold">
                <span className="text-[#f26722] opacity-60">📅</span>
                Oct 27, 2023
              </div>
            </div>
            <div className="bg-[#131313] p-5 rounded-2xl border border-white/5 flex flex-col items-center justify-center group">
              <Camera
                size={20}
                className="text-[#f26722] mb-1 group-hover:scale-110 transition-transform"
              />
              <p className="text-[8px] font-black uppercase tracking-widest text-[#adaaaa]">
                Attach Receipt
              </p>
            </div>
          </div>

          <div className="bg-[#131313] p-6 rounded-[2rem] border border-white/5 space-y-8">
            {/* Category Section */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#adaaaa] ml-2">
                Category
              </p>
              <div className="grid grid-cols-3 gap-3">
                {categories.map((cat) => (
                  <button
                    name="category"
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all ${
                      selectedCategory === cat.id
                        ? "bg-[#20201f] border-[#f26722] text-[#f26722] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
                        : "bg-[#131313] border-white/5 text-[#adaaaa] hover:bg-[#1a1a1a]"
                    }`}
                  >
                    <cat.icon size={24} className="mb-2" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {cat.id}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            {/* Expense Input*/}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#adaaaa] block ml-1">
                Total Expense
              </label>
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#f26722] font-black text-2xl">
                  $
                </div>
                <input
                  name="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-[#0e0e0e] border border-white/5 rounded-2xl p-3 pl-12 text-3xl font-black text-white outline-none focus:border-[#f26722]/40 transition-all placeholder:text-neutral-800"
                  placeholder="0.00"
                />
              </div>
            </div>
            {/* Dynamic "Others" Input */}
            {selectedCategory === "Others" && (
              <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#adaaaa] ml-4">
                  Specify Category
                </label>
                <input
                  type="text"
                  value={otherCategory}
                  onChange={(e) =>
                    setOtherCategory(
                      e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1),
                    )
                  }
                  className="w-full bg-[#0c0c0c] border border-white/5 rounded-2xl p-5 text-white outline-none focus:border-[#f26722]/50 transition-colors placeholder:text-neutral-700 font-bold"
                  placeholder="e.g. Parking, Toll"
                  required={selectedCategory === "Others"}
                />
              </div>
            )}
          </div>

          {/* Log Button */}
          <ActionButton
            type="submit"
            label="Log Expense"
            disabled={isPending}
            leftIcon={
              <ReceiptText
                size={28}
                strokeWidth={3}
                className="animate-pulse"
              />
            }
            rightIcon={
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            }
          />
        </form>
        <div className="space-y-3 mt-5  ">
          {expense.map((expenses) => {
            const Icon = categoryIcons[expenses.category] || MoreHorizontal;

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
          })}
        </div>
      </main>

      <BottomNavBar session={session} />
    </div>
  );
}
