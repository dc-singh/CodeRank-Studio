import React from 'react';
import { BarChart3, Layers3, Target, Zap } from 'lucide-react';
import { PageShell } from './PageShell';

export const ProcessPage: React.FC<{ onOpenConsultation: (service: string) => void }> = ({ onOpenConsultation }) => (
  <PageShell
    eyebrow="How we work"
    title="A focused process from"
    accent="idea to impact."
    intro="Every engagement is shaped around a clear baseline, small feedback loops, and outcomes that can be measured."
    icon={Layers3}
    onOpenConsultation={onOpenConsultation}
    cards={[
      { title: '01. Discover', description: 'We map your product, audience, constraints, and highest-value opportunity.', icon: Target },
      { title: '02. Plan', description: 'You receive a practical roadmap with priorities, milestones, and success metrics.', icon: Layers3 },
      { title: '03. Build', description: 'We ship in focused increments with reviews, documentation, and transparent progress.', icon: Zap },
      { title: '04. Measure', description: 'We compare results to the baseline and turn what we learn into the next action.', icon: BarChart3 },
    ]}
  />
);
