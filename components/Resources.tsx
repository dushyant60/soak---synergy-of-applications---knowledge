import React from 'react';
import { ResourceItem } from '../types';
import { Reveal } from './Reveal';

const RESOURCES: ResourceItem[] = [
  {
    category: "Guide",
    title: "The Non-Technical Founder's Guide to MVP",
    readTime: "5 min read",
    summary: "How to build enough to validate your idea without wasting budget on unnecessary features."
  },
  {
    category: "AI",
    title: "Practical AI: Automating your Inbox",
    readTime: "3 min read",
    summary: "A step-by-step tutorial on setting up simple AI filters for customer support emails."
  },
  {
    category: "Strategy",
    title: "Why Documentation is Your Most Valuable Asset",
    readTime: "6 min read",
    summary: "Code rots, but knowledge endures. Why we prioritize documentation in every project."
  }
];

export const Resources = () => {
  return (
    <section id="resources" className="py-24 relative">
      <div className="container mx-auto px-6">
        <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Resources</h2>
                <p className="text-slate-600 dark:text-slate-400">Knowledge sharing is part of our DNA.</p>
            </div>
            <a href="#" className="hidden md:block text-teal-600 dark:text-teal-400 font-medium hover:text-teal-800 dark:hover:text-teal-300 transition-colors">View all articles →</a>
            </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {RESOURCES.map((item, idx) => (
            <Reveal key={idx} delay={idx * 100}>
                <article className="glass-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full group">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-teal-600 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/50 px-2 py-1 rounded uppercase tracking-wider">{item.category}</span>
                    <span className="text-xs text-slate-400">{item.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors cursor-pointer">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{item.summary}</p>
                <a href="#" className="text-sm font-medium text-slate-900 dark:text-white hover:underline mt-auto">Read Article</a>
                </article>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-teal-600 dark:text-teal-400 font-medium hover:text-teal-800">View all articles →</a>
        </div>
      </div>
    </section>
  );
};