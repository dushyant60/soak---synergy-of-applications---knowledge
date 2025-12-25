import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { AISection } from './components/AISection';
import { Process } from './components/Process';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';
import { SoakAssistant } from './components/SoakAssistant';
import { MouseFollower } from './components/MouseFollower';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 selection:bg-teal-100 dark:selection:bg-teal-900/30">
      <MouseFollower />
      <Navbar />
      
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Services />
        <Process />
        <AISection />
        <Resources />
      </main>

      <Contact />
      <SoakAssistant />
    </div>
  );
}

export default App;