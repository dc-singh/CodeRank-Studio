import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { AuditEstimator } from './components/AuditEstimator';
import { Testimonials } from './components/Testimonials';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Backend Development & SEO Growth');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setModalOpen(true);
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-[#e2e8f0] flex flex-col selection:bg-[#007BFF] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation('General Free Consultation')} />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onGetStarted={() => handleOpenConsultation('New Client Onboarding')}
          onExploreServices={handleScrollToServices}
        />

        {/* 2. About Us */}
        <AboutUs />

        {/* 3. Services (3 core cards: Backend, SEO, Branding) */}
        <Services onSelectService={(service) => handleOpenConsultation(service)} />

        {/* 5-Step Process (from Brand kit presentation template) */}
        <Process />

        {/* 4. Portfolio / Case Studies */}
        <Portfolio />

        {/* Interactive Growth & Latency Simulator */}
        <AuditEstimator onBookConsultation={(details) => handleOpenConsultation(details || 'Custom Roadmap')} />

        {/* 5. Testimonials Slider */}
        <Testimonials />

        {/* 6. Call to Action Section */}
        <CtaSection onOpenConsultation={() => handleOpenConsultation('Free Scale Consultation')} />
      </main>

      {/* 7. Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation('Footer Consultation Request')} />

      {/* Booking / Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
