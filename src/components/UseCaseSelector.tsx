import { useState } from 'react';
import { Users, UserPlus, GraduationCap, Search, ArrowRight, Zap, Target, Globe, Award, Clock, TrendingUp } from 'lucide-react';

interface Props { lang: 'EN' | 'VN'; onBookDemo: () => void; }

const t = {
  EN: {
    headline: 'Built for Every Layer of the Enterprise Buying Committee',
    sub: 'Select your primary challenge to discover tailored solutions',
    categories: [
      {
        icon: Users,
        title: 'Hiring',
        subtitle: 'TA Managers & Recruiters',
        items: [
          { title: 'Scale with Mass Hiring', desc: 'End-to-end recruitment automation for high-volume roles, reducing time-to-hire by 50%.', stat: '50%', statLabel: 'Faster Hiring' },
          { title: 'Hire with Precision Search', desc: 'Target and secure top candidates for highly selective roles (sub-1% acceptance), 60% faster.', stat: '60%', statLabel: 'Faster Placements' },
          { title: 'Attract with Recruitment Branding', desc: 'EVP-led, omnichannel campaigns that increase applicant volume by 4x.', stat: '4x', statLabel: 'Applicant Volume' },
        ],
      },
      {
        icon: UserPlus,
        title: 'Onboarding',
        subtitle: 'HR Directors & L&D Teams',
        items: [
          { title: 'Ramp Faster with Simulations', desc: 'Role-based simulations that prepare hires for real job demands from day one.', stat: 'Day 1', statLabel: 'Job Readiness' },
          { title: 'Onboard by Role', desc: 'Tailored programs across business, tech, sales, and operations.', stat: '4', statLabel: 'Role Tracks' },
        ],
      },
      {
        icon: GraduationCap,
        title: 'Upskilling',
        subtitle: 'L&D Managers & CHROs',
        items: [
          { title: 'Train with Real-World Simulations', desc: 'Hands-on programs that accelerate performance in actual job scenarios.', stat: 'Practical', statLabel: 'Validation' },
          { title: 'Upskill by Role', desc: 'Targeted training across business, tech, sales, and operations.', stat: 'Role', statLabel: 'Specific' },
          { title: 'Learn with Industry AI Curriculum', desc: 'Continuously updated, role-relevant AI learning paths.', stat: 'AI', statLabel: 'Curriculum' },
          { title: 'Achieve High Satisfaction', desc: 'CSAT 4.9/5 (vs. 3.75-4.0 industry norm).', stat: '4.9', statLabel: 'CSAT Score' },
        ],
      },
      {
        icon: Search,
        title: 'Sourcing',
        subtitle: 'Talent Acquisition Leaders',
        items: [
          { title: 'Access Verified Talent Pools', desc: 'Simulation-validated candidates for hard-to-fill and early-career roles.', stat: 'Pre', statLabel: 'Validated' },
          { title: 'Hire Across Borders', desc: 'Domestic and international sourcing pipelines.', stat: 'Global', statLabel: 'Reach' },
          { title: 'Cover Every Workforce Segment', desc: 'White- and blue-collar talent, local and global.', stat: '100%', statLabel: 'Coverage' },
        ],
      },
    ],
    cta: 'Book a Demo for Your Use Case',
  },
  VN: {
    headline: 'Xây Dựng Cho Mọi Cấp Độ Quyết Định Mua Hàng Doanh Nghiệp',
    sub: 'Chọn thách thức chính của bạn để khám phá giải pháp phù hợp',
    categories: [
      {
        icon: Users,
        title: 'Tuyển Dụng',
        subtitle: 'Quản Lý TA & Nhà Tuyển Dụng',
        items: [
          { title: 'Mở Rộng Với Tuyển Dụng Hàng Loạt', desc: 'Tự động hóa tuyển dụng toàn diện cho các vị trí khối lượng lớn, giảm thời gian tuyển dụng 50%.', stat: '50%', statLabel: 'Nhanh Hơn' },
          { title: 'Tuyển Dụng Chính Xác', desc: 'Nhắm mục tiêu và đảm bảo ứng viên hàng đầu cho các vị trí tuyển chọn khắt khe, nhanh hơn 60%.', stat: '60%', statLabel: 'Nhanh Hơn' },
          { title: 'Thu Hút Với Thương Hiệu Tuyển Dụng', desc: 'Chiến dịch đa kênh dựa trên EVP tăng lượng ứng viên gấp 4 lần.', stat: '4x', statLabel: 'Ứng Viên' },
        ],
      },
      {
        icon: UserPlus,
        title: 'Onboarding',
        subtitle: 'Giám Đốc HR & Đội L&D',
        items: [
          { title: 'Tăng Tốc Với Mô Phỏng', desc: 'Mô phỏng theo vai trò chuẩn bị nhân viên mới cho nhu cầu công việc thực tế từ ngày đầu.', stat: 'Ngày 1', statLabel: 'Sẵn Sàng' },
          { title: 'Onboarding Theo Vai Trò', desc: 'Chương trình được điều chỉnh cho business, tech, sales và operations.', stat: '4', statLabel: 'Lộ Trình' },
        ],
      },
      {
        icon: GraduationCap,
        title: 'Nâng Cao Kỹ Năng',
        subtitle: 'Quản Lý L&D & CHRO',
        items: [
          { title: 'Đào Tạo Với Mô Phỏng Thực Tế', desc: 'Chương trình thực tế tăng tốc hiệu suất trong các tình huống công việc thực sự.', stat: 'Thực Tế', statLabel: 'Xác Thực' },
          { title: 'Nâng Cao Kỹ Năng Theo Vai Trò', desc: 'Đào tạo có mục tiêu cho business, tech, sales và operations.', stat: 'Theo', statLabel: 'Vai Trò' },
          { title: 'Học Với Giáo Trình AI Ngành', desc: 'Lộ trình học AI liên tục cập nhật, phù hợp với từng vai trò.', stat: 'AI', statLabel: 'Giáo Trình' },
          { title: 'Đạt Sự Hài Lòng Cao', desc: 'CSAT 4.9/5 (so với mức trung bình ngành 3.75-4.0).', stat: '4.9', statLabel: 'Điểm CSAT' },
        ],
      },
      {
        icon: Search,
        title: 'Tìm Nguồn Nhân Lực',
        subtitle: 'Lãnh Đạo Thu Nhập Nhân Tài',
        items: [
          { title: 'Tiếp Cận Nguồn Nhân Lực Đã Xác Minh', desc: 'Ứng viên đã được xác thực qua mô phỏng cho các vị trí khó tuyển và early-career.', stat: 'Đã', statLabel: 'Xác Thực' },
          { title: 'Tuyển Dụng Không Biên Giới', desc: 'Đường ống tuyển dụng trong nước và quốc tế.', stat: 'Toàn Cầu', statLabel: 'Phạm Vi' },
          { title: 'Phủ Sóng Mọi Phân Khúc Lao Động', desc: 'Nhân sự cổ trắng và cổ xanh, địa phương và toàn cầu.', stat: '100%', statLabel: 'Phủ Sóng' },
        ],
      },
    ],
    cta: 'Đặt Demo Cho Trường Hợp Của Bạn',
  },
};

