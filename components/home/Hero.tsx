'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { fadeIn, slideFromBottom, staggerContainer, staggerItem } from '@/lib/utils/animations';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
              Founder | DataSciByKashi
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={staggerItem}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Transforming Data into{' '}
            <span className="gradient-text">Actionable Insights</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
          >
            I help businesses, startups, and researchers make data-driven decisions through{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              AI, Machine Learning , Deep Learning
            </span>
            , and{' '}
            <span className="font-semibold text-secondary-600 dark:text-secondary-400">
              Interactive Dashboards
            </span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Hire Me for Your Project
            </Button>
            <Button
              href="/portfolio"
              variant="outline"
              size="lg"
            >
              View My Work
            </Button>
          </motion.div>

          {/* Tech Stack Icons/Badges */}
          <motion.div variants={staggerItem} className="mb-8">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'Python',
                'Scikit-learn',
                'TensorFlow',
                'Pandas',
                'NumPy',
                'Streamlit',
                'SQL',
                'Next.js',
              ].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          {/* Resume Download */}
<motion.div
  variants={staggerItem}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="inline-block pointer-events-auto"
>
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group inline-flex items-center gap-2
      rounded-xl px-5 py-2.5
      bg-gradient-to-r from-primary-500 to-primary-700
      text-white font-semibold
      shadow-lg shadow-primary-500/30
      transition-all duration-300
      hover:shadow-xl hover:shadow-primary-500/40
      cursor-pointer select-none
      pointer-events-auto
    "
  >
    <Download size={18} />
    <span className="select-none">Download Resume</span>
  </a>
</motion.div>


        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
