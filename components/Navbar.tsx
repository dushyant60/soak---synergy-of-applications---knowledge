import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from './Icons';
import { NavItem } from '../types';
import { useTheme } from '../hooks/useTheme';

const NAV_ITEMS: NavItem[] = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#process' },
  { label: 'AI & Learning', href: '#ai-learning' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-slate-900 font-bold text-xl transition-transform group-hover:scale-105 shadow-lg">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white leading-none">SOAK</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 hidden sm:block">Synergy of Applications & Knowledge</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>

          <a
             href="#contact"
             className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme} 
                className="p-2 text-slate-600 dark:text-slate-300"
                aria-label="Toggle Theme"
            >
                {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            <button
            className="text-slate-800 dark:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            >
            {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 glass border-t border-slate-200 dark:border-slate-800 p-6 md:hidden shadow-xl animate-fade-in-down">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-slate-800 dark:text-slate-200 py-2 border-b border-slate-100 dark:border-slate-800"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <a
                href="#contact"
                className="mt-4 px-5 py-3 bg-teal-600 text-white text-center font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-lg"
                onClick={() => setIsOpen(false)}
             >
              Work With Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};