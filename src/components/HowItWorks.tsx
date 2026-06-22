import { FileCheck, Settings, BarChart3, ArrowRight } from 'lucide-react';

interface Props { lang: 'EN' | 'VN'; onTrySample: () => void; onBookDemo: () => void; }

const t = {
  EN: {
    eyebrow: 'The Process',
    headline: 'How It Works',
    sub: 'A 3-step enterprise co-design framework that deploys measurable capability evaluation within 72 hours.',
    steps: [
      {
        icon: FileCheck,
        number: '01',
        title: 'Verifiable Work Evidence',
        desc: 'Every simulation evaluates direct behavior, hard choices, and actual work outputs. Enterprise buyers receive reviewable data footprints rather than abstract, multiple-choice testing scores.',
        highlight: 'Real behavioral data — not test scores',
        hasCTA: true,
      },
      {
        icon: Settings,
        number: '02',
        title: 'Tailored Enterprise Co-Design',
        desc: 'The Edtronaut engineering and domain team works closely with your stakeholders to align simulations with your precise competency frameworks. A functioning pilot trial is deployed within 48 to 72 hours.',
        highlight: 'Pilot live in 48–72 hours',
        hasCTA: false,
      },
      {
        icon: BarChart3,
        number: '03',
        title: 'Continuous, Reportable ROI',
        desc: 'Track and display concrete performance metrics on a centralized dashboard. Monitor 30/60/90-day retention improvements, reduced onboarding timelines, and decreased post-training operational error rates.',
        highlight: 'Boardroom-ready reporting',
        hasCTA: false,
      },
    ],
    trySample: 'View Verifiable Evidence →',
    bookDemo: 'Book an Enterprise Demo',
  },
  VN: {
    eyebrow: 'Quy Trình',
    headline: 'Cách Hoạt Động',
    sub: 'Khung đồng thiết kế doanh nghiệp 3 bước triển khai đánh giá năng lực có thể đo lường trong vòng 72 giờ.',
    steps: [
      {
        icon: FileCheck,
        number: '01',
        title: 'Bằng Chứng Công Việc Có Thể Xác Minh',
        desc: 'Mỗi mô phỏng đánh giá hành vi trực tiếp, lựa chọn khó và đầu ra công việc thực tế. Người mua doanh nghiệp nhận được dấu vết dữ liệu có thể xem lại thay vì điểm kiểm tra trắc nghiệm trừu tượng.',
        highlight: 'Dữ liệu hành vi thực — không phải điểm kiểm tra',
        hasCTA: true,
      },
      {
        icon: Settings,
        number: '02',
        title: 'Đồng Thiết Kế Doanh Nghiệp Tùy Chỉnh',
        desc: 'Nhóm kỹ thuật và lĩnh vực Edtronaut làm việc chặt chẽ với các bên liên quan để điều chỉnh mô phỏng theo khung năng lực chính xác của bạn. Thử nghiệm pilot hoạt động được triển khai trong 48-72 giờ.',
        highlight: 'Pilot hoạt động trong 48-72 giờ',
        hasCTA: false,
      },
      {
        icon: BarChart3,
        number: '03',
        title: 'ROI Liên Tục, Có Thể Báo Cáo',
        desc: 'Theo dõi và hiển thị các chỉ số hiệu suất cụ thể trên bảng điều khiển tập trung. Giám sát cải thiện tỷ lệ giữ chân 30/60/90 ngày, giảm thời gian onboarding.',
        highlight: 'Báo cáo sẵn sàng cho hội đồng quản trị',
        hasCTA: false,
      },
    ],
    trySample: 'Xem Bằng Chứng Có Thể Xác Minh →',
    bookDemo: 'Đặt Demo Doanh Nghiệp',
  },
};

export default function HowItWorks({ lang, onTrySample, onBookDemo }: Props) {
  const tx = t[lang];

  return (
    <section className="py-24 bg-[#000820]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#12EDA6]">{tx.eyebrow}</span>
          <h2 className="text-3xl lg:text-4xl font-black text-white mt-2 mb-4">{tx.headline}</h2>
          <p className="text-blue-300 max-w-2xl mx-auto">{tx.sub}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {tx.steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-[#12EDA6]/30 transition-all duration-300 group"
              >
                {/* Number */}
                <div className="absolute top-6 right-6 text-6xl font-black text-white/5 select-none group-hover:text-white/8 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-[#000CAD] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#000CAD]/80 transition-colors">
                  <Icon size={26} className="text-[#12EDA6]" />
                </div>

                <h3 className="text-xl font-black text-white mb-4">{step.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed mb-6">{step.desc}</p>

                {/* Highlight pill */}
                <div className="inline-flex items-center gap-2 bg-[#12EDA6]/10 border border-[#12EDA6]/30 rounded-full px-3 py-1.5">
                  <div className="w-1.5 h-1.5 bg-[#12EDA6] rounded-full" />
                  <span className="text-xs font-semibold text-[#12EDA6]">{step.highlight}</span>
                </div>

                {/* CTA for step 1 */}
                {step.hasCTA && (
                  <div className="mt-6">
                    <button
                      onClick={onTrySample}
                      className="flex items-center gap-2 text-sm font-semibold text-[#12EDA6] hover:gap-3 transition-all duration-200"
                    >
                      {tx.trySample}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#12EDA6] text-[#000820] font-bold rounded-2xl hover:bg-[#0fd494] transition-colors text-sm"
          >
            {tx.bookDemo}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
