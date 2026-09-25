"use client";

import React from "react";
import { Mail, Phone, Linkedin, Github, Sparkles, RotateCcw, MapPin, FileText, CheckCircle2, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { usePhysics } from "@/context/PhysicsContext";

export const Header: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const { startPhysics, resetPhysics, isActive, isRecruiterMode, toggleRecruiterMode } = usePhysics();

  const handleTogglePhysics = () => {
    if (isActive) {
      resetPhysics();
    } else {
      startPhysics();
    }
  };

  return (
    <header className="relative w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] rounded-3xl p-8 sm:p-10 backdrop-blur-md transition-all duration-300 physics-ready shadow-2xl space-y-6">
      {/* Recruiter Mode Active Banner Badge */}
      {isRecruiterMode && (
        <div className="flex items-center justify-between gap-3 px-4 py-2 rounded-2xl bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] border border-[var(--accent-emerald)]/30 text-xs font-semibold animate-in fade-in duration-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent-emerald)] shrink-0" />
            <span>Recruiter Mode Active (Clean Static View • Reduced Motion Enforced)</span>
          </div>
          <button
            type="button"
            onClick={toggleRecruiterMode}
            className="text-[11px] underline hover:no-underline font-medium text-[var(--accent-emerald)]"
          >
            Disable
          </button>
        </div>
      )}

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

        {/* Action Controls: Physics & Recruiter Mode */}
        <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 self-start">
          {/* Zero Gravity Physics Toggle */}
          <button
            type="button"
            onClick={handleTogglePhysics}
            disabled={isRecruiterMode}
            aria-label={isActive ? "Reset Layout" : "Activate Zero Gravity physics sandbox"}
            className={`inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 shadow-lg cursor-pointer ${
              isRecruiterMode
                ? "opacity-50 cursor-not-allowed bg-white/5 text-[var(--text-muted)] border border-white/10"
                : isActive
                ? "bg-[var(--accent-emerald)]/15 text-[var(--accent-emerald)] border border-[var(--accent-emerald)]/40 hover:bg-[var(--accent-emerald)]/25 hover:border-[var(--accent-emerald)]/60 shadow-[0_0_15px_rgba(52,211,153,0.2)]"
                : "bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 hover:bg-[var(--accent-cyan)]/25 hover:border-[var(--accent-cyan)]/50 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
            }`}
          >
            {isActive ? (
              <>
                <RotateCcw className="w-4 h-4 text-[var(--accent-emerald)]" />
                <span>Reset Layout</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[var(--accent-cyan)] animate-pulse" />
                <span>Zero Gravity</span>
              </>
            )}
          </button>

          {/* Recruiter Mode Toggle */}
          <button
            type="button"
            onClick={toggleRecruiterMode}
            aria-label={isRecruiterMode ? "Disable Recruiter Mode" : "Enable Recruiter Mode (Static Accessible View)"}
            className={`inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
              isRecruiterMode
                ? "bg-[var(--accent-emerald)] text-gray-950 font-bold border border-[var(--accent-emerald)] shadow-[0_0_15px_rgba(52,211,153,0.3)]"
                : "bg-white/5 hover:bg-white/10 text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)]"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{isRecruiterMode ? "Recruiter Mode: ON" : "Recruiter Mode"}</span>
          </button>

          {/* Request Resume via Email Action */}
          <a
            href="mailto:olivaresalb1@gmail.com?subject=Albert%20Olivares%20-%20Resume%20Request"
            aria-label="Request Albert Olivares official resume via email"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-semibold text-[var(--text-muted)] hover:text-white bg-white/5 hover:bg-white/10 border border-[var(--border-subtle)] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span>Request PDF Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};
