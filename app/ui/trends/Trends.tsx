import BottomNav from "../components/BottomNav";
import Head from "../components/Head";

export default function Trends() {
  return (
    <>
      {" "}
      <Head />
      <main className="px-4 pt-6 max-w-xl mx-auto space-y-8">
        {/* <!-- Time Range Selector --> */}
        <div className="flex p-1.5 bg-surface-container-lowest rounded-2xl w-full max-w-sm mx-auto neumorphic-inset">
          <button className="flex-1 py-2 text-sm font-label font-medium rounded-xl text-on-surface-variant hover:text-white transition-colors">
            Week
          </button>
          <button className="flex-1 py-2 text-sm font-label font-bold rounded-xl bg-surface-container-high text-primary neumorphic-outset">
            Month
          </button>
          <button className="flex-1 py-2 text-sm font-label font-medium rounded-xl text-on-surface-variant hover:text-white transition-colors">
            Year
          </button>
        </div>
        {/* <!-- Hero: Circular Progress & Key Metric --> */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative w-48 h-48">
              {/* <!-- Circular Gauge --> */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  className="text-surface-container-highest"
                  cx="50"
                  cy="50"
                  fill="none"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="8"
                ></circle>
                <circle
                  className="text-primary"
                  cx="50"
                  cy="50"
                  fill="none"
                  r="45"
                  stroke="currentColor"
                  strokeDasharray="282.7"
                  strokeDashoffset="70.6"
                  strokeLinecap="round"
                  strokeWidth="8"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-on-surface tracking-tighter">
                  75%
                </span>
                <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                  Monthly Goal
                </span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-on-surface-variant text-sm">
                You are <span className="text-primary font-bold">$1,250</span>{" "}
                away from your monthly target.
              </p>
            </div>
          </div>
          {/* <!-- Earning Stats Bento --> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-high rounded-3xl p-6 flex flex-col justify-between neumorphic-outset">
              <div className="w-10 h-10 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary">
                <span
                  className="material-symbols-outlined"
                  data-icon="payments"
                >
                  payments
                </span>
              </div>
              <div>
                <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block mb-1">
                  Avg Daily Net
                </span>
                <h3 className="text-2xl font-bold text-on-surface">$142.50</h3>
                <span className="text-xs text-secondary font-medium flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="trending_up"
                  >
                    trending_up
                  </span>
                  +12%
                </span>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-3xl p-6 flex flex-col justify-between neumorphic-outset">
              <div className="w-10 h-10 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary">
                <span
                  className="material-symbols-outlined"
                  data-icon="local_gas_station"
                >
                  local_gas_station
                </span>
              </div>
              <div>
                <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block mb-1">
                  Fuel Efficiency
                </span>
                <h3 className="text-2xl font-bold text-on-surface">
                  32.4
                  <span className="text-sm font-normal text-on-surface-variant ml-1">
                    km/l
                  </span>
                </h3>
                <span className="text-xs text-secondary font-medium flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="trending_up"
                  >
                    trending_up
                  </span>
                  Better
                </span>
              </div>
            </div>
            <div className="col-span-2 bg-surface-container-high rounded-3xl p-6 flex items-center justify-between neumorphic-outset">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span
                    className="material-symbols-outlined"
                    data-icon="schedule"
                  >
                    schedule
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block">
                    Peak Performance
                  </span>
                  <h3 className="text-xl font-bold text-on-surface">
                    11 AM - 1 PM
                  </h3>
                </div>
              </div>
              <div className="text-right">
                <span className="text-secondary font-bold">$42/hr</span>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">
                  Avg earnings
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Weekly Earnings Visualization --> */}
        <section className="bg-surface-container-low rounded-3xl p-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-on-surface tracking-tight">
                Weekly Earnings
              </h2>
              <p className="text-on-surface-variant text-sm">
                Last 7 days performance
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-primary tracking-tighter">
                $984.12
              </p>
              <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                Total This Week
              </p>
            </div>
          </div>
          {/* <!-- Kinetic Bar Chart --> */}
          <div className="flex items-end justify-between h-48 gap-2 px-2">
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-surface-container-highest rounded-t-xl relative group cursor-pointer"
                style={{ height: "60%" }}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>
              </div>
              <span className="text-[10px] font-label uppercase text-on-surface-variant">
                Mon
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-surface-container-highest rounded-t-xl relative group cursor-pointer"
                style={{ height: "45%" }}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>
              </div>
              <span className="text-[10px] font-label uppercase text-on-surface-variant">
                Tue
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-primary-container rounded-t-xl relative shadow-[0_0_20px_rgba(244,104,35,0.3)]"
                style={{ height: "85%" }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-bright px-2 py-1 rounded-md text-[10px] font-bold text-white whitespace-nowrap">
                  $182
                </div>
              </div>
              <span className="text-[10px] font-label uppercase text-primary font-bold">
                Wed
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-surface-container-highest rounded-t-xl relative group cursor-pointer"
                style={{ height: "70%" }}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>
              </div>
              <span className="text-[10px] font-label uppercase text-on-surface-variant">
                Thu
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-surface-container-highest rounded-t-xl relative group cursor-pointer"
                style={{ height: "55%" }}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>
              </div>
              <span className="text-[10px] font-label uppercase text-on-surface-variant">
                Fri
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-surface-container-highest rounded-t-xl relative group cursor-pointer"
                style={{ height: "95%" }}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>
              </div>
              <span className="text-[10px] font-label uppercase text-on-surface-variant">
                Sat
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-surface-container-highest rounded-t-xl relative group cursor-pointer"
                style={{ height: "40%" }}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>
              </div>
              <span className="text-[10px] font-label uppercase text-on-surface-variant">
                Sun
              </span>
            </div>
          </div>
        </section>
        {/* <!-- Insights Carousel/Cards --> */}
        <section className="space-y-4">
          <h3 className="text-sm font-label uppercase tracking-widest text-on-surface-variant px-2">
            Optimization Tips
          </h3>
          <div className="bg-secondary-container/20 rounded-3xl p-6 flex gap-5 items-start border border-secondary/10">
            <div className="bg-secondary-container w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center text-white">
              <span
                className="material-symbols-outlined"
                data-icon="lightbulb"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                lightbulb
              </span>
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-1">
                Boost Your Lunch Earnings
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Orders in the Downtown area are up 25% between 11:30 and 13:00.
                Head there to maximize hourly rates.
              </p>
            </div>
          </div>
        </section>
      </main>
      <BottomNav />
    </>
  );
}
