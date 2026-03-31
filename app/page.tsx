import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl dark:bg-[#0e0e0e]/80">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black text-[#F26722] tracking-tighter">
            Lalatrack
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-[#F26722] border-b-2 border-[#F26722] pb-1 font-headline font-bold tracking-tight"
              href="#"
            >
              Home
            </a>
            <a
              className="text-[#adaaaa] hover:text-[#f46823] transition-colors font-headline font-bold tracking-tight"
              href="#"
            >
              Features
            </a>
            <a
              className="text-[#adaaaa] hover:text-[#f46823] transition-colors font-headline font-bold tracking-tight"
              href="#"
            >
              Dashboard
            </a>
          </div>
          <Link
            href="/auth/login"
            className="bg-primary-container text-on-primary-container font-bold px-6 py-2 rounded-lg hover:scale-95 transition-all duration-200 active:scale-95 shadow-lg inline-block text-center"
          >
            Login
          </Link>
        </div>
      </nav>
      <main className="pt-24 pb-32">
        {/* <!-- Hero Section --> */}
        <section className="relative px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[819px]">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high mb-6 border border-outline-variant/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
              <span className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                Engineered for Deliveries
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black font-headline tracking-tighter leading-[0.9] mb-6">
              Track Every{" "}
              <span className="text-primary italic">Kilometer.</span>
              <br />
              Own Every <span className="text-secondary italic">Centavo.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              The ultimate tool for the modern delivery rider. Real-time net
              profit calculation, fuel loss monitoring, and high-velocity goal
              tracking in one kinetic cockpit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-black rounded-xl text-lg neumorphic-flat hover:bg-primary-fixed transition-all flex items-center justify-center gap-2">
                Join the Fleet
                <span className="material-symbols-outlined">bolt</span>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-surface-container-high text-on-surface font-bold rounded-xl text-lg hover:bg-surface-bright transition-all border border-outline-variant/10">
                View Demo
              </button>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                <img
                  className="w-10 h-10 rounded-full border-2 border-surface-dim"
                  data-alt="close up headshot of a smiling Filipino delivery rider wearing a helmet"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCehPfDjg6U83WcS8htwRhAXSEEd5wcO5CuXVoryuSFGR9O32N6qDvkZqI30ObRZ6rNBZ7vVjvbFTEaXQ1U6RAhv9wZ_9x_jUH8fn6x8qAq7H0-ARktCpgBMxT1oPlSJT6YFb5rDu4Gl8NnXUhEquRhzZdUVE5poVT29-1lpinLtWyUoGfNEB-URtBawYhZCvmPDr4mrmoBnZj3cFwFuXUDhamiGxqja55EnuCUzUORYpzoY5btp08YMuKFDZzCgsMIbZBp57jCiNvg"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-surface-dim"
                  data-alt="portrait of a focused female delivery courier with city skyline background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5vk9CuqsibwB3JAKLeJaHnFWOAseLVkrffqt6iNEcHhAFp81om_QCsYW8jJuUaG3Qjf8OQtzFYtzE0FDhIwMPCqHmT87xQFNlD4vniifSGls1ODtesQox9Dt1QGMAKDCHAX0KT_lvZ3W98QuFtgAd92au4YW7k9b8LoBb1ddWrjeDO2_IuYcuHbRv_l9gwGznMy0C6o94Wl__9aSMSiLl_RPuCtEBuJSBtmOnwS2ONC4JABAyYZFv1OMgQnNXjv2pNVlaLduq7wtu"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-surface-dim"
                  data-alt="outdoor portrait of a happy logistics professional with motorcycle"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXCygiAiDYWOGOELoBIVeXxpeD-c6rpnx4l45T8T03mM7Zhq3TRqD6SU5INr1rJmaYKNJ8X9W_nsRKcF33TcYUGE0Z0V1E-xt1q9Fbq1nDO3hanf8zSoxuQvE4Fcr0idNxC_eJLwt0-PtTuC9yOE04W-B3XndAO217sj_6UX6__WCrIzRCwMCOekqT2VWF3iFGnTI0MiUUi_o8lOs2Ag5xeDgnLZ-pRX1zSKfi7FdQXdj-i056hwpGiYKuUtVpW9w1o9paqee3r3YD"
                />
              </div>
              <p className="text-sm text-on-surface-variant font-medium">
                Trusted by
                <span className="text-on-surface font-bold">12,000+</span>{" "}
                riders nationwide
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            {/* <!-- Mobile Mockup Wrapper --> */}
            <div className="relative mx-auto w-full max-w-[300px] h-[600px] bg-surface-container-lowest rounded-[3rem] p-4 shadow-2xl border-4 border-surface-bright overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surface-container-lowest rounded-b-2xl z-20"></div>
              {/* <!-- App Interface --> */}
              <div className="h-full w-full bg-surface rounded-[2rem] overflow-hidden flex flex-col pt-8 px-4 relative">
                <div className="flex justify-between items-center mb-6">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    menu
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary-container"></div>
                </div>
                {/* <!-- Mini Dashboard --> */}
                <div className="bg-surface-container-low rounded-2xl p-4 mb-4 neumorphic-flat">
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold mb-1">
                    Today's Earnings
                  </p>
                  <h3 className="text-2xl font-black text-on-surface">
                    ₱2,450.50
                  </h3>
                  <div className="flex items-center gap-1 text-secondary text-[10px] mt-1 font-bold">
                    <span className="material-symbols-outlined text-sm">
                      trending_up
                    </span>
                    +12% vs yesterday
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-surface-container-high rounded-2xl p-3 flex flex-col gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">
                      local_gas_station
                    </span>
                    <p className="text-[10px] font-bold text-on-surface-variant">
                      Fuel
                    </p>
                    <p className="text-sm font-black">₱320.00</p>
                  </div>
                  <div className="bg-surface-container-high rounded-2xl p-3 flex flex-col gap-2">
                    <span className="material-symbols-outlined text-secondary text-lg">
                      route
                    </span>
                    <p className="text-[10px] font-bold text-on-surface-variant">
                      Dist.
                    </p>
                    <p className="text-sm font-black">84.2km</p>
                  </div>
                </div>
                <div className="mt-auto pb-4">
                  <div className="h-12 w-full bg-primary rounded-xl flex items-center justify-center font-black text-sm text-on-primary neumorphic-flat">
                    START SHIFT
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Decorative Elements --> */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 blur-[80px] rounded-full"></div>
          </div>
        </section>
        {/* <!-- Features Bento Grid --> */}
        <section className="px-6 max-w-7xl mx-auto mt-32">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter mb-4 uppercase">
              Precision <span className="text-primary">Instruments</span>
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* <!-- Feature 1: Net Profit --> */}
            <div className="md:col-span-8 bg-surface-container-low rounded-3xl p-8 relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  payments
                </span>
                <h3 className="text-2xl font-black mb-3">
                  Real-time Net Profit
                </h3>
                <p className="text-on-surface-variant max-w-md mb-8">
                  Stop guessing what you actually earned. Lalatrack subtracts
                  fuel, commissions, and maintenance in real-time, giving you
                  your actual take-home pay.
                </p>
                <div className="mt-auto">
                  <img
                    className="w-full h-48 object-cover rounded-2xl border border-outline-variant/10"
                    data-alt="abstract high-tech financial bar chart with orange glowing highlights on a dark carbon fiber texture background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA80XsSMDj4VWRYmhrU0yMO7UDXEHEF1BgxI5bE078W4OcBIJHGNRL2WizLuf9JJWK-sKCFGZ6xs3BexjJioV3MYW0-Gr3fLqXRZZRW47Dq4YjH8nSF1D3mqeUrq7PCRnPyKuK1oS1fMYfp8excl_r8bsyP_EiWxjOaxZEL-gMS8FVYD6h1Qkaun0QGBk6F-H2OtTcX2OjsS3MW661IwzGzIetcBHB5qfsjVRpeQUlwI8PSgqDPxRRYmzxjEJTKQX_c5GQX2hNYyWbA"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Feature 2: Fuel Tracking --> */}
            <div className="md:col-span-4 bg-surface-container-high rounded-3xl p-8 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-surface-bright flex items-center justify-center mb-8 border border-outline-variant/10">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  local_gas_station
                </span>
              </div>
              <h3 className="text-xl font-black mb-3">Fuel Intelligence</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Log every liter. Our smart dashboard predicts your next refill
                and alerts you to sudden drops in fuel efficiency.
              </p>
              <div className="mt-8 pt-8 border-t border-outline-variant/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                    Efficiency
                  </span>
                  <span className="text-xs font-bold text-secondary">
                    Optimal
                  </span>
                </div>
                <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-4/5"></div>
                </div>
              </div>
            </div>
            {/* <!-- Feature 3: Daily Goals --> */}
            <div className="md:col-span-4 bg-surface-container-high rounded-3xl p-8 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-surface-bright flex items-center justify-center mb-8 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-3xl">
                  track_changes
                </span>
              </div>
              <h3 className="text-xl font-black mb-3">Daily Goal Pulse</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Set your daily target and watch the pulse grow. Visual feedback
                keeps you motivated for that one last delivery.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      className="text-surface"
                      cx="64"
                      cy="64"
                      fill="transparent"
                      r="58"
                      stroke="currentColor"
                      strokeWidth="8"
                    />
                    <circle
                      className="text-primary"
                      cx="64"
                      cy="64"
                      fill="transparent"
                      r="58"
                      stroke="currentColor"
                      strokeDasharray="364.4"
                      strokeDashoffset="100"
                      strokeWidth="8"
                    />
                  </svg>
                  <span className="absolute text-xl font-black tracking-tighter">
                    72%
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Feature 4: Logistics Map --> */}
            <div className="md:col-span-8 bg-surface-container-low rounded-3xl p-0 relative overflow-hidden group min-h-[300px]">
              <div className="absolute inset-0 z-0 opacity-40">
                <img
                  className="w-full h-full object-cover"
                  data-alt="dark themed stylized vector map of an urban metropolitan area with glowing orange delivery routes and traffic nodes"
                  data-location="Manila"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKJfeWkhIXHntJPtyzbwd--Qk0sAe2AkMNgoCoSdys_aKK5S3r4kImIZMz-lJ7fR1EfQEvqQypztgphqe-UqCC02ztrJyEjX7mj_79cpnlHW-igyr24hZGexWwDNJIDtReMjSdk57UE3SSzcTS7Ij-v3f7DH0HV-fES-EGN3lOxkDepCVxO3-IgJkn_5pK_JvNvis-oxjQy0EwAmazuPju-qpoqvP_Z5Ovf5r3QV8R5NX19lsHTHveRxK7bn3RLsesnfaaZ81IuKcw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent z-10 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-black mb-3">Route Optimization</h3>
                <p className="text-on-surface-variant max-w-xs mb-6">
                  Heatmaps of your highest earnings zones. Know where to wait
                  and where to ride to maximize every kilometer.
                </p>
                <button className="w-fit text-primary font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                  Explore Heatmaps
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Call to Action Section --> */}
        <section className="mt-32 px-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary-container rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black text-on-primary tracking-tighter mb-8">
                Ready to Optimize Your Ride?
              </h2>
              <p className="text-on-primary-container text-lg font-medium max-w-2xl mx-auto mb-12 opacity-90">
                Join the fleet of professional riders who are treating their
                delivery job like a business. Better data, higher earnings, zero
                guesswork.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-on-primary text-primary font-black px-10 py-5 rounded-2xl text-xl neumorphic-flat active:scale-95 transition-all">
                  Join the Fleet
                </button>
                <button className="bg-transparent border-2 border-on-primary text-on-primary font-black px-10 py-5 rounded-2xl text-xl hover:bg-on-primary/10 transition-all">
                  Talk to Support
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-low pt-16 pb-32 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-black text-primary tracking-tighter mb-6">
              Lalatrack
            </div>
            <p className="text-on-surface-variant max-w-xs leading-relaxed mb-8">
              The premium financial cockpit for the modern gig economy
              professional. Built by riders, for riders.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">public</span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">share</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs text-on-surface">
              Product
            </h4>
            <ul className="space-y-4 text-on-surface-variant font-medium">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Dashboard
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Goal Tracker
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Expense Hub
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs text-on-surface">
              Legal
            </h4>
            <ul className="space-y-4 text-on-surface-variant font-medium">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/10 text-center md:text-left">
          <p className="text-on-surface-variant text-xs">
            © 2026 Lalatrack Delevery Technology. All rights reserved.
          </p>
        </div>
      </footer>
      {/* <!-- Bottom Navigation Bar (Mobile Only) --> */}
      <nav className="md:hidden fixed bottom-0 w-full rounded-t-2xl z-50 pb-safe bg-[#131313]/90 backdrop-blur-2xl dark:bg-[#131313]/90 shadow-[0_-4px_20px_0_rgba(0,0,0,0.5)]">
        <div className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 h-20">
          <div className="flex flex-col items-center justify-center bg-[#2c2c2c] text-[#ff9061] rounded-xl px-4 py-2 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]">
            <span className="material-symbols-outlined">directions_car</span>
            <span className="text-[10px] font-bold uppercase tracking-widest font-['Inter']">
              Drive
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-[#adaaaa] px-4 py-2 hover:text-[#F26722] transition-all">
            <span className="material-symbols-outlined">payments</span>
            <span className="text-[10px] font-bold uppercase tracking-widest font-['Inter']">
              Earnings
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-[#adaaaa] px-4 py-2 hover:text-[#F26722] transition-all">
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="text-[10px] font-bold uppercase tracking-widest font-['Inter']">
              Expenses
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-[#adaaaa] px-4 py-2 hover:text-[#F26722] transition-all">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-bold uppercase tracking-widest font-['Inter']">
              Profile
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
