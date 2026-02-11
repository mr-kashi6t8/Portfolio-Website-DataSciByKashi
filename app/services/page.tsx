'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { services, pricingTiers } from '@/lib/data/services';
import { fadeIn, staggerContainer, staggerItem } from '@/lib/utils/animations';
import * as Icons from 'lucide-react';

export default function ServicesPage() {
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
              <span className="gradient-text">Data Science Services</span> I Provide
            </motion.h1>
            <motion.p variants={staggerItem} className="text-xl text-slate-600 dark:text-slate-300 mb-6">
              End-to-end, production-ready solutions tailored to your business needs analytics, ML models, dashboards, and more.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Button href="/contact" variant="primary" size="lg">
                Discuss Your Project
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
        {/* TikTok / Social Proof Section */}
  <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
    <div className="container-custom">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={staggerItem}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
        >
          My <span className="gradient-text">TikTok</span> Journey
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="text-lg text-slate-600 dark:text-slate-300 mb-8"
        >
          I share practical data science insights, tutorials, and project walkthroughs on TikTok. Join thousands of learners following my journey in turning data into impactful solutions.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* TikTok Profile Card */}
          <Card hover className="p-6 flex flex-col items-center">
            <img
              src="/images/WhatsApp Image 2026-02-10 at 11.42.51 PM.jpeg"
              alt="TikTok Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
              @datascibykashi
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-center">
              Data science tips, ML tutorials, and practical analytics projects.
            </p>
            <Button
              href="https://www.tiktok.com/@datascibykashi"
              variant="primary"
              size="md"
              target="_blank"
            >
              Visit TikTok
            </Button>
          </Card>

          {/* Optional TikTok Highlights */}
          <Card hover className="p-6 flex flex-col items-center">
            <div className="text-4xl font-bold gradient-text mb-2">1.49M</div>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-center">
              Total Views
            </p>
            <div className="text-4xl font-bold gradient-text mb-2">12.1K</div>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-center">
              Followers
            </p>
            <Button
              href="https://www.tiktok.com/@datascibykashi"
              variant="outline"
              size="md"
              target="_blank"
            >
              Follow Me
            </Button>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Box;
              return (
                <motion.div key={service.id} variants={staggerItem}>
                  <Card hover className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-6">
                        <IconComponent className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                            <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700 text-center">
                      <div className="text-sm text-slate-500 dark:text-slate-500 mb-1">Starting from</div>
                      <div className="text-2xl font-bold gradient-text">{service.pricing.starter}</div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
            <motion.div variants={staggerItem} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Flexible <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Select a package designed to suit your project size and budget. Transparent, scalable, and tailored.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier) => (
                <motion.div key={tier.id} variants={staggerItem}>
                  <Card className={`p-8 h-full relative ${tier.highlighted ? 'border-2 border-primary-500 shadow-xl scale-105' : ''}`}>
                    {tier.highlighted && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{tier.description}</p>
                      <div className="mb-1">
                        <span className="text-4xl font-bold gradient-text">{tier.price}</span>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-500">{tier.priceDetails}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant={tier.highlighted ? 'primary' : 'outline'} size="lg" fullWidth>
                      {tier.cta}
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.div variants={staggerItem} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                How I <span className="gradient-text">Deliver</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                A structured, end-to-end process ensuring quality, clarity, and results.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { step: '01', title: 'Discovery & Planning', description: 'Understanding your goals, data, and requirements to create a tailored solution.' },
                { step: '02', title: 'Data Analysis & Exploration', description: 'Deep dive into your data to uncover patterns, insights, and opportunities.' },
                { step: '03', title: 'Development & Implementation', description: 'Building ML models, dashboards, or analytics solutions using best practices.' },
                { step: '04', title: 'Testing & Optimization', description: 'Rigorous testing and refinement to ensure accuracy, performance, and usability.' },
                { step: '05', title: 'Deployment & Support', description: 'Seamless deployment with documentation, monitoring, and ongoing support.' },
              ].map((process, idx) => (
                <motion.div key={idx} variants={staggerItem}>
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl font-bold gradient-text flex-shrink-0">{process.step}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{process.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{process.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Turn Data into Decisions?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Let’s discuss your project and how I can deliver actionable insights and deployable solutions.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
