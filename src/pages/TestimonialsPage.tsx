import React from 'react';
import { CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { PageShell } from './PageShell';

export const TestimonialsPage: React.FC<{ onOpenConsultation: (service: string) => void }> = ({ onOpenConsultation }) => (
  <PageShell
    eyebrow="Client perspective"
    title="Partnerships that"
    accent="move businesses forward."
    intro="The best work feels collaborative: clear communication, thoughtful execution, and progress you can explain to your team."
    icon={Users}
    onOpenConsultation={onOpenConsultation}
    cards={[
      { title: 'Clear communication', description: 'Know what is happening, why it matters, and what comes next without chasing updates.', icon: Users },
      { title: 'Practical recommendations', description: 'Receive advice grounded in your stack, resources, and business priorities.', icon: CheckCircle2 },
      { title: 'Built to compound', description: 'Create technical and content foundations that keep working after the initial engagement.', icon: TrendingUp },
    ]}
  />
);
