import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Grid2X2, List } from 'lucide-react';
import { caseFiles } from '../data/portfolioData';
import CaseModal from './CaseModal';

gsap.registerPlugin(ScrollTrigger);

const artworkByCase = {
  '01': '/assets/evidence/ip-solutions.svg',
  '02': '/assets/evidence/grandior-homes.svg',
  '03': '/assets/evidence/all-in-line.svg',
  '04': '/assets/evidence/byets.svg',
};

const dossierCards = [
  {
    id: '05',
    code: 'SEO-SEM',
    company: 'Search Intelligence',
    role: 'SEO / SEM / Paid Search',
    period: 'CORE SKILL',
    type: 'SEARCH INTELLIGENCE',
    image: '/assets/evidence/search.svg',
    href: '#expertise',
  },
  {
    id: '06',
    code: 'SOCIAL',
    company: 'Social Operations',
    role: 'Content / Community / Brand',
    period: 'CORE SKILL',
    type: 'SOCIAL OPERATIONS',
    image: '/assets/evidence/social.svg',
    href: '#expertise',
  },
  {
    id: '07',
    code: 'CREATIVE',
    company: 'Brand & Creative',
    role: 'Graphic Design / Brand Consistency',
    period: 'CORE SKILL',
    type: 'BRAND / CREATIVE',
    image: '/assets/evidence/creative.svg',
    href: '#expertise',
  },
  {
    id: '08',
    code: 'NSDA-L3',
    company: 'NSDA Level-3',
    role: 'Certified Digital Marketing Professional',
    period: 'CERTIFIED',
    type: 'CERTIFICATION',
    image: '/assets/evidence/nsda.svg',
    href: '#profile',
  },
];

function EvidenceCard({ item, onOpen }) {
  const isCase = Boolean(item.summary);
  const CardTag = isCase ? 'button' : 'a';
  const commonProps = isCase
    ? { type: 'button', onClick: () => onOpen(item) }
    : { href: item.href };

  return (
    <CardTag
      {...commonProps}
      className="evidence-card group relative h-[520px] w-[222px] shrink-0 overflow-hidden border border-white/20 bg-[#0a0a0a] text-left sm:h-[560px] sm:w-[236px] lg:h-[585px] lg:w-[246px] xl:h-[610px] xl:w-[258px]"
      data-cursor="view"
      aria-label={`${item.company} — ${item.role}`}
    >
      <img
        src={item.image || artworkByCase[item.id]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.045] group-hover:brightness-110"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.12)_0%,rgba(0,0,0,.06)_36%,rgba(0,0,0,.48)_72%,rgba(0,0,0,.92)_100%)]" />
      <div className="absolute inset-0 opacity-[0.13] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,.18)_0,rgba(255,255,255,.18)_1px,transparent_1px,transparent_4px)]" />

      <div className="absolute left-5 top-5 z-10 flex flex-col gap-[3px]">
        <span className="h-[3px] w-[3px] bg-[#ff2a2a]" />
        <span className="h-[3px] w-[3px] bg-[#ff2a2a]" />
        <span className="h-[3px] w-[3px] bg-[#ff2a2a]" />
        <span className="h-[3px] w-[3px] bg-[#ff2a2a]" />
      </div>

      <div className="absolute right-4 top-5 z-10 flex h-[155px] flex-col items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-[#ff2a2a] [writing-mode:vertical-rl] [transform:rotate(180deg)]">
          {item.type}
        </span>
        <span className="h-2 w-2 rounded-full border border-[#ff2a2a]" />
      </div>

      <div className="absolute left-5 top-[46%] z-10 font-mono text-[8px] uppercase tracking-[0.18em] text-white/45 [writing-mode:vertical-rl] [transform:rotate(180deg)]">
        {item.code}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 pb-6 sm:p-6">
        <div className="mb-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.19em] text-[#ff2a2a]">
          <span>{isCase ? 'EVIDENCE' : 'DOSSIER'} #{item.id}</span>
          <span className="h-px flex-1 bg-[#ff2a2a]/35" />
        </div>

        <h3 className="max-w-[9.5ch] font-display text-[34px] font-normal leading-[0.9] tracking-[-0.045em] text-[#f1eee6] sm:text-[39px] lg:text-[42px]">
          {item.company}
        </h3>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-white/15 pt-3">
          <p className="max-w-[16ch] text-[10px] leading-[1.45] text-white/60">{item.role}</p>
          <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.13em] text-white/45">{item.period}</span>
        </div>
      </div>

      <div className="evidence-card__frame pointer-events-none absolute inset-[9px] z-20 border border-transparent transition-all duration-300" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff2a2a] transition-all duration-500 group-hover:w-full" />
    </CardTag>
  );
}

