import { ThumbsUp, ThumbsDown } from 'lucide-react';

export default function ChatFeedback() {
  return (
    <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1 hover:text-primary transition-colors"><ThumbsUp size={12} /></button>
        <button className="p-1 hover:text-red-500 transition-colors"><ThumbsDown size={12} /></button>
    </div>
  );
}
