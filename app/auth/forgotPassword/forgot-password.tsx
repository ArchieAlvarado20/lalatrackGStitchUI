"use client";
import { useState } from "react";
import Head from "next/head";
import {
  ArrowLeft,
  Mail,
  ShieldQuestion,
  Send,
  KeyRound,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { InputField } from "@/components/authInput";
import Link from "next/link";

import { useRouter, useSearchParams } from "next/navigation";
import { requestPasswordReset } from "@/lib/actions/auth-actions";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await requestPasswordReset(email);

    if (!result.success) {
      setError(true);
    } else {
      setIsSubmitted(true);
    }

    setIsLoading(false);
  };

  return (
    <>
      <main className="min-h-screen flex-1 flex flex-col items-center justify-center p-6 pb-24 max-w-sm mx-auto w-full">
        {/* Visual Brand Accent */}
        <div className="w-20 h-20 bg-[#131313] rounded-3xl flex items-center justify-center text-[#f26722] border border-white/5 mb-8 shadow-[0_0_30px_rgba(242,103,34,0.1)]">
          <KeyRound size={40} strokeWidth={1.5} />
        </div>

        {/* Content Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black font-extrabold tracking-tighter uppercase mb-3">
            Forgot <span className="text-[#f26722]">Password?</span>
          </h1>
          <p className="text-[10px] font-bold text-[#adaaaa] uppercase tracking-[0.2em] leading-relaxed px-4">
            Enter your email and we will send a link to change your password.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="space-y-2">
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#adaaaa] group-focus-within:text-[#f26722] transition-colors">
                  <Mail size={20} />
                </div>
                <InputField
                  label="Recovery Email"
                  type="text"
                  placeholder="Input Email"
                  value={email}
                  icon={<Mail size={20} />}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#f26722] text-white py-6 rounded-2xl font-black uppercase text-sm tracking-widest flex items-center justify-center gap-3 shadow-[0_8px_32px_rgba(242,103,34,0.3)] hover:scale-[1.02] active:scale-95 transition-all group"
            >
              Send Reset Link
              <Send
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </form>
        ) : (
          <div className="w-full bg-[#131313] border border-[#f26722]/20 rounded-3xl p-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-12 h-12 bg-[#f26722]/10 rounded-full flex items-center justify-center text-[#f26722] mx-auto mb-4">
              <ShieldQuestion size={24} />
            </div>
            <h3 className="font-black italic text-lg uppercase tracking-tighter mb-2">
              Check Your Email
            </h3>
            <p className="text-xs text-[#adaaaa] font-medium leading-relaxed">
              If an account exists for{" "}
              <span className="text-white font-bold">{email}</span>, we{`'`}ve
              sent the recovery protocols.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 text-[10px] font-black text-[#f26722] uppercase tracking-widest hover:underline"
            >
              Didn{`'`}t receive it? Try again
            </button>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="mt-12 text-center">
          <Link
            href="/auth"
            className="text-xs text-on-surface-variant font-bold hover:text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={14} /> Back to Login
          </Link>
        </div>
      </main>

      {/* Security Badges */}
      <div className="bottom-10 left-0 right-0 flex justify-center gap-4 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
        <div className="w-10 h-10 bg-surface-container-low rounded-xl flex items-center justify-center border border-white/5">
          <ShieldCheck size={18} />
        </div>
        <div className="w-10 h-10 bg-surface-container-low rounded-xl flex items-center justify-center border border-white/5">
          <Lock size={18} />
        </div>
        <div className="w-10 h-10 bg-surface-container-low rounded-xl flex items-center justify-center border border-white/5">
          <ShieldCheck size={18} />
        </div>
      </div>
    </>
  );
}
