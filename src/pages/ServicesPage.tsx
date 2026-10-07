import React from 'react';
import { Code2, Search, Sparkles } from 'lucide-react';
import { PageShell } from './PageShell';

export const ServicesPage: React.FC<{ onOpenConsultation: (service: string) => void }> = ({ onOpenConsultation }) => (
  <PageShell
    eyebrow="What we do"
    title="Services built for"
    accent="measurable growth."
    intro="From resilient APIs to search strategies that compound, we connect the technical foundation of your business to the outcomes your customers can see."
    icon={Code2}
    onOpenConsultation={onOpenConsultation}
    cards={[
      { title: 'Backend Development', description: 'FastAPI and Python systems designed for speed, security, and predictable scale.', icon: Code2, points: ['Async REST and GraphQL APIs', 'PostgreSQL and SQLAlchemy optimization', 'JWT, OAuth2, RBAC, and secure integrations'] },
      { title: 'SEO Optimization', description: 'Technical and content systems that help the right customers discover your product.', icon: Search, points: ['Technical audits and Core Web Vitals', 'Programmatic SEO architecture', 'Schema, content briefs, and reporting'] },
      { title: 'Branding Support', description: 'Clear technical messaging and conversion-focused experiences for complex products.', icon: Sparkles, points: ['Developer-focused content and scripts', 'Landing page UX and information architecture', 'API documentation and positioning'] },
    ]}
  />
);
