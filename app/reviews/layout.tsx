import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials - Data Science Services',
  description: 'Read verified client reviews and testimonials about M. Kashif Sultan\'s Data Science, Machine Learning, and AI consulting services. See real feedback from satisfied clients.',
  keywords: ['client reviews', 'testimonials', 'data science services', 'machine learning consulting', 'verified reviews'],
  openGraph: {
    title: 'Client Reviews - DataSciByKashi',
    description: 'Verified client testimonials and reviews for Data Science and Machine Learning services.',
    type: 'website',
    url: 'https://datascibykashi.vercel.app/reviews',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Client Reviews and Testimonials',
      },
    ],
  },
};

// Add structured data for reviews
function ReviewsSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DataSciByKashi',
    description: 'Data Science and Machine Learning consulting services',
    url: 'https://datascibykashi.vercel.app',
    image: 'https://datascibykashi.vercel.app/images/WhatsApp Image 2026-02-10 at 11.42.51 PM.jpeg',
    telephone: '+92-304-7992833',
    email: 'mk695870@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Harappa',
      addressCountry: 'PK',
    },
    sameAs: [
      'https://github.com/mr-kashi6t8',
      'https://linkedin.com/in/kashif-sultan-0a5989294',
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '2',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Ali Hamza',
        },
        datePublished: '2025-01-10',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        reviewBody:
          'Excellent service! The data analysis project was completed on time and exceeded our expectations.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Alisha Nadeem',
        },
        datePublished: '2026-03-18',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        reviewBody:
          'Working with Kashif was an excellent experience. He demonstrated strong expertise in data science, from data cleaning and analysis to building accurate machine learning models.',
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

export default function ReviewsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ReviewsSchema />
      {children}
    </>
  );
}
