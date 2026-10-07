import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Growth Audit', href: '#audit-estimator' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <BrandLogo size="md" showTagline={false} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#007BFF] to-[#00C853] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Quick Contact & Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:coderanksolutions@gmail.com"
              className="hidden xl:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-full transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#007BFF]" />
              <span>coderanksolutions@gmail.com</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="relative group overflow-hidden rounded-lg p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#007BFF] via-[#00C853] to-[#007BFF] rounded-lg transition-all duration-300 group-hover:opacity-90"></span>
              <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-[7px] bg-[#090d16] font-heading font-semibold text-xs tracking-wider uppercase text-white transition-all duration-300 group-hover:bg-opacity-80">
                <span>Free Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00C853] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden px-3 py-1.5 rounded-md bg-[#007BFF] text-white text-xs font-semibold"
            >
              Book Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d16] border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <a
                href="mailto:hello@coderank.studio"
                className="flex items-center gap-2 text-sm text-slate-300 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800"
              >
                <Mail className="w-4 h-4 text-[#007BFF]" />
                <span>hello@coderank.studio</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-slate-300 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800"
              >
                <Phone className="w-4 h-4 text-[#00C853]" />
                <span>+91 98765 43210</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full mt-2 py-3 bg-gradient-to-r from-[#007BFF] to-[#00C853] text-white font-heading font-semibold text-sm rounded-lg shadow-lg flex items-center justify-center gap-2"
              >
                <span>Book a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
