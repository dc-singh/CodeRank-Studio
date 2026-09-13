import React, { useState } from 'react';
import { Calculator, ArrowRight, Gauge, TrendingUp, Check, Cpu } from 'lucide-react';

interface AuditEstimatorProps {
  onBookConsultation: (details?: string) => void;
}

export const AuditEstimator: React.FC<AuditEstimatorProps> = ({ onBookConsultation }) => {
  const [currentTraffic, setCurrentTraffic] = useState<number>(25000);
  const [currentLatency, setCurrentLatency] = useState<number>(850);
  const [selectedBackendGoal, setSelectedBackendGoal] = useState<'fastapi-refactor' | 'microservices' | 'db-tuning'>('fastapi-refactor');
  const [selectedSeoGoal, setSelectedSeoGoal] = useState<'tech-audit' | 'programmatic' | 'core-vitals'>('programmatic');

  // Calculations
  const estimatedLatency = Math.max(14, Math.round(currentLatency * 0.08)); // drops to ~8%
  const latencyReduction = Math.round(((currentLatency - estimatedLatency) / currentLatency) * 100);
  
  const trafficMultiplier = selectedSeoGoal === 'programmatic' ? 3.8 : selectedSeoGoal === 'tech-audit' ? 2.4 : 2.1;
  const projectedTraffic = Math.round(currentTraffic * trafficMultiplier);
  const trafficGain = projectedTraffic - currentTraffic;

  const handleRequestEstimate = () => {
    const details = `Estimated Latency: ${currentLatency}ms -> ${estimatedLatency}ms (${latencyReduction}% faster). Projected Organic Traffic: ${currentTraffic.toLocaleString()} -> ${projectedTraffic.toLocaleString()} (+${trafficGain.toLocaleString()}/mo). Goals: ${selectedBackendGoal} & ${selectedSeoGoal}.`;
    onBookConsultation(details);
  };

  return (
    <section id="audit-estimator" className="py-24 bg-[#0b0f19] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#007BFF] uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#007BFF]" />
            Interactive ROI Estimator
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Simulate Your <span className="text-gradient-brand">Scale Potential</span>
          </h2>
          <p className="text-base text-slate-300">
            Slide your current operational baselines to view estimated latency gains and search ranking traffic projections with CodeRank Studio.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0e1424] border border-slate-800 p-6 sm:p-10 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
            {/* Input 1: Latency Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-heading font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-[#007BFF]" />
                  Current API Response Time
                </label>
                <span className="font-mono text-sm font-bold text-white px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  {currentLatency} ms
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="2500"
                step="50"
                value={currentLatency}
                onChange={(e) => setCurrentLatency(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#007BFF]"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>100 ms (Fast)</span>
                <span>1,200 ms (Typical)</span>
                <span>2,500 ms (Critical)</span>
              </div>
            </div>

            {/* Input 2: Current Traffic Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-heading font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#00C853]" />
                  Current Monthly Organic Visits
                </label>
                <span className="font-mono text-sm font-bold text-white px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  {currentTraffic.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="300000"
                step="5000"
                value={currentTraffic}
                onChange={(e) => setCurrentTraffic(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00C853]"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>5k</span>
                <span>150k</span>
                <span>300k+</span>
              </div>
            </div>

          </div>

          {/* Goal Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pt-6 border-t border-slate-800">
            {/* Backend Goal */}
            <div>
              <div className="text-xs font-heading font-semibold text-slate-300 mb-2.5 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#007BFF]" />
                Primary Backend Objective
              </div>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'fastapi-refactor', label: 'FastAPI High-Speed API Refactor' },
                  { id: 'microservices', label: 'Microservices & Redis Cluster' },
                  { id: 'db-tuning', label: 'PostgreSQL & Query Optimization' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedBackendGoal(item.id as any)}
                    className={`p-2.5 rounded-xl text-xs font-medium text-left flex items-center justify-between border transition-all ${
                      selectedBackendGoal === item.id
                        ? 'bg-[#007BFF]/15 border-[#007BFF] text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {selectedBackendGoal === item.id && <Check className="w-3.5 h-3.5 text-[#007BFF]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* SEO Goal */}
            <div>
              <div className="text-xs font-heading font-semibold text-slate-300 mb-2.5 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#00C853]" />
                Primary SEO Objective
              </div>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'programmatic', label: 'Programmatic SEO Engine (+380% traffic)' },
                  { id: 'tech-audit', label: 'Full Technical SEO & Schema Overhaul' },
                  { id: 'core-vitals', label: 'Core Web Vitals & Sub-second LCP' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedSeoGoal(item.id as any)}
                    className={`p-2.5 rounded-xl text-xs font-medium text-left flex items-center justify-between border transition-all ${
                      selectedSeoGoal === item.id
                        ? 'bg-[#00C853]/15 border-[#00C853] text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {selectedSeoGoal === item.id && <Check className="w-3.5 h-3.5 text-[#00C853]" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Output Card */}
          <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Projected Latency</div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#007BFF]">
                  ~{estimatedLatency} ms
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">
                  {latencyReduction}% faster response
                </span>
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Estimated Monthly Traffic</div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#00C853]">
                  {projectedTraffic.toLocaleString()}
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">
                  +{trafficGain.toLocaleString()} new visitors/mo
                </span>
              </div>
            </div>

            <button
              onClick={handleRequestEstimate}
              className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00C853] text-white font-heading font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              <span>Lock In This Roadmap</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
