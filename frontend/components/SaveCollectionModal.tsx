import Card from './Card';
import Button from './Button';

export default function SaveCollectionModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 bg-background shadow-2xl">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">Save to Collection</h2>
            <div className="space-y-2 mb-6">
                {["Calculus Prep", "CS Basics", "Exam 2026"].map(c => (
                    <button key={c} className="w-full text-left p-4 rounded-xl border-2 border-zinc-100 hover:border-primary transition-all font-bold">
                        {c}
                    </button>
                ))}
            </div>
            <div className="flex gap-4">
                <Button variant="outline" onClick={onClose} className="flex-1">CANCEL</Button>
                <Button className="flex-1">CREATE NEW</Button>
            </div>
        </Card>
    </div>
  );
}
