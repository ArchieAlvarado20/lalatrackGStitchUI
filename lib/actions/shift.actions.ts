"use server";

import prisma from "../prisma";

export async function startShift(data: { userId: string }) {
  const existing = await prisma.shift.findFirst({
    where: {
      userId: data.userId,
      status: "ACTIVE",
      deletedAt: null,
      endTime: null,
    },
  });

  if (existing) {
    throw new Error("Shift already active");
  }

  const shift = await prisma.shift.create({
    data: {
      userId: data.userId,
      startTime: new Date(),
      status: "ACTIVE",
      endTime: null,
    },
  });

  return {
    ...shift,
    existing,
    startTime: shift.startTime.toISOString(),
  };
}

export async function endShift(data: { userId: string }) {
  const activeShift = await prisma.shift.findFirst({
    where: {
      userId: data.userId,
      status: "ACTIVE",
    },
    orderBy: {
      startTime: "desc",
    },
  });

  if (!activeShift) {
    throw new Error("No active shift found");
  }

  const shift = await prisma.shift.update({
    where: {
      id: activeShift.id,
    },
    data: {
      endTime: new Date(),
      status: "ENDED",
    },
  });

  return {
    ...shift,
    activeShift,
  };
}

export async function activeShift(data: { userId: string }) {
  const shift = await prisma.shift.findFirst({
    where: {
      userId: data.userId,
      status: "ACTIVE",
      deletedAt: null,
    },
    orderBy: {
      startTime: "desc",
    },
  });

  if (!shift?.startTime) return null;

  const start = new Date(shift.startTime).getTime();

  return {
    ...shift,
    start,
  };
}
