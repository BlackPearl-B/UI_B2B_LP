import { useState } from 'react';
import { X, ArrowRight, CheckCircle, BarChart3, Award, MessageSquare, Target } from 'lucide-react';

interface Props { lang: 'EN' | 'VN'; onClose: () => void; onBookDemo: () => void; }

const t = {
  EN: {
    step1Title: 'Choose Your Industry Simulation',
    step1Sub: 'Select a localized job scenario that matches your operational context.',
    step2Title: 'Micro-Simulation',
    step2Sub: 'Answer 3 realistic behavior-based scenario questions.',
    step3Title: 'Your Competency Report',
    step3Sub: 'Automated rubric assessment generated from your responses.',
    roles: [
      {
        industry: 'Retail & FMCG',
        role: 'Store Manager',
        scenario: 'Handling a Critical Product Defect Complaint',
        desc: 'A loyal customer returns 12 units of your best-selling product claiming a manufacturing defect. Your regional director is visiting tomorrow.',
        color: 'from-orange-500 to-red-500',
      },
      {
        industry: 'BFSI',
        role: 'Relationship Manager',
        scenario: 'Elite Customer Credit Card Rejection',
        desc: 'A high-net-worth client\'s premium credit card application was rejected by the system due to a data error. They are threatening to close all accounts.',
        color: 'from-[#000CAD] to-[#0028FF]',
      },
      {
        industry: 'Logistics & Manufacturing',
        role: 'Warehouse Supervisor',
        scenario: 'Resolving a Supply-Chain Delay',
        desc: 'A key supplier is 3 days late on critical components. Your production line will halt in 6 hours if unresolved.',
        color: 'from-emerald-600 to-teal-500',
      },
    ],
    questions: [
      [
        {
          q: 'A loyal customer returns 12 units claiming a manufacturing defect. Your first action is:',
          opts: [
            'Immediately process a full refund without documentation to avoid escalation.',
            'Listen empathetically, document the defect with photos, then escalate to QA while offering a replacement.',
            'Tell the customer to contact the manufacturer directly.',
            'Offer a 10% discount on their next purchase and send them away.',
          ],
          correct: 1,
        },
        {
          q: 'Your regional director is visiting tomorrow and learns about the complaint. You:',
          opts: [
            'Hide the incident until after the visit.',
            'Prepare a full incident report with resolution steps and customer outcome to present proactively.',
            'Blame a junior staff member for the issue.',
            'Deny any knowledge of the complaint.',
          ],
          correct: 1,
        },
        {
          q: '3 more customers report the same defect online. You:',
          opts: [
            'Delete the social media comments.',
            'Wait to see if more complaints come in.',
            'Immediately pull the batch from shelves, notify QA and management, and post a transparent response.',
            'Offer individual discounts to each complainant privately.',
          ],
          correct: 2,
        },
      ],
      [
        {
          q: 'A high-value client\'s credit card was rejected due to a data error. Your first step:',
          opts: [
            'Tell them the rejection is final and suggest a different bank.',
            'Apologize, verify the error immediately, and escalate to your data team while keeping the client informed.',
            'Ask the client to reapply in 30 days.',
            'Offer a standard savings account as an alternative.',
          ],
          correct: 1,
        },
        {
          q: 'The client threatens to close all accounts worth $2M. You:',
          opts: [
            'Let them close the accounts — policy is policy.',
            'Panic and approve the card without following compliance procedures.',
            'Acknowledge the inconvenience, offer a premium service concession, and commit to a 24-hour resolution with executive escalation.',
            'Transfer the call to your manager without context.',
          ],
          correct: 2,
        },
        {
          q: 'The data error affects 8 other clients. You:',
          opts: [
            'Wait for them to call in.',
            'Proactively contact all affected clients, brief the compliance team, and document the systemic error for a formal review.',
            'Fix only the complaining client\'s file.',
            'Mark the issue as isolated.',
          ],
          correct: 1,
        },
      ],
      [
        {
          q: 'Your supplier is 3 days late and the production line halts in 6 hours. First action:',
          opts: [
            'Wait for the supplier to update you.',
            'Immediately contact the supplier for ETA, simultaneously activate your secondary supplier protocol, and brief production leadership.',
            'Stop all production and send workers home.',
            'Order extra inventory from the same supplier.',
          ],
          correct: 1,
        },
        {
          q: 'Your secondary supplier can deliver in 18 hours — still too late. You:',
          opts: [
            'Accept the production halt.',
            'Source emergency inventory from a spot market, quantify the cost variance, and get approval from finance within the hour.',
            'Blame the primary supplier publicly.',
            'Reduce production targets without informing management.',
          ],
          correct: 1,
        },
        {
          q: 'Management asks for a post-incident report. Your report includes:',
          opts: [
            'Only the financial cost of the delay.',
            'Root cause analysis, supplier performance data, protocol gaps identified, and 3 recommended process improvements.',
            'A list of people responsible for the delay.',
            'A request to fire the supplier immediately.',
          ],
          correct: 1,
        },
      ],
    ],
    result: {
      title: 'Your Competency Assessment Report',
      sub: 'Generated in real-time from your simulation responses.',
      competencies: [
        { name: 'Problem Solving', icon: Target },
        { name: 'Communication', icon: MessageSquare },
        { name: 'Compliance & Process', icon: CheckCircle },
        { name: 'Decision Quality', icon: Award },
      ],
      leapfrog: 'Want to align this simulation directly to your organization\'s competency frameworks?',
      leapfrogCTA: 'Request Your Custom Evaluation Blueprint →',
      close: 'Close',
    },
    selectRole: 'Select This Simulation',
    next: 'Next Question',
    submit: 'View My Results',
    of: 'of',
    question: 'Question',
  },
  VN: {
    step1Title: 'Chọn Mô Phỏng Ngành Của Bạn',
    step1Sub: 'Chọn một kịch bản công việc bản địa hóa phù hợp với ngữ cảnh vận hành của bạn.',
    step2Title: 'Mô Phỏng Ngắn',
    step2Sub: 'Trả lời 3 câu hỏi kịch bản dựa trên hành vi thực tế.',
    step3Title: 'Báo Cáo Năng Lực Của Bạn',
    step3Sub: 'Đánh giá rubric tự động được tạo ra từ các câu trả lời của bạn.',
    roles: [
      {
        industry: 'Bán Lẻ & FMCG',
        role: 'Quản Lý Cửa Hàng',
        scenario: 'Xử Lý Khiếu Nại Lỗi Sản Phẩm Nghiêm Trọng',
        desc: 'Một khách hàng trung thành trả lại 12 sản phẩm bán chạy nhất của bạn với khiếu nại về lỗi sản xuất.',
        color: 'from-orange-500 to-red-500',
      },
      {
        industry: 'BFSI',
        role: 'Quản Lý Quan Hệ',
        scenario: 'Từ Chối Thẻ Tín Dụng Khách Hàng Ưu Tú',
        desc: 'Đơn đăng ký thẻ tín dụng cao cấp của một khách hàng giàu có bị từ chối do lỗi dữ liệu.',
        color: 'from-[#000CAD] to-[#0028FF]',
      },
      {
        industry: 'Logistics & Sản Xuất',
        role: 'Giám Sát Kho',
        scenario: 'Giải Quyết Chậm Trễ Chuỗi Cung Ứng',
        desc: 'Nhà cung cấp chính chậm 3 ngày với các linh kiện quan trọng. Dây chuyền sản xuất của bạn sẽ dừng trong 6 giờ.',
        color: 'from-emerald-600 to-teal-500',
      },
    ],
    questions: [
      [
        { q: 'Khách hàng trả lại 12 sản phẩm lỗi. Hành động đầu tiên của bạn là gì?', opts: ['Hoàn tiền ngay mà không cần tài liệu.', 'Lắng nghe, ghi lại lỗi, leo thang QA và đề xuất thay thế.', 'Bảo khách liên hệ nhà sản xuất.', 'Giảm 10% cho lần mua tiếp theo.'], correct: 1 },
        { q: 'Giám đốc khu vực biết về khiếu nại. Bạn làm gì?', opts: ['Giấu sự cố cho đến sau chuyến thăm.', 'Chuẩn bị báo cáo đầy đủ với các bước giải quyết.', 'Đổ lỗi cho nhân viên cấp dưới.', 'Phủ nhận bất kỳ kiến thức nào về khiếu nại.'], correct: 1 },
        { q: '3 khách hàng khác báo cáo cùng lỗi trực tuyến. Bạn làm gì?', opts: ['Xóa bình luận mạng xã hội.', 'Chờ xem có thêm khiếu nại không.', 'Ngay lập tức rút lô hàng, thông báo QA và đăng phản hồi minh bạch.', 'Giảm giá cho từng người khiếu nại.'], correct: 2 },
      ],
      [
        { q: 'Thẻ tín dụng khách hàng bị từ chối do lỗi dữ liệu. Bước đầu tiên?', opts: ['Nói với họ từ chối là cuối cùng.', 'Xin lỗi, xác minh lỗi ngay và leo thang đến nhóm dữ liệu.', 'Yêu cầu khách đăng ký lại sau 30 ngày.', 'Đề xuất tài khoản tiết kiệm thay thế.'], correct: 1 },
        { q: 'Khách hàng đe dọa đóng tài khoản trị giá 2 triệu đô. Bạn làm gì?', opts: ['Để họ đóng tài khoản.', 'Phê duyệt thẻ mà không tuân thủ quy trình.', 'Thừa nhận bất tiện, đề xuất nhượng bộ và cam kết giải quyết trong 24 giờ.', 'Chuyển cuộc gọi cho quản lý.'], correct: 2 },
        { q: 'Lỗi dữ liệu ảnh hưởng đến 8 khách hàng khác. Bạn làm gì?', opts: ['Chờ họ gọi điện.', 'Chủ động liên hệ tất cả khách hàng bị ảnh hưởng và ghi lại lỗi hệ thống.', 'Chỉ sửa hồ sơ của khách hàng đang khiếu nại.', 'Đánh dấu vấn đề là cá biệt.'], correct: 1 },
      ],
      [
        { q: 'Nhà cung cấp chậm 3 ngày, dây chuyền dừng trong 6 giờ. Hành động đầu tiên?', opts: ['Chờ nhà cung cấp cập nhật.', 'Liên hệ nhà cung cấp ngay, kích hoạt nhà cung cấp thứ hai và báo cáo lãnh đạo sản xuất.', 'Dừng sản xuất và cho nhân viên về nhà.', 'Đặt thêm hàng từ cùng nhà cung cấp.'], correct: 1 },
        { q: 'Nhà cung cấp thứ hai có thể giao trong 18 giờ — vẫn quá muộn. Bạn làm gì?', opts: ['Chấp nhận dừng sản xuất.', 'Tìm nguồn hàng khẩn cấp, định lượng chi phí và phê duyệt tài chính trong giờ.', 'Đổ lỗi công khai cho nhà cung cấp.', 'Giảm mục tiêu sản xuất mà không thông báo.'], correct: 1 },
        { q: 'Ban quản lý yêu cầu báo cáo sau sự cố. Báo cáo của bạn bao gồm:', opts: ['Chỉ chi phí tài chính.', 'Phân tích nguyên nhân gốc rễ, dữ liệu hiệu suất nhà cung cấp và 3 cải tiến quy trình.', 'Danh sách người chịu trách nhiệm.', 'Yêu cầu sa thải nhà cung cấp ngay lập tức.'], correct: 1 },
      ],
    ],
    result: {
      title: 'Báo Cáo Đánh Giá Năng Lực Của Bạn',
      sub: 'Được tạo ra theo thời gian thực từ các câu trả lời mô phỏng của bạn.',
      competencies: [
        { name: 'Giải Quyết Vấn Đề', icon: Target },
        { name: 'Giao Tiếp', icon: MessageSquare },
        { name: 'Tuân Thủ & Quy Trình', icon: CheckCircle },
        { name: 'Chất Lượng Quyết Định', icon: Award },
      ],
      leapfrog: 'Bạn muốn điều chỉnh mô phỏng này trực tiếp theo khung năng lực của tổ chức?',
      leapfrogCTA: 'Yêu Cầu Bản Thiết Kế Đánh Giá Tùy Chỉnh →',
      close: 'Đóng',
    },
    selectRole: 'Chọn Mô Phỏng Này',
    next: 'Câu Tiếp Theo',
    submit: 'Xem Kết Quả',
    of: 'của',
    question: 'Câu',
  },
};

