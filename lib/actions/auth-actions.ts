"use server";

import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";

export const signUp = async (email: string, password: string, name: string) => {
  const result = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });

  return result;
};

export const signIn = async (email: string, password: string) => {
  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  return result;
};

export const signInSocial = async (provider: "github" | "google") => {
  const { url } = await auth.api.signInSocial({
    body: {
      provider,
      callbackURL: "/dashboard",
    },
  });

  if (url) {
    redirect(url);
  }
};

export const signOut = async () => {
  const result = await auth.api.signOut({ headers: await headers() });
  return result;
};

export async function requestPasswordReset(email: string) {
  try {
    const res = await auth.api.requestPasswordReset({
      body: { email, redirectTo: "/auth/resetPassword" },
    });

    return { success: true, data: res };
  } catch (error: unknown) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to send reset email",
    };
  }
}

export async function resetPasswordAction(token: string, password: string) {
  try {
    const res = await auth.api.resetPassword({
      body: {
        token,
        newPassword: password,
      },
    });

    return { success: true, data: res };
  } catch (error: unknown) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to reset password",
    };
  }
}
