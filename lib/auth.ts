import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "./generated/prisma";
import { nextCookies } from "better-auth/next-js";
import { sendEmail } from "./email-template";

const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({
      user,
      url,
    }: {
      user: {
        id: string;
        email: string;
        name?: string;
      };
      url: string;
      token: string;
    }) => {
      await sendEmail({
        template: "reset-password",
        to: user.email,
        companyName: "Lalatrack",
        variables: {
          resetLink: url,
          userEmail: user.email,
          userName: user.name ?? "User",
          expirationMinutes: "60",
        },
      });
    },
  },

  socialProviders: {
    // github: {
    //clientId: process.env.GITHUB_CLIENT_ID as string,
    //clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    // },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [nextCookies()],
});
