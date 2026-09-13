import React, { useState } from 'react';
import { 
  TrendingUp, 
  Server, 
  CheckCircle2, 
  Zap, 
  Activity
} from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number>(0);

  const projects = [
    {
      id: 0,
      title: 'NexusPay Global Microservices',
      category: 'Backend Architecture & API Scale',
      client: 'NexusPay FinTech',
      summary:
        'Migrated a choking legacy monolith to a distributed FastAPI & SQLAlchemy async architecture capable of processing 45M+ daily transactions with sub-20ms P99 latency.',
      type: 'backend',
      highlightBadge: 'FastAPI + Redis + PostgreSQL',
      beforeAfter: [
        { label: 'P99 API Latency', before: '1,240 ms', after: '14 ms', change: '-98.8%' },
        { label: 'Max Concurrency', before: '1,800 req/s', after: '48,000 req/s', change: '+26x' },
        { label: 'Infrastructure Cost', before: '$14,200/mo', after: '$4,100/mo', change: '-71%' },
        { label: 'Uptime SLA', before: '98.4%', after: '99.995%', change: '+1.6%' },
      ],
      techStack: ['FastAPI', 'Python 3.12', 'SQLAlchemy 2.0', 'PostgreSQL', 'Redis Cluster', 'Docker', 'AWS EKS'],
      deliverables: [
        'Decoupled monolithic payment routes into 6 asynchronous microservices',
        'Built tiered Redis cache reducing database read pressure by 83%',
        'Integrated automated API schema validation with Pydantic v2',
        'Implemented circuit breakers and zero-downtime blue/green deployment',
      ],
      chartData: [20, 24, 28, 42, 60, 85, 98],
      chartLabel: 'Monthly Transaction Volume (Millions)',
    },
    {
      id: 1,
      title: 'CloudMetrics SaaS Organic Dominance',
      category: 'Technical SEO & Programmatic Scale',
      client: 'CloudMetrics B2B',
      summary:
        'Architected an enterprise programmatic SEO engine and eliminated critical Core Web Vitals bottlenecks, propelling organic monthly traffic from 18,500 to over 112,000 visitors.',
      type: 'seo',
      highlightBadge: 'Core Web Vitals + Schema.org',
      beforeAfter: [
        { label: 'Monthly Organic Visits', before: '18,500', after: '112,400', change: '+507%' },
        { label: 'Google Top 3 Keywords', before: '14', after: '168', change: '+1,100%' },
        { label: 'Core Web Vitals Score', before: '44 / 100', after: '99 / 100', change: '+125%' },
        { label: 'Qualified Inbound Leads', before: '65/mo', after: '280/mo', change: '+330%' },
      ],
      techStack: ['Programmatic SEO', 'Semantic JSON-LD', 'Google Search Console', 'FastAPI SSR', 'Edge CDN', 'Ahrefs'],
      deliverables: [
        'Generated 850+ programmatic integration comparison pages with custom dynamic metadata',
        'Resolved critical LCP and CLS issues to achieve 99+ PageSpeed scores',
        'Deployed structured JSON-LD semantic schema across all documentation and product hubs',
        'Executed targeted high-authority backlink outreach campaign',
      ],
      chartData: [18, 25, 39, 58, 76, 94, 112],
      chartLabel: 'Organic Traffic Growth (Thousands / mo)',
    },
    {
      id: 2,
      title: 'FinPulse Real-Time Financial Engine',
      category: 'Hybrid Backend + Rapid Search Indexing',
      client: 'FinPulse Analytics',
      summary:
        'Engineered an ultra-fast market analytics backend supporting 120k WebSocket streams while delivering automated instant indexing so new asset pages appear on Google within 40 minutes.',
      type: 'hybrid',
      highlightBadge: 'FastAPI + WebSockets + Real-time SEO',
      beforeAfter: [
        { label: 'Google Indexing Time', before: '72 hours', after: '38 minutes', change: '-99.1%' },
        { label: 'Concurrent WebSockets', before: '8,000', after: '120,000', change: '+15x' },
        { label: 'Organic Search Impressions', before: '2.1M / mo', after: '9.8M / mo', change: '+366%' },
        { label: 'Bounce Rate', before: '68%', after: '36%', change: '-47%' },
      ],
      techStack: ['Python', 'FastAPI', 'WebSockets', 'SQLAlchemy Async', 'Redis Streams', 'IndexNow API', 'Tailwind'],
      deliverables: [
        'Asynchronous Python backend with non-blocking event loops for live stock feeds',
        'Instant IndexNow API automation notifying search engines upon new market entity creation',
        'Automated FAQ & Financial Product structured data schema generation',
        'Edge caching architecture serving dynamic price cards in under 12ms',
      ],
      chartData: [21, 32, 45, 61, 74, 88, 98],
      chartLabel: 'Search Impressions (100k increments)',
    },
  ];

  const current = projects[activeProject];

  return (
    <section id="portfolio" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00C853]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#00C853] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C853]"></span>
            Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
            Featured <span className="text-gradient-brand">Case Studies</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Real systems. Quantifiable performance metrics. Explore how we re-architect backend engines and drive explosive search rankings.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {projects.map((proj, idx) => (
            <button
              key={proj.title}
              onClick={() => setActiveProject(idx)}
              className={`px-5 py-3 rounded-xl font-heading text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 border ${
                activeProject === idx
                  ? 'bg-gradient-to-r from-[#007BFF] to-[#00C853] text-white border-transparent shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {proj.type === 'backend' && <Server className="w-4 h-4" />}
              {proj.type === 'seo' && <TrendingUp className="w-4 h-4" />}
              {proj.type === 'hybrid' && <Activity className="w-4 h-4" />}
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Active Project Showcase Card */}
        <div className="rounded-3xl bg-[#0e1424] border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Details & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#007BFF]/15 border border-[#007BFF]/30 text-[#007BFF] text-xs font-semibold">
                  {current.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Client: <strong className="text-white font-medium">{current.client}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
                {current.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {current.summary}
              </p>

              {/* Deliverables Checklist */}
              <div>
                <h4 className="text-xs font-heading font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Technical Architecture & Execution:
                </h4>
                <div className="space-y-2">
                  {current.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-heading font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Applied Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {current.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Before/After Metrics & Growth Chart Visual */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Before / After Metrics Grid */}
              <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#00C853]" />
                    Measurable Impact
                  </h4>
                  <span className="text-[11px] font-mono text-[#00C853] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Verified Results
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {current.beforeAfter.map((stat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80">
                      <div className="text-[10px] text-slate-400 font-medium truncate mb-1">
                        {stat.label}
                      </div>
                      <div className="flex items-baseline justify-between">
                        <div className="text-xs text-slate-500 line-through mr-1 font-mono">{stat.before}</div>
                        <div className="text-sm font-heading font-bold text-white font-mono">{stat.after}</div>
                      </div>
                      <div className="text-[10px] font-mono font-bold text-[#00C853] mt-1 text-right">
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Visual Growth Bar Chart */}
              <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-slate-300">
                    {current.chartLabel}
                  </div>
                  <span className="text-[10px] font-mono text-[#007BFF] uppercase">6-Month Trend</span>
                </div>

                {/* Animated Bars */}
                <div className="h-28 flex items-end justify-between gap-2 pt-4 px-2">
                  {current.chartData.map((val, idx) => {
                    const heightPercent = Math.max(15, (val / 112) * 100);
                    const isLast = idx === current.chartData.length - 1;
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                        <span className="text-[9px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          {val}
                        </span>
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full rounded-t-md transition-all duration-500 ${
                            isLast
                              ? 'bg-gradient-to-t from-[#007BFF] to-[#00C853] shadow-[0_0_12px_rgba(0,200,83,0.5)]'
                              : 'bg-slate-700 hover:bg-[#007BFF]'
                          }`}
                        ></div>
                        <span className="text-[9px] font-mono text-slate-500">M{idx + 1}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
