import { X, Check, ArrowRight } from 'lucide-react';

interface Props { lang: 'EN' | 'VN'; onTrySample: () => void; }

const t = {
  EN: {
    eyebrow: 'The Evidence-Based Alternative',
    headline: 'Why Resumes and Subjective Interviews Fail',
    sub: 'Job Simulations require talent to execute contextual work scenarios — creating reviewable and assessable performance evidence.',
    oldWay: 'Traditional Method (The Old Way)',
    newWay: 'Job Simulation — Filtering Right from the Start',
    rows: [
      {
        old: 'Hiring: CV + intuitive interviews — whoever speaks best gets selected',
        new: 'Hiring: Simulation screening — candidates prove practical skills before you hire',
      },
      {
        old: 'L&D: Abstract scores from theoretical tests',
        new: 'L&D: Real-world work scenarios — tangible work samples post-training',
      },
      {
        old: 'Interviews depend heavily on the interviewer — lack of consistency',
        new: 'Rubric-based scoring — consistent and comparable across candidates',
      },
      {
        old: 'Wrong hire → Takes 3–6 months to realize',
        new: 'Filter the right talent from the start — before signing the contract',
      },
      {
        old: 'Reporting "number of participants" to management',
        new: 'Reporting the "percentage of employees reaching the competency threshold"',
      },
      {
        old: 'Takes 3 to 6 months during probation to realize a hire or training initiative has failed.',
        new: 'Immediate automated results and capability insights generated after every single simulation.',
      },
    ],
    trySample: 'Try a Sample Simulation →',
  },
  VN: {
    eyebrow: 'Giải Pháp Dựa Trên Bằng Chứng',
    headline: 'Tại Sao CV và Phỏng Vấn Chủ Quan Thất Bại',
    sub: 'Mô Phỏng Công Việc yêu cầu nhân tài thực hiện các kịch bản công việc theo ngữ cảnh — tạo ra bằng chứng hiệu suất có thể xem xét và đánh giá.',
    oldWay: 'Phương Pháp Truyền Thống (Cách Cũ)',
    newWay: 'Mô Phỏng Công Việc — Lọc Đúng Từ Đầu',
    rows: [
      {
        old: 'Tuyển dụng: CV + phỏng vấn trực quan — ai nói hay hơn thì được chọn',
        new: 'Tuyển dụng: Sàng lọc mô phỏng — ứng viên chứng minh kỹ năng thực tế trước khi bạn tuyển',
      },
      {
        old: 'L&D: Điểm trừu tượng từ các bài kiểm tra lý thuyết',
        new: 'L&D: Kịch bản công việc thực tế — mẫu công việc hữu hình sau đào tạo',
      },
      {
        old: 'Phỏng vấn phụ thuộc nhiều vào người phỏng vấn — thiếu nhất quán',
        new: 'Chấm điểm dựa trên rubric — nhất quán và có thể so sánh giữa các ứng viên',
      },
      {
        old: 'Tuyển sai người → Mất 3-6 tháng để nhận ra',
        new: 'Lọc đúng nhân tài từ đầu — trước khi ký hợp đồng',
      },
      {
        old: 'Báo cáo "số người tham gia" cho ban quản lý',
        new: 'Báo cáo "tỷ lệ nhân viên đạt ngưỡng năng lực"',
      },
      {
        old: 'Mất 3-6 tháng trong thời gian thử việc để nhận ra sáng kiến tuyển dụng hoặc đào tạo đã thất bại.',
        new: 'Kết quả tự động ngay lập tức và thông tin chi tiết về năng lực được tạo ra sau mỗi mô phỏng.',
      },
    ],
    trySample: 'Thử Mô Phỏng Mẫu →',
  },
};

export default function ConceptExplainer({ lang, onTrySample }: Props) {
  const tx = t[lang];

  return (
    <section className="py-24 bg-slate-50" id="job-simulation">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#000CAD]">{tx.eyebrow}</span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mt-2 mb-4">{tx.headline}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{tx.sub}</p>
        </div>

        {/* Comparison table */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="bg-slate-800 px-6 py-5 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                <X size={16} className="text-red-400" />
              </div>
              <p className="font-bold text-white text-sm">{tx.oldWay}</p>
            </div>
            <div className="bg-[#000CAD] px-6 py-5 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#12EDA6]/20 rounded-lg flex items-center justify-center">
                <Check size={16} className="text-[#12EDA6]" />
              </div>
              <p className="font-bold text-white text-sm">{tx.newWay}</p>
            </div>
          </div>

          {/* Rows */}
          {tx.rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 border-t border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
            >
              <div className="px-6 py-5 flex items-start gap-3 border-r border-slate-100">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X size={10} className="text-red-500" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{row.old}</p>
              </div>
              <div className="px-6 py-5 flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#12EDA6]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={10} className="text-[#000CAD]" />
                </div>
                <p className="text-sm text-slate-800 font-medium leading-relaxed">{row.new}</p>
              </div>
            </div>
          ))}

          {/* Footer CTA */}
          <div className="border-t border-slate-100 p-6 flex justify-end bg-gradient-to-r from-slate-50 to-[#000CAD]/5">
            <button
              onClick={onTrySample}
              className="flex items-center gap-2 px-5 py-3 bg-[#000CAD] text-white text-sm font-semibold rounded-xl hover:bg-[#000CAD]/90 transition-colors"
            >
              {tx.trySample}
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
