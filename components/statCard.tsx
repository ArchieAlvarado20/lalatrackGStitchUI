interface StatCardProps {
  label: string;
  value: string;
  subtext: string;
  percentage: number;
  color: string;
}

const StatCard = ({
  label,
  value,
  subtext,
  percentage,
  color = "#f26722",
}: StatCardProps) => (
  <div className="bg-[#131313] p-6 rounded-[2rem] border border-white/5 flex flex-col items-center group hover:border-[#f26722]/30 transition-all duration-500">
    <div className="relative w-24 h-24 mb-4">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="48"
          cy="48"
          r="40"
          stroke="#20201f"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx="48"
          cy="48"
          r="40"
          stroke={color}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray="251"
          strokeDashoffset={251 - (251 * percentage) / 100}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-black text-xl italic text-white group-hover:scale-110 transition-transform">
        {percentage}%
      </div>
    </div>
    <p className="text-[10px] uppercase font-black text-[#adaaaa] tracking-widest mb-1">
      {label}
    </p>
    <p className="font-black text-lg tracking-tight">{value}</p>
    {subtext && (
      <p className="text-[8px] font-bold text-[#adaaaa]/40 uppercase tracking-tighter mt-0.5">
        {subtext}
      </p>
    )}
  </div>
);
export default StatCard;
