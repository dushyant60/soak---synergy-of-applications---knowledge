import React, { useState, useRef, useEffect } from 'react';
import { MessageCircleIcon, XIcon, SendIcon, SparklesIcon } from './Icons';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat } from "@google/genai";

export const SoakAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am the SOAK Assistant. I can help you understand our services, explain tech concepts, or guide you through our process. How can I help?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // Allow storing either a full Chat instance or a lightweight session object returned
  // by createChatSession (e.g. { id: string }) without type errors.
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
        const session = createChatSession();
        if (session) {
            chatSessionRef.current = session;
        } else {
            console.warn("API Key might be missing, chat will not work fully.");
             setMessages(prev => [...prev, { role: 'model', text: 'Note: I am running in demo mode (API key missing). I cannot reply intelligently yet.', isError: true }]);
        }
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      if (chatSessionRef.current) {
        const reply = await sendMessageToGemini(chatSessionRef.current, userMsg);
        setMessages(prev => [...prev, { role: 'model', text: reply }]);
      } else {
        setTimeout(() => {
             setMessages(prev => [...prev, { role: 'model', text: "I'm currently unable to connect to my brain (API Key missing). Please check the configuration." }]);
             setIsLoading(false);
        }, 1000);
        return;
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[550px] glass-card rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up border border-white/40 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl">
          {/* Header */}
          <div className="bg-slate-900/90 dark:bg-black/60 p-4 flex justify-between items-center text-white backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                <SparklesIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">SOAK Guide</h3>
                <p className="text-[10px] text-slate-300">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors bg-white/10 p-1.5 rounded-full hover:bg-white/20">
              <XIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                <div 
                  className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-br from-slate-900 to-slate-800 dark:from-teal-600 dark:to-teal-800 text-white rounded-br-none' 
                      : 'bg-white/80 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-bl-none'
                  } ${msg.isError ? 'border-red-300 bg-red-50 text-red-800' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-bl-none p-4 shadow-sm">
                   <div className="flex gap-1.5">
                     <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                     <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce animation-delay-200"></span>
                     <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce animation-delay-400"></span>
                   </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
            <div className="relative">
              <input
                type="text"
                className="w-full bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-full pl-5 pr-12 py-3.5 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all dark:text-white placeholder-slate-400 shadow-inner"
                placeholder="Ask about our services or AI..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 disabled:opacity-50 disabled:hover:bg-teal-600 transition-colors shadow-md hover:scale-105 active:scale-95"
              >
                <SendIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-16 h-16 rounded-full shadow-2xl shadow-teal-900/30 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${isOpen ? 'bg-slate-800 rotate-90 scale-90' : 'bg-gradient-to-br from-teal-500 to-teal-700 hover:scale-110'}`}
        aria-label="Open AI Assistant"
      >
        {isOpen ? (
            <XIcon className="w-6 h-6 text-white" />
        ) : (
            <MessageCircleIcon className="w-7 h-7 text-white" />
        )}
        
        {/* Tooltip hint when closed */}
        {!isOpen && (
            <span className="absolute right-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-800 dark:text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-white/20">
                Ask our AI Guide
            </span>
        )}
      </button>
    </div>
  );
};