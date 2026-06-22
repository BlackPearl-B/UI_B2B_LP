import { Building2, Landmark, Shield, TrendingUp, CheckCircle2, X, Briefcase, AlertTriangle } from 'lucide-react';

interface Props { lang: 'EN' | 'VN'; onBookDemo: () => void; }

const t = {
  EN: {
    eyebrow: 'Case Studies',
    headline: 'Proven Results Across Industries',
    sub: 'Edtronaut helps organizations achieve measurable talent outcomes with greater speed, precision, and efficiency.',
    labels: {
      situation: 'Situation',
      challenge: 'Challenge',
      mission: 'Mission',
      approach: 'Approach',
      results: 'Results',
    },
  },
  VN: {
    eyebrow: 'Nghiên Cứu Điển Hình',
    headline: 'Kết Quả Được Chứng Minh Trên Nhiều Ngành',
    sub: 'Edtronaut giúp các tổ chức đạt được kết quả nhân tài có thể đo lường với tốc độ, độ chính xác và hiệu quả cao hơn.',
    labels: {
      situation: 'Tình Huống',
      challenge: 'Thách Thức',
      mission: 'Nhiệm Vụ',
      approach: 'Giải Pháp',
      results: 'Kết Quả',
    },
  },
};

const caseStudiesData = {
  EN: [
    {
      id: 'aircity',
      icon: Building2,
      industry: 'PropTech',
      title: 'AirCity',
      subtitle: 'Room.vn',
      mission: 'End-to-End Branding Recruitment Solutions',
      situation: 'A prominent Vietnam PropTech firm expanding its footprint into the B2C sector through Room.vn.',
      challenges: [
        'Low employer awareness',
        'No clear EVP or program positioning',
        'Negative perception of sales roles',
        'Urgent Commercial Trainee hiring',
      ],
      approach: [
        'Built a differentiated EVP & program positioning ("PropStars")',
        'Launched an omnichannel talent activation and acquisition campaign utilizing high-conversion assets and extensive on-campus activations',
        'Real-time performance tracking, Dashboard & optimization',
      ],
      results: [
        { stat: '$10-15K', label: 'Cost Avoided', desc: 'vs. traditional agency' },
        { stat: '4X', label: 'Applicant Volume', desc: 'increase in 4 weeks' },
        { stat: '65%', label: 'Faster Hiring', desc: '5–9 weeks saved' },
        { stat: '4%', label: 'Selectivity Rate', desc: 'precision hiring' },
      ],
      color: 'from-blue-600 to-cyan-500',
    },
    {
      id: 'murex',
      icon: Landmark,
      industry: 'BFSI - Capital Market Tech',
      title: 'Murex',
      subtitle: 'Global Fintech Powerhouse',
      mission: 'Precision Candidate Search for Ultra-Niche Leadership',
      situation: 'Murex, a global capital markets fintech powerhouse serving over 300 financial institutions, established its Vietnam office in 2024 with near-zero local employer brand awareness.',
      challenges: [
        'Ultra-niche role: Capital Markets Ops + Test Engineering + DevOps leadership',
        'Estimated <50 suitable profiles in market',
        'Delaying $2M+ expansion target',
        '4+ months prior search (failed)',
      ],
      approach: [
        '"Must-Have vs. Trainable" matrix',
        'Cross-border talent mapping (Vietnam, Singapore, India)',
        'Activated passive candidates (80% employed)',
        'Employer narrative building; Multi-layer high-signal screening beyond CV',
      ],
      results: [
        { stat: '~1%', label: 'Acceptance Rate', desc: 'highly selective' },
        { stat: '60%', label: 'Time Cut', desc: 'faster placement' },
        { stat: '46%', label: 'Engagement Rate', desc: '3× industry benchmark' },
      ],
      color: 'from-slate-700 to-slate-900',
    },
    {
      id: 'aia',
      icon: Shield,
      industry: 'BFSI - Insurance',
      title: 'AIA',
      subtitle: 'Multinational Insurance Leader',
      mission: 'Large-Scale AI Upskilling Initiative',
      situation: 'Leading multinational insurance and finance company facing declining recruitment effectiveness and negative agent perception.',
      challenges: [
        'Declining effectiveness of traditional recruitment',
        'Negative perception of insurance agents',
        'Needed AI-enabled "pull" strategy',
      ],
      approach: [
        'Industry-tailored AI curriculum',
        'Pilot to National Rollout: HCMC, Hanoi, Da Nang, Ha Long',
        'Built real AI capability: Content, visuals, and videos',
        'Embedded post-training reinforcement',
      ],
      results: [
        { stat: '~300', label: 'Practical Outputs', desc: 'real AI deliverables' },
        { stat: '120%', label: 'Participation Rate', desc: 'vs. 50–60% industry avg.' },
        { stat: '4.9/5', label: 'CSAT Score', desc: 'vs. 3.75–4.0 industry avg.' },
      ],
      color: 'from-emerald-600 to-teal-500',
    },
  ],
  VN: [
    {
      id: 'aircity',
      icon: Building2,
      industry: 'PropTech',
      title: 'AirCity',
      subtitle: 'Room.vn',
      mission: 'Giải Pháp Tuyển Dụng Thương Hiệu Toàn Diện',
      situation: 'Một công ty PropTech hàng đầu Việt Nam mở rộng sang lĩnh vực B2C qua Room.vn.',
      challenges: [
        'Nhận diện thương hiệu tuyển dụng thấp',
        'Chưa có EVP hoặc định vị chương trình rõ ràng',
        'Nhận thức tiêu cực về vai trò bán hàng',
        'Tuyển Commercial Trainee cấp bách',
      ],
      approach: [
        'Xây dựng EVP khác biệt & định vị chương trình ("PropStars")',
        'Chiến dịch kích hoạt nhân tài đa kênh với tài liệu chuyển đổi cao',
        'Theo dõi hiệu suất thời gian thực, bảng điều khiển & tối ưu hóa',
      ],
      results: [
        { stat: '$10-15K', label: 'Tiết Kiệm', desc: 'so với agency truyền thống' },
        { stat: '4X', label: 'Lượng Ứng Viên', desc: 'tăng trong 4 tuần' },
        { stat: '65%', label: 'Tuyển Nhanh Hơn', desc: 'tiết kiệm 5–9 tuần' },
        { stat: '4%', label: 'Tỷ Lệ Chọn Lọc', desc: 'tuyển chọn chính xác' },
      ],
      color: 'from-blue-600 to-cyan-500',
    },
    {
      id: 'murex',
      icon: Landmark,
      industry: 'BFSI - Thị Trường Vốn',
      title: 'Murex',
      subtitle: 'Fintech Toàn Cầu',
      mission: 'Tìm Kiếm Chính Xác Cho Lãnh Đạo Ngách',
      situation: 'Murex, công ty fintech thị trường vốn toàn cầu phục vụ hơn 300 tổ chức tài chính, thành lập văn phòng Việt Nam năm 2024 với nhận diện thương hiệu gần như bằng không.',
      challenges: [
        'Vị trí ngách: Ops thị trường vốn + Test Engineering + DevOps',
        'Ước tính <50 hồ sơ phù hợp trên thị trường',
        'Làm chậm mục tiêu mở rộng $2M+',
        'Tìm kiếm 4+ tháng (thất bại)',
      ],
      approach: [
        'Ma trận "Phải Có vs. Có Thể Đào Tạo"',
        'Ánh xạ nhân tài xuyên biên giới (Việt Nam, Singapore, Ấn Độ)',
        'Kích hoạt ứng viên thụ động (80% đang làm việc)',
        'Xây dựng câu chuyện tuyển dụng & sàng lọc tín hiệu cao',
      ],
      results: [
        { stat: '~1%', label: 'Tỷ Lệ Chấp Nhận', desc: 'tuyển chọn khắt khe' },
        { stat: '60%', label: 'Giảm Thời Gian', desc: 'tuyển nhanh hơn' },
        { stat: '46%', label: 'Tỷ Lệ Tương Tác', desc: 'gấp 3× chuẩn ngành' },
      ],
      color: 'from-slate-700 to-slate-900',
    },
    {
      id: 'aia',
      icon: Shield,
      industry: 'BFSI - Bảo Hiểm',
      title: 'AIA',
      subtitle: 'Lãnh Đạo Bảo Hiểm Đa Quốc Gia',
      mission: 'Sáng Kiến Nâng Cao Kỹ Năng AI Quy Mô Lớn',
      situation: 'Công ty bảo hiểm và tài chính đa quốc gia hàng đầu đối mặt với hiệu quả tuyển dụng giảm và nhận thức tiêu cực về đại lý.',
      challenges: [
        'Hiệu quả giảm của phương pháp tuyển dụng truyền thống',
        'Nhận thức tiêu cực về đại lý bảo hiểm',
        'Cần chiến lược "kéo" nhân tài với AI',
      ],
      approach: [
        'Giáo trình AI được điều chỉnh theo ngành',
        'Từ thí điểm đến quốc gia: TP.HCM, Hà Nội, Đà Nẵng, Hạ Long',
        'Xây dựng năng lực AI thực tế: nội dung, hình ảnh, video',
        'Củng cố sau đào tạo được nhúng sẵn',
      ],
      results: [
        { stat: '~300', label: 'Sản Phẩm Thực Tế', desc: 'kết quả AI hữu hình' },
        { stat: '120%', label: 'Tỷ Lệ Tham Gia', desc: 'vs. 50–60% tb ngành' },
        { stat: '4.9/5', label: 'Điểm CSAT', desc: 'vs. 3.75–4.0 tb ngành' },
      ],
      color: 'from-emerald-600 to-teal-500',
    },
  ],
};

