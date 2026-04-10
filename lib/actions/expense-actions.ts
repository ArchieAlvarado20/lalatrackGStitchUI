"use server";
import prisma from "../prisma";

export async function createExpense(data: {
  category: string;
  amount: number;
  userId: string;
}) {
  const expense = await prisma.expense.create({
    data: {
      ...data,
    },
  });
  return {
    ...expense,
    category: String(expense.category),
    amount: Number(expense.amount),
  };
}

export async function getTodayExpenseAmount(userId: string) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const expense = await prisma.expense.findMany({
    where: {
      userId: userId,
      createdAt: {
        gte: start,
        lte: end,
      },
    },
    select: {
      amount: true,
      category: true,
    },
  });

  const totalExpense = expense.reduce((acc, r) => acc + Number(r.amount), 0);
  return totalExpense;
}

export async function getTodayExpense(userId: string) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  return await prisma.expense.findMany({
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

export async function getExpenses(userId: string) {
  return prisma.expense.findMany({
    where: { userId, deletedAt: null },
    orderBy: { createdAt: "desc" },
  });
}

export async function getExpenseTotal(userId: string) {
  const result = await prisma.expense.aggregate({
    _sum: { amount: true },
    where: { userId, deletedAt: null },
  });

  return Number(result._sum.amount ?? 0);
}
