'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { fadeIn } from '@/lib/utils/animations';

interface ReviewFormProps {
  onSuccess?: () => void;
}

export default function ReviewForm({ onSuccess }: ReviewFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    rating: 5,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name');
      setLoading(false);
      return;
    }

    if (!formData.email.trim()) {
      setError('Please enter your email');
      setLoading(false);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setError('Please write a review with at least 10 characters');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit review');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
        rating: 5,
      });

      // Call onSuccess callback if provided
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      console.error('Review submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Card className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mb-4 flex justify-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500" />
          </motion.div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Thank You!
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Your review has been submitted successfully! The site administrator will review it and add it to the page shortly.
          </p>
          <Button onClick={() => window.location.reload()} variant="primary">
            Return to Reviews
          </Button>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Card className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Share Your Review
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Help others by sharing your experience working with me. Your review will be published after approval.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 flex gap-3"
            >
              <p className="text-red-700 dark:text-red-300">{error}</p>
            </motion.div>
          )}

          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                disabled={loading}
              />
            </div>
          </div>

          {/* Company & Role */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Company (Optional)
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Acme Inc"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Your Role (Optional)
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="Project Manager"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                disabled={loading}
              />
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Your Rating *
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  disabled={loading}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= formData.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-slate-300 dark:text-slate-600'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Review Content */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Your Review *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Share your experience working with me. What was the project about? How did I help? Any specific accomplishments?"
              rows={5}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              disabled={loading}
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Minimum 10 characters required
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            icon={Send}
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Submitting...' : 'Submit Review'}
          </Button>
        </form>

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
          By submitting this review, you agree that your feedback may be displayed on my website.
        </p>
      </Card>
    </motion.div>
  );
}
