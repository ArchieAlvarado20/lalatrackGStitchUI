"use client";
import Link from "next/link";
import HeadAuth from "../HeadAuth";
import SecurityBadges from "../SecurityBadges";
import AuthActions from "../AuthActions";
import { useState } from "react";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <HeadAuth />
      <div className="max-h-screen flex-colitems-center justify-center bg-surface">
        {/* // <!-- Main Login Content (Middle/Bottom heavy for one-handed use) --> */}
        <main className="flex-grow flex flex-col justify-end px-6 pb-12 max-w-md mx-auto w-full">
          <div className="space-y-6">
            {/* // <!-- Input Group --> */}
            <div className="space-y-4">
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
                  Name
                </label>
                <div className="relative flex items-center">
                  <span
                    className="material-symbols-outlined absolute left-4 text-on-surface-variant/50 text-xl"
                    data-icon="person"
                  >
                    person
                  </span>
                  <input
                    className="w-full bg-surface-container-lowest neumorphic-inset rounded-xl py-4 pl-12 pr-4 border-none text-on-surface focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/30 focus:shadow-none focus:outline-none"
                    placeholder="Enter Gmail"
                    type="email"
                  />
                </div>
              </div>
              <div className="group">
                <div className="flex justify-between items-end mb-2 ml-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Password
                  </label>
                  <a
                    className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed-dim hover:text-primary transition-colors"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative flex items-center">
                  <span
                    className="material-symbols-outlined absolute left-4 text-on-surface-variant/50 text-xl"
                    data-icon="lock"
                  >
                    lock
                  </span>
                  <input
                    name="password"
                    autoComplete="new-password"
                    className="w-full bg-surface-container-lowest neumorphic-inset rounded-xl py-4 pl-12 pr-12 border-none text-on-surface focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/30 focus:shadow-none focus:outline-none"
                    placeholder="••••••••"
                    type={showPass ? "text" : "password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 text-on-surface-variant/50 hover:text-on-surface transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPass ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* // <!-- Action Cluster (Thumb Zone) --> */}
            <Link href="/dashboard" className="w-full">
              <AuthActions
                registerText="Login"
                onRegister={() => console.log("Login clicked")}
                onGoogleLogin={() => console.log("Google login clicked")}
              />
            </Link>
          </div>
        </main>
        {/* // <!-- Footer Area --> */}
        <footer className="pb-10 px-6 text-center">
          <p className="text-sm text-on-surface-variant font-medium">
            New to Lalatrack?
            <Link
              className="text-primary-fixed-dim font-bold hover:underline transition-all"
              href="/auth/register"
            >
              Sign Up
            </Link>
          </p>
          <SecurityBadges />
        </footer>
      </div>
    </>
  );
}
