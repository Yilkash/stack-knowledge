import { useState } from 'react';
import Button from './Button';

export default function ReplyInput({ onReply }: { onReply: (text: string) => void }) {
  const [text, setText] = useState('');
  return (
    <div className="mt-4 flex gap-4">
        <input 
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Write a reply..."
            className="flex-1 bg-zinc-100 dark:bg-zinc-900 border-none rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-primary"
        />
        <Button size="sm" onClick={() => onReply(text)}>REPLY</Button>
    </div>
  );
}
