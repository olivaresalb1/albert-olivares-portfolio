"use client";

import React from "react";
import { ExternalLink, Github, Briefcase, Calendar, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { PhysicsElement } from "@/components/PhysicsElement";

export const ProjectShowcase: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section aria-label="Featured Projects & Experience" className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
          Featured Engineering Experience &amp; Projects
        </h2>
        <span className="text-xs text-[var(--text-muted)] font-medium">
          {projects.length} Engineering Roles
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <PhysicsElement key={project.id} id={`project-${project.id}`}>
            <article className="group relative bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] rounded-3xl p-8 backdrop-blur-md transition-all duration-300 physics-ready shadow-xl flex flex-col justify-between h-full">
              <div className="space-y-4">
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-1.5 font-medium text-[var(--accent-cyan)]">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{project.company}</span>
                    <span className="text-white/20">•</span>
                    <span>{project.role}</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-[var(--text-muted)]">
                    <Calendar className="w-3 h-3" />
                    <span>{project.timeframe}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 pt-2 text-xs text-[var(--text-primary)]">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5 p-0.5 rounded-full bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)]">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="leading-normal">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Stack Tags & External Links */}
              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-[var(--text-muted)] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Link Badges */}
                {(project.liveUrls || project.liveUrl || project.githubUrl) && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {project.liveUrls ? (
                      project.liveUrls.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit live site for ${link.label}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20 hover:bg-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)]/40 transition-colors"
                        >
                          <span>{link.label}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))
                    ) : project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit live site for ${project.title}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20 hover:bg-[var(--accent-cyan)]/20 transition-colors"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : null}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View GitHub repository for ${project.title}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-white transition-colors"
                      >
                        <span>Source Code</span>
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </PhysicsElement>
        ))}
      </div>
    </section>
  );
};
