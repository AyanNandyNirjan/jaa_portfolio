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
    <div className="fixed inset-0 z-[90] grid place-items-center bg-black/75 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label={`${item.company} case file`}>
      <button className="absolute inset-0" onClick={onClose} aria-label="Close dialog background" />
      <article className="case-modal relative z-10 max-h-[92vh] w-full max-w-5xl overflow-auto border border-[#ff2a2a]/50 bg-[#070707] text-[#eeeae1] shadow-[0_0_90px_rgba(0,0,0,0.8)]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#070707]/95 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45 sm:text-[10px]">
            <span className="text-[#ff2a2a]">TOP SECRET // DECRYPTED</span> &nbsp; CASE #{item.id}
          </div>
          <button onClick={onClose} className="grid size-9 place-items-center border border-white/15 text-white/65 transition hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white" aria-label="Close case">
            <X size={16} />
          </button>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="evidence-visual relative min-h-[300px] overflow-hidden border-b border-white/10 p-5 lg:min-h-[620px] lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,42,42,0.18),transparent_38%)]" />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                <span>EVIDENCE_A.JPG</span>
                <span className="text-[#ff2a2a]">REC ●</span>
              </div>
              <div>
                <div className="mb-4 h-px w-16 bg-[#ff2a2a]" />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff2a2a]">{item.code}</p>
                <h2 className="mt-2 font-display text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-7xl">{item.company}</h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">{item.role}</p>
              </div>
              <div className="font-mono text-[9px] uppercase leading-5 tracking-[0.16em] text-white/35">
                SIGNAL: VERIFIED<br />
                SOURCE: PROFESSIONAL CV<br />
                STATUS: {item.status}
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-7 lg:p-10">
            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {[
                ['PERIOD', item.period],
                ['LOCATION', item.location],
                ['TYPE', item.type],
                ['STATUS', item.status],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#070707] p-4">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#ff2a2a]">{label}</div>
                  <div className="mt-2 text-sm text-white/70">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="section-kicker">RAPPORT_MISSION</p>
              <p className="mt-4 text-lg leading-8 text-white/70">{item.summary}</p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="section-kicker">FIELD_OPERATIONS</p>
              <ol className="mt-4 space-y-4">
                {item.bullets.map((bullet, index) => (
                  <li key={bullet} className="grid grid-cols-[34px_1fr] gap-3 text-sm leading-6 text-white/60">
                    <span className="font-mono text-[10px] text-[#ff2a2a]">0{index + 1}</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="section-kicker">CHANNEL_TAGS</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.scope.map((tag) => <span key={tag} className="tag-dark">{tag}</span>)}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
