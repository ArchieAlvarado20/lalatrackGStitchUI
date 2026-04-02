import BottomNav from "../components/BottomNav";
import Head from "../components/Head";
import SessionCard from "../components/SessionCard";
import TransactionItem from "../components/TransactionItem";

export default function ViewAll() {
  return (
    <>
      <Head />
      <main className="flex-1 px-5 pb-32">
        {/* <!-- Segmented Filter Control (Kinetic Cockpit Style) --> */}
        <section className="mt-4 mb-8">
          <div className="flex p-1.5 bg-surface-container-lowest rounded-2xl w-full max-w-sm mx-auto neumorphic-inset">
            <button className="flex-1 py-2 text-sm font-label font-medium rounded-xl text-on-surface-variant hover:text-white transition-colors">
              Income
            </button>
            <button className="flex-1 py-2 text-sm font-label font-bold rounded-xl bg-surface-container-high text-primary neumorphic-outset">
              Expenses
            </button>
          </div>
        </section>
        {/* <!-- Financial Summary (Cockpit Metrics) --> */}
        <SessionCard label="Today's Expenses" amount={142.5} />
        {/* <!-- Group: Today --> */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] flex-1 bg-surface-container-highest"></span>
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
              Today
            </h3>
            <span className="h-[2px] flex-1 bg-surface-container-highest"></span>
          </div>
          <div className="space-y-3">
            <TransactionItem
              title="Maintenance"
              subtitle="Motor Shop • 10:00 AM"
              amount="500"
              icon="moped"
              currency="₱"
            />
            <TransactionItem
              title="Delivery Income"
              subtitle="Grab • 6:30 PM"
              amount="250.00"
              icon="payments"
              negative={false}
            />
            <TransactionItem
              title="Fuel Refill"
              subtitle="Shell Station • 2:14 PM"
              amount="18.50"
              icon="local_gas_station"
            />
          </div>
        </div>
        {/* <!-- Group: Yesterday --> */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] flex-1 bg-surface-container-highest"></span>
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
              Yesterday
            </h3>
            <span className="h-[2px] flex-1 bg-surface-container-highest"></span>
          </div>
          <div className="space-y-3">
            <TransactionItem
              title="Maintenance"
              subtitle="Motor Shop • 10:00 AM"
              amount="500"
              icon="build"
              currency="₱"
            />
            <TransactionItem
              title="Delivery Income"
              subtitle="Grab • 6:30 PM"
              amount="250.00"
              icon="payments"
              negative={false}
            />
            <TransactionItem
              title="Fuel Refill"
              subtitle="Shell Station • 2:14 PM"
              amount="18.50"
              icon="local_gas_station"
            />
          </div>
        </div>
      </main>
      {/* <!-- BottomNavBar --> */}
      <BottomNav />
    </>
  );
}
