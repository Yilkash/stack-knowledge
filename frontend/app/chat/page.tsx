"use client";

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import { Send, Bot, User, Sparkles } from 'lucide-react';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am your Study Buddy. Ask me anything about your uploaded resources!' }
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: 'I am analyzing your request based on the peer-reviewed materials available on StackKnowledge...' }]);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <div className="max-w-4xl mx-auto pt-32 pb-20 px-4 h-screen flex flex-col">
          <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary rounded-2xl shadow-lg shadow-primary/20">
                  <Bot size={24} className="text-white" />
              </div>
              <div>
                  <h1 className="text-2xl font-black tracking-tighter uppercase">AI Study <span className="text-primary italic">Buddy</span></h1>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                      <Sparkles size={10} className="text-primary" /> Personalized Learning Context Active
                  </p>
              </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 mb-8 pr-4 scrollbar-hide">
              {messages.map((m, i) => (
                  <div key={i} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${m.role === 'assistant' ? 'bg-zinc-100 dark:bg-zinc-900 border-2 border-primary/20' : 'bg-primary'}`}>
                          {m.role === 'assistant' ? <Bot size={18} /> : <User size={18} className="text-white" />}
                      </div>
                      <div className={`max-w-[80%] p-4 rounded-3xl text-sm font-medium leading-relaxed ${m.role === 'assistant' ? 'bg-zinc-50 dark:bg-zinc-900/50 text-foreground' : 'bg-primary text-white shadow-xl shadow-primary/10'}`}>
                          {m.content}
                      </div>
                  </div>
              ))}
          </div>

          <div className="relative">
              <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Ask about Calculus, CS101, or search for resources..."
                className="w-full bg-zinc-100 dark:bg-zinc-900 border-none rounded-3xl py-6 px-8 text-sm font-bold focus:ring-4 focus:ring-primary/10 transition-all shadow-inner"
              />
              <button 
                onClick={send}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-primary text-white rounded-2xl hover:scale-105 transition-transform"
              >
                  <Send size={18} />
              </button>
          </div>
      </div>
    </main>
  );
}
