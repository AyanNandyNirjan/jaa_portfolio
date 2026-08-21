export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f1eee6] px-4 py-5 text-black dark:border-white/10 dark:bg-[#050505] dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-black/45 dark:text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>SECURE LINE ESTABLISHED // PORTFOLIO v2.0</span>
        <span>© {new Date().getFullYear()} JALAL AHMED ANIK</span>
      </div>
    </footer>
  );
}
