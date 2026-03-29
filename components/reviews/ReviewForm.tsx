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
  const [success, setSuccess] = useState(false);

  React.useEffect(() => {
    // Check if we were redirected back from FormSubmit with success
    const params = new URLSearchParams(window.location.search);
    if (params.get('submitted') === 'true') {
      setSuccess(true);
    }
  }, []);

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

        <form action="https://formsubmit.co/el/neteni" method="POST" className="space-y-6">

          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                placeholder="Acme Inc"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Your Role (Optional)
              </label>
              <input
                type="text"
                name="role"
                placeholder="Project Manager"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                <label key={star} className="cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    defaultChecked={star === 5}
                    className="hidden"
                  />
                  <Star
                    className={`w-8 h-8 transition-transform hover:scale-110 ${
                      star <= 5
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-slate-300 dark:text-slate-600'
                    }`}
                  />
                </label>
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
              placeholder="Share your experience working with me. What was the project about? How did I help? Any specific accomplishments?"
              rows={5}
              required
              minLength={10}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Minimum 10 characters required
            </p>
          </div>

          {/* Hidden FormSubmit fields */}
          <input type="hidden" name="_subject" value="New Review submitted on your portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://datascibykashi.vercel.app/reviews?submitted=true" />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            icon={Send}
            className="w-full"
          >
            Submit Review
          </Button>
        </form>

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
          By submitting this review, you agree that your feedback may be displayed on my website.
        </p>
      </Card>
    </motion.div>
  );
}
