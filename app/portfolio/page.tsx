'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { projects, getProjectCategories } from '@/lib/data/projects';
import { fadeIn, staggerContainer, staggerItem } from '@/lib/utils/animations';
import { Project } from '@/lib/types';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = ['All', ...getProjectCategories()];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
              My <span className="gradient-text">Portfolio</span>
            </motion.h1>
            <motion.p variants={staggerItem} className="text-xl text-slate-600 dark:text-slate-300">
              Explore my data science projects, machine learning models, and interactive dashboards
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={selectedCategory}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={staggerItem}>
                <Card hover className="p-6 h-full flex flex-col">
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg mb-4 flex items-center justify-center text-white text-6xl font-bold">
                    {project.title.charAt(0)}
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <Badge variant="primary" size="sm">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.slice(0, 3).map((tool) => (
                      <Badge key={tool} variant="gray" size="sm">
                        {tool}
                      </Badge>
                    ))}
                    {project.tools.length > 3 && (
                      <Badge variant="gray" size="sm">
                        +{project.tools.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Outcome */}
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-4">
                    {project.outcome}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                    >
                      View Details
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Want a Similar Project?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              I can build custom ML models, dashboards, and data science solutions tailored to your needs
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request a Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        size="lg"
      >
        {selectedProject && (
          <div>
            {/* Project Image Placeholder */}
            <div className="w-full h-64 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg mb-6 flex items-center justify-center text-white text-8xl font-bold">
              {selectedProject.title.charAt(0)}
            </div>

            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="primary">{selectedProject.category}</Badge>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {new Date(selectedProject.date).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            {/* Metrics */}
            {selectedProject.metrics && selectedProject.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mb-6">
                {selectedProject.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tools & Technologies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool) => (
                  <Badge key={tool} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Outcome
              </h4>
              <p className="text-green-600 dark:text-green-400 font-semibold">
                {selectedProject.outcome}
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {selectedProject.githubUrl && (
                <Button
                  href={selectedProject.githubUrl}
                  variant="outline"
                  icon={Github}
                  iconPosition="left"
                >
                  View Code
                </Button>
              )}
              {selectedProject.demoUrl && (
                <Button
                  href={selectedProject.demoUrl}
                  variant="primary"
                  icon={ExternalLink}
                  iconPosition="left"
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
