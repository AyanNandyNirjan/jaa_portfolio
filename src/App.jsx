import { useCallback, useEffect, useState } from 'react';
import BootLoader from './components/BootLoader';
import CaseArchive from './components/CaseArchive';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';
import ExpertiseSection from './components/ExpertiseSection';
import Hero from './components/Hero';
import HudNav from './components/HudNav';
import ProfileSection from './components/ProfileSection';
import SmoothScroll from './components/SmoothScroll';

function getInitialTheme() {
  const saved = localStorage.getItem('jalal-portfolio-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return 'dark';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [booting, setBooting] = useState(true);
  const finishBoot = useCallback(() => setBooting(false), []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('jalal-portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-[#f1eee6] text-[#111] transition-colors duration-300 dark:bg-[#050505] dark:text-[#eeeae1]">
      {booting && <BootLoader onComplete={finishBoot} />}
      <SmoothScroll />
      <CustomCursor />
      <HudNav theme={theme} onToggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <CaseArchive />
        <ProfileSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
    </div>
  );
}