import { PortfolioData } from "@/types/portfolio";

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: "Albert Olivares",
    title: "Senior Software Engineer",
    location: "",
    summary:
      "Senior Software Engineer with 15 years of experience building performant, user-centric web applications, scalable full-stack systems, and leading frontend architecture initiatives. Proven technical leader who established organization-wide standards, guided engineers through career progression, and partnered with product teams to drive 50% conversion lifts and 40% performance gains.",
    contact: {
      email: "olivaresalb1@gmail.com",
      linkedIn: "https://linkedin.com/in/albertolivares",
      gitHub: "https://github.com/olivaresalb1",
    },
  },
  education: {
    degree: "Bachelor of Science in Computer Engineering",
    date: "May 2010",
    institution: "San Diego State University",
    location: "San Diego, CA",
  },
  metrics: [
    {
      id: "conversion",
      value: "+50%",
      label: "User Conversion",
      description:
        "Driven through funnel optimization, friction removal, and telemetry-backed UX improvements",
    },
    {
      id: "latency",
      value: "-40%",
      label: "Performance Lift",
      description:
        "Cut client load times and reduced JS bundle sizes by 30% via state tuning & code splitting",
    },
    {
      id: "leadership",
      value: "8 Engineers",
      label: "Team Leadership",
      description:
        "Headed frontend initiatives, set organization-wide coding standards, and mentored engineers",
    },
    {
      id: "quality",
      value: "80%+",
      label: "Automated Coverage",
      description:
        "Engineered testing frameworks across Jest, Cypress, and shift-left Git hook security gates",
    },
  ],
  projects: [
    {
      id: "ascent-funding",
      title: "Full-Stack Financial Application Platform",
      company: "Ascent Funding",
      industry: "FinTech",
      role: "Senior Software Engineer (Lead Frontend)",
      timeframe: "May 2018 – Sep 2025",
      description:
        "Spearheaded migration of legacy monolithic PHP/jQuery into a decoupled React/TypeScript architecture backed by Laravel, PHP, Golang, and Node.js microservices.",
      highlights: [
        "Architected state management systems leveraging Redux for predictable global enterprise data flows and Jotai for atomic, component-level state orchestration; resolved critical rendering bottlenecks and optimized high-traffic financial pipelines, slashing client-side load times by 40% and boosting user conversion by 50%.",
        "Deployed behavioral telemetry (GTM, PostHog, Clarity), cutting JS bundle size by 30%, load times by 40%, and boosting conversion by 50%.",
        "Headed frontend initiatives for an 8-developer team, authored reusable UI component library across 6+ web apps (-40% handoff time).",
        "Formulated automated testing framework (Jest, Cypress, RTL) achieving 80% coverage; enforced SOC2 compliance and shift-left Git hook security gates.",
        "Managed weekly production release lifecycle and branch promotion workflows across multi-tier environments (develop, staging, production).",
      ],
      tags: ["React", "TypeScript", "Node.js", "PHP", "Laravel", "Golang", "Redux", "Jotai", "PostgreSQL", "Docker", "AWS", "Jest", "Cypress"],
      liveUrls: [
        {
          label: "College Application",
          url: "https://college.ascentfunding.com/application",
        },
        {
          label: "Bootcamp Application",
          url: "https://bootcamp.ascentfunding.com/application",
        },
      ],
    },
    {
      id: "ljg-partners",
      title: "Client Web Architecture & Interactive VR Experience",
      company: "LJG Partners",
      industry: "Marketing",
      role: "Web Developer",
      timeframe: "Sep 2015 – Feb 2018",
      description:
        "Delivered responsive web applications, interactive WebGL 3D VR viewers, and internal social platforms for 10+ client websites.",
      highlights: [
        "Architected and launched 10+ web applications using Laravel, React, Ruby on Rails, and PostgreSQL/MySQL, maintaining a 95%+ client satisfaction rating.",
        "Engineered immersive VR apartment viewer using WebGL and React, creating 3D interactive experiences that boosted acquisition & retention by 20%.",
        "Architected internal social network for a prominent real estate firm featuring media sharing, comment systems, and employee nominations.",
      ],
      tags: ["React", "WebGL", "Laravel", "PHP", "Ruby on Rails", "PostgreSQL", "MySQL", "Swagger REST APIs"],
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
      id: "fireking-international",
      title: "IoT Control Panel & Smart Safe Interface",
      company: "FireKing International",
      industry: "Securities",
      role: "Web Developer",
      timeframe: "May 2014 – Jul 2015",
      description:
        "Developed WiFi-enabled control panel interface for smart cash safe management.",
      highlights: [
        "Engineered WiFi-enabled control panel interface for smart cash safe hardware monitoring and remote control.",
        "Collaborated directly with hardware engineering team to deploy embedded software on custom hardware platforms.",
      ],
      tags: ["IoT", "Embedded UI", "WiFi Interface", "Hardware Integration", "JavaScript"],
    },
    {
      id: "vmrf-healthcare",
      title: "Full-Stack Research Portal & Clinical Lab Systems",
      company: "Veterans Medical Research Foundation",
      industry: "Healthcare",
      role: "Programmer Analyst",
      timeframe: "Mar 2011 – May 2014",
      description:
        "Led end-to-end modernization of primary research portal supporting 10+ active clinical PTSD studies.",
      highlights: [
        "Modernized primary research portal from legacy PHP to Laravel with a responsive Bootstrap UI.",
        "Engineered specialized data entry systems and lab record tools, cutting sample processing errors by 30% and accelerating analysis workflows by 50%.",
      ],
      tags: ["Laravel", "PHP", "Bootstrap", "MySQL", "Clinical Data", "System Modernization"],
    },
    {
      id: "celgene-corporation",
      title: "Enterprise Automated Compound Request System",
      company: "Celgene Corporation",
      industry: "BioTech",
      role: "Java Programmer",
      timeframe: "Sep 2010 – Feb 2011",
      description:
        "Built automated compound request system supporting research team efficiency across 50+ active projects.",
      highlights: [
        "Engineered automated compound request management system using Java/J2EE, Hibernate, and MySQL.",
        "Streamlined laboratory workflows and improved research team efficiency across 50+ active projects.",
      ],
      tags: ["Java", "J2EE", "Hibernate", "MySQL", "Enterprise Systems"],
    },
  ],
  skills: [
    // Frontend & UI
    { id: "react", name: "React", category: "Frontend & UI" },
    { id: "typescript", name: "TypeScript", category: "Frontend & UI" },
    { id: "javascript", name: "JavaScript (ES6+)", category: "Frontend & UI" },
    { id: "redux", name: "Redux", category: "Frontend & UI" },
    { id: "jotai", name: "Jotai (Atomic State)", category: "Frontend & UI" },
    { id: "react-native", name: "React Native", category: "Frontend & UI" },
    { id: "webgl", name: "WebGL", category: "Frontend & UI" },
    { id: "tailwind", name: "Tailwind CSS", category: "Frontend & UI" },
    { id: "sass", name: "SASS / SCSS", category: "Frontend & UI" },
    { id: "bootstrap", name: "Bootstrap", category: "Frontend & UI" },
    { id: "design-systems", name: "Design Systems & Component Libraries", category: "Frontend & UI" },
    { id: "cwv", name: "Core Web Vitals", category: "Frontend & UI" },
    { id: "wcag", name: "Accessibility (WCAG)", category: "Frontend & UI" },

    // Backend & Data
    { id: "nodejs", name: "Node.js", category: "Backend & Data" },
    { id: "golang", name: "Golang", category: "Backend & Data" },
    { id: "php", name: "PHP", category: "Backend & Data" },
    { id: "laravel", name: "Laravel", category: "Backend & Data" },
    { id: "rails", name: "Ruby on Rails", category: "Backend & Data" },
    { id: "rest-apis", name: "RESTful API Development", category: "Backend & Data" },
    { id: "distributed-systems", name: "Distributed Systems", category: "Backend & Data" },
    { id: "postgresql", name: "PostgreSQL", category: "Backend & Data" },
    { id: "mysql", name: "MySQL", category: "Backend & Data" },
    { id: "orm", name: "ORM (Hibernate/Eloquent)", category: "Backend & Data" },
    { id: "redis", name: "Redis Caching", category: "Backend & Data" },

    // Agentic Engineering
    { id: "claude-code", name: "Anthropic Claude / Claude Code", category: "Agentic Engineering" },
    { id: "cursor", name: "Cursor", category: "Agentic Engineering" },
    { id: "codex", name: "Codex", category: "Agentic Engineering" },
    { id: "copilot", name: "GitHub Copilot", category: "Agentic Engineering" },
    { id: "ai-prototyping", name: "AI-Assisted Prototyping", category: "Agentic Engineering" },
    { id: "automated-test-gen", name: "Automated Test Suite Generation", category: "Agentic Engineering" },
    { id: "code-auditing", name: "Context-Aware Code Auditing", category: "Agentic Engineering" },

    // Quality & DevOps
    { id: "testing", name: "Jest / Vitest / RTL / Cypress / Playwright", category: "Quality & DevOps" },
    { id: "ab-testing", name: "A/B Testing & Feature Flags", category: "Quality & DevOps" },
    { id: "aws", name: "AWS", category: "Quality & DevOps" },
    { id: "docker", name: "Docker", category: "Quality & DevOps" },
    { id: "git-hooks", name: "Git Hooks & Security Gates", category: "Quality & DevOps" },
    { id: "github-actions", name: "GitHub Actions CI/CD", category: "Quality & DevOps" },
    { id: "telemetry", name: "Observability (PostHog/GTM/Clarity/Mezmo)", category: "Quality & DevOps" },
    { id: "bundlers", name: "Vite / Webpack", category: "Quality & DevOps" },

    // Leadership & Delivery
    { id: "feature-ownership", name: "End-to-End Feature Ownership", category: "Leadership & Delivery" },
    { id: "engineering-leadership", name: "Engineering Leadership", category: "Leadership & Delivery" },
    { id: "mentorship", name: "Technical Mentorship", category: "Leadership & Delivery" },
    { id: "frontend-arch", name: "Frontend Architecture", category: "Leadership & Delivery" },
    { id: "agile", name: "Agile / Scrum Delivery", category: "Leadership & Delivery" },
    { id: "ui-ux-strategy", name: "UI/UX Strategy & Handoff", category: "Leadership & Delivery" },
  ],
};
