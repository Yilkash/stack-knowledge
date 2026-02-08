'use client';

import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function ChatPage() {
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
        { role: 'assistant', content: 'Hello! I am your AI study buddy. Ask me anything about "Introduction to Linear Algebra".' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user' as const, content: input };
        setMessages((prev: { role: 'user' | 'assistant'; content: string }[]) => [...prev, userMessage]);
        setInput('');

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                    documentId: '123' // Mock ID
                })
            });

            const data = await response.json();
            setMessages((prev: { role: 'user' | 'assistant'; content: string }[]) => [...prev, { role: 'assistant', content: data.content }]);
        } catch (error) {
            console.error(error);
            setMessages((prev: { role: 'user' | 'assistant'; content: string }[]) => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
        }
    };

    return (
        <main className="min-h-screen bg-zinc-50 flex flex-col">
            <NavBar />

            <div className="flex-grow pt-20 pb-4 max-w-5xl mx-auto w-full px-4 flex gap-6 h-[calc(100vh-20px)]">
                {/* PDF Viewer / Context Panel */}
                <div className="hidden lg:block w-1/2 bg-zinc-200 rounded-2xl animate-pulse">
                    <div className="h-full flex items-center justify-center text-zinc-400">
                        PDF Viewer Placeholder
                    </div>
                </div>

                {/* Chat Panel */}
                <Card className="flex-1 flex flex-col bg-white h-full max-h-[85vh]">
                    <div className="p-4 border-b border-zinc-100">
                        <h2 className="font-bold text-zinc-800">Chat Session</h2>
                        <p className="text-xs text-zinc-500">Context: Introduction to Linear Algebra.pdf</p>
                    </div>

                    <div className="flex-grow overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl p-3 px-4 text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-zinc-100 text-zinc-800 rounded-bl-none'}`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 border-t border-zinc-100">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                className="flex-grow px-4 py-2 border border-zinc-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Ask a question..."
                            />
                            <Button onClick={handleSend} size="sm">Send</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    );
}
