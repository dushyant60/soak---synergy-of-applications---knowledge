import React from 'react';
import { SparklesIcon } from './Icons';
import { Reveal } from './Reveal';
import { AiNetwork3D } from './ThreeScene';

export const AISection = () => {
  return (
    <section id="ai-learning" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* 3D Background */}
      <AiNetwork3D />
      
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Reveal>
                <div className="inline-flex items-center gap-2 text-teal-400 font-medium mb-6 px-3 py-1 rounded-full bg-teal-900/30 border border-teal-800 backdrop-blur-sm">
                    <SparklesIcon className="w-5 h-5" />
                    <span>AI De-mystified</span>
                </div>
            </Reveal>
            <Reveal delay={200}>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                We treat AI as a tool,<br />not a magic wand.
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Artificial Intelligence is powerful, but only if it's applied correctly. 
                We help businesses cut through the noise to find practical, high-value use cases.
                </p>
            </Reveal>
            
            <div className="space-y-6">
              {[
                  { id: 1, title: "Automation & Efficiency", text: "Automate repetitive data entry, content classification, and routing tasks.", color: "text-teal-400" },
                  { id: 2, title: "Assistance, Not Replacement", text: "Tools that help your human experts work faster, not replace them.", color: "text-blue-400" },
                  { id: 3, title: "Data Privacy First", text: "We design AI systems that respect your data and privacy boundaries.", color: "text-purple-400" }
              ].map((item, idx) => (
                  <Reveal key={item.id} delay={300 + (idx * 100)}>
                      <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                        <div className={`w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center flex-shrink-0 ${item.color} font-bold text-lg border border-slate-700 shadow-lg shadow-black/20`}>
                            {item.id}
                        </div>
                        <div>
                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.text}</p>
                        </div>
                    </div>
                  </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={500}>
            <div className="relative glass border border-white/10 rounded-3xl p-8 backdrop-blur-xl bg-slate-800/40">
                <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 50L30 30L50 50L70 30L90 50" stroke="white" strokeWidth="2"/>
                        <circle cx="10" cy="50" r="3" fill="white"/>
                        <circle cx="30" cy="30" r="3" fill="white"/>
                        <circle cx="50" cy="50" r="3" fill="white"/>
                        <circle cx="70" cy="30" r="3" fill="white"/>
                        <circle cx="90" cy="50" r="3" fill="white"/>
                    </svg>
                </div>

                <h3 className="text-2xl font-bold mb-6">Interactive AI Concept</h3>
                <div className="space-y-4">
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 shadow-inner">
                    <p className="text-xs text-slate-500 uppercase mb-2 font-bold tracking-wider">Input (The Ask)</p>
                    <p className="text-slate-300">"Summarize these 50 customer feedback emails and identify the top 3 pain points."</p>
                </div>
                
                <div className="flex justify-center relative">
                    <div className="h-8 w-0.5 bg-gradient-to-b from-slate-700 to-teal-900"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-teal-500 rounded-full animate-ping opacity-20"></div>
                </div>
                
                <div className="bg-teal-900/20 p-5 rounded-2xl border border-teal-500/30 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-teal-500/20 transition-colors duration-500"></div>
                    <div className="flex justify-between items-start mb-2 relative z-10">
                        <p className="text-xs text-teal-400 uppercase font-bold tracking-wider">AI Output (The Assist)</p>
                        <span className="text-[10px] bg-teal-900/80 text-teal-300 px-2 py-0.5 rounded border border-teal-800">Analysis Complete</span>
                    </div>
                    <div className="space-y-2 text-sm text-slate-200 relative z-10">
                        <p>1. <strong className="text-white">Login Issues:</strong> 45% of emails mention difficulty with 2FA.</p>
                        <p>2. <strong className="text-white">Page Load Speed:</strong> 30% mention slow dashboard loading.</p>
                        <p>3. <strong className="text-white">Mobile Layout:</strong> 15% found buttons too small on phones.</p>
                    </div>
                </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-slate-400 italic">
                    * This is a simple example of how we use LLMs to turn unstructured data into actionable insights for our clients.
                </p>
                </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};