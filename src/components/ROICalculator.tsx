import { useState, useEffect, useRef } from 'react';
import { Users, DollarSign, TrendingDown, ArrowRight, AlertCircle, BookOpen, ShieldAlert } from 'lucide-react';

interface Props { lang: 'EN' | 'VN'; onBookDemo: () => void; }

const t = {
  EN: {
    eyebrow: 'ROI Impact Calculator',
    headline: 'How Much Is Bad Hiring Costing You?',
    sub: 'Discover the hidden financial impact of mis-hires, turnover, and ineffective training.',
    inputsHeading: 'Your Organization Parameters',
    slider1Label: 'Annual Hires / Replacements',
    slider2Label: 'Avg. Monthly Salary per Role',
    slider3Label: 'Mis-hire / Turnover Rate',
    slider1Bench: 'Industry benchmark: 30–80 per year for 200–500 headcount',
    slider2Bench: 'Benchmark: $1,000–$2,500/month for mid-level roles',
    slider3Bench: 'National average: 15–25% annual turnover',
    resultsHeading: 'Your Financial Exposure',
    metric1Label: 'Cost Per Single Mis-hire',
    metric1Sub: 'Salary × 4 — covers recruitment, pipeline, onboarding & lost productivity',
    metric2Label: 'Annual Financial Loss',
    metric2Sub: (count: number, cost: string) => `${count} mis-hires × ${cost} each`,
    metric3Label: 'Training Budget at Risk',
    metric3Sub: '70% of L&D spend is unrecoverable without post-training validation',
    shrm: 'SHRM Research',
    shrmText: 'Replacing an employee costs 50–200% of annual salary. Edtronaut cuts early mis-hire rates by 50%.',
    cta: 'Get My Custom ROI Analysis',
    ctaSub: 'Free 30-min enterprise evaluation. No commitment.',
    hires: 'hires',
    million: 'K USD',
    billion: 'M USD',
    perYear: '/ year',
    lost: 'lost annually',
  },
  VN: {
    eyebrow: 'Máy Tính ROI',
    headline: 'Tuyển Sai Đang Tốn Bao Nhiêu Tiền Của Bạn?',
    sub: 'Khám phá tác động tài chính ẩn của việc tuyển sai, thay đổi nhân sự và đào tạo không hiệu quả.',
    inputsHeading: 'Thông Số Tổ Chức Của Bạn',
    slider1Label: 'Số Lượng Tuyển Dụng / Thay Thế Hàng Năm',
    slider2Label: 'Lương Trung Bình Hàng Tháng',
    slider3Label: 'Tỷ Lệ Tuyển Sai / Thay Đổi Nhân Sự',
    slider1Bench: 'Điểm chuẩn ngành: 30–80 mỗi năm với quy mô 200–500 người',
    slider2Bench: 'Điểm chuẩn: $1,000–$2,500/tháng cho vị trí cấp trung',
    slider3Bench: 'Trung bình quốc gia: 15–25% biến động hàng năm',
    resultsHeading: 'Rủi Ro Tài Chính Của Bạn',
    metric1Label: 'Chi Phí Cho Mỗi Lần Tuyển Sai',
    metric1Sub: 'Lương × 4 — bao gồm tuyển dụng, pipeline, onboarding & năng suất bị mất',
    metric2Label: 'Thiệt Hại Tài Chính Hàng Năm',
    metric2Sub: (count: number, cost: string) => `${count} lần tuyển sai × ${cost} mỗi lần`,
    metric3Label: 'Ngân Sách Đào Tạo Có Nguy Cơ',
    metric3Sub: '70% chi phí L&D không thể thu hồi nếu không có xác thực sau đào tạo',
    shrm: 'Nghiên Cứu SHRM',
    shrmText: 'Thay thế một nhân viên tốn 50–200% lương hàng năm. Edtronaut giảm tỷ lệ tuyển sai sớm xuống 50%.',
    cta: 'Nhận Phân Tích ROI Tùy Chỉnh',
    ctaSub: 'Đánh giá doanh nghiệp miễn phí 30 phút. Không cam kết.',
    hires: 'tuyển dụng',
    million: 'K USD',
    billion: 'M USD',
    perYear: '/ năm',
    lost: 'mất hàng năm',
  },
};