export default function SimulationModal({ lang, onClose, onBookDemo }: Props) {
  const [step, setStep] = useState<'select' | 'quiz' | 'result'>('select');
  const [selectedRole, setSelectedRole] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const tx = t[lang];

  const questions = tx.questions[selectedRole];

  const handleSelect = (roleIdx: number) => {
    setSelectedRole(roleIdx);
    setStep('quiz');
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
  };

  const handleAnswer = (optIdx: number) => {
    setSelected(optIdx);
  };

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setStep('result');
    }
  };

  const calcScores = () => {
    const correct = answers.filter((a, i) => a === questions[i].correct).length;
    const base = Math.round((correct / questions.length) * 40) + 50;
    return [
      Math.min(base + 10, 100),
      Math.min(base + 5, 95),
      Math.min(base + 15, 100),
      Math.min(base, 90),
    ];
  };

  const scores = step === 'result' ? calcScores() : [0, 0, 0, 0];
  const overallScore = step === 'result' ? Math.round(scores.reduce((a, b) => a + b, 0) / 4) : 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors z-10"
        >
          <X size={16} className="text-slate-600" />
        </button>

        {/* Progress */}
        <div className="flex items-center gap-2 p-6 pb-4">
          {(['select', 'quiz', 'result'] as const).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step === s ? 'bg-[#000CAD] text-white' : steps_index(step) > i ? 'bg-[#12EDA6] text-[#000820]' : 'bg-slate-100 text-slate-400'
              }`}>
                {steps_index(step) > i ? <CheckCircle size={14} /> : i + 1}
              </div>
              {i < 2 && <div className={`flex-1 h-0.5 w-8 ${steps_index(step) > i ? 'bg-[#12EDA6]' : 'bg-slate-100'}`} />}
            </div>
          ))}
        </div>

        <div className="px-6 pb-6">
          {/* Step 1: Role selection */}
          {step === 'select' && (
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-1">{tx.step1Title}</h2>
              <p className="text-sm text-slate-500 mb-6">{tx.step1Sub}</p>
              <div className="space-y-4">
                {tx.roles.map((role, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className="w-full text-left group"
                  >
                    <div className={`bg-gradient-to-r ${role.color} rounded-2xl p-5 text-white hover:scale-[1.01] transition-transform`}>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">{role.industry}</p>
                      <p className="font-black text-lg mb-1">{role.scenario}</p>
                      <p className="text-sm opacity-80 leading-relaxed">{role.desc}</p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-semibold">
                        {tx.selectRole} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Quiz */}
          {step === 'quiz' && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-xl font-black text-slate-900">{tx.step2Title}</h2>
                <span className="text-xs font-semibold text-slate-400">
                  {tx.question} {currentQ + 1} {tx.of} {questions.length}
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-6">{tx.step2Sub}</p>

              {/* Progress bar */}
              <div className="h-1.5 bg-slate-100 rounded-full mb-6">
                <div
                  className="h-full bg-[#000CAD] rounded-full transition-all duration-500"
                  style={{ width: `${((currentQ + (selected !== null ? 1 : 0)) / questions.length) * 100}%` }}
                />
              </div>

              <p className="font-semibold text-slate-800 mb-5 leading-relaxed">{questions[currentQ].q}</p>

              <div className="space-y-3 mb-6">
                {questions[currentQ].opts.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl border-2 text-sm leading-relaxed transition-all ${
                      selected === i
                        ? 'border-[#000CAD] bg-[#000CAD]/5 text-[#000CAD] font-medium'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-bold mr-2 text-slate-400">{String.fromCharCode(65 + i)}.</span>
                    {opt}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={selected === null}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#000CAD] text-white font-bold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#000CAD]/90 transition-all text-sm"
              >
                {currentQ < questions.length - 1 ? tx.next : tx.submit}
                <ArrowRight size={15} />
              </button>
            </div>
          )}

          {/* Step 3: Result */}
          {step === 'result' && (
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-1">{tx.result.title}</h2>
              <p className="text-sm text-slate-500 mb-6">{tx.result.sub}</p>

              {/* Overall score */}
              <div className="bg-gradient-to-r from-[#000CAD] to-[#0028FF] rounded-2xl p-6 text-white text-center mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#12EDA6] mb-2">Overall Score</p>
                <p className="text-6xl font-black mb-1">{overallScore}<span className="text-2xl text-blue-200">/100</span></p>
                <div className="flex items-center justify-center gap-1">
                  <BarChart3 size={14} className="text-blue-300" />
                  <p className="text-blue-200 text-xs">Automated Rubric Assessment</p>
                </div>
              </div>

              {/* Competency breakdown */}
              <div className="space-y-3 mb-6">
                {tx.result.competencies.map((comp, i) => {
                  const Icon = comp.icon;
                  return (
                    <div key={comp.name} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#000CAD]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-[#000CAD]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-semibold text-slate-700">{comp.name}</span>
                          <span className="text-xs font-black text-[#000CAD]">{scores[i]}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${scores[i]}%`, backgroundColor: scores[i] >= 80 ? '#12EDA6' : '#000CAD' }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Leapfrog CTA */}
              <div className="bg-[#12EDA6]/10 border-2 border-[#12EDA6]/30 rounded-2xl p-5 text-center">
                <p className="text-sm font-semibold text-slate-800 mb-3">{tx.result.leapfrog}</p>
                <button
                  onClick={() => { onClose(); onBookDemo(); }}
                  className="inline-flex items-center gap-1 px-5 py-2.5 bg-[#000CAD] text-white text-sm font-bold rounded-xl hover:bg-[#000CAD]/90 transition-colors"
                >
                  {tx.result.leapfrogCTA}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function steps_index(step: 'select' | 'quiz' | 'result') {
  return { select: 0, quiz: 1, result: 2 }[step];
}
