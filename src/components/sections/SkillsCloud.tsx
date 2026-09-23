import React from "react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { SkillCategory } from "@/types/portfolio";

const categories: SkillCategory[] = [
  "Frontend",
  "Backend & Architecture",
  "DevOps & Cloud",
  "AI & Tooling",
];

export const SkillsCloud: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section aria-label="Technical Skills & Architecture" className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
          Technical Skills &amp; Stack
        </h2>
        <span className="text-xs text-[var(--text-muted)] font-medium">
          {skills.length} Competencies
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const categorySkills = skills.filter(
            (skill) => skill.category === category
          );

          if (categorySkills.length === 0) return null;

          return (
            <div
              key={category}
              className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] rounded-3xl p-6 backdrop-blur-md transition-all duration-300 physics-ready shadow-lg space-y-4"
            >
              <h3 className="text-sm font-semibold tracking-wider text-[var(--accent-cyan)] uppercase">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="physics-ready inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-800/60 text-[var(--text-primary)] border border-white/10 hover:border-[var(--accent-cyan)]/40 hover:bg-gray-800/90 transition-all cursor-default select-none shadow-sm"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