function useAnimatedNumber(target: number, duration = 600) {
  const [display, setDisplay] = useState(target);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const fromRef = useRef(target);

  useEffect(() => {
    const from = fromRef.current;
    if (from === target) return;
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    startRef.current = null;

    const step = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + (target - from) * ease));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        fromRef.current = target;
      }
    };
    frameRef.current = requestAnimationFrame(step);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [target, duration]);

  return display;
}

function formatUSD(amount: number, lang: 'EN' | 'VN') {
  const tx = t[lang];
  if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(1)} ${tx.billion}`;
  return `${(amount / 1_000).toFixed(0)} ${tx.million}`;
}

interface SliderProps {
  label: string;
  benchmark: string;
  value: number;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  pct: number;
  onChange: (v: number) => void;
  icon: React.ReactNode;
}

function Slider({ label, benchmark, value, min, max, step, displayValue, pct, onChange, icon }: SliderProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#000CAD]/6 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <label className="text-sm font-semibold text-slate-700 leading-tight">{label}</label>
        </div>
        <span className="text-sm font-black text-[#000CAD] whitespace-nowrap tabular-nums">{displayValue}</span>
      </div>

      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="roi-slider w-full"
          style={{
            background: `linear-gradient(to right, #000CAD ${pct}%, #E2E8F0 ${pct}%)`,
          }}
        />
      </div>

      <div className="flex justify-between items-center">
        <p className="text-[11px] text-slate-400 leading-tight">{benchmark}</p>
      </div>
    </div>
  );
}

