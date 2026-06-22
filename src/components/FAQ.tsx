import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface Props { lang: 'EN' | 'VN'; onBookDemo: () => void; }

const t = {
  EN: {
    eyebrow: 'Enterprise Security & Implementation',
    headline: 'Frequently Asked Questions & Enterprise Security Objections',
    faqs: [
      {
        q: 'How do Job Simulations differ from standard psychometric tests or traditional platform interviews?',
        a: 'Traditional assessments measure abstract theoretical knowledge, memorization, or broad personality indicators; Edtronaut measures contextual behavior and operational execution. Candidates are evaluated based on reviewable evidence from performing actual job duties tailored to your company\'s environment.',
      },
      {
        q: 'Our internal HR and operations teams are overextended. Is the technical implementation complex?',
        a: 'No. Edtronaut utilizes a full-service co-design framework. We manage heavy technical lifting, platform configuration, and competency alignment, deploying an initial customized pilot within 48 to 72 hours with minimal operational drag on your internal staff.',
      },
      {
        q: 'We currently utilize a legacy LMS. Does Edtronaut replace it?',
        a: 'Edtronaut serves as a specialized capability evaluation and validation layer, not a basic asset-storage LMS. It seamlessly complements your existing LMS infrastructure by providing the practical application tracking and examination data that traditional learning management systems lack.',
      },
      {
        q: 'How does Edtronaut ensure enterprise-grade data privacy and corporate security standards?',
        a: 'Data security is engineered directly into our infrastructure. We comply with rigorous enterprise data handling practices, strict role-based access controls, and encrypted storage protocols, ensuring all candidate and employee performance data remains entirely confidential to your firm.',
      },
    ],
    footerCta: 'Book an Enterprise Demo — Bring Your Current Structural Challenges to Our Team',
  },
  VN: {
    eyebrow: 'Bảo Mật Doanh Nghiệp & Triển Khai',
    headline: 'Câu Hỏi Thường Gặp & Phản Đối Bảo Mật Doanh Nghiệp',
    faqs: [
      {
        q: 'Mô Phỏng Công Việc khác với các bài kiểm tra tâm lý học tiêu chuẩn hay phỏng vấn nền tảng truyền thống như thế nào?',
        a: 'Các đánh giá truyền thống đo lường kiến thức lý thuyết trừu tượng, ghi nhớ, hoặc chỉ số tính cách rộng; Edtronaut đo lường hành vi theo ngữ cảnh và thực thi vận hành. Ứng viên được đánh giá dựa trên bằng chứng có thể xem lại từ việc thực hiện các nhiệm vụ công việc thực tế phù hợp với môi trường công ty của bạn.',
      },
      {
        q: 'Nhóm HR và vận hành nội bộ của chúng tôi đang quá tải. Việc triển khai kỹ thuật có phức tạp không?',
        a: 'Không. Edtronaut sử dụng khung đồng thiết kế dịch vụ đầy đủ. Chúng tôi quản lý công việc kỹ thuật nặng nề, cấu hình nền tảng và điều chỉnh năng lực, triển khai pilot tùy chỉnh ban đầu trong 48-72 giờ với tác động vận hành tối thiểu lên nhân viên nội bộ của bạn.',
      },
      {
        q: 'Chúng tôi hiện đang sử dụng LMS cũ. Edtronaut có thay thế nó không?',
        a: 'Edtronaut đóng vai trò là lớp đánh giá và xác nhận năng lực chuyên biệt, không phải LMS lưu trữ tài sản cơ bản. Nó bổ sung liền mạch cho cơ sở hạ tầng LMS hiện có của bạn bằng cách cung cấp theo dõi ứng dụng thực tế và dữ liệu kiểm tra mà các hệ thống quản lý học tập truyền thống thiếu.',
      },
      {
        q: 'Edtronaut đảm bảo quyền riêng tư dữ liệu và tiêu chuẩn bảo mật doanh nghiệp như thế nào?',
        a: 'Bảo mật dữ liệu được tích hợp trực tiếp vào cơ sở hạ tầng của chúng tôi. Chúng tôi tuân thủ các thực hành xử lý dữ liệu doanh nghiệp nghiêm ngặt, kiểm soát truy cập dựa trên vai trò chặt chẽ và giao thức lưu trữ mã hóa, đảm bảo tất cả dữ liệu hiệu suất ứng viên và nhân viên hoàn toàn bí mật với công ty của bạn.',
      },
    ],
    footerCta: 'Đặt Demo Doanh Nghiệp — Mang Những Thách Thức Cấu Trúc Hiện Tại Của Bạn Đến Đội Nhóm Chúng Tôi',
  },
};

export default function FAQ({ lang, onBookDemo }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const tx = t[lang];

  return (
    <section className="py-24 bg-slate-50" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#000CAD]">{tx.eyebrow}</span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mt-2">{tx.headline}</h2>
        </div>

        <div className="space-y-4 mb-12">
          {tx.faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                open === i ? 'border-[#000CAD] shadow-lg shadow-[#000CAD]/10' : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`font-semibold text-sm leading-snug ${open === i ? 'text-[#000CAD]' : 'text-slate-800'}`}>
                  <span className="text-[#12EDA6] font-black mr-2">{String(i + 1).padStart(2, '0')}.</span>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-[#000CAD]' : 'text-slate-400'}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 animate-fadeInUp">
                  <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer anchor CTA */}
        <div className="text-center">
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#000CAD] text-white font-semibold rounded-xl hover:bg-[#000CAD]/90 transition-colors text-sm"
          >
            {tx.footerCta}
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
