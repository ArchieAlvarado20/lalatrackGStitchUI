import { ActionButton } from "../components/ActionButton";
import BottomNav from "../components/BottomNav";
import Head from "../components/Head";

export default function Dashboard() {
  return (
    <>
      {" "}
      <Head />
      <main className="px-6 pt-8 max-w-lg mx-auto w-full">
        {/* <!-- Real-time Net Profit Summary --> */}
        <section className="text-center mb-12">
          <p className="text-on-surface-variant font-bold text-[10px] uppercase tracking-widest mb-2">
            Real-time Net Profit
          </p>
          <div className="inline-flex items-baseline gap-1">
            <span className="text-primary-fixed-dim font-black text-6xl tracking-tighter">
              $142.85
            </span>
            <span className="text-primary font-bold text-xl">USD</span>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="bg-surface-container-high px-4 py-1.5 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">
                Shift Active: 4h 12m
              </span>
            </div>
          </div>
        </section>
        {/* <!-- Kinetic Progress Rings Bento --> */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {/* <!-- Goal Tracking --> */}
          <div className="bg-surface-container-low rounded-xl p-5 flex flex-col items-center justify-between min-h-[180px]">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-surface-container-highest"
                  cx="48"
                  cy="48"
                  fill="transparent"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                ></circle>
                <circle
                  className="text-secondary"
                  cx="48"
                  cy="48"
                  fill="transparent"
                  r="40"
                  stroke="currentColor"
                  strokeDasharray="251.2"
                  strokeDashoffset="62.8"
                  strokeWidth="8"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-lg font-black text-on-surface">75%</span>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                Daily Goal
              </p>
              <p className="text-on-surface text-sm font-bold">$142 / $200</p>
            </div>
          </div>
          {/* <!-- Expense Ratio --> */}
          <div className="bg-surface-container-low rounded-xl p-5 flex flex-col items-center justify-between min-h-[180px]">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-surface-container-highest"
                  cx="48"
                  cy="48"
                  fill="transparent"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                ></circle>
                <circle
                  className="text-primary-fixed"
                  cx="48"
                  cy="48"
                  fill="transparent"
                  r="40"
                  stroke="currentColor"
                  strokeDasharray="251.2"
                  strokeDashoffset="188.4"
                  strokeWidth="8"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-lg font-black text-on-surface">25%</span>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                Fuel vs Income
              </p>
              <p className="text-on-surface text-sm font-bold">$35.50 Exp.</p>
            </div>
          </div>
        </div>
        {/* <!-- Recent Logs Teaser --> */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-on-surface font-black text-lg tracking-tight uppercase">
              Recent Logs
            </h3>
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              View All
            </span>
          </div>
          <div className="space-y-3">
            <div className="bg-surface-container rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-fixed">
                  local_gas_station
                </span>
              </div>
              <div className="flex-1">
                <p className="text-on-surface font-bold text-sm">Fuel Refill</p>
                <p className="text-on-surface-variant text-xs font-medium">
                  Shell Station • 2:14 PM
                </p>
              </div>
              <div className="text-right">
                <p className="text-error font-black text-sm">-$18.50</p>
              </div>
            </div>
            <div className="bg-surface-container rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">
                  sports_motorsports
                </span>
              </div>
              <div className="flex-1">
                <p className="text-on-surface font-bold text-sm">
                  Large Delivery Tip
                </p>
                <p className="text-on-surface-variant text-xs font-medium">
                  Order #8821 • 1:45 PM
                </p>
              </div>
              <div className="text-right">
                <p className="text-secondary font-black text-sm">+$12.00</p>
              </div>
            </div>
            <div className="bg-surface-container rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">
                  sports_motorsports
                </span>
              </div>
              <div className="flex-1">
                <p className="text-on-surface font-bold text-sm">
                  Large Delivery Tip
                </p>
                <p className="text-on-surface-variant text-xs font-medium">
                  Order #8821 • 1:45 PM
                </p>
              </div>
              <div className="text-right">
                <p className="text-secondary font-black text-sm">+$12.00</p>
              </div>
            </div>
            <div className="bg-surface-container rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">
                  sports_motorsports
                </span>
              </div>
              <div className="flex-1">
                <p className="text-on-surface font-bold text-sm">
                  Large Delivery Tip
                </p>
                <p className="text-on-surface-variant text-xs font-medium">
                  Order #8821 • 1:45 PM
                </p>
              </div>
              <div className="text-right">
                <p className="text-secondary font-black text-sm">+$12.00</p>
              </div>
            </div>
          </div>
        </section>
        <ActionButton label="Start Shift" icon="power_settings_new" />
      </main>
      <BottomNav />
    </>
  );
}
