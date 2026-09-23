import { CheckCircle2, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] rounded-2xl p-8 backdrop-blur-md transition-all duration-300 physics-ready shadow-2xl">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Environment Ready
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
          Albert Olivares
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] font-medium mb-6">
          Senior Software Engineer &amp; Frontend Architect
        </p>

        <div className="flex items-center justify-center gap-2 text-xs text-[var(--text-muted)] border-t border-[var(--border-subtle)] pt-6">
          <Terminal className="w-4 h-4 text-[var(--accent-emerald)]" />
          <span>Next.js App Router • Tailwind CSS • Matter.js</span>
        </div>
      </div>
    </main>
  );
}
