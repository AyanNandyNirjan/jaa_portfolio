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

const categoryLabels = {
  '01': 'DIGITAL STRATEGY •',
  '02': 'SOCIAL MARKETING •',
  '03': 'SEARCH & PAID ADS •',
  '04': 'TRAINING & MENTOR •',
};

const dossierCards = [
  {
    id: '05',
    code: 'SEO-SEM',
    company: 'Search Intelligence',
    role: 'SEO / SEM / Paid Search',
    period: 'CORE SKILL',
    type: 'SEARCH INTELLIGENCE •',
    image: '/assets/evidence/search.svg',
    summary: 'Search Engine Optimization and performance-driven paid search execution across Google Ads and Bing Ads.',
    bullets: [
      'Engineered keyword targeting and structured ad campaigns.',
      'Optimized quality score and conversion rate across search landing pages.',
      'Tracked ROAS and search visibility metrics.',
    ],
    scope: ['SEO', 'SEM', 'Google Ads', 'Bing Ads', 'Analytics'],
    status: 'ACTIVE',
    location: 'Global · Remote',
  },
  {
    id: '06',
    code: 'SOCIAL',
    company: 'Social Operations',
    role: 'Content / Community / Brand',
    period: 'CORE SKILL',
    type: 'SOCIAL OPERATIONS •',
    image: '/assets/evidence/social.svg',
    summary: 'Multi-platform social media strategy, content publishing workflows, and community engagement.',
    bullets: [
      'Formulated monthly content calendars and visual campaigns.',
      'Monitored audience sentiment and engagement channels.',
      'Drove organic follower growth and brand affinity.',
    ],
    scope: ['Facebook', 'Instagram', 'Pinterest', 'X / Twitter', 'Content'],
    status: 'ACTIVE',
    location: 'Global · Remote',
  },
  {
    id: '07',
    code: 'CREATIVE',
    company: 'Brand & Creative',
    role: 'Graphic Design / Brand Consistency',
    period: 'CORE SKILL',
    type: 'BRAND / CREATIVE •',
    image: '/assets/evidence/creative.svg',
    summary: 'Brand visual identity development, marketing collateral production, and multi-channel consistency.',
    bullets: [
      'Designed high-impact campaign banners, decks, and social posts.',
      'Enforced rigorous brand guidelines across all customer touchpoints.',
      'Created marketing assets tailored to diverse target personas.',
    ],
    scope: ['Graphic Design', 'Brand Identity', 'Visuals', 'Creative Direction'],
    status: 'ACTIVE',
    location: 'Global · Remote',
  },
  {
    id: '08',
    code: 'NSDA-L3',
    company: 'NSDA Level-3',
    role: 'Certified Digital Marketing Professional',
    period: 'CERTIFIED',
    type: 'NSDA CERTIFIED •',
    image: '/assets/evidence/nsda.svg',
    summary: 'National Skills Development Authority (NSDA) Level-3 National Skill Certificate in Digital Marketing.',
    bullets: [
      'Nationally certified in SEO, SEM, and social media operations.',
      'Verified expertise in digital campaign planning and analytics.',
      'Assessed by industry experts under national competency standards.',
    ],
    scope: ['NSDA', 'Certification', 'National Standard', 'Level-3'],
    status: 'CERTIFIED',
    location: 'Bangladesh',
  },
];

