import { Project } from '../types';

export const projects: Project[] = [
  {
  id: 'health-insurance-predictor',
  title: 'Health Insurance Claims Prediction System',
  description: 'Advanced ML system predicting claim status (Approved/Denied/Pending) and claim amounts using XGBoost and classification models.',
  longDescription: 'Built a comprehensive health insurance claims prediction platform with dual prediction capabilities: claim status classification and amount regression. Features interactive Streamlit dashboard with batch prediction, data analytics, and real-time model performance monitoring.',
  category: 'Machine Learning',
  image: '/images/projects/health-insurance.jpg',
  tags: ['Machine Learning', 'XGBoost', 'Healthcare', 'Predictive Analytics', 'Classification'],
  tools: ['Python', 'XGBoost', 'Scikit-learn', 'Streamlit', 'Pandas', 'Plotly', 'Joblib'],
  outcome: 'Dual prediction system with interactive analytics dashboard',
  metrics: [
    { label: 'Models Deployed', value: '2' },
    { label: 'Prediction Types', value: 'Status + Amount' },
    { label: 'Features', value: 'Batch Processing' },
  ],
  githubUrl: 'https://github.com/mr-kashi6t8/Health-Insurance-Claim-System',
  featured: true,
  date: '2024-12',
},
{
  id: 'credit-risk-delinquency',
  title: 'Financial Delinquency Predictor - Credit Risk Modeling',
  description: 'Early risk indicator system predicting credit delinquency using behavioral patterns, credit utilization, and payment history.',
  longDescription: 'Developed during Tata internship - a sophisticated credit risk modeling system analyzing customer financial behavior across multiple months. Uses Logistic Regression and Decision Trees with GridSearchCV optimization to identify early warning signs of loan delinquency.',
  category: 'Machine Learning',
  image: '/images/projects/credit-risk.jpg',
  tags: ['Credit Risk', 'Financial Modeling', 'Predictive Analytics', 'Classification'],
  tools: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'GridSearchCV', 'Logistic Regression'],
  outcome: 'Early delinquency detection with hyperparameter-tuned models',
  metrics: [
    { label: 'Risk Factors', value: '15+' },
    { label: 'Models', value: '2 Optimized' },
    { label: 'Timeline', value: '5-Month Analysis' },
  ],
  githubUrl: 'https://github.com/mr-kashi6t8/Financial-Delinquency-Predictor-Tata',
  featured: true,
  date: '2024-11',
},
{
  id: 'car-price-prediction',
  title: 'Car Price Prediction with Feature Engineering',
  description: 'ML application predicting car selling prices using Linear Regression with 96% R² accuracy and comprehensive residual analysis.',
  longDescription: 'Developed a high-accuracy car price prediction model using Linear Regression and advanced feature engineering. The Streamlit application visualizes actual vs predicted prices, performs residual analysis, and provides insights into pricing factors from car specifications.',
  category: 'Machine Learning',
  image: '/images/projects/car-price.jpg',
  tags: ['Regression', 'Feature Engineering', 'Predictive Modeling', 'Visualization'],
  tools: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'Linear Regression'],
  outcome: '96% R² accuracy with visual analytics',
  metrics: [
    { label: 'R² Score', value: '96%' },
    { label: 'Model Type', value: 'Linear Regression' },
    { label: 'Features', value: 'Residual Analysis' },
  ],
  githubUrl: 'https://github.com/mr-kashi6t8/Car-Price-Prediction-Using-LR',
  featured: true,
  date: '2024-10',
},
{
  id: 'electricity-bill-predictor',
  title: 'Smart Electricity Bill Predictor',
  description: 'IoT-inspired ML application predicting daily electricity consumption and costs based on appliance usage and environmental factors.',
  longDescription: 'Created an intelligent electricity consumption prediction system using Linear Regression that analyzes appliance usage patterns (fans, lights, ACs, refrigerator, water pump), temperature, and time of day to forecast daily and monthly electricity bills with interactive visualizations.',
  category: 'Predictive Modeling',
  image: '/public/images/electricity-predictor.jpg',
  tags: ['IoT Analytics', 'Regression', 'Energy Management', 'Cost Optimization'],
  tools: ['Python', 'Scikit-learn', 'Streamlit', 'Matplotlib', 'Seaborn'],
  outcome: 'Daily & monthly bill predictions with usage optimization insights',
  metrics: [
    { label: 'Appliances Tracked', value: '5+' },
    { label: 'Factors', value: '7' },
    { label: 'Predictions', value: 'Daily + Monthly' },
  ],
  githubUrl: 'https://github.com/mr-kashi6t8/Smart-Electricity-Bill-Predictor',
  featured: false,
  date: '2024-09',
},
{
  id: 'ecommerce-sql-analytics',
  title: 'E-commerce Analytics: SQL & Python Integration',
  description: 'Advanced SQL query project analyzing customer behavior, revenue trends, retention rates, and YoY growth with Python visualization.',
  longDescription: 'Comprehensive data analysis project combining complex SQL queries (moving averages, cumulative sales, retention rates) with Python for e-commerce insights. Covers basic to advanced analytics including revenue ranking, customer segmentation, and year-over-year growth calculations.',
  category: 'Analytics',
  image: '/images/projects/ecommerce-analytics.jpg',
  tags: ['SQL', 'Data Analytics', 'Python', 'E-commerce', 'Business Intelligence'],
  tools: ['SQL', 'Python', 'Pandas', 'Data Analysis'],
  outcome: '15+ analytical queries from basic to advanced complexity',
  metrics: [
    { label: 'Query Levels', value: '3 (Basic-Advanced)' },
    { label: 'Total Queries', value: '15+' },
    { label: 'Metrics', value: 'Retention, YoY, Revenue' },
  ],
  githubUrl: 'https://github.com/mr-kashi6t8/Sql-And-Python-Combo-Project',
  featured: false,
  date: '2024-08',
},
];

// Get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

// Get projects by category
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

// Get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Get all categories
export const getProjectCategories = (): string[] => {
  return [...new Set(projects.map(project => project.category))];
};
