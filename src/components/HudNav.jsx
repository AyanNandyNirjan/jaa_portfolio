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

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f1eee6]/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#050505]/70">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
            <span className="grid size-8 place-items-center border border-[#ff2a2a] bg-[#ff2a2a] font-mono text-[10px] font-bold text-white transition group-hover:bg-transparent group-hover:text-[#ff2a2a]">JAA</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60 sm:inline">CASE_FILE // 06</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map(([label, href]) => (
              <a key={label} href={href} className="hud-link font-mono text-[10px] uppercase tracking-[0.18em] text-black/55 dark:text-white/55">
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
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hud-icon hidden sm:grid" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="/Jalal-Ahmed-Anik-CV.pdf" target="_blank" rel="noreferrer" className="hud-icon hidden sm:grid" aria-label="Open CV">
              <Download size={16} />
            </a>
            <button type="button" onClick={() => setOpen((value) => !value)} className="hud-icon lg:hidden" aria-label="Open menu">
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-[#f1eee6] px-6 pt-28 transition-transform duration-500 dark:bg-[#050505] lg:hidden ${open ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff2a2a]">NAVIGATION_NODE</div>
        <div className="mt-8 flex flex-col border-t border-black/15 dark:border-white/15">
          {links.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-black/15 py-5 font-sans text-3xl font-black uppercase tracking-[-0.04em] dark:border-white/15"
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
