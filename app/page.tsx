'use client';

import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { fadeIn } from '@/lib/utils/animations';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Featured Projects Teaser */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Explore my latest machine learning models, interactive dashboards, and data science solutions
            </p>
            <Button href="/portfolio" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              <span className="gradient-text">Services</span> I Offer
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              From data cleaning to advanced machine learning models and interactive dashboards
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: 'Machine Learning',
                  description: 'Custom ML models tailored to your business needs',
                },
                {
                  title: 'Interactive Dashboards',
                  description: 'Beautiful, functional dashboards with Streamlit',
                },
                {
                  title: 'Data Analysis',
                  description: 'Transform raw data into actionable insights',
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl glass hover:shadow-xl transition-all"
                  whileHover={{ y: -8 }}
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <Button href="/services" variant="outline" size="lg">
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="relative rounded-2xl overflow-hidden p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 opacity-90" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help you unlock insights from your data and build powerful ML solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary" size="lg" className="bg-white text-primary-600 hover:bg-slate-100">
                  Get In Touch
                </Button>
                <Button href="/portfolio" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