function EvidenceCard({ item, isActive, onHover, onLeave, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={onLeave}
      onFocus={() => onHover(item.id)}
      onBlur={onLeave}
      className={`evidence-card group relative shrink-0 overflow-hidden text-left ${
        isActive ? 'evidence-card--active' : ''
      }`}
      aria-label={`${item.company} — ${item.role}`}
    >
      {/* Background Image with Layered Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={item.image}
          alt=""
          loading="lazy"
          aria-hidden="true"
          className="h-full w-full object-cover transition-all duration-700 ease-out"
          style={{
            filter: isActive
              ? 'grayscale(0) saturate(1.3) brightness(1.02)'
              : 'grayscale(1) brightness(0.68) contrast(1.05)',
            transform: isActive ? 'scale(1.035)' : 'scale(1)',
          }}
        />
        {/* Layered adaptive gradient */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: isActive
              ? 'linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.72) 75%, rgba(0,0,0,0.92) 100%)'
              : 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.82) 75%, rgba(0,0,0,0.98) 100%)',
          }}
        />
      </div>

      {/* Top-Left Segmented Technical Ticks */}
      <div className="absolute left-3 top-3 z-20 flex flex-col gap-[3px] sm:left-3.5 sm:top-3.5">
        {[...Array(isActive ? 9 : 6)].map((_, i) => (
          <span
            key={i}
            className={`h-[3px] w-[2px] transition-colors duration-300 ${
              isActive ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-[#ff2a2a]'
            }`}
          />
        ))}
      </div>

      {/* Top-Right Vertical Category Label (Rotated bottom-to-top) */}
      <div className="absolute right-2.5 top-3 z-20 flex items-center sm:right-3 sm:top-3.5">
        <span
          className={`font-mono text-[8px] uppercase tracking-[0.2em] [writing-mode:vertical-rl] [transform:rotate(180deg)] transition-colors duration-300 select-none font-bold sm:text-[8.5px] ${
            isActive ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]' : 'text-[#ff2a2a]'
          }`}
        >
          {categoryLabels[item.id] || item.type}
        </span>
      </div>

      {/* Surveillance / Camera HUD Corner Markers (┌ ┐ └ ┘) */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-all duration-500"
        style={{
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'scale(1)' : 'scale(0.96)',
        }}
        aria-hidden="true"
      >
        <span className="absolute left-2.5 top-2.5 h-3 w-3 border-l border-t border-white" />
        <span className="absolute right-2.5 top-2.5 h-3 w-3 border-r border-t border-white" />
        <span className="absolute bottom-2.5 left-2.5 h-3 w-3 border-l border-b border-white" />
        <span className="absolute bottom-2.5 right-2.5 h-3 w-3 border-r border-b border-white" />
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-3.5 pb-3.5 sm:p-5 sm:pb-5 text-left">
        {/* Evidence Number Label */}
        <div className="mb-1 font-mono text-[8.5px] uppercase tracking-[0.2em] text-[#ff2a2a] font-bold sm:text-[9px]">
          EVIDENCE #{item.id}
        </div>

        {/* Large Elegant Serif Title */}
        <h3
          className="font-display text-[22px] sm:text-[28px] lg:text-[32px] font-normal leading-[0.94] tracking-[-0.045em] text-[#ffffff] transition-transform duration-500 ease-out"
          style={{
            transform: isActive ? 'translateY(-3px)' : 'translateY(0)',
          }}
        >
          {item.company}
        </h3>

        {/* Thin Horizontal Red Line */}
        <div
          className="my-2 h-[1px] bg-[#ff2a2a] transition-all duration-700 ease-out sm:my-2.5"
          style={{
            width: isActive ? '100%' : '0%',
            opacity: isActive ? 1 : 0,
          }}
        />

        {/* [ CLICK TO DECRYPT ] Action Label */}
        <div
          className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#ffffff] transition-all duration-500 ease-out font-bold sm:text-[8.5px]"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0)' : 'translateY(6px)',
            maxHeight: isActive ? '20px' : '0px',
            overflow: 'hidden',
          }}
        >
          [ CLICK TO DECRYPT ]
        </div>
      </div>
    </button>
  );
}

