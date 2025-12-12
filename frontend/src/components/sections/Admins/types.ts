// dashboard

export type MenuSection =
  | "hero"
  | "aboutme"
  | "skills"
  | "experience"
  | "education"
  | "projects";

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaText: string;
}

export interface AboutMeData {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  profileImage: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  gpa?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured: boolean;
}
