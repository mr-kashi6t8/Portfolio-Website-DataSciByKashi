import { ClientReview } from '@/lib/types';

// This function will be called on the server to fetch approved reviews from Firestore
export const getApprovedReviews = async (): Promise<ClientReview[]> => {
  try {
    // Fetch from our API which connects to Firestore
    const response = await fetch('http://localhost:3000/api/reviews', {
      method: 'GET',
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Failed to fetch reviews from API');
      // Return empty array as fallback
      return [];
    }

    const data = await response.json();
    return (data.reviews || []).map((review: any) => ({
      id: review.id,
      name: review.name,
      email: review.email,
      company: review.company || '',
      role: review.role || '',
      content: review.message, // Map 'message' from API to 'content' for compatibility
      rating: review.rating,
      approved: review.approved,
      submittedDate: review.submittedDate.split('T')[0], // Format date
      approvedDate: review.submittedDate.split('T')[0],
    }));
  } catch (error) {
    console.error('Error fetching reviews:', error);
    // Return fallback reviews if API fails
    return [
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
  }
};

// Helper function to get a review by ID
export const getReviewById = (id: string): Promise<ClientReview | undefined> => {
  return Promise.resolve(undefined);
};


