import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolioData';

export default function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="contact-section relative isolate flex min-h-screen overflow-hidden bg-[#f1eee6] text-[#111] dark:bg-[#050505] dark:text-[#eeeae1]"
    >
      <div className="contact-noise pointer-events-none absolute inset-0" />
      <div className="scanline pointer-events-none absolute inset-0 opacity-[0.14] dark:opacity-[0.24]" />
      <div className="contact-vignette pointer-events-none absolute inset-0" />

      <div className="contact-signal pointer-events-none absolute inset-x-0 top-0 h-[34vh] min-h-[220px]">
        <span className="contact-signal__line" />
        <span className="contact-signal__node" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[48%] -z-0 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[clamp(8rem,25vw,31rem)] font-bold uppercase leading-none tracking-[-0.08em] text-black/[0.025] dark:text-white/[0.018]">
        Results
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1680px] flex-col px-5 pb-5 pt-20 sm:px-8 sm:pb-7 lg:px-12 lg:pb-8 lg:pt-24">
        <div className="flex flex-1 items-center justify-center py-20 sm:py-24 lg:py-28">
          <div className="contact-center w-full max-w-[760px] text-center">
            <div className="mb-8 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.02em] text-[#ff2a2a] sm:text-xs">
              <span className="contact-channel-dot" />
              <span>Channel open</span>
            </div>

            <h2 className="mx-auto max-w-[12ch] font-display text-[clamp(3.6rem,6.25vw,7.5rem)] font-normal leading-[0.92] tracking-[-0.045em]">
              What if we
              <br />
              worked together?
            </h2>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block font-mono text-[11px] tracking-[0.08em] text-[#ff2a2a] transition-opacity duration-300 hover:opacity-65 sm:text-sm"
            >
              {profile.email}
            </a>

            <div className="mt-9 flex justify-center">
              <a href={`mailto:${profile.email}`} className="contact-initiate group">
                <span>Initiate contact</span>
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[#ff2a2a] sm:text-xs">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-bracket-link"
              >
                [ LinkedIn ]
              </a>
              <a
                href="/Jalal-Ahmed-Anik-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="contact-bracket-link"
              >
                [ View CV ]
              </a>
            </div>

            <div className="mt-16 font-sans text-[9px] uppercase leading-5 tracking-[0.02em] text-black/30 dark:text-white/25 sm:text-[10px]">
              <div>Secure line established</div>
              <div>© {year} Jalal Ahmed Anik</div>
            </div>
          </div>
        </div>

        <div className="grid items-end gap-6 font-sans text-[9px] uppercase tracking-[0.02em] text-black/30 dark:text-white/25 sm:grid-cols-[1fr_auto]">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_rgba(255,42,42,.9)]" />
            <span>Live feed</span>
          </div>

          <div className="contact-mode-panel justify-self-start sm:justify-self-end">
            <div className="contact-cube" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <div className="font-mono text-[8px] tracking-[0.18em] text-black/35 dark:text-white/35">MARKETING_MODE</div>
              <div className="mt-1 font-display text-lg uppercase tracking-[0.02em] text-[#ff2a2a] sm:text-xl">Growth</div>
              <div className="mt-1 font-mono text-[8px] tracking-[0.16em] text-[#ff2a2a]">ACTIVE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}