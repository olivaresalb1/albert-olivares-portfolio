import React from "react";
import { Mail, Phone, Linkedin, Github, Sparkles, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export const Header: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <header className="relative w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] rounded-3xl p-8 sm:p-10 backdrop-blur-md transition-all duration-300 physics-ready shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        {/* Profile Details */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20">
            <MapPin className="w-3.5 h-3.5" />
            {profile.location}
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {profile.name}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-[var(--accent-emerald)]">
            {profile.title}
          </p>

          <p className="text-base text-[var(--text-muted)] leading-relaxed">
            {profile.summary}
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${profile.contact.email}`}
              aria-label={`Send email to ${profile.contact.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors"
            >
              <Mail className="w-4 h-4 text-[var(--accent-cyan)]" />
              <span>{profile.contact.email}</span>
            </a>

            <a
              href={`tel:${profile.contact.phone}`}
              aria-label={`Call ${profile.contact.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors"
            >
              <Phone className="w-4 h-4 text-[var(--accent-emerald)]" />
              <span>{profile.contact.phone}</span>
            </a>

            <a
              href={profile.contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Albert Olivares LinkedIn profile"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profile.contact.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Albert Olivares GitHub profile"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors"
            >
              <Github className="w-4 h-4 text-white" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Action Button Placeholder */}
        <div className="shrink-0 self-start">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 opacity-80 cursor-not-allowed transition-all shadow-inner"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent-cyan)] animate-pulse" />
            <span>Zero Gravity</span>
          </button>
        </div>
      </div>
    </header>
  );
};
