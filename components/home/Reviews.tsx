'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { fadeIn, staggerContainer, staggerItem } from '@/lib/utils/animations';
import type { ClientReview } from '@/lib/types';

const HOMEPAGE_REVIEWS: Array<Pick<ClientReview, 'id' | 'name' | 'company' | 'role' | 'content' | 'rating'>> = [
  {
    id: 'review-001',
    name: 'Ali Hamza',
    company: 'AKH Developers',
    role: 'CEO',
    content: 'Excellent service! The data analysis project was completed on time and exceeded our expectations.',
    rating: 5,
  },
  {
    id: 'review-1773844629389',
    name: 'Alisha Nadeem',
    company: 'DataSciByKashi',
    role: 'Co Founder',
    content: 'Working with Kashif was an excellent experience. He demonstrated strong expertise in data science and delivered exceptional results.',
    rating: 5,
  },
];

export const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<HOMEPAGE_REVIEWS[0][]>(HOMEPAGE_REVIEWS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          throw new Error('Failed to load reviews');
        }

        const data = await response.json();
        const fetchedReviews = (data.reviews || []).slice(0, 3).map((review: any) => ({
          id: review.id,
          name: review.name,
          company: review.company || '',
          role: review.role || '',
          content: review.message,
          rating: review.rating,
        }));

        if (fetchedReviews.length > 0) {
          setReviews(fetchedReviews);
        }
      } catch (error) {
        console.error('Error fetching homepage reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  const visibleReviews = reviews.slice(0, 3);

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
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Take a look at testimonials from clients who have worked with me
          </p>
        </motion.div>

        {visibleReviews.length > 0 ? (
          <>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 mb-8"
            >
              {visibleReviews.map((review) => (
                <motion.div key={review.id} variants={staggerItem}>
                  <Card hover className="p-6 h-full flex flex-col">
                    {/* Rating */}
                    <div className="mb-4">
                      {renderStars(review.rating)}
                    </div>

                    {/* Review Quote */}
                    <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow italic">
                      "{review.content}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                      <p className="font-bold text-slate-900 dark:text-white">
                        {review.name}
                      </p>
                      {review.company && (
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {review.company}
                        </p>
                      )}
                      {review.role && (
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {review.role}
                        </p>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-center"
            >
              <Button href="/reviews" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                View All Reviews
              </Button>
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
            <MessageSquare className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-4" />
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              No reviews yet. Be the first to share your experience!
            </p>
            <Button href="/reviews" variant="primary" size="lg">
              Share a Review
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
