import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
  ],
  services: [
    { label: 'Data Analysis', href:'/services#data-analysis' },
    { label: 'Machine Learning', href: '/services#ml' },
    { label: 'Dashboards', href: '/services#dashboards' },
    { label: 'Consulting', href: '/services#consulting' },
  ],
  resources: [
    { label: 'Contact', href: '/contact' },
    { label: 'Dashboards', href: '/dashboards' },
    { label: 'Resume', href: '/resume.pdf', external: true },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/mr-kashi6t8', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/kashif-sultan-0a5989294', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mk695870@gmail.com', label: 'Email' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 dark:text-white">
                  M. Kashif Sultan
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Data Scientist & ML Engineer
                </div>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-sm">
              Transforming data into actionable insights through AI, Machine Learning, and Interactive Dashboards.
            </p>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Harappa, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:mk695870@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                  mk695870@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+923047992833" className="hover:text-primary-600 dark:hover:text-primary-400">
                  +92 304 7992833
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-slate-600 dark:text-slate-400">
              © {currentYear} M. Kashif Sultan. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
