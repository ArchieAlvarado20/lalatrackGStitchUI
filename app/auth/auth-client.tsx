"use client";
import React, { useState } from "react";
import Head from "next/head";
import { User, Lock, Eye, EyeOff, ShieldCheck, Mail } from "lucide-react";
import { InputField } from "@/components/authInput";
import { FcGoogle } from "react-icons/fc";
import { signIn, signInSocial, signUp } from "@/lib/actions/auth-actions";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";

export default function AuthClientPage() {
  const router = useRouter();
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //Password Reveal
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSocialAuth = async (provider: "google") => {
    try {
      setIsLoading(true);
      setError("");

      await signInSocial(provider);
    } catch (err: unknown) {
      if (err instanceof Error && err.message.includes("NEXT_REDIRECT")) {
        return;
      }

      setError(err instanceof Error ? err.message : "Unknown error");

      setIsLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (isSignIn) {
        const result = await signIn(email, password);

        if (!result.user) {
          setError("Invalid email or password");
          return;
        }

        router.push("/dashboard");
      } else {
        if (password.length < 8) {
          setError("Password must be at least 8 characters");
          return;
        }

        if (password !== confirmPassword) {
          setError("Passwords do not match");
          return;
        }

        const result = await signUp(email, password, name);

        if (!result.user) {
          setError("Failed to create account");
          return;
        }

        track("signup", {
          method: "email",
        });

        router.push("/dashboard");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white font-['Inter'] selection:bg-[#f26722] selection:text-white flex flex-col items-center justify-center p-6 pb-24 relative">
      <Head>
        <title>Join the Fleet | Lalatrack Registration</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      {/* Brand Header */}
      <div className="text-center mb-16">
        <h1 className="text-[#f26722] font-black italic tracking-tighter text-6xl mb-2">
          Lalatrack
        </h1>
        <div className="text-[10px] font-bold text-[#adaaaa] uppercase tracking-[0.4em]">
          Kinetic Logistics Command
        </div>
      </div>

      {error && (
        <div className="relative flex items-start gap-1 m-auto rounded-2xl border border-red-500/20 bg-red-500/10 backdrop-blur-md p-4 shadow-lg">
          {/* Icon */}
          <div className="flex-shrink-0 mt-0.5">
            <svg
              className="h-5 w-5 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-sm font-medium text-red-300">{error}</p>
            <p className="text-xs text-red-200/70 mt-1">
              Please check your input and try again.
            </p>
          </div>

          {/* Optional close button */}
          <button
            onClick={() => setError("")}
            className="text-red-300 hover:text-red-200 transition"
          >
            ✕
          </button>
        </div>
      )}

      {/* Registration Form Container */}
      <div className="w-full max-w-sm">
        <form onSubmit={handleEmailAuth} className="space-y-5">
          {/* Full Name */}
          {!isSignIn && (
            <InputField
              label="Name"
              placeholder="Input Name"
              icon={<User size={20} />}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          {/* Email */}
          <InputField
            label="Email"
            type="text"
            placeholder="Input Email"
            value={email}
            icon={<Mail size={20} />}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            icon={<Lock size={20} />}
            onChange={(e) => setPassword(e.target.value)}
            required
            rightElement={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            }
          />
          {isSignIn && (
            <div className="flex">
              <a
                className="text-[10px] ml-auto font-bold uppercase tracking-widest text-primary-fixed-dim hover:text-primary transition-colors"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          )}

          {!isSignIn && (
            <>
              <InputField
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                icon={<Lock size={20} />}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                rightElement={
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                }
              />
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#f26722] text-white py-6 mt-4 rounded-2xl font-black uppercase text-sm tracking-widest flex items-center justify-center gap-3 shadow-[0_8px_32px_rgba(242,103,34,0.3)] hover:scale-[1.02] active:scale-95 transition-all group"
          >
            {isLoading
              ? isSignIn
                ? "Signing In..."
                : "Signing Up..."
              : isSignIn
                ? "Login"
                : "Register"}
          </button>
        </form>
        <div className="flex items-center gap-4 py-2">
          <div className="h-px bg-surface-variant flex-grow"></div>
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
            or
          </span>
          <div className="h-px bg-surface-variant flex-grow"></div>
        </div>

        <button
          type="button"
          onClick={() => handleSocialAuth("google")}
          className="w-full bg-surface-container-high text-on-surface font-bold py-6 rounded-xl text-sm border border-outline-variant/10 hover:bg-surface-bright transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl text-primary">
            <FcGoogle className="text-xl" />
          </span>
          LOGIN WITH GOOGLE
        </button>

        {/* TOGGLE */}
        <div className="text-center mt-5 mb-5">
          <p className="text-xs text-[#adaaaa] font-medium">
            {isSignIn ? "No account?" : "Already have account?"}
            <button
              className="text-[#f26722] font-bold ml-2 hover:underline underline-offset-4 cursor-pointer"
              onClick={() => {
                setIsSignIn(!isSignIn);
                setError(""); // Clear any previous errors
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword(""); // Clear name when switching modes
              }}
            >
              {isSignIn ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>

      {/* Security Badges */}
      <div className="bottom-1 left-0 right-0 flex justify-center gap-4 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
        <div className="w-10 h-10 bg-[#131313] rounded-xl flex items-center justify-center border border-white/5">
          <ShieldCheck size={18} />
        </div>
        <div className="w-10 h-10 bg-[#131313] rounded-xl flex items-center justify-center border border-white/5">
          <Lock size={18} />
        </div>
        <div className="w-10 h-10 bg-[#131313] rounded-xl flex items-center justify-center border border-white/5">
          <ShieldCheck size={18} />
        </div>
      </div>
    </div>
  );
}
