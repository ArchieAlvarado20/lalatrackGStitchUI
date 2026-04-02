"use client";

import { useState } from "react";
import Link from "next/link";
import HeadAuth from "../HeadAuth";
import SecurityBadges from "../SecurityBadges";
import AuthActions from "../AuthActions";

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <>
      <HeadAuth />
      <div className="min-h-screen flex-colitems-center justify-center bg-surface">
        <main className="flex-grow flex flex-col justify-end px-6 pb-6 max-w-md mx-auto w-full">
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Email */}
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
                  Name
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/50 text-xl">
                    person
                  </span>
                  <input
                    name="name"
                    autoComplete="name"
                    className="w-full bg-surface-container-lowest neumorphic-inset rounded-xl py-4 pl-12 pr-4 border-none text-on-surface focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/30 focus:shadow-none focus:outline-none"
                    placeholder="Enter your Name"
                    type="email"
                  />
                </div>
              </div>

              {/* Confirm Email */}
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
                  Email
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/50 text-xl">
                    mail
                  </span>
                  <input
                    name="confirmEmail"
                    autoComplete="email"
                    className="w-full bg-surface-container-lowest neumorphic-inset rounded-xl py-4 pl-12 pr-4 border-none text-on-surface focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/30 focus:shadow-none focus:outline-none"
                    placeholder="Enter Email"
                    type="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="group">
                <div className="flex justify-between items-end mb-2 ml-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Password
                  </label>
                </div>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/50 text-xl">
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

              {/* Confirm Password */}
              <div className="group">
                <div className="flex justify-between items-end mb-2 ml-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Confirm Password
                  </label>
                </div>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/50 text-xl">
                    lock
                  </span>
                  <input
                    name="confirmPassword"
                    autoComplete="new-password"
                    className="w-full bg-surface-container-lowest neumorphic-inset rounded-xl py-4 pl-12 pr-12 border-none text-on-surface focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/30 focus:shadow-none focus:outline-none"
                    placeholder="••••••••"
                    type={showConfirmPass ? "text" : "password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                    className="absolute right-4 text-on-surface-variant/50 hover:text-on-surface transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showConfirmPass ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <AuthActions
              registerText="Register"
              onRegister={() => console.log("Register clicked")}
              onGoogleLogin={() => console.log("Google login clicked")}
            />
          </div>
        </main>

        <footer className="pb-10 px-6 text-center">
          <p className="text-sm text-on-surface-variant font-medium">
            Already have an Account?
            <Link
              className="text-primary-fixed-dim font-bold hover:underline transition-all"
              href="/auth/login"
            >
              Login
            </Link>
          </p>
          <SecurityBadges />
        </footer>
      </div>
    </>
  );
}
