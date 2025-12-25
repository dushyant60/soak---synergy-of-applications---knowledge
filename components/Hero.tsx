import React, { useEffect, useState } from 'react';
import { ChevronRight } from './Icons';
import { Reveal } from './Reveal';
import { Hero3D } from './ThreeScene';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* 3D Background */}
      <Hero3D />

      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center md:text-left pointer-events-auto">
          <Reveal variant="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-teal-100/30 text-teal-800 dark:text-teal-300 text-xs font-semibold mb-8 backdrop-blur-md shadow-lg shadow-teal-500/10">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                Tech Agency & Digital Guide
            </div>
          </Reveal>
          
          <Reveal delay={200} variant="zoom">
            <h1 className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white tracking-tight mb-8 leading-[1.1] drop-shadow-sm">
                We build technology. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">Then we help you understand it.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={400} variant="fade-up">
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-12 leading-relaxed mx-auto md:mx-0 font-light">
                SOAK connects real-world application development with education. 
                We don't just deliver code; we ensure you have the knowledge to own, 
                scale, and evolve your digital future.
            </p>
          </Reveal>

          <Reveal delay={600} variant="fade-up">
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 active:scale-95"
                >
                Explore Services
                <ChevronRight className="ml-2 w-4 h-4" />
                </a>
                <a 
                href="#ai-learning" 
                className="inline-flex items-center justify-center px-8 py-4 glass text-slate-700 dark:text-white rounded-2xl font-semibold hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all hover:scale-105 active:scale-95"
                >
                Learn About AI
                </a>
            </div>
          </Reveal>
        </div>
      </div>
      
      {/* Glass overlay at the bottom to fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-[#0B1120] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};