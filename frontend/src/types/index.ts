export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface SkillProps {
  name: string;
  icon: string;
  // category: 'Programming Language' | 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

export interface Skill {
  'Programming Languages': SkillProps[],
  'Frontend': SkillProps[],
  'Backend': SkillProps[],
  'Database': SkillProps[],
  'Tools': SkillProps[],
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  location?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
}