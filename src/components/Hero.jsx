import { ArrowDownRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { profile } from '../data/portfolioData';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return undefined;

    const onPointerMove = (event) => {
      const rect = root.getBoundingClientRect();
      root.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      root.style.setProperty('--my', `${event.clientY - rect.top}px`);
    };

    root.addEventListener('pointermove', onPointerMove);

    const ctx = gsap.context(() => {
      gsap.from('.hero-line > span', {
        yPercent: 110,
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
      root.removeEventListener('pointermove', onPointerMove);
      ctx.revert();
    };
  }, []);

  return (
    <section id="top" ref={heroRef} className="hero-shell relative min-h-screen overflow-hidden border-b border-black/15 pt-16 dark:border-white/15">
      <div className="hero-grid absolute inset-0 opacity-[0.24] dark:opacity-[0.2]" />
      <div className="scanline pointer-events-none absolute inset-0 opacity-25" />
      <div className="hero-flashlight pointer-events-none absolute inset-0" />
      <div className="scan-beam pointer-events-none absolute inset-x-0 top-16 h-px bg-[#ff2a2a]/65 shadow-[0_0_28px_rgba(255,42,42,0.4)]" />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1600px] flex-col justify-between px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="hero-hud grid grid-cols-2 gap-3 font-mono text-[9px] uppercase tracking-[0.17em] text-black/45 dark:text-white/45 md:grid-cols-4 md:text-[10px]">
          <div>
            <span className="block text-[#ff2a2a]">LIVE_FEED</span>
            SIGNAL // STRONG
          </div>
          <div>
            <span className="block text-[#ff2a2a]">SUBJECT_CLASS</span>
            DIGITAL_MARKETING
          </div>
          <div className="hidden md:block">
            <span className="block text-[#ff2a2a]">REGION</span>
            GAZIPUR // BANGLADESH
          </div>
          <div className="text-right">
            <span className="block text-[#ff2a2a]">SYS_DIAGNOSTIC</span>
            STABLE // ACTIVE
          </div>
        </div>

        <div className="relative py-16 sm:py-20 lg:py-10">
          <div className="absolute left-0 top-6 hidden w-52 border-l border-[#ff2a2a] pl-4 font-mono text-[9px] uppercase leading-5 tracking-[0.15em] text-black/45 dark:text-white/40 lg:block">
            <span className="text-[#ff2a2a]">&gt;&gt; ANALYSING PROFILE...</span><br />
            SEARCH / SOCIAL / BRAND<br />
            PERFORMANCE / TRAINING<br />
            SYSTEM_OPTIMIZED
          </div>

          <div className="absolute right-0 top-8 hidden text-right font-mono text-[9px] uppercase leading-5 tracking-[0.15em] text-black/45 dark:text-white/40 lg:block">
            CASE: JAA-2026<br />
            ACCESS: PUBLIC<br />
            MODE: PORTFOLIO<br />
            <span className="text-[#ff2a2a]">REC ●</span>
          </div>

          <div className="relative mx-auto max-w-[1180px] text-center">
            <p className="hero-hud mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#ff2a2a]">TOP SECRET // PROFESSIONAL ARCHIVE</p>
            <h1 className="select-none font-display font-black uppercase leading-[0.72] tracking-[-0.075em] text-[#111] dark:text-[#ece8de]">
              <span className="hero-line block overflow-hidden text-[clamp(4.25rem,13vw,13rem)]"><span className="block">JALAL</span></span>
              <span className="hero-line block overflow-hidden text-[clamp(4.25rem,13vw,13rem)]"><span className="block">AHMED</span></span>
              <span className="hero-line block overflow-hidden text-[clamp(4.25rem,13vw,13rem)]"><span className="block">ANIK</span></span>
            </h1>
            <div className="hero-hud mx-auto mt-8 max-w-2xl">
              <p className="font-sans text-base font-semibold uppercase tracking-[-0.02em] sm:text-xl">{profile.role}.</p>
              <p className="mt-2 text-sm leading-6 text-black/55 dark:text-white/55 sm:text-base">{profile.intro}</p>
            </div>
          </div>
        </div>

        <div className="hero-hud flex items-end justify-between gap-6 border-t border-black/15 pt-4 dark:border-white/15">
          <div className="font-mono text-[9px] uppercase leading-5 tracking-[0.16em] text-black/45 dark:text-white/45 sm:text-[10px]">
            <span className="text-[#ff2a2a]">CERTIFICATION</span><br />
            {profile.certification}<br />
            EXPERIENCE: {profile.experience}
          </div>
          <a href="#archive" className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-black/60 dark:text-white/60">
            Scroll to investigate
            <span className="grid size-10 place-items-center border border-black/20 transition group-hover:border-[#ff2a2a] group-hover:bg-[#ff2a2a] group-hover:text-white dark:border-white/20">
              <ArrowDownRight size={17} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
