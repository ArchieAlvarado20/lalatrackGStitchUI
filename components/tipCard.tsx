import { GiftIcon } from "lucide-react";

interface TipCardProps {
  amount: number;
  isLoading?: boolean;
}

export default function TipCard({ amount, isLoading }: TipCardProps) {
  return (
    <div className="w-full p-6 rounded-3xl bg-transparent border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#adaaaa] font-black">
          Today Tips
        </span>

        <GiftIcon
          className="text-[#59b602] shadow-[0_12px_40px_rgba(22,163,74,0.3)] bg-transparent"
          size={18}
        />
      </div>

      <div className="flex items-end gap-2">
        <h2 className="text-4xl font-black text-[#59b602] bg-transparent  tracking-tighter italic">
          {isLoading ? "₱0.00" : `₱${amount.toFixed(2)}`}
        </h2>

        <span className="text-sm text-white/40 mb-1 font-black">PHP</span>
      </div>

      <p className="text-[10px] mt-3 text-white/30 uppercase tracking-[0.2em] font-black">
        Tips received today
      </p>
    </div>
  );
}
