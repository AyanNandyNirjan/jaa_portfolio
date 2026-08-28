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
          y: 36,
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
    <section id="profile" ref={sectionRef} className="relative overflow-hidden border-b border-black/20 bg-[#d9d3c5] py-16 dark:border-white/20 dark:bg-[#090909] sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="profile-reveal grid gap-6 border-b border-black/25 pb-6 dark:border-white/20 sm:gap-8 sm:pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="section-kicker">SUBJECT PROFILE // CASE FILE: JAA-06</p>
            <h2 className="mt-2 sm:mt-3 font-display text-[clamp(3rem,8.5vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.07em] text-[#0c0c0c] dark:text-[#f3f0e9]">
              Jalal<br />Ahmed Anik
            </h2>
          </div>
          <div className="font-mono text-[8.5px] uppercase leading-4 tracking-[0.15em] text-black/85 dark:text-white/75 sm:text-[9px] sm:leading-5 sm:tracking-[0.16em] lg:text-right font-medium">
            STATUS: <span className="text-[#ff2a2a] font-bold">ACTIVE</span><br />
            CLASS: DIGITAL_MARKETING<br />
            XP_LEVEL: 6+ YEARS<br />
            LANG_1: ENGLISH // FLUENT<br />
            LANG_2: BANGLA // FLUENT
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-14">
          <div className="profile-reveal max-w-md mx-auto w-full xl:max-w-none xl:mx-0">
            <div className="relative overflow-hidden border border-black/25 bg-[#cac3b3] dark:border-white/20 dark:bg-[#101010]">
              <img
                src="/assets/jalal-ahmed-anik.jpg"
                alt="Jalal Ahmed Anik"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top grayscale contrast-115 transition duration-700 hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(12,12,12,.8))]" />
              <div className="absolute inset-x-0 top-0 flex justify-between p-3 sm:p-4 font-mono text-[8.5px] uppercase tracking-[0.15em] text-white/90 font-medium sm:text-[9px]">
                <span>REC_ACTIVE <span className="text-[#ff2a2a]">●</span></span>
                <span>IDENTITY: VERIFIED</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 font-mono text-[8.5px] uppercase leading-4 tracking-[0.15em] text-white/90 font-medium sm:text-[9px] sm:leading-5">
                SUBJECT: JALAL_AHMED_ANIK<br />
                LOCATION: GAZIPUR_BD<br />
                ROLE: DIGITAL_MARKETING_MANAGER
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3 font-mono text-[8.5px] uppercase tracking-[0.14em] text-black/85 dark:text-white/75 font-medium sm:text-[9px]">
              <div className="border border-black/25 bg-[#f5f1e8] p-2.5 sm:p-3 dark:border-white/20 dark:bg-white/[0.02]">
                CERTIFICATION<br />
                <span className="mt-1 block text-[#ff2a2a] font-bold">NSDA LEVEL-3</span>
              </div>
              <div className="border border-black/25 bg-[#f5f1e8] p-2.5 sm:p-3 dark:border-white/20 dark:bg-white/[0.02]">
                EXPERIENCE<br />
                <span className="mt-1 block text-[#ff2a2a] font-bold">6+ YEARS</span>
              </div>
            </div>
          </div>

          <div>
            <div className="profile-reveal border border-black/25 bg-[#f5f1e8] p-4 sm:p-7 lg:p-9 dark:border-white/20 dark:bg-white/[0.02] shadow-sm">
              <p className="section-kicker">COMPETENCE_ANALYSIS_REPORT [READ_ONLY]</p>
              <p className="mt-4 sm:mt-5 max-w-4xl text-base leading-7 text-[#0c0c0c] dark:text-white/85 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9 font-normal">
                {profile.bio}
              </p>
            </div>

            <div className="profile-reveal mt-4 sm:mt-5 grid gap-4 sm:gap-5 md:grid-cols-2">
              <div className="border border-black/25 bg-[#f5f1e8] p-4 sm:p-6 dark:border-white/20 dark:bg-white/[0.02] shadow-sm">
                <p className="section-kicker">// ACADEMIC_LOG [DEGREES]</p>
                <div className="mt-4 sm:mt-5 divide-y divide-black/20 dark:divide-white/15">
                  {education.map((item) => (
                    <div key={item.degree} className="py-4 sm:py-5 first:pt-0 last:pb-0">
                      <div className="flex items-center justify-between gap-3 font-mono text-[8.5px] uppercase tracking-[0.14em] text-[#ff2a2a] font-bold sm:text-[9px]">
                        <span>[NATIONAL UNIVERSITY]</span>
                        <span>{item.year}</span>
                      </div>
                      <h3 className="mt-1.5 sm:mt-2 text-base sm:text-lg font-bold tracking-[-0.03em] text-[#0c0c0c] dark:text-[#f3f0e9]">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-black/80 dark:text-white/70 font-medium">
                        {item.field} · Score {item.score}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-black/25 bg-[#f5f1e8] p-4 sm:p-6 dark:border-white/20 dark:bg-white/[0.02] shadow-sm">
                <p className="section-kicker">// FIELD_OPERATIONS [CAREER]</p>
                <div className="mt-4 sm:mt-5 divide-y divide-black/20 dark:divide-white/15">
                  {[
                    ['2023—NOW', 'IP Solutions Ltd', 'Digital Marketing Manager'],
                    ['2021—2023', 'Grandior Homes', 'Social Media Marketing Expert'],
                    ['2020—2021', 'All in line', 'Digital Marketing Manager'],
                    ['2025', 'BYETS Project', 'Digital Marketing Trainer'],
                  ].map(([year, company, role]) => (
                    <div key={`${company}-${year}`} className="py-3.5 sm:py-4 first:pt-0 last:pb-0">
                      <div className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-[#ff2a2a] font-bold sm:text-[9px]">
                        [{year}]
                      </div>
                      <div className="mt-1 text-sm sm:text-base font-bold text-[#0c0c0c] dark:text-[#f3f0e9]">
                        {company}
                      </div>
                      <div className="mt-0.5 text-xs leading-5 text-black/80 dark:text-white/70 font-medium">
                        {role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-reveal mt-10 sm:mt-14 border-t border-black/25 pt-6 sm:pt-8 dark:border-white/20">
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-[240px_1fr]">
            <div>
              <p className="section-kicker">EQUIPMENT_INVENTORY</p>
              <h3 className="mt-1.5 sm:mt-3 text-2xl sm:text-3xl font-black uppercase tracking-[-0.045em] text-[#0c0c0c] dark:text-[#f3f0e9]">
                Hard Skills
              </h3>
            </div>
            <div className="grid gap-px border border-black/25 bg-black/25 dark:border-white/20 dark:bg-white/20 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group bg-[#f5f1e8] p-3.5 sm:p-4 transition-colors duration-200 hover:bg-[#ff2a2a] hover:text-white dark:bg-[#0e0e0e] dark:hover:bg-[#ff2a2a]"
                >
                  <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-black/70 group-hover:text-white/85 dark:text-white/60 font-semibold sm:text-[9px]">
                    EQ_{String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="mt-4 sm:mt-7 text-xs sm:text-sm font-bold uppercase tracking-[-0.02em] text-[#0c0c0c] group-hover:text-white dark:text-[#f3f0e9]">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
