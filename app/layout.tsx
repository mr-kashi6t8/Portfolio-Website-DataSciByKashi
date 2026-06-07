import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingContact } from '@/components/ui/FloatingContact';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://datascibykashi.vercel.app'),
  title: 'DataSciByKashi | Data Science, AI & Automation Consulting',
  description:
    'AI, automation, technology, and data science consulting portfolio delivering predictive analytics, machine learning engineering, data engineering, and interactive dashboards for businesses.',
  applicationName: 'DataSciByKashi',
  authors: [{ name: 'M. Kashif Sultan' }],
  creator: 'M. Kashif Sultan',
  icons: '/favicon.png',
  keywords: [
    'Data Science',
    'Machine Learning',
    'Artificial Intelligence',
    'AI',
    'Automation',
    'Technology Consulting',
    'Predictive Analytics',
    'Data Engineering',
    'Business Intelligence',
    'Data Visualization',
    'Streamlit',
    'Python',
    'ML Engineer',
    'AI Consultant',
    'Kashif Sultan',
  ],
  alternates: {
    canonical: 'https://datascibykashi.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://datascibykashi.vercel.app',
    siteName: 'DataSciByKashi',
    title: 'DataSciByKashi | Data Science, AI & Automation Consulting',
    description:
      'AI, automation, technology, and data science consulting portfolio delivering predictive analytics, machine learning engineering, data engineering, and interactive dashboards for businesses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DataSciByKashi | Data Science & AI Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataSciByKashi | Data Science, AI & Automation Consulting',
    description:
      'AI, automation, and machine learning consulting portfolio delivering predictive analytics, data engineering, and interactive dashboards for businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tvf3CoI7JuDuugYc8jxsZTHVdFUpFip6gt25iOUbZ7E',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <FloatingContact />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://datascibykashi.vercel.app/#website',
                  url: 'https://datascibykashi.vercel.app',
                  name: 'DataSciByKashi',
                  description:
                    'AI, automation, technology, and data science consulting portfolio delivering predictive analytics, machine learning engineering, data engineering, and interactive dashboards for businesses.',
                  publisher: {
                    '@type': 'Person',
                    name: 'M. Kashif Sultan',
                  },
                },
                {
                  '@type': 'Person',
                  '@id': 'https://datascibykashi.vercel.app/#person',
                  name: 'M. Kashif Sultan',
                  jobTitle: 'Data Scientist & Machine Learning Engineer',
                  url: 'https://datascibykashi.vercel.app',
                  sameAs: [
                    'https://www.tiktok.com/@datascibykashi?is_from_webapp=1&sender_device=pc',
                    'https://github.com/mr-kashi6t8',
                    'https://linkedin.com/in/kashif-sultan-0a5989294'
                  ],
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://datascibykashi.vercel.app/#localbusiness',
                  name: 'DataSciByKashi',
                  description: 'AI, machine learning, automation, and data science consulting services for businesses worldwide.',
                  url: 'https://datascibykashi.vercel.app',
                  telephone: '+92-304-7992833',
                  email: 'mk695870@gmail.com',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Harappa, Sahiwal',
                    addressCountry: 'PK'
                  },
                  sameAs: [
                    'https://www.tiktok.com/@datascibykashi?is_from_webapp=1&sender_device=pc',
                    'https://github.com/mr-kashi6t8',
                    'https://linkedin.com/in/kashif-sultan-0a5989294'
                  ],
                  openingHours: ['Mo-Fr 09:00-18:00'],
                  priceRange: '$$',
                  serviceArea: {
                    '@type': 'Country',
                    name: 'Worldwide'
                  },
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '5',
                    reviewCount: '2'
                  }
                }
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
