import React from 'react';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { PageShell } from './PageShell';

export const AboutPage: React.FC<{ onOpenConsultation: (service: string) => void }> = ({ onOpenConsultation }) => (
  <PageShell
    eyebrow="About CodeRank Studio"
    title="Technical clarity for"
    accent="ambitious teams."
    intro="We are a remote-first studio founded by engineers who care about the details behind sustainable digital growth."
    icon={Users}
    onOpenConsultation={onOpenConsultation}
    cards={[
      { title: 'Engineering first', description: 'We build with maintainability in mind, so your team can extend the work long after launch.', icon: ShieldCheck, points: ['Documented decisions', 'Secure defaults', 'Clean, observable systems'] },
      { title: 'Growth connected', description: 'Performance, crawlability, and conversion are treated as one connected product problem.', icon: TrendingUp, points: ['Business-aligned metrics', 'Technical SEO foundations', 'Continuous improvement'] },
      { title: 'Direct collaboration', description: 'You work with the people doing the work, with clear communication at every milestone.', icon: Users, points: ['Weekly progress updates', 'Shared priorities', 'Practical handover'] },
    ]}
  />
);
