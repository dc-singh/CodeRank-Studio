import React from 'react';
import { BarChart3, Gauge, Sparkles, TrendingUp } from 'lucide-react';
import { PageShell } from './PageShell';

export const CaseStudiesPage: React.FC<{ onOpenConsultation: (service: string) => void }> = ({ onOpenConsultation }) => (
  <PageShell
    eyebrow="Selected outcomes"
    title="Work that turns"
    accent="complexity into momentum."
    intro="Our case-study approach connects technical improvements to business signals, not vanity metrics."
    icon={BarChart3}
    onOpenConsultation={onOpenConsultation}
    cards={[
      { title: 'API performance foundation', description: 'A modular FastAPI architecture for teams that need reliable throughput as usage grows.', icon: Gauge, points: ['Async service boundaries', 'Query and cache strategy', 'Operational visibility'] },
      { title: 'Organic acquisition system', description: 'A technical SEO and content framework that turns a growing library into qualified discovery.', icon: TrendingUp, points: ['Search intent mapping', 'Internal linking systems', 'Search Console feedback loops'] },
      { title: 'Technical brand experience', description: 'A clearer product story and landing experience for engineering-led businesses.', icon: Sparkles, points: ['Positioning hierarchy', 'Conversion pathways', 'Developer-friendly content'] },
    ]}
  />
);
