import { useState } from 'react';
import { CheckCircle, ArrowRight, Shield, Clock, Users } from 'lucide-react';

interface Props { lang: 'EN' | 'VN'; }

const PERSONAL_DOMAINS = ['gmail', 'yahoo', 'hotmail', 'outlook', 'icloud', 'protonmail', 'yopmail', 'mail'];

const t = {
  EN: {
    eyebrow: 'Enterprise Demo',
    headline: 'Request an Enterprise Evaluation Blueprint',
    sub: 'Align simulations directly to your company framework parameters.',
    field1: 'FULL NAME',
    ph1: 'Enter your full name',
    field2: 'CORPORATE EMAIL',
    ph2: 'name@company.com',
    emailErr: 'Please enter a valid corporate email address (e.g., name@company.com).',
    field3: 'COMPANY NAME',
    ph3: 'Enter your company name',
    field4: 'WORKFORCE SIZE',
    opt1: '200 – 500 employees',
    opt2: '501 – 1,000 employees',
    opt3: '2,000+ employees',
    field5: 'PRIMARY OPERATIONAL PAIN POINT',
    ph5: 'Describe recruitment leakages or L&D evaluation gaps...',
    optional: 'Optional',
    btn: 'SUBMIT BLUEPRINT REQUEST & SECURE TRIAL SPACE',
    success: 'Thank you! Your request has been recorded. Our Enterprise Solutions team is preparing your custom framework analysis and will contact you via your corporate email within 24 hours.',
    trustItems: [
      { icon: Shield, text: 'Enterprise-grade data security' },
      { icon: Clock, text: 'Response within 24 hours' },
      { icon: Users, text: 'Dedicated solutions manager' },
    ],
  },
  VN: {
    eyebrow: 'Demo Doanh Nghiệp',
    headline: 'Yêu Cầu Bản Thiết Kế Đánh Giá Doanh Nghiệp',
    sub: 'Điều chỉnh mô phỏng trực tiếp theo các tham số khung công ty của bạn.',
    field1: 'HỌ VÀ TÊN',
    ph1: 'Nhập họ và tên của bạn',
    field2: 'EMAIL DOANH NGHIỆP',
    ph2: 'ten@congty.com',
    emailErr: 'Vui lòng nhập địa chỉ email doanh nghiệp hợp lệ (ví dụ: ten@congty.com).',
    field3: 'TÊN CÔNG TY',
    ph3: 'Nhập tên công ty của bạn',
    field4: 'QUY MÔ NHÂN SỰ',
    opt1: '200 – 500 nhân viên',
    opt2: '501 – 1.000 nhân viên',
    opt3: '2.000+ nhân viên',
    field5: 'VẤN ĐỀ VẬN HÀNH CHÍNH',
    ph5: 'Mô tả các rò rỉ tuyển dụng hoặc khoảng cách đánh giá L&D...',
    optional: 'Tùy chọn',
    btn: 'GỬI YÊU CẦU THIẾT KẾ & ĐẶT CHỖ THỬ NGHIỆM',
    success: 'Cảm ơn! Yêu cầu của bạn đã được ghi lại. Nhóm Giải Pháp Doanh Nghiệp của chúng tôi đang chuẩn bị phân tích khung tùy chỉnh và sẽ liên hệ với bạn qua email doanh nghiệp trong vòng 24 giờ.',
    trustItems: [
      { icon: Shield, text: 'Bảo mật dữ liệu cấp doanh nghiệp' },
      { icon: Clock, text: 'Phản hồi trong 24 giờ' },
      { icon: Users, text: 'Quản lý giải pháp chuyên dụng' },
    ],
  },
};

function isPersonalEmail(email: string) {
  const domain = email.split('@')[1]?.split('.')[0]?.toLowerCase();
  return PERSONAL_DOMAINS.includes(domain);
}

export default function DemoForm({ lang }: Props) {
  const tx = t[lang];
  const [form, setForm] = useState({
    name: '', email: '', company: '', size: '200-500', painPoint: '',
  });
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (v: string) => {
    setForm({ ...form, email: v });
    if (v.includes('@') && isPersonalEmail(v)) {
      setEmailError(tx.emailErr);
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) return;
    if (isPersonalEmail(form.email)) {
      setEmailError(tx.emailErr);
      return;
    }
    setSubmitted(true);
  };

  const inputClass = 'w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#000CAD] focus:ring-2 focus:ring-[#000CAD]/10 transition-all';
  const labelClass = 'block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2';

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50" id="demo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#000CAD]">{tx.eyebrow}</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4 leading-tight">{tx.headline}</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">{tx.sub}</p>

            <div className="space-y-4">
              {tx.trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#000CAD]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#000CAD]" />
                    </div>
                    <p className="text-sm font-medium text-slate-700">{item.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Industries */}
            <div className="mt-10 bg-[#000CAD] rounded-2xl p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-[#12EDA6] mb-3">Target Industries</p>
              <div className="flex flex-wrap gap-2">
                {['Retail', 'BFSI', 'Logistics', 'FMCG', 'FDI', 'Manufacturing'].map((ind) => (
                  <span key={ind} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">{ind}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-12 animate-fadeInUp">
                <div className="w-16 h-16 bg-[#12EDA6]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-[#000CAD]" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">Request Submitted!</h3>
                <p className="text-slate-600 leading-relaxed max-w-md mx-auto">{tx.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{tx.field1}</label>
                    <input
                      type="text" required placeholder={tx.ph1}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{tx.field2}</label>
                    <input
                      type="email" required placeholder={tx.ph2}
                      value={form.email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      className={`${inputClass} ${emailError ? 'border-red-400 ring-2 ring-red-100' : ''}`}
                    />
                    {emailError && <p className="text-xs text-red-500 mt-1.5">{emailError}</p>}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{tx.field3}</label>
                  <input
                    type="text" required placeholder={tx.ph3}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>{tx.field4}</label>
                  <select
                    value={form.size}
                    onChange={(e) => setForm({ ...form, size: e.target.value })}
                    className={inputClass}
                  >
                    <option value="200-500">{tx.opt1}</option>
                    <option value="501-1000">{tx.opt2}</option>
                    <option value="2000+">{tx.opt3}</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>
                    {tx.field5}
                    <span className="normal-case tracking-normal ml-2 text-slate-400 font-normal">({tx.optional})</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder={tx.ph5}
                    value={form.painPoint}
                    onChange={(e) => setForm({ ...form, painPoint: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#000CAD] text-white font-bold rounded-xl hover:bg-[#000CAD]/90 transition-all duration-200 text-sm tracking-wide"
                >
                  {tx.btn}
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
