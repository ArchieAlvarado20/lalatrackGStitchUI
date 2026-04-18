"use server";

import prisma from "../prisma";

export async function getRideTotalsPerDay(userId: string) {
  const today = new Date();
  const last7Days = new Date();
  last7Days.setDate(today.getDate() - 6);

  const rides = await prisma.ride.findMany({
    where: {
      userId,
      deletedAt: null,
      createdAt: {
        gte: last7Days,
        lte: today,
      },
    },
    select: {
      payment: true,
      fare: true,
      tip: true,
      createdAt: true,
    },
  });

  const map: Record<string, { payment: number; fare: number; tip: number }> =
    {};

  rides.forEach((r) => {
    if (!r.createdAt) return;

    const key = r.createdAt.toLocaleDateString("en-PH");

    if (!map[key]) {
      map[key] = {
        payment: 0,
        fare: 0,
        tip: 0,
      };
    }

    map[key].payment += Number(r.payment || 0);
    map[key].fare += Number(r.fare || 0);
    map[key].tip += Number(r.tip || 0);
  });

  return Object.entries(map).map(([date, totals]) => ({
    date,
    ...totals,
  }));
}
