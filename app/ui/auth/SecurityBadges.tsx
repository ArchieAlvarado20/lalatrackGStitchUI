export default function SecurityBadges() {
  return (
    <>
      {/* {<!-- Security Badges --> */}
      <section className="mt-10 flex flex-wrap justify-center gap-6 opacity-60">
        <div className="flex items-center gap-2 grayscale brightness-200">
          <span className="material-symbols-outlined text-sm">
            verified_user
          </span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">
            SECURE ENCRYPTION
          </span>
        </div>
        <div className="flex items-center gap-2 grayscale brightness-200">
          <span className="material-symbols-outlined text-sm">gpp_good</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">
            VERIFIED FLEET
          </span>
        </div>
        <div className="flex items-center gap-2 grayscale brightness-200">
          <span className="material-symbols-outlined text-sm">shield</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">
            PCI COMPLIANT
          </span>
        </div>
      </section>
    </>
  );
}
