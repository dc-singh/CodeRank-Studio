import React from 'react';
import { Gauge, Search, Target } from 'lucide-react';
import { PageShell } from './PageShell';

export const GrowthAuditPage: React.FC<{ onOpenConsultation: (service: string) => void }> = ({ onOpenConsultation }) => (
  <PageShell
    eyebrow="Growth audit"
    title="Find the next"
    accent="high-impact move."
    intro="Get a practical view of the bottlenecks affecting speed, discoverability, and conversion before you invest in a larger roadmap."
    icon={Gauge}
    onOpenConsultation={onOpenConsultation}
    cards={[
      { title: 'Performance baseline', description: 'Review page speed, API latency, hosting signals, and the friction users experience.', icon: Gauge },
      { title: 'Search visibility', description: 'Identify crawl, indexation, content, and internal-linking opportunities that can compound.', icon: Search },
      { title: 'Conversion path', description: 'Connect acquisition pages to a clear next step so attention can become qualified demand.', icon: Target },
    ]}
  />
);
