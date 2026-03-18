'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Star, Send } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { getApprovedReviews } from '@/lib/data/reviews';
import { fadeIn, staggerContainer, staggerItem } from '@/lib/utils/animations';
import ReviewForm from '@/components/reviews/ReviewForm';

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

export default function ReviewsPage() {
  const approvedReviews = getApprovedReviews();
  const [showForm, setShowForm] = useState(false);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300 dark:text-slate-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 variants={staggerItem} className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Client <span className="gradient-text">Reviews</span>
            </motion.h1>
            <motion.p variants={staggerItem} className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              See what clients have to say about working with me
            </motion.p>
            {!showForm && (
              <motion.div variants={staggerItem}>
                <Button
                  onClick={() => setShowForm(true)}
                  variant="primary"
                  size="lg"
                  icon={Send}
                >
                  Share Your Review
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Review Submission Form Modal */}
      {showForm && (
        <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4"
              >
                <Button
                  onClick={() => setShowForm(false)}
                  variant="outline"
                  size="sm"
                >
                  ← Back to Reviews
                </Button>
              </motion.div>
              <ReviewForm onSuccess={() => setShowForm(false)} />
            </div>
          </div>
        </section>
      )}

      {/* Reviews Grid */}
      <section className={`section-padding ${showForm ? '' : ''}`}>
        <div className="container-custom">
          {approvedReviews.length > 0 ? (
            <>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 text-center">
                  What Clients Say
                </h2>
                <p className="text-center text-slate-600 dark:text-slate-400">
                  {approvedReviews.length} verified review{approvedReviews.length !== 1 ? 's' : ''}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {approvedReviews.map((review) => (
                  <motion.div key={review.id} variants={staggerItem}>
                    <Card hover className="p-6 h-full flex flex-col">
                      {/* Rating */}
                      <div className="mb-4">
                        {renderStars(review.rating)}
                      </div>

                      {/* Review Content */}
                      <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow italic">
                        "{review.content}"
                      </p>

                      {/* Reviewer Info */}
                      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">
                            {review.name}
                          </p>
                          {review.role && (
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {review.role}
                            </p>
                          )}
                          {review.company && (
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {review.company}
                            </p>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                          {new Date(review.submittedDate).toLocaleDateString()}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-center py-12"
            >
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                Be the first to share your experience!
              </p>
              {!showForm && (
                <Button
                  onClick={() => setShowForm(true)}
                  variant="primary"
                  size="lg"
                  icon={Send}
                >
                  Submit a Review
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
