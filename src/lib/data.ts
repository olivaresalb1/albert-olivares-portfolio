import { PortfolioData } from "@/types/portfolio";

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: "Albert Olivares",
    title: "Senior Software Engineer & Frontend Architect",
    location: "Oceanside / San Diego, CA",
    summary:
      "15 years of software engineering experience specializing in React, TypeScript, and high-performance web systems. Proven record leading engineering initiatives, slashing latency by 40%, and building production-grade full-stack architectures.",
    contact: {
      email: "olivaresalb1@gmail.com",
      phone: "619-777-6784",
      linkedIn: "https://linkedin.com/in/albertolivares",
      gitHub: "https://github.com/albertolivares",
    },
  },
  metrics: [
    {
      id: "latency",
      value: "-40%",
      label: "Client Latency",
      description:
        "Cut page load times via client state and Core Web Vitals optimization",
    },
    {
      id: "conversion",
      value: "+50%",
      label: "Conversion Lift",
      description:
        "Optimized onboarding and application flows across critical consumer journeys",
    },
    {
      id: "leadership",
      value: "8 Engineers",
      label: "Team Leadership",
      description:
        "Led frontend initiatives, technical RFCs, and CI/CD code quality standards",
    },
    {
      id: "quality",
      value: "80%+",
      label: "Automated Coverage",
      description:
        "Established test suites across Jest, Cypress, and React Testing Library",
    },
  ],
  projects: [
    {
      id: "ascent-portal",
      title: "Consumer Application & Servicing Portal",
      company: "Ascent Funding",
      role: "Lead Frontend Engineer",
      timeframe: "Recent",
      description:
        "Decoupled React/TypeScript architecture, Redux/Jotai state tuning, and real-time validation.",
      highlights: [
        "Architected scalable micro-frontend architecture for multi-step loan applications.",
        "Slashed client latency by 40% through state management tuning and dynamic code splitting.",
        "Implemented real-time form validation and robust automated test suites.",
      ],
      tags: ["React", "TypeScript", "Redux", "Jotai", "Next.js", "Tailwind CSS"],
    },
    {
      id: "fafsa-engine",
      title: "FAFSA Application Engine",
      company: "Open Source / Independent",
      role: "Architect",
      timeframe: "Recent",
      description:
        "Multi-step form architecture built with React 19, demonstrating complex conditional logic and accessibility.",
      highlights: [
        "Engineered complex conditional branching engine for financial aid data collection.",
        "Achieved 100% WCAG 2.1 AA accessibility compliance and full keyboard navigation.",
        "Optimized render cycles for fast step-by-step form execution.",
      ],
      tags: ["React 19", "TypeScript", "Tailwind CSS", "A11y", "Jest"],
    },
    {
      id: "ljg-brand-platforms",
      title: "Brand Platforms & Interactive Applications",
      company: "LJG Partners",
      role: "Software Developer",
      timeframe: "Prior Experience",
      description:
        "Performant web applications focusing on typography, animation craft, and responsive execution.",
      highlights: [
        "Delivered high-craft interactive brand experiences and custom WebGL/CSS animations.",
        "Collaborated with design leads to craft fluid micro-interactions and pixel-perfect UIs.",
        "Optimized asset pipelines and bundle sizes for fast mobile execution.",
      ],
      tags: ["JavaScript", "TypeScript", "CSS Architecture", "Animation", "REST APIs"],
    },
  ],
  skills: [
    { id: "react", name: "React", category: "Frontend" },
    { id: "typescript", name: "TypeScript", category: "Frontend" },
    { id: "nextjs", name: "Next.js", category: "Frontend" },
    { id: "tailwind", name: "Tailwind CSS", category: "Frontend" },
    { id: "redux", name: "Redux", category: "Frontend" },
    { id: "jotai", name: "Jotai", category: "Frontend" },
    { id: "cwv", name: "Core Web Vitals", category: "Frontend" },

    { id: "nodejs", name: "Node.js", category: "Backend & Architecture" },
    { id: "postgresql", name: "PostgreSQL", category: "Backend & Architecture" },
    { id: "rest-apis", name: "REST APIs", category: "Backend & Architecture" },
    { id: "graphql", name: "GraphQL", category: "Backend & Architecture" },

    { id: "docker", name: "Docker", category: "DevOps & Cloud" },
    { id: "aws", name: "AWS", category: "DevOps & Cloud" },
    { id: "jest", name: "Jest", category: "DevOps & Cloud" },
    { id: "cypress", name: "Cypress", category: "DevOps & Cloud" },

    { id: "claude-code", name: "Claude Code", category: "AI & Tooling" },
    { id: "cursor", name: "Cursor", category: "AI & Tooling" },
  ],
};
