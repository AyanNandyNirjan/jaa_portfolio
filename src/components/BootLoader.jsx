import { useEffect, useState } from 'react';

export default function BootLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    let current = 0;
    const timer = window.setInterval(() => {
      current += Math.max(1, Math.round((100 - current) / 8));
      if (current >= 100) {
        current = 100;
        setProgress(current);
        window.clearInterval(timer);
        window.setTimeout(onComplete, 420);
      } else {
        setProgress(current);
      }
    }, 72);

    return () => {
      window.clearInterval(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505] text-[#f3f0e9]">
      <div className="scanline pointer-events-none absolute inset-0 opacity-50" />
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[#ff2a2a] shadow-[0_0_24px_rgba(255,42,42,0.6)]" />
      <div className="w-[min(92vw,760px)] font-mono text-[10px] uppercase tracking-[0.2em] sm:text-xs">
        <div className="mb-8 flex items-center justify-between text-white/70">
          <span>JAA // PORTFOLIO SYSTEM</span>
          <span>BOOT_SEQ_06</span>
        </div>
        <div className="mb-4 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-[#ff2a2a] font-semibold">INITIALIZING...</p>
            <p className="text-white/80">MARKETING_INTELLIGENCE / SECURE_ARCHIVE</p>
          </div>
          <span className="font-sans text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
            {String(progress).padStart(2, '0')}%
          </span>
        </div>
        <div className="h-[2px] w-full overflow-hidden bg-white/20">
          <div
            className="h-full bg-[#ff2a2a] transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-white/60 sm:grid-cols-4">
          <span>SIGNAL: STABLE</span>
          <span>MODE: WEB</span>
          <span>REGION: BD</span>
          <span className="text-right">ACCESS: GRANTED</span>
        </div>
      </div>
    </div>
  );
}
