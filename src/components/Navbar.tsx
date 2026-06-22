import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Zap, ArrowRight, FileText } from 'lucide-react';

interface NavbarProps {
  lang: 'EN' | 'VN';
  setLang: (l: 'EN' | 'VN') => void;
  onBookDemo: () => void;
  onTrySample: () => void;
}

const t = {
  EN: {
    solutions: 'Solutions',
    costSavings: 'Cost Savings',
    caseStudies: 'Case Studies',
    forCandidates: 'For Candidates',
    login: 'Login',
    trySample: 'Try a Simulation',
    bookDemo: 'Book a Demo',
    lifecycleTitle: 'Solutions Across the Employee Lifecycle',
    lifecycleItems: ['Hiring Mode', 'Employee Onboarding', 'Upskilling & Reskilling', 'Sourcing'],
    caseStudyPromo: 'See how leading enterprises transformed their hiring with Edtronaut.',
    caseStudyPromoLabel: 'View Case Studies',
  },
  VN: {
    solutions: 'Giải Pháp',
    costSavings: 'Tiết Kiệm Chi Phí',
    caseStudies: 'Nghiên Cứu Điển Hình',
    forCandidates: 'Dành Cho Ứng Viên',
    login: 'Đăng Nhập',
    trySample: 'Thử Mô Phỏng',
    bookDemo: 'Đặt Lịch Demo',
    lifecycleTitle: 'Giải Pháp Theo Vòng Đời Nhân Sự',
    lifecycleItems: ['Tuyển Dụng', 'Onboarding Nhân Viên', 'Nâng Cao & Đào Tạo Lại', 'Nguồn Tuyển Dụng'],
    caseStudyPromo: 'Xem cách các doanh nghiệp hàng đầu chuyển đổi tuyển dụng với Edtronaut.',
    caseStudyPromoLabel: 'Xem Case Studies',
  },
};

export default function Navbar({ lang, setLang, onBookDemo, onTrySample }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const tx = t[lang];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100' : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center h-16 gap-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-[#000CAD] rounded-lg flex items-center justify-center">
            <Zap size={16} className="text-[#12EDA6]" fill="#12EDA6" />
          </div>
          <span className="font-black text-xl tracking-tight text-[#000CAD]">
            edt<span className="text-[#12EDA6]">ronaut</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6 flex-1">
          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-[#000CAD] transition-colors">
              {tx.solutions}
              <ChevronDown size={14} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-[560px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-6 z-50">
                {/* Column 1: Lifecycle items */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#000CAD] mb-4">{tx.lifecycleTitle}</p>
                  <div className="space-y-1">
                    {tx.lifecycleItems.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#000CAD] hover:translate-x-1 transition-all duration-150 py-2 px-2 rounded-lg hover:bg-slate-50"
                      >
                        <div className="w-1.5 h-1.5 bg-[#000CAD]/30 rounded-full flex-shrink-0" />
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 2: Case Studies promo */}
                <div className="bg-gradient-to-br from-[#000CAD] to-[#0028FF] rounded-xl p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#12EDA6]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                      <FileText size={16} className="text-[#12EDA6]" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#12EDA6] mb-2">Case Studies</p>
                    <p className="text-sm text-white/90 leading-relaxed">{tx.caseStudyPromo}</p>
                  </div>
                  <button
                    onClick={() => { scrollTo('case-study'); setSolutionsOpen(false); }}
                    className="mt-4 flex items-center gap-1.5 text-sm font-bold text-[#12EDA6] hover:gap-2.5 transition-all duration-150 relative"
                  >
                    {tx.caseStudyPromoLabel}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollTo('roi')}
            className="text-sm font-medium text-slate-700 hover:text-[#000CAD] transition-colors"
          >
            {tx.costSavings}
          </button>

          <button
            onClick={() => scrollTo('case-study')}
            className="text-sm font-medium text-slate-700 hover:text-[#000CAD] transition-colors"
          >
            {tx.caseStudies}
          </button>

          <a
            href="https://edtronaut.com/candidates"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-700 hover:text-[#000CAD] transition-colors"
          >
            {tx.forCandidates}
          </a>
        </div>

        {/* Right side: Lang + Login + CTAs */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
          {/* Language switcher */}
          <button
            onClick={() => setLang(lang === 'EN' ? 'VN' : 'EN')}
            className="flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-[#000CAD] transition-colors"
          >
            <span className={lang === 'VN' ? 'text-[#000CAD] font-bold' : ''}>VN</span>
            <span className="text-slate-300">/</span>
            <span className={lang === 'EN' ? 'text-[#000CAD] font-bold' : ''}>EN</span>
          </button>

          <a
            href="#"
            className="text-sm font-medium text-slate-500 hover:text-[#000CAD] transition-colors"
          >
            {tx.login}
          </a>

          <button
            onClick={onTrySample}
            className="px-4 py-2 text-sm font-semibold text-[#000CAD] border-2 border-[#000CAD] rounded-lg hover:bg-[#000CAD] hover:text-white transition-all duration-200"
          >
            {tx.trySample}
          </button>

          <button
            onClick={onBookDemo}
            className="px-4 py-2 text-sm font-semibold bg-[#12EDA6] text-[#000820] rounded-lg hover:bg-[#0fd494] transition-all duration-200 animate-pulse-glow"
          >
            {tx.bookDemo}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-4">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{tx.solutions}</p>
            {tx.lifecycleItems.map((item) => (
              <a key={item} href="#" className="block text-sm text-slate-600 hover:text-[#000CAD] pl-3">
                {item}
              </a>
            ))}
          </div>
          <button onClick={() => scrollTo('roi')} className="block text-sm font-medium text-slate-700 hover:text-[#000CAD] w-full text-left">
            {tx.costSavings}
          </button>
          <button onClick={() => scrollTo('case-study')} className="block text-sm font-medium text-slate-700 hover:text-[#000CAD] w-full text-left">
            {tx.caseStudies}
          </button>
          <a href="https://edtronaut.com/candidates" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-slate-700 hover:text-[#000CAD]">
            {tx.forCandidates}
          </a>
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setLang(lang === 'EN' ? 'VN' : 'EN')}
              className="text-sm font-semibold text-slate-500"
            >
              <span className={lang === 'VN' ? 'text-[#000CAD] font-bold' : ''}>VN</span>
              <span className="text-slate-300 mx-1">/</span>
              <span className={lang === 'EN' ? 'text-[#000CAD] font-bold' : ''}>EN</span>
            </button>
            <a href="#" className="text-sm text-slate-500">{tx.login}</a>
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <button onClick={() => { onTrySample(); setMobileOpen(false); }} className="w-full py-2.5 text-sm font-semibold text-[#000CAD] border-2 border-[#000CAD] rounded-lg">
              {tx.trySample}
            </button>
            <button onClick={() => { onBookDemo(); setMobileOpen(false); }} className="w-full py-2.5 text-sm font-semibold bg-[#12EDA6] text-[#000820] rounded-lg">
              {tx.bookDemo}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
