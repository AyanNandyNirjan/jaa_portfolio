import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { expertise } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function ExpertiseSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray('.expertise-row');
      rows.forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          x: -40,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 88%' },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="expertise" ref={sectionRef} className="border-b border-black/15 bg-[#f1eee6] py-24 dark:border-white/15 dark:bg-[#050505] lg:py-32">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-black/15 pb-8 dark:border-white/15 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="section-kicker">CAPABILITY_MATRIX // ACTIVE MODULES</p>
            <h2 className="mt-3 font-display text-[clamp(3.3rem,8vw,8rem)] font-black uppercase leading-[0.77] tracking-[-0.065em]">Marketing<br />Intelligence</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-black/50 dark:text-white/45 lg:justify-self-end lg:text-right">A structured view of Jalal's documented capabilities across search, social media, creative communication, and practical digital-marketing training.</p>
        </div>

        <div className="mt-4 divide-y divide-black/15 border-y border-black/15 dark:divide-white/15 dark:border-white/15">
          {expertise.map((item, index) => (
            <article key={item.id} className="expertise-row group grid gap-4 py-7 transition-colors hover:bg-[#ff2a2a] hover:text-white sm:grid-cols-[70px_1fr_120px] sm:items-center sm:px-3 lg:grid-cols-[90px_1fr_160px]">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ff2a2a] group-hover:text-white/70">MOD_{item.id}</div>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-[-0.045em] sm:text-4xl lg:text-5xl">{item.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-black/50 transition-colors group-hover:text-white/70 dark:text-white/45">{item.copy}</p>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/40 group-hover:text-white/65 dark:text-white/35 sm:text-right">
                [{item.label}]<br />STATUS: ACTIVE<br />NODE: 0{index + 1}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
