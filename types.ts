import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'ko' | 'zh' | 'es';

export interface NavItem {
  label: string;
  href: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  fullDescription?: string;
  topics?: string[];
}

export interface Attorney {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  education: { degree: string; school: string }[];
  admissions: string[];
  quote: string;
  highlights: { title: string; text: string }[];
  closing: string;
  personalNote: string;
}

export interface CaseResult {
  amount: string;
  type: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}