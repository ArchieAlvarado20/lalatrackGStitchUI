"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import HeadAuth from "../HeadAuth";
import SecurityBadges from "../SecurityBadges";
import AuthActions from "../AuthActions";

// TODO: palitan mo ito base sa auth mo (Better Auth / Supabase / API)
import { signUp } from "@/lib/auth-client";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    setError("");

    // validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const result = await signUp.email({
        name,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error.message || "Registration failed");
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      setLoading(true);

      // TODO: replace with real provider login
      // await signIn.social({ provider: "google" });
    } catch (err) {
      setError("Google login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeadAuth />

      <div className="flex flex-col items-center justify-center bg-surface">
        <main className="flex-grow flex flex-col justify-end px-6 pb-6 max-w-md mx-auto w-full">
          <form onSubmit={handleRegister} className="space-y-6">
            {/* NAME */}
            <div>
              <label className="text-xs font-bold uppercase">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-xl bg-surface-container-lowest"
                placeholder="Enter your name"
                type="text"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-xs font-bold uppercase">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl bg-surface-container-lowest"
                placeholder="Enter email"
                type="email"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-xs font-bold uppercase">Password</label>

              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPass ? "text" : "password"}
                  className="w-full p-4 rounded-xl bg-surface-container-lowest"
                  placeholder="Password"
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-4"
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-xs font-bold uppercase">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={showConfirmPass ? "text" : "password"}
                  className="w-full p-4 rounded-xl bg-surface-container-lowest"
                  placeholder="Confirm password"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="absolute right-4 top-4"
                >
                  {showConfirmPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* ERROR */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* ACTIONS */}
            <AuthActions
              registerText={loading ? "Creating account..." : "Register"}
              onRegister={handleRegister}
              onGoogleRegister={handleGoogleRegister}
            />
          </form>
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
