import { ArrowDownRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { profile } from '../data/portfolioData';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('.hero-line > span', {
        yPercent: 118,
        stagger: 0.08,
        duration: 1.05,
        ease: 'power4.out',
        delay: 0.12,
      });
      gsap.from('.hero-hud', {
        opacity: 0,
        y: 14,
        duration: 0.8,
        stagger: 0.06,
        delay: 0.55,
      });
      gsap.to('.scan-beam', {
        y: '88vh',
        repeat: -1,
        duration: 5.5,
        ease: 'none',
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="top" ref={heroRef} className="relative min-h-[100svh] overflow-hidden border-b border-black/20 pt-16 dark:border-white/20">
      <div className="hero-grid absolute inset-0 opacity-[0.28] dark:opacity-[0.2]" />
      <div className="scanline pointer-events-none absolute inset-0 opacity-25" />
      <div className="scan-beam pointer-events-none absolute inset-x-0 top-16 h-[2px] bg-gradient-to-r from-transparent via-[#ff2a2a]/35 to-transparent blur-[1px] shadow-[0_0_18px_rgba(255,42,42,0.25)]" />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1600px] flex-col justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="hero-hud grid grid-cols-2 gap-2 font-mono text-[8.5px] uppercase tracking-[0.15em] text-black/85 dark:text-white/75 sm:gap-3 sm:text-[9.5px] md:grid-cols-4 md:text-[10px]">
          <div>
            <span className="block text-[#ff2a2a] font-bold">LIVE_FEED</span>
            SIGNAL // STRONG
          </div>
          <div>
            <span className="block text-[#ff2a2a] font-bold">SUBJECT_CLASS</span>
            DIGITAL_MARKETING
          </div>
          <div className="hidden md:block">
            <span className="block text-[#ff2a2a] font-bold">REGION</span>
            GAZIPUR // BANGLADESH
          </div>
          <div className="text-right">
            <span className="block text-[#ff2a2a] font-bold">SYS_DIAGNOSTIC</span>
            STABLE // ACTIVE
          </div>
        </div>

        <div className="relative py-8 sm:py-16 lg:py-8">
          <div className="absolute left-0 top-6 hidden w-56 border-l-2 border-[#ff2a2a] pl-4 font-mono text-[9px] uppercase leading-5 tracking-[0.15em] text-black/80 dark:text-white/70 xl:block font-medium">
            <span className="text-[#ff2a2a] font-bold">&gt;&gt; ANALYSING PROFILE...</span><br />
            SEARCH / SOCIAL / BRAND<br />
            PERFORMANCE / TRAINING<br />
            SYSTEM_OPTIMIZED
          </div>

          <div className="absolute right-0 top-8 hidden text-right font-mono text-[9px] uppercase leading-5 tracking-[0.15em] text-black/80 dark:text-white/70 xl:block font-medium">
            CASE: JAA-2026<br />
            ACCESS: PUBLIC<br />
            MODE: PORTFOLIO<br />
            <span className="text-[#ff2a2a] font-bold">REC ●</span>
          </div>

          <div className="relative mx-auto max-w-[1180px] text-center px-1">
            {/* Blurry Red Ambience Glow behind the hero title */}
            <div
              className="hero-ambience-glow pointer-events-none h-[280px] w-[320px] sm:h-[400px] sm:w-[560px] md:h-[480px] md:w-[720px] lg:h-[540px] lg:w-[860px] bg-[radial-gradient(ellipse_at_center,rgba(220,25,25,0.48)_0%,rgba(175,18,18,0.28)_36%,rgba(110,10,10,0.08)_60%,transparent_75%)] blur-[40px] sm:blur-[65px] md:blur-[85px] dark:opacity-100 opacity-60"
              aria-hidden="true"
            />

            <p className="hero-hud relative z-10 mb-2.5 sm:mb-3 font-mono text-[8.5px] uppercase tracking-[0.2em] text-[#ff2a2a] sm:text-[10px] font-bold">
              TOP SECRET // PROFESSIONAL ARCHIVE
            </p>
            <h1 className="relative z-10 select-none font-display font-black uppercase leading-[0.88] tracking-[-0.04em] sm:leading-[0.82] sm:tracking-[-0.055em] md:leading-[0.76] md:tracking-[-0.07em] text-[#0c0c0c] dark:text-[#f3f0e9]">
              <span className="hero-line block overflow-hidden pb-[0.14em] md:pb-0 text-[clamp(2.75rem,12.5vw,12.5rem)]"><span className="block">JALAL</span></span>
              <span className="hero-line block overflow-hidden pb-[0.14em] md:pb-0 text-[clamp(2.75rem,12.5vw,12.5rem)]"><span className="block">AHMED</span></span>
              <span className="hero-line block overflow-hidden pb-[0.14em] md:pb-0 text-[clamp(2.75rem,12.5vw,12.5rem)]"><span className="block">ANIK</span></span>
            </h1>
            <div className="hero-hud relative z-10 mx-auto mt-4 max-w-2xl sm:mt-8">
              <p className="font-sans text-xs font-bold uppercase tracking-[-0.02em] sm:text-base md:text-xl text-[#0c0c0c] dark:text-[#f3f0e9]">
                {profile.role}.
              </p>
              <p className="mt-1.5 text-xs leading-5 text-black/85 dark:text-white/75 sm:mt-3 sm:text-sm sm:leading-6 md:text-base font-medium max-w-xl mx-auto">
                {profile.intro}
              </p>
            </div>
          </div>
        </div>

        <div className="hero-hud flex flex-col gap-4 border-t border-black/20 pt-4 sm:flex-row sm:items-end sm:justify-between dark:border-white/20">
          <div className="font-mono text-[8.5px] uppercase leading-4 tracking-[0.14em] text-black/85 dark:text-white/75 sm:text-[9.5px] sm:leading-5">
            <span className="text-[#ff2a2a] font-bold">CERTIFICATION</span><br />
            {profile.certification}<br />
            EXPERIENCE: {profile.experience}
          </div>
          <a
            href="#archive"
            className="group inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-black/90 dark:text-white/85 sm:text-[10px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff2a2a]"
          >
            Scroll to investigate
            <span className="grid size-9 place-items-center border border-black/25 bg-black/[0.04] transition-colors duration-200 group-hover:border-[#ff2a2a] group-hover:bg-[#ff2a2a] group-hover:text-white dark:border-white/25 dark:bg-white/[0.03] sm:size-10">
              <ArrowDownRight size={18} strokeWidth={1.8} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
