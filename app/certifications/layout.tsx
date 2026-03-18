import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications & Credentials - Data Science Professional',
  description: 'Explore M. Kashif Sultan\'s professional certifications in Data Science, Machine Learning, and AI from top platforms like Coursera and CertNexus. Verified credentials showcasing expertise.',
};

// Add structured data for certifications
function CertificationsSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'M. Kashif Sultan',
    jobTitle: 'Data Scientist & Machine Learning Engineer',
    url: 'https://datascibykashi.vercel.app',
    image: 'https://datascibykashi.vercel.app/images/WhatsApp Image 2026-02-10 at 11.42.51 PM.jpeg',
    sameAs: [
      'https://github.com/mr-kashi6t8',
      'https://linkedin.com/in/kashif-sultan-0a5989294',
    ],
    knowsAbout: [
      'Data Science',
      'Machine Learning',
      'Python',
      'Data Analysis',
      'Predictive Analytics',
      'AI',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Data Science Professional Certificate',
        issuedBy: {
          '@type': 'Organization',
          name: 'Coursera',
        },
        credentialCategory: 'Data Science',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Machine Learning Specialization',
        issuedBy: {
          '@type': 'Organization',
          name: 'Coursera',
        },
        credentialCategory: 'Machine Learning',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function CertificationsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <CertificationsSchema />
      {children}
    </>
  );
}
