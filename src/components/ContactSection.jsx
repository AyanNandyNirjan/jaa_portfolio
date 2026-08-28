import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolioData';

export default function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="contact-section relative isolate flex min-h-screen overflow-hidden bg-[#ebe6dc] text-[#0c0c0c] pt-16 dark:bg-[#050505] dark:text-[#f3f0e9]"
    >
      <div className="contact-noise pointer-events-none absolute inset-0" />
      <div className="scanline pointer-events-none absolute inset-0 opacity-[0.14] dark:opacity-[0.24]" />
      <div className="contact-vignette pointer-events-none absolute inset-0" />

      {/* Subtle Background Watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[clamp(6rem,20vw,24rem)] font-bold uppercase leading-none tracking-[-0.08em] text-black/[0.045] dark:text-white/[0.025]">
        Results
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1680px] flex-col justify-between px-4 py-5 sm:px-8 sm:py-6 lg:px-12">
        {/* Center Content Box */}
        <div className="my-auto flex flex-col items-center justify-center py-2 text-center">
          <div className="mb-4 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.04em] text-[#ff2a2a] sm:text-xs font-bold">
            <span className="contact-channel-dot" />
            <span>Channel open</span>
          </div>

          <h2 className="mx-auto max-w-[14ch] font-display text-[clamp(2.75rem,5.2vw,5.5rem)] font-normal leading-[0.94] tracking-[-0.045em] text-[#0c0c0c] dark:text-[#f3f0e9]">
            What if we
            <br />
            worked together?
          </h2>

          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block font-mono text-sm tracking-[0.08em] text-[#ff2a2a] font-bold transition-opacity duration-200 hover:opacity-80 sm:text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff2a2a]"
          >
            {profile.email}
          </a>

          <div className="mt-6 flex justify-center">
            <a
              href={`mailto:${profile.email}`}
              className="contact-initiate group font-mono font-bold text-xs sm:text-sm tracking-[0.14em] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff2a2a]"
            >
              <span>Initiate contact</span>
              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 font-mono text-xs uppercase tracking-[0.1em] text-[#ff2a2a] font-bold sm:text-sm">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-bracket-link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff2a2a]"
            >
              [ LinkedIn ]
            </a>
            <a
              href="/Jalal-Ahmed-Anik-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="contact-bracket-link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff2a2a]"
            >
              [ View CV ]
            </a>
          </div>

          <div className="mt-7 font-sans text-[10px] uppercase leading-5 tracking-[0.04em] text-black/75 dark:text-white/60 sm:text-[11px] font-medium">
            <div>Secure line established</div>
            <div>© {year} Jalal Ahmed Anik</div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="grid items-end gap-4 font-sans text-[10px] uppercase tracking-[0.04em] text-black/75 dark:text-white/65 sm:grid-cols-[1fr_auto]">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_rgba(255,42,42,.9)]" />
            <span className="font-semibold">Live feed</span>
          </div>

          <div className="contact-mode-panel justify-self-start sm:justify-self-end shadow-sm">
            <div className="contact-cube" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-[0.18em] text-black/75 dark:text-white/60 font-bold">
                MARKETING_MODE
              </div>
              <div className="mt-1 font-display text-lg uppercase tracking-[0.02em] text-[#ff2a2a] sm:text-xl font-bold">
                Growth
              </div>
              <div className="mt-1 font-mono text-[8px] tracking-[0.16em] text-[#ff2a2a] font-bold">
                ACTIVE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}