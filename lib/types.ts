// TypeScript interfaces and types for the Data Science Portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Machine Learning' | 'Dashboard' | 'Analytics' | 'Database' | 'Predictive Modeling';
  image: string;
  tags: string[];
  tools: string[];
  outcome: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  priceDetails: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  featured?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Machine Learning' | 'Data Analysis' | 'Tools & Frameworks' | 'Web Development' | 'Other';
  level: number; // 1-100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  semester?: string;
  startDate: string;
  endDate?: string;
  description?: string;
  achievements?: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  date: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface DashboardEmbed {
  id: string;
  title: string;
  description: string;
  url?: string;
  placeholder?: boolean;
  category: string;
  features: string[];
  technologies: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  ogImage: string;
  twitterHandle?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Stats {
  label: string;
  value: string | number;
  suffix?: string;
  description?: string;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormResponse extends ApiResponse {
  data?: {
    messageId: string;
  };
}

// Animation variants type for Framer Motion
export type AnimationVariant = {
  hidden: any;
  visible: any;
  exit?: any;
};
