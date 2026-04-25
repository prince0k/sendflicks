import { useState, type FormEvent } from 'react';
import { subscribeEmail } from '../lib/subscribe';

interface SubscribeModalProps {
  open: boolean;
  onClose: () => void;
  readProgress: number;
}

export function SubscribeModal({ open, onClose, readProgress }: SubscribeModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  if (!open) return null;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('saving');
    setMessage('');
    try {
      const result = await subscribeEmail(email, 'scroll-popup', readProgress);
      if (result?.status === 'already_subscribed') {
        setMessage('You are already on the list.');
      } else {
        setMessage('Thanks! You are subscribed.');
      }
      setStatus('success');
      localStorage.setItem('sendflicks_subscribed', 'true');
      setTimeout(onClose, 800);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Could not subscribe.');
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-zinc-950 border border-zinc-700 p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-zinc-400 hover:text-white text-xl"
          aria-label="Close subscribe modal"
        >
          ×
        </button>

        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-3">You made it 30%</p>
        <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Get weekly recipes</h3>
        <p className="text-zinc-400 mb-6">Join the email list for new recipes and kitchen tips.</p>

        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            required
            placeholder="EMAIL_ADDRESS"
            className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white"
          />
          <button
            type="submit"
            disabled={status === 'saving'}
            className="px-6 py-3 bg-white text-black font-bold uppercase text-xs tracking-widest disabled:opacity-70"
          >
            {status === 'saving' ? 'Saving...' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-400' : 'text-emerald-400'}`}>{message}</p>
        )}
      </div>
    </div>
  );
}
