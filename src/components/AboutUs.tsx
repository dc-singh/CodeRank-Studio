import React from 'react';
import { 
  Code2, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Search, 
  Server, 
  BarChart3, 
  Gauge, 
  Layers, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#090d16] border-t border-slate-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00C853]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#007BFF] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF]"></span>
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
            Engineering Code That Scales. <br />
            <span className="text-gradient-green">Optimizing Ranks That Convert.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            CodeRank Studio is a team of backend developers and SEO experts helping businesses grow online.
          </p>
        </div>

        {/* 2-Column Content + Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Deep Story & Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Why We Combined <span className="text-[#007BFF]">Backend Power</span> with <span className="text-[#00C853]">Organic SEO</span>
            </h3>
            
            <p className="text-slate-300 text-base leading-relaxed">
              Most web platforms suffer from a disconnect: backend developers build complex systems without thinking about crawlability, while marketing agencies produce SEO content for websites plagued by 3-second database latency.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              At CodeRank Studio, we believe growth happens when <span className="text-white font-medium">technical speed meets programmatic search intelligence</span>. We architect robust Python/FastAPI microservices with optimized database models, and pair them with technical SEO architectures that Google's algorithms reward with first-page rankings.
            </p>

            {/* Core Values / Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: 'Sub-Millisecond Queries', desc: 'PostgreSQL indexing & SQLAlchemy ORM async pools' },
                { title: 'Semantic Schema Injection', desc: 'Machine-readable JSON-LD rich snippets' },
                { title: 'Zero Bloat Microservices', desc: 'Modular FastAPI endpoints with JWT & caching' },
                { title: 'Crawl Budget Optimization', desc: '100% Core Web Vitals and instant TTFB' },
              ].map((item) => (
                <div key={item.title} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-[#00C853] shrink-0" />
                    <span className="font-heading font-semibold text-white text-xs">{item.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-6">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Founder Note (Nakul Dev - from Brand Kit Business Card) */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-[#0e1628] border border-slate-800 relative">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#007BFF] to-[#00C853] p-[2px] shrink-0">
                  <div className="w-full h-full bg-[#0a0f1d] rounded-full flex items-center justify-center font-heading font-bold text-white text-base">
                    ND
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-sm">Nakul Dev</h4>
                  <p className="text-xs text-[#007BFF] font-medium">Founder & Backend Architect</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    "We don't build vanity code. Every API call must be blistering fast, and every page must rank and compound business revenue."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Minimal Illustration (Coding + Analytics from Brand Kit) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Central Illustration Container */}
              <div className="relative rounded-3xl bg-[#0e1424] border border-slate-800 p-6 md:p-8 shadow-2xl overflow-hidden">
                
                {/* Circuit background overlay */}
                <div className="absolute inset-0 bg-tech-circuit opacity-40"></div>

                {/* Header label */}
                <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/30">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="text-slate-400 font-bold">+</span>
                    <div className="p-2 rounded-lg bg-[#00C853]/10 text-[#00C853] border border-[#00C853]/30">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-heading font-bold text-white ml-2">The Dual Engine Ecosystem</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#00C853] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Synchronized
                  </span>
                </div>

                {/* Minimal Illustration Graph: Code Engine -> Growth Rocket */}
                <div className="relative z-10 space-y-6">
                  
                  {/* Engine Box 1: Backend System */}
                  <div className="p-4 rounded-xl bg-[#080d19]/90 border border-slate-800/90 relative group hover:border-[#007BFF]/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#007BFF]">
                          <Server className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Engine 01</div>
                          <div className="text-sm font-heading font-bold text-white">Scalable Backend Infrastructure</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#007BFF] font-semibold">FastAPI & Python</span>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">Async Pools</span>
                        <span className="text-white font-mono font-semibold">SQLAlchemy</span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">In-Memory Cache</span>
                        <span className="text-[#007BFF] font-mono font-semibold">Redis L2</span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">Throughput</span>
                        <span className="text-emerald-400 font-mono font-semibold">10k+ RPS</span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Connector Arrow with Brand Brackets */}
                  <div className="flex items-center justify-center gap-3 py-1">
                    <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#007BFF]"></div>
                    <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 font-mono text-xs text-slate-300 flex items-center gap-1.5 shadow-md">
                      <span className="text-[#007BFF] font-bold">&lt;</span>
                      <span className="text-xs uppercase font-heading tracking-widest text-[#00C853] font-bold">&#8593; SYNERGY</span>
                      <span className="text-[#007BFF] font-bold">&gt;</span>
                    </div>
                    <div className="h-[1px] w-20 bg-gradient-to-r from-[#00C853] to-transparent"></div>
                  </div>

                  {/* Engine Box 2: SEO Growth & Analytics */}
                  <div className="p-4 rounded-xl bg-[#080d19]/90 border border-slate-800/90 relative group hover:border-[#00C853]/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00C853]">
                          <BarChart3 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Engine 02</div>
                          <div className="text-sm font-heading font-bold text-white">Algorithm-First SEO Acceleration</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#00C853] font-semibold">Google Top #1</span>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">Core Web Vitals</span>
                        <span className="text-[#00C853] font-mono font-semibold">Grade A (99+)</span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">Indexing Speed</span>
                        <span className="text-white font-mono font-semibold">Under 2 Hours</span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">Organic CTR</span>
                        <span className="text-[#00C853] font-mono font-semibold">+4.8x Lift</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom decorative bar */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00C853]"></span>
                    <span>Continuous automated performance telemetry</span>
                  </div>
                  <span className="text-slate-300 font-mono text-[11px]">Audit v2.6 OK</span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Brand Kit Icon Set Showcase Strip */}
        <div className="mt-8 pt-8 border-t border-slate-800/80">
          <div className="text-xs font-heading font-semibold uppercase tracking-wider text-slate-400 text-center mb-6">
            Core Technical & Analytics Capabilities
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { icon: Code2, label: 'Backend Development', color: 'text-[#007BFF]' },
              { icon: Cpu, label: 'API Integration', color: 'text-[#007BFF]' },
              { icon: Layers, label: 'Database Management', color: 'text-[#007BFF]' },
              { icon: ShieldCheck, label: 'Secure Architecture', color: 'text-[#007BFF]' },
              { icon: Server, label: 'Cloud Infrastructure', color: 'text-[#007BFF]' },
              { icon: TrendingUp, label: 'SEO Growth', color: 'text-[#00C853]' },
              { icon: BarChart3, label: 'Analytics', color: 'text-[#00C853]' },
              { icon: Search, label: 'Keyword Ranking', color: 'text-[#00C853]' },
              { icon: Gauge, label: 'Traffic Increase', color: 'text-[#00C853]' },
              { icon: ExternalLink, label: 'Performance Monitoring', color: 'text-[#00C853]' },
            ].map((cap, i) => {
              const IconComp = cap.icon;
              return (
                <div 
                  key={i} 
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col items-center text-center gap-2 hover:bg-slate-800/60 hover:border-slate-700 transition-colors"
                >
                  <IconComp className={`w-5 h-5 ${cap.color}`} />
                  <span className="text-[11px] font-medium text-slate-300">{cap.label}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