export default function CaseStudy({ lang, onBookDemo }: Props) {
  const tx = t[lang];
  const caseStudies = caseStudiesData[lang];

  return (
    <section className="py-24 bg-slate-50" id="case-study">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#000CAD]">{tx.eyebrow}</span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mt-2 mb-4">{tx.headline}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">{tx.sub}</p>
        </div>

        {/* 3-Card Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <div
                key={study.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#000CAD]/20 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${study.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-black mb-1">{study.title}</h3>
                  <p className="text-white/80 text-sm">{study.subtitle}</p>
                </div>

                {/* Full content inline */}
                <div className="p-6 flex-1 flex flex-col space-y-5">

                  {/* Situation */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={13} className="text-[#000CAD]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{tx.labels.situation}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{study.situation}</p>
                  </div>

                  {/* Mission */}
                  <div className="bg-[#000CAD]/5 rounded-lg p-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#000CAD] mb-1">{tx.labels.mission}</p>
                    <p className="text-sm font-semibold text-slate-800">{study.mission}</p>
                  </div>

                  {/* Challenges */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle size={13} className="text-amber-500" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{tx.labels.challenge}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {study.challenges.map((ch, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className="w-5 h-5 bg-red-50 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X size={10} className="text-red-400" />
                          </div>
                          <span className="leading-snug">{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Approach */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{tx.labels.approach}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {study.approach.map((app, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <div className="w-5 h-5 bg-[#12EDA6]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 size={10} className="text-[#12EDA6]" />
                          </div>
                          <span className="leading-snug">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp size={13} className="text-[#12EDA6]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{tx.labels.results}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((r, i) => (
                        <div key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                          <p className="text-xl font-black text-[#000CAD] leading-none">{r.stat}</p>
                          <p className="text-[10px] font-semibold text-slate-600 mt-1">{r.label}</p>
                          <p className="text-[10px] text-slate-400">{r.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
