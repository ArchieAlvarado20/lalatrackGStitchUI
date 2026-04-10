type LogItemProps = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  amount: string | number;
  isNegative?: boolean;
};

const LogItem = ({
  icon: Icon,
  title,
  subtitle,
  amount,
  isNegative = false,
}: LogItemProps) => (
  <div className="bg-[#131313] p-4 rounded-2xl border border-white/5 flex items-center justify-between group hover:bg-[#1a1a1a] transition-all">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-[#20201f] rounded-xl flex items-center justify-center text-[#f26722] border border-white/5 group-hover:scale-110 transition-transform">
        <Icon size={20} />
      </div>
      <div>
        <p className="font-black text-white tracking-tight">{title}</p>
        <p className="text-[10px] text-[#adaaaa] font-medium">{subtitle}</p>
      </div>
    </div>
    <div className="text-right">
      <p
        className={`font-black italic tracking-tighter ${isNegative ? "text-[#ff6b6b]" : "text-[#f26722]"}`}
      >
        {isNegative ? "" : "+"}
        {amount}
      </p>
    </div>
  </div>
);

export default LogItem;
