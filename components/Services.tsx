import React from 'react';
import { CodeIcon, LayersIcon, BrainIcon, BookOpenIcon } from './Icons';
import { ServiceItem } from '../types';
import { Reveal } from './Reveal';

const SERVICES: ServiceItem[] = [
  {
    title: "Digital Enablement",
    description: "We analyze your current workflows and identify where technology can remove friction, not add to it.",
    icon: <LayersIcon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
  },
  {
    title: "App & Platform Development",
    description: "Full-stack development for web and mobile. We build clean, maintainable codebases designed for longevity.",
    icon: <CodeIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
  },
  {
    title: "Practical AI Adoption",
    description: "Moving beyond the hype. We help you implement AI tools that solve actual business problems, with ethical guidelines.",
    icon: <BrainIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
  },
  {
    title: "Tech Learning & Support",
    description: "Custom workshops, employee training, and long-term support to ensure your team is confident with new tools.",
    icon: <BookOpenIcon className="w-8 h-8 text-amber-600 dark:text-amber-400" />
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-slate-100/30 dark:bg-slate-900/30 skew-y-3 transform origin-bottom-right -z-10 backdrop-blur-3xl"></div>
      <div className="container mx-auto px-6">
        <Reveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">What We Do</h2>
            <p className="text-slate-600 dark:text-slate-300 text-xl font-light">
                We operate at the intersection of building and teaching. 
                Our deliverables include both working software and working knowledge.
            </p>
            </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <Reveal key={idx} delay={idx * 150} variant="zoom">
                <div 
                className="glass-card p-8 rounded-3xl h-full flex flex-col transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl hover:bg-white/60 dark:hover:bg-slate-800/80 group relative overflow-hidden"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-8 p-4 bg-white/50 dark:bg-slate-800/50 rounded-2xl inline-block w-fit group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors shadow-sm relative z-10">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm flex-grow relative z-10">
                    {service.description}
                </p>
                <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-700/50 relative z-10">
                    <a href="#contact" className="text-sm font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 flex items-center group/link">
                    Learn more 
                    <span className="inline-block ml-1 transition-transform group-hover/link:translate-x-1 duration-300">→</span>
                    </a>
                </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};