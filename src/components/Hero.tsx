import React, { useState } from 'react';
import { ArrowRight, Terminal, TrendingUp, Database, CheckCircle2, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<'backend' | 'seo'>('backend');
  const [testPinging, setTestPinging] = useState(false);
  const [pingResult, setPingResult] = useState<{ status: number; latency: number; timestamp: string } | null>(null);

  const handleTestPing = () => {
    setTestPinging(true);
    setTimeout(() => {
      setPingResult({
        status: 200,
        latency: Math.floor(Math.random() * 8) + 12, // 12-20ms
        timestamp: new Date().toLocaleTimeString(),
      });
      setTestPinging(false);
    }, 450);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-bracket-pattern">
      {/* Background Gradients & Geometric Accent Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#007BFF]/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#00C853]/15 rounded-full blur-[140px]"></div>
      </div>

      {/* Subtle Geometric Floating Brackets & Arrows (from Brand Kit) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-25">
        <div className="absolute top-24 left-10 font-mono text-5xl font-extrabold text-[#007BFF]/30 select-none animate-pulse">
          &lt;/&gt;
        </div>
        <div className="absolute top-1/2 left-6 font-mono text-3xl font-bold text-slate-700/40">
          {'{ API }'}
        </div>
        <div className="absolute top-36 right-16 font-mono text-6xl font-black text-[#00C853]/25">
          &#8593;
        </div>
        <div className="absolute bottom-20 right-12 font-mono text-4xl text-[#007BFF]/30">
          &lt;Growth/&gt;
        </div>
        {/* Subtle SVG Grid bracket lines */}
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="40%" y2="20%" stroke="rgba(0,123,255,0.08)" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="40%" y1="20%" x2="40%" y2="80%" stroke="rgba(0,123,255,0.08)" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="60%" y1="10%" x2="90%" y2="10%" stroke="rgba(0,200,83,0.08)" strokeWidth="1" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#00C853] animate-ping" />
              <span className="flex h-2 w-2 rounded-full bg-[#00C853] -ml-4" />
              <span className="text-xs font-semibold text-slate-200 tracking-wider uppercase">
                High-Performance Tech Agency
              </span>
              <span className="h-3.5 w-[1px] bg-slate-700"></span>
              <span className="text-xs text-[#007BFF] font-medium flex items-center gap-1">
                FastAPI + Enterprise SEO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black tracking-tight leading-[1.08] text-white mb-6">
              <span className="block">Backend.</span>
              <span className="text-gradient-brand block">SEO. Growth.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0 mb-8">
              We build scalable APIs and boost your search rankings. From sub-20ms microservices to top-ranking Google domination, we engineer digital infrastructure that scales revenue.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onGetStarted}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00C853] text-white font-heading font-bold text-base shadow-xl hover:shadow-[0_0_30px_rgba(0,123,255,0.45)] transition-all duration-300 flex items-center justify-center gap-3 group active:scale-[0.98]"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 font-heading font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 hover:border-[#007BFF]/50"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white flex items-center gap-1">
                  <span>99.99%</span>
                </div>
                <div className="text-xs text-slate-400 font-medium">Uptime SLA</div>
              </div>
              <div className="border-x border-slate-800 px-3">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-[#007BFF]">
                  &lt;20ms
                </div>
                <div className="text-xs text-slate-400 font-medium">Global Latency</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-[#00C853]">
                  +380%
                </div>
                <div className="text-xs text-slate-400 font-medium">Organic Traffic</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Tech & SEO Engine Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#007BFF]/40 to-[#00C853]/40 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              {/* Terminal Card */}
              <div className="relative rounded-2xl bg-[#0e1424] border border-slate-800 shadow-2xl overflow-hidden">
                
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#090d16] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#007BFF]" />
                      coderank-engine-v2.6
                    </span>
                  </div>

                  {/* Mode switcher */}
                  <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-[11px] font-heading font-semibold">
                    <button
                      onClick={() => setActiveTab('backend')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeTab === 'backend'
                          ? 'bg-[#007BFF] text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      FastAPI
                    </button>
                    <button
                      onClick={() => setActiveTab('seo')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeTab === 'seo'
                          ? 'bg-[#00C853] text-black font-bold shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      SEO Radar
                    </button>
                  </div>
                </div>

                {/* Interactive Body */}
                {activeTab === 'backend' ? (
                  <div className="p-5 font-mono text-xs text-slate-300 space-y-4">
                    {/* Endpoint Status */}
                    <div className="flex items-center justify-between bg-slate-900/80 p-3 rounded-lg border border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-[#00C853] font-bold text-[10px] border border-emerald-500/20">
                          GET
                        </span>
                        <span className="text-white font-semibold">/api/v1/scale-engine</span>
                      </div>
                      <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 200 OK
                      </span>
                    </div>

                    {/* Code block */}
                    <div className="bg-[#070a12] p-3.5 rounded-lg border border-slate-800/60 text-slate-400 space-y-1 text-[11px]">
                      <p><span className="text-purple-400">from</span> fastapi <span className="text-purple-400">import</span> FastAPI, Depends</p>
                      <p><span className="text-purple-400">from</span> sqlalchemy.ext.asyncio <span className="text-purple-400">import</span> AsyncSession</p>
                      <p><span className="text-blue-400">app</span> = FastAPI(title=<span className="text-amber-300">"CodeRank Core"</span>)</p>
                      <p className="text-slate-500"># Async pooling & Redis L2 Cache: Enabled</p>
                      <p><span className="text-blue-400">@app.get</span>(<span className="text-amber-300">"/metrics/growth"</span>)</p>
                      <p><span className="text-purple-400">async def</span> <span className="text-emerald-300">stream_growth</span>():</p>
                      <p className="pl-4 text-emerald-400">return {"{"}status: "exponential", p99: "14ms"{"}"}</p>
                    </div>

                    {/* Interactive ping button */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-[11px]">Test Live FastAPI Cluster:</span>
                        <button
                          onClick={handleTestPing}
                          disabled={testPinging}
                          className="px-3 py-1 rounded bg-[#007BFF] hover:bg-[#0069d9] text-white text-[11px] font-sans font-semibold flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-50"
                        >
                          {testPinging ? (
                            <>
                              <span className="w-2.5 h-2.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                              <span>Pinging...</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3 h-3 fill-current" />
                              <span>Execute Ping</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Ping Stats Box */}
                      <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-wider">P99 Latency</div>
                          <div className="text-white font-bold text-sm text-[#007BFF]">
                            {pingResult ? `${pingResult.latency} ms` : '15 ms'}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-wider">Concurrency</div>
                          <div className="text-white font-bold text-sm">50,000 req/s</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-wider">Health Status</div>
                          <div className="text-[#00C853] font-bold text-sm flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse"></span>
                            Healthy
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 font-mono text-xs text-slate-300 space-y-4">
                    {/* SEO Radar Metrics */}
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#00C853]" />
                        <span className="text-white font-semibold">Google Search Console Radar</span>
                      </div>
                      <span className="text-xs text-[#00C853] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                        Top 3 Dominance
                      </span>
                    </div>

                    {/* Live Rank Indicators */}
                    <div className="space-y-2 font-sans text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded bg-[#070a12] border border-slate-800">
                        <span className="text-slate-300">"enterprise fastapi microservices"</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-emerald-400 font-bold">#1 Google</span>
                          <span className="text-[10px] text-emerald-400 font-semibold">(+18 positions)</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded bg-[#070a12] border border-slate-800">
                        <span className="text-slate-300">"scalable backend architecture python"</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-emerald-400 font-bold">#2 Google</span>
                          <span className="text-[10px] text-emerald-400 font-semibold">(+34 positions)</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded bg-[#070a12] border border-slate-800">
                        <span className="text-slate-300">"programmatic seo postgresql"</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-emerald-400 font-bold">#1 Google</span>
                          <span className="text-[10px] text-emerald-400 font-semibold">(Featured Snippet)</span>
                        </div>
                      </div>
                    </div>

                    {/* Core Web Vitals Gauge */}
                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-[10px] text-slate-500 uppercase">LCP</div>
                        <div className="text-[#00C853] font-bold text-sm">0.7s (Fast)</div>
                      </div>
                      <div className="text-center border-x border-slate-800 px-4">
                        <div className="text-[10px] text-slate-500 uppercase">CLS</div>
                        <div className="text-[#00C853] font-bold text-sm">0.00 (Zero)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] text-slate-500 uppercase">PageSpeed Score</div>
                        <div className="text-white font-bold text-sm flex items-center gap-1 justify-center">
                          <span className="text-[#00C853]">100/100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Bar: Tech Stack Chips */}
                <div className="bg-[#090d16] px-4 py-2.5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="hover:text-white transition-colors">FastAPI</span>
                    <span>•</span>
                    <span className="hover:text-white transition-colors">Python</span>
                    <span>•</span>
                    <span className="hover:text-white transition-colors">SQLAlchemy</span>
                    <span>•</span>
                    <span className="hover:text-white transition-colors">Technical SEO</span>
                  </div>
                  <span className="text-[#00C853] font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Live Engine
                  </span>
                </div>

              </div>

              {/* Floating Decorative Badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#0e1424]/90 backdrop-blur-md border border-slate-700 p-3 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#007BFF]/20 border border-[#007BFF]/40 flex items-center justify-center text-[#007BFF]">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-heading font-bold text-white">Zero Bottlenecks</div>
                  <div className="text-[11px] text-slate-400">Async ORM + Edge Caching</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
