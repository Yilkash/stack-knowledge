import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { X, UploadCloud } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UploadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function UploadModal({ isOpen, onClose }: UploadModalProps) {
    const [dragActive, setDragActive] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <Card className="w-full max-w-lg p-6 bg-white dark:bg-zinc-900 border-border shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Upload Resource</h2>
                    <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div
                    className={cn(
                        "border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer",
                        dragActive
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400"
                            : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    )}
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
                >
                    <div className="flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400">
                        <UploadCloud className="w-10 h-10 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                        <p className="font-medium text-zinc-700 dark:text-zinc-300">Drag & drop your PDF here</p>
                        <p className="text-sm text-zinc-400">or click to browse</p>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Title</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="e.g. Intro to Computer Science 101"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Description</label>
                        <textarea
                            className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                            rows={3}
                            placeholder="Brief summary..."
                        />
                    </div>
                </div>

                <div className="mt-8 flex justify-end gap-3">
                    <Button variant="ghost" onClick={onClose} className="dark:text-zinc-300 dark:hover:bg-zinc-800">Cancel</Button>
                    <Button>Upload & Earn</Button>
                </div>
            </Card>
        </div>
    );
}
