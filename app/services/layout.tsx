import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Data Science, AI & Automation Services',
  description:
    'Professional AI, machine learning, automation, and data science services for businesses, startups, and technology teams. Build predictive models, dashboards, data engineering solutions, and analytics systems.',
  keywords: [
    'Data Science Services',
    'AI Services',
    'Automation Services',
    'Machine Learning Services',
    'Data Engineering',
    'Predictive Modeling',
    'Business Intelligence',
    'Technology Consulting',
  ],
  openGraph: {
    title: 'Data Science, AI & Automation Services',
    description:
      'Professional AI, machine learning, automation, and data science services for businesses, startups, and technology teams.',
    type: 'website',
    url: 'https://datascibykashi.vercel.app/services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Data Science Services',
      },
    ],
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What services do you offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'I offer AI consulting, machine learning model development, automation engineering, data engineering, predictive analytics, and interactive dashboard development.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I hire you for a project?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use the contact form on the website or email mk695870@gmail.com to schedule a free consultation. We discuss goals, data, timeline, and deliverables.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you provide deployment and production support?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes — I provide end-to-end deployment, monitoring, and maintenance for ML models and analytics systems.'
                }
              },
              {
                '@type': 'Question',
                name: 'Which industries do you work with?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'I have experience with finance, healthcare, e-commerce, IoT, energy, and logistics, and I work with startups through enterprise teams.'
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
