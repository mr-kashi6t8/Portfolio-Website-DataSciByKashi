'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getAllCertifications, getFeaturedCertifications } from '@/lib/data/certifications';
import { fadeIn, staggerContainer, staggerItem } from '@/lib/utils/animations';

export default function CertificationsPage() {
  const allCertifications = getAllCertifications();
  const featuredCertifications = getFeaturedCertifications();

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
              <span className="gradient-text">Certifications</span> & Credentials
            </motion.h1>
            <motion.p variants={staggerItem} className="text-xl text-slate-600 dark:text-slate-300">
              Professional certifications and credentials earned through continuous learning and development
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Certifications */}
      {featuredCertifications.length > 0 && (
        <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                Featured <span className="gradient-text">Certifications</span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredCertifications.map((cert) => (
                <motion.div key={cert.id} variants={staggerItem}>
                  <Card hover className="h-full flex flex-col overflow-hidden">
                    {/* Certificate Image */}
                    <div className="w-full h-64 bg-gradient-to-br from-primary-400 to-secondary-400 relative overflow-hidden group flex items-center justify-center">
                      <img
                        src={cert.certificateImage}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // If image fails to load, show gradient background
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity"
                        whileHover={{ scale: 1 }}
                      >
                        <a
                          href={cert.certificateImage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-slate-100 transition-colors"
                          title="View Certificate"
                        >
                          <ExternalLink className="w-6 h-6 text-slate-900" />
                        </a>
                      </motion.div>
                    </div>

                    {/* Certificate Details */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {cert.title}
                      </h3>

                      <Badge variant="primary" size="sm" className="w-fit mb-4">
                        {cert.issuer}
                      </Badge>

                      {cert.description && (
                        <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                          {cert.description}
                        </p>
                      )}

                      <div className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
                        <p>
                          <span className="font-semibold">Issued:</span> {new Date(cert.issueDate).toLocaleDateString()}
                        </p>
                        {cert.expiryDate && (
                          <p>
                            <span className="font-semibold">Expires:</span> {new Date(cert.expiryDate).toLocaleDateString()}
                          </p>
                        )}
                        {cert.credentialId && (
                          <p>
                            <span className="font-semibold">Credential ID:</span> {cert.credentialId}
                          </p>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          href={cert.certificateImage}
                          size="sm"
                          variant="primary"
                          icon={ExternalLink}
                          className="flex-1"
                          target="_blank"
                        >
                          View
                        </Button>
                        {cert.credentialUrl && (
                          <Button
                            href={cert.credentialUrl}
                            size="sm"
                            variant="outline"
                            icon={ExternalLink}
                            target="_blank"
                          >
                            Verify
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* All Certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              All <span className="gradient-text">Certifications</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {allCertifications.map((cert) => (
              <motion.div key={cert.id} variants={staggerItem}>
                <div className="p-6 rounded-xl glass hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Certificate Thumbnail */}
                    <div className="w-32 h-32 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary-400 to-secondary-400 overflow-hidden">
                      <img
                        src={cert.certificateImage}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Certificate Info */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {cert.title}
                        </h3>
                        {cert.featured && (
                          <Badge variant="accent" size="sm">
                            Featured
                          </Badge>
                        )}
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        <span className="font-semibold">Issuer:</span> {cert.issuer}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <p>
                          <span className="font-semibold">Issued:</span> {new Date(cert.issueDate).toLocaleDateString()}
                        </p>
                        {cert.expiryDate && (
                          <p>
                            <span className="font-semibold">Expires:</span> {new Date(cert.expiryDate).toLocaleDateString()}
                          </p>
                        )}
                        {cert.credentialId && (
                          <p>
                            <span className="font-semibold">ID:</span> {cert.credentialId}
                          </p>
                        )}
                      </div>

                      {cert.description && (
                        <p className="text-slate-600 dark:text-slate-400 mt-3">
                          {cert.description}
                        </p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 md:flex-col flex-shrink-0">
                      <Button
                        href={cert.certificateImage}
                        size="sm"
                        variant="primary"
                        icon={Download}
                        target="_blank"
                      >
                        Download
                      </Button>
                      {cert.credentialUrl && (
                        <Button
                          href={cert.credentialUrl}
                          size="sm"
                          variant="outline"
                          icon={ExternalLink}
                          target="_blank"
                        >
                          Verify
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {allCertifications.length === 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-center py-12"
            >
              <p className="text-xl text-slate-600 dark:text-slate-400">
                No certifications added yet. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
