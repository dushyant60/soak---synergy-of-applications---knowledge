import React from 'react';
import { Reveal } from './Reveal';

export const About = () => {
  return (
    <section id="philosophy" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal variant="fade-right">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Synergy of <br/>
                <span className="text-teal-600 dark:text-teal-400">Applications</span> & <span className="text-blue-600 dark:text-blue-400">Knowledge</span>
                </h2>
            </Reveal>
            
            <Reveal delay={200} variant="fade-up">
                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                <p>
                    In a world obsessed with "shipping features," the human element often gets lost. 
                    We founded SOAK on a simple premise: <strong className="font-semibold text-slate-900 dark:text-white">Technology is only as good as the understanding of the people using it.</strong>
                </p>
                <p>
                    We bridge the gap between complex engineering and clear, practical application. 
                    Whether we are building a custom enterprise platform or guiding you through AI adoption, 
                    our goal is to leave you more capable than we found you.
                </p>
                </div>
            </Reveal>
            
            <Reveal delay={400} variant="zoom">
                <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="p-6 glass-card rounded-2xl hover:-translate-y-2 transition-transform duration-500">
                    <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">Build</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Robust, scalable applications tailored to your workflow.</p>
                </div>
                <div className="p-6 glass-card rounded-2xl hover:-translate-y-2 transition-transform duration-500">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Teach</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Workshops, documentation, and mentorship to empower your team.</p>
                </div>
                </div>
            </Reveal>
          </div>
          
          <div className="relative perspective-1000">
            <Reveal delay={300} variant="rotate">
                <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden relative shadow-2xl transition-all duration-700 ease-out hover:rotate-1 hover:scale-105 group border border-white/10">
                    <img 
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                        alt="Futuristic Tech Collaboration" 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-110 group-hover:scale-100 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent pointer-events-none"></div>
                    
                    {/* Modern Overlay UI Element */}
                    <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-xs text-white font-mono hidden md:block">
                        Status: <span className="text-teal-400">Collaborating</span>
                    </div>
                </div>
            </Reveal>
            
            {/* Floating quote card */}
            <Reveal delay={600} variant="fade-left">
                <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-2xl max-w-sm hidden md:block animate-float shadow-xl border-t border-white/50">
                    <p className="text-slate-800 dark:text-slate-200 font-medium italic text-lg leading-relaxed">
                        "SOAK didn't just build our platform; they taught us how to think digitally."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-500"></div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">
                            Digital Transformation Partner
                        </div>
                    </div>
                </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};