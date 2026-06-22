import { Zap, Linkedin, Twitter, Globe } from 'lucide-react';

interface Props { lang: 'EN' | 'VN'; }

const t = {
  EN: {
    tagline: 'Evidence-Based Hiring & L&D Validation Platform for Enterprise.',
    solutions: 'Solutions',
    solutionLinks: ['Hiring Mode', 'Employee Onboarding', 'Upskilling & Reskilling', 'Workforce Assessment'],
    products: 'Products',
    productLinks: ['Job Simulation', 'Resume Scoring', 'Executive Analytics Dashboard'],
    company: 'Company',
    companyLinks: ['About Us', 'Leadership', 'Careers', 'Press'],
    legal: 'Legal',
    legalLinks: ['Privacy Policy', 'Terms of Service', 'Security', 'Data Processing'],
    copy: `© ${new Date().getFullYear()} Edtronaut. All rights reserved.`,
    tagline2: 'Built for Vietnamese Enterprises with 200+ Employees.',
  },
  VN: {
    tagline: 'Nền Tảng Tuyển Dụng Dựa Trên Bằng Chứng & Xác Nhận L&D Cho Doanh Nghiệp.',
    solutions: 'Giải Pháp',
    solutionLinks: ['Chế Độ Tuyển Dụng', 'Onboarding Nhân Viên', 'Nâng Cao & Đào Tạo Lại', 'Đánh Giá Nhân Lực'],
    products: 'Sản Phẩm',
    productLinks: ['Mô Phỏng Công Việc', 'Chấm Điểm CV', 'Bảng Phân Tích Điều Hành'],
    company: 'Công Ty',
    companyLinks: ['Về Chúng Tôi', 'Lãnh Đạo', 'Tuyển Dụng', 'Báo Chí'],
    legal: 'Pháp Lý',
    legalLinks: ['Chính Sách Bảo Mật', 'Điều Khoản Dịch Vụ', 'Bảo Mật', 'Xử Lý Dữ Liệu'],
    copy: `© ${new Date().getFullYear()} Edtronaut. Tất cả quyền được bảo lưu.`,
    tagline2: 'Xây Dựng Cho Các Doanh Nghiệp Việt Nam Với 200+ Nhân Viên.',
  },
};

export default function Footer({ lang }: Props) {
  const tx = t[lang];

  const cols = [
    { heading: tx.solutions, links: tx.solutionLinks },
    { heading: tx.products, links: tx.productLinks },
    { heading: tx.company, links: tx.companyLinks },
    { heading: tx.legal, links: tx.legalLinks },
  ];

  return (
    <footer className="bg-[#000820] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#000CAD] rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-[#12EDA6]" fill="#12EDA6" />
              </div>
              <span className="font-black text-xl tracking-tight">
                edt<span className="text-[#12EDA6]">ronaut</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">{tx.tagline}</p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/5 hover:bg-[#000CAD] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={15} className="text-slate-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">{tx.copy}</p>
          <p className="text-xs text-slate-500">{tx.tagline2}</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#12EDA6] rounded-full animate-pulse" />
            <span className="text-xs text-[#12EDA6] font-semibold">Platform Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