export default function CaseArchive() {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const trackRef = useRef(null);
  const triggerRef = useRef(null);
  const [mode, setMode] = useState('slider');
  const [activeCase, setActiveCase] = useState(null);

  const cards = useMemo(
    () => [
      ...caseFiles.map((item) => ({ ...item, image: artworkByCase[item.id] })),
      ...dossierCards,
    ],
    [],
  );

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || mode !== 'slider') return undefined;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 110);
      if (getDistance() <= 0) return undefined;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          id: 'archive-horizontal',
          trigger: section,
          start: 'top top',
          end: () => `+=${getDistance() + window.innerHeight * 0.8}`,
          scrub: 0.65,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onRefresh(self) {
            triggerRef.current = self;
          },
          onUpdate(self) {
            triggerRef.current = self;
          },
        },
      });

      triggerRef.current = tween.scrollTrigger;

      return () => {
        triggerRef.current = null;
        tween.kill();
      };
    });

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => {
      window.clearTimeout(refreshTimer);
      mm.revert();
    };
  }, [mode]);

  function moveSlider(direction) {
    if (window.matchMedia('(min-width: 1024px)').matches && triggerRef.current) {
      const st = triggerRef.current;
      const current = window.scrollY;
      const step = Math.max(260, (st.end - st.start) * 0.16);
      const target = Math.min(st.end, Math.max(st.start, current + direction * step));
      window.scrollTo({ top: target, behavior: 'smooth' });
      return;
    }

    scrollerRef.current?.scrollBy({ left: direction * 290, behavior: 'smooth' });
  }

  return (
    <>
      <section
        id="archive"
        ref={sectionRef}
        className="relative overflow-hidden border-b border-black/15 bg-[#ece8de] py-16 dark:border-white/15 dark:bg-[#050505] lg:min-h-screen lg:py-0"
      >
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 lg:pt-20">
          <div className="flex items-start justify-between gap-8">
            <div>
              <div className="section-kicker">CAM_04 [REC] // PROFESSIONAL ARCHIVE</div>
              <h2 className="mt-4 font-display text-[clamp(3.1rem,5.2vw,6.1rem)] font-normal uppercase leading-[0.85] tracking-[-0.055em]">
                Evidence Board
              </h2>
            </div>

            <div className="hidden pt-9 text-right font-mono text-[8px] uppercase leading-5 tracking-[0.13em] text-black/45 dark:text-white/45 md:block">
              <p>SECTOR: MARKETING</p>
              <p>SCANNING: <span className="text-[#ff2a2a]">ACTIVE</span></p>
              <p className="mt-2 text-[#ff2a2a]">SIGNAL_STRONG</p>
            </div>
          </div>

          <div className="mt-8 h-px bg-black/15 dark:bg-white/15" />

          <div className="relative mt-7 flex min-h-10 items-center justify-between gap-4">
            <div className="flex items-center gap-0">
              <button type="button" onClick={() => setMode('slider')} className={`mode-button ${mode === 'slider' ? 'mode-button--active' : ''}`}>
                <Grid2X2 size={12} /> SLIDER
              </button>
              <button type="button" onClick={() => setMode('list')} className={`mode-button -ml-px ${mode === 'list' ? 'mode-button--active' : ''}`}>
                <List size={12} /> LIST
              </button>
            </div>

            {mode === 'slider' && (
              <div className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
                <button type="button" aria-label="Previous evidence" onClick={() => moveSlider(-1)} className="archive-arrow">
                  <ChevronLeft size={16} />
                </button>
                <button type="button" aria-label="Next evidence" onClick={() => moveSlider(1)} className="archive-arrow -ml-px">
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

            <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-black/40 dark:text-white/35">
              {String(cards.length).padStart(2, '0')} FILES // LIVE INDEX
            </div>
          </div>
        </div>

        {mode === 'slider' ? (
          <div ref={scrollerRef} className="mt-7 overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-8 lg:overflow-visible">
            <div ref={trackRef} className="flex w-max gap-5 px-4 sm:gap-6 sm:px-6 lg:gap-7 lg:px-[3vw]">
              {cards.map((item) => (
                <EvidenceCard key={item.id} item={item} onOpen={setActiveCase} />
              ))}

              <div className="relative flex h-[520px] w-[222px] shrink-0 items-end overflow-hidden border border-dashed border-black/25 bg-black/[0.03] p-5 dark:border-white/20 dark:bg-white/[0.02] sm:h-[560px] sm:w-[236px] sm:p-6 lg:h-[585px] lg:w-[246px] xl:h-[610px] xl:w-[258px]">
                <div>
                  <p className="section-kicker">ARCHIVE_END</p>
                  <p className="mt-4 font-display text-4xl leading-[0.9] tracking-[-0.05em]">More campaign evidence can be added here.</p>
                  <p className="mt-5 text-xs leading-5 text-black/45 dark:text-white/45">Add real campaign visuals, analytics screenshots, certificates, and measurable results when available.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-[1500px] px-4 pb-24 sm:px-6 lg:px-8">
            <div className="mt-7 divide-y divide-black/15 border-t border-black/15 dark:divide-white/15 dark:border-white/15">
              {caseFiles.map((item) => (
                <button key={item.id} type="button" onClick={() => setActiveCase(item)} className="group grid w-full gap-4 py-7 text-left sm:grid-cols-[70px_1fr_auto] sm:items-center">
                  <span className="font-mono text-[10px] text-[#ff2a2a]">#{item.id}</span>
                  <div>
                    <h3 className="font-display text-3xl tracking-[-0.04em] transition group-hover:text-[#ff2a2a] sm:text-5xl">{item.company}</h3>
                    <p className="mt-1 text-sm text-black/50 dark:text-white/45">{item.role} · {item.location}</p>
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/45 dark:text-white/40 sm:text-right">{item.period}<br />{item.status}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      <CaseModal item={activeCase} onClose={() => setActiveCase(null)} />
    </>
  );
}
