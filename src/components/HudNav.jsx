import { Download, Linkedin, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/portfolioData';

const links = [
  ['Archive', '#archive'],
  ['Profile', '#profile'],
  ['Expertise', '#expertise'],
  ['Contact', '#contact'],
];

export default function HudNav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const scrollToHref = (e, href) => {
    e.preventDefault();
    setOpen(false);

    if (href === '#top') {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/20 bg-[#ebe6dc]/90 backdrop-blur-xl dark:border-white/15 dark:bg-[#050505]/85">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            onClick={(e) => scrollToHref(e, '#top')}
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff2a2a]"
            aria-label="Back to top"
          >
            <span className="grid size-8 place-items-center border border-[#ff2a2a] bg-[#ff2a2a] font-mono text-[10px] font-bold text-white transition-colors duration-200 group-hover:bg-transparent group-hover:text-[#ff2a2a]">JAA</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-black/85 dark:text-white/75 sm:inline font-semibold">CASE_FILE // 06</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={(e) => scrollToHref(e, href)}
                className="hud-link"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="hud-icon"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} strokeWidth={1.8} /> : <Moon size={18} strokeWidth={1.8} />}
            </button>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hud-icon hidden sm:grid" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={1.8} />
            </a>
            <a href="/Jalal-Ahmed-Anik-CV.pdf" target="_blank" rel="noreferrer" className="hud-icon hidden sm:grid" aria-label="Open CV">
              <Download size={18} strokeWidth={1.8} />
            </a>
            <button type="button" onClick={() => setOpen((value) => !value)} className="hud-icon lg:hidden" aria-label="Open menu">
              {open ? <X size={18} strokeWidth={1.8} /> : <Menu size={18} strokeWidth={1.8} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-[#ebe6dc] px-6 pt-28 transition-transform duration-400 dark:bg-[#050505] lg:hidden ${open ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff2a2a] font-semibold">NAVIGATION_NODE</div>
        <div className="mt-8 flex flex-col border-t border-black/25 dark:border-white/20">
          {links.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              onClick={(e) => scrollToHref(e, href)}
              className="flex items-center justify-between border-b border-black/25 py-5 font-sans text-3xl font-black uppercase tracking-[-0.04em] text-black dark:text-white dark:border-white/20"
            >
              {label}
              <span className="font-mono text-xs font-normal tracking-normal text-[#ff2a2a]">0{index + 1}</span>
            </a>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <a className="terminal-button" href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
          <a className="terminal-button" href="/Jalal-Ahmed-Anik-CV.pdf" target="_blank" rel="noreferrer">OPEN CV</a>
        </div>
      </div>
    </>
  );
}
