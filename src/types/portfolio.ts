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

export interface ProjectLiveLink {
  label: string;
  url: string;
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
  liveUrls?: ProjectLiveLink[];
  githubUrl?: string;
}

export type SkillCategory =
  | "Frontend Architecture"
  | "Backend & Architecture"
  | "DevOps & Cloud"
  | "Agentic Engineering"
  | "Leadership & Delivery";

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
}

export interface PortfolioData {
  profile: ProfileInfo;
  education: EducationInfo;
  metrics: ImpactMetric[];
  projects: FeaturedProject[];
  skills: SkillItem[];
}
