"use client";
import { ActionButton } from "../components/ActionButton";
import BottomNav from "../components/BottomNav";
import Head from "../components/Head";
import InputField from "../components/Input";
import DateTimeField from "../components/DateTime";
import { useState } from "react";
import SessionCard from "../components/SessionCard";

export default function Logs() {
  const today = new Date().toISOString().split("T")[0];
  const nowTime = new Date().toTimeString().slice(0, 5);

  const [fareAmount, setFareAmount] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const tip = Math.max(totalPayment - fareAmount, 0);

  return (
    <>
      <Head />

      <main className="px-4 pt-6 max-w-md mx-auto space-y-8 mb-12">
        <SessionCard label="Today's Income" amount={142.5} />

        <div className="space-y-5">
          {/* Date & Time Row */}
          <div className="grid grid-cols-2 gap-4">
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
          </div>

          <InputField
            name="fareAmount"
            onChange={(e) => setFareAmount(parseFloat(e.target.value) || 0)}
          />

          <InputField
            name="totalPayment"
            onChange={(e) => setTotalPayment(parseFloat(e.target.value) || 0)}
          />

          {/* Calculated Tip */}
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
                +₱{tip.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

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
      </main>

      <ActionButton label="Log Income" icon="arrow_forward" iconRight />
      <BottomNav />
    </>
  );
}
