import { ClientReview } from '@/lib/types';

// Fallback reviews if API fails
const FALLBACK_REVIEWS: ClientReview[] = [
  {
    id: 'review-001',
    name: 'Ali Hamza',
    email: 'john@example.com',
    company: 'AKH Developers',
    role: 'CEO',
    content: 'Excellent service! The data analysis project was completed on time and exceeded our expectations.',
    rating: 5,
    approved: true,
    submittedDate: '2025-01-10',
    approvedDate: '2024-01-10',
  },
  {
    id: 'review-1773844629389',
    name: 'Alisha Nadeem',
    email: 'alishanadeem690@gmail.com',
    company: 'DataSciByKashi',
    role: 'Co Founder',
    content: 'Working with Kashif was an excellent experience. He demonstrated strong expertise in data science, from data cleaning and analysis to building accurate machine learning models. The project was delivered on time, with clear documentation and insightful visualizations. His ability to translate complex data into meaningful insights really stood out. Highly recommended for any data-related work.',
    rating: 5,
    approved: true,
    submittedDate: '2026-03-18',
    approvedDate: '2026-03-18',
  },
];

// This function returns fallback reviews for server-side rendering
// The reviews page component will fetch updated reviews from the API on the client side
export const getApprovedReviews = (): ClientReview[] => {
  return FALLBACK_REVIEWS;
};

// Helper function to get a review by ID
export const getReviewById = (id: string): ClientReview | undefined => {
  return FALLBACK_REVIEWS.find((review) => review.id === id);
};


