import React from 'react';
import { Reveal } from './Reveal';

const STEPS = [
  { title: "Understand", desc: "We listen. No code is written until we understand your business goals." },
  { title: "Guide", desc: "We propose a strategy that balances tech needs with human capability." },
  { title: "Build", desc: "We develop high-quality, scalable solutions using modern stacks." },
  { title: "Enable", desc: "We train your team on how to use, manage, and extend the solution." },
  { title: "Support", desc: "We stay available as partners, not just vendors." }
];

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative">
      <div className="container mx-auto px-6">
        <Reveal>
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">How We Work</h2>
            <p className="text-slate-600 dark:text-slate-400">A transparent, collaborative journey from problem to solution.</p>
            </div>
        </Reveal>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[24px] left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {STEPS.map((step, idx) => (
                    <Reveal key={idx} delay={idx * 150}>
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 flex items-center justify-center font-bold mb-6 group-hover:border-teal-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all duration-300 relative z-10 group-hover:scale-110 shadow-sm">
                                {idx + 1}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[200px]">{step.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};