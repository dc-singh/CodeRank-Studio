import React from 'react';
import { ArrowRight, Calendar, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onOpenConsultation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Container with Blue-Green Brand Glow */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#0a0f1d] border border-slate-700/80 p-8 sm:p-14 lg:p-16 shadow-[0_20px_60px_rgba(0,123,255,0.15)] overflow-hidden">
          
          {/* Subtle Geometric Bracket watermark & Glow Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#007BFF]/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00C853]/20 rounded-full blur-[120px] pointer-events-none"></div>

          {/* Geometric Code Bracket watermark */}
          <div className="absolute -right-8 -bottom-10 font-mono text-[160px] font-black text-slate-800/20 select-none pointer-events-none leading-none">
            &lt;/&gt;
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-semibold text-slate-200 uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#00C853]" />
              <span>Let's Engineer Your Competitive Advantage</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-tight mb-6">
              Ready to scale your business?
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Get a comprehensive 30-minute backend architecture & SEO growth audit directly with our lead architects. No fluff, just actionable engineering strategies.
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00C853] text-white font-heading font-bold text-base shadow-xl hover:shadow-[0_0_35px_rgba(0,200,83,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trust Checklist */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00C853]" />
                <span>Strict NDA Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#007BFF]" />
                <span>Custom Architecture Audit Included</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00C853]"></span>
                <span>Response in &lt; 4 Hours</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
