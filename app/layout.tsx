import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingContact } from '@/components/ui/FloatingContact';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'M. Kashif Sultan | Data Scientist & ML Engineer',
  description: 'Professional Data Science portfolio showcasing machine learning projects, interactive dashboards, and predictive analytics services. Transforming data into actionable insights.',
  keywords: ['Data Science', 'Machine Learning', 'Python', 'Streamlit', 'Data Analysis', 'Kashif Sultan'],
  authors: [{ name: 'M. Kashif Sultan' }],
  creator: 'M. Kashif Sultan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Kashif Sultan Portfolio',
    title: 'M. Kashif Sultan | Data Scientist & ML Engineer',
    description: 'Transforming data into actionable insights through AI, Machine Learning, and Interactive Dashboards.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kashif Sultan - Data Scientist Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M. Kashif Sultan | Data Scientist & ML Engineer',
    description: 'Transforming data into actionable insights through AI, Machine Learning, and Interactive Dashboards.',
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
      <head>
        <meta name="google-site-verification" content="tvf3CoI7JuDuugYc8jxsZTHVdFUpFip6gt25iOUbZ7E" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <FloatingContact />
        </div>
      </body>
    </html>
  );
}
