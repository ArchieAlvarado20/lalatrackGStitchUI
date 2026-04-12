import { getTodayRides } from "@/lib/actions/logs-actions";
import { auth } from "@/lib/auth";
import { GiftIcon } from "lucide-react";
import { useEffect, useState } from "react";
import LogItem from "./logItem";

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

type Session = typeof auth.$Infer.Session;

export default function IncomeLogs({
  session,
  limit = 3,
}: {
  session: Session;
  limit?: number;
}) {
  const [rides, setRides] = useState<Ride[]>([]);

  const loadLogs = async () => {
    const data = await getTodayRides(session.user.id);

    const formatted: Ride[] = data.slice(0, limit).map((r) => ({
      ...r,
      fare: Number(r.fare),
      payment: Number(r.payment),
      tip: Number(r.tip),
    }));

    setRides(formatted);
  };

  useEffect(() => {
    const init = async () => {
      await Promise.all([loadLogs()]);
    };

    init();
  }, []);

  return (
    <>
      <div className="space-y-3">
        {rides.map((ride) => (
          <div key={ride.id}>
            {/* Fare */}
            <LogItem
              icon={() => <div className="font-black italic text-sm">₱</div>}
              title="Actual Fare"
              subtitle={new Date(ride.createdAt!).toLocaleString()}
              amount={`₱${Number(ride.fare).toFixed(2)}`}
              isFare
            />
            <div className="mb-3"></div>
            {/* Paymenr */}
            {ride.payment && (
              <LogItem
                icon={() => <div className="font-black italic text-sm">D</div>}
                title="Payment Received"
                subtitle={new Date(ride.createdAt!).toLocaleString()}
                amount={`₱${Number(ride.payment).toFixed(2)}`}
              />
            )}
            <div className="mb-3"></div>
            {/* Tip */}
            {ride.tip != 0 && (
              <LogItem
                icon={GiftIcon}
                title="Tip Received"
                subtitle={new Date(ride.createdAt!).toLocaleString()}
                amount={`₱${Number(ride.tip).toFixed(2)}`}
                isTip
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
