import { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { X, UploadCloud } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useContract } from '@/hooks/use-contract';
import { useToast } from '@/hooks/use-toast';

interface UploadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function UploadModal({ isOpen, onClose }: UploadModalProps) {
    const [dragActive, setDragActive] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, _setCategory] = useState('General'); // Default category
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    const { registerResource, setResourceTags, loading } = useContract();
    const { toast } = useToast();

    const handleUpload = async () => {
        if (!title || !description) {
            toast({ title: "Missing details", description: "Please provide both title and description.", variant: "destructive" });
            return;
        }

        try {
            // In a real app, we'd upload to IPFS first to get the URL
            const mockUrl = "ipfs://placeholder";
            const resourceId = await registerResource(title, description, mockUrl, category);

            if (resourceId && tags.length > 0) {
                // If there are tags, call the separate contract method
                // Note: In Clarity, this might need to happen after the first tx is mined
                // For now, we attempt to initiate it
                await setResourceTags(Number(resourceId), tags);
            }

            toast({ title: "Success!", description: "Your resource has been registered on-chain." });
            onClose();
        } catch (err) {
            toast({ title: "Upload failed", description: err instanceof Error ? err.message : "An error occurred", variant: "destructive" });
        }
    };

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
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="e.g. Intro to Computer Science 101"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                            rows={3}
                            placeholder="Brief summary..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Tags (Press Enter to add)</label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-md">
                                    {tag}
                                    <button onClick={() => setTags(tags.filter((_, i) => i !== index))} className="hover:text-blue-500 transition-colors">
                                        <X size={12} />
                                    </button>
                                </span>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && tagInput.trim()) {
                                    if (tags.length < 10 && !tags.includes(tagInput.trim())) {
                                        setTags([...tags, tagInput.trim()]);
                                        setTagInput('');
                                    }
                                }
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="Add tag..."
                        />
                    </div>
                </div>

                <div className="mt-8 flex justify-end gap-3">
                    <Button variant="ghost" onClick={onClose} className="dark:text-zinc-300 dark:hover:bg-zinc-800" disabled={loading}>Cancel</Button>
                    <Button onClick={handleUpload} isLoading={loading}>Upload & Earn</Button>
                </div>
            </Card>
        </div>
    );
}
