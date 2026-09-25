"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Github, Briefcase, Calendar, Check, Layers } from "lucide-react";
import { FeaturedProject } from "@/types/portfolio";
import { usePhysics } from "@/context/PhysicsContext";

interface ProjectModalProps {
  project: FeaturedProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const { isActive, pausePhysics, resumePhysics } = usePhysics();

  useEffect(() => {
    if (!project) return;

    if (isActive) {
      pausePhysics();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (isActive) {
        resumePhysics();
      }
    };
  }, [project, isActive, pausePhysics, resumePhysics, onClose]);

  if (!project) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-[var(--text-muted)] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Info */}
        <div className="space-y-3 pr-8">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 font-semibold text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10 px-2.5 py-1 rounded-full border border-[var(--accent-cyan)]/20">
              <Briefcase className="w-3.5 h-3.5" />
              {project.company}
            </span>
            {project.industry && (
              <span className="inline-flex items-center gap-1 font-medium text-[var(--text-muted)] bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                <Layers className="w-3 h-3" />
                {project.industry}
              </span>
            )}
            <span className="inline-flex items-center gap-1 font-mono text-[var(--text-muted)] ml-auto">
              <Calendar className="w-3.5 h-3.5" />
              {project.timeframe}
            </span>
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
            {project.title}
          </h2>

          <p className="text-sm font-medium text-[var(--accent-emerald)]">
            Role: {project.role}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-subtle)] pt-4">
          {project.description}
        </p>

        {/* Architectural Highlights */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-cyan)]">
            Architectural &amp; Engineering Highlights
          </h3>
          <ul className="space-y-2 text-xs text-[var(--text-primary)]">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="shrink-0 mt-0.5 p-0.5 rounded-full bg-[var(--accent-emerald)]/15 text-[var(--accent-emerald)]">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Technologies &amp; Architecture
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-[var(--text-primary)] border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Live Outbound Links */}
        {(project.liveUrls || project.liveUrl || project.githubUrl) && (
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
            {project.liveUrls ? (
              project.liveUrls.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live application for ${link.label}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 hover:bg-[var(--accent-cyan)]/25 transition-colors"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))
            ) : project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live site for ${project.title}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 hover:bg-[var(--accent-cyan)]/25 transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code on GitHub for ${project.title}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-[var(--text-muted)] hover:text-white border border-[var(--border-subtle)] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
