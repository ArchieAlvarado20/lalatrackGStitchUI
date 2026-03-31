import { betterAuth } from "better-auth";
import { createPool } from "mysql2/promise";
// If your Prisma file is located elsewhere, you can change the path
import { PrismaClient } from "@/generated/prisma/client";
import { prismaAdapter } from "better-auth/adapters/prisma";
const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mysql", // or "mysql", "postgresql", ...etc
  }),
});
