import React from 'react';
import { Compass, Map, Code2, Gauge, Rocket, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Understanding your goals',
      icon: Compass,
      color: 'text-[#007BFF]',
      border: 'border-[#007BFF]/40',
      bg: 'bg-blue-500/10',
      description: 'We audit your current API architecture, database indexes, search console crawl logs, and organic competitors.',
    },
    {
      num: '02',
      title: 'Plan',
      tagline: 'Strategic roadmap',
      icon: Map,
      color: 'text-[#007BFF]',
      border: 'border-[#007BFF]/40',
      bg: 'bg-blue-500/10',
      description: 'We map out the relational data models, FastAPI endpoint specifications, keyword opportunity clusters, and technical milestones.',
    },
    {
      num: '03',
      title: 'Develop',
      tagline: 'Build & integrate',
      icon: Code2,
      color: 'text-[#0099ff]',
      border: 'border-[#0099ff]/40',
      bg: 'bg-blue-400/10',
      description: 'Writing high-throughput Python code, configuring SQLAlchemy async sessions, and deploying programmatic schema pipelines.',
    },
    {
      num: '04',
      title: 'Optimize',
      tagline: 'Test & improve',
      icon: Gauge,
      color: 'text-[#00C853]',
      border: 'border-[#00C853]/40',
      bg: 'bg-emerald-500/10',
      description: 'Load testing with 10k concurrent virtual users, Core Web Vitals profiling, crawl budget tuning, and on-page semantic audits.',
    },
    {
      num: '05',
      title: 'Scale',
      tagline: 'Grow & succeed',
      icon: Rocket,
      color: 'text-[#00C853]',
      border: 'border-[#00C853]/40',
      bg: 'bg-emerald-500/10',
      description: 'Continuous monitoring, high-volume search term capture, sub-20ms SLA guarantee, and compounding revenue scale.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#090d16] border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#007BFF] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF]"></span>
            Systematic Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
            Our 5-Stage <span className="text-gradient-brand">Delivery Engine</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            From initial system discovery to exponential scale, every step is calculated, tested, and benchmarked.
          </p>
        </div>

        {/* Horizontal Process Steps */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-14 left-16 right-16 h-[2px] bg-gradient-to-r from-[#007BFF] via-[#00d2ff] to-[#00C853] z-0 opacity-50"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="p-6 rounded-2xl bg-[#0e1424] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    {/* Top Circle & Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center ${step.color} shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xl font-extrabold text-slate-600 group-hover:text-slate-400 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    {/* Step Title & Tagline */}
                    <h3 className="text-xl font-heading font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#007BFF] uppercase tracking-wider mb-3">
                      {step.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step status bar */}
                  <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Phase {index + 1} of 5</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
