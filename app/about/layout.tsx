import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About Me | AI, Data Science & Automation Consultant',
  description:
    'M. Kashif Sultan is a data science, AI, and automation consultant helping businesses build predictive analytics, machine learning, and dashboard solutions.',
  keywords: [
    'AI consultant',
    'data science consultant',
    'automation consultant',
    'machine learning expert',
    'business analytics',
    'technology consultant',
  ],
  openGraph: {
    title: 'About Me | AI, Data Science & Automation Consultant',
    description:
      'Learn more about M. Kashif Sultan and his AI, automation, and data science consulting services for business growth.',
    type: 'website',
    url: 'https://datascibykashi.vercel.app/about',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About DataSciByKashi',
      },
    ],
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
