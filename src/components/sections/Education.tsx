import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section aria-label="Educational Background" className="w-full space-y-4">
      <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
        Education &amp; Credentials
      </h2>

      <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 physics-ready shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-4">
          <div className="p-3 rounded-2xl bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20 shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[var(--text-primary)]">
              {education.degree}
            </h3>
            <p className="text-sm font-medium text-[var(--accent-emerald)]">
              {education.institution}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] pt-2 sm:pt-0 border-t sm:border-t-0 border-[var(--border-subtle)]">
          <div className="flex items-center gap-1.5 font-mono">
            <Calendar className="w-3.5 h-3.5" />
            <span>{education.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{education.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
