import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type = 'info', onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const variants = {
    success: 'bg-green-600 dark:bg-green-900/90 text-white',
    error: 'bg-red-600 dark:bg-red-900/90 text-white',
    info: 'bg-blue-600 dark:bg-blue-900/90 text-white'
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />
  };

  return (
    <div className={cn(
      "fixed bottom-4 right-4 px-6 py-4 rounded-xl shadow-lg z-50 animate-in slide-in-from-bottom-5 duration-300",
      variants[type]
    )}>
      <div className="flex items-center gap-3">
        {icons[type]}
        <span className="font-medium">{message}</span>
        <button onClick={onClose} className="text-white/80 hover:text-white transition-colors ml-2">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
