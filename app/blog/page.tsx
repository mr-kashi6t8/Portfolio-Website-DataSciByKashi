'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { blogPosts, getAllTags } from '@/lib/data/blog-posts';
import { fadeIn, staggerContainer, staggerItem } from '@/lib/utils/animations';

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const allTags = ['All', ...getAllTags()];

  const filteredPosts =
    selectedTag === 'All'
      ? blogPosts
      : blogPosts.filter((post) =>
          post.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
        );

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
              Data Science <span className="gradient-text">Insights</span>
            </motion.h1>
            <motion.p variants={staggerItem} className="text-xl text-slate-600 dark:text-slate-300">
              Tutorials, tips, and insights on data science, machine learning, and Python
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tags Filter */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            key={selectedTag}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={staggerItem}>
                <Link href={`/blog/${post.slug}`}>
                  <Card hover className="p-6 h-full flex flex-col">
                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="mb-3">
                        <Badge variant="success" size="sm">
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="gray" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                No posts found for this tag.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}