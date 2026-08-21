import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education, profile, skills } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function ProfileSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.profile-reveal').forEach((element) => {
        gsap.from(element, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="profile" ref={sectionRef} className="relative overflow-hidden border-b border-black/15 bg-[#e8e4db] py-24 dark:border-white/15 dark:bg-[#090909] lg:py-32">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="profile-reveal grid gap-8 border-b border-black/15 pb-8 dark:border-white/15 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="section-kicker">SUBJECT PROFILE // CASE FILE: JAA-06</p>
            <h2 className="mt-3 font-display text-[clamp(3.5rem,9vw,9rem)] font-black uppercase leading-[0.75] tracking-[-0.07em]">Jalal<br />Ahmed Anik</h2>
          </div>
          <div className="font-mono text-[9px] uppercase leading-5 tracking-[0.16em] text-black/45 dark:text-white/40 lg:text-right">
            STATUS: ACTIVE<br />
            CLASS: DIGITAL_MARKETING<br />
            XP_LEVEL: 6+ YEARS<br />
            LANG_1: ENGLISH // FLUENT<br />
            LANG_2: BANGLA // FLUENT
          </div>
        </div>

        <div className="mt-10 grid gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-14">
          <div className="profile-reveal">
            <div className="relative overflow-hidden border border-black/15 bg-[#d8d3c8] dark:border-white/15 dark:bg-[#101010]">
              <img src="/assets/jalal-ahmed-anik.jpg" alt="Jalal Ahmed Anik" className="aspect-[4/5] w-full object-cover object-top grayscale contrast-110 transition duration-700 hover:grayscale-0" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,5,5,.7))]" />
              <div className="absolute inset-x-0 top-0 flex justify-between p-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70">
                <span>REC_ACTIVE <span className="text-[#ff2a2a]">●</span></span>
                <span>IDENTITY: VERIFIED</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 font-mono text-[9px] uppercase leading-5 tracking-[0.16em] text-white/65">
                SUBJECT: JALAL_AHMED_ANIK<br />
                LOCATION: GAZIPUR_BD<br />
                ROLE: DIGITAL_MARKETING_MANAGER
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 font-mono text-[9px] uppercase tracking-[0.15em] text-black/45 dark:text-white/40">
              <div className="border border-black/15 p-3 dark:border-white/15">CERTIFICATION<br /><span className="mt-1 block text-[#ff2a2a]">NSDA LEVEL-3</span></div>
              <div className="border border-black/15 p-3 dark:border-white/15">EXPERIENCE<br /><span className="mt-1 block text-[#ff2a2a]">6+ YEARS</span></div>
            </div>
          </div>

          <div>
            <div className="profile-reveal border border-black/15 p-5 dark:border-white/15 sm:p-7 lg:p-9">
              <p className="section-kicker">COMPETENCE_ANALYSIS_REPORT [READ_ONLY]</p>
              <p className="mt-5 max-w-4xl text-xl leading-8 text-black/70 dark:text-white/70 sm:text-2xl sm:leading-9">{profile.bio}</p>
            </div>

            <div className="profile-reveal mt-5 grid gap-5 lg:grid-cols-2">
              <div className="border border-black/15 p-5 dark:border-white/15 sm:p-6">
                <p className="section-kicker">// ACADEMIC_LOG [DEGREES]</p>
                <div className="mt-5 divide-y divide-black/15 dark:divide-white/15">
                  {education.map((item) => (
                    <div key={item.degree} className="py-5 first:pt-0 last:pb-0">
                      <div className="flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.15em] text-[#ff2a2a]">
                        <span>[NATIONAL UNIVERSITY]</span><span>{item.year}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold tracking-[-0.03em]">{item.degree}</h3>
                      <p className="mt-1 text-sm text-black/50 dark:text-white/45">{item.field} · Score {item.score}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-black/15 p-5 dark:border-white/15 sm:p-6">
                <p className="section-kicker">// FIELD_OPERATIONS [CAREER]</p>
                <div className="mt-5 divide-y divide-black/15 dark:divide-white/15">
                  {[
                    ['2023—NOW', 'IP Solutions Ltd', 'Digital Marketing Manager'],
                    ['2021—2023', 'Grandior Homes', 'Social Media Marketing Expert'],
                    ['2020—2021', 'All in line', 'Digital Marketing Manager'],
                    ['2025', 'BYETS Project', 'Digital Marketing Trainer'],
                  ].map(([year, company, role]) => (
                    <div key={`${company}-${year}`} className="py-4 first:pt-0 last:pb-0">
                      <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#ff2a2a]">[{year}]</div>
                      <div className="mt-1 text-base font-bold">{company}</div>
                      <div className="mt-1 text-xs leading-5 text-black/50 dark:text-white/45">{role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-reveal mt-14 border-t border-black/15 pt-8 dark:border-white/15">
          <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
            <div>
              <p className="section-kicker">EQUIPMENT_INVENTORY</p>
              <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.045em]">Hard Skills</h3>
            </div>
            <div className="grid gap-px border border-black/15 bg-black/15 dark:border-white/15 dark:bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <div key={skill} className="group bg-[#e8e4db] p-4 transition hover:bg-[#ff2a2a] hover:text-white dark:bg-[#090909] dark:hover:bg-[#ff2a2a]">
                  <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-black/35 group-hover:text-white/60 dark:text-white/30">EQ_{String(index + 1).padStart(2, '0')}</div>
                  <div className="mt-7 text-sm font-bold uppercase tracking-[-0.02em]">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
