import { useEffect, useState } from 'react';
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
import { AboutPage } from './pages/AboutPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { GrowthAuditPage } from './pages/GrowthAuditPage';
import { ProcessPage } from './pages/ProcessPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Backend Development & SEO Growth');
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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

  const pageComponent = {
    '/services': <ServicesPage onOpenConsultation={handleOpenConsultation} />,
    '/about': <AboutPage onOpenConsultation={handleOpenConsultation} />,
    '/process': <ProcessPage onOpenConsultation={handleOpenConsultation} />,
    '/case-studies': <CaseStudiesPage onOpenConsultation={handleOpenConsultation} />,
    '/growth-audit': <GrowthAuditPage onOpenConsultation={handleOpenConsultation} />,
    '/testimonials': <TestimonialsPage onOpenConsultation={handleOpenConsultation} />,
  }[path];

  return (
    <div className="min-h-screen bg-[#090d16] text-[#e2e8f0] flex flex-col selection:bg-[#007BFF] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation('General Free Consultation')} />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        {pageComponent ? (
          pageComponent
        ) : (
          <>
            <Hero
              onGetStarted={() => handleOpenConsultation('New Client Onboarding')}
              onExploreServices={handleScrollToServices}
            />
            <AboutUs />
            <Services onSelectService={(service) => handleOpenConsultation(service)} />
            <Process />
            <Portfolio />
            <AuditEstimator onBookConsultation={(details) => handleOpenConsultation(details || 'Custom Roadmap')} />
            <Testimonials />
            <CtaSection onOpenConsultation={() => handleOpenConsultation('Free Scale Consultation')} />
          </>
        )}
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
