import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Arjun Mehta',
      role: 'Chief Technology Officer',
      company: 'PayFlow Global',
      avatar: 'AM',
      rating: 5,
      quote:
        'CodeRank Studio completely turned around our API performance. Our checkout latency dropped from 980ms to just 18ms on FastAPI, which immediately eliminated checkout abandonment during our peak flash sales.',
      tag: 'Backend Architecture',
      metric: '98% Latency Drop',
    },
    {
      id: 2,
      name: 'Elena Rostova',
      role: 'VP of Growth & Marketing',
      company: 'SaaSmetrics Europe',
      avatar: 'ER',
      rating: 5,
      quote:
        'Finding an agency that truly understands both deep technical SEO and search algorithms is rare. Nakul and the CodeRank team scaled our organic traffic by 4.5x within 4 months with programmatic SEO.',
      tag: 'SEO Domination',
      metric: '+450% Organic Growth',
    },
    {
      id: 3,
      name: 'David Vance',
      role: 'Founder & CEO',
      company: 'DataPulse Cloud',
      avatar: 'DV',
      rating: 5,
      quote:
        'Our database queries were locking under heavy loads. CodeRank Studio re-architected our SQLAlchemy async layer and implemented Redis caching. We now handle 30 million requests daily effortlessly.',
      tag: 'Scale & Concurrency',
      metric: '30M+ Requests/day',
    },
    {
      id: 4,
      name: 'Sophia Lin',
      role: 'Head of Product',
      company: 'FinSphere Labs',
      avatar: 'SL',
      rating: 5,
      quote:
        'Their branding and developer documentation guidance gave our APIs enterprise credibility. Plus, our Core Web Vitals score hit a perfect 100 on Google PageSpeed Insights.',
      tag: 'Branding & CWV',
      metric: '100/100 PageSpeed',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#007BFF]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#00C853] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C853]"></span>
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Trusted by <span className="text-gradient-brand">High-Growth Founders</span>
          </h2>
          <p className="text-base text-slate-300">
            Hear from engineering leaders and growth executives who transformed their systems and traffic with CodeRank Studio.
          </p>
        </div>

        {/* Clean Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-[#0e1424] border border-slate-800 p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[340px] flex flex-col justify-between">
            
            {/* Ambient Quote watermark */}
            <Quote className="absolute top-6 right-6 w-24 h-24 text-slate-800/40 pointer-events-none select-none" />

            <div>
              {/* Top Row: Rating & Tag */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-300">5.0 Verified Review</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#007BFF]/10 border border-[#007BFF]/30 text-xs font-mono text-[#007BFF] font-medium">
                    {current.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#00C853]/10 border border-[#00C853]/30 text-xs font-mono text-[#00C853] font-semibold">
                    {current.metric}
                  </span>
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg sm:text-xl text-slate-100 font-normal leading-relaxed mb-8 italic">
                "{current.quote}"
              </blockquote>
            </div>

            {/* Bottom Row: Author details & slider navigation controls */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#007BFF] to-[#00C853] p-[2px]">
                  <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center font-heading font-bold text-white text-sm">
                    {current.avatar}
                  </div>
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm flex items-center gap-1.5">
                    <span>{current.name}</span>
                    <ShieldCheck className="w-4 h-4 text-[#00C853]" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {current.role} • <span className="text-slate-300 font-medium">{current.company}</span>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                {/* Dot Indicators */}
                <div className="flex items-center gap-1.5 mr-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === idx ? 'w-6 bg-[#007BFF]' : 'w-2 bg-slate-700 hover:bg-slate-600'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Prev / Next buttons */}
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-[#007BFF]/50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-[#007BFF]/50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
