export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  profileImage: string;
  cvName: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  current: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  font: string;
  headingFont: string;
  style: string;
}

export interface SectionToggle {
  about: boolean;
  skills: boolean;
  projects: boolean;
  experience: boolean;
  education: boolean;
  services: boolean;
  testimonials: boolean;
  contact: boolean;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  services: Service[];
  contact: ContactInfo;
  socialLinks: SocialLink[];
  theme: ThemeConfig;
  style: string;
  sections: SectionToggle;
}

export type StepName = "personal" | "skills-services" | "projects" | "experience-education" | "contact" | "theme";

export const STEP_ORDER: StepName[] = [
  "personal",
  "skills-services",
  "projects",
  "experience-education",
  "contact",
  "theme",
];

export const STEP_LABELS: Record<StepName, string> = {
  personal: "Personal Info",
  "skills-services": "Skills & Services",
  projects: "Projects",
  "experience-education": "Experience & Education",
  contact: "Contact & Social",
  theme: "Theme & Style",
};
