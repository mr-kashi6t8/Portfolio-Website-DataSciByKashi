'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, GraduationCap, Video } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { skillsByCategory } from '@/lib/data/skills';
import { fadeIn, staggerContainer, staggerItem } from '@/lib/utils/animations';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            >
              About <span className="gradient-text">Me</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-xl text-slate-600 dark:text-slate-300 mb-8"
            >
              I design data-driven solutions that turn complex datasets into clear insights,
              scalable machine learning models, and decision-ready dashboards.
            </motion.p>

            <motion.div variants={staggerItem}>
              <Button
                href="/resume.pdf"
                variant="primary"
                size="lg"
                icon={Download}
                iconPosition="left"
              >
                View Professional Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">My Journey</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                I'm <strong>M Kashif Sultan</strong>, a data science professional focused on transforming
                raw data into insights that drive smarter decisions. My work sits at the intersection
                of <strong>data analysis, machine learning</strong>, and real-world problem solving,
                helping clients and businesses unlock the true value of their data.
              </p>

              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Over the years, I've built projects spanning predictive modeling, sentiment analysis,
                and interactive dashboards. I also share knowledge and practical tips on
                <strong> TikTok</strong> to educate and inspire others about data science, Python,
                and machine learning best practices. <a href="https://www.tiktok.com/@datascibykashi?is_from_webapp=1&sender_device=pc" className="text-primary-600 dark:text-primary-400 underline">Follow my TikTok here</a>.
              </p>

              <p className="text-slate-600 dark:text-slate-300">
                My approach is impact-driven: I focus on creating actionable, scalable, and understandable
                solutions. Whether improving predictions, uncovering hidden patterns, or deploying
                end-to-end ML workflows, I ensure every project delivers real value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Education & Foundation
            </h2>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                    Bachelor of Science in Computer Science
                  </h3>

                  <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    COMSATS University Islamabad, Sahiwal Campus
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                    Strong academic grounding supporting applied data science and ML work
                  </p>

                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-slate-300">
                      <strong>Core:</strong> DSA, Databases, OOP, Software Engineering
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      <strong>Focus:</strong> Data Science, Machine Learning, AI, Visualization
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={staggerItem}
              className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center"
            >
              Skills & Capabilities
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="max-w-3xl mx-auto text-center text-slate-600 dark:text-slate-300 mb-10"
            >
              A production-focused toolkit built to solve real-world data problems end to end.
            </motion.p>

            <div className="grid gap-8 max-w-5xl mx-auto">
              {skillsByCategory.map((category) => (
                <motion.div key={category.category} variants={staggerItem}>
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      {category.category}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill.id}
                          size="md"
                          variant={
                            skill.level >= 90
                              ? 'primary'
                              : skill.level >= 80
                              ? 'secondary'
                              : 'gray'
                          }
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={staggerItem}
              className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center"
            >
              What I Deliver
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Production-Ready Solutions',
                  description:
                    'Clean, scalable ML pipelines and deployable models designed for real-world usage.',
                },
                {
                  title: 'Insight-First Thinking',
                  description:
                    'I prioritize business understanding and decision-making over model complexity.',
                },
                {
                  title: 'End-to-End Delivery',
                  description:
                    'From raw data to dashboards, APIs, and deployment, I own the full lifecycle.',
                },
              ].map((item, idx) => (
                <motion.div key={idx} variants={staggerItem}>
                  <Card hover className="p-6 h-full">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Let’s Build Something Data-Driven
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Need insights, ML solutions, or interactive dashboards? I help turn data into
              decisions that move the needle.
            </p>

            <Button href="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}