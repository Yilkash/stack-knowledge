'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Toast {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
}

/**
 * Global toast notification system for non-intrusive user feedback.
 * Supports different message types (success, error, info).
 */
export default function ToastContainer() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    // Function to add a toast, exposed via window for simplicity in this demo
    useEffect(() => {
        (window as any).toast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
            const id = Date.now().toString();
            setToasts(prev => [...prev, { id, message, type }]);
            setTimeout(() => {
                setToasts(prev => prev.filter(t => t.id !== id));
            }, 5000);
        };
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 pointer-events-none">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className={cn(
                            "pointer-events-auto flex items-center gap-4 px-6 py-4 rounded-2xl border shadow-2xl min-w-[300px]",
                            toast.type === 'success' && "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
                            toast.type === 'error' && "bg-rose-500/10 border-rose-500/20 text-rose-500",
                            toast.type === 'info' && "bg-primary/10 border-primary/20 text-primary"
                        )}
                    >
                        {toast.type === 'success' && <CheckCircle size={20} />}
                        {toast.type === 'error' && <AlertCircle size={20} />}
                        {toast.type === 'info' && <Info size={20} />}

                        <p className="flex-1 font-black text-xs uppercase tracking-tight">{toast.message}</p>

                        <button
                            onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                            className="text-foreground/40 hover:text-foreground transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
