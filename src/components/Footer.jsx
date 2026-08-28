export default function Footer() {
  return (
    <footer className="border-t border-black/20 bg-[#e2ddd2] px-4 py-5 text-black/85 dark:border-white/20 dark:bg-[#050505] dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-black/85 dark:text-white/75 sm:flex-row sm:items-center sm:justify-between font-medium">
        <span>SECURE LINE ESTABLISHED // PORTFOLIO v2.0</span>
        <span>© {new Date().getFullYear()} JALAL AHMED ANIK</span>
      </div>
    </footer>
  );
}
