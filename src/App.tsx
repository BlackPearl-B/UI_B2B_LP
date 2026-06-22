import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerLogos from './components/PartnerLogos';
import UseCaseSelector from './components/UseCaseSelector';
import SocialProof from './components/SocialProof';
import ROICalculator from './components/ROICalculator';
import CaseStudy from './components/CaseStudy';
import FAQ from './components/FAQ';
import DemoForm from './components/DemoForm';
import SimulationModal from './components/SimulationModal';
import Footer from './components/Footer';

type Lang = 'EN' | 'VN';

export default function App() {
  const [lang, setLang] = useState<Lang>('EN');
  const [showSimulation, setShowSimulation] = useState(false);

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        lang={lang}
        setLang={setLang}
        onBookDemo={scrollToDemo}
        onTrySample={() => setShowSimulation(true)}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onBookDemo={scrollToDemo}
          onTrySample={() => setShowSimulation(true)}
        />

        {/* 2. Partner Logos */}
        <PartnerLogos lang={lang} />

        {/* 3. Use Cases */}
        <UseCaseSelector lang={lang} onBookDemo={scrollToDemo} />

        {/* 4. Social Proof */}
        <SocialProof lang={lang} />

        {/* 5. ROI Impact (USD) */}
        <ROICalculator lang={lang} onBookDemo={scrollToDemo} />

        {/* 6. Case Study */}
        <CaseStudy lang={lang} onBookDemo={scrollToDemo} />

        {/* 7. FAQ */}
        <FAQ lang={lang} onBookDemo={scrollToDemo} />

        {/* 8. Demo Request Form */}
        <DemoForm lang={lang} />
      </main>

      <Footer lang={lang} />

      {showSimulation && (
        <SimulationModal
          lang={lang}
          onClose={() => setShowSimulation(false)}
          onBookDemo={scrollToDemo}
        />
      )}
    </div>
  );
}
