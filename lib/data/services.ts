import { Service, PricingTier } from '../types';

export const services: Service[] = [
  {
    id: 'data-cleaning-visualization',
    title: 'Data Cleaning & Visualization',
    description: 'Transform messy data into clean, actionable insights with professional visualizations and exploratory data analysis.',
    icon: 'BarChart3',
    features: [
      'Data cleaning and preprocessing',
      'Handling missing values and outliers',
      'Statistical analysis and EDA',
      'Interactive visualizations',
      'Custom dashboards',
      'Data quality reports',
    ],
    pricing: {
      starter: '$10-50',
      professional: '$-50-150',
      enterprise: '$250+',
    },
  },
  {
    id: 'ml-model-development',
    title: 'Machine Learning Model Development',
    description: 'Build predictive models tailored to your business needs using state-of-the-art machine learning algorithms.',
    icon: 'Brain',
    features: [
      'Custom ML model development',
      'Model training and optimization',
      'Feature engineering',
      'Model evaluation and validation',
      'Deployment-ready solutions',
      'Documentation and support',
    ],
    pricing: {
      starter: '$50-100',
      professional: '$100-200',
      enterprise: '$400+',
    },
  },
  {
    id: 'streamlit-dashboards',
    title: 'Interactive Streamlit Dashboards',
    description: 'Create powerful, interactive dashboards that turn your data into compelling visual stories.',
    icon: 'LineChart',
    features: [
      'Custom dashboard development',
      'Real-time data updates',
      'Interactive filters and controls',
      'Responsive design',
      'Deployment assistance',
      'User authentication (optional)',
    ],
    pricing: {
      starter: '$100-200',
      professional: '$200-300',
      enterprise: '$500+',
    },
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics & AI Projects',
    description: 'Leverage AI and predictive analytics to forecast trends, optimize operations, and drive data-driven decisions.',
    icon: 'TrendingUp',
    features: [
      'Time series forecasting',
      'Predictive modeling',
      'Classification and regression',
      'Deep learning solutions',
      'Model interpretation',
      'Business insights reports',
    ],
    pricing: {
      starter: '$120-200',
      professional: '$200-500',
      enterprise: '$500+',
    },
  },
  {
    id: 'consultation-mentorship',
    title: 'Consultation & Mentorship',
    description: 'Get expert guidance on your data science journey, project architecture, or career development.',
    icon: 'Users',
    features: [
      '1-on-1 consultation sessions',
      'Project review and feedback',
      'Career guidance',
      'Technical mentorship',
      'Code review',
      'Best practices training',
    ],
    pricing: {
      starter: '$10/hour',
      professional: '$25/hour',
      enterprise: 'Custom packages',
    },
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small projects and basic data analysis needs',
    price: '$80',
    priceDetails: 'Starting from',
    features: [
      'Basic data cleaning & visualization',
      'Simple ML models',
      'Static dashboard',
      '1 week delivery',
      'Email support',
      '1 revision included',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for complex ML models and interactive dashboards',
    price: '$150-200',
    priceDetails: 'Starting from',
    features: [
      'Advanced data analysis & EDA',
      'Custom ML model development',
      'Interactive Streamlit dashboard',
      '2-3 weeks delivery',
      'Priority support',
      '3 revisions included',
      'Deployment assistance',
      'Documentation provided',
    ],
    highlighted: true,
    cta: 'Most Popular',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'End-to-end solutions for businesses and research projects',
    price: '$1000+',
    priceDetails: 'Starting from',
    features: [
      'Full-stack data science solution',
      'Multiple ML models & APIs',
      'Custom dashboards with auth',
      'Flexible timeline',
      'Dedicated support',
      'Unlimited revisions',
      'CI/CD deployment',
      'Ongoing maintenance',
      '1 month free support',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];

// Get service by ID
export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

// Get pricing tier by ID
export const getPricingTierById = (id: string): PricingTier | undefined => {
  return pricingTiers.find(tier => tier.id === id);
};