const itemIcons = [Zap, Target, Globe, Award, Clock];
const statIcons = [TrendingUp, Target, Globe, Award];

export default function UseCaseSelector({ lang, onBookDemo }: Props) {
  const [activeCard, setActiveCard] = useState(0);
  const tx = t[lang];
  const activeCategory = tx.categories[activeCard];
  const ActiveIcon = activeCategory.icon;

  return (
    <section className="py-20 bg-slate-50" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">{tx.headline}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{tx.sub}</p>
        </div>

        {/* 4-Column Fixed Cards - Tab Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {tx.categories.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = activeCard === i;

            return (
              <button
                key={i}
                onClick={() => setActiveCard(i)}
                className={`relative w-full p-5 rounded-2xl text-left transition-all duration-200 group ${
                  isActive
                    ? 'bg-[#000CAD] text-white shadow-xl shadow-[#000CAD]/25'
                    : 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-white/10' : 'bg-slate-100'
                  }`}>
                    <Icon size={20} className={isActive ? 'text-[#12EDA6]' : 'text-[#000CAD]'} />
                  </div>
                  <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-[#12EDA6]' : 'bg-transparent'}`} />
                </div>

                <h3 className={`font-bold text-lg mb-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                  {cat.title}
                </h3>
                <p className={`text-xs ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>
                  {cat.subtitle}
                </p>

                <div className={`mt-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                  isActive ? 'bg-[#12EDA6]/20 text-[#12EDA6]' : 'bg-slate-100 text-slate-600'
                }`}>
                  {cat.items.length} solutions
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Panel - Full Width Below Cards */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100">
          {/* Panel Header */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-[#000CAD] flex items-center justify-center">
              <ActiveIcon size={26} className="text-[#12EDA6]" />
            </div>
            <div>
              <h3 className="font-black text-2xl text-slate-900">{activeCategory.title}</h3>
              <p className="text-sm text-[#000CAD] font-semibold">{activeCategory.subtitle}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Use Case Items */}
            <div className="lg:col-span-3 space-y-4">
              {activeCategory.items.map((item, j) => {
                const ItemIcon = itemIcons[j % itemIcons.length];
                return (
                  <div
                    key={j}
                    className="group p-5 rounded-xl bg-slate-50 hover:bg-[#000CAD] transition-all duration-200 cursor-pointer"
                    onClick={onBookDemo}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 group-hover:bg-white/20 group-hover:border-transparent flex items-center justify-center flex-shrink-0">
                        <ItemIcon size={18} className="text-[#000CAD] group-hover:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 group-hover:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-500 group-hover:text-blue-100 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Panel */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#000CAD] to-[#0018FF] rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-5 opacity-90">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {activeCategory.items.slice(0, 4).map((item, j) => {
                    const StatIcon = statIcons[j % statIcons.length];
                    return (
                      <div key={j} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                        <StatIcon size={18} className="text-[#12EDA6] mb-2" />
                        <p className="text-2xl font-black text-white">{item.stat}</p>
                        <p className="text-xs text-blue-200 mt-1">{item.statLabel}</p>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={onBookDemo}
                  className="w-full mt-6 flex items-center justify-center gap-2 px-5 py-4 bg-[#12EDA6] text-[#000CAD] font-bold rounded-xl hover:bg-[#12EDA6]/90 transition-colors"
                >
                  {tx.cta}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
