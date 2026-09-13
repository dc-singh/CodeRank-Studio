import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Zap } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Backend Development & SEO Growth',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    service: initialService,
    budget: '$5,000 - $15,000',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0e1424] border border-slate-700 shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <BrandLogo size="sm" showTagline={false} className="mb-3" />
              <h3 className="text-2xl font-heading font-bold text-white">
                Book a Free Consultation
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Speak directly with <strong className="text-slate-200">Nakul Dev</strong> and our backend & SEO architects. 30 minutes, zero fluff.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#007BFF]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#007BFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SaaS Flow Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#007BFF]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Current Website / API URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://example.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#007BFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Target Focus
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#007BFF]"
                  >
                    <option value="Backend Development & FastAPI">Backend Development (FastAPI/Python)</option>
                    <option value="SEO Optimization & Rankings">SEO Optimization (Technical & CWV)</option>
                    <option value="Both Backend + SEO (Full Scale)">Both Backend + SEO Growth</option>
                    <option value="Branding & Tech Guidance">Branding & Technical Docs Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#007BFF]"
                  >
                    <option value="$3,000 - $7,000">$3,000 - $7,000 (Sprint Audit & Fast Fixes)</option>
                    <option value="$7,000 - $15,000">$7,000 - $15,000 (Core Re-architecture)</option>
                    <option value="$15,000+">$15,000+ (Full Enterprise Scale Engine)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  System Bottlenecks or Goals (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your current latency, database loads, or organic ranking goals..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#007BFF] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00C853] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Securing Consultation Slot...</span>
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm Free Consultation Request</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00C853]" /> 100% Confidential
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#007BFF]" /> Response within 4 Hours
                </span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-[#00C853] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Consultation Request Received!
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name || 'there'}</strong>. Nakul Dev and our senior engineering team will review your requirements and reach out at <span className="text-[#007BFF] font-medium">{formData.email}</span> within 4 business hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-left max-w-sm mx-auto space-y-1.5 font-mono">
              <div className="text-slate-400 text-[10px] uppercase font-heading">Consultation Reference:</div>
              <div className="text-emerald-400">#CR-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div className="text-slate-300">Service: {formData.service}</div>
              <div className="text-slate-400 text-[10px]">Priority: High SLA Queue</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-heading text-xs font-semibold"
            >
              Back to CodeRank Studio
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
