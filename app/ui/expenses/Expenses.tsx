"use client";

import { ActionButton } from "../components/ActionButton";
import BottomNav from "../components/BottomNav";
import Head from "../components/Head";
import InputField from "../components/Input";
import { useState } from "react";
import CategoryButton from "./CategoryButton";
import DateTimeField from "../components/DateTime";
import SessionCard from "../components/SessionCard";

export default function Expenses() {
  const today = new Date().toISOString().split("T")[0];
  const nowTime = new Date().toTimeString().slice(0, 5);
  const categories = [
    { name: "Gas", icon: "local_gas_station", color: "#ff9061" },
    { name: "Food", icon: "restaurant" },
    { name: "Top-up", icon: "account_balance_wallet" },
    { name: "Maintenance", icon: "build" },
    { name: "Others", icon: "more_horiz" },
  ];

  const [activeCategory, setActiveCategory] = useState("Gas");
  return (
    <>
      <Head />
      <main className="px-4 pt-6 max-w-md mx-auto space-y-8 mb-12">
        {/* <!-- Bento Layout for Date/Time --> */}
        <SessionCard label="Today's Expeneses" amount={142.5} />
        <section className="grid grid-cols-2 gap-4">
          <DateTimeField
            label="Date"
            icon="calendar_today"
            type="date"
            value={today}
            max={today}
            name="date"
          />

          <DateTimeField
            label="Time"
            icon="schedule"
            type="time"
            value={nowTime}
            name="time"
          />
        </section>
        {/* <!-- Large Numeric Input (Kinetic Cockpit Style) --> */}
        <section className="text-center space-y-2">
          <InputField />
        </section>
        {/* <!-- Category Quick-Select Chips --> */}
        <section className="space-y-4">
          <h3 className="font-headline font-bold text-on-surface-variant text-sm px-1">
            Category
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              {categories.map((item) => (
                <CategoryButton
                  key={item.name}
                  item={item}
                  active={activeCategory === item.name}
                  onClick={setActiveCategory}
                />
              ))}
            </div>
          </div>
        </section>

        {/* <!-- Optional Notes Area --> */}
        {activeCategory === "Others" && (
          <section className="bg-surface-container-low p-4 rounded-xl space-y-2">
            <span className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">
              Notes (Others, Details, etc.)
            </span>
            <textarea
              className="bg-transparent border-none text-on-surface w-full p-0 font-medium focus:ring-0 text-sm resize-none placeholder:text-outline/40 focus:shadow-none focus:outline-none"
              placeholder="Add details about this expense..."
              rows="2"
            ></textarea>
          </section>
        )}
        {/* <!-- Receipt Upload (Cockpit Utility) --> */}
        {/* <section className="flex items-center justify-between bg-surface-container p-4 rounded-xl border border-dashed border-outline-variant/30">
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
        </section> */}
      </main>
      <ActionButton label="Log Expenses" icon="arrow_forward" iconRight />
      <BottomNav />
    </>
  );
}
