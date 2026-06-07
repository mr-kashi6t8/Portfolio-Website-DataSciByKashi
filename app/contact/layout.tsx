import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact | Hire a Data Science, AI & Automation Expert',
  description:
    'Contact M. Kashif Sultan for data science, AI, automation, and machine learning projects. Schedule a consultation and start building predictive analytics and business intelligence solutions.',
  keywords: [
    'contact AI consultant',
    'hire data scientist',
    'machine learning consultant',
    'automation expert',
    'data science contact',
    'business analytics consultant',
  ],
  openGraph: {
    title: 'Contact | AI & Data Science Consulting',
    description:
      'Get in touch with a data science, AI, automation, and machine learning expert to start your next project.',
    type: 'website',
    url: 'https://datascibykashi.vercel.app/contact',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact DataSciByKashi',
      },
    ],
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
