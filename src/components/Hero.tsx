import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
  lang: 'EN' | 'VN';
  onBookDemo: () => void;
  onTrySample: () => void;
}

const t = {
  EN: {
    badge: 'Evidence-Based Hiring Platform',
    headline1: 'Stop Guessing on Talent.',
    headline2: 'Measure Capability with',
    headline3: 'Job Simulations.',
    sub: 'Edtronaut replaces unreliable CVs and subjective interviews with localized Job Simulations. Allow candidates to prove their practical skills through execution before you hire, and validate employee capabilities post-training with real-world work evidence.',
    primary: 'Book a Free Demo — 30 Mins',
    secondary: 'View Sample Simulation',
    proof: 'Trusted by HR Managers & L&D Managers at Vietnamese enterprises with 200+ employees.',
    stats: [
      { value: '2.5X', label: 'ROI' },
      { value: '86%', label: 'Participants Gain Job-Relevant Skills' },
      { value: '50%', label: 'Faster Time to Hire' },
    ],
  },
  VN: {
    badge: 'Nền Tảng Tuyển Dụng Dựa Trên Bằng Chứng',
    headline1: 'Ngừng Đoán Mò Nhân Tài.',
    headline2: 'Đo Lường Năng Lực với',
    headline3: 'Mô Phỏng Công Việc.',
    sub: 'Edtronaut thay thế CV không đáng tin cậy và phỏng vấn chủ quan bằng Mô Phỏng Công Việc bản địa hóa. Cho phép ứng viên chứng minh kỹ năng thực tế trước khi bạn tuyển dụng, và xác thực năng lực nhân viên sau đào tạo bằng bằng chứng công việc thực tế.',
    primary: 'Đặt Demo Miễn Phí — 30 Phút',
    secondary: 'Xem Mô Phỏng Mẫu',
    proof: 'Được tin dùng bởi Quản lý HR & L&D tại các doanh nghiệp Việt Nam có 200+ nhân viên.',
    stats: [
      { value: '2.5X', label: 'ROI' },
      { value: '86%', label: 'Học Viên Đạt Kỹ Năng Công Việc' },
      { value: '50%', label: 'Tuyển Dụng Nhanh Hơn' },
    ],
  },
};


export default function Hero({ lang, onBookDemo, onTrySample }: HeroProps) {
  const tx = t[lang];

  return (
    <section className="bg-white pt-6 pb-0 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Very subtle background accent — light blue tint top-right only */}
      <div
        className="absolute top-0 right-0 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(0,12,173,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative w-full">
        {/* Main split layout */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Headline */}
            <h1 className="text-[2.4rem] xl:text-[3rem] font-black leading-[1.1] tracking-tight text-slate-900 mb-5">
              <span className="block">{tx.headline1}</span>
              <span className="block mt-1">{tx.headline2}</span>
              <span
                className="block mt-1"
                style={{ color: '#000CAD' }}
              >
                {tx.headline3}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base xl:text-lg text-slate-500 leading-relaxed mb-6 max-w-[500px]">
              {tx.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <button
                onClick={onBookDemo}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#000CAD] text-white font-bold rounded-xl hover:bg-[#000CAD]/90 active:scale-[0.98] transition-all duration-150 text-sm shadow-md shadow-[#000CAD]/20"
              >
                {tx.primary}
                <ArrowRight size={15} />
              </button>
              <button
                onClick={onTrySample}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#000CAD] font-semibold rounded-xl border-2 border-[#000CAD]/20 hover:border-[#000CAD]/50 hover:bg-[#000CAD]/4 active:scale-[0.98] transition-all duration-150 text-sm"
              >
                {tx.secondary}
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Micro-proof */}
            <div className="flex items-start gap-2 text-slate-400 text-sm">
              <CheckCircle size={15} className="text-[#12EDA6] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <span className="leading-snug">{tx.proof}</span>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-0 border-t border-slate-100 pt-6 mt-6">
              {tx.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex-1 ${i < tx.stats.length - 1 ? 'border-r border-slate-100 pr-6 mr-6' : ''}`}
                >
                  <p className="text-2xl font-black text-[#000CAD] leading-none">{s.value}</p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-[520px]">
              <img
                src="/images/ChatGPT_Image_Jun_22,_2026,_11_49_57_AM.png"
                alt="Edtronaut Assessment Platform"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
