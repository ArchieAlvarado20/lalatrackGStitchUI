"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import HeadAuth from "../HeadAuth";
import SecurityBadges from "../SecurityBadges";

// TODO: palitan mo ito base sa auth mo (Better Auth / Supabase / API)
import { authClient, signUp } from "@/lib/auth-client";
import { Input } from "../AuthInputs";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      const result = await signUp.email({
        email,
        name,
        password,
      });
      if (result.error) {
        setError(result.error.message || "Signup failed");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("An error occurred during signup");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const handleLoginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <>
      <HeadAuth />

      <div className="flex flex-col items-center justify-center bg-surface">
        <main className="grow flex flex-col justify-end px-6 pb-6 max-w-md mx-auto w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME */}
            <Input
              id="name"
              type="text"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-icon="person"
              placeholder="Enter Name"
            />

            {/* EMAIL */}
            <Input
              id="email"
              type="email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-icon="message"
              placeholder="Enter Email"
            />

            {/* PASSWORD */}
            <Input
              id="password"
              type="password"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-icon="lock"
              placeholder="Enter Password"
            />

            {/* CONFIRM PASSWORD */}
            <Input
              id="confirmPassword"
              type="password"
              name="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              data-icon="lock"
              placeholder="Confirm Password"
            />

            {/* ERROR */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* ACTIONS */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-container from-primary to-primary-container text-on-primary-container font-black py-5 rounded-xl text-lg neumorphic-button uppercase tracking-wider transition-all active:scale-95 cursor-pointer disabled:opacity-50"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          <button
            type="submit"
            onClick={handleLoginWithGoogle}
            className="w-full mt-1 bg-primary-container from-primary to-primary-container text-on-primary-container font-black py-5 rounded-xl text-lg neumorphic-button uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
          >
            Register with Google
          </button>
        </main>

        <footer className="pb-10 px-6 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-bold">
              Login
            </Link>
          </p>

          <SecurityBadges />
        </footer>
      </div>
    </>
  );
}
