import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, BookOpen, Clock, Award, Database } from 'lucide-react';

interface Props { lang: 'EN' | 'VN'; }

const t = {
  EN: {
    eyebrow: 'Proven at Scale',
    headline: 'Edtronaut at a Glance',
    stats: [
      { icon: Users, value: '10,000+', label: 'Active Users', color: 'text-[#000CAD]' },
      { icon: Database, value: '100,000+', label: 'Talent Pool Database', color: 'text-[#12EDA6]' },
      { icon: Award, value: '86%', label: 'Participants Gain Job-Relevant Skills', color: 'text-[#000CAD]' },
      { icon: BookOpen, value: '20+', label: 'Universities Across Vietnam & Singapore', color: 'text-[#12EDA6]' },
      { icon: Clock, value: '50%', label: 'Faster Time to Hire', color: 'text-[#000CAD]' },
      { icon: TrendingUp, value: '2.5X', label: 'ROI for Companies Using Job Simulation', color: 'text-[#12EDA6]' },
    ],
  },
  VN: {
    eyebrow: 'Đã Được Chứng Minh Quy Mô',
    headline: 'Edtronaut Nhìn Lại',
    stats: [
      { icon: Users, value: '10,000+', label: 'Người Dùng Hoạt Động', color: 'text-[#000CAD]' },
      { icon: Database, value: '100,000+', label: 'Cơ Sở Dữ Liệu Nhân Tài', color: 'text-[#12EDA6]' },
      { icon: Award, value: '86%', label: 'Học Viên Đạt Kỹ Năng Công Việc', color: 'text-[#000CAD]' },
      { icon: BookOpen, value: '20+', label: 'Trường ĐH Tại Việt Nam & Singapore', color: 'text-[#12EDA6]' },
      { icon: Clock, value: '50%', label: 'Tuyển Dụng Nhanh Hơn', color: 'text-[#000CAD]' },
      { icon: TrendingUp, value: '2.5X', label: 'ROI Cho Công Ty Dùng Mô Phỏng', color: 'text-[#12EDA6]' },
    ],
  },
};

function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            setValue(Math.round(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

function StatCounter({ stat }: { stat: typeof t.EN.stats[0] }) {
  const Icon = stat.icon;
  const numericMatch = stat.value.match(/[\d.]+/);
  const numeric = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = stat.value.replace(/[\d.]+/, '');
  const { value, ref } = useCountUp(numeric * (stat.value.includes('.') ? 10 : 1));

  const displayValue = stat.value.includes('.')
    ? (value / 10).toFixed(1) + suffix
    : value + suffix;

  return (
    <div ref={ref} className="text-center group">
      <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#000CAD]/10 transition-colors">
        <Icon size={24} className={stat.color} />
      </div>
      <p className={`text-3xl font-black ${stat.color} mb-1`}>{displayValue}</p>
      <p className="text-sm text-slate-500 leading-tight max-w-28 mx-auto">{stat.label}</p>
    </div>
  );
}

export default function SocialProof({ lang }: Props) {
  const tx = t[lang];

  return (
    <section className="py-16 bg-slate-50" id="social-proof">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#000CAD]">{tx.eyebrow}</span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mt-2">{tx.headline}</h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {tx.stats.map((s) => <StatCounter key={s.label} stat={s} />)}
        </div>
      </div>
    </section>
  );
}
