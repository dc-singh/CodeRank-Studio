import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export interface PageCard {
  title: string;
  description: string;
  icon: React.ElementType;
  points?: string[];
}

interface PageShellProps {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  icon: React.ElementType;
  cards: PageCard[];
  onOpenConsultation: (service: string) => void;
}

export const PageShell: React.FC<PageShellProps> = ({
  eyebrow,
  title,
  accent,
  intro,
  icon: PageIcon,
  cards,
  onOpenConsultation,
}) => (
  <main className="flex-grow pt-28">
    <section className="relative overflow-hidden bg-bracket-pattern py-20 sm:py-28">
      <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-[#007BFF]/10 blur-[130px]" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#00C853]/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#007BFF]/30 bg-[#007BFF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#38bdf8]">
            <PageIcon className="h-3.5 w-3.5" />
            {eyebrow}
          </div>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            {title} <span className="text-gradient-brand">{accent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{intro}</p>
          <button
            onClick={() => onOpenConsultation(eyebrow)}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#00C853] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#007BFF]/20 transition-transform hover:-translate-y-0.5"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
    <section className="border-t border-slate-800/80 bg-[#090d16] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.title} className="rounded-2xl border border-slate-800 bg-[#0e1424] p-6 transition-colors hover:border-[#007BFF]/60">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#007BFF]/30 bg-[#007BFF]/10 text-[#38bdf8]">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{card.description}</p>
              {card.points && (
                <ul className="mt-5 space-y-2 border-t border-slate-800 pt-4">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#00C853]" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>
  </main>
);
