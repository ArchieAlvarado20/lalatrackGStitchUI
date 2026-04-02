import Link from "next/link";

export default function HeadAuth() {
  return (
    <>
      <header className="pt-16 pb-8 px-8 flex flex-col items-center justify-center mb-12">
        <Link href="/">
          <div className="relative">
            {/* // <!-- Subtle glow effect behind logo --> */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
            <h1 className="text-5xl font-black text-[#F26722] tracking-tighter relative z-10 italic">
              Lalatrack
            </h1>
          </div>
        </Link>
        <p className="text-on-surface-variant text-sm mt-4 font-medium tracking-wide uppercase">
          The ultimate tool for the modern delivery rider
        </p>
      </header>
    </>
  );
}
