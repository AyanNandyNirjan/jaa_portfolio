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
      className="fixed inset-0 z-[90] grid place-items-center bg-black/75 p-3 backdrop-blur-md dark:bg-black/85 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.company} case file`}
    >
      <button
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Close dialog background"
      />
      <article className="case-modal relative z-10 max-h-[92vh] w-full max-w-5xl overflow-auto border border-black/30 bg-[#f5f1e8] text-[#0c0c0c] shadow-[0_0_90px_rgba(0,0,0,0.5)] dark:border-[#ff2a2a]/60 dark:bg-[#080808] dark:text-[#f3f0e9] dark:shadow-[0_0_90px_rgba(0,0,0,0.85)]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/20 bg-[#f5f1e8]/95 px-4 py-3 backdrop-blur-xl dark:border-white/15 dark:bg-[#080808]/95 sm:px-6">
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/85 dark:text-white/70 sm:text-[10px]">
            <span className="text-[#ff2a2a] font-bold">TOP SECRET // DECRYPTED</span> &nbsp; CASE #{item.id}
          </div>
          <button
            onClick={onClose}
            className="grid size-9 place-items-center border border-black/25 text-black/85 transition-colors duration-200 hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff2a2a] dark:border-white/25 dark:text-white/80"
            aria-label="Close case"
          >
            <X size={18} strokeWidth={1.8} />
          </button>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="evidence-visual relative min-h-[300px] overflow-hidden border-b border-black/20 p-5 dark:border-white/15 lg:min-h-[620px] lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,42,42,0.12),transparent_38%)] dark:bg-[radial-gradient(circle_at_50%_25%,rgba(255,42,42,0.18),transparent_38%)]" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(0,0,0,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.1)_1px,transparent_1px)] [background-size:32px_32px] dark:opacity-30 dark:[background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-black/75 dark:text-white/60 font-medium">
                <span>EVIDENCE_A.JPG</span>
                <span className="text-[#ff2a2a] font-bold">REC ●</span>
              </div>
              <div>
                <div className="mb-4 h-px w-16 bg-[#ff2a2a]" />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff2a2a] font-bold">
                  {item.code || `CASE-${item.id}`}
                </p>
                <h2 className="mt-2 font-display text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] text-[#0c0c0c] dark:text-[#f3f0e9] sm:text-7xl">
                  {item.company}
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-black/85 font-semibold dark:text-white/75">
                  {item.role}
                </p>
              </div>
              <div className="font-mono text-[9px] uppercase leading-5 tracking-[0.16em] text-black/75 dark:text-white/60 font-medium">
                SIGNAL: VERIFIED<br />
                SOURCE: PROFESSIONAL CV<br />
                STATUS: {item.status}
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-7 lg:p-10">
            <div className="grid gap-px border border-black/20 bg-black/20 dark:border-white/15 dark:bg-white/15 sm:grid-cols-2">
              {[
                ['PERIOD', item.period],
                ['LOCATION', item.location || 'Global · Remote'],
                ['TYPE', item.type],
                ['STATUS', item.status],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#ded8cb] p-4 dark:bg-[#0e0e0e]">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#ff2a2a] font-bold">
                    {label}
                  </div>
                  <div className="mt-2 text-sm text-[#0c0c0c] font-semibold dark:text-white/85">{value}</div>
                </div>
              ))}
            </div>

            {item.summary && (
              <div className="mt-8 border-t border-black/20 pt-7 dark:border-white/15">
                <p className="section-kicker">RAPPORT_MISSION</p>
                <p className="mt-4 text-lg leading-8 text-[#0c0c0c] dark:text-white/85">{item.summary}</p>
              </div>
            )}

            {item.bullets && item.bullets.length > 0 && (
              <div className="mt-8 border-t border-black/20 pt-7 dark:border-white/15">
                <p className="section-kicker">FIELD_OPERATIONS</p>
                <ol className="mt-4 space-y-4">
                  {item.bullets.map((bullet, index) => (
                    <li key={bullet} className="grid grid-cols-[34px_1fr] gap-3 text-sm leading-6 text-black/85 dark:text-white/75 font-medium">
                      <span className="font-mono text-[10px] text-[#ff2a2a] font-bold">
                        0{index + 1}
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {item.scope && item.scope.length > 0 && (
              <div className="mt-8 border-t border-black/20 pt-7 dark:border-white/15">
                <p className="section-kicker">CHANNEL_TAGS</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.scope.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/25 bg-[#ded8cb] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.13em] text-[#0c0c0c] font-semibold dark:border-white/20 dark:bg-white/[0.04] dark:text-white/85"
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
