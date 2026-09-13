import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#222222] border-t border-slate-700/60 relative overflow-hidden text-slate-300">
      {/* Geometric Accents & Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,123,255,0.2)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      {/* Decorative Brand Color Bar at top */}
      <div className="h-1 w-full bg-gradient-to-r from-[#007BFF] via-[#00d2ff] to-[#00C853]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Brand & Mission Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            <BrandLogo size="md" showTagline={true} />
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              CodeRank Studio is a specialized tech agency helping digital businesses achieve hyper-growth through high-throughput backend APIs and organic SEO domination.
            </p>

            {/* Founder Card info from Brand Kit */}
            <div className="p-3.5 rounded-xl bg-[#1a1a1a] border border-slate-700/80 max-w-sm">
              <div className="text-xs font-semibold text-white">Nakul Dev</div>
              <div className="text-[11px] text-[#007BFF] font-medium">Founder & Backend Architect</div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1">
                <MapPin className="w-3 h-3 text-[#00C853]" />
                <span>India | Remote (Global Clients)</span>
              </div>
            </div>

            {/* Brand Colors Swatch Bar */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Brand Colors:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#007BFF] shadow-sm" title="#007BFF (Blue)"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#00C853] shadow-sm" title="#00C853 (Green)"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFFFFF] shadow-sm" title="#FFFFFF (White)"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#222222] border border-slate-600 shadow-sm" title="#222222 (Dark Gray)"></span>
              </div>
            </div>
          </div>

          {/* Services Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#007BFF] font-mono">&lt;/&gt;</span>
                  <span>FastAPI & Python Backends</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#007BFF] font-mono">&lt;/&gt;</span>
                  <span>SQLAlchemy & Postgres Scale</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#00C853] font-mono">&#8593;</span>
                  <span>Technical & Core Web Vitals SEO</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#00C853] font-mono">&#8593;</span>
                  <span>Programmatic SEO Pipelines</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white font-mono">•</span>
                  <span>Developer Branding & UI Guidance</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:hello@coderank.studio"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#1c1c1c] border border-slate-700/80 hover:border-[#007BFF] hover:bg-[#252525] transition-all group"
              >
                <div className="p-2 rounded-lg bg-[#007BFF]/15 text-[#007BFF]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Email Us</div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#007BFF] transition-colors">
                    hello@coderank.studio
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto text-slate-500 group-hover:text-white transition-colors" />
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#1c1c1c] border border-slate-700/80 hover:border-[#00C853] hover:bg-[#252525] transition-all group"
              >
                <div className="p-2 rounded-lg bg-[#00C853]/15 text-[#00C853]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Call / WhatsApp</div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#00C853] transition-colors">
                    +91 98765 43210
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-xs text-slate-400 mb-2">Connect with our team:</div>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#1a1a1a] border border-slate-700 text-slate-300 hover:text-white hover:border-[#007BFF] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.9 0 1.63-.73 1.63-1.63s-.73-1.63-1.63-1.63a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63m1.4 10.14v-8.37H5.06v8.37h2.8z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#1a1a1a] border border-slate-700 text-slate-300 hover:text-white hover:border-[#00C853] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#1a1a1a] border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <button
                  onClick={onOpenConsultation}
                  className="ml-auto text-xs font-semibold text-[#00C853] hover:underline"
                >
                  Book Consultation →
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="pt-8 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 <span className="text-white font-semibold">CodeRank Studio</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse"></span>
              FastAPI Cluster Operational (99.99%)
            </span>
            <span>•</span>
            <span className="text-[11px] text-slate-400">Backend. SEO. Growth.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
