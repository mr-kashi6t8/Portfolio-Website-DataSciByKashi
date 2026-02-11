'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { fadeIn, staggerContainer, staggerItem } from '@/lib/utils/animations';

export default function DashboardsPage() {
  const dashboards = [
    {
      id: 'spam-detector',
      title: 'Spam Message Detector',
      description: 'Detect whether messages are spam or not using a trained machine learning model.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NLP'],
      features: ['Spam Classification', 'Text Preprocessing', 'Model Accuracy Metrics'],
      url: 'https://hl4dar2gksdvxkagbci6zs.streamlit.app/',
      status: 'Live',
    },
    {
      id: 'electricity-bill-predictor',
      title: 'Smart Electricity Bill Predictor',
      description: 'Predict your daily electricity usage and bill using a trained ML model (Linear Regression).',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
      features: ['Daily Usage Forecast', 'Bill Estimation', 'Historical Data Trends', 'Interactive Dashboard'],
      url: 'https://smart-electricity-bill-predictor-abknfve3asaqq4dnzfuhlx.streamlit.app/',
      status: 'Live',
    },
    {
      id: 'car-price-prediction',
      title: 'Car Price Prediction System',
      description: 'Estimate car prices using a Linear Regression model trained on historical sales data.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Visualization'],
      features: ['Price Estimation', 'Feature Analysis', 'Predictive Modeling', 'Data Insights'],
      url: '',
      status: 'Coming Soon',
    },
  ];

  const statusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'live':
        return 'success';
      case 'coming soon':
        return 'secondary';
      default:
        return 'gray';
    }
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
              Interactive <span className="gradient-text">Dashboards</span>
            </motion.h1>
            <motion.p variants={staggerItem} className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Explore live data science dashboards built with Streamlit, showcasing real-time analytics and ML models
            </motion.p>
            <motion.div variants={staggerItem}>
              <Button href="/contact" variant="primary" size="lg">
                Order Custom Dashboard
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dashboards Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {dashboards.map((dashboard) => (
              <motion.div key={dashboard.id} variants={staggerItem}>
                <Card
                  hover
                  className="p-6 h-full flex flex-col transition-transform duration-300 hover:scale-105"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>

                  {/* Status Badge */}
                  <div className="mb-3">
                    <Badge variant={statusColor(dashboard.status)} size="sm">
                      {dashboard.status}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {dashboard.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                    {dashboard.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {dashboard.technologies.map((tech) => (
                        <Badge key={tech} variant="primary" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 max-h-24 overflow-y-auto pr-2">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Features:</p>
                    <ul className="space-y-1">
                      {dashboard.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0 mt-1"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  {dashboard.url ? (
                    <Button
                      href={dashboard.url}
                      variant="primary"
                      size="md"
                      icon={ExternalLink}
                      iconPosition="right"
                      fullWidth
                    >
                      View Dashboard
                    </Button>
                  ) : (
                    <Button
                      href="/contact"
                      variant="outline"
                      size="md"
                      fullWidth
                    >
                      Request Access
                    </Button>
                  )}
                </Card>
              </motion.div>
            ))}
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
              Need a Custom Dashboard?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              I build interactive, data-driven dashboards tailored to your specific needs using Streamlit and modern data visualization tools
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
