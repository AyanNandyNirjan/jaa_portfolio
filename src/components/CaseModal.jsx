import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function CaseModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[90] grid place-items-center bg-black/75 p-2 backdrop-blur-md dark:bg-black/85 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.company} case file`}
    >
      <button
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Close dialog background"
      />
      <article className="case-modal relative z-10 max-h-[92svh] w-full max-w-5xl overflow-auto border border-black/30 bg-[#f5f1e8] text-[#0c0c0c] shadow-[0_0_90px_rgba(0,0,0,0.5)] dark:border-[#ff2a2a]/60 dark:bg-[#080808] dark:text-[#f3f0e9] dark:shadow-[0_0_90px_rgba(0,0,0,0.85)]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/20 bg-[#f5f1e8]/95 px-3.5 py-2.5 backdrop-blur-xl dark:border-white/15 dark:bg-[#080808]/95 sm:px-6 sm:py-3">
          <div className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-black/85 dark:text-white/70 sm:text-[10px] sm:tracking-[0.18em]">
            <span className="text-[#ff2a2a] font-bold">TOP SECRET // DECRYPTED</span> &nbsp; CASE #{item.id}
          </div>
          <button
            onClick={onClose}
            className="grid size-8 place-items-center border border-black/25 text-black/85 transition-colors duration-200 hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff2a2a] dark:border-white/25 dark:text-white/80 sm:size-9"
            aria-label="Close case"
          >
            <X size={18} strokeWidth={1.8} />
          </button>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="evidence-visual relative min-h-[240px] overflow-hidden border-b border-black/20 p-4 dark:border-white/15 sm:min-h-[300px] sm:p-5 lg:min-h-[620px] lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,42,42,0.12),transparent_38%)] dark:bg-[radial-gradient(circle_at_50%_25%,rgba(255,42,42,0.18),transparent_38%)]" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(0,0,0,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.1)_1px,transparent_1px)] [background-size:32px_32px] dark:opacity-30 dark:[background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex justify-between font-mono text-[8.5px] uppercase tracking-[0.16em] text-black/75 dark:text-white/60 font-medium sm:text-[9px]">
                <span>EVIDENCE_A.JPG</span>
                <span className="text-[#ff2a2a] font-bold">REC ●</span>
              </div>
              <div className="my-4 sm:my-0">
                <div className="mb-3 h-px w-12 bg-[#ff2a2a] sm:mb-4 sm:w-16" />
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#ff2a2a] font-bold sm:text-[10px]">
                  {item.code || `CASE-${item.id}`}
                </p>
                <h2 className="mt-1 font-display text-4xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#0c0c0c] dark:text-[#f3f0e9] sm:mt-2 sm:text-5xl lg:text-7xl">
                  {item.company}
                </h2>
                <p className="mt-2.5 max-w-sm text-xs leading-5 text-black/85 font-semibold dark:text-white/75 sm:mt-4 sm:text-sm sm:leading-6">
                  {item.role}
                </p>
              </div>
              <div className="font-mono text-[8.5px] uppercase leading-4 tracking-[0.15em] text-black/75 dark:text-white/60 font-medium sm:text-[9px] sm:leading-5">
                SIGNAL: VERIFIED<br />
                SOURCE: PROFESSIONAL CV<br />
                STATUS: {item.status}
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-7 lg:p-10">
            <div className="grid gap-px border border-black/20 bg-black/20 dark:border-white/15 dark:bg-white/15 grid-cols-2">
              {[
                ['PERIOD', item.period],
                ['LOCATION', item.location || 'Global · Remote'],
                ['TYPE', item.type],
                ['STATUS', item.status],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#ded8cb] p-3 sm:p-4 dark:bg-[#0e0e0e]">
                  <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#ff2a2a] font-bold sm:text-[9px]">
                    {label}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-[#0c0c0c] font-semibold dark:text-white/85">{value}</div>
                </div>
              ))}
            </div>

            {item.summary && (
              <div className="mt-6 border-t border-black/20 pt-5 dark:border-white/15 sm:mt-8 sm:pt-7">
                <p className="section-kicker">RAPPORT_MISSION</p>
                <p className="mt-3 text-sm leading-6 text-[#0c0c0c] dark:text-white/85 sm:mt-4 sm:text-lg sm:leading-8">{item.summary}</p>
              </div>
            )}

            {item.bullets && item.bullets.length > 0 && (
              <div className="mt-6 border-t border-black/20 pt-5 dark:border-white/15 sm:mt-8 sm:pt-7">
                <p className="section-kicker">FIELD_OPERATIONS</p>
                <ol className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                  {item.bullets.map((bullet, index) => (
                    <li key={bullet} className="grid grid-cols-[28px_1fr] sm:grid-cols-[34px_1fr] gap-2.5 text-xs sm:text-sm leading-5 sm:leading-6 text-black/85 dark:text-white/75 font-medium">
                      <span className="font-mono text-[9px] text-[#ff2a2a] font-bold sm:text-[10px]">
                        0{index + 1}
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {item.scope && item.scope.length > 0 && (
              <div className="mt-6 border-t border-black/20 pt-5 dark:border-white/15 sm:mt-8 sm:pt-7">
                <p className="section-kicker">CHANNEL_TAGS</p>
                <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {item.scope.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/25 bg-[#ded8cb] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-[#0c0c0c] font-semibold dark:border-white/20 dark:bg-white/[0.04] dark:text-white/85 sm:px-3 sm:py-2 sm:text-[9px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
