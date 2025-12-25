import React, { useState } from 'react';
import { Reveal } from './Reveal';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll be in touch shortly.");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-24 pb-12 relative overflow-hidden">
       {/* Footer specific subtle blobs */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] bg-teal-800 rounded-full filter blur-[80px]"></div>
          <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-blue-800 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <Reveal>
                <h2 className="text-4xl font-bold text-white mb-6">Let's build something sensible.</h2>
                <p className="text-lg text-slate-400 mb-8 max-w-md">
                Ready to modernize your business or build a new product? 
                Reach out for a no-jargon consultation.
                </p>
            </Reveal>
            
            <Reveal delay={200}>
                <div className="space-y-4">
                <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:hello@soak.tech" className="hover:text-teal-400 transition-colors">hello@soak.tech</a>
                </div>
                <div>
                    <h4 className="text-white font-medium mb-1">Office</h4>
                    <p>123 Innovation Dr, Suite 400<br/>Tech City, TC 90210</p>
                </div>
                </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <form onSubmit={handleSubmit} className="glass border border-white/10 p-8 rounded-3xl bg-slate-800/40 backdrop-blur-xl">
                <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors placeholder-slate-600"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    placeholder="Jane Doe"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors placeholder-slate-600"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    placeholder="jane@company.com"
                />
                </div>
                <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">How can we help?</label>
                <textarea 
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors placeholder-slate-600"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    placeholder="Tell us about your project..."
                ></textarea>
                </div>
                <button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-teal-900/20"
                >
                Send Message
                </button>
            </form>
          </Reveal>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SOAK Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};