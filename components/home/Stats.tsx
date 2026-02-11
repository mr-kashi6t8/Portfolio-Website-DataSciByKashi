'use client';

import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer, staggerItem } from '@/lib/utils/animations';

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix = '', label, description }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: 'easeOut' });
    }
  }, [inView, count, value]);

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="p-8 rounded-xl glass text-center"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
        {label}
      </div>
      {description && (
        <div className="text-sm text-slate-600 dark:text-slate-400">
          {description}
        </div>
      )}
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  const stats = [
    {
      value: 20,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Across multiple domains',
    },
    {
      value: 5,
      suffix: '+',
      label: 'Core Skills',
      description: 'ML, Data Analysis, Dashboards',
    },
    {
      value: 2,
      suffix: '+',
      label: 'Years Experience',
      description: 'In Data Science',
    },
    {
      value: 92,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Average project rating',
    },
  ];

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Delivering <span className="gradient-text">Results That Matter</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Track record of successful projects and satisfied clients
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
