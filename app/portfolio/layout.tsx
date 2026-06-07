import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Portfolio | Artificial Intelligence, Data Science & Automation Projects',
  description:
    'Browse real-world AI, machine learning, automation, and data science projects built for business impact, predictive analytics, and decision-making.',
  keywords: [
    'AI portfolio',
    'data science projects',
    'machine learning projects',
    'automation solutions',
    'predictive analytics portfolio',
    'business intelligence examples',
  ],
  openGraph: {
    title: 'Portfolio | AI, Data Science & Automation Projects',
    description:
      'A portfolio of AI, automation, and data science work built to solve real business challenges and deliver measurable results.',
    type: 'website',
    url: 'https://datascibykashi.vercel.app/portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Data Science Portfolio',
      },
    ],
  },
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
