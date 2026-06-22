interface Props { lang: 'EN' | 'VN'; }

const t = {
  EN: {
    headline: 'Trusted by Industry Leaders',
  },
  VN: {
    headline: 'Được Tin Dùng Bởi Các Lãnh Đạo Ngành',
  },
};

const partners = ['Viettel', 'Shopee VN', 'Grab', 'Zalo', 'VuaNem', 'AirCity', 'NetSuite', 'AccessTrade'];

export default function PartnerLogos({ lang }: Props) {
  const tx = t[lang];

  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">{tx.headline}</h3>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...partners, ...partners, ...partners, ...partners].map((name, i) => (
              <div key={i} className="inline-flex items-center justify-center px-10 py-4">
                <span className="text-xl font-black text-slate-200 hover:text-slate-400 transition-colors cursor-default select-none">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
