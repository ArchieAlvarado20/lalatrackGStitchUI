import { ActionButton } from "../components/ActionButton";
import BottomNav from "../components/BottomNav";
import Head from "../components/Head";
import InputField from "../components/Input";

export default function Logs() {
  return (
    <>
      <Head />
      <main className="mt-7 px-4 pt-1 space-y-6 max-w-lg mx-auto mt-12">
        {/* <!-- Summary Header Section --> */}
        <section className="bg-surface-container-low rounded-xl p-5 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-on-surface-variant label-md font-medium uppercase tracking-wider mb-1">
              Current Session
            </p>
            <h2 className="text-4xl font-black text-primary tracking-tight">
              $142.50
            </h2>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <span
              className="material-symbols-outlined text-9xl"
              style={{
                fontVariationSettings: '"FILL" 1',
              }}
            >
              payments
            </span>
          </div>
        </section>
        {/* <!-- Form Container --> */}
        <div className="space-y-5">
          {/* <!-- Date & Time Row --> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-on-surface-variant label-md ml-1">
                Date
              </label>
              <div className="bg-surface-container-lowest neumorphic-inset rounded-xl p-3 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">
                  calendar_today
                </span>
                <input
                  className="bg-transparent border-none p-0 text-on-surface focus:ring-0 text-sm w-full font-medium"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-on-surface-variant label-md ml-1">
                Time
              </label>
              <div className="bg-surface-container-lowest neumorphic-inset rounded-xl p-3 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">
                  schedule
                </span>
                <input
                  className="bg-transparent border-none p-0 text-on-surface focus:ring-0 text-sm w-full font-medium"
                  type="text"
                />
              </div>
            </div>
          </div>
          {/* <!-- Financial Inputs --> */}
          <div className="bg-surface-container-high rounded-xl p-6 space-y-6">
            {/* <!-- Fare Input --> */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-on-surface-variant label-md font-semibold">
                  Fare Amount
                </label>
                <span className="text-xs text-primary/60">
                  Estimated: $12.00
                </span>
              </div>
              <InputField icon="$" placeholder="0.00" type="number" />
            </div>
            {/* <!-- Payment Input --> */}
            <div className="space-y-2">
              <label className="text-on-surface-variant label-md font-semibold">
                Total Payment Received
              </label>
              <InputField icon="$" placeholder="0.00" type="number" />
            </div>
            {/* <!-- Calculated Tip --> */}
            <div className="bg-surface-container-low rounded-xl p-4 flex items-center justify-between border border-primary/10">
              <div className="flex items-center gap-3">
                <div className="bg-secondary-container/20 p-2 rounded-lg">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    card_giftcard
                  </span>
                </div>
                <div>
                  <p className="text-on-surface-variant text-xs font-medium uppercase tracking-tight">
                    Calculated Tip
                  </p>
                  <p className="text-on-surface font-bold">Auto-calculated</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-secondary">
                  +$0.00
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Additional Details Asymmetric Bento --> */}
          <div className="grid grid-cols-6 gap-4 hidden">
            <div className="col-span-4 bg-surface-container-low p-4 rounded-xl flex items-center gap-3">
              <span className="material-symbols-outlined text-on-surface-variant">
                location_on
              </span>
              <div className="overflow-hidden">
                <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-tighter">
                  Location
                </p>
                <p className="text-on-surface text-xs font-medium truncate">
                  Downtown Hub, Cluster 4
                </p>
              </div>
            </div>
            <div className="col-span-2 bg-surface-container-low p-4 rounded-xl flex flex-col justify-center items-center">
              <span className="material-symbols-outlined text-on-surface-variant mb-1">
                motorcycle
              </span>
              <p className="text-on-surface text-[10px] font-bold">Express</p>
            </div>
          </div>
        </div>
      </main>
      <ActionButton label="Log Income" icon="arrow_forward" iconRight />
      <BottomNav />
    </>
  );
}
