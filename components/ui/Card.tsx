import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  glass = false,
  padding = 'md',
}) => {
  const baseClasses = 'rounded-lg border transition-all duration-300';

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const glassClasses = glass
    ? 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-slate-200/50 dark:border-slate-700/50'
    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700';

  const hoverClasses = hover
    ? 'hover:shadow-xl hover:scale-105 hover:-translate-y-1 cursor-pointer'
    : 'shadow-md';

  const classes = `${baseClasses} ${paddingClasses[padding]} ${glassClasses} ${hoverClasses} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={classes}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={classes}>{children}</div>;
};
