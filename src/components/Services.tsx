import React, { useState } from 'react';
import { 
  Code, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  Globe, 
  Share2
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      badge: 'Core Competency',
      badgeColor: 'text-[#007BFF] bg-blue-500/10 border-[#007BFF]/30',
      title: 'Backend Development',
      tagline: 'High-Throughput APIs & Distributed Architecture',
      description:
        'We engineer robust, asynchronous backend systems using FastAPI, Python, and SQLAlchemy. Designed for ultra-low latency, bank-grade security, and seamless horizontal scale.',
      icon: Code,
      iconColor: 'text-[#007BFF]',
      iconBg: 'bg-blue-500/10 border-blue-500/30',
      accentGradient: 'from-[#007BFF] to-[#00d2ff]',
      techs: ['FastAPI', 'Python 3.12', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Docker'],
      features: [
        'Async REST & GraphQL Microservices Architecture',
        'Complex SQL query optimization & indexing',
        'OAuth2, JWT & RBAC security pipelines',
        'Redis caching layers achieving <20ms response time',
        'Automated CI/CD with Docker containerization',
      ],
      highlight: 'Engineered to handle 50,000+ requests/sec with zero downtime.',
    },
    {
      id: 2,
      badge: 'Organic Scale',
      badgeColor: 'text-[#00C853] bg-emerald-500/10 border-[#00C853]/30',
      title: 'SEO Optimization',
      tagline: 'Technical, On-Page & Algorithmic Growth',
      description:
        'Search engine domination through data-driven technical optimization. We align your digital infrastructure with Google’s core ranking signals to capture high-intent buyer traffic.',
      icon: TrendingUp,
      iconColor: 'text-[#00C853]',
      iconBg: 'bg-emerald-500/10 border-emerald-500/30',
      accentGradient: 'from-[#00C853] to-[#4ade80]',
      techs: ['Technical SEO', 'Core Web Vitals', 'Schema.org', 'Programmatic SEO', 'Search Console', 'Ahrefs'],
      features: [
        'Complete Technical SEO crawl & architectural audit',
        'Core Web Vitals optimization (LCP < 1.0s, CLS 0.0)',
        'JSON-LD semantic rich schema markup implementation',
        'Programmatic SEO page-generation pipelines',
        'High-authority backlink strategy & off-page dominance',
      ],
      highlight: 'Average client achieves +340% organic organic search growth in 120 days.',
    },
    {
      id: 3,
      badge: 'Conversion & Storytelling',
      badgeColor: 'text-white bg-slate-800 border-slate-700',
      title: 'Branding Support',
      tagline: 'Content Scripts, Tech Guidance & Developer UX',
      description:
        'Bridge the gap between complex engineering and compelling brand authority. We craft high-impact developer content scripts, technical documentation, and strategic design guidance.',
      icon: Sparkles,
      iconColor: 'text-[#00d2ff]',
      iconBg: 'bg-cyan-500/10 border-cyan-500/30',
      accentGradient: 'from-[#007BFF] to-[#00C853]',
      techs: ['API Docs', 'Content Scripts', 'DevRel Guidance', 'UI/UX Specs', 'Positioning'],
      features: [
        'Interactive OpenAPI / Swagger documentation styling',
        'Tech content scripts for video demos and founder reels',
        'High-converting landing page structure & UX guidance',
        'Technical messaging matrix targeting CTOs & buyers',
        'Brand kit assets & design alignment for engineering SaaS',
      ],
      highlight: 'Transforms technical complexity into high-converting brand confidence.',
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-[#0b0f19] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#007BFF]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#00C853]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#00C853] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C853]"></span>
            What We Do
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
            Services Built for <span className="text-gradient-brand">Hyper-Growth</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We don't do generic web design. We specialize in the two most powerful levers for modern online businesses: bulletproof backend infrastructure and unstoppable search engine dominance.
          </p>
        </div>

        {/* 3 Main Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const isHovered = selectedCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setSelectedCard(service.id)}
                onMouseLeave={() => setSelectedCard(null)}
                className={`relative rounded-3xl bg-[#0e1424] border transition-all duration-300 flex flex-col justify-between p-7 sm:p-8 ${
                  isHovered
                    ? 'border-[#007BFF]/70 shadow-[0_10px_40px_rgba(0,123,255,0.2)] -translate-y-1.5'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Glowing top line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${service.accentGradient} opacity-70`}
                ></div>

                <div>
                  {/* Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl border ${service.iconBg}`}>
                      <Icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <span className={`px-3 py-1 rounded-full border text-[11px] font-semibold tracking-wide uppercase ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-400 mb-4">
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Core Technologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800/80">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Highlight quote & CTA button */}
                <div>
                  <div className="p-3 rounded-xl bg-[#080d17] border border-slate-800 text-xs text-slate-300 mb-6 italic">
                    <span className="text-white font-semibold not-italic">Outcome: </span>
                    {service.highlight}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-[#007BFF] border border-slate-700 hover:border-transparent text-white font-heading font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    <span>Request {service.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Presentation Template Feature Grid (From Brand Kit image!) */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0a1122] via-[#0d162d] to-[#0a1122] border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#007BFF] shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base mb-1">Backend Development</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Scalable and secure backend systems built with modern Python technologies and bulletproof schemas.
                </p>
              </div>
            </div>

            <div className="pt-6 md:pt-0 md:pl-8 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00C853] shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base mb-1">SEO Growth</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Data-driven SEO strategies to consistently increase organic traffic, keyword rankings, and CTR.
                </p>
              </div>
            </div>

            <div className="pt-6 md:pt-0 md:pl-8 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#00d2ff] shrink-0">
                <Share2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base mb-1">Analytics & Performance</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time analytics and continuous performance monitoring for compounding business growth.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
