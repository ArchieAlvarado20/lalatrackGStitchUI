"use server";
import prisma from "../prisma";

export async function createRide(data: {
  fare: number;
  payment: number;
  tip: number;
  userId: string;
}) {
  const ride = await prisma.ride.create({
    data: {
      ...data,
    },
  });

  return {
    ...ride,
    fare: Number(ride.fare),
    payment: Number(ride.payment),
    tip: Number(ride.tip),
  };
}

export async function getTodayIncome(userId: string) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const rides = await prisma.ride.findMany({
    where: {
      userId: userId,
      createdAt: {
        gte: start,
        lte: end,
      },
    },
    select: {
      fare: true,
      payment: true,
    },
  });

  const totalIncome = rides.reduce((acc, r) => acc + Number(r.payment), 0);
  return totalIncome;
}

export async function getTodayTip(userId: string) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const rides = await prisma.ride.findMany({
    where: {
      userId: userId,
      createdAt: {
        gte: start,
        lte: end,
      },
    },
    select: {
      tip: true,
    },
  });

  const totalTip = rides.reduce((acc, r) => {
    return acc + Number(r.tip ?? 0);
  }, 0);

  return totalTip;
}

export async function getTodayRides(userId: string) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  return await prisma.ride.findMany({
    where: {
      userId: userId,
      createdAt: {
        gte: start,
        lte: end,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getRides(userId: string) {
  return prisma.ride.findMany({
    where: { userId, deletedAt: null },
    orderBy: { createdAt: "desc" },
  });
}

export async function getRideTotal(userId: string) {
  const result = await prisma.ride.aggregate({
    _sum: { payment: true },
    where: { userId, deletedAt: null },
  });

  return Number(result._sum.payment ?? 0);
}