function EvidenceListItem({ item, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group relative grid w-full gap-3 border-b border-black/20 bg-transparent px-3 py-5 text-left transition-colors duration-300 hover:bg-[#f5f1e8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff2a2a] dark:border-white/15 dark:hover:bg-[#101010] sm:grid-cols-[95px_1fr_auto_130px] sm:items-center sm:gap-4 sm:px-5 sm:py-7 lg:grid-cols-[115px_1fr_80px_160px]"
      aria-label={`${item.company} — ${item.role}`}
    >
      {/* HUD Corner Targeting Brackets for the Row */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <span className="absolute left-1.5 top-1.5 h-2.5 w-2.5 border-l border-t border-[#ff2a2a]" />
        <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 border-r border-t border-[#ff2a2a]" />
        <span className="absolute bottom-1.5 left-1.5 h-2.5 w-2.5 border-l border-b border-[#ff2a2a]" />
        <span className="absolute bottom-1.5 right-1.5 h-2.5 w-2.5 border-r border-b border-[#ff2a2a]" />
      </div>

      {/* Column 1: Index Number & Animated Ticks */}
      <div className="flex items-center justify-between sm:flex-col sm:items-start sm:justify-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em]">
        <div className="flex items-center gap-2 font-bold text-[#ff2a2a]">
          <span className="text-[11px] sm:text-[12px]">#{item.id}</span>
          <span className="flex gap-[2px]">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="h-[8px] w-[2px] bg-black/25 transition-colors duration-300 group-hover:bg-[#ff2a2a] dark:bg-white/25 sm:h-[9px]"
              />
            ))}
          </span>
        </div>
        <span className="text-black/60 dark:text-white/55 text-[8px] tracking-[0.14em] font-medium sm:text-[8.5px]">
          {categoryLabels[item.id]?.replace(' •', '') || item.type.replace(' •', '')}
        </span>
      </div>

      {/* Column 2: Title, Expanding Line, and Subtitles */}
      <div className="transition-transform duration-300 group-hover:translate-x-1 sm:pr-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-xl font-normal tracking-[-0.04em] text-[#0c0c0c] transition-colors duration-200 group-hover:text-[#ff2a2a] dark:text-[#f3f0e9] sm:text-3xl lg:text-5xl">
            {item.company}
          </h3>
          <span className="font-mono text-[8.5px] uppercase tracking-[0.15em] text-[#ff2a2a] opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-bold hidden sm:inline">
            [ DECRYPT ]
          </span>
        </div>

        {/* Animated Expanding Red Accent Line */}
        <div className="my-1.5 h-[1px] w-0 bg-[#ff2a2a] transition-all duration-500 ease-out group-hover:w-36 sm:my-2 sm:group-hover:w-64" />

        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-black/75 dark:text-white/70">
          <span className="font-medium">{item.role}</span>
          {item.location && (
            <>
              <span className="text-black/30 dark:text-white/30">•</span>
              <span className="font-mono text-[9.5px] text-black/60 dark:text-white/55 uppercase">{item.location}</span>
            </>
          )}
        </div>
      </div>

      {/* Column 3: Live Visual Thumbnail Box */}
      <div className="hidden sm:block">
        <div className="relative h-[64px] w-[64px] overflow-hidden border border-black/25 bg-black/10 transition-all duration-500 group-hover:border-[#ff2a2a] group-hover:shadow-[0_0_15px_rgba(255,42,42,0.25)] dark:border-white/20 dark:bg-white/5 lg:h-[74px] lg:w-[74px]">
          <img
            src={item.image}
            alt=""
            loading="lazy"
            aria-hidden="true"
            className="h-full w-full object-cover transition-all duration-500 grayscale brightness-75 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
          />
          {/* Micro HUD corner targeting */}
          <span className="absolute left-1 top-1 h-1.5 w-1.5 border-l border-t border-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute right-1 top-1 h-1.5 w-1.5 border-r border-t border-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute bottom-1 left-1 h-1.5 w-1.5 border-l border-b border-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute bottom-1 right-1 h-1.5 w-1.5 border-r border-b border-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>

      {/* Column 4: Period & Action Trigger */}
      <div className="flex items-center justify-between sm:flex-col sm:items-end sm:justify-center font-mono text-[8.5px] uppercase tracking-[0.14em] sm:text-[9px]">
        <div className="text-black/85 dark:text-white/75 font-semibold sm:text-right">
          <div>{item.period}</div>
          <div className="mt-0.5 flex items-center gap-1.5 sm:justify-end text-black/60 dark:text-white/60">
            <span className="size-1.5 rounded-full bg-[#ff2a2a] animate-pulse" />
            <span>{item.status}</span>
          </div>
        </div>

        <div className="mt-2.5 flex items-center gap-1.5 rounded-none border border-black/25 px-2.5 py-1 text-[8.5px] font-bold text-[#ff2a2a] transition-all duration-300 group-hover:border-[#ff2a2a] group-hover:bg-[#ff2a2a] group-hover:text-white dark:border-white/20 sm:border-transparent">
          <span>VIEW FILE</span>
          <span>→</span>
        </div>
      </div>
    </button>
  );
}

