import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Blog | Data Science, AI & Automation Insights',
  description:
    'Read practical articles, tutorials, and business-focused guides on data science, machine learning, AI, automation, and analytics.',
  keywords: [
    'data science blog',
    'AI blog',
    'machine learning tutorials',
    'automation insights',
    'predictive analytics articles',
  ],
  openGraph: {
    title: 'Blog | Data Science, AI & Automation Insights',
    description:
      'Read practical articles, tutorials, and business-focused guides on data science, machine learning, AI, automation, and analytics.',
    type: 'website',
    url: 'https://datascibykashi.vercel.app/blog',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Data Science Blog',
      },
    ],
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
