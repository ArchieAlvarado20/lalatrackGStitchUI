import { getTodayExpenseAmount } from "./expense-actions";
import { getTodayIncome } from "./logs-actions";

type TodayIncome = {
  rides: number;
  expense: number;
  net: number;
};

export async function getTodayNetIncome(userId: string): Promise<TodayIncome> {
  const rides = await getTodayIncome(userId);
  const expense = await getTodayExpenseAmount(userId);

  const net = rides - expense;

  return {
    rides,
    expense,
    net,
  };
}