export default function ROICalculator({ lang, onBookDemo }: Props) {
  const [hires, setHires] = useState(50);
  const [salary, setSalary] = useState(2000);
  const [rate, setRate] = useState(20);
  const tx = t[lang];

  const costPerMishireUSD = salary * 4;
  const misHireCount = Math.round(hires * (rate / 100));
  const totalBleedingUSD = misHireCount * costPerMishireUSD;
  const ldBudgetAtRisk = totalBleedingUSD * 0.7;

  const animatedTotal = useAnimatedNumber(totalBleedingUSD);
  const animatedPerHire = useAnimatedNumber(costPerMishireUSD);
  const animatedLd = useAnimatedNumber(ldBudgetAtRisk);

  const hirePct = ((hires - 10) / 490) * 100;
  const salaryPct = ((salary - 500) / 9500) * 100;
  const ratePct = ((rate - 5) / 55) * 100;

  return (
    <section className="py-24 bg-[#F8FAFC]" id="roi">
      {/* Slider styles */}
      <style>{`
        .roi-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 5px;
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
          transition: background 0.1s;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #000CAD;
          border: 3px solid #fff;
          box-shadow: 0 0 0 1px #000CAD, 0 2px 6px rgba(0,12,173,0.25);
          cursor: pointer;
          transition: box-shadow 0.15s, transform 0.15s;
        }
        .roi-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 0 1px #000CAD, 0 0 0 6px rgba(0,12,173,0.12);
          transform: scale(1.1);
        }
        .roi-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #000CAD;
          border: 3px solid #fff;
          box-shadow: 0 0 0 1px #000CAD, 0 2px 6px rgba(0,12,173,0.25);
          cursor: pointer;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#000CAD] bg-[#000CAD]/6 px-3 py-1.5 rounded-full mb-4">
            {tx.eyebrow}
          </span>
          <h2 className="text-3xl lg:text-[2.6rem] font-black text-[#0F172A] leading-tight mb-4">
            {tx.headline}
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">{tx.sub}</p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-6 items-start">

          {/* LEFT: Inputs */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <div className="px-8 py-5 border-b border-[#E2E8F0]">
              <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-widest">{tx.inputsHeading}</h3>
            </div>
            <div className="px-8 py-8 space-y-9">
              <Slider
                label={tx.slider1Label}
                benchmark={tx.slider1Bench}
                value={hires}
                min={10} max={500} step={5}
                displayValue={`${hires} ${tx.hires}`}
                pct={hirePct}
                onChange={setHires}
                icon={<Users size={14} className="text-[#000CAD]" />}
              />
              <div className="border-t border-[#E2E8F0]" />
              <Slider
                label={tx.slider2Label}
                benchmark={tx.slider2Bench}
                value={salary}
                min={500} max={10000} step={100}
                displayValue={`$${salary.toLocaleString()}/mo`}
                pct={salaryPct}
                onChange={setSalary}
                icon={<DollarSign size={14} className="text-[#000CAD]" />}
              />
              <div className="border-t border-[#E2E8F0]" />
              <Slider
                label={tx.slider3Label}
                benchmark={tx.slider3Bench}
                value={rate}
                min={5} max={60} step={1}
                displayValue={`${rate}%`}
                pct={ratePct}
                onChange={setRate}
                icon={<TrendingDown size={14} className="text-[#000CAD]" />}
              />
            </div>

            {/* SHRM footnote inside inputs card */}
            <div className="px-8 py-5 bg-slate-50 border-t border-[#E2E8F0] flex items-start gap-3">
              <AlertCircle size={14} className="text-slate-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-500">{tx.shrm}: </span>
                {tx.shrmText}
              </p>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="flex flex-col gap-4">

            {/* PRIMARY METRIC — Annual Loss (dominant element) */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="px-6 pt-6 pb-2 flex items-center gap-2">
                <ShieldAlert size={15} className="text-[#DC2626]" />
                <p className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">{tx.metric2Label}</p>
              </div>
              <div className="px-6 pb-5">
                <p
                  className="text-[3.2rem] font-black leading-none tracking-tight tabular-nums"
                  style={{ color: '#DC2626' }}
                >
                  {formatUSD(animatedTotal, lang)}
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  {tx.metric2Sub(misHireCount, formatUSD(costPerMishireUSD, lang))}
                </p>
              </div>
              <div className="h-1 w-full bg-[#E2E8F0]">
                <div
                  className="h-full bg-[#DC2626] transition-all duration-500"
                  style={{ width: `${Math.min((totalBleedingUSD / 2_000_000) * 100, 100)}%` }}
                />
              </div>
            </div>

            {/* Secondary metrics row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Cost per mis-hire */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-5">
                <div className="flex items-center gap-1.5 mb-3">
                  <AlertCircle size={13} className="text-slate-400" />
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{tx.metric1Label}</p>
                </div>
                <p className="text-xl font-black text-[#0F172A] tabular-nums leading-none">
                  {formatUSD(animatedPerHire, lang)}
                </p>
                <p className="text-[10px] text-slate-400 mt-2 leading-tight">{tx.metric1Sub}</p>
              </div>

              {/* L&D waste */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-5">
                <div className="flex items-center gap-1.5 mb-3">
                  <BookOpen size={13} className="text-slate-400" />
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{tx.metric3Label}</p>
                </div>
                <p className="text-xl font-black text-[#0F172A] tabular-nums leading-none">
                  {formatUSD(animatedLd, lang)}
                </p>
                <p className="text-[10px] text-slate-400 mt-2 leading-tight">{tx.metric3Sub}</p>
              </div>
            </div>

            {/* Breakdown bar — simple visual */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Cost Breakdown per Mis-hire</p>
              {[
                { label: 'Recruitment & Pipeline', pct: 25 },
                { label: 'Lost Productivity', pct: 35 },
                { label: 'Onboarding & Training', pct: 25 },
                { label: 'Probation Salary Waste', pct: 15 },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 mb-2.5 last:mb-0">
                  <p className="text-[11px] text-slate-500 w-40 flex-shrink-0">{item.label}</p>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#000CAD] rounded-full"
                      style={{ width: `${item.pct * 4}%`, opacity: 0.15 + item.pct / 100 }}
                    />
                  </div>
                  <p className="text-[11px] font-bold text-slate-500 w-6 text-right">{item.pct}%</p>
                </div>
              ))}
            </div>

            {/* CTA — strongest conversion element */}
            <button
              onClick={onBookDemo}
              className="group w-full flex items-center justify-between gap-3 bg-[#000CAD] text-white px-6 py-4 rounded-2xl hover:bg-[#000CAD]/90 active:scale-[0.99] transition-all duration-150 shadow-lg shadow-[#000CAD]/20"
            >
              <div className="text-left">
                <p className="font-bold text-[15px] leading-tight">{tx.cta}</p>
                <p className="text-blue-300 text-xs mt-0.5">{tx.ctaSub}</p>
              </div>
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