export default function CaseArchive() {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const trackRef = useRef(null);
  const triggerRef = useRef(null);
  const [mode, setMode] = useState('slider');
  const [activeCase, setActiveCase] = useState(null);
  const [activeCardId, setActiveCardId] = useState(null);

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

    if (!section || mode !== 'slider' || !track) {
      if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }
      ScrollTrigger.refresh();
      return undefined;
    }

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 120);
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
        if (triggerRef.current) {
          triggerRef.current.kill();
          triggerRef.current = null;
        }
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

    scrollerRef.current?.scrollBy({ left: direction * 280, behavior: 'smooth' });
  }

  return (
    <>
      <section
        id="archive"
        ref={sectionRef}
        className={`relative flex flex-col justify-between border-b border-black/20 bg-[#ded8cb] text-[#0c0c0c] dark:border-white/20 dark:bg-[#050505] dark:text-[#f3f0e9] ${
          mode === 'slider'
            ? 'overflow-hidden py-10 sm:py-12 lg:h-screen lg:min-h-0 lg:py-0 lg:pt-16 lg:pb-5'
            : 'overflow-visible min-h-screen py-12 pt-16 pb-24 sm:py-16 sm:pt-20 sm:pb-28 lg:h-auto lg:min-h-screen lg:pt-24 lg:pb-32'
        }`}
      >
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 lg:pt-3">
          <div className="flex items-start justify-between gap-4 sm:gap-8">
            <div>
              <div className="section-kicker">CAM_04 [REC] // PROFESSIONAL ARCHIVE</div>
              <h2 className="mt-1.5 sm:mt-2 font-display text-[clamp(2.2rem,4.2vw,4.5rem)] font-normal uppercase leading-[0.88] tracking-[-0.055em] text-[#0c0c0c] dark:text-[#f3f0e9]">
                Evidence Board
              </h2>
            </div>

            <div className="hidden pt-2 text-right font-mono text-[8.5px] uppercase leading-4 tracking-[0.13em] text-black/85 dark:text-white/70 md:block sm:text-[9px] sm:leading-5 font-medium">
              <p>SECTOR: MARKETING</p>
              <p>SCANNING: <span className="text-[#ff2a2a] font-bold">ACTIVE</span></p>
              <p className="mt-1 text-[#ff2a2a] font-bold">SIGNAL_STRONG</p>
            </div>
          </div>

          <div className="mt-3 sm:mt-4 h-px bg-black/25 dark:bg-white/20" />

          <div className="relative mt-3 flex flex-wrap min-h-9 items-center justify-between gap-3 sm:flex-nowrap">
            <div className="flex items-center gap-0">
              <button
                type="button"
                onClick={() => setMode('slider')}
                className={`mode-button border-black/25 text-black/85 hover:border-[#ff2a2a] hover:text-[#ff2a2a] dark:border-white/20 dark:text-white/75 ${mode === 'slider' ? 'mode-button--active' : ''}`}
              >
                <Grid2X2 size={13} strokeWidth={1.8} /> SLIDER
              </button>
              <button
                type="button"
                onClick={() => setMode('list')}
                className={`mode-button -ml-px border-black/25 text-black/85 hover:border-[#ff2a2a] hover:text-[#ff2a2a] dark:border-white/20 dark:text-white/75 ${mode === 'list' ? 'mode-button--active' : ''}`}
              >
                <List size={13} strokeWidth={1.8} /> LIST
              </button>
            </div>

            {mode === 'slider' && (
              <div className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
                <button
                  type="button"
                  aria-label="Previous evidence"
                  onClick={() => moveSlider(-1)}
                  className="archive-arrow border-black/25 text-black/85 hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white dark:border-white/20 dark:text-white/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff2a2a]"
                >
                  <ChevronLeft size={18} strokeWidth={1.8} />
                </button>
                <button
                  type="button"
                  aria-label="Next evidence"
                  onClick={() => moveSlider(1)}
                  className="archive-arrow -ml-px border-black/25 text-black/85 hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white dark:border-white/20 dark:text-white/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff2a2a]"
                >
                  <ChevronRight size={18} strokeWidth={1.8} />
                </button>
              </div>
            )}

            <div className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-black/70 dark:text-white/60 font-semibold sm:text-[9px]">
              {String(cards.length).padStart(2, '0')} FILES // LIVE INDEX
            </div>
          </div>
        </div>

        {mode === 'slider' ? (
          <div
            ref={scrollerRef}
            className="my-auto overflow-x-auto pb-3 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible lg:py-0"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div
              ref={trackRef}
              className="flex w-max items-stretch gap-3.5 sm:gap-5 lg:gap-6 px-4 sm:px-6 lg:px-[3vw]"
            >
              {cards.map((item) => (
                <EvidenceCard
                  key={item.id}
                  item={item}
                  isActive={activeCardId === item.id}
                  onHover={(id) => setActiveCardId(id)}
                  onLeave={() => setActiveCardId(null)}
                  onOpen={setActiveCase}
                />
              ))}

              <div className="evidence-card relative flex shrink-0 items-end overflow-hidden border border-dashed border-black/30 bg-black/[0.04] p-4 sm:p-5 dark:border-white/25 dark:bg-white/[0.03]">
                <div>
                  <p className="section-kicker">ARCHIVE_END</p>
                  <p className="mt-3 font-display text-xl leading-[0.9] tracking-[-0.05em] sm:text-3xl text-[#0c0c0c] dark:text-[#f3f0e9]">
                    More campaign evidence can be added here.
                  </p>
                  <p className="mt-3 text-xs leading-5 text-black/75 dark:text-white/60">
                    Add real campaign visuals, analytics screenshots, certificates, and measurable results when available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-[1500px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
            <div className="mt-4 border-t border-black/20 dark:border-white/20 sm:mt-5">
              {cards.map((item) => (
                <EvidenceListItem
                  key={item.id}
                  item={item}
                  onOpen={setActiveCase}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <CaseModal item={activeCase} onClose={() => setActiveCase(null)} />
    </>
  );
}
