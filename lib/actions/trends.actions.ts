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
      createdAt: true,
    },
  });

  const map: Record<string, number> = {};

  rides.forEach((r) => {
    if (!r.createdAt) return;

    const key = r.createdAt.toLocaleDateString("en-PH");

    if (!map[key]) map[key] = 0;

    map[key] += Number(r.payment);
  });

  return Object.entries(map).map(([date, total]) => ({
    date,
    total,
  }));
}
