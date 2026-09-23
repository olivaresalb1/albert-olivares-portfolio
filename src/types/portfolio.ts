export interface ContactLinks {
  email: string;
  phone: string;
  linkedIn: string;
  gitHub: string;
  resumePath?: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  location: string;
  summary: string;
  contact: ContactLinks;
}

export interface ImpactMetric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  company: string;
  role: string;
  timeframe: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export type SkillCategory =
  | "Frontend"
  | "Backend & Architecture"
  | "DevOps & Cloud"
  | "AI & Tooling";

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
}

export interface PortfolioData {
  profile: ProfileInfo;
  metrics: ImpactMetric[];
  projects: FeaturedProject[];
  skills: SkillItem[];
}
