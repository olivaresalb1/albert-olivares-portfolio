import { PortfolioData } from "@/types/portfolio";

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: "Albert Olivares",
    title: "Senior Software Engineer & Frontend / Full Stack Architect",
    location: "Oceanside / San Diego, CA",
    summary:
      "Senior Software Engineer with 15 years of software engineering experience specializing in React, TypeScript, Node.js, and distributed web architectures. Proven success leading engineering teams, modernizing enterprise platforms, and bridging intuitive frontend UIs with scalable backend microservices and relational data pipelines.",
    contact: {
      email: "olivaresalb1@gmail.com",
      phone: "619-777-6784",
      linkedIn: "https://linkedin.com/in/albertolivares",
      gitHub: "https://github.com/albertolivares",
    },
  },
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "San Diego State University",
    location: "San Diego, CA",
  },
  metrics: [
    {
      id: "latency",
      value: "-40%",
      label: "Client Latency",
      description:
        "Cut load times via state tuning, code splitting, and Core Web Vitals optimization",
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
        "Led frontend/full-stack initiatives, architecture RFCs, and CI/CD quality standards",
    },
    {
      id: "quality",
      value: "80%+",
      label: "Automated Coverage",
      description:
        "Established test suites across Jest, React Testing Library, and Cypress",
    },
  ],
  projects: [
    {
      id: "ascent-portal",
      title: "Consumer Application & Financial Servicing Platform",
      company: "Ascent Funding",
      role: "Lead Full Stack / Frontend Engineer",
      timeframe: "2021 – 2024",
      description:
        "Spearheaded architectural modernization of core customer-facing financial platforms into a decoupled React and TypeScript foundation backed by scalable Node.js services.",
      highlights: [
        "Engineered client state systems using Redux and Jotai, slashing platform latency by 40%.",
        "Designed RESTful APIs and PostgreSQL data schema optimizations, driving a 50% lift in conversion rates.",
        "Directed engineering execution for an 8-developer team, conducting architecture reviews and mentoring in Claude Code and Cursor.",
        "Automated deployment workflows using Docker, GitHub Actions, and AWS, achieving 80%+ test coverage.",
      ],
      tags: ["React", "TypeScript", "Node.js", "Redux", "Jotai", "PostgreSQL", "Docker", "AWS", "Jest", "Cypress"],
      liveUrls: [
        {
          label: "College Portal",
          url: "https://college.ascentfunding.com/application",
        },
        {
          label: "Bootcamp Portal",
          url: "https://bootcamp.ascentfunding.com/application",
        },
      ],
    },
    {
      id: "ljg-brand-platforms",
      title: "Brand Platforms & Dynamic Web Applications",
      company: "LJG Partners",
      role: "Full Stack Web Developer",
      timeframe: "2011 – 2020",
      description:
        "Engineered responsive, interactive web applications, custom API endpoints, and database-backed brand platforms for diverse enterprise client portfolios.",
      highlights: [
        "Delivered high-craft interactive brand experiences, custom WebGL/CSS animations, and CMS solutions.",
        "Collaborated with creative directors and enterprise clients to translate complex concepts into performant production code.",
        "Optimized asset pipelines, responsive layouts, and cross-browser execution.",
      ],
      tags: ["JavaScript", "TypeScript", "PHP", "MySQL", "HTML5 Canvas", "CSS3 Animation", "REST APIs"],
      liveUrls: [
        { label: "Park Place Irvine", url: "http://parkplaceirvine.com/" },
        { label: "One Culver", url: "http://oneculver.com/" },
        { label: "Foundry 31", url: "http://foundry31.com/" },
        { label: "South Park Center", url: "http://southparkcenter.com/" },
        { label: "Esplanade Phoenix", url: "http://esplanadephx.com/" },
        { label: "Lerner", url: "http://lerner.com/" },
      ],
    },
    {
      id: "celgene-vmrf-portal",
      title: "Distributed Enterprise & Clinical Intake Systems",
      company: "Celgene Corporation / VMRF",
      role: "Java Programmer & Web Systems Developer",
      timeframe: "2009 – 2011",
      description:
        "Programmed enterprise request management systems and clinical data intake portals adhering to strict data compliance and security standards.",
      highlights: [
        "Architected internal web portals, data collection tools, and reporting dashboards.",
        "Utilized Java, Spring/Hibernate, JavaScript, and relational databases (MySQL/PostgreSQL).",
        "Ensured strict data integrity, audit trails, and healthcare security standards.",
      ],
      tags: ["Java", "Spring", "Hibernate", "JavaScript", "PostgreSQL", "MySQL"],
    },
  ],
  skills: [
    // Frontend Architecture
    { id: "react", name: "React", category: "Frontend Architecture" },
    { id: "nextjs", name: "Next.js", category: "Frontend Architecture" },
    { id: "typescript", name: "TypeScript", category: "Frontend Architecture" },
    { id: "javascript", name: "JavaScript (ES6+)", category: "Frontend Architecture" },
    { id: "redux", name: "Redux", category: "Frontend Architecture" },
    { id: "jotai", name: "Jotai", category: "Frontend Architecture" },
    { id: "tailwind", name: "Tailwind CSS", category: "Frontend Architecture" },
    { id: "scss", name: "SCSS", category: "Frontend Architecture" },
    { id: "cwv", name: "Core Web Vitals", category: "Frontend Architecture" },
    { id: "wcag", name: "WCAG Accessibility", category: "Frontend Architecture" },

    // Backend & Architecture
    { id: "nodejs", name: "Node.js", category: "Backend & Architecture" },
    { id: "express", name: "Express", category: "Backend & Architecture" },
    { id: "rest-apis", name: "RESTful APIs", category: "Backend & Architecture" },
    { id: "graphql", name: "GraphQL", category: "Backend & Architecture" },
    { id: "postgresql", name: "PostgreSQL", category: "Backend & Architecture" },
    { id: "mysql", name: "MySQL", category: "Backend & Architecture" },
    { id: "redis", name: "Redis Caching", category: "Backend & Architecture" },
    { id: "java", name: "Java / Spring", category: "Backend & Architecture" },
    { id: "golang", name: "Golang", category: "Backend & Architecture" },
    { id: "php", name: "PHP", category: "Backend & Architecture" },

    // DevOps & Cloud
    { id: "docker", name: "Docker", category: "DevOps & Cloud" },
    { id: "aws", name: "AWS Services", category: "DevOps & Cloud" },
    { id: "github-actions", name: "GitHub Actions CI/CD", category: "DevOps & Cloud" },
    { id: "jest", name: "Jest", category: "DevOps & Cloud" },
    { id: "cypress", name: "Cypress", category: "DevOps & Cloud" },
    { id: "playwright", name: "Playwright", category: "DevOps & Cloud" },
    { id: "observability", name: "Observability (Datadog/PostHog)", category: "DevOps & Cloud" },

    // Agentic Engineering
    { id: "claude-code", name: "Claude Code", category: "Agentic Engineering" },
    { id: "cursor", name: "Cursor", category: "Agentic Engineering" },
    { id: "copilot", name: "GitHub Copilot", category: "Agentic Engineering" },
    { id: "ai-prototyping", name: "AI-Assisted Prototyping", category: "Agentic Engineering" },

    // Leadership & Delivery
    { id: "tech-leadership", name: "Technical Mentorship", category: "Leadership & Delivery" },
    { id: "rfcs", name: "Architecture RFCs", category: "Leadership & Delivery" },
    { id: "agile", name: "Agile / Scrum Delivery", category: "Leadership & Delivery" },
  ],
};
