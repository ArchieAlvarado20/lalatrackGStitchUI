import { ActionButton } from "../components/ActionButton";
import BottomNav from "../components/BottomNav";
import Head from "../components/Head";
import InputField from "../components/Input";

export default function Expenses() {
  return (
    <>
      <Head />
      <main className="px-4 pt-6 max-w-md mx-auto space-y-8 mb-12">
        {/* <!-- Large Numeric Input (Kinetic Cockpit Style) --> */}
        <section className="text-center space-y-2">
          <label className="font-label text-on-surface-variant label-md uppercase tracking-widest">
            Expense Amount
          </label>
          <InputField icon="$" placeholder="0.00" type="number" />
        </section>
        {/* <!-- Category Quick-Select Chips --> */}
        <section className="space-y-4">
          <h3 className="font-headline font-bold text-on-surface-variant text-sm px-1">
            Category
          </h3>
          <div className="flex flex-wrap gap-3">
            {/* <!-- Active Chip --> */}
            <button className="bg-surface-container-high text-[#ff9061] px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 neumorphic-outset active:scale-95 transition-all border border-[#ff9061]/20">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                local_gas_station
              </span>
              Gas
            </button>
            <button className="bg-surface-container-low text-on-surface-variant px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-surface-container-high transition-colors active:scale-95">
              <span className="material-symbols-outlined text-sm">
                restaurant
              </span>
              Food
            </button>
            <button className="bg-surface-container-low text-on-surface-variant px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-surface-container-high transition-colors active:scale-95">
              <span className="material-symbols-outlined text-sm">
                account_balance_wallet
              </span>
              Top-up
            </button>
            <button className="bg-surface-container-low text-on-surface-variant px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-surface-container-high transition-colors active:scale-95">
              <span className="material-symbols-outlined text-sm">build</span>
              Maintenance
            </button>
            <button className="bg-surface-container-low text-on-surface-variant px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-surface-container-high transition-colors active:scale-95">
              <span className="material-symbols-outlined text-sm">
                more_horiz
              </span>
              Others
            </button>
          </div>
        </section>
        {/* <!-- Bento Layout for Date/Time --> */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-2 group hover:bg-surface-container-high transition-all">
            <span className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">
              Date
            </span>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                calendar_today
              </span>
              <input className="bg-transparent border-none text-on-surface p-0 font-bold focus:ring-0 text-sm w-full" />
            </div>
          </div>
          <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-2 group hover:bg-surface-container-high transition-all">
            <span className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">
              Time
            </span>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                schedule
              </span>
              <input className="bg-transparent border-none text-on-surface p-0 font-bold focus:ring-0 text-sm w-full" />
            </div>
          </div>
        </section>
        {/* <!-- Optional Notes Area --> */}
        <section className="bg-surface-container-low p-4 rounded-xl space-y-2">
          <span className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">
            Notes (Optional)
          </span>
          <textarea
            className="bg-transparent border-none text-on-surface w-full p-0 font-medium focus:ring-0 text-sm resize-none placeholder:text-outline/40"
            placeholder="Add details about this expense..."
            rows="2"
          ></textarea>
        </section>
        {/* <!-- Receipt Upload (Cockpit Utility) --> */}
        <section className="flex items-center justify-between bg-surface-container p-4 rounded-xl border border-dashed border-outline-variant/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface-variant">
                receipt_long
              </span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-on-surface">
                Attach Receipt
              </h4>
              <p className="text-xs text-on-surface-variant">
                Proof of payment
              </p>
            </div>
          </div>
          <button className="bg-surface-container-highest p-2 rounded-lg active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[#ff9061]">
              add_a_photo
            </span>
          </button>
        </section>
      </main>
      <ActionButton label="Log Expenses" icon="arrow_forward" iconRight />
      <BottomNav />
    </>
  );
}
