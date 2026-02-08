import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';

interface UploadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function UploadModal({ isOpen, onClose }: UploadModalProps) {
    const [dragActive, setDragActive] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
            <Card className="w-full max-w-lg p-6 bg-white">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-zinc-900">Upload Resource</h2>
                    <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600">
                        {/* Close icon */}
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-zinc-200'}`}
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={(e) => { e.preventDefault(); setDragActive(false); /* Handle drop */ }}
                >
                    <div className="flex flex-col items-center gap-2 text-zinc-600">
                        <svg className="w-10 h-10 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="font-medium">Drag & drop your PDF here</p>
                        <p className="text-sm text-zinc-400">or click to browse</p>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Title</label>
                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="e.g. Intro to Computer Science 101" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Description</label>
                        <textarea className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" rows={3} placeholder="Brief summary..." />
                    </div>
                </div>

                <div className="mt-8 flex justify-end gap-3">
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    <Button>Upload & Earn</Button>
                </div>
            </Card>
        </div>
    );
}
