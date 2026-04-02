import { FcGoogle } from "react-icons/fc";

export default function AuthActions({
  onRegister,
  onGoogleLogin,
  registerText,
}) {
  return (
    <div className="pt-4 space-y-4">
      <button
        type="button"
        onClick={onRegister}
        className="w-full bg-primary-container from-primary to-primary-container text-on-primary-container font-black py-5 rounded-xl text-lg neumorphic-button uppercase tracking-wider transition-all active:scale-95"
      >
        {registerText}
      </button>

      <div className="flex items-center gap-4 py-2">
        <div className="h-px bg-surface-variant flex-grow"></div>
        <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
          or
        </span>
        <div className="h-px bg-surface-variant flex-grow"></div>
      </div>

      <button
        type="button"
        onClick={onGoogleLogin}
        className="w-full bg-surface-container-high text-on-surface font-bold py-4 rounded-xl text-sm border border-outline-variant/10 hover:bg-surface-bright transition-all active:scale-95 flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-xl text-primary">
          <FcGoogle className="text-xl" />
        </span>
        {`${registerText.toUpperCase()} WITH GMAIL`}
      </button>
    </div>
  );
}
