"use client";

import React, { ElementType, useState } from "react";
import Head from "next/head";
import {
  ArrowLeft,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  RefreshCw,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { resetPasswordAction } from "@/lib/actions/auth-actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function PasswordResetPage({ token }: { token?: string }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const requirements = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One special character (!@#$)", met: /[!@#$%^&*]/.test(password) },
    { label: "Must include one number", met: /\d/.test(password) },
  ];

  const handleSubmit = async () => {
    if (!token) return toast("No valid token!");
    const result = await resetPasswordAction(token, password);

    if (result.success) {
      alert("Password updated!");
      router.push("/auth");
      console.log("Passed");
    } else {
      alert(result.error);
      console.error("Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white font-['Inter'] selection:bg-[#f26722] selection:text-white flex flex-col">
      <Head>
        <title>Password Reset | Lalatrack Kinetic Cockpit</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <main className="flex-1 flex flex-col items-center justify-start p-6 pt-12 max-w-sm mx-auto w-full">
        {/* Visual Brand Accent */}
        <div className="w-24 h-24 bg-[#131313] rounded-3xl flex items-center justify-center text-[#f26722] border border-white/5 mb-12 shadow-[0_0_40px_rgba(242,103,34,0.1)]">
          <RefreshCw
            size={48}
            strokeWidth={1.5}
            className="animate-[spin_12s_linear_infinite]"
          />
        </div>

        {/* Informative Header */}
        <div className="text-center mb-12 px-4">
          <p className="text-sm text-[#adaaaa] leading-relaxed font-medium">
            Enter your new credentials below to <br />
            secure your{" "}
            <span className="text-[#f26722] font-black italic uppercase tracking-tighter">
              Lalatrack
            </span>{" "}
            account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-8">
          {/* Form Fields */}
          <div className="space-y-6">
            {/* New Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#adaaaa] uppercase tracking-[0.2em] ml-4">
                NEW PASSWORD
              </label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#adaaaa] group-focus-within:text-[#f26722] transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#131313] border border-white/5 rounded-2xl p-6 pl-14 pr-14 text-white outline-none focus:border-[#f26722]/50 transition-all placeholder:text-neutral-700 font-medium"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[#adaaaa] hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#adaaaa] uppercase tracking-[0.2em] ml-4">
                CONFIRM NEW PASSWORD
              </label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#adaaaa] group-focus-within:text-[#f26722] transition-colors">
                  <ShieldCheck size={20} />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-[#131313] border border-white/5 rounded-2xl p-6 pl-14 pr-14 text-white outline-none focus:border-[#f26722]/50 transition-all placeholder:text-neutral-700 font-medium"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[#adaaaa] hover:text-white transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Password Validation Checklist */}
          <div className="bg-[#131313]/50 p-6 rounded-3xl border border-white/5 space-y-3">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#adaaaa] mb-2">
              Security Requirements
            </h4>
            {requirements.map((req, i) => (
              <div
                key={i}
                className="flex items-center gap-3 transition-all duration-500"
              >
                {req.met ? (
                  <CheckCircle2 size={16} className="text-[#f26722]" />
                ) : (
                  <Circle size={16} className="text-[#adaaaa] opacity-30" />
                )}
                <span
                  className={`text-xs font-medium transition-colors ${req.met ? "text-white" : "text-[#adaaaa]"}`}
                >
                  {req.label}
                </span>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#f26722] text-[#0e0e0e] py-6 rounded-2xl font-black uppercase text-sm tracking-widest flex items-center justify-center gap-3 shadow-[0_8px_32px_rgba(242,103,34,0.3)] hover:scale-[1.02] active:scale-95 transition-all group"
          >
            UPDATE PASSWORD
            <ArrowLeft
              size={20}
              className="rotate-180 group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>
      </main>

      {/* Decorative Progress Line */}
      <div className="h-1 w-full bg-[#f26722]/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-[#f26722] w-2/3"></div>
      </div>
    </div>
  );
}
