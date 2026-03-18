import { ClientReview } from '@/lib/types';

export const clientReviews: ClientReview[] = [
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
    "id": "review-1773844629389",
    "name": "Alisha Nadeem",
    "email": "alishanadeem690@gmail.com",
    "company": "DataSciByKashi",
    "role": "Co Founder",
    "content": "Working with Kashif was an excellent experience. He demonstrated strong expertise in data science, from data cleaning and analysis to building accurate machine learning models. The project was delivered on time, with clear documentation and insightful visualizations. His ability to translate complex data into meaningful insights really stood out. Highly recommended for any data-related work.",
    "rating": 5,
    "approved": true,
    "submittedDate": "2026-03-18",
    "approvedDate": "2026-03-18"
  }
  // Add approved reviews here
  // Copy them from /public/data/pending-reviews.json after approving
];

// Helper function to get approved reviews
export const getApprovedReviews = (): ClientReview[] => {
  return clientReviews.filter((review) => review.approved);
};

// Helper function to get a review by ID
export const getReviewById = (id: string): ClientReview | undefined => {
  return clientReviews.find((review) => review.id === id);
};

// Helper function to get all approved reviews sorted by date
export const getAllReviews = (): ClientReview[] => {
  return clientReviews.sort((a, b) =>
    new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime()
  );
};

/*
==============================================================================
HOW TO MANAGE PENDING REVIEWS:
==============================================================================

Pending reviews are automatically saved to: /public/data/pending-reviews.json

When a client submits a review through the form:
1. The review is stored in /public/data/pending-reviews.json
2. Check that file to see all pending reviews awaiting your approval

TO APPROVE A REVIEW:
1. Open /public/data/pending-reviews.json
2. Find the review you want to approve
3. Copy the review object
4. Paste it into the clientReviews array above
5. Change "approved": false to "approved": true
6. Add "approvedDate": "YYYY-MM-DD" (today's date)
7. Delete it from pending-reviews.json
8. Save this file

EXAMPLE:
Before (in pending-reviews.json):
{
  "id": "review-1234567890",
  "name": "Jane Smith",
  "email": "jane@company.com",
  "company": "Acme Corp",
  "role": "Manager",
  "content": "Great work on the project!",
  "rating": 5,
  "approved": false,
  "submittedDate": "2024-03-18"
}

After (in reviews.ts clientReviews array):
{
  id: 'review-1234567890',
  name: 'Jane Smith',
  email: 'jane@company.com',
  company: 'Acme Corp',
  role: 'Manager',
  content: 'Great work on the project!',
  rating: 5,
  approved: true,
  submittedDate: '2024-03-18',
  approvedDate: '2024-03-18',
},

Then delete it from pending-reviews.json
==============================================================================
*/

