"use client";

import React from "react";
import { TrendingDown, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { PhysicsElement } from "@/components/PhysicsElement";

const metricIconMap: Record<string, React.ReactNode> = {
  latency: <TrendingDown className="w-5 h-5 text-[var(--accent-cyan)]" />,
  conversion: <TrendingUp className="w-5 h-5 text-[var(--accent-emerald)]" />,
  leadership: <Users className="w-5 h-5 text-purple-400" />,
  quality: <CheckCircle2 className="w-5 h-5 text-amber-400" />,
};

export const ImpactMetrics: React.FC = () => {
  const { metrics } = PORTFOLIO_DATA;

  return (
    <section aria-label="Career Impact Metrics" className="w-full space-y-4">
      <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
        Career Impact Metrics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <PhysicsElement key={metric.id} id={`metric-${metric.id}`}>
            <div className="group relative bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] rounded-2xl p-6 backdrop-blur-md transition-all duration-300 physics-ready shadow-lg flex flex-col justify-between hover:translate-y-[-2px] h-[215px]">
              {/* 1. Header Row (Label + Icon) */}
              <div className="flex items-center justify-between h-8">
                <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                  {metric.label}
                </span>
                <div className="p-2 rounded-xl bg-white/5 border border-[var(--border-subtle)] group-hover:border-[var(--border-hover)] transition-colors shrink-0">
                  {metricIconMap[metric.id] ?? (
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-cyan)]" />
                  )}
                </div>
              </div>

              {/* 2. Metric Value (Big Number) */}
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors whitespace-nowrap my-auto">
                {metric.value}
              </div>

              {/* 3. Divider Line & Description Footer */}
              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                  {metric.description}
                </p>
              </div>
            </div>
          </PhysicsElement>
        ))}
      </div>
    </section>
  );
};
